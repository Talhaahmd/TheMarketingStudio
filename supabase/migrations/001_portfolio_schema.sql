-- ============================================================
-- TABLE: projects (one row = one case study / portfolio piece)
-- ============================================================
create table public.projects (
  id              uuid primary key default gen_random_uuid(),
  slug            text unique not null,
  sort_order      integer not null default 0,
  -- ── LISTING PAGE fields (Work grid) ──────────────────────
  title           text not null,
  tagline         text,
  category        text not null,
  tags            text[] default '{}',
  thumbnail_url   text not null,
  hover_video_url text,
  is_featured     boolean not null default false,
  -- ── HERO section ─────────────────────────────────────────
  hero_image_url     text,
  hero_video_url     text,
  hero_caption       text,
  -- ── PROJECT META sidebar ─────────────────────────────────
  client          text,
  client_url      text,
  services        text[] default '{}',
  deliverables    text[] default '{}',
  year            integer,
  duration        text,
  role            text,
  project_url     text,
  awards          text[] default '{}',
  -- ── CASE STUDY BODY ──────────────────────────────────────
  overview        text,
  challenge       text,
  approach        text,
  outcome         text,
  -- ── MEDIA GALLERY ────────────────────────────────────────
  -- { "type": "image"|"video", "url": "...", "caption": "...", "full_width": true|false }
  gallery         jsonb default '[]',
  -- ── STATS / RESULTS ──────────────────────────────────────
  -- { "value": "300%", "label": "Engagement Increase" }
  stats           jsonb default '[]',
  -- ── TESTIMONIAL ──────────────────────────────────────────
  testimonial_quote   text,
  testimonial_author  text,
  testimonial_role    text,
  testimonial_avatar  text,
  -- ── RELATED / NAVIGATION ─────────────────────────────────
  related_slugs   text[] default '{}',
  -- ── SEO ──────────────────────────────────────────────────
  meta_title      text,
  meta_description text,
  -- ── TIMESTAMPS ───────────────────────────────────────────
  published       boolean not null default true,
  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Auto-update updated_at
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger projects_updated_at
  before update on public.projects
  for each row execute procedure public.set_updated_at();

-- Indexes
create index idx_projects_slug        on public.projects (slug);
create index idx_projects_sort_order  on public.projects (sort_order);
create index idx_projects_published   on public.projects (published);
create index idx_projects_category    on public.projects (category);

-- Row Level Security
alter table public.projects enable row level security;

create policy "Public can view published projects"
  on public.projects for select
  using (published = true);
