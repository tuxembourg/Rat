/* =====================================================================
   app.js — Main application logic
   ===================================================================== */

// -----------------------------------------------------------------------
// PAGE ROUTER
// -----------------------------------------------------------------------
function loadPage(pageId) {
  const main = document.getElementById('main-content');

  // Update active nav button
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const allBtns = document.querySelectorAll('.nav-btn');
  const pageMap = { home: 0, tool1: 1, tool2: 2 };
  if (pageMap[pageId] !== undefined) {
    allBtns[pageMap[pageId]].classList.add('active');
  }

  main.innerHTML = '';
  main.style.animation = 'none';
  void main.offsetWidth; // reflow to retrigger animation
  main.style.animation = '';

  switch (pageId) {
    case 'home':  main.innerHTML = renderHome();  break;
    case 'tool1': main.innerHTML = renderTool1(); break;
    case 'tool2': main.innerHTML = renderTool2(); break;
    default:      main.innerHTML = renderHome();
  }
}

// -----------------------------------------------------------------------
// HOME PAGE
// -----------------------------------------------------------------------
function renderHome() {
  // PLACEHOLDER: Channel name used in homepage heading — change "CHANNEL" below
  const channelName = 'CHANNEL'; // PLACEHOLDER: Homepage heading channel name

  // Each project card: title + description + modal content
  const projects = [
    {
      // PLACEHOLDER: Project card 1 — title, description, modal body
      num: '01',
      title: 'Socials',
      desc: 'This card has my socials Follow me because why not?.',
      modalTitle: 'Socials',
      modalBody: `<p>This has all my public socials</p>
                  <ul>
                    <li>https://youtube.com/@fluxxblad3</li>
                    <li>discord userid: 1484089269621489776</li>
                    <li>discord username: tux.tux</li>
                    <li>https://www.tiktok.com/@linux.tux.tux</li>
                    <li>https://steamcommunity.com/id/darealnpc</li>
                    <li>https://github.com/tuxembourg/</li>
                  </ul>`
    },
    {
      // PLACEHOLDER: Project card 2 — title, description, modal body
      num: '02',
      title: 'Description',
      desc: 'What most of the tools does
      modalTitle: 'Descriptions',
      modalBody: `<p>What it does.</p>
                  <ul>
                    <li>Rat 1: Classic rat skidded from multiple sources but mostly original</li>
                    <li>Rat 2: Custom rat skidded from 1 source</li>
                    <li>Cypher: Custom built shell-like environment with multiple options like ip-geolocation capabilities</li>
                    <li>Kernel X: Custom built shell coming soon</li>
                    <li>MORE TOOLS COMING SOON!</li>
                  </ul>`
    },
    {
      // PLACEHOLDER: Project card 3 — title, description, modal body
      num: '03',
      title: 'Other Projects',
      desc: 'Other Projects.',
      modalTitle: 'Other Projecst',
      modalBody: `<p>Velvet Casino, Fake casino fully built in html just for fun \n https://tuxembourg.github.io/velvet.</p>`
    },
    {
      // PLACEHOLDER: Project card 4 — title, description, modal body
      num: '04',
      title: 'PLACEHOLDER PROJECT 4',
      desc: 'PLACEHOLDER — Short description of project four goes here.',
      modalTitle: 'Project Four',
      modalBody: `<p>PLACEHOLDER — Detailed description of Project 4.</p>`
    },
    {
      // PLACEHOLDER: Project card 5 — title, description, modal body
      num: '05',
      title: 'PLACEHOLDER PROJECT 5',
      desc: 'PLACEHOLDER — Short description of project five goes here.',
      modalTitle: 'Project Five',
      modalBody: `<p>PLACEHOLDER — Detailed description of Project 5.</p>`
    },
    {
      // PLACEHOLDER: Project card 6 — title, description, modal body
      num: '06',
      title: 'PLACEHOLDER PROJECT 6',
      desc: 'PLACEHOLDER — Short description of project six goes here.',
      modalTitle: 'Project Six',
      modalBody: `<p>PLACEHOLDER — Detailed description of Project 6.</p>`
    },
    {
      // PLACEHOLDER: Project card 7 — title, description, modal body
      num: '07',
      title: 'PLACEHOLDER PROJECT 7',
      desc: 'PLACEHOLDER — Short description of project seven goes here.',
      modalTitle: 'Project Seven',
      modalBody: `<p>PLACEHOLDER — Detailed description of Project 7.</p>`
    },
    {
      // PLACEHOLDER: Project card 8 — title, description, modal body
      num: '08',
      title: 'PLACEHOLDER PROJECT 8',
      desc: 'PLACEHOLDER — Short description of project eight goes here.',
      modalTitle: 'Project Eight',
      modalBody: `<p>PLACEHOLDER — Detailed description of Project 8.</p>`
    },
    {
      // PLACEHOLDER: Project card 9 — title, description, modal body
      num: '09',
      title: 'PLACEHOLDER PROJECT 9',
      desc: 'PLACEHOLDER — Short description of project nine goes here.',
      modalTitle: 'Project Nine',
      modalBody: `<p>PLACEHOLDER — Detailed description of Project 9.</p>`
    },
    {
      // PLACEHOLDER: Project card 10 — title, description, modal body
      num: '10',
      title: 'PLACEHOLDER PROJECT 10',
      desc: 'PLACEHOLDER — Short description of project ten goes here.',
      modalTitle: 'Project Ten',
      modalBody: `<p>PLACEHOLDER — Detailed description of Project 10.</p>`
    },
  ];

  const cards = projects.map((p, i) => `
    <div class="project-card" onclick="openProjectModal(${i})">
      <div class="card-num">${p.num}</div>
      <div class="card-title">${p.title}</div>
      <div class="card-desc">${p.desc}</div>
      <span class="card-arrow">↗</span>
    </div>
  `).join('');

  // Store project data globally so modal can access it
  window._projects = projects;

  return `
    <div class="home-heading">
      <span class="accent-word">${channelName}</span>
      PROJECTS
    </div>
    <!-- PLACEHOLDER: Home subtitle line below heading -->
    <div class="home-subtitle">// PLACEHOLDER — Tagline or subtitle for your projects page</div>
    <div class="projects-grid">${cards}</div>
  `;
}

