const BEYOND_CONTENT = `
<div class="byd-wrap">

  <!-- Cricket -->
  <div class="byd-strip">
    <div class="byd-strip-text">
      <span class="byd-chip">🏏 Cricket</span>
      <h3 class="byd-strip-title">Chennai Districts<br>Cricket Player</h3>
      <p class="byd-strip-para">The crease taught me patience, precision, and performing under pressure — lessons I carry into every project. Proud to have represented Chennai Districts in competitive cricket through college.</p>
      <div class="byd-pill navy">🏆 Chennai Districts Representative</div>
    </div>
    <div class="byd-strip-visual">
      <div class="cricket-oval">
        <div class="co-pitch"></div>
        <div class="co-ball" id="cball">🔴</div>
        <div class="co-bat">🏏</div>
      </div>
      <div class="cricket-stats">
        <div class="cs-stat"><span class="cs-num">🏏</span><span class="cs-lbl">All-Rounder</span></div>
        <div class="cs-stat"><span class="cs-num">🏙️</span><span class="cs-lbl">Chennai</span></div>
        <div class="cs-stat"><span class="cs-num">🏆</span><span class="cs-lbl">Districts</span></div>
      </div>
    </div>
  </div>

  <!-- Keyboard -->
  <div class="byd-strip reverse">
    <div class="byd-strip-visual piano-side">
      <div id="piano-sm"></div>
      <p class="piano-hint-sm">🎵 Auto-playing — click any key!</p>
    </div>
    <div class="byd-strip-text">
      <span class="byd-chip purple">🎹 Keyboard & Music</span>
      <h3 class="byd-strip-title">Trinity College London<br>Grade 7 Certified with Distinction</h3>
      <p class="byd-strip-para">Seven grades of classical keyboard training with Trinity College London. Music is my creative reset — it sharpens focus, builds discipline, and reminds me that true mastery takes time. And yes — Thala for a reason! 🦁</p>
      <div class="byd-pill purple">🎓 Trinity London — Grade 7</div>
    </div>
  </div>

  <!-- Travel -->
  <div class="byd-strip">
    <div class="byd-strip-text">
      <span class="byd-chip blue">✈️ Travel & Exploration</span>
      <h3 class="byd-strip-title">World Explorer</h3>
      <p class="byd-strip-para">Every trip adds a new dimension to how I think and solve problems. Experiencing different cultures and perspectives is the best education. San Diego holds a special place — sunsets, ocean, and the best burritos! 🌮</p>
      <div class="travel-places">
        <span>📍 Chennai</span>
        <span>📍 Abu Dhabi</span>
        <span>📍 Los Angeles</span>
        <span>📍 More to go...</span>
      </div>
    </div>
    <div class="byd-strip-visual travel-visual">
      <div class="globe-wrap">
        <div class="globe">🌍</div>
        <div class="globe-ring"></div>
      </div>
    </div>
  </div>

  <!-- Gardening -->
  <div class="byd-strip reverse garden-strip">
    <div class="byd-strip-visual garden-visual">
      <div class="plant-grow">
        <span class="leaf l1">🌿</span>
        <span class="leaf l2">🌱</span>
        <span class="leaf l3">🌸</span>
        <span class="leaf l4">🍃</span>
        <span class="stem">|</span>
        <span class="soil">🟫</span>
      </div>
    </div>
    <div class="byd-strip-text">
      <span class="byd-chip green">🌱 Gardening</span>
      <h3 class="byd-strip-title">Green Fingers</h3>
      <p class="byd-strip-para">Growing plants is surprisingly similar to building ML models — patience, careful nurturing, and the deep satisfaction of watching something come to life from scratch. My little green corner keeps me grounded and reminds me to slow down.</p>
    </div>
  </div>

  <!-- Sports + NSO full width -->
  <div class="byd-full-strip">
    <div class="byd-full-left">
      <span class="byd-chip orange">🏅 NSO Volunteer</span>
      <h3 class="byd-strip-title sm">SSN College · 2019–2021</h3>
      <p class="byd-strip-para sm">Student Volunteer & Member at SSN's National Sports Organisation — organizing events and building community spirit on campus.</p>
    </div>
    <div class="byd-full-divider"></div>
    <div class="byd-full-right">
      <span class="byd-chip" style="background:rgba(167,221,227,0.2);color:#a7dde3;">⚡ Sports</span>
      <h3 class="byd-strip-title sm white">Too Short for Just One!</h3>
      <div class="ticker-wrap">
        <div class="ticker-inner">
          <span>🥒 Pickleball</span><span>🏸 Badminton</span><span>🎱 Billiards</span>
          <span>🏊 Swimming</span><span>🎳 Bowling</span><span>⛳ Golf</span><span>🚗 Driving</span>
          <span>🥒 Pickleball</span><span>🏸 Badminton</span><span>🎱 Billiards</span>
          <span>🏊 Swimming</span><span>🎳 Bowling</span><span>⛳ Golf</span><span>🚗 Driving</span>
        </div>
      </div>
    </div>
  </div>

</div>

<style>
.byd-wrap { width:100%; display:flex; flex-direction:column; gap:0; }

/* Strips */
.byd-strip { display:flex; align-items:center; gap:60px; padding:56px 0; border-bottom:1px solid #f1f5f9; }
.byd-strip.reverse { flex-direction:row-reverse; }
.byd-strip-text { flex:1; display:flex; flex-direction:column; gap:14px; }
.byd-strip-visual { flex:1; display:flex; align-items:center; justify-content:center; }

/* Chips */
.byd-chip { display:inline-block; font-size:0.72rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; padding:4px 12px; border-radius:20px; background:#e0f2f4; color:#0b2540; width:fit-content; }
.byd-chip.purple { background:#ede9fe; color:#4c1d95; }
.byd-chip.green  { background:#dcfce7; color:#14532d; }
.byd-chip.blue   { background:#dbeafe; color:#1e3a8a; }
.byd-chip.orange { background:#ffedd5; color:#7c2d12; }

/* Titles */
.byd-strip-title { font-family:'Poppins',sans-serif; font-size:1.8rem; font-weight:800; color:#0b2540; line-height:1.2; }
.byd-strip-title.sm { font-size:1.2rem; }
.byd-strip-title.white { color:#fff; }

/* Paras */
.byd-strip-para { font-size:0.95rem; color:#475569 !important; line-height:1.85; }
.byd-strip-para.sm { font-size:0.85rem; color:#475569 !important; }

/* Pills */
.byd-pill { display:inline-block; font-size:0.75rem; font-weight:700; padding:5px 14px; border-radius:20px; width:fit-content; }
.byd-pill.navy { background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; }
.byd-pill.purple { background:linear-gradient(135deg,#7C3AED,#2563EB); color:#fff; }

/* Cricket */
.cricket-oval { width:180px; height:180px; border-radius:50%; background:radial-gradient(circle,#4ade80,#16a34a); border:4px solid #15803d; box-shadow:0 8px 28px rgba(22,163,74,0.25); position:relative; display:flex; align-items:center; justify-content:center; }
.co-pitch { width:14px; height:50px; background:#d97706; border-radius:3px; position:absolute; }
.co-ball { position:absolute; font-size:1.2rem; left:18%; top:40%; transition:all 0.75s cubic-bezier(0.25,0.46,0.45,0.94); }
.co-ball.fly { transform:translate(160px,-120px) rotate(540deg) scale(0.15); opacity:0; }
.co-bat { position:absolute; bottom:14px; right:14px; font-size:1.6rem; }
.cricket-stats { display:flex; gap:16px; margin-top:16px; }
.cs-stat { display:flex; flex-direction:column; align-items:center; gap:4px; background:#f0fbfc; border-radius:12px; padding:10px 16px; border:1px solid #e0f2f4; }
.cs-num { font-size:1.4rem; }
.cs-lbl { font-size:0.7rem; font-weight:700; color:#0b2540; text-transform:uppercase; letter-spacing:0.05em; }

/* Piano */
.piano-side { flex-direction:column; gap:10px; }
#piano-sm { display:flex; gap:2px; background:#1a1a2e; padding:12px 10px 16px; border-radius:10px; box-shadow:0 8px 28px rgba(0,0,0,0.3); }
.pks-w { width:28px; height:80px; background:#fff; border-radius:0 0 5px 5px; border:1px solid #ccc; cursor:pointer; transition:background .15s; }
.pks-w:hover,.pks-w.lit { background:#a7dde3; }
.pks-b { width:18px; height:52px; background:#1a1a2e; border-radius:0 0 4px 4px; cursor:pointer; margin:0 -9px; z-index:2; transition:background .15s; }
.pks-b:hover,.pks-b.lit { background:#334155; }
.piano-hint-sm { font-size:0.75rem; color:#94a3b8; font-style:italic; text-align:center; }

/* Travel */
.travel-places { display:flex; flex-wrap:wrap; gap:8px; }
.travel-places span { font-size:0.8rem; font-weight:600; padding:5px 12px; border-radius:20px; background:#dbeafe; color:#1e3a8a; }
.globe-wrap { position:relative; display:flex; align-items:center; justify-content:center; }
.globe { font-size:7rem; animation:spinGlobe 8s linear infinite; display:inline-block; }
.globe-ring { position:absolute; width:140px; height:140px; border-radius:50%; border:2px dashed #93c5fd; animation:spinRing 6s linear infinite reverse; }
@keyframes spinGlobe { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
@keyframes spinRing  { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }

/* Gardening */
.garden-strip { background:linear-gradient(135deg,#f0fdf4,#fff); border-radius:20px; padding:56px 40px; margin-bottom:4px; }
.garden-visual { flex-direction:column; align-items:center; justify-content:flex-end; gap:0; }
.plant-grow { display:flex; flex-direction:column; align-items:center; gap:2px; }
.leaf { font-size:1.8rem; animation:sway 2.5s ease-in-out infinite; display:block; }
.l1{animation-delay:0s;font-size:1.4rem}
.l2{animation-delay:.3s}
.l3{animation-delay:.6s;font-size:1.2rem}
.l4{animation-delay:.9s;font-size:1.6rem}
.stem { font-size:1.4rem; color:#16a34a; line-height:1; }
.soil { font-size:2rem; }
@keyframes sway { 0%,100%{transform:rotate(-8deg)} 50%{transform:rotate(8deg)} }

/* Full strip (Sports + NSO) */
.byd-full-strip { display:flex; align-items:stretch; border-radius:20px; overflow:hidden; min-height:180px; margin-top:8px; }
.byd-full-left { flex:1; background:#fff7ed; padding:40px 40px; display:flex; flex-direction:column; gap:12px; justify-content:center; }
.byd-full-divider { width:1px; background:#e2e8f0; }
.byd-full-right { flex:2; background:linear-gradient(135deg,#0b2540,#1e3a8a); padding:40px 40px; display:flex; flex-direction:column; gap:14px; justify-content:center; }

/* Ticker */
.ticker-wrap { overflow:hidden; width:100%; }
.ticker-inner { display:flex; gap:12px; animation:tickit 18s linear infinite; width:max-content; }
.ticker-inner span { font-size:0.78rem; font-weight:700; padding:6px 14px; border-radius:20px; background:rgba(167,221,227,0.15); color:#a7dde3; border:1px solid rgba(167,221,227,0.25); white-space:nowrap; }
@keyframes tickit { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

@media(max-width:900px) {
  .byd-strip,.byd-strip.reverse { flex-direction:column; gap:32px; }
  .byd-full-strip { flex-direction:column; }
}
</style>
`;

