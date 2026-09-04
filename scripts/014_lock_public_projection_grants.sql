-- Supabase schema defaults can grant more than SELECT to newly created views.
-- Public projections are intentionally read-only.

begin;

revoke all on table public.public_initiatives from public, anon, authenticated, service_role;
revoke all on table public.public_partners from public, anon, authenticated, service_role;
revoke all on table public.public_countries from public, anon, authenticated, service_role;

grant select on table public.public_initiatives to anon, authenticated, service_role;
grant select on table public.public_partners to anon, authenticated, service_role;
grant select on table public.public_countries to anon, authenticated, service_role;

commit;
