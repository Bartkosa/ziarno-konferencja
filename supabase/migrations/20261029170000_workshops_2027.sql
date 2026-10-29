-- Warsztaty 2027 wg ustaleń z 29.10.2026: Lucía Calvo (EN, ES), Dobrochna Lama (PL, EN — kultura pracy), Magda Tecław (PL, EN).
-- Stanisław Kowal prowadzi tylko wykład. Bloki i sale robocze — do podmiany po „wersji godzinowej” od organizatorki
-- (do tego czasu wybór warsztatów w panelu jest zamknięty: config.portal.workshopsOpen = false).
-- Usunięcie starych sesji kasuje też ich wybory (on delete cascade) — były tylko testowe.
delete from public.sessions where id in (
  's1-lama-pl', 's1-calvo-es', 's1-kowal-pl',
  's2-lama-en', 's2-calvo-es', 's2-kowal-pl',
  's3-lama-pl', 's3-calvo-es', 's3-kowal-en'
);

insert into public.sessions (id, block, title, speaker, lang, room, capacity, sort) values
  ('lama-pl',   1, 'Kultura pracy, która wydobywa najlepsze z ludzi — warsztat', 'Dobrochna Lama', 'PL', null, 35, 1),
  ('calvo-en',  1, 'Workshop — title coming soon',                              'Lucía Calvo',    'EN', null, 35, 2),
  ('teclaw-pl', 2, 'Kształtowanie kultury szkoły w praktyce',                   'Magda Tecław',   'PL', null, 35, 1),
  ('lama-en',   2, 'A work culture that brings out the best in people — workshop', 'Dobrochna Lama', 'EN', null, 35, 2),
  ('calvo-es',  3, 'Taller — título próximamente',                              'Lucía Calvo',    'ES', null, 35, 1),
  ('teclaw-en', 3, 'Shaping school culture in practice',                        'Magda Tecław',   'EN', null, 35, 2)
on conflict (id) do update set block = excluded.block, title = excluded.title, speaker = excluded.speaker, lang = excluded.lang, room = excluded.room, capacity = excluded.capacity, sort = excluded.sort;

-- Aneta Motyczyńska — adres służbowy (osoba kontaktowa konferencji)
insert into public.admins (email) values ('aneta.motyczynska@ziarno.edu.pl') on conflict do nothing;
