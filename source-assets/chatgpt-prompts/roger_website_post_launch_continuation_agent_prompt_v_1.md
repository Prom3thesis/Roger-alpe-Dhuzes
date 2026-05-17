# Agent Activation Prompt — Roger Website Post-Launch Continuation v1.0

## Context

We resume the project for:

# `roger-alpe-dhuzes.nl`

The website is already live:

- `https://roger-alpe-dhuzes.nl/`

The previous delivery was intentionally pushed live early. That was correct at the time, but it also meant that several planned follow-up phases were consciously parked or only completed in a launch-ready minimum form.

We now have renewed implementation capacity and new client input from Roger. The project should therefore move into a controlled:

# **Post-Launch Continuation & Completion Track**

This is not a full restart. Build on the existing strategy, documents, site architecture and live implementation.

---

# 1. Read these sources first

Before writing any new deliverable, read and take into account:

## A. Existing project governance and strategy

- `AGENTS.md`
- all relevant documents under:
  - `docs/strategy/`

At minimum, re-orient on:

- Master Brief
- Asset & Content Annex
- Projectfasering
- Website- and conversion strategy
- Page Blueprints
- Technical Architecture Blueprint
- Codex Build Plan
- Project Delta Update v1.0 on prices, order flow, product photos and remembrance actions

## B. Current live site / current repo implementation

Inspect the current state of the implemented website, especially:

- Home
- `/mijn-verhaal`
- `/media-updates`
- any existing update/content architecture
- current static export assumptions, if still present in the repo

## C. Newly supplied client content

Mandatory source to read:

```text
C:\Users\Cyb3l\Documents\roger-alpe-dhuzes.nl\source-assets\doc-mijnverhaal-roger-alpe-dhuzes\Content-Manager-Roger Chappin.pdf
```

This PDF contains improved and expanded content created for Roger by a content manager/creator. It must be treated as a significant new content source, but not blindly pasted into the site without review.

---

# 2. New confirmed project decisions

These decisions are already confirmed by Marduk and must be treated as hard project input.

## 2.1 Roger wants a CMS / self-managed diary system

Roger must be able to publish his own updates without Marduk’s involvement.

### Confirmed requirements

- Roger publishes himself.
- Marduk should have the least possible ongoing maintenance burden.
- The site may move away from the current pure static-export architecture if necessary.
- The CMS scope is limited to:
  - Dagboek / Diary
  - Updates
- Roger himself is responsible for text quality, language and publishing judgment.
  - No editorial approval workflow is required.

---

# 3. Strategic placement of the diary / CMS content

The previously discussed strategic direction is now confirmed:

# **Roger’s diary belongs inside `Media & Updates`, not as a dominant homepage component.**

## `Media & Updates` becomes the central actualities hub with three content tracks:

1. **Dagboek van Roger**
   - personal updates;
   - training moments;
   - preparation;
   - setbacks, milestones, reflections.

2. **Campagne-updates**
   - supporter actions;
   - donation milestones;
   - sponsor developments;
   - remembrance actions;
   - product-related campaign updates if relevant.

3. **Media-aandacht**
   - RTV Parkstad;
   - external interviews;
   - future press mentions.

## Homepage guidance

The homepage should not become a full diary feed.

A later homepage refinement may contain at most:

- a compact **latest update** or **latest diary entry** teaser;
- with CTA to `Media & Updates`.

That is a future implementation consideration, not a reason to restructure the homepage prematurely.

---

# 4. Important content-handling rule for the new PDF

The new PDF is valuable, but it must be evaluated carefully against the already confirmed project information.

## Treat the PDF as:

- a strong new source for richer `/mijn-verhaal` content;
- a strong source for historical diary/update entries;
- a potential source for better copy tone and Rogers own voice.

## Do not automatically treat every factual detail in the PDF as the newest source of truth.

When the PDF conflicts with later confirmed project documents or delta updates, the later confirmed project information prevails.

### Examples of topics that require conflict-awareness

- latest prices;
- latest proceeds rules;
- latest remembrance-action details;
- current donation status;
- any later client-confirmed project delta.

---

# 5. Required task now

Produce the next three strategic documents for the continuation track.

Do **not** write Codex implementation prompts yet. First create the documents below so the next technical/build phase is correctly governed.

---

