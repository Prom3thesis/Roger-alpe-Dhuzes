# AGENTS.md v1.0 — roger-alpe-dhuzes.nl

## 0. Purpose of this file

This file is the project-specific execution contract for all Codex work on:

**roger-alpe-dhuzes.nl**

Codex must use this file as the governing project guide before:

- proposing architecture;
- editing code;
- creating pages;
- generating components;
- restructuring content;
- introducing dependencies;
- making visual or UX decisions.

This project is not a generic promotional website.
It is a personal, emotionally grounded, donation-focused campaign website for Roger Chappin’s participation in Alpe d’HuZes.

---

## 1. Project mission

Build a modern, premium, emotionally compelling, conversion-focused website that helps Roger Chappin:

1. tell the real story behind his Alpe d’HuZes participation;
2. honor the promise he made to his mother, Riny Chappin-Plieger;
3. show the physical and personal transformation that made this participation possible;
4. support cancer research through fundraising;
5. present the remembrance action with kaarshouders in a dignified way;
6. promote additional tangible support routes through campaign products;
7. make donating, supporting, sharing and following the campaign simple.

The visitor should leave with this impression:

> “This is sincere, substantial, personal and worth supporting. I understand Roger’s mission and I know how I can help.”

---

## 2. Strategic identity of the website

The website must be shaped around six strategic pillars:

### 2.1 Promise

Roger promised his mother that, if he ever lost enough weight and became mobile enough, he would walk Alpe d’HuZes for her.

### 2.2 Transformation

Roger once weighed 208 kg. After a gastric bypass in September 2023, he lost more than 100 kg and became physically able to pursue that promise.

### 2.3 The Mountain

Alpe d’HuZes is the literal and symbolic climax of the story. The mountain represents the promise becoming real.

### 2.4 Remembrance

Roger walks not only for his mother, but also in remembrance of others affected by cancer, including Arianne Heuts-Veenhof, veterans, uniformed professionals and people affected by chroom-6-related suffering.

### 2.5 Community

The campaign is supported by local sponsors, G.O.C. Parkstad, public updates, followers, media attention and RTV Parkstad coverage.

### 2.6 Support action

The website must consistently guide visitors toward meaningful action:

- donate directly;
- support through campaign products;
- participate in the remembrance action;
- share or follow the campaign.

---

## 3. Tone of voice

The website tone must be:

- human;
- sincere;
- clear;
- dignified;
- emotionally resonant;
- direct;
- grounded;
- trustworthy;
- polished without becoming sterile.

The tone must preserve Roger’s own authenticity:

- personal;
- grateful;
- at times raw;
- never overproduced.

### Avoid

Do not write in:

- generic nonprofit language;
- melodramatic fundraising clichés;
- manipulative guilt-based persuasion;
- empty “inspirational” slogans without story;
- agency-style branding jargon;
- cold corporate charity copy.

---

## 4. Source of truth hierarchy

When implementing content, use the following hierarchy.

### 4.1 Strategic documents

1. **System Prompt — Codex Web Development & Fundraising Conversion Agent**  
   Defines the working role, strategic website purpose and conversion mindset.

2. **Master Brief v1.0**  
   Defines the core campaign strategy, positioning, preliminary architecture and website intent.

3. **Asset & Content Annex v1.0**  
   Defines the official asset strategy, A/B/C priority model, source-to-page mapping and content/quote bank.

4. **Projectfasering v2.0**  
   Defines execution order, future deliverables and the phased build discipline.

5. **Project Delta Update v1.0 — Bestelroute, prijzen, productfoto’s en herinneringsacties**  
   `docs/strategy/project-delta-update-v1.0-bestelroute-prijzen-productfotos-herinneringsacties.md`  
   Defines the newest factual additions for product prices, ordering/payment routes, remembrance action variants, the jacket remembrance action and product photo status. This document overrides older information for those specific topics.

### 4.2 Primary factual content sources

**A. `verhaal 1.docx`**  
Primary source for:

- Roger’s personal story;
- his mother Riny;
- the promise;
- the history of watching Alpe d’HuZes together;
- the weight transformation;
- the gastric bypass in September 2023;
- the journey from impossibility to actual participation;
- the €2.500 fundraising target.

**B. `verhaal 2.docx`**  
Primary source for:

