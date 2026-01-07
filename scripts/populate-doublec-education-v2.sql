-- Ejecutar este script SQL para popular documentos de DoubleC.Education
-- Ejecutar en tu dashboard de Supabase o vía cliente SQL

-- Documento 1: Análisis del Mercado Chileno
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
  completion_percentage, 
  created_at, 
  updated_at,
  metadata
) VALUES (
  '550e8400-e29b-41d4-a716-446655440001'::uuid,
  'doublec-education',
  'Análisis de Mercado Chile & Asociaciones Universitarias',
  'Análisis exhaustivo del mercado EdTech chileno ($285M, 19.3% CAGR), enfoque en asociaciones universitarias como motor de I+D para educación en trading con IA. Dirigido a 185K traders minoristas, 42 universidades y 280+ empresas FinTech.',
  'market-research',
  '["mercado-chile", "edtech", "asociaciones-universitarias", "proyecciones-financieras"]'::jsonb,
  '<h1>Análisis de Mercado Chile - DoubleC.Education</h1><p>Análisis estratégico del mercado educativo chileno con enfoque en innovación I+D impulsada por universidades para plataforma de educación en trading.</p><h2>Tamaño de Mercado</h2><ul><li>Mercado EdTech Chileno: $285M (2024) → $580M (2028) a 19.3% CAGR</li><li>Segmento Educación Financiera: $42M, creciendo 28% YoY</li><li>Traders Minoristas en Chile: 185,000 usuarios activos</li></ul><h2>Estrategia de Asociación Universitaria</h2><ul><li>Universidad de Chile: Socio principal de investigación</li><li>PUC: Integración escuela de negocios</li><li>Universidad de Concepción: Expansión regional</li></ul><h2>Modelo de Ingresos</h2><ul><li>Traders minoristas (60% ingresos): $49-$149/mes</li><li>Licencia institucional universitaria (30%): $5K-$35K anual</li><li>Capacitación B2B FinTech (10%): $2K-$15K anual</li></ul><h2>Proyecciones Financieras</h2><ul><li>2024-2025: $850K ARR, 3,200 usuarios</li><li>2025-2026: $3.2M ARR, 12,500 usuarios</li><li>2026: $8.2M ARR, 32,000 usuarios</li></ul>',
  'market_analysis',
  'published',
  9200,
  100,
  NOW(),
  NOW(),
  '{"version": "2.0", "last_reviewed": "2025-01-07", "change_log": [{"date": "2025-01-07", "changes": ["Reenfocado en mercado Chile", "Énfasis en asociaciones universitarias I+D", "Proyecciones financieras actualizadas para mercado chileno"]}]}'::jsonb
);

-- Documento 2: Arquitectura Técnica
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
  completion_percentage,
  created_at,
  updated_at,
  metadata
) VALUES (
  '550e8400-e29b-41d4-a716-446655440002'::uuid,
  'doublec-education',
  'Arquitectura Técnica & Sistemas de IA',
  'Arquitectura de plataforma, modelos IA/ML (motor de personalización, predicción de mercado, evaluación de riesgo), pipelines de datos e infraestructura para educación de trading en tiempo real integrada con datos del mercado chileno.',
  'technical',
  '["arquitectura", "IA", "machine-learning", "infraestructura"]'::jsonb,
  '<h1>Arquitectura Técnica</h1><p>Arquitectura de microservicios escalable impulsando plataforma DoubleC.Education.</p><h2>Sistemas Core</h2><ul><li>Motor de Aprendizaje Personalizado: Recomendaciones basadas en Transformers</li><li>Modelo de Predicción de Mercado: LSTM + Attention para datos mercado chileno</li><li>Evaluación de Riesgo: Modelo ensemble para análisis riesgo cartera</li><li>Pipeline de Datos en Tiempo Real: Kafka → TimescaleDB → Redis</li></ul><h2>Integración de Datos</h2><ul><li>Datos Mercado Chileno: BVS, datos regulatorios SVS, trading CLP</li><li>Feeds en Tiempo Real: Polygon.io, Alpha Vantage, Binance</li><li>Cumplimiento Local: Integración ChileCMF, SERNAGEOMIN</li></ul><h2>Infraestructura</h2><ul><li>Cloud: AWS EC2, ECS Fargate, SageMaker</li><li>Bases de Datos: PostgreSQL, TimescaleDB, Redis</li><li>Rendimiento: <100ms respuesta API (p95), 99.9% uptime</li></ul>',
  'technical_specification',
  'published',
  6800,
  100,
  NOW(),
  NOW(),
  '{"version": "1.0", "last_reviewed": "2025-01-07"}'::jsonb
);