// -----------------------------------------------------------------------
// TOOL PAGE 1 — Builder (PyInstaller token injector)
// -----------------------------------------------------------------------
function renderTool1() {
  return `
    <div class="page-header">
      <span class="page-tag">// TOOL 01</span>
      <!-- PLACEHOLDER: Tool 1 page title -->
      <div class="page-title">PLACEHOLDER — BUILDER</div>
      <!-- PLACEHOLDER: Tool 1 page description -->
      <div class="page-desc">PLACEHOLDER — Enter your token below. The script will inject it and compile a standalone executable.</div>
    </div>

    <div class="tool-card">
      <!-- PLACEHOLDER: Tool 1 input field label -->
      <span class="tool-label">// PUT YOUR TOKEN HERE</span>
      <div class="tool-input-row">
        <input
          class="tool-input"
          id="build-token-input"
          type="text"
          placeholder="PLACEHOLDER — paste token here..."
          onkeydown="if(event.key==='Enter') runBuild()"
        />
        <button class="btn-build" id="build-btn" onclick="runBuild()">Build</button>
      </div>

      <div class="build-status" id="build-status"></div>
      <button class="btn-download" id="download-btn" onclick="downloadExe()">
        ⬇ Download Executable
      </button>
    </div>

    <div class="tag-row" style="margin-top:28px">
      <!-- PLACEHOLDER: Tool 1 tags / badges -->
      <span class="tag">PyInstaller</span>
      <span class="tag">Python</span>
      <span class="tag">PLACEHOLDER TAG</span>
    </div>
  `;
}

// Build logic for Tool 1
async function runBuild() {
  const input   = document.getElementById('build-token-input');
  const status  = document.getElementById('build-status');
  const btn     = document.getElementById('build-btn');
  const dlBtn   = document.getElementById('download-btn');

  const build_1field = input.value.trim(); // PLACEHOLDER: This value is injected into your script as {build_1field}
  if (!build_1field) {
    input.focus();
    input.style.borderColor = 'var(--accent3)';
    setTimeout(() => { input.style.borderColor = ''; }, 1200);
    return;
  }

  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span>Building...';
  dlBtn.classList.remove('visible');

  status.classList.add('visible');
  status.innerHTML = '';

  const log = (msg, type = '') => {
    status.innerHTML += `<span class="log-line ${type}">${msg}</span>`;
  };

  // Simulate build steps — replace this block with your actual backend call
  // PLACEHOLDER: Replace the simulated steps below with a real fetch() to your build backend/API
  const steps = [
    { msg: `> Injecting token into script template...`,          delay: 600  },
    { msg: `> Token accepted: <span style="color:var(--accent)">${escHtml(build_1field.slice(0,6))}••••</span>`, delay: 900  },
    { msg: `> Running PyInstaller — please wait...`,             delay: 1500 },
    { msg: `> Bundling dependencies...`,                         delay: 2400 },
    { msg: `> Compiling binary...`,                              delay: 3200 },
    { msg: `✔ Build complete. Executable ready.`,                delay: 3800, type: 'ok' },
  ];

  for (const step of steps) {
    await wait(step.delay);
    log(step.msg, step.type || '');
  }

  btn.disabled = false;
  btn.innerHTML = 'Build';
  dlBtn.classList.add('visible');

  // Store the token so downloadExe can use it if needed
  window._lastBuildToken = build_1field;
}

