# Technical Architecture Blueprint v1.0 — `roger-alpe-dhuzes.nl`

## 0. Status en functie van dit document

Dit document vertaalt de afgeronde strategie, page blueprints en visual assetvoorbereiding naar een **technische architectuurblauwdruk** voor:

# `roger-alpe-dhuzes.nl`

Het bouwt voort op:

1. de definitieve **System Prompt**;
2. **Master Brief v1.0**;
3. **Asset & Content Annex v1.0**;
4. **Projectfasering v2.0**;
5. **Projectspecifieke AGENTS.md v1.0**;
6. **Benchmarkonderzoek v1.0**;
7. **Website- en conversiestrategie v1.0**;
8. **Page Blueprints v1.0**;
9. **Visual & Asset Preparation Blueprint v1.0**.

Dit document legt vast:

- de aanbevolen Next.js-projectarchitectuur;
- de route- en paginastructuur;
- de componenthiërarchie;
- de contentarchitectuur voor updates;
- de datastructuren voor sponsors, steunproducten, media en fundraising;
- de technische aanpak voor de donatieprogressiemodule;
- image handling op basis van de visuele blueprint;
- metadata, SEO en deelbaarheid;
- accessibility- en performanceguardrails;
- technische keuzes die direct leiden naar het latere **Codex Build Plan v1.0**.

Dit document is **geen code**, **geen installatiehandleiding** en **geen uitvoeringsprompt**, maar een architectuurcontract voor de bouwfase.

---

# 1. Technische uitgangspositie

## 1.1 Huidige projectstatus

Voor zover nu bekend bestaat de projectworkspace momenteel uit:

- `AGENTS.md`;
- strategiedocumenten onder `docs/strategy/`;
- nog geen definitief geïmplementeerde Next.js-codebase.

De latere eerste Codex-uitvoeringsfase moet daarom waarschijnlijk starten met:

1. repo-inspectie;
2. bevestigen dat er nog geen bestaande app-architectuur is;
3. scaffolding van de gekozen Next.js-basis;
4. plaatsen van de assets en contentstructuur volgens de eerdere blueprints.

---

## 1.2 Belangrijk technisch uitgangspunt

De website moet worden gebouwd als:

> **Een compacte, contentgedreven, conversion-first campagnesite met lage onderhoudslast en duidelijke uitbreidbaarheid.**

Dat betekent:

- geen CMS in v1;
- geen webshop;
- geen zwaar beheersysteem;
- geen overbodige backend;
- wel:
  - sterke routing;
  - herbruikbare componenten;
  - nette data-/contentlagen;
  - media- en updateondersteuning;
  - schaalbare assetstructuur;
  - voorbereid op donatieprogressie.

---

# 2. Definitieve technische hoofdrichting

## 2.1 Aanbevolen stack

| Laag | Keuze |
| --- | --- |
| Framework | Next.js |
| Router | App Router |
| Taal | TypeScript |
| UI-opbouw | React component-based |
| Styling | Tailwind CSS, tenzij repo-inspectie anders vereist |
| Contentupdates | Markdownbestanden of lichte Markdown-compatible contentlaag |
| Structured data | TypeScript-datafiles |
| Images | `public/images/` + Next.js image handling |
| Metadata | Next.js Metadata API en metadata files |
| Donatiestand | Dynamisch indien robuust, anders handmatige fallback |
| CMS | Niet gebruiken in v1 |

---

## 2.2 Waarom deze stack past

Deze stack past bij het project omdat:

- de site relatief compact is, maar visueel hoogwaardig moet worden;
- de pagina’s grotendeels inhoudsgedreven zijn;
- updates handmatig beheersbaar moeten blijven;
- Next.js goede routing, metadata en image handling biedt;
- de site later gecontroleerd kan doorgroeien zonder nu al te over-engineeren.

---

# 3. Architectuurprincipes

## 3.1 Server-first waar logisch

De site is primair contentgedreven. Daarom:

- pagina’s standaard server-rendered / server-first benaderen;
- client-side interactiviteit alleen inzetten waar nodig;
- overbodige client state vermijden;
- homepage en storypagina’s niet onnodig als client components bouwen.

---

## 3.2 Client components alleen bij echte interactie

Client components zijn waarschijnlijk alleen nodig voor:

- mobiele navigatie;
- eventuele sticky donatiebar met interactie;
- sharebuttons die browser-API’s gebruiken;
- optionele image zoom/lightbox voor route-map;
- eventuele audio/video-ui als standaard embed niet volstaat.

---

## 3.3 Data en presentatie scheiden

Contentdata moet niet hard verweven raken met layoutcode.

Daarom:

- sponsors in datafile;
- media-items in datafile;
- supportproducten in datafile;
- fundraisingconfig in datafile/service;
- updates als Markdowncontent;
- pagina’s consumeren data via nette abstrahering.

---

## 3.4 Geen techniek zonder functie

Elke technische toevoeging moet aantoonbaar bijdragen aan:

- conversie;
- onderhoudbaarheid;
- inhoudelijke helderheid;
- performance;
- toegankelijkheid.

