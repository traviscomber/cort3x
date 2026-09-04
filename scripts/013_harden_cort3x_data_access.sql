-- Cort3x data access boundary
-- Public marketing data is exposed only through sanitized projection views/functions.
-- Internal evidence and operational tables require authentication.
-- Sensitive writes require admin/service-role access, except narrowly scoped RPCs.

begin;

create or replace function public.is_cort3x_admin()
returns boolean
language sql
stable
security definer
set search_path = public, pg_temp
as $$
  select
    coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false)
    or exists (
      select 1
      from public.users u
      where u.id = auth.uid()
        and u.role = 'admin'
    );
$$;

revoke all on function public.is_cort3x_admin() from public;
grant execute on function public.is_cort3x_admin() to authenticated, service_role;

create or replace function public.update_initiative_progress(
  p_initiative_id text,
  p_progress integer
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if auth.uid() is null then
    raise exception 'authentication required' using errcode = '42501';
  end if;

  if p_progress < 0 or p_progress > 100 then
    raise exception 'progress must be between 0 and 100' using errcode = '22023';
  end if;

  update public.initiatives
  set progress = p_progress,
      updated_at = now()
  where id = p_initiative_id;

  if not found then
    raise exception 'initiative not found' using errcode = 'P0002';
  end if;
end;
$$;

revoke all on function public.update_initiative_progress(text, integer) from public;
grant execute on function public.update_initiative_progress(text, integer) to authenticated;

create or replace function public.log_welcome_email(p_lead_id uuid)
returns uuid
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_log_id uuid;
begin
  if not exists (select 1 from public.leads l where l.id = p_lead_id) then
    raise exception 'lead not found' using errcode = 'P0002';
  end if;

  insert into public.email_automation_log (lead_id, email_type, status)
  values (p_lead_id, 'welcome_canvas', 'sent')
  returning id into v_log_id;

  return v_log_id;
end;
$$;

revoke all on function public.log_welcome_email(uuid) from public;
grant execute on function public.log_welcome_email(uuid) to anon, authenticated, service_role;

-- Remove legacy policies from the tables being hardened.
do $$
declare
  r record;
begin
  for r in
    select schemaname, tablename, policyname
    from pg_policies
    where schemaname = 'public'
      and tablename = any(array[
        'initiatives',
        'documents',
        'partners',
        'countries',
        'knowledge_base',
        'discussions',
        'team_members',
        'documentation_standards',
        'email_automation_log'
      ])
  loop
    execute format('drop policy if exists %I on %I.%I', r.policyname, r.schemaname, r.tablename);
  end loop;
end $$;

alter table public.initiatives enable row level security;
alter table public.documents enable row level security;
alter table public.partners enable row level security;
alter table public.countries enable row level security;
alter table public.knowledge_base enable row level security;
alter table public.discussions enable row level security;
alter table public.team_members enable row level security;
alter table public.documentation_standards enable row level security;
alter table public.email_automation_log enable row level security;

-- Remove broad table privileges first. Projection views and constrained RPCs keep public flows working.
revoke all on table public.initiatives from anon, authenticated;
revoke all on table public.documents from anon, authenticated;
revoke all on table public.partners from anon, authenticated;
revoke all on table public.countries from anon, authenticated;
revoke all on table public.knowledge_base from anon, authenticated;
revoke all on table public.discussions from anon, authenticated;
revoke all on table public.team_members from anon, authenticated;
revoke all on table public.documentation_standards from anon, authenticated;
revoke all on table public.email_automation_log from anon, authenticated;

-- Authenticated internal reads.
grant select on table public.initiatives to authenticated;
grant select on table public.documents to authenticated;
grant select on table public.knowledge_base to authenticated;
grant select on table public.discussions to authenticated;
grant select on table public.team_members to authenticated;
grant select on table public.documentation_standards to authenticated;

create policy "Authenticated users can read initiatives"
on public.initiatives
for select
to authenticated
using (auth.uid() is not null);

create policy "Authenticated users can read documents"
on public.documents
for select
to authenticated
using (auth.uid() is not null);

create policy "Authenticated users can read knowledge base"
on public.knowledge_base
for select
to authenticated
using (auth.uid() is not null);

create policy "Authenticated users can read discussions"
on public.discussions
for select
to authenticated
using (auth.uid() is not null);

create policy "Authenticated users can read team members"
on public.team_members
for select
to authenticated
using (auth.uid() is not null);

create policy "Authenticated users can read documentation standards"
on public.documentation_standards
for select
to authenticated
using (auth.uid() is not null);

-- Admin-only base-table access for operational mutations and sensitive reference data.
grant select, insert, update, delete on table public.initiatives to authenticated;
grant select, insert, update, delete on table public.documents to authenticated;
grant select, insert, update, delete on table public.partners to authenticated;
grant select, insert, update, delete on table public.countries to authenticated;
grant select, insert, update, delete on table public.knowledge_base to authenticated;
grant select, insert, update, delete on table public.discussions to authenticated;
grant select, insert, update, delete on table public.team_members to authenticated;
grant select, insert, update, delete on table public.documentation_standards to authenticated;
grant select, insert, update, delete on table public.email_automation_log to authenticated;

create policy "Admins can create initiatives"
on public.initiatives for insert to authenticated
with check (public.is_cort3x_admin());
create policy "Admins can update initiatives"
on public.initiatives for update to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());
create policy "Admins can delete initiatives"
on public.initiatives for delete to authenticated
using (public.is_cort3x_admin());

create policy "Admins can create documents"
on public.documents for insert to authenticated
with check (public.is_cort3x_admin());
create policy "Admins can update documents"
on public.documents for update to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());
create policy "Admins can delete documents"
on public.documents for delete to authenticated
using (public.is_cort3x_admin());

create policy "Admins can manage partners"
on public.partners for all to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

create policy "Admins can manage countries"
on public.countries for all to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

create policy "Admins can manage knowledge base"
on public.knowledge_base for all to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

create policy "Admins can manage discussions"
on public.discussions for all to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

create policy "Admins can manage team members"
on public.team_members for all to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

create policy "Admins can manage documentation standards"
on public.documentation_standards for all to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

create policy "Admins can manage email automation log"
on public.email_automation_log for all to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

-- Service role remains the only unrestricted backend writer.
grant all on table public.initiatives to service_role;
grant all on table public.documents to service_role;
grant all on table public.partners to service_role;
grant all on table public.countries to service_role;
grant all on table public.knowledge_base to service_role;
grant all on table public.discussions to service_role;
grant all on table public.team_members to service_role;
grant all on table public.documentation_standards to service_role;
grant all on table public.email_automation_log to service_role;

commit;
