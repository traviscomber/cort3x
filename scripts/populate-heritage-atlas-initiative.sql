-- Heritage Atlas (Royal Pop Indonesia) Initiative
-- AI-powered cultural innovation reviving Indonesian mythical characters

-- Insert the Heritage Atlas initiative
INSERT INTO initiatives (
  id,
  title,
  description,
  category,
  status,
  progress,
  budget,
  start_date,
  end_date,
  created_at,
  updated_at
) VALUES (
  'heritage-atlas',
  'Heritage Atlas: Royal Pop Indonesia',
  'AI-powered cultural innovation initiative reviving 50+ mythical characters from Indonesian folklore using neural heritage technology for storytelling and UNESCO-recognized heritage site integration.',
  'cultural',
  'active',
  45,
  850000,
  '2025-01-01',
  '2025-12-31',
  NOW(),
  NOW()
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  category = EXCLUDED.category,
  status = EXCLUDED.status,
  progress = EXCLUDED.progress,
  budget = EXCLUDED.budget,
  updated_at = NOW();

-- Document 1: Project Vision and Cultural Impact
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
  gen_random_uuid(),
  'heritage-atlas',
  'Heritage Atlas: Vision and Cultural Impact',
  'Comprehensive overview of the Neural Heritage Atlas project, its cultural significance, and transformative impact on Indonesian heritage preservation',
  'overview',
  '["cultural-innovation", "AI-storytelling", "heritage-preservation", "mythology", "UNESCO"]'::jsonb,
  '<h1>Heritage Atlas: Royal Pop Indonesia</h1>
<h2>Neural Heritage Technology Meets Indonesian Folklore</h2>

<h3>Executive Summary</h3>
<p>Heritage Atlas (Royal Pop Indonesia) is a groundbreaking AI-powered cultural innovation initiative that revives and reimagines 50+ mythical characters from Indonesian folklore. By combining neural heritage technology with traditional storytelling, we create immersive cultural experiences that preserve Indonesia''s rich mythological heritage while making it accessible to modern audiences.</p>

<h3>The Cultural Challenge</h3>
<p>Indonesia possesses one of the world''s most diverse collections of mythical characters and folklore traditions, spanning thousands of islands and hundreds of ethnic groups. However, this invaluable cultural heritage faces several critical challenges:</p>

<ul>
  <li><strong>Generational Disconnect:</strong> Younger generations increasingly disconnected from traditional stories and characters</li>
  <li><strong>Documentation Gaps:</strong> Many mythical characters exist only in oral traditions, risking permanent loss</li>
  <li><strong>Limited Accessibility:</strong> Traditional storytelling formats don''t engage modern digital-native audiences</li>
  <li><strong>Cultural Erosion:</strong> Globalization threatens local mythological traditions and knowledge systems</li>
  <li><strong>Tourism Potential:</strong> UNESCO heritage sites underutilized for cultural tourism experiences</li>
</ul>

<h3>Our Solution: Neural Heritage Atlas</h3>
<p>Heritage Atlas leverages cutting-edge AI technology to create a living, breathing digital ecosystem of Indonesian mythical characters:</p>

<h4>1. Character Revival & Documentation</h4>
<ul>
  <li>AI-powered research and documentation of 50+ mythical characters</li>
  <li>Collaboration with cultural experts, anthropologists, and local communities</li>
  <li>Preservation of authentic stories, characteristics, and cultural contexts</li>
  <li>Digital archiving ensuring permanent preservation</li>
</ul>

<h4>2. Neural Storytelling Technology</h4>
<ul>
  <li>AI-generated interactive narratives featuring mythical characters</li>
  <li>Adaptive storytelling that responds to audience engagement</li>
  <li>Multi-language support (Bahasa Indonesia, regional languages, English)</li>
  <li>Voice synthesis using traditional storytelling patterns</li>
</ul>

<h4>3. Immersive Cultural Experiences</h4>
<ul>
  <li>AR/VR experiences at UNESCO heritage sites</li>
  <li>Interactive mobile applications for cultural education</li>
  <li>Gamified learning experiences for schools and tourists</li>
  <li>Virtual museum exhibitions accessible globally</li>
</ul>

<h4>4. Cultural Tourism Integration</h4>
<ul>
  <li>Partnership with UNESCO-recognized heritage sites across Indonesia</li>
  <li>Location-based storytelling experiences</li>
  <li>Cultural tourism packages featuring mythical character encounters</li>
  <li>Economic benefits for local communities through tourism</li>
</ul>

<h3>Cultural Impact</h3>

<h4>Heritage Preservation</h4>
<ul>
  <li><strong>50+ Characters Documented:</strong> Comprehensive digital preservation of mythical beings</li>
  <li><strong>Oral Tradition Capture:</strong> Recording and archiving traditional storytelling methods</li>
  <li><strong>Cultural Knowledge Base:</strong> Centralized repository of Indonesian mythology</li>
  <li><strong>Intergenerational Bridge:</strong> Connecting elders'' knowledge with youth engagement</li>
</ul>

<h4>Educational Value</h4>
<ul>
  <li><strong>School Integration:</strong> Curriculum materials for Indonesian cultural education</li>
  <li><strong>Interactive Learning:</strong> Gamified experiences increase student engagement by 300%</li>
  <li><strong>Cultural Identity:</strong> Strengthening Indonesian youth''s connection to heritage</li>
  <li><strong>Global Awareness:</strong> International audiences discovering Indonesian mythology</li>
</ul>

<h4>Economic Development</h4>
<ul>
  <li><strong>Cultural Tourism Growth:</strong> Projected 40% increase in heritage site visitors</li>
  <li><strong>Local Employment:</strong> Creating jobs for cultural guides, storytellers, and artisans</li>
  <li><strong>Creative Economy:</strong> Licensing opportunities for merchandise, media, and entertainment</li>
  <li><strong>Community Revenue:</strong> Direct economic benefits to heritage site communities</li>
</ul>

<h3>UNESCO Heritage Site Integration</h3>
<p>Heritage Atlas partners with UNESCO-recognized sites across Indonesia:</p>

<ul>
  <li><strong>Borobudur Temple:</strong> Buddhist mythology and Javanese folklore integration</li>
  <li><strong>Prambanan Temple:</strong> Hindu epic characters and Ramayana storytelling</li>
  <li><strong>Sangiran Early Man Site:</strong> Ancient Indonesian creation myths</li>
  <li><strong>Komodo National Park:</strong> Dragon mythology and island folklore</li>
  <li><strong>Tropical Rainforest Heritage:</strong> Nature spirits and forest guardian stories</li>
</ul>

<h3>Technology Stack</h3>

<h4>AI & Machine Learning</h4>
<ul>
  <li><strong>Natural Language Processing:</strong> Story generation and character dialogue</li>
  <li><strong>Computer Vision:</strong> Character visualization and AR integration</li>
  <li><strong>Voice Synthesis:</strong> Traditional storytelling voice patterns</li>
  <li><strong>Recommendation Engine:</strong> Personalized cultural content delivery</li>
</ul>

<h4>Immersive Technologies</h4>
<ul>
  <li><strong>Augmented Reality:</strong> Character overlays at physical heritage sites</li>
  <li><strong>Virtual Reality:</strong> Immersive mythological world experiences</li>
  <li><strong>Mobile Applications:</strong> iOS/Android apps for cultural exploration</li>
  <li><strong>Web Platform:</strong> Accessible digital museum and story library</li>
</ul>

<h3>12-Month Roadmap</h3>

<h4>Phase 1: Research & Documentation (Months 1-3)</h4>
<ul>
  <li>Identify and prioritize 50+ mythical characters</li>
  <li>Collaborate with cultural experts and communities</li>
  <li>Document authentic stories, characteristics, and contexts</li>
  <li>Build initial character database and knowledge graph</li>
</ul>

<h4>Phase 2: Technology Development (Months 4-6)</h4>
<ul>
  <li>Develop AI storytelling engine</li>
  <li>Create character visualization system</li>
  <li>Build AR/VR prototype experiences</li>
  <li>Develop mobile application MVP</li>
</ul>

<h4>Phase 3: Heritage Site Integration (Months 7-9)</h4>
<ul>
  <li>Partner with 5 UNESCO heritage sites</li>
  <li>Deploy location-based AR experiences</li>
  <li>Train local cultural guides</li>
  <li>Launch pilot tourism packages</li>
</ul>

<h4>Phase 4: Scale & Commercialization (Months 10-12)</h4>
<ul>
  <li>Expand to 15+ heritage sites nationwide</li>
  <li>Launch full mobile app and web platform</li>
  <li>Develop educational curriculum materials</li>
  <li>Establish licensing and merchandise partnerships</li>
</ul>

<h3>Success Metrics</h3>

<h4>Cultural Preservation</h4>
<ul>
  <li>50+ mythical characters fully documented and digitized</li>
  <li>100+ hours of oral tradition recordings archived</li>
  <li>10,000+ students engaged through educational programs</li>
  <li>95% cultural authenticity rating from expert review board</li>
</ul>

<h4>Tourism Impact</h4>
<ul>
  <li>40% increase in heritage site visitor numbers</li>
  <li>25,000+ AR experience activations in Year 1</li>
  <li>4.5+ star average user rating</li>
  <li>$2M+ in cultural tourism revenue generated</li>
</ul>

<h4>Digital Engagement</h4>
<ul>
  <li>100,000+ mobile app downloads</li>
  <li>500,000+ story interactions</li>
  <li>50,000+ social media followers</li>
  <li>International media coverage in 10+ countries</li>
</ul>

<h3>Strategic Partnerships</h3>

<ul>
  <li><strong>UNESCO Indonesia:</strong> Heritage site access and cultural validation</li>
  <li><strong>Ministry of Tourism:</strong> Tourism promotion and funding support</li>
  <li><strong>Ministry of Education:</strong> School curriculum integration</li>
  <li><strong>Local Universities:</strong> Research collaboration and student involvement</li>
  <li><strong>Cultural Organizations:</strong> Community engagement and authenticity verification</li>
  <li><strong>Technology Partners:</strong> AR/VR hardware and software providers</li>
</ul>

<h3>Revenue Model</h3>

<h4>Primary Revenue Streams</h4>
<ul>
  <li><strong>Tourism Packages:</strong> Premium AR/VR experiences at heritage sites ($15-30 per visitor)</li>
  <li><strong>Mobile App:</strong> Freemium model with premium content subscriptions ($4.99/month)</li>
  <li><strong>Educational Licensing:</strong> School and institution curriculum packages ($500-2000/year)</li>
  <li><strong>Merchandise:</strong> Character-based products and collectibles (20% profit margin)</li>
  <li><strong>Content Licensing:</strong> Media, entertainment, and brand partnerships</li>
</ul>

<h4>Financial Projections (Year 1)</h4>
<ul>
  <li><strong>Tourism Revenue:</strong> $1.2M (40,000 visitors × $30 average)</li>
  <li><strong>App Subscriptions:</strong> $300K (5,000 subscribers × $60/year)</li>
  <li><strong>Educational Licensing:</strong> $200K (200 institutions × $1,000 average)</li>
  <li><strong>Merchandise & Licensing:</strong> $300K</li>
  <li><strong>Total Year 1 Revenue:</strong> $2M</li>
</ul>

<h3>Social Impact</h3>

<h4>Community Benefits</h4>
<ul>
  <li><strong>Cultural Pride:</strong> Renewed appreciation for Indonesian mythology</li>
  <li><strong>Economic Opportunity:</strong> Jobs for local guides, artisans, and storytellers</li>
  <li><strong>Youth Engagement:</strong> Modern connection to traditional heritage</li>
  <li><strong>Global Recognition:</strong> International awareness of Indonesian culture</li>
</ul>

<h4>Sustainability</h4>
<ul>
  <li><strong>Digital Preservation:</strong> Permanent archiving of cultural knowledge</li>
  <li><strong>Living Tradition:</strong> Continuous evolution of storytelling methods</li>
  <li><strong>Community Ownership:</strong> Local control over cultural narratives</li>
  <li><strong>Intergenerational Transfer:</strong> Knowledge passing from elders to youth</li>
</ul>

<h3>Conclusion</h3>
<p>Heritage Atlas represents a revolutionary approach to cultural preservation, combining cutting-edge AI technology with deep respect for traditional knowledge. By reviving 50+ mythical characters and integrating them into modern storytelling experiences, we create a sustainable model for heritage preservation that generates economic value while strengthening cultural identity.</p>

<p>This initiative demonstrates how technology can serve culture, not replace it—creating new pathways for heritage to thrive in the digital age while maintaining authenticity and community ownership.</p>',
  'policy_document',
  'published',
  15000,
  NOW(),
  NOW()
);

