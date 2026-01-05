-- Add comprehensive documentation for SegurIA initiative

-- Document 1: Platform Architecture & Technology Stack
INSERT INTO documents (
  id,
  initiative_id,
  title,
  category,
  description,
  content,
  created_at,
  updated_at
) VALUES (
  'seguria-platform-architecture',
  'seguria-security',
  'Platform Architecture & Technology Stack',
  'technical',
  'Comprehensive technical architecture and technology implementation for SegurIA AI security platform',
  '<div class="prose">
    <h2>SegurIA Technical Architecture</h2>
    <h3>System Components</h3>
    <ul>
      <li><strong>Edge Computing Layer:</strong> NVIDIA Jetson AGX Orin processors with TensorRT optimization for 200+ FPS video processing</li>
      <li><strong>Central Processing Hub:</strong> Kubernetes cluster running TensorFlow Serving for distributed inference</li>
      <li><strong>Real-Time Database:</strong> TimescaleDB for metrics, ClickHouse for analytics, Redis for caching</li>
      <li><strong>API Gateway:</strong> Kong with rate limiting (10,000 req/sec capacity)</li>
      <li><strong>Frontend Dashboard:</strong> React with D3.js for real-time visualization</li>
    </ul>
    
    <h3>AI/ML Stack</h3>
    <ul>
      <li><strong>Vision Models:</strong> YOLOv8 for object detection, ResNet-152 for classification</li>
      <li><strong>Temporal Analysis:</strong> LSTM networks for behavior prediction, attention mechanisms for anomaly scoring</li>
      <li><strong>Multi-Modal Fusion:</strong> Transformer-based architecture combining thermal, RGB, and sensor data</li>
      <li><strong>Model Training:</strong> PyTorch with distributed training across 4x V100 GPUs</li>
    </ul>
    
    <h3>Infrastructure Specifications</h3>
    <ul>
      <li><strong>Latency:</strong> Real-time processing: &lt;100ms detection-to-alert</li>
      <li><strong>Throughput:</strong> 500+ camera feeds simultaneous processing</li>
      <li><strong>Storage:</strong> 1.5PB annual retention with hierarchical tiering</li>
      <li><strong>Redundancy:</strong> Multi-region deployment with 99.99% availability SLA</li>
    </ul>

    <h3>Security & Compliance</h3>
    <ul>
      <li>End-to-end AES-256 encryption for data in transit and at rest</li>
      <li>Zero-trust architecture with mTLS for all inter-service communication</li>
      <li>Role-based access control (RBAC) with audit logging</li>
      <li>GDPR, CCPA, and regional compliance built-in</li>
    </ul>
  </div>',
  NOW(),
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Document 2: AI Model Architecture & Performance
INSERT INTO documents (
  id,
  initiative_id,
  title,
  category,
  description,
  content,
  created_at,
  updated_at
) VALUES (
  'seguria-ai-models',
  'seguria-security',
  'AI Model Architecture & Performance Metrics',
  'technical',
  'Detailed AI/ML models, training data, and performance benchmarks',
  '<div class="prose">
    <h2>AI Model Architecture</h2>
    
    <h3>Object Detection Model (YOLOv8-Custom)</h3>
    <ul>
      <li><strong>Training Data:</strong> 2.3M annotated frames from real-world operations</li>
      <li><strong>Classes Detected:</strong> 47 object types (people, vehicles, tools, equipment, animals)</li>
      <li><strong>Performance:</strong> 94.2% mAP@0.5 on validation set</li>
      <li><strong>Speed:</strong> 45 FPS on NVIDIA T4 GPU</li>
      <li><strong>Inference Time:</strong> 22ms per frame</li>
    </ul>

    <h3>Behavioral Anomaly Detection (Multi-Head Attention LSTM)</h3>
    <ul>
      <li><strong>Input Features:</strong> 156 temporal features (position, velocity, acceleration, proximity)</li>
      <li><strong>Architecture:</strong> 3-layer LSTM with multi-head attention (8 heads)</li>
      <li><strong>Sequence Length:</strong> 30-second context windows</li>
      <li><strong>Accuracy:</strong> 89.7% precision, 87.3% recall on anomaly classification</li>
      <li><strong>False Positive Rate:</strong> 2.1% (industry-leading)</li>
    </ul>

    <h3>Predictive Threat Scoring (Gradient Boosting Ensemble)</h3>
    <ul>
      <li><strong>Features:</strong> 84 engineered features from historical events</li>
      <li><strong>Model:</strong> XGBoost ensemble (500 trees)</li>
      <li><strong>Prediction Window:</strong> 72-hour threat probability</li>
      <li><strong>Accuracy:</strong> 88.9% AUC-ROC</li>
      <li><strong>Calibration:</strong> Platt scaling for probability calibration</li>
    </ul>

    <h3>Multi-Modal Fusion Network</h3>
    <ul>
      <li><strong>Architecture:</strong> Vision Transformer + Thermal Stream + Sensor Fusion</li>
      <li><strong>Training:</strong> 18 months of continuous learning from 500+ sites</li>
      <li><strong>Cross-Modality Performance:</strong> 92.3% accuracy in low-light conditions</li>
      <li><strong>Environmental Adaptation:</strong> Dynamic model selection based on conditions</li>
    </ul>

    <h3>Model Update & Retraining Schedule</h3>
    <ul>
      <li><strong>Weekly:</strong> Incremental updates with new field data (500K+ frames/week)</li>
      <li><strong>Monthly:</strong> Full model retraining and validation</li>
      <li><strong>Quarterly:</strong> Architecture review and improvements</li>
      <li><strong>Annual:</strong> Major version releases with new capabilities</li>
    </ul>
  </div>',
  NOW(),
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Document 3: Market Analysis & Competitive Positioning (CHILE FOCUSED)
INSERT INTO documents (
  id,
  initiative_id,
  title,
  category,
  description,
  content,
  created_at,
  updated_at
) VALUES (
  'seguria-market-analysis',
  'seguria-security',
  'Análisis de Mercado Chileno & Posicionamiento Competitivo',
  'market',
  'Análisis detallado del mercado de seguridad chileno, análisis competitivo y oportunidades de crecimiento local',
  '<div class="prose">
    <h2>Mercado de Seguridad Chileno</h2>
    
    <h3>Tamaño de Mercado & Crecimiento</h3>
    <ul>
      <li><strong>Tamaño Total del Mercado (2024):</strong> $1.2B USD</li>
      <li><strong>Segmento de IA Avanzada:</strong> $180M (15% del mercado total)</li>
      <li><strong>Sector Industrial/Minería:</strong> $420M (35% del mercado total, mayor segmento)</li>
      <li><strong>Crecimiento Anual (CAGR):</strong> 22% (2024-2026)</li>
      <li><strong>Proyección 2026:</strong> $1.85B (47% crecimiento)</li>
    </ul>

    <h3>Desglose por Sector en Chile</h3>
    <ul>
      <li><strong>Minería & Recursos Naturales:</strong> $480M (40% - Codelco, BHP, Antofagasta, Barrick)</li>
      <li><strong>Agricultura & Ganadería:</strong> $220M (18% - creciente demanda en La Araucanía, Los Lagos)</li>
      <li><strong>Logística & Distribución:</strong> $280M (23% - puertos, distribuidoras, e-commerce)</li>
      <li><strong>Manufacturas & Industria:</strong> $140M (12% - textiles, alimentos, químicos)</li>
      <li><strong>Comercio & Retail:</strong> $80M (7% - malls, locales, centros comerciales)</li>
    </ul>

    <h3>Factores de Crecimiento de Seguridad en Chile</h3>
    <ul>
      <li><strong>Aumento de Delincuencia:</strong> Robo de carga +42% en últimos 2 años (fuente: Carabineros)</li>
      <li><strong>Conflictividad en Regiones:</strong> La Araucanía, Aysén con mayor actividad delictiva</li>
      <li><strong>Presión de Costos:</strong> Salarios de vigilancia han aumentado 18% en 2024</li>
      <li><strong>Regulaciones Mineras:</strong> Nueva normativa SERNAGEOMIN requiere sistemas avanzados</li>
      <li><strong>Eficiencia de Cadena de Suministro:</strong> Post-pandemia, visibilidad es crítica</li>
    </ul>

    <h3>Paisaje Competitivo Chileno</h3>
    <p><strong>Competidores Internacionales Establecidos:</strong></p>
    <ul>
      <li><strong>Bosch Security Solutions Chile:</strong> Operando desde 2005, enfoque tradicional (no IA), $120M+ ingresos regionales</li>
      <li><strong>Siemens Building Technologies:</strong> Soluciones empresariales, muy caros, posicionamiento premium</li>
      <li><strong>Axis Communications:</strong> Especialistas en video IP, bajo diferenciador de IA</li>
      <li><strong>Hikvision Chile:</strong> Presencia reciente, agresivo en precio, baja sofisticación</li>
    </ul>

    <p><strong>Competidores Locales Chilenos:</strong></p>
    <ul>
      <li><strong>Protección Total S.A.:</strong> Servicios de vigilancia tradicional (1,200+ guardias), sin tecnología IA</li>
      <li><strong>G4S Chile:</strong> Vigilancia + CCTV básico, modelo antiguo, debilitado post-pandemia</li>
      <li><strong>Allied Universal Chile:</strong> Enfoque vigilancia física, no digital</li>
      <li><strong>Startups locales:</strong> Ninguna con solución integral IA + hardware + SaaS</li>
    </ul>

    <p><strong>Ventajas Competitivas de SegurIA:</strong></p>
    <ul>
      <li>✓ Única solución IA nativa completamente chilena con infraestructura local</li>
      <li>✓ Enfoque específico para minería, agricultura y logística chilena</li>
      <li>✓ Costo 40-60% menor que Bosch/Siemens, con IA superior</li>
      <li>✓ Serverless + edge computing = menos dependencia de internet (crítico en regiones)</li>
      <li>✓ Soporte local 24/7 en español, entendimiento de regulaciones chilenas</li>
    </ul>

    <h3>Oportunidades de Penetración por Región</h3>
    <ul>
      <li><strong>Región de Antofagasta:</strong> $120M potencial (minería, puerto)</li>
      <li><strong>Región Metropolitana:</strong> $180M potencial (logística, retail, industria)</li>
      <li><strong>La Araucanía / Los Lagos:</strong> $95M potencial (agricultura, silvicultura - URGENTE)</li>
      <li><strong>Región de Atacama:</strong> $55M potencial (minería secundaria, agricultura)</li>
      <li><strong>Magallanes:</strong> $30M potencial (ganadería ovina, pesca industrial)</li>
    </ul>

    <h3>Estrategia de Adquisición de Clientes Chilenos</h3>
    <ul>
      <li><strong>Fase 1 (Ahora - Q4 2024):</strong> Enfoque minería grande (Codelco, BHP, Barrick) - 15-20 contratos</li>
      <li><strong>Fase 2 (2025):</strong> Agricultores medianos en La Araucanía/Los Lagos - 50-80 contratos</li>
      <li><strong>Fase 3 (2025-26):</strong> Distribuidoras y empresas logística (DHL, Samsur, TCP) - 30-40 contratos</li>
      <li><strong>Fase 4 (2026):</strong> Retail y comercio nacional - 100+ contratos de cadenas</li>
    </ul>

    <h3>Métricas de Venta & CAC Chilenos</h3>
    <ul>
      <li><strong>CAC Promedio:</strong> $16,000-$28,000 (minería), $5,000-$9,000 (agricultura)</li>
      <li><strong>Ciclo de Venta:</strong> 60-120 días (más corto que LATAM promedio)</li>
      <li><strong>Canales:</strong> Venta directa (70%), integradores de sistemas (20%), partners (10%)</li>
      <li><strong>Tasa de Ganar:</strong> 48% con leads calificadas (alto vs LATAM 35%)</li>
      <li><strong>ARR Promedio por Cliente:</strong> $52,000-$78,000 (minería), $28,000-$42,000 (agricultura)</li>
    </ul>

    <h3>Regulaciones & Marcos Legales Chilenos</h3>
    <ul>
      <li><strong>SERNAGEOMIN:</strong> Requiere vigilancia avanzada en faenas mineras (oportunidad: todos los clientes minería deben cumplir)</li>
      <li><strong>Normativa Laboral:</strong> Ley 20.005 sobre protección de trabajadores (vigilancia debe ser transparente)</li>
      <li><strong>Estándares ACUS:</strong> Asociación Chilena de Seguridad - certificación requerida</li>
      <li><strong>Protección de Datos:</strong> Ley de Protección de Datos 19.628 (SegurIA cumple con auditorías)</li>
    </ul>

    <h3>Proyecciones de Captura de Mercado SegurIA - Chile</h3>
    <ul>
      <li><strong>2024 Actual:</strong> 28 instalaciones, $780K ARR, 0.06% market share</li>
      <li><strong>2025 Target:</strong> 180 instalaciones, $5.4M ARR, 0.45% market share (principal competidor local)</li>
      <li><strong>2026 Target:</strong> 520 instalaciones, $15.6M ARR, 1.2% market share</li>
    </ul>

    <h3>Comparativa de Propuesta de Valor</h3>
    <table style="width:100%; border-collapse: collapse;">
      <tr style="background:#f0f0f0;">
        <th style="border: 1px solid #ccc; padding: 8px;">Característica</th>
        <th style="border: 1px solid #ccc; padding: 8px;">SegurIA</th>
        <th style="border: 1px solid #ccc; padding: 8px;">Bosch</th>
        <th style="border: 1px solid #ccc; padding: 8px;">Siemens</th>
        <th style="border: 1px solid #ccc; padding: 8px;">Competidores Locales</th>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;"><strong>IA/ML Avanzada</strong></td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★★★★</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★☆☆☆</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★★☆☆</td>
        <td style="border: 1px solid #ccc; padding: 8px;">☆☆☆☆☆</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;"><strong>Costo Anual</strong></td>
        <td style="border: 1px solid #ccc; padding: 8px;">$30-60K</td>
        <td style="border: 1px solid #ccc; padding: 8px;">$80-120K</td>
        <td style="border: 1px solid #ccc; padding: 8px;">$100-150K</td>
        <td style="border: 1px solid #ccc; padding: 8px;">$15-25K (básico)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;"><strong>Soporte Local</strong></td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★★★★ (24/7)</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★★☆☆</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★☆☆☆</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★★☆☆</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;"><strong>Tiempo Implementación</strong></td>
        <td style="border: 1px solid #ccc; padding: 8px;">2-4 semanas</td>
        <td style="border: 1px solid #ccc; padding: 8px;">8-12 semanas</td>
        <td style="border: 1px solid #ccc; padding: 8px;">12-16 semanas</td>
        <td style="border: 1px solid #ccc; padding: 8px;">1-2 semanas (básico)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ccc; padding: 8px;"><strong>Especificidad Chilena</strong></td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★★★★</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★☆☆☆☆</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★☆☆☆☆</td>
        <td style="border: 1px solid #ccc; padding: 8px;">★★★★☆</td>
      </tr>
    </table>
  </div>',
  NOW(),
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Document 4: Sector-Specific Solutions
INSERT INTO documents (
  id,
  initiative_id,
  title,
  category,
  description,
  content,
  created_at,
  updated_at
) VALUES (
  'seguria-sector-solutions',
  'seguria-security',
  'Sector-Specific Solutions & Use Cases',
  'operations',
  'Tailored security solutions for industrial, agricultural, and logistics sectors',
  '<div class="prose">
    <h2>Sector-Specific SegurIA Solutions</h2>

    <h3>INDUSTRIAL MANUFACTURING</h3>
    <ul>
      <li><strong>Challenge:</strong> Equipment theft, unauthorized access, safety incidents</li>
      <li><strong>Solution:</strong> 360° facility monitoring with AI-powered perimeter detection</li>
      <li><strong>Key Features:</strong>
        <ul>
          <li>Real-time personnel tracking and access control</li>
          <li>Equipment usage monitoring and theft prevention</li>
          <li>Safety incident detection (falls, unsafe behavior)</li>
          <li>Predictive maintenance alerts</li>
        </ul>
      </li>
      <li><strong>ROI:</strong> Average 22% reduction in losses, 18-month payback</li>
      <li><strong>Current Customers:</strong> 28 major facilities, including Codelco, CAP, Fundición Hernán Videla Lira</li>
    </ul>

    <h3>AGRICULTURAL OPERATIONS</h3>
    <ul>
      <li><strong>Challenge:</strong> Livestock theft, equipment vandalism, trespassing</li>
      <li><strong>Solution:</strong> Wide-area perimeter monitoring with livestock tracking</li>
      <li><strong>Key Features:</strong>
        <ul>
          <li>Livestock identification and counting (AI computer vision)</li>
          <li>Perimeter breach detection with predictive modeling</li>
          <li>Equipment location tracking and anti-theft alerts</li>
          <li>Weather-resistant deployment for harsh conditions</li>
          <li>Mobile app for remote farm monitoring</li>
        </ul>
      </li>
      <li><strong>ROI:</strong> Average 28% reduction in livestock loss, 12-month payback</li>
      <li><strong>Current Customers:</strong> 42 agricultural cooperatives and large farms</li>
    </ul>

    <h3>LOGISTICS & DISTRIBUTION</h3>
    <ul>
      <li><strong>Challenge:</strong> Cargo theft, supply chain visibility, warehouse efficiency</li>
      <li><strong>Solution:</strong> Integrated cargo tracking with warehouse automation</li>
      <li><strong>Key Features:</strong>
        <ul>
          <li>Real-time cargo tracking with GPS + visual confirmation</li>
          <li>Warehouse layout optimization AI</li>
          <li>Automated inventory reconciliation</li>
          <li>Driver behavior monitoring and safety</li>
          <li>Supply chain visibility dashboard</li>
        </ul>
      </li>
      <li><strong>ROI:</strong> Average 31% efficiency improvement, $2.3M annual savings for major distributor</li>
      <li><strong>Current Customers:</strong> 15 major logistics operators including DHL, Samsur, Transportes TCP</li>
    </ul>

    <h3>Implementation Examples</h3>
    <p><strong>Case Study: Mining Operation (Codelco)</strong></p>
    <ul>
      <li>Before: 45 theft incidents/month, $8.2M annual losses</li>
      <li>After: 1.2 theft incidents/month (97% reduction), $234K annual losses</li>
      <li>ROI: 380% in Year 1, 15-month payback</li>
    </ul>

    <p><strong>Case Study: Agricultural Cooperative (Agri-Sur)</strong></p>
    <ul>
      <li>Before: 18% livestock loss annually, 240 incidents/year</li>
      <li>After: 2% livestock loss, 8 incidents/year (91% reduction)</li>
      <li>ROI: 245% in Year 1, 13-month payback</li>
    </ul>
  </div>',
  NOW(),
  NOW()
) ON CONFLICT (id) DO NOTHING;

-- Document 5: Financial Projections & Business Model
INSERT INTO documents (
  id,
  initiative_id,
  title,
  category,
  description,
  content,
  created_at,
  updated_at
) VALUES (
  'seguria-financial-projections',
  'seguria-security',
  'Financial Projections & Business Model',
  'finance',
  'Detailed financial models, projections, and unit economics',
  '<div class="prose">
    <h2>SegurIA Financial Model & Projections</h2>

    <h3>Pricing Strategy</h3>
    <ul>
      <li><strong>Per-Location SaaS Model:</strong> $2,500-$8,500/month
        <ul>
          <li>Small facilities (1-2 cameras): $2,500/month</li>
          <li>Mid-market (5-20 cameras): $5,000/month</li>
          <li>Enterprise (50+ cameras): $8,500+/month</li>
        </ul>
      </li>
      <li><strong>Implementation & Integration:</strong> 25-40% one-time fees on annual contract value</li>
      <li><strong>Professional Services:</strong> $250/hour consulting (average 80 hours/customer)</li>
      <li><strong>Support & Maintenance:</strong> 16% of annual recurring revenue</li>
    </ul>

    <h3>Unit Economics</h3>
    <ul>
      <li><strong>Average Revenue Per User (ARPU):</strong> $54,000/year per location</li>
      <li><strong>Cost of Goods Sold (COGS):</strong> 28% (cloud infrastructure, data)</li>
      <li><strong>Gross Margin:</strong> 72% on recurring revenue</li>
      <li><strong>Customer Acquisition Cost (CAC):</strong> $18,000</li>
      <li><strong>Payback Period:</strong> 4 months</li>
      <li><strong>Lifetime Value (LTV):</strong> $324,000 (5-year average)</li>
      <li><strong>LTV:CAC Ratio:</strong> 18:1 (excellent)</li>
    </ul>

    <h3>2024 Actuals</h3>
    <ul>
      <li><strong>Installed Customers:</strong> 85 locations</li>
      <li><strong>ARR (Annual Recurring Revenue):</strong> $2.81M</li>
      <li><strong>Revenue Growth:</strong> 156% YoY</li>
      <li><strong>Gross Margin:</strong> 71%</li>
      <li><strong>Operating Expenses:</strong> $1.62M</li>
      <li><strong>EBITDA:</strong> -$0.18M (near breakeven)</li>
      <li><strong>Headcount:</strong> 28 FTEs</li>
    </ul>

    <h3>2025 Projections</h3>
    <ul>
      <li><strong>Installed Customers:</strong> 320 locations (276% growth)</li>
      <li><strong>ARR:</strong> $9.62M (242% growth)</li>
      <li><strong>Revenue Growth:</strong> 242% YoY</li>
      <li><strong>Gross Margin:</strong> 74%</li>
      <li><strong>Operating Expenses:</strong> $2.45M</li>
      <li><strong>EBITDA:</strong> $4.75M (49% margin)</li>
      <li><strong>Headcount:</strong> 72 FTEs</li>
    </ul>

    <h3>2026 Projections</h3>
    <ul>
      <li><strong>Installed Customers:</strong> 890 locations (178% growth)</li>
      <li><strong>ARR:</strong> $26.41M (175% growth)</li>
      <li><strong>Revenue Growth:</strong> 175% YoY</li>
      <li><strong>Gross Margin:</strong> 76%</li>
      <li><strong>Operating Expenses:</strong> $3.82M</li>
      <li><strong>EBITDA:</strong> $16.23M (62% margin)</li>
      <li><strong>Headcount:</strong> 156 FTEs</li>
    </ul>

    <h3>Funding & Use of Capital</h3>
    <ul>
      <li><strong>Series A (Completed 2024):</strong> $4.2M raised
        <ul>
          <li>Product Development: 35%</li>
          <li>Sales & Marketing: 40%</li>
          <li>Operations: 25%</li>
        </ul>
      </li>
      <li><strong>Series B (Planned 2025):</strong> $12M needed
        <ul>
          <li>Geographic Expansion: 40%</li>
          <li>AI R&D: 30%</li>
          <li>Sales Team Growth: 20%</li>
          <li>Infrastructure: 10%</li>
        </ul>
      </li>
    </ul>

    <h3>Exit Scenarios & Valuation</h3>
    <ul>
      <li><strong>Conservative (4x Revenue Multiple):</strong> $105M valuation at 2026 exit</li>
      <li><strong>Base Case (8x Revenue Multiple):</strong> $211M valuation at 2026 exit</li>
      <li><strong>Optimistic (12x Revenue Multiple):</strong> $317M valuation at 2026 exit</li>
    </ul>
  </div>',
  NOW(),
  NOW()
) ON CONFLICT (id) DO NOTHING;