---

# 4. Aanbevolen mappenstructuur

Als er nog geen app-code bestaat, is onderstaande structuur de aanbevolen basis.

```text
roger-alpe-dhuzes.nl/
  AGENTS.md
  package.json
  next.config.ts
  tsconfig.json
  postcss.config.js
  tailwind.config.ts

  docs/
    strategy/
      benchmarkonderzoek-v1.0.md
      website-en-conversiestrategie-v1.0.md
      page-blueprints-v1.0.md
      visual-asset-preparation-blueprint-v1.0.md
      technical-architecture-blueprint-v1.0.md

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

  content/
    updates/
      *.md

  src/
    app/
      layout.tsx
      page.tsx

      mijn-verhaal/
        page.tsx

      de-tocht/
        page.tsx

      doneren/
        page.tsx

      herinneringsactie/
        page.tsx

      media-updates/
        page.tsx
        [slug]/
          page.tsx

      sponsors-contact/
        page.tsx

      sitemap.ts
      robots.ts
      favicon.ico
      icon.png
      apple-icon.png
      opengraph-image.png

    components/
      layout/
      ui/
      conversion/
      story/
      route/
      remembrance/
      media/
      sponsors/
      content/

    data/
      site.ts
      navigation.ts
      fundraising.ts
      support-products.ts
      sponsors.ts
      media.ts

    lib/
      content/
        updates.ts
      fundraising/
        get-fundraising-progress.ts
        parse-fundraising-progress.ts
      seo/
        metadata.ts
      utils/
        format-currency.ts
        cn.ts
```

---

# 5. Mappenstructuur — architectuurbesluiten

## 5.1 `src/app/`

Bevat:

- layouts;
- routes;
- metadata;
- pagina-entrypoints.

De `app`-structuur is leidend voor navigatie en page composition.

---

## 5.2 `src/components/`

Bevat herbruikbare componenten, logisch gegroepeerd op functie.

### Aanbevolen submappen

```text
components/
  layout/
  ui/
  conversion/
  story/
  route/
  remembrance/
  media/
  sponsors/
  content/
```

---

## 5.3 `src/data/`

Bevat gestructureerde, handmatig beheerde projectdata.

Geen externe database.  
Geen CMS.  
Wel typed data voor:

- siteconfiguratie;
- navigatie;
- supportproducten;
- sponsors;
- media;
- fundraising fallback.

---

## 5.4 `src/lib/`

Bevat logica die niet in componenten hoort:

- content parsing;
- fundraising service;
- formatting;
- metadata helpers.

---

## 5.5 `content/updates/`

Bevat Markdownupdates.  
Deze map staat buiten `src/` omdat het echte content is, vergelijkbaar met redactionele bronbestanden.

---

# 6. Definitieve routestructuur

## 6.1 Gekozen URL’s

| Pagina | Route |
| --- | --- |
| Home | `/` |
| Mijn verhaal | `/mijn-verhaal` |
| De tocht | `/de-tocht` |
| Doneren / Steunen | `/doneren` |
| Herinneringsactie | `/herinneringsactie` |
| Media & Updates | `/media-updates` |
| Update detail | `/media-updates/[slug]` |
| Sponsors & Contact | `/sponsors-contact` |

---

## 6.2 Besluit voor `/doneren`

De zichtbare paginanaam blijft:

# **Doneren / Steunen**

Maar de technische route wordt:

```text
/doneren
```

### Waarom
- kort;
- direct;
- goed begrijpelijk;
- sluit aan op de primaire conversie;
- eenvoudiger in CTA’s en deelverkeer.

De pagina zelf mag duidelijk communiceren dat er **meerdere manieren van steunen** zijn.

---

## 6.3 Route voor update-details

De overzichtspagina:

```text
/media-updates
```

toont geselecteerde updates.

Individuele updates krijgen optioneel een detailpagina:

```text
/media-updates/[slug]
```

### Waarom dit zinvol is
- updates worden deelbaar;
- geen overvolle overzichtspagina;
- structureel geschikt voor Markdown;
- later bruikbaar voor SEO en campagnemomenten.

---

# 7. Layoutarchitectuur

## 7.1 Root layout

`src/app/layout.tsx` bevat minimaal:

- `<html lang="nl">`;
- globale fonts;
- globale metadata defaulting;
- `SiteHeader`;
- `SiteFooter`;
- hoofdcontentslot;
- optionele skiplink;
- globale stijlinjectie.

---

## 7.2 Header

### Benodigde functies
- logo;
- hoofdnavigatie;
- primaire CTA **Doneer / Steun**;
- mobiele menuvariant.

### Componenten
```text
SiteHeader
MobileNavigation
HeaderDonationCTA
```

---

## 7.3 Footer

### Benodigde functies
- korte campagneherhaling;
- primaire links;
- contact;
- externe donatielink;
- eventueel sociale verwijzingen;
- copyright / campagnestatus.

### Component
```text
SiteFooter
```

---

## 7.4 Mogelijke sticky mobile CTA

