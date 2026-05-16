# Page Blueprints v1.0 — `roger-alpe-dhuzes.nl`

## 0. Status en functie van dit document

Dit document vertaalt de afgeronde website- en conversiestrategie naar **concrete paginablauwdrukken** voor:

# `roger-alpe-dhuzes.nl`

Het bouwt voort op:

1. de definitieve **System Prompt**;
2. **Master Brief v1.0**;
3. **Asset & Content Annex v1.0**;
4. **Projectfasering v2.0**;
5. **Projectspecifieke AGENTS.md v1.0**;
6. **Benchmarkonderzoek v1.0**;
7. **Website- en conversiestrategie v1.0**.

Dit document legt per pagina vast:

- het strategische doel;
- de gewenste bezoekersreactie;
- de exacte sectievolgorde;
- primaire en secundaire CTA’s;
- assetplaatsing;
- contentbronnen;
- layout- en UX-richting;
- responsive aandachtspunten;
- directe input voor de latere Codex-buildplanning.

De Page Blueprints zijn **geen definitieve webcopy** en **geen technisch implementatieplan**, maar vormen de noodzakelijke brug tussen strategie en daadwerkelijke ontwerp-/bouwvoorbereiding.

---

# 1. Overkoepelende blueprintprincipes

## 1.1 Donor journey blijft leidend

Iedere pagina moet minimaal één van deze doelen ondersteunen:

1. Rogers verhaal begrijpelijker maken;
2. vertrouwen verhogen;
3. de campagne tastbaarder maken;
4. de herinneringslaag verdiepen;
5. steun activeren.

Als een sectie geen van deze functies vervult, hoort deze niet in de eerste websiteversie.

---

## 1.2 Primaire conversie blijft direct doneren

De website bevat drie steunroutes:

1. **Direct online doneren**
2. **Steunproducten**
3. **Herinneringsactie**

Maar de hiërarchie blijft:

| Niveau | Steunroute | Strategisch gewicht |
| --- | --- | --- |
| 1 | Direct doneren | Primair |
| 2 | Steunproducten | Secundair / praktisch |
| 3 | Herinneringsactie | Secundair / betekenisvol |

De herinneringsactie is inhoudelijk zwaar en krijgt een eigen pagina, maar directe donatie blijft de primaire conversieroute van de website als geheel.

---

## 1.3 Elke pagina heeft één duidelijke hoofdtaak

| Pagina | Hoofdtaak |
| --- | --- |
| Home | Overtuigen en oriënteren |
| Mijn verhaal | Emotioneel legitimeren |
| De tocht | De fysieke uitdaging concreet maken |
| Doneren / Steunen | Omzetten naar actie |
| Herinneringsactie | Waardig verdiepen en activeren |
| Media & Updates | Bewijzen dat de campagne leeft |
| Sponsors & Contact | Vertrouwen, netwerk en bereikbaarheid tonen |

---

# 2. Gedeelde sitebrede componenten

De latere technische en Codex-fasen moeten rekening houden met herbruikbare blokken.

## 2.1 Conversiecomponenten

| Component | Functie |
| --- | --- |
| `DonationProgress` | Bedrag, doel, progress bar, CTA |
| `PrimaryDonationCTA` | Directe doneerknop |
| `SupportRouteCards` | Overzicht drie steunroutes |
| `ShareCampaignBlock` | Deelopties |
| `FinalCTASection` | Afsluitend conversieblok |

---

## 2.2 Storytellingcomponenten

| Component | Functie |
| --- | --- |
| `EditorialStorySection` | Tekst + beeld in premium verhaallayout |
| `QuoteBlock` | Krachtige persoonlijke quote |
| `TransformationHighlight` | 208 kg → ruim 100 kilo afgevallen |
| `TimelineStrip` | Chronologische campagne- of verhaalmomenten |
| `RouteFeature` | Route-map + korte uitleg |

---

## 2.3 Bewijs- en vertrouwencomponenten

| Component | Functie |
| --- | --- |
| `MediaFeatureCard` | RTV Parkstad of ander media-item |
| `SponsorGrid` | Sponsors / ondersteuners |
| `UpdateCard` | Markdown update-item |
| `ContactBlock` | Telefoon, e-mail, laagdrempelig contact |
| `CredibilityStrip` | Korte trustlaag op Home |

---

# 3. Globale CTA-taxonomie

## 3.1 Primaire CTA’s

Deze CTA’s mogen prominent en herhaald worden ingezet:

- **Doneer nu**
- **Steun Rogers belofte**
- **Help Roger naar de top**

## 3.2 Secundaire CTA’s

- **Lees mijn verhaal**
- **Bekijk de tocht**
- **Bekijk de herinneringsactie**
- **Ontdek de steunproducten**
- **Bekijk / beluister het interview**
- **Deel de campagne**
- **Neem contact op**

## 3.3 CTA-regel per pagina

| Pagina | Primaire CTA | Secundaire CTA |
| --- | --- | --- |
| Home | Doneer nu | Lees mijn verhaal |
| Mijn verhaal | Steun Rogers belofte | Bekijk de tocht |
| De tocht | Help Roger naar de top | Doneer nu |
| Doneren / Steunen | Doneer direct | Ontdek de steunproducten |
| Herinneringsactie | Doe mee aan de herinneringsactie | Doneer aanvullend |
| Media & Updates | Doneer nu | Volg de campagne |
| Sponsors & Contact | Neem contact op | Doneer nu |

---

# 4. Sitemap en aanbevolen routebenamingen

| Pagina | Aanbevolen route |
| --- | --- |
| Home | `/` |
| Mijn verhaal | `/mijn-verhaal` |
| De tocht | `/de-tocht` |
| Doneren / Steunen | `/doneren` of `/steunen` |
| Herinneringsactie | `/herinneringsactie` |
| Media & Updates | `/media-updates` |
| Sponsors & Contact | `/sponsors-contact` |

## Routebesluit later formaliseren

Voor de conversiepagina verdient één van deze twee namen nog een definitieve keuze:

- `/doneren`
- `/steunen`