document.getElementById('beyond-content').innerHTML = BEYOND_CONTENT;

(function() {
  var active = true;
  var observer = new IntersectionObserver(function(e){ active = e[0].isIntersecting; }, {threshold:0.05});
  var sec = document.getElementById('beyond-content');
  if (sec) observer.observe(sec);

  // Cricket
  function doCricket() {
    if (!active) { setTimeout(doCricket, 600); return; }
    var b = document.getElementById('cball');
    if (!b) return;
    b.classList.add('fly');
    setTimeout(function(){ b.classList.remove('fly'); setTimeout(doCricket, 2000); }, 800);
  }
  setTimeout(doCricket, 800);

  // Piano
  var container = document.getElementById('piano-sm');
  if (!container) return;
  var NOTES = [
    {freq:261.63,type:'white'},{freq:277.18,type:'black'},
    {freq:293.66,type:'white'},{freq:311.13,type:'black'},
    {freq:329.63,type:'white'},{freq:349.23,type:'white'},
    {freq:369.99,type:'black'},{freq:392.00,type:'white'},
    {freq:415.30,type:'black'},{freq:440.00,type:'white'},
    {freq:466.16,type:'black'},{freq:493.88,type:'white'},
    {freq:523.25,type:'white'},
  ];
  var AudioCtx = window.AudioContext || window.webkitAudioContext;
  var actx = null;
  var keyEls = [];

  NOTES.forEach(function(n){
    var el = document.createElement('div');
    el.className = n.type==='white' ? 'pks-w' : 'pks-b';
    el.addEventListener('mousedown', function(){ playNote(n.freq, el); });
    container.appendChild(el);
    keyEls.push({el:el, freq:n.freq, type:n.type});
  });

  function playNote(freq, el) {
    if (!active) return;
    try {
      if (!actx) actx = new AudioCtx();
      var o = actx.createOscillator(), g = actx.createGain();
      o.connect(g); g.connect(actx.destination);
      o.type = 'triangle';
      o.frequency.setValueAtTime(freq, actx.currentTime);
      g.gain.setValueAtTime(0.28, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.7);
      o.start(actx.currentTime); o.stop(actx.currentTime + 0.7);
    } catch(e){}
    if (el){ el.classList.add('lit'); setTimeout(function(){ el.classList.remove('lit'); }, 220); }
  }

  var whites = keyEls.filter(function(k){ return k.type==='white'; });
  var melody = [0,2,4,5,7,5,4,2,0,4,7,4,0];
  var mi = 0;

  function autoPlay(){
    if (!active){ setTimeout(autoPlay, 500); return; }
    playNote(whites[melody[mi]].freq, whites[melody[mi]].el);
    mi = (mi+1) % melody.length;
    setTimeout(autoPlay, 400);
  }
  setTimeout(autoPlay, 1000);
})();