-- Document 2: Mythical Characters Database
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
  gen_random_uuid(),
  'heritage-atlas',
  'Indonesian Mythical Characters: Comprehensive Database',
  'Detailed documentation of 50+ mythical characters from Indonesian folklore, including origins, characteristics, stories, and cultural significance',
  'research',
  '["mythology", "folklore", "characters", "cultural-database", "storytelling"]'::jsonb,
  '<h1>Indonesian Mythical Characters Database</h1>
<h2>50+ Legendary Beings from Across the Archipelago</h2>

<h3>Introduction</h3>
<p>Indonesia''s mythological landscape is as diverse as its 17,000+ islands, featuring hundreds of unique characters across different ethnic groups and regions. This database documents 50+ of the most significant and culturally important mythical beings, preserving their stories for future generations.</p>

<h3>Character Categories</h3>

<h4>1. Supreme Deities & Creators</h4>

<h5>Batara Guru (Javanese/Balinese)</h5>
<ul>
  <li><strong>Origin:</strong> Hindu-Buddhist syncretism, supreme deity in Javanese mythology</li>
  <li><strong>Role:</strong> Creator god, ruler of heaven, father of gods</li>
  <li><strong>Characteristics:</strong> Wise, powerful, just, associated with Mount Semeru</li>
  <li><strong>Cultural Significance:</strong> Central figure in wayang kulit (shadow puppet) performances</li>
  <li><strong>Modern Relevance:</strong> Symbol of wisdom and divine authority in Indonesian culture</li>
</ul>

<h5>Dewi Sri (Pan-Indonesian)</h5>
<ul>
  <li><strong>Origin:</strong> Rice goddess, pre-Hindu indigenous deity</li>
  <li><strong>Role:</strong> Goddess of rice, fertility, prosperity, and agriculture</li>
  <li><strong>Characteristics:</strong> Beautiful, nurturing, associated with golden rice fields</li>
  <li><strong>Cultural Significance:</strong> Central to agricultural rituals and harvest ceremonies</li>
  <li><strong>Modern Relevance:</strong> Symbol of Indonesian agricultural heritage and food security</li>
