# CMS & Hosting Implementation Roadmap v1.0  
## Roger-alpe-dhuzes.nl — Van goedgekeurde architectuur naar gecontroleerde uitvoering

**Documentstatus:** Concept ter formele vaststelling  
**Versie:** v1.0  
**Project:** `roger-alpe-dhuzes.nl`  
**Documenttype:** Operationele implementatieroadmap  
**Leidende voorgangers:**  
- Post-Launch Continuation & Completion Plan v1.0  
- Content Integration Review v1.0  
- CMS & Content Operations Decision v1.0  
- CMS & Publishing Architecture Blueprint v1.0  

---

# 1. Doel van deze roadmap

Deze roadmap vertaalt de goedgekeurde CMS- en publicatiearchitectuur naar een **concrete uitvoeringsvolgorde** voor de volgende projectfase.

Het document bepaalt:

1. welke bouwfases nu logisch volgen;
2. hoe Sanity wordt ingericht;
3. hoe de website van de huidige Cloud86/Plesk static-export situatie naar een beheersbare Next.js-publicatieomgeving beweegt;
4. hoe bestaande updates en historische PDF-content worden gemigreerd;
5. wanneer en hoe Roger zelf gaat publiceren;
6. wanneer homepage-teaser, contentpolish, SEO/metadata en Phase 14 opnieuw aan bod komen;
7. welke Codex-prompts hiervoor in welke volgorde nodig zijn;
8. welke go/no-go checks nodig zijn voordat het live domein technisch wordt omgezet.

Deze roadmap is **geen implementatieprompt**, maar vormt de officiële bouwplanning waaruit de concrete Codex-prompts worden afgeleid.

---

# 2. Executive planning conclusion

## 2.1 Hoofdroute

De volgende projectfase verloopt in deze hoofdlijn:

1. **CMS + hostingtransitie technisch voorbereiden**
2. **Sanity CMS en Next.js-integratie bouwen**
3. **Bestaande updatecontent naar Sanity migreren**
4. **Geselecteerde historische PDF-content als diary/update backfill verwerken**
5. **Vercel-publicatieomgeving gereedmaken en gecontroleerd omschakelen**
6. **Roger publiceren leren via een compacte handleiding**
7. **Homepage latest-update teaser toevoegen**
8. **SEO/metadata structureel afronden**
9. **Redactionele upgrade van vaste pagina’s uitvoeren**
10. **Phase 14 — Dynamic Donation Progress opnieuw openen**

## 2.2 Belangrijkste volgordebesluit

De volgorde is bewust:

# **eerst CMS/publicatiebasis, daarna contentverfijning en uitbreidingen**

Niet andersom.

Reden:
- zonder CMS/publicatiebasis blijft nieuw dagboekmateriaal operationeel afhankelijk van Marduk;
- SEO voor update-detailpagina’s moet aansluiten op het definitieve CMS-contentmodel;
- homepage latest-update teaser heeft pas zin wanneer CMS-content betrouwbaar beschikbaar is;
- Phase 14 profiteert van een dynamischer Next.js-publicatiemodel.

---

# 3. Huidige projectstatus als uitgangspunt

## 3.1 Live situatie

De website staat live op:

```text
https://roger-alpe-dhuzes.nl
```

De live site draait momenteel op:
- statische Next.js export;
- upload naar Cloud86/Plesk;
- handmatige publicatie via `out/`-map.

## 3.2 Bestaande technische basis

Aanwezig:
- Next.js app;
- routes voor alle kernpagina’s;
- bestaande updatestructuur;
- update-detailpagina’s onder `/media-updates/[slug]`;
- huidige broncontent via Markdown;
- statische exportconfiguratie.

## 3.3 Waarom deze situatie wordt verlaten voor updates

De huidige static-export werkwijze is goed genoeg voor:
- vaste content;
- incidentele handmatige correcties;
- een launchversie.

De werkwijze is niet passend voor:
- Roger die zelf wil publiceren;
- regelmatige dagboekupdates;
- automatische beschikbaarheid van nieuwe posts;
- structurele onderhoudsreductie voor Marduk.

