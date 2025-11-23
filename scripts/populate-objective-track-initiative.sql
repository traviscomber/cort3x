-- Insert Indonesian Objective Track App Initiative and Documents
-- This script creates the initiative and all its documents

-- Insert the initiative
INSERT INTO initiatives (
  id,
  title,
  description,
  category,
  status,
  lead,
  country,
  progress,
  created_at,
  updated_at
) VALUES (
  'objective-track-app',
  'Indonesian Objective Track App',
  'A gamified life tracking application that helps Indonesians set, track, and achieve their personal and professional goals through culturally-relevant features and community support.',
  'personal-growth',
  'active',
  'Product Team',
  'Indonesia',
  35,
  NOW(),
  NOW()
) ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  updated_at = NOW();

-- Insert Document 1: Product Vision
INSERT INTO documents (
  id,
  initiative_id,
  title,
  description,
  category,
  tags,
  content,
  type,
  status,
  file_size,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid()::text,
  'objective-track-app',
  'Product Vision & Market Opportunity',
  'Comprehensive overview of the Indonesian Objective Track App vision, target market, and growth potential',
  'strategy',
  '["product-vision", "market-analysis", "indonesia", "personal-growth"]'::jsonb,
  '<h1>Indonesian Objective Track App: Product Vision & Market Opportunity</h1>

<h2>Executive Summary</h2>
<p>The Indonesian Objective Track App is a culturally-adapted gamified life tracking platform designed specifically for the Indonesian market. It combines goal-setting, habit tracking, and community features with Indonesian cultural values and local context.</p>

<h2>Market Opportunity</h2>
<h3>Target Market Size</h3>
<ul>
<li><strong>Primary Market:</strong> 75 million Indonesian smartphone users aged 18-45</li>
<li><strong>Secondary Market:</strong> 120 million total internet users in Indonesia</li>
<li><strong>Addressable Market:</strong> $2.8B personal development app market in Southeast Asia</li>
</ul>

<h3>Market Trends</h3>
<ul>
<li>Mobile-first population with 350M+ mobile connections</li>
<li>Growing middle class seeking self-improvement tools</li>
<li>High engagement with gamified applications</li>
<li>Strong community-oriented culture</li>
<li>Increasing focus on work-life balance and personal development</li>
</ul>

<h2>Product Vision</h2>
<h3>Core Mission</h3>
<p>Empower Indonesians to achieve their life goals through a culturally-relevant, gamified tracking system that celebrates progress and builds supportive communities.</p>

<h3>Key Differentiators</h3>
<ul>
<li><strong>Cultural Integration:</strong> Indonesian language, local holidays, cultural milestones</li>
<li><strong>Community Focus:</strong> Group challenges, family goals, community achievements</li>
<li><strong>Gamification:</strong> Points, badges, leaderboards with Indonesian themes</li>
<li><strong>Accessibility:</strong> Works on low-end devices, offline mode, data-efficient</li>
<li><strong>Local Context:</strong> Ramadan tracking, mudik planning, local event integration</li>
</ul>

<h2>Competitive Landscape</h2>
<h3>Global Competitors</h3>
<ul>
<li>Habitica - Gamified habit tracker (not localized)</li>
<li>Todoist - Task management (limited Indonesian features)</li>
<li>Notion - All-in-one workspace (complex for casual users)</li>
</ul>

<h3>Our Advantage</h3>
<p>First mover in culturally-adapted personal development for Indonesia with deep local integration and community features.</p>

<h2>Success Metrics</h2>
<ul>
<li><strong>Year 1:</strong> 100K active users, 40% monthly retention</li>
<li><strong>Year 2:</strong> 500K active users, 50% monthly retention</li>
<li><strong>Year 3:</strong> 2M active users, 60% monthly retention</li>
</ul>',
  'policy_document',
  'published',
  3200,
  NOW(),
  NOW()
);