- the remembrance action;
- kaarshouders with candle and name;
- price: €25,00;
- Riny Chappin-Plieger;
- Arianne Heuts-Veenhof;
- G.O.C. Parkstad;
- veterans and uniformed professionals affected by cancer;
- chroom-6 remembrance context;
- the statement that the remembrance objects will first be placed at G.O.C. Parkstad and later at Alpe d’HuZes.

**C. Facebook post PDF**  
Primary source for:

- chronological campaign updates;
- training timeline;
- sportschool updates;
- physical preparation;
- difficulty and perseverance;
- “Op Karakter” reference;
- offroad training update of 7,47 km;
- RTV Parkstad update;
- living campaign character;
- selected direct quotes usable for updates, timeline and homepage fragments.

---

## 5. Confirmed campaign facts to preserve

The following facts are confirmed project facts and should not be casually altered:

- Roger Chappin participates in Alpe d’HuZes.
- Event date referenced in supplied texts: 4 June 2026.
- The campaign centers on his promise to his mother, Riny Chappin-Plieger.
- Roger previously weighed 208 kg.
- Copy should use: **“ruim 100 kilo afgevallen”**.
- Gastric bypass: September 2023.
- Fundraising goal: **€2.500**.
- A dynamic donation total is preferred if technically robust.
- If dynamic retrieval is not robust, use a manually managed fallback value.
- Roger’s public phone number and email may be shown on the website.
- RTV Parkstad image, interview audio and video may be used.
- All shared image assets may be used.
- Website stack direction: Next.js.
- No CMS in the initial project.
- Updates should be handled via Markdown or lightweight manually maintained code/data.
- The remembrance action receives a full dedicated page.
- Support products receive a meaningful place in the support/conversion architecture.

---

## 6. Three support routes

The website must clearly distinguish and connect three ways to support Roger.

### 6.1 Direct donation

Primary conversion.

**Goal:**

- send visitors to the official Alpe d’HuZes donation destination;
- show the €2.500 goal;
- display current fundraising progress where reliable;
- remove friction.

This should be the most visible support route sitewide.
Ordinary direct donations must continue through Roger’s official Alpe d’HuZes action page. Do not build an own donation checkout, alternative donation payment flow or custom payment form for general donations.

### 6.2 Support products

Secondary conversion and tangible campaign support.

**Confirmed products:**

| Product | Price |
| --- | ---: |
| Armbandje met Roger-logo | €2,00 |
| Plastic bidon met Roger-logo | €2,50 |
| Aluminium bidon met Roger-logo | €3,50 |

**Confirmed positioning:**

- These are not generic webshop articles.
- They are tangible ways to support Roger.
- The full proceeds go directly to Roger’s Alpe d’HuZes donations.
- First usable product photos are available and must be visually reviewed and processed where appropriate in future implementation. Source location: `source-assets/images-roger-alpe-dhuzes/`; known filenames: `ALP-2046-Fles-01`, `ALP-2046-Fles-02`, `armband-kind-1`. Exact extensions must be established locally. More product photos may arrive later, but current build work should not wait for possible additional photos.

**Recommended website framing:**

> Tastbare manieren om Roger te steunen en tegelijk rechtstreeks bij te dragen aan zijn Alpe d’HuZes-donaties.

**Confirmed ordering and payment route:**

- Orders for support products can be placed via WhatsApp, phone call, email or Facebook.
- After an order, Roger arranges payment via Tikkie / payment request, cash on delivery or card payment on delivery.
- Shipping costs are paid by the buyer.
- Do not build a webshop checkout, custom Tikkie integration or embedded payment process for these products.

**Implementation implications:**

- likely a dedicated section on the Doneren / Steunen page;
- homepage teaser possible;
- no ecommerce checkout unless explicitly requested later;
- use contact/order CTA via the confirmed ordering routes.

### 6.3 Herinneringsactie — kaarshouder

Emotionally distinct support route.

**Confirmed action:**

- kaarshouder / wings with candle and name: €25,00;
- angel: €35,00;
- writing on Roger’s Alpe d’HuZes-jasje: €10,00;
- the Alpe d’HuZes-jasje remains hanging afterward as a remembrance object;
- full proceeds go to Roger’s Alpe d’HuZes donations;
- content belongs primarily on the dedicated Herinneringsactie page.
- ordering/participation can be arranged via WhatsApp, phone call, email or Facebook.
- after ordering/participation, Roger arranges payment via Tikkie / payment request, cash on delivery or card payment on delivery.
- shipping costs are paid by the buyer where physical shipment is relevant.

