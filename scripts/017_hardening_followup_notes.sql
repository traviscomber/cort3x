-- No-op documentation marker for the next security hardening pass.
-- Deferred intentionally from the access-boundary release:
-- 1. Set immutable search_path on legacy trigger/search functions after compatibility review.
-- 2. Evaluate moving the vector extension out of public schema.
-- 3. Enable leaked-password protection in Supabase Auth settings.
-- 4. Revisit public projection SECURITY DEFINER RPC exposure if projections move to a dedicated public-data schema/table.

select 1;