-- Documento 3: Currículum y Rutas de Aprendizaje
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
  completion_percentage,
  created_at,
  updated_at,
  metadata
) VALUES (
  '550e8400-e29b-41d4-a716-446655440003'::uuid,
  'doublec-education',
  'Diseño de Currículum & Rutas de Aprendizaje',
  'Estructura curricular exhaustiva (10 niveles en 3 rutas) desde fundamentales para principiantes hasta trading profesional. Aprendizaje personalizado con IA, casos de estudio mercado chileno e integración investigación universitaria.',
  'curriculum',
  '["curriculum", "rutas-aprendizaje", "educacion"]'::jsonb,
  '<h1>Diseño de Currículum</h1><p>Tres rutas progresivas desde principiante a trader profesional con personalización con IA.</p><h2>Ruta 1: Fundamentos Principiante (8-12 semanas)</h2><ul><li>Nivel 1: Fundamentos del Trading</li><li>Nivel 2: Análisis Técnico</li><li>Nivel 3: Fundamentos Análisis Fundamental</li></ul><h2>Ruta 2: Practicante Intermedio (12-16 semanas)</h2><ul><li>Nivel 4: Estrategias Técnicas Avanzadas</li><li>Nivel 5: Psicología del Trading & Riesgo</li><li>Nivel 6: Desarrollo de Sistemas</li></ul><h2>Ruta 3: Profesional Avanzado (16-24 semanas)</h2><ul><li>Nivel 7: Trading Cuantitativo</li><li>Nivel 8: Machine Learning para Trading</li><li>Nivel 9: Gestión de Carteras</li></ul><h2>Características IA</h2><ul><li>Dificultad adaptativa basada en rendimiento</li><li>Recomendaciones de contenido personalizadas</li><li>Casos de estudio mercado chileno y ejemplos</li><li>Integración con artículos de investigación universitaria</li></ul>',
  'curriculum_design',
  'published',
  5400,
  95,
  NOW(),
  NOW(),
  '{"version": "2.0", "last_reviewed": "2025-01-07", "change_log": [{"date": "2025-01-07", "changes": ["Agregados casos de estudio mercado chileno", "Integrados recursos investigación universitaria"]}]}'::jsonb
);

-- Documento 4: Marco de Asociación Universitaria
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
  completion_percentage,
  created_at,
  updated_at,
  metadata
) VALUES (
  '550e8400-e29b-41d4-a716-446655440004'::uuid,
  'doublec-education',
  'Estrategia de Asociación Universitaria & I+D',
  'Marco estratégico para colaboraciones universitarias. Detalla asociaciones con Universidad de Chile, PUC y Universidad de Concepción para codesarrollo curricular, avance investigativo y licencia institucional.',
  'strategic',
  '["asociaciones-universitarias", "I+D", "colaboracion-academica", "chile"]'::jsonb,
  '<h1>Estrategia de Asociación Universitaria</h1><p>Universidades como motor para I+D e innovación curricular.</p><h2>Fase 1: Establecimiento de Asociaciones (Q3-Q4 2024)</h2><ul><li>Acuerdos formales de investigación con Universidad de Chile, PUC, U. Concepción</li><li>Codesarrollo de módulos curriculares IA/ML</li><li>Acceso a laboratorios investigación IA universitarios y facultad</li></ul><h2>Fase 2: Integración Curricular (Q1 2025)</h2><ul><li>Integración en 8-10 programas licenciatura finanzas/economía</li><li>2,000+ estudiantes con acceso institucional</li><li>Publicación conjunta artículos investigación</li></ul><h2>Fase 3: Escalamiento Regional (2025-2026)</h2><ul><li>Expansión a 20+ instituciones en LATAM</li><li>Licencia universitaria white-label</li><li>Programas beca y colaboración investigativa</li></ul><h2>Socios Clave</h2><ul><li>Universidad de Chile: Investigación IA principal</li><li>PUC: Innovación fintech escuela negocios</li><li>U. Concepción: Investigación finanzas regional</li></ul>',
  'partnership_strategy',
  'published',
  4200,
  90,
  NOW(),
  NOW(),
  '{"version": "1.0", "last_reviewed": "2025-01-07"}'::jsonb
);

-- Documento 5: Cumplimiento Regulatorio (Chile)
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
  completion_percentage,
  created_at,
  updated_at,
  metadata
) VALUES (
  '550e8400-e29b-41d4-a716-446655440005'::uuid,
  'doublec-education',
  'Marco de Cumplimiento Regulatorio (Chile)',
  'Marco integral de cumplimiento asegurando adherencia completa a regulaciones ChileCMF, SVS, SERNAGEOMIN. Cubre estándares educación financiera, privacidad de datos, prevención manipulación mercado y protección inversionista.',
  'compliance',
  '["regulatorio", "cumplimiento", "chile", "CMF"]'::jsonb,
  '<h1>Marco de Cumplimiento Regulatorio</h1><p>Cumplimiento regulatorio específico mercado chileno asegurando alineamiento plataforma con regulaciones aplicables.</p><h2>Regulaciones Clave</h2><ul><li>ChileCMF (Comisión para el Mercado Financiero): Estándares educación, requisitos divulgación</li><li>SVS (Superintendencia de Valores y Seguros): Reglas trading valores</li><li>SERNAGEOMIN: Regulaciones trading activos ambientales/minería</li><li>DFL 3/1997: Cumplimiento ley mercado valores</li></ul><h2>Medidas de Cumplimiento</h2><ul><li>Revisión Contenido: Todo consejo trading revisado por equipo cumplimiento</li><li>Advertencias de Riesgo: Avisos claros riesgos trading, rendimiento pasado</li><li>Calificación Usuario: Proceso Know-Your-Customer (KYC)</li><li>Protección Datos: Cumplimiento PDPA (Ley Protección Datos Personales)</li><li>Prevención Fraude: Monitoreo transacciones y reporte actividad sospechosa</li></ul><h2>Estándares Educación</h2><ul><li>Contenido acreditado alineado directrices educativas SVS</li><li>Instructores calificados con experiencia mercado financiero chileno</li><li>Auditorías regulares por firma cumplimiento externa</li></ul>',
  'compliance_framework',
  'published',
  3800,
  85,
  NOW(),
  NOW(),
  '{"version": "1.0", "last_reviewed": "2025-01-07"}'::jsonb
);