-- Insert Document 2: Core Features
INSERT INTO documents (
  id,
  initiative_id,
  title,
  description,
  category,
  tags,
  content,
  type,
  status,
  file_size,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid()::text,
  'objective-track-app',
  'Core Features & User Experience',
  'Detailed breakdown of app features, user flows, and experience design',
  'technical',
  '["features", "ux-design", "user-experience", "product-specs"]'::jsonb,
  '<h1>Core Features & User Experience</h1>

<h2>Feature Overview</h2>

<h3>1. Goal Setting & Tracking</h3>
<h4>Personal Goals</h4>
<ul>
<li>Career objectives (promotion, skill development, job change)</li>
<li>Health & fitness (weight loss, exercise, nutrition)</li>
<li>Financial goals (savings, investments, debt reduction)</li>
<li>Education (courses, certifications, language learning)</li>
<li>Relationships (family time, friendships, networking)</li>
</ul>

<h4>Goal Types</h4>
<ul>
<li><strong>One-time Goals:</strong> Complete a certification, buy a house</li>
<li><strong>Habit Goals:</strong> Exercise 3x/week, read daily</li>
<li><strong>Milestone Goals:</strong> Save 100M IDR, lose 10kg</li>
<li><strong>Time-bound Goals:</strong> Complete by specific date</li>
</ul>

<h3>2. Gamification System</h3>
<h4>Points & Rewards</h4>
<ul>
<li><strong>Experience Points (XP):</strong> Earned for completing tasks and goals</li>
<li><strong>Streak Bonuses:</strong> Extra points for consecutive days</li>
<li><strong>Achievement Badges:</strong> Indonesian-themed badges (Garuda, Batik, etc.)</li>
<li><strong>Level System:</strong> Progress from "Pemula" to "Juara"</li>
</ul>

<h4>Leaderboards</h4>
<ul>
<li>Friends leaderboard</li>
<li>Community challenges</li>
<li>City/province rankings</li>
<li>Category-specific rankings</li>
</ul>

<h3>3. Community Features</h3>
<h4>Social Connections</h4>
<ul>
<li>Add friends and family</li>
<li>Share achievements</li>
<li>Support and encourage others</li>
<li>Join interest-based groups</li>
</ul>

<h4>Group Challenges</h4>
<ul>
<li>Create or join challenges</li>
<li>Team-based competitions</li>
<li>Monthly themed challenges</li>
<li>Corporate wellness programs</li>
</ul>

<h3>4. Progress Visualization</h3>
<ul>
<li>Daily/weekly/monthly progress charts</li>
<li>Habit streak calendars</li>
<li>Goal completion timelines</li>
<li>Category breakdown analytics</li>
<li>Year-in-review summaries</li>
</ul>

<h3>5. Smart Reminders & Notifications</h3>
<ul>
<li>Customizable reminder times</li>
<li>Motivational push notifications</li>
<li>Friend activity updates</li>
<li>Challenge deadlines</li>
<li>Streak protection alerts</li>
</ul>

<h2>User Experience Design</h2>

<h3>Onboarding Flow</h3>
<ol>
<li><strong>Welcome:</strong> Brief intro to app benefits</li>
<li><strong>Profile Setup:</strong> Name, photo, interests</li>
<li><strong>Goal Selection:</strong> Choose 2-3 initial goals</li>
<li><strong>Tutorial:</strong> Interactive walkthrough</li>
<li><strong>First Win:</strong> Complete first task for instant gratification</li>
</ol>

<h3>Daily User Flow</h3>
<ol>
<li>Open app → See daily dashboard</li>
<li>Review today''s tasks and goals</li>
<li>Check in on habits</li>
<li>Complete tasks → Earn XP</li>
<li>View progress and celebrate wins</li>
<li>Engage with community</li>
</ol>

<h3>Design Principles</h3>
<ul>
<li><strong>Simple & Intuitive:</strong> Easy for all age groups</li>
<li><strong>Visually Appealing:</strong> Indonesian-inspired design elements</li>
<li><strong>Fast & Responsive:</strong> Optimized for low-end devices</li>
<li><strong>Encouraging:</strong> Positive reinforcement throughout</li>
<li><strong>Accessible:</strong> Support for Bahasa Indonesia and regional languages</li>
</ul>',
  'policy_document',
  'published',
  4100,
  NOW(),
  NOW()
);

