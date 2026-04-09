const PROJECTS_CONTENT = `

<div class="proj-wrap">
  <div class="proj-filters">
    <button class="proj-filter active" data-filter="all">All</button>
    <button class="proj-filter" data-filter="product">🏢 Products</button>
    <button class="proj-filter" data-filter="llm">🤖 LLM & Agents</button>
    <button class="proj-filter" data-filter="ml">📊 ML & Data</button>
    <button class="proj-filter" data-filter="nlp">💬 NLP</button>
    <button class="proj-filter" data-filter="cv">👁️ Computer Vision</button>
    <button class="proj-filter" data-filter="eng">⚡ Engineering</button>
  </div>
  <div class="proj-grid" id="proj-grid"></div>
  <div class="proj-modal-overlay" id="proj-overlay">
    <div class="proj-modal">
      <button class="proj-modal-close" id="proj-close">✕</button>
      <div class="proj-modal-icon" id="modal-icon"></div>
      <div class="proj-modal-tag" id="modal-tag"></div>
      <h3 class="proj-modal-title" id="modal-title"></h3>
      <ul class="proj-modal-bullets" id="modal-bullets"></ul>
      <div class="proj-modal-stack" id="modal-stack"></div>
      <div class="proj-modal-links" id="modal-links"></div>
    </div>
  </div>
</div>

<style>
.proj-wrap { width: 100%; }
.proj-filters { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:36px; }
.proj-filter { padding:8px 18px; border-radius:24px; border:2px solid #e2e8f0; background:#fff; font-family:'Poppins',sans-serif; font-size:0.85rem; font-weight:600; color:#475569; cursor:pointer; transition:all .25s; }
.proj-filter:hover { border-color:#a7dde3; color:#0b2540; }
.proj-filter.active { background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; border-color:#0b2540; }
.proj-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:18px; width:100%; }
.proj-card { background:#f8fafc; border-radius:16px; padding:24px 16px; text-align:center; border:1.5px solid #e2e8f0; cursor:pointer; transition:transform .25s,box-shadow .25s; display:flex; flex-direction:column; align-items:center; gap:10px; }
.proj-card:hover { transform:translateY(-6px); box-shadow:0 12px 32px rgba(11,37,64,0.12); border-color:#a7dde3; }
.proj-card-icon { font-size:2.2rem; display:block; }
.proj-card-name { font-family:'Poppins',sans-serif; font-size:0.82rem; font-weight:700; color:#0b2540; line-height:1.3; }
.proj-card-domain { font-size:0.7rem; font-weight:600; padding:3px 10px; border-radius:20px; margin-top:2px; }
.domain-product { background:#fef3c7; color:#92400e; }
.domain-llm { background:#ede9fe; color:#4c1d95; }
.domain-ml { background:#dcfce7; color:#14532d; }
.domain-nlp { background:#dbeafe; color:#1e3a8a; }
.domain-cv { background:#fce7f3; color:#831843; }
.domain-eng { background:#ffedd5; color:#7c2d12; }
.proj-modal-overlay { display:none; position:fixed; inset:0; background:rgba(11,37,64,0.55); z-index:9999; align-items:center; justify-content:center; padding:20px; }
.proj-modal-overlay.open { display:flex; }
.proj-modal { background:#fff; border-radius:20px; padding:36px; max-width:620px; width:100%; position:relative; max-height:85vh; overflow-y:auto; box-shadow:0 24px 64px rgba(11,37,64,0.22); }
.proj-modal-close { position:absolute; top:16px; right:20px; background:#f1f5f9; border:none; border-radius:50%; width:32px; height:32px; font-size:1rem; cursor:pointer; color:#475569; display:flex; align-items:center; justify-content:center; }
.proj-modal-close:hover { background:#e2e8f0; }
.proj-modal-icon { font-size:2.8rem; margin-bottom:8px; }
.proj-modal-tag { display:inline-block; font-size:0.72rem; font-weight:700; padding:3px 12px; border-radius:20px; margin-bottom:12px; text-transform:uppercase; letter-spacing:0.05em; }
.proj-modal-title { font-family:'Poppins',sans-serif; font-size:1.1rem; font-weight:700; color:#0b2540; margin-bottom:16px; line-height:1.4; }
.proj-modal-bullets { padding-left:18px; display:flex; flex-direction:column; gap:8px; margin-bottom:20px; }
.proj-modal-bullets li { font-size:0.92rem; color:#475569; line-height:1.7; }
.proj-modal-bullets strong { color:#0b2540; }
.proj-modal-stack { display:flex; flex-wrap:wrap; gap:7px; margin-bottom:20px; }
.proj-modal-stack span { font-size:0.75rem; font-weight:600; padding:4px 11px; border-radius:20px; background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; }
.proj-modal-links { display:flex; gap:12px; flex-wrap:wrap; }
.proj-modal-links a { font-size:0.85rem; font-weight:700; padding:8px 18px; border-radius:24px; text-decoration:none; transition:all .2s; }
.link-primary { background:#0b2540; color:#a7dde3; }
.link-primary:hover { background:#0f3a60; }
.link-secondary { background:#e0f2f4; color:#0b2540; border:1.5px solid #a7dde3; }
@media(max-width:900px) { .proj-grid { grid-template-columns:repeat(3,1fr); } }
@media(max-width:600px) { .proj-grid { grid-template-columns:repeat(2,1fr); } }
</style>

`;

