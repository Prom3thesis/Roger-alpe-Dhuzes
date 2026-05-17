# CMS & Publishing Architecture Blueprint v1.0  
## Roger-alpe-dhuzes.nl — Post-Launch Continuation Track

**Documentstatus:** Concept ter formele vaststelling  
**Versie:** v1.0  
**Project:** `roger-alpe-dhuzes.nl`  
**Documenttype:** Strategische en uitvoeringsgerichte architectuurblueprint  
**Voorgaande leidende documenten:**  
- Post-Launch Continuation & Completion Plan v1.0  
- Content Integration Review v1.0  
- CMS & Content Operations Decision v1.0  

---

# 1. Doel van dit document

Dit document zet de reeds goedgekeurde post-launch besluiten om naar een concrete, uitvoerbare architectuur voor:

1. de definitieve CMS-richting;
2. het gewenste hosting- en publicatiemodel;
3. het contentmodel voor dagboek-, campagne- en media-updates;
4. de migratie van bestaande updates;
5. de koppeling met `Media & Updates`;
6. een optionele homepage-teaser;
7. de gevolgen voor SEO en metadata;
8. de herplanning van Phase 14 — Dynamic Donation Progress;
9. de impact op de bestaande Next.js-site.

Dit document is **geen implementatieprompt** en bevat **geen code-opdracht aan Codex**. Het vormt de blueprint waaruit de volgende concrete bouw- en uitvoeringsfase voortkomt.

---

# 2. Executive architectural conclusion

## 2.1 Kernbesluit

De toekomstige actualiteitenlaag van `roger-alpe-dhuzes.nl` wordt gebouwd rond:

# **Sanity CMS + Next.js-site + Next.js-vriendelijke deployment**

De voorkeursarchitectuur is:

- **Sanity** als headless CMS en editoromgeving voor Roger;
- **Next.js** als bestaande frontendbasis;
- **Vercel** als voorkeursroute voor toekomstig hosting-/publicatiemodel van de website;
- **Cloud86** blijft in beginsel domein-/DNS-context, maar is niet langer de voorkeursomgeving om de contentgedreven Next.js-site handmatig via statische ZIP-uploads te blijven publiceren.

## 2.2 Waarom deze richting

De huidige statische livegang via Cloud86/Plesk was correct voor de launch-MVP.  
Maar Rogers nieuwe, bevestigde behoefte verandert de randvoorwaarden:

- Roger moet **zelf updates publiceren**;
- Marduk moet **niet structureel handmatig bouwen en uploaden**;
- de site moet **nieuwe content automatisch kunnen tonen**;
- `Media & Updates` moet uitgroeien tot een levende actualiteitenhub;
- historische contentbackfill en toekomstige actuele updates moeten naast elkaar kunnen bestaan.

Daarom is een pure static-export workflow met handmatige `out/`-uploads **niet langer de voorkeursarchitectuur** voor de volgende fase.

---

# 3. Reeds vastgestelde projectbesluiten als bindend uitgangspunt

Dit blueprintdocument bouwt voort op reeds goedgekeurde besluiten. Deze worden hier niet opnieuw ter discussie gesteld.

## 3.1 Vaststaande content- en CMS-besluiten

1. Roger wil een **zelfstandig te beheren dagboek-/updatesysteem**.
2. Roger moet **zelf kunnen publiceren**, zonder structurele tussenkomst van Marduk.
3. Het CMS is **niet sitewide**, maar blijft beperkt tot:
   - Dagboek;
   - Updates;
   - Media-/actualiteitscontent binnen dezelfde contenthub.
4. Rogers dagboek hoort onder:
   # **Media & Updates**
5. De homepage wordt **geen dagboekfeed**. Hooguit komt er later een compacte **latest update teaser**.
6. De huidige site blijft inhoudelijk de basis; er is **geen herstart** en geen fundamentele koerswijziging.
7. De nieuwe content-PDF wordt **selectief** geïntegreerd, niet blind gekopieerd.
8. Phase 14 — Dynamic Donation Progress blijft open, maar moet worden **herpland na CMS- en hostingbesluitvorming**.

## 3.2 Verplichte meeneemcorrectie uit de goedkeuringen

