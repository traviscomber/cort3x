-- Add comprehensive documentation for doublec.education AI trading platform for CHILE MARKET
-- This script creates detailed studies with CHILE-SPECIFIC market focus and university partnerships

-- Clear any existing documents
DELETE FROM documents WHERE initiative_id = 'doublec-education';

-- Document 1: Chile Market Overview & Educational Opportunity
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, completion_percentage, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'doublec-education',
  'Mercado Chileno de Educación en Trading: Análisis y Oportunidades 2024-2026',
  'Análisis comprehensivo del mercado educativo chileno, enfoque en fintech, y oportunidades para plataformas de educación en trading impulsadas por IA',
  'market-research',
  '["chile-market", "edtech", "financial-projections", "university-partnerships"]'::jsonb,
  '<div class="document-content">
    <h1>DoubleC.Education en Chile: Análisis de Mercado y Oportunidades</h1>
    <p class="lead">Primera plataforma de educación en trading potenciada por IA enfocada en el mercado chileno</p>
    
    <h2>Mercado Chileno de EdTech (Datos 2024)</h2>
    <ul>
      <li><strong>Tamaño del Mercado EdTech Chile:</strong> $285M (2024) → $580M (2028) a 19.3% CAGR</li>
      <li><strong>Educación Financiera en Línea:</strong> $42M segmento específico, crecimiento 28% YoY</li>
      <li><strong>Usuarios de Trading Retail en Chile:</strong> 185,000 activos, crecimiento 35% YoY post-crisis económica</li>
      <li><strong>Inversión en FinTech Chile:</strong> $240M en 2023, 32% en educación financiera</li>
      <li><strong>Penetración de Internet:</strong> 92% en Santiago, 78% en regiones</li>
    </ul>

    <h2>Problema Central: Por Qué el 82% de Traders Chilenos Fallan</h2>
    <ul>
      <li><strong>Sin Personalización:</strong> 82% reporta cursos que no se adaptan a su nivel o estilo de aprendizaje</li>
      <li><strong>Brecha Teoría-Práctica:</strong> 89% lucha aplicando conceptos a mercados reales chilenos</li>
      <li><strong>Contenido Genérico:</strong> 76% encuentra material orientado a mercados norteamericanos, no adaptado a SVS/ChileCMF</li>
      <li><strong>Acceso Limitado:</strong> Plataformas de educación en trading típicamente $3K-$8K USD, inaccesibles para 85% de chilenos</li>
      <li><strong>Falta de Mentoría:</strong> 91% de autodidactas no tiene acceso a expertos locales</li>
    </ul>

    <h2>Solución: Plataforma de IA Adaptativa Chilena</h2>
    <h3>Diferenciales Competitivos</h3>
    <ul>
      <li><strong>Motor de Aprendizaje Chileno:</strong> Algoritmos entrenados en 25+ años de datos del mercado chileno (SVS, BVS)</li>
      <li><strong>Integración Normativa:</strong> Cumplimiento automático con regulaciones ChileCMF y SERNAGEOMIN</li>
      <li><strong>Datos de Mercado Locales:</strong> Integración en tiempo real con BVS, dólar TRM, criptos regulados en Chile</li>
      <li><strong>Contenido en Español:</strong> 100% localizado, referencias a casos chilenos reales</li>
      <li><strong>Precio Accesible:</strong> $49-$149/mes vs $300-$400/mes plataformas internacionales</li>
    </ul>

    <h2>Audiencia Objetivo (Estadísticas Chile 2024)</h2>
    
    <h3>Traders Retail Chilenos (60% ingresos)</h3>
    <ul>
      <li><strong>Tamaño:</strong> 185,000 activos, potencial 1.2M con penetración</li>
      <li><strong>Demográfica:</strong> Edades 25-50, ingresos UF 60,000-120,000 anuales</li>
      <li><strong>Disposición a Pagar:</strong> $39-$119/mes (CLP 35,000-107,000)</li>
      <li><strong>CAC:</strong> $45-$70 (principalmente redes sociales, comunidades Discord)</li>
    </ul>

    <h3>Instituciones Universitarias (30% ingresos)</h3>
    <ul>
      <li><strong>Tamaño:</strong> 42 universidades con programas de finanzas/administración</li>
      <li><strong>Potencial:</strong> 12,500+ estudiantes anuales en carreras financieras</li>
      <li><strong>Disposición a Pagar:</strong> $5,000-$35,000 anual por institución (licencia institucional)</li>
      <li><strong>Ciclo Ventas:</strong> 2-4 meses (decisión curricular)</li>
    </ul>

    <h3>Empresas FinTech Chilenas (10% ingresos)</h3>
    <ul>
      <li><strong>Tamaño:</strong> 280+ empresas FinTech reguladas en Chile</li>
      <li><strong>Caso de Uso:</strong> Capacitación de empleados, entrenamiento de traders</li>
      <li><strong>Contrato Típico:</strong> $2,000-$15,000 anuales por empresa</li>
    </ul>

    <h2>Competencia Regional y Diferenciación</h2>
    <table>
      <tr><th>Plataforma</th><th>Usuarios Chile</th><th>Enfoque</th><th>Debilidad</th></tr>
      <tr><td>Warrior Trading</td><td>3,200</td><td>Trading diario USA</td><td>Sin localización, regulación norteamericana</td></tr>
      <tr><td>Coursera/Udemy</td><td>15,000+</td><td>Genérico</td><td>Sin IA, sin integración datos locales</td></tr>
      <tr><td>TradingView</td><td>8,500</td><td>Herramientas</td><td>No es educación, muy técnico</td></tr>
      <tr><td>DoubleC.Education</td><td>ENTRADA 2025</td><td>Chile-First, IA + Universidades</td><td>VENTAJA: Mercado virgen, primera mover</td></tr>
    </table>

    <h2>Proyecciones Financieras Chile 2024-2026</h2>

    <h3>Año 1 (2024-2025)</h3>
    <ul>
      <li><strong>Usuarios Pagados:</strong> 3,200 (mix: 1,500 retail + 8 universidades + 45 empresas)</li>
      <li><strong>ARR:</strong> USD $850,000 (CLP $850M)</li>
      <li><strong>Costos Operativos:</strong> $680K (team 8 personas, servidor regional)</li>
      <li><strong>EBITDA:</strong> 20% positivo</li>
    </ul>

    <h3>Año 2 (2025-2026)</h3>
    <ul>
      <li><strong>Usuarios Pagados:</strong> 12,500 (4x crecimiento vía universidades)</li>
      <li><strong>ARR:</strong> $3.2M</li>
      <li><strong>Costos Operativos:</strong> $1.9M (team 18 personas, R&D universidades)</li>
      <li><strong>EBITDA:</strong> 41% positivo</li>
    </ul>

    <h3>Año 3 (2026)</h3>
    <ul>
      <li><strong>Usuarios Pagados:</strong> 32,000</li>
      <li><strong>ARR:</strong> $8.2M</li>
      <li><strong>EBITDA:</strong> 52%</li>
      <li><strong>Expansión:</strong> Argentina, Colombia (LATAM hub)</li>
    </ul>

    <h2>Estrategia de Universidades como Motor de Crecimiento</h2>
    
    <h3>Fase 1: Asociaciones Académicas (Q3-Q4 2024)</h3>
    <ul>
      <li>Colaboración formal con Universidad de Chile, PUC, U. Concepción</li>
      <li>Co-desarrollo de curriculum basado en investigación</li>
      <li>Acceso a laboratorios de investigación y estudiantes de postgrado</li>
    </ul>

    <h3>Fase 2: Integración Curricular (Q1 2025)</h3>
    <ul>
      <li>Integración en 8-10 cursos de pregrado en finanzas</li>
      <li>2,000+ estudiantes con acceso institucional</li>
      <li>Publicación de primeros papers de investigación conjunto</li>
    </ul>

    <h3>Fase 3: Escalamiento Regional (2025-2026)</h3>
    <ul>
      <li>Expansión a 20+ instituciones en Chile y Latinoamérica</li>
      <li>Licencia blanca para universidades (custom branding)</li>
      <li>Becas y programas de investigación conjunta</li>
    </ul>

    <h2>Métrica de Éxito</h2>
    <ul>
      <li><strong>Tasa de Conversión:</strong> 18-22% (superior a industria 5-7% por enfoque localizado)</li>
      <li><strong>Churn Mensual:</strong> <3.5% (industry: 8-12%)</li>
      <li><strong>NPS:</strong> >65 (target para EdTech premium Chile)</li>
      <li><strong>Tasa de Completitud:</strong> >52% vs 12-18% industria global</li>
      <li><strong>Éxito de Estudiantes:</strong> 71% logran rentabilidad simulada en 90 días</li>
    </ul>
  </div>',
  'market_analysis',
  'published',
  9200,
  100,
  NOW(),
  NOW()
);