document.getElementById('projects-content').innerHTML = PROJECTS_CONTENT;

// Run AFTER HTML is injected
(function() {
  const PROJECTS = [
    { id:1, icon:'🔍', name:'Xforia DAD', domain:'product', domainLabel:'Product', bullets:['Built an <strong>AI-powered Document Anomaly Detection</strong> platform using computer vision, deep learning, and explainable AI to detect forged signatures, mismatched timestamps, and suspicious behaviors.','Implemented <strong>Random Forest and XGBoost</strong> models on structured transaction data with Mindee API for OCR extraction from cheque images.','Integrated an <strong>LLM layer</strong> for human-readable anomaly explanations using only sanitized metadata — no sensitive data passed to LLM.','Built a <strong>monitoring dashboard</strong> tracking detection rates, pipeline performance, and anomaly explanations for internal evaluation.'], stack:['LangChain','XGBoost','Random Forest','Supabase','Mindee API','Python','Computer Vision','LLM'], links:[{label:'🌐 View Product',url:'https://www.xforia-dad.com/',cls:'link-primary'}] },
    { id:2, icon:'🌊', name:'Xforia COAST', domain:'product', domainLabel:'Product', bullets:['Architected an <strong>enterprise AI intelligence platform</strong> that breaks data silos across systems, delivering real-time analytics and AI-driven insights.','Implemented <strong>metadata-based chatbot filters</strong> and PostgreSQL/Supabase RAG integration for conversational data querying via Ria, the AI chatbot.','Built <strong>unified ETL pipelines</strong> from Snowflake and SharePoint, reducing data onboarding time by 30%.','Developed <strong>dynamic Power BI and Plotly dashboards</strong> for monitoring model performance, pipeline health, and business KPIs.'], stack:['RAG','PostgreSQL','Supabase','Snowflake','Power BI','Plotly','LangChain','Python'], links:[{label:'🌐 View Product',url:'https://www.xforiacoast.com/',cls:'link-primary'}] },
    { id:3, icon:'🧑‍💼', name:'AI Recruitment Agent', domain:'llm', domainLabel:'LLM & Agents', bullets:['Built an <strong>end-to-end AI agent recruitment system</strong> that processes unstructured job descriptions via LLM, auto-fills missing fields, and sends follow-up emails.','Used <strong>sentence-transformer embeddings</strong> to semantically match and rank candidates against job descriptions with location and preference constraints.','Integrated <strong>speech-to-text transcription</strong> of recruiter audio feedback, evaluated by LLM to generate structured scores and insights.','Automated <strong>RTR confirmation, submission formatting</strong>, and performance dashboards — cutting manual screening time by 60%.'], stack:['LLM Agents','LangChain','Sentence Transformers','Speech-to-Text','Supabase','Python','FastAPI'], links:[] },
    { id:4, icon:'🧬', name:'GeneChat', domain:'llm', domainLabel:'LLM & Agents', bullets:['Developed <strong>Multi-Modal LLMs for genomic predictions</strong>, enhancing gene functional analysis at scale.','Achieved a <strong>BLEU score of 0.205</strong>, outperforming baseline GPT models (0.143) by 43%.','Collected and preprocessed large-scale <strong>gene datasets from NCBI</strong> for training and evaluation pipelines.','Accepted at <strong>ICML 2025 Workshop</strong> on Multi-modal Foundation Models and Large Language Models for Life Sciences — one of the most prestigious ML conferences globally.'], stack:['LLMs','PyTorch','Fine-tuning','Genomics','NLP','Python'], links:[{label:'📄 View Paper',url:'https://www.biorxiv.org/content/biorxiv/early/2025/06/06/2025.06.05.658031.full.pdf',cls:'link-primary'}] },
    { id:5, icon:'🍽️', name:'Restaurant Recommender', domain:'ml', domainLabel:'ML & Data', bullets:['Built a <strong>hybrid recommender system</strong> using SVD, XGBoost, MLP, and Random Forest with BOW, TF-IDF, N-gram, and Sentiment Analysis.','Implemented <strong>DistilBERT for text</strong> and MobileNetV2 for image data to improve feature representation.','Achieved a low <strong>MSE of ~0.45</strong>, surpassing Jaccard Similarity baselines.','Comprehensive model combination testing and optimization across multiple evaluation metrics.'], stack:['SVD','XGBoost','DistilBERT','MobileNetV2','TF-IDF','Python','Scikit-learn'], links:[] },
    { id:6, icon:'🔬', name:'ForesightLA Analytics', domain:'ml', domainLabel:'ML & Data', bullets:['Analyzed <strong>correlational patterns</strong> among diverse parameters to understand crime occurrence probability — 15% improvement in prediction accuracy.','Used <strong>advanced statistical methods</strong> to identify high-risk regions for targeted interventions.','Generated actionable recommendations optimizing resource allocation — <strong>10% increase in operational efficiency</strong>.','Built data-driven dashboards for public safety strategy planning.'], stack:['Python','Statistical Analysis','Predictive Modeling','Data Visualization','Scikit-learn'], links:[] },
    { id:7, icon:'🅿️', name:'Parking Citation Analysis', domain:'ml', domainLabel:'ML & Data', bullets:['Analyzed <strong>50,000+ parking tickets</strong> using ML models and geospatial heat maps with Folium.','Applied <strong>Regression, XGBoost, Random Forest, SVD</strong> to correlate time, location, and vehicle type with citation frequency.','Built a <strong>client-side web app using Google Maps API</strong> to assess real-time parking ticket risk at any location.','Generated actionable geospatial insights leading to reduction in parking citations.'], stack:['Python','Folium','XGBoost','Random Forest','Google Maps API','JavaScript'], links:[] },
    { id:8, icon:'⚙️', name:'Adaptive ML — Industrial Motor', domain:'ml', domainLabel:'ML & Data', bullets:['Built an <strong>adaptive ML model</strong> for sensor and control design of spoke-type motors for three-wheeler EV applications.','Achieved a <strong>20% reduction in energy consumption</strong> and significant cost control.','Focused on enhancing energy efficiency and operational performance of electric vehicle drivetrains.','Designed for eco-friendly and cost-efficient transportation solutions.'], stack:['Anaconda','Python','Adaptive Modeling','Motor Design','Control Systems','MATLAB'], links:[] },
    { id:9, icon:'💬', name:'CNN Text Classification', domain:'nlp', domainLabel:'NLP', bullets:['Designed and evaluated <strong>multiple CNN architectures</strong> with varying layers and hidden sizes for text classification.','Achieved a <strong>0.20 reduction in loss</strong> and 85% model efficiency through hyperparameter tuning.','Optimized learning rate, batch size, filters, and kernel sizes for sentence classification tasks.','Demonstrated proficiency in deep learning NLP techniques and model optimization.'], stack:['PyTorch','TensorFlow','CNN','NLP','Python','Hyperparameter Tuning'], links:[] },
    { id:10, icon:'🎵', name:'Multimodal Sentiment Analysis', domain:'nlp', domainLabel:'NLP', bullets:['Built a <strong>multimodal sentiment analysis system</strong> combining NLP text analysis and audio deep learning.','Extracted <strong>Mel spectrogram images</strong> and trained LSTM, ConvNext Tiny, and VGG16 models for audio.','Integrated text and audio results achieving <strong>77% accuracy</strong> for music streaming recommendations.','Implemented a mobile app UI for intuitive user experience with real-time recommendations.'], stack:['NLTK','LSTM','VGG16','ConvNext','Mel Spectrograms','Python'], links:[] },
    { id:11, icon:'🖼️', name:'AI Image Inpainting', domain:'cv', domainLabel:'Computer Vision', bullets:['Implemented <strong>text-guided image segmentation</strong> using Segment Anything Model (SAM) and Grounding DINO for precise object localization.','Developed <strong>Stable Diffusion-based inpainting</strong> with LoRA fine-tuning — improving IoU from 0.8285 to 0.9734.','Dice score improved from 0.9062 to 0.9865 for high-quality, realistic inpainting results.','Seamlessly integrated textual prompts with visual data for controllable image generation.'], stack:['Stable Diffusion','LoRA','SAM','Grounding DINO','PyTorch','Computer Vision'], links:[] },
    { id:12, icon:'🚗', name:'Autonomous Navigation', domain:'cv', domainLabel:'Computer Vision', bullets:['Developed and simulated an <strong>autonomous navigation environment</strong> using PyBullet with diverse obstacle datasets.','Implemented <strong>VGG-16</strong> for image processing and control state prediction — achieving 75.15% accuracy.','Reduced loss by 5%, outperforming baseline CNN results in obstacle detection tasks.','Comparative analysis of neural network architectures for safer vehicle navigation.'], stack:['PyBullet','VGG-16','CNN','Deep Learning','Python','Computer Vision'], links:[] },
    { id:13, icon:'👁️', name:'Glaucoma Detection', domain:'cv', domainLabel:'Computer Vision', bullets:['Applied <strong>Canny, Roberts, Sobel edge detection</strong> for noise reduction and precise edge localization in medical images.','Trained <strong>CNNs on X-ray images</strong> to detect glaucoma and segment retinopathy zones.','Achieved <strong>85% precision</strong> in identifying vaso-obliteration zones and neovascular clusters.','Research conducted at UC San Diego Shiley Eye Institute.'], stack:['CNN','OpenCV','Deep Learning','Medical Imaging','Python','Image Segmentation'], links:[] },
    { id:14, icon:'☀️', name:'Solar Pump Motor Drive', domain:'eng', domainLabel:'Engineering', bullets:['Designed software and hardware for a <strong>solar-powered SynRM drive</strong> for centrifugal water pump applications.','Performed <strong>thermal and sensitivity analysis</strong> using Motorsolve and ANSYS to optimize motor performance.','Achieved <strong>IE4 efficiency standard of over 91%</strong> — meeting international energy efficiency requirements.','Integrated renewable solar energy with high-performance rare-earth-free ferrite magnet motor technology.'], stack:['ANSYS Maxwell','Motorsolve','FEA','MATLAB','Solar Energy','Motor Design'], links:[] },
    { id:15, icon:'🛵', name:'Spoke PMSM — Electric Trike', domain:'eng', domainLabel:'Engineering', bullets:['Carried out <strong>FEA investigations on spoke-type PMSM</strong> motors for electric trike applications.','Simulated <strong>power train architecture</strong> for dual-way DC converter fed EV drive system.','Designed and fabricated selected motor and complete power train for prototype testing.','SSN Internally Funded Research Project.'], stack:['FEA','MATLAB','ANSYS','Motor Design','Power Electronics','EV Systems'], links:[] },
    { id:16, icon:'📓', name:'VS Code Journal Extension', domain:'eng', domainLabel:'Engineering', bullets:['Built a <strong>VS Code journal extension</strong> with journal view, file tagging, and to-do features — improving productivity by 30%.','Implemented <strong>automated testing and CI/CD</strong> using GitHub Actions, reducing lint errors by 40%.','Optimized file retrieval system for <strong>25% faster navigation</strong> and improved UX.','Developed using JavaScript, CoffeeScript, and CSS with robust software engineering practices.'], stack:['JavaScript','CoffeeScript','CSS','GitHub Actions','CI/CD','VS Code API'], links:[] },
    //{ id:17, icon:'🔌', name:'Induction Motor Control', domain:'eng', domainLabel:'Engineering', bullets:['Applied <strong>Field-Oriented Control (FOC) and Vector Control</strong> techniques to optimize motor parameters.','Designed models in <strong>MATLAB Simulink</strong> using logic gates and flip-flops to simulate system behavior.','Increased output productivity by <strong>15%</strong> through control technique optimization.','Demonstrated effective simulation-based design for motor performance optimization.'], stack:['MATLAB','Simulink','FOC','Vector Control','Control Systems'], links:[] }
  ];

  const domainColors = { product:'domain-product', llm:'domain-llm', ml:'domain-ml', nlp:'domain-nlp', cv:'domain-cv', eng:'domain-eng' };

  function renderGrid(filter) {
    const grid = document.getElementById('proj-grid');
    grid.innerHTML = '';
    PROJECTS.forEach(p => {
      if (filter !== 'all' && p.domain !== filter) return;
      const card = document.createElement('div');
      card.className = 'proj-card';
      card.innerHTML = '<span class="proj-card-icon">' + p.icon + '</span><span class="proj-card-name">' + p.name + '</span><span class="proj-card-domain ' + domainColors[p.domain] + '">' + p.domainLabel + '</span>';
      card.onclick = function() { openModal(p); };
      grid.appendChild(card);
    });
  }

  function openModal(p) {
    document.getElementById('modal-icon').textContent = p.icon;
    document.getElementById('modal-title').textContent = p.name;
    var tag = document.getElementById('modal-tag');
    tag.textContent = p.domainLabel;
    tag.className = 'proj-modal-tag ' + domainColors[p.domain];
    document.getElementById('modal-bullets').innerHTML = p.bullets.map(function(b){ return '<li>' + b + '</li>'; }).join('');
    document.getElementById('modal-stack').innerHTML = p.stack.map(function(s){ return '<span>' + s + '</span>'; }).join('');
    document.getElementById('modal-links').innerHTML = p.links.map(function(l){ return '<a href="' + l.url + '" target="_blank" class="' + l.cls + '">' + l.label + '</a>'; }).join('');
    document.getElementById('proj-overlay').classList.add('open');
  }

  document.getElementById('proj-close').onclick = function() { document.getElementById('proj-overlay').classList.remove('open'); };
  document.getElementById('proj-overlay').onclick = function(e) { if (e.target === document.getElementById('proj-overlay')) document.getElementById('proj-overlay').classList.remove('open'); };

  document.querySelectorAll('.proj-filter').forEach(function(btn) {
    btn.onclick = function() {
      document.querySelectorAll('.proj-filter').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      renderGrid(btn.dataset.filter);
    };
  });

  renderGrid('all');
})();