Een mobiele sticky CTA mag pas later in de visuele/UX-uitwerking definitief worden besloten.

### Mogelijke inzet
- button **Doneer**
- mogelijk secundair **Steunen**

### Voorwaarde
Niet agressief, niet storend, en voldoende onderscheid ten opzichte van navigatie.

---

# 8. Componentarchitectuur — hoog niveau

## 8.1 Layoutcomponenten

| Component | Functie |
| --- | --- |
| `SiteHeader` | Hoofdnavigatie |
| `MobileNavigation` | Mobiel menu |
| `SiteFooter` | Footer |
| `PageShell` | Optionele pagina-wrapper |
| `SectionContainer` | Consistente breedte/padding |

---

## 8.2 UI-basiselementen

| Component | Functie |
| --- | --- |
| `Button` | CTA’s en acties |
| `Card` | Kaarten |
| `Badge` | Categorieën / labels |
| `SectionHeading` | Consistente kopstructuur |
| `IconLabel` | Compacte info |
| `ProgressBar` | Donatievoortgang |
| `QuoteBlock` | Quotes |

---

## 8.3 Conversiecomponenten

| Component | Functie |
| --- | --- |
| `DonationProgress` | Opgehaald / doel / percentage / CTA |
| `DonationCTASection` | Conversieblok |
| `SupportRouteCards` | Drie steunroutes |
| `SupportProductsGrid` | Productkaarten |
| `RevenueTransparencyBox` | Volledige opbrengst naar donaties |
| `ShareCampaignBlock` | Deelcampagne |
| `OfficialDonationBlock` | Link naar officiële fundraisingpagina |

---

## 8.4 Storycomponenten

| Component | Functie |
| --- | --- |
| `CampaignHero` | Home hero |
| `StoryPageHero` | Mijn verhaal |
| `EditorialStorySection` | Tekst + beeld |
| `TransformationHighlight` | 208 kg → ruim 100 kilo afgevallen |
| `NarrativeMilestoneSection` | Verhaalmomenten |
| `QuoteSection` | Sterke quotes |

---

## 8.5 Route- en trainingcomponenten

| Component | Functie |
| --- | --- |
| `RoutePageHero` | De tocht opening |
| `RouteMapFeature` | Grote routekaart |
| `TrainingGallery` | Trainingsfoto’s |
| `AuthenticityQuoteBlock` | Eerlijke trainingsreflectie |
| `CompactCampaignTimeline` | Tijdlijn richting 4 juni |

---

## 8.6 Herinneringscomponenten

| Component | Functie |
| --- | --- |
| `MemorialHero` | Kaarsenfoto + titel |
| `MemorialStorySection` | Waarom de actie bestaat |
| `RemembrancePeopleBlock` | Riny, Arianne, veteranen/geüniformeerden |
| `CandleActionExplainer` | Wat de kaarshouder inhoudt |
| `MemorialPricingInfo` | €25 + opbrengst |
| `ParticipationCTA` | Meedoen aan actie |
| `ClosingMemorialQuote` | Afsluitende quote |

---

## 8.7 Media- en updatecomponenten

| Component | Functie |
| --- | --- |
| `MediaUpdatesHero` | Paginaintro |
| `FeaturedMediaSection` | RTV Parkstad |
| `MediaEmbedBlock` | Video/audio/externe media |
| `UpdateGrid` | Overzicht updatekaarten |
| `UpdateCard` | Eén update |
| `UpdateArticle` | Detailpagina voor update |
| `CampaignTimeline` | Chronologisch overzicht |
| `FollowCampaignBlock` | Volgen/delen |

---

## 8.8 Sponsor- en contactcomponenten

| Component | Functie |
| --- | --- |
| `SponsorsContactHero` | Paginaintro |
| `SponsorGrid` | Sponsorweergave |
| `SponsorCard` | Eén sponsor |
| `FeaturedSupporters` | G.O.C./Hormati indien passend |
| `ContactBlock` | Tel/e-mail |
| `SupportInquirySection` | Nieuwe steun/samenwerking |
| `FinalCTASection` | Donatie afsluiter |

---

# 9. Paginacompositie per route

## 9.1 Home `/`

Aanbevolen componentvolgorde:

```text
CampaignHero
DonationProgress
StoryTeaser
TransformationHighlight
RoutePreview
SupportRouteCards
MemorialTeaser
MediaFeatureCard
SponsorStrip
FinalCTASection
```

---

## 9.2 Mijn verhaal `/mijn-verhaal`

```text
StoryPageHero
EditorialStorySection
QuoteSection
NarrativeMilestoneSection
TransformationHighlight
NarrativeMilestoneSection
DonationCTASection
```

---

## 9.3 De tocht `/de-tocht`

```text
RoutePageHero
RouteMapFeature
RouteChallengeIntro
TrainingGallery
AuthenticityQuoteBlock
CompactCampaignTimeline
DonationCTASection
```

---

## 9.4 Doneren `/doneren`