Voor historische en gemigreerde content moeten in het CMS-contentmodel expliciet twee tijdsvelden bestaan:

- **`contentDate` / `eventDate`**  
  De datum waarop de gebeurtenis of beschreven update feitelijk plaatsvond.

- **`publishedAt`**  
  De datum waarop de pagina/post publiek op de website is gepubliceerd.

Dit onderscheid is essentieel bij:
- historische backfilled dagboekposts;
- migratie van bestaande posts;
- heldere chronologische sortering;
- eerlijke tijdlijncommunicatie naar bezoekers.

---

# 4. Huidige live situatie en architectuurbasis

## 4.1 Wat live staat

De website is live en bevat onder meer:

- Home;
- `/mijn-verhaal`;
- `/de-tocht`;
- `/doneren`;
- `/herinneringsactie`;
- `/media-updates`;
- `/media-updates/[slug]`;
- `/sponsors-contact`.

De site werkt momenteel als een contentgedreven campagnesite met:
- vaste pagina’s;
- een bestaande updatearchitectuur;
- statisch gegenereerde update-detailpagina’s;
- een handmatige static-export publicatiefase.

## 4.2 Huidige contentarchitectuur

De huidige updatestructuur werkt vanuit lokale Markdownbestanden in:

```text
content/updates/
```

met een typed contentservice in de codebasis en detailroutes onder:

```text
/media-updates/[slug]
```

Deze bestaande structuur is waardevol omdat zij al:
- contenttypes conceptualiseert;
- slugroutes toepast;
- detailpagina’s ondersteunt;
- featured/uitgelichte updates mogelijk maakt.

## 4.3 Waarom de huidige static-export workflow niet meer volstaat

De huidige workflow is:

1. broncode aanpassen;
2. `npm run build`;
3. `out/` genereren;
4. ZIP uploaden naar Plesk;
5. live map handmatig vervangen.

Voor een launch-MVP was dit voldoende.  
Voor Roger-self-publishing is dit niet houdbaar.

### Structureel probleem
Bij elke nieuwe dagboekpost moet anders:
- Roger Marduk benaderen;
- Marduk inhoud toevoegen;
- site opnieuw bouwen;
- export uploaden;
- live deployment handmatig uitvoeren.

Dat is precies de onderhoudslast die nu expliciet vermeden moet worden.

---

# 5. Doelarchitectuur

## 5.1 Hoog-over architectuur

```text
Roger
  ↓
Sanity Studio
  ↓
Sanity Content Lake
  ↓
Next.js website
  ↓
Automatische revalidatie / deployment
  ↓
Live publicatie op roger-alpe-dhuzes.nl
```

## 5.2 Rol van ieder onderdeel

| Onderdeel | Rol |
|---|---|
| Sanity Studio | Editoromgeving waarin Roger posts schrijft en publiceert |
| Sanity Content Lake | Gestructureerde opslag van diary/update/media-content |
| Next.js | Frontend die vaste pagina’s én CMS-content rendert |
| Vercel | Voorkeursplatform voor hosting, previews, deployments en server-side revalidation |
| Cloud86 | Blijft relevant voor domein/DNS-beheer als dat zo wordt ingericht |
| GitHub | Broncodebeheer en deploybron voor de website |

---

# 6. CMS-richting: Sanity als voorkeursroute

## 6.1 Waarom Sanity

Sanity past bij dit project omdat het:

- een editoromgeving biedt zonder dat Roger code hoeft te gebruiken;
- content gestructureerd kan modelleren;
- goed integreert met Next.js;
- rijke tekst ondersteunt via Portable Text;
- media-assets kan beheren;
- flexibel genoeg is voor:
  - dagboek;
  - campagne-updates;
  - media-aandacht;
- niet dwingt tot een volledig sitewide CMS.

## 6.2 Wat Roger in de praktijk nodig heeft

Roger hoeft geen brede beheeromgeving te zien voor de hele site.  
Zijn CMS-ervaring moet worden teruggebracht tot een klein, overzichtelijk redactiegebied:

```text
Content
├── Dagboek / Updates
│   ├── Nieuw bericht
│   ├── Gepubliceerde berichten
│   └── Concepten / drafts
```

Daarbinnen vult hij een bericht in en publiceert hij direct.

