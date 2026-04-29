// ─────────────────────────────────────────────
//  RESEARCH & PUBLICATIONS SECTION
// ─────────────────────────────────────────────

const RESEARCH_CONTENT = `

  <div class="exp-timeline">

    <!-- GeneChat / CMICS — ICML 2025 -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/ucsd.jpg" alt="UCSD"></div>
      <div class="exp-card research-highlight">
        <div class="icml-badge">🏆 ICML 2025 Workshop — Accepted</div>
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://mics.ucsd.edu/" target="_blank">Center for Machine Intelligence, Computing & Security, UC San Diego ↗</a>
            <h3 class="exp-role"><a href="https://www.biorxiv.org/content/biorxiv/early/2025/06/06/2025.06.05.658031.full.pdf" target="_blank" class="paper-title-link">GeneChat: Large Language Models for Gene Function Prediction ↗</a></h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Aug 2024 – Jun 2025</span>
            <span class="exp-location">📍 San Diego, USA</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Designed and fine-tuned <strong>multi-modal Large Language Models (LLMs)</strong> for gene function prediction, enabling scalable and context-aware genomic reasoning.</li>
          <li>Built robust <strong>data pipelines using NCBI datasets</strong>, processing and structuring large-scale biological data for model training and evaluation.</li>
          <li>Achieved a <strong>BLEU score of 0.205</strong>, outperforming baseline GPT models (0.143), a <strong>43% improvement</strong> in prediction quality.</li>
          <li>Proposed <strong>GeneChat</strong>, a novel LLM-driven framework for genomic understanding, accepted at an <strong>ICML 2025 Workshop</strong>.</li>
        </ul>
        <div class="exp-tags">
          <span>LLMs</span><span>Genomics</span><span>Fine-tuning</span><span>PyTorch</span><span>NLP</span><span>Bioinformatics</span><span>ICML 2025</span>
        </div>
      </div>
    </div>

    <!-- Shiley Eye Institute -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/shiley.jpg" alt="Shiley Eye Institute"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://shileyeye.ucsd.edu" target="_blank">UC San Diego Shiley Eye Institute ↗</a>
            <h3 class="exp-role">Computer Vision Research — Medical Imaging</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">May 2024 – Dec 2024</span>
            <span class="exp-location">📍 San Diego, USA</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Developed <strong>computer vision pipelines</strong> using edge detection (Canny, Roberts, Sobel) to enhance medical image quality and feature extraction.</li>
          <li>Trained <strong>CNN-based models</strong> for automated detection of eye diseases, including glaucoma, from X-ray and imaging data.</li>
          <li>Implemented <strong>segmentation models</strong> to identify vaso-obliteration zones and neovascular regions, achieving <strong>85% precision</strong>.</li>
        </ul>
        <div class="exp-tags">
          <span>Computer Vision</span><span>CNN</span><span>Medical Imaging</span><span>Image Segmentation</span><span>Deep Learning</span><span>Python</span>
        </div>
      </div>
    </div>

    <!-- Solar Pump — SSN Funded -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/ssn-college.jpg" alt="SSN College"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://www.ssn.edu.in/" target="_blank">SSN College of Engineering ↗</a>
            <h3 class="exp-role">Design & Development of Energy Efficient Motor Drive for Solar Pump Application</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">2022 – 2023</span>
            <span class="exp-location">📍 Chennai, India</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Designed a <strong>rare earth-free, energy-efficient motor drive</strong> achieving IE4 efficiency standards for solar-powered pumping systems.</li>
          <li>Conducted <strong>electromagnetic and thermal analysis</strong> using ANSYS Maxwell and Motorsolve, optimizing performance and durability.</li>
          <li>Optimized motor and pump design parameters for <strong>high pressure output and reduced torque ripple</strong>.</li>
          <li>Delivered a comprehensive <strong>research study</strong> covering simulation, experimental validation, and performance benchmarking.</li>
        </ul>
        <div class="exp-tags">
          <span>ANSYS Maxwell</span><span>Motorsolve</span><span>FEA</span><span>Motor Design</span><span>Solar Energy</span><span>MATLAB</span><span>Research</span>
        </div>
      </div>
    </div>

  </div>

  <style>
    .research-highlight {
      border-left: 4px solid #f59e0b !important;
      background: #fffbf0 !important;
    }

    .paper-title-link {
    color: #0f6680;
    text-decoration: none;
    transition: color .2s;
    }
    .paper-title-link:hover { color: #b45309; }
    .icml-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: linear-gradient(135deg, #92400e, #b45309);
      color: #fef3c7;
      font-size: 0.78rem;
      font-weight: 700;
      padding: 5px 14px;
      border-radius: 20px;
      margin-bottom: 14px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  </style>

`;

document.getElementById('research-content').innerHTML = RESEARCH_CONTENT;