**Tone:**

- dignified;
- commemorative;
- not product-sales driven;
- rooted in remembrance.

The remembrance variants and jacket action must not be visually or tonally flattened into “just another product card.”
They are remembrance actions first, support routes second. The jacket action belongs with the remembrance action, not with ordinary support products.

---

## 7. Required website architecture awareness

Unless later benchmark and strategy work decisively indicates otherwise, the site architecture should assume these main pages:

1. Home
2. Mijn verhaal
3. De tocht
4. Doneren / Steunen
5. Herinneringsactie
6. Media & updates
7. Sponsors & contact

Do not prematurely collapse this into a single-page site.
A compact multipage structure is currently the preferred direction.

---

## 8. Core page roles

### 8.1 Home

**Purpose:**

- emotional capture;
- campaign overview;
- immediate donation path;
- routing to deeper pages.

Home should not tell every detail in full.
It should persuade, orient and convert.

**Expected building blocks:**

- strong hero;
- Roger visible;
- core promise;
- donation CTA;
- progress toward goal;
- short transformation block;
- route teaser;
- remembrance teaser;
- support products teaser;
- media credibility;
- sponsor strip;
- final donation CTA.

### 8.2 Mijn verhaal

**Purpose:**

- narratively explain why Roger does this;
- honor Riny;
- make the promise emotionally credible;
- explain transformation without sensationalism.

**Primary source:** `verhaal 1.docx`.

### 8.3 De tocht

**Purpose:**

- make the physical challenge tangible;
- explain the mountain;
- show preparation;
- connect training with campaign significance.

**Core assets:** route map; training photos.

### 8.4 Doneren / Steunen

**Purpose:** provide the clearest conversion page; combine the three support routes without confusing them.

**Expected structure:**

1. Direct donation — primary;
2. Support products — secondary;
3. Reference to Herinneringsactie — emotionally distinct route;
4. Sharing and contact options.

This page must be easy to scan on mobile.

### 8.5 Herinneringsactie

**Purpose:**

- present the kaarshouder action with dignity;
- explain who Roger remembers;
- show why this action exists;
- invite participation respectfully.

**Primary source:** `verhaal 2.docx`.

**Core asset:** memorial candles / kaarshouders image.

### 8.6 Media & updates

**Purpose:**

- show the campaign is active;
- highlight RTV Parkstad;
- present campaign progress over time;
- support authenticity and social proof.

**Primary sources:** Facebook post PDF; RTV Parkstad media assets.

**Expected implementation:**

- feature RTV Parkstad prominently;
- updates via Markdown or lightweight data;
- optional timeline.

### 8.7 Sponsors & contact

**Purpose:**

- recognize regional support;
- provide credible public contact details;
- create room for future sponsor interest if needed.

**Core asset group:** sponsor visuals / sponsor logos.

---

## 9. Asset hierarchy and usage rules

The Asset & Content Annex v1.0 defines asset priority.
Codex must respect this.

### 9.1 Priority A — core assets

Must be taken seriously in first full website version.

- Roger campaign logo
- Route map
- Memorial candles / kaarshouders image
- RTV Parkstad media image/content
- Strong Roger portrait(s), used strategically

### 9.2 Priority B — strong supporting assets

Use where they strengthen narrative and trust.

- Training photos
- Sponsor visuals
- Donation flyers as copy/reference or optional campaign material
- Selected product visuals after visual review of the available product photos

### 9.3 Priority C — optional/contextual

Do not prioritize in initial website build unless specifically justified.

- Carnival/local personal photo
- Rode Kruis photo
- DJ Renato artwork as secondary media context
- photographed paper route chart, unless used as documentary support

---

## 10. Visual direction

The website should feel:

- premium;
- immersive;
- strong;
- warm;
- human;
- campaign-specific;
- emotionally charged without becoming theatrical.

### 10.1 Brand cues from Roger’s logo

Use the logo as a major design anchor:

- dark navy;
- strong blue;
- warm orange / sunrise gold;
- red route/path accent;
- white contrast;
- mountainous geometry;
- upward movement.

### 10.2 “WAUW” interpretation