// const BEYOND_CONTENT = `
// <div class="byd-wrap">

//   <div class="byd-top-row">

//     <!-- Cricket -->
//     <div class="byd-block cricket-bg">
//       <div class="byd-block-header">
//         <span class="byd-tag">🏏 Cricket</span>
//         <h3 class="byd-block-title">Chennai Districts Player</h3>
//       </div>
//       <div class="cricket-arena-sm">
//         <div class="pitch-sm"></div>
//         <div class="cball-sm" id="cball">🔴</div>
//       </div>
//       <p class="byd-block-para">The crease taught me patience and performing under pressure — lessons I carry into every project. Represented Chennai Districts competitively.</p>
//       <div class="byd-badge navy">🏆 Chennai Districts</div>
//     </div>

//     <!-- Keyboard -->
//     <div class="byd-block keyboard-bg">
//       <div class="byd-block-header">
//         <span class="byd-tag purple">🎹 Keyboard</span>
//         <h3 class="byd-block-title">Trinity London Grade 7</h3>
//       </div>
//       <div class="piano-sm-wrap">
//         <div id="piano-sm"></div>
//       </div>
//       <p class="byd-block-para">Seven grades of classical training with Trinity College London. Music is my reset button — and yes, Thala for a reason! 🦁</p>
//       <div class="byd-badge purple">🎓 Grade 7 Certified</div>
//     </div>