Daarom is een CMS + Next.js-vriendelijker publicatiemodel de volgende formele stap.

---

# 4. Faseoverzicht op hoofdniveau

| Fase | Naam | Hoofddoel | Resultaat |
|---|---|---|---|
| 1 | CMS & Hosting Readiness | Randvoorwaarden vastzetten | Implementatiebasis zonder live omschakeling |
| 2 | Sanity CMS Foundation | CMS en schema bouwen | Roger-content kan technisch beheerd worden |
| 3 | Next.js CMS Integration | Frontend koppelen aan Sanity | `Media & Updates` leest uit CMS |
| 4 | Existing Updates Migration | Huidige Markdown-updates overzetten | Sanity wordt centrale updatesbron |
| 5 | Historical Diary Backfill | Geselecteerde PDF-content verwerken | Historische dagboek-/updateposts beschikbaar |
| 6 | Vercel Publishing Transition | Nieuwe deployment live gereedmaken | Website kan CMS-content publiceren zonder ZIP-flow |
| 7 | Roger Publishing Operations | Roger praktisch kunnen publiceren | Handleiding + publicatietest |
| 8 | Homepage Latest Update Teaser | Compacte homepagekoppeling | Laatste relevante update zichtbaar op Home |
| 9 | SEO & Metadata Completion | Vindbaarheid en shareability verbeteren | Sitewide + CMS-metadata gereed |
| 10 | Editorial Fixed-Page Upgrade | Vaste pagina’s inhoudelijk verfijnen | `/mijn-verhaal` en microcopy sterker |
| 11 | Phase 14 Reopening | Dynamische donatiestand opnieuw toetsen | Nieuwe feasibility/buildbeslissing |

---

# 5. Fase 1 — CMS & Hosting Readiness

## 5.1 Doel

Voordat Codex CMS-code bouwt, moeten de operationele en technische uitgangspunten helder staan.

## 5.2 Besluiten die deze fase moet bevestigen

1. **Sanity-project aanmaken**
   - projectnaam;
   - datasetnaam;
   - regio/defaultinstelling;
   - toegangsbeheer.

2. **Vercel-route bevestigen**
   - nieuwe hostingomgeving voor de Next.js-app;
   - projectkoppeling via Git repository;
   - domein pas later omschakelen.

3. **Cloud86-rol bepalen**
   - huidige site blijft tijdelijk live;
   - Cloud86/Plesk wordt niet meteen beëindigd;
   - DNS-transitie pas na go/no-go.

4. **Repository readiness**
   - huidige repo in GitHub of andere remote-hosting brengen als dat nog niet gebeurd is;
   - deploymentbranches of `main/master`-strategie bevestigen.

5. **Contentmigration scope bevestigen**
   - huidige updateposts volledig migreren;
   - geen permanente dubbele bron Markdown + CMS.

## 5.3 Output van deze fase

Een korte projectstatus vóór implementatie:

- Sanity-account/project aanwezig;
- Vercel-account/projectrichting bevestigd;
- Git remote beschikbaar;
- technisch implementatiespoor vrijgemaakt.

## 5.4 Geen code-output nodig?
Deze fase is deels uitvoerend buiten de code.  
Codex hoeft hier niet per se iets te bouwen, tenzij een voorbereidende repository-/configcheck gewenst is.

---

# 6. Fase 2 — Sanity CMS Foundation

## 6.1 Doel

Een smalle, bruikbare CMS-basis bouwen voor Rogers updates.

## 6.2 Te bouwen onderdelen

### 6.2.1 Sanity Studio integratie
- Sanity configureren in of naast de bestaande codebase;
- Studio-projectstructuur inrichten;
- datasetkoppeling;
- benodigde CLI/configbestanden.

### 6.2.2 Documenttype `updateEntry`
Het leidende contenttype wordt:

```text
updateEntry
```

voor:
- Dagboek;
- Campagne-update;
- Media-aandacht.

### 6.2.3 Velden
Minimaal:

- `title`
- `slug`
- `category`
- `excerpt`
- `body`
- `contentDate` / `eventDate`
- `publishedAt`
- `mainImage`
- `mainImageAlt`
- `featured`
- `showOnHome`
- `externalUrl`
- `externalLabel`
- `videoUrl`
- `sourceContext`
- `seoTitle`
- `seoDescription`
- `socialImage`

## 6.3 Categorieën
Waarden:
- `diary`
- `campaign`
- `media`

## 6.4 Verplichte validaties
- titel verplicht;
- slug verplicht en uniek;
- categorie verplicht;
- excerpt verplicht;
- body verplicht;
- `contentDate` verplicht;
- `publishedAt` verplicht voor live-publicatie;
- afbeelding-alt verplicht wanneer afbeelding aanwezig is.

---

# 7. Cruciale detailregel — `publishedAt` bij drafts en publicatie

Deze meeneemcorrectie is formeel verplicht in de roadmap.

## 7.1 Probleemstelling

Sanity kent drafts en published documents.  
Het project heeft daarnaast een eigen redactioneel veld:

```text
publishedAt
```

Dat veld mag niet vaag of willekeurig worden behandeld.

## 7.2 Functionele definitie

### `publishedAt`
Betekent in dit project:

> **de datum/tijd waarop een bericht bedoeld is of feitelijk wordt beschouwd als publiek gepubliceerd op de website.**

Het is **geen** automatische “laatst bewerkt”-datum.

## 7.3 Gewenst gedrag per scenario

### Scenario A — Nieuw toekomstig bericht van Roger
1. Roger maakt een draft;
2. `publishedAt` mag in de draft leeg zijn of vooraf handmatig worden ingevuld;
3. bij publicatie moet het systeem één van deze twee consistente routes hanteren:
   - **voorkeursroute:** `publishedAt` is verplicht vóór Publish en wordt door Roger of workflow ingevuld;
   - **alternatieve geautomatiseerde route:** `publishedAt` wordt bij eerste publicatie automatisch gezet indien leeg.

### Roadmapvoorkeur
# **Voorkeur: automatisch invullen bij eerste publicatie als leeg, maar handmatige override toelaten voor backfill of geplande publicatie.**

Waarom:
- Roger hoeft minder te beheren;
- historische backfill blijft mogelijk;
- migratie blijft controleerbaar.

### Scenario B — Bestaand gepubliceerd bericht later redigeren
- `publishedAt` blijft gelijk;
- latere tekstcorrecties mogen `publishedAt` niet opnieuw zetten;
- eventuele wijzigingsdatum kan komen uit Sanity’s technische `_updatedAt` of een apart later te overwegen `updatedAt`-presentatieveld, maar dit is niet nodig voor de eerste CMS-fase.

### Scenario C — Historische backfillpost
Voor posts die later worden toegevoegd maar over een oudere gebeurtenis gaan:

```text
contentDate = datum gebeurtenis
publishedAt = feitelijke datum websitepublicatie, of bewuste publicatiedatum van de backfill
```

Voorbeeld:

```text
contentDate: 2026-01-09
publishedAt: 2026-06-02
```

### Scenario D — Gemigreerde bestaande update
Bij overname van bestaande live updates:
- `publishedAt` wordt gebaseerd op de al eerder gehanteerde publicatiedatum of de huidige update-datum uit de bestaande content;
- `contentDate` wordt gelijk gezet aan de oorspronkelijke inhouds-/eventdatum als die bekend is;
- als oude content geen onderscheid maakt, wordt dit per item expliciet beoordeeld.

## 7.4 Implementatiebesluit dat later technisch moet worden uitgewerkt

De volgende bouwfase moet beslissen of `publishedAt`:
1. via Sanity schema + custom action automatisch gezet wordt;
2. via document-initial-value/template wordt ingevuld;
3. via document validation verplicht wordt vóór publiceren.

### Roadmapadvies
De **eerste uitvoerprompt** moet dit niet laten zweven, maar expliciet laten kiezen en implementeren.

---

# 8. Fase 3 — Next.js CMS Integration

## 8.1 Doel

