# Roger Alpe d’HuZes — CMS & Content Operations Decision v1.0

**Status:** Strategisch CMS- en contentoperationsbesluit — versie 1.0  
**Documentdoel:** Vastleggen welke CMS-richting het best past bij Rogers wens om zelfstandig dagboek- en updatecontent te publiceren, met zo laag mogelijke structurele beheerlast voor Marduk.  
**Datum:** 2026-05-17  
**Plaats binnen de documentatieketen:** Dit document vormt het besluitkader voor de latere CMS-implementatiearchitectuur, hosting-/deploykeuze en de herplanning van Phase 14 — Dynamic Donation Progress.

---

# 1. Executive Summary

Roger wil zelf updates kunnen plaatsen. Dat betekent dat de huidige website niet alleen een campagnepresentatie moet zijn, maar ook een **levende contentomgeving**. De bestaande `Media & Updates`-pagina is daarvoor strategisch de juiste plek. Een los hoofdmenu-item **Dagboek** is op dit moment niet nodig.

De centrale besluitrichting luidt:

> **Kies voor een beperkte, beheersbare headless CMS-opzet voor alleen Dagboek & Updates, gekoppeld aan `Media & Updates`, met minimale operationele afhankelijkheid van Marduk.**

De huidige pure static-exportflow via Cloud86/Plesk was passend voor snelle livegang, maar is niet ideaal voor Roger-self-publishing. Als Roger zelfstandig moet kunnen publiceren zonder dat Marduk telkens lokaal buildt, zipt en uploadt, moet de publicatiearchitectuur veranderen.

Daarom is de aanbevolen hoofdroute:

# **Aanbevolen richting: Sanity als headless CMS + een Next.js publicatieomgeving die CMS-updates automatisch of vrijwel automatisch kan verwerken.**

Daarbij hoort als voorkeursrichting:

- frontendpublicatie via een moderne Next.js-hostingomgeving die revalidation/dynamische content adequaat ondersteunt;
- CMS-scope beperkt tot diary/updatecontent;
- bestaande statische kernpagina’s blijven redactioneel beheerst buiten het CMS;
- de huidige `Media & Updates`-structuur wordt de visuele en inhoudelijke voorkant van het CMS.

---

# 2. Bindende uitgangspunten

## 2.1 Bevestigde projectbesluiten

De volgende keuzes zijn niet open maar vastgesteld:

- Roger publiceert zelf.
- Marduk moet zo min mogelijk structureel onderhoud hebben.
- Het CMS-scope blijft beperkt tot:
  - Dagboek / Diary;
  - Updates.
- Roger is zelf verantwoordelijk voor taal, inhoud en publicatiekeuze.
- Er is geen formele review-/goedkeuringsflow nodig.
- De site mag afwijken van de huidige pure static-exportarchitectuur als dat nodig is.
- Het dagboek hoort binnen **Media & Updates**.
- De homepage krijgt hooguit een compacte latest-update-teaser, geen volwaardige diary feed.

## 2.2 Niet-doelen

De volgende onderdelen worden bewust **niet** CMS-gestuurd:

- Homepagina als geheel;
- `/mijn-verhaal`;
- `/de-tocht`;
- `/doneren`;
- `/herinneringsactie`;
- `/sponsors-contact`;
- sponsorstructuur;
- productprijzen;
- centrale campagneconfiguratie;
- algemene CTA-logica;
- officiële donatieroute.

Deze onderdelen blijven projectmatig beheerde kernpagina’s, zodat de site niet verandert in een breed redactioneel CMS-project.

---

# 3. CMS-keuzerichting

# 3.1 Aanbevolen hoofdkeuze — Sanity headless CMS

## Waarom Sanity het best past

Sanity is de meest geschikte hoofdrichting omdat het:

- als managed headless CMS de content buiten de codebase beheert;
- uitstekend past bij een Next.js App Router-frontend;
- schema’s toestaat die precies op Rogers beperkte contentbehoefte worden ingericht;
- media, rich text en metadata ordelijk kan beheren;
- later previews/visual editing kan ondersteunen als dat wenselijk wordt;
- beter schaalbaar is dan handmatig Markdownbeheer;
- minder afhankelijk is van Git-commit/publicatiehandelingen door Roger.