//     <!-- Spirituality -->
//     <div class="byd-block spiritual-bg">
//       <div class="byd-block-header">
//         <span class="byd-tag gold">🙏 Gratitude</span>
//         <h3 class="byd-block-title" style="color:#fff;">Family & Faith</h3>
//       </div>
//       <div class="orb-row">
//         <span class="orb">🙏</span><span class="orb" style="animation-delay:.5s">❤️</span><span class="orb" style="animation-delay:1s">✨</span><span class="orb" style="animation-delay:1.5s">🌟</span>
//       </div>
//       <p class="byd-block-para light">Deeply grateful for the blessings of God, my family's unwavering support, and incredible friends who've shaped every step of this journey.</p>
//     </div>

//   </div>

//   <div class="byd-bottom-row">

//     <!-- Gardening -->
//     <div class="byd-block garden-bg">
//       <span class="byd-big-emoji">🌱</span>
//       <span class="byd-tag green">Gardening</span>
//       <p class="byd-block-para light-sm">Growing plants mirrors ML — patience and watching something bloom from scratch.</p>
//     </div>

//     <!-- Travel -->
//     <div class="byd-block travel-bg">
//       <span class="byd-big-emoji">✈️</span>
//       <span class="byd-tag blue">Travel</span>
//       <p class="byd-block-para light-sm">New cultures, new perspectives — the world is the best classroom.</p>
//     </div>

//     <!-- NSO -->
//     <div class="byd-block nso-bg">
//       <span class="byd-tag orange">🏅 NSO Volunteer</span>
//       <h3 class="byd-block-title">SSN College · 2019–21</h3>
//       <div class="nso-mini">
//         <span>⚽</span><span>🏀</span><span>🏸</span><span>🏊</span><span>🎾</span><span>🤸</span>
//       </div>
//     </div>

//     <!-- Sports ticker -->
//     <div class="byd-block ticker-bg">
//       <span class="byd-tag" style="background:rgba(167,221,227,0.2);color:#a7dde3;">⚡ Sports</span>
//       <h3 class="byd-block-title" style="color:#fff;font-size:0.95rem;">Too Short for Just One!</h3>
//       <div class="ticker-wrap-sm">
//         <div class="ticker-sm">
//           <span>🥒 Pickleball</span><span>🏸 Badminton</span><span>🎱 Billiards</span><span>🏊 Swimming</span><span>🎳 Bowling</span><span>⛳ Golf</span><span>🚗 Driving</span>
//           <span>🥒 Pickleball</span><span>🏸 Badminton</span><span>🎱 Billiards</span><span>🏊 Swimming</span><span>🎳 Bowling</span><span>⛳ Golf</span><span>🚗 Driving</span>
//         </div>
//       </div>
//     </div>

//   </div>

// </div>

// <style>
// .byd-wrap { width:100%; display:flex; flex-direction:column; gap:16px; }
// .byd-top-row { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
// .byd-bottom-row { display:grid; grid-template-columns:repeat(4,1fr); gap:16px; }

// .byd-block { border-radius:20px; padding:24px; display:flex; flex-direction:column; gap:10px; overflow:hidden; position:relative; }

// .byd-block-header { display:flex; flex-direction:column; gap:6px; }
// .byd-block-title { font-family:'Poppins',sans-serif; font-size:1.05rem; font-weight:700; color:#0b2540; line-height:1.2; }
// .byd-block-para { font-size:0.82rem; color:#475569 !important; line-height:1.7; }
// .byd-block-para.light { color:rgba(255,255,255,0.85) !important; }
// .byd-block-para.light-sm { font-size:0.78rem; color:rgba(255,255,255,0.85) !important; line-height:1.6; }

// .byd-tag { display:inline-block; font-size:0.7rem; font-weight:700; text-transform:uppercase; letter-spacing:0.07em; padding:3px 10px; border-radius:20px; background:#e0f2f4; color:#0b2540; width:fit-content; }
// .byd-tag.purple { background:#ede9fe; color:#4c1d95; }
// .byd-tag.gold   { background:rgba(255,255,255,0.2); color:#fef3c7; }
// .byd-tag.green  { background:rgba(255,255,255,0.25); color:#fff; }
// .byd-tag.blue   { background:rgba(255,255,255,0.25); color:#fff; }
// .byd-tag.orange { background:#ffedd5; color:#7c2d12; }

// .byd-badge { display:inline-block; font-size:0.72rem; font-weight:700; padding:4px 12px; border-radius:20px; width:fit-content; margin-top:auto; }
// .byd-badge.navy   { background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; }
// .byd-badge.purple { background:linear-gradient(135deg,#7C3AED,#2563EB); color:#fff; }

// /* Backgrounds */
// .cricket-bg  { background:linear-gradient(160deg,#f0fbfc,#e0f7e9); }
// .keyboard-bg { background:linear-gradient(160deg,#faf5ff,#ede9fe); }
// .spiritual-bg{ background:linear-gradient(160deg,#0b2540,#1e3a8a); }
// .garden-bg   { background:linear-gradient(160deg,#166534,#4ade80); }
// .travel-bg   { background:linear-gradient(160deg,#1e3a8a,#38bdf8); }
// .nso-bg      { background:linear-gradient(160deg,#fff7ed,#fed7aa); }
// .ticker-bg   { background:linear-gradient(160deg,#0b2540,#0f3a60); }

// /* Big emoji for garden/travel */
// .byd-big-emoji { font-size:2.8rem; }

