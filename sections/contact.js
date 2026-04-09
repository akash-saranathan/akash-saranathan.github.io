const CONTACT_CONTENT = `

  <div class="contact-wrap">

    <div class="contact-intro">
      <p class="contact-tagline">Let’s connect</p>
      <p class="contact-sub">Whether it’s technology, sports, music, or collaboration — I would love to hear from you. Open to ideas, discussions, and fruitful conversations.</p>
    </div>

    <div class="contact-cards-row">

      <a href="mailto:youremail@example.com" class="contact-card">
        <div class="contact-card-icon">
          <img src="https://www.google.com/s2/favicons?sz=64&domain=gmail.com" alt="Email">
        </div>
        <span class="contact-card-label">Email</span>
        <span class="contact-card-value">example@example.com</span>
        <span class="contact-card-arrow">→</span>
      </a>

      <a href="https://linkedin.com/in/a-saranathan" target="_blank" class="contact-card">
        <div class="contact-card-icon">
          <img src="https://www.google.com/s2/favicons?sz=64&domain=linkedin.com" alt="LinkedIn">
        </div>
        <span class="contact-card-label">LinkedIn</span>
        <span class="contact-card-value">linkedin.com/in/a-saranathan</span>
        <span class="contact-card-arrow">→</span>
      </a>

      <a href="https://github.com/akash-saranathan" target="_blank" class="contact-card">
        <div class="contact-card-icon">
          <img src="https://www.google.com/s2/favicons?sz=64&domain=github.com" alt="GitHub">
        </div>
        <span class="contact-card-label">GitHub</span>
        <span class="contact-card-value">https://github.com/akash-saranathan</span>
        <span class="contact-card-arrow">→</span>
      </a>

      
    </div>

    <div class="contact-footer">
      Built with ❤️ and lots of ☕ — Designed & Developed by <strong>AS</strong>
    </div>

  </div>

  <style>
    .contact-wrap {
      width:100%;
      min-height: calc(100vh - 160px);
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:60px;
    }
    .contact-intro { text-align:center; max-width:700px; }
    .contact-tagline {
      font-family:'Poppins',sans-serif;
      font-size:clamp(2.4rem,5vw,3.8rem);
      font-weight:800;
      color:#0b2540;
      margin-bottom:20px;
      line-height:1.1;
    }
    .contact-sub {
      font-size:1.15rem;
      color:#475569 !important;
      line-height:1.9;
    }
    .contact-cards-row {
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:16px;
      width:100%;
    }
    .contact-card {
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:12px;
      padding:32px 20px;
      border-radius:20px;
      border:1.5px solid #e2e8f0;
      background:#f8fafc;
      text-decoration:none;
      transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
      text-align:center;
    }
    .contact-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(11,37,64,0.12); border-color:#a7dde3; }
    .contact-card-icon {
      width:56px; height:56px;
      border-radius:16px;
      background:#fff;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 4px 12px rgba(0,0,0,0.08);
      overflow:hidden; padding:8px;
    }
    .contact-card-icon img { width:100%; height:100%; object-fit:contain; }
    .phone-icon { font-size:1.6rem; }
    .contact-card-label {
      font-size:0.72rem;
      font-weight:700;
      text-transform:uppercase;
      letter-spacing:0.08em;
      color:#94a3b8;
    }
    .contact-card-value {
      font-family:'Poppins',sans-serif;
      font-size:0.88rem;
      font-weight:700;
      color:#0b2540;
      word-break:break-all;
    }
    .contact-card-arrow {
      font-size:1.2rem;
      color:#a7dde3;
      font-weight:700;
      margin-top:auto;
    }
    .contact-footer {
      font-size:0.85rem;
      color:#94a3b8;
      text-align:center;
      padding-top:20px;
      border-top:1px solid #e2e8f0;
      width:100%;
    }
    .contact-footer strong { color:#0b2540; }
    @media(max-width:900px) { .contact-cards-row { grid-template-columns:repeat(2,1fr); } }
    @media(max-width:500px) { .contact-cards-row { grid-template-columns:1fr; } }
  </style>

`;

document.getElementById('contact-content').innerHTML = CONTACT_CONTENT;