Strategisch is **Doneren / Steunen** de zichtbare paginanaam.  
Technisch mag de URL later worden gekozen op basis van eenvoud en SEO.

---

# 5. Page Blueprint — Home

# 5.1 Strategische rol

De homepage is de **centrale campagnehub**.

Hij moet:

1. Roger direct zichtbaar maken;
2. de belofte aan zijn moeder voelbaar maken;
3. de actie concreet uitleggen;
4. vroeg donatie mogelijk maken;
5. de bezoeker doorsturen naar de juiste verdiepingsroute.

---

## 5.2 Gewenste bezoekersreactie

> “Ik begrijp direct waarom Roger dit doet. Dit is bijzonder, geloofwaardig en actueel. Ik wil doneren, verder lezen of op een andere manier steunen.”

---

## 5.3 Primaire en secundaire CTA

### Primaire CTA
**Doneer nu**

### Secundaire CTA
**Lees mijn verhaal**

---

## 5.4 Exacte sectievolgorde

| Volgorde | Sectie | Doel |
| ---: | --- | --- |
| 1 | Hero: Roger, belofte, berg en doneeractie | Directe emotionele en conversiegerichte opening |
| 2 | Compacte donatieprogressie | Momentum, duidelijk doel |
| 3 | Van belofte naar berg | Korte kern van het verhaal |
| 4 | Van 208 kilo naar Alpe d’HuZes | Transformatie begrijpelijk maken |
| 5 | De tocht wordt concreet | Route-map teaser |
| 6 | Drie manieren om te steunen | Conversieroutes overzichtelijk maken |
| 7 | Herinneringsactie teaser | Emotionele verbreding |
| 8 | In de media: RTV Parkstad | Geloofwaardigheid en actualiteit |
| 9 | Steun uit de regio | Sponsors / communityproof |
| 10 | Finale CTA | Conclusie en actie |

---

## 5.5 Sectie-uitwerking

### Sectie 1 — Hero: Roger, belofte, berg en doneeractie

**Doel**  
Binnen 5–8 seconden laten zien:

- wie Roger is;
- waarom hij Alpe d’HuZes loopt;
- dat de bezoeker kan bijdragen.

**Contentrichting**
- korte krachtige headline rond:
  - belofte;
  - moeder;
  - berg;
- compacte subcopy;
- primaire CTA;
- secundaire CTA.

**Assets**
- sterk gekleurd portret van Roger;
- campagnelogo ondersteunend;
- subtiele merkachtergrond of berg-/routeaccenten.

**UX-richting**
- split hero of asymmetrische editorial hero;
- tekst en CTA nooit over druk beeld leggen zonder contrastlaag;
- progressiekaart mag binnen hero of direct eronder.

**Responsive**
- mobiel: tekst eerst, beeld direct daarna of als goed gecropte hero-background;
- doneerknop binnen eerste viewport;
- subcopy compact houden;
- geen te kleine progress card.

---

### Sectie 2 — Compacte donatieprogressie

**Doel**
Het €2.500-doel tastbaar maken.

**Inhoud**
- huidig bedrag dynamisch of handmatig fallback;
- doelbedrag €2.500;
- voortgangsbalk;
- CTA “Doneer nu”.

**Assets**
- geen foto nodig;
- zuiver UI-blok.

**Responsive**
- één kolom mobiel;
- CTA direct onder voortgang;
- bedragen groot genoeg leesbaar.

---

### Sectie 3 — Van belofte naar berg

**Doel**
De emotionele kern kort verdiepen.

**Inhoud**
- korte samenvatting van Rogers belofte aan zijn moeder;
- verwijzing naar pagina Mijn verhaal.

**Bron**
- `verhaal 1.docx`.

**Assets**
- zwart-wit portret optioneel;
- of tekstgedreven editorial section met subtiele quote.

**CTA**
- **Lees mijn verhaal**

**Responsive**
- tekst maximaal scanbaar;
- quote mag mobiel apart worden weergegeven.

---

### Sectie 4 — Van 208 kilo naar Alpe d’HuZes

**Doel**
Begrijpelijk maken waarom deze deelname zo uitzonderlijk is.

**Inhoud**
- 208 kilo;
- gastric bypass september 2023;
- ruim 100 kilo afgevallen;
- nu in staat de belofte waar te maken.

**Assets**
- gekleurd of zwart-wit portret;
- trainingsfoto alleen als dit de sectie versterkt.

**UX-richting**
- geen sensatie-“before/after” treatment;
- waardige transformation stat-block of editorial card.

**Responsive**
- cijfers apart benadrukken;
- tekst niet te lang.

---

### Sectie 5 — De tocht wordt concreet

**Doel**
De fysieke uitdaging visualiseren.

**Inhoud**
- korte uitleg dat de berg de letterlijke climax van zijn belofte is;
- preview van de routekaart;
- link naar De tocht.

**Assets**
- route-map.

**CTA**
- **Bekijk de tocht**

**Responsive**
- route-map mag niet onleesbaar worden;
- op mobiel liever klikbaar/vergroten of in nette kaartpresentatie.

---

### Sectie 6 — Drie manieren om te steunen

**Doel**
De volledige steunstructuur helder presenteren.

**Blokken**
1. Doneer direct
2. Steun met campagneproducten
3. Herinneringsactie

**Assets**
- voor direct doneren: geen asset noodzakelijk;
- voor steunproducten: productfoto’s wanneer beschikbaar;
- voor herinneringsactie: kaarsenfoto compact.

**CTA’s**
- **Doneer nu**
- **Ontdek de steunproducten**
- **Bekijk de herinneringsactie**

**UX-richting**
- directe donatie visueel dominant;
- producten praktisch en uitnodigend;
- herinneringsactie rustiger en waardiger.

**Responsive**
- mobiel als gestapelde kaarten;
- eerste kaart “Doneren” altijd bovenaan.

---

### Sectie 7 — Herinneringsactie teaser

**Doel**
De kaarshouderactie voldoende gewicht geven.

**Inhoud**
- één kernzin over een licht laten branden voor wie gemist wordt;
- korte uitleg dat Roger met kaarshouders namen zichtbaar meeneemt;
- CTA naar pagina.