// /* Cricket */
// .cricket-arena-sm { width:100%; height:80px; background:radial-gradient(ellipse,#4ade80,#16a34a); border-radius:12px; position:relative; display:flex; align-items:center; justify-content:center; border:3px solid #15803d; }
// .pitch-sm { width:16px; height:40px; background:#d97706; border-radius:4px; }
// .cball-sm { position:absolute; font-size:1.1rem; left:20%; transition:all 0.7s cubic-bezier(0.25,0.46,0.45,0.94); }
// .cball-sm.fly { transform:translate(140px,-60px) rotate(540deg) scale(0.2); opacity:0; }

// /* Piano */
// .piano-sm-wrap { width:100%; }
// #piano-sm { display:flex; gap:2px; background:#1a1a2e; padding:10px 8px 14px; border-radius:8px; justify-content:center; }
// .pks-w { width:22px; height:64px; background:#fff; border-radius:0 0 4px 4px; border:1px solid #ccc; cursor:pointer; transition:background .15s; }
// .pks-w:hover,.pks-w.lit { background:#a7dde3; }
// .pks-b { width:16px; height:42px; background:#1a1a2e; border-radius:0 0 3px 3px; cursor:pointer; margin:0 -8px; z-index:2; transition:background .15s; }
// .pks-b:hover,.pks-b.lit { background:#334155; }

// /* Spiritual orbs */
// .orb-row { display:flex; gap:10px; }
// .orb { font-size:1.4rem; animation:floatOrb 3s ease-in-out infinite; }
// @keyframes floatOrb { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }

// /* NSO mini */
// .nso-mini { display:flex; flex-wrap:wrap; gap:8px; }
// .nso-mini span { font-size:1.4rem; background:#fff; border-radius:10px; padding:8px; border:1px solid #fed7aa; transition:transform .2s; cursor:default; }
// .nso-mini span:hover { transform:scale(1.2) rotate(5deg); }

// /* Ticker */
// .ticker-wrap-sm { overflow:hidden; width:100%; }
// .ticker-sm { display:flex; gap:10px; animation:ticksm 16s linear infinite; width:max-content; }
// .ticker-sm span { font-size:0.72rem; font-weight:700; padding:5px 12px; border-radius:20px; background:rgba(167,221,227,0.15); color:#a7dde3; border:1px solid rgba(167,221,227,0.25); white-space:nowrap; }
// @keyframes ticksm { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

// @media(max-width:1024px) { .byd-top-row{grid-template-columns:1fr 1fr} .byd-bottom-row{grid-template-columns:1fr 1fr} }
// @media(max-width:600px)  { .byd-top-row{grid-template-columns:1fr} .byd-bottom-row{grid-template-columns:1fr} }
// </style>
// `;

// document.getElementById('beyond-content').innerHTML = BEYOND_CONTENT;

// (function() {
//   var active = true;

//   // Stop when section leaves viewport
//   var observer = new IntersectionObserver(function(entries) {
//     active = entries[0].isIntersecting;
//   }, { threshold: 0.1 });
//   var section = document.getElementById('beyond-content');
//   if (section) observer.observe(section);

//   // ── Cricket loop ──
//   function doCricket() {
//     if (!active) { setTimeout(doCricket, 500); return; }
//     var ball = document.getElementById('cball');
//     if (!ball) return;
//     ball.classList.add('fly');
//     setTimeout(function() {
//       ball.classList.remove('fly');
//       setTimeout(function() { if (active) doCricket(); else setTimeout(doCricket, 500); }, 1800);
//     }, 800);
//   }
//   setTimeout(doCricket, 600);

//   // ── Piano ──
//   var container = document.getElementById('piano-sm');
//   if (!container) return;

//   var NOTES = [
//     {freq:261.63,type:'white'},{freq:277.18,type:'black'},
//     {freq:293.66,type:'white'},{freq:311.13,type:'black'},
//     {freq:329.63,type:'white'},{freq:349.23,type:'white'},
//     {freq:369.99,type:'black'},{freq:392.00,type:'white'},
//     {freq:415.30,type:'black'},{freq:440.00,type:'white'},
//     {freq:466.16,type:'black'},{freq:493.88,type:'white'},
//     {freq:523.25,type:'white'},
//   ];

//   var AudioCtx = window.AudioContext || window.webkitAudioContext;
//   var actx = null;
//   var keyEls = [];

//   NOTES.forEach(function(n) {
//     var el = document.createElement('div');
//     el.className = n.type === 'white' ? 'pks-w' : 'pks-b';
//     el.addEventListener('mousedown', function() { playNote(n.freq, el); });
//     container.appendChild(el);
//     keyEls.push({el:el, freq:n.freq, type:n.type});
//   });

//   function playNote(freq, el) {
//     if (!active) return;
//     try {
//       if (!actx) actx = new AudioCtx();
//       var osc = actx.createOscillator();
//       var gain = actx.createGain();
//       osc.connect(gain); gain.connect(actx.destination);
//       osc.type = 'triangle';
//       osc.frequency.setValueAtTime(freq, actx.currentTime);
//       gain.gain.setValueAtTime(0.3, actx.currentTime);
//       gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 0.8);
//       osc.start(actx.currentTime); osc.stop(actx.currentTime + 0.8);
//     } catch(e) {}
//     if (el) { el.classList.add('lit'); setTimeout(function(){ el.classList.remove('lit'); },250); }
//   }

