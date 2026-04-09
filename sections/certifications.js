const CERTIFICATIONS_CONTENT = `

<div class="cert-wrap">

  <div class="cert-filters">
    <button class="cert-filter active" data-filter="all">All</button>
    <button class="cert-filter" data-filter="cloud">☁️ Cloud & Data</button>
    <button class="cert-filter" data-filter="ai">🤖 AI & ML</button>
    <button class="cert-filter" data-filter="de">🏗️ Data Engineering</button>
    <button class="cert-filter" data-filter="automation">⚡ Automation</button>
    <button class="cert-filter" data-filter="dev">💻 Development</button>
    <button class="cert-filter" data-filter="domain">📚 Domain Knowledge</button>
    <button class="cert-filter" data-filter="other">🎯 Others</button>
  </div>

  <div class="cert-accordion" id="cert-accordion"></div>

</div>

<style>
.cert-wrap { width:100%; }
.cert-filters { display:flex; flex-wrap:wrap; gap:10px; margin-bottom:32px; }
.cert-filter { padding:8px 18px; border-radius:24px; border:2px solid #e2e8f0; background:#fff; font-family:'Poppins',sans-serif; font-size:0.85rem; font-weight:600; color:#475569; cursor:pointer; transition:all .25s; }
.cert-filter:hover { border-color:#a7dde3; color:#0b2540; }
.cert-filter.active { background:linear-gradient(135deg,#0b2540,#0f3a60); color:#a7dde3; border-color:#0b2540; }
.cert-accordion { display:flex; flex-direction:column; gap:12px; }
.cert-group { border-radius:14px; overflow:hidden; border:1.5px solid #e2e8f0; background:#fff; }
.cert-group-header { display:flex; align-items:center; justify-content:space-between; padding:16px 22px; cursor:pointer; background:#f8fafc; transition:background .2s; user-select:none; }
.cert-group-header:hover { background:#e0f2f4; }
.cert-group-header-left { display:flex; align-items:center; gap:12px; }
.cert-group-icon { font-size:1.4rem; }
.cert-group-name { font-family:'Poppins',sans-serif; font-size:0.95rem; font-weight:700; color:#0b2540; }
.cert-group-count { font-size:0.75rem; font-weight:600; padding:2px 10px; border-radius:20px; background:#e0f2f4; color:#0b2540; }
.cert-group-arrow { font-size:0.85rem; color:#94a3b8; transition:transform .3s; display:inline-block; }
.cert-group-arrow.open { transform:rotate(180deg); }
.cert-group-body { display:none; flex-direction:column; padding:8px 16px 12px; }
.cert-group-body.open { display:flex; }
.cert-row { display:flex; align-items:center; justify-content:space-between; padding:11px 8px; border-bottom:1px solid #f1f5f9; border-radius:8px; transition:background .2s; }
.cert-row:last-child { border-bottom:none; }
.cert-row:hover { background:#f8fafc; }
.cert-row-left { display:flex; align-items:center; gap:14px; }
.cert-issuer-icon { width:34px; height:34px; min-width:34px; border-radius:8px; display:flex; align-items:center; justify-content:center; background:#f1f5f9; overflow:hidden; padding:3px; }
.cert-issuer-icon img { width:100%; height:100%; object-fit:contain; }
.cert-info { display:flex; flex-direction:column; gap:2px; }
.cert-name { font-size:0.87rem; font-weight:700; color:#0b2540; }
.cert-issuer { font-size:0.74rem; color:#94a3b8; font-weight:600; }
.cert-domain-tag { font-size:0.7rem; font-weight:600; padding:3px 10px; border-radius:20px; white-space:nowrap; }
.tag-cloud { background:#dbeafe; color:#1e3a8a; }
.tag-ai { background:#ede9fe; color:#4c1d95; }
.tag-de { background:#dcfce7; color:#14532d; }
.tag-automation { background:#fef3c7; color:#92400e; }
.tag-dev { background:#d1fae5; color:#065f46; }
.tag-domain { background:#ffedd5; color:#7c2d12; }
.tag-other { background:#f1f5f9; color:#475569; }
</style>

`;

document.getElementById('certifications-content').innerHTML = CERTIFICATIONS_CONTENT;