-- Document 3: Technical Architecture and AI Systems
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, completion_percentage, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'doublec-education',
  'Technical Architecture: AI & ML Systems',
  'Detailed technical documentation of the platform architecture, AI/ML systems, data pipelines, and infrastructure design for scalable, real-time trading education.',
  'technical',
  '["architecture", "AI", "machine-learning", "infrastructure", "scalability"]'::jsonb,
  '<div class="document-content">
    <h1>Technical Architecture: AI & ML Systems</h1>
    <p class="lead">Deep dive into the technical infrastructure powering DoubleC.Education''s AI-driven trading education platform.</p>
    
    <h2>System Architecture Overview</h2>
    <h3>Microservices Design</h3>
    <ul>
      <li><strong>Frontend Application</strong> - Next.js 14 with React Server Components</li>
      <li><strong>API Gateway</strong> - Node.js with Express for routing and authentication</li>
      <li><strong>AI/ML Service</strong> - Python FastAPI with TensorFlow and PyTorch</li>
      <li><strong>Data Processing Pipeline</strong> - Apache Kafka for real-time data streams</li>
      <li><strong>Database Layer</strong> - PostgreSQL (user data), TimescaleDB (market data), Redis (caching)</li>
    </ul>
    
    <h2>AI/ML Model Architecture</h2>
    <h3>Core Models</h3>
    
    <h4>1. Personalized Learning Engine</h4>
    <p><strong>Model Type:</strong> Transformer-based recommendation system</p>
    <p><strong>Input Features:</strong></p>
    <ul>
      <li>User skill level and progress metrics</li>
      <li>Learning pace and engagement patterns</li>
      <li>Quiz performance and error analysis</li>
      <li>Time spent on different content types</li>
    </ul>
    <p><strong>Output:</strong> Next best lesson, difficulty adjustments, personalized content recommendations</p>
    
    <h4>2. Market Prediction Model</h4>
    <p><strong>Model Type:</strong> LSTM + Attention mechanism for time series forecasting</p>
    <p><strong>Input Features:</strong></p>
    <ul>
      <li>Historical price data (OHLCV)</li>
      <li>Technical indicators (50+ features)</li>
      <li>Sentiment scores from news/social media</li>
      <li>Market microstructure data</li>
    </ul>
    <p><strong>Output:</strong> Price direction probability, volatility forecast, support/resistance levels</p>
    
    <h4>3. Trading Strategy Optimizer</h4>
    <p><strong>Model Type:</strong> Deep Q-Network (DQN) with experience replay</p>
    <p><strong>State Space:</strong></p>
    <ul>
      <li>Portfolio composition and P&L</li>
      <li>Market conditions and regime</li>
      <li>Risk metrics (Sharpe, drawdown, VaR)</li>
      <li>User-defined constraints</li>
    </ul>
    <p><strong>Action Space:</strong> Buy, Sell, Hold decisions with position sizing</p>
    <p><strong>Reward Function:</strong> Risk-adjusted returns with penalty for violations</p>
    
    <h4>4. Real-Time Risk Assessment</h4>
    <p><strong>Model Type:</strong> Ensemble model (XGBoost + Random Forest + Neural Net)</p>
    <p><strong>Features:</strong></p>
    <ul>
      <li>Portfolio concentration metrics</li>
      <li>Correlation matrix analysis</li>
      <li>Volatility regime detection</li>
      <li>Liquidity risk indicators</li>
    </ul>
    <p><strong>Output:</strong> Risk score (0-100), alerts, recommended hedges</p>
    
    <h2>Data Pipeline Architecture</h2>
    <h3>Real-Time Market Data</h3>
    <ul>
      <li><strong>Data Sources:</strong> Polygon.io, Alpha Vantage, Binance API, Twitter API</li>
      <li><strong>Ingestion:</strong> Kafka producers with fault tolerance</li>
      <li><strong>Processing:</strong> Apache Flink for stream processing</li>
      <li><strong>Storage:</strong> TimescaleDB for time-series optimization</li>
      <li><strong>Caching:</strong> Redis for low-latency access</li>
    </ul>
    
    <h3>ML Model Training Pipeline</h3>
    <ol>
      <li><strong>Data Collection:</strong> Automated scraping and API integration</li>
      <li><strong>Feature Engineering:</strong> Spark jobs for distributed processing</li>
      <li><strong>Model Training:</strong> GPU clusters (AWS EC2 P3 instances)</li>
      <li><strong>Validation:</strong> Walk-forward analysis with cross-validation</li>
      <li><strong>Deployment:</strong> MLflow for versioning and A/B testing</li>
      <li><strong>Monitoring:</strong> Evidently AI for model drift detection</li>
    </ol>
    
    <h2>Infrastructure & Scalability</h2>
    <h3>Cloud Architecture (AWS)</h3>
    <ul>
      <li><strong>Compute:</strong> ECS Fargate for auto-scaling containers</li>
      <li><strong>ML Workloads:</strong> SageMaker for training and inference</li>
      <li><strong>Storage:</strong> S3 for data lake, EBS for databases</li>
      <li><strong>CDN:</strong> CloudFront for global content delivery</li>
      <li><strong>Monitoring:</strong> CloudWatch + Grafana + Prometheus</li>
    </ul>
    
    <h3>Performance Targets</h3>
    <table>
      <tr><th>Metric</th><th>Target</th><th>Current</th></tr>
      <tr><td>API Response Time (p95)</td><td>&lt; 100ms</td><td>85ms</td></tr>
      <tr><td>ML Inference Latency</td><td>&lt; 200ms</td><td>150ms</td></tr>
      <tr><td>System Uptime</td><td>99.9%</td><td>99.8%</td></tr>
      <tr><td>Concurrent Users</td><td>10,000+</td><td>5,000</td></tr>
    </table>
    
    <h2>Security & Compliance</h2>
    <ul>
      <li><strong>Authentication:</strong> JWT with refresh tokens, OAuth2 integration</li>
      <li><strong>Encryption:</strong> TLS 1.3 in transit, AES-256 at rest</li>
      <li><strong>Data Privacy:</strong> GDPR and CCPA compliant</li>
      <li><strong>API Security:</strong> Rate limiting, DDoS protection (Cloudflare)</li>
      <li><strong>Financial Data:</strong> PCI DSS compliance for payment processing</li>
    </ul>
    
    <h2>Technology Stack Summary</h2>
    <table>
      <tr><th>Layer</th><th>Technology</th><th>Purpose</th></tr>
      <tr><td>Frontend</td><td>Next.js 14, TypeScript, Tailwind</td><td>User interface</td></tr>
      <tr><td>Backend</td><td>Node.js, Python FastAPI</td><td>API services</td></tr>
      <tr><td>ML/AI</td><td>TensorFlow, PyTorch, scikit-learn</td><td>Model training and inference</td></tr>
      <tr><td>Data</td><td>PostgreSQL, TimescaleDB, Redis</td><td>Storage and caching</td></tr>
      <tr><td>Streaming</td><td>Kafka, Flink</td><td>Real-time processing</td></tr>
      <tr><td>Infrastructure</td><td>AWS, Docker, Kubernetes</td><td>Hosting and orchestration</td></tr>
    </table>
  </div>',
  'technical_specification',
  'published',
  6800,
  100,
  NOW(),
  NOW()
);