**Assets**
- kaarsenfoto prominent.

**CTA**
- **Bekijk de herinneringsactie**

**Responsive**
- beeld boven of onder tekst;
- niet te kleine afbeelding;
- rustige marge en witruimte.

---

### Sectie 8 — In de media: RTV Parkstad

**Doel**
Campagnelegitimiteit en actualiteit tonen.

**Inhoud**
- korte tekst dat Roger te gast was bij RTV Parkstad;
- context over interview;
- verwijzing naar media-/updatepagina.

**Assets**
- RTV Parkstad-studiofoto.

**CTA**
- **Bekijk / beluister het interview**

**Responsive**
- media-card compact maar duidelijk;
- niet verstoppen onderaan in kleine thumbnail.

---

### Sectie 9 — Steun uit de regio

**Doel**
Lokale sponsorsteun tonen.

**Inhoud**
- korte dankregel;
- sponsorstrip of logo-/visual-grid.

**Assets**
- sponsorbeelden als bron;
- later bij voorkeur nettere logo-inzet.

**CTA**
- optioneel **Bekijk sponsors & contact**

**Responsive**
- horizontale strip vermijden als onleesbaar;
- mobiel liever 2-koloms of 1-koloms grid.

---

### Sectie 10 — Finale CTA

**Doel**
Na de overtuigingsflow opnieuw steun activeren.

**Inhoud**
- compacte eindboodschap;
- donatieknop;
- eventueel secundaire deelactie.

**CTA**
- **Steun Rogers belofte**
- **Deel de campagne**

**Responsive**
- duidelijke single-focus CTA;
- niet te veel tekst.

---

## 5.6 Directe Codex-input voor later

De homepage vereist waarschijnlijk deze componenten:

- `CampaignHero`
- `DonationProgress`
- `StoryTeaser`
- `TransformationHighlight`
- `RoutePreview`
- `SupportRouteCards`
- `MemorialTeaser`
- `MediaFeatureCard`
- `SponsorStrip`
- `FinalCTASection`

---

# 6. Page Blueprint — Mijn verhaal

# 6.1 Strategische rol

Deze pagina is de **emotionele ruggengraat** van de site.

Hij moet inhoudelijk dieper gaan dan de homepage en bezoekers laten begrijpen:

- waarom Roger juist deze tocht doet;
- waarom zijn moeder hierin centraal staat;
- waarom de belofte al jaren leeft;
- waarom zijn transformatie essentieel is;
- waarom steun nu betekenisvol is.

---

## 6.2 Gewenste bezoekersreactie

> “Nu begrijp ik echt wat deze tocht voor Roger betekent. Dit is geen gewone sponsoractie. Ik wil hem steunen.”

---

## 6.3 Primaire en secundaire CTA

### Primaire CTA
**Steun Rogers belofte**

### Secundaire CTA
**Bekijk de tocht**

---

## 6.4 Exacte sectievolgorde

| Volgorde | Sectie | Doel |
| ---: | --- | --- |
| 1 | Introhero met portret | Persoonlijke toon zetten |
| 2 | Een bijzondere band met zijn moeder | Emotionele oorsprong |
| 3 | Samen Alpe d’HuZes kijken | Ontstaan van de droom |
| 4 | De diagnose en de belofte | Dramatisch kernmoment |
| 5 | 208 kilo: de onmogelijkheid | Waarom het onhaalbaar leek |
| 6 | September 2023: het keerpunt | Gastric bypass en omslag |
| 7 | Ruim 100 kilo afgevallen | De belofte wordt haalbaar |
| 8 | De inschrijving lukt | Van verlangen naar werkelijkheid |
| 9 | Waarom steun nodig is | Verbinding verhaal → doneren |
| 10 | Finale CTA | Activeren |

---

## 6.5 Sectie-uitwerking

### Sectie 1 — Introhero met portret

**Doel**
Een rustige persoonlijke opening.

**Inhoud**
- paginatitel;
- korte inleiding:
  - dit is het verhaal achter zijn deelname.

**Assets**
- zwart-wit portret of kleurportret, afhankelijk van visuele keuze;
- zwart-wit heeft hier strategisch lichte voorkeur vanwege reflectieve toon.

**Responsive**
- beeld en titel mogen op mobiel stacked;
- geen te complexe hero.

---

### Sectie 2 — Een bijzondere band met zijn moeder

**Doel**
De relatie tussen Roger en Riny zichtbaar maken.

**Bron**
- `verhaal 1.docx`.

**Inhoud**
- zijn jeugd;
- zijn moeder als beschermende kracht;
- persoonlijke band.

**UX-richting**
- editorial tekstsectie;
- geen overdecoratie.

---

### Sectie 3 — Samen Alpe d’HuZes kijken

**Doel**
Laten zien dat Alpe d’HuZes al lang deel uitmaakte van hun gezamenlijke ritueel.

**Inhoud**
- 19 jaar geleden zagen zij het evenement;
- het werd een terugkerend jaarlijks moment;
- de gedachte ontstond: ooit misschien zelf.

**Assets**
- geen noodzakelijk beeld;
- eventueel subtiel quote-block.

---

### Sectie 4 — De diagnose en de belofte

**Doel**
Het emotionele scharnierpunt van de pagina.

**Inhoud**
- kankerdiagnose van zijn moeder;
- lichamelijke achteruitgang;
- Rogers belofte:
  - als ik ooit afval en voldoende mobiel ben, loop ik Alpe d’HuZes voor je.

**Assets**
- mogelijk quote-block dominant;
- geen druk beeldgebruik nodig.

**CTA**
- nog geen grote donate CTA; eerst moment laten landen.

---

### Sectie 5 — 208 kilo: de onmogelijkheid

**Doel**
Uitleggen waarom de belofte destijds bijna onuitvoerbaar leek.

**Inhoud**
- gewicht van 208 kilo;
- beperkte mobiliteit;
- belofte bleef staan ondanks onmogelijkheid.

**UX-richting**
- feitelijk en waardig;
- geen schokeffect of tabloidsfeer.

---

