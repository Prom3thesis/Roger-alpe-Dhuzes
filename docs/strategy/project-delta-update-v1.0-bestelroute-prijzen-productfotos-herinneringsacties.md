# Project Delta Update v1.0 — Bestelroute, prijzen, productfoto’s en herinneringsacties

## `roger-alpe-dhuzes.nl`

### Officiële inhoudelijke actualisatie na Master Brief, Annex, strategie, blueprints en reeds uitgevoerde Codex-buildfasen

---

# 0. Status en functie van dit document

Dit document is een **aanvullende projectdelta** voor:

# `roger-alpe-dhuzes.nl`

Deze update is opgesteld naar aanleiding van nieuwe, rechtstreeks van Roger Chappin ontvangen informatie over:

- directe donaties;
- definitieve prijzen van steunproducten;
- definitieve bestel- en betaalroute;
- varianten binnen de herinneringsactie;
- een nieuwe aanvullende herinneringsactie;
- nieuw aangeleverde productfoto’s.

Deze informatie is ontvangen **ná**:

1. System Prompt;
2. Master Brief v1.0;
3. Asset & Content Annex v1.0;
4. Projectfasering v2.0;
5. Projectspecifieke `AGENTS.md` v1.0;
6. Benchmarkonderzoek v1.0;
7. Website- en conversiestrategie v1.0;
8. Page Blueprints v1.0;
9. Visual & Asset Preparation Blueprint v1.0;
10. Technical Architecture Blueprint v1.0;
11. Codex Build Plan v1.0;
12. reeds uitgevoerde Codex Build Phases 01 t/m 08.

---

# 1. Bronstatus en prioriteit

## 1.1 Brontype

Deze delta is gebaseerd op:

- Rogers directe antwoord op de vraag over:
  - doneren;
  - bestellen;
  - betalen;
- de door Marduk vastgelegde samenvatting van dat antwoord;
- de bijbehorende screenshot van het mail-/documentantwoord waarin Rogers reactie zichtbaar is gemarkeerd.

---

## 1.2 Status van de informatie

De inhoud in dit document geldt als:

# **bevestigde actuele projectinformatie**

en moet vanaf nu worden gebruikt als **nieuwste feitelijke bron** voor onderdelen die hiermee samenhangen.

---

## 1.3 Voorrangsregel bij conflict

Wanneer eerdere documenten of reeds gebouwde code afwijken van deze delta, geldt:

# **Project Delta Update v1.0 gaat vóór op oudere projectinformatie voor de onderwerpen die hier worden geactualiseerd.**

Dit geldt specifiek voor:

- prijzen van bidons;
- status van productfoto’s;
- varianten van de herinneringsactie;
- bestel- en betaalroute;
- nieuwe jasje-herdenkingsactie.

---

# 2. Wat deze delta wél en niet verandert

## 2.1 Wat níet verandert

De bestaande hoofdstrategie blijft intact:

- Roger’s eigen campagne-identiteit blijft leidend;
- de website blijft een persoonlijke fundraisingcampagnesite;
- directe donaties blijven via de officiële Alpe d’HuZes-actiepagina lopen;
- de site krijgt geen eigen webshopcheckout;
- de site krijgt geen eigen donatiebetaalsysteem;
- de drie steunroutes blijven bestaan:
  1. direct doneren;
  2. steunproducten;
  3. herinneringsacties.

---

## 2.2 Wat wél verandert of wordt aangevuld

Deze delta actualiseert:

1. **bidonprijzen**;
2. **herinneringsactievarianten**;
3. **bestelroute**;
4. **betaalroute**;
5. **verzendkostenregel**;
6. **productfotostatus**;
7. **nieuwe jasjeactie als extra herinneringsroute**;
8. **de vervolgopdracht richting Codex na Fase 08**.

---

# 3. Directe donaties — bevestigd

## 3.1 Rogers bevestiging

Roger heeft bevestigd dat gewone directe donaties het handigst via zijn officiële Alpe d’HuZes-actiepagina lopen.

---

## 3.2 Definitieve conclusie voor de website

De website blijft voor directe donaties verwijzen naar:

```text
https://inschrijving.opgevenisgeenoptie.nl/fundraisers/rogerchappin36831
```

---

## 3.3 Gevolg voor technische scope

Niet bouwen:

- geen eigen donatiecheckout;
- geen Wero-flow;
- geen eigen bankoverschrijvingsmodule;
- geen custom betaalformulier voor algemene donaties.

Wel blijven gebruiken:

- CTA’s naar de officiële actiepagina;
- `DonationProgress`;
- centrale donation URL in de projectdata.

---

# 4. Definitieve prijzen steunproducten — correctie

## 4.1 Oude informatie die vervalt