```text
SupportHero
DonationProgressLarge
OfficialDonationBlock
WhySupportMatters
SupportProductsGrid
RevenueTransparencyBox
MemorialSupportTeaser
ShareCampaignBlock
FinalCTASection
```

---

## 9.5 Herinneringsactie `/herinneringsactie`

```text
MemorialHero
MemorialStorySection
RemembrancePeopleBlock
CandleActionExplainer
MemorialPricingInfo
PlacementAndMeaningSection
ParticipationCTA
ClosingMemorialQuote
FinalCTASection
```

---

## 9.6 Media & Updates `/media-updates`

```text
MediaUpdatesHero
FeaturedMediaSection
UpdateGrid
CampaignTimeline
TrainingImageStrip
FollowCampaignBlock
DonationCTASection
```

---

## 9.7 Update detail `/media-updates/[slug]`

```text
UpdateArticleHero
UpdateArticle
RelatedCampaignCTA
BackToUpdatesLink
```

---

## 9.8 Sponsors & Contact `/sponsors-contact`

```text
SponsorsContactHero
SponsorGrid
FeaturedSupporters
SupportMeaningSection
ContactBlock
SupportInquirySection
FinalCTASection
```

---

# 10. Siteconfiguratie en centrale data

## 10.1 `src/data/site.ts`

Bevat centrale projectconstanten:

```ts
export const siteConfig = {
  name: "roger-alpe-dhuzes.nl",
  title: "Roger Chappin — Alpe d’HuZes",
  description: "...",
  url: "https://roger-alpe-dhuzes.nl",
  donationUrl: "...officiële fundraisingpagina...",
  contactEmail: "...",
  contactPhone: "...",
  social: {
    facebookGroup: "..."
  }
};
```

---

## 10.2 Waarom centrale siteconfig

- één bron voor externe links;
- geen verspreide harde URLs;
- CTA-componenten blijven consistent;
- metadata kan uit dezelfde bron putten.

---

# 11. Navigatiedata

## 11.1 `src/data/navigation.ts`

Bevat hoofdnav en footernav.

### Voorbeeldstructuur

```ts
export const mainNavigation = [
  { label: "Home", href: "/" },
  { label: "Mijn verhaal", href: "/mijn-verhaal" },
  { label: "De tocht", href: "/de-tocht" },
  { label: "Herinneringsactie", href: "/herinneringsactie" },
  { label: "Media & Updates", href: "/media-updates" },
  { label: "Sponsors & Contact", href: "/sponsors-contact" }
];

export const primaryNavigationCta = {
  label: "Doneer / Steun",
  href: "/doneren"
};
```

---

# 12. Contentarchitectuur voor updates

## 12.1 Voorkeurskeuze

Voor v1:

# **Markdownbestanden in `content/updates/`**

Geen CMS.  
Geen database.  
Geen zwaar blogframework.

---

## 12.2 Waarom Markdown

- eenvoudig handmatig bij te werken;
- geschikt voor geselecteerde campagne-updates;
- makkelijk versioneerbaar in Git;
- inhoud blijft los van pagina-layout;
- geschikt voor detailpagina’s.

---

## 12.3 Aanbevolen bestandsstructuur

```text
content/
  updates/
    2025-12-20-waarom-ik-alpe-dhuzes-loop.md
    2026-03-11-training-en-doorzetten.md
    2026-03-17-op-karakter.md
    2026-04-09-offroad-training-wormdal.md
    2026-04-11-herinneringsactie.md
    2026-05-13-rtv-parkstad-interview.md
```

---

## 12.4 Aanbevolen front matter

```md
---
title: "Training, twijfel en doorgaan"
slug: "training-en-doorzetten"
date: "2026-03-11"
category: "training"
excerpt: "Roger deelt eerlijk hoe de voorbereiding fysiek en mentaal verloopt."
featured: true
featuredImage: "/images/story/roger-training-treadmill-01.jpg"
sourceLabel: "Facebook-update"
externalUrl: ""
---
```

---

## 12.5 Aanbevolen categorieën

```ts
type UpdateCategory =
  | "training"
  | "campagne"
  | "media"
  | "herinnering"
  | "community";
```

---

## 12.6 Updateparser

`src/lib/content/updates.ts` moet later verantwoordelijk worden voor:

- Markdownbestanden vinden;
- front matter lezen;
- updates sorteren op datum;
- featured updates selecteren;
- detailpagina genereren;
- consistente types afdwingen.

---

## 12.7 Geen MDX-noodzaak in v1

Plain Markdown verdient de voorkeur zolang updates vooral tekst, foto’s, quotes en links bevatten.

MDX is pas nodig als updates complexe interactieve React-componenten moeten bevatten.  
Voor dit project is dat in v1 niet noodzakelijk.

---

# 13. Fundraisingarchitectuur

## 13.1 Strategisch uitgangspunt

De donatieprogressiemodule is een centrale conversiecomponent.

Hij moet op minimaal twee plekken bruikbaar zijn:

1. Home;
2. Doneren / Steunen.

---

## 13.2 Fundraising datamodel

Aanbevolen intern type:

```ts
export type FundraisingProgress = {
  raisedAmount: number;
  goalAmount: number;
  currency: "EUR";
  percentage: number;
  remainingAmount: number;
  source: "remote" | "manual";
  updatedAt?: string;
  donationUrl: string;
};
```

---

## 13.3 Handmatige fallbackconfig

`src/data/fundraising.ts`

```ts
export const fundraisingFallback = {
  raisedAmount: 1457,
  goalAmount: 2500,
  currency: "EUR",
  updatedAt: "2026-05-14",
  donationUrl: "..."
};
```

### Belangrijk
Het bedrag is tijdsgevoelig.  
De fallbackwaarde moet later eenvoudig handmatig updatebaar blijven.

---

# 14. Dynamische donatiestand — beslisarchitectuur

## 14.1 Voorkeursrichting

Dynamische uitlezing vanaf Rogers officiële fundraisingpagina is gewenst, maar alleen als:

- technisch robuust;
- onderhoudbaar;
- niet afhankelijk van fragiele client-side scraping;
- foutbestendig;
- cachebaar.

---

## 14.2 Aanbevolen architectuur

```text
DonationProgress component
        ↓
getFundraisingProgress()
        ↓
remote fetch if enabled
        ↓
parse result
        ↓
validate data
        ↓
return remote result OR fallback data
```

---

## 14.3 Server-side service

Aanbevolen bestand:

```text
src/lib/fundraising/get-fundraising-progress.ts
```

Verantwoordelijkheden:

- fetching;
- foutafhandeling;
- keuze remote/manual;
- normaliseren naar intern type;
- terugvallen op fallback.

---

## 14.4 Parsinglogica gescheiden houden

Aanbevolen bestand:

```text
src/lib/fundraising/parse-fundraising-progress.ts
```

Waarom:
- parsing kan later wijzigen zonder UI te raken;
- scrape-/extractielogica blijft geïsoleerd;
- unit testbaar.

---

## 14.5 Geen client-side scraping

Niet doen:

- vanuit de browser de externe fundraisingpagina fetchen;
- fragile DOM-scraping in clientcode;
- donatiestand laten breken bij CORS of mark-up wijziging.

---

## 14.6 Route Handler alleen indien nodig

Een Route Handler zoals:

```text
/api/fundraising-progress
```

is alleen nodig als:

- een clientcomponent real-time data moet ophalen;
- externe integratie intern JSON nodig heeft;
- polling werkelijk gewenst is.

### Voorkeursroute
Servercomponenten of server-side helpers consumeren fundraisingdata direct.

---

## 14.7 Caching / revalidation

Wanneer remote fetching haalbaar blijkt, moet de donatiestand:

- niet per bezoeker volledig opnieuw onnodig worden opgehaald;
- wel regelmatig vernieuwd kunnen worden;
- bij fout terugvallen op fallbackdata.

De precieze cache-/revalidatievorm moet in de Codex-implementatie worden gekozen op basis van de daadwerkelijke Next.js-versie en deploymentvorm.

---

# 15. Supportproductenarchitectuur

## 15.1 Datafile

```text
src/data/support-products.ts
```

---

## 15.2 Datamodel

```ts
export type SupportProduct = {
  id: string;
  name: string;
  priceLabel: string;
  priceAmount: number;
  description: string;
  proceedsNote: string;
  image?: string;
  alt?: string;
  orderCtaLabel: string;
  orderHref?: string;
  featured?: boolean;
};
```

---

## 15.3 Initiële records

- Armbandje met Roger-logo — €2,00
- Plastic bidon met Roger-logo — €5,95
- Aluminium bidon met Roger-logo — €5,95

---

## 15.4 Ontbrekende beelden ondersteunen

Omdat productfoto’s nog niet definitief zijn aangeleverd, moet `SupportProductsGrid`:

- werken mét afbeelding;
- maar ook netjes werken zónder afbeelding;
- geen nepbeeld of generieke stockphoto eisen.

---

## 15.5 CTA-aanpak

Zolang er geen aparte bestelroute bestaat:

- contact-CTA gebruiken;
- bijvoorbeeld:
  - **Vraag een steunproduct aan**
  - **Neem contact op voor bestellen**

Geen winkelmand.  
Geen checkout.  
Geen voorraadlogica.

---

# 16. Herinneringsactiearchitectuur

## 16.1 Inhoudsvorm

De pagina **Herinneringsactie** is geen dynamische catalogus, maar een vaste inhoudspagina met één primaire actie.

---

## 16.2 Contentplaatsing

De hoofdcontent kan in v1 worden uitgewerkt binnen de pagina zelf via:

- zorgvuldig gestructureerde sectiecomponenten;
- statische content in TypeScript of inline contentblokken.

Een apart Markdownbestand is niet noodzakelijk, omdat deze pagina:

- geen herhaalde update is;
- een vaste campagnekern vormt;
- veel specifieke sectielogica heeft.

---

## 16.3 Mogelijke ondersteunende data

Indien gewenst kan een lichte datafile worden gebruikt voor:

