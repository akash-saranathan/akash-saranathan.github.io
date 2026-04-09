// ─────────────────────────────────────────────
//  ABOUT SECTION — edit everything inside here
// ─────────────────────────────────────────────

const ABOUT_CONTENT = `

  <!-- Stat cards — full width -->
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-bottom:24px;width:100%;">
    <div class="about-stat">
      <span class="about-stat-number">5+</span>
      <span class="about-stat-label">Years of Experience</span>
    </div>
    <div class="about-stat">
      <span class="about-stat-number">20+</span>
      <span class="about-stat-label">Projects Delivered</span>
    </div>
    <div class="about-stat">
      <span class="about-stat-number">3</span>
      <span class="about-stat-label">Industry Domains</span>
    </div>
    <div class="about-stat">
      <span class="about-stat-number">10+</span>
      <span class="about-stat-label">Students Mentored</span>
    </div>
  </div>

  <!-- Bio — centered narrow column -->
  <div class="about-bio">

    <div class="about-bio-block">
      <h3 class="about-bio-title">What I Build</h3>
      <p>
        I am an <strong>AI/ML Engineer</strong> focused on building end-to-end intelligent systems that go beyond models — systems that reason, automate, and deliver real-world impact. My work spans <strong>AI agents</strong>, <strong>LLMs</strong>, <strong>RAG</strong>, NLP, and Computer Vision, designing scalable solutions from data ingestion to deployment. I specialize in agentic AI systems integrated with <strong>Snowflake, Databricks, PostgreSQL</strong>, deployed on <strong>AWS and Azure</strong>.
      </p>
    </div>

    <div class="about-bio-block">
      <h3 class="about-bio-title">Background</h3>
      <p>
        <strong>MS in Machine Learning & Data Science</strong> from UC San Diego. BE in Electrical Engineering from SSN College, perfect GPA. Research spans <strong>LLMs for genomic modeling</strong>, medical imaging, and ML systems — with a paper accepted at <strong>ICML 2025</strong>. Stack includes Python, PyTorch, TensorFlow, LangChain, SQL, and more.
      </p>
    </div>

    <div class="about-bio-block">
      <h3 class="about-bio-title">What Drives Me</h3>
      <p>
        Driven by curiosity to explore emerging technologies and build systems that make a <strong>meaningful difference</strong>. I enjoy solving complex problems across interdisciplinary domains and contributing to impactful, forward-thinking teams.
      </p>
    </div>

    <div class="about-bio-block">
      <h3 class="about-bio-title">Gratitude & Support</h3>
      <p>
        Behind every line of code and every milestone is the <strong>unwavering support of my Family and Friends</strong> — their encouragement has been my greatest strength. I am deeply grateful for the <strong>blessings of God</strong> that have guided every step of this journey.
      </p>
    </div>

  </div>

  <style>
    /* Stat cards */
    .about-stat {
      background: linear-gradient(135deg, #0b2540, #0f3a60);
      border-radius: 14px;
      padding: 16px 14px;
      text-align: center;
      box-shadow: 0 8px 24px rgba(11,37,64,0.18);
      border: 1px solid rgba(167,221,227,0.15);
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .about-stat:hover { transform: translateY(-4px); box-shadow: 0 14px 32px rgba(11,37,64,0.28); }
    .about-stat-number {
      display: block;
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 800;
      color: #a7dde3;
      line-height: 1;
      margin-bottom: 6px;
    }
    .about-stat-label {
      font-size: 0.85rem;
      color: rgba(255,255,255,0.75);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.06em;
    }

    /* Bio column — centered, narrow */
    .about-bio {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;          /* centers the column */
    }

    .about-bio-block {
      background: #f8fafc;
      border-radius: 16px;
      padding: 20px 28px;
      text-align: center;
      box-shadow: 0 2px 16px rgba(0,0,0,0.06);
      border-top: 3px solid #a7dde3;
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .about-bio-block:hover { transform: translateY(-4px); box-shadow: 0 10px 28px rgba(0,0,0,0.10); }

    .about-bio-title {
      font-family: 'Poppins', sans-serif;
      font-size: 1.15rem;
      font-weight: 700;
      color: #0b2540;
      margin-bottom: 12px;
      letter-spacing: 0.02em;
    }
    .about-bio-block p {
      font-size: 0.97rem;
      color: #475569 !important;
      line-height: 1.85;
      border-left: none !important;
      padding-left: 0 !important;
    }
    .about-bio-block strong {
      color: #0b2540;
      font-weight: 700;
    }
  </style>

`;

document.getElementById('about-content').innerHTML = ABOUT_CONTENT;