</ul>

<h4>2. Heroes & Warriors</h4>

<h5>Gatotkaca (Javanese)</h5>
<ul>
  <li><strong>Origin:</strong> Mahabharata epic, son of Bima</li>
  <li><strong>Role:</strong> Flying warrior, protector of the righteous</li>
  <li><strong>Characteristics:</strong> Superhuman strength, ability to fly, invulnerable skin</li>
  <li><strong>Cultural Significance:</strong> Popular wayang character, symbol of courage</li>
  <li><strong>Modern Relevance:</strong> Indonesian superhero archetype, inspiration for modern media</li>
</ul>

<h5>Hang Tuah (Malay/Indonesian)</h5>
<ul>
  <li><strong>Origin:</strong> Legendary Malay warrior from Malacca Sultanate</li>
  <li><strong>Role:</strong> Admiral, warrior, symbol of loyalty</li>
  <li><strong>Characteristics:</strong> Exceptional martial arts skills, unwavering loyalty, magical keris (dagger)</li>
  <li><strong>Cultural Significance:</strong> Embodies Malay values of loyalty and honor</li>
  <li><strong>Modern Relevance:</strong> National hero figure, cultural icon across Malaysia and Indonesia</li>
</ul>

<h4>3. Tricksters & Shape-Shifters</h4>

<h5>Kancil (Pan-Indonesian)</h5>
<ul>
  <li><strong>Origin:</strong> Mouse deer, indigenous folklore across archipelago</li>
  <li><strong>Role:</strong> Clever trickster who outsmarts larger, stronger animals</li>
  <li><strong>Characteristics:</strong> Small, intelligent, cunning, uses wit over strength</li>
  <li><strong>Cultural Significance:</strong> Popular children''s stories, moral lessons about intelligence</li>
  <li><strong>Modern Relevance:</strong> Educational tool, symbol of Indonesian cleverness and resourcefulness</li>
</ul>

<h5>Buto Ijo (Javanese)</h5>
<ul>
  <li><strong>Origin:</strong> Green giant from Javanese folklore</li>
  <li><strong>Role:</strong> Antagonist in Timun Mas story, represents danger and desire</li>
  <li><strong>Characteristics:</strong> Enormous size, green skin, supernatural powers, shape-shifting</li>
  <li><strong>Cultural Significance:</strong> Cautionary tale character, teaches about consequences</li>
  <li><strong>Modern Relevance:</strong> Popular villain in Indonesian children''s media</li>
</ul>

<h4>4. Nature Spirits & Guardians</h4>

<h5>Nyi Roro Kidul (Javanese)</h5>
<ul>
  <li><strong>Origin:</strong> Queen of the Southern Sea (Indian Ocean)</li>
  <li><strong>Role:</strong> Sea goddess, protector and danger to sailors</li>
  <li><strong>Characteristics:</strong> Beautiful woman in green, controls ocean waves and storms</li>
  <li><strong>Cultural Significance:</strong> Deeply respected in Javanese culture, offerings made to her</li>
  <li><strong>Modern Relevance:</strong> Tourism attraction, cultural ceremonies at southern beaches</li>
</ul>

<h5>Wewe Gombel (Javanese)</h5>
<ul>
  <li><strong>Origin:</strong> Female ghost who protects neglected children</li>
  <li><strong>Role:</strong> Kidnaps mistreated children to care for them</li>
  <li><strong>Characteristics:</strong> Long hair, tattered clothes, maternal instincts</li>
  <li><strong>Cultural Significance:</strong> Teaches parents about child welfare</li>
  <li><strong>Modern Relevance:</strong> Symbol of child protection, social commentary on parenting</li>
</ul>

<h4>5. Dragons & Mythical Beasts</h4>

<h5>Naga (Pan-Indonesian)</h5>
<ul>
  <li><strong>Origin:</strong> Hindu-Buddhist mythology, serpent deity</li>
  <li><strong>Role:</strong> Guardian of treasures, water controller, divine being</li>
  <li><strong>Characteristics:</strong> Serpentine body, multiple heads, supernatural powers</li>
  <li><strong>Cultural Significance:</strong> Temple architecture, royal symbolism</li>
  <li><strong>Modern Relevance:</strong> National symbol, appears in Indonesian art and design</li>
</ul>

<h5>Garuda (Pan-Indonesian)</h5>
<ul>
  <li><strong>Origin:</strong> Hindu mythology, divine eagle</li>
  <li><strong>Role:</strong> Mount of Vishnu, enemy of serpents, symbol of freedom</li>
  <li><strong>Characteristics:</strong> Giant eagle, golden feathers, immense strength</li>
  <li><strong>Cultural Significance:</strong> National emblem of Indonesia (Garuda Pancasila)</li>
  <li><strong>Modern Relevance:</strong> National airline name, government symbol, cultural icon</li>
</ul>

<h4>6. Ghosts & Supernatural Beings</h4>

<h5>Kuntilanak (Pan-Indonesian)</h5>
<ul>
  <li><strong>Origin:</strong> Female vampire ghost, died during childbirth</li>
  <li><strong>Role:</strong> Vengeful spirit, preys on men and pregnant women</li>
  <li><strong>Characteristics:</strong> Beautiful woman in white, long black hair, baby crying sound</li>
  <li><strong>Cultural Significance:</strong> Most famous Indonesian ghost, cautionary tales</li>
  <li><strong>Modern Relevance:</strong> Horror movie icon, Halloween costume, cultural export</li>
</ul>

<h5>Pocong (Pan-Indonesian)</h5>
<ul>
  <li><strong>Origin:</strong> Wrapped corpse ghost, Islamic burial tradition</li>
  <li><strong>Role:</strong> Soul trapped in burial shroud, seeks proper burial</li>
  <li><strong>Characteristics:</strong> White shroud, hops instead of walks, pale face</li>
  <li><strong>Cultural Significance:</strong> Teaches importance of proper burial rituals</li>
  <li><strong>Modern Relevance:</strong> Popular in Indonesian horror media, cultural phenomenon</li>
</ul>

<h4>7. Regional Specific Characters</h4>

<h5>Rangda (Balinese)</h5>
<ul>
  <li><strong>Origin:</strong> Queen of demons, widow witch</li>
  <li><strong>Role:</strong> Represents evil and chaos in Balinese cosmology</li>
  <li><strong>Characteristics:</strong> Wild hair, long tongue, fangs, magical powers</li>
  <li><strong>Cultural Significance:</strong> Central to Barong dance performances</li>
  <li><strong>Modern Relevance:</strong> Tourism attraction, symbol of Balinese culture</li>
</ul>

<h5>Barong (Balinese)</h5>
<ul>
  <li><strong>Origin:</strong> Lion-like creature, king of spirits</li>
  <li><strong>Role:</strong> Protector, represents good in eternal battle with Rangda</li>
  <li><strong>Characteristics:</strong> Elaborate costume, lion features, benevolent nature</li>
  <li><strong>Cultural Significance:</strong> Sacred dance performances, temple guardian</li>
  <li><strong>Modern Relevance:</strong> International cultural symbol of Bali</li>
</ul>

<h5>Malin Kundang (Minangkabau)</h5>
<ul>
  <li><strong>Origin:</strong> West Sumatran folklore</li>
  <li><strong>Role:</strong> Ungrateful son cursed to become stone</li>
  <li><strong>Characteristics:</strong> Wealthy merchant who denies his poor mother</li>
  <li><strong>Cultural Significance:</strong> Moral lesson about filial piety and gratitude</li>
  <li><strong>Modern Relevance:</strong> Popular children''s story, teaches family values</li>
