# Roger Alpe d’HuZes — Post-Launch Continuation & Completion Plan v1.0

**Status:** Strategisch vervolgdocument — versie 1.0  
**Documentdoel:** Vastleggen hoe `roger-alpe-dhuzes.nl` na de eerste livegang gecontroleerd wordt doorontwikkeld van een sterke launchversie naar een vollediger, redactioneel sterker en door Roger zelf te beheren campagneplatform.  
**Datum:** 2026-05-17  
**Plaats binnen de documentatieketen:** Dit document opent de formele **Post-Launch Continuation & Completion Track** en vormt de brug tussen de reeds gelanceerde website, de nieuw aangeleverde inhoud van Roger en de eerstvolgende technische en contentmatige vervolgfasen.

---

# 1. Executive Summary

`roger-alpe-dhuzes.nl` is live gegaan als inhoudelijk sterke, professioneel vormgegeven campagnesite met een duidelijke narratieve kern, heldere conversieroutes en voldoende functionaliteit voor publieke lancering. De keuze om tijdig live te gaan was juist: Roger beschikte daardoor snel over een deelbare website voor donateurs, sponsors, familie, media en regionale betrokkenen.

De livegang was echter bewust geen eindpunt. Enkele onderdelen zijn geparkeerd, verkort of in een launch-ready minimumvorm uitgevoerd om de site snel publiek bruikbaar te maken. Inmiddels is er nieuwe inhoudelijke input van Roger aangeleverd en is een belangrijke nieuwe functionele wens bevestigd: **Roger wil zelf dagboek- en updateberichten kunnen publiceren, zonder dat Marduk telkens handmatig de site moet aanpassen, rebuilden en opnieuw uploaden.**

Daarmee verandert de projectfase wezenlijk:

> **Van launch MVP naar completion, editorial strengthening en self-managed update capability.**

De vervolgroute moet nu drie sporen samenbrengen:

1. **Redactionele versterking** — selectieve integratie van de nieuwe Content-Manager-PDF in `/mijn-verhaal`, updates en de bredere contenttoon.
2. **Content operations / CMS** — een praktische oplossing waarmee Roger zelf dagboek- en updatecontent beheert.
3. **Technische heroriëntatie** — opnieuw beoordelen of de huidige statische exportarchitectuur nog past, en daarna pas Phase 14 — Dynamic Donation Progress opnieuw plannen.

---

# 2. Wat reeds live en stabiel is

## 2.1 Publieke websitebasis

De huidige live site beschikt over een compleet publiek campagne-ecosysteem:

- **Home** — verhaalopening, donatie-CTA, tocht, media, steunroutes, herinneringsactie en sponsors.
- **Mijn verhaal** — Rogers belofte aan zijn moeder, fysieke transformatie en waarom steun nodig is.
- **De tocht** — route, voorbereiding en trainingscontext.
- **Doneren / Steunen** — centrale conversiepagina voor directe donatie, steunproducten en praktische bestelroute.
- **Herinneringsactie** — kaarshouder/vleugels, engel en jasjeactie.
- **Media & Updates** — bestaande contenthub met campagnes, trainingsupdates, herinnering en RTV Parkstad.
- **Sponsors & Contact** — regionale steun, contactroutes en bestel-/deelname-informatie.

## 2.2 Functionele livebasis

De volgende onderdelen zijn functioneel afgerond en hoeven niet opnieuw strategisch ter discussie te worden gesteld:

- officiële donatieroute naar de Alpe d’HuZes-actiepagina;
- centrale contactgegevens en bestelroutes;
- steunproducten met bevestigde prijzen;
- herinneringsactie met bevestigde varianten en bedragen;
- RTV Parkstad-verwijzing en video-CTA;
- mobile/tablet navigatie;
- statische export naar `out/` en live hosting via Cloud86/Plesk;
- SSL/live domeinstatus.

## 2.3 Inhoudelijke sterkte van de huidige liveversie

De bestaande site heeft al een duidelijke projectidentiteit:

- Rogers verhaal is leidend, niet de techniek;
- doneren blijft de hoofdroute;
- herinnering, training en steun worden niet op één hoop gegooid;
- de site bevat een overtuigende balans tussen emotie, campagnepraktijk en regionale geloofwaardigheid;
- de website is geschikt om nu al te delen en bezoekers door te sturen naar actie.

---

# 3. Welke eerdere fasen bewust zijn geparkeerd of gecomprimeerd

## 3.1 Phase 14 — Dynamic Donation Progress

**Status:** Open en bewust geparkeerd.

De dynamische donatiestand is nog niet uitgewerkt of geïmplementeerd. Tijdens de launchvoorbereiding is bewust gekozen voor een betrouwbaar fallbackmodel:

- de site toont het doelbedrag;
- de actuele tussenstand blijft verwezen naar de officiële Alpe d’HuZes-actiepagina;
- er wordt geen onbetrouwbare of stale lokale stand getoond.

