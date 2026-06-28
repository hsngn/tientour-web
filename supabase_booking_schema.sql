-- ============================================================================
--  TIEN TOUR WEBSITE — Backend de réservation (Supabase / Postgres)
--  À coller dans Supabase > SQL Editor.  Le contenu marketing (tours, textes)
--  vit dans les fichiers Astro (SEO) ; cette base gère réservations & paiements.
-- ============================================================================
create extension if not exists pgcrypto;

-- TOURS : prix/dispo/activation (le slug correspond au fichier de contenu Astro)
create table public.tours (
  id            uuid primary key default gen_random_uuid(),
  slug          text unique not null,
  title         text not null,
  price_from    numeric not null,
  currency      text not null default 'EUR',
  duration_days int,
  active        boolean not null default true,
  created_at    timestamptz not null default now()
);

-- DISPONIBILITÉ : capacité par tour et par date
create table public.availability (
  id         uuid primary key default gen_random_uuid(),
  tour_slug  text not null references public.tours(slug) on delete cascade,
  date       date not null,
  capacity   int not null default 8,
  booked     int not null default 0,
  unique (tour_slug, date)
);

-- RÉSERVATIONS
create table public.bookings (
  id            uuid primary key default gen_random_uuid(),
  tour_slug     text not null references public.tours(slug),
  date          date,
  travelers     int not null default 1,
  option        text not null default 'easy_rider'
                check (option in ('easy_rider','self_drive','private','rental')),
  customer_name text not null,
  email         text,
  whatsapp      text,
  language      text not null default 'en',
  amount        numeric,
  currency      text not null default 'EUR',
  status        text not null default 'pending'
                check (status in ('pending','confirmed','paid','cancelled')),
  source        text,                       -- attribution (utm/ref)
  created_at    timestamptz not null default now()
);
create index on public.bookings (tour_slug);
create index on public.bookings (status);
alter table public.bookings add column if not exists message text;

-- PAIEMENTS (Stripe)
create table public.payments (
  id                 uuid primary key default gen_random_uuid(),
  booking_id         uuid references public.bookings(id) on delete cascade,
  stripe_session_id  text,
  stripe_payment_intent text,
  amount             numeric,
  currency           text default 'EUR',
  status             text not null default 'created'
                     check (status in ('created','paid','failed','refunded')),
  created_at         timestamptz not null default now()
);

-- AVIS (modérés avant publication)
create table public.reviews (
  id         uuid primary key default gen_random_uuid(),
  tour_slug  text references public.tours(slug) on delete set null,
  author     text not null,
  country    text,
  rating     int check (rating between 1 and 5),
  body       text,
  photo_url  text,
  approved   boolean not null default false,
  created_at timestamptz not null default now()
);

-- BLOG / GUIDE (multilingue : une ligne par langue)
create table public.blog_posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text not null,
  lang         text not null default 'en',
  title        text not null,
  excerpt      text,
  body         text,
  category     text,
  tags         text[],
  author       text,
  published_at timestamptz,
  unique (slug, lang)
);

-- ============================================================================
--  RLS : lecture publique du contenu ; écritures sensibles via service role
-- ============================================================================
alter table public.tours        enable row level security;
alter table public.availability enable row level security;
alter table public.bookings     enable row level security;
alter table public.payments     enable row level security;
alter table public.reviews      enable row level security;
alter table public.blog_posts   enable row level security;

-- Lecture publique (site)
create policy "public_read_tours"   on public.tours        for select using (active = true);
create policy "public_read_avail"   on public.availability for select using (true);
create policy "public_read_reviews" on public.reviews      for select using (approved = true);
create policy "public_read_blog"    on public.blog_posts   for select using (published_at is not null);

-- Réservation : tout visiteur peut créer une demande (insert), mais pas lire les autres
create policy "public_create_booking" on public.bookings for insert with check (true);

-- Tout le reste (update tours/prix, confirmer résa, paiements, modération avis,
-- édition blog) passe par la SERVICE ROLE KEY côté serveur (admin), qui
-- contourne la RLS. Ne jamais exposer cette clé côté client.
-- ============================================================================
