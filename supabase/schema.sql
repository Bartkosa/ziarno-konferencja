-- ============================================================
--  NWoW 2027 — schemat bazy portalu uczestnika (Supabase / Postgres)
--  Uruchom w Supabase → SQL Editor. Idempotentny (można powtarzać).
-- ============================================================

create extension if not exists pgcrypto;

-- ---------- tabele ----------
create table if not exists public.participants (
  id                  uuid primary key default gen_random_uuid(),
  email               text not null unique,
  first_name          text not null default '',
  last_name           text not null default '',
  org                 text default '',
  role                text default '',
  country             text default '',
  package             text not null default 'full' check (package in ('full','conference','conference_lunch')),
  paid                boolean not null default false,
  paid_at             timestamptz,
  diet                text default '',
  networking_consent  boolean not null default false,
  lang                text not null default 'pl' check (lang in ('pl','en')),
  options             jsonb not null default '{}'::jsonb,   -- {school_visits, gocook, garden, mass, tour}
  photo_consent       boolean not null default false,
  tally_submission_id text unique,
  created_at          timestamptz not null default now(),
  updated_at          timestamptz not null default now()
);
create index if not exists participants_email_lower on public.participants (lower(email));

create table if not exists public.sessions (
  id        text primary key,               -- np. 's1-lama-pl'
  block     int  not null check (block in (1,2,3)),
  title     text not null,
  speaker   text not null default '',
  lang      text not null default '',
  room      text default '',
  capacity  int  not null default 20,
  sort      int  not null default 0
);

create table if not exists public.session_picks (
  participant_id uuid not null references public.participants(id) on delete cascade,
  session_id     text not null references public.sessions(id) on delete cascade,
  created_at     timestamptz not null default now(),
  primary key (participant_id, session_id)
);

create table if not exists public.admins (
  email text primary key
);

alter table public.participants add column if not exists photo_consent boolean not null default false;

-- ---------- pomocnicze ----------
create or replace function public.current_participant_id() returns uuid
language sql stable security definer set search_path = public as $$
  select id from public.participants where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
$$;

create or replace function public.is_admin() returns boolean
language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins where lower(email) = lower(coalesce(auth.jwt() ->> 'email', '')))
$$;

create or replace function public.touch_updated_at() returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end $$;
drop trigger if exists participants_touch on public.participants;
create trigger participants_touch before update on public.participants for each row execute function public.touch_updated_at();

-- uczestnik nie może sam zmienić pakietu/płatności/e-maila
create or replace function public.guard_participant_update() returns trigger language plpgsql as $$
begin
  if not public.is_admin() and auth.role() <> 'service_role' then
    new.email := old.email; new.package := old.package; new.paid := old.paid; new.paid_at := old.paid_at;
    new.first_name := old.first_name; new.last_name := old.last_name; new.tally_submission_id := old.tally_submission_id;
  end if;
  return new;
end $$;
drop trigger if exists participants_guard on public.participants;
create trigger participants_guard before update on public.participants for each row execute function public.guard_participant_update();

-- ---------- widoki ----------
create or replace view public.session_counts as
  select s.id, s.block, s.title, s.speaker, s.lang, s.room, s.capacity, s.sort,
         (select count(*) from public.session_picks p where p.session_id = s.id)::int as taken
  from public.sessions s order by s.block, s.sort, s.id;

create or replace view public.networking as
  select first_name, last_name, org, role, country, email
  from public.participants where networking_consent = true and paid = true;

-- ---------- wybór sesji: jedna na blok, limit miejsc, atomowo ----------
create or replace function public.pick_session(p_session text) returns void
language plpgsql security definer set search_path = public as $$
declare
  v_me uuid := public.current_participant_id();
  v_block int; v_cap int; v_taken int; v_pkg text; v_deadline date := '2027-04-23';
