# Visual & Asset Preparation Blueprint v1.0 — `roger-alpe-dhuzes.nl`

## 0. Status en functie van dit document

Dit document vertaalt de afgeronde strategische en pagina-inhoudelijke keuzes naar een **concrete visuele assetvoorbereiding** voor:

# `roger-alpe-dhuzes.nl`

Het bouwt voort op:

1. de definitieve **System Prompt**;
2. **Master Brief v1.0**;
3. **Asset & Content Annex v1.0**;
4. **Projectfasering v2.0**;
5. **Projectspecifieke AGENTS.md v1.0**;
6. **Benchmarkonderzoek v1.0**;
7. **Website- en conversiestrategie v1.0**;
8. **Page Blueprints v1.0**.

Dit document bepaalt:

- welke beeldassets leidend zijn;
- welke assets hero-, editorial-, inline-, card-, background- of documentary-assets worden;
- welke beelden vóór implementatie moeten worden geoptimaliseerd;
- welke crops en uitsneden nodig zijn voor desktop en mobiel;
- hoe assets logisch worden hernoemd en opgeslagen;
- hoe sponsorvisuals, RTV-media, route-map, portretten en herinneringsbeelden worden behandeld;
- welke ontbrekende productassets nog invloed hebben op de bouw;
- welke visuele randvoorwaarden later direct in Codex-prompts moeten worden opgenomen.

Dit document is **geen design system** en **geen technische implementatiehandleiding**, maar vormt de noodzakelijke visuele brug tussen de Page Blueprints en de latere **Technical Architecture Blueprint v1.0**.

---

# 1. Visuele hoofdstrategie

## 1.1 Twee beeldlagen moeten bewust worden gecombineerd

De website moet visueel worden opgebouwd uit twee complementaire lagen.

### Laag 1 — Premium campagnelaag

Deze laag geeft de site:

- merkidentiteit;
- visuele kwaliteit;
- emotionele lading;
- “WAUW”-gevoel;
- sterke eerste indruk.

Kernassets:

- Roger-campagnelogo;
- sterk kleurportret van Roger;
- zwart-wit portret van Roger;
- route-map;
- verzorgde donatie- en conversieblokken.

---

### Laag 2 — Documentaire echtheidslaag

Deze laag bewijst dat de campagne echt leeft en niet alleen “mooi vormgegeven” is.

Kernassets:

- trainingsfoto’s;
- RTV Parkstad-foto;
- kaarshouders/herinneringsfoto;
- sponsorvisuals;
- campagneflyers indien contextueel nodig.

---

## 1.2 Strategisch uitgangspunt

De site mag **premium** zijn, maar mag nooit afstandelijk of kunstmatig worden.

De gewenste balans is:

> **Campagnewaardig vormgegeven, maar zichtbaar geworteld in echte mensen, echte steun en echte voorbereiding.**

---

# 2. Assettypen binnen de website

Voor latere design- en Codex-fasen worden assets ingedeeld in functionele gebruikstypen.

| Assettype | Functie |
| --- | --- |
| **Hero asset** | Dominant bovenaan een pagina of hoofdsectie |
| **Editorial asset** | Beeld dat een verhaalblok inhoudelijk versterkt |
| **Inline asset** | Ondersteunend beeld binnen een sectie |
| **Card asset** | Afbeelding in kaart/grid/teaser |
| **Documentary asset** | Echte voortgang, training, media of bewijs |
| **Background accent** | Subtiel visueel element, nooit inhoudelijk dragend |
| **Reference-only asset** | Wel relevant als bron, niet direct op de website |
| **Download/context asset** | Alleen inzetbaar als downloadbare flyer of secundair campagnemateriaal |

---

# 3. Prioriteitenmodel visueel bevestigd

## 3.1 Prioriteit A — moet in de eerste volwaardige websiteversie serieus worden ingezet

| Asset | Hoofdfunctie |
| --- | --- |
| Roger-campagnelogo | Branding |
| Kleurportret Roger | Home-hero / premium campagnebeeld |
| Zwart-wit portret Roger | Mijn verhaal / reflectieve verhaallaag |
| Route-map | De tocht |
| Kaarsenfoto | Herinneringsactie |
| RTV Parkstad-foto | Media & Updates / credibility |

---

## 3.2 Prioriteit B — sterke ondersteunende assets

