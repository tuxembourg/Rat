# PLACEHOLDER REFERENCE GUIDE

Every placeholder in the project, what it's for, and exactly where to find it.

---

## index.html

| Line | Placeholder | Purpose |
|------|-------------|---------|
| 5    | `TITLE PLACEHOLDER 321` | Browser tab title (`<title>` tag) |
| 29–30 | Warning modal body paragraphs (×2) | Text shown inside the ⚠ WARNING popup |
| 55   | `<!-- PLACEHOLDER: YouTube channel name -->CHANNEL NAME` | YouTube channel display name in topbar badge |
| 56   | `<!-- PLACEHOLDER: Subscriber count display -->1.2K subscribers` | Subscriber count shown under channel name |
| 60   | `href="#"` (YouTube channel URL) | URL the Subscribe button links to |
| 63   | Subscribe button label `▶ Subscribe` | Text on the subscribe button |
| 76   | `TOOLS` (sidebar logo text) | Brand/logo text at top of sidebar |
| 83   | `Placeholder 1` | Sidebar button 1 label |
| 89   | `Placeholder 2` | Sidebar button 2 label |
| 95   | `Placeholder 3` | Sidebar button 3 label |
| 101  | `Placeholder 4` | Sidebar button 4 label |
| 107  | `Placeholder 5` | Sidebar button 5 label |
| 113  | `Placeholder 6` | Sidebar button 6 label |
| 119  | `Placeholder 7` | Sidebar button 7 label |
| 125  | `Placeholder 8` | Sidebar button 8 label |
| 131  | `Placeholder 9` | Sidebar button 9 label |
| 137  | `Placeholder 10` | Sidebar button 10 label |
| 142  | `v1.0.0 — PLACEHOLDER FOOTER` | Sidebar footer text (version / copyright) |

---

## app.js

| Line | Placeholder | Purpose |
|------|-------------|---------|
| 43   | `const channelName = 'CHANNEL'` | Channel name used in homepage heading: `CHANNEL PROJECTS` |
| 46–105 | Project card objects (10 total) | Each card has `title`, `desc`, `modalTitle`, `modalBody` — all 10 are placeholders |
| 46   | Project card 1 — `PLACEHOLDER PROJECT 1` | Title, short desc, and modal detail text for project card 1 |
| 55   | Project card 2 — `PLACEHOLDER PROJECT 2` | Title, short desc, modal text for card 2 |
| 64   | Project card 3 — `PLACEHOLDER PROJECT 3` | Card 3 |
| 71   | Project card 4 — `PLACEHOLDER PROJECT 4` | Card 4 |
| 78   | Project card 5 — `PLACEHOLDER PROJECT 5` | Card 5 |
| 85   | Project card 6 — `PLACEHOLDER PROJECT 6` | Card 6 |
| 92   | Project card 7 — `PLACEHOLDER PROJECT 7` | Card 7 |
| 99   | Project card 8 — `PLACEHOLDER PROJECT 8` | Card 8 |
| 106  | Project card 9 — `PLACEHOLDER PROJECT 9` | Card 9 |
| 113  | Project card 10 — `PLACEHOLDER PROJECT 10` | Card 10 |
| 123  | `PLACEHOLDER — Tagline or subtitle` | Subtitle line under the homepage heading |
| 133  | Tool 1 page title (`PLACEHOLDER — BUILDER`) | H1 heading on Sidebar button 1 page |
| 135  | Tool 1 page description | Paragraph under the Tool 1 heading |
| 139  | `// PUT YOUR TOKEN HERE` label | Label above the token input field |
| 142  | `placeholder="PLACEHOLDER — paste token here..."` | Input placeholder text |
| 160  | Build step log messages (×6) | Simulated terminal log lines during build |
| 161–166 | Each `msg:` inside `steps` array | Individual log line text during build animation |
| 177  | `a.download = 'output.exe'` | Filename for downloaded executable |
| 180  | `window.location.href` comment | REPLACE with real backend download URL |
| 191  | Tool 2 page title (`PLACEHOLDER-CYPH`) | H1 heading on Sidebar button 2 page |
| 193  | Tool 2 page description | Paragraph under Tool 2 heading |
| 198  | `cyph-title` inner text | Bold title inside the CYPH download card |
| 200  | `cyph-sub` inner text | Description text in the CYPH card |
| 209  | `a.href = 'placeholder-cyph.zip'` | **Path to your actual .zip file** — change this |
| 210  | `a.download = 'PLACEHOLDER-CYPH.zip'` | Filename shown when user downloads the zip |
| 219  | Coming soon `<p>` body | "Stay tuned…" message (already set, optionally tweak) |
| 221  | Coming soon extra detail line | Optional teaser or ETA text under coming soon message |

---

## How to configure the build backend

In `app.js`, the `runBuild()` function currently **simulates** a build with timed log messages.
To wire it to a real PyInstaller backend:

1. Set up a server (Flask, FastAPI, etc.) that:
   - Accepts a POST with `{ "token": "<value>" }`
   - Injects `{build_1field}` into your script template
   - Runs `pyinstaller yourscript.py --onefile`
   - Returns the `.exe` file as a download or a URL

2. In `app.js`, replace the `steps` simulation block (~lines 158–168) with:
   ```js
   const res = await fetch('/api/build', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ build_1field })
   });
   const blob = await res.blob();
   // then trigger download from blob
   ```

3. Replace the `downloadExe()` function body with the actual URL or blob.

---

## ZIP file for PLACEHOLDER-CYPH

Place your `.zip` file in the site root and update line 209 of `app.js`:
```js
a.href = 'your-actual-file.zip';
```