De website koppelen aan Sanity zodat actuele content op de live site kan verschijnen.

## 8.2 Te bouwen onderdelen

### 8.2.1 Sanity clientlaag
Te verwachten:
- read client;
- server-side queryhelpers;
- typed queryresultaten.

### 8.2.2 CMS-queryset
Minimaal:
- alle gepubliceerde updates;
- updates per categorie;
- featured updates;
- show-on-home updates;
- update op slug;
- update slugs voor routeopbouw indien nodig.

### 8.2.3 Route-integratie
Aanpassen:
- `/media-updates`;
- `/media-updates/[slug]`.

Doel:
- data niet langer uit lokale Markdown lezen;
- Sanity wordt de leidende contentbron.

## 8.3 Publicatie-/cachemodel

De site moet nieuwe content kunnen tonen zonder handmatige ZIP-upload.

Voor de toekomstige dynamische hostingroute is een model nodig met:
- cached rendering;
- webhook-gebaseerde revalidation;
- gecontroleerde vernieuwing na publish/update/delete.

## 8.4 Revalidation-koppeling

Sanity moet via webhook de website kunnen informeren over contentwijzigingen.  
De Next.js-site moet vervolgens relevante content verversen.

Te herijken paden/caches:
- `/media-updates`;
- `/media-updates/[slug]`;
- homepage, alleen wanneer latest-update teaser al bestaat;
- sitemap, zodra CMS-routes in sitemap zijn opgenomen.

---

# 9. Fase 4 — Migratie van bestaande updates

## 9.1 Doel

De huidige updates uit de repository migreren naar Sanity, zodat er nog maar één operationele bron voor actualiteitencontent bestaat.

## 9.2 Bronnen

Huidige bron:

```text
content/updates/
```

## 9.3 Migratie-eisen

Per item vastleggen:
- oorspronkelijke titel;
- slug;
- bestaande datum;
- gewenste `category`;
- `contentDate`;
- `publishedAt`;
- body;
- excerpt;
- afbeelding;
- featuredstatus;
- media/external fields waar relevant.

## 9.4 Slugs behouden
De publieke URL’s moeten zo veel mogelijk gelijk blijven:

```text
/media-updates/[slug]
```

Waarom:
- linkcontinuïteit;
- geen onnodige redirects;
- behoud van bestaande campagneverwijzingen.

## 9.5 Migratiemodel

Aanbevolen:
- eerst contentmappingtabel;
- dan Sanity-import;
- dan frontendcontrole;
- daarna verwijdering of deactivering van Markdownbron.

## 9.6 Go/no-go
Markdown mag pas als operationele bron verdwijnen nadat:
- alle bestaande updates zichtbaar zijn;
- detailroutes werken;
- volgorde en categorieën kloppen;
- slugs identiek zijn;
- images correct renderen.

---

# 10. Fase 5 — Historische PDF-content / Diary Backfill

## 10.1 Doel

Selectief waardevolle inhoud uit de contentmanager-PDF omzetten naar:
- historische dagboekposts;
- campagne-updates;
- aanvullend bronmateriaal voor later redactioneel werk.

## 10.2 Strikte scheiding van werkzaamheden

Deze fase betreft:

# **CMS-contentmigratie / diary backfill**

en is nadrukkelijk **niet hetzelfde** als:

# **redactionele upgrade van vaste pagina’s**

Die laatste komt pas later.

## 10.3 Backfillselectie

Op basis van de goedgekeurde Content Integration Review worden kandidaten eerst geselecteerd en daarna pas gepubliceerd.

Per kandidaat bepalen:
- type: diary/campaign/media;
- `contentDate`;
- `publishedAt`;
- titel;
- excerpt;
- body;
- eventuele beeldkoppeling;
- relevantie voor publiek.

## 10.4 Geen automatische PDF-dump
De PDF wordt niet massaal omgezet in posts.  
Alleen content die daadwerkelijk:
- aanvullend is;
- bezoekerswaarde heeft;
- inhoudelijk past;
wordt gebruikt.

---