## 6.3 Wat bewust buiten CMS blijft

Deze vaste pagina’s blijven voorlopig code-/projectgestuurd:

- Home;
- Mijn verhaal;
- De tocht;
- Doneren;
- Herinneringsactie;
- Sponsors & Contact;
- vaste navigatiestructuur;
- globale brand- en conversion copy.

Dat voorkomt dat het project onnodig verandert in een volledig beheersysteem.

---

# 7. Hosting- en publicatiemodel

## 7.1 Huidige situatie

De site draait live als statische export op Cloud86/Plesk.

Dit blijft functioneel bruikbaar zolang de site vooral statisch is.  
Maar het schuurt met de nieuwe CMS-behoefte.

## 7.2 Voorkeursmodel voor de vervolgfase

# **Vercel als voorkeurs-hosting voor de Next.js-app**

Aanbevolen toekomstige publicatiemodel:

1. broncode staat in GitHub;
2. Vercel deployt automatisch na codewijzigingen;
3. Sanity beheert content;
4. contentwijzigingen worden via webhook/revalidation zichtbaar op de site;
5. custom domain `roger-alpe-dhuzes.nl` wordt aan het Vercel-project gekoppeld;
6. DNS wordt in de bestaande domeincontext aangepast wanneer deze overgang daadwerkelijk wordt uitgevoerd.

## 7.3 Waarom Vercel hier beter past dan handmatige Plesk static export

| Criterium | Huidige Cloud86/Plesk static export | Vercel + CMS |
|---|---:|---:|
| Roger kan zelf publiceren | Nee | Ja |
| Marduk hoeft niet elke keer te deployen | Nee | Ja |
| Nieuwe CMS-post direct of via revalidation zichtbaar | Nee | Ja |
| Next.js featurecompatibiliteit | Beperkt door static export | Sterker |
| Phase 14 later technisch flexibeler | Beperkt | Beter |
| Preview-deploys | Niet ingebouwd | Wel passend |
| Handmatig ZIP-beheer | Nodig | Niet nodig |

## 7.4 Belangrijk: dit is een gecontroleerde hostingtransitie

De site hoeft **niet vandaag** van Cloud86 af.  
De blueprint legt vast dat:

- Cloud86/Plesk de huidige live status blijft totdat de nieuwe publicatiearchitectuur klaar is;
- CMS + nieuwe hosting eerst in een gecontroleerde buildfase worden ontwikkeld en getest;
- pas daarna het domein wordt omgezet.

## 7.5 Alternatieven die bewust niet de voorkeursroute zijn

### A. Cloud86/Plesk behouden en CMS toch integreren
Mogelijk, maar dan is een ingewikkeldere build/deploy-automatisering nodig. Dit vergroot de beheerlast.

### B. Blijven bij Markdown en Marduk als uitgever
Technisch simpel, maar strijdig met het bevestigde besluit dat Roger zelf publiceert.

### C. Volwaardig zwaar CMS-platform voor de hele site
Te breed en niet passend bij de beperkte scope.

---

# 8. Contentarchitectuur onder `Media & Updates`

## 8.1 Centrale actualiteitenhub

De bestaande pagina:

```text
/media-updates
```

blijft de centrale actualiteitenhub.

Daarbinnen komen drie contenttracks:

1. **Dagboek van Roger**
2. **Campagne-updates**
3. **Media-aandacht**

## 8.2 Geen los hoofdmenu-item "Dagboek" in de eerste CMS-fase

De site behoudt voorlopig de bestaande navigatie.  
Het dagboek wordt zichtbaar gemaakt:
- op `Media & Updates`;
- via filters/tabs/secties;
- mogelijk via een compacte homepage-teaser.

Een apart hoofdmenu-item `Dagboek` is pas logisch als:
- Roger zeer frequent publiceert;
- het dagboek zelfstandig een groot publieksdoel krijgt;
- of de actualiteitenhub anders te druk wordt.

Voor nu is dat niet nodig.

## 8.3 Aanbevolen UI-structuur op `/media-updates`

Een logische toekomstige paginaopbouw is:

