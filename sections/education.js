// ─────────────────────────────────────────────
//  EDUCATION SECTION — edit content here
// ─────────────────────────────────────────────

const EDUCATION_CONTENT = `

  <div class="edu-timeline">

    <!-- UCSD -->
    <div class="edu-item">
      <div class="edu-icon"><img src="images/ucsd.jpg" alt="UCSD"></div>
      <div class="edu-card">
        <div class="edu-header">
          <div>
            <a class="edu-institution" href="https://ucsd.edu" target="_blank">University of California, San Diego ↗</a>
            <h3 class="edu-degree">Master of Science — Machine Learning & Data Science</h3>
            <span class="edu-stream">Electrical & Computer Engineering Department</span>
          </div>
          <div class="edu-meta">
            <span class="edu-date">2023 – 2025</span>
            <span class="edu-location">📍 San Diego, USA</span>
          </div>
        </div>

        <div class="edu-badges">
          <div class="edu-badge gpa">
            <span class="badge-label">GPA</span>
            <span class="badge-value">3.8 / 4.0</span>
          </div>
          <div class="edu-badge achievement">
            <span class="badge-icon">🏆</span>
            <span class="badge-text">Top Percentile</span>
          </div>
          <div class="edu-badge achievement">
            <span class="badge-icon">📄</span>
            <span class="badge-text">ICML 2025 Publication</span>
          </div>
        </div>

        <div class="edu-courses">
          <span class="edu-course-label">Key Coursework</span>
          <div class="edu-course-tags">
            <span>Statistical NLP</span>
            <span>Visual Learning</span>
            <SPAN>Machine learning for Physical Application</span>
            <span>Probability & Statistics for Data Science</span>
            <span>Programming for Data Analysis</span>
            <span>Web Mining</span>
            <span>Software Engineering</span>
            <span>& more</span>
          </div>
        </div>
      </div>
    </div>

    <!-- SSN College -->
    <div class="edu-item">
      <div class="edu-icon"><img src="images/ssn-college.jpg" alt="SSN College"></div>
      <div class="edu-card">
        <div class="edu-header">
          <div>
            <a class="edu-institution" href="https://ssn.edu.in" target="_blank">SSN College of Engineering ↗</a>
            <h3 class="edu-degree">Bachelor of Engineering — Electrical & Electronics Engineering</h3>
          </div>
          <div class="edu-meta">
            <span class="edu-date">2019 – 2023</span>
            <span class="edu-location">📍 Chennai, India</span>
          </div>
        </div>

        <div class="edu-badges">
          <div class="edu-badge gpa">
            <span class="badge-label">GPA</span>
            <span class="badge-value">4.0 / 4.0</span>
          </div>
          <div class="edu-badge achievement">
            <span class="badge-icon">🥇</span>
            <span class="badge-text">Distinction</span>
          </div>
          <div class="edu-badge achievement">
            <span class="badge-icon">⭐</span>
            <span class="badge-text">Perfect GPA</span>
          </div>
        </div>

        <div class="edu-courses">
          <span class="edu-course-label">Key Coursework</span>
          <div class="edu-course-tags">
            <span>Python Programming</span>
            <span>Object Oriented Programming</span>
            <span>Numerical Methods</span>
            <span>Electronic Devices & Circuits</span>
            <span>Control Systems</span>
            <span>Electric Vehicles & Renewable Energy</span>
            <span>Microprocessors & Microcontrollers</span>
            <span>& more</span>
          </div>
        </div>
      </div>
    </div>

    <!-- MCC School -->
    <div class="edu-item">
      <div class="edu-icon"><img src="images/mcc.jpg" alt="MCC School"></div>
      <div class="edu-card">
        <div class="edu-header">
          <div>
            <a class="edu-institution" href="#" target="_blank">MCC Higher Secondary School, Chetpet ↗</a>
            <h3 class="edu-degree">Higher Secondary Certificate (HSC)</h3>
            <span class="edu-stream">Computer Science Stream</span>
          </div>
          <div class="edu-meta">
            <span class="edu-date">2005 – 2019</span>
            <span class="edu-location">📍 Chennai, India</span>
          </div>
        </div>

        <div class="edu-badges">
          <div class="edu-badge gpa">
            <span class="badge-label">Score</span>
            <span class="badge-value">95%</span>
          </div>
          <div class="edu-badge achievement">
            <span class="badge-icon">🥈</span>
            <span class="badge-text">School Second Rank</span>
          </div>
        </div>
      </div>
    </div>

  </div>

  <style>
    .edu-timeline {
      position: relative;
      width: 100%;
      padding-left: 32px;
    }
    .edu-timeline::before {
      content: '';
      position: absolute;
      left: 57px;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(to bottom, #a7dde3, #0b2540);
      border-radius: 2px;
    }
    .edu-item {
      display: flex;
      gap: 28px;
      align-items: flex-start;
      margin-bottom: 36px;
      position: relative;
    }
    .edu-icon {
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
    .edu-icon img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
    }
    .edu-card {
      flex: 1;
      background: #f8fafc;
      border-radius: 14px;
      padding: 24px 28px;
      border-left: 4px solid #a7dde3;
      box-shadow: 0 2px 12px rgba(0,0,0,0.05);
      transition: transform .3s ease, box-shadow .3s ease;
    }
    .edu-card:hover { transform: translateX(6px); box-shadow: 0 8px 28px rgba(0,0,0,0.09); }
    .edu-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 8px;
      margin-bottom: 16px;
    }
    .edu-institution {
      font-family: 'Poppins', sans-serif;
      font-size: 1rem;
      font-weight: 700;
      color: #0b2540;
      text-decoration: none;
      display: block;
      margin-bottom: 4px;
      transition: color .2s;
    }
    .edu-institution:hover { color: #a7dde3; }
    .edu-degree {
      font-size: 0.92rem;
      font-weight: 600;
      color: #0f6680;
      margin-bottom: 3px;
    }
    .edu-stream {
      font-size: 0.82rem;
      color: #94a3b8;
      font-style: italic;
    }
    .edu-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 4px;
    }
    .edu-date {
      font-size: 0.82rem;
      font-weight: 700;
      color: #0f3a60;
      background: #e0f2f4;
      padding: 3px 10px;
      border-radius: 20px;
      white-space: nowrap;
    }
    .edu-location {
      font-size: 0.78rem;
      color: #94a3b8;
    }

    /* Badges */
    .edu-badges {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 16px;
    }
    .edu-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 0.82rem;
      font-weight: 600;
    }
    .edu-badge.gpa {
      background: linear-gradient(135deg, #0b2540, #0f3a60);
      color: #a7dde3;
    }
    .edu-badge.gpa .badge-label {
      font-size: 0.72rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .edu-badge.gpa .badge-value {
      font-size: 0.95rem;
      font-weight: 800;
      font-family: 'Poppins', sans-serif;
    }
    .edu-badge.achievement {
      background: #e0f2f4;
      color: #0b2540;
    }
    .edu-badge.achievement .badge-icon {
      font-size: 0.9rem;
    }

    /* Coursework */
    .edu-courses { margin-top: 4px; }
    .edu-course-label {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #94a3b8;
      display: block;
      margin-bottom: 8px;
    }
    .edu-course-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 7px;
    }
    .edu-course-tags span {
      font-size: 0.8rem;
      font-weight: 600;
      padding: 4px 12px;
      border-radius: 20px;
      background: linear-gradient(135deg, #0b2540, #0f3a60);
      color: #a7dde3;
      transition: transform .2s ease;
      cursor: default;
    }
    .edu-course-tags span:hover { transform: translateY(-2px); }
  </style>

`;

document.getElementById('education-content').innerHTML = EDUCATION_CONTENT;