De eerder vastgelegde bidonprijzen:

- plastic bidon **€5,95**;
- aluminium bidon **€5,95**;

zijn vanaf nu **vervallen**.

---

## 4.2 Nieuwe definitieve prijzen

| Steunproduct | Definitieve prijs |
| --- | ---: |
| Armbandje met Roger-logo | **€2,00** |
| Plastic bidon met Roger-logo | **€2,50** |
| Aluminium bidon met Roger-logo | **€3,50** |

---

## 4.3 Inhoudelijke positionering blijft gelijk

Deze producten blijven géén webshopartikelen, maar:

> **tastbare manieren om Roger te steunen en tegelijk rechtstreeks bij te dragen aan zijn Alpe d’HuZes-donaties.**

---

## 4.4 Opbrengstregel blijft bevestigd

Voor alle steunproducten geldt:

# **De volledige opbrengst gaat naar Rogers Alpe d’HuZes-donaties.**

---

# 5. Herinneringsactie — uitbreiding naar meerdere varianten

## 5.1 Oude informatie die wordt uitgebreid

Eerder werd de herinneringsactie op hoofdlijn beschreven als:

- kaarshouder met kaars en naam;
- prijs **€25,00**.

Deze kern blijft bestaan, maar is nu specifieker en uitgebreider bevestigd.

---

## 5.2 Definitieve herinneringsproducten

| Herinneringsvariant | Definitieve prijs |
| --- | ---: |
| Kaarshouder / vleugels | **€25,00** |
| Engel | **€35,00** |

---

## 5.3 Inhoudelijke verwerking

De pagina:

```text
/herinneringsactie
```

moet straks duidelijk maken dat er **meerdere tastbare herinneringsvormen** bestaan.

### Niet langer behandelen als:
- één enkel generiek kaarshouderproduct.

### Wel behandelen als:
- een waardige herinneringsactie met ten minste:
  - vleugelsvariant;
  - engelvariant.

---

## 5.4 Opbrengstregel

Voor beide herinneringsvarianten geldt:

# **De volledige opbrengst gaat naar Rogers Alpe d’HuZes-donaties.**

---

# 6. Nieuwe aanvullende herinneringsactie — schrijven op Rogers Alpe d’HuZes-jasje

## 6.1 Nieuwe bevestigde actie

Roger geeft aan dat er nog een extra actie komt:

> Bezoekers mogen voor **€10,00** op zijn Alpe d’HuZes-jasje schrijven.

---

## 6.2 Herdenkingsfunctie

Dit jasje blijft daarna:

# **als herinnering ophangen.**

---

## 6.3 Strategische plek op de website

Deze actie hoort inhoudelijk primair thuis op:

```text
/herinneringsactie
```

Omdat deze actie:

- direct verbonden is aan herdenken;
- persoonlijk en symbolisch is;
- niet past als normaal “product” binnen het steunproductengrid.

---

## 6.4 Secundaire verwijzing

Op:

```text
/doneren
```

mag deze actie compact worden benoemd als extra betekenisvolle steunvorm, maar de volledige uitleg hoort op de pagina **Herinneringsactie**.

---

## 6.5 Opbrengstregel

Voor deze jasjeactie geldt eveneens:

# **De opbrengst gaat naar Rogers Alpe d’HuZes-donaties.**

---

# 7. Definitieve bestelroute voor producten en herinneringsacties

## 7.1 Bestellen kan via

Roger bevestigt dat bezoekers bestellingen kunnen doorgeven via:

- WhatsApp;
- bellen;
- e-mail;
- Facebook.

---

## 7.2 Gevolg voor de website

De website moet voor:

- steunproducten;
- herinneringsproducten;
- jasjeactie;

geen directe checkout bouwen, maar bezoekers uitnodigen om contact op te nemen.

---

## 7.3 Geschikte CTA-richtingen

Toekomstige CTA’s kunnen bijvoorbeeld formuleren:

- **Bestel via contact**
- **Neem contact op over deze actie**
- **Vraag een product aan**
- **Neem contact op om mee te doen**

De exacte CTA-copy wordt per pagina later visueel en inhoudelijk afgestemd.

---

## 7.4 Contactinformatie

De website mag volgens eerdere projectafspraken publieke contactgegevens tonen.

Deze delta bevestigt dat contactroute functioneel nodig is voor:

- productbestellingen;
- herinneringsactie;
- jasjeactie.

De daadwerkelijk te gebruiken contactgegevens moeten in de code/projectdata correct worden ingevuld vanuit reeds bevestigde broninformatie.

---

# 8. Definitieve betaalroute na bestelling

## 8.1 Betaling verloopt ná contact/bestelling

Roger bevestigt dat hij na de bestelling de betaling regelt via:

- **Tikkie / betaalverzoek**;
- **cash bij aflevering**;
- **pinnen bij aflevering**.

---

## 8.2 Websitepositionering

De website moet dit kort en praktisch uitleggen, vooral op:

- `/doneren`;
- `/herinneringsactie`;
- mogelijk `/sponsors-contact` indien de contactpagina ook bestelinformatie bundelt.

---

## 8.3 Niet doen

Niet bouwen:

- geïntegreerde online productcheckout;
- betaalprovider-flow;
- eigen Tikkie-integratie;
- geautomatiseerde orderbevestiging.

---

# 9. Verzendkostenregel

## 9.1 Bevestigde afspraak

Roger bevestigt:

# **Verzendkosten zijn voor de besteller.**

---

## 9.2 Websiteverwerking

Deze regel moet duidelijk worden opgenomen waar fysieke producten of herinneringsobjecten worden beschreven.

Minimaal relevant op:

- `/doneren` bij steunproducten;
- `/herinneringsactie` bij herinneringsvarianten.

---

# 10. Nieuwe productfoto’s beschikbaar

## 10.1 Nieuwe assetstatus

Eerder gold:

> Productfoto’s ontbreken nog.

Dat is nu niet langer volledig juist.

Er zijn inmiddels **eerste bruikbare productfoto’s** aangeleverd.

---

## 10.2 Bronlocatie

De bestanden staan in:

```text
C:\Users\Cyb3l\Documents\roger-alpe-dhuzes.nl\source-assets\images-roger-alpe-dhuzes\
```

---

## 10.3 Nieuwe bestandsnamen

De nieuwe aangeleverde productfoto’s zijn:

```text
ALP-2046-Fles-01
ALP-2046-Fles-02
armband-kind-1
```

De daadwerkelijke bestandsextensies moeten lokaal door Codex worden vastgesteld.

---

## 10.4 Verwachte inhoudelijke inzet

Deze beelden kunnen later worden beoordeeld en ingezet bij:

- `/doneren`;
- steunproductenblok op de homepage, indien visueel passend;
- productcards of productsecties;
- eventuele conversieverbetering van de tweede steunroute.

---

## 10.5 Belangrijke nieuwe planningsregel

Codex moet vanaf nu niet meer uitgaan van:

> “Er zijn geen productfoto’s aanwezig.”

maar van:

> **“Er zijn eerste productfoto’s beschikbaar; deze moeten visueel worden beoordeeld en waar passend worden verwerkt.”**

---

## 10.6 Mogelijk aanvullende foto’s later

Roger heeft aangegeven dat hij mogelijk nog meer foto’s via WhatsApp stuurt zodra hij alles terug heeft uit de aanhangwagen.

### Status
- extra productfoto’s zijn **mogelijk**, maar nog niet bevestigd/aangeleverd;
- huidige bouw mag niet wachten op mogelijke extra foto’s;
- huidige drie bestanden mogen als eerste beschikbare productassetset worden beoordeeld.

---

# 11. Impact op reeds gebouwde pagina `/doneren`

## 11.1 Bestaande pagina is inhoudelijk verouderd op onderdelen

Codex Build Phase 08 heeft `/doneren` gebouwd op basis van toen beschikbare informatie.

Deze pagina moet nu worden gecorrigeerd.

---

## 11.2 Verplichte correcties op `/doneren`

### Prijzen aanpassen
- plastic bidon: van **€5,95** naar **€2,50**
- aluminium bidon: van **€5,95** naar **€3,50**

### Productfotostatus aanpassen
- productcards mogen nu worden verrijkt met daadwerkelijk beschikbare productfoto’s, mits de beeldkwaliteit en mapping passend zijn.

### Bestelroute toevoegen of verduidelijken
- WhatsApp;
- bellen;
- e-mail;
- Facebook.

### Betaalroute toevoegen
- Tikkie / betaalverzoek;
- cash bij aflevering;
- pinnen bij aflevering.

### Verzendkostenregel toevoegen
- verzendkosten zijn voor de besteller.

### Herinneringsactie-teaser actualiseren
- vleugelsvariant €25;
- engelvariant €35;
- jasjeactie €10 eventueel compact benoemen of bewust doorverwijzen naar de latere herinneringsactiepagina.

---

# 12. Impact op toekomstige pagina `/herinneringsactie`

## 12.1 Verplichte inhoud voor Codex Prompt 09

De toekomstige Herinneringsactiepagina moet nu rekening houden met:

### Herinneringsvarianten
- Kaarshouder / vleugels — **€25,00**
- Engel — **€35,00**

### Extra herdenkingsactie
- Schrijven op Rogers Alpe d’HuZes-jasje — **€10,00**
- Jasje blijft als herinnering ophangen.