```text
Media & Updates
├── Hero / intro
├── Uitgelicht item of laatste update
├── Categorie-selectie:
│   ├── Alles
│   ├── Dagboek
│   ├── Campagne
│   └── Media
├── Update-grid / lijst
├── Eventueel compacte timeline / campagneverloop
└── CTA naar doneren of volgen
```

## 8.4 URL-strategie

Bestaande publieke update-URLs blijven onder:

```text
/media-updates/[slug]
```

Dit is gewenst om:
- de huidige routefamilie te behouden;
- migratie simpel te houden;
- SEO-/linkcontinuïteit te bewaken.

Voorbeeld:

```text
/media-updates/training-richting-alpe-dhuzes
/media-updates/roger-bij-rtv-parkstad
/media-updates/nieuwe-stap-in-de-voorbereiding
```

---

# 9. Sanity contentmodel

## 9.1 Hoofddocumenttype

Aanbevolen documenttype:

# `updateEntry`

Dit ene documenttype is voldoende voor:
- dagboek;
- campagne-updates;
- media-aandacht.

De differentiatie gebeurt via een veld `category`.

## 9.2 Veldmodel — verplicht en aanbevolen

| Veld | Type | Verplicht | Doel |
|---|---|---:|---|
| `title` | string | Ja | Titel van de update |
| `slug` | slug | Ja | URL-segment |
| `category` | enum | Ja | `diary`, `campaign`, `media` |
| `excerpt` | text | Ja | Korte teaser voor overzichtspagina |
| `body` | Portable Text | Ja | Volledige inhoud |
| `contentDate` / `eventDate` | datetime/date | Ja | Wanneer het beschreven moment plaatsvond |
| `publishedAt` | datetime | Ja | Wanneer het live gepubliceerd is |
| `mainImage` | image | Nee, maar aanbevolen | Hoofdafbeelding |
| `mainImageAlt` | string | Vereist als afbeelding aanwezig | Toegankelijke alttekst |
| `featured` | boolean | Nee | Uitgelicht op Media & Updates |
| `showOnHome` | boolean | Nee | Mag getoond worden in homepage teaser |
| `externalUrl` | url | Nee | Voor media-aandacht of externe bron |
| `externalLabel` | string | Nee | CTA-label bij externe link |
| `videoUrl` | url | Nee | Voor media/video-items waar relevant |
| `sourceContext` | text / string | Nee | Interne herkomstnotitie bij migratie/backfill |
| `seoTitle` | string | Nee | Optionele SEO override |
| `seoDescription` | text | Nee | Optionele SEO override |
| `socialImage` | image | Nee | Optionele OG/social override |

## 9.3 Verplicht onderscheid: `contentDate` versus `publishedAt`

### `contentDate` / `eventDate`
Dit veld bepaalt de feitelijke inhoudsdatum:
- wanneer vond het trainingmoment plaats?
- wanneer speelde de gebeurtenis?
- op welke datum hoort dit item historisch in de campagne?

### `publishedAt`
Dit veld bepaalt:
- wanneer is het bericht op de site gepubliceerd?
- wanneer komt het item in publieke updatevolgorde?

### Waarom beide nodig zijn
Bij historische backfill kan bijvoorbeeld gelden:

```text
contentDate: 2026-01-09
publishedAt: 2026-06-01
```

Dat betekent:
- het item gaat over 9 januari;
- het is pas op 1 juni toegevoegd aan de website.

Dit voorkomt historische vervalsing of verwarrende tijdlijnen.

## 9.4 Categorieën

### `diary`
Voor:
- persoonlijke updates;
- trainingsbeleving;
- reflecties;
- voortgang;
- kleine mijlpalen;
- terugblikken.

### `campaign`
Voor:
- sponsoracties;
- donatiemijlpalen;
- steunproducten;
- herinneringsactie;
- campagneontwikkelingen.

### `media`
Voor:
- RTV Parkstad;
- interviews;
- externe nieuwsverwijzingen;
- toekomstige persvermeldingen.

## 9.5 Editorervaring in Sanity Studio

De editorinterface moet voor Roger praktisch zijn. Aanbevolen inputvolgorde:

1. Titel
2. Categorie
3. Inhoudsdatum / eventDate
4. Publicatiedatum
5. Korte samenvatting
6. Hoofdafbeelding
7. Alttekst bij afbeelding
8. Berichttekst
9. Uitlichten ja/nee
10. Tonen op homepage ja/nee
11. Externe media-link indien relevant
12. SEO overrides alleen optioneel en liefst onder een ingeklapte sectie