//   var whites = keyEls.filter(function(k){ return k.type==='white'; });
//   var melody = [0,2,4,5,7,5,4,2,0,2,4,7];
//   var mIdx = 0;
//   var pianoTimer = null;

//   function autoPlay() {
//     if (!active) { pianoTimer = setTimeout(autoPlay, 400); return; }
//     playNote(whites[melody[mIdx]].freq, whites[melody[mIdx]].el);
//     mIdx = (mIdx + 1) % melody.length;
//     pianoTimer = setTimeout(autoPlay, 420);
//   }
//   setTimeout(autoPlay, 1000);

// })();

// const BEYOND_CONTENT = `
// <div class="byd-wrap">

//   <!-- Cricket -->
//   <div class="byd-section cricket-bg">
//     <div class="byd-text-left">
//       <span class="byd-tag">🏏 Cricket</span>
//       <h2 class="byd-title">Chennai Districts<br>Cricket Player</h2>
//       <p class="byd-para">The crease taught me patience, precision, and performing under pressure — lessons I carry into every project I build. Represented Chennai Districts and played competitive cricket through college.</p>
//       <div class="byd-badge navy">🏆 Chennai Districts Representative</div>
//     </div>
//     <div class="byd-visual">
//       <div class="cricket-arena">
//         <div class="cricket-pitch-oval"></div>
//         <div class="cricket-ball-anim" id="cball">🔴</div>
//         <div class="cricket-bat">🏏</div>
//       </div>
//     </div>
//   </div>

//   <!-- Keyboard -->
//   <div class="byd-section keyboard-bg">
//     <div class="byd-visual">
//       <div class="mini-piano-wrap">
//         <div id="piano-keys-row"></div>
//         <p class="piano-hint">🎵 Keys play automatically — or click any!</p>
//       </div>
//     </div>
//     <div class="byd-text-right">
//       <span class="byd-tag purple">🎹 Keyboard & Music</span>
//       <h2 class="byd-title">Trinity College London<br>Grade 7 Certified with Distinction</h2>
//       <p class="byd-para">Seven grades of classical keyboard training with Trinity College London. Music is my creative escape — it sharpens focus, builds discipline, and reminds me that mastery takes time. And yes — Thala for a reason! 🦁</p>
//       <div class="byd-badge purple">🎓 Trinity London — Grade 7</div>
//     </div>
//   </div>

//   <!-- Spirituality -->
//   <div class="byd-section spiritual-bg">
//     <div class="byd-spiritual-center">
//       <div class="spiritual-orbs">
//         <span class="orb">🙏</span><span class="orb">❤️</span><span class="orb">✨</span><span class="orb">🌟</span><span class="orb">🤲</span>
//       </div>
//       <blockquote class="byd-quote">
//         I am deeply grateful for the blessings of God, the unwavering support of my family, and the warmth of incredible friends who have shaped every step of this journey. Their belief in me has been my greatest strength.
//       </blockquote>
//     </div>
//   </div>

//   <!-- Gardening + Travel side by side -->
//   <div class="byd-section duo-bg">
//     <div class="byd-duo-left">
//       <span class="byd-tag green">🌱 Gardening</span>
//       <h2 class="byd-title sm">Green Fingers</h2>
//       <p class="byd-para">Growing plants mirrors building AI — patience, care, and watching something bloom from scratch. My little green corner keeps me grounded and sane.</p>
//     </div>
//     <div class="byd-duo-divider">🌿</div>
//     <div class="byd-duo-right">
//       <span class="byd-tag blue">✈️ Travel</span>
//       <h2 class="byd-title sm">World Explorer</h2>
//       <p class="byd-para">Every trip adds a new perspective. New cultures, new people, new ways of thinking — the world is the best classroom I've ever been in.</p>
//     </div>
//   </div>

//   <!-- NSO -->
//   <div class="byd-section nso-bg">
//     <div class="byd-text-left">
//       <span class="byd-tag orange">🏅 NSO</span>
//       <h2 class="byd-title">National Sports<br>Organisation</h2>
//       <p class="byd-para">Served as a Student Volunteer & Member at SSN College of Engineering's NSO — organizing events, fostering sportsmanship, and building community spirit on campus from 2019 to 2021.</p>
//       <div class="byd-badge orange">🏫 SSN College · 2019–2021</div>
//     </div>
//     <div class="byd-visual nso-grid">
//       <span>⚽</span><span>🏀</span><span>🏸</span><span>🏊</span>
//       <span>🎾</span><span>🏋️</span><span>🤸</span><span>🏃</span>
//     </div>
//   </div>

//   <!-- Sports ticker -->
//   <div class="byd-section ticker-bg">
//     <div class="ticker-content">
//       <h2 class="byd-title white center">Life's Too Short to Play Just One Sport</h2>
//       <div class="ticker-track-wrap">
//         <div class="ticker-track">
//           <span>🥒 Pickleball</span><span>🏸 Badminton</span><span>🎱 Billiards</span>
//           <span>🏊 Swimming</span><span>🎳 Bowling</span><span>⛳ Golf</span>
//           <span>🚗 Driving</span><span>🏏 Cricket</span><span>🎹 Keyboard</span>
//           <span>🥒 Pickleball</span><span>🏸 Badminton</span><span>🎱 Billiards</span>
//           <span>🏊 Swimming</span><span>🎳 Bowling</span><span>⛳ Golf</span>
//           <span>🚗 Driving</span><span>🏏 Cricket</span><span>🎹 Keyboard</span>
//         </div>
//       </div>
//     </div>
//   </div>

