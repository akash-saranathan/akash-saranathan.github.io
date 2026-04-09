// ─────────────────────────────────────────────
//  SKILLS SECTION — edit content here
// ─────────────────────────────────────────────

const SKILLS_CONTENT = `

  <div class="skills-grid">

    <!-- Row 1 -->
    <div class="skill-card">
      <div class="skill-card-header">
        <span class="skill-card-icon">💻</span>
        <h3 class="skill-card-title">Languages</h3>
      </div>
      <div class="skill-tags">
        <span>🐍 Python</span>
        <span>📊 R</span>
        <span>⚙️ C</span>
        <span>⚙️ C++</span>
        <span>🗄️ SQL</span>
        <span>🐘 PostgreSQL</span>
        <span>☕ Java</span>
        <span>🌐 JavaScript</span>
        <span>🌐 HTML</span>
        <span>📐 MATLAB</span>
        <span>🔧 Git</span>
      </div>
    </div>

    <div class="skill-card">
      <div class="skill-card-header">
        <span class="skill-card-icon">🤖</span>
        <h3 class="skill-card-title">ML & AI Frameworks</h3>
      </div>
      <div class="skill-tags">
        <span>🔥 PyTorch</span>
        <span>🧠 TensorFlow</span>
        <span>🔗 Keras</span>
        <span>🔬 Scikit-learn</span>
        <span>👁️ OpenCV</span>
        <span>⚡ PySpark</span>
        <span>🐼 Pandas</span>
        <span>🔢 NumPy</span>
        <span>📈 Matplotlib</span>
        <span>🔩 KNIME</span>
        <span>🦙 LlamaIndex</span>
        <span>🔗 LangChain</span>
      </div>
    </div>

    <div class="skill-card">
      <div class="skill-card-header">
        <span class="skill-card-icon">☁️</span>
        <h3 class="skill-card-title">Cloud & Data Platforms</h3>
      </div>
      <div class="skill-tags">
        <span>☁️ AWS</span>
        <span>🔷 Azure</span>
        <span>🧱 Databricks</span>
        <span>❄️ Snowflake</span>
        <span>🌐 Oracle Cloud</span>
        <span>📊 Power BI</span>
        <span>📉 Tableau</span>
        <span>📗 Excel</span>
        <span>⚡ Power Automate</span>
        <span>🗃️ Supabase</span>
      </div>
    </div>

    <!-- Row 2 -->
    <div class="skill-card skill-card-wide">
      <div class="skill-card-header">
        <span class="skill-card-icon">🧬</span>
        <h3 class="skill-card-title">AI/ML Domains</h3>
      </div>
      <div class="skill-tags">
        <span>🤖 Machine Learning</span>
        <span>🧠 Deep Learning</span>
        <span>💬 NLP</span>
        <span>🔮 Large Language Models</span>
        <span>✍️ Prompt Engineering</span>
        <span>👁️ Computer Vision</span>
        <span>📚 RAG</span>
        <span>🎨 Generative AI</span>
        <span>🏗️ Data Engineering</span>
        <span>📊 Data Science</span>
        <span>📡 Data Analytics</span>
        <span>🤝 AI Agents</span>
      </div>
    </div>

    <div class="skill-card skill-card-wide">
      <div class="skill-card-header">
        <span class="skill-card-icon">⚙️</span>
        <h3 class="skill-card-title">MLOps & Engineering</h3>
      </div>
      <div class="skill-tags">
        <span>🔄 ETL Pipelines</span>
        <span>🚀 Model Deployment</span>
        <span>⚡ FastAPI</span>
        <span>🌶️ Flask</span>
        <span>🔁 CI/CD</span>
        <span>✅ Data Validation & Testing</span>
        <span>🤖 Automation</span>
        <span>🔌 API Development</span>
        <span>📦 Docker</span>
        <span>🧪 Pytest</span>
        <span>📊 Model Monitoring</span>
        <span>🔍 Data Quality</span>
      </div>
    </div>

  </div>

  <style>
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 20px;
      width: 100%;
      row-gap: 36px;
    }

    .skill-card-wide {
      grid-column: span 1;
    }

    /* Row 2 — 2 cards centered */
    .skill-card:nth-child(1),
    .skill-card:nth-child(2),
    .skill-card:nth-child(3) { grid-column: span 2; }
    .skill-card:nth-child(4) { grid-column: 1 / span 3; }
    .skill-card:nth-child(5) { grid-column: 4 / span 3; }

    /* Responsive */
    @media (max-width: 900px) {
      .skills-grid { grid-template-columns: 1fr 1fr; }
      .skill-card:nth-child(4),
      .skill-card:nth-child(5) { grid-column: span 1; }
    }
    @media (max-width: 600px) {
      .skills-grid { grid-template-columns: 1fr; }
      .skill-card:nth-child(4),
      .skill-card:nth-child(5) { grid-column: span 1; }
    }

    .skill-card {
      background: #f8fafc;
      border-radius: 16px;
      padding: 32px;
      border: 1px solid #e2e8f0;
      box-shadow: 0 2px 12px rgba(0,0,0,0.04);
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .skill-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 28px rgba(0,0,0,0.09);
    }

    .skill-card-header {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 16px;
      padding-bottom: 12px;
      border-bottom: 2px solid #a7dde3;
    }
    .skill-card-icon {
      font-size: 1.4rem;
    }
    .skill-card-title {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: #0b2540;
      margin: 0;
    }

    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill-tags span {
      font-size: 0.85rem;
      font-weight: 600;
      padding: 7px 14px;
      border-radius: 20px;
      background: linear-gradient(135deg, #0b2540, #0f3a60);
      color: #a7dde3;
      letter-spacing: 0.02em;
      transition: transform .2s ease, box-shadow .2s ease;
      cursor: default;
    }
    .skill-tags span:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(11,37,64,0.2);
    }
  </style>

`;

document.getElementById('skills-content').innerHTML = SKILLS_CONTENT;