## 9.6 Validatieregels

### Verplicht:
- titel mag niet leeg zijn;
- slug uniek;
- categorie verplicht;
- `publishedAt` verplicht;
- `contentDate` verplicht;
- excerpt verplicht;
- body verplicht;
- alttekst verplicht wanneer `mainImage` aanwezig is.

### Aanbevolen:
- waarschuwing als `showOnHome = true` maar geen goede afbeelding/excerpt aanwezig is;
- waarschuwing als `contentDate` later ligt dan `publishedAt`, tenzij bewust toegestaan;
- waarschuwing als `category = media` maar geen externalUrl/videoUrl is ingevuld.

---

# 10. Migratie van bestaande updates en backfill-content

## 10.1 Bestaande lokale Markdownupdates

De huidige updates in:

```text
content/updates/
```

moeten uiteindelijk worden gemigreerd naar Sanity-documenten.

### Migratieprincipe
- bestaande slugs behouden;
- bestaande titels behouden tenzij er redactioneel goede reden is;
- bestaande excerpts overnemen of licht verbeteren;
- bestaande datumvelden vertalen naar:
  - `contentDate`;
  - `publishedAt`;
- bestaande imagepaths omzetten naar Sanity-assets of zorgvuldig opnieuw koppelen.

## 10.2 Migratievolgorde

### Stap 1 — Inventarisatie
- lijst van bestaande updatebestanden;
- huidige slug;
- huidige categorie;
- huidige datum;
- bestaande afbeelding;
- eventuele featured-status.

### Stap 2 — Mappingschema
Per bestaande update vastleggen:

| Huidig veld | Sanity veld |
|---|---|
| frontmatter title | title |
| slug/filename | slug |
| category | category |
| date | contentDate en/of publishedAt, na interpretatie |
| excerpt | excerpt |
| markdown body | Portable Text body |
| image | mainImage |
| featured | featured |

### Stap 3 — Migratie en controle
- import naar Sanity;
- rendercontrole op detailpagina;
- lijstcontrole op `/media-updates`;
- slugcontrole;
- contentvolgorde controleren.

## 10.3 Historische PDF-content / diary backfill

De goedgekeurde Content Integration Review heeft vastgesteld dat delen van de nieuwe PDF kunnen worden ingezet als:
- historische dagboekpost;
- campagne-update;
- bronmateriaal voor editorial upgrades.

### Aanbevolen verwerking
Niet alles automatisch publiceren.  
Wel een selectie maken van bruikbare kandidaten, bijvoorbeeld:
- concrete trainingsmomenten;
- herkenbare persoonlijke reflecties;
- belangrijke ondersteuningsmomenten;
- belangrijke campagneverloopmomenten.

### Backfillregel
Voor historische posts:
- `contentDate` = historische gebeurtenisdatum;
- `publishedAt` = datum waarop de websitepublicatie plaatsvindt;
- `sourceContext` = interne notitie dat het item teruggaat op aangeleverd historisch bronmateriaal.

## 10.4 Geen vermenging van migratie en redactionele upgrade

Belangrijk onderscheid:

### A. CMS-contentmigratie / diary backfill
Doel:
- updates in CMS krijgen;
- historische content structureel bruikbaar maken.

### B. Redactionele upgrade van vaste pagina’s
Doel:
- `/mijn-verhaal` inhoudelijk sterker maken;
- moederband, traditie en Rogers eigen toon verbeteren.

Deze twee trajecten moeten in de vervolgplanning **expliciet gescheiden** blijven, conform de formele goedkeuringsnuance.

---

# 11. Homepage latest-update teaser

## 11.1 Strategisch uitgangspunt

De homepage blijft conversie- en verhaalgedreven.  
Hij wordt geen actualiteitenpagina.

## 11.2 Wel toegestaan: compacte teaser

Een latere homepage-sectie mag tonen:

- één meest recente uitgelichte update;
- of één meest recente dagboekpost;
- of maximaal twee compacte items wanneer dit visueel echt past.

## 11.3 Aanbevolen logica

