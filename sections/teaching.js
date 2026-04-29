// ─────────────────────────────────────────────
//  TEACHING SECTION — edit content here
// ─────────────────────────────────────────────

const TEACHING_CONTENT = `

  <div class="exp-timeline">

    <!-- Ambitio -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/ambitio.jpg" alt="Ambitio"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://ambitio.club" target="_blank">Ambitio ↗</a>
            <h3 class="exp-role">Mentor</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jul 2024 – Present</span>
            <span class="exp-location">📍 Remote</span>
          </div>
        </div>
        <ul class="exp-bullets">
          <li>Mentored students aspiring for <strong>international higher education</strong> through 1:1 guidance sessions focused on university selection, program alignment, and application strategy.</li>
          <li>Assisted in developing high-impact <strong>Statements of Purpose (SOPs) and Letters of Recommendation (LORs)</strong>, improving clarity, structure, and overall admission competitiveness.</li>
          <li>Provided <strong>personalized career and academic pathway guidance</strong> based on individual strengths and long-term goals, enabling more informed and confident decision-making for higher education planning.</li>
        </ul>
        <div class="exp-tags">
          <span>Mentoring</span><span>Career Guidance</span><span>SOP Writing</span><span>Admissions Strategy</span><span>Leadership</span>
        </div>
      </div>
    </div>

    <!-- UCSD ECE TA -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/ucsd-ece.jpg" alt="UCSD"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://ucsd.edu" target="_blank">UC San Diego — ECE Department ↗</a>
            <h3 class="exp-role">Graduate Teaching Assistant</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Jan 2025 – Mar 2025</span>
            <span class="exp-location">📍 San Diego, USA</span>
          </div>
        </div>
        <div class="exp-course-badge">
          <span class="course-label">Course</span>
          <span class="course-name">ECE 143 — Programming for Data Analysis · Winter 2025</span>
        </div>
        <ul class="exp-bullets">
          <li>Served as Teaching Assistant for <strong>ECE 143: Programming for Data Analysis</strong>, supporting instruction in Python fundamentals, data structures, and data science libraries including NumPy, Pandas, and Matplotlib.</li>
          <li>Designed <strong>assignment rubrics and programming assessments</strong> to reinforce core concepts in data analysis and Python, improving clarity of evaluation and student learning outcomes.</li>
          <li>Conducted <strong>office hours and hands-on debugging sessions</strong>, guiding students through Python-based data analysis workflows and strengthening practical programming skills.</li>
        </ul>
        <div class="exp-tags">
          <span>Python</span><span>NumPy</span><span>Pandas</span><span>Matplotlib</span><span>Data Analysis</span><span>Teaching Assistant</span>
        </div>
      </div>
    </div>

    <!-- UCSD CSE TA -->
    <div class="exp-item">
      <div class="exp-icon"><img src="images/ucsd-cse.jpg" alt="UCSD CSE"></div>
      <div class="exp-card">
        <div class="exp-header">
          <div>
            <a class="exp-company" href="https://cse.ucsd.edu" target="_blank">UC San Diego — CSE Department ↗</a>
            <h3 class="exp-role">Graduate Teaching Assistant</h3>
          </div>
          <div class="exp-meta">
            <span class="exp-date">Sep 2024 – Dec 2024</span>
            <span class="exp-location">📍 San Diego, USA</span>
          </div>
        </div>
        <div class="exp-course-badge">
          <span class="course-label">Course</span>
          <span class="course-name">CSE 256 / LING 256 — Statistical NLP · Fall 2024</span>
        </div>
        <ul class="exp-bullets">
          <li>Served as Teaching Assistant for <strong>CSE 256 / LING 256: Statistical Natural Language Processing</strong>, supporting instruction in core NLP concepts including POS tagging, parsing, word sense disambiguation, and probabilistic language models.</li>
          <li>Designed and reviewed <strong>assignments and grading rubrics</strong> focused on statistical NLP methods such as Hidden Markov Models and probabilistic context-free grammars, improving conceptual clarity and evaluation consistency.</li>
          <li>Conducted <strong>office hours and technical guidance sessions</strong>, helping students implement NLP algorithms in Python and strengthen understanding of probabilistic modeling techniques.</li>
        </ul>
        <div class="exp-tags">
          <span>NLP</span><span>Probabilistic Models</span><span>HMM</span><span>PCFG</span><span>Python</span><span>Teaching Assistant</span>
        </div>
      </div>
    </div>

  </div>

  <style>
    .exp-course-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: #eef7ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
      padding: 5px 12px;
      margin-bottom: 14px;
    }
    .course-label {
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #2563EB;
    }
    .course-name {
      font-size: 0.85rem;
      font-weight: 600;
      color: #0b2540;
    }
  </style>

`;

document.getElementById('teaching-content').innerHTML = TEACHING_CONTENT;