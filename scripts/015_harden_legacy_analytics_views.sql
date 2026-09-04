-- Close legacy analytics views that predate the RLS boundary.
-- They remain available to authenticated dashboard users, but run as the caller.

begin;

alter view public.dashboard_summary set (security_invoker = true);
alter view public.document_statistics set (security_invoker = true);
alter view public.documentation_quality_dashboard set (security_invoker = true);
alter view public.initiative_performance set (security_invoker = true);
alter view public.initiatives_by_geography set (security_invoker = true);
alter view public.initiatives_progress_breakdown set (security_invoker = true);

revoke all on table public.dashboard_summary from public, anon, authenticated, service_role;
revoke all on table public.document_statistics from public, anon, authenticated, service_role;
revoke all on table public.documentation_quality_dashboard from public, anon, authenticated, service_role;
revoke all on table public.initiative_performance from public, anon, authenticated, service_role;
revoke all on table public.initiatives_by_geography from public, anon, authenticated, service_role;
revoke all on table public.initiatives_progress_breakdown from public, anon, authenticated, service_role;

grant select on table public.dashboard_summary to authenticated, service_role;
grant select on table public.document_statistics to authenticated, service_role;
grant select on table public.documentation_quality_dashboard to authenticated, service_role;
grant select on table public.initiative_performance to authenticated, service_role;
grant select on table public.initiatives_by_geography to authenticated, service_role;
grant select on table public.initiatives_progress_breakdown to authenticated, service_role;

-- Supabase default privileges granted EXECUTE directly to client roles when these functions were created.
-- Remove direct access for internal-only helpers and trigger functions.
revoke execute on function public.is_cort3x_admin() from public, anon;
revoke execute on function public.update_initiative_progress(text, integer) from public, anon;
revoke execute on function public.handle_new_user() from public, anon, authenticated;
revoke execute on function public.prevent_privilege_escalation() from public, anon, authenticated;

grant execute on function public.is_cort3x_admin() to authenticated, service_role;
grant execute on function public.update_initiative_progress(text, integer) to authenticated;

commit;