Voorkeurslogica:

1. toon eerst het meest recente item met:
   ```text
   showOnHome = true
   ```
2. als er geen item is:
   - geen fallback tonen;
   - of pas later een fallback op “laatste gepubliceerde update” toevoegen als dit inhoudelijk gewenst blijkt.

## 11.4 Reden
Roger of Marduk moet niet per ongeluk een willekeurige kleine update te prominent op Home krijgen.  
Een expliciete `showOnHome`-vlag geeft redactionele controle.

---

# 12. SEO- en metadata-impact

## 12.1 SEO wordt tweelaags

De komende SEO-/metadatafase moet worden opgesplitst in:

### Laag 1 — Sitewide en vaste pagina’s
Voor:
- Home;
- Mijn verhaal;
- De tocht;
- Doneren;
- Herinneringsactie;
- Media & Updates;
- Sponsors & Contact.

Te realiseren:
- unieke titles;
- unieke meta descriptions;
- canonical URLs;
- Open Graph defaults;
- Twitter/social meta;
- sitemap;
- robots;
- eventuele structured data waar passend.

### Laag 2 — CMS-gedreven updatepagina’s
Voor:
- `/media-updates/[slug]`.

Te realiseren op basis van CMS-fields:
- `seoTitle` fallback naar `title`;
- `seoDescription` fallback naar `excerpt`;
- OG image fallback:
  - `socialImage`;
  - anders `mainImage`;
  - anders globale default;
- canonical URL op basis van slug;
- opname in sitemap.

## 12.2 Waarom SEO niet volledig los van CMS moet worden gebouwd

Een deel van SEO kan nu al voor vaste pagina’s worden voorbereid.  
Maar SEO voor update-detailpagina’s is inhoudelijk afhankelijk van het CMS-contentmodel.

Daarom geldt:

- **SEO voor vaste pagina’s** kan in een aparte, snelle track worden uitgevoerd;
- **SEO voor updates** moet aansluiten op het definitieve Sanity-schema.

## 12.3 Metadatavelden in CMS
De optionele velden:

- `seoTitle`;
- `seoDescription`;
- `socialImage`;

worden opgenomen zodat later:
- standaard goede metadata automatisch werkt;
- uitzonderlijke posts handmatig geoptimaliseerd kunnen worden.

---

# 13. Herplanning van Phase 14 — Dynamic Donation Progress

## 13.1 Waarom Phase 14 eerder is geparkeerd

Phase 14 bleef open omdat:
- de website in launchfase vooral statisch werd gepubliceerd;
- een dynamische donatiestand technisch onzeker was;
- de donatiebron eerst betrouwbaar moest worden vastgesteld.

## 13.2 Waarom CMS/hosting dit opnieuw beïnvloedt

Wanneer de site verhuist naar een Next.js-vriendelijker dynamisch publicatiemodel, ontstaan meer opties voor:
- server-side ophalen;
- route handlers;
- scheduled refresh;
- cache/revalidation;
- gecontroleerde fallbacklogica.

## 13.3 Wat níet automatisch verandert

Een betere hostingarchitectuur betekent nog niet dat dynamische donatiestand inhoudelijk/technisch meteen wenselijk is.

Er moet nog apart worden vastgesteld:
- is de donatiestand betrouwbaar via een bron beschikbaar?
- mag die bron technisch worden gebruikt?
- hoe robuust is dat tegen paginawijzigingen?
- wat is de fallback als de bron tijdelijk faalt?

## 13.4 Nieuwe positie van Phase 14

Phase 14 moet worden herpland **na**:

1. formele goedkeuring van deze blueprint;
2. keuze om de Vercel/Sanity-route daadwerkelijk te implementeren;
3. afronding van de basis-CMS-publicatiearchitectuur of ten minste de hostingtransitie.

### Aanbevolen nieuwe volgorde
- Eerst: CMS & publication architecture implementeren;
- daarna: SEO/metadata en CMS-contentmigratie zorgvuldig afronden;
- vervolgens: Phase 14 opnieuw als zelfstandige feasibility/buildfase.

---

# 14. Concrete impact op de bestaande Next.js-site

## 14.1 Configuratie-impact

