# Codex Build Plan v1.0 — `roger-alpe-dhuzes.nl`

## 0. Status en functie van dit document

Dit document vertaalt de volledige strategische, visuele en technische voorbereiding naar een **gefaseerd uitvoeringsplan voor Codex** voor:

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
9. **Visual & Asset Preparation Blueprint v1.0**;
10. **Technical Architecture Blueprint v1.0**.

Dit document legt vast:

- in welke volgorde Codex aan het project moet werken;
- welke buildfasen er zijn;
- welke fase afhankelijk is van welke eerdere fase;
- wat Codex per fase wél en níet mag doen;
- welke bestanden en projectzones waarschijnlijk geraakt worden;
- welke validatie per fase vereist is;
- welke acceptance criteria gelden;
- wanneer worktrees en MCP-tools waardevol zijn;
- welke stap direct na dit document volgt:
  - **Codex Prompt 01 — Repository Inspection & Foundation Setup**.

Dit document is **geen uitvoeringsprompt**.  
Het is het **bouwregieplan** waarop alle latere Codex-prompts worden gebaseerd.

---

# 1. Hoofddoel van het buildplan

Codex moet de website niet in één grote oncontroleerbare run bouwen.

De juiste aanpak is:

> **Kleine, scherp begrensde implementatiefasen met reviewbare diffs, validatie na elke fase en duidelijke beslisgates vóór de volgende stap.**

De website wordt dus gefaseerd gebouwd vanuit:

1. technische basis;
2. datastructuur;
3. conversiecomponenten;
4. kernpagina’s;
5. media/updatefunctionaliteit;
6. polish;
7. kwaliteitscontrole.

---

# 2. Overkoepelende uitvoeringsprincipes

## 2.1 AGENTS.md is bindend

Bij iedere Codex-run geldt:

- Codex leest eerst `AGENTS.md`;
- Codex handelt conform de daarin vastgelegde bronhiërarchie;
- Codex respecteert de drie steunroutes:
  - direct doneren;
  - steunproducten;
  - herinneringsactie;
- Codex introduceert geen onverwachte architectuur of nieuwe scope.

---

## 2.2 Eerst inspecteren, dan aanpassen

Elke uitvoeringsprompt moet beginnen met:

1. repo inspecteren;
2. relevante bestaande bestanden lezen;
3. scope bevestigen;
4. pas daarna wijzigingen doorvoeren.

Geen blind scaffolden.  
Geen aannames over bestaande code.

---

## 2.3 Build per fase, niet per willekeurige pagina-impuls

De buildvolgorde is bewust gekozen.  
Codex mag niet alvast willekeurig latere pagina’s, componenten of systemen gaan “meebouwen” buiten de gefaseerde opdracht.

---

## 2.4 Reviewbare diffs

Iedere fase moet:

- beperkt genoeg zijn om te beoordelen;
- logisch zelfstandig zijn;
- eindigen met een samenvatting van wijzigingen;
- aangeven welke bestanden zijn geraakt;
- benoemen wat nog níet is gedaan.

---

## 2.5 Validatie is onderdeel van de opdracht

Bij betekenisvolle codewijzigingen voert Codex uit, voor zover beschikbaar:

- lint;
- typecheck;
- build;
- targeted tests indien aanwezig;
- browser/responsive review waar relevant.

---

## 2.6 Geen over-engineering

In v1 géén:

- CMS;
- webshopcheckout;
- winkelmand;
- accountomgeving;
- geautomatiseerde Facebook-sync;
- zware admininterface;
- ingewikkelde sponsorportal;
- fragiele client-side scraping;
- losse technische “leuke extra’s” zonder conversiefunctie.

---

# 3. Tooling- en werkafspraken voor Codex

## 3.1 MCP inzet alleen waar functioneel

MCP-tools mogen later worden gebruikt wanneer ze aantoonbaar waarde toevoegen.

### Wenselijke inzet

| Tool / context | Gebruik |
| --- | --- |
| OpenAI Developer Docs MCP | Alleen als Codex-/OpenAI-productgedrag of MCP-configuratie moet worden geverifieerd |
| Context7 / docs-tooling | Actuele documentatie voor Next.js, Tailwind of libraries |
| Playwright / Browser tooling | Responsive en visuele validatie |
| GitHub MCP | Alleen bij repo-/PR-/issuecontext indien aangesloten |
| Figma MCP | Alleen als er later concrete ontwerpbestanden bestaan |

---

## 3.2 Worktreebeleid

### Worktrees inzetten bij:
- grotere implementatiefasen;
- structurele wijzigingen;
- parallel onderzoek;
- risicovollere refactors.

### Worktrees niet nodig bij:
- kleine docs-correcties;
- beperkte tekstuele aanpassingen;
- mini-fixes na review.

---

