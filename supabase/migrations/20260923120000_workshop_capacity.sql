-- Limit uczestników konferencji podniesiony do 100 → warsztaty po 35 miejsc (3 sesje × 35 = 105 na blok)
alter table public.sessions alter column capacity set default 35;
update public.sessions set capacity = 35 where capacity < 35;
