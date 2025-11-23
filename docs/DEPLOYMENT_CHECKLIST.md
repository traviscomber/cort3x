# Production Deployment Checklist

Complete checklist before deploying Impax Cort3x to production.

## Pre-Deployment (Do This First)

### 1. Environment Variables
- [ ] All critical env vars set in Vercel (see ENVIRONMENT_VARIABLES.md)
- [ ] `NODE_ENV=production`
- [ ] `CRON_SECRET` set and documented securely
- [ ] All API keys are production keys (not dev/test)

### 2. Database (Supabase)
- [ ] Ejecutar SQL de RLS manualmente en Supabase SQL Editor (ver PRODUCTION_AUDIT.md)
- [ ] Verify RLS is enabled on all tables: `SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND rowsecurity = true;`
- [ ] Test database connection at `/api/health`
- [ ] Backup strategy configured (Supabase auto-backups enabled)
- [ ] Connection pooling enabled in Supabase settings

### 3. Redis (Upstash)
- [ ] Production Redis instance created
- [ ] Rate limiting tested with `/api/health`
- [ ] Eviction policy set to `allkeys-lru`
- [ ] Max memory configured (recommend 256MB minimum)

### 4. Security
- [ ] HTTPS enabled (automatic with Vercel)
- [ ] CORS configured correctly in API routes
- [ ] Rate limiting active (test with rapid requests)
- [ ] All console.log statements removed from production code
- [ ] Error messages don't expose sensitive data
- [ ] SQL injection protection via parameterized queries (using Supabase client)

### 5. Code Quality
- [ ] TypeScript builds without errors (`next build`)
- [ ] ESLint passes (`npm run lint`)
- [ ] No TODO/FIXME in critical paths
- [ ] Error boundaries in place (app/error.tsx, app/global-error.tsx)

## Deployment

### 6. Vercel Configuration
- [ ] Production domain configured
- [ ] Environment variables replicated to production
- [ ] Cron jobs configured (intelligent-update: Friday 2 AM UTC)
- [ ] Analytics enabled
- [ ] Speed Insights enabled

### 7. Monitoring Setup
- [ ] `/api/health` endpoint returns 200
- [ ] Logging system working (check Vercel logs)
- [ ] Error tracking working (trigger test error)
- [ ] Performance monitoring active

### 8. DNS & Domain
- [ ] Custom domain pointed to Vercel
- [ ] SSL certificate provisioned
- [ ] Redirects configured (www → non-www or vice versa)
- [ ] `NEXT_PUBLIC_SITE_URL` matches production domain

## Post-Deployment

### 9. Smoke Tests
- [ ] Homepage loads correctly
- [ ] User can sign up / log in
- [ ] Dashboard displays data
- [ ] Projects page loads
- [ ] Feasibility agent responds
- [ ] Document updates work
- [ ] Forms submit successfully

### 10. Performance Checks
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.5s
- [ ] No layout shifts (CLS < 0.1)
- [ ] Core Web Vitals passing

### 11. Monitoring Verification
- [ ] Check `/api/health` returns healthy status
- [ ] Verify Vercel deployment logs show no errors
- [ ] Confirm Supabase connection pool not exhausted
- [ ] Check Redis memory usage < 80%
- [ ] Review OpenAI API usage and costs

### 12. User Acceptance
- [ ] Test all user flows end-to-end
- [ ] Verify email notifications working
- [ ] Check mobile responsiveness
- [ ] Test error scenarios (invalid inputs, network errors)
- [ ] Verify rate limiting doesn't block legitimate users

## Ongoing Maintenance

### Daily
- [ ] Check `/api/health` endpoint
- [ ] Review Vercel logs for critical errors
- [ ] Monitor Vercel error rate

### Weekly
- [ ] Review Supabase query performance
- [ ] Check OpenAI API costs
- [ ] Review rate limiting metrics
- [ ] Check cron job execution logs

### Monthly
- [ ] Update dependencies (`npm outdated`)
- [ ] Review and rotate API keys if needed
- [ ] Analyze user feedback and errors
- [ ] Performance audit with Lighthouse
- [ ] Review and optimize database queries

## Rollback Plan

If issues arise after deployment:

1. **Immediate Rollback**
   \`\`\`bash
   # In Vercel dashboard, go to Deployments → Previous deployment → Promote to Production
   \`\`\`

2. **Identify Issue**
   - Check `/api/health` for service status
   - Review Vercel deployment logs
   - Review Supabase logs

3. **Fix Forward**
   - Make hotfix in new branch
   - Test locally
   - Deploy to preview
   - Promote to production

## Emergency Contacts

- Vercel Support: https://vercel.com/help
- Supabase Support: https://supabase.com/support
- OpenAI Support: https://help.openai.com/

## Success Criteria

Production is ready when:
- ✅ All checklist items completed
- ✅ `/api/health` returns healthy for 5 consecutive checks
- ✅ No errors in Vercel logs for 1 hour
- ✅ Test users can complete all major flows
- ✅ Monitoring and alerts functioning
- ✅ Performance metrics meet targets
