// data_patologie_3.js - Databáze otázek z obecné patologie (témata 41 - 58)
const DATA_PATOLOGIE_3 = [
  {
    id: "pat-41",
    title: "Lymfocytární a lymfoplazmocytární zánět",
    section: "Zánětlivé procesy",
    keywords: ["lymfocytární", "nehnisavý", "lymfocyty", "plazmocyty", "virové", "chronický"],
    content: {
      definition: "Lymfocytární a lymfoplazmocytární (nehnisavý) zánět je forma exsudativního zánětu, u kterého v zánětlivém infiltrátu dominují lymfocyty, plazmatické buňky a makrofágy. Bývá typickým projevem virových infekcí, chronických zánětů a imunitních reakcí.",
      etiology: "Virové infekce (chřipka, hepatitidy A-C, infekční mononukleóza, virová myokarditida), autoimunitní onemocnění (Hashimotova tyroiditida), chronické bakteriální infekce (syfilis - plasmatické buňky).",
      pathogenesis: "Virová replikace v buňkách aktivuje buněčnou imunitu. CD8+ cytotoxické lymfocyty rozpoznávají virové antigeny na MHC-I molekulách a vyvolávají apoptózu infikovaných buněk. Plazmatické buňky v infiltrátu lokálně produkují specifické protilátky (imunoglobuliny).",
      macroscopy: "Ložisko zánětu nevykazuje tvorbu hnisu. Orgány jsou spíše překrvené, edematózní, někdy ztuhlé (u chronického stadia s fibrotizací). Příkladem je 'šedá hepatizace' u plicních virových pneumonií nebo zvětšené lymfatické uzliny.",
      microscopy: "Absence neutrofilů. V intersticiu (např. v plicních septech u intersticiální pneumonie nebo v intersticiu myokardu) nacházíme husté kulatobuněčné infiltráty: lymfocyty (malé s tmavým kulatým jádrem) a plazmatické buňky (oválné s excentrickým jádrem a projasněním v oblasti Golgiho aparátu).",
      clinical: "Klinický průběh bývá plíživý (u chronických forem) nebo akutní (u virových infekcí). Virové záněty mozku (encefalitidy) nebo srdce (myokarditidy) mohou mít těžké funkční následky i přes absenci hnisání."
    },
    quiz: [
      {
        question: "Které typy mononukleárních buněk typicky dominují v zánětlivém infiltrátu u nehnisavého lymfoplazmocytárního zánětu?",
        options: [
          "Neutrofilní granulocyty a eosinofily",
          "Lymfocyty, plazmatické buňky a makrofágy",
          "Fibroblasty a keratinocyty",
          "Mnohojaderné obří buňky z cizích těles"
        ],
        correct: 1,
        explanation: "Lymfoplazmocytární zánět je charakteristický přítomností mononuclearů (lymfocytů a plazmocytů). Je to typický obraz virových infekcí a chronických zánětlivých stavů. Neutrofily zde chybí."
      },
      {
        question: "Do které skupiny zánětlivých reakcí řadíme virovou myokarditidu (např. vyvolanou coxsackieviry) z hlediska charakteru exsudátu?",
        options: [
          "Hnisavého zánětu s tvorbou abscesů",
          "Nehnisavého lymfocytárního zánětu",
          "Fibrinózního krupózního zánětu",
          "Granulomatózního zánětu"
        ],
        correct: 1,
        explanation: "Virové infekce srdce (např. způsobené coxsackieviry) vyvolávají v intersticiu myokardu nehnisavou lymfocytární reakci. Lymfocyty infiltrují prostor mezi kardiomyocyty a ničí infikované buňky."
      }
    ]
  },
  {
    id: "pat-42",
    title: "Granulomatózní zánět (vyjmenovat)",
    section: "Zánětlivé procesy",
    keywords: ["granulomatózní", "granulom", "epitelooidní", "Langhans", "tuberkulóza", "sarkoidóza", "syfilis"],
    content: {
      definition: "Granulomatózní zánět je specifický typ chronického zánětu charakterizovaný tvorbou granulomů (uzlíků) složených z aktivovaných makrofágů (epiteloidních buněk), lymfocytů a obřích mnohojaderných buněk.",
      etiology: "Příčinou jsou perzistující patogeny nebo cizorodé látky, které organismus nedokáže běžnými mechanismy zlikvidovat: 1. Infekční: Tuberkulóza, Sarkoidóza (neinfekční etiologie), Syfilis, Lepra, Rhinosklerom, Nemoc z kočičího škrábnutí. 2. Neinfekční: Morbus Crohn, silikóza, berylióza, vhojená cizí tělesa (šicí materiál).",
      pathogenesis: "Makrofágy fagocytují patogen, ale nedokážou ho zničit. Prezentují antigen CD4+ T-lymfocytům, které uvolňují interferon-gama. Ten aktivuje makrofágy a mění je na epiteloidní buňky (mají bohatou cytoplasmu, vypadají jako epitelové buňky). Fúzí těchto buněk vznikají obří mnohojaderné buňky (Langhansova typu u infekcí, nebo typu z cizích těles).",
      macroscopy: "Přítomnost drobných, šedobílých uzlíků (granulomů) o velikosti zrnka písku až po velké splývající uzly s centrální nekrózou (např. TBC kaseózní ložiska).",
      microscopy: "Struktura granulomu: 1. Centrální zóna (může obsahovat nekrózu - kaseózní u TBC, nebo chybí u sarkoidózy). 2. Lem z epiteloidních buněk a obřích mnohojaderných buněk Langhansova typu (jádra uspořádaná na periferii do podkovy). 3. Vnější lem z lymfocytů a fibroblastů.",
      clinical: "Granulom slouží k opouzdření a izolaci škodliviny od okolí. Proces je spojen s výraznou vazivovou přestavbou tkáně (fibrózou). Diagnóza se stanovuje biopsií a průkazem specifického vzhledu granulomů."
    },
    quiz: [
      {
        question: "Které modifikované buňky imunitního systému jsou hlavní stavební jednotkou granulomů a vznikají stimulací makrofágů interferonem-gama?",
        options: [
          "Plazmatické buňky",
          "Epiteloidní buňky",
          "Neutrofilní granulocyty",
          "Fibroblasty"
        ],
        correct: 1,
        explanation: "Epiteloidní buňky jsou aktivované makrofágy. Mají hojnou, světle růžovou cytoplasmu a protáhlá jádra (připomínají buňky epitelu). Jsou klíčovým prvkem pro definici granulomu."
      },
      {
        question: "U kterého specifického infekčního onemocnění nacházíme typicky granulomy (tuberkuly) s centrální kaseózní (sýrovitou) nekrózou?",
        options: [
          "Sarkoidóza",
          "Tuberkulóza (TBC)",
          "Morbus Crohn",
          "Silikóza"
        ],
        correct: 1,
        explanation: "Pro tuberkulózu je typický granulom (tuberkul) s centrální kaseózní (sýrovitou) nekrózou. Sarkoidóza a Morbus Crohn mají granulomy nekaseifikující (bez centrální nekrózy)."
      }
    ]
  },
  {
    id: "pat-43",
    title: "Pseudomembranózní zánět",
    section: "Zánětlivé procesy",
    keywords: ["pseudomembranózní", "pablána", "kolitida", "difficile", "clostridium", "fibrin"],
    content: {
      definition: "Pseudomembranózní (pablanový) zánět je specifická forma fibrinózního zánětu sliznic charakterizovaná tvorbou šedavých nebo žlutavých blan (pablan), které pevně lpí na nekrotickém povrchu sliznice.",
      etiology: "Corynebacterium diphtheriae (záškrt v hltanu), Clostridium difficile (pseudomembranózní kolitida střeva po léčbě širokospektrými antibiotiky), Shigella (bakteriální úplavice).",
      pathogenesis: "Bakteriální toxiny (např. toxin A a B u Clostridium difficile) poškozují epitel sliznice a vyvolávají jeho nekrózu. Zároveň stoupá propustnost cév a do ložiska uniká exsudát bohatý na fibrinogen. Fibrin se sráží v nekrotické sliznici a propojuje odumřelé buňky, neutrofily a fibrin do pevné pablány (pseudomembrány).",
      macroscopy: "Sliznice jícnu, hltanu nebo tlustého střeva je pokrytá žlutozelenými, vyvýšenými pablánami vzhledu 'plaků'. Při pokusu o jejich odstranění se sliznice strhává a vznikají krvácející vředy.",
      microscopy: "Pablána je tvořena hustou sítí eozinofilního fibrinu s příměsí nekrotického epitelu a rozpadlých neutrofilů. Pod ní nacházíme nekrózu sliznice zasahující různě hluboko (do lamina propria) a zánětlivé překrvení.",
      clinical: "Pseudomembranózní kolitida se projevuje těžkými průjmy s příměsí krve a hlenu, horečkou a dehydratací. Hrozí perforace střeva a rozvoj toxického megakolon."
    },
    quiz: [
      {
        question: "Která anaerobní, spóry tvořící bakterie se přemnoží v tlustém střevě po širokospektré ATB terapii a vyvolá pseudomembranózní kolitidu?",
        options: [
          "Escherichia coli",
          "Clostridium difficile (Clostridioides difficile)",
          "Salmonella enteritidis",
          "Shigella dysenteriae"
        ],
        correct: 1,
        explanation: "Clostridium difficile je anaerobní spórotvorná bakterie. Při potlačení normální střevní mikroflóry širokospektrými antibiotiky (např. klindamycinem) se přemnoží a svými toxiny vyvolá pseudomembranózní kolitidu."
      },
      {
        question: "Pokud se pokusíme mechanicky sloupnout pevně lpící fibrinové pablány (pseudomembrány) u záškrtu nebo pseudomembranózní kolitidy, co se stane se sliznicí pod nimi?",
        options: [
          "Sloupnou se snadno a sliznice pod nimi je zcela nepoškozená a hladká",
          "Pablána pevně lpí na podkladu, při jejím stržení dochází k poškození tkáně, krvácení a vzniku ulcerací",
          "Pablána se okamžitě rozpustí",
          "Sliznice se přemění v kost"
        ],
        correct: 1,
        explanation: "Pseudomembrána je pevně kotvena ve tkáni, protože fibrin polymeroval přímo uvnitř nekrotické sliznice. Její násilné stržení proto poškodí cévnatou tkáň pod ní, vyvolá krvácení a zanechá slizniční defekt (vřed)."
      }
    ]
  },
  {
    id: "pat-44",
    title: "Tuberkulóza, sarkoidóza",
    section: "Specifické záněty",
    keywords: ["tuberkulóza", "sarkoidóza", "kaseózní", "Langhans", "tuberculum", "Schumann", "asteroidní"],
    content: {
      definition: "Jedná se o dvě nejvýznamnější granulomatózní onemocnění. Tuberkulóza (TBC) je specifický infekční zánět s kaseózní nekrózou. Sarkoidóza je systémové neinfekční granulomatózní onemocnění neznámé etiologie s tvorbou nekaseifikujících granulomů.",
      etiology: "TBC: Mycobacterium tuberculosis (acidorezistentní tyčinka, přenos kapénkami). Sarkoidóza: neznámá etiologie (předpokládá se imunopatologická reakce na neznámý antigen u geneticky predisponovaných).",
      pathogenesis: "TBC: Mykobakteria přežívají v makrofázích. Rozvíjí se buněčná imunita typu IV. Makrofágy se mění na epiteloidní buňky a ohraničují infekci v granulomu (tuberkulu). Uprostřed vzniká kaseózní nekróza. Sarkoidóza: aktivace CD4+ lymfocytů vede k tvorbě granulomů v mnoha orgánech (plíce, lymfatické uzliny, kůže) bez přítomnosti infekčního agens.",
      macroscopy: "TBC: plicní ložiska (Ghonův infekt), kaseózní (tvarohovitá) hmota v plicích nebo lymfatických uzlinách, dutiny (kaverny) vzniklé vykašláním nekrózy. Sarkoidóza: zvětšené hilové lymfatické uzliny (bilaterální lymfadenopatie), plicní postižení tuhé konzistence, kožní léze (lupus pernio).",
      microscopy: "TBC: kaseifikující granulom - centrální eozinofilní bezstrukturní nekróza, obklopená epiteloidními buňkami a obřími buňkami Langhansova typu (jádra do podkovy), vnější lem lymfocytů. Barvení Ziehl-Neelsen prokazuje červená mykobakteria. Sarkoidóza: nekaseifikující granulom - ostře ohraničený, bez centrální nekrózy, obsahuje epiteloidní a obří buňky, v nichž mohou být inkluze: Schaumannova tělíska (vrstvené vápenaté konkrementy) a asteroidní tělíska (hvězdicovité struktury).",
      clinical: "TBC se projevuje kašlem, nočním pocením, hubnutím a subfebriliemi. Sarkoidóza často probíhá asymptomaticky nebo jako Lofgrenův syndrom (horečka, erythema nodosum, polyartritida, bilaterální hilová lymfadenopatie)."
    },
    quiz: [
      {
        question: "Z hlediska přítomnosti či absence centrální tkáňové nekrózy, jak se liší mikroskopický nález granulomu u sarkoidózy od tuberkulózy?",
        options: [
          "U sarkoidózy granulom chybí, je zde pouze hnisání",
          "Granulom u sarkoidózy neobsahuje centrální kaseózní nekrózu (je nekaseifikující); u tuberkulózy je centrální kaseózní nekróza typická",
          "Sarkoidóza obsahuje pouze plazmatické buňky",
          "V TBC granulomu chybí lymfocyty"
        ],
        correct: 1,
        explanation: "Hlavním histopatologickým rozdílem je přítomnost/absence kaseózní nekrózy. TBC granulomy mají typicky střed vyplněný bezstrukturní odumřelou hmotou (kaseózní nekróza). Sarkoidní granulomy jsou 'čisté' - tvořené pouze nakupením epiteloidních a obřích buněk bez nekrózy."
      },
      {
        question: "Které klasické histologické barvení se používá k průkazu acidorezistentních mykobakterií (M. tuberculosis) ve tkáňových řezech?",
        options: [
          "Barvení Kongočervení",
          "Barvení podle Ziehl-Neelsena (k průkazu acidorezistentních tyčinek)",
          "Perlsova reakce",
          "Barvení podle Fontany"
        ],
        correct: 1,
        explanation: "Mycobacterium tuberculosis má ve své stěně vysoký obsah lipidů (kyseliny mykolové), což ztěžuje běžné barvení. Je acidorezistentní. Barvení podle Ziehl-Neelsena využívá karbolfuchsin a kyselý alkohol - mykobakteria zůstávají svítivě červená na modrém pozadí."
      }
    ]
  },
  {
    id: "pat-45",
    title: "Syfilis, lymfogranulomavenerum, rhinosklerom, Morbus Crohn, malomocenství",
    section: "Specifické záněty",
    keywords: ["syfilis", "guma", "Crohn", "lepra", "rhinosklerom", "Mikulicz", "specifický"],
    content: {
      definition: "Tato skupina představuje specifické granulomatózní a chronické zánětlivé procesy vyvolané konkrétními původci (kromě Morbus Crohn, což je idiopatický zánět střeva).",
      etiology: "Syfilis: Treponema pallidum (spirocheta). Rhinosklerom: Klebsiella pneumoniae subsp. rhinoscleromatis. Morbus Crohn: multifaktoriální imunitní zánět střeva. Malomocenství (lepra): Mycobacterium leprae.",
      pathogenesis: "1. Syfilis: 1. stadium (ulcus durum - tvrdý vřed, infiltrace lymfocyty a plazmocyty), 2. stadium (kondylomata, exantém), 3. stadium (tvorba gummat - granulomy s gumovitou nekrózou). 2. Rhinosklerom: chronický zánět nosní sliznice, makrofágy fagocytují klebsielly, ale nedokážou je zničit a mění se v pěnové Mikuliczovy buňky. 3. Morbus Crohn: transmurální (postihující celou stěnu) zánět střeva s tvorbou nekaseifikujících granulomů a fisur (trhlin). 4. Lepra: tuberkuloidní forma (silná imunita, málo granulomů) a lepromatózní forma (slabá imunita, záplava makrofágů s tyčinkami - Virchowovy buňky).",
      macroscopy: "Syfilis: tvrdý vřed (nebolestivý, tuhý spodní okraj) na genitálu; guma - šedobílé ložisko gumovité konzistence (např. v játrech, kostech). Morbus Crohn: segmentální postižení střeva, sliznice vzhledu 'dlažebních kostek', zúžení lumen (stenóza). Lepra: destrukce nosní přepážky, 'facies leonina' (lví obličej).",
      microscopy: "Syfilis: výrazná endarteritis obliterans (zánět cév s hyperplazií endotelu) a hustý lem plazmatických buněk kolem cév. Guma má koagulační nekrózu se zachovanými stíny cév. Rhinosklerom: Mikuliczovy buňky (velké, světlé, pěnové makrofágy s bakteriemi uvnitř). Morbus Crohn: transmurální lymfocytární infiltrát, nekaseifikující granulomy ve stěně střeva.",
      clinical: "Syfilis je klasická pohlavní choroba (lues). Morbus Crohn se projevuje bolestmi břicha, průjmy, píštělemi a vyžaduje imunosupresivní léčbu. Lepra postihuje kůži a periferní nervy (anestezie a ztráta prstů traumaty)."
    },
    quiz: [
      {
        question: "Který specifický buněčný typ (pěnový makrofág obsahující bakterie) nacházíme v histologickém řezu u pacientů s rhinoskleromem?",
        options: [
          "Langhansova obří buňka",
          "Mikuliczova buňka (velký pěnový makrofág obsahující Klebsielly)",
          "Virchowova buňka",
          "Gaucherova buňka"
        ],
        correct: 1,
        explanation: "Rhinosklerom je chronický granulomatózní zánět dýchacích cest. Typickým znakem jsou Mikuliczovy buňky - makrofágy s vakuolizovanou cytoplasmou vyplněnou bakteriemi Klebsiella rhinoscleromatis."
      },
      {
        question: "Co je to guma (gumma) z hlediska své struktury a pro které stadium kterého pohlavního onemocnění je typická?",
        options: [
          "Zápalné ložisko plic u TBC",
          "Granulomatózní ložisko s centrální elasticko-gumovitou nekrózou a výrazným lemem plazmatických buněk, typické pro 3. stadium syfilis",
          "Nádor sliznice jícnu",
          "Ukládání lipidů v kůži"
        ],
        correct: 1,
        explanation: "Gumma je specifické ložisko typické pro terciární (pozdní) stadium příjice (syfilis). Má charakteristickou konzistenci podobnou gumě v důsledku nedokonalé nekrózy tkáně a je obklopeno infiltrátem s velkým množstvím plazmatických buněk."
      }
    ]
  },
  {
    id: "pat-46",
    title: "Hojení ran a vhojování cizích těles",
    section: "Adaptace a hojení",
    keywords: ["hojení", "per primam", "per secundam", "cizí", "těleso", "kolagen", "jizva"],
    content: {
      definition: "Hojení ran je reparační proces obnovující integritu tkáně po jejím mechanickém narušení. Vhojování cizích těles je reakce na inertní nebo biologicky aktivní materiál zanesený do tkáně.",
      etiology: "Chirurgické řezy, traumatické rány, přítomnost nečistot, stehů, implantátů.",
      pathogenesis: "Dva typy hojení ran: 1. Hojení per primam (prvotní - per primam intentionem): čisté rány s přiblíženými okraji (např. šitá rána). Minimum zánětu, rychlá reepitelizace, minimální jizva. 2. Hojení per secundam (druhotné): infikované rány, rány s velkou ztrátou tkáně. Masivní zánětlivá reakce, nutnost vyplnit defekt velkým množstvím granulační tkáně, vzniká velká jizva s rizikem striktur a deformací. Vhojování cizích těles: pokud je těleso malé a nerozpustné, je opouzdřeno granulomem z cizích těles (obří buňky z cizích těles s nepravidelně roztroušenými jádry).",
      macroscopy: "Per primam: rána je uzavřená, jizva je tenká, lineární. Per secundam: rána se hojí přes tvorbu červené, granulární tkáně na spodině, rána se stahuje (kontrakce myofibroblasty), vzniká nepravidelná vtažená jizva. Cizí těleso: může být opouzdřeno vazivem jako tuhý uzlík.",
      microscopy: "Granulom z cizích těles: kolem materiálu (např. textilní vlákno, kousek dřeva) se hromadí makrofágy a splývají v obří buňky z cizích těles (na rozdíl od Langhansových buněk mají jádra nepravidelně rozházená v cytoplasmě, nikoli do podkovy). Okolo je lem fibroblastů a kolagenu.",
      clinical: "Komplikace hojení ran: keloid (nadměrná tvorba kolagenní jizvy přesahující okraje rány), hypertrofická jizva (vyvýšená, ale nepřesahuje okraje), dehiscence (rozestup) rány, infekce."
    },
    quiz: [
      {
        question: "Z hlediska čistoty rány, přítomnosti infekce, množství granulační tkáně a výsledné jizvy, jak se liší hojení per primam a per secundam?",
        options: [
          "Per primam se hojí pouze zlomeniny",
          "Per primam probíhá u čistých ran s přiblíženými okraji s minimem jizvení; per secundam u infikovaných ran s velkou ztrátou tkáně, které se hojí přes granulační tkáň a zanechávají velkou jizvu",
          "Per secundam nevyžaduje účast fibroblastů",
          "Rozdíl je pouze v délce hojení, vzhled jizvy je stejný"
        ],
        correct: 1,
        explanation: "Hojení per primam (primární záměr) je ideální způsob hojení (např. chirurgický řez). Per secundam (sekundární záměr) nastává tam, kde okraje rány nelze přiblížit nebo je přítomna infekce. Defekt se musí zdlouhavě vyplňovat granulační tkání odspodu, což vede k velké jizvě."
      },
      {
        question: "Podle jakého uspořádání buněčných jader v cytoplasmě lze pod mikroskopem odlišit obří buňky Langhansova typu od obřích buněk z cizích těles?",
        options: [
          "Buňky z cizích těles nemají žádná jádra",
          "U Langhansových buněk jsou jádra uspořádaná na periferii cytoplasmy do tvaru podkovy či věnce; u buněk z cizích těles jsou jádra nepravidelně rozptýlená po celé cytoplasmě",
          "Langhansovy buňky jsou menší než lymfocyty",
          "Neliší se, jde o synonyma"
        ],
        correct: 1,
        explanation: "Oba typy buněk vznikají fúzí makrofágů. U Langhansových (typických pro TBC) je uspořádání jader vysoce organizované (periferní podkova). U buněk z cizích těles (reakce na stehy, implantáty) jsou desítky jader nepravidelně shluknuté uprostřed nebo roztroušené v cytoplasmě."
      }
    ]
  },
  {
    id: "pat-47",
    title: "Hojení kostních zlomenin",
    section: "Adaptace a hojení",
    keywords: ["zlomenina", "fraktura", "svalek", "kalus", "osteoblast", "hematom", "remodelace"],
    content: {
      definition: "Hojení kostních zlomenin je specifický regenerační a reparační proces kosti, který po zlomenině obnovuje integritu a mechanickou pevnost skeletu.",
      etiology: "Mechanické trauma převyšující pevnost kosti, nebo patologická zlomenina v místě oslabení kosti (osteoporóza, kostní metastáza).",
      pathogenesis: "Fáze hojení: 1. Fáze zánětu a hematomu (0.-2. den): v místě zlomeniny vzniká krevní výron (hematom) z roztržených cév periostu a dřeně, dochází k ischemické nekróze konců úlomků kosti a zánětlivé reakci. 2. Vazivově-chrupavčitý svalek / měkký kalus (do 2-3 týdnů): makrofágy odstraňují detrit, granulační tkáň prorůstá hematomem, fibroblasty a chondroblasty tvoří vazivovou a chrupavčitou tkáň spojující úlomky. 3. Kostěný svalek / tvrdý kalus (do 2-3 měsíců): osteoblasty z periostu a endostu tvoří osteoid, který mineralizuje a mění se v pletivovou (fibrilární) kost. 4. Remodelace kosti (měsíce až roky): pletivová kost je odbourávána osteoklasty a osteoblasty tvoří pevnou lamelární kost uspořádanou podle mechanického zatížení (zákon transformace kosti).",
      macroscopy: "V místě zlomeniny vzniká zpočátku měkké zduření (měkký kalus), které postupně tvrdne v kostěný uzel (tvrdý kalus) spojující konce kostí. Postupně se uzel zmenšuje a zarovnává s tvarem kosti.",
      microscopy: "Mikroskopicky prokazujeme novotvorbu osteoidu (nemineralizovaná kostní matrix), pletivovou kost (nepravidelná osteocytární lacuna, chaotické uspořádání kolagenu) a aktivitu osteoklastů (vícejaderné buňky v Howshipových lakunách) odbourávajících přebytečnou kost.",
      clinical: "Komplikace hojení zlomenin: pakloub (pseudoartróza - pokud není zlomenina znehybněna, v místě kalusu vznikne chrupavka a vazivový kloub), opožděné hojení, infekce (osteomyelitida u otevřených zlomenin)."
    },
    quiz: [
      {
        question: "Jak definujeme v ortopedické patologii pojem pakloub (pseudoartróza) jako komplikaci hojení zlomeniny?",
        options: [
          "Vrozené zdvojení končetiny",
          "Komplikace hojení zlomeniny, kdy při nedostatečné fixaci nedojde ke kostnímu spojení úlomků, ale v místě vznikne vazivové a chrupavčité spojení s patologickou pohyblivostí",
          "Nádorové bujení kosti napodobující kloub",
          "Zánět kloubu způsobený bakteriemi"
        ],
        correct: 1,
        explanation: "Pro tvorbu kosti v kalusu je nutný klid a dobré cévní zásobení. Pokud se úlomky neustále pohybují, granulační tkáň se nemůže přeměnit v kost, ale diferencuje se ve vazivo a chrupavku, čímž vznikne falešný kloub (pseudoartróza)."
      },
      {
        question: "Který typ nezralé, chaoticky uspořádané kostní tkáně se tvoří jako první v procesu osifikace tvrdého kalusu (kostěného svalku)?",
        options: [
          "Lamelární kost (zralá)",
          "Pletivová kost (fibrilární / nezralá)",
          "Chrupavka hyalinní",
          "Kompaktní kost s Haversovými systémy"
        ],
        correct: 1,
        explanation: "První novotvořená kostní tkáň je nezralá pletivová kost. Má nepravidelné uspořádání kolagenních vláken a je mechanicky méně odolná. Teprve během remodelace (působením zátěže) je nahrazena vysoce organizovanou lamelární kostí."
      }
    ]
  },
  {
    id: "pat-48",
    title: "Genetické příčiny - přehled",
    section: "Genetické poruchy",
    keywords: ["mutace", "genetika", "chromozom", "genom", "dědičnost", "kariotyp"],
    content: {
      definition: "Genetické příčiny nemocí představují změny v genetickém materiálu buněk (DNA), které vedou k poruše struktury nebo funkce proteinů a rozvoji patologického stavu.",
      etiology: "Mutace vznikající spontánně při replikaci DNA, nebo indukované mutageny (záření, chemikálie, viry). Zahrnují: 1. Genové mutace, 2. Chromozomové aberace, 3. Genomové mutace.",
      pathogenesis: "1. Genové mutace: postihují jednotlivé geny (bodové mutace, inserce, delece nukleotidů). Vedou k monogenním chorobám. 2. Chromozomové aberace (strukturní změny): translokace (výměna částí), delece (ztráta části), inverze. Příkladem je Philadelphia chromozom t(9;22) u CML. 3. Genomové mutace (změna počtu chromozomů): aneuploidie (trizomie, monozomie) vzniklé chybou při meióze (nondisjunkce).",
      macroscopy: "Zahrnuje širokou škálu fenotypových změn - od lehkých dysmorfií po těžké mnohočetné vrozené vady (např. rozštěpy u Patauova syndromu).",
      microscopy: "Mikroskopicky se provádí cytogenetické vyšetření (karyotypování) k průkazu počtu a struktury chromozomů, nebo molekulárně-genetické metody (PCR, sekvenování) k detekci konkrétních mutací DNA.",
      clinical: "Genetické choroby se dělí na: a) Monogenní s klasickou mendelovskou dědičností (autozomálně dominantní/recesivní, gonozomální), b) Chromozomové poruchy ( Downův syndrom), c) Polygenní/multifaktoriální (nejčastější - diabetes, hypertenze, kde genetika určuje predispozici)."
    },
    quiz: [
      {
        question: "Jak definujeme genetickou odchylku označovanou jako aneuploidie a jaká meiotická chyba (chyba při dělení) ji nejčastěji způsobuje?",
        options: [
          "Ztráta části chromozomu v důsledku záření",
          "Odchylka v počtu chromozomů (např. trizomie), která nejčastěji vzniká chybou při meiotickém dělení (nondisjunkcí) - chromozomy se nerozejdou do dceřiných buněk",
          "Bodová mutace v genu pro hemoglobin",
          "Zdvojení celé chromozomové sady (polyploidie)"
        ],
        correct: 1,
        explanation: "Aneuploidie znamená, že v buňce chybí nebo přebývá chromozom (např. 47 chromozomů u Downova syndromu). Vzniká nondisjunkcí - selháním separace homologních chromozomů nebo sesterských chromatid během anafáze meiózy I nebo II."
      },
      {
        question: "Která specifická reciproční translokace je příkladem strukturní chromozomové aberace spojené s rozvojem chronické myeloidní leukémie (CML)?",
        options: [
          "Trizomie 21",
          "Reciproční translokace t(9;22) vznikající Philadelphia chromozom u chronické myeloidní leukémie (CML)",
          "Bodová mutace v genu CFTR",
          "Delece na chromozomu Y"
        ],
        correct: 1,
        explanation: "Translokace t(9;22) je strukturní aberace. Dochází k výměně částí mezi 9. a 22. chromozomem, čímž vzniká fúzní gen BCR-ABL s vysokou tyrosinkinázovou aktivitou, což spouští nekontrolované množení bílých krvinek u CML."
      }
    ]
  },
  {
    id: "pat-49",
    title: "Anafylaktický typ imunopatologické reakce",
    section: "Imunopatologie",
    keywords: ["anafylaxe", "IgE", "histamin", "degranulace", "šok", "atopie", "mastocyt"],
    content: {
      definition: "Anafylaktický (I. typ podle Coombse a Gella neboli časná přecitlivělost) je imunopatologická reakce zprostředkovaná IgE protilátkami, která vzniká do několika minut po setkání senzibilizovaného jedince s alergenem.",
      etiology: "Alergeny: bodnutí hmyzem (včela, vosa), léky (penicilin, lokální anestetika), potraviny (ořechy, korýši), pyly, roztoči.",
      pathogenesis: "1. Senzibilizace: první kontakt s alergenem stimuluje TH2 lymfocyty, které přimějí B-lymfocyty k produkci IgE. IgE se naváže na Fc-receptory žírných buněk (mastocytů) a basofilů. 2. Provokace (druhý kontakt): alergen přemostí sousední IgE molekuly na mastocytu, což spustí degranulaci. Do tkáně se uvolní preforemované mediátory (histamin) a syntetizují se nové (leukotrieny, prostaglandiny). Histamin vyvolá masivní vazodilataci, zvýšení propustnosti kapilár a bronchokonstrikci (stažení průdušek).",
      macroscopy: "Otoky kůže (kopřivka - urtikaria, angioedém), překrvení sliznic, edém hrtanu (laryngospasmus s udušením), plíce jsou nafouklé (emfyzém z bronchospasmu), splanchnická vazodilatace.",
      microscopy: "Edém sliznic a podkoží, překrvení cév, přítomnost eosinofilních granulocytů v zánětlivém infiltrátu (eosinofily jsou lákány eotaxinem a histaminem). Deindividualizované žírné buňky (ztráta barvitelných granulí).",
      clinical: "Reakce může být lokální (rýma, astma, atopický ekzém) nebo systémová (anafylaktický šok). Anafylaktický šok je život ohrožující stav: kritický pokles krevního tlaku (vazodilatace) a udušení (edém hrtanu a bronchospasmus). Léčbou první volby je okamžité podání adrenalinu (působí vazokonstrikci a bronchodilataci)."
    },
    quiz: [
      {
        question: "Která třída imunoglobulinů (protilátek) a které buňky nesoucí Fc receptory hrají klíčovou roli v anafylaktické reakci přecitlivělosti I. typu?",
        options: [
          "IgG; neutrofily",
          "IgE; žírné buňky (mastocyty) a basofily",
          "IgM; plazmatické buňky",
          "IgA; pohárkové buňky"
        ],
        correct: 1,
        explanation: "Reakce I. typu (anafylaktická) je zprostředkována IgE protilátkami. Ty jsou přirozeně navázány na povrchu mastocytů. Po kontaktu s alergenem mastocyty degranulují a uvolní zánětlivé mediátory (hlavně histamin)."
      },
      {
        question: "Které léčivo je lékem první volby a musí být okamžitě podáno při rozvoji život ohrožujícího anafylaktického šoku a proč?",
        options: [
          "Podání vysokých dávek inzulínu",
          "Intramuskulární podání adrenalinu (epinefrinu)",
          "Podání silných antibiotik",
          "Ledové obklady na hrudník"
        ],
        correct: 1,
        explanation: "Adrenalin je lékem volby u anafylaktického šoku. Působí na alfa-1 receptory (vyvolá vazokonstrikci a zvýší krevní tlak) a beta-2 receptory (způsobí bronchodilataci a uvolní stažené průdušky), čímž zvrátí hlavní smrtící mechanismy anafylaxe."
      }
    ]
  },
  {
    id: "pat-50",
    title: "Patologie transplantací a rejekce",
    section: "Imunopatologie",
    keywords: ["rejekce", "transplantace", "hyperakutní", "akutní", "chronická", "HLA", "GvHD"],
    content: {
      definition: "Rejekce (odhojení) transplantátu je imunitní reakce příjemce namířená proti cizorodým antigenům dárce přítomným na buňkách štěpu, která vede k poškození a nefunkčnosti transplantovaného orgánu.",
      etiology: "Neshoda v hlavním histokompatibilním systému (HLA / MHC antigeny) mezi dárcem a příjemcem.",
      pathogenesis: "Rozlišují se 3 typy rejekce: 1. Hyperakutní rejekce (minuty až hodiny): způsobena preforemovanými protilátkami (např. anti-HLA nebo AB0 skupina) v krvi příjemce. Protilátky se navážou na endotel cév štěpu, aktivují komplement a způsobí okamžitou trombózu cév štěpu. 2. Akutní rejekce (dny až měsíce): buněčná (T-lymfocyty CD8+ a CD4+ napadají tubuly ledvin či myokard štěpu) nebo humorální (de novo tvorba protilátek proti endotelu). 3. Chronická rejekce (měsíce až roky): multifaktoriální proces, dochází k postupné proliferaci intimy cév štěpu a jeho ischemické fibrotizaci. GvHD (Graft-versus-Host): reakce štěpu proti hostiteli (imunokompetentní T-buňky dárce v kostní dřeni napadají tkáně příjemce - kůži, játra, střevo).",
      macroscopy: "Hyperakutní rejekce: orgán (např. ledvina) okamžitě po napojení cév modrá, ochabuje a stává se nefunkčním. Akutní rejekce: transplantovaný orgán je zvětšený, prosáklý, s petechiemi. Chronická rejekce: orgán atrofuje, svrašťuje se a je tuhý (fibróza).",
      microscopy: "Hyperakutní: masivní trombóza v kapilárách a arteriolách, nekrotizující vaskulitida, infiltrace neutrofily. Akutní: intersticiální lymfocytární infiltrát, tubulitida (lymfocyty pronikají mezi epitelie ledvinných tubulů), endoteliitida. Chronická: obliterující arterioskleróza (ztluštění intimy), difuzní intersticiální fibróza a atrofie parenchymu.",
      clinical: "Prevencí rejekce je pečlivá HLA typizace (matching) dárce a příjemce a doživotní imunosupresivní terapie (cyklosporin A, takrolimus, kortikosteroidy). Imunosuprese však zvyšuje riziko oportunních infekcí a nádorů."
    },
    quiz: [
      {
        question: "Která složka imunitního systému příjemce a jaké specifické protilátky spouštějí hyperakutní rejekci transplantátu během několika minut po operaci?",
        options: [
          "Aktivace CD8+ T-lymfocytů po 2 týdnech od operace",
          "Přítomnost preforemovaných protilátek v krvi příjemce, které okamžitě napadnou endotel cév štěpu a spustí trombózu",
          "Pomalé zarůstání cév vazivem (fibróza)",
          "Bakteriální kontaminace štěpu během převozu"
        ],
        correct: 1,
        explanation: "Hyperakutní rejekce probíhá extrémně rychle (často ještě na operačním stole). Je způsobena již existujícími (preforemovanými) protilátkami (např. po předchozích transfúzích, těhotenstvích či AB0 neshodě). Tyto protilátky spustí komplementovou kaskádu a koagulaci v cévách štěpu, který okamžitě nekrotizuje."
      },
      {
        question: "Která imunitní patologie je vyjádřena zkratkou GvHD a za jakých podmínek k ní dochází po transplantaci kostní dřeně?",
        options: [
          "Reakce příjemce, který ničí transplantovaný orgán",
          "Reakce štěpu proti hostiteli, kdy T-lymfocyty dárce (např. v transplantované kostní dřeni) napadají tkáně imunitně oslabeného příjemce",
          "Virová infekce přenesená transplantovaným orgánem",
          "Uzávěr cév štěpu vzduchovou bublinou"
        ],
        correct: 1,
        explanation: "GvHD (reakce štěpu proti hostiteli) je specifická komplikace transplantace kostní dřeně nebo alogenních krvetvorných buněk. Imunitní buňky dárce (štěp) vnímají tkáně příjemce (hostitele) jako cizí a útočí na ně (nejčastěji postižena kůže, játra a sliznice střeva)."
      }
    ]
  },
  {
    id: "pat-51",
    title: "Autoimunitní onemocnění (principy, příklady)",
    section: "Imunopatologie",
    keywords: ["autoimunita", "tolerance", "lupus", "artritida", "Sjögren", "ANA", "mimikry"],
    content: {
      definition: "Autoimunitní onemocnění jsou stavy, při kterých imunitní systém reaguje patologicky proti vlastním tkáním a buňkám v důsledku selhání mechanismů imunotolerance (schopnosti tolerovat vlastní antigeny).",
      etiology: "Multifaktoriální: genetická dispozice (např. vazba na určité HLA alely - HLA-B27 u Bechtěreva), vlivy prostředí (infekce spouštějící molekulární mimikry, UV záření u lupusu, kouření u revmatoidní artritidy), hormonální vlivy (častější výskyt u žen).",
      pathogenesis: "Mechanismy selhání tolerance: 1. Molekulární mimikry (patogen má antigeny podobné vlastním proteinům, např. Streptococcus pyogenes a chlopně u revmatické horečky). 2. Odhalení sekvestrovaných (skrytých) antigenů (oční čočka, myelin, spermie). 3. Porucha regulace (deficit Treg lymfocytů). Poškození tkání probíhá imunopatologickými reakcemi typu II (protilátky proti receptorům - Gravesova choroba), typu III (ukládání imunokomplexů - lupus) nebo typu IV (buněčná destrukce - diabetes I. typu).",
      macroscopy: "Systémový lupus erythematodes (SLE): motýlovitý exantém na obličeji, kloubní deformity, zbytnění perikardu. Revmatoidní artritida (RA): symetrické otoky kloubů rukou, deformace prstů (ulnární deviace), revmatické uzly v podkoží.",
      microscopy: "SLE: lupusová nefritida v ledvinách (zbytnění glomerulární membrány - vzhled drátěných kliček), cévní změny (fibrinoidní nekróza arterií). RA: chronická synovitida s tvorbou pannusu (granulační tkáň s lymfocyty prorůstající chrupavku), revmatický uzel (centrální palisádující histiocyty kolem fibrinoidní nekrózy).",
      clinical: "SLE se projevuje multiorgánovým postižením (ledviny, klouby, kůže, srdce), v diagnostice se stanovují antinukleární protilátky (ANA, anti-dsDNA). RA vede k destrukci kloubů, diagnostikuje se revmatoidní faktor (RF) nebo anti-CCP protilátky."
    },
    quiz: [
      {
        question: "Jak definujeme v imunopatologii proces označovaný jako molekulární mimikry a jak přispívá k rozvoji autoimunitní reakce?",
        options: [
          "Schopnost virů maskovat se před makrofágy",
          "Podobnost mezi antigeny infekčního patogenu a vlastními proteiny hostitele, která vede k tomu, že imunitní reakce spuštěná proti infekci napadne i vlastní tkáně",
          "Změna barvy kůže u autoimunitních chorob",
          "reprogramování buněk slinivky"
        ],
        correct: 1,
        explanation: "Klasickým příkladem molekulárního mimikry je revmatická horečka. Protilátky vytvořené proti M-proteinu Streptococcus pyogenes reagují zkříženě s proteiny v myokardu a na srdečních chlopních hostitele, což vede k jejich poškození."
      },
      {
        question: "Přítomnost kterých protilátek (autoantitěles) je vysoce specifickým laboratorním markerem pro diagnózu systémového lupusu erythematodes (SLE)?",
        options: [
          "Protilátky anti-dsDNA (a ANA)",
          "Revmatoidní faktor (RF)",
          "Protilátky anti-neutrofilní cytoplasmy (ANCA)",
          "Protilátky proti tyreoglobulinu"
        ],
        correct: 0,
        explanation: "Protilátky proti dvouvláknové DNA (anti-dsDNA) a antinukleární protilátky (ANA) jsou klíčovými markery v diagnostice SLE a přímo se podílejí na tvorbě imunokomplexů poškozujících ledviny (lupusová nefritida)."
      }
    ]
  },
  {
    id: "pat-52",
    title: "Získaná imunodeficiencie (AIDS)",
    section: "Imunopatologie",
    keywords: ["AIDS", "HIV", "CD4", "lymfopenie", "oportunní", "Kaposi", "Pneumocystis"],
    content: {
      definition: "Syndrom získaného selhání imunity (AIDS) je pozdní stadium infekce virem HIV (Human Immunodeficiency Virus) charakterizované hlubokým rozpadem imunitního systému, rozvojem oportunních infekcí a specifických nádorů.",
      etiology: "Virus HIV-1 nebo HIV-2 (retrovirus, přenos krví, pohlavním stykem a vertikálně z matky na plod).",
      pathogenesis: "Virus HIV se svým proteinem gp120 váže na CD4 receptor na pomocných (helper) T-lymfocytech, makrofázích a dendritických buňkách. HIV vstupuje do buňky, reverzní transkriptázou přepíše svou RNA do DNA, která se integruje do genomu buňky. Následuje replikace viru a destrukce CD4+ lymfocytů. Pokles CD4+ buněk pod 200/μl vede k těžkému kolapsu buněčné imunity.",
      macroscopy: "Zvětšené lymfatické uzliny (lymfadenopatie), kachexie (chřadnutí), vícečetná ložiska infekcí v plicích, mozku. Kaposiho sarkom: červenofialové kožní a slizniční uzly. V ústech bělavé povlaky (kandidóza).",
      microscopy: "V lymfatických uzlinách zpočátku folikulární hyperplazie, v pozdním stadiu kompletní deplece (vyprázdnění) lymfocytů s atrofií uzliny. Kaposiho sarkom: vřetenobuněčný nádor z endotelií tvořící štěrbinovité cévy vyplněné erytrocyty. Plicní pneumocystóza: alveoly vyplněné eozinofilním 'pěnovým' exsudátem s drobnými kulatými patogeny (průkaz stříbřením podle Grocotta).",
      clinical: "Oportunní infekce: Pneumocystová pneumonie (Pneumocystis jirovecii), toxoplazmová encefalitida, CMV retinitida, diseminovaná TBC. Nádory asociované s AIDS: Kaposiho sarkom (vyvolaný virem HHV-8), primární lymfom mozku (asociovaný s EBV) a invazivní karcinom děložního čípku."
    },
    quiz: [
      {
        question: "Na které pomocné buňky lidského imunitního systému (nesoucí specifický receptor) virus HIV primárně útočí a způsobuje jejich postupný zánik?",
        options: [
          "CD8+ cytotoxické T-lymfocyty",
          "CD4+ pomocné (helper) T-lymfocyty a makrofágy",
          "B-lymfocyty produkující protilátky",
          "Neutrofilní granulocyty"
        ],
        correct: 1,
        explanation: "Virus HIV využívá pro vstup do buňky molekulu CD4, která slouží jako jeho hlavní receptor. CD4 se nachází na pomocných T-lymfocytech, makrofázích a mikrogliích. Jejich postupný zánik vede k selhání koordinace imunitní odpovědi."
      },
      {
        question: "Který zhoubný cévní nádor na kůži a sliznicích (asociovaný s virem HHV-8) je klasickou oportunní neoplazií indikující stadium AIDS?",
        options: [
          "Maligní melanom",
          "Kaposiho sarkom",
          "Hepatocelulární karcinom",
          "Hodgkinův lymfom"
        ],
        correct: 1,
        explanation: "Kaposiho sarkom je mezenchymální nádor vycházející z cévního endotelu indukovaný virem HHV-8 (KSHV). U pacientů s rozvinutým AIDS se projevuje jako červenofialové skvrny či uzly na kůži, sliznici úst a ve vnitřních orgánech."
      }
    ]
  },
  {
    id: "pat-53",
    title: "Choroby způsobené poruchami chromozómů (cytogenetické poruchy)",
    section: "Genetické poruchy",
    keywords: ["Down", "Edwards", "Patau", "Turner", "Klinefelter", "trizomie", "karyotyp"],
    content: {
      definition: "Cytogenetické poruchy jsou závažná onemocnění způsobená změnou počtu (genomové mutace) nebo struktury (chromozomové aberace) chromozomů v karyotypu jedince.",
      etiology: "Chyba při dělení pohlavních buněk rodičů (nondisjunkce chromozomů v meióze), která koreluje s vyšším věkem matky.",
      pathogenesis: "1. Autozomální trizomie: Downův syndrom (trizomie 21 - 47,XX/XY,+21); Edwardsův syndrom (trizomie 18); Patauův syndrom (trizomie 13). Nadbytek genů na třetím chromozomu vede k narušení genové exprese a vývojovým abnormalitám. 2. Poruchy gonozomů (pohlavních chromozomů): Turnerův syndrom (monozomie X - 45,X0) - chybění jednoho X chromozomu u žen; Klinefelterův syndrom (47,XXY) - nadbytečný X chromozom u mužů.",
      macroscopy: "Downův syndrom: šikmé oční štěrbiny (mongoloidní vzhled), epikantus, plochý obličej, opičí rýha na dlani (jedna příčná rýha), mentální retardace, vrozené srdeční vady (defekt septa). Turnerův syndrom: malý vzrůst, kožní řasa na krku (pterygium colli), štítovitý hrudník, chybění sekundárních pohlavních znaků (sterilita). Klinefelterův syndrom: vysoká postava, gynekomastie (zvětšení prsů u mužů), mikroorchidismus (malá varlata, sterilita).",
      microscopy: "Diagnóza se potvrzuje cytogeneticky: kultivace lymfocytů periferní krve, zástava mitózy v metafázi kolchicinem, barvení a sestavení karyotypu. Histologicky u Turnerova syndromu nacházíme tzv. 'páskovitá ovaria' (ovaria tvořená pouze vazivem bez oocytů).",
      clinical: "Trizomie 13 a 18 jsou extrémně závažné a děti umírají většinou v prvních měsících života. Pacienti s Downovým syndromem se dnes dožívají středního věku, ale s věkem u nich rychle nastupuje Alzheimerova demence a mají vyšší riziko leukémií."
    },
    quiz: [
      {
        question: "Jaký je chromozomální karyotyp ženy s Turnerovým syndromem a jaké jsou jeho hlavní fenotypové projevy a anomálie vaječníků?",
        options: [
          "47,XXY; vysoký vzrůst, gynekomastie",
          "45,X0 (monozomie X); malý vzrůst, pterygium colli (krční řasa), sterilita a páskovitá ovaria",
          "47,XX,+21; šikmé oči a opičí rýha",
          "46,XX,del(5p); pláč připomínající mňoukání kočky"
        ],
        correct: 1,
        explanation: "Turnerův syndrom je charakterizován nepřítomností jednoho z pohlavních chromozomů (karyotyp 45,X0). Ženy jsou malého vzrůstu, nemají funkční vaječníky (ovariální dysgeneze - páskovitá ovaria) a mají typické pterygium colli (kožní řasu na krku)."
      },
      {
        question: "Které těžké vrozené onemocnění je způsobeno trizomií 18. chromozomu a je doprovázeno malformacemi a časným úmrtím plodu?",
        options: [
          "Patauův syndrom",
          "Edwardsův syndrom",
          "Downův syndrom",
          "Klinefelterův syndrom"
        ],
        correct: 1,
        explanation: "Edwardsův syndrom je způsoben trizomií chromozomu 18. Patauův syndrom trizomií 13 a Downův syndrom trizomií 21. Klinefelterův syndrom je trizomie gonozomů (47,XXY)."
      }
    ]
  },
  {
    id: "pat-54",
    title: "Poruchy výživy",
    section: "Etiologie a obecné příčiny",
    keywords: ["malnutrice", "marasmus", "kwashiorkor", "obezita", "kachexie", "proteiny"],
    content: {
      definition: "Poruchy výživy zahrnují stavy způsobené buď nedostatkem živin a energie (malnutrice, podvýživa), nebo naopak jejich nadbytkem (obezita, metabolický syndrom).",
      etiology: "Chudoba, hladovění, mentální anorexie, nádorová kachexie, malabsorpční syndromy (celiakie, Crohnova choroba), nezdravý životní styl a genetická predispozice u obezity.",
      pathogenesis: "1. Marasmus (prosté hladovění): nedostatek energie i bílkovin. Tělo odbourává tukové zásoby a kosterní svalstvo, hladina albuminu v krvi je však relativně zachována (nedochází k edémům). 2. Kwashiorkor (proteinová podvýživa): strava obsahuje kalorie (sacharidy), ale chybí v ní bílkoviny. Dochází k poklesu syntézy albuminu v játrech, což vede k poklesu onkotického tlaku krve a úniku tekutiny do intersticia (vznik edémů a ascitu). 3. Obezita: dlouhodobý přebytek energetického příjmu nad výdejem. Adipocyty hypertrofují a secernují prozánětlivé adipokiny, což vede k inzulínové rezistenci.",
      macroscopy: "Marasmus: extrémní vyhublost (kůže a kosti), vymizení podkožního tuku, atrofie svalů. Kwashiorkor: nafouklé břicho (velký ascites a hepatomegalie ze steatózy), generalizované otoky (anasarka), změny barvy kůže a vlasů. Obezita: nadměrné hromadění tuku v podkoží a kolem vnitřních orgánů (viscerální obezita).",
      microscopy: "Kwashiorkor: masivní steatóza jater (hepatocyty vyplněné tukovými vakuolami, protože chybí apoproteiny pro transport lipidů z jater v podobě VLDL). Atrofie klků tenkého střeva. Obezita: hypertrofie adipocytů, chronický mírný zánět v tukové tkáni (přítomnost věnců makrofágů kolem odumírajících adipocytů).",
      clinical: "Kwashiorkor se typicky vyvíjí u dětí v rozvojových zemích po odstavení od mateřského mléka (nahrazeno škrobovou stravou). Obezita je klíčovým rizikovým faktorem pro diabetes mellitus 2. typu, aterosklerózu, hypertenzi a některé karcinomy."
    },
    quiz: [
      {
        question: "Z hlediska chybějících složek stravy (kalorie vs. proteiny), jak se patogeneticky liší prosté hladovění (marasmus) od proteinové podvýživy (kwashiorkor)?",
        options: [
          "Marasmus je způsoben otravou, kwashiorkor nedostatkem vody",
          "Marasmus je celkový nedostatek energie a bílkovin (vyhublost bez edémů); kwashiorkor je selektivní nedostatek bílkovin při zachovaném příjmu sacharidů, doprovázený poklesem albuminu a vznikem masivních edémů (nafouklé břicho)",
          "Kwashiorkor postihuje pouze dospělé, marasmus pouze novorozence",
          "U marasmu jsou přítomny edémy, u kwashiorkoru chybí"
        ],
        correct: 1,
        explanation: "Marasmus je vyvážené hladovění (chybí vše), tělo spotřebovává vlastní svaly a tuk, ale udržuje proteiny v séru. Kwashiorkor je nepoměr - dítě má dostatek škrobů (cukrů), ale chybí mu proteiny. Játra netvoří albumin, klesá onkotický tlak a tekutina uniká do tkání a břišní dutiny (ascites)."
      },
      {
        question: "Z jakého biochemického důvodu (vliv na syntézu lipoproteinů) dochází u dětí s kwashiorkorem k rozvoji těžké steatózy jater?",
        options: [
          "Protože jedí příliš mnoho tučného jídla",
          "Kvůli chybění apoproteinů (následek proteinového deficitu), což znemožňuje export triglyceridů z jater v podobě lipoproteinů (VLDL)",
          "V důsledku infekce jater bakteriemi",
          "Žádná steatóza u kwashiorkoru nevzniká"
        ],
        correct: 1,
        explanation: "K uvolnění tuku z jater do těla jsou potřeba nosné bílkoviny (apoproteiny) k tvorbě VLDL částic. Při těžkém nedostatku bílkovin (kwashiorkor) játra tyto proteiny nedokážou syntetizovat. Tuk se v játrech tvoří, ale nemůže z nich být exportován, a proto se hromadí v hepatocytech (steatóza)."
      }
    ]
  },
  {
    id: "pat-55",
    title: "Genetická příčina nemocí (monogenní a polygenní)",
    section: "Genetické poruchy",
    keywords: ["monogenní", "polygenní", "dominantní", "recesivní", "penetrance", "pleiotropie"],
    content: {
      definition: "Tato kapitola detailně popisuje dědičnost genetických chorob, které dělíme na monogenní (způsobené mutací jednoho genu s jasným typem dědičnosti) a polygenní (způsobené kombinovaným účinkem více genů s vlivem prostředí).",
      etiology: "Mutace v konkrétních strukturálních genech nebo enzymech (monogenní), nebo přítomnost rizikových alel (polygenní predispozice).",
      pathogenesis: "1. Autozomálně dominantní (AD) choroby: k projevu stačí jedna mutovaná alela (heterozygot). Postihují strukturální proteiny nebo receptory (např. Marfanův syndrom - mutace fibrilinu-1, Familiární hypercholesterolemie - mutace LDL receptoru). 2. Autozomálně recesivní (AR) choroby: k projevu jsou nutné obě mutované alely (homozygot). Postihují enzymy (např. Cystická fibróza, Phenylketonurie). 3. X-vázané (gonozomální) choroby: postihují muže (hemizygoti), ženy jsou přenašečky (např. Hemofilie A/B, Duchenneova svalová dystrofie). 4. Polygenní choroby: nemají mendelovskou dědičnost, genetika tvoří pouze podhoubí (predispozici) a nemoc se klinicky projeví až působením vnějších faktorů (ateroskleróza, esenciální hypertenze, diabetes mellitus 2. typu).",
      macroscopy: "Závisí na chorobě: u Marfanova syndromu vysoká postava, pavoučí prsty (arachnodaktylie), aneurysma aorty. U Duchenneovy dystrofie pseudohypertrofie lýtek (náhrada svalů tukem) a deformace páteře.",
      microscopy: "Molekulárně genetická analýza DNA (PCR, sekvenování, gene panels). V tkáních nacházíme specifické změny: např. u Marfanova syndromu cystickou medionekrózu aorty (rozpad elastických vláken ve stěně aorty).",
      clinical: "AD choroby mívají variabilní expresivitu (různou tíži projevů u různých jedinců) a neúplnou penetranci (ne u každého nosiče genu se nemoc klinicky projeví). AR choroby mají uniformnější průběh a často se projevují již v dětství."
    },
    quiz: [
      {
        question: "Který z klasických mendelovských modelů dědičnosti je typický pro většinu enzymových deficitů a metabolických chorob (např. fenylketonurie)?",
        options: [
          "Autozomálně dominantní (AD)",
          "Autozomálně recesivní (AR)",
          "Y-vázaná dědičnost",
          "Mitochondriální dědičnost"
        ],
        correct: 1,
        explanation: "AR dědičnost je typická pro enzymové vady. U heterozygotů (přenašečů) stačí 50% aktivita enzymu z jedné zdravé alely k normálnímu metabolismu, takže jsou zdraví. Nemoc se projeví až u homozygota se dvěma mutovanými alelami."
      },
      {
        question: "U autozomálně dominantního Marfanova syndromu je mutován gen pro který strukturní protein pojiva a jaké fatální cévní riziko tím vzniká na aortě?",
        options: [
          "Kolagen typu I; zlomeniny kostí",
          "Fibrilin-1; ruptura a disekce aorty v důsledku oslabení její stěny",
          "Dystrofin; svalová slabost",
          "LDL receptor; infarkt myokardu v 10 letech"
        ],
        correct: 1,
        explanation: "Marfanův syndrom je způsoben mutací genu pro fibrilin-1, což je klíčová složka mikrofibril elastické tkáně. Oslabení stěny aorty vede k její progresivní dilataci, aneurysmatu a hrozí fatální disekce (rozštěpení) nebo ruptura stěny aorty."
      }
    ]
  },
  {
    id: "pat-56",
    title: "Regresivní a metabolické změny - přehled",
    section: "Regresivní změny",
    keywords: ["regresivní", "dystrofie", "nekróza", "atrophy", "metabolismus", "pat", "smrt"],
    content: {
      definition: "Regresivní a metabolické změny (dystrofie) jsou poruchy metabolismu buněk a tkání, které vedou k jejich strukturálnímu a funkčnímu poškození (regresi). Představují přechod mezi fyziologickým stavem a buněčnou smrtí (nekrózou).",
      etiology: "Nedostatek kyslíku (hypoxie), toxické vlivy, genetické poruchy enzymů, nedostatečná výživa, hormonální dysbalance, infekce.",
      pathogenesis: "Poruchou energetického metabolismu buňky klesá aktivita membránových pump, hromadí se voda a ionty. Dystrofie se dělí podle postižené látky na: 1. Parenchymatózní (hydropická, vakuolární - hromadění vody v cytoplasmě), 2. Mukózní (hromadění hlenu - např. u mukoviscidózy), 3. Lipidové (steatóza, lipidózy), 4. Proteinové (hyalinní zkapalnění, amyloidóza), 5. Minerální (patologické kalcifikace, litiáza), 6. Pigmentové poruchy.",
      macroscopy: "Orgány postižené dystrofií bývají zvětšené, těžší, mají napjaté pouzdro a zakalený vzhled na řezu (kalná zbytnění). U pokročilých regresivních změn dochází k atrofii až nekróze orgánu.",
      microscopy: "Hydropická dystrofie: buňky jsou zvětšené, cytoplasma je světlá, opticky prázdná (obsahuje vakuoly vody), jádro je zatlačeno. Hyalinní kapénky: přítomnost jasně růžových (eozinofilních) proteinových kapének v cytoplasmě (např. v buňkách proximálních tubulů ledvin při proteinurii).",
      clinical: "Dystrofické změny jsou v počátečních stadiích plně reverzibilní. Pokud se odstraní příčina (např. se obnoví dodávka kyslíku), buňka se zotaví. Při překročení bodu zvratu (point of no return) přechází dystrofie v ireversibilní poškození a buňka umírá (nekróza)."
    },
    quiz: [
      {
        question: "Která buněčná dystrofie charakterizovaná edémem a hromaděním vody v cytoplasmě je považována za nejlehčí a reverzibilní poškození buňky?",
        options: [
          "Kaseózní nekróza",
          "Parenchymatózní (hydropická / vakuolární) dystrofie",
          "Amyloidóza ledvin",
          "Vlhká gangréna"
        ],
        correct: 1,
        explanation: "Hydropická dystrofie je nejčasnější odpovědí buňky na poškození (např. mírnou hypoxii). Selhává Na+/K+ pumpa, sodík a voda se hromadí v buňce, která oteče. Po obnovení ATP se voda odčerpá a buňka funguje normálně."
      },
      {
        question: "Jak definujeme pojem 'bod zvratu' (point of no return) v buněčné patologii, za kterým se reverzibilní poškození buňky mění v nekrózu?",
        options: [
          "Okamžik, kdy se pacient rozhodne navštívit lékaře",
          "Hranici, za kterou se reverzibilní dystrofie buňky mění v ireversibilní poškození vedoucí nevyhnutelně k nekróze (smrti) buňky",
          "Fázi hojení jizvy kolagenem",
          "Vznik metastáz u nádoru"
        ],
        correct: 1,
        explanation: "Bod zvratu odděluje reverzibilní změny (dystrofie) od ireversibilních. Je spojen s těžkým poškozením mitochondrií (neschopnost obnovit syntézu ATP) a hlubokým poškozením buněčných membrán (únik enzymů a influx vápníku)."
      }
    ]
  },
  {
    id: "pat-57",
    title: "Poruchy metabolizmu proteinů",
    section: "Regresivní změny",
    keywords: ["proteiny", "hyalin", "inkluze", "vlnovité", "Mallory", "Russell", "proteinurie"],
    content: {
      definition: "Poruchy metabolismu proteinů (proteinové dystrofie) jsou stavy, při kterých dochází k abnormálnímu hromadění proteinů intra- nebo extracelulárně, nebo k tvorbě patologicky pozměněných proteinů.",
      etiology: "Genetické mutace proteinů (např. deficit alfa-1-antitrypsinu), nadměrná syntéza (mnohočetný myelóm), poruchy zpětné resorpce v ledvinách (proteinurie).",
      pathogenesis: "1. Intracytoplasmatické hromadění: a) Hyalinní kapénky v buňkách proximálních tubulů ledvin (při proteinurii ledviny zpětně resorbují bílkoviny z moči endocytózou). b) Russellova tělíska (hromadění imunoglobulinů v plazmatických buňkách). c) Malloryho hyalin (agregáty cytokeratinů v hepatocytech u alkoholiků). 2. Extracelulární hromadění: hyalinóza (ukládání amorfního proteinového materiálu v cévní stěně u hypertenze či diabetu - hyalinní arterioloskleróza) a amyloidóza.",
      macroscopy: "Hyalinní arterioloskleróza: ledviny jsou zmenšené, tuhé, s jemně zrnitým povrchem (primárně svraštělá ledvina). Amyloidóza: voskovitý vzhled orgánů. Malloryho hyalin se makroskopicky neprojevuje, doprovází steatózu jater.",
      microscopy: "Hyalinní kapénky: jasně růžové (eozinofilní) kulaté kapénky v cytoplasmě. Malloryho telíska: nepravidelné, růžové chomáče kolem jádra hepatocytů. Hyalinní arterioloskleróza: stěna arteriol je ztluštělá, homogenní, růžová, lumen je zúžené.",
      clinical: "Ukládání hyalinu v cévách (hyalinóza) u hypertoniků snižuje elasticitu cév a omezuje průtok krve, což v ledvinách vede k nefroskleróze a chronickému selhání ledvin. Deficit alfa-1-antitrypsinu (hromadění proteinu v játrech) vyvolává cirhózu jater a plicní emfyzém."
    },
    quiz: [
      {
        question: "Co jsou to Malloryho tělíska (Malloryho hyalin) z hlediska struktury cytoskeletu a u kterého onemocnění jater je typicky nacházíme?",
        options: [
          "Nekrotická ložiska v plicích u astmatu",
          "Intracytoplasmatické agregáty poškozených intermediárních filament (cytokeratinů) v hepatocytech, typické pro alkoholické poškození jater",
          "Hromadění lipidů v cévách srdce",
          "Depozita imunoglobulinů v plazmatických buňkách"
        ],
        correct: 1,
        explanation: "Malloryho tělíska jsou eozinofilní nepravidelná klubíčka v cytoplasmě hepatocytů. Jsou tvořena agregáty poškozených proteinů cytoskeletu (cytokeratinů 8 a 18). Typicky doprovázejí alkoholickou hepatitidu, ale nacházejí se i u nealkoholické steatohepatitidy (NASH)."
      },
      {
        question: "Jak se mikroskopicky a strukturálně projevuje hyalinní arterioloskleróza v ledvinných cévách u pacientů s hypertenzí a diabetem?",
        options: [
          "Tvorbou obřích mnohojaderných buněk kolem tepny",
          "Homogenním růžovým (eozinofilním) ztluštěním stěny arteriol s výrazným zúžením jejich průsvitu (lumen)",
          "Ukládáním tmavě modrého vápníku do stěny cév",
          "Rozpadem cévní stěny s masivním krvácením"
        ],
        correct: 1,
        explanation: "Hyalinní arterioloskleróza postihuje drobné tepny (arterioly) u pacientů s hypertenzí a diabetem. Plazmatické proteiny unikají do stěny cévy, kde se hromadí a tvoří homogenní růžový prstenec (hyalin), což cévu zužuje a činí ji nepružnou."
      }
    ]
  },
  {
    id: "pat-58",
    title: "Avitaminózy, hypovitaminózy",
    section: "Etiologie a obecné příčiny",
    keywords: ["avitaminóza", "skorbut", "rachitida", "krvácivost", "beri", "pellagra", "šeroslepost"],
    content: {
      definition: "Hypovitaminóza je stav způsobený částečným nedostatkem určitého vitamínu v těle. Avitaminóza je úplný nedostatek vitamínu, který vede k rozvoji specifického klinického syndromu.",
      etiology: "Nedostatečný příjem v potravě (jednostranná strava, hladovění), porucha vstřebávání (malabsorpční syndromy, celiakie, cholestáza - chybí žluč pro vstřebávání vitamínů A, D, E, K rozpustných v tucích), zvýšená spotřeba (těhotenství, alkoholismus).",
      pathogenesis: "1. Vitamín C (kyselina askorbová): kofaktor pro hydroxylaci prolinu a lysinu při syntéze kolagenu. Nedostatek vede k tvorbě defektního kolagenu s extrémní křehkostí cév a poruchou hojení ran (skorbut/kurděje). 2. Vitamín D (kalcitriol): nutný pro vstřebávání vápníku a fosfátu ve střevě. Nedostatek u dětí vede k poruše mineralizace kostní matrix (křivice/rachitida), u dospělých k osteomalacii. 3. Vitamín K: nutný pro karboxylaci koagulačních faktorů II, VII, IX, X v játrech. Nedostatek způsobuje krvácivé stavy. 4. Vitamín A: složka očního pigmentu (nedostatek -> šeroslepost) a nutný pro diferenciaci epitelů (nedostatek -> dlaždicobuněčná metaplazie a rohovění sliznic, xeroftalmie oka). 5. Vitamín B1 (thiamin): nedostatek u alkoholiků (Wernicke-Korsakoffův syndrom, nemoc beri-beri).",
      macroscopy: "Skorbut: krvácení z dásní (gingivitis), uvolňování zubů, petechie a hematomy na kůži, subperiostální krvácení. Rachitida: deformace kostí lebky (craniotabes), rachitický růženec (zduření na přechodu žeber a chrupavky), zkřivení dlouhých kostí dolních končetin (nohy do O nebo X).",
      microscopy: "Rachitida: nadměrné hromadění nemineralizovaného osteoidu na okrajích kostních trabekul, porucha uspořádání růstové ploténky. Skorbut: edém stroma, absence zralého kolagenu v jizvách, dilatované a fragilní kapiláry.",
      clinical: "Nedostatek vitamínu K u novorozenců (nemají ještě střevní mikroflóru tvořící vit. K) vyvolává hemoragickou nemoc novorozence (prevencí je podání vit. K po narození). Nedostatek vit. B12 vyvolává perniciózní anémii a demyelinizační poškození míchy."
    },
    quiz: [
      {
        question: "Který biochemický proces (hydroxylace kolagenu) je narušen při nedostatku vitamínu C (skorbutu), což vede k fragilitě cév a špatnému hojení ran?",
        options: [
          "Protože vitamín C přímo ničí bakterie v ústech",
          "Protože vitamín C je nezbytným kofaktorem pro hydroxylaci aminokyselin při syntéze kolagenu; bez něj vzniká křehké vazivo a fragilní cévy, které snadno praskají",
          "Vitamín C stimuluje tvorbu trombocytů",
          "Způsobuje zvápenatění dásní"
        ],
        correct: 1,
        explanation: "Syntéza kolagenu vyžaduje enzymatickou hydroxylaci prolinu a lysinu. K tomu je zapotřebí vitamín C jako donor elektronů (udržuje železo v aktivním stavu Fe2+). Bez vitamínu C se kolagenní vlákna nemohou pevně propojit (chybí trojitá šroubovice), což dramaticky oslabuje stěny cév a vazivo."
      },
      {
        question: "Jak se nazývá onemocnění způsobené nedostatkem vitamínu D u rostoucích dětí, které vede k nedostatečné mineralizaci kostí a kosterním deformacím?",
        options: [
          "Skorbut",
          "Křivice (rachitida)",
          "Osteomalacie",
          "Pellagra"
        ],
        correct: 1,
        explanation: "Nedostatek vitamínu D v období růstu (u dětí) vede k křivici (rachitidě). Kostní matrix (osteoid) se tvoří, ale nemůže dostatečně mineralizovat vápníkem a fosfátem. Kosti zůstávají měkké a pod vahou těla a tahy svalů se ohýbají a deformují. U dospělých se stejný deficit nazývá osteomalacie."
      }
    ]
  }
];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_PATOLOGIE_3 = DATA_PATOLOGIE_3;
}