# Deliverable 1 — Post-Launch Continuation & Completion Plan v1.0

## Purpose

Define the new project phase after launch.

## This document must cover

1. What is already live and stable.
2. Which prior phases were parked or compressed for launch.
3. That Phase 14 — Dynamic Donation Progress remains open and must be reconsidered in light of the CMS/dynamic-site decision.
4. That new client content has been supplied.
5. That the project now moves from **launch MVP** to **completion, editorial strengthening and self-managed update capability**.
6. The recommended next project sequence from here.

## Expected filename

```text
docs/strategy/post-launch-continuation-completion-plan-v1.0.md
```

---

# Deliverable 2 — Content Integration Review v1.0

## Purpose

Analyse the new PDF content and determine precisely how it should be used.

## This document must cover

### A. `/mijn-verhaal`

- What parts of the PDF improve or enrich the existing page.
- Which passages should be used, adapted or condensed.
- Whether the current live story page needs light refinement or a more substantial editorial upgrade.
- Which existing parts should remain unchanged.

### B. `Media & Updates` / Diary

- Which PDF sections are suitable as first diary/update entries.
- Whether they should be used as:
  - historical backfilled diary posts;
  - campaign updates;
  - timeline entries;
  - or source material only.

### C. Conflict and freshness control

- Identify any factual details in the PDF that are historical, stale or potentially superseded by later client-confirmed project facts.
- Mark where existing project delta documents outrank the PDF.

### D. Content architecture impact

- Explain how the new content affects:
  - `/mijn-verhaal`;
  - `/media-updates`;
  - potential homepage latest-update teaser;
  - CMS content modeling.

## Expected filename

```text
docs/strategy/content-integration-review-v1.0.md
```

---

# Deliverable 3 — CMS & Content Operations Decision v1.0

## Purpose

Make a clear recommendation for how Roger can self-publish diary/update content with minimal ongoing burden for Marduk.

## Confirmed decision inputs that must be reflected

- Roger publishes himself.
- Updates should follow the route with the least maintenance burden for Marduk.
- The site is allowed to move away from a purely static export model.
- CMS scope is limited to diary/updates.
- Roger is responsible for text quality and can publish directly.

## This document must decide or recommend

1. The right CMS/content-management direction.
2. Whether a headless CMS is the best fit.
3. Whether the current hosting/publish model must change.
4. How the CMS feeds into `Media & Updates`.
5. Whether homepage gets a latest-entry teaser.
6. Whether content should be categorized into:
   - Dagboek;
   - Campagne-update;
   - Media.
7. Which editor fields Roger should see in the CMS, for example:
   - title;
   - date;
   - category/type;
   - body;
   - optional image;
   - optional featured flag / show-on-home toggle;
   - publish state if relevant.
8. What should remain outside CMS.
9. How this affects future Codex build phases.
10. What needs to happen before Phase 14 — Dynamic Donation Progress can be re-planned.

## Expected filename

```text
docs/strategy/cms-content-operations-decision-v1.0.md
```

---

# 6. Expected end report after completing the three documents

After producing the three Markdown documents, report back with:

## 1. Summary
- what has been established;
- how the project direction changed after the new Roger input.

## 2. Documents created
- exact file names and locations.

## 3. Key conclusions
Confirm explicitly:
- diary belongs under `Media & Updates`;
- homepage only gets an optional compact latest-update teaser;
- Roger self-publishes;
- site may become dynamic;
- CMS only covers diary/updates;
- PDF content must be integrated selectively, not blindly pasted;
- Phase 14 should be re-planned after the CMS/hosting decision.

## 4. Open decisions
List only decisions that genuinely remain open after the documents.

## 5. Recommended next step
State what the next most logical step is after these three documents are approved.

---

# 7. Guardrails

## Do not

- write Codex prompts yet;
- implement CMS code yet;
- rewrite the live site directly yet;
- blindly replace current content with PDF content;
- reopen the entire original strategy;
- ignore existing delta documents;
- turn the homepage into a diary feed;
- introduce a sitewide CMS when the confirmed scope is only diary/updates.

## Do

- think from continuity, not restart;
- preserve the strong work already delivered;
- use the new PDF as a content-enrichment source;
- make the CMS decision practical for Marduk and usable for Roger;
- prepare the next build phase so Codex can work cleanly afterward.