Deze keuze blijft inhoudelijk juist. Phase 14 moet niet alsnog impulsief worden gebouwd; zij moet opnieuw worden gepland nadat de CMS- en hostingrichting is besloten.

## 3.2 SEO, metadata en indexability

**Status:** Nog te verbeteren in een post-launch optimalisatieronde.

De site is live en inhoudelijk deelbaar, maar de volgende onderdelen verdienen een gerichte vervolgpass:

- unieke metadata per kernpagina;
- social preview / Open Graph-inrichting;
- technische indexeerbaarheid;
- sitemap/robots-controle indien nog niet volledig uitgewerkt;
- titel- en beschrijvingskwaliteit per pagina;
- later eventueel structured data waar functioneel zinvol.

Dit spoor is belangrijk, maar moet worden afgestemd op de CMS-keuze zodat metadata voor toekomstige updates/diary-content meteen correct wordt ontworpen.

## 3.3 Content- en microcopy-polish

**Status:** De hoofdcopy werkt, maar delen kunnen menselijker, vloeiender en minder statisch.

De huidige site gebruikt op verschillende plekken korte labels, tussenkoppen en ondersteunende zinnen die functioneel goed zijn maar nog wat generiek of gestileerd kunnen aanvoelen. De nieuwe PDF van Roger biedt kansen om:

- Rogers eigen stem gerichter door te laten klinken;
- specifieke passages persoonlijker te maken;
- delen van `/mijn-verhaal` inhoudelijk rijker te onderbouwen;
- historisch updatecontent beter te laden met zijn eigen formulering.

## 3.4 Performance- en beeldoptimalisatie

**Status:** Niet launch-blocking, wel logisch in een latere kwaliteitsronde.

De live site bevat inmiddels een behoorlijke hoeveelheid visueel materiaal. Na de strategische CMS/contentkeuze is een gerichte beeld- en performancepass logisch:

- bestandsgroottes beoordelen;
- eventuele conversie naar modernere bestandsformaten;
- visuele kwaliteit versus laadsnelheid afwegen;
- homepage- en updatebeeldgebruik optimaliseren.

## 3.5 Zelfbeheer voor Roger

**Status:** Nog niet aanwezig; nu expliciet bevestigd als nieuwe projectbehoefte.

Tot nu toe werden updatecontent en site-inhoud door Marduk of Codex beheerd. Roger heeft nu gevraagd of hij zelf een soort dagboek kan bijhouden. Daarmee is een nieuwe structurele behoefte ontstaan:

> **Roger moet zelfstandig updates kunnen publiceren, zonder operationele afhankelijkheid van Marduk.**

---

# 4. Nieuwe clientinput sinds livegang

## 4.1 Nieuwe Content-Manager-PDF

Er is een nieuwe inhoudelijke bron beschikbaar:

```text
Content-Manager-Roger Chappin.pdf
```

Deze bron bevat:

- een uitgebreider autobiografisch verhaal over jeugd, gezondheid, band met moeder, Alpe d’HuZes en inschrijving;
- een meer persoonlijke formulering van Rogers motivatie;
- remembrance-/herinneringstekst;
- meerdere historische updates die geschikt zijn voor diary/updateverwerking;
- toonmateriaal dat Rogers eigen stem directer laat horen.

De PDF moet **selectief** worden ingezet:

- niet blind kopiëren;
- niet automatisch als nieuwste bron van waarheid beschouwen;
- later bevestigde projectupdates en deltabesluiten blijven leidend waar gegevens conflicteren.

## 4.2 Nieuwe wens: zelfstandig dagboek / CMS

De volgende beslissing is bevestigd:

- Roger publiceert zelf;
- Marduk moet zo min mogelijk structureel onderhoud hebben;
- het CMS-scope blijft beperkt tot **Dagboek / Updates**;
- de website mag van pure static export afwijken als dat praktisch noodzakelijk is;
- er is geen redactioneel goedkeuringsproces nodig: Roger is zelf verantwoordelijk voor tekst, taal en publicatiekeuze.

---

# 5. Nieuwe fase-definitie

De website beweegt nu in de volgende fase:

# **Post-Launch Continuation & Completion Track**

Deze fase kent vier onderliggende projectdoelen:

## 5.1 Editorial strengthening

De site moet inhoudelijk groeien van een sterke, compacte liveversie naar een rijkere uitvoering waarin:

- Rogers verhaal verfijnder en persoonlijker wordt;
- updatecontent meer continuïteit krijgt;
- nieuwe en bestaande content beter op elkaar aansluiten;
- de site minder als afgeronde brochure en meer als levende campagneomgeving gaat voelen.

## 5.2 Self-managed update capability

Roger moet een eigen publicatiekanaal krijgen voor:

- dagboekberichten;
- trainingsupdates;
- korte campagnevoortgang;
- eventueel eigen reflecties of aankondigingen.