### Sectie 6 — September 2023: het keerpunt

**Doel**
De fysieke omslag markeren.

**Inhoud**
- gastric bypass;
- geleidelijk grote verandering;
- ruimte ontstaat voor uitvoering van de belofte.

**Assets**
- kleurportret of trainingsbeeld als overgang richting actuele beweging.

---

### Sectie 7 — Ruim 100 kilo afgevallen

**Doel**
De transformatie als fundament van de tocht positioneren.

**Inhoud**
- ruim 100 kilo afgevallen;
- nu fysiek beweegbaar genoeg;
- de belofte krijgt concrete vorm.

**UX-richting**
- visueel krachtig, maar niet sensationeel;
- mogelijk cijfers in rustige stat-cards.

---

### Sectie 8 — De inschrijving lukt

**Doel**
Van innerlijke belofte naar feitelijke deelname.

**Inhoud**
- eerste inschrijfmoment gemist;
- extra inschrijfmoment;
- met meerdere mensen klaarzitten;
- deelname gelukt.

**Effect**
Toont gemeenschap en spanning.

---

### Sectie 9 — Waarom steun nodig is

**Doel**
Verhaal direct koppelen aan concrete donatievraag.

**Inhoud**
- iedere deelnemer moet €2.500 ophalen;
- donaties dragen bij aan Alpe d’HuZes;
- steun maakt onderdeel uit van Rogers missie.

**CTA**
- **Doneer nu**
- of **Steun Rogers belofte**

---

### Sectie 10 — Finale CTA

**Doel**
Afsluiten met actie.

**Inhoud**
- korte samenvattende zin;
- doneerknop;
- secundaire link naar De tocht.

**CTA**
- **Steun Rogers belofte**
- **Bekijk de tocht**

---

## 6.6 Directe Codex-input voor later

- `StoryPageHero`
- `EditorialStorySection`
- `QuoteBlock`
- `TransformationHighlight`
- `NarrativeMilestoneSection`
- `DonationCTASection`

---

# 7. Page Blueprint — De tocht

# 7.1 Strategische rol

Deze pagina maakt de fysieke uitdaging **zichtbaar en voelbaar**.

Hij moet aantonen:

- Roger bereidt zich echt voor;
- de berg is geen metafoor maar een zware opgave;
- zijn deelname vraagt training, doorzettingsvermogen en steun.

---

## 7.2 Gewenste bezoekersreactie

> “Dit is een serieuze fysieke uitdaging. Roger is hier echt voor aan het trainen. Ik wil hem helpen die berg te halen.”

---

## 7.3 Primaire en secundaire CTA

### Primaire CTA
**Help Roger naar de top**

### Secundaire CTA
**Doneer nu**

---

## 7.4 Exacte sectievolgorde

| Volgorde | Sectie | Doel |
| ---: | --- | --- |
| 1 | Introhero: de berg als climax | Sportieve lading openen |
| 2 | Route-map feature | De klim visualiseren |
| 3 | Wat Roger precies gaat doen | Korte feitelijke uitleg |
| 4 | De voorbereiding begon thuis | Trainingscontext |
| 5 | Training in de praktijk | Sportschool en wandelen |
| 6 | Mentale en fysieke realiteit | Doorzetten ondanks onzekerheid en pijn |
| 7 | Campagne-tijdlijn richting 4 juni | Progressie structureren |
| 8 | Finale CTA | Donatie activeren |

---

## 7.5 Sectie-uitwerking

### Sectie 1 — Introhero: de berg als climax

**Doel**
Een iets dynamischer, sportiever openingsgevoel.

**Inhoud**
- korte paginatitel;
- één zin over de berg als plaats waar de belofte werkelijkheid wordt.

**Assets**
- route-/bergaccent of route-map uitsnede;
- geen concurrerend portret nodig als Home dat al sterk gebruikt.

---

### Sectie 2 — Route-map feature

**Doel**
De fysieke uitdaging tastbaar maken.

**Assets**
- digitale route-map als hoofdbeeld.

**Inhoud**
- korte uitleg naast of onder de kaart;
- route, stijging, finishcontext alleen indien betrouwbaar uit asset of beschikbare tekst.

**UX-richting**
- map groot en dominant;
- mogelijk lichte zoom-/detailinteractie later;
- v1 mag statisch blijven.

**Responsive**
- route-map moet mobiel goed zichtbaar blijven;
- zo nodig aparte klikbare lightbox of overflow-safe image container.

---

### Sectie 3 — Wat Roger precies gaat doen

**Doel**
De actie in gewone taal uitleggen.

**Inhoud**
- Roger neemt deel aan Alpe d’HuZes;
- zijn tocht vormt het moment waarop hij zijn belofte daadwerkelijk probeert waar te maken.

**CTA**
- nog niet primair; focus blijft op duiding.

---

### Sectie 4 — De voorbereiding begon thuis

**Doel**
Overgang van evenement naar voorbereiding.

**Inhoud**
- training startte begin 2026;
- familie en G.O.C. Parkstad spelen ondersteunende rol;
- de weg naar de berg is een proces.

**Bron**
- `verhaal 1.docx`;
- Facebook-PDF.

---

### Sectie 5 — Training in de praktijk

**Doel**
Documentaire echtheid tonen.

**Inhoud**
- sportschool;
- lopen met stijgingspercentages;
- offroad training;
- de 7,47 km-training als voorbeeld van voortgang.

**Assets**
- beide loopbandfoto’s;
- eventueel later meer trainingsbeelden.

**UX-richting**
- foto + korte captions;
- geen Instagramfeed, wel zorgvuldig geselecteerde proofmomenten.

---

### Sectie 6 — Mentale en fysieke realiteit

**Doel**
Geen glad hero-verhaal, maar eerlijke voorbereiding.

**Inhoud**
- spanning en oude lichaamsbeleving in sportschool;
- geduldproblemen;
- pijnklachten na te zware stijgingspoging;
- toch doorgaan.

**Bron**
- trainingsupdate uit Facebook-PDF.

**UX-richting**
- quote of tekstkaart;
- dit is een sterke authenticiteitssectie.

---