### Bestel-/deelnameproces
- aanmelden/bestellen via:
  - WhatsApp;
  - bellen;
  - e-mail;
  - Facebook.

### Betaling
- Tikkie / betaalverzoek;
- cash bij aflevering;
- pinnen bij aflevering.

### Verzendkosten
- voor de besteller, waar fysieke verzending relevant is.

### Opbrengst
- volledige opbrengst gaat naar Rogers Alpe d’HuZes-donaties.

---

# 13. Impact op centrale datafiles

## 13.1 `support-products.ts`

Moet worden bijgewerkt:

| Product | Oude prijs | Nieuwe prijs |
| --- | ---: | ---: |
| Plastic bidon | €5,95 | **€2,50** |
| Aluminium bidon | €5,95 | **€3,50** |

---

## 13.2 Productimagepaths

Na assetverwerking kunnen imagepaths worden toegevoegd aan relevante productrecords.

Voorlopig ligt voor de hand:

- flesfoto’s → bidonrecords, na lokale visuele beoordeling;
- armbandfoto → armbandrecord.

Codex moet de exacte koppeling beoordelen op basis van de daadwerkelijke beelden.

---

## 13.3 Mogelijke aanvullende datafiles

Afhankelijk van de gekozen architectuur mag later worden overwogen:

```text
src/data/remembrance-actions.ts
```

of een vergelijkbare compacte datafile voor:

- vleugels;
- engel;
- jasjeactie.

Dit is vooral relevant wanneer de Herinneringsactiepagina deze acties herbruikbaar en helder moet renderen.

---

# 14. Impact op `AGENTS.md`

`AGENTS.md` moet na deze delta gericht worden geactualiseerd.

## Minimaal opnemen of corrigeren

1. bronhiërarchie uitbreiden met:
   - `Project Delta Update v1.0 — Bestelroute, prijzen, productfoto’s en herinneringsacties`;

2. bidonprijzen corrigeren:
   - plastic bidon **€2,50**;
   - aluminium bidon **€3,50**;

3. herinneringsactie actualiseren:
   - vleugels **€25**;
   - engel **€35**;

4. jasjeactie toevoegen:
   - schrijven op Rogers Alpe d’HuZes-jasje **€10**;
   - jasje blijft als herdenking ophangen;

5. bestelroute vastleggen:
   - WhatsApp;
   - bellen;
   - e-mail;
   - Facebook;

6. betaalroute vastleggen:
   - Tikkie / betaalverzoek;
   - cash bij aflevering;
   - pinnen bij aflevering;

7. verzendkostenregel:
   - verzendkosten voor besteller;

8. productfotostatus aanpassen:
   - eerste productfoto’s beschikbaar;
   - aanvullende foto’s mogelijk later.

---

# 15. Directe vervolgworkflow na dit document

Vanaf dit document is de correcte volgorde:

## Stap 1
# `AGENTS.md` actualiseren op basis van deze delta

## Stap 2
# Codex Delta Correctieprompt opstellen voor `/doneren`

Deze correctieprompt moet:

- `Project Delta Update v1.0` verplicht laten lezen;
- prijzen corrigeren;
- productfoto’s verwerken;
- bestel-/betaalroute toevoegen;
- verzendkostenregel opnemen;
- Herinneringsactie-teaser actualiseren.

## Stap 3
# Daarna pas: Codex Prompt 09 — Herinneringsactie Page

Prompt 09 moet vanaf het begin deze delta gebruiken als verplichte bron.

---

# 16. Samenvattende delta-conclusie

De hoofdstrategie van `roger-alpe-dhuzes.nl` blijft ongewijzigd, maar de campagne-input is concreter en sterker geworden.

De belangrijkste actualisaties zijn:

1. directe donaties via de officiële actiepagina zijn door Roger bevestigd;
2. bidonprijzen zijn gecorrigeerd:
   - plastic €2,50;
   - aluminium €3,50;
3. herinneringsactie kent nu meerdere varianten:
   - vleugels €25;
   - engel €35;
4. er komt een extra jasje-herdenkingsactie:
   - schrijven op het Alpe d’HuZes-jasje €10;
5. bestelroute is definitief:
   - WhatsApp, bellen, e-mail, Facebook;
6. betaalroute is bevestigd:
   - Tikkie/betaalverzoek, cash of pin bij aflevering;
7. verzendkosten zijn voor de besteller;
8. eerste productfoto’s zijn beschikbaar en moeten vanaf nu worden meegenomen bij toekomstige asset- en pagina-updates.

Deze delta vormt vanaf nu de **leidende actuele aanvulling** voor alle volgende uitvoeringsstappen rond:

- Doneren / Steunen;
- steunproducten;
- Herinneringsactie;
- bestel- en betaalinformatie;
- productassets.