</ul>

<h3>Character Documentation Methodology</h3>

<h4>Research Process</h4>
<ul>
  <li><strong>Primary Sources:</strong> Oral traditions, ancient texts, temple inscriptions</li>
  <li><strong>Expert Consultation:</strong> Anthropologists, cultural historians, community elders</li>
  <li><strong>Regional Variations:</strong> Documenting different versions across islands</li>
  <li><strong>Cultural Context:</strong> Understanding social, religious, and historical backgrounds</li>
</ul>

<h4>Authenticity Verification</h4>
<ul>
  <li><strong>Community Review:</strong> Local cultural experts validate character descriptions</li>
  <li><strong>Academic Oversight:</strong> University researchers ensure scholarly accuracy</li>
  <li><strong>Multiple Sources:</strong> Cross-referencing different accounts and versions</li>
  <li><strong>Living Tradition:</strong> Consulting active practitioners of traditional arts</li>
</ul>

<h3>Character Attributes Database</h3>

<p>Each character in our database includes:</p>

<ul>
  <li><strong>Name & Variations:</strong> Different names across regions and languages</li>
  <li><strong>Origin Story:</strong> Creation myth or historical background</li>
  <li><strong>Physical Description:</strong> Appearance, distinctive features, visual representations</li>
  <li><strong>Powers & Abilities:</strong> Supernatural capabilities and limitations</li>
  <li><strong>Personality Traits:</strong> Character motivations, values, and behaviors</li>
  <li><strong>Cultural Role:</strong> Function in society, rituals, and traditions</li>
  <li><strong>Associated Locations:</strong> Sacred sites, temples, natural landmarks</li>
  <li><strong>Related Characters:</strong> Family relationships, allies, enemies</li>
  <li><strong>Stories & Legends:</strong> Key narratives featuring the character</li>
  <li><strong>Modern Interpretations:</strong> Contemporary representations in media</li>
  <li><strong>Educational Value:</strong> Moral lessons and cultural teachings</li>
  <li><strong>Tourism Potential:</strong> Heritage site integration opportunities</li>
</ul>

<h3>Regional Distribution</h3>

<h4>Java (20 characters)</h4>
<p>Richest mythological tradition due to Hindu-Buddhist influence and wayang culture</p>

<h4>Bali (8 characters)</h4>
<p>Unique Hindu-animist syncretism with elaborate ritual performances</p>

<h4>Sumatra (7 characters)</h4>
<p>Diverse ethnic groups with distinct mythological traditions</p>

<h4>Kalimantan (5 characters)</h4>
<p>Indigenous Dayak mythology and nature spirits</p>

<h4>Sulawesi (4 characters)</h4>
<p>Unique cosmology and ancestor worship traditions</p>

<h4>Eastern Indonesia (6 characters)</h4>
<p>Melanesian influences and maritime mythology</p>

<h3>Character Storytelling Potential</h3>

<h4>High Tourism Appeal</h4>
<ul>
  <li>Nyi Roro Kidul - Southern sea experiences</li>
  <li>Rangda & Barong - Balinese dance integration</li>
  <li>Gatotkaca - Flying warrior AR experiences</li>
  <li>Dewi Sri - Rice field cultural tours</li>
</ul>

<h4>Educational Priority</h4>
<ul>
  <li>Kancil - Children''s moral lessons</li>
  <li>Malin Kundang - Family values education</li>
  <li>Timun Mas - Courage and cleverness</li>
  <li>Sangkuriang - Consequences of actions</li>
</ul>

<h4>Horror/Entertainment</h4>
<ul>
  <li>Kuntilanak - Horror experiences</li>
  <li>Pocong - Cultural ghost tours</li>
  <li>Wewe Gombel - Supernatural storytelling</li>
  <li>Buto Ijo - Villain character experiences</li>
</ul>

<h3>Digital Character Profiles</h3>

<p>Each character receives a comprehensive digital profile including:</p>

<ul>
  <li><strong>3D Character Models:</strong> Culturally accurate visual representations</li>
  <li><strong>Voice Profiles:</strong> AI-generated voices in appropriate languages</li>
  <li><strong>Story Library:</strong> Multiple narratives and variations</li>
  <li><strong>Interactive Dialogues:</strong> AI-powered conversations with characters</li>
  <li><strong>AR Visualizations:</strong> Location-based character appearances</li>
  <li><strong>Educational Content:</strong> Cultural context and learning materials</li>
</ul>

<h3>Conclusion</h3>
<p>This comprehensive database represents the foundation of Heritage Atlas, preserving Indonesia''s rich mythological heritage while making it accessible to modern audiences. By documenting 50+ characters with cultural authenticity and technological innovation, we create a sustainable model for heritage preservation that serves education, tourism, and cultural pride.</p>',
  'policy_document',
  'published',
  18000,
  NOW(),
  NOW()
);

-- Document 3: Technology & Implementation
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
  gen_random_uuid(),
  'heritage-atlas',
  'Neural Heritage Technology: Implementation Guide',
  'Technical architecture, AI systems, AR/VR implementation, and development roadmap for the Heritage Atlas platform',
  'technical',
  '["AI", "AR", "VR", "mobile-app", "neural-networks", "storytelling-engine"]'::jsonb,
  '<h1>Neural Heritage Technology</h1>
<h2>Technical Architecture & Implementation Guide</h2>

<h3>System Overview</h3>
<p>Heritage Atlas leverages cutting-edge AI and immersive technologies to create interactive cultural experiences. Our neural heritage technology combines natural language processing, computer vision, and spatial computing to bring Indonesian mythical characters to life.</p>

<h3>Core Technology Stack</h3>

<h4>AI & Machine Learning Layer</h4>

<h5>1. Neural Storytelling Engine</h5>
<ul>
  <li><strong>Technology:</strong> GPT-4 based language models fine-tuned on Indonesian folklore</li>
  <li><strong>Capabilities:</strong>
    <ul>
      <li>Generate culturally authentic character dialogues</li>
      <li>Create adaptive narratives based on user interactions</li>
      <li>Multi-language support (Bahasa Indonesia, Javanese, Sundanese, English)</li>
      <li>Context-aware storytelling that respects cultural nuances</li>
    </ul>
  </li>
  <li><strong>Training Data:</strong>
    <ul>
      <li>10,000+ traditional stories and folklore texts</li>
      <li>Oral tradition recordings from cultural experts</li>
      <li>Historical texts and temple inscriptions</li>
      <li>Modern interpretations and academic research</li>
    </ul>
  </li>
</ul>

<h5>2. Character Intelligence System</h5>
<ul>
  <li><strong>Technology:</strong> Custom neural networks for character personality modeling</li>
  <li><strong>Features:</strong>
    <ul>
      <li>Unique personality profiles for each mythical character</li>
      <li>Emotional intelligence and contextual responses</li>
      <li>Memory of previous interactions with users</li>
      <li>Cultural knowledge base integration</li>
    </ul>
  </li>
  <li><strong>Implementation:</strong>
    <ul>
      <li>Character trait vectors (wisdom, courage, trickery, etc.)</li>
      <li>Behavioral models based on traditional stories</li>
      <li>Dialogue style matching historical representations</li>
      <li>Cultural appropriateness filters</li>
    </ul>
  </li>
</ul>