## 3.3 Eerste Codex-runs zijn sequentieel

De eerste bouwfasen zijn fundamenteel.  
Daarom niet parallel uitvoeren:

1. repo inspectie/scaffold;
2. basislayout;
3. centrale data- en contentstructuur;
4. donatieprogressie-baseline;
5. homepage foundation.

Pas daarna kunnen sommige paginafasen eventueel losser of parallel worden uitgewerkt.

---

# 4. Buildplan op hoofdniveau

| Fase | Naam | Kernoutput |
| ---: | --- | --- |
| 01 | Repository Inspection & Foundation Setup | Projectbasis bevestigen en Next.js-fundament leggen |
| 02 | Global Design Foundation & Layout Shell | Header, footer, tokens, basis-layout |
| 03 | Core Data Layer & Project Configuration | Siteconfig, navigatie, producten, sponsors, media, fundraising fallback |
| 04 | Asset Directory & Initial Content Placement | `public/images/` structureren en assets logisch klaarzetten |
| 05 | Fundraising Progress Baseline | Typed fundraisingmodel + progressiecomponent + fallback |
| 06 | Home Page Foundation | Hero, primaire conversieflow, campagnehub |
| 07 | Mijn verhaal Page | Emotionele hoofdverhaalpagina |
| 08 | Doneren / Steunen Page | Centrale conversiepagina met drie steunroutes |
| 09 | Herinneringsactie Page | Waardige memorialpagina |
| 10 | De tocht Page | Route-map, training, fysieke uitdaging |
| 11 | Media & Updates Content System | Markdownupdates + overzicht + detailrouting |
| 12 | Media & Updates Page | RTV-feature, updates, timeline, volgen |
| 13 | Sponsors & Contact Page | Sponsorgrid, contact, support-inquiry |
| 14 | Dynamic Donation Progress Feasibility & Integration | Onderzoek remote donatiestand + veilige implementatie of definitieve fallback |
| 15 | SEO, Metadata & Shareability | Metadata, OG, sitemap, robots, icons |
| 16 | Accessibility, Responsive & Performance Polish | WCAG-basics, mobile UX, beeldoptimalisatie, layout polish |
| 17 | Browser QA & Conversion Review | Volledige sitevalidatie en correctieronde |
| 18 | Launch Readiness & Final Handoff | Eindcontrole, restpunten, oplevernotitie |

---

# 5. Fase 01 — Repository Inspection & Foundation Setup

## 5.1 Doel

De bestaande workspace inspecteren en, indien nog geen app-code bestaat, een nette Next.js-projectbasis opzetten die aansluit op de Technical Architecture Blueprint.

---

## 5.2 In scope

- `AGENTS.md` lezen;
- `docs/strategy/` globaal herkennen als strategische bronlaag;
- bepalen of er al een codebase bestaat;
- package manager / huidige repo-status inspecteren;
- indien geen app bestaat:
  - Next.js-projectfundament opzetten;
  - TypeScript;
  - App Router;
  - stylingbasis volgens gekozen richting;
- basis `src/`-structuur voorbereiden indien passend;
- geen inhoudelijke pagina’s bouwen behalve minimale default structuur.

---

## 5.3 Niet in scope

- homepage ontwerpen;
- assets volledig integreren;
- contentpagina’s bouwen;
- donatiestand uitwerken;
- Markdown-updates bouwen;
- finale branding implementeren.

---

## 5.4 Waarschijnlijk geraakte bestanden

- `package.json`
- `tsconfig.json`
- `next.config.*`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- globale stylesheets
- eventuele Tailwind-config
- lint-/projectconfig

---

## 5.5 Validatie

- dependency install succesvol;
- lint indien aanwezig;
- typecheck indien beschikbaar;
- build;
- lokale dev-start theoretisch mogelijk.

---

## 5.6 Acceptance criteria

- De repo heeft een werkend Next.js-fundament.
- De gekozen structuur is consistent met de Technical Architecture Blueprint.
- Er zijn geen overbodige dependencies toegevoegd.
- Er is nog geen halfbakken inhoudelijke homepage gebouwd.
- Codex rapporteert expliciet:
  - bestaande situatie;
  - gemaakte keuzes;
  - package manager;
  - validatie-uitkomst.

---

# 6. Fase 02 — Global Design Foundation & Layout Shell

## 6.1 Doel

Een herbruikbare globale visuele en structurele basis bouwen waarop alle pagina’s consistent kunnen landen.

---

## 6.2 In scope

- root layout verfijnen;
- `html lang="nl"`;
- skiplink indien passend;
- centrale container/section primitives;
- basis typografische schaal;
- eerste kleur- en spacingsysteem gebaseerd op logo-richting:
  - navy;
  - blauw;
  - warm oranje/goud;
  - rood accent;