De site draait nu met static export-configuratie.  
Bij overgang naar Vercel-hosted Next.js met CMS en revalidation moet worden beoordeeld of:

- `output: "export"` wordt verwijderd;
- static-only aannames worden teruggedraaid;
- build- en deploymodel verandert;
- routes weer normale Next.js runtime-capaciteit krijgen.

## 14.2 Nieuwe technische bouwstenen

Te verwachten toevoegingen:

```text
src/sanity/
  client.ts
  queries.ts
  image.ts

sanity/
  schemaTypes/
    updateEntry.ts
  sanity.config.ts
  sanity.cli.ts
```

of een vergelijkbare afgesproken projectstructuur.

Verder:

```text
src/app/media-updates/page.tsx
src/app/media-updates/[slug]/page.tsx
```

worden aangepast om CMS-content op te halen.

## 14.3 Revalidation/webhooklaag

Er komt waarschijnlijk een beveiligde revalidation-route, bijvoorbeeld conceptueel:

```text
/api/revalidate
```

of een framework-passende route-handler.

Functie:
- Sanity webhook ontvangt publish/update/delete;
- website-cache voor relevante updatepagina’s wordt vernieuwd;
- nieuwe of gewijzigde content wordt zichtbaar zonder handmatige deploy.

## 14.4 Omgevingvariabelen

Te verwachten variabelen:

```text
SANITY_PROJECT_ID
SANITY_DATASET
SANITY_API_VERSION
SANITY_READ_TOKEN          # alleen indien nodig
SANITY_REVALIDATE_SECRET
```

Exacte namen worden in de technische implementatiefase bevestigd.

## 14.5 Huidige Markdownservice

De bestaande lokale Markdownservice moet niet overhaast verdwijnen.  
Er zijn twee redelijke transitieroutes:

### Optie A — Hard cutover
- alles migreren;
- Markdownservice verwijderen;
- Sanity wordt direct enige bron.

### Optie B — Gefaseerde overgang
- bestaande posts blijven tijdelijk Markdown;
- nieuwe posts komen uit Sanity;
- daarna volledige migratie en opruiming.

### Blueprintadvies
# **Voorkeursroute: volledige migratie in één gecontroleerde contentmigratiefase, daarna Sanity als enige updatesbron.**

Waarom:
- minder hybride complexiteit;
- geen dubbele contentbron;
- schoner beheer;
- lagere kans op inconsistentie.

---

# 15. Content governance en operations

## 15.1 Roger publiceert direct

Roger mag:
- nieuwe posts aanmaken;
- concepten bewaren;
- publiceren;
- bestaande eigen updatecontent corrigeren.

Er is geen redactionele goedkeuringsworkflow vereist.

## 15.2 Marduk’s rol

Marduk blijft:
- technisch beheerder;
- architect;
- incidenteel verantwoordelijk voor grote siteverbeteringen;
- niet de dagelijkse uitgever van Rogers dagboek.

## 15.3 Basisafspraken die praktisch nuttig zijn

Hoewel geen approval workflow nodig is, is het verstandig om later een korte handleiding voor Roger op te stellen:

- hoe maak je een post;
- wanneer kies je Dagboek, Campagne of Media;
- hoe vul je eventDate en publishedAt in;
- hoe voeg je een afbeelding en alttekst toe;
- wanneer vink je “toon op home” aan;
- wanneer gebruik je featured.

Dat is geen zwaar redactiestatuut, maar gewoon een gebruiksdocument.

---

# 16. Risico’s en aandachtspunten

## 16.1 Hostingtransitie-risico
De live site staat nu werkend op Cloud86/Plesk.  
Bij migratie naar Vercel mag het domein pas worden omgezet wanneer:
- staging/preview goed werkt;
- CMS-data correct wordt getoond;
- redirects/URL’s zijn gecontroleerd;
- huidige live functionaliteit behouden is.

## 16.2 Contentmigratierisico
Bestaande updates bevatten opgebouwde betekenis en interne linkwaarde.  
Slugs en volgorde moeten behouden of bewust gemapt worden.

## 16.3 Editorcomplexiteit
Sanity moet krachtig zijn, maar voor Roger niet overvol.  
De Studio-UX moet worden versmald tot wat hij werkelijk nodig heeft.

