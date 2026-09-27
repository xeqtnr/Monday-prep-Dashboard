/**
 * Monday Weekly Prep — Engineering Cockpit
 * Interactive Application Controller for Alexandru TIRON
 * Prep Baseline: 27 September 2026 for Monday 28 September, Bucharest Time
 */

// =============================================================================
// DATA MODEL DEFINITIONS
// =============================================================================

const DO_TODAY_ITEMS = [
  {
    id: "do-1",
    ini: "INI-109873",
    mo: "MO-003520",
    title: "EN 280-1 update, HA20RTJ R2",
    datasetDate: "30 Sep 2026",
    statusBadge: "30 Sep Last TR Threat",
    borderClass: "border-danger",
    planningRows: [
      { num: "#4278", dept: "Mechanical Design team", date: "15 Jul", pct: "0%", status: "zero" },
      { num: "#4280", dept: "System Test", owner: "Sorin Stoica", date: "1 Sep", pct: "0%", status: "zero" },
      { num: "#4281", dept: "System/Soft Test team", date: "2 Sep", pct: "0%", status: "zero" },
      { num: "#4283", dept: "System Design team", date: "29 Sep", pct: "0%", status: "zero" },
      { num: "#4274", dept: "Summary Finish", date: "Ongoing", pct: "9.7%", status: "partial" }
    ],
    actionText: "Put the 30 Sep Dataset Last TR on a gate review. Obtain the actual design, test and release evidence from each owner; decide whether 30 Sep remains a credible handover date and correct the plan. This is the clearest immediate commitment threat.",
    defaultDecision: "pending",
    defaultNotes: "Critical gate: Check with Sorin Stoica on System Test results; verify if Mechanical Design handover occurred outside Sciforma."
  },
  {
    id: "do-2",
    ini: "INI-109221",
    mo: "MO-003532",
    title: "Alimentation cable downsizing",
    datasetDate: "30 Sep 2026",
    statusBadge: "Summary Finish 18 Sep (0%)",
    borderClass: "border-danger",
    planningRows: [
      { num: "#4305", dept: "Mechanical Design team", date: "1 Sep", pct: "0%", status: "zero" },
      { num: "#4306–4307", dept: "System Design", owner: "Flavius Popescu", date: "4 & 18 Sep", pct: "0%", status: "zero" },
      { num: "#4303", dept: "Summary Finish", date: "18 Sep", pct: "0%", status: "zero" }
    ],
    actionText: "Confirm whether the work or Last TR was delivered outside Sciforma. If it remains open, obtain a recovery sequence and revise the 30 Sep Dataset date through the proper decision route.",
    defaultDecision: "pending",
    defaultNotes: "Check with Flavius Popescu if Last TR package was submitted to factory directly."
  },
  {
    id: "do-3",
    ini: "INI-108851",
    mo: "MO-003218",
    title: "STAR6 T1275 to LDC12-135",
    datasetDate: "18 Sep 2026 (Passed)",
    statusBadge: "Passed Dataset Date",
    borderClass: "border-danger",
    planningRows: [
      { num: "#2996", dept: "Mechanical Design", owner: "Lucian Petrea + team", date: "18 Sep", pct: "0%", status: "zero" },
      { num: "#3002", dept: "Endurance", owner: "Mihai Ciobanu & Darius Serban", date: "10 Jul", pct: "0%", status: "zero" },
      { num: "#3004", dept: "Endurance", owner: "Darius Serban", date: "22 Jul", pct: "0%", status: "zero" },
      { num: "#3006", dept: "System Design team", date: "23 Oct", pct: "0%", status: "zero" },
      { num: "#2990", dept: "Summary Finish", date: "23 Oct", pct: "0%", status: "zero" }
    ],
    actionText: "Resolve the already passed 18 Sep Dataset Last TR against unfinished plan rows. Confirm the actual test outcome and release scope; do not call the October System Design finish a September delivery without evidence.",
    defaultDecision: "pending",
    defaultNotes: "Check with Lucian Petrea & Darius Serban. October finish in plan cannot be counted as September delivery."
  },
  {
    id: "do-4",
    ini: "INI-109439",
    mo: "MO-003436",
    title: "COMPACT WIDE AE battery switching",
    datasetDate: "30 Sep 2026",
    statusBadge: "Nov Extension Clash",
    borderClass: "border-danger",
    planningRows: [
      { num: "#3966", dept: "System Design", owner: "Flavius Popescu", date: "18 Jun", pct: "0%", status: "zero" },
      { num: "#3967", dept: "Mechanical Design", owner: "Alin Raduica", date: "8 Sep", pct: "70%", status: "partial" },
      { num: "#3968", dept: "Mechanical Design team", date: "28 Apr", pct: "0%", status: "zero" },
      { num: "#3970–3971", dept: "Endurance", owner: "Mihai Ciobanu, Darius Serban + team", date: "6–7 Oct", pct: "0%", status: "zero" },
      { num: "#3973", dept: "System Design team", date: "19 Nov", pct: "0%", status: "zero" }
    ],
    actionText: "Challenge the 30 Sep Dataset Last TR in the review: the planned endurance and final design work extend into October and November. Confirm whether those rows serve this release scope; if they do, escalate a date decision now.",
    defaultDecision: "pending",
    defaultNotes: "Planned endurance extends to 6-7 Oct, final design to 19 Nov. Escalate date decision to avoid artificial delay."
  },
  {
    id: "do-5",
    ini: "INI-108334",
    mo: "MO-003102",
    title: "Sacred Sun charging strategy",
    datasetDate: "30 Sep 2026",
    statusBadge: "Sciforma Finish 20 Nov",
    borderClass: "border-danger",
    planningRows: [
      { num: "#4501–4503", dept: "System Design", date: "21–28 Oct", pct: "0%", status: "zero" },
      { num: "#4505–4507", dept: "System/Soft Test", date: "28 Oct–4 Nov", pct: "0%", status: "zero" },
      { num: "#4512–4514", dept: "System Design (later)", date: "13–20 Nov", pct: "0%", status: "zero" },
      { num: "#4499", dept: "Summary Finish", date: "20 Nov", pct: "0%", status: "zero" }
    ],
    actionText: "The 30 Sep Dataset Last TR and November plan cannot describe the same unfinished release without an explanation. Confirm scope, assign people, and submit a corrected commitment.",
    defaultDecision: "pending",
    defaultNotes: "All plan rows are team placeholders without named engineers. Scope alignment needed."
  },
  {
    id: "do-6",
    ini: "INI-109740",
    mo: "MO-003473",
    title: "Articulated boom pads optimisation",
    datasetDate: "30 Sep 2026",
    statusBadge: "Plan Overdue (June)",
    borderClass: "border-warning",
    planningRows: [
      { num: "#4096–4097", dept: "Mechanical Design team", date: "16–17 Jun", pct: "0%", status: "zero" },
      { num: "#4094", dept: "Summary Finish", date: "Overdue", pct: "0%", status: "zero" }
    ],
    actionText: "Ask Mechanical Design for deliverable and release evidence. The plan is months overdue while Dataset still says 30 Sep.",
    defaultDecision: "pending",
    defaultNotes: "Mechanical Design lead must confirm if pads were released or if physical prototyping is blocked."
  },
  {
    id: "do-7",
    ini: "INI-108363",
    mo: "MO-003484",
    title: "Battery door / white spacer interference",
    datasetDate: "30 Sep 2026",
    statusBadge: "Plan Overdue (August)",
    borderClass: "border-warning",
    planningRows: [
      { num: "#4130–4131", dept: "Mechanical Design team", date: "14–18 Aug", pct: "0%", status: "zero" },
      { num: "#4128", dept: "Summary Finish", date: "August", pct: "0%", status: "zero" }
    ],
    actionText: "Confirm the physical/design resolution and TR handover. If open, replace the stale plan dates and agree the 30 Sep gate.",
    defaultDecision: "pending",
    defaultNotes: "Confirm whether spacer modification was validated in assembly and technical release signed."
  },
  {
    id: "do-8",
    ini: "INI-110007 / INI-109983",
    mo: "MO-003582 / MO-003551",
    title: "Ukrainian user manual translation & HA16 HYDAC-to-Valvole manifold",
    datasetDate: "30 Sep 2026",
    statusBadge: "No Sciforma Plan Found",
    borderClass: "border-danger",
    planningRows: [
      { num: "NO PLAN #", dept: "Unverified Allocation", owner: "Work Owners Unverified", date: "30 Sep Dataset", pct: "N/A", status: "zero" }
    ],
    actionText: "Ask the respective work owners for the release package, remaining gates and a named Sciforma plan. Keep both as VERIFY, rather than assuming they are small or complete.",
    defaultDecision: "missing-plan",
    defaultNotes: "Check with Technical Documentation owner for manual translation; check Hydraulic lead for HA16 manifold release."
  }
];