- header;
- footer;
- navigatie;
- primaire header CTA naar `/doneren`;
- mobile menubasis.

---

## 6.3 Niet in scope

- definitieve heroontwerpen;
- complexe animaties;
- alle page sections;
- homepagecontent;
- sponsor- of mediaweergave.

---

## 6.4 Waarschijnlijk geraakte bestanden

- `src/app/layout.tsx`
- global styles
- `src/components/layout/*`
- `src/components/ui/*`
- `src/data/navigation.ts`
- `src/data/site.ts`

---

## 6.5 Validatie

- lint;
- typecheck;
- build;
- desktop en mobiel header/footer visueel controleren.

---

## 6.6 Acceptance criteria

- Er is een consistente site shell.
- Navigatie bevat de juiste hoofdstructuur.
- Header CTA **Doneer / Steun** is duidelijk aanwezig.
- Footer bevat ruimte voor:
  - contact;
  - donate-route;
  - campagnelinks.
- Mobiel menu werkt of is functioneel voorbereid.

---

# 7. Fase 03 — Core Data Layer & Project Configuration

## 7.1 Doel

Alle vaste projectdata typed en centraal organiseren voordat pagina’s zwaar gaan leunen op inhoud.

---

## 7.2 In scope

Aanmaken of verfijnen van:

- `site.ts`
- `navigation.ts`
- `fundraising.ts`
- `support-products.ts`
- `sponsors.ts`
- `media.ts`

Eventueel types aanmaken indien architectuur dat vraagt.

---

## 7.3 Minimale data-inhoud

### `site.ts`
- sitenaam;
- basisbeschrijving;
- officiële donatielink;
- contactgegevens;
- eventuele sociallinks.

### `support-products.ts`
- armbandje — €2,00;
- plastic bidon — €5,95;
- aluminium bidon — €5,95;
- opbrengstnotitie.

### `sponsors.ts`
- alle bevestigde sponsors uit de assetset.

### `media.ts`
- RTV Parkstad als featured itemstructuur, ook als embed-URL nog openstaat.

### `fundraising.ts`
- goal amount `2500`;
- fallback current amount;
- source/updatedAt-concept.

---

## 7.4 Niet in scope

- dynamische donatiestand live halen;
- productfoto’s forceren;
- lange copy genereren;
- pagina’s volledig bouwen.

---

## 7.5 Validatie

- typecheck;
- lint;
- importeerbaarheid van data;
- geen ongebruikte of conflicterende modellen.

---

## 7.6 Acceptance criteria

- Alle centrale vaste projectdata staat op één logische plek.
- Producten, sponsors, media en fundraising zijn typed of structureel consistent.
- Latere componenten kunnen hierop bouwen zonder hardcoded duplicatie.

---

# 8. Fase 04 — Asset Directory & Initial Content Placement

## 8.1 Doel

De eerder vastgelegde assetstructuur uit het Visual & Asset Preparation Blueprint fysiek voorbereiden in het project.

---

## 8.2 In scope

- `public/images/` mappen aanmaken:
  - `brand`
  - `hero`
  - `story`
  - `route`
  - `remembrance`
  - `media`
  - `sponsors`
  - `campaign`
  - `products`
- huidige assets hernoemen en plaatsen volgens blueprint;
- nog geen ontbrekende productfoto’s verzinnen;
- eventuele lege `products/` map toestaan;
- assetnamen consistent maken.

---

## 8.3 Niet in scope

- beeldbewerking buiten noodzakelijke bestandsorganisatie;
- massale cropgeneratie zonder expliciete opdracht;
- ontwerpen van Open Graph-afbeeldingen;
- page layouts.

---

## 8.4 Validatie

- paden kloppen;
- afbeeldingen importeerbaar/usebaar;
- geen dubbele, ambigu genaamde bestanden;
- build blijft slagen.

---

## 8.5 Acceptance criteria

- De assetstructuur komt overeen met het visuele blueprint.
- Kernassets zijn aanwezig onder voorspelbare namen.
- Later Codex-werk hoeft niet telkens originele Facebookbestandsnamen te ontcijferen.

---

# 9. Fase 05 — Fundraising Progress Baseline

## 9.1 Doel

De donatieprogressiemodule technisch klaarzetten met veilige fallbackdata, zodat Home en Doneren / Steunen daarop kunnen bouwen.

---

## 9.2 In scope

- `FundraisingProgress`-type;
- `formatCurrency` helper indien nodig;
- `DonationProgress` component;
- groot/compact variantgebruik indien zinvol;
- fallbackdata uit `fundraising.ts`;
- primaire CTA richting officiële donatiepagina of `/doneren`, afhankelijk van context;
- service-abstractie voorbereiden:
  - `getFundraisingProgress()` mag in eerste fase nog fallbackdata retourneren.