| Asset | Hoofdfunctie |
| --- | --- |
| Trainingsfoto’s | De tocht / Media & Updates |
| Sponsorvisuals | Sponsors & Contact / compacte homepageproof |
| Donatieflyers | Copybron / optioneel download- of contextmateriaal |
| Productfoto’s indien later toegevoegd | Doneren / Steunen |

---

## 3.3 Prioriteit C — optioneel of contextueel

| Asset | Gebruik |
| --- | --- |
| DJ Renato-visual | Secundaire media-context |
| Rode Kruis-foto | Alleen bij latere “Wie is Roger?”-verbreding |
| Lokale/carnavaleske foto | Niet in v1-kernsite |
| Gefotografeerde fysieke routekaarten | Referentie-only, niet primaire webvisual |

---

# 4. Aanbevolen repo-assetstructuur

Wanneer de website technisch wordt opgezet, wordt onderstaande assetstructuur aanbevolen.

```text
public/
  images/
    brand/
      roger-campaign-logo.jpg

    hero/
      roger-portrait-color.png
      roger-portrait-bw.jpg

    story/
      roger-training-treadmill-01.jpg
      roger-training-treadmill-02.jpg

    route/
      alpe-dhuzes-walk-route-map.png
      route-reference-paper-01.jpeg
      route-reference-paper-02.jpeg

    remembrance/
      remembrance-candles-kaarsenhouders.jpg

    media/
      roger-rtv-parkstad-studio.jpg
      dj-renato-artwork.jpg

    sponsors/
      sponsor-car-detailing-kissel.jpg
      sponsor-hormati-gym.jpg
      sponsor-goc-parkstad.jpg
      sponsor-vog-parkstad.jpg
      sponsor-ff-frietje.jpg

    campaign/
      flyer-samen-de-berg-op.jpg
      flyer-samen-tegen-kanker.jpg
      flyer-extra-campaign-visual.jpg

    products/
      product-armbandje-roger-logo.jpg
      product-plastic-bidon-roger-logo.jpg
      product-aluminium-bidon-roger-logo.jpg
```

## 4.1 Toelichting

- De mapnamen zijn semantisch, niet technisch ingewikkeld.
- Assets blijven vindbaar voor Codex.
- Toekomstige uitbreiding blijft overzichtelijk.
- Productafbeeldingen krijgen alvast een duidelijke bestemming, ook als deze op dit moment nog niet beschikbaar zijn.

---

# 5. Bestandshernoeming — aanbevolen mapping

## 5.1 Kernassets

| Origineel bestand | Aanbevolen nieuwe bestandsnaam |
| --- | --- |
| `logo roger.jpg` | `roger-campaign-logo.jpg` |
| `ChatGPT Image May 14, 2026, 12_52_17 PM.png` | `roger-portrait-color.png` |
| `651617342_122273809382247209_6754871403334462086_n.jpg` | `roger-portrait-bw.jpg` |
| `Route-map-Walk-AlphenHuZes-May 14, 2026, 01_32_09 PM.png` | `alpe-dhuzes-walk-route-map.png` |
| `668697205_122279211674247209_1574857518485809294_n.jpg` | `remembrance-candles-kaarsenhouders.jpg` |
| `696625666_122284354736247209_373003303774944727_n.jpg` | `roger-rtv-parkstad-studio.jpg` |

---

## 5.2 Trainingsassets

| Origineel bestand | Aanbevolen nieuwe bestandsnaam |
| --- | --- |
| `650482841_122273745596247209_9009091578611468747_n.jpg` | `roger-training-treadmill-01.jpg` |
| `650974825_122273745536247209_6897994896896499768_n.jpg` | `roger-training-treadmill-02.jpg` |

---

## 5.3 Sponsorassets

| Origineel bestand | Aanbevolen nieuwe bestandsnaam |
| --- | --- |
| `697777835_122284256252247209_6327907816338936541_n.jpg` | `sponsor-car-detailing-kissel.jpg` |
| `697792477_122284256456247209_6191070273780802803_n.jpg` | `sponsor-hormati-gym.jpg` |
| `697105992_122284256528247209_3019246455993245590_n.jpg` | `sponsor-goc-parkstad.jpg` |
| `697792964_122284256678247209_7893189137934384438_n.jpg` | `sponsor-vog-parkstad.jpg` |
| `697777828_122284256894247209_7439226414132020513_n.jpg` | `sponsor-ff-frietje.jpg` |