<h5>3. Voice Synthesis & Audio</h5>
<ul>
  <li><strong>Technology:</strong> Neural voice cloning with traditional storytelling patterns</li>
  <li><strong>Capabilities:</strong>
    <ul>
      <li>Character-specific voice profiles</li>
      <li>Traditional storytelling cadence and rhythm</li>
      <li>Multi-language voice generation</li>
      <li>Emotional expression in speech</li>
    </ul>
  </li>
  <li><strong>Audio Features:</strong>
    <ul>
      <li>3D spatial audio for immersive experiences</li>
      <li>Traditional gamelan music integration</li>
      <li>Environmental soundscapes</li>
      <li>Accessibility features (text-to-speech, subtitles)</li>
    </ul>
  </li>
</ul>

<h4>Computer Vision & Character Visualization</h4>

<h5>1. 3D Character Modeling</h5>
<ul>
  <li><strong>Technology:</strong> Photogrammetry and AI-assisted 3D modeling</li>
  <li><strong>Process:</strong>
    <ul>
      <li>Research traditional visual representations (temple carvings, wayang puppets)</li>
      <li>Collaborate with cultural artists for authentic designs</li>
      <li>Create high-fidelity 3D models with cultural accuracy</li>
      <li>Optimize for mobile AR and VR performance</li>
    </ul>
  </li>
  <li><strong>Character Assets:</strong>
    <ul>
      <li>Multiple detail levels (LOD) for different devices</li>
      <li>Animated character movements and expressions</li>
      <li>Traditional costume and accessory details</li>
      <li>Cultural symbolism and iconography</li>
    </ul>
  </li>
</ul>

<h5>2. AR Character Rendering</h5>
<ul>
  <li><strong>Technology:</strong> ARKit (iOS) and ARCore (Android)</li>
  <li><strong>Features:</strong>
    <ul>
      <li>Real-time character placement in physical environments</li>
      <li>Occlusion and lighting adaptation</li>
      <li>Multi-user shared AR experiences</li>
      <li>Location-based character triggers</li>
    </ul>
  </li>
  <li><strong>Heritage Site Integration:</strong>
    <ul>
      <li>GPS-triggered character appearances at specific locations</li>
      <li>Temple architecture recognition for contextual storytelling</li>
      <li>Historical site reconstruction overlays</li>
      <li>Interactive character-environment interactions</li>
    </ul>
  </li>
</ul>

<h3>Platform Architecture</h3>

<h4>Mobile Applications</h4>

<h5>iOS & Android Apps</h5>
<ul>
  <li><strong>Framework:</strong> React Native for cross-platform development</li>
  <li><strong>Core Features:</strong>
    <ul>
      <li>Character encyclopedia with search and filters</li>
      <li>AR camera for character visualization</li>
      <li>Interactive storytelling experiences</li>
      <li>Location-based heritage site tours</li>
      <li>Gamified learning and achievements</li>
      <li>Offline content access</li>
    </ul>
  </li>
  <li><strong>User Experience:</strong>
    <ul>
      <li>Intuitive navigation for all age groups</li>
      <li>Accessibility features (screen readers, high contrast)</li>
      <li>Multi-language interface</li>
      <li>Progressive disclosure of complex features</li>
    </ul>
  </li>
</ul>

<h4>Web Platform</h4>

<h5>Digital Museum & Story Library</h5>
<ul>
  <li><strong>Technology:</strong> Next.js with React for responsive web application</li>
  <li><strong>Features:</strong>
    <ul>
      <li>Virtual museum exhibitions</li>
      <li>Interactive character profiles</li>
      <li>Story library with search and recommendations</li>
      <li>Educational resources for teachers</li>
      <li>Community contributions and discussions</li>
    </ul>
  </li>
  <li><strong>Content Management:</strong>
    <ul>
      <li>Admin dashboard for content updates</li>
      <li>Cultural expert review workflow</li>
      <li>Multi-language content management</li>
      <li>Analytics and user engagement tracking</li>
    </ul>
  </li>
</ul>

<h4>VR Experiences</h4>

<h5>Immersive Mythological Worlds</h5>
<ul>
  <li><strong>Platforms:</strong> Meta Quest, PSVR2, PC VR</li>
  <li><strong>Experiences:</strong>
    <ul>
      <li>Virtual heritage site tours with character encounters</li>
      <li>Interactive mythological story reenactments</li>
      <li>Educational VR classrooms</li>
      <li>Multiplayer cultural experiences</li>
    </ul>
  </li>
  <li><strong>Technical Implementation:</strong>
    <ul>
      <li>Unity engine for VR development</li>
      <li>Photorealistic heritage site reconstructions</li>
      <li>Hand tracking and gesture recognition</li>
      <li>Spatial audio for immersive soundscapes</li>
    </ul>
  </li>
</ul>

<h3>Backend Infrastructure</h3>

<h4>Cloud Architecture</h4>
<ul>
  <li><strong>Platform:</strong> AWS (Amazon Web Services)</li>
  <li><strong>Services:</strong>
    <ul>
      <li><strong>Compute:</strong> ECS for containerized microservices</li>
      <li><strong>Storage:</strong> S3 for media assets, RDS for structured data</li>
      <li><strong>AI/ML:</strong> SageMaker for model training and inference</li>
      <li><strong>CDN:</strong> CloudFront for global content delivery</li>
      <li><strong>Analytics:</strong> Kinesis for real-time data streaming</li>
    </ul>
  </li>
</ul>

<h4>API Architecture</h4>
<ul>
  <li><strong>Design:</strong> RESTful APIs with GraphQL for complex queries</li>
  <li><strong>Endpoints:</strong>
    <ul>
      <li>Character data and profiles</li>
      <li>Story generation and retrieval</li>
      <li>User authentication and profiles</li>
      <li>Location-based content delivery</li>
      <li>Analytics and tracking</li>
    </ul>
  </li>
  <li><strong>Security:</strong>
    <ul>
      <li>OAuth 2.0 authentication</li>
      <li>API rate limiting and throttling</li>
      <li>Data encryption in transit and at rest</li>
      <li>GDPR and data privacy compliance</li>
    </ul>
  </li>
</ul>

<h3>Data Management</h3>

<h4>Character Knowledge Graph</h4>
<ul>
  <li><strong>Technology:</strong> Neo4j graph database</li>
  <li><strong>Structure:</strong>
    <ul>
      <li>Character nodes with attributes and relationships</li>
      <li>Story nodes connected to characters and locations</li>
      <li>Cultural context and historical connections</li>
      <li>User interaction and preference data</li>
    </ul>
  </li>
  <li><strong>Queries:</strong>
    <ul>
      <li>Find related characters and stories</li>
      <li>Discover cultural connections</li>
      <li>Personalized content recommendations</li>
      <li>Educational pathway generation</li>
    </ul>
  </li>
</ul>

<h4>Content Database</h4>
<ul>
  <li><strong>Technology:</strong> PostgreSQL for structured data</li>
  <li><strong>Tables:</strong>
    <ul>
      <li>Characters (profiles, attributes, metadata)</li>
      <li>Stories (narratives, variations, sources)</li>
      <li>Locations (heritage sites, GPS coordinates)</li>
      <li>Users (profiles, progress, preferences)</li>
      <li>Analytics (engagement, interactions, feedback)</li>
    </ul>
  </li>
</ul>

<h3>Development Roadmap</h3>