---

## 9.3 Niet in scope

- ongeteste remote scraping;
- definitieve dynamic donor progress retrieval;
- server endpoint bouwen zonder noodzaak;
- stylingpolish tot op launchniveau.

---

## 9.4 Waarschijnlijk geraakte bestanden

- `src/data/fundraising.ts`
- `src/lib/fundraising/*`
- `src/lib/utils/format-currency.ts`
- `src/components/conversion/DonationProgress.tsx`

---

## 9.5 Validatie

- lint;
- typecheck;
- build;
- component renderbaar;
- bedragen en percentages logisch.

---

## 9.6 Acceptance criteria

- Donatieprogressie kan herbruikbaar worden ingezet.
- Goal €2.500 staat correct.
- Fallbackmodel is onderhoudbaar.
- Remote dynamiek is voorbereid, maar niet fragiel geïmplementeerd.

---

# 10. Fase 06 — Home Page Foundation

## 10.1 Doel

De homepage bouwen als premium, conversion-first campagnehub volgens de Page Blueprint.

---

## 10.2 In scope

Implementeren van de homepage-scrollflow:

1. hero;
2. donatieprogressie;
3. korte story hook;
4. transformatieblok;
5. route teaser;
6. drie steunroutes;
7. herinneringsactie teaser;
8. RTV Parkstad teaser;
9. sponsorstrip;
10. finale CTA.

---

## 10.3 Niet in scope

- volledige copy van onderliggende pagina’s;
- volledig uitgediepte sponsorspagina;
- volledige updatespagina;
- dynamische donatiestand live integreren;
- complexe motion.

---

## 10.4 Belangrijkste assets

- kleurportret Roger;
- logo;
- route-map teaser;
- kaarsenfoto;
- RTV Parkstad-foto;
- sponsorvisuals compact.

---

## 10.5 Validatie

- lint;
- typecheck;
- build;
- desktop visuele review;
- mobiel visuele review;
- CTA boven de fold;
- donorflow logisch.

---

## 10.6 Acceptance criteria

- Home voelt direct als Rogers campagnewebsite.
- De hero beantwoordt:
  - wie;
  - waarom;
  - wat kan ik doen.
- Direct doneren is zichtbaar zonder zoeken.
- De drie steunroutes zijn helder.
- Home nodigt uit tot verdieping zonder overvol te worden.

---

# 11. Fase 07 — Mijn verhaal Page

## 11.1 Doel

De emotionele kernpagina bouwen op basis van `verhaal 1.docx`.

---

## 11.2 In scope

Secties volgens blueprint:

1. introhero;
2. band met moeder;
3. samen Alpe d’HuZes kijken;
4. diagnose en belofte;
5. 208 kilo / onmogelijkheid;
6. gastric bypass en keerpunt;
7. ruim 100 kilo afgevallen;
8. inschrijving lukt;
9. waarom steun nodig is;
10. finale CTA.

---

## 11.3 Niet in scope

- nieuwe feiten verzinnen;
- extreme copycompressie;
- trainingsdetail dupliceren dat beter op De tocht hoort;
- memorialactie overnemen.

---

## 11.4 Assets

- zwart-wit portret primair;
- kleurportret optioneel secundair;
- eventueel één trainingsbeeld als overgang, alleen als het visueel klopt.

---

## 11.5 Validatie

- inhoud klopt met goedgekeurde bron;
- CTA-ritme voldoende;
- pagina leest mobiel goed;
- geen groteske tekstmuren zonder ritme.

---

## 11.6 Acceptance criteria

- De pagina draagt Rogers verhaal overtuigend.
- Zijn eigen specificiteit blijft behouden.
- De pagina eindigt met duidelijke steunactie.
- Tone of voice is menselijk, niet generiek NGO-achtig.

---

# 12. Fase 08 — Doneren / Steunen Page

## 12.1 Doel

De centrale conversiepagina bouwen met de drie steunroutes.

---

## 12.2 In scope

Secties:

1. conversiehero;
2. grote donatieprogressie;
3. direct doneren;
4. waarom elke bijdrage telt;
5. steunproducten;
6. volledige-opbrengst-transparantie;
7. herinneringsactie teaser;
8. delen/contact;
9. finale CTA.

---

## 12.3 Niet in scope

- webshop;
- winkelmand;
- checkout;
- voorraadbeheer;
- productfoto’s verzinnen als ze ontbreken.

---

## 12.4 Verplichte inhoud

### Producten
- Armbandje met Roger-logo — €2,00
- Plastic bidon met Roger-logo — €5,95
- Aluminium bidon met Roger-logo — €5,95

### Opbrengst
- volledige opbrengst naar Rogers Alpe d’HuZes-donaties.

---

## 12.5 Validatie

