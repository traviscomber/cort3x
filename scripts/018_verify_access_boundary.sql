-- Repeatable verification only. This file does not mutate data.

select
  c.relname as table_name,
  c.relrowsecurity as rls_enabled
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in (
    'initiatives', 'documents', 'partners', 'countries', 'knowledge_base',
    'discussions', 'team_members', 'documentation_standards', 'email_automation_log'
  )
order by c.relname;

select
  has_table_privilege('anon', 'public.initiatives', 'SELECT') as anon_initiatives_select,
  has_table_privilege('anon', 'public.initiatives', 'UPDATE') as anon_initiatives_update,
  has_table_privilege('anon', 'public.documents', 'SELECT') as anon_documents_select,
  has_table_privilege('anon', 'public.documents', 'DELETE') as anon_documents_delete,
  has_table_privilege('anon', 'public.email_automation_log', 'INSERT') as anon_email_log_insert,
  has_function_privilege('anon', 'public.update_initiative_progress(text,integer)', 'EXECUTE') as anon_progress_rpc,
  has_function_privilege('anon', 'public.log_welcome_email(uuid)', 'EXECUTE') as anon_welcome_rpc;