// </div>

// <style>
// .byd-wrap { width:100%; display:flex; flex-direction:column; }
// .byd-section { width:100%; padding:70px 60px; display:flex; align-items:center; gap:60px; position:relative; overflow:hidden; }

// /* Left/Right text */
// .byd-text-left,.byd-text-right { flex:1; display:flex; flex-direction:column; gap:16px; }
// .byd-visual { flex:1; display:flex; align-items:center; justify-content:center; }

// /* Tags */
// .byd-tag { display:inline-block; font-size:0.78rem; font-weight:700; text-transform:uppercase; letter-spacing:0.08em; padding:4px 14px; border-radius:20px; background:#e0f2f4; color:#0b2540; width:fit-content; }
// .byd-tag.purple { background:#ede9fe; color:#4c1d95; }
// .byd-tag.green  { background:#dcfce7; color:#14532d; }
// .byd-tag.blue   { background:#dbeafe; color:#1e3a8a; }
// .byd-tag.orange { background:#ffedd5; color:#7c2d12; }

// /* Titles */
// .byd-title { font-family:'Poppins',sans-serif; font-size:2rem; font-weight:800; color:#0b2540; line-height:1.2; }
// .byd-title.sm { font-size:1.5rem; }
// .byd-title.white { color:#fff; }
// .byd-title.center { text-align:center; }

// /* Paras */
// .byd-para { font-size:0.97rem; color:#475569 !important; line-height:1.85; max-width:480px; }

// /* Badges */
// .byd-badge { display:inline-block; font-size:0.8rem; font-weight:700; padding:6px 16px; border-radius:20px; background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; width:fit-content; }
// .byd-badge.purple { background:linear-gradient(135deg,#7C3AED,#2563EB); color:#fff; }
// .byd-badge.orange { background:linear-gradient(135deg,#FB923C,#b45309); color:#fff; }

// /* Backgrounds */
// .cricket-bg  { background:linear-gradient(135deg,#f0fbfc 60%,#e0f7e9 100%); }
// .keyboard-bg { background:linear-gradient(135deg,#faf5ff 60%,#ede9fe 100%); flex-direction:row-reverse; }
// .spiritual-bg{ background:linear-gradient(135deg,#0b2540,#1e3a8a); }
// .duo-bg      { background:#f8fafc; gap:0; }
// .nso-bg      { background:linear-gradient(135deg,#fff7ed,#fff); }
// .ticker-bg   { background:linear-gradient(135deg,#0b2540,#1e3a8a); flex-direction:column; padding:60px; }

// /* Cricket animation */
// .cricket-arena { width:220px; height:220px; border-radius:50%; background:radial-gradient(circle,#4ade80,#16a34a); position:relative; border:6px solid #15803d; box-shadow:0 8px 32px rgba(22,163,74,0.3); display:flex; align-items:center; justify-content:center; }
// .cricket-pitch-oval { width:40px; height:90px; background:#d97706; border-radius:8px; position:absolute; }
// .cricket-ball-anim { position:absolute; font-size:1.6rem; top:50%; left:20%; transform:translate(-50%,-50%); transition:all 0.8s cubic-bezier(0.25,0.46,0.45,0.94); }
// .cricket-ball-anim.fly { transform:translate(200px,-180px) rotate(720deg) scale(0.3); opacity:0; }
// .cricket-bat { position:absolute; bottom:20px; right:20px; font-size:2rem; }

// /* Piano */
// .mini-piano-wrap { display:flex; flex-direction:column; align-items:center; gap:12px; }
// #piano-keys-row { display:flex; gap:3px; background:#1a1a2e; padding:16px 12px 20px; border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,0.3); }
// .pk-white { width:38px; height:120px; background:#fff; border-radius:0 0 6px 6px; border:1px solid #ccc; cursor:pointer; display:flex; align-items:flex-end; justify-content:center; padding-bottom:6px; transition:background .15s; }
// .pk-white:hover,.pk-white.lit { background:#a7dde3; }
// .pk-black { width:26px; height:78px; background:#1a1a2e; border-radius:0 0 5px 5px; cursor:pointer; margin:0 -13px; z-index:2; transition:background .15s; }
// .pk-black:hover,.pk-black.lit { background:#0b2540; }
// .pk-note { font-size:9px; color:#94a3b8; font-weight:700; }
// .piano-hint { font-size:0.78rem; color:#94a3b8; font-style:italic; }

// /* Spiritual */
// .byd-spiritual-center { width:100%; display:flex; flex-direction:column; align-items:center; gap:28px; padding:0 80px; text-align:center; }
// .spiritual-orbs { display:flex; gap:20px; }
// .orb { font-size:2rem; animation:float 3s ease-in-out infinite; }
// .orb:nth-child(2){animation-delay:.4s}
// .orb:nth-child(3){animation-delay:.8s}
// .orb:nth-child(4){animation-delay:1.2s}
// .orb:nth-child(5){animation-delay:1.6s}
// @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
// .byd-quote { font-size:1.15rem; color:rgba(255,255,255,0.9); line-height:2; font-style:italic; max-width:700px; position:relative; padding:0 40px; }
// .byd-quote::before,.byd-quote::after { content:'"'; font-size:5rem; color:#a7dde3; font-family:'Poppins',sans-serif; position:absolute; opacity:0.5; line-height:1; }
// .byd-quote::before { top:-10px; left:0; }
// .byd-quote::after  { bottom:-40px; right:0; }