- donorflow glashelder;
- directe donatie visueel dominant;
- producten duidelijk en niet commercieel-plat;
- memorial route waardig onderscheiden;
- mobiel uitstekend scanbaar.

---

## 12.6 Acceptance criteria

- De pagina is de sterkste conversiepagina van de site.
- De drie steunroutes zijn direct begrijpelijk.
- Geen bezoeker hoeft te raden hoe hij kan helpen.

---

# 13. Fase 09 — Herinneringsactie Page

## 13.1 Doel

De waardige memorialpagina bouwen op basis van `verhaal 2.docx`.

---

## 13.2 In scope

Secties:

1. memorial hero met kaarsenfoto;
2. een licht voor wie we missen;
3. waarom Roger deze actie start;
4. wie hij zichtbaar wil herdenken;
5. kaarshouder uitgelegd;
6. prijs en opbrengst;
7. plaatsing en symboliek;
8. hoe deelnemen;
9. afsluitquote;
10. finale CTA.

---

## 13.3 Niet in scope

- kaarshouder presenteren als gewone productkaart;
- samenvoegen met bidons/armbandjes in één toon;
- memorial-inhoud dramatiseren;
- feiten uitbreiden buiten bron.

---

## 13.4 Verplichte inhoud

- Riny Chappin-Plieger;
- Arianne Heuts-Veenhof;
- veteranen en geüniformeerden;
- chroom-6-context;
- kaarshouder met kaars en naam;
- prijs €25,00;
- volledige opbrengst naar donaties;
- plaatsing bij G.O.C. Parkstad en later verbonden aan Alpe d’HuZes.

---

## 13.5 Validatie

- toon waardig;
- beeldkeuze correct;
- CTA aanwezig zonder salesgevoel;
- mobiel rustig en leesbaar.

---

## 13.6 Acceptance criteria

- Dit voelt als een betekenisvolle actiepagina, niet als verkoopsectie.
- De gebruiker begrijpt wat de actie is, voor wie en hoe deelnemen werkt.
- De pagina heeft duidelijke eigen visuele identiteit binnen de site.

---

# 14. Fase 10 — De tocht Page

## 14.1 Doel

De fysieke uitdaging en voorbereiding tastbaar maken.

---

## 14.2 In scope

Secties:

1. tochtintro;
2. route-map feature;
3. wat Roger precies gaat doen;
4. voorbereiding;
5. training in de praktijk;
6. mentale en fysieke realiteit;
7. campagnetijdlijn richting 4 juni;
8. finale CTA.

---

## 14.3 Assets

- digitale route-map primair;
- trainingsfoto’s;
- eventuele compacte quote uit updatecontent.

---

## 14.4 Niet in scope

- interactieve 3D-route;
- onbetrouwbare routefacts toevoegen;
- te zware sportdashboardweergave.

---

## 14.5 Validatie

- route-map goed leesbaar;
- training geloofwaardig;
- CTA helder;
- mobiel geen onleesbare image-schaal.

---

## 14.6 Acceptance criteria

- De pagina maakt duidelijk dat Roger een echte fysieke uitdaging aangaat.
- De route-map is dominant en bruikbaar.
- Training en doorzettingsvermogen komen overtuigend naar voren.

---

# 15. Fase 11 — Media & Updates Content System

## 15.1 Doel

De Markdown-updatestructuur bouwen voordat de mediapagina zelf volledig wordt afgewerkt.

---

## 15.2 In scope

- `content/updates/` gebruiken;
- eerste Markdown-updates toevoegen;
- frontmatterstructuur implementeren;
- updateparser bouwen;
- slugs en sortering;
- detailpagina-routing `/media-updates/[slug]`;
- statisch of dynamisch genereren passend bij Next.js-app.

---

## 15.3 Aanbevolen eerste updates

1. waarom Roger meedoet;
2. training en doorzetten — 11 maart 2026;
3. Op Karakter — 17 maart 2026;
4. offroad training 7,47 km — 9 april 2026;
5. herinneringsactie — april 2026;
6. RTV Parkstad-interview — 13 mei 2026.

---

## 15.4 Niet in scope

- zwaar blog-CMS;
- automatisch Facebook importeren;
- comments;
- tagsysteem dat verder gaat dan nut heeft.

---

## 15.5 Validatie

- Markdown leest goed in;
- lijst en detailpagina’s werken;
- ontbrekende verplichte velden geven een duidelijk ontwikkelprobleem;
- build slaagt.

---

## 15.6 Acceptance criteria

- Updates zijn deelbaar en onderhoudbaar.
- Nieuwe updates kunnen later zonder codechaos worden toegevoegd.
- De contentlaag is licht, maar degelijk.

---

# 16. Fase 12 — Media & Updates Page

## 16.1 Doel

Een volledige campagnelevendigheidspagina bouwen.

---

## 16.2 In scope

Secties:

1. media introhero;
2. featured RTV Parkstad-blok;
3. updategrid;
4. campagnetijdlijn;
5. trainingsbeeldstrip;
6. volg/deel-blok;
7. donatie-CTA.

---

## 16.3 Niet in scope

- audio/video-assets gokken;
- meerdere media-items overdrijven als ze er niet zijn;
- generieke nieuwsportal maken.

---

## 16.4 Validatie

- featured RTV-blok visueel prominent;
- updategrid functioneert;
- timing en ordening logisch;
- mobiel prettig leesbaar.

---

## 16.5 Acceptance criteria

- De pagina bewijst dat de campagne actief en publiek zichtbaar is.
- RTV Parkstad krijgt terecht gewicht.
- Updates voelen als campagnecontent, niet als stoffig archief.

---

# 17. Fase 13 — Sponsors & Contact Page

## 17.1 Doel

Regionale steun en directe bereikbaarheid geloofwaardig tonen.

---

## 17.2 In scope

Secties:

1. intro steun uit de regio;
2. sponsorgrid;
3. eventueel uitgelichte ondersteuners;
4. betekenis van deze steun;
5. contact Roger;
6. mogelijke steun/samenwerking;
7. finale CTA.

---

## 17.3 Niet in scope

- uitgebreide sponsorportal;
- formulierbackend tenzij expliciet later gevraagd;
- sponsors overdrijven buiten beschikbare feiten.

---

## 17.4 Validatie

- sponsorcards werken met huidige visuals;
- contactgegevens klikbaar;
- mobiel netjes;
- CTA’s logisch.

---

## 17.5 Acceptance criteria

- Sponsors worden waardig getoond.
- Contact is praktisch en direct.
- Pagina voelt aanvullend geloofwaardig, niet losgezongen van de campagne.

---

# 18. Fase 14 — Dynamic Donation Progress Feasibility & Integration

## 18.1 Doel

Onderzoeken of Rogers officiële fundraisingpagina betrouwbaar kan worden gebruikt als bron voor een dynamische donatiestand, en die integreren indien verantwoord.

---

## 18.2 In scope

- technische haalbaarheid beoordelen;
- broninspectie;
- extractiestrategie beoordelen;
- risico op fragiliteit benoemen;
- server-side fetchstrategie overwegen;
- caching/revalidation meenemen;
- als robuust:
  - implementeren;
  - fallback behouden;
- als niet robuust:
  - handmatige fallback als definitief besluit documenteren.

---

## 18.3 Niet in scope

- fragiele client-side scraping;
- browsersimulatie voor live site als basisafhankelijkheid;
- verborgen afhankelijkheden introduceren.

---

## 18.4 Validatie

Bij implementatie:

- foutafhandeling;
- fallback werkt;
- build werkt;
- geen sitecrash bij remote fail;
- bedragen formatteren correct.

---

## 18.5 Acceptance criteria

### Scenario A — dynamisch haalbaar
- Progressiedata wordt betrouwbaar opgehaald;
- fallback is aanwezig;
- site blijft stabiel bij bronfout.

### Scenario B — dynamisch niet verantwoord
- Fallback blijft primaire route;
- updateplek is centraal en gedocumenteerd;
- geen technische schuld door half werk.

---

# 19. Fase 15 — SEO, Metadata & Shareability

## 19.1 Doel

De site deelbaar en goed indexeerbaar maken, met nadruk op social preview.

---

## 19.2 In scope

- paginatitels;
- descriptions;
- canonical/logische metadata;
- Open Graph defaults;
- homepage OG-afbeeldingstrategie;
- sitemap;
- robots;
- favicon/icon;
- updates opnemen in sitemap indien aanwezig.

---

## 19.3 Niet in scope

- uitgebreide schema.org-experimenten zonder duidelijke functie;
- agressieve SEO-copy;
- keyword stuffing.

---

## 19.4 Validatie

- metadata renderbaar;
- sitemap bouwt;
- robots is correct;
- OG-assets bestaan en paden kloppen;
- page titles logisch.

---

## 19.5 Acceptance criteria

- De site deelt netjes in sociale omgevingen.
- Iedere kernpagina heeft passende metadata.
- Zoekmachines krijgen een schone basis.

---

# 20. Fase 16 — Accessibility, Responsive & Performance Polish

## 20.1 Doel

Alle gebouwde pagina’s naar een geloofwaardige eerste publieke kwaliteitsstand brengen.

---

## 20.2 In scope

- headingstructuur controleren;
- contrast en focusstates;
- toetsenbordnavigatie;
- alt-teksten;
- `prefers-reduced-motion` respecteren;
- mobiele layouts verfijnen;
- beeldgroottes en loading aanscherpen;
- route-mapgebruik optimaliseren;
- media-embedgedrag controleren;
- voorkomen van layout shift.