-- Insert Document 3: Cultural Integration
INSERT INTO documents (
  id,
  initiative_id,
  title,
  description,
  category,
  tags,
  content,
  type,
  status,
  file_size,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid()::text,
  'objective-track-app',
  'Indonesian Cultural Integration',
  'How the app integrates Indonesian culture, values, and local context',
  'strategy',
  '["culture", "localization", "indonesia", "community"]'::jsonb,
  '<h1>Indonesian Cultural Integration</h1>

<h2>Cultural Adaptation Strategy</h2>

<h3>Language & Communication</h3>
<ul>
<li><strong>Primary Language:</strong> Bahasa Indonesia</li>
<li><strong>Regional Support:</strong> Javanese, Sundanese, Balinese options</li>
<li><strong>Tone:</strong> Friendly, respectful, encouraging (sesuai budaya Indonesia)</li>
<li><strong>Terminology:</strong> Use familiar Indonesian terms for goals and achievements</li>
</ul>

<h3>Indonesian Values Integration</h3>

<h4>Gotong Royong (Mutual Cooperation)</h4>
<ul>
<li>Group challenges emphasize teamwork</li>
<li>Community support features</li>
<li>Shared family goals</li>
<li>Neighborhood challenges</li>
</ul>

<h4>Musyawarah (Consensus Building)</h4>
<ul>
<li>Group decision-making for team challenges</li>
<li>Community voting on challenge themes</li>
<li>Collaborative goal setting</li>
</ul>

<h4>Respect for Elders & Family</h4>
<ul>
<li>Family goal categories</li>
<li>Multi-generational challenges</li>
<li>Parent-child goal sharing</li>
<li>Elder wisdom sharing features</li>
</ul>

<h2>Local Context Features</h2>

<h3>Indonesian Calendar Integration</h3>
<ul>
<li><strong>National Holidays:</strong> Automatic goal adjustments</li>
<li><strong>Ramadan Mode:</strong> Special fasting and spiritual goals</li>
<li><strong>Lebaran Planning:</strong> Mudik preparation checklists</li>
<li><strong>Local Celebrations:</strong> Regional festival integration</li>
</ul>

<h3>Indonesian-Themed Gamification</h3>

<h4>Achievement Badges</h4>
<ul>
<li><strong>Garuda Badge:</strong> Complete 100 goals</li>
<li><strong>Batik Master:</strong> 30-day streak</li>
<li><strong>Borobudur Builder:</strong> Long-term goal completion</li>
<li><strong>Komodo Champion:</strong> Overcome major challenge</li>
<li><strong>Wayang Warrior:</strong> Help 50 friends</li>
</ul>

<h4>Level Names</h4>
<ol>
<li>Pemula (Beginner)</li>
<li>Pelajar (Learner)</li>
<li>Pekerja (Worker)</li>
<li>Ahli (Expert)</li>
<li>Guru (Master)</li>
<li>Juara (Champion)</li>
<li>Pahlawan (Hero)</li>
<li>Legenda (Legend)</li>
</ol>

<h3>Local Lifestyle Integration</h3>

<h4>Work Culture</h4>
<ul>
<li>Flexible goal timing for traffic/commute</li>
<li>Weekend vs weekday goal differentiation</li>
<li>Work-life balance tracking</li>
</ul>

<h4>Food & Health</h4>
<ul>
<li>Indonesian meal planning</li>
<li>Local exercise options (badminton, futsal)</li>
<li>Traditional health practices</li>
</ul>

<h4>Financial Context</h4>
<ul>
<li>IDR currency integration</li>
<li>Local savings goals (arisan, tabungan)</li>
<li>Indonesian investment options</li>
</ul>

<h2>Community Building</h2>

<h3>Regional Communities</h3>
<ul>
<li>Province-based groups</li>
<li>City leaderboards</li>
<li>Local meetups and events</li>
<li>Regional challenge themes</li>
</ul>

<h3>Interest Communities</h3>
<ul>
<li>Professional groups (developers, teachers, entrepreneurs)</li>
<li>Hobby communities (photography, cooking, sports)</li>
<li>Life stage groups (students, parents, retirees)</li>
</ul>

<h2>Cultural Sensitivity</h2>
<ul>
<li>Respect for religious practices</li>
<li>Inclusive of all backgrounds</li>
<li>Appropriate imagery and language</li>
<li>Privacy-conscious design</li>
</ul>',
  'policy_document',
  'published',
  3800,
  NOW(),
  NOW()
);