- prijs;
- actiegegevens;
- opbrengsttekst;
- CTA-copy.

Bijvoorbeeld:

```text
src/data/remembrance-action.ts
```

Maar dit is optioneel.

---

# 17. Media-architectuur

## 17.1 Datafile

```text
src/data/media.ts
```

---

## 17.2 Datamodel

```ts
export type MediaItem = {
  id: string;
  title: string;
  date?: string;
  outlet: string;
  description: string;
  image?: string;
  imageAlt?: string;
  type: "video" | "audio" | "external-link";
  href?: string;
  embedUrl?: string;
  featured?: boolean;
};
```

---

## 17.3 RTV Parkstad

RTV Parkstad wordt het eerste en belangrijkste media-item.

De datafile moet later kunnen bevatten:

- titel;
- datum;
- omschrijving;
- studiofoto;
- video-embed of link;
- audio-link of playerroute;
- featured flag.

---

## 17.4 Embedstrategie

### Toestaan
- embed wanneer bron en URL bevestigd zijn;
- duidelijke fallbacklink wanneer embed niet mogelijk is.

### Niet doen
- gokken naar embedcodes;
- media inbouwen zonder definitieve bron;
- autoplay.

---

# 18. Sponsorarchitectuur

## 18.1 Datafile

```text
src/data/sponsors.ts
```

---

## 18.2 Datamodel

```ts
export type Sponsor = {
  id: string;
  name: string;
  image: string;
  alt: string;
  href?: string;
  featured?: boolean;
  description?: string;
};
```

---

## 18.3 Initiële sponsors

- Car Detailing Kissel
- Hormati Gym
- G.O.C. Parkstad
- Stichting Veteranen Ondersteunings Groep Parkstad / V.O.G.
- FF Frietje / Mobile Catering

---

## 18.4 Featured supporters

`featured: true` kan later worden gebruikt voor:

- G.O.C. Parkstad;
- Hormati Gym;

indien zij inhoudelijk extra context krijgen op de sponsor-/contactpagina.

---

## 18.5 Losse logo’s versus posterassets

De architectuur moet werken met de huidige sponsorvisuals, maar later zonder refactor overstappen op losse sponsorlogo’s als die beschikbaar komen.

---

# 19. Image handling

## 19.1 Assetbasis

Gebruik de structuur uit:

```text
public/images/
```

zoals vastgelegd in de Visual & Asset Preparation Blueprint.

---

## 19.2 `next/image`-richting

Waar passend moeten beelden:

- vaste dimensies of responsieve sizing krijgen;
- layout shift voorkomen;
- lazy-loaden wanneer ze onder de fold staan;
- alleen `priority` gebruiken voor werkelijk cruciale hero-assets.

---

## 19.3 Hero image

Het kleurportret van Roger op Home is waarschijnlijk LCP-kritisch.

Daarom:

- hero-image apart behandelen;
- niet overdimensioneren;
- goed croppen voor desktop en mobiel;
- responsive `sizes` gebruiken in de latere implementatie.

---

## 19.4 Route-map

Route-map vereist speciale behandeling:

- details moeten leesbaar blijven;
- geen agressieve crop;
- mogelijk later optionele zoom/lightbox;
- minimale versie mag statisch full-width zijn.

---

## 19.5 Kaarsenbeeld

Herinneringsbeeld:

- niet te zwaar comprimeren;
- namen en objecten zichtbaar houden;
- niet behandelen als product thumbnail.

---

# 20. SEO- en metadata-architectuur

## 20.1 Centrale metadatahelper

Aanbevolen:

```text
src/lib/seo/metadata.ts
```

Functie:
- consistent titles;
- descriptions;
- canonical URLs;
- Open Graph defaults;
- Twitter/X card defaults indien gewenst.

---

## 20.2 Metadata per pagina

Iedere hoofdpagina krijgt eigen metadata:

| Pagina | Focus |
| --- | --- |
| Home | Roger Chappin Alpe d’HuZes campagne |
| Mijn verhaal | Belofte, moeder, transformatie |
| De tocht | De klim en voorbereiding |
| Doneren | Doneren en steunproducten |
| Herinneringsactie | Kaarshouderactie en herdenken |
| Media & Updates | Campagnenieuws en RTV |
| Sponsors & Contact | Contact en lokale steun |

---

## 20.3 Open Graph

Minimaal:

- een sterke homepage OG-afbeelding;
- consistente social title/description;
- page-specific verbetering later optioneel.

---

## 20.4 Metadata files

Aanbevolen onder `src/app/`:

```text
favicon.ico
icon.png
apple-icon.png
opengraph-image.png
robots.ts
sitemap.ts
```

---

## 20.5 Sitemap

`sitemap.ts` moet minimaal alle statische hoofdpagina’s opnemen.

Individuele updatepagina’s kunnen later automatisch worden toegevoegd op basis van Markdown-slugs.

---

## 20.6 Robots

`robots.ts` moet crawlbaarheid toestaan en sitemap verwijzen zodra live URL definitief is.