function downloadExe() {
  // PLACEHOLDER: Replace this with the actual download URL/blob returned by your build backend
  // e.g. window.location.href = '/api/download?token=' + encodeURIComponent(window._lastBuildToken);
  const placeholder = new Blob(
    ['# PLACEHOLDER — this is where your compiled executable binary would be delivered.\n# Replace this logic with a real download from your build server.'],
    { type: 'application/octet-stream' }
  );
  const url = URL.createObjectURL(placeholder);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'output.exe'; // PLACEHOLDER: Change filename as needed
  a.click();
  URL.revokeObjectURL(url);
}

// -----------------------------------------------------------------------
// TOOL PAGE 2 — PLACEHOLDER-CYPH ZIP download
// -----------------------------------------------------------------------
function renderTool2() {
  return `
    <div class="page-header">
      <span class="page-tag">// TOOL 02</span>
      <!-- PLACEHOLDER: Tool 2 page title — currently shows PLACEHOLDER-CYPH -->
      <div class="page-title">PLACEHOLDER-CYPH</div>
      <!-- PLACEHOLDER: Tool 2 page description -->
      <div class="page-desc">PLACEHOLDER — Brief description of what this download contains or does.</div>
    </div>

    <div class="cyph-box">
      <span class="cyph-icon">🗜</span>
      <!-- PLACEHOLDER: CYPH box heading -->
      <div class="cyph-title">PLACEHOLDER-CYPH</div>
      <!-- PLACEHOLDER: CYPH box sub-text -->
      <div class="cyph-sub">PLACEHOLDER — Description of the package contents. Click below to download the archive.</div>
      <button class="btn-cyph-dl" onclick="downloadCyph()">
        ⬇ Download .zip
      </button>
    </div>
  `;
}

function downloadCyph() {
  // PLACEHOLDER: Replace with your actual .zip file path or download endpoint
  // e.g. window.location.href = '/files/placeholder-cyph.zip';
  const a = document.createElement('a');
  a.href = 'placeholder-cyph.zip'; // PLACEHOLDER: Path to your actual ZIP file
  a.download = 'PLACEHOLDER-CYPH.zip';
  a.click();
}

// -----------------------------------------------------------------------
// COMING SOON — shown when any coming-soon sidebar button is clicked
// -----------------------------------------------------------------------
function showComingSoon() {
  const main = document.getElementById('main-content');
  main.innerHTML = `
    <div class="coming-soon-banner">
      <span class="cs-tag">// STATUS</span>
      <h2>COMING SOON!!</h2>
      <!-- PLACEHOLDER: Coming soon message body -->
      <p>Stay tuned to see the new tools coming soon!</p>
      <!-- PLACEHOLDER: Optional extra coming-soon detail line -->
      <p style="color:var(--text-faint);font-size:11px;margin-top:4px;">PLACEHOLDER — You can add a teaser or ETA here.</p>
    </div>
  `;
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
}

// -----------------------------------------------------------------------
// WARNING MODAL
// -----------------------------------------------------------------------
function openWarning() {
  document.getElementById('warning-overlay').classList.remove('hidden');
}
function closeWarning() {
  document.getElementById('warning-overlay').classList.add('hidden');
}
// Close on overlay background click
document.getElementById('warning-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeWarning();
});

// -----------------------------------------------------------------------
// PROJECT CARD MODAL
// -----------------------------------------------------------------------
function openProjectModal(index) {
  const p = window._projects[index];
  if (!p) return;
  const modal = document.getElementById('project-modal-content');
  modal.innerHTML = `
    <button class="modal-close" onclick="closeProjectModal()">✕</button>
    <span class="proj-modal-tag">// PROJECT ${p.num}</span>
    <div class="proj-modal-title">${p.title}</div>
    <div class="proj-modal-body">${p.modalBody}</div>
  `;
  document.getElementById('project-overlay').classList.remove('hidden');
}
function closeProjectModal() {
  document.getElementById('project-overlay').classList.add('hidden');
}
document.getElementById('project-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeProjectModal();
});

// -----------------------------------------------------------------------
// UTILITIES
// -----------------------------------------------------------------------
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }
function escHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// -----------------------------------------------------------------------
// INIT — load home page on start
// -----------------------------------------------------------------------
loadPage('home');