Voor Roger betekent dit praktisch:

- inloggen in een editoromgeving;
- nieuw dagboekbericht of update maken;
- publiceren;
- de site verwerkt dit automatisch of via gecontroleerde revalidation.

Voor Marduk betekent dit:

- initiële inrichting en beheer van het contentmodel;
- daarna minimale structurele publicatielast.

## Strategisch oordeel

> **Sanity is de aanbevolen primaire CMS-richting voor dit project.**

---

# 3.2 Alternatief 1 — Storyblok

Storyblok is inhoudelijk een serieuze alternatieve headless CMS-richting, vooral wanneer een visuelere editorervaring prioriteit krijgt.

### Sterke punten

- visuele editing-benadering;
- duidelijke editorsinterface;
- sterke Next.js-integratie;
- geschikt voor gestructureerde content.

### Waarom niet de primaire aanbeveling

- voor Rogers beperkte updatebehoefte vermoedelijk zwaarder dan nodig;
- blokgebaseerd denken kan overkill zijn bij vooral artikelachtige dagboekcontent;
- de huidige sitearchitectuur vraagt meer om een compact contentmodel dan om paginaopbouw door de editor.

**Conclusie:** bruikbaar alternatief, maar niet eerste keuze.

---

# 3.3 Alternatief 2 — Decap CMS / Git-based CMS

Decap CMS sluit technisch goed aan op statische sites en file-based content. Het kan een editorslaag boven Markdown/Git bieden.

### Sterke punten

- open source;
- file-based content;
- sluit aan op bestaande Markdownupdates;
- conceptueel dicht bij de huidige siteopbouw.

### Waarom niet de primaire aanbeveling

- publicatie blijft Git-/build-/deploy-afhankelijk;
- authenticatie en publicatieflow moeten extra worden ingericht;
- de huidige Plesk/static-exportflow vraagt dan alsnog om een geautomatiseerde build-/deployketen;
- Roger krijgt eerder een “content-to-repository”-workflow dan een echt losgekoppelde CMS-ervaring.

**Conclusie:** verdedigbaar als kosten/minimale stack leidend is, maar minder passend bij de eis “Roger publiceert zelf, Marduk zo min mogelijk onderhoud”.

---

# 4. Hosting- en publicatiemodel

# 4.1 Moet het huidige hostingmodel veranderen?

## Besluitrichting

> **Ja, waarschijnlijk wel — als Roger zonder Marduk zelfstandig en soepel moet kunnen publiceren.**

De huidige productieomgeving is gebaseerd op:

- statische export;
- lokale build;
- handmatige upload van `out/` naar Cloud86/Plesk.

Dat model werkt goed voor een stabiele campagnesite, maar niet voor door Roger frequent gepubliceerde dagboekcontent.

## Waarom static export alleen onvoldoende is

Bij pure static export geldt:

- nieuwe CMS-content is niet automatisch zichtbaar zonder nieuwe build/deploy;
- Marduk blijft dan alsnog onderdeel van de publicatieketen;
- of er moet een extra CI/CD-route naar Plesk worden gebouwd en onderhouden.

Dat staat haaks op het hoofddoel:

> **minimale structurele beheerlast voor Marduk.**

---

# 4.2 Aanbevolen publicatiemodel

## Voorkeursrichting

- **CMS:** Sanity
- **Frontend:** bestaande Next.js-site doorontwikkelen
- **Hosting/publicatie:** een Next.js-vriendelijke omgeving met on-demand revalidation / dynamic content support

Praktisch betekent dit dat het domein kan blijven bestaan, maar de hosting-/deploylogica mogelijk verschuift van handmatige Plesk static upload naar een platform waar CMS-updates automatisch op de live site verschijnen.

## Belangrijke nuance

Dit document besluit nog niet onomkeerbaar over de concrete eindhosting. Het neemt wel het strategische besluit dat:

> **de huidige statische handmatige publicatieflow niet de voorkeursroute is voor Rogers zelfbeheer.**