### Sectie 7 — Campagne-tijdlijn richting 4 juni

**Doel**
Voortgang structureren zonder een volledige updatepagina te worden.

**Mogelijke timeline-items**
- 20 dec 2025: verhaal en motivatie;
- 4 jan 2026: trainingsstart;
- 11 mrt 2026: eerlijke trainingsupdate;
- 9 apr 2026: 7,47 km offroad;
- 13 mei 2026: RTV Parkstad.

**UX-richting**
- compact, niet te uitgebreid;
- volledige updates horen op Media & Updates.

---

### Sectie 8 — Finale CTA

**Doel**
Opgave omzetten naar steun.

**CTA**
- **Help Roger naar de top**
- **Doneer nu**

---

## 7.6 Directe Codex-input voor later

- `RoutePageHero`
- `RouteMapFeature`
- `TrainingGallery`
- `AuthenticityQuoteBlock`
- `CompactTimeline`
- `DonationCTASection`

---

# 8. Page Blueprint — Doneren / Steunen

# 8.1 Strategische rol

Dit is de **belangrijkste conversiepagina** van de website.

Hij moet zonder ruis uitleggen:

> Er zijn meerdere manieren om Roger te steunen, maar direct doneren is de hoofdroute.

---

## 8.2 Gewenste bezoekersreactie

> “Ik zie direct hoe ik kan helpen. Doneren is eenvoudig, en er zijn ook tastbare of betekenisvolle alternatieven.”

---

## 8.3 Primaire en secundaire CTA

### Primaire CTA
**Doneer direct**

### Secundaire CTA
**Ontdek de steunproducten**

---

## 8.4 Exacte sectievolgorde

| Volgorde | Sectie | Doel |
| ---: | --- | --- |
| 1 | Conversiehero | Direct duidelijk: help Roger naar €2.500 |
| 2 | Donatieprogressie groot | Momentum en doel zichtbaar |
| 3 | Direct doneren | Hoofdroute met knop |
| 4 | Waarom elke bijdrage telt | Kort inhoudelijk argument |
| 5 | Steunproducten | Praktisch alternatief |
| 6 | Volledige opbrengst gaat naar donaties | Transparantieblok |
| 7 | Herinneringsactie verwijzing | Betekenisvolle derde route |
| 8 | Delen en contact | Bereik vergroten |
| 9 | Finale CTA | Laatste donatieprikkel |

---

## 8.5 Sectie-uitwerking

### Sectie 1 — Conversiehero

**Doel**
Geen lange storytelling, maar heldere actie.

**Inhoud**
- paginatitel;
- korte zin:
  - Roger loopt voor zijn moeder en voor kankeronderzoek;
  - help hem richting het donatiedoel.

**CTA**
- **Doneer direct**

---

### Sectie 2 — Donatieprogressie groot

**Doel**
Het streefbedrag en de voortgang dominant presenteren.

**Inhoud**
- actuele stand;
- doel €2.500;
- voortgangsbalk;
- eventuele resterende bedragweergave.

**Responsive**
- mobiel zeer eenvoudig;
- geen compacte onleesbare infografiek.

---

### Sectie 3 — Direct doneren

**Doel**
De primaire steunroute afhandelen.

**Inhoud**
- korte uitleg;
- knop naar officiële fundraisingpagina;
- eventueel trustnote dat donatie via officiële Alpe d’HuZes-pagina loopt.

**CTA**
- **Doneer via de officiële actiepagina**

---

### Sectie 4 — Waarom elke bijdrage telt

**Doel**
Praktisch en emotioneel ondersteunen zonder lange herhaling van Mijn verhaal.

**Inhoud**
- iedere bijdrage helpt;
- het gaat om Rogers €2.500-doel;
- de tocht is verbonden aan kankeronderzoek en persoonlijke belofte.

---

### Sectie 5 — Steunproducten

**Doel**
Tastbare supportroute neerzetten.

**Producten**
- Armbandje met Roger-logo — €2,00
- Plastic bidon met Roger-logo — €5,95
- Aluminium bidon met Roger-logo — €5,95

**Strategische formulering**
- niet als webshop;
- als tastbare steun.

**Assets**
- productfoto’s nog als open benodigde assetcategorie;
- totdat die er zijn kan blueprint een nette placeholderstructuur voorzien, maar geen definitief ontwerp beslissen.

**CTA**
- **Vraag een steunproduct aan**
- of **Neem contact op voor steunproducten**

---

### Sectie 6 — Volledige opbrengst gaat naar donaties

**Doel**
Transparantie.

**Inhoud**
- volledige opbrengst van de steunproducten gaat naar Rogers Alpe d’HuZes-donaties;
- idem voor de acties zoals bevestigd.

**UX-richting**
- korte highlight box;
- verhoogt vertrouwen.

---

### Sectie 7 — Herinneringsactie verwijzing

**Doel**
De derde steunroute meenemen zonder de hele pagina te dupliceren.

**Inhoud**
- korte waardige intro;
- kaarshouder €25;
- CTA naar aparte pagina.

**Assets**
- kaarsenfoto compact.

**CTA**
- **Bekijk de herinneringsactie**

---

### Sectie 8 — Delen en contact

**Doel**
Bezoekers die nu niet doneren toch activeren.

**Inhoud**
- deel de campagne;
- volg updates;
- neem contact op.

**CTA**
- **Deel de campagne**
- **Neem contact op**

---

### Sectie 9 — Finale CTA

**Doel**
Heldere eindafsluiting.

**CTA**
- **Doneer direct**

---

## 8.6 Directe Codex-input voor later

- `SupportHero`
- `DonationProgressLarge`
- `OfficialDonationBlock`
- `SupportProductsGrid`
- `RevenueTransparencyBox`
- `MemorialSupportTeaser`
- `ShareCampaignBlock`
- `FinalCTASection`

---

# 9. Page Blueprint — Herinneringsactie

# 9.1 Strategische rol

Deze pagina draagt de **meest waardige en beschouwende steunroute** van de site.

Hij moet:

