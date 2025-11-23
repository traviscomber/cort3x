# Final Go-Live Steps

You are almost there! The system is code-complete and production-ready. 
Execute these final manual steps to launch safely.

## 1. 🛡️ Database Security (REQUIRED)
**You must run this SQL manually in your Supabase Dashboard.**
We cannot automate this step for security reasons.

1. Go to **Supabase Dashboard** -> **SQL Editor**
2. Paste and run this script to enable Row Level Security (RLS):

\`\`\`sql
-- Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own data
CREATE POLICY "Users can view own data" ON public.users
  FOR SELECT USING (auth.uid() = id);

-- Allow users to update their own data
CREATE POLICY "Users can update own data" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Allow admins to view all data
CREATE POLICY "Admins can view all users" ON public.users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
\`\`\`

## 2. 🔑 Environment Variables (REQUIRED)
Ensure these variables are set in your Vercel Project Settings (Production environment):

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anon Key
- `SUPABASE_SERVICE_ROLE_KEY`: Your Supabase Service Role Key (Keep secret!)
- `OPENAI_API_KEY`: Your OpenAI API Key
- `KV_REST_API_URL`: Upstash Redis URL
- `KV_REST_API_TOKEN`: Upstash Redis Token
- `NEXT_PUBLIC_SITE_URL`: Your production domain (e.g., `https://impax-cort3x.com`)

## 3. 🚦 Final Checks
1. **Visit `/api/health`**: It should return `{"status":"healthy"}`.
2. **Check `/sitemap.xml`**: It should list all your pages.
3. **Check `/robots.txt`**: It should allow crawling of public pages.
4. **Test Sign Up**: Create a real user account in production.

## 4. 🎉 Launch!
Once these steps are done, you are ready to share your URL with the world.
Good luck with Impax Cort3x!