De eerstvolgende technische architectuurfase moet daarom exact bepalen:

- welke hostingroute het beste past;
- hoe bestaande live site wordt gemigreerd zonder verlies;
- hoe publishing betrouwbaar en betaalbaar blijft.

---

# 5. Contentstructuur binnen `Media & Updates`

# 5.1 Definitieve redactionele indeling

`Media & Updates` wordt de centrale actualiteitenhub met drie contenttypes:

## 1. Dagboek van Roger

Voor:

- persoonlijke reflecties;
- trainingservaringen;
- voorbereiding;
- tegenslagen;
- kleine mijlpalen;
- updates in Rogers eigen stem.

## 2. Campagne-update

Voor:

- steunacties;
- sponsorontwikkelingen;
- herinneringsactie-nieuws;
- donatiemijlpalen als zij feitelijk en actueel zijn;
- logistieke of publieke campagneontwikkelingen.

## 3. Media

Voor:

- RTV Parkstad;
- interviews;
- artikelen;
- persmomenten;
- externe video/audio/verwijzingen.

---

# 5.2 Homepage-teaser

## Besluitrichting

De homepage krijgt **optioneel** een compacte latest-content module, maar geen volledige diary feed.

### Aanbevolen vorm

- één primaire nieuwste of uitgelichte update;
- eventueel een tweede kleine ondersteunende kaart;
- CTA: **Bekijk alle updates** of **Lees meer in Media & Updates**.

### Selectielogica

Niet noodzakelijk automatisch “altijd de nieuwste”. Het CMS moet daarom een veld ondersteunen waarmee Marduk of Roger kan kiezen:

- `showOnHome: true/false`;
- of `featured: true/false`.

---

# 6. Aanbevolen CMS-velden

# 6.1 Minimale editorinterface voor Roger

Roger moet in de editor minimaal kunnen invullen:

| Veld | Functie |
|---|---|
| **Titel** | Publieke kop van de update |
| **Slug** | URL-pad, automatisch gegenereerd maar aanpasbaar |
| **Publicatiedatum** | Volgorde en archivering |
| **Categorie/type** | Dagboek / Campagne-update / Media |
| **Korte intro / excerpt** | Overzichtscard en metadata |
| **Body** | Volledige tekst |
| **Afbeelding** | Optioneel hoofdbeeld |
| **Alt-tekst** | Toegankelijkheid |
| **Featured** | Uitgelichte plaatsing binnen Media & Updates |
| **Show on homepage** | Optionele compacte homepage teaser |
| **Publicatiestatus** | Draft / Published indien gewenst |

## 6.2 Extra velden voor media-items

Voor type **Media** zijn extra velden wenselijk:

| Veld | Functie |
|---|---|
| **Externe URL** | Video, interview of artikel |
| **CTA-label** | Bijvoorbeeld “Bekijk interview” |
| **Media type** | Video / artikel / audio / extern bericht |
| **Bronnaam** | RTV Parkstad of andere partij |

## 6.3 Interne beheervelden

Niet zichtbaar op de site, maar nuttig in het CMS:

| Veld | Functie |
|---|---|
| **Source note** | Bijvoorbeeld “gebaseerd op Content-Manager-PDF” |
| **Legacy imported** | Markeert historische geïmporteerde content |
| **Original date source** | Voor teruggeplaatste oudere updates |

---

# 7. Wat wel en niet in CMS thuishoort

# 7.1 Wel in CMS

- nieuwe dagboekposts;
- nieuwe trainingsupdates;
- nieuwe campagnemomenten;
- toekomstige media-items;
- optioneel bestaande updates na migratie.

# 7.2 Niet in CMS

- kernpagina’s;
- productprijzen;
- herinneringsactie-prijzen;
- sponsorlogica;
- contactconfiguratie;
- donatie-URL;
- projectbrede CTA’s;
- de structurele verhaallijn van `/mijn-verhaal`.

**Reden:** Deze informatie is inhoudelijk stabieler, strategischer en gevoeliger voor foutieve wijziging dan reguliere updates.

---

# 8. Migratiestrategie voor bestaande updates

## 8.1 Niet twee systemen naast elkaar laten bestaan

De site heeft nu al een bestaande updatearchitectuur. Zodra CMS-content live wordt, moet worden voorkomen dat:

- oude updates in Markdown blijven leven;
- nieuwe updates in CMS verschijnen;
- dezelfde pagina twee backendbronnen kent zonder noodzaak.

## 8.2 Aanbevolen richting

> **Migreer bestaande relevante updates gefaseerd naar het CMS, en maak CMS uiteindelijk de primaire bron voor alle toekomstige actualiteitencontent.**

## 8.3 Prioriteit bij migratie

1. RTV Parkstad media-item;
2. herinneringsupdate;
3. belangrijkste trainingsupdate;
4. overige historische campagne-updates;
5. eventuele nieuw toegevoegde PDF-backfillposts.

---

# 9. Effect op Phase 14 — Dynamic Donation Progress

# 9.1 Waarom Phase 14 opnieuw moet worden gepland

De dynamische donatiestand is eerder geparkeerd omdat de site statisch werd geëxporteerd en betrouwbaarheid belangrijker was dan snelheid van implementatie.

Als de site nu:

- een dynamischer publicatiemodel krijgt;
- CMS-content live uit een externe bron haalt;
- mogelijk op een Next.js-host draait met server/revalidationmogelijkheden;

verandert de technische speelruimte voor Phase 14.

## 9.2 Nieuwe fasevraag voor Phase 14

De herplande Phase 14 moet straks opnieuw vaststellen:

1. **Is de officiële donatiestand betrouwbaar en technisch verantwoord op te halen?**
2. **Welke bron is toegestaan en stabiel?**
3. **Wordt de stand server-side opgehaald, periodiek geüpdatet of handmatig bevestigd?**
4. **Hoe blijft de fallback betrouwbaar als ophalen faalt?**
5. **Hoe verhoudt dit zich tot de nieuwe hostingarchitectuur?**

## 9.3 Besluit

> **Phase 14 wordt pas herpland nadat CMS- en hostingarchitectuur zijn vastgesteld.**

---

# 10. Verwachte impact op toekomstige buildfases

Na goedkeuring van dit besluitdocument hoort de volgende buildvoorbereiding zich te concentreren op:

1. CMS/hosting feasibility & architecture;
2. contentmodel en Sanity-schema;
3. migratieplan huidige updates;
4. rendering van CMS-content in `Media & Updates`;
5. optionele homepage teaser;
6. publicatieproces voor Roger;
7. daarna pas SEO/metadata en Phase 14 herplanning.

---

# 11. Open beslispunten

Na dit document blijven nog enkele concrete keuzes open:

1. **Definitieve hostingroute:** Vercel-achtige Next.js hosting of een andere technisch gelijkwaardige route.
2. **CMS-eindkeuze bevestigen:** Sanity is aanbevolen, maar formele definitieve keuze kan nog door Marduk worden vastgesteld.
3. **Draft-status:** wil Roger concepten bewaren of direct publiceren? Strategisch is draft nuttig, maar niet strikt vereist.
4. **Migratievolgorde:** direct alle bestaande updates over of gefaseerd tijdens implementatie.
5. **Homepage teaser:** wel direct meenemen in eerste CMS-buildfase of pas daarna.

---

# 12. Samenvattende strategische conclusie

Rogers wens voor een zelf te beheren dagboek verandert de site van een hoofdzakelijk statische campagnesite naar een **semi-redactioneel campagneplatform**. De juiste oplossing is niet een sitewide CMS, maar een **strak begrensd headless CMS voor Dagboek & Updates**.

De meest passende richting is:

> **Sanity CMS + een Next.js publicatieomgeving die zelfstandig publiceren zonder handmatige Marduk-deploys mogelijk maakt.**

Daarmee kan `Media & Updates` uitgroeien tot een echte actualiteitenhub, blijft de homepage scherp en conversiegericht, en ontstaat een veel betere basis om later Phase 14 — Dynamic Donation Progress opnieuw te ontwerpen binnen een technisch volwassenere architectuur.