begin
  if v_me is null then raise exception 'auth'; end if;
  select package into v_pkg from public.participants where id = v_me;
  if v_pkg <> 'full' then raise exception 'package'; end if;
  if current_date > v_deadline and not public.is_admin() then raise exception 'deadline'; end if;
  select block, capacity into v_block, v_cap from public.sessions where id = p_session for update;
  if v_block is null then raise exception 'no_session'; end if;
  select count(*) into v_taken from public.session_picks where session_id = p_session;
  if v_taken >= v_cap then raise exception 'full'; end if;
  delete from public.session_picks sp using public.sessions s
    where sp.session_id = s.id and sp.participant_id = v_me and s.block = v_block;
  insert into public.session_picks (participant_id, session_id) values (v_me, p_session);
end $$;

-- ---------- RLS ----------
alter table public.participants  enable row level security;
alter table public.sessions      enable row level security;
alter table public.session_picks enable row level security;
alter table public.admins        enable row level security;

drop policy if exists participants_self_select on public.participants;
create policy participants_self_select on public.participants for select to authenticated
  using (id = public.current_participant_id() or public.is_admin());
drop policy if exists participants_self_update on public.participants;
create policy participants_self_update on public.participants for update to authenticated
  using (id = public.current_participant_id() or public.is_admin())
  with check (id = public.current_participant_id() or public.is_admin());

drop policy if exists sessions_read on public.sessions;
create policy sessions_read on public.sessions for select to anon, authenticated using (true);

drop policy if exists picks_self on public.session_picks;
create policy picks_self on public.session_picks for select to authenticated
  using (participant_id = public.current_participant_id() or public.is_admin());
drop policy if exists picks_self_delete on public.session_picks;
create policy picks_self_delete on public.session_picks for delete to authenticated
  using (participant_id = public.current_participant_id() or public.is_admin());
-- insert wyłącznie przez pick_session() (security definer)

drop policy if exists admins_self on public.admins;
create policy admins_self on public.admins for select to authenticated using (public.is_admin());

grant select on public.session_counts to anon, authenticated;
grant select on public.networking to authenticated;
grant execute on function public.pick_session(text) to authenticated;

-- ---------- dane startowe ----------
insert into public.admins (email) values ('nwow@ziarno.edu.pl') on conflict do nothing;  -- TODO: e-maile organizatorek

insert into public.sessions (id, block, title, speaker, lang, room, capacity, sort) values
  ('s1-lama-pl', 1, 'Co sprawia, że tutoring naprawdę działa?', 'Dobrochna Lama', 'PL', 'Sala 1', 20, 1),
  ('s1-calvo-es', 1, 'Tożsamość szkoły edukacji spersonalizowanej', 'Lucia Calvo', 'ES · tłum. PL', 'Sala 2', 20, 2),
  ('s1-kowal-pl', 1, 'Szkoła, którą buduje się latami — Źródło i Wierchy', 'Stanisław Kowal', 'PL', 'Sala 3', 20, 3),
  ('s2-lama-en', 2, 'What makes tutoring actually work?', 'Dobrochna Lama', 'EN', 'Sala 1', 20, 1),
  ('s2-calvo-es', 2, 'Identity of a personalized-education school (part 2)', 'Lucia Calvo', 'ES · EN interpretation', 'Sala 2', 20, 2),
  ('s2-kowal-pl', 2, 'Współpraca z rodzicami: od informowania do partnerstwa', 'Stanisław Kowal', 'PL', 'Sala 3', 20, 3),
  ('s3-lama-pl', 3, 'Rozmowa tutorska — warsztat praktyczny', 'Dobrochna Lama', 'PL', 'Sala 1', 20, 1),
  ('s3-calvo-es', 3, 'Formación del carácter: casos prácticos', 'Lucia Calvo', 'ES · tłum. PL', 'Sala 2', 20, 2),
  ('s3-kowal-en', 3, 'Founding a school: lessons learned', 'Stanisław Kowal', 'EN', 'Sala 3', 20, 3)
on conflict (id) do update set title = excluded.title, speaker = excluded.speaker, lang = excluded.lang, room = excluded.room, capacity = excluded.capacity, sort = excluded.sort;
