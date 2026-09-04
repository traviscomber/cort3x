# Cort3x data access boundary — 2026-09-04

## Scope

This change hardens the production Supabase project used by Cort3x without changing canonical initiative or document data.

## Access model

- Anonymous users have no direct table privileges on internal initiatives, documents, partners, countries, knowledge base, discussions, team members, documentation standards, or email automation logs.
- Public marketing pages read only sanitized `public_initiatives`, `public_partners`, and `public_countries` projections.
- Authenticated users can read internal initiatives, documents, knowledge base, discussions, team members, and documentation standards through RLS.
- Base-table writes are admin/service-role only.
- Initiative progress uses the constrained `update_initiative_progress` RPC, limited to authenticated users and values from 0 to 100.
- Funnel email logging uses `log_welcome_email`, which can only create the fixed welcome-email log for an existing lead.
- Cron and tracking backends use the server-only service-role client.

## Database migrations applied

- `prepare_cort3x_rls_boundary`
- `add_public_data_projections`
- `harden_cort3x_data_access`
- `lock_public_projection_grants`
- `harden_legacy_analytics_views`
- `replace_insecure_admin_metadata_policies`

## Verification

- RLS enabled on all nine previously exposed operational tables.
- `anon` direct SELECT/UPDATE/DELETE on initiatives/documents: denied by privileges.
- `anon` direct INSERT into email automation log: denied.
- Public projections remain readable: 8 initiatives, 5 active partners, 3 countries at verification time.
- Simulated authenticated session can read 8 initiatives and 55 documents and is not treated as admin.
- Six legacy analytics views now run with `security_invoker = true` and are unavailable to anon.
- Supabase security advisor no longer reports disabled RLS, security-definer analytics views, or admin policies based on editable `user_metadata`.
- Vercel preview for branch head builds successfully with 43 routes.
- Anonymous browser smoke confirms public project cards render from sanitized projections, initiative public overview renders, and direct evidence-document access returns 404 without authentication.

## Remaining non-blocking advisor warnings

- Several legacy functions have mutable `search_path`.
- `vector` is installed in the public schema.
- leaked-password protection is disabled.
- Public projection RPCs and the constrained welcome-email RPC are intentionally callable by anon and therefore produce SECURITY DEFINER warnings.

These warnings should be handled in a separate hardening pass rather than broadening this release scope.
