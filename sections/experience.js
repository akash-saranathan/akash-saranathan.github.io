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
          <li>Engineered <strong>LangChain-powered ML and computer vision pipelines</strong> for Document Anomaly Detection (DAD), achieving <strong>95%+ accuracy</strong> across invoices, contracts, KYC, and compliance documents.</li>
          <li>Designed end-to-end <strong>NLP and RAG pipelines</strong> with metadata tagging, semantic search, and multi-class document classification — improving retrieval accuracy, compliance reporting, and AI explainability.</li>
          <li>Architected <strong>enterprise-grade chatbot orchestration</strong> for the COAST platform with metadata filters, PostgreSQL/Supabase RAG integration, and real-time analytics insights.</li>
          <li>Built unified <strong>ETL pipelines from Snowflake and SharePoint</strong>, reducing data onboarding time by <strong>30%</strong> and enabling fresh data for ML model training and business intelligence.</li>
          <li>Implemented <strong>MLOps quality gates</strong> with Pytest-driven data validation, anomaly detection, and schema enforcement — increasing AI output reliability for production analytics.</li>
          <li>Automated data ingestion and enrichment workflows using <strong>Python and Power Automate</strong>, achieving <strong>50% faster execution</strong>, full lineage tracking, and zero-downtime scheduling.</li>
          <li>Developed interactive <strong>monitoring dashboards with Power BI, Tableau, and Plotly Dash</strong> to track pipeline health, model performance (latency, accuracy, drift), and business KPIs.</li>
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
          <li>Built an <strong>LLM-powered AI agent</strong> using LangChain and LlamaIndex for natural-language queries over SQL databases, improving user accessibility and query efficiency by <strong>40%</strong>.</li>
          <li>Developed <strong>data-driven AI pipelines</strong> to extract, analyze, and generate actionable insights from tower datasets, enhancing operational decision-making by <strong>20%</strong>.</li>
          <li>Automated data ingestion and preprocessing workflows, reducing manual workload and preparing datasets for rapid <strong>AI model experimentation and deployment</strong>.</li>
        </ul>
        <div class="exp-tags">
          <span>LLM Agents</span><span>LangChain</span><span>LlamaIndex</span><span>SQL</span><span>NLP</span><span>Data Pipelines</span>
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
          <li>Conducted comprehensive <strong>data analysis using PostgreSQL</strong> for data collection, correlation identification, and feature selection, with visualizations using Matplotlib and Seaborn.</li>
          <li>Designed and implemented <strong>Random Forest and regression models</strong> to predict patient treatment timelines, achieving <strong>90%+ accuracy</strong> and improving recovery workflows.</li>
          <li>Developed <strong>cloud-based predictive dashboards</strong> using AWS (S3, Redshift, QuickSight, Amazon Q), providing actionable insights into patient records and program trends — reducing decision-making time by <strong>30%</strong>.</li>
        </ul>
        <div class="exp-tags">
          <span>PostgreSQL</span><span>Random Forest</span><span>AWS</span><span>Data Analysis</span><span>Predictive Modeling</span><span>Seaborn</span>
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
          <li>Evaluated electrical machine performance using analytical tools and <strong>optimized model selection techniques</strong>, improving efficiency by <strong>20%</strong> and stability by <strong>15%</strong>.</li>
          <li>Conducted analysis and testing using <strong>MATLAB, ANSYS, and Motorsolve</strong> to improve accuracy and stability of machine operations.</li>
          <li>Designed and tested hardware components ensuring <strong>100% compliance</strong> with industry standards and requirements.</li>
        </ul>
        <div class="exp-tags">
          <span>MATLAB</span><span>ANSYS</span><span>Data Analysis</span><span>Python</span><span>Research</span>
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
          <li>Contributed to the construction of a <strong>400 KV GIS / 200 KV AIS substation</strong> project using industry-standard design software.</li>
          <li>Gained hands-on expertise in <strong>power systems and transmission lines</strong> — bus bars, relays, circuit breakers, isolators, protection systems, and transformers.</li>
          <li>Designed a <strong>layout system arrangement</strong> for GIS substation development and control using SCADA systems.</li>
        </ul>
        <div class="exp-tags">
          <span>Power Systems</span><span>SCADA</span><span>GIS Substation</span><span>Electrical Engineering</span>
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
          <li>Gained practical experience with <strong>auto transformers and distribution generators</strong> in a 230 KV substation environment.</li>
          <li>Studied <strong>power transmission, cable layouts, and energy measurement</strong> systems in a live operational setting.</li>
          <li>Designed a <strong>safety scheme using Buchholz relay</strong> for transformer protection during operations and maintenance.</li>
        </ul>
        <div class="exp-tags">
          <span>Power Distribution</span><span>Transformers</span><span>Energy Measurement</span><span>Electrical Systems</span>
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