---

## 5.4 Campagne- en referentieassets

| Origineel bestand | Aanbevolen nieuwe bestandsnaam |
| --- | --- |
| `606643732_122261676092247209_8944916158364414471_n.jpg` | `flyer-samen-de-berg-op.jpg` |
| `606010792_122261676050247209_6503063978715558092_n.jpg` | `flyer-samen-tegen-kanker.jpg` |
| `605606107_122261675876247209_7030219574312671334_n.jpg` | `flyer-extra-campaign-visual.jpg` |
| `697322635_122284257794247209_5228908713048278571_n.jpg` | `dj-renato-artwork.jpg` |
| `WhatsApp Image 2026-05-11 at 10.17.46.jpeg` | `route-reference-paper-01.jpeg` |
| `WhatsApp Image 2026-05-11 at 10.17.46 (1).jpeg` | `route-reference-paper-02.jpeg` |

---

# 6. Assetdetail 1 — Roger-campagnelogo

## 6.1 Strategische rol

Het logo is het primaire brandanker van de website.

Het bepaalt:

- kleurgebruik;
- sfeer;
- visuele richting;
- herkenbaarheid buiten social media;
- de koppeling met Rogers eigen campagne.

---

## 6.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| Header / navbar | Compact, helder leesbaar |
| Footer | Volledig of verkleind logo |
| Home hero | Ondersteunend, niet dominanter dan Roger zelf |
| Open Graph / social preview | Als onderdeel van share-artwork |
| Favicon / app icon | Alleen via vereenvoudigde afgeleide, niet direct volledige logo indien te gedetailleerd |

---

## 6.3 Cropping en presentatie

- Het logo mag niet worden uitgerekt.
- Geen willekeurige ronde maskers toevoegen als het logo daar niet voor bedoeld is.
- Witte of transparante achtergrondversie zou later nuttig zijn indien technisch beschikbaar.
- Voor kleine headerweergave moet worden getest of tekstdetails leesbaar blijven.

---

## 6.4 Visuele aanbeveling

Het logo moet als **identiteitsanker** functioneren, niet als herhaald decoratiepatroon.

---

# 7. Assetdetail 2 — Kleurportret Roger

## 7.1 Strategische rol

Dit is het sterkste premium campagnebeeld voor de homepage.

Het portret heeft:

- directe aanwezigheid;
- visuele rust;
- emotionele kracht;
- een editorial uitstraling.

---

## 7.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| Home hero | Primaire inzet |
| Eventueel andere prominente sectie | Alleen als herhaling nodig is |
| Social share afbeelding | Mogelijk, indien gecombineerd met merk- en CTA-laag |

---

## 7.3 Niet aanbevolen

- Niet overal herhalen.
- Niet als kleine thumbnail verspillen.
- Niet gebruiken als achtergrond waar tekst onleesbaar overheen komt.
- Niet combineren met te veel andere grote hero-assets in dezelfde eerste viewport.

---

## 7.4 Croppingadvies

### Desktop
- Voorkeursratio: ongeveer **4:5**, **3:4** of gecontroleerde verticale crop in een split hero.
- Focus op:
  - gezicht;
  - schouders;
  - blik;
  - voldoende negatieve ruimte voor layout.

### Mobiel
- Portret mag hoger en compacter gecropt worden.
- Gezicht moet zichtbaar blijven zonder dat kruin of kin agressief worden afgesneden.
- Tekst bij voorkeur niet rechtstreeks over het gezicht plaatsen.

---

## 7.5 Technische voorbereiding

- Behoud hoge kwaliteit.
- Optimaliseer later naar moderne webweergave.
- Heroversie niet te zwaar maken; de foto is waarschijnlijk LCP-gevoelig.

---

# 8. Assetdetail 3 — Zwart-wit portret Roger

## 8.1 Strategische rol

Dit portret is het beste beeld voor de meer reflectieve, persoonlijke pagina:

# Mijn verhaal

Het brengt:

- ernst;
- herinnering;
- rust;
- emotionele diepte.

---