const PROTECT_ITEMS = [
  {
    id: "prot-1",
    ini: "INI-110154",
    mo: "MO-003596",
    title: "Steering calibration lost after software upgrade",
    datasetDate: "30 Oct 2026",
    planningSummary: "#4498, System Design team, 30 Sep, 0%; summary #4493: 37%",
    protectGoal: "Secure the final design/release evidence this week. Dataset Last TR is 30 Oct, giving time to resolve the plan’s 30 Sep finish without silently declaring it done.",
    tags: ["System Design", "Oct Delivery", "Software Calibration"]
  },
  {
    id: "prot-2",
    ini: "INI-109754",
    mo: "MO-003465",
    title: "HA20 RTJ R2 defaults F16.02/F07.35",
    datasetDate: "30 Oct 2026",
    planningSummary: "#4119 (System Design / Adonis Zamfir, 24 Sep, 0%); #4121 (Soft Test / Sorin Stoica, 25 Sep, 0%); #4122–4123 (Soft Test team, 5 Oct / 29 Sep, 0%); #4127 (System Design team, 21 Oct, 0%)",
    protectGoal: "Confirm the software/configuration input to test, a named tester, and the RE/release handoff. 30 Oct Dataset Last TR needs the test sequence protected now.",
    tags: ["Adonis Zamfir", "Sorin Stoica", "Test Handoff", "Oct Delivery"]
  },
  {
    id: "prot-3",
    ini: "INI-106342",
    mo: "MO-002519",
    title: "HA16 RTJ rotary actuator securization",
    datasetDate: "30 Oct 2026",
    planningSummary: "#864 (Design / Alexandru Tugui, 31 Mar 2025, 0%); #867 (Test / Zhenzhou Wu, 25 Sep 2026, 0%); summary #863: 12.4%",
    protectGoal: "Establish whether the old design row is stale and obtain the actual test result. The 30 Oct Dataset date cannot be judged from the current plan alone.",
    tags: ["Alexandru Tugui", "Zhenzhou Wu", "Stale Plan Rows"]
  },
  {
    id: "prot-4",
    ini: "INI-109540",
    mo: "MO-003412",
    title: "Bosch-to-Hydraforce valve",
    datasetDate: "30 Oct 2026",
    planningSummary: "#3865–3866 (Mechanical Test team, 21–24 Aug, 0%); #3868 (System Design team, 26 Aug, 0%); summary #3858: 0%",
    protectGoal: "Confirm test and final design status before accepting its 30 Oct Dataset Last TR.",
    tags: ["Mechanical Test", "System Design", "Hydraulic Valve"]
  },
  {
    id: "prot-5",
    ini: "INI-108869",
    mo: "MO-003460",
    title: "No cumulative LCB P0HA20 movements",
    datasetDate: "30 Nov 2026",
    planningSummary: "#4194 (Soft Test / Sorin Stoica, 4 Sep, 33.3%); #4195 (Test handoff, 18 Sep, 0%, unowned); #4197 (System Design team, 29 Sep, 0%)",
    protectGoal: "Get the test acceptance and final design owner this week. Dataset says 30 Nov, but the plan expects a September finish; an earlier release may be possible only after those gates are verified.",
    tags: ["Sorin Stoica", "Gate Verification", "Possible Early Release"]
  }
];