---

## 20.3 Niet in scope

- redesign van complete site zonder aanleiding;
- nieuwe features toevoegen;
- contentstrategie heropenen.

---

## 20.4 Validatie

- lint;
- typecheck;
- build;
- browserreview desktop;
- browserreview mobiel;
- toetsenbordspotcheck;
- CTA zichtbaarheid;
- afbeeldingscontrole.

---

## 20.5 Acceptance criteria

- De site voelt af en verzorgd op desktop en mobiel.
- Primaire CTA’s blijven overal bruikbaar.
- Beelden werken vóór het verhaal, niet ertegen.
- De site is technisch netjes genoeg voor launchvoorbereiding.

---

# 21. Fase 17 — Browser QA & Conversion Review

## 21.1 Doel

Een laatste geïntegreerde kwaliteitsronde uitvoeren over de gehele site.

---

## 21.2 Controleclusters

### A. Conversie
- Donate CTA boven de fold?
- Donatieprogressie zichtbaar?
- Doneren / Steunen helder?
- Steunproducten duidelijk?
- Herinneringsactie goed onderscheiden?

### B. Verhaal
- Home raakt snel?
- Mijn verhaal draagt emotioneel?
- De tocht voelt concreet?
- Media & Updates bewijst activiteit?

### C. Techniek
- build groen;
- geen gebroken routes;
- geen ontbrekende assets;
- geen typefouten.

### D. Responsive
- mobiel;
- tablet;
- desktop.

### E. Toegankelijkheid
- keyboard;
- focus;
- headings;
- alt.

---

## 21.3 Output

Een QA-rapport met:

- wat goed is;
- wat nog moet worden gecorrigeerd;
- prioriteit:
  - blocker;
  - major;
  - minor;
- advies:
  - fix direct;
  - parkeren voor post-v1.

---

# 22. Fase 18 — Launch Readiness & Final Handoff

## 22.1 Doel

De eerste volwaardige implementatie afronden met duidelijke projectstatus.

---

## 22.2 In scope

- laatste kleine correcties;
- documenteren wat gebouwd is;
- open technische punten vastleggen;
- launch readiness samenvatten;
- eventuele toekomstige backlog opstellen.

---

## 22.3 Niet in scope

- nieuwe websiteonderdelen starten;
- scopecreep vlak voor oplevering;
- compleet nieuwe designrichting.

---

## 22.4 Acceptance criteria

- Website is inhoudelijk coherent;
- technische basis is stabiel;
- belangrijkste donor journey werkt;
- eventuele open punten zijn expliciet gedocumenteerd;
- project is gereed voor:
  - review door gebruiker;
  - contentfine-tuning;
  - livegangvoorbereiding.

---

# 23. Fase-afhankelijkheden

| Fase | Vereist vóór start |
| ---: | --- |
| 01 | Strategische docs gereed |
| 02 | Fase 01 |
| 03 | Fase 01–02 |
| 04 | Fase 01 |
| 05 | Fase 03 |
| 06 | Fase 02–05 |
| 07 | Fase 02–04 |
| 08 | Fase 03–05 |
| 09 | Fase 02–04 |
| 10 | Fase 02–04 |
| 11 | Fase 01–03 |
| 12 | Fase 11 + assets/media |
| 13 | Fase 03–04 |
| 14 | Fase 05 |
| 15 | Pagina’s grotendeels aanwezig |
| 16 | Hoofdbouw voltooid |
| 17 | Fase 16 |
| 18 | Fase 17 |

---

# 24. Mogelijke parallelisering na de basisfasen

Na voltooiing van:

- Fase 01;
- Fase 02;
- Fase 03;
- Fase 04;
- Fase 05;

kunnen sommige bouwfasen eventueel in aparte worktrees parallel worden ontwikkeld, mits Codex en gebruiker dit beheerst willen inzetten.

## Potentieel paralleliseerbaar

| Parallel cluster | Pagina/fase |
| --- | --- |
| Cluster A | Mijn verhaal |
| Cluster B | De tocht |
| Cluster C | Herinneringsactie |
| Cluster D | Sponsors & Contact |

## Niet paralleliseren zonder noodzaak
- Home;
- Doneren / Steunen;
- Media & Updates content system;
- Dynamic donation integration;
- final polish.

Die onderdelen raken te veel gedeelde conversie- en datastructuur.

---

# 25. Werkvorm per Codex-run

Elke toekomstige Codex-uitvoeringsprompt moet bij voorkeur dezelfde structuur volgen.

## 25.1 Standaardopbouw prompt

1. **Context**
2. **Doel van deze fase**
3. **Relevante bronbestanden**
4. **Scope**
5. **Niet doen**
6. **Waarschijnlijke bestanden**
7. **Technische en UX-eisen**
8. **Validatie**
9. **Verwacht eindrapport**

