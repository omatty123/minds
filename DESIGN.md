---
name: MIND(s)
description: Compact black, white and red journalism design for a faculty proposal and learning bank.
colors:
  ink: "#151515"
  red: "#b71926"
  muted: "#565656"
  line: "#d4d4d4"
  paper: "#fff"
  soft: "#f3f3f3"
  masthead-accent: "#f15b65"
typography:
  headline:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "clamp(2.45rem, 4.7vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.035em"
  section:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 2.4vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-.025em"
  body:
    fontFamily: "Public Sans, Arial, sans-serif"
    fontSize: "16px"
    lineHeight: 1.65
rounded:
  square: "0"
components:
  primary-action:
    backgroundColor: "{colors.red}"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "14px 18px"
  primary-action-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  annotation:
    backgroundColor: "{colors.soft}"
    padding: "8px 20px 18px"
---

# Design System: MIND(s)

## Overview

MIND(s) uses a compact journalism layout: a black masthead, white reading surfaces, red emphasis, sans-serif typography throughout. The user explicitly selected the black, white and red journalism direction and direct code construction. The specific measurements and component treatments below document the implementation; they are not additional recorded user approvals.

This document describes `dist/style.css`, `dist/app.js` and the nine HTML pages: exploration homepage, Gallery Walk note tool, proposal, model syllabus, learning bank, pronunciation collection, global history, campus possibilities and participation, including the scoped pronunciation additions in `dist/mind-atlas.css` and `dist/mind-atlas.js`. The shared system favors readable source records, visible limits and direct navigation. It uses typography and rules; the pronunciation page also uses sourced objects and signed-language demonstrations as evidence.

## Colors

Red marks primary actions, active navigation, source types and editorial rules. The lighter masthead accent distinguishes the parenthetical “(s)” against black. Ink supplies text and strong dividers; muted gray supplies supporting information. White is the reading surface, soft gray groups controls and annotations, and line gray separates related records.

**The Evidence Label Rule.** Keep the written source type visible. Color does not replace labels such as “Theory,” “Empirical study” or “Preprint.”

## Typography

Public Sans supplies every text role: wordmark, headings, research titles, paragraphs, navigation, controls and metadata. Arial and sans-serif are the fallbacks. Serif type is prohibited unless the user explicitly requests a specific exception. Headings normally use weight 600; the wordmark uses 700. Paragraph leading is generous while metadata remains compact.

Let headings wrap naturally. Do not add decorative line breaks or constrain their width to strand short phrases. The desktop opening title remains on one line above 1100px; mobile overrides its size. Keep the distinction between reading text and smaller publication metadata.

Print CSS sets the body and syllabus teaching text to 11pt, headings to 13–26pt, and page margins to 16mm. Preserve the 11pt minimum for teaching print materials; verify any new text role in print rather than assuming the screen style meets it.

## Layout

The shared content container is 1280px maximum with 42px horizontal padding. The masthead and navigation align with the content. Section spacing is generally 28–45px. Fine separators organize adjacent records; stronger rules start major sections. Avoid oversized introductory sections and empty decorative space.

Desktop layouts use two columns for the opening and explanatory sections, and three columns for discipline and research summaries. Source rows use a 180px metadata column beside the reading column. Paragraph widths are constrained locally where long lines would impair reading.

At 850px, horizontal padding becomes 26px, gaps contract, syllabus meeting lists become one column, filters become two columns, and source metadata narrows to 135px. At 600px, padding becomes 20px, main content grids stack, filters become one column, and source metadata forms a wrapping row. The shared navigation wraps into visible rows at 850px and below, with tighter spacing at 600px; link text stays unbroken. The edition date is hidden in the mobile masthead.

The mobile assessment table retains a 510px minimum width inside a horizontally scrollable container. This is an intentional current accommodation, with scroll discoverability a nonblocking review note. Do not shrink its text to force all columns into the viewport.

