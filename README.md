# MIND(s)

Public working proposal for a future Lawrence University First-Year Studies theme. The first edition includes a ten-week model syllabus and an expanding annotated source collection. It is an independent faculty proposal, not an adopted curriculum.

Live address after successful deployment: https://omatty123.github.io/minds/

## Work on the site

- `build.py` generates five HTML pages from the authored page content and `bank.json`.
- `syllabus-content.html` contains the syllabus prose; `slate.json` defines the six sustained works. `build.py` renders the slate, language comparison and proposed pacing.
- `mind-words.json` contains the pronunciation collection and audio attribution. `mind_words_page.py` renders it; `dist/mind-words.js` and `.css` provide the player and layout. Audio files are credited individually; human voices only.
- `bank.json` is the source of truth for the learning bank. Every record has a stable ID, source URL, evidence category, review depth, check date, teaching use and limit.
- `dist/style.css` and `dist/app.js` are authored source files, not disposable build output.
- `dist/fonts/` contains self-hosted Public Sans files with their SIL Open Font Licenses. Fonts came from Google Fonts; no remote font requests are needed.
- `PRODUCT.md` records scope and user choices. `DESIGN.md` describes the inspected design.

Build and check with Python 3 and Node 22 or later:

```sh
python3 build.py
node --check dist/app.js
node tests/check.mjs
node tests/mind-words.mjs
```

Preview only the public directory:

```sh
python3 -m http.server 8778 --bind 127.0.0.1 --directory dist
```

The Actions workflow checks generated files and source integrity, then deploys `dist/` to GitHub Pages on pushes to main. Pull requests run checks without deployment.

## Editorial maintenance

The first research pass is dated October 10, 2026. It is a selected collection, not an exhaustive inventory. No recurring update job is configured. Do not describe it as automatically current.

Keep original publication date separate from verification date and preprint revision date. State whether a note rests on an abstract, a full text or a catalog entry. A journal publication is not automatically an empirical result. Include counterarguments. Never imply that neural complexity, adaptive behavior or AI self-report alone proves consciousness.

The six sustained works in `slate.json` are a multicultural discussion draft. Confirm exact scientific excerpts, editions, recording access, workload and current institutional policies before adoption. The 2024 four-year announcement and current works-page label 2024–27 need reconciliation; the transition and selection process remain unconfirmed.

No confidential strategy, student information, personal correspondence or inferred faculty endorsements belong in this repository. Public contributions use GitHub issues.

## Verification of the first edition

Local automated checks cover stable source IDs, six sustained works and matching bank labels, eight requested disciplinary areas, all required bank fields, internal pages and fragments, and matching source/published JSON. Browser checks cover 1440px and 390px layouts, source filters, empty/reset states, query persistence, fragment opening, print generation, no-JavaScript source access and browser errors. Screenshots and QA output stay local in the ignored `.impeccable/` directory.

October 10, 2026 addition: Cade Metz’s AI-agent correspondence article and Hyecho’s pilgrimage account, with translation credit and proposed teaching context. The attached newspaper text is not republished.

October 10, 2026 syllabus revision: checked the live WATER syllabus and its full six-selection slate. Replaced the initial research-survey syllabus with a multicultural great-works model, nine language entries, ancient sources, recurring arts/practice encounters, and the WATER section’s proposed writing structure. Prior syllabus remains in Git at 0dddcf3. Source review depth remains visible; selected editions and workload are not yet fully reviewed.

October 10, 2026 pronunciation companion: added `mind-words.html` with 50 human recordings, a desktop word circle, a mobile word list, search, individual playback and a pausable sequence. Romanian and Hausa use explicitly labeled phrases containing the selected word; French and Swedish include an article. Meanings, recording credits and licenses are linked. See `research/mind-words-status.md` for scope and limitations. All 50 audio files decoded successfully and played through the browser queue. Desktop/mobile rendering, actual sans-serif fonts, stable controls, search, keyboard selection and audio-error recovery were checked locally.
