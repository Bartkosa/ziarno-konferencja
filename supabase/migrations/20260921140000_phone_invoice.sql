-- Telefon i "potrzebuję faktury" z formularza Tally (wcześniej pomijane przez webhook)
alter table public.participants add column if not exists phone text not null default '';
alter table public.participants add column if not exists invoice_requested boolean not null default false;

-- uczestnik nie może sam zmienić pakietu/płatności/e-maila/faktury
create or replace function public.guard_participant_update() returns trigger language plpgsql as $$
begin
  if not public.is_admin() and auth.role() <> 'service_role' then
    new.email := old.email; new.package := old.package; new.paid := old.paid; new.paid_at := old.paid_at;
    new.first_name := old.first_name; new.last_name := old.last_name; new.tally_submission_id := old.tally_submission_id;
    new.invoice_requested := old.invoice_requested;
  end if;
  return new;
end $$;