The pronunciation page's semantic comparison uses two four-item branches around a central MIND circle on desktop. At 850px, the circle contracts and examples change from four columns to two. At 600px, connectors disappear, the center becomes a full-width rectangular label, and the branches form two columns. Section introductions, the two signed-language studies and the three visual studies stack on mobile. Museum images use `object-fit: contain` to preserve the full objects.

## Elevation & Depth

The system is flat. Borders, white space and gray inset panels provide grouping. There are no shadows, floating cards or layered decorative surfaces. The masthead and footer use solid ink backgrounds.

## Shapes

Controls, panels and labels have square corners. Thin straight rules are the recurring shape. Primary actions are filled rectangles; the “Shared work” label is a small outlined rectangle. The pronunciation circle and desktop semantic center are scoped circular forms. Do not introduce pills or rounded card containers into the existing patterns.

## Components

- **Masthead and navigation:** compact wordmark, proposal descriptor and edition information; active links use red text and a red underline with `aria-current="page"`.
- **Actions:** red filled primary links turn ink on hover; secondary actions remain underlined text. Action rows wrap when needed.
- **Source rows:** source type and date precede a linked title, byline and summary. Native `details` disclose teaching use, limits, access and review depth. Stable entry anchors support direct links, with a pale red target highlight and red outline.
- **Learning-bank controls:** labeled search and native selects filter by researcher, discipline and source type. Query keys are `q`, `researcher`, `discipline` and `kind`; state updates with `history.replaceState`. Clear filters resets all fields and focuses search. A direct entry anchor opens its details and clears conflicting filters so the entry is visible.
- **Results and fallback:** a polite live status announces the count; a visible empty state explains recovery. Source records remain readable without JavaScript. Filtering and print controls appear only when JavaScript can operate them.
- **Syllabus:** six sustained works appear as ruled rows with historical context, entry point, intellectual scope and expandable reading/source notes. A nine-language comparison uses responsive text rows, followed by ancient sources, arts, research companions and pacing. Week labels align with teaching content; gray writing panels distinguish assignments. Assessment uses a real table, with horizontal scrolling on narrow screens and unrestricted overflow for print.
- **Keyboard and motion:** a skip link becomes visible on focus. Links, buttons, inputs, selects and summaries receive a red 3px focus outline with 4px offset. Reduced-motion preferences disable smooth scrolling and animation. Preserve semantic landmarks, native controls and visible labels.
- **Semantic comparison:** eight selected, overlapping clusters use native buttons with `aria-pressed` and `aria-controls`. Selection marks the heading in red with an underline and displays its examples in a warm gray panel. Each example links a dictionary and the existing recording. All panels remain readable without JavaScript and in print; playback requires JavaScript. Connections describe selected meanings, not language ancestry or a universal definition.
- **Signed-language and visual studies:** ASL THINK uses an explicit load button before inserting the provider's iframe; BSL MIND uses native video controls. Source links remain visible. Three visual studies distinguish modern sans-serif 心, an Egyptian heart amulet and Rodin's *The Thinker*. Keep museum attribution and contextual interpretation adjacent to each object.

### Body-location explorer

The scoped section at `mind-words.html#body` uses a schematic body beside the selected evidence on desktop. A warm neutral figure surface and fine outline keep the active red head/chest markers legible. Marker size does not encode response percentages or anatomical boundaries. Native layer buttons use an ink fill for selection; account buttons use a red underline. Each account keeps its evidence type, finding, limitation and sources together. The eight accounts remain distinct across Research, Language & gestures, and Historical beliefs; contributor observations retain attribution.

At 700px and below, the figure and reading panel stack; the SVG height changes from 490px to 330px. Controls wrap and retain a 44px minimum height. Selection updates pressed states, the SVG description, caption and polite status. All evidence panels remain available without JavaScript. Print hides the figure and controls, exposes all accounts, and uses 11pt evidence text.

Local review, 10 October 2026: all eight selections passed at 1440px and 390px, with no horizontal overflow and rendered Public Sans/Apple SD Gothic Neo. The independent finish reviewer reported SHIP for the scoped screenshots and code. This section is local only at `/Users/wegehaum/Documents/ChatGPT/META/minds/dist/mind-words.html#body`; this record does not verify live deployment.

