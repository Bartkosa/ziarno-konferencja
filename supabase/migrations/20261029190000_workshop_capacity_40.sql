-- Limit pakietu pełnego (warsztaty): 80 osób → 2 sesje równoległe w bloku × 40 miejsc (ustalenia z 29.10.2026)
alter table public.sessions alter column capacity set default 40;
update public.sessions set capacity = 40;