Deze functionaliteit hoort thuis in **Media & Updates**.

## 5.3 Technical architecture reconsideration

De huidige site werkt via static export. Dat is passend geweest voor livegang, maar sluit niet vanzelf aan op zelfstandig publiceren door Roger. Daarom moet worden beoordeeld:

- of de site dynamischer moet worden;
- of hosting/publishflow moet wijzigen;
- hoe CMS-content zonder Marduks handmatige rebuilds zichtbaar wordt;
- hoe dit later samenhangt met de dynamische donatiestand.

## 5.4 Post-launch quality layer

Zodra contentarchitectuur en CMS-keuze helder zijn, volgt een kwaliteitslaag:

- SEO & metadata;
- contentpolish;
- performance / beeldoptimalisatie;
- eventuele homepage latest-update teaser.

---

# 6. Aanbevolen nieuwe projectvolgorde

De volgende volgorde is strategisch het meest coherent:

## Stap 1 — Deze drie vervolgdocumenten formeel vaststellen

1. **Post-Launch Continuation & Completion Plan v1.0**
2. **Content Integration Review v1.0**
3. **CMS & Content Operations Decision v1.0**

Deze drie documenten vormen samen de nieuwe richtinggevende laag.

## Stap 2 — CMS/hosting/operations besluit vertalen naar uitvoerbare technische fase

Na vaststelling van de CMS-richting moet één expliciete technische voorbereidingsfase volgen:

- CMS-implementatiearchitectuur;
- hosting-/deploybesluit;
- contentmodel;
- migratiestrategie voor bestaande updates;
- relatie tot huidige static export.

## Stap 3 — Contentintegratie ontwerpen en uitvoeren

Daarna volgt gerichte inhoudelijke verwerking:

- `/mijn-verhaal` editorial upgrade;
- selectie van PDF-passages;
- eventuele uitbreiding of aanscherping van bestaande update-items;
- toevoegen van ontbrekende historische diary/update-content wanneer strategisch nuttig.

## Stap 4 — CMS implementeren voor Dagboek & Updates

De daadwerkelijke bouw van het CMS en de koppeling met `Media & Updates` volgt nadat de inhoudelijke structuur definitief is gekozen.

## Stap 5 — SEO, metadata en indexability uitvoeren

Na de CMS- en contentstructuur moet de vindbaarheidslaag aansluiten op de definitieve pagina- en contentarchitectuur:

- metadata hoofdroute;
- metadata updates/detailposts;
- social cards;
- sitemap/robots;
- eventueel structured data.

## Stap 6 — Phase 14 — Dynamic Donation Progress opnieuw plannen

Pas daarna wordt Phase 14 opnieuw beoordeeld:

- de technische mogelijkheid verandert mogelijk door de CMS/hostingkeuze;
- de site kan dan wellicht server-side of via revalidation slimmer werken;
- betrouwbare bron-/updatekeuze blijft vereist.

## Stap 7 — Laatste post-launch QA & polish

Na CMS/content/SEO/donationbesluiten volgt een eindronde:

- UX-consistentie;
- mobile flow;
- inhoudsritme;
- interne links;
- performance;
- conversiecontrole.

---

# 7. Besluitoverzicht

## 7.1 Wat vaststaat

- De live site blijft het fundament.
- Er komt geen herstart van het project.
- Roger wil zelf kunnen publiceren.
- Het dagboek hoort onder **Media & Updates**.
- De homepage wordt geen volwaardige dagboekfeed.
- Nieuwe PDF-content wordt selectief geïntegreerd.
- Phase 14 blijft open en wordt pas opnieuw gepland na CMS/hostingbesluit.

## 7.2 Wat deze fase nadrukkelijk niet doet

- geen directe code-implementatie;
- geen nieuwe Codex prompt;
- geen live site rewrite;
- geen CMS-bouw zonder besluitvorming;
- geen automatische vervanging van huidige tekst door de PDF;
- geen heropening van de oorspronkelijke launchstrategie.

---

# 8. Samenvattende strategische conclusie

`roger-alpe-dhuzes.nl` is niet langer slechts een live campagnesite die nog “wat punten open heeft”. De site is nu een functioneel gepubliceerd campagneplatform dat in de volgende fase moet uitgroeien tot:

1. **een redactioneel rijkere verhaalomgeving;**
2. **een levende actualiteitenhub;**
3. **een door Roger zelf te onderhouden dagboek- en updatekanaal;**
4. **een technisch robuuster systeem dat toekomstige dynamic features verantwoord kan dragen.**

Daarom moet de projectvolgorde vanaf nu niet beginnen met losse fixes, maar met de formele besluitlaag die in deze post-launch track wordt vastgelegd. De hierna logische stap is het goedkeuren van de contentintegratie- en CMS-besluitdocumenten, waarna de eerstvolgende technische buildfase scherp en zonder koersruis kan worden voorbereid.