### Global history

The global-history page extends the shared journalism design with a compact introduction and black synthesis panel. Nine recurring approaches form a three-column grid with red selected states. Six period controls use an ink selected state. Source-linked account rows pair a narrow date column with the account, native source disclosure, review depth and visible limits. The 44 accounts are selected evidence, not an exhaustive inventory; period groups and themes are navigation and editorial comparison aids.

At 760px and below, the synthesis and account rows stack, themes form two columns, periods form three columns, and filters wrap into a two-column layout. Search and tradition controls span both columns. Headings wrap naturally; all text inherits the sans-serif system. Print exposes filtered records and source details and sets account evidence text to 11pt.

Theme, period, region, tradition, discipline and search filters combine. URL keys are `theme`, `era`, `region`, `tradition`, `discipline` and `q`; changes use `history.replaceState`. Native buttons expose pressed states, the result count uses a polite live status, and reset focuses search. Stable account fragments open source details and clear conflicting filters. Without JavaScript, all accounts and native disclosures remain readable while unavailable filtering controls stay hidden.

Local review, 10 October 2026: 1440px and 390px checks covered filters, URL state, direct links, no horizontal overflow, actual sans-serif fonts and source access without JavaScript. The scoped independent finish reviewer reported SHIP. This addition is local only at `/Users/wegehaum/Documents/ChatGPT/META/minds/dist/history.html`; this record does not verify live deployment.

### Campus possibilities

The seventh page extends the shared black, white and red Public Sans system. A compact introduction leads to four source-linked entry routes in an ink panel, followed by two columns of ruled candidate records. Native disclosures group materials, activity steps, student output, context and sources. Red filled buttons mark shortlist selections; a gray control row shows the selection count, view, print and clear actions.

At 760px and below, routes form two columns, candidate and campus-connection records stack, and filters use two columns with search and campus connection spanning both. Controls retain visible labels and at least 44px height. Natural heading wraps and square controls preserve the shared system.

Filters use URL keys `q`, `area`, `mode`, `time` and `route`; shortlist state uses `pick` and `shortlist`. Route and campus-connection links preserve selected IDs. Direct candidate fragments open native disclosures and clear conflicting filters. Without JavaScript, all records and disclosures remain available while inactive controls stay hidden. Normal print exposes all candidates; Print shortlist exposes selected candidates and teaching notes. Candidate evidence text prints at 11pt. Print hides the extended introduction and collection heading, uses a 24pt title with reduced opening padding, and permits candidate records to span pages. Three-line orphan and widow limits preserve readable continuations without leaving a mostly empty opening sheet.

Local review, 10 October 2026: 1440px and 390px checks covered filters, shortlist and URL state, print, direct anchors, no-JavaScript access, no horizontal overflow and rendered Public Sans. A reviewer finding about selections lost through route links was fixed; the scoped finish review reported SHIP. This addition is local only at `/Users/wegehaum/Documents/ChatGPT/META/minds/dist/possibilities.html`; this record does not verify live deployment.

## Do's and Don'ts

- Keep compact headers, aligned navigation, direct source links and visible evidence qualifications.
- Preserve the user's overarching questions; do not add discussion questions or reflection prompts without a request.
- Keep desktop and mobile layouts readable, and inspect rendered headings at both sizes after changes.
- Keep print teaching text at least 11pt and preserve economical black-and-white output.
- Do not add decorative imagery, gradients, shadows or oversized introductory areas to fill space.
- Do not present the selected learning bank as an exhaustive inventory or the faculty proposal as an adopted curriculum.

Local review record, 10 October 2026: all four pages were reviewed at 1440px and 390px, with captures in `.impeccable/review/`. Before the user’s subsequent sans-serif correction, the independent finish reviewer reported **SHIP**, with no material findings and the mobile table note above. This records that review disposition, not institutional or user approval of every design detail.

## Pronunciation companion

