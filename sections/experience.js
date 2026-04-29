// ─────────────────────────────────────────────
//  EXPERIENCE SECTION — edit content here
// ─────────────────────────────────────────────

const EXPERIENCE_CONTENT = `<div class="exp-timeline">

    <!-- Xforia -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/xforia.jpg" alt="Xforia"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://xforia.com" target="_blank">Xforia, Inc ↗</a>
            <h3 class="exp-role">AI/ML Engineer</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jul 2025 – Present</span>
            <span class="exp-location">📍 Dallas, USA</span>
          </div>
        </div>
        <ul class="exp-bullets">
        <li>
          Built intelligent <strong>LangChain-powered ML and computer vision systems</strong> for Document Anomaly Detection (DAD), achieving <strong>95%+ accuracy</strong> across invoices, contracts, and KYC workflows while reducing compliance risk.
        </li>

        <li>
          Designed an <strong>AI agent–driven recruitment automation system</strong> that extracts job requirements, integrates candidate data from Supabase, ranks profiles, and automates screening workflows — reducing manual effort by <strong>~60%</strong>.
        </li>

        <li>
          Developed scalable <strong>NLP and RAG pipelines</strong> with metadata-aware retrieval, semantic search, and multi-class classification — significantly improving document discovery, explainability, and compliance reporting.
        </li>

        <li>
          Architected <strong>enterprise AI chatbot orchestration</strong> for the COAST platform, integrating metadata filtering, PostgreSQL (Supabase) retrieval, and real-time analytics for decision intelligence.
        </li>

        <li>
          Designed and deployed <strong>unified ETL pipelines</strong> across Snowflake and SharePoint, reducing data onboarding time by <strong>30%</strong> and enabling continuously updated ML and BI systems.
        </li>

        <li>
          Established <strong>MLOps quality frameworks</strong> using Pytest-driven validation, anomaly detection, and schema enforcement — ensuring reliability of production AI pipelines.
        </li>

        <li>
          Automated large-scale <strong>data ingestion and enrichment workflows</strong> using Python and Power Automate, achieving <strong>50% faster execution</strong> with end-to-end lineage tracking.
        </li>

        <li>
          Created <strong>interactive monitoring dashboards</strong> (Power BI, Tableau, Plotly Dash) to visualize pipeline health, model performance (latency, drift, accuracy), and business KPIs in real time.
        </li>
      </ul>
        <div class="exp-tags">
          <span>AI Agents</span><span>RAG</span><span>NLP</span><span>MLOps</span><span>Snowflake</span><span>PostgreSQL</span><span>Power BI</span><span>Python</span>
        </div>
      </div>
    </div>

    <!-- Qualcomm Institute -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/qualcomm.jpg" alt="Qualcomm Institute"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://qi.ucsd.edu" target="_blank">Qualcomm Institute↗</a>
            <h3 class="exp-role">AI/ML Engineer</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jan 2025 – Jun 2025</span>
            <span class="exp-location">📍 San Diego, USA</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Built an <strong>LLM-powered AI agent</strong> using LangChain and LlamaIndex to enable natural-language querying over SQL databases, improving query efficiency and user accessibility by <strong>40%</strong>.</li>
          <li>Developed <strong>data-driven ML pipelines</strong> to process and analyze large-scale tower datasets, generating actionable insights that improved operational decision-making by <strong>20%</strong>.</li>
          <li>Designed and automated <strong>end-to-end data ingestion and preprocessing workflows</strong>, accelerating dataset readiness for rapid model experimentation and deployment.</li>
        </ul>
        <div class="exp-tags">
          <span>LLM Agents</span><span>LangChain</span><span>LlamaIndex</span><span>RAG</span><span>Semantic Search</span><span>SQL</span>
        </div>
      </div>
    </div>

    <!-- Plethy -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/plethy.jpg" alt="Plethy"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://plethy.com" target="_blank">Plethy, Inc ↗</a>
            <h3 class="exp-role">ML Data Scientist — Internship</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jun 2024 – Sep 2024</span>
            <span class="exp-location">📍 San Jose, USA</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Performed <strong>SQL-based exploratory data analysis</strong> on patient datasets, identifying key correlations and features to support predictive modeling and clinical decision workflows.</li>
          <li>Built <strong>Random Forest and regression models</strong> to predict patient treatment timelines, achieving <strong>90%+ accuracy</strong> and improving recovery planning efficiency.</li>
          <li>Developed <strong>cloud-based predictive dashboards</strong> using AWS (S3, Redshift, QuickSight), enabling real-time insights into patient trends and reducing decision-making time by <strong>30%</strong>.</li>
        </ul>
        <div class="exp-tags">
          <span>PostgreSQL</span><span>Random Forest</span><span>AWS</span><span>Predictive Modeling</span><span>Data Visualization</span><span>Regression</span>
        </div>
      </div>
    </div>

    <!-- SSN Research -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/ssn.jpg" alt="SSN College"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://www.ssn.edu.in/" target="_blank">Shiv Nadar University↗</a>
            <h3 class="exp-role">Research Data Analyst</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jan 2022 – Dec 2022</span>
            <span class="exp-location">📍 Chennai, India</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Analyzed <strong>electrical machine performance data</strong> to optimize model selection strategies, improving efficiency by <strong>30%</strong> and operational stability by <strong>20%</strong>.</li>
          <li>Conducted <strong>simulation-driven data analysis</strong> using MATLAB, ANSYS, and Motorsolve to evaluate system behavior and enhance accuracy of performance predictions.</li>
          <li>Designed and validated <strong>engineering components</strong> through data-backed testing, ensuring <strong>100% compliance</strong> with industry standards and reliability requirements.</li>
        </ul>
        <div class="exp-tags">
          <span>MATLAB</span><span>ANSYS</span><span>Simulation</span><span>Data Analysis</span><span>Model Optimization</span>
        </div>
      </div>
    </div>

    <!-- Larsen & Toubro -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/lt.jpg" alt="Larsen & Toubro"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://www.larsentoubro.com" target="_blank">Larsen & Toubro ↗</a>
            <h3 class="exp-role">Engineer Intern</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jul 2022 – Aug 2022</span>
            <span class="exp-location">📍 Chennai, India</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Supported design and development of a <strong>400 KV GIS / 200 KV AIS substation</strong> using industry-standard electrical design tools, contributing to large-scale power infrastructure planning.</li>

          <li>Worked on <strong>power system components and protection architecture</strong>, including relays, circuit breakers, isolators, bus bars, and transformers, gaining practical exposure to transmission and distribution systems.</li>

          <li>Assisted in designing a <strong>substation layout and control system</strong> integrating SCADA for monitoring and operational control of electrical infrastructure.</li>
        </ul>
        <div class="exp-tags">
          <span>Power Systems</span><span>SCADA</span><span>Substation Design</span><span>Electrical Engineering</span><span>Control Systems</span>
        </div>
      </div>
    </div>

    <!-- TNEB -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/tneb.jpg" alt="TNEB"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://www.tangedco.gov.in" target="_blank">Tamil Nadu Electricity Board (TNEB) ↗</a>
            <h3 class="exp-role">Engineer Intern</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jul 2021 – Aug 2021</span>
            <span class="exp-location">📍 Chennai, India</span>
          </div>
        </div>
        <ul class="exp-bullets">
        <li>Worked in a <strong>230 KV substation environment</strong>, gaining hands-on exposure to auto transformers, distribution generators, and high-voltage operational systems.</li>

        <li>Studied and analyzed <strong>power transmission infrastructure</strong>, including cable layouts and energy measurement systems in a live grid environment.</li>

        <li>Designed a <strong>transformer protection scheme using Buchholz relay</strong>, focusing on fault detection and safety mechanisms during operation and maintenance activities.</li>
      </ul>
        <div class="exp-tags">
          <span>Power Distribution</span><span>Transformers</span><span>Substation Systems</span><span>Energy Measurement</span><span>Protection Systems</span>
        </div>
      </div>
    </div>

  </div>

  <style>
    .exp-timeline {
      position: relative;
      width: 100%;
      padding-left: 32px;
    }
    .exp-timeline::before {
      content: '';
      position: absolute;
      left: 57px;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, #a7dde3, #0b2540);
      border-radius: 2px;
    }
    .exp-item {
      display: flex;
      gap: 28px;
      align-items: flex-start;
      margin-bottom: 36px;
      position: relative;
    }
    .exp-icon {
      width: 52px;
      height: 52px;
      min-width: 52px;
      background: #ffffff;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 14px rgba(11,37,64,0.25);
      border: 3px solid #a7dde3;
      z-index: 1;
      overflow: hidden;
      padding: 4px;
    }
    .exp-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
    .exp-card {
      flex: 1;
      background: #f8fafc;
      border-radius: 14px;
      padding: 24px 28px;
      border-left: 4px solid #a7dde3;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .exp-card:hover { transform: translateX(6px); box-shadow: 0 8px 28px rgba(0,0,0,0.09); }
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 14px;
    }
    .exp-company {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: #0b2540;
      text-decoration: none;
      transition: color .2s;
      display: block;
      margin-bottom: 3px;
    }
    .exp-company:hover { color: #a7dde3; }
    .exp-role {
      font-size: 0.92rem;
      font-weight: 600;
      color: #0f6680;
    }
    .exp-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }
    .exp-date {
      font-size: 0.82rem;
      font-weight: 700;
      color: #0f3a60;
      background: #e0f2f4;
      padding: 3px 10px;
      border-radius: 20px;
      white-space: nowrap;
    }
    .exp-location {
      font-size: 0.78rem;
      color: #94a3b8;
    }
    .exp-bullets {
      padding-left: 18px;
      display: flex;
      flex-direction: column;
      gap: 7px;
      margin-bottom: 16px;
    }
    .exp-bullets li {
      font-size: 0.92rem;
      color: #475569;
      line-height: 1.75;
    }
    .exp-bullets strong {
      color: #0b2540;
      font-weight: 700;
    }
    .exp-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
      /* margin-top: 4px; */
    }
    .exp-tags span {
      background: #e0f2f4;
      color: #0b2540;
      font-size: 0.75rem;
      font-weight: 600;
      padding: 3px 10px;
      border-radius: 20px;
      letter-spacing: 0.03em;
    }
  </style>

`;

// document.getElementById('experience-content').innerHTML = EXPERIENCE_CONTENT;
document.getElementById('experience-content').innerHTML = EXPERIENCE_CONTENT.trim();