(function() {
  var F = 'https://www.google.com/s2/favicons?sz=64&domain=';

  const CERTS = [
    // Cloud & Data
    { name:'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',         issuer:'Oracle',         icon: F+'oracle.com',               domain:'cloud', tag:'tag-cloud' },
    { name:'Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate',      issuer:'Oracle',         icon: F+'oracle.com',               domain:'cloud', tag:'tag-cloud' },
    { name:'Oracle Cloud Infrastructure Certified Generative AI Professional',         issuer:'Oracle',         icon: F+'oracle.com',               domain:'cloud', tag:'tag-cloud' },
    { name:'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',     issuer:'Oracle',         icon: F+'oracle.com',               domain:'cloud', tag:'tag-cloud' },
    { name:'Data Science',                                                              issuer:'Snowflake',      icon: F+'snowflake.com',             domain:'cloud', tag:'tag-cloud' },
    { name:'Snowflake Data Warehouse',                                                  issuer:'Snowflake',      icon: F+'snowflake.com',             domain:'cloud', tag:'tag-cloud' },
    { name:'Modernize Infrastructure and Applications with Google Cloud',               issuer:'Google Cloud',   icon: F+'cloud.google.com',          domain:'cloud', tag:'tag-cloud' },
    { name:'Machine Learning Pipelines with Azure ML Studio',                          issuer:'Coursera',       icon: F+'coursera.org',              domain:'cloud', tag:'tag-cloud' },

    // AI & ML
    { name:'Generative AI',                                                             issuer:'Databricks',     icon: F+'databricks.com',            domain:'ai', tag:'tag-ai' },
    { name:'Databricks AI Agents Fundamentals',                                         issuer:'Databricks',     icon: F+'databricks.com',            domain:'ai', tag:'tag-ai' },
    { name:'AWS Artificial Intelligence Practitioner',                                  issuer:'AWS',            icon: F+'aws.amazon.com',            domain:'ai', tag:'tag-ai' },
    { name:'Innovating with Google Cloud AI',                                           issuer:'Google Cloud',   icon: F+'cloud.google.com',          domain:'ai', tag:'tag-ai' },
    { name:'Introduction to Large Language Models',                                     issuer:'Google Cloud',   icon: F+'cloud.google.com',          domain:'ai', tag:'tag-ai' },
    { name:'Build your Own Chatbot',                                                    issuer:'IBM',            icon: F+'ibm.com',                   domain:'ai', tag:'tag-ai' },
    { name:'Advanced Prompt Engineering',                                               issuer:'Simplilearn',    icon: F+'simplilearn.com',           domain:'ai', tag:'tag-ai' },
    { name:'Deep Learning Using PyTorch',                                               issuer:'HCL GUVI',       icon: F+'guvi.in',                   domain:'ai', tag:'tag-ai' },
    { name:'Machine Learning',                                                          issuer:'HCL GUVI',       icon: F+'guvi.in',                   domain:'ai', tag:'tag-ai' },
    { name:'ChatGPT for Everyone',                                                      issuer:'HCL GUVI',       icon: F+'guvi.in',                   domain:'ai', tag:'tag-ai' },
    { name:'AI for India 2.0',                                                          issuer:'NSDC International', icon: F+'nsdcindia.org',          domain:'ai', tag:'tag-ai' },
    { name:'Artificial Intelligence',                                                   issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'ai', tag:'tag-ai' },
    { name:'Introduction to Data Science',                                              issuer:'Simplilearn',    icon: F+'simplilearn.com',           domain:'ai', tag:'tag-ai' },
    { name:'Machine Learning With Big Data',                                            issuer:'Coursera',       icon: F+'coursera.org',              domain:'ai', tag:'tag-ai' },

    // Data Engineering
    { name:'Data Engineering',                                                          issuer:'Snowflake',      icon: F+'snowflake.com',             domain:'de', tag:'tag-de' },
    { name:'Databricks Fundamentals',                                                   issuer:'Databricks',     icon: F+'databricks.com',            domain:'de', tag:'tag-de' },
    { name:'Introduction to PySpark',                                                   issuer:'Simplilearn',    icon: F+'simplilearn.com',           domain:'de', tag:'tag-de' },
    { name:'Getting Started with Amazon Redshift',                                      issuer:'AWS',            icon: F+'aws.amazon.com',            domain:'de', tag:'tag-de' },
    { name:'Getting Started with Amazon QuickSight',                                    issuer:'AWS',            icon: F+'aws.amazon.com',            domain:'de', tag:'tag-de' },
    { name:'Introduction to Tableau',                                                   issuer:'Simplilearn',    icon: F+'simplilearn.com',           domain:'de', tag:'tag-de' },
    { name:'Data Analytics with Python',                                                issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'de', tag:'tag-de' },
    { name:'Business Analytics',                                                        issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'de', tag:'tag-de' },

    // Automation
    { name:'Certified Essentials Automation Professional',                              issuer:'Automation Anywhere', icon: F+'automationanywhere.com', domain:'automation', tag:'tag-automation' },
    { name:'Introduction to Robotic Process Automation (RPA)',                         issuer:'Simplilearn',    icon: F+'simplilearn.com',           domain:'automation', tag:'tag-automation' },
    { name:'Basics of Automation Anywhere',                                             issuer:'Simplilearn',    icon: F+'simplilearn.com',           domain:'automation', tag:'tag-automation' },

    // Development
    { name:'Python Programming',                                                        issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'dev', tag:'tag-dev' },
    { name:'Java Programming',                                                          issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'dev', tag:'tag-dev' },
    { name:'C++ Programming',                                                           issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'dev', tag:'tag-dev' },
    { name:'Android App Development',                                                   issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'dev', tag:'tag-dev' },

    // Domain Knowledge
    { name:'Fuzzy Sets, Logic, System and Applications',                                issuer:'NPTEL',          icon: F+'nptel.ac.in',               domain:'domain', tag:'tag-domain' },
    { name:'Electrical Vehicles and Renewable Energy',                                  issuer:'NPTEL',          icon: F+'nptel.ac.in',               domain:'domain', tag:'tag-domain' },
    { name:'Design of Inverters and Battery Pack for EV Applications',                 issuer:'SSN College of Engineering', icon: F+'ssn.edu.in',    domain:'domain', tag:'tag-domain' },
    { name:'Awareness about DRDO Labs and Projects',                                    issuer:'SSN College of Engineering', icon: F+'ssn.edu.in',    domain:'domain', tag:'tag-domain' },

    // Others
    { name:'Stock Market and Finance',                                                  issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'other', tag:'tag-other' },
    { name:'Psychology',                                                                issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'other', tag:'tag-other' },
    { name:'Marketing and Advertising',                                                 issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'other', tag:'tag-other' },
    { name:'Entrepreneurship',                                                          issuer:'MyCaptain',      icon: F+'mycaptain.in',              domain:'other', tag:'tag-other' },
    { name:'Fit India Cyclothon',                                                       issuer:'Fit India Movement', icon: F+'fitindia.gov.in',       domain:'other', tag:'tag-other' },
  ];

  const GROUPS = [
    { key:'cloud',      label:'Cloud & Data',      icon:'☁️' },
    { key:'ai',         label:'AI & ML',            icon:'🤖' },
    { key:'de',         label:'Data Engineering',   icon:'🏗️' },
    { key:'automation', label:'Automation',          icon:'⚡' },
    { key:'dev',        label:'Development',         icon:'💻' },
    { key:'domain',     label:'Domain Knowledge',    icon:'📚' },
    { key:'other',      label:'Others',              icon:'🎯' },
  ];

  function renderAccordion(filter) {
    var acc = document.getElementById('cert-accordion');
    acc.innerHTML = '';
    GROUPS.forEach(function(g) {
      var certs = CERTS.filter(function(c) {
        return (filter === 'all' || filter === g.key) && c.domain === g.key;
      });
      if (certs.length === 0) return;

      var group = document.createElement('div');
      group.className = 'cert-group';

      var header = document.createElement('div');
      header.className = 'cert-group-header';
      header.innerHTML =
        '<div class="cert-group-header-left">' +
          '<span class="cert-group-icon">' + g.icon + '</span>' +
          '<span class="cert-group-name">' + g.label + '</span>' +
          '<span class="cert-group-count">' + certs.length + '</span>' +
        '</div>' +
        '<span class="cert-group-arrow">▼</span>';

      var body = document.createElement('div');
      body.className = 'cert-group-body';

      certs.forEach(function(c) {
        var row = document.createElement('div');
        row.className = 'cert-row';
        row.innerHTML =
          '<div class="cert-row-left">' +
            '<div class="cert-issuer-icon"><img src="' + c.icon + '" alt="' + c.issuer + '"></div>' +
            '<div class="cert-info">' +
              '<span class="cert-name">' + c.name + '</span>' +
              '<span class="cert-issuer">' + c.issuer + '</span>' +
            '</div>' +
          '</div>' +
          '<span class="cert-domain-tag ' + c.tag + '">' + g.label + '</span>';
        body.appendChild(row);
      });

      header.onclick = function() {
        var isOpen = body.classList.contains('open');
        body.classList.toggle('open', !isOpen);
        header.querySelector('.cert-group-arrow').classList.toggle('open', !isOpen);
      };

      group.appendChild(header);
      group.appendChild(body);
      acc.appendChild(group);
    });
  }

  document.querySelectorAll('.cert-filter').forEach(function(btn) {
    btn.onclick = function() {
      document.querySelectorAll('.cert-filter').forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      renderAccordion(btn.dataset.filter);
    };
  });

  renderAccordion('all');
})();