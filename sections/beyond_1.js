const BEYOND_CONTENT = `

<div class="byd-wrap">

  <!-- Cricket Scene -->
  <div class="byd-scene cricket-scene">
    <div class="byd-scene-content left">
      <div class="byd-scene-tag">🏏 Cricket</div>
      <h2 class="byd-scene-title">Chennai Districts<br>Cricket Player</h2>
      <p class="byd-scene-text">The crease taught me patience, precision, and performing under pressure — lessons I carry into every project I build. Represented Chennai Districts and played competitive cricket through college.</p>
      <div class="cricket-badge">🏆 Chennai Districts Representative</div>
    </div>
    <div class="byd-scene-visual right">
      <div class="cricket-field">
        <div class="cricket-pitch"></div>
        <div class="cricket-ball" id="cricket-ball">🏏</div>
        <div class="cricket-stumps">🎯</div>
      </div>
      <button class="byd-play-btn" onclick="hitBall()">Hit a Six! 🏏</button>
    </div>
  </div>

  <!-- Keyboard Scene -->
  <div class="byd-scene keyboard-scene">
    <div class="byd-scene-visual left">
      <div class="mini-piano" id="mini-piano">
        <div class="piano-keys" id="piano-keys"></div>
        <div class="piano-label">Click the keys to play!</div>
      </div>
    </div>
    <div class="byd-scene-content right">
      <div class="byd-scene-tag">🎹 Keyboard & Music</div>
      <h2 class="byd-scene-title">Trinity College London<br>Grade 7 Certified</h2>
      <p class="byd-scene-text">Seven grades of classical keyboard training with Trinity College London. Music is my creative escape — it sharpens focus, builds discipline, and reminds me that mastery takes time. And yes — Thala for a reason! 🦁</p>
      <div class="cricket-badge" style="background:linear-gradient(135deg,#7C3AED,#2563EB);">🎓 Trinity London — Grade 7</div>
    </div>
  </div>

  <!-- Spirituality Scene -->
  <div class="byd-scene spiritual-scene">
    <div class="spiritual-content">
      <div class="spiritual-quote">
        <span class="quote-mark">"</span>
        I am deeply grateful for the blessings of God, the unwavering support of my family, and the warmth of incredible friends who have shaped every step of this journey. Their belief in me has been my greatest strength.
        <span class="quote-mark">"</span>
      </div>
      <div class="spiritual-icons">
        <span>🙏</span><span>❤️</span><span>✨</span><span>🌟</span><span>🤲</span>
      </div>
    </div>
  </div>

  <!-- Gardening + Travel -->
  <div class="byd-scene dual-scene">
    <div class="dual-card garden">
      <div class="dual-bg">🌿</div>
      <div class="dual-card-content">
        <div class="byd-scene-tag" style="background:rgba(255,255,255,0.2);color:#fff;">🌱 Gardening</div>
        <h3 class="dual-title">Green Fingers</h3>
        <p class="dual-text">Growing plants mirrors building AI — patience, care, and watching something bloom from scratch. My little green corner keeps me grounded.</p>
      </div>
    </div>
    <div class="dual-card travel">
      <div class="dual-bg">✈️</div>
      <div class="dual-card-content">
        <div class="byd-scene-tag" style="background:rgba(255,255,255,0.2);color:#fff;">✈️ Travel</div>
        <h3 class="dual-title">World Explorer</h3>
        <p class="dual-text">Every trip adds a new perspective. New cultures, new people, new ways of thinking — the world is the best classroom I've ever been in.</p>
      </div>
    </div>
  </div>

  <!-- NSO Volunteer -->
  <div class="byd-scene nso-scene">
    <div class="byd-scene-content left">
      <div class="byd-scene-tag">🏅 NSO Volunteer</div>
      <h2 class="byd-scene-title">National Sports<br>Organisation</h2>
      <p class="byd-scene-text">Served as a Student Volunteer & Member at SSN College of Engineering's National Sports Organisation (NSO) — organizing events, fostering sportsmanship, and building community spirit on campus.</p>
      <div class="cricket-badge" style="background:linear-gradient(135deg,#FB923C,#b45309);">🏫 SSN College of Engineering · 2019–2021</div>
    </div>
    <div class="byd-scene-visual right nso-visual">
      <div class="nso-icons">
        <span>⚽</span><span>🏀</span><span>🏸</span><span>🏊</span>
        <span>🎾</span><span>🏋️</span><span>🤸</span><span>🏃</span>
      </div>
    </div>
  </div>

  <!-- Sports Ticker -->
  <div class="byd-scene sports-scene">
    <div class="sports-scene-content">
      <div class="byd-scene-tag" style="margin:0 auto 16px;display:table;">⚡ Sports Enthusiast</div>
      <h2 class="byd-scene-title" style="text-align:center;">Life's Too Short<br>to Play Just One Sport</h2>
      <div class="sports-ticker-wrap">
        <div class="sports-ticker" id="sports-ticker">
          <span>🥒 Pickleball</span>
          <span>🏸 Badminton</span>
          <span>🎱 Billiards</span>
          <span>🏊 Swimming</span>
          <span>🎳 Bowling</span>
          <span>⛳ Golf</span>
          <span>🚗 Driving</span>
          <span>🏏 Cricket</span>
          <span>🎹 Keyboard</span>
          <span>🥒 Pickleball</span>
          <span>🏸 Badminton</span>
          <span>🎱 Billiards</span>
          <span>🏊 Swimming</span>
          <span>🎳 Bowling</span>
          <span>⛳ Golf</span>
        </div>
      </div>
    </div>
  </div>

</div>

<style>
  .byd-wrap { width:100%; display:flex; flex-direction:column; gap:0; }

  /* Scenes */
  .byd-scene { width:100%; padding:60px; display:flex; align-items:center; gap:60px; }
  .byd-scene.left  { flex-direction:row; }
  .byd-scene.right { flex-direction:row-reverse; }
  .byd-scene-content { flex:1; display:flex; flex-direction:column; gap:16px; }
  .byd-scene-visual  { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; }
  .byd-scene-tag { display:inline-block; font-size:0.8rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; padding:4px 14px; border-radius:20px; background:#e0f2f4; color:#0b2540; width:fit-content; }
  .byd-scene-title { font-family:'Poppins',sans-serif; font-size:2rem; font-weight:800; color:#0b2540; line-height:1.15; }
  .byd-scene-text { font-size:0.97rem; color:#475569; line-height:1.85; max-width:480px; }
  .cricket-badge { display:inline-block; font-size:0.8rem; font-weight:700; padding:6px 16px; border-radius:20px; background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; width:fit-content; }

  /* Cricket */
  .cricket-scene { background:linear-gradient(135deg,#f0fbfc,#fff); border-radius:24px; margin-bottom:20px; }
  .cricket-field { width:220px; height:220px; border-radius:50%; background:radial-gradient(circle,#4ade80,#16a34a); display:flex; align-items:center; justify-content:center; position:relative; border:6px solid #15803d; box-shadow:0 8px 32px rgba(22,163,74,0.3); margin-bottom:16px; }
  .cricket-pitch { position:absolute; width:30px; height:80px; background:#d97706; border-radius:4px; }
  .cricket-ball { position:absolute; font-size:2rem; transition:all 0.6s cubic-bezier(0.25,0.46,0.45,0.94); cursor:pointer; }
  .cricket-stumps { position:absolute; bottom:30px; font-size:1.5rem; }
  .cricket-ball.hit { transform:translate(180px,-160px) rotate(720deg) scale(0.5); opacity:0; }
  .byd-play-btn { padding:10px 24px; border-radius:24px; border:none; background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; font-family:'Poppins',sans-serif; font-size:0.85rem; font-weight:700; cursor:pointer; transition:transform .2s,box-shadow .2s; }
  .byd-play-btn:hover { transform:translateY(-2px); box-shadow:0 8px 20px rgba(11,37,64,0.25); }

  /* Piano */
  .keyboard-scene { background:linear-gradient(135deg,#faf5ff,#fff); border-radius:24px; margin-bottom:20px; flex-direction:row-reverse; }
  .mini-piano { display:flex; flex-direction:column; align-items:center; gap:12px; }
  .piano-keys { display:flex; gap:3px; background:#1a1a2e; padding:16px 12px 20px; border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,0.3); }
  .p-white { width:36px; height:110px; background:#fff; border-radius:0 0 6px 6px; border:1px solid #ccc; cursor:pointer; position:relative; transition:background .1s; display:flex; align-items:flex-end; justify-content:center; padding-bottom:6px; }
  .p-white:active, .p-white.active { background:#e0f2f4; }
  .p-black { width:24px; height:70px; background:#1a1a2e; border-radius:0 0 4px 4px; cursor:pointer; margin:0 -12px; z-index:2; transition:background .1s; }
  .p-black:active, .p-black.active { background:#0b2540; }
  .p-note { font-size:9px; color:#94a3b8; font-weight:700; }
  .piano-label { font-size:0.78rem; color:#94a3b8; font-weight:600; }

  /* Spiritual */
  .spiritual-scene { background:linear-gradient(135deg,#0b2540,#0f3a60); border-radius:24px; margin-bottom:20px; justify-content:center; flex-direction:column; text-align:center; padding:80px 120px; }
  .spiritual-content { display:flex; flex-direction:column; align-items:center; gap:24px; max-width:700px; margin:0 auto; }
  .spiritual-quote { font-size:1.2rem; color:rgba(255,255,255,0.9); line-height:2; font-style:italic; position:relative; }
  .quote-mark { font-size:4rem; color:#a7dde3; font-family:'Poppins',sans-serif; line-height:0; vertical-align:-1.5rem; opacity:0.6; }
  .spiritual-icons { display:flex; gap:16px; font-size:1.8rem; }

  /* Dual */
  .dual-scene { gap:20px; flex-direction:row; padding:0; margin-bottom:20px; }
  .dual-card { flex:1; min-height:280px; border-radius:24px; overflow:hidden; position:relative; display:flex; align-items:flex-end; cursor:default; transition:transform .3s; }
  .dual-card:hover { transform:scale(1.02); }
  .garden { background:linear-gradient(160deg,#166534,#4ade80); }
  .travel { background:linear-gradient(160deg,#1e3a8a,#38bdf8); }
  .dual-bg { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); font-size:8rem; opacity:0.15; }
  .dual-card-content { position:relative; z-index:1; padding:28px; }
  .dual-title { font-family:'Poppins',sans-serif; font-size:1.4rem; font-weight:800; color:#fff; margin-bottom:8px; }
  .dual-text { font-size:0.88rem; color:rgba(255,255,255,0.85); line-height:1.7; }

  /* NSO */
  .nso-scene { background:linear-gradient(135deg,#fff7ed,#fff); border-radius:24px; margin-bottom:20px; }
  .nso-visual { gap:12px; }
  .nso-icons { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
  .nso-icons span { font-size:2.4rem; text-align:center; background:#fff7ed; border-radius:16px; padding:16px; border:1.5px solid #fed7aa; transition:transform .2s; cursor:default; display:flex; align-items:center; justify-content:center; }
  .nso-icons span:hover { transform:scale(1.15) rotate(5deg); }

  /* Sports ticker */
  .sports-scene { background:linear-gradient(135deg,#0b2540,#1e3a8a); border-radius:24px; flex-direction:column; padding:60px 60px 40px; }
  .sports-scene-content { width:100%; display:flex; flex-direction:column; gap:20px; }
  .sports-scene .byd-scene-title { color:#fff; }
  .sports-ticker-wrap { overflow:hidden; width:100%; padding:8px 0; }
  .sports-ticker { display:flex; gap:16px; animation:ticker 18s linear infinite; width:max-content; }
  .sports-ticker span { font-size:0.9rem; font-weight:700; padding:10px 20px; border-radius:30px; background:rgba(167,221,227,0.15); color:#a7dde3; border:1.5px solid rgba(167,221,227,0.3); white-space:nowrap; }
  @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

  @media(max-width:900px) {
    .byd-scene { flex-direction:column !important; padding:40px 24px; }
    .spiritual-scene { padding:60px 24px; }
    .dual-scene { flex-direction:column; }
    .dual-card { min-height:220px; }
  }
</style>

<script>
  function hitBall() {
    var ball = document.getElementById('cricket-ball');
    ball.classList.add('hit');
    setTimeout(function() {
      ball.classList.remove('hit');
    }, 1200);
  }

  (function buildPiano() {
    var keys = document.getElementById('piano-keys');
    var notes = [
      {note:'C4', freq:261.63, type:'white', label:'C'},
      {note:'C#4',freq:277.18, type:'black'},
      {note:'D4', freq:293.66, type:'white', label:'D'},
      {note:'D#4',freq:311.13, type:'black'},
      {note:'E4', freq:329.63, type:'white', label:'E'},
      {note:'F4', freq:349.23, type:'white', label:'F'},
      {note:'F#4',freq:369.99, type:'black'},
      {note:'G4', freq:392.00, type:'white', label:'G'},
      {note:'G#4',freq:415.30, type:'black'},
      {note:'A4', freq:440.00, type:'white', label:'A'},
      {note:'A#4',freq:466.16, type:'black'},
      {note:'B4', freq:493.88, type:'white', label:'B'},
      {note:'C5', freq:523.25, type:'white', label:'C'},
    ];

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var ctx = null;

    function playNote(freq, el) {
      if (!ctx) ctx = new AudioContext();
      var osc = ctx.createOscillator();
      var gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.4, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.2);
      el.classList.add('active');
      setTimeout(function(){ el.classList.remove('active'); }, 200);
    }

    notes.forEach(function(n) {
      var key = document.createElement('div');
      key.className = n.type === 'white' ? 'p-white' : 'p-black';
      if (n.type === 'white' && n.label) {
        key.innerHTML = '<span class="p-note">' + n.label + '</span>';
      }
      key.addEventListener('mousedown', function() { playNote(n.freq, key); });
      keys.appendChild(key);
    });
  })();
</script>

`;

document.getElementById('beyond-content').innerHTML = BEYOND_CONTENT;