## 8.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| Mijn verhaal hero | Primaire inzet |
| Herinneringsactie optioneel | Alleen wanneer de pagina visueel extra menselijke koppeling nodig heeft |
| Quote section | Mogelijk als editorial side-image |

---

## 8.3 Croppingadvies

### Desktop
- Editorial crop met voldoende ademruimte.
- Niet te strak; de beschouwende toon vraagt rust.

### Mobiel
- Verticale of portretcrop.
- Behoud blikrichting en gezicht als focus.

---

## 8.4 Niet aanbevolen

- Niet samen met het kleurportret in dezelfde hero.
- Niet op de homepage als duplicerende hoofdfoto wanneer het kleurportret daar al leidend is.
- Niet verwerken met overdreven filters; zwart-wit is al sterk genoeg.

---

# 9. Assetdetail 4 — Route-map

## 9.1 Strategische rol

De route-map is het kernbeeld van:

# De tocht

Hij maakt de fysieke uitdaging concreet en ondersteunt het idee dat de berg niet alleen symbolisch, maar ook daadwerkelijk zwaar is.

---

## 9.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| De tocht | Grote hoofdfeature |
| Home | Compacte teaser-preview |
| Eventueel update/media | Alleen als verwijzing naar de fysieke challenge |

---

## 9.3 Presentatieadvies

- De route-map mag **niet zwaar worden gecropt**.
- De gehele informatiedrager moet leesbaar blijven.
- Gebruik bij voorkeur:
  - contain-fit;
  - kaartframe;
  - schaduw of premium canvas-behandeling;
  - begeleidende copy ernaast of eronder.

---

## 9.4 Responsive advies

### Desktop
- Grote kaartweergave met tekst naast het beeld of direct eronder.
- Mag een prominente featuresectie zijn.

### Mobiel
- Niet te klein schalen.
- Voorkeur voor:
  - klikbare vergroting;
  - lightbox-achtige uitbreidingsmogelijkheid later;
  - of full-width kaart met goede marge.

---

## 9.5 Niet aanbevolen

- Niet gebruiken als achtergrondpatroon.
- Niet in een smalle card stoppen waardoor details onleesbaar worden.
- Niet vervangen door de gefotografeerde fysieke routebeelden.

---

# 10. Assetdetail 5 — Gefotografeerde fysieke routekaarten

## 10.1 Strategische rol

De twee WhatsApp-routebeelden zijn relevant als **referentie** en eventueel als documentaire bewijs van voorbereiding, maar niet als primaire websitevisual.

---

## 10.2 Classificatie

| Gebruik | Status |
| --- | --- |
| Primaire De tocht-map | Nee |
| Achtergrondasset | Nee |
| Referentiebron | Ja |
| Optioneel in updates/context | Alleen later indien nuttig |

---

## 10.3 Advies

Niet opnemen in de eerste kernwebsite, tenzij er later een specifieke updatepost komt over routevoorbereiding waarin ze contextueel waarde toevoegen.

---

# 11. Assetdetail 6 — Kaarsenfoto / herinneringsactie

## 11.1 Strategische rol

Dit is het hoofdbeeld van:

# Herinneringsactie

Het beeld bewijst dat de actie concreet bestaat en draagt de emotionele lading van de pagina.

---

## 11.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| Herinneringsactie hero | Primaire inzet |
| Home teaser | Sterke secundaire inzet |
| Doneren / Steunen | Compacte teaser bij derde steunroute |

---

## 11.3 Croppingadvies

Belangrijk:
- namen en objecten mogen niet onbedoeld afgesneden worden;
- de tastbaarheid van de kaarshouders moet behouden blijven;
- crop moet rustiger zijn dan op een commerciële productfoto.

### Desktop
- Brede hero of editorial split-layout is mogelijk.
- Beeld mag groot en rustig gepresenteerd worden.

### Mobiel
- Volledige hoofdonderwerpen zichtbaar houden.
- Bij voorkeur geen extreme crop; liever iets meer verticale ruimte.

---

## 11.4 Niet aanbevolen

- Niet als product-gridfoto behandelen.
- Niet te veel grafische prijstags over het beeld plaatsen.
- Niet visueel combineren met de bidons/armbandjes in één luchtig productblok.

---

# 12. Assetdetail 7 — RTV Parkstad-foto

## 12.1 Strategische rol

Dit is het primaire credibility-asset voor:

- Home-sectie “In de media”;
- Media & Updates.

Het beeld maakt zichtbaar dat Rogers campagne publiek besproken wordt.

---

## 12.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| Home | Compact maar opvallend media-card |
| Media & Updates | Featured media hero/card |
| Eventueel social preview voor media-item | Ja |

---

## 12.3 Croppingadvies

### Desktop
- Feature card met duidelijke foto en tekstgebied.
- Gezichten, microfoons en studiocontext moeten behouden blijven.

### Mobiel
- Afbeelding boven tekstblok.
- Zorg dat studio- en radio-context herkenbaar blijven.

---

## 12.4 Niet aanbevolen

- Niet degraderen tot mini-thumbnail.
- Niet combineren met te veel concurrerende visuals in dezelfde media-card.
- DJ Renato-artwork niet belangrijker maken dan deze foto.

---

# 13. Assetdetail 8 — Trainingsfoto’s

## 13.1 Strategische rol

De trainingsfoto’s bewijzen:

- voorbereiding;
- discipline;
- echtheid;
- dat de klim maanden vóór de berg begint.

---

## 13.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| De tocht | Hoofdsectie “Training in de praktijk” |
| Media & Updates | Ondersteunende documentaire gallery |
| Home | Hooguit één compacte verwijzing, niet noodzakelijk |

---

## 13.3 Presentatievorm

- Niet als glamourfotografie.
- Wel als zorgvuldig gekozen documentaire bewijslaag.
- Goede opties:
  - tweeluik;
  - asymmetrische galerie;
  - cardlayout met korte captions.

---

## 13.4 Croppingadvies

### Desktop
- Beelden kunnen naast elkaar.
- Crop moet Roger en de trainingscontext laten zien.

### Mobiel
- Eén onder één.
- Niet zo hard croppen dat treadmill/context verdwijnt.

---

## 13.5 Niet aanbevolen

- Niet als homepage-hero.
- Niet als achtergrondvulling.
- Niet overbewerken; authenticiteit is hier belangrijker dan perfectie.

---

# 14. Assetdetail 9 — Sponsorvisuals

## 14.1 Strategische rol

De sponsorbeelden tonen:

- regionale steun;
- sociale geloofwaardigheid;
- lokale verankering;
- groeiend draagvlak.

---

## 14.2 Voorkeursinzet

| Locatie | Gebruik |
| --- | --- |
| Home | Compacte sponsorstrip of korte grid |
| Sponsors & Contact | Vollediger grid |
| Media & Updates | Niet standaard nodig |

---

## 14.3 Huidige beperking

De aangeleverde assets zijn **posterachtige sponsorvisuals**, niet altijd losse logo-assets.

Daarom geldt:

### Voorkeursrichting
- later losse sponsorlogo’s gebruiken als die beschikbaar komen.

### V1-fallback
- bestaande sponsorvisuals als nette cards tonen;
- niet als chaotische posterwand;
- consistente cardratio waar mogelijk.

---

## 14.4 Sponsorvisuele hiërarchie

Sponsorassets moeten:

- zichtbaar zijn;
- netjes behandeld worden;
- maar nooit domineren over:
  - hero;
  - verhaal;
  - donatie;
  - herinneringsactie.

---

## 14.5 Croppingadvies

- Posterassets liever volledig tonen dan agressief bijsnijden.
- Als cardratio nodig is:
  - voeg neutrale achtergrond/container toe;
  - crop tekst of logo’s niet kapot.

---

# 15. Assetdetail 10 — Flyers en campagnevisuals

## 15.1 Strategische rol

De flyers zijn vooral:

- copybron;
- campagnemateriaal;
- optioneel downloadbare visual.

Ze zijn **niet** bedoeld als primaire websitesectie-afbeeldingen.

---

## 15.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| Doneren / Steunen | Eventueel downloadbaar campagnemateriaal |
| Media & Updates | Alleen wanneer relevant als campagne-uiting |
| Home | Niet als dominante visual |

---

## 15.3 Waarom terughoudend inzetten

- veel tekst;
- op mobiel beperkt leesbaar;
- website moet native copy gebruiken;
- flyerontwerp en websiteontwerp dienen verschillende functies.

---

# 16. Assetdetail 11 — DJ Renato-artwork

## 16.1 Strategische rol