`mind-words.html` uses a radial word selector on desktop and a two-column list on mobile. The playback controls keep a stable position above the changing word details. Red marks the selected word. Each recording has a lexical source, attribution and license. Phrase recordings are identified in both the list and player. Browser inspection at 1440px and 390px confirmed no horizontal page overflow and sans-serif rendering for every script used in the word selectors.

## WATER-inspired listening edition — 10 October 2026
The user requested more beauty based on the WATER site. The pronunciation page now gives the radial collection the dominant width, with a warm white surface, red segmented selection ring, language labels and the active word in the center. The center has a working Listen control. Word meanings and playback controls remain beside the circle on desktop; mobile uses the active-word circle above controls and the searchable word list. All 50 source records, human audio files and credits remain unchanged. These scoped styles supersede the earlier pronunciation layout description; other pages retain their design.

Scoped additions, 10 October 2026: the semantic comparison, signed-language resources and three visual studies extend this listening edition. Browser review covered cluster selection, Korean audio, BSL playback, image loading, actual sans-serif fonts and layouts at 1440px and 390px without horizontal overflow. ASL iframe insertion was checked; YouTube playback remains unverified. Finish-review disposition: ship the scoped sections. This is a review record, not approval of an exhaustive linguistic classification.


## Gallery Walk note tool — first 19 October 2026 revision

The retained `gallery.html` tool uses a compact MIND heading, a four-theme guide and a scannable board of 25 notes. Public Sans, black text, red controls and fine rules preserve the existing design. Restrained neutral, peach, gray and sage note surfaces distinguish themes without simulated paper effects. The previous proposal layout is retained at `proposal.html`.

The note grid uses three columns on desktop, two below 1000px and one below 650px. Theme filters, selection controls and copy actions retain visible labels; source and context notes use native disclosures. Custom notes are browser-local. The authored content remains readable without JavaScript, while unavailable controls stay hidden.

Selected-note printing uses two columns of 3-inch squares with dashed cutting outlines. Print omits navigation, controls and source disclosures, with note text at least 11pt. Selection can include notes outside the current filter. Local QA reported no horizontal overflow at 1440px and 390px, actual Public Sans rendering, two selected notes printed across filters and custom-note persistence. This is a local implementation record, not confirmation of live deployment.

Custom notes use a 3-inch minimum print height and expand when necessary to prevent text overlap.


## Exploration homepage — current 19 October 2026 revision

`dist/explore.css` and `dist/explore.js` extend the black, white and red Public Sans system. A compact introduction sits beside three full-object museum images on desktop. Four prominent, sticky category links read WORKS, THINKERS, CONCEPTS and LU FACULTY, each with its entry count. Red fill marks the active category. The page uses ruled entries rather than sticky-note styling; descriptions and source links remain adjacent. Two more museum objects appear after the works. All five artworks retain captions, dates and source credits.

Works, concepts and faculty use two columns; thinkers use three columns. Below 1000px, the introduction moves above the art and thinkers use two columns. Below 600px, entries use one column and the four category labels remain visible in a compact row. The artwork strip preserves full images with `object-fit: contain`. Headings wrap naturally.

Category hash links select one section when JavaScript is available. Search filters that section, with a result count and clear action. Copy for Post-it provides plain text; clipboard failure selects the entry and supplies a manual-copy instruction. Artwork links open a native dialog with a close button and Escape support, restoring focus on close. Without JavaScript, all 54 entries and source links remain available and image links open the files. Print exposes all entries. The independent note tool at `gallery.html` retains selection and square-note printing.

Local QA reported 1440px and 390px views, rendered Public Sans, no horizontal overflow, category routing, section search, copying, dialog Escape/focus behavior and no-JavaScript access. This documents the local implementation at `/Users/wegehaum/Documents/ChatGPT/META/minds/dist/index.html`; deployment verification is pending.

## 심 心 identity — 19 October 2026
The shared masthead and footer pair MIND(s) with prominent 심 心. The homepage repeats the pair in its closing signature. A self-hosted two-glyph Noto Sans KR subset (SIL OFL; license in dist/fonts/) ensures sans-serif rendering. 심 is identified as the Sino-Korean reading of 心. The header mark links to the existing meaning clusters.
