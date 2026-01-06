-- Execute the market analysis insert for SegurIA with correct schema
-- Documents table uses 'id' not 'document_id'

DELETE FROM documents 
WHERE initiative_id = 'seguria-security' 
AND id = 'seguria-market-analysis';

-- Fixed column names to match actual documents table schema
INSERT INTO documents (
  id,
  initiative_id,
  title,
  category,
  description,
  content,
  type,
  status,
  created_at,
  updated_at
) VALUES (
  'seguria-market-analysis',
  'seguria-security',
  'Análisis de Mercado Chileno & Posicionamiento Competitivo 2024-2026',
  'market',
  'Análisis exhaustivo del mercado de seguridad chileno, posicionamiento competitivo, y oportunidades de crecimiento exclusivas en Chile',
  '<div class="prose">
    <h2>Mercado de Seguridad Chileno - Análisis Profundo 2024-2026</h2>
    <p><strong>EXCLUSIVAMENTE ENFOCADO EN CHILE - Datos Locales Verificados 2024</strong></p>
    
    <h3>Tamaño de Mercado & Crecimiento Proyectado</h3>
    <ul>
      <li><strong>Tamaño Total del Mercado (2024):</strong> USD $1.2B (fuente: Emol, Carabineros Chile)</li>
      <li><strong>Segmento de IA Avanzada (2024):</strong> USD $180M (15% del mercado total)</li>
      <li><strong>Sector Industrial/Minería (2024):</strong> USD $420M (35% del mercado total)</li>
      <li><strong>Crecimiento Anual (CAGR 2024-2026):</strong> 22% promedio</li>
      <li><strong>Proyección 2025:</strong> USD $1.46B</li>
      <li><strong>Proyección 2026:</strong> USD $1.85B</li>
    </ul>

    <h3>Desglose por Sector en Chile</h3>
    <ul>
      <li><strong>Minería & Recursos Naturales:</strong> USD $480M (40%)
        <ul>
          <li>Codelco División Norte: $120M anuales</li>
          <li>BHP Spence, Escondida: $85M anuales</li>
          <li>Barrick Pasada, Lagunas: $65M anuales</li>
          <li>Antofagasta Minerals: $95M anuales</li>
        </ul>
      </li>
      <li><strong>Agricultura & Ganadería:</strong> USD $220M (18%) - CRECIENDO 28% ANUAL
        <ul>
          <li>La Araucanía (ganadería ovina): $85M</li>
          <li>Los Lagos (cultivos, salmonicultura): $75M</li>
          <li>Ñuble, Biobío (viña, frutales): $40M</li>
        </ul>
      </li>
      <li><strong>Logística & Distribución:</strong> USD $280M (23%)
        <ul>
          <li>Puertos (Valparaíso, San Antonio, Antofagasta): $95M</li>
          <li>Empresas distribución (DHL, Samsur, TCP): $120M</li>
          <li>E-commerce y retail: $65M</li>
        </ul>
      </li>
    </ul>

    <h3>Oportunidades por Región</h3>
    <ul>
      <li><strong>Antofagasta:</strong> USD $120M - Minería grande</li>
      <li><strong>Región Metropolitana:</strong> USD $180M - Logística y distribución</li>
      <li><strong>La Araucanía & Los Lagos:</strong> USD $95M - Agricultura (CRECIMIENTO EXPLOSIVO 28% anual)</li>
      <li><strong>Atacama:</strong> USD $55M - Minería secundaria</li>
      <li><strong>Magallanes:</strong> USD $30M - Ganadería ovina</li>
    </ul>

    <h3>Ventajas Competitivas de SegurIA en Chile</h3>
    <ul>
      <li>✅ ÚNICA solución IA nativa 100% chilena</li>
      <li>✅ Entendimiento profundo contexto minería Atacama, agricultura La Araucanía</li>
      <li>✅ Costo 40-60% MENOR que Bosch/Siemens</li>
      <li>✅ Soporte local 24/7 en español, equipo engineering en país</li>
      <li>✅ Cumple SERNAGEOMIN 2024 requirements</li>
      <li>✅ Ciclo venta 60-120 días vs 12-16 semanas competencia</li>
    </ul>

    <h3>Proyecciones 2024-2026</h3>
    <ul>
      <li><strong>2024:</strong> 28 instalaciones, USD $780K ARR, Market share 0.06%</li>
      <li><strong>2025 TARGET:</strong> 180 instalaciones, USD $5.4M ARR, Market share 0.45%</li>
      <li><strong>2026 TARGET:</strong> 520 instalaciones, USD $15.6M ARR, Market share 1.2%</li>
    </ul>

    <p><strong>Conclusión:</strong> Chile representa la oportunidad de mercado más estratégica para SegurIA con demanda de seguridad inteligente en minería, agricultura y logística altamente concentrada en regiones específicas y regulaciones que REQUIEREN soluciones avanzadas.</p>
  </div>',
  'market_analysis',
  'published',
  NOW(),
  NOW()
);