Dit asset kan secundair context geven aan het RTV Parkstad-moment, maar is niet het belangrijkste media-beeld.

---

## 16.2 Aanbevolen inzet

| Locatie | Gebruik |
| --- | --- |
| Media & Updates | Optioneel klein ondersteunend asset |
| Home | Niet nodig |
| RTV featured blok | Alleen als het media-item inhoudelijk baat heeft bij extra context |

---

## 16.3 Niet aanbevolen

- Niet boven de RTV-studiofoto plaatsen.
- Niet als zelfstandig belangrijk mediablok gebruiken zonder duidelijke functie.

---

# 17. Assetdetail 12 — Rode Kruis-foto en lokale/carnavaleske foto

## 17.1 Strategische rol

Deze beelden tonen meer van Roger als persoon, maar ze zijn niet essentieel voor de primaire donor journey.

---

## 17.2 Classificatie

| Asset | Prioriteit | Gebruik in v1 |
| --- | ---: | --- |
| Rode Kruis-foto | C/B | Niet standaard opnemen |
| Lokale/carnavaleske foto | C | Niet opnemen in kernsite |

---

## 17.3 Mogelijke latere inzet

- bredere “Wie is Roger?”-sectie;
- informele updatepost;
- social content;
- pers-/mediaomgeving.

---

# 18. Ontbrekende productassets — steunproducten

## 18.1 Huidige status

De steunproducten zijn strategisch bevestigd:

- armbandje met Roger-logo — €2,00;
- plastic bidon met Roger-logo — €5,95;
- aluminium bidon met Roger-logo — €5,95.

Maar er zijn op dit moment nog **geen formeel vastgelegde productfoto’s** binnen de assetset.

---

## 18.2 Impact op ontwerp

De pagina **Doneren / Steunen** moet wel al rekening houden met een steunproductenblok.

Er zijn drie ontwerpopties:

### Optie A — Productfoto’s tijdig aanleveren
Beste optie.

Voordelen:
- overtuigender;
- tastbaarder;
- professioneler;
- beter voor conversie.

### Optie B — Tijdelijk tekstgebaseerd productblok
Werkbaar voor vroege bouw.

Voordelen:
- geen blokkade voor strategie;
- structuur kan al gebouwd worden.

Nadeel:
- minder sterk visueel.

### Optie C — Gestileerde iconische placeholderillustraties
Alleen gebruiken als de site echt visual support nodig heeft vóór productfoto’s beschikbaar zijn.

Nadeel:
- risico dat het te generiek of te “shopachtig” voelt.

---

## 18.3 Voorkeursbesluit

# Productfoto’s zijn zeer wenselijk vóór definitieve visuele bouw van Doneren / Steunen.

De blueprint mag technisch en structureel voorbereid worden, maar de uiteindelijke visual polish van de steunproducten wordt sterker als echte productfoto’s beschikbaar zijn.

---

## 18.4 Ideale aanleverspecificatie voor productfoto’s

Voor elk product bij voorkeur:

1. losse foto op rustige achtergrond;
2. duidelijk logo zichtbaar;
3. één foto waarin meerdere producten samen liggen;
4. bij voorkeur:
   - verticale crop;
   - vierkante crop;
   - of ruim origineel zodat later verschillende uitsneden mogelijk zijn.

---

# 19. Paginamatrix — assetplaatsing definitief

| Asset | Home | Mijn verhaal | De tocht | Doneren / Steunen | Herinneringsactie | Media & Updates | Sponsors & Contact |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Roger-logo | A | B | B | B | B | B | B |
| Kleurportret Roger | A | B optioneel | - | - | - | - | - |
| Zwart-wit portret Roger | B optioneel | A | - | - | B optioneel | - | - |
| Route-map digitaal | B | - | A | - | - | - | - |
| Papieren routefoto’s | - | - | Reference-only | - | - | C optioneel | - |
| Trainingsfoto’s | B optioneel | B optioneel | A | - | - | B | - |
| Kaarsenfoto | B | - | - | B | A | - | - |
| RTV Parkstad-foto | A/B | - | - | - | - | A | - |
| DJ Renato-visual | - | - | - | - | - | C/B | - |
| Sponsorvisuals | B | - | - | - | - | - | A |
| Flyers | - / C | C | - | B optioneel | B optioneel | C | - |
| Productfoto’s | B teaser indien beschikbaar | - | - | A | - | - | - |