const START_ITEMS = [
  {
    id: "start-1",
    ini: "INI-109049",
    mo: "MO-003584",
    title: "RIMASTER limit switch model change",
    datasetDate: "30 Oct 2026",
    planningSummary: "#4590–4591, System Design team, 30 Sep–2 Oct, 0%",
    nextStep: "Name the designer and confirm the input and release scope at the beginning of W40. Dataset Last TR: 30 Oct.",
    tags: ["System Design", "W40 Kickoff", "Name Designer"]
  },
  {
    id: "start-2",
    ini: "INI-110093",
    mo: "MO-003592",
    title: "Pulsar/Polaris arm routing",
    datasetDate: "30 Oct 2026",
    planningSummary: "#4598–4599, Mechanical Design team, 7–9 Oct, 0%",
    nextStep: "Confirm design input and assign a person before the October slot. Dataset Last TR: 30 Oct.",
    tags: ["Mechanical Design", "Assign Person", "Oct Slot"]
  },
  {
    id: "start-3",
    ini: "INI-110232",
    mo: "MO-003609",
    title: "COMPACT AE steering angle sensor protection",
    datasetDate: "30 Oct 2026",
    planningSummary: "No matching Planning # found in Sciforma extract; department/person unverified",
    nextStep: "Build and assign the plan before treating the 30 Oct Dataset date as executable.",
    tags: ["Ghost Plan", "Build Plan", "Steering Sensor"]
  },
  {
    id: "start-4",
    ini: "INI-108838",
    mo: "MO-003219",
    title: "LDC12-180 instead of T105",
    datasetDate: "30 Nov 2026",
    planningSummary: "#3018 (Alexis Fournel, 19 Jun, 0%); #3019 (David Ferraton, 31 Dec, 0%); #3021 (Endurance, 1 Jan 2027, 0%); #3024 (System Design, 5 Feb 2027, 0%)",
    nextStep: "Resolve test scope and the gap between 30 Nov Dataset Last TR and a plan continuing into February 2027. Do this before accepting a November delivery forecast.",
    tags: ["Date Conflict", "2027 Plan Horizon", "Alexis Fournel", "David Ferraton"]
  }
];