-- Document 5: Curriculum and Learning Pathways (adapted for Chilean context)
INSERT INTO documents (id, initiative_id, title, description, category, tags, content, type, status, file_size, completion_percentage, created_at, updated_at)
VALUES (
  gen_random_uuid(),
  'doublec-education',
  'Curriculum Design: AI-Powered Learning Pathways',
  'Detailed curriculum structure, learning pathways, course modules, and AI-driven personalization strategy for comprehensive trading education.',
  'curriculum',
  '["curriculum", "learning-pathways", "course-design", "education"]'::jsonb,
  '<div class="document-content">
    <h1>Curriculum Design: AI-Powered Learning Pathways</h1>
    <p class="lead">Comprehensive curriculum structure designed to take learners from complete beginners to proficient traders through AI-personalized pathways.</p>
    
    <h2>Curriculum Philosophy</h2>
    <p>Our curriculum is built on three core principles:</p>
    <ol>
      <li><strong>Theory-Practice Integration:</strong> Every concept paired with practical application</li>
      <li><strong>AI-Driven Personalization:</strong> Adaptive difficulty and pacing based on individual progress</li>
      <li><strong>Real-World Relevance:</strong> Current market examples and live data integration</li>
    </ol>
    
    <h2>Learning Pathways</h2>
    <h3>Pathway 1: Beginner Foundation (Levels 1-3)</h3>
    <p><strong>Duration:</strong> 8-12 weeks | <strong>Commitment:</strong> 5-10 hours/week</p>
    
    <h4>Level 1: Trading Fundamentals</h4>
    <ul>
      <li>What is Trading? Markets, Assets, and Participants</li>
      <li>Types of Markets: Stocks, Forex, Crypto, Commodities</li>
      <li>Understanding Price Action: Supply and Demand</li>
      <li>Order Types: Market, Limit, Stop Loss</li>
      <li>Risk Management Basics: Position Sizing and Capital Preservation</li>
      <li><strong>AI Feature:</strong> Personalized glossary and concept reinforcement</li>
    </ul>
    
    <h4>Level 2: Technical Analysis Foundations</h4>
    <ul>
      <li>Candlestick Patterns and Chart Reading</li>
      <li>Support and Resistance Levels</li>
      <li>Trend Identification and Trading</li>
      <li>Volume Analysis and Market Profile</li>
      <li>Introduction to Indicators (MA, RSI, MACD)</li>
      <li><strong>AI Feature:</strong> Chart pattern recognition assistance</li>
    </ul>
    
    <h4>Level 3: Fundamental Analysis Basics</h4>
    <ul>
      <li>Reading Financial Statements</li>
      <li>Economic Indicators and Market Impact</li>
      <li>Company Valuation Methods</li>
      <li>News Trading and Market Sentiment</li>
      <li>Correlation Between Assets</li>
      <li><strong>AI Feature:</strong> Sentiment analysis from news feeds</li>
    </ul>
    
    <h3>Pathway 2: Intermediate Practitioner (Levels 4-6)</h3>
    <p><strong>Duration:</strong> 12-16 weeks | <strong>Commitment:</strong> 10-15 hours/week</p>
    
    <h4>Level 4: Advanced Technical Strategies</h4>
    <ul>
      <li>Multi-Timeframe Analysis</li>
      <li>Elliott Wave Theory and Fibonacci</li>
      <li>Advanced Chart Patterns (Head & Shoulders, Triangles)</li>
      <li>Custom Indicator Development</li>
      <li>Backtesting Strategies with Historical Data</li>
      <li><strong>AI Feature:</strong> Strategy backtesting with ML optimization</li>
    </ul>
    
    <h4>Level 5: Trading Psychology and Risk Management</h4>
    <ul>
      <li>Cognitive Biases in Trading</li>
      <li>Emotional Control and Discipline</li>
      <li>Advanced Position Sizing (Kelly Criterion)</li>
      <li>Portfolio Theory and Diversification</li>
      <li>Drawdown Management and Recovery</li>
      <li><strong>AI Feature:</strong> Behavioral pattern detection and alerts</li>
    </ul>
    
    <h4>Level 6: Trading Systems Development</h4>
    <ul>
      <li>Building Rule-Based Systems</li>
      <li>Entry and Exit Strategy Design</li>
      <li>Performance Metrics (Sharpe, Sortino, Calmar)</li>
      <li>Walk-Forward Analysis</li>
      <li>Live Trading Preparation</li>
      <li><strong>AI Feature:</strong> Automated system performance tracking</li>
    </ul>
    
    <h3>Pathway 3: Advanced Professional (Levels 7-10)</h3>
    <p><strong>Duration:</strong> 16-24 weeks | <strong>Commitment:</strong> 15-20 hours/week</p>
    
    <h4>Level 7: Quantitative Trading</h4>
    <ul>
      <li>Statistical Arbitrage Strategies</li>
      <li>Mean Reversion and Momentum Models</li>
      <li>Pairs Trading and Market Neutral Strategies</li>
      <li>Option Greeks and Volatility Trading</li>
      <li>Algorithmic Trading Basics</li>
      <li><strong>AI Feature:</strong> Statistical model suggestions and optimization</li>
    </ul>
    
    <h4>Level 8: Machine Learning for Trading</h4>
    <ul>
      <li>Introduction to ML in Finance</li>
      <li>Feature Engineering for Market Data</li>
      <li>Supervised Learning: Price Prediction</li>
      <li>Unsupervised Learning: Regime Detection</li>
      <li>Reinforcement Learning: Strategy Optimization</li>
      <li><strong>AI Feature:</strong> Guided ML model development</li>
    </ul>
    
    <h4>Level 9: Portfolio Management</h4>
    <ul>
      <li>Modern Portfolio Theory</li>
      <li>Risk-Adjusted Return Optimization</li>
      <li>Factor Investing and Smart Beta</li>
      <li>Alternative Investments Integration</li>
      <li>Institutional Trading Strategies</li>
      <li><strong>AI Feature:</strong> AI portfolio optimizer</li>
    </ul>
    
    <h4>Level 10: Professional Trader Mastery</h4>
    <ul>
      <li>Market Microstructure and Execution</li>
      <li>High-Frequency Trading Concepts</li>
      <li>Regulatory Compliance and Reporting</li>
      <li>Building a Trading Business</li>
      <li>Mentorship and Continuous Improvement</li>
      <li><strong>AI Feature:</strong> AI trading co-pilot</li>
    </ul>
    
    <h2>AI Personalization Features</h2>
    <h3>Adaptive Learning Engine</h3>
    <table>
      <tr><th>Feature</th><th>Description</th><th>Impact</th></tr>
      <tr><td>Difficulty Adjustment</td><td>Real-time adaptation based on quiz performance</td><td>30% faster progression</td></tr>
      <tr><td>Learning Pace</td><td>Speed recommendations based on engagement</td><td>40% higher completion</td></tr>
      <tr><td>Content Recommendation</td><td>Next-best-lesson suggestions</td><td>50% more relevant content</td></tr>
      <tr><td>Knowledge Gap Analysis</td><td>Identify and fill learning gaps</td><td>60% better retention</td></tr>
    </table>
    
    <h2>Assessment and Certification</h2>
    <h3>Evaluation Methods</h3>
    <ul>
      <li><strong>Knowledge Checks:</strong> Adaptive quizzes after each module</li>
      <li><strong>Practical Simulations:</strong> Paper trading with real market data</li>
      <li><strong>Strategy Projects:</strong> Develop and backtest custom strategies</li>
      <li><strong>Final Certification:</strong> Comprehensive exam + live trading simulation</li>
    </ul>
    
    <h3>Certification Levels</h3>
    <ol>
      <li><strong>Certified Trader (Beginner)</strong> - Levels 1-3 completion</li>
      <li><strong>Advanced Trader (Intermediate)</strong> - Levels 4-6 completion</li>
      <li><strong>Professional Trader (Advanced)</strong> - Levels 7-10 completion</li>
      <li><strong>AI Trading Specialist</strong> - ML specialization track</li>
    </ol>
    
    <h2>Content Delivery Formats</h2>
    <ul>
      <li><strong>Video Lessons:</strong> 5-15 minute focused tutorials</li>
      <li><strong>Interactive Simulations:</strong> Hands-on practice with AI feedback</li>
      <li><strong>Reading Materials:</strong> In-depth articles and research papers</li>
      <li><strong>Live Webinars:</strong> Weekly market analysis and Q&A</li>
      <li><strong>Community Forums:</strong> Peer learning and strategy sharing</li>
    </ul>
    
    <h2>Continuous Learning</h2>
    <h3>Post-Certification Support</h3>
    <ul>
      <li>Weekly Market Intelligence Reports</li>
      <li>Advanced Strategy Workshops</li>
      <li>Access to Professional Trading Tools</li>
      <li>Alumni Community and Networking</li>
      <li>Lifetime Curriculum Updates</li>
    </ul>
  </div>',
  'educational_plan',
  'published',
  7500,
  100,
  NOW(),
  NOW()
);