-- Insert Document 4: Technical Architecture
INSERT INTO documents (
  id,
  initiative_id,
  title,
  description,
  category,
  tags,
  content,
  type,
  status,
  file_size,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid()::text,
  'objective-track-app',
  'Technical Architecture & Roadmap',
  'Technical stack, architecture decisions, and development roadmap',
  'technical',
  '["architecture", "technology", "roadmap", "development"]'::jsonb,
  '<h1>Technical Architecture & Roadmap</h1>

<h2>Technology Stack</h2>

<h3>Frontend</h3>
<ul>
<li><strong>Framework:</strong> React Native (iOS & Android)</li>
<li><strong>State Management:</strong> Redux Toolkit</li>
<li><strong>UI Library:</strong> React Native Paper (Material Design)</li>
<li><strong>Navigation:</strong> React Navigation</li>
<li><strong>Charts:</strong> Victory Native</li>
</ul>

<h3>Backend</h3>
<ul>
<li><strong>Runtime:</strong> Node.js with Express</li>
<li><strong>Database:</strong> PostgreSQL (Supabase)</li>
<li><strong>Authentication:</strong> Supabase Auth</li>
<li><strong>Real-time:</strong> Supabase Realtime</li>
<li><strong>Storage:</strong> Supabase Storage (profile images, badges)</li>
</ul>

<h3>Infrastructure</h3>
<ul>
<li><strong>Hosting:</strong> Vercel (API) + Supabase (Database)</li>
<li><strong>CDN:</strong> Vercel Edge Network</li>
<li><strong>Analytics:</strong> Vercel Analytics + Mixpanel</li>
<li><strong>Monitoring:</strong> Sentry</li>
<li><strong>Push Notifications:</strong> Firebase Cloud Messaging</li>
</ul>

<h2>System Architecture</h2>

<h3>Core Components</h3>

<h4>1. User Management</h4>
<ul>
<li>Authentication & authorization</li>
<li>Profile management</li>
<li>Settings & preferences</li>
<li>Social connections</li>
</ul>

<h4>2. Goal Engine</h4>
<ul>
<li>Goal creation & editing</li>
<li>Progress tracking</li>
<li>Habit scheduling</li>
<li>Milestone management</li>
</ul>

<h4>3. Gamification System</h4>
<ul>
<li>XP calculation</li>
<li>Badge awarding</li>
<li>Leaderboard ranking</li>
<li>Streak tracking</li>
</ul>

<h4>4. Community Platform</h4>
<ul>
<li>Friend connections</li>
<li>Group challenges</li>
<li>Activity feeds</li>
<li>Messaging</li>
</ul>

<h4>5. Notification Service</h4>
<ul>
<li>Scheduled reminders</li>
<li>Push notifications</li>
<li>In-app notifications</li>
<li>Email digests</li>
</ul>

<h3>Database Schema</h3>

<h4>Key Tables</h4>
<ul>
<li><strong>users:</strong> User profiles and settings</li>
<li><strong>goals:</strong> User goals and objectives</li>
<li><strong>tasks:</strong> Daily tasks and habits</li>
<li><strong>progress:</strong> Goal progress tracking</li>
<li><strong>achievements:</strong> Badges and awards</li>
<li><strong>challenges:</strong> Community challenges</li>
<li><strong>friendships:</strong> Social connections</li>
<li><strong>notifications:</strong> User notifications</li>
</ul>

<h2>Performance Optimization</h2>

<h3>Mobile Optimization</h3>
<ul>
<li>Lazy loading for images and content</li>
<li>Efficient data caching</li>
<li>Optimized bundle size</li>
<li>Progressive image loading</li>
</ul>

<h3>Offline Support</h3>
<ul>
<li>Local data storage with AsyncStorage</li>
<li>Offline-first architecture</li>
<li>Background sync when online</li>
<li>Conflict resolution</li>
</ul>

<h3>Low-End Device Support</h3>
<ul>
<li>Minimal memory footprint</li>
<li>Efficient rendering</li>
<li>Reduced animation complexity</li>
<li>Graceful degradation</li>
</ul>

<h2>Development Roadmap</h2>

<h3>Phase 1: MVP (Months 1-3)</h3>
<ul>
<li>✅ Core goal tracking</li>
<li>✅ Basic gamification (XP, levels)</li>
<li>✅ User authentication</li>
<li>✅ Simple UI/UX</li>
<li>✅ Indonesian language support</li>
</ul>

<h3>Phase 2: Community (Months 4-6)</h3>
<ul>
<li>🔄 Friend connections</li>
<li>🔄 Group challenges</li>
<li>🔄 Activity feed</li>
<li>🔄 Leaderboards</li>
<li>🔄 Push notifications</li>
</ul>

<h3>Phase 3: Enhancement (Months 7-9)</h3>
<ul>
<li>📋 Advanced analytics</li>
<li>📋 Custom badges</li>
<li>📋 Regional communities</li>
<li>📋 Offline mode</li>
<li>📋 Performance optimization</li>
</ul>

<h3>Phase 4: Scale (Months 10-12)</h3>
<ul>
<li>📋 Corporate partnerships</li>
<li>📋 Premium features</li>
<li>📋 API for integrations</li>
<li>📋 Advanced gamification</li>
<li>📋 Regional language support</li>
</ul>

<h2>Security & Privacy</h2>
<ul>
<li>End-to-end encryption for messages</li>
<li>GDPR-compliant data handling</li>
<li>Secure authentication (OAuth, 2FA)</li>
<li>Regular security audits</li>
<li>Privacy-first design</li>
</ul>',
  'policy_document',
  'published',
  4500,
  NOW(),
  NOW()
);