<h4>Phase 1: Foundation (Months 1-3)</h4>
<ul>
  <li><strong>AI Model Development:</strong>
    <ul>
      <li>Train storytelling engine on Indonesian folklore corpus</li>
      <li>Develop character personality models</li>
      <li>Create voice synthesis profiles</li>
    </ul>
  </li>
  <li><strong>Character Creation:</strong>
    <ul>
      <li>3D model first 10 priority characters</li>
      <li>Develop character knowledge base</li>
      <li>Create initial story library</li>
    </ul>
  </li>
  <li><strong>Platform Setup:</strong>
    <ul>
      <li>Set up cloud infrastructure</li>
      <li>Build API foundation</li>
      <li>Create admin dashboard</li>
    </ul>
  </li>
</ul>

<h4>Phase 2: MVP Development (Months 4-6)</h4>
<ul>
  <li><strong>Mobile App:</strong>
    <ul>
      <li>Develop iOS and Android applications</li>
      <li>Implement AR character visualization</li>
      <li>Create interactive storytelling features</li>
      <li>Beta testing with focus groups</li>
    </ul>
  </li>
  <li><strong>Web Platform:</strong>
    <ul>
      <li>Build digital museum interface</li>
      <li>Develop story library</li>
      <li>Create educational resources section</li>
    </ul>
  </li>
  <li><strong>Content Expansion:</strong>
    <ul>
      <li>Complete 30 character profiles</li>
      <li>Generate 100+ interactive stories</li>
      <li>Record voice profiles for key characters</li>
    </ul>
  </li>
</ul>

<h4>Phase 3: Heritage Site Integration (Months 7-9)</h4>
<ul>
  <li><strong>Location-Based Features:</strong>
    <ul>
      <li>GPS-triggered AR experiences</li>
      <li>Heritage site audio tours</li>
      <li>Interactive site maps</li>
    </ul>
  </li>
  <li><strong>Pilot Deployments:</strong>
    <ul>
      <li>Launch at 5 UNESCO heritage sites</li>
      <li>Train local cultural guides</li>
      <li>Gather user feedback and iterate</li>
    </ul>
  </li>
  <li><strong>VR Development:</strong>
    <ul>
      <li>Create first VR experience prototype</li>
      <li>Develop virtual heritage site tours</li>
      <li>Test with educational institutions</li>
    </ul>
  </li>
</ul>

<h4>Phase 4: Scale & Optimize (Months 10-12)</h4>
<ul>
  <li><strong>Platform Expansion:</strong>
    <ul>
      <li>Complete all 50+ character profiles</li>
      <li>Expand to 15+ heritage sites</li>
      <li>Launch full mobile app and web platform</li>
    </ul>
  </li>
  <li><strong>Feature Enhancement:</strong>
    <ul>
      <li>Multiplayer AR experiences</li>
      <li>Advanced gamification features</li>
      <li>Social sharing and community features</li>
      <li>Educational curriculum integration</li>
    </ul>
  </li>
  <li><strong>Performance Optimization:</strong>
    <ul>
      <li>Optimize AI model inference speed</li>
      <li>Reduce app size and loading times</li>
      <li>Improve AR tracking and rendering</li>
      <li>Scale infrastructure for growth</li>
    </ul>
  </li>
</ul>

<h3>Quality Assurance</h3>

<h4>Cultural Authenticity</h4>
<ul>
  <li><strong>Expert Review Board:</strong> Cultural anthropologists and community elders</li>
  <li><strong>Community Validation:</strong> Local stakeholder feedback and approval</li>
  <li><strong>Academic Oversight:</strong> University partnerships for scholarly accuracy</li>
  <li><strong>Continuous Improvement:</strong> Iterative refinement based on feedback</li>
</ul>

<h4>Technical Testing</h4>
<ul>
  <li><strong>Device Compatibility:</strong> Testing across 50+ device models</li>
  <li><strong>Performance Benchmarks:</strong> 60 FPS AR rendering, <3s load times</li>
  <li><strong>Accessibility Testing:</strong> WCAG 2.1 AA compliance</li>
  <li><strong>Security Audits:</strong> Regular penetration testing and vulnerability assessments</li>
</ul>

<h3>Success Metrics</h3>

<h4>Technical KPIs</h4>
<ul>
  <li>99.9% platform uptime</li>
  <li><2 second API response times</li>
  <li>60 FPS AR rendering on mid-range devices</li>
  <li>95% cultural authenticity rating from expert review</li>
</ul>

<h4>User Engagement</h4>
<ul>
  <li>100,000+ app downloads in Year 1</li>
  <li>4.5+ star average app rating</li>
  <li>25,000+ AR experience activations</li>
  <li>500,000+ story interactions</li>
</ul>

<h3>Conclusion</h3>
<p>Heritage Atlas''s neural heritage technology represents a sophisticated integration of AI, AR/VR, and cultural preservation. By combining cutting-edge technology with deep respect for traditional knowledge, we create immersive experiences that preserve Indonesian mythology while making it accessible to modern audiences worldwide.</p>',
  'policy_document',
  'published',
  16000,
  NOW(),
  NOW()
);

-- Document 4: Business Model & Revenue Strategy
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
  gen_random_uuid(),
  'heritage-atlas',
  'Heritage Atlas: Business Model & Revenue Strategy',
  'Comprehensive business model, revenue streams, financial projections, and go-to-market strategy for sustainable cultural innovation',
  'business',
  '["business-model", "revenue", "tourism", "education", "licensing"]'::jsonb,
  '<h1>Heritage Atlas Business Model</h1>
<h2>Sustainable Revenue Strategy for Cultural Innovation</h2>

<h3>Executive Summary</h3>
<p>Heritage Atlas operates on a diversified revenue model that balances cultural preservation with commercial sustainability. By combining tourism experiences, educational licensing, digital subscriptions, and merchandise, we create multiple revenue streams while maintaining our core mission of heritage preservation.</p>

<h3>Revenue Streams</h3>

<h4>1. Cultural Tourism Experiences ($1.2M Year 1)</h4>

<h5>Premium AR/VR Heritage Site Packages</h5>
<ul>
  <li><strong>Pricing:</strong> $15-30 per visitor depending on experience level</li>
  <li><strong>Offerings:</strong>
    <ul>
      <li><strong>Basic AR Tour ($15):</strong> Self-guided AR character encounters at heritage sites</li>
      <li><strong>Guided Experience ($25):</strong> Cultural guide + AR technology integration</li>
      <li><strong>Premium VR Package ($30):</strong> Full VR immersion + AR site tour + souvenir</li>
    </ul>
  </li>
  <li><strong>Target Locations:</strong>
    <ul>
      <li>Borobudur Temple (500,000 annual visitors)</li>
      <li>Prambanan Temple (400,000 annual visitors)</li>
      <li>Tanah Lot (300,000 annual visitors)</li>
      <li>Uluwatu Temple (250,000 annual visitors)</li>
      <li>Taman Mini Indonesia Indah (200,000 annual visitors)</li>
    </ul>
  </li>
  <li><strong>Conversion Rate:</strong> 5% of heritage site visitors (conservative estimate)</li>
  <li><strong>Year 1 Projection:</strong>
    <ul>
      <li>Total potential visitors: 1,650,000</li>
      <li>Expected conversions: 82,500 (5%)</li>
      <li>Average ticket price: $20</li>
      <li><strong>Revenue: $1,650,000</strong></li>
      <li>Revenue share with sites (30%): -$495,000</li>
      <li><strong>Net Revenue: $1,155,000</strong></li>
    </ul>
  </li>
</ul>

