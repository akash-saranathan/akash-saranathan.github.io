const BEYOND_CONTENT = `

  <div class="beyond-wrap">

    <div class="beyond-intro">
      <p class="beyond-sub">There's more to life than code. Here's the other side of me ✨</p>
    </div>

    <div class="beyond-grid">

      <!-- Cricket -->
      <div class="beyond-card featured">
        <div class="beyond-card-emoji">🏏</div>
        <h3 class="beyond-card-title">Cricket</h3>
        <p class="beyond-card-desc">Proud Chennai Districts cricket player. The sport taught me teamwork, patience, and how to stay calm under pressure — skills I carry into everything I do.</p>
        <span class="beyond-badge">🏆 Chennai Districts Player</span>
      </div>

      <!-- Keyboard -->
      <div class="beyond-card featured">
        <div class="beyond-card-emoji">🎹</div>
        <h3 class="beyond-card-title">Keyboard & Music</h3>
        <p class="beyond-card-desc">Trinity College London Grade 7 certified keyboard player. Music is my reset button — it keeps me grounded and creative. And yes, Thala for a reason! 🦁</p>
        <span class="beyond-badge">🎓 Trinity London — Grade 7</span>
      </div>

      <!-- Spirituality -->
      <div class="beyond-card">
        <div class="beyond-card-emoji">🙏</div>
        <h3 class="beyond-card-title">Spirituality</h3>
        <p class="beyond-card-desc">Faith and gratitude keep me centered. Deeply thankful for the blessings of God, the unwavering support of my family, and the warmth of incredible friends who've shaped my journey.</p>
      </div>

      <!-- Gardening -->
      <div class="beyond-card">
        <div class="beyond-card-emoji">🌱</div>
        <h3 class="beyond-card-title">Gardening</h3>
        <p class="beyond-card-desc">Growing plants is surprisingly similar to building ML models — patience, nurturing, and watching something come to life from scratch. My little green corner keeps me sane.</p>
      </div>

      <!-- Travel -->
      <div class="beyond-card">
        <div class="beyond-card-emoji">✈️</div>
        <h3 class="beyond-card-title">Travel</h3>
        <p class="beyond-card-desc">Exploring new places, cultures, and perspectives. Every trip adds a new dimension to how I think and solve problems. The world is the best classroom.</p>
      </div>

      <!-- Sports -->
      <div class="beyond-card wide">
        <div class="beyond-card-emoji">🏓</div>
        <h3 class="beyond-card-title">Sports Enthusiast</h3>
        <p class="beyond-card-desc">Life's too short to play just one sport! I enjoy staying active and competitive across a wide range of games.</p>
        <div class="beyond-sports-tags">
          <span>🥒 Pickleball</span>
          <span>🏸 Badminton</span>
          <span>🎱 Billiards</span>
          <span>🏊 Swimming</span>
          <span>🎳 Bowling</span>
          <span>⛳ Golf</span>
          <span>🚗 Driving</span>
        </div>
      </div>

    </div>

  </div>

  <style>
    .beyond-wrap { width:100%; }
    .beyond-intro { text-align:center; margin-bottom:40px; }
    .beyond-sub { font-size:1.1rem; color:#475569; font-style:italic; }

    .beyond-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      width: 100%;
    }

    .beyond-card {
      background: #fff;
      border-radius: 20px;
      padding: 28px 24px;
      border: 1.5px solid #e2e8f0;
      display: flex;
      flex-direction: column;
      gap: 10px;
      transition: transform .3s ease, box-shadow .3s ease;
      position: relative;
      overflow: hidden;
    }
    .beyond-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 4px;
      background: linear-gradient(90deg, #a7dde3, #0b2540);
      border-radius: 20px 20px 0 0;
    }
    .beyond-card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(11,37,64,0.12); }

    .beyond-card.featured {
      border-color: #a7dde3;
      background: linear-gradient(160deg, #f0fbfc, #fff);
    }
    .beyond-card.featured::before {
      background: linear-gradient(90deg, #a7dde3, #7C3AED);
      height: 5px;
    }

    .beyond-card.wide {
      grid-column: span 3;
    }

    .beyond-card-emoji { font-size: 2.4rem; }
    .beyond-card-title {
      font-family: 'Poppins', sans-serif;
      font-size: 1.05rem;
      font-weight: 700;
      color: #0b2540;
    }
    .beyond-card-desc {
      font-size: 0.9rem;
      color: #475569 !important;
      line-height: 1.75;
    }
    .beyond-badge {
      display: inline-block;
      font-size: 0.75rem;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 20px;
      background: linear-gradient(135deg, #0b2540, #0f3a60);
      color: #a7dde3;
      width: fit-content;
      margin-top: 4px;
    }
    .beyond-sports-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 6px;
    }
    .beyond-sports-tags span {
      font-size: 0.82rem;
      font-weight: 600;
      padding: 5px 12px;
      border-radius: 20px;
      background: #f0fbfc;
      color: #0b2540;
      border: 1.5px solid #a7dde3;
      transition: background .2s, transform .2s;
      cursor: default;
    }
    .beyond-sports-tags span:hover {
      background: #a7dde3;
      transform: translateY(-2px);
    }

    @media(max-width:900px) {
      .beyond-grid { grid-template-columns: repeat(2,1fr); }
      .beyond-card.wide { grid-column: span 2; }
    }
    @media(max-width:600px) {
      .beyond-grid { grid-template-columns: 1fr; }
      .beyond-card.wide { grid-column: span 1; }
    }
  </style>

`;

document.getElementById('beyond-content').innerHTML = BEYOND_CONTENT;