# 11. Fase 6 — Vercel Publishing Transition

## 11.1 Doel

De site operationeel verplaatsen naar een hostingmodel dat:
- CMS-content aankan;
- revalidation ondersteunt;
- Marduk ontlast;
- beter aansluit op Next.js.

## 11.2 Stappen

1. Vercel-project koppelen aan repository;
2. omgevingvariabelen instellen;
3. Sanity-config en tokens toevoegen;
4. preview deployment controleren;
5. productie-deployment op Vercel valideren;
6. custom domain voorbereiden;
7. DNS-omschakeling plannen;
8. live domein pas switchen na formele go.

## 11.3 Domein/DNS go/no-go

### Go-criteria vóór domeinomschakeling
- previewsite visueel volledig functioneel;
- alle vaste pagina’s renderen;
- `Media & Updates` toont CMS-content;
- detailroutes werken;
- mobiele navigatie blijft goed;
- donatielinks blijven goed;
- contactgegevens kloppen;
- social/media-assets werken;
- no critical console/runtime errors;
- CMS-publish → website-update werkt aantoonbaar;
- sitemap/SEO indien dan al meegenomen: geen blocker.

### No-go situaties
Niet omschakelen als:
- CMS-posts pas zichtbaar worden na handmatige redeploy;
- slugs of detailroutes fout gaan;
- images in CMS-content niet goed laden;
- mobile nav regressie optreedt;
- domein niet eerst op preview/productie goed is getest;
- oude site nog nodig is als fallback zonder plan.

## 11.4 DNS-operatie
Pas nadat go-criteria zijn gehaald:
- domein koppelen in Vercel;
- benodigde DNS-records aanpassen;
- Cloud86-hosting tijdelijk laten bestaan als fallback tot validatie rond is;
- live controleren na DNS-propagatie.

---

# 12. Fase 7 — Publicatiehandleiding voor Roger

## 12.1 Doel

Roger moet zelfstandig en zonder technische uitlegmisère kunnen publiceren.

## 12.2 Vorm

Een compact document:

# **Roger CMS Publicatiehandleiding v1.0**

## 12.3 Minimale inhoud

1. Inloggen in Sanity Studio;
2. nieuw dagboek-/updatebericht maken;
3. categorie kiezen:
   - Dagboek;
   - Campagne;
   - Media;
4. titel en samenvatting invullen;
5. inhoudsdatum/eventDate invullen;
6. publicatiedatum begrijpen;
7. afbeelding uploaden;
8. alttekst invullen;
9. uitgelicht / toon op home begrijpen;
10. publiceren;
11. na publicatie website controleren;
12. bestaand bericht corrigeren.

## 12.4 Bewust géén uitgebreide redactiestijlregels
Roger is zelf verantwoordelijk voor:
- tekstkwaliteit;
- taal;
- afweging wel/niet publiceren.

Er komt geen redactionele approval workflow.

---

# 13. Fase 8 — Homepage Latest Update Teaser

## 13.1 Timing

Deze fase komt **pas nadat**:
- CMS live technisch functioneert;
- de query `showOnHome` werkt;
- er voldoende kwalitatieve updatecontent aanwezig is.

## 13.2 Doel

Home krijgt een compacte, strategisch beperkte actualiteitsschakel:

```text
Laatste update van Roger
```

of:

```text
Uit Rogers dagboek
```

## 13.3 Inhoud
- titel;
- korte excerpt;
- content-/eventdatum of publicatiedatum, nader bepalen;
- CTA naar detailpagina;
- mogelijk afbeelding;
- CTA naar alle Media & Updates.

## 13.4 Beslisregel
De homepage-teaser wordt niet automatisch een feed.  
`showOnHome` bepaalt bewust welke post prominent is.

---

# 14. Fase 9 — SEO & Metadata Completion

## 14.1 Timingbesluit

SEO/metadata wordt **na de CMS-basiskoppeling** structureel afgerond, omdat:
- update-detailpagina’s dan CMS-gedreven zijn;
- metadatafields in Sanity dan benut kunnen worden;
- sitemap CMS-routes correct kan meenemen.

## 14.2 Uitzondering
Als er vooraf een kleine metadata-basis ontbreekt die de huidige live site echt schaadt, kan een mini-fase voor vaste pagina’s eerder.  
Maar de formele roadmaproute is:

# **eerst CMS/publicatiebasis, daarna complete SEO/metadata-track**

## 14.3 Scope van de SEO-fase

### Vaste pagina’s
- unieke titles;
- meta descriptions;
- canonical URLs;
- Open Graph defaults;
- social preview;
- robots;
- sitemap basis.

### CMS-updatepagina’s
- `generateMetadata` op basis van:
  - `seoTitle`;
  - `seoDescription`;
  - fallback `title` en `excerpt`;
  - socialImage/mainImage fallback;
- sitemapverrijking met CMS-slugs;
- canonical routes.

---

# 15. Fase 10 — Redactionele upgrade vaste pagina’s

## 15.1 Verplichte positionering ten opzichte van SEO/metadata

Deze roadmap neemt expliciet mee dat de redactionele upgrade van vaste pagina’s logisch moet worden gepositioneerd ten opzichte van SEO/metadata.

### Roadmapbesluit
# **De redactionele upgrade van vaste pagina’s komt ná de technische SEO/metadata-fundering, maar vóór eventuele finale SEO-copy verfijning.**

Praktisch:

1. technische SEO-/metadata-infrastructuur neerzetten;
2. vaste pagina’s redactioneel verbeteren, vooral `/mijn-verhaal`;
3. waar relevant titles/descriptions finetunen op de definitieve verbeterde copy.

## 15.2 Waarom deze volgorde

- de metadata-architectuur hoeft niet te wachten op alle copyverbeteringen;
- maar de definitieve formulering van titles/descriptions kan slimmer worden afgestemd nadat vaste pagina’s inhoudelijk scherper zijn;
- dit voorkomt dat SEO-copy twee keer volledig wordt herschreven.

## 15.3 Inhoudelijke scope vaste-pagina-upgrade

Minimaal voor:

### `/mijn-verhaal`
- moederband verdiepen;
- Alpe d’HuZes-traditie duidelijker verwerken;
- inschrijfmoment sterker neerzetten;
- meer Rogers eigen stem;
- huidige structuur grotendeels behouden.

### Eventueel aanvullend
- kleine microcopyverbeteringen elders;
- minder statische sectielabels;
- CTA-omschrijvingen menselijker;
- geen redesign, geen inhoudelijke koerswijziging.

---

# 16. Fase 11 — Phase 14 Dynamic Donation Progress opnieuw openen

## 16.1 Heropenmoment

Phase 14 wordt formeel pas opnieuw opgepakt wanneer:

1. CMS-basis werkt;
2. nieuwe hosting/publicatiemodel gekozen en stabiel is;
3. website niet meer afhankelijk is van pure handmatige static-exportflow;
4. de live contentarchitectuur betrouwbaar draait.

## 16.2 Nieuwe vraagstelling bij heropening

Niet meer alleen:
> “Kunnen we de stand ergens scrapen?”

Maar breder:
1. Is er een stabiele, toegestane en technisch betrouwbare bron?
2. Past live of semi-live ophalen binnen het nieuwe hostingmodel?
3. Is caching/revalidation wenselijk?
4. Wat is de fallback als bron wegvalt?
5. Hoe voorkomen we foutieve of verouderde donatiestanden?

## 16.3 Mogelijke uitkomsten
- automatisch dynamische donatiestand bouwen;
- handmatige stand in CMS of config;
- bewust geen dynamische stand tonen.

Geen van deze drie uitkomsten wordt nu al geforceerd.

---

# 17. Concrete Codex-promptvolgorde

Onderstaande promptreeks vormt de aanbevolen implementatievolgorde. Titels kunnen later nog licht worden aangescherpt, maar de inhoudelijke sequentie is leidend.

---

## Codex Prompt 15 — CMS & Hosting Readiness Audit
**Doel:** huidige repo analyseren tegen de goedgekeurde CMS/Vercel-roadmap; static-export aannames identificeren; exacte technische impact vooraf vastleggen.  
**Output:** auditrapport, geen of minimale codewijziging.

---

## Codex Prompt 16 — Sanity CMS Foundation & UpdateEntry Schema
**Doel:** Sanity-projectstructuur en `updateEntry`-schema implementeren, inclusief categorieën, datumvelden, media- en SEO-velden, validaties en expliciete `publishedAt`-strategie.  
**Output:** werkende Studio-configuratie en schema.

---

## Codex Prompt 17 — Sanity Data Access Layer & Media Updates Query Architecture
**Doel:** Sanity client, queryhelpers en typed datalaag bouwen.  
**Output:** frontend kan technisch CMS-data ophalen zonder pagina-integratie volledig af te ronden.

---

## Codex Prompt 18 — Media & Updates CMS Integration
**Doel:** `/media-updates` en `/media-updates/[slug]` op Sanity-content zetten.  
**Output:** CMS-gedreven overzicht en detailrouting.

---

## Codex Prompt 19 — Sanity Webhook & Next.js Revalidation Pipeline
**Doel:** publicatie-updates na Sanity publish zichtbaar maken via webhook/revalidation.  
**Output:** automatische of semi-automatische contentrefresh zonder handmatige ZIP-deploy.

---

## Codex Prompt 20 — Existing Update Migration Plan & Import
**Doel:** huidige Markdownupdates mappen, migreren en controleren in Sanity.  
**Output:** bestaande actualiteitencontent leeft in CMS; slugs blijven behouden.

---

## Codex Prompt 21 — Historical Diary Backfill from Content PDF
**Doel:** geselecteerde historische PDF-content als CMS-posts voorbereiden/importeren volgens Content Integration Review.  
**Output:** eerste historische diary/update backfill in de nieuwe actualiteitenhub.

---

## Codex Prompt 22 — Vercel Deployment Transition Preparation
**Doel:** project klaarzetten voor Vercel; environment variables en deploymentmodel valideren.  
**Output:** productieklare Vercel-preview zonder domeinomschakeling.

---

## Codex Prompt 23 — Production Domain Go/No-Go & DNS Migration Checklist
**Doel:** domeinomschakeling technisch controleren en checklist opleveren.  
**Output:** formeel beslismoment vóór live switch naar Vercel.

---

## Codex Prompt 24 — Roger CMS Publishing Guide & Operational Acceptance
**Doel:** korte handleiding schrijven en publiceren/testen door de ogen van Roger.  
**Output:** Roger kan praktisch zelf een post aanmaken/publiceren.

---

## Codex Prompt 25 — Homepage Latest Update Teaser
**Doel:** compacte teaser op home toevoegen op basis van `showOnHome`.  
**Output:** gecontroleerde actualiteitskoppeling zonder homepage als feed te veranderen.

---

## Codex Prompt 26 — SEO & Metadata Completion
**Doel:** vaste pagina’s + CMS-updatepagina’s voorzien van consistente metadata, sitemap, canonicals en social previews.  
**Output:** volwaardige SEO-/shareabilitybasis.

---

## Codex Prompt 27 — Editorial Upgrade `/mijn-verhaal` & Selected Microcopy Polish
**Doel:** vaste verhaallijn inhoudelijk verfijnen op basis van Content Integration Review, plus beperkte microcopyverbeteringen.  
**Output:** sterkere vaste content zonder architectuurwijziging.

---

## Codex Prompt 28 — Phase 14 Reopening: Dynamic Donation Progress Feasibility Reassessment
**Doel:** dynamische donatiestand opnieuw en breder beoordelen in de nieuwe architectuur.  
**Output:** formeel besluit: bouwen, beperkt bouwen of niet bouwen.

---

# 18. Go/no-go-momenten in de planning

## Go/No-Go 1 — Sanity schema akkoord
Na Prompt 16:
- klopt het editorproces?
- klopt `publishedAt`-strategie?
- klopt contentmodel?
- geen overcomplexiteit?

## Go/No-Go 2 — Media & Updates renderen uit CMS
Na Prompt 18:
- overzicht en detailpagina’s goed?
- categorieën logisch?
- slugs intact?
- basis styling intact?

## Go/No-Go 3 — Publicatie zonder handmatige deploy
Na Prompt 19:
- wijziging in Sanity leidt aantoonbaar tot website-update?
- geen Marduk-deploy nodig voor iedere post?

## Go/No-Go 4 — Contentmigratie betrouwbaar
Na Prompt 20 en 21:
- bestaande updates correct;
- backfill geloofwaardig;
- datumvelden logisch;
- geen feitelijke conflicten.

## Go/No-Go 5 — Vercel productieklaar
Na Prompt 22:
- site volledig werkend op preview/prod;
- environment variables correct;
- geen belangrijke regressies.

## Go/No-Go 6 — Domein switch
Na Prompt 23:
- pas dan DNS/live switch.

---

# 19. Risico’s en mitigaties

| Risico | Impact | Mitigatie |
|---|---|---|
| `publishedAt` onduidelijk bij drafts | Verkeerde sortering/publicatielogica | Strategie nu expliciet vastgelegd; implementatie verplicht kiezen |
| CMS te breed opgezet | Roger raakt de weg kwijt | Scope beperken tot updates/dagboek/media |
| Hostingtransitie te vroeg | Live regressies | Vercel eerst preview volledig valideren |
| Markdown en CMS blijven te lang naast elkaar | Dubbele bron / inconsistentie | Eén gecontroleerde migratiefase, daarna CMS leidend |
| Backfill verwart tijdlijn | Bezoekers zien oude gebeurtenis als nieuwe gebeurtenis | `contentDate` en `publishedAt` tonen/hanteren volgens vaste regel |
| SEO te vroeg vóór contentmodel | Later dubbel werk | Complete SEO pas na CMS-basis |
| Editorial fixed-page upgrade vermengd met CMS-migratie | Scopevervuiling | Roadmap houdt trajecten expliciet gescheiden |
| Phase 14 impulsief heropenen | Technisch onzeker werk | Pas na CMS/hostingstabiliteit |

---

# 20. Aanbevolen planning in projectblokken

## Blok A — Fundament
- Prompt 15 t/m 19
- Resultaat: CMS + publicatiepad technisch werkend

## Blok B — Content
- Prompt 20 t/m 21
- Resultaat: bestaande updates + historische backfill in CMS

## Blok C — Hosting & Operations
- Prompt 22 t/m 24
- Resultaat: Vercel-ready livegang, Roger handleiding, domeinmigratie mogelijk

## Blok D — Publieke verfijning
- Prompt 25 t/m 27
- Resultaat: homepage teaser, SEO/metadata, sterkere vaste content

## Blok E — Geparkeerde innovatie opnieuw openen
- Prompt 28
- Resultaat: formeel nieuw besluit over Dynamic Donation Progress

---

# 21. Aanbevolen directe volgende stap na goedkeuring van deze roadmap

Na formele vaststelling van dit document is de logische eerstvolgende stap:

# **Codex Prompt 15 — CMS & Hosting Readiness Audit**

Die prompt moet:
- de huidige repository tegen deze roadmap spiegelen;
- de impact van het verlaten van static export scherp beoordelen;
- voorbereiden wat nodig is vóór Sanity-implementatie;
- nog niet roekeloos grote veranderingen doorvoeren.

---

# 22. Eindoordeel

Deze roadmap maakt de stap van architectuur naar uitvoering concreet en beheersbaar.

De gekozen volgorde bewaakt drie belangen tegelijk:

1. **Roger krijgt zelfbeheer** over zijn dagboek en updates;
2. **Marduk houdt de onderhoudslast beperkt**;
3. **de bestaande live site blijft beschermd** tegen onnodige of te snelle veranderingen.

De eerstvolgende uitvoeringslijn is daarmee formeel helder:

> CMS-publicatiebasis bouwen → content migreren → hostingtransitie afronden → SEO/content verfijnen → Phase 14 opnieuw openen.