// /* Duo */
// .byd-duo-left,.byd-duo-right { flex:1; padding:60px; display:flex; flex-direction:column; gap:14px; }
// .byd-duo-left { border-right:1px solid #e2e8f0; }
// .byd-duo-divider { font-size:3rem; opacity:0.3; position:absolute; left:50%; transform:translateX(-50%); }

// /* NSO grid */
// .nso-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px; }
// .nso-grid span { font-size:2.2rem; background:#fff7ed; border-radius:14px; padding:14px; border:1.5px solid #fed7aa; display:flex; align-items:center; justify-content:center; transition:transform .2s; cursor:default; }
// .nso-grid span:hover { transform:scale(1.18) rotate(6deg); }

// /* Ticker */
// .ticker-content { width:100%; display:flex; flex-direction:column; gap:24px; }
// .ticker-track-wrap { overflow:hidden; width:100%; }
// .ticker-track { display:flex; gap:16px; animation:tickscroll 20s linear infinite; width:max-content; }
// .ticker-track span { font-size:0.9rem; font-weight:700; padding:10px 20px; border-radius:30px; background:rgba(167,221,227,0.15); color:#a7dde3; border:1.5px solid rgba(167,221,227,0.3); white-space:nowrap; }
// @keyframes tickscroll { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }

// @media(max-width:900px){
//   .byd-section { flex-direction:column !important; padding:40px 24px; gap:32px; }
//   .byd-spiritual-center { padding:0 20px; }
//   .byd-duo-left { border-right:none; border-bottom:1px solid #e2e8f0; padding:40px 24px; }
//   .byd-duo-right { padding:40px 24px; }
//   .nso-grid { grid-template-columns:repeat(4,1fr); }
// }
// </style>
// `;

// document.getElementById('beyond-content').innerHTML = BEYOND_CONTENT;

// // Run after injection
// (function() {
//   // ── Cricket auto-animation ──
//   function doCricket() {
//     var ball = document.getElementById('cball');
//     if (!ball) return;
//     ball.classList.add('fly');
//     setTimeout(function() {
//       ball.classList.remove('fly');
//       setTimeout(doCricket, 2000);
//     }, 900);
//   }
//   setTimeout(doCricket, 800);

//   // ── Piano build + auto-play ──
//   var container = document.getElementById('piano-keys-row');
//   if (!container) return;

//   var NOTES = [
//     {freq:261.63,type:'white',label:'C'},
//     {freq:277.18,type:'black'},
//     {freq:293.66,type:'white',label:'D'},
//     {freq:311.13,type:'black'},
//     {freq:329.63,type:'white',label:'E'},
//     {freq:349.23,type:'white',label:'F'},
//     {freq:369.99,type:'black'},
//     {freq:392.00,type:'white',label:'G'},
//     {freq:415.30,type:'black'},
//     {freq:440.00,type:'white',label:'A'},
//     {freq:466.16,type:'black'},
//     {freq:493.88,type:'white',label:'B'},
//     {freq:523.25,type:'white',label:'C'},
//   ];

//   var AudioCtx = window.AudioContext || window.webkitAudioContext;
//   var actx = null;
//   var keyEls = [];

//   NOTES.forEach(function(n, i) {
//     var el = document.createElement('div');
//     el.className = n.type === 'white' ? 'pk-white' : 'pk-black';
//     if (n.type === 'white' && n.label) {
//       el.innerHTML = '<span class="pk-note">' + n.label + '</span>';
//     }
//     el.addEventListener('mousedown', function() { playNote(n.freq, el); });
//     container.appendChild(el);
//     keyEls.push({el:el, freq:n.freq, type:n.type});
//   });

//   function playNote(freq, el) {
//     try {
//       if (!actx) actx = new AudioCtx();
//       var osc = actx.createOscillator();
//       var gain = actx.createGain();
//       osc.connect(gain);
//       gain.connect(actx.destination);
//       osc.type = 'triangle';
//       osc.frequency.setValueAtTime(freq, actx.currentTime);
//       gain.gain.setValueAtTime(0.35, actx.currentTime);
//       gain.gain.exponentialRampToValueAtTime(0.001, actx.currentTime + 1.0);
//       osc.start(actx.currentTime);
//       osc.stop(actx.currentTime + 1.0);
//     } catch(e) {}
//     if (el) {
//       el.classList.add('lit');
//       setTimeout(function() { el.classList.remove('lit'); }, 300);
//     }
//   }

//   // Auto-play a simple melody
//   var melody = [0,2,4,5,7,9,11,12,9,7,5,4,2,0];
//   var whiteKeys = keyEls.filter(function(k){ return k.type==='white'; });

//   function autoPlay(idx) {
//     if (idx >= melody.length) {
//       setTimeout(function(){ autoPlay(0); }, 2000);
//       return;
//     }
//     var ki = melody[idx];
//     if (whiteKeys[ki]) playNote(whiteKeys[ki].freq, whiteKeys[ki].el);
//     setTimeout(function(){ autoPlay(idx+1); }, 380);
//   }

//   // Start auto-play after a short delay
//   setTimeout(function(){ autoPlay(0); }, 1200);

// })();