- Roger’s persoonlijke herinnering verbreden;
- de kaarshouderactie helder uitleggen;
- bezoekers uitnodigen om een naam zichtbaar mee te dragen;
- niet commercieel aanvoelen.

---

## 9.2 Gewenste bezoekersreactie

> “Dit is zorgvuldig, oprecht en betekenisvol. Ik begrijp de actie en wil misschien iemand via een kaarshouder laten herdenken.”

---

## 9.3 Primaire en secundaire CTA

### Primaire CTA
**Doe mee aan de herinneringsactie**

### Secundaire CTA
**Doneer aanvullend**

---

## 9.4 Exacte sectievolgorde

| Volgorde | Sectie | Doel |
| ---: | --- | --- |
| 1 | Rustige memorial hero | Toon en betekenis zetten |
| 2 | Een licht voor wie we missen | Kernboodschap |
| 3 | Waarom Roger deze actie start | Persoonlijke brug |
| 4 | Wie hij zichtbaar wil herdenken | Riny, Arianne, veteranen/geüniformeerden |
| 5 | De kaarshouder uitgelegd | Product/actie-inhoud |
| 6 | Prijs, opbrengst en bestemming | Praktische helderheid |
| 7 | Plaatsing en symboliek | G.O.C. Parkstad → Alpe d’HuZes |
| 8 | Hoe deelnemen | Contact-/aanvraagroute |
| 9 | Afsluitquote | Waardige emotionele afronding |
| 10 | Finale CTA | Actie zonder druk |

---

## 9.5 Sectie-uitwerking

### Sectie 1 — Rustige memorial hero

**Doel**
Direct een andere sfeer dan Home en Doneren.

**Assets**
- kaarsenfoto als dominante heroafbeelding.

**Inhoud**
- paginatitel;
- korte kernzin over herinneren.

**Responsive**
- beeld groot genoeg;
- niet te veel tekst over foto.

---

### Sectie 2 — Een licht voor wie we missen

**Doel**
De betekenislaag neerzetten.

**Inhoud**
- korte editorial intro;
- herinneren als tastbare handeling.

**Bron**
- `verhaal 2.docx`.

---

### Sectie 3 — Waarom Roger deze actie start

**Doel**
Persoonlijke motivatie verbinden aan bredere herdenking.

**Inhoud**
- zijn moeder Riny;
- gesprekken tijdens de voorbereiding;
- besef dat deze tocht voor meer mensen betekenis draagt.

---

### Sectie 4 — Wie hij zichtbaar wil herdenken

**Doel**
De actieradius van de herinneringsactie zorgvuldig tonen.

**Inhoud**
- Riny Chappin-Plieger;
- Arianne Heuts-Veenhof;
- veteranen en geüniformeerde professionals;
- mensen getroffen door chroom-6.

**UX-richting**
- rustige inhoudsblokken;
- geen te druk collagewerk.

---

### Sectie 5 — De kaarshouder uitgelegd

**Doel**
Concreet maken wat de actie inhoudt.

**Inhoud**
- kaarshouder;
- kaars;
- naam;
- eerbetoon.

**Assets**
- detailbeeld kaarshouders;
- mogelijk uit dezelfde kernfoto.

---

### Sectie 6 — Prijs, opbrengst en bestemming

**Doel**
Praktische helderheid zonder salesgevoel.

**Inhoud**
- €25,00;
- volledige opbrengst naar Rogers Alpe d’HuZes-donaties;
- precies benoemen dat dit een steunactie is.

**UX-richting**
- rustige info-card;
- geen webshopprijskaart.

---

### Sectie 7 — Plaatsing en symboliek

**Doel**
De actie tastbaar afronden.

**Inhoud**
- kaarsen krijgen eerst plek bij G.O.C. Parkstad;
- daarna verbonden aan de Alpe d’HuZes-context.

**Bron**
- `verhaal 2.docx`.

---

### Sectie 8 — Hoe deelnemen

**Doel**
Heldere actie-instructie.

**Inhoud**
- contact opnemen;
- eventuele gegevens/route;
- later eventueel formulier, maar alleen als strategisch gewenst.

**CTA**
- **Doe mee aan de herinneringsactie**
- **Neem contact op**

---

### Sectie 9 — Afsluitquote

**Doel**
Waardig emotioneel einde.

**Kernquote**
- “Want zolang we blijven herinneren, blijven zij een beetje bij ons.”

---

### Sectie 10 — Finale CTA

**Doel**
Na de contemplatieve afronding nog een zachte actieroute.

**CTA**
- **Doe mee aan de herinneringsactie**
- secundair: **Doneer aanvullend**

---

## 9.6 Directe Codex-input voor later

- `MemorialHero`
- `MemorialStorySection`
- `RemembrancePeopleBlock`
- `CandleActionExplainer`
- `MemorialPricingInfo`
- `ParticipationCTA`
- `ClosingQuoteSection`

---

# 10. Page Blueprint — Media & Updates

# 10.1 Strategische rol

Deze pagina maakt de campagne **actueel, levend en controleerbaar**.

Hij moet:

- RTV Parkstad prominent tonen;
- voortgang zichtbaar maken;
- geselecteerde updates duurzaam presenteren;
- bezoeker laten zien dat de site geen statisch verhaalarchief is.

---

## 10.2 Gewenste bezoekersreactie

> “Deze campagne loopt echt. Roger deelt voortgang, krijgt aandacht en werkt zichtbaar naar de berg toe.”

---

## 10.3 Primaire en secundaire CTA

### Primaire CTA
**Doneer nu**

### Secundaire CTA
**Volg de campagne**

---

## 10.4 Exacte sectievolgorde

| Volgorde | Sectie | Doel |
| ---: | --- | --- |
| 1 | Introhero Media & Updates | Paginafunctie direct duidelijk |
| 2 | Featured media: RTV Parkstad | Vertrouwen en actualiteit |
| 3 | Campagne-updates grid | Recente/gekozen posts |
| 4 | Campagnetijdlijn | Belangrijkste momenten |
| 5 | Training in beeld | Geselecteerde voortgang |
| 6 | Volg de campagne | Facebook-/update-CTA |
| 7 | Finale donatie-CTA | Terug naar steun |