---

# 20. Aanbevolen aspect ratio-richtlijnen

Deze ratios zijn geen technische verplichting, maar helpen bij consistent ontwerp.

| Assetfunctie | Gewenste ratio |
| --- | --- |
| Hero portrait | 4:5, 3:4 of ruim origineel voor responsive crop |
| Editorial portrait | 4:5 of native portret |
| Route-map | Native verhouding behouden |
| Memorial image | 4:3 of native beeldverhouding, afhankelijk van crop |
| RTV media card | 16:9 of 4:3 indien crop verantwoord is |
| Training cards | 4:5 of 3:4 |
| Sponsor cards | Container consistent, beeld zoveel mogelijk volledig tonen |
| Product cards | 1:1 of 4:5 |

---

# 21. Alt-tekststrategie

Alt-teksten moeten functioneel en betekenisvol zijn, niet keywordachtig of oververklarend.

## 21.1 Voorbeelden

| Asset | Richting alt-tekst |
| --- | --- |
| Roger-kleurportret | `Portret van Roger Chappin voor zijn Alpe d’HuZes-campagne.` |
| Route-map | `Routekaart van de wandelroute tijdens Alpe d’HuZes.` |
| Kaarsenfoto | `Kaarshouders met namen als onderdeel van Rogers herinneringsactie.` |
| RTV Parkstad | `Roger Chappin tijdens zijn interview bij RTV Parkstad.` |
| Trainingsfoto | `Roger traint op een loopband als voorbereiding op Alpe d’HuZes.` |
| Sponsorvisual | Afhankelijk van zichtbare sponsornaam en functie |

---

## 21.2 Belangrijk

- Decoratieve achtergrondelementen krijgen lege alt waar correct.
- Kernbeelden krijgen betekenisvolle alt.
- Geen uitgebreide verhalende paragrafen in alt-attributen.

---

# 22. Beeldoptimalisatieprincipes voor later

De technische uitvoer komt pas in de Technical Architecture Blueprint, maar visueel geldt alvast:

## 22.1 Beelden optimaliseren vóór livegebruik

- geen onnodig zware bestanden;
- juiste dimensies voor web;
- originele bronbestanden archiveren;
- webversies maken zonder merkbare kwaliteitsval.

---

## 22.2 Hero-assets extra zorgvuldig behandelen

Heroportretten en grote route-/memorialbeelden moeten:

- scherp blijven;
- niet zichtbaar gecomprimeerd ogen;
- wel performancevriendelijk worden voorbereid.

---

## 22.3 Next.js-richting later

Later moet worden beslist:

- statische public assets versus imports;
- `next/image`-gebruik;
- prioriteit voor hero-image;
- lazy loading voor lager geplaatste assets;
- eventueel AVIF/WebP-output.

---

# 23. Social preview / Open Graph assetrichting

## 23.1 Waarom dit relevant is

De website zal waarschijnlijk worden gedeeld via:

- WhatsApp;
- Facebook;
- lokale sponsorcircuits;
- RTV-/netwerkcontext.

Daarom is een sterke social preview belangrijk.

---

## 23.2 Aanbevolen OG-richting

Een dedicated Open Graph-afbeelding voor de homepagina, gebaseerd op:

- Roger-portret;
- campagnelogo;
- korte campagneregel;
- niet te veel kleine tekst;
- premium navy/oranje stijl.

---

## 23.3 Mogelijke extra OG-varianten later

| Pagina | Mogelijke OG-asset |
| --- | --- |
| Home | Roger-portret + campagnelogo |
| Herinneringsactie | Kaarsenfoto + rustige titel |
| Doneren / Steunen | Donatie-/actievisual met branding |
| Media & Updates | RTV Parkstad-foto of bredere campagnevisual |

Voor v1 kan één sterke homepage-OG-afbeelding voldoende zijn, tenzij later per pagina verfijning gewenst is.

---

# 24. Assetvoorbereidingschecklist vóór Codex-bouw

## 24.1 Verplicht klaarzetten