const KANBAN_INITIAL = {
  "do-today": [
    { id: "k-1", mo: "MO-003520", title: "EN 280-1 update HA20RTJ", text: "30 Sep Gate: Sorin Stoica test & design evidence", done: false },
    { id: "k-2", mo: "MO-003532", title: "Alimentation cable", text: "Check Flavius Popescu if TR delivered outside Sciforma", done: false },
    { id: "k-3", mo: "MO-003218", title: "STAR6 battery", text: "Resolve 18 Sep passed date vs 23 Oct finish", done: false },
    { id: "k-4", mo: "MO-003436", title: "COMPACT WIDE AE battery", text: "Challenge 30 Sep TR vs Nov plan with Alin Raduica", done: false },
    { id: "k-5", mo: "MO-003102", title: "Sacred Sun strategy", text: "Address 20 Nov plan vs 30 Sep Dataset clash", done: false },
    { id: "k-6", mo: "MO-003582 / 003551", title: "Manual & HA16 Manifold", text: "Demand Sciforma plans from work owners", done: false }
  ],
  "ask": [
    { id: "k-7", mo: "MO-003465", title: "HA20 RTJ defaults", text: "Obtain test acceptance from Sorin Stoica & Adonis Zamfir", done: false },
    { id: "k-8", mo: "MO-002519", title: "HA16 RTJ actuator", text: "Clarify Tugui stale design row & Zhenzhou Wu test", done: false },
    { id: "k-9", mo: "MO-003412", title: "Hydraforce valve", text: "Confirm Mechanical Test completion status", done: false },
    { id: "k-10", mo: "MO-003460", title: "LCB P0HA20 movements", text: "Get final design owner & test handoff", done: false },
    { id: "k-11", mo: "W40 Leads", title: "Mechanical Test & Endurance", text: "Verify Mircea Butoi (80h/40h) & Darius Serban (41h/40h)", done: false }
  ],
  "start": [
    { id: "k-12", mo: "MO-003584", title: "RIMASTER switch", text: "Name designer & confirm inputs at start of W40", done: false },
    { id: "k-13", mo: "MO-003592", title: "Pulsar arm routing", text: "Assign person before October slot", done: false },
    { id: "k-14", mo: "MO-003609", title: "COMPACT AE sensor", text: "Build Sciforma plan & establish real dates", done: false },
    { id: "k-15", mo: "MO-003219", title: "LDC12-180 sequence", text: "Arbitrate 30 Nov Dataset vs Feb 2027 plan", done: false }
  ],
  "protect": [
    { id: "k-16", mo: "Portfolio TR", title: "September Closeout", text: "Preserve distinction between planned finish and factory TR delivery", done: false },
    { id: "k-17", mo: "Test Gates", title: "October Soft/Mech Gates", text: "Protect test sequences before declaring items done", done: false }
  ],
  "correct": [
    { id: "k-18", mo: "13 Carry-over MOs", title: "Pre-September States", text: "Reconcile active Dataset states against actual TR factory deliveries", done: false },
    { id: "k-19", mo: "MO-003195", title: "STAR10 battery downsizing", text: "Rows #2940-2941 100% in April — check if TR signed and close", done: false },
    { id: "k-20", mo: "Master Dates", title: "Dataset-Planning sync", text: "Repair date clashes across Sept/Oct commitments", done: false },
    { id: "k-21", mo: "Team Placeholders", title: "Resource Allocation", text: "Replace generic team codes with named engineers in Sciforma", done: false }
  ]
};

// LocalStorage Keys
const STORAGE_DECISIONS_KEY = "agy_monday_prep_decisions_v1";
const STORAGE_NOTES_KEY = "agy_monday_prep_notes_v1";
const STORAGE_KANBAN_KEY = "agy_monday_prep_kanban_v1";
const STORAGE_THEME_KEY = "agy_monday_prep_theme_v1";

// =============================================================================
// STATE INITIALIZATION & LOCALSTORAGE MANAGEMENT
// =============================================================================

let userDecisions = {};
let userNotes = {};
let kanbanState = JSON.parse(JSON.stringify(KANBAN_INITIAL));

function loadState() {
  try {
    const savedDecisions = localStorage.getItem(STORAGE_DECISIONS_KEY);
    if (savedDecisions) userDecisions = JSON.parse(savedDecisions);

    const savedNotes = localStorage.getItem(STORAGE_NOTES_KEY);
    if (savedNotes) userNotes = JSON.parse(savedNotes);

    const savedKanban = localStorage.getItem(STORAGE_KANBAN_KEY);
    if (savedKanban) kanbanState = JSON.parse(savedKanban);

    const savedTheme = localStorage.getItem(STORAGE_THEME_KEY);
    if (savedTheme === "light") {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
    }
  } catch (e) {
    console.warn("Could not load stored state:", e);
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_DECISIONS_KEY, JSON.stringify(userDecisions));
    localStorage.setItem(STORAGE_NOTES_KEY, JSON.stringify(userNotes));
    localStorage.setItem(STORAGE_KANBAN_KEY, JSON.stringify(kanbanState));
  } catch (e) {
    console.warn("Could not save state:", e);
  }
}

// =============================================================================
// DOM RENDERING FUNCTIONS
// =============================================================================

function renderDoTodayCards(filter = "all", searchQuery = "") {
  const container = document.getElementById("do-today-cards");
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();
  let matchedCount = 0;
  let closedCount = 0;

  let html = "";
  DO_TODAY_ITEMS.forEach(item => {
    const currentDecision = userDecisions[item.id] || item.defaultDecision;
    const currentNote = userNotes[item.id] || item.defaultNotes;

    // Filter check
    if (filter !== "all" && currentDecision !== filter) return;

    // Search check
    if (query) {
      const matchText = `${item.ini} ${item.mo} ${item.title} ${item.actionText} ${item.planningRows.map(r => `${r.num} ${r.dept} ${r.owner||""}`).join(" ")}`.toLowerCase();
      if (!matchText.includes(query)) return;
    }

    matchedCount++;
    if (currentDecision === "verified") closedCount++;

    const decisionBadgeClass = 
      currentDecision === "verified" ? "green" :
      currentDecision === "escalated" ? "red" :
      currentDecision === "missing-plan" ? "red" : "amber";

    const decisionLabel =
      currentDecision === "verified" ? "✅ Verified Handed Over" :
      currentDecision === "escalated" ? "⚠️ Escalate Date / Reject 30 Sep" :
      currentDecision === "missing-plan" ? "🔍 Missing Plan Required" : "⏳ Pending Gate Review";

    html += `
      <div class="initiative-card ${item.borderClass}" data-item-id="${item.id}">
        <div class="card-top">
          <div class="card-ids">
            <span class="mo-badge">${item.ini} / ${item.mo}</span>
            <div class="card-title">${item.title}</div>
          </div>
          <div class="card-badges">
            <span class="status-badge ${decisionBadgeClass}">${decisionLabel}</span>
            <span class="status-badge red">Dataset: ${item.datasetDate}</span>
          </div>
        </div>

        <div class="card-planning-box">
          <div class="planning-header">
            <span>Exact Planning Evidence (Sciforma Extract)</span>
            <span class="meta-note">${item.statusBadge}</span>
          </div>
          <div class="planning-evidence-list">
            ${item.planningRows.map(row => `
              <div class="evidence-row">
                <span class="task-tag">${row.num}</span>
                <span class="dept-tag">${row.dept}</span>
                ${row.owner ? `<span class="owner-tag">· ${row.owner}</span>` : ""}
                <span class="dept-tag">· ${row.date}</span>
                <span class="pct-pill ${row.status}">${row.pct}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="card-action-box red-tint">
          <div class="action-title red-title">MONDAY ACTION DIRECTIVE</div>
          <div class="action-desc">${item.actionText}</div>
        </div>

        <div class="card-footer-controls">
          <div class="decision-selector-wrap">
            <label for="dec-${item.id}">Decision:</label>
            <select id="dec-${item.id}" class="select-input" onchange="updateDecision('${item.id}', this.value)">
              <option value="pending" ${currentDecision === 'pending' ? 'selected' : ''}>⏳ Pending Gate Review</option>
              <option value="verified" ${currentDecision === 'verified' ? 'selected' : ''}>✅ Deliverable Verified / Handed Over</option>
              <option value="escalated" ${currentDecision === 'escalated' ? 'selected' : ''}>⚠️ Escalate Date / Reject 30 Sep</option>
              <option value="missing-plan" ${currentDecision === 'missing-plan' ? 'selected' : ''}>🔍 Missing Plan Required</option>
            </select>
          </div>
          <div class="item-notes-preview" title="${currentNote}">
            Notes: ${currentNote || "No notes entered yet."}
          </div>
          <div class="card-btn-group">
            <button class="btn btn-sm btn-secondary" onclick="openDetailModal('${item.id}', 'do-today')">Edit Notes</button>
            <button class="btn btn-sm btn-outline" onclick="copyItemSnippet('${item.id}', 'do-today')">Copy</button>
          </div>
        </div>
      </div>
    `;
  });

  if (matchedCount === 0) {
    html = `<div style="text-align: center; padding: 40px; color: var(--text-dim);">No initiatives matched the selected filter or search term.</div>`;
  }

  container.innerHTML = html;

  // Update progress bar
  const total = DO_TODAY_ITEMS.length;
  const pct = Math.round((closedCount / total) * 100);
  const fill = document.getElementById("do-today-progress-fill");
  const text = document.getElementById("do-today-progress-text");
  const percentText = document.getElementById("do-today-progress-percent");

  if (fill) fill.style.width = `${pct}%`;
  if (text) text.innerText = `${closedCount} of ${total} Gates Resolved / Verified`;
  if (percentText) percentText.innerText = `${pct}%`;
}

function renderProtectCards(searchQuery = "") {
  const container = document.getElementById("protect-cards");
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();
  let html = "";

  PROTECT_ITEMS.forEach(item => {
    if (query) {
      const matchText = `${item.ini} ${item.mo} ${item.title} ${item.planningSummary} ${item.protectGoal} ${item.tags.join(" ")}`.toLowerCase();
      if (!matchText.includes(query)) return;
    }

    html += `
      <div class="initiative-card border-warning">
        <div class="card-top">
          <div class="card-ids">
            <span class="mo-badge">${item.ini} / ${item.mo}</span>
            <div class="card-title">${item.title}</div>
          </div>
          <div class="card-badges">
            <span class="status-badge amber">Dataset Last TR: ${item.datasetDate}</span>
          </div>
        </div>

        <div class="card-planning-box">
          <div class="planning-header">Planning Evidence</div>
          <div class="evidence-row">${item.planningSummary}</div>
        </div>

        <div class="card-action-box amber-tint">
          <div class="action-title amber-title">WHAT TO PROTECT THIS WEEK</div>
          <div class="action-desc">${item.protectGoal}</div>
        </div>

        <div class="card-footer-controls">
          <div class="card-badges">
            ${item.tags.map(t => `<span class="k-card-tag">${t}</span>`).join(" ")}
          </div>
          <div class="card-btn-group">
            <button class="btn btn-sm btn-outline" onclick="copyProtectSnippet('${item.id}')">Copy Directive</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderStartCards(searchQuery = "") {
  const container = document.getElementById("start-cards");
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();
  let html = "";

  START_ITEMS.forEach(item => {
    if (query) {
      const matchText = `${item.ini} ${item.mo} ${item.title} ${item.planningSummary} ${item.nextStep} ${item.tags.join(" ")}`.toLowerCase();
      if (!matchText.includes(query)) return;
    }

    html += `
      <div class="initiative-card border-purple">
        <div class="card-top">
          <div class="card-ids">
            <span class="mo-badge">${item.ini} / ${item.mo}</span>
            <div class="card-title">${item.title}</div>
          </div>
          <div class="card-badges">
            <span class="status-badge purple">Dataset Last TR: ${item.datasetDate}</span>
          </div>
        </div>

        <div class="card-planning-box">
          <div class="planning-header">Planning & Allocation Status</div>
          <div class="evidence-row">${item.planningSummary}</div>
        </div>

        <div class="card-action-box">
          <div class="action-title">NEXT STEP (W40 READINESS)</div>
          <div class="action-desc">${item.nextStep}</div>
        </div>

        <div class="card-footer-controls">
          <div class="card-badges">
            ${item.tags.map(t => `<span class="k-card-tag">${t}</span>`).join(" ")}
          </div>
          <div class="card-btn-group">
            <button class="btn btn-sm btn-outline" onclick="copyStartSnippet('${item.id}')">Copy Next Step</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderKanbanBoard() {
  const columns = ["do-today", "ask", "start", "protect", "correct"];
  columns.forEach(colKey => {
    const container = document.getElementById(`kanban-${colKey}`);
    const countBadge = document.getElementById(`count-kanban-${colKey}`);
    if (!container) return;

    const items = kanbanState[colKey] || [];
    let completedCount = 0;

    let html = "";
    items.forEach(card => {
      if (card.done) completedCount++;
      html += `
        <div class="kanban-card ${card.done ? 'completed' : ''}" onclick="toggleKanbanDone('${colKey}', '${card.id}')">
          <div class="k-card-top">
            <input type="checkbox" class="k-card-check" ${card.done ? 'checked' : ''} onclick="event.stopPropagation(); toggleKanbanDone('${colKey}', '${card.id}')">
            <span class="k-card-title">${card.mo} · ${card.title}</span>
          </div>
          <div class="k-card-body">${card.text}</div>
          <div class="k-card-footer">
            <span class="k-card-tag">${colKey.toUpperCase()}</span>
            <span>${card.done ? 'COMPLETED' : 'OPEN'}</span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
    if (countBadge) {
      countBadge.innerText = `${completedCount}/${items.length}`;
    }
  });
}

// =============================================================================
// INTERACTIVE ACTIONS & HANDLERS
// =============================================================================

function updateDecision(itemId, newStatus) {
  userDecisions[itemId] = newStatus;
  saveState();
  renderDoTodayCards(document.getElementById("filter-do-today-status").value, document.getElementById("global-search").value);
  showToast(`Gate decision updated: ${newStatus}`);
}

function toggleKanbanDone(colKey, cardId) {
  const item = (kanbanState[colKey] || []).find(c => c.id === cardId);
  if (item) {
    item.done = !item.done;
    saveState();
    renderKanbanBoard();
  }
}

function markAllCompleted(type) {
  if (type === "do-today") {
    DO_TODAY_ITEMS.forEach(item => {
      userDecisions[item.id] = "verified";
    });
    saveState();
    renderDoTodayCards(document.getElementById("filter-do-today-status").value);
    showToast("All 8 Gate decisions marked as Verified!");
  }
}

function resetAllStates(type) {
  if (type === "do-today") {
    DO_TODAY_ITEMS.forEach(item => {
      delete userDecisions[item.id];
    });
    saveState();
    renderDoTodayCards(document.getElementById("filter-do-today-status").value);
    showToast("Gate decisions reset to initial state.");
  }
}

function filterByKpi(target) {
  if (target === "all") {
    switchTab("tab-do-today");
    document.getElementById("global-search").value = "";
    document.getElementById("filter-do-today-status").value = "all";
    renderDoTodayCards("all", "");
  } else if (target === "do-today") {
    switchTab("tab-do-today");
  } else if (target === "protect") {
    switchTab("tab-protect");
  } else if (target === "start-next") {
    switchTab("tab-start");
  } else if (target === "capacity") {
    switchTab("tab-capacity");
  }
}

function switchTab(tabId) {
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.toggle("active", pane.id === tabId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// =============================================================================
// MODAL DIALOGS
// =============================================================================

let activeEditingId = null;

function openDetailModal(itemId, section) {
  activeEditingId = itemId;
  const modal = document.getElementById("detail-modal");
  const item = DO_TODAY_ITEMS.find(x => x.id === itemId);
  if (!item) return;

  document.getElementById("modal-category-badge").innerText = "DO TODAY — 30 SEP GATE";
  document.getElementById("modal-mo-title").innerText = `${item.ini} / ${item.mo}`;
  document.getElementById("modal-mo-subtitle").innerText = `${item.title} (Dataset Last TR: ${item.datasetDate})`;

  const evidenceHtml = item.planningRows.map(r => `<div><strong>${r.num}</strong> · ${r.dept} ${r.owner ? `(${r.owner})` : ""} · Finish: ${r.date} · Progress: <strong>${r.pct}</strong></div>`).join("");
  document.getElementById("modal-planning-evidence").innerHTML = evidenceHtml;

  document.getElementById("modal-action-text").innerText = item.actionText;

  const currentDecision = userDecisions[itemId] || item.defaultDecision;
  const currentNotes = userNotes[itemId] || item.defaultNotes;

  document.getElementById("modal-status-select").value = currentDecision;
  document.getElementById("modal-notes-input").value = currentNotes;

  modal.classList.add("open");
}

function closeDetailModal() {
  const modal = document.getElementById("detail-modal");
  modal.classList.remove("open");
  activeEditingId = null;
}

function saveModalData() {
  if (!activeEditingId) return;
  const status = document.getElementById("modal-status-select").value;
  const notes = document.getElementById("modal-notes-input").value;

  userDecisions[activeEditingId] = status;
  userNotes[activeEditingId] = notes;
  saveState();

  renderDoTodayCards(document.getElementById("filter-do-today-status").value, document.getElementById("global-search").value);
  closeDetailModal();
  showToast("Decision and notes saved!");
}

// Standup Brief Generator
function openStandupScriptModal() {
  const modal = document.getElementById("script-modal");
  const content = document.getElementById("script-text-content");

  const todayStr = "Monday 28 September 2026";
  let script = `# MONDAY MORNING STANDUP & GATE REVIEW BRIEFING\n`;
  script += `Lead: Alexandru TIRON | Location: Bucharest (EEST) | Date: ${todayStr}\n`;
  script += `Baseline Data: /JARVIS/ 27-Sep-2026 (Dataset_New master, Sciforma & ARAS timesheets)\n\n`;

  script += `## 1. FIRST DECISION: SEPTEMBER CLOSEOUT (47 MOs active in engineering work)\n`;
  script += `- Master Dataset shows 47 MOs: 13 pre-Sept, 9 Sept Last TR, 7 Oct, 3 Nov, 15 Dec+.\n`;
  script += `- First pass priority: Establish which Technical Releases were actually handed over vs unfinished in Sciforma.\n\n`;

  script += `## 2. DO TODAY GATE DECISIONS (30 September Commitments):\n`;
  DO_TODAY_ITEMS.forEach((item, idx) => {
    const decision = userDecisions[item.id] || item.defaultDecision;
    const note = userNotes[item.id] || item.defaultNotes;
    script += `${idx + 1}. [${item.mo}] ${item.title}\n`;
    script += `   - Target: ${item.datasetDate} | Decision: ${decision.toUpperCase()}\n`;
    script += `   - Action: ${item.actionText}\n`;
    if (note) script += `   - Meeting Note: ${note}\n`;
  });

  script += `\n## 3. CRITICAL TEST CHAINS TO PROTECT THIS WEEK (October Deliveries):\n`;
  PROTECT_ITEMS.forEach((p, idx) => {
    script += `${idx + 1}. [${p.mo}] ${p.title} -> ${p.protectGoal}\n`;
  });

  script += `\n## 4. W40 CAPACITY ARBITRATIONS:\n`;
  script += `- Endurance: OVER-CAPACITY (208 / 200 h · 104%). Driver 1 (51h/40h), Darius Serban (41h/40h). Protect COMPACT battery test slot!\n`;
  script += `- Mechanical Test: TIGHT (193.4 / 200 h · 96.7%). Mircea Butoi booked 80.2h / 40h — audit bookings before accepting as real.\n`;
  script += `- System & Mechanical Design: Room at team level, but Soft Team Assignments must be replaced with named engineers.\n`;

  script += `\n## 5. DELIVERY HORIZON SUMMARY:\n`;
  script += `- N (Sept): 9 MOs — Low confidence as a group (7 incomplete plans, 2 missing Sciforma IDs).\n`;
  script += `- N+1 (Oct): 7 MOs — Mixed, material test and plan gaps.\n`;
  script += `- N+2 (Nov): 3 MOs — Low confidence (plans extend into 2027).\n`;
  script += `- Reconcile 13 pre-September MOs with factory release notes.\n`;

  content.innerText = script;
  modal.classList.add("open");
}

function copyStandupScriptText() {
  const text = document.getElementById("script-text-content").innerText;
  navigator.clipboard.writeText(text).then(() => {
    showToast("Standup briefing script copied to clipboard!");
  }).catch(() => {
    showToast("Failed to copy. Please manually select and copy.");
  });
}

function copyActionBoardText() {
  let md = "# Monday Action Board Summary — 28 September 2026\n\n";
  const columns = ["do-today", "ask", "start", "protect", "correct"];
  const titles = {
    "do-today": "DO TODAY (Monday 28 Sep)",
    "ask": "ASK THIS WEEK",
    "start": "START NEXT",
    "protect": "PROTECT",
    "correct": "DATA TO CORRECT"
  };

  columns.forEach(col => {
    md += `### ${titles[col]}\n`;
    (kanbanState[col] || []).forEach(item => {
      md += `- [${item.done ? 'X' : ' '}] **${item.mo}**: ${item.title} — ${item.text}\n`;
    });
    md += "\n";
  });

  navigator.clipboard.writeText(md).then(() => {
    showToast("Action Board copied to clipboard!");
  });
}

function copyItemSnippet(itemId, section) {
  const item = DO_TODAY_ITEMS.find(x => x.id === itemId);
  if (!item) return;

  const text = `[${item.ini} / ${item.mo} · ${item.title}]\nEvidence: ${item.planningRows.map(r => `${r.num} (${r.dept}: ${r.pct})`).join("; ")}\nAction: ${item.actionText}`;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${item.mo} action snippet!`);
  });
}

function copyProtectSnippet(itemId) {
  const item = PROTECT_ITEMS.find(x => x.id === itemId);
  if (!item) return;

  const text = `[PROTECT: ${item.ini} / ${item.mo} · ${item.title}]\nEvidence: ${item.planningSummary}\nDirective: ${item.protectGoal}`;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${item.mo} protect directive!`);
  });
}

function copyStartSnippet(itemId) {
  const item = START_ITEMS.find(x => x.id === itemId);
  if (!item) return;

  const text = `[START NEXT: ${item.ini} / ${item.mo} · ${item.title}]\nEvidence: ${item.planningSummary}\nNext Step: ${item.nextStep}`;
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${item.mo} next step!`);
  });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2400);
}

// =============================================================================
// EVENT LISTENERS & INITIALIZATION
// =============================================================================

document.addEventListener("DOMContentLoaded", () => {
  loadState();

  // Tab switching
  document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      switchTab(tab.dataset.tab);
    });
  });

  // Global search input
  const searchInput = document.getElementById("global-search");
  const clearBtn = document.getElementById("clear-search");
  searchInput.addEventListener("input", (e) => {
    const q = e.target.value;
    clearBtn.style.display = q ? "block" : "none";
    renderDoTodayCards(document.getElementById("filter-do-today-status").value, q);
    renderProtectCards(q);
    renderStartCards(q);
  });

  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    renderDoTodayCards(document.getElementById("filter-do-today-status").value, "");
    renderProtectCards("");
    renderStartCards("");
  });

  // Filter dropdown
  const filterSelect = document.getElementById("filter-do-today-status");
  if (filterSelect) {
    filterSelect.addEventListener("change", (e) => {
      renderDoTodayCards(e.target.value, searchInput.value);
    });
  }

  // Header Buttons
  document.getElementById("btn-export-script").addEventListener("click", openStandupScriptModal);
  document.getElementById("btn-copy-script-text").addEventListener("click", copyStandupScriptText);
  document.getElementById("script-modal-close-btn").addEventListener("click", () => {
    document.getElementById("script-modal").classList.remove("open");
  });

  document.getElementById("btn-print").addEventListener("click", () => {
    window.print();
  });

  // Theme toggle
  document.getElementById("theme-toggle").addEventListener("click", () => {
    const isLight = document.body.classList.toggle("theme-light");
    if (isLight) {
      document.body.classList.remove("theme-dark");
      localStorage.setItem(STORAGE_THEME_KEY, "light");
    } else {
      document.body.classList.add("theme-dark");
      localStorage.setItem(STORAGE_THEME_KEY, "dark");
    }
  });

  // Modal event listeners
  document.getElementById("modal-close-btn").addEventListener("click", closeDetailModal);
  document.getElementById("modal-save-btn").addEventListener("click", saveModalData);
  document.getElementById("modal-copy-btn").addEventListener("click", () => {
    if (activeEditingId) copyItemSnippet(activeEditingId, "do-today");
  });

  // Initial renders
  renderDoTodayCards();
  renderProtectCards();
  renderStartCards();
  renderKanbanBoard();
});
