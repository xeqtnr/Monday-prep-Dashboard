# Monday Weekly Prep — Engineering Cockpit (28 September 2026)

Executive TPM Dashboard designed for **Alexandru TIRON** to capture and manage Monday morning's engineering decisions, TR verifications, W40 capacity arbitrations, and monthly delivery closeout.

---

## 🌟 Executive Overview & Key Priorities

Prepared Sunday evening, **27 September 2026**, for **Monday 28 September (Bucharest Time)** based on `/JARVIS/` uploads (`Dataset_New.csv`, `Sciforma Planning Extract`, `Sciforma Timesheet`, `ARAS Timesheet`, and weekly workload captures).

### Core Highlights:
1. **First Decision — September Closeout**:
   - `Dataset_New` has **47 MOs** assigned to Alexandru in *"In engineering Work"*:
     - **13** carry dates before September (carry-over reconciliation queue).
     - **9** have September Last TR dates (urgent Monday gate reviews).
     - **7** October Last TR.
     - **3** November Last TR.
     - **15** December 2026 or later.
   - Note: Source dates are not confirmed unfinished releases. Completed Sciforma plans exist for some (e.g. STAR10 MO-003195 @ 100% in April), while others lack matching plans. The primary goal is establishing which technical releases were physically handed over.
2. **DO TODAY (Monday 28 Sep)**:
   - 8 critical gate reviews to arbitrate 30 Sep commitments (e.g. MO-003520, MO-003532, MO-003218, MO-003436, MO-003102, MO-003473, MO-003484, and the 2 unplanned MOs: MO-003582 & MO-003551).
3. **PROTECT THIS WEEK**:
   - 5 critical initiatives (MO-003596, MO-003465, MO-002519, MO-003412, MO-003460) to protect October test gates and release evidence.
4. **START NEXT (W40 Readiness)**:
   - Reserve real owners and validate design inputs before launching work for MO-003584, MO-003592, MO-003609, and MO-003219.
5. **Capacity to Arbitrate (W40 Argeș Teams)**:
   - **Endurance**: Overallocated at **208 / 200 h (104%)** — Driver 1 (51h/40h) & Darius Serban (41h/40h). Protect COMPACT battery test slot!
   - **Mechanical Test**: Bottlenecked at **193.4 / 200 h (96.7%)** — Mircea Butoi shows 80.2h / 40h (requires booking audit).
   - **System & Mechanical Design**: Apparent team room, but soft placeholders need named engineer assignment.
   - **Timesheet Filter Audit**: 45,454 rows examined; 8,540 Argeș rows retained (5,904 Arges R&D + 2,636 T&V Arges).
6. **System Disagreements Matrix**:
   - Cross-system audit between Dataset Last TR vs Sciforma Finish dates, 100% completed plans vs In Engineering Work status, ghost plans, and demand vs allocation.

---

## 🚀 How to Run & Use

### Method 1: Instant Browser Launch (Double Click)
Double-click `open.bat` in this folder, or simply double click `index.html` to open directly in any modern browser (Chrome, Edge, Firefox).

### Method 2: Local HTTP Server (Port 3300)
Run in PowerShell:
```powershell
& 'C:\Users\Exqiu\AppData\Roaming\Antigravity\bin\agy-node.cmd' server.js
```
Then navigate to: `http://localhost:3300`

---

## 🛠️ Features Built-In
- **Real-time Gate Decision Tracker**: Select status (`Pending Gate Review`, `Deliverable Verified / Handed Over`, `Escalate Date / Replan`, `Missing Plan Required`) with live progress meter.
- **Persistent Notes**: Add meeting notes for each MO that persist across browser reloads via `localStorage`.
- **Interactive Kanban Runbook**: Check off Monday items across DO TODAY, ASK THIS WEEK, START NEXT, PROTECT, and DATA TO CORRECT columns.
- **Standup Briefing Generator**: Generate and copy ready-to-paste executive Markdown scripts for Teams, email, or meeting agendas.
- **Global Instant Search**: Search across INI, MO numbers, engineer names (Sorin Stoica, Flavius Popescu, Mircea Butoi, Darius Serban, etc.), and planning IDs.
- **Visual Capacity Gauges**: Color-coded load meters for all 5 Argeș R&D teams with over-allocation warning badges.
- **Print / PDF Friendly**: Built-in `@media print` stylesheets for one-click clean PDF reports.
- **Dark & Light Mode**: Tailored executive themes with instant toggle.