- [ ] Kernassets hernoemen volgens afgesproken naming;
- [ ] Mappenstructuur in `public/images/` voorbereid;
- [ ] Kleurportret en zwart-wit portret als afzonderlijke kernassets klaar;
- [ ] Route-map als digitale primaire asset klaar;
- [ ] Kaarsenfoto klaar;
- [ ] RTV Parkstad-foto klaar;
- [ ] Trainingsfoto’s klaar;
- [ ] Sponsorvisuals geordend;
- [ ] Flyers geordend maar niet overprioriteren;
- [ ] Papieren routebeelden apart als reference-only classificeren.

---

## 24.2 Sterk aanbevolen vóór definitieve ontwerpbuild

- [ ] Productfoto’s van armbandjes en bidons aanleveren;
- [ ] Losse sponsorlogo’s verzamelen indien mogelijk;
- [ ] Eventueel logo-export in transparante achtergrondversie;
- [ ] Bepalen of RTV-video/audio embedbaar is en welke thumbnail daarvoor wordt gebruikt.

---

# 25. Visuele beslissingen die nu definitief vastliggen

## 25.1 Hero
Home gebruikt primair:
- kleurportret Roger;
- merkaccenten;
- donatie-CTA;
- progressie.

## 25.2 Mijn verhaal
De pagina krijgt visueel primair:
- zwart-wit portret;
- rustige editorial verhaallijn.

## 25.3 De tocht
De route-map is de kernvisual.
Trainingsfoto’s vormen de documentaire tweede laag.

## 25.4 Doneren / Steunen
De pagina is conversiegericht.
Productvisuals zijn wenselijk, maar de inhoudelijke structuur staat vast.

## 25.5 Herinneringsactie
Kaarsenfoto is het hoofdbeeld.
Geen webshoptoon, geen productachtige beeldbehandeling.

## 25.6 Media & Updates
RTV Parkstad-foto is de belangrijkste medialegenditimatie.
DJ Renato-visual blijft secundair.

## 25.7 Sponsors & Contact
Sponsorvisuals worden respectvol gepresenteerd in een grid of cardstructuur.
Geen chaotische posterwand.

---

# 26. Belangrijkste open assetvragen

Deze vragen blokkeren de strategie niet, maar beïnvloeden de visuele en technische uitvoering:

1. Komen er nog echte productfoto’s van:
   - armbandjes;
   - plastic bidons;
   - aluminium bidons?
2. Zijn er losse sponsorlogo’s beschikbaar?
3. Is er een transparante of vectorachtige versie van Rogers logo beschikbaar?
4. Welke RTV Parkstad-media komt uiteindelijk als:
   - video;
   - audio;
   - externe link;
   - embed?
5. Is er behoefte aan een aparte downloadsectie voor flyers of niet?

---

# 27. Directe input voor latere Technical Architecture Blueprint

De volgende technische fase moet rekening houden met:

- de voorgestelde `public/images/`-structuur;
- optimalisatie van hero-LCP;
- responsive crops;
- route-map zoombaarheid of vergrootgedrag;
- assetdata voor sponsors;
- productdata los van productfoto’s;
- featured media thumbnailing;
- OG-image-aanpak;
- alt-tekstbeheer;
- image-loadingstrategie.

---

# 28. Volgende stap

De volgende fase is:

# **Technical Architecture Blueprint v1.0**

Daarin wordt vastgelegd:

- de Next.js-projectstructuur;
- routes;
- componentarchitectuur;
- contentdata en Markdown-aanpak;
- sponsor- en productdatamodellen;
- media- en updatearchitectuur;
- donatieprogressiemodule;
- SEO/metadata;
- image handling;
- basis voor het latere Codex Build Plan.

---

# 29. Samenvattende eindconclusie

Met deze Visual & Asset Preparation Blueprint ligt nu vast **hoe de website visueel wordt gevoed**.

De assets worden niet willekeurig in pagina’s geplaatst, maar doelgericht ingezet:

- kleurportret = premium openingskracht;
- zwart-wit portret = emotionele verdieping;
- route-map = fysieke concretisering;
- kaarsenfoto = waardige herinneringsactie;
- RTV Parkstad = publieke geloofwaardigheid;
- trainingsfoto’s = documentaire echtheid;
- sponsorvisuals = regionale steun;
- productfoto’s = wenselijke volgende aanvulling voor de steunproducten.

De visuele basis is daarmee scherp genoeg om door te gaan naar:

# **Technical Architecture Blueprint v1.0**