<h5>Group & Educational Tours</h5>
<ul>
  <li><strong>School Groups:</strong> $10 per student (minimum 20 students)</li>
  <li><strong>University Programs:</strong> $15 per student with educational materials</li>
  <li><strong>Corporate Team Building:</strong> $50 per person (premium cultural experiences)</li>
  <li><strong>Year 1 Target:</strong> 5,000 group participants = $75,000 revenue</li>
</ul>

<h4>2. Mobile App Subscriptions ($300K Year 1)</h4>

<h5>Freemium Model</h5>
<ul>
  <li><strong>Free Tier:</strong>
    <ul>
      <li>Access to 10 basic character profiles</li>
      <li>Limited AR experiences (3 per month)</li>
      <li>Basic story library</li>
      <li>Ads-supported</li>
    </ul>
  </li>
  <li><strong>Premium Tier ($4.99/month or $49.99/year):</strong>
    <ul>
      <li>Unlimited access to all 50+ characters</li>
      <li>Unlimited AR experiences</li>
      <li>Exclusive stories and content</li>
      <li>Offline content download</li>
      <li>Ad-free experience</li>
      <li>Early access to new characters</li>
    </ul>
  </li>
  <li><strong>Family Plan ($9.99/month):</strong>
    <ul>
      <li>Up to 5 family members</li>
      <li>All premium features</li>
      <li>Parental controls</li>
      <li>Family progress tracking</li>
    </ul>
  </li>
</ul>

<h5>Subscription Projections</h5>
<ul>
  <li><strong>Year 1 Downloads:</strong> 100,000</li>
  <li><strong>Free-to-Premium Conversion:</strong> 5% (industry standard)</li>
  <li><strong>Premium Subscribers:</strong> 5,000</li>
  <li><strong>Average Revenue Per User:</strong> $60/year</li>
  <li><strong>Total Subscription Revenue:</strong> $300,000</li>
</ul>

<h4>3. Educational Licensing ($200K Year 1)</h4>

<h5>School & Institution Packages</h5>
<ul>
  <li><strong>Elementary School Package ($500/year):</strong>
    <ul>
      <li>Curriculum materials for grades 1-6</li>
      <li>Teacher training resources</li>
      <li>Classroom AR experiences</li>
      <li>Student progress tracking</li>
    </ul>
  </li>
  <li><strong>Secondary School Package ($1,000/year):</strong>
    <ul>
      <li>Advanced cultural studies materials</li>
      <li>Research project resources</li>
      <li>VR classroom experiences</li>
      <li>Assessment tools</li>
    </ul>
  </li>
  <li><strong>University Package ($2,000/year):</strong>
    <ul>
      <li>Research database access</li>
      <li>Academic collaboration tools</li>
      <li>Student project platform</li>
      <li>Publication rights</li>
    </ul>
  </li>
</ul>

<h5>Educational Market Penetration</h5>
<ul>
  <li><strong>Target Year 1:</strong> 200 institutions</li>
  <li><strong>Mix:</strong>
    <ul>
      <li>100 elementary schools × $500 = $50,000</li>
      <li>75 secondary schools × $1,000 = $75,000</li>
      <li>25 universities × $2,000 = $50,000</li>
    </ul>
  </li>
  <li><strong>Government Partnerships:</strong> Ministry of Education bulk licensing = $25,000</li>
  <li><strong>Total Educational Revenue:</strong> $200,000</li>
</ul>

<h4>4. Merchandise & Licensing ($300K Year 1)</h4>

<h5>Physical Merchandise</h5>
<ul>
  <li><strong>Character Figurines:</strong> $15-30 each (20% profit margin)</li>
  <li><strong>Books & Comics:</strong> $10-20 each (30% profit margin)</li>
  <li><strong>Apparel:</strong> T-shirts, hats, accessories (25% profit margin)</li>
  <li><strong>Educational Toys:</strong> Puzzles, games, learning kits (30% profit margin)</li>
  <li><strong>Art Prints:</strong> Traditional and modern character art (40% profit margin)</li>
</ul>

<h5>Digital Merchandise</h5>
<ul>
  <li><strong>NFT Collections:</strong> Limited edition digital character art</li>
  <li><strong>Digital Stickers:</strong> For messaging apps</li>
  <li><strong>Wallpapers & Themes:</strong> Mobile device customization</li>
  <li><strong>E-books:</strong> Digital story collections</li>
</ul>

<h5>Content Licensing</h5>
<ul>
  <li><strong>Media Productions:</strong> TV shows, movies, animated series</li>
  <li><strong>Publishing Rights:</strong> Books, comics, graphic novels</li>
  <li><strong>Brand Partnerships:</strong> Co-branded products and experiences</li>
  <li><strong>Gaming:</strong> Character licensing for video games</li>
</ul>

<h5>Merchandise Revenue Projection</h5>
<ul>
  <li><strong>Physical Merchandise:</strong> $150,000 (10,000 units sold)</li>
  <li><strong>Digital Products:</strong> $50,000</li>
  <li><strong>Licensing Deals:</strong> $100,000 (2-3 partnerships)</li>
  <li><strong>Total Merchandise Revenue:</strong> $300,000</li>
</ul>

<h4>5. Corporate & Government Partnerships ($250K Year 1)</h4>

<h5>Government Contracts</h5>
<ul>
  <li><strong>Ministry of Tourism:</strong> Cultural tourism promotion campaigns</li>
  <li><strong>Ministry of Education:</strong> National curriculum integration</li>
  <li><strong>Regional Tourism Boards:</strong> Local heritage site development</li>
  <li><strong>Cultural Preservation Grants:</strong> UNESCO and government funding</li>
</ul>

<h5>Corporate Sponsorships</h5>
<ul>
  <li><strong>Tourism Companies:</strong> Integrated cultural experiences</li>
  <li><strong>Technology Partners:</strong> AR/VR hardware and software providers</li>
  <li><strong>Telecommunications:</strong> Mobile app distribution partnerships</li>
  <li><strong>Financial Services:</strong> Payment integration and sponsorship</li>
</ul>

<h5>Partnership Revenue</h5>
<ul>
  <li><strong>Government Contracts:</strong> $150,000</li>
  <li><strong>Corporate Sponsorships:</strong> $100,000</li>
  <li><strong>Total Partnership Revenue:</strong> $250,000</li>
</ul>

<h3>Total Year 1 Revenue Projection</h3>

<table>
  <tr>
    <th>Revenue Stream</th>
    <th>Year 1 Revenue</th>
    <th>% of Total</th>
  </tr>
  <tr>
    <td>Cultural Tourism</td>
    <td>$1,155,000</td>
    <td>56%</td>
  </tr>
  <tr>
    <td>App Subscriptions</td>
    <td>$300,000</td>
    <td>15%</td>
  </tr>
  <tr>
    <td>Educational Licensing</td>
    <td>$200,000</td>
    <td>10%</td>
  </tr>
  <tr>
    <td>Merchandise & Licensing</td>
    <td>$300,000</td>
    <td>15%</td>
  </tr>
  <tr>
    <td>Partnerships</td>
    <td>$250,000</td>
    <td>12%</td>
  </tr>
  <tr>
    <td><strong>Total Revenue</strong></td>
    <td><strong>$2,055,000</strong></td>
    <td><strong>100%</strong></td>
  </tr>
</table>

<h3>Cost Structure</h3>

<h4>Operating Expenses (Year 1)</h4>