-- Insert Document 5: Business Model
INSERT INTO documents (
  id,
  initiative_id,
  title,
  description,
  category,
  tags,
  content,
  type,
  status,
  file_size,
  created_at,
  updated_at
) VALUES (
  gen_random_uuid()::text,
  'objective-track-app',
  'Business Model & Monetization Strategy',
  'Revenue streams, pricing strategy, and financial projections',
  'business',
  '["business-model", "monetization", "revenue", "pricing"]'::jsonb,
  '<h1>Business Model & Monetization Strategy</h1>

<h2>Revenue Streams</h2>

<h3>1. Freemium Model</h3>

<h4>Free Tier</h4>
<ul>
<li>Up to 5 active goals</li>
<li>Basic gamification features</li>
<li>Community access</li>
<li>Standard badges</li>
<li>Basic analytics</li>
</ul>

<h4>Premium Tier (49,000 IDR/month or 490,000 IDR/year)</h4>
<ul>
<li>Unlimited goals</li>
<li>Advanced analytics & insights</li>
<li>Custom badges & themes</li>
<li>Priority support</li>
<li>Ad-free experience</li>
<li>Offline mode</li>
<li>Export data</li>
<li>Early access to features</li>
</ul>

<h3>2. Corporate Partnerships</h3>
<ul>
<li><strong>Wellness Programs:</strong> 200,000-500,000 IDR per employee/year</li>
<li><strong>Team Challenges:</strong> Custom challenges for companies</li>
<li><strong>White-label Solutions:</strong> Branded versions for enterprises</li>
<li><strong>Analytics Dashboard:</strong> Team performance insights</li>
</ul>

<h3>3. In-App Purchases</h3>
<ul>
<li><strong>Badge Packs:</strong> 15,000-50,000 IDR</li>
<li><strong>Theme Packs:</strong> 25,000-75,000 IDR</li>
<li><strong>Power-ups:</strong> Streak protection, XP boosters (5,000-20,000 IDR)</li>
<li><strong>Gift Premium:</strong> Send premium to friends</li>
</ul>

<h3>4. Advertising (Free Tier Only)</h3>
<ul>
<li>Native ads in activity feed</li>
<li>Sponsored challenges</li>
<li>Partner promotions</li>
<li>Estimated: $0.50-1.50 CPM</li>
</ul>

<h2>Pricing Strategy</h2>

<h3>Market Positioning</h3>
<ul>
<li><strong>Target:</strong> Affordable premium for Indonesian market</li>
<li><strong>Comparison:</strong> 30-50% lower than global competitors</li>
<li><strong>Value Proposition:</strong> Local features justify premium</li>
</ul>

<h3>Promotional Strategy</h3>
<ul>
<li><strong>Launch:</strong> 3 months free premium for early adopters</li>
<li><strong>Referrals:</strong> 1 month free for referrer & referee</li>
<li><strong>Seasonal:</strong> Ramadan, New Year discounts (30-50% off)</li>
<li><strong>Student Discount:</strong> 50% off with valid student ID</li>
</ul>

<h2>Financial Projections</h2>

<h3>Year 1</h3>
<ul>
<li><strong>Users:</strong> 100,000 (5% premium conversion)</li>
<li><strong>Revenue:</strong> $180,000
  <ul>
    <li>Premium subscriptions: $120,000</li>
    <li>In-app purchases: $30,000</li>
    <li>Advertising: $20,000</li>
    <li>Corporate: $10,000</li>
  </ul>
</li>
<li><strong>Costs:</strong> $150,000 (development, infrastructure, marketing)</li>
<li><strong>Net:</strong> $30,000</li>
</ul>

<h3>Year 2</h3>
<ul>
<li><strong>Users:</strong> 500,000 (7% premium conversion)</li>
<li><strong>Revenue:</strong> $1,200,000
  <ul>
    <li>Premium subscriptions: $850,000</li>
    <li>In-app purchases: $180,000</li>
    <li>Advertising: $100,000</li>
    <li>Corporate: $70,000</li>
  </ul>
</li>
<li><strong>Costs:</strong> $600,000</li>
<li><strong>Net:</strong> $600,000</li>
</ul>

<h3>Year 3</h3>
<ul>
<li><strong>Users:</strong> 2,000,000 (10% premium conversion)</li>
<li><strong>Revenue:</strong> $6,500,000
  <ul>
    <li>Premium subscriptions: $4,800,000</li>
    <li>In-app purchases: $800,000</li>
    <li>Advertising: $400,000</li>
    <li>Corporate: $500,000</li>
  </ul>
</li>
<li><strong>Costs:</strong> $2,500,000</li>
<li><strong>Net:</strong> $4,000,000</li>
</ul>

<h2>Go-to-Market Strategy</h2>

<h3>Launch Strategy</h3>
<ol>
<li><strong>Beta Testing:</strong> 1,000 users in Jakarta (Month 1-2)</li>
<li><strong>Soft Launch:</strong> Java region (Month 3-4)</li>
<li><strong>National Launch:</strong> All Indonesia (Month 5-6)</li>
<li><strong>Regional Expansion:</strong> Southeast Asia (Year 2)</li>
</ol>

<h3>Marketing Channels</h3>
<ul>
<li><strong>Social Media:</strong> Instagram, TikTok, Facebook</li>
<li><strong>Influencers:</strong> Lifestyle, productivity, wellness creators</li>
<li><strong>Content Marketing:</strong> Blog, YouTube tutorials</li>
<li><strong>App Store Optimization:</strong> Keywords, screenshots, reviews</li>
<li><strong>Partnerships:</strong> Gyms, coworking spaces, universities</li>
<li><strong>PR:</strong> Tech media, lifestyle publications</li>
</ul>

<h3>User Acquisition Cost</h3>
<ul>
<li><strong>Target CAC:</strong> $2-5 per user</li>
<li><strong>LTV:</strong> $15-30 per user</li>
<li><strong>LTV:CAC Ratio:</strong> 3:1 to 6:1</li>
</ul>

<h2>Success Metrics</h2>
<ul>
<li><strong>DAU/MAU:</strong> Target 40%+</li>
<li><strong>Retention:</strong> 50% at 30 days, 30% at 90 days</li>
<li><strong>Premium Conversion:</strong> 5-10%</li>
<li><strong>Churn Rate:</strong> <5% monthly</li>
<li><strong>NPS Score:</strong> 50+</li>
</ul>',
  'policy_document',
  'published',
  4200,
  NOW(),
  NOW()
);