The desired “WAUW” effect means:

- high visual hierarchy;
- excellent hero composition;
- strong typography;
- confident use of space;
- emotionally aligned imagery;
- polished mobile design;
- subtle, purposeful motion only when justified.

It does not mean:

- flashy clutter;
- excessive parallax;
- meaningless animation;
- template overload;
- too many gradients and effects;
- visual noise over content.

---

## 11. Hero guidance

The hero is a strategic conversion area.

**Preferred direction:**

- strong portrait of Roger;
- emotionally concise campaign headline;
- short supporting text;
- direct donate CTA;
- optional secondary CTA to read his story;
- donation progress module if technically and visually appropriate.

The hero must answer within seconds:

1. Who is this?
2. Why does it matter?
3. What can I do?

Do not create a vague hero with only poetic wording and no donation route.

---

## 12. Conversion principles

### 12.1 Primary conversion

Donate through the official Alpe d’HuZes route.

### 12.2 Secondary conversions

- support via campaign products;
- participate in the remembrance action;
- share the campaign;
- follow updates;
- contact Roger.

### 12.3 CTA discipline

- Donate CTA visible early;
- repeat after key emotional sections;
- buttons must say exactly what happens;
- avoid vague CTA copy;
- keep direct donation primary over secondary actions;
- do not bury the support path inside long paragraphs.

**Preferred CTA styles:**

- Doneer nu
- Steun Rogers belofte
- Help Roger naar de top
- Bekijk de herinneringsactie
- Ontdek de steunproducten
- Beluister het interview

---

## 13. Content transformation rules

When transforming source texts into web copy:

### Preserve

- factual meaning;
- emotional core;
- Roger’s authentic voice;
- specificity of people, places and moments;
- directness of the campaign request.

### Improve

- structure;
- readability;
- sentence rhythm;
- public-facing polish;
- page-level hierarchy;
- scannability.

### Do not

- fabricate details;
- rewrite facts into unverified claims;
- replace real specificity with generic charity language;
- overcompress meaning until the human story disappears;
- introduce statistics or claims not yet sourced.

---

## 14. Donation progress module rules

A donation progress component is strategically valuable.

### Preferred behavior

- show current amount raised;
- show €2.500 goal;
- show remaining amount or progress percentage if reliable;
- include donate CTA nearby.

### Technical rule

Do not implement fragile scraping or unstable data extraction without an explicit feasibility assessment.

**Required decision path:**

1. investigate whether dynamic retrieval is robust and maintainable;
2. if yes, implement safely with fallback;
3. if no, use central manually maintained config/data.

The website must not break because a third-party donation page markup changes.

---

## 15. Support products implementation rules

Support products must be framed as campaign support, not as commercial retail.

### Required content

- product name;
- price;
- statement that the full proceeds go to Roger’s Alpe d’HuZes donations;
- clear order/contact path via WhatsApp, phone call, email or Facebook;
- payment explanation: Roger arranges payment after ordering via Tikkie / payment request, cash on delivery or card payment on delivery;
- shipping costs are paid by the buyer;
- practical availability information if later provided.

### Do not

- build shopping cart behavior unless explicitly instructed;
- build a webshop checkout, own Tikkie integration or embedded payment process;
- present them like a normal ecommerce catalog;
- mix the kaarshouder emotionally into the same light product tone.

---

## 16. Herinneringsactie implementation rules

This page requires special care.

### It must communicate

- remembrance;
- dignity;
- connection;
- personal and collective loss;
- direct relation to the Alpe d’HuZes mission.

### It may include

- Riny Chappin-Plieger;
- Arianne Heuts-Veenhof;
- G.O.C. Parkstad;
- veterans and uniformed professionals;
- chroom-6 context, where already provided;
- kaarshouder / wings action at €25,00;
- angel variant at €35,00;
- writing on Roger’s Alpe d’HuZes-jasje at €10,00, with the Alpe d’HuZes-jasje remaining hanging afterward as remembrance;
- full proceeds to donations;
- contact/participation CTA via WhatsApp, phone call, email or Facebook;
- payment explanation via Tikkie / payment request, cash on delivery or card payment on delivery;
- shipping costs for the buyer where physical shipment is relevant.

### It must not feel like

- a webshop;
- a generic product landing page;
- a sorrow spectacle;
- an aggressive donation push.