---

# 21. Toegankelijkheidsarchitectuur

## 21.1 Basiseisen

Alle pagina’s moeten voldoen aan:

- logisch headingniveau;
- semantische landmarks;
- keyboardbediening;
- focus states;
- toegankelijke buttons en links;
- voldoende contrast;
- betekenisvolle alt-teksten;
- correct taalattribuut.

---

## 21.2 Beeldtoegankelijkheid

Gebruik de alt-tekstrichting uit de Visual & Asset Preparation Blueprint.

Decoratieve assets:

```html
alt=""
```

Inhoudelijke assets:
- zinvolle, korte beschrijving.

---

## 21.3 Route-map

Omdat de route-map inhoud bevat, moet de sectie niet uitsluitend afhankelijk zijn van het beeld.

Er moet ook tekstueel worden uitgelegd:

- dat het de wandelroute betreft;
- dat de berg de fysieke uitdaging concreet maakt.

---

## 21.4 Media

Bij RTV-video/audio:

- duidelijke titel;
- beschrijving;
- geen autoplay;
- indien transcript later beschikbaar is: meenemen of verwijzen.

---

## 21.5 Motion

Als motion later wordt gebruikt:

- respecteer `prefers-reduced-motion`;
- geen essentiële informatie uitsluitend via animatie tonen;
- herinneringsactiepagina visueel kalm houden.

---

# 22. Performancearchitectuur

## 22.1 Basishouding

De site moet:

- snel laden;
- mobiel sterk presteren;
- visueel premium blijven zonder zwaar te worden.

---

## 22.2 Performanceprioriteiten

1. Hero-image optimaliseren
2. Beeldformaten beheersen
3. Onnodige client JavaScript vermijden
4. Lazy loading onder de fold
5. Geen zware externe scripts zonder noodzaak
6. Media embeds beheerst laden
7. Fonts zorgvuldig kiezen

---

## 22.3 Fontstrategie

De uiteindelijke fontkeuze volgt later uit design, maar technisch:

- beperk aantal fontfamilies;
- gebruik consistente schaal;
- voorkom grote layout shifts.

---

## 22.4 Externe embeds

RTV-video/audio of andere embeds:

- alleen laden wanneer nodig;
- eventueel click-to-load patroon onderzoeken als performance daar baat bij heeft;
- geen meerdere zware media-embeds boven de fold.

---

# 23. Contactarchitectuur

## 23.1 Bevestigde uitgangspunten

Roger’s:

- e-mailadres;
- telefoonnummer;

mogen publiek op de website worden getoond.

---

## 23.2 V1-keuze

V1 werkt met:

- klikbare `mailto:`;
- klikbare `tel:`;
- contactblok op:
  - Doneren / Steunen;
  - Herinneringsactie;
  - Sponsors & Contact.

---

## 23.3 Geen contactformulier verplicht in v1

Een apart formulier is niet noodzakelijk tenzij later expliciet gewenst.

### Waarom
- voorkomt extra backendlogica;
- vermindert spamrisico;
- directe contactgegevens zijn al toegestaan;
- sluit aan op praktische campagnebehoefte.

---

# 24. Externe links en bronrouting

## 24.1 Officiële donatiepagina

De officiële fundraisingpagina van Roger wordt in `siteConfig` centraal opgeslagen.

Elke primaire doneer-CTA kan daardoor:

- direct naar deze pagina linken;
- of via `/doneren` leiden afhankelijk van context.

---

## 24.2 Aanbevolen linkstrategie

| Context | Linkrichting |
| --- | --- |
| Header CTA | `/doneren` |
| Homepage hero CTA | Externe officiële donatiepagina óf `/doneren`, later definitief kiezen |
| Donatiepagina CTA | Externe officiële donatiepagina |
| Finale CTA na verhaal | `/doneren` of externe donatielink, afhankelijk van flow |
| Donatieprogressieknop | Externe officiële donatiepagina |

---

## 24.3 Beslisregel

Wanneer CTA-tekst **“Doneer nu”** luidt, mag directe externe uitstuur logisch zijn.  
Wanneer CTA-tekst **“Steun Rogers belofte”** luidt, kan `/doneren` strategisch beter zijn omdat daar meerdere steunroutes worden uitgelegd.

---

# 25. Deployment- en renderstrategie

## 25.1 Niet te vroeg vastleggen op pure static export

De site kán grotendeels statisch zijn, maar de dynamische donatiestand maakt het onverstandig om nu al uit te gaan van een puur statische export als enige model.

---

## 25.2 Voorkeursrichting

Architectuur moet compatibel blijven met:

- standaard Next.js server deployment;
- Vercel-achtige deployment;
- eventueel self-hosting later.

---

## 25.3 Als donatiestand handmatig blijft

Wanneer dynamische donatiestand technisch niet robuust is:

- kan de site vrijwel volledig statisch functioneren;
- fallbackdata wordt tijdens build meegenomen;
- updates via Markdown blijven eenvoudig.

---

## 25.4 Als donatiestand dynamisch wordt