---

## 10.5 Sectie-uitwerking

### Sectie 1 — Introhero

**Doel**
Zeggen wat de pagina biedt.

**Inhoud**
- korte headline;
- subcopy:
  - interviews, updates, voortgang.

---

### Sectie 2 — Featured media: RTV Parkstad

**Doel**
Het sterkste public proof-item vooraan zetten.

**Inhoud**
- Roger te gast bij RTV Parkstad;
- datum;
- interviewcontext;
- video/audio als technisch beschikbaar;
- link of embed.

**Assets**
- RTV Parkstad-foto.

**CTA**
- **Bekijk / beluister het interview**

---

### Sectie 3 — Campagne-updates grid

**Doel**
Een reeks geselecteerde updates tonen.

**Aanbevolen eerste updates**
- eerste uitgebreide motivatiepost;
- training update 11 maart;
- “Op Karakter”;
- herinneringsactie;
- 7,47 km training;
- RTV Parkstad.

**Contentopslag**
- Markdown of lichte data-structuur.

**UX-richting**
- kaartgrid met:
  - datum;
  - categorie;
  - titel;
  - korte samenvatting;
  - doorklik.

---

### Sectie 4 — Campagnetijdlijn

**Doel**
Belangrijke gebeurtenissen overzichtelijk samenvatten.

**Gebruik**
- compact;
- visueel sterk;
- niet dezelfde inhoud dubbel uitgebreid vertellen.

---

### Sectie 5 — Training in beeld

**Doel**
Documentaire laag toevoegen.

**Assets**
- loopbandfoto’s;
- eventueel later meer trainingsfoto’s.

**Inhoud**
- korte captions;
- ondersteunend aan het idee dat voorbereiding echt is.

---

### Sectie 6 — Volg de campagne

**Doel**
Bezoekers die updates willen blijven volgen doorleiden.

**Inhoud**
- verwijzing naar Facebookgroep / toekomstige updatekanaal;
- deeloptie.

**CTA**
- **Volg de campagne**
- **Deel Rogers actie**

---

### Sectie 7 — Finale donatie-CTA

**Doel**
Bewijs omzetten naar steun.

**CTA**
- **Doneer nu**

---

## 10.6 Directe Codex-input voor later

- `MediaUpdatesHero`
- `FeaturedMediaSection`
- `UpdateGrid`
- `CampaignTimeline`
- `TrainingImageStrip`
- `FollowCampaignBlock`
- `DonationCTASection`

---

# 11. Page Blueprint — Sponsors & Contact

# 11.1 Strategische rol

Deze pagina maakt zichtbaar:

- Roger staat er niet alleen voor;
- de campagne krijgt steun uit de regio;
- bezoekers en partners kunnen direct contact opnemen.

---

## 11.2 Gewenste bezoekersreactie

> “Deze campagne wordt serieus gedragen. Ik kan Roger eenvoudig bereiken of extra steun verkennen.”

---

## 11.3 Primaire en secundaire CTA

### Primaire CTA
**Neem contact op**

### Secundaire CTA
**Doneer nu**

---

## 11.4 Exacte sectievolgorde

| Volgorde | Sectie | Doel |
| ---: | --- | --- |
| 1 | Introhero Steun uit de regio | Pagina positioneren |
| 2 | Sponsorgrid | Zichtbaar bedanken |
| 3 | Uitgelichte ondersteuners | Context waar relevant |
| 4 | Wat deze steun betekent | Korte dankreflectie |
| 5 | Contact Roger | Telefoon / e-mail |
| 6 | Mogelijke steun of samenwerking | Ruimte voor nieuwe contacten |
| 7 | Finale CTA | Doneren of contact |

---

## 11.5 Sectie-uitwerking

### Sectie 1 — Introhero

**Doel**
Niet te groots, wel professioneel.

**Inhoud**
- titel;
- korte intro over lokale steun en betrokkenheid.

---

### Sectie 2 — Sponsorgrid

**Doel**
Sponsors zichtbaar en waardig bedanken.

**Assets**
- sponsorvisuals:
  - Car Detailing Kissel;
  - Hormati Gym;
  - G.O.C. Parkstad;
  - V.O.G. / Stichting Veteranen Ondersteunings Groep Parkstad;
  - FF Frietje / Mobile Catering.

**UX-richting**
- liever nette grid;
- posterbeelden mogen als tijdelijke kaartvisuals dienen;
- losse logo’s later beter.

---

### Sectie 3 — Uitgelichte ondersteuners

**Doel**
Alleen waar inhoudelijk relevant extra context bieden.

**Mogelijke kandidaten**
- G.O.C. Parkstad;
- Hormati Gym.

**Waarom**
- G.O.C. heeft inhoudelijke relatie met herinneringsactie en netwerk;
- Hormati Gym raakt aan training.

**Let op**
Alleen uitlichten als de tekst feitelijk en inhoudelijk passend wordt uitgewerkt.

---

### Sectie 4 — Wat deze steun betekent

**Doel**
Niet alleen logo’s tonen, maar betekenis verbinden.

**Inhoud**
- sponsors en lokale steun helpen Rogers campagne zichtbaarder en uitvoerbaarder maken.

---

### Sectie 5 — Contact Roger

**Doel**
Directe bereikbaarheid.

**Inhoud**
- telefoon;
- e-mail;
- eventueel korte uitnodiging:
  - vragen;
  - sponsorideeën;
  - steunproducten;
  - herinneringsactie.

**UX-richting**
- contactgegevens opvallend genoeg;
- klikbaar op mobiel.

---

### Sectie 6 — Mogelijke steun of samenwerking

**Doel**
Ruimte bieden aan toekomstige betrokkenheid zonder aparte corporate sponsorflow.

**CTA**
- **Neem contact op**

---

### Sectie 7 — Finale CTA

**Doel**
Na vertrouwen opnieuw de primaire actie zichtbaar maken.

**CTA**
- **Doneer nu**
- **Neem contact op**

---

## 11.6 Directe Codex-input voor later

- `SponsorsContactHero`
- `SponsorGrid`
- `FeaturedSupporters`
- `ContactBlock`
- `SupportInquirySection`
- `FinalCTASection`

