-- PRODUCTION FIX: Enable RLS on users table with proper non-recursive policies
-- This replaces script 006 which disabled RLS (security risk)

-- Step 1: Ensure all columns have proper defaults
ALTER TABLE public.users 
  ALTER COLUMN name DROP NOT NULL,
  ALTER COLUMN role DROP NOT NULL;

-- Step 2: Sync auth.users to public.users (handle existing users)
INSERT INTO public.users (id, email, name, role, subscription_tier, monthly_audits_used, monthly_audits_limit)
SELECT 
  au.id,
  au.email,
  COALESCE(au.raw_user_meta_data->>'name', split_part(au.email, '@', 1)),
  'user',
  'free',
  0,
  5
FROM auth.users au
ON CONFLICT (email) DO UPDATE SET
  id = EXCLUDED.id,
  name = COALESCE(EXCLUDED.name, public.users.name),
  updated_at = NOW();

-- Step 3: Drop ALL existing policies to avoid conflicts
DO $$ 
DECLARE
    r RECORD;
BEGIN
    FOR r IN (SELECT policyname FROM pg_policies WHERE tablename = 'users' AND schemaname = 'public')
    LOOP
        EXECUTE 'DROP POLICY IF EXISTS "' || r.policyname || '" ON public.users';
    END LOOP;
END $$;

-- Step 4: Enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Step 5: Create simple, non-recursive policies

-- Policy 1: Users can view their own data
CREATE POLICY "Users can view own profile"
ON public.users
FOR SELECT
USING (auth.uid() = id);

-- Fixed UPDATE policy - removed OLD references, users can only update name/metadata
-- Policy 2: Users can update their own data (limited fields only)
CREATE POLICY "Users can update own profile"
ON public.users
FOR UPDATE
USING (auth.uid() = id);
-- Note: Application logic should prevent users from changing role/subscription_tier
-- Or use a trigger to block those changes

-- Policy 3: Service role can do everything (for admin operations)
CREATE POLICY "Service role has full access"
ON public.users
FOR ALL
USING (auth.jwt() ->> 'role' = 'service_role');

-- Policy 4: Admins can view all users (no recursion - just check auth metadata)
CREATE POLICY "Admins can view all users"
ON public.users
FOR SELECT
USING (
  EXISTS (
    SELECT 1 FROM auth.users au
    WHERE au.id = auth.uid()
    AND au.raw_user_meta_data->>'role' = 'admin'
  )
);

-- Policy 5: Admins can update any user
CREATE POLICY "Admins can update all users"
ON public.users
FOR UPDATE
USING (
  EXISTS (
    SELECT 1 FROM auth.users au
    WHERE au.id = auth.uid()
    AND au.raw_user_meta_data->>'role' = 'admin'
  )
);

-- Added trigger to prevent users from escalating their own role/subscription
-- Step 6: Add protection trigger to prevent privilege escalation
CREATE OR REPLACE FUNCTION public.prevent_privilege_escalation()
RETURNS TRIGGER AS $$
BEGIN
  -- If not admin or service role, prevent changing role/subscription
  IF NOT EXISTS (
    SELECT 1 FROM auth.users au
    WHERE au.id = auth.uid()
    AND (
      au.raw_user_meta_data->>'role' = 'admin'
      OR auth.jwt() ->> 'role' = 'service_role'
    )
  ) THEN
    -- Keep original values for protected fields
    NEW.role = OLD.role;
    NEW.subscription_tier = OLD.subscription_tier;
    NEW.monthly_audits_limit = OLD.monthly_audits_limit;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS prevent_user_privilege_escalation ON public.users;
CREATE TRIGGER prevent_user_privilege_escalation
  BEFORE UPDATE ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.prevent_privilege_escalation();

-- Step 7: Create/update trigger for new auth users
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, name, role, subscription_tier, monthly_audits_used, monthly_audits_limit)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1)),
    COALESCE(NEW.raw_user_meta_data->>'role', 'user'),
    'free',
    0,
    5
  )
  ON CONFLICT (email) DO UPDATE SET
    id = EXCLUDED.id,
    name = COALESCE(EXCLUDED.name, public.users.name),
    role = COALESCE(EXCLUDED.role, public.users.role),
    updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Step 8: Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_subscription_tier ON public.users(subscription_tier);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);
CREATE INDEX IF NOT EXISTS idx_users_email ON public.users(email);
