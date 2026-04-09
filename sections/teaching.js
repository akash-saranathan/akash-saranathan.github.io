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
          <li>Guide students aspiring to pursue <strong>higher education abroad</strong> through personalized one-on-one sessions — covering university selection, course fit, and application strategy.</li>
          <li>Help students craft compelling <strong>Statements of Purpose (SOPs) and Letters of Recommendation (LORs)</strong>, significantly improving their admission profiles.</li>
          <li>Provide tailored <strong>career and course guidance</strong> based on individual strengths, interests, and long-term goals — fostering confidence and clarity in the higher education journey.</li>
        </ul>
        <div class="exp-tags">
          <span>Mentoring</span><span>Career Counseling</span><span>SOP / LOR</span><span>Strategic Planning</span><span>Leadership</span>
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
          <li>Supported <strong>ECE 143: Programming for Data Analysis</strong> — a course covering Python fundamentals, data structures, algorithms, and key libraries including <strong>NumPy, Pandas, and Matplotlib</strong>.</li>
          <li>Developed <strong>assignment rubrics and quizzes</strong> to reinforce core Python and data analysis concepts, improving student learning outcomes.</li>
          <li>Conducted <strong>office hours</strong> to guide students through programming assignments and help them navigate the Python ecosystem for data analysis.</li>
        </ul>
        <div class="exp-tags">
          <span>Python</span><span>NumPy</span><span>Pandas</span><span>Matplotlib</span><span>Data Analysis</span><span>Teaching</span>
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
          <li>Supported <strong>CSE 256: Statistical Natural Language Processing</strong> — covering POS tagging, word sense disambiguation, parsing, <strong>Markov models, Hidden Markov Models, and probabilistic context-free grammars</strong>.</li>
          <li>Designed <strong>comprehensive assignments and rubrics</strong> to deepen student understanding of statistical NLP methods and improve educational outcomes.</li>
          <li>Conducted <strong>office hours</strong> helping students work through complex NLP algorithms and Python implementations.</li>
        </ul>
        <div class="exp-tags">
          <span>NLP</span><span>Statistical Models</span><span>HMM</span><span>Python</span><span>Curriculum Development</span><span>Teaching</span>
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