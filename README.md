# MIND(s)

Public working proposal for a future Lawrence University First-Year Studies theme. The first edition includes a ten-week model syllabus and an expanding annotated source collection. It is an independent faculty proposal, not an adopted curriculum.

Live address after successful deployment: https://omatty123.github.io/minds/

## Work on the site

- `build.py` generates seven HTML pages from the authored page content and `bank.json`.
- `syllabus-content.html` contains the syllabus prose; `slate.json` defines the six sustained works. `build.py` renders the slate, language comparison and proposed pacing.
- `mind-words.json` contains the pronunciation collection and audio attribution. `mind_words_page.py` renders it; `dist/mind-words.js` and `.css` provide the player and layout. Audio files are credited individually; human voices only.
- `semantic-clusters.json` defines eight selected, overlapping meaning clusters. `mind_atlas.py` adds these, signed-language resources and three visual studies to the pronunciation page; `dist/mind-atlas.css` and `.js` provide their responsive layout and interactions. Dictionary links and audio references come from `mind-words.json`.
- `history.json` contains 44 global-history accounts, separate from the learning bank. `history_page.py` renders `dist/history.html`; `dist/history.css` and `dist/history.js` provide its layout and filters. The build publishes an unchanged copy of the index as `dist/history.json`.
- `possibilities.json` contains 28 proposed campus candidates, separate from the 53-record learning bank and 44-account global history. `possibilities_page.py` renders `dist/possibilities.html`; `dist/possibilities.css` and `dist/possibilities.js` provide layout, filters and shortlist controls. The build publishes an unchanged copy as `dist/possibilities.json`.
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

October 10, 2026 scoped pronunciation additions: eight clusters compare Heart & feeling, Thought, Reason & understanding, Spirit & psyche, Brain, Attention & care, Intention & will, and Memory. Examples link their dictionaries and existing human recordings. Words can appear in several clusters; the comparison is neither exhaustive nor a classification of language ancestry. All semantic panels remain readable without JavaScript and appear in print. Linguist/native-speaker review across all examples remains a gap.

ASL University THINK, HandSpeak MIND/MEMORY and SignBSL MIND provide distinct signed-language resources, separate from the 50 spoken recordings. ASL loads its provider iframe on request; BSL uses a remotely hosted video. Three visual studies place modern sans-serif 心 beside an Egyptian heart amulet and Rodin's *The Thinker*. The two locally stored museum images are unmodified public-domain images credited to The Metropolitan Museum of Art; signed-language media remains with its providers. See `research/mind-atlas-sources.md` for source URLs, object IDs, credits and interpretation limits. The built learning bank now contains 53 records.

Local browser review checked cluster selection, Korean audio, BSL playback, image loading, actual sans-serif fonts, and desktop/mobile layouts at 1440px and 390px without horizontal overflow. ASL iframe insertion was checked; YouTube playback was not verified. These checks describe the local build and do not establish a live deployment.

October 10, 2026 body-location explorer: `mind-words.html#body` adds eight selected accounts in three evidence layers: Research, Language & gestures, and Historical beliefs. `body-locations.json` supplies the accounts; `body_map.py` renders them; `dist/body-map.css` and `dist/body-map.js` supply layout and selection. See `research/body-locations.md` for research scope. Head and chest markers are schematic, with no anatomical or frequency scale. Korean 마음’s heart gesture is attributed to Matty Wegehaupt’s observation; its dictionary source supports meanings, not gesture prevalence.

Local QA covered all eight selections and three layers at 1440px and 390px, marker/panel/pressed-state agreement, no horizontal overflow, rendered sans-serif fonts and all eight panels without JavaScript. The independent finish reviewer reported SHIP for the scoped screenshots and code. This addition is local only at `/Users/wegehaum/Documents/ChatGPT/META/minds/dist/mind-words.html#body`; live deployment has not yet been verified.

## Global history — 10 October 2026

The global history contains 44 selected accounts, nine recurring comparison themes and six broad period groups. Search, region, tradition or approach, discipline, theme and period filters combine; their state is shareable through URL query parameters. Account headings and “Link to this account” use stable fragments. With JavaScript, a direct account link opens its source details and clears conflicting filters. Without JavaScript, all accounts and native expandable source details remain available; filtering controls are unavailable.

Each account identifies a work or encounter, interpretation, limits, source links and review depth. The overview and themes are editorial comparisons, not a universal classification or a progression toward modern science. Review depth varies from selected passages and specialist overviews to abstracts, museum records and explicitly reused learning-bank notes. See `research/global-history-method.md` for retrieval limits and priority gaps, including further African, Indigenous American and Pacific traditions, Australian Aboriginal traditions, Southeast and Central Asia, Tibetan traditions, additional religious schools, women’s intellectual histories, disability and neurodiversity.

Local QA covered 1440px and 390px layouts, filters, empty/reset states, URL persistence, direct account links, no horizontal overflow, rendered sans-serif fonts and source access without JavaScript. The scoped independent finish reviewer reported SHIP. This addition is local only at `/Users/wegehaum/Documents/ChatGPT/META/minds/dist/history.html`; live deployment has not yet been verified.


## Campus possibilities — 10 October 2026

The seventh page offers 28 source-linked works, objects and proposed activities. Four curated routes select four candidates each. Search, campus connection, activity and duration filters combine; filters and shortlist IDs persist in the URL. Route and campus-connection links preserve selections. Direct candidate anchors expose teaching notes and clear conflicting filters. Print-shortlist includes selected records and their notes; all candidates and source disclosures remain readable without JavaScript.

The collection supports faculty recruitment and planning. Activities and times are editorial estimates, not tested lessons or departmental endorsements. Source review depth, campus-catalog coverage and access limitations are recorded in `research/campus-possibilities.md`. It does not change the six-work model syllabus, 53-record learning bank or 44-account history.

Local QA covered 1440px and 390px layouts, filters, shortlist selection, URL restoration, print, direct anchors, source access without JavaScript, no horizontal overflow and rendered Public Sans. The expanded shared navigation wraps at 850px and 600px. The finish reviewer found a selection-loss issue in route links; that issue was fixed and the scoped review reported SHIP. This addition is local only at `/Users/wegehaum/Documents/ChatGPT/META/minds/dist/possibilities.html`; live deployment has not yet been verified.

## Gallery handout — 13 October 2026

`dist/downloads/mind-gallery-handout.pdf` is a one-page, source-linked selection of six proposed works and objects, with a QR code to the site homepage. It supplements the discussion draft; it does not replace the six-work syllabus. `mind-qr.png` and `mind-qr.svg` provide reusable QR assets with a four-module quiet zone. `tools/build_gallery_handout.py` rebuilds these files using reportlab, qrcode and Pillow; it is a manual artifact build, separate from the dependency-free HTML build. Fonts are the existing Public Sans assets. All handout text is at least 11 pt. The generated PDF and the standalone PNG were independently decoded to verify the exact QR target, https://omatty123.github.io/minds/.

New handout references include the Center for Deep Listening's account of Oliveros's Sonic Meditations and an MIT Press author excerpt on Borges's Funes. Linked sources are in the PDF; catalog and introductory source review is not a completed teaching review of every edition or score. The local PDF render was inspected before publication. No private faculty strategy or correspondence is included in the public files.