---

## 25.2 Verplicht eindrapport per run

Codex moet na iedere uitvoeringsfase rapporteren:

1. wat is gedaan;
2. welke bestanden zijn gewijzigd;
3. welke ontwerp-/techniekkeuzes zijn gemaakt;
4. welke validatie is uitgevoerd;
5. wat niet is gedaan;
6. risico’s of open punten;
7. aanbevolen volgende stap.

---

# 26. Definition of Done per bouwfase

Een fase is pas “done” wanneer:

- de scope volledig is afgehandeld;
- niets buiten scope onnodig is veranderd;
- het project bouwt;
- relevante lint/typechecks slagen;
- het resultaat aansluit op de strategische documenten;
- het eindrapport volledig is;
- de output reviewbaar is.

---

# 27. Kritieke kwaliteitspoorten

## Gate 1 — Na Fase 01
Is de technische basis correct en clean?

## Gate 2 — Na Fase 05
Is de centrale conversiedata bruikbaar voordat Home wordt gebouwd?

## Gate 3 — Na Fase 06
Draagt de homepage de site voldoende?

## Gate 4 — Na Fase 08
Werkt de hoofddonatieflow sterk genoeg?

## Gate 5 — Na Fase 09
Is de herinneringsactie waardig en duidelijk?

## Gate 6 — Na Fase 12
Voelt de campagne aantoonbaar levend?

## Gate 7 — Na Fase 14
Is donatieprogressie technisch robuust of bewust als fallback vastgelegd?

## Gate 8 — Na Fase 17
Is de website klaar voor launch readiness?

---

# 28. Risico’s en beheersmaatregelen

## 28.1 Risico: homepage wordt te vol

### Beheersing
- Page Blueprint volgen;
- iedere sectie een heldere functie;
- details naar onderliggende pagina’s sturen.

---

## 28.2 Risico: producten worden webshopachtig

### Beheersing
- supportproducten positioneren als steunroute;
- geen cart/checkout;
- content conform AGENTS.md.

---

## 28.3 Risico: herinneringsactie voelt commercieel

### Beheersing
- eigen pagina;
- eigen toon;
- kaarsenfoto en rustige layout;
- CTA pas na betekenisvolle uitleg.

---

## 28.4 Risico: donatiestand wordt technisch fragiel

### Beheersing
- remote haalbaarheid pas in aparte fase;
- fallback altijd behouden;
- geen client-side scraping.

---

## 28.5 Risico: assets worden slordig gebruikt

### Beheersing
- Visual Asset Blueprint volgen;
- assetnamen normaliseren;
- beeldrol per pagina respecteren.

---

## 28.6 Risico: Codex gaat te breed herschrijven

### Beheersing
- prompts strak scopen;
- AGENTS.md herhalen als bindend;
- reviewbare diffs;
- per fase acceptatiecriteria.

---

# 29. Wat nog niet in dit buildplan wordt uitgewerkt

Dit plan bepaalt **hoe** er gebouwd wordt, maar nog niet:

- de exacte Codex Prompt 01;
- letterlijke definitieve webcopy;
- alle exacte componentprops;
- definitieve design tokenwaarden;
- concrete productfotoverwerking;
- definitieve remote donation scrape-techniek;
- deploymentprovider.

Deze punten volgen in latere, specifiekere uitvoerings- en implementatiefasen.

---

# 30. Volgende stap

De volgende directe stap is:

# **Codex Prompt 01 — Repository Inspection & Foundation Setup**

Die prompt moet Codex opdracht geven om:

1. `AGENTS.md` te lezen;
2. de huidige projectmap te inspecteren;
3. te bevestigen dat de repo momenteel vooral uit docs bestaat;
4. de technische basis voor een Next.js App Router-project gecontroleerd op te zetten;
5. nog géén inhoudelijke pagina’s te bouwen;
6. na afloop helder te rapporteren:
   - wat aangetroffen is;
   - wat aangepast is;
   - welke keuzes zijn gemaakt;
   - welke validatie is uitgevoerd.

---

# 31. Samenvattende eindconclusie

Met dit Codex Build Plan is de volledige voorbereidingsfase omgezet naar een uitvoerbaar en gecontroleerd bouwtraject.

De website wordt niet impulsief gebouwd, maar volgens een beheersbaar systeem:

- eerst fundament;
- dan datalaag;
- dan conversiemodule;
- dan de belangrijkste pagina’s;
- daarna content- en mediafunctionaliteit;
- vervolgens technische verrijking;
- tot slot polish, QA en oplevering.

De eerstvolgende stap is nu:

# **Codex Prompt 01 — Repository Inspection & Foundation Setup**