---

# 12. Sitebrede responsive aandachtspunten

## 12.1 Mobile-first prioriteiten

- CTA direct zichtbaar;
- korte hero-teksten;
- geen horizontaal gepropte grids;
- route-map goed schaalbaar;
- sponsor- en productcards stapelbaar;
- media embed responsive;
- contactknoppen mobiel klikbaar.

---

## 12.2 Tablet en desktop

Desktop mag meer editorial worden:

- split layouts;
- asymmetrische beeld/tekstverhoudingen;
- meer visuele gelaagdheid;
- progressiemodule als kaart;
- grotere route-map;
- sponsorgrid ruimer.

Tablet moet niet als “kleine desktop” behandeld worden; cardgrids moeten verstandig breken.

---

# 13. Assetplaatsingsoverzicht per pagina

| Asset | Home | Mijn verhaal | De tocht | Doneren / Steunen | Herinneringsactie | Media & Updates | Sponsors & Contact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Logo Roger | A | B | B | B | B | B | B |
| Kleurportret | A | B | - | - | - | - | - |
| Zwart-wit portret | B | A | - | - | B optioneel | - | - |
| Route-map | B | - | A | - | - | - | - |
| Trainingsfoto’s | B optioneel | B optioneel | A | - | - | B | - |
| Kaarsenfoto | B | - | - | B | A | - | - |
| RTV Parkstad-foto | A/B | - | - | - | - | A | - |
| Sponsorvisuals | B | - | - | - | - | - | A |
| Flyers | C | C | - | B optioneel | B optioneel | C | - |
| DJ Renato-visual | - | - | - | - | - | C/B | - |

---

# 14. Contentbronoverzicht per pagina

| Pagina | Primaire bron | Secundaire bron |
| --- | --- | --- |
| Home | Master Brief + strategie | verhaal 1, verhaal 2, Annex |
| Mijn verhaal | `verhaal 1.docx` | Facebook-PDF waar nodig |
| De tocht | Facebook-PDF | verhaal 1, route-map |
| Doneren / Steunen | strategie + confirmed support routes | verhaal 1, productenupdate |
| Herinneringsactie | `verhaal 2.docx` | Annex |
| Media & Updates | Facebook-PDF | RTV-assets |
| Sponsors & Contact | Annex + sponsorassets | bevestigde contactkeuzes |

---

# 15. Pagina’s en verwachte bouwcomplexiteit

| Pagina | Complexiteit | Waarom |
| --- | --- | --- |
| Home | Hoog | Veel strategische elementen en conversielagen |
| Mijn verhaal | Middel | Contentgedreven, sterke editorial opbouw |
| De tocht | Middel/hoog | Route-map en training storytelling |
| Doneren / Steunen | Hoog | Progressie, drie steunroutes, productblok |
| Herinneringsactie | Middel/hoog | Toonregie en waardige uitwerking |
| Media & Updates | Hoog | Markdownstructuur, featured media, timeline |
| Sponsors & Contact | Middel | Grid + contact + nette hiërarchie |

---

# 16. Aanbevolen latere Codex-buildvolgorde op basis van de blueprints

De blueprints bevestigen dat de build niet willekeurig moet starten.

## 16.1 Logische uitvoeringsvolgorde

1. Globale projectstructuur / routing / design tokens
2. Homepagina foundation
3. Donatieprogressiecomponent
4. Mijn verhaal
5. Doneren / Steunen
6. Herinneringsactie
7. De tocht
8. Media & Updates
9. Sponsors & Contact
10. polish, SEO, toegankelijkheid, responsive QA

## 16.2 Waarom deze volgorde

- Home bepaalt visuele taal en hoofdconversie;
- Donatieprogressie is sitebreed belangrijk;
- Mijn verhaal en Doneren / Steunen vormen samen de sterkste donorflow;
- Herinneringsactie vraagt eigen toon maar profiteert van eerdere stijlbasis;
- De tocht en Media & Updates bouwen de campagnelevendigheid verder uit;
- Sponsors & Contact kan daarna gecontroleerd aansluiten.

---

# 17. Open ontwerp- en contentpunten na deze blueprintfase

De inhoudelijke structuur ligt nu vast, maar de volgende fasen moeten nog concrete keuzes maken over:

1. exacte hero-copy;
2. definitieve route-URL `/doneren` of `/steunen`;
3. vorm van productbeeldmateriaal;
4. exacte bestel-/contactcopy voor steunproducten;
5. technische vorm van donatieprogressie;
6. gebruik van RTV-audio/video;
7. losse sponsorlogo’s versus posterkaarten;
8. precieze motionregels;
9. uiteindelijke visuele hiërarchie per sectie.

Deze punten blokkeren de blueprintfase niet.

---

# 18. Volgende stap

De volgende logische fase is:

# **Visual & Asset Preparation Blueprint v1.0**

Daarin wordt vastgelegd:

- hoe iedere kernasset technisch en visueel wordt voorbereid;
- welke crops nodig zijn;
- welke beelden hero-, card-, background- of inline-assets worden;
- hoe sponsorvisuals en productvisuals straks behandeld worden;
- welke ontbrekende assets nog impact hebben op ontwerp;
- hoe assets worden georganiseerd voor de repo en latere Codex-uitvoering.

---

# 19. Samenvattende eindconclusie

Met deze Page Blueprints is de strategie vertaald naar concrete paginablauwdrukken.

De site krijgt nu een duidelijke ontwerpmatige ruggengraat:

- **Home** als campagnehub;
- **Mijn verhaal** als emotionele legitimatie;
- **De tocht** als fysieke concretisering;
- **Doneren / Steunen** als conversiecentrum;
- **Herinneringsactie** als waardige betekenislaag;
- **Media & Updates** als bewijs van campagnebeweging;
- **Sponsors & Contact** als regionale geloofwaardigheid en bereikbaarheid.

De volgende stap is nu niet opnieuw strategie, maar het voorbereiden van de visuele bouwstenen:

# **Visual & Asset Preparation Blueprint v1.0**