Dan is server-side ophalen en caching/revalidatie nodig.  
De exacte inzet hangt af van:

- hostingkeuze;
- Next.js-versie;
- technische betrouwbaarheid van de externe bron.

---

# 26. Validatie- en kwaliteitsarchitectuur

## 26.1 Basale validatie bij iedere grotere buildfase

Later Codex werk moet minimaal draaien:

- lint;
- typecheck;
- build.

Indien ingesteld:
- tests;
- browservalidatie;
- responsive review.

---

## 26.2 Contentvalidatie

Markdownupdates moeten gecontroleerd worden op:

- ontbrekende slug;
- ontbrekende datum;
- ontbrekende titel;
- ongeldige categorie;
- inconsistente featured flags.

---

## 26.3 UI-validatie

Bij homepage, donatiepagina, herinneringsactie en Media & Updates moeten extra worden gecontroleerd:

- CTA’s zichtbaar;
- mobiel scanbaar;
- beelden goed gecropt;
- progressiemodule duidelijk;
- mediaembed niet brekend;
- sponsorcards netjes.

---

# 27. Technische open punten vóór implementatie

De technische richting staat vast, maar de volgende open punten moeten in de Codex-buildplanning of vóór specifieke implementatiefasen worden opgelost:

1. Komt het project definitief in `src/`-structuur of root `app/` afhankelijk van scaffold?
2. Welke Tailwind-versie / stylingbasis wordt na scaffolding gebruikt?
3. Welke exacte donatielink wordt centraal opgeslagen?
4. Is dynamische donatiestand technisch betrouwbaar?
5. Welke cache-/revalidatievorm past bij gekozen Next.js-versie en hosting?
6. Komen er productfoto’s vóór bouw van Doneren / Steunen?
7. Welke RTV-video/audio-assets en URLs zijn definitief beschikbaar?
8. Komen er losse sponsorlogo’s?
9. Wordt een mobile sticky donate bar wel of niet ingezet?
10. Krijgen updates detailpagina’s meteen in v1 of pas na eerste homepage/contentbuild?

---

# 28. Besluiten die nu definitief vastliggen

## 28.1 Framework
Next.js + TypeScript.

## 28.2 Routing
App Router-benadering.

## 28.3 Paginaroutes
- `/`
- `/mijn-verhaal`
- `/de-tocht`
- `/doneren`
- `/herinneringsactie`
- `/media-updates`
- `/media-updates/[slug]`
- `/sponsors-contact`

## 28.4 Contentupdates
Markdown onder `content/updates/`.

## 28.5 Structured datafiles
TypeScript-datafiles voor:
- siteconfig;
- navigation;
- fundraising;
- support products;
- sponsors;
- media.

## 28.6 Donatiestand
Een abstractielaag met:
- dynamische optie;
- handmatige fallback.

## 28.7 Beelden
`public/images/` volgens visual blueprint.

## 28.8 SEO
Metadata per pagina, sitemap, robots, OG-assets.

## 28.9 Contact
Publieke tel/mail als v1-contactstructuur.

## 28.10 Geen over-engineering
Geen CMS, geen webshop, geen complex beheerportaal in v1.

---

# 29. Directe input voor Codex Build Plan v1.0

Het latere Codex Build Plan moet op basis van dit document minimaal deze uitvoeringsfasen bevatten:

1. Repo-inspectie en Next.js-scaffold
2. Basale projectstructuur + configuratie
3. Layoutshell, header, footer, navigation
4. Centrale datafiles en types
5. Assetstructuur en beeldplaatsing
6. Fundraising fallbackmodule + progressiecomponent
7. Homepagina foundation
8. Mijn verhaal
9. Doneren / Steunen
10. Herinneringsactie
11. De tocht
12. Media & Updates + Markdownflow
13. Sponsors & Contact
14. Dynamische donatiestand feasibility + implementatie/fallback
15. Metadata, sitemap, robots, OG
16. Accessibility, responsive en performance polish
17. Browser QA en correctieronde

---

# 30. Volgende stap

De volgende fase is:

# **Codex Build Plan v1.0**

Daarin wordt de volledige technische en inhoudelijke voorbereiding omgezet naar:

- concrete bouwfases;
- exact scoped Codex-runs;
- dependency order;
- validatie per fase;
- acceptance criteria;
- “niet doen”-regels;
- welke prompt als eerste wordt geschreven.

---

# 31. Samenvattende eindconclusie

Met deze Technical Architecture Blueprint is de strategische ontwerpfase technisch verankerd.

De website krijgt nu een duidelijk bouwmodel:

- Next.js App Router;
- TypeScript;
- contentgedreven architectuur;
- Markdownupdates;
- gescheiden structured data;
- sterke conversiecomponenten;
- robuuste fundraising abstraction;
- heldere media-, sponsor- en productmodellen;
- SEO-, accessibility- en performancebasis;
- geen onnodige backendcomplexiteit.

De website kan daarmee in de volgende fase gecontroleerd worden vertaald naar:

# **Codex Build Plan v1.0**