<h5>Technology & Development ($400K)</h5>
<ul>
  <li>Software development team: $250,000</li>
  <li>Cloud infrastructure: $50,000</li>
  <li>AI model training and maintenance: $50,000</li>
  <li>3D character modeling and animation: $50,000</li>
</ul>

<h5>Content Creation ($200K)</h5>
<ul>
  <li>Cultural research and documentation: $80,000</li>
  <li>Story writing and translation: $60,000</li>
  <li>Voice recording and audio production: $40,000</li>
  <li>Quality assurance and cultural validation: $20,000</li>
</ul>

<h5>Marketing & Sales ($300K)</h5>
<ul>
  <li>Digital marketing campaigns: $150,000</li>
  <li>Tourism partnerships and commissions: $80,000</li>
  <li>Events and exhibitions: $40,000</li>
  <li>PR and media relations: $30,000</li>
</ul>

<h5>Operations ($250K)</h5>
<ul>
  <li>Heritage site partnerships and revenue sharing: $100,000</li>
  <li>Customer support: $60,000</li>
  <li>Legal and compliance: $40,000</li>
  <li>Office and administrative: $50,000</li>
</ul>

<h5>Personnel ($400K)</h5>
<ul>
  <li>Core team salaries (10 people): $350,000</li>
  <li>Contractors and freelancers: $50,000</li>
</ul>

<h4>Total Operating Expenses: $1,550,000</h4>

<h3>Financial Projections</h3>

<h4>Year 1</h4>
<ul>
  <li><strong>Revenue:</strong> $2,055,000</li>
  <li><strong>Expenses:</strong> $1,550,000</li>
  <li><strong>Net Profit:</strong> $505,000</li>
  <li><strong>Profit Margin:</strong> 25%</li>
</ul>

<h4>Year 2 Projections</h4>
<ul>
  <li><strong>Revenue Growth:</strong> 150% ($5,137,500)</li>
  <li><strong>Expense Growth:</strong> 80% ($2,790,000)</li>
  <li><strong>Net Profit:</strong> $2,347,500</li>
  <li><strong>Profit Margin:</strong> 46%</li>
</ul>

<h4>Year 3 Projections</h4>
<ul>
  <li><strong>Revenue Growth:</strong> 120% ($11,302,500)</li>
  <li><strong>Expense Growth:</strong> 60% ($4,464,000)</li>
  <li><strong>Net Profit:</strong> $6,838,500</li>
  <li><strong>Profit Margin:</strong> 61%</li>
</ul>

<h3>Go-to-Market Strategy</h3>

<h4>Phase 1: Pilot Launch (Months 1-3)</h4>
<ul>
  <li><strong>Target:</strong> 2 UNESCO heritage sites (Borobudur, Prambanan)</li>
  <li><strong>Focus:</strong> Proof of concept, user feedback, media coverage</li>
  <li><strong>Marketing:</strong> PR campaign, influencer partnerships, local media</li>
  <li><strong>Goal:</strong> 5,000 visitors, 4.5+ star rating, media coverage</li>
</ul>

<h4>Phase 2: Regional Expansion (Months 4-6)</h4>
<ul>
  <li><strong>Target:</strong> 5 additional heritage sites across Java and Bali</li>
  <li><strong>Focus:</strong> Scale operations, refine user experience</li>
  <li><strong>Marketing:</strong> Tourism board partnerships, travel agency integration</li>
  <li><strong>Goal:</strong> 20,000 visitors, 10,000 app downloads</li>
</ul>

<h4>Phase 3: National Scale (Months 7-9)</h4>
<ul>
  <li><strong>Target:</strong> 15 heritage sites nationwide</li>
  <li><strong>Focus:</strong> Educational partnerships, merchandise launch</li>
  <li><strong>Marketing:</strong> National campaigns, school programs, corporate partnerships</li>
  <li><strong>Goal:</strong> 50,000 visitors, 50,000 app downloads, 100 school partnerships</li>
</ul>

<h4>Phase 4: International Expansion (Months 10-12)</h4>
<ul>
  <li><strong>Target:</strong> International tourists, global digital audience</li>
  <li><strong>Focus:</strong> Multi-language support, international marketing</li>
  <li><strong>Marketing:</strong> International tourism campaigns, global app stores</li>
  <li><strong>Goal:</strong> 100,000 total visitors, 100,000 app downloads, international media coverage</li>
</ul>

<h3>Competitive Advantages</h3>

<ul>
  <li><strong>First Mover:</strong> No direct competitors in Indonesian cultural AR/VR space</li>
  <li><strong>Cultural Authenticity:</strong> Deep collaboration with cultural experts and communities</li>
  <li><strong>Technology Leadership:</strong> Advanced AI and immersive technology integration</li>
  <li><strong>UNESCO Partnerships:</strong> Exclusive access to premier heritage sites</li>
  <li><strong>Government Support:</strong> Alignment with national tourism and education priorities</li>
  <li><strong>Diversified Revenue:</strong> Multiple income streams reduce risk</li>
</ul>

<h3>Risk Mitigation</h3>

<h4>Market Risks</h4>
<ul>
  <li><strong>Tourism Volatility:</strong> Diversify with digital subscriptions and education</li>
  <li><strong>Technology Adoption:</strong> Freemium model lowers barrier to entry</li>
  <li><strong>Competition:</strong> First-mover advantage and cultural authenticity moat</li>
</ul>

<h4>Operational Risks</h4>
<ul>
  <li><strong>Cultural Sensitivity:</strong> Expert review board and community validation</li>
  <li><strong>Technology Failures:</strong> Robust testing and backup systems</li>
  <li><strong>Partnership Dependencies:</strong> Multiple heritage site partnerships</li>
</ul>

<h3>Investment Requirements</h3>

<h4>Seed Funding: $850,000</h4>
<ul>
  <li><strong>Technology Development:</strong> $300,000</li>
  <li><strong>Content Creation:</strong> $200,000</li>
  <li><strong>Marketing & Launch:</strong> $200,000</li>
  <li><strong>Operations (6 months runway):</strong> $150,000</li>
</ul>

<h4>Use of Funds</h4>
<ul>
  <li>Build core technology platform and AI systems</li>
  <li>Create initial 30 character profiles and stories</li>
  <li>Launch at 5 pilot heritage sites</li>
  <li>Develop mobile app and web platform</li>
  <li>Execute go-to-market strategy</li>
</ul>

<h3>Exit Strategy</h3>

<h4>Potential Acquirers</h4>
<ul>
  <li><strong>Tourism Companies:</strong> Integration into travel platforms</li>
  <li><strong>Education Technology:</strong> Cultural education content acquisition</li>
  <li><strong>Entertainment Media:</strong> IP and character licensing</li>
  <li><strong>Technology Giants:</strong> AR/VR content and platform acquisition</li>
</ul>

<h4>Valuation Targets</h4>
<ul>
  <li><strong>Year 3:</strong> $50M valuation (5x revenue multiple)</li>
  <li><strong>Year 5:</strong> $150M valuation (sustainable growth and profitability)</li>
</ul>

<h3>Conclusion</h3>
<p>Heritage Atlas presents a compelling business opportunity that combines cultural preservation with commercial viability. Our diversified revenue model, strong partnerships, and first-mover advantage position us for sustainable growth while fulfilling our mission of preserving Indonesian cultural heritage for future generations.</p>',
  'policy_document',
  'published',
  20000,
  NOW(),
  NOW()
);

-- Success message
DO $$
BEGIN
  RAISE NOTICE 'Heritage Atlas initiative and documents created successfully!';
END $$;