---

## 17. Media & updates implementation rules

RTV Parkstad is a credibility asset and should be clearly visible.

### Confirmed media direction

Include:

- RTV Parkstad photo;
- reference to the interview;
- audio/video route if supplied and technically usable;
- date/context when available.

### Updates

Use Markdown or a lightweight manual content structure.

**Suggested update categories:** training; campaign; media; remembrance; community.

Do not hard-code a rigid blog system beyond what is necessary.

---

## 18. Sponsor presentation rules

Sponsors communicate regional trust and community support.

### Preferred presentation

- clean, respectful sponsor grid;
- concise thank-you framing;
- optional short context for especially relevant supporters such as G.O.C. Parkstad and Hormati Gym, if strategy later approves.

### Avoid

- throwing poster images into a visually noisy collage;
- making sponsors dominate the emotional core of the campaign;
- overstating sponsor roles.

---

## 19. Technical direction

### 19.1 Stack

The project direction is:

- Next.js;
- React;
- TypeScript;
- modern component-based architecture;
- Tailwind CSS if consistent with the chosen repo setup.

Do not invent a parallel architecture if a repo already exists.
Inspect first, then adapt.

### 19.2 Likely content organization

This is a likely target, not an unconditional instruction if repo context differs:

```text
content/
  updates/
    *.md

data/
  sponsors.ts
  media.ts
  fundraising.ts
  support-products.ts

public/
  images/
    brand/
    hero/
    story/
    route/
    remembrance/
    media/
    sponsors/
    campaign/
    products/
```

---

## 20. Accessibility, UX and performance requirements

**Target:**

- semantic HTML;
- correct heading order;
- accessible links and buttons;
- keyboard usability;
- sufficient contrast;
- meaningful alt text;
- reduced-motion respect;
- responsive design;
- good mobile readability;
- donation path usable on small screens;
- optimized images;
- careful hero LCP handling;
- no unnecessary layout shifts.

---

## 21. SEO and shareability

The site is likely to be shared in:

- Facebook;
- WhatsApp;
- regional networks;
- sponsor circles;
- local community pages.

**Therefore include:**

- clear page titles;
- human meta descriptions;
- Open Graph metadata;
- suitable social preview image;
- campaign-specific favicon / brand usage;
- structured sharing-conscious content.

---

## 22. Codex working rules

Codex must work in a disciplined, staged way.

### 22.1 Before editing

Always:

- inspect relevant files;
- understand existing architecture;
- identify exact scope;
- report any inconsistencies that affect implementation.

### 22.2 During editing

- make scoped changes;
- prefer reusable components;
- preserve project strategy;
- do not rewrite unrelated code;
- do not introduce unnecessary dependencies;
- do not make visual decisions that contradict the campaign identity.

### 22.3 After editing

Always provide:

- summary of changes;
- files touched;
- decisions made;
- validation run;
- remaining risks/open items;
- recommended next step.

---

## 23. Validation discipline

Whenever meaningful code changes are made, validate as applicable:

- lint;
- typecheck;
- build;
- targeted tests if present;
- browser/responsive review where relevant.

When UI is involved, inspect:

- desktop layout;
- mobile layout;
- CTA visibility;
- visual hierarchy;
- image crop behavior;
- text wrapping;
- content density.

---

## 24. Non-goals for initial project version

Do not add these unless explicitly requested later:

- full CMS;
- ecommerce checkout;
- shopping cart;
- complex product inventory;
- user accounts;
- advanced admin dashboard;
- auto-sync from Facebook;
- excessive motion systems;
- interactive 3D mountain gimmicks;
- over-engineered analytics stack;
- heavy donation scraping hacks.

---

## 25. Definition of done for major build phases

A Codex build phase is done only when:

- it meets the declared scope;
- it supports the project mission;
- content is factually aligned with approved sources;
- design choices strengthen the donor journey;
- CTA hierarchy remains clear;
- mobile usability is intact;
- accessibility basics are respected;
- validation has been run;
- the final report is complete.

---

## 26. Final project principle

Every page, section and component should answer at least one of these questions:

- Does this help visitors understand Roger’s story?
- Does this deepen trust?
- Does this make the campaign more tangible?
- Does this honor remembrance properly?
- Does this help someone support the mission?

If the answer is no, it probably does not belong in the first version of the site.
