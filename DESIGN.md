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

This document describes `dist/style.css`, `dist/app.js` and the five HTML pages: proposal, model syllabus, learning bank, pronunciation collection and participation. The shared system favors readable source records, visible limits and direct navigation. It uses typography and rules without decorative imagery or animation.

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

At 850px, horizontal padding becomes 26px, gaps contract, syllabus meeting lists become one column, filters become two columns, and source metadata narrows to 135px. At 600px, padding becomes 20px, main content grids stack, filters become one column, and source metadata forms a wrapping row. Navigation remains a visible four-link row. The edition date is hidden in the mobile masthead.

The mobile assessment table retains a 510px minimum width inside a horizontally scrollable container. This is an intentional current accommodation, with scroll discoverability a nonblocking review note. Do not shrink its text to force all columns into the viewport.

## Elevation & Depth

The system is flat. Borders, white space and gray inset panels provide grouping. There are no shadows, floating cards or layered decorative surfaces. The masthead and footer use solid ink backgrounds.

## Shapes

Controls, panels and labels have square corners. Thin straight rules are the recurring shape. Primary actions are filled rectangles; the “Shared work” label is a small outlined rectangle. Do not introduce pills or rounded card containers into the existing patterns.

## Components

- **Masthead and navigation:** compact wordmark, proposal descriptor and edition information; active links use red text and a red underline with `aria-current="page"`.
- **Actions:** red filled primary links turn ink on hover; secondary actions remain underlined text. Action rows wrap when needed.
- **Source rows:** source type and date precede a linked title, byline and summary. Native `details` disclose teaching use, limits, access and review depth. Stable entry anchors support direct links, with a pale red target highlight and red outline.
- **Learning-bank controls:** labeled search and native selects filter by researcher, discipline and source type. Query keys are `q`, `researcher`, `discipline` and `kind`; state updates with `history.replaceState`. Clear filters resets all fields and focuses search. A direct entry anchor opens its details and clears conflicting filters so the entry is visible.
- **Results and fallback:** a polite live status announces the count; a visible empty state explains recovery. Source records remain readable without JavaScript. Filtering and print controls appear only when JavaScript can operate them.
- **Syllabus:** six sustained works appear as ruled rows with historical context, entry point, intellectual scope and expandable reading/source notes. A nine-language comparison uses responsive text rows, followed by ancient sources, arts, research companions and pacing. Week labels align with teaching content; gray writing panels distinguish assignments. Assessment uses a real table, with horizontal scrolling on narrow screens and unrestricted overflow for print.
- **Keyboard and motion:** a skip link becomes visible on focus. Links, buttons, inputs, selects and summaries receive a red 3px focus outline with 4px offset. Reduced-motion preferences disable smooth scrolling and animation. Preserve semantic landmarks, native controls and visible labels.

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
