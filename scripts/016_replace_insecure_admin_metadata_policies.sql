-- user_metadata is user-editable and must not grant administrative access.
-- Reuse the Cort3x admin guard backed by app_metadata / protected public.users role.

begin;

drop policy if exists "Admins can manage all audits" on public.feasibility_audits;
create policy "Admins can manage all audits"
on public.feasibility_audits
for all
to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

drop policy if exists "Admins can manage deliverables" on public.deliverables;
create policy "Admins can manage deliverables"
on public.deliverables
for all
to authenticated
using (public.is_cort3x_admin())
with check (public.is_cort3x_admin());

commit;