## 16.4 SEO-risico
Bij migratie van statisch naar CMS-gedreven detailpagina’s moeten:
- metadata;
- sitemap;
- canonical URLs;
- bestaande routepaden;
goed bewaakt worden.

## 16.5 Phase 14-risico
Dynamic donation progress mag niet “meeliften” zonder eigen bron- en betrouwbaarheidstoets.

---

# 17. Aanbevolen implementatievolgorde na goedkeuring van deze blueprint

## Fase A — CMS & Hosting Feasibility Finalization
- bevestig Vercel-route definitief;
- bevestig Sanity-projectinrichting;
- bepaal migratiemoment domein/publicatiemodel;
- maak technische buildprompt voor CMS-foundation.

## Fase B — Sanity CMS Foundation
- Sanity-project;
- Studio;
- `updateEntry` schema;
- basisqueries;
- integratie met Media & Updates;
- eerste connectie met Next.js.

## Fase C — Contentmigratie & Backfill
- bestaande updates migreren;
- geselecteerde historische PDF-content voorbereiden;
- eventDate/publishedAt correct invullen;
- controleronde op slugs en volgorde.

## Fase D — Hosting/Publicatie-omschakeling
- Vercel-project;
- deployment;
- domain switch;
- webhook/revalidation;
- live validatie.

## Fase E — SEO/Metadata Track
- vaste pagina’s metadata;
- CMS-detailmetadata;
- sitemap/robots;
- social preview;
- content indexability.

## Fase F — Redactionele vaste-pagina-upgrade
- middelzware upgrade `/mijn-verhaal`;
- eventueel microcopyverbeteringen elders;
- expliciet gescheiden van CMS-migratie.

## Fase G — Phase 14 herplannen
- dynamic donation progress feasibility opnieuw openen;
- pas uitvoeren als de nieuwe hosting/publicatiearchitectuur stabiel is.

---

# 18. Aanbevolen eerstvolgende officiële documentstap

Na goedkeuring van deze blueprint is de meest logische volgende stap:

# **CMS & Hosting Implementation Roadmap v1.0**

Dat document zou de architectuur vertalen naar:
- concrete buildfases;
- afhankelijkheden;
- migratie- en validatiemomenten;
- benodigde accounts/projecten;
- volgorde van Codex-prompts;
- duidelijke go/no-go punten voor domeinomschakeling.

---

# 19. Samenvattende eindbeslissingen

| Onderwerp | Blueprintbesluit |
|---|---|
| CMS | Sanity als voorkeursroute |
| Content scope | Alleen Dagboek / Updates / Media binnen actualiteitenhub |
| Dagboeklocatie | Binnen `Media & Updates` |
| Homepage | Hooguit compacte latest-update teaser |
| Hostingrichting | Vercel als voorkeursroute voor de Next.js-app |
| Cloud86 | Huidige livehost blijft tot gecontroleerde overgang; domein/DNS-context kan blijven |
| Data model | `updateEntry` met categorieën diary/campaign/media |
| Datums | Verplicht onderscheid `contentDate/eventDate` en `publishedAt` |
| Migratie | Bestaande updates uiteindelijk naar Sanity, slugs behouden |
| PDF-content | Selectieve backfill en editorial source, niet blind publiceren |
| SEO | Vaste pagina’s en CMS-updates in twee lagen uitwerken |
| Phase 14 | Herplannen na CMS/hostingbasis |
| Next.js impact | Static-export model waarschijnlijk verlaten voor CMS-gedreven publicatie |
| Eerstvolgende document | CMS & Hosting Implementation Roadmap v1.0 |

---

# 20. Eindoordeel

De post-launch fase krijgt hiermee een duidelijke technische en operationele ruggengraat:

- Roger kan straks zelf publiceren;
- Marduk verliest de dagelijkse publicatielast;
- `Media & Updates` krijgt een schaalbare contentarchitectuur;
- bestaande updates en nieuwe diarycontent kunnen inhoudelijk logisch samenleven;
- toekomstige SEO, homepage-teasers en Phase 14 kunnen vanaf een stabielere basis worden doorontwikkeld.

Deze blueprint vormt daarmee het leidende architectuurdocument voor de volgende uitvoeringsfase van `roger-alpe-dhuzes.nl`.
