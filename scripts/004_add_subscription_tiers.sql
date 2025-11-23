-- Add subscription tier support to users table
alter table public.users add column if not exists subscription_tier text default 'free' check (subscription_tier in ('free', 'priority', 'professional', 'enterprise'));
alter table public.users add column if not exists subscription_status text default 'active' check (subscription_status in ('active', 'cancelled', 'expired', 'paused'));
alter table public.users add column if not exists subscription_start_date timestamp with time zone;
alter table public.users add column if not exists subscription_end_date timestamp with time zone;
alter table public.users add column if not exists monthly_audits_used integer default 0;
alter table public.users add column if not exists monthly_audits_limit integer default 3; -- FREE tier gets 3 audits/month
alter table public.users add column if not exists api_key text;
alter table public.users add column if not exists stripe_customer_id text;
alter table public.users add column if not exists stripe_subscription_id text;

-- Add tier metadata to feasibility_audits
alter table public.feasibility_audits add column if not exists tier text default 'free' check (tier in ('free', 'priority'));
alter table public.feasibility_audits add column if not exists report_url text;
alter table public.feasibility_audits add column if not exists expires_at timestamp with time zone;

-- Create deliverables table for Professional & Enterprise tiers
create table if not exists public.deliverables (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  audit_id uuid references public.feasibility_audits(id) on delete cascade,
  
  type text not null check (type in ('pitch_deck', 'business_plan', 'financial_model', 'mockup', 'other')),
  title text not null,
  description text,
  file_url text,
  version integer default 1,
  status text default 'in_progress' check (status in ('in_progress', 'review', 'approved', 'revision_requested')),
  
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  delivered_at timestamp with time zone
);

alter table public.deliverables enable row level security;

create policy "Users can view own deliverables"
  on public.deliverables for select
  using (auth.uid() = user_id);

create policy "Admins can manage deliverables"
  on public.deliverables for all
  using (
    exists (
      select 1 from public.users
      where id = auth.uid() and role = 'admin'
    )
  );

-- Create coaching sessions table for Enterprise tier
create table if not exists public.coaching_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  coach_id uuid references auth.users(id),
  
  scheduled_at timestamp with time zone not null,
  duration_minutes integer default 60,
  status text default 'scheduled' check (status in ('scheduled', 'completed', 'cancelled', 'no_show')),
  meeting_url text,
  notes text,
  action_items jsonb,
  
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.coaching_sessions enable row level security;

create policy "Users can view own sessions"
  on public.coaching_sessions for select
  using (auth.uid() = user_id);

create policy "Coaches can view their sessions"
  on public.coaching_sessions for select
  using (auth.uid() = coach_id);

-- Create indexes
create index deliverables_user_id_idx on public.deliverables(user_id);
create index deliverables_audit_id_idx on public.deliverables(audit_id);
create index coaching_sessions_user_id_idx on public.coaching_sessions(user_id);
create index coaching_sessions_scheduled_at_idx on public.coaching_sessions(scheduled_at);
