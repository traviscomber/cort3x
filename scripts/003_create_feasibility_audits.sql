-- Create table for feasibility audit submissions
create table if not exists public.feasibility_audits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  
  -- Project Info
  project_name text not null,
  project_description text not null,
  country text not null,
  category text not null,
  
  -- Market Context
  target_market text,
  competitors text,
  unique_value text,
  market_size text,
  
  -- Financial Overview
  budget_range text,
  funding_status text,
  revenue_model text,
  timeline_months integer,
  
  -- Team
  team_size text,
  key_expertise jsonb,
  
  -- Scoring (calculated after admin review)
  market_viability_score integer,
  sustainability_score integer,
  financial_score integer,
  regulatory_score integer,
  implementation_score integer,
  total_score integer,
  
  -- Status
  status text default 'pending' check (status in ('pending', 'reviewing', 'completed', 'rejected')),
  payment_status text default 'pending' check (payment_status in ('pending', 'paid', 'refunded')),
  payment_amount numeric default 100.00,
  
  -- Metadata
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  reviewed_at timestamp with time zone,
  reviewed_by uuid references auth.users(id)
);

-- Enable RLS
alter table public.feasibility_audits enable row level security;

-- Policies
create policy "Users can view own audits"
  on public.feasibility_audits for select
  using (auth.uid() = user_id);

create policy "Users can create own audits"
  on public.feasibility_audits for insert
  with check (auth.uid() = user_id);

create policy "Users can update own pending audits"
  on public.feasibility_audits for update
  using (auth.uid() = user_id and status = 'pending');

create policy "Admins can manage all audits"
  on public.feasibility_audits for all
  using (
    exists (
      select 1 from public.users
      where id = auth.uid() and role = 'admin'
    )
  );

-- Create index for faster queries
create index feasibility_audits_user_id_idx on public.feasibility_audits(user_id);
create index feasibility_audits_status_idx on public.feasibility_audits(status);
create index feasibility_audits_created_at_idx on public.feasibility_audits(created_at desc);
