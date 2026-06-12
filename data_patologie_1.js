// data_patologie_1.js - Databáze otázek z obecné patologie (témata 1 - 20)
const DATA_PATOLOGIE_1 = [
  {
    id: "pat-1",
    title: "Uplatnění patologie v praxi, nekropsie, biopsie, cytologie",
    section: "Úvod a diagnostické metody",
    keywords: ["biopsie", "nekropsie", "cytologie", "formalin", "fixace", "peroperační", "exfoliativní"],
    content: {
      definition: "Patologie je základní lékařský obor, který studuje nemoci, jejich příčiny (etiologii), mechanismy rozvoje (patogenezi) a strukturální změny buněk, tkání a orgánů. V praxi tvoří most mezi teoretickou vědou a klinickou medicínou.",
      etiology: "Potřeba stanovení diagnózy u živého pacienta (biopsie, cytologie) nebo určení příčiny úmrtí a kontrola kvality léčby (nekropsie).",
      pathogenesis: "Metodický postup zpracování tkáně: 1. Odběr tkáně, 2. Okamžitá fixace (standardně 10% neutrální pufrovaný formalin) k zabránění autolýzy, 3. Zalévání do parafinu, 4. Krájení na mikrotomu (řezy 3-5 μm), 5. Barvení (základní barvení hematoxylin-eosin - H&E, případně speciální barvení či imunohistochemie).",
      macroscopy: "Nekropsie (pitva): systematické makroskopické vyšetření všech tělesných systémů a orgánů zemřelého. Biopsie: makroskopický popis dodaného resekátu, vyříznuté tkáně či celého orgánu (velikost, barva, konzistence, ohraničení léze).",
      microscopy: "Mikroskopy vyhodnocují histologickou strukturu. Histologická biopsie: zachovává architekturu tkáně (např. punch biopsie, excize). Cytologie: hodnotí pouze izolované buňky či jejich shluky bez zachování architektury tkáně (exfoliativní - např. stěr z děložního čípku, aspirační - FNAB tenkou jehlou).",
      clinical: "Biopsie poskytuje definitivní diagnózu (např. benigní vs. maligní nádor). Peroperační biopsie (zmrazené řezy - cryo) se provádí během operace pro okamžité rozhodnutí o rozsahu výkonu (výsledek do 10-15 minut)."
    },
    quiz: [
      {
        question: "Při odesílání tkáňového vzorku k rutinnímu histopatologickému vyšetření (barvení H&E), který fixační prostředek je standardně považován za zlatou volbu k zabránění autolýzy tkáně?",
        options: [
          "96% ethanol",
          "10% neutrální pufrovaný formalin (formol)",
          "Glutaraldehyd",
          "Fyziologický roztok"
        ],
        correct: 1,
        explanation: "Standardem pro fixaci světelně-mikroskopických histologických vzorků je 10% formalin (což je vlastně 4% roztok formaldehydu), který fixuje tkáň síťováním proteinů a brání autolýze. Ethanol se užívá spíše v cytologii, glutaraldehyd pro elektronovou mikroskopii a fyziologický roztok nefixuje."
      },
      {
        question: "Pokud srovnáváme histopatologickou biopsii a cytologické vyšetření z hlediska diagnostických možností a struktury vzorku, jaký je mezi nimi klíčový rozdíl?",
        options: [
          "Biopsie se provádí pouze na mrtvých, cytologie na živých",
          "Biopsie hodnotí architekturu tkáně, cytologie pouze jednotlivé buňky bez tkáňové struktury",
          "Cytologické vyšetření trvá vždy déle než histologické",
          "U cytologie je nutné vzorek vždy zalévat do parafinu"
        ],
        correct: 1,
        explanation: "Biopsie vyšetřuje tkáňový blok a zachovává architekturu (vztahy mezi buňkami a stroma), zatímco cytologie hodnotí pouze izolované buňky (např. ze stěru či aspirace) rozetřené na sklíčku."
      }
    ]
  },
  {
    id: "pat-2",
    title: "Kadaverózní změny (fyzikální, chemické pochody)",
    section: "Postmortální změny",
    keywords: ["rigidita", "algor", "livor", "palor", "autolýza", "hniloba", "tous", "cruor"],
    content: {
      definition: "Kadaverózní (posmrtné) změny jsou fyzikální a chemické pochody, ke kterým dochází v organismu po smrti v důsledku zástavy oběhu, metabolismu a buněčného dýchání.",
      etiology: "Absence dodávky kyslíku a živin, hromadění kyselých metabolitů a aktivace lytických enzymů v buňkách.",
      pathogenesis: "1. Fyzikální změny: chladnutí (algor mortis) - vyrovnávání teploty s okolím, bledost (palor mortis), posmrtné skvrny (livores mortis) - hypostáza krve působením gravitace, posmrtné vysychání. 2. Chemické změny: posmrtná ztuhlost (rigor mortis) - vyčerpání ATP znemožňuje disociaci aktinu a myosinu, posmrtné srážení krve (cruor - červený a bílý posmrtný koagulum, bez adheze k cévní stěně na rozdíl od trombu), autolýza (samonatrávení tkání enzymy z lyzosomů) a hniloba (putrefakce - působení anaerobních bakterií z tlustého střeva, produkce sirovodíku a vznik pseudomelanózy).",
      macroscopy: "Livores (posmrtné skvrny): modrofialové skvrny na skloněných částech těla (v místech tlaku podložky chybí). Pseudomelanóza: zelenavé zbarvení břišní stěny a vnitřních orgánů (sirovodík reaguje s železem z hemoglobinu na sulfhemoglobin). Posmrtná ztuhlost nastupuje od žvýkacích svalů dolů (Nystenovo pravidlo) za 2-4 hodiny, vrcholí za 24 hodin.",
      microscopy: "Mikroskopicky dochází k postupné ztrátě jaderného barvení (karyolýza), rozpadu buněk bez zánětlivé celulizace (na rozdíl od vitální nekrózy, kde zánětlivá reakce přítomna je!). Tkáně bohaté na lyzosomy (slinivka, žaludeční sliznice) autolyzují nejrychleji.",
      clinical: "Znalost kadaverózních změn je klíčová v soudním lékařství pro určení přibližné doby smrti a pro odlišení posmrtných změn od patologických lézí vzniklých zaživa (např. posmrtná koagula vs. intravitální tromby)."
    },
    quiz: [
      {
        question: "Jaký patofyziologický a biochemický mechanismus na úrovni svalových vláken (aktinu a myosinu) je zodpovědný za posmrtnou ztuhlost (rigor mortis)?",
        options: [
          "V důsledku hromadění vápníku a vyčerpání ATP, což zabrání uvolnění aktino-myosinového komplexu",
          "V důsledku dehydratace svalových vláken",
          "Kvůli posmrtnému působení bakterií",
          "V důsledku okamžitého snížení pH na hodnotu kolem 2.0"
        ],
        correct: 0,
        explanation: "Po smrti klesá hladina ATP. Bez ATP nemůže dojít k rozpojení vazby mezi aktinem a myosinem ve svalech, což fixuje sval v kontrahovaném stavu, dokud nenastoupí autolýza proteinů."
      },
      {
        question: "Při pitvě zemřelého, jakými hlavními makroskopickými a mechanickými vlastnostmi lze spolehlivě odlišit posmrtně vzniklé krevní koagulum (cruor) od intravitálního trombu?",
        options: [
          "Koagulum je pevně lne k cévní stěně a je suché a drolivé",
          "Koagulum je lesklé, pružné, nelne pevně k cévní stěně a snadno se vyjme",
          "Koagulum je vždy zelené v důsledku pseudomelanózy",
          "Koagulum obsahuje zánětlivé buňky, které trombu chybí"
        ],
        correct: 1,
        explanation: "Cruor (posmrtné koagulum) je elastické, hladké, lesklé a není přirostlé k cévní stěně. Trombus vzniklý zaživa je matný, suchý, křehký a lpí na poškozeném endotelu."
      }
    ]
  },
  {
    id: "pat-3",
    title: "Malformace (základní terminologie, etiologie, VVV v období blastogeneze)",
    section: "Vývojové poruchy",
    keywords: ["malformace", "teratogen", "blastopatie", "agenese", "syndrom", " VV"],
    content: {
      definition: "Malformace je strukturální vada orgánu nebo části těla vzniklá v důsledku vnitřně narušeného vývojového procesu (nejčastěji geneticky). Vrozené vývojové vady (VVV) představují odchylky od normální anatomické stavby přítomné při narození.",
      etiology: "1. Genetické faktory (chromozomové aberace, genové mutace - cca 25 %). 2. Faktory vnějšího prostředí (teratogeny - chemické látky, alkohol, léky jako thalidomid, infekce jako zarděnky/rubeola, toxoplazmóza, záření - cca 10 %). 3. Multifaktoriální etiopatogeneze (kombinace genů a prostředí - cca 65 %).",
      pathogenesis: "Vznik vad závisí na stadiu těhotenství v době působení noxy. Blastogeneze (1.-15. den od oplození): poškození vede buď k zániku zárodku (pravidlo 'všechno nebo nic'), nebo k duplicitám/monstruozitám (např. siamská dvojčata). Organogeneze (3.-8. týden): období maximální citlivosti k teratogenům, vznikají specifické hrubé malformace jednotlivých orgánů. Fetální období (od 9. týdne): vznikají spíše funkční vady a deformace z mechanických příčin.",
      macroscopy: "Zahrnuje široké spektrum anomálií: rozštěpy (rtu, patra, neurální trubice - spina bifida), chybění orgánů, zdvojení struktur (polydaktylie), nebo spojené orgány (podkovovitá ledvina).",
      microscopy: "Mikroskopicky se setkáváme s heterotopií (přítomnost normální tkáně v abnormální lokalizaci) nebo dysplazií tkáně (narušení vnitřní architektonické uspořádanosti tkáně).",
      clinical: "Závažnost kolísá od kosmetických vad až po vady neslučitelné se životem (anencefalus). Vyžadují prenatální screening (ultrazvuk, biochemické markery z krve matky, amniocentéza)."
    },
    quiz: [
      {
        question: "Pokud dojde k expozici lidského zárodku škodlivému faktoru v období blastogeneze (první dva týdny po oplození), jaká je jeho typická reakce podle obecných pravidel embryopatologie?",
        options: [
          "Vznikem specifických izolovaných vad končetin",
          "Buď odumře (potrat), nebo se plně zregeneruje bez vad (pravidlo 'vše nebo nic')",
          "Vznikem rozštěpu patra",
          "Vždy dochází k mentální retardaci bez strukturálních vad"
        ],
        correct: 1,
        explanation: "V období blastogeneze jsou buňky zárodku ještě multipotentní. Poškození buď zahubí celý konceptus, nebo jsou poškozené buňky plně nahrazeny zbývajícími, a vývoj pokračuje normálně. Jedná se o pravidlo 'všechno nebo nic'."
      },
      {
        question: "Jak se v obecné embryopatologii a teratologii definuje pojem 'teratogen' ve vztahu k vývoji embrya či fétu?",
        options: [
          "Látka či faktor vnějšího prostředí schopná vyvolat vrozenou vývojovou vadu",
          "Genetická mutace zděděná po otci",
          "Nádorový marker sledovaný u těhotných",
          "Posmrtná změna plodu"
        ],
        correct: 0,
        explanation: "Teratogen je jakýkoliv faktor vnějšího prostředí (infekce, chemikálie, fyzikální vlivy), který působí na těhotnou ženu a může u vyvíjejícího se embrya či fétu vyvolat strukturní či funkční vadu."
      }
    ]
  },
  {
    id: "pat-4",
    title: "Hypoplazie, aplazie, ageneze",
    section: "Vývojové poruchy",
    keywords: ["hypoplazie", "aplazie", "ageneze", "primordium", "rudiment"],
    content: {
      definition: "Tato trojice pojmů označuje různé stupně chybění nebo nedostatečného vývoje orgánu během prenatálního života.",
      etiology: "Genetické mutace (např. mutace genů regulujících vývoj ledvin), cévní insulty během embryogeneze (přerušení zásobení vývojového pole krví) nebo nedostatek plodové vody (oligohydramnion).",
      pathogenesis: "1. Ageneze: úplné chybění orgánu a zároveň i jeho embryonálního základu (primordia). 2. Aplazie: přítomen je pouze rudimentární (zakrslý) embryonální základ, ale vlastní orgán se nevyvinul. 3. Hypoplazie: orgán se sice vyvinul, ale zůstal nedokončený, má zmenšenou velikost a snížený počet buněk.",
      macroscopy: "Ageneze: prázdné místo po orgánu. Aplazie: vazivový nebo tukový proužek v místě předpokládaného orgánu. Hypoplazie: tvarově normální, ale výrazně zmenšený orgán (např. hypoplastická ledvina vážící pouze 20g namísto 150g).",
      microscopy: "Hypoplazie: tkáň má normální strukturu (architektonika je zachována), ale buněk je méně a orgán může vykazovat dřívější sklerotizaci stroma. Aplazie: mikroskopicky nacházíme pouze nespecifické vazivo, tuk a rudimentární cévní zásobení.",
      clinical: "Bilaterální ageneze ledvin je neslučitelná se životem (Potterové syndrom, oligohydramnion, plicní hypoplazie). Unilaterální chybění (např. jedna ledvina) bývá často kompenzováno hypertrofií druhostranného orgánu a pacient může být asymptomatický."
    },
    quiz: [
      {
        question: "Jakým způsobem lze na embryonální úrovni přesně odlišit vrozené vývojové vady označované jako ageneze a aplazie orgánu?",
        options: [
          "Ageneze postihuje pouze končetiny, aplazie vnitřní orgány",
          "U ageneze chybí orgán i jeho embryonální základ; u aplazie je základ přítomen, ale orgán se nevyvinul",
          "Ageneze je získané zmenšení orgánu, aplazie je vrozené",
          "V mikroskopickém obraze se neliší"
        ],
        correct: 1,
        explanation: "Ageneze znamená kompletní absenci orgánu i jeho embryonálního primordia. U aplazie zárodečný základ (rudiment) vznikl, ale nedošlo k jeho dalšímu rozvoji v orgán."
      },
      {
        question: "Pokud hodnotíme histologický preparát orgánu, u kterého došlo k čisté vrozené hypoplazii, jaký mikroskopický obraz v tkáni typicky nacházíme?",
        options: [
          "Tkáň je kompletně fibrotizovaná a chybí v ní cévy",
          "Architektonika tkáně je v zásadě normální, ale celkový objem a počet funkčních buněk je snížený",
          "V tkáni nacházíme ložiska nekrózy a zánětu",
          "Buňky vykazují těžkou dysplazii s rizikem maligního zvratu"
        ],
        correct: 1,
        explanation: "Hypoplazie je vrozené zmenšení orgánu. Mikroskopicky je struktura tkáně v pořádku (na rozdíl od atrofie, což je získané zmenšení původně normálně vyvinutého orgánu), ale buněk je méně."
      }
    ]
  },
  {
    id: "pat-5",
    title: "Fyzikální příčiny nemoci",
    section: "Etiologie a obecné příčiny",
    keywords: ["hypertermie", "hypotermie", "popálení", "omrzlina", "ionizující", "pat", "tlak"],
    content: {
      definition: "Fyzikální noxy jsou faktory vnějšího prostředí neživé povahy, které při působení na organismus překročí jeho adaptační limity a způsobí poškození tkání.",
      etiology: "Mechanická trauma (crush syndrom, rány), extrémy teplot (chlad, teplo), změny tlaku vzduchu, elektrický proud a různé druhy záření.",
      pathogenesis: "1. Termické poškození: teplo (hypertermie, popáleniny I.-IV. stupně - denaturace proteinů, nekróza), chlad (hypotermie, omrzliny - vazokonstrikce, tvorba krystalů ledu v buňkách). 2. Elektrický proud: popálení v místě vstupu/výstupu (Jouleovo teplo), arytmie až fibrilace komor drážděním převodního systému. 3. Záření: neionizující (UV - poškození DNA tyminovými dimery, karcinom kůže) a ionizující (RTG, gama - radiolýza vody, vznik ROS, přímé zlomy DNA, akutní nemoc z ozáření).",
      macroscopy: "Popáleniny: erytém (I. st.), puchýře (II. st.), nekróza/příškvar (III. st.), zuhelnatění (IV. st.). Omrzliny: bledost střídaná s cyanózou, otokem, puchýři a případně suchou gangrénou. Zásah bleskem: Lichtenbergovy obrazce (stromovité zarudnutí kůže).",
      microscopy: "U popálenin koagulační nekróza epidermis a dermis, edém. U ozáření: ztráta mitotické aktivity buněk, buněčná atypie, v pozdní fázi výrazná fibróza a hyalinizace cévních stěn s obliterací lumen.",
      clinical: "Závažnost závisí na intenzitě a době působení noxy. U popálenin je kritický rozvoj popáleninového šoku (ztráta tekutin) a sepse z infekce ran. U záření je rizikem rozvoj radiolukémie a jiných neoplazií s odstupem let."
    },
    quiz: [
      {
        question: "Jakým způsobem ionizující záření na molekulární a buněčné úrovni poškozuje buněčné struktury a indukuje zlomy v řetězcích DNA?",
        options: [
          "Přímé mechanické potrhání buněčných membrán",
          "Radiolýza vody s tvorbou reaktivních forem kyslíku (ROS) a přímé poškození DNA (zlomy)",
          "Způsobení okamžité alkalózy v tkáních",
          "Zvýšení tělesné teploty na 50 °C v ozařovaném místě"
        ],
        correct: 1,
        explanation: "Ionizující záření poškozuje buňky dvěma způsoby: přímo (excitací a ionizací atomů v DNA s následnými zlomy řetězců) a nepřímo (radiolýzou vody za vzniku volných radikálů H* a OH*, které napadají membrány a makromolekuly)."
      },
      {
        question: "Které klinické, makroskopické a strukturní znaky poškození kůže jsou nejvíce charakteristické pro termické popáleniny II. stupně?",
        options: [
          "Pouhý erytém (zarudnutí) bez poškození epidermis",
          "Tvorba puchýřů (buly) vyplněných exsudátem, poškození epidermis a horní dermis",
          "Úplná nekróza dermis s černým příškvarem",
          "Zasažení kostí a svalů"
        ],
        correct: 1,
        explanation: "Popáleniny II. stupně (parciální tloušťka) jsou charakterizovány tvorbou puchýřů (separace epidermis od dermis exsudátem), výraznou bolestivostí (nervová zakončení jsou zachována a drážděna) a hojením bez jizev, pokud nedojde k infikování."
      }
    ]
  },
  {
    id: "pat-6",
    title: "Chemické příčiny nemoci",
    section: "Etiologie a obecné příčiny",
    keywords: ["intoxikace", "jed", "leptání", "korozivní", "xenobiotika", "alkohol", "paracetamol"],
    content: {
      definition: "Chemické příčiny (toxiny, jedy, xenobiotika) jsou látky, které po vstupu do organismu vyvolávají biochemické a strukturální poškození buněk narušením jejich metabolických drah nebo přímým destruktivním účinkem.",
      etiology: "Léky (předávkování, např. paracetamol), průmyslové chemikálie, kyseliny a zásady (leptadla), organická rozpouštědla, alkohol a oxid uhelnatý (CO).",
      pathogenesis: "1. Přímé působení: např. silné kyseliny (koagulační nekróza) a zásady/louhy (kolikvační nekróza, hlubší průnik). 2. Nepřímé (metabolické): paracetamol (vyčerpání glutathionu v játrech, hromadění toxického metabolitu NAPQI -> nekróza hepatocytů); CO (vazba na hemoglobin za vzniku karbonylhemoglobinu, tkáňová hypoxie); methanol (metabolizuje se na kyselinu mravenčí -> poškození očního nervu, metabolická acidóza).",
      macroscopy: "Požití kyselin: suché černé/hnědé příškvary na sliznici žaludku. Požití louhů: sliznice jícnu je zbytnělá, bělavá, rosolovitá a vlhká. Otrava CO: třešňově červené zbarvení posmrtných skvrn a vnitřních orgánů. Otrava methanolem: otok a překrvení mozku, edém sítnice.",
      microscopy: "Poleptání: destrukce tkáňové struktury, edém, infiltrace neutrofily. Hepatotoxické poškození paracetamolem: centrolobulární nekróza jater (kolem centrální venuly - zóna 3 acinu, kde je nejvyšší koncentrace cytochromu P450).",
      clinical: "Projevy závisí na dávce a způsobu vstupu (inhalace, ingesce, kontakt). Vyžadují rychlé podání specifického antidota (např. N-acetylcystein u paracetamolu, ethanol/fomepizol u methanolu, kyslík u CO)."
    },
    quiz: [
      {
        question: "Při náhodném či úmyslném požití silných zásad (louhů), jaký typ nekrózy tyto korozivní látky vyvolávají na sliznici jícnu a žaludku?",
        options: [
          "Koagulační nekrózu",
          "Kolikvační (zkapalňující) nekrózu",
          "Kaseózní nekrózu",
          "Fibrinoidní nekrózu"
        ],
        correct: 1,
        explanation: "Zásady zmýdelňují tuky a rozpouštějí proteiny, což vede k rozbřednutí tkáně a vzniku kolikvační nekrózy. Tento proces umožňuje louhům pronikat hlouběji do tkání (např. stěny jícnu) než kyselinám, které koagulací proteinů vytvoří bariéru."
      },
      {
        question: "Při těžkém toxickém poškození jater v důsledku předávkování paracetamolem, která zóna jaterního lalůčku podléhá nekróze jako první a proč?",
        options: [
          "Periferní zóna (kolem portálních polí)",
          "Centrální (centrolobulární) zóna kolem v. centralis",
          "Subkapsulární oblast",
          "Játra jsou poškozena difuzně bez jakékoliv zónovosti"
        ],
        correct: 1,
        explanation: "V centrolobulární zóně (zóna 3) je nejvyšší koncentrace enzymů cytochromu P450, které metabolizují paracetamol na toxický NAPQI, a zároveň je zde nejnižší saturace kyslíkem, což činí tuto oblast nejcitlivější k toxické nekróze."
      }
    ]
  },
  {
    id: "pat-7",
    title: "Biologické příčiny nemoci",
    section: "Etiologie a obecné příčiny",
    keywords: ["patogen", "viry", "bakterie", "plísně", "paraziti", "priony", "cytopatický"],
    content: {
      definition: "Biologické noxy jsou živé organismy nebo infekční částice (viry, bakterie, houby, paraziti, priony), které vstupují do hostitele, množí se v něm a vyvolávají poškození buněk a tkání buď přímo, nebo prostřednictvím imunitní odpovědi.",
      etiology: "Infekční onemocnění přenášená kapénkami, potravou, pohlavním stykem, vektory (klíšťata, komáři) či přímým kontaktem.",
      pathogenesis: "1. Viry: obligátní intracelulární paraziti, využívají aparát buňky k replikaci, vyvolávají cytopatický efekt (lýza buňky, tvorba inkluzí) nebo transformaci v nádor (např. HPV). 2. Bakterie: poškozují tkáně produkcí endotoxinů (lipopolysacharid G- bakterií, spouští cytokinovou bouři) nebo exotoxinů (např. tetanospasmin). 3. Houby (mykózy): oportunní infekce u imunokompromitovaných (Aspergillus, Candida). 4. Priony: infekční proteiny způsobující konformační změnu vlastních proteinů (PrPc -> PrPsc) vedoucí k neurodegeneraci.",
      macroscopy: "Bakteriální infekce: tvorba hnisu (hnisavý zánět), abscesy, pseudomembrány (záškrt). Mykózy: bělavé povlaky (moučnivka), u aspergila šedohnědé uzly v plicích. Prionózy: spongiformní (houbovitá) encefalopatie - mozek má makroskopicky atrofickou kůru a na řezu drobně porézní vzhled.",
      microscopy: "Virové infekce: intranukleární či intracytoplasmatické inkluze (např. CMV - vzhled 'sovích očí'), mnohojaderné syncytia. Bakteriální infekce: masivní infiltrace neutrofilními granulocyty. Priony: opticky prázdné vakuoly v cytoplasmě neuronů a neuropilu (spongiformní dystrofie) bez zánětlivé celulizace.",
      clinical: "Klinické spektrum sahá od asymptomatického nosičství přes akutní horečnatá onemocnění až po chronické infekce a rozvoj septického šoku s multiorgánovým selháním."
    },
    quiz: [
      {
        question: "Co je z chemického hlediska endotoxin a v jaké buněčné struktuře se u gramnegativních bakterií přirozeně vyskytuje?",
        options: [
          "Protein secernovaný živými grampozitivními bakteriemi",
          "Lipopolysacharid (LPS), který je součástí vnější membrány gramnegativních bakterií a uvolňuje se při jejich rozpadu",
          "Abnormálně poskládaný prionový protein",
          "Toxin produkovaný kvasinkami v kyselém prostředí"
        ],
        correct: 1,
        explanation: "Endotoxin je lipopolysacharid (LPS) vázaný ve stěně gramnegativních bakterií. K jeho uvolnění dochází při lýze bakterií a v organismu vyvolává silnou zánětlivou reakci prostřednictvím aktivace makrofágů (hrozí septický šok)."
      },
      {
        question: "Při mikroskopickém vyšetření mozkové kůry u pacienta s podezřením na prionové onemocnění, jaké typické histopatologické změny nacházíme?",
        options: [
          "Masivním hnisavým zánětem s infiltrací neutrofily",
          "Tvorbou spongiformních vakuol v neuronech a neuropilu bez přítomnosti zánětlivého infiltrátu",
          "Vznikem rozsáhlých demyelinizačních ložisek v bílé hmotě",
          "Kaseózní nekrózou mozkové kůry"
        ],
        correct: 1,
        explanation: "Prionová onemocnění vyvolávají akumulaci abnormálního proteinu (PrPSc), což vede k degeneraci a zániku neuronů s tvorbou drobných vakuol (spongiformní vzhled). Charakteristická je naprostá absence klasické zánětlivé reakce (chybí lymfocyty či neutrofily)."
      }
    ]
  },
  {
    id: "pat-8",
    title: "Vliv těžkých kovů na zdraví",
    section: "Etiologie a obecné příčiny",
    keywords: ["olovo", "rtuť", "kadmium", "saturnismus", "nefropatie", "inkluse", "čára"],
    content: {
      definition: "Těžké kovy (olovo, rtuť, kadmium, arsen) jsou toxické prvky, které se hromadí v organismu a narušují enzymatické systémy vazbou na sulfhydrylové (-SH) skupiny proteinů.",
      etiology: "Profesionální expozice (hutnictví, chemický průmysl, výroba baterií), kontaminovaná voda, potraviny (ryby s obsahem rtuti) či vdechování prachu a výparů.",
      pathogenesis: "1. Olovo (Pb): inhibuje syntézu hemu (enzymy dehydratázu kyseliny delta-aminolevulové a ferochelatázu) -> rozvoj anémie; poškozuje tubuly ledvin a CNS. 2. Rtuť (Hg): poškozuje hlavně ledviny (proximální tubuly) a CNS (mozeček, kůru). 3. Kadmium (Cd): vyvolává poškození ledvin (tubulární dysfunkce) a plic (emfyzém), indukuje osteomalacii (nemoc Itai-Itai).",
      macroscopy: "Chronická otrava olovem (saturnismus): modrošedý lem na dásních v okolí zubů (Burtonův olověný lem - reakce olova se sirovodíkem z ústní mikroflóry). Otrava rtutí: ulcerózní stomatitida, poškození tlustého střeva (kolitida).",
      microscopy: "Otrava olovem: acidofilní intranukleární inkluze v buňkách proximálních tubulů ledvin, bazofilní tečkování erytrocytů v krevním nátěru (perzistence ribozomální RNA). Otrava rtutí: nekróza epitelu proximálních tubulů ledvin (toxická nefróza).",
      clinical: "U olova dominuje kolika, anémie, periferní neuropatie (parézy extenzorů - 'visící ruka') a encefalopatie. U rtuti třes, změny osobnosti (erethismus) a polyneuropatie. Kadmium zvyšuje riziko karcinomu plic a prostaty."
    },
    quiz: [
      {
        question: "Jaké charakteristické změny v krevním obrazu a v nátěru periferní krve provázejí chronickou otravu olovem (saturnismus)?",
        options: [
          "Makrocytární anémií s hypersegmentací neutrofilů",
          "Mikrocytární hypochromní anémií a přítomností bazofilního tečkování erytrocytů",
          "Trombocytopenií s krvácivými projevy",
          "Výraznou leukocytózou s posunem doleva"
        ],
        correct: 1,
        explanation: "Olovo blokuje enzymy syntézy hemu, což vede k mikrocytární hypochromní anémii. Typickým nálezem v nátěru je bazofilní tečkování erytrocytů, které představuje agregáty ribozomální RNA vzniklé v důsledku inhibice ribonukleázy olovem."
      },
      {
        question: "Při expozici organismu anorganickým sloučeninám a solím rtuti, který lidský orgán a jeho konkrétní buněčné struktury jsou nejvíce poškozeny?",
        options: [
          "Srdce (kardiomyopatie)",
          "Ledviny (zejména proximální tubuly)",
          "Kosti (osteosarkom)",
          "Slezina (splenomegalie)"
        ],
        correct: 1,
        explanation: "Anorganická rtuť se po vstřebání koncentruje v ledvinách, kde vyvolává akutní tubulární nekrózu (toxickou nefrózu) proximálních tubulů s následným selháním ledvin a anurií."
      }
    ]
  },
  {
    id: "pat-9",
    title: "Choroby z povolání (typické patologické nálezy)",
    section: "Etiologie a obecné příčiny",
    keywords: ["pneumokonióza", "silikóza", "azbestóza", "antrakóza", "mesoteliom", "pleura"],
    content: {
      definition: "Choroby z povolání jsou poškození zdraví vzniklá v přímé souvislosti s dlouhodobým působením škodlivých faktorů pracovního prostředí.",
      etiology: "Nejvýznamnější skupinou jsou pneumokoniózy - plicní onemocnění způsobená vdechováním minerálního prachu v dolech, lomech či stavebnictví.",
      pathogenesis: "1. Silikóza: vdechování volného oxidu křemičitého (SiO2). Krystaly křemene jsou fagocytovány alveolárními makrofágy, které hynou a uvolňují fibrogenní faktory (IL-1, TNF-alpha) stimulující fibroblasty k tvorbě kolagenu. 2. Azbestóza: vdechování azbestových vláken. Vyvolává difuzní intersticiální fibrózu a dráždí pleuru. 3. Antrakóza: vdechování uhelného prachu (relativně inertní, lehká fibróza).",
      macroscopy: "Silikóza: tuhé, šedočerné uzlíky (silikotické uzlíky) v plicním parenchymu, splývající v masivní fibrózu, zbytnělá pohrudnice. Azbestóza: tuhé plíce s voštinovitým vzhledem, pleurální hyalinové plaky (zbytnění pleury). Antrakóza: černé zbarvení plic a hilových lymfatických uzlin.",
      microscopy: "Silikotický uzlík: koncentricky uspořádané kolagenní snopce, uprostřed bezstrukturní hmota, v polarizačním mikroskopu dvojlomné krystaly SiO2. Azbestóza: difuzní vazivová přestavba alveolů, přítomnost azbestových tělísek (hnědá vlákna obalená hemosiderinem - vzhled činky).",
      clinical: "Pneumokoniózy vedou k restrikční ventilační poruše, plicní hypertenzi a cor pulmonale. Azbest expozice extrémně zvyšuje riziko bronchogenního karcinomu a maligního mezoteliomu pleury či peritonea."
    },
    quiz: [
      {
        question: "Při histologickém vyšetření plicní tkáně u pacienta s podezřením na azbestózu, jaký specifický tvar a barvu vykazuje tzv. azbestové tělísko?",
        options: [
          "Jako koncentricky uspořádaný kolagenní uzel bez buněk",
          "Jako žlutohnědé vlákno tvaru činky obalené bílkovinným a železitým materiálem (hemosiderinem)",
          "Jako krystal ve tvaru jehly zářící v polarizačním mikroskopu",
          "Jako obří mnohojaderná buňka cizích těles"
        ],
        correct: 1,
        explanation: "Azbestová tělíska jsou tenká azbestová vlákna, která plicní makrofágy nedokážou kompletně fagocytovat. Pokryjí je proteinovým obalem s obsahem železa (hemosiderinu), což jim dává hnědavou barvu a typický tvar paličky či činky."
      },
      {
        question: "Rozvoj vysoce agresivního maligního mezoteliomu pohrudnice (pleury) je v klinické praxi typickým karcinogenním následkem expozice kterému minerálnímu prachu?",
        options: [
          "Uhelnému prachu",
          "Azbestu",
          "Oxidu křemičitému (křemeni)",
          "Olovu"
        ],
        correct: 1,
        explanation: "Inhalace azbestových vláken je hlavním rizikovým faktorem pro vznik maligního mezoteliomu pohrudnice (pleury) a poplicnice. Nádor má extrémně nepříznivou prognózu a vzniká často s latencí 20-40 let od expozice."
      }
    ]
  },
  {
    id: "pat-10",
    title: "Nekróza, gangréna (rozdělení, příčiny vzniku, hojení)",
    section: "Regresivní změny",
    keywords: ["nekróza", "gangréna", "koagulační", "kolikvační", "kaseózní", "steatonekróza", "infarkt"],
    content: {
      definition: "Nekróza je morfologický projev smrti buněk a tkání v živém organismu vyvolaný ireversibilním poškozením (na rozdíl od apoptózy je provázena zánětlivou reakcí okolí). Gangréna je modifikovaná nekróza druhotnými vlivy.",
      etiology: "Ischemie (infarkt), působení fyzikálních/chemických vlivů, mikrobiální toxiny, enzymatická destrukce, imunopatologické reakce.",
      pathogenesis: "Rozpad membrán vede k úniku lyzosomálních enzymů a autolýze buňky. Uvolněný obsah vyvolává zánět. Typy nekróz: 1. Koagulační (převažuje denaturace proteinů, tkáň je tuhá, zachovává stíny struktur). 2. Kolikvační (převažuje enzymatické zkapalnění tkáně enzymy z buněk či neutrofilů). 3. Kaseózní (specifická pro TBC, rozpad tkáně na sýrovitou hmotu bohatou na lipidy). 4. Steatonekróza (enzymatická nekróza tuku působením lipáz, např. u pankreatitidy). 5. Fibrinoidní (imunokomplexy a fibrin ve stěně cév). Typy gangrén: suchá (vysychání nekrózy - mumifikace), vlhká (infikace hnilobnými bakteriemi - kolikvace), plynatá (infekce Clostridium perfringens - tvorba plynu).",
      macroscopy: "Koagulační nekróza: suchá, matná, žlutavá nebo šedavá tkáň (např. infarkt myokardu). Kolikvační nekróza: zkapalněné ložisko, dutina vyplněná kašovitou tekutinou (např. encefalomalacie - infarkt mozku). Kaseózní: křehká, bělavá, tvarohovitá hmota. Steatonekróza: křídově bílá ložiska (Balserovy nekrózy). Suchá gangréna: tkáň je černá, scvrklá a kožovitá (např. diabetická noha).",
      microscopy: "Mikroskopicky vidíme ztrátu jader (karyolýza - rozpuštění, pyknóza - smrštění, karyorexe - rozpad), eosinofilii cytoplasmy (ztráta RNA). U koagulační nekrózy jsou patrné bezjaderné stíny buněk. U kolikvační a kaseózní je struktura tkáně zcela setřelá. Okolo nekrózy bývá zánětlivý lem (leukocyty, hyperémie).",
      clinical: "Hojení nekrózy probíhá: a) resorpcí a regenerací (u malých ložisek s dobrou regenerační schopností), b) organizací granulační tkání s tvorbou jizvy (reparace), c) opouzdřením a vznikem cysty (pseudocysty v mozku) nebo d) kalcifikací."
    },
    quiz: [
      {
        question: "Ve kterém z lidských orgánů dochází po uzávěru přívodné tepny (akutní ischemii) k rozvoji kolikvační (zkapalňující) nekrózy namísto koagulační?",
        options: [
          "V myokardu",
          "V mozku (encefalomalacie)",
          "V ledvině",
          "Ve slezině"
        ],
        correct: 1,
        explanation: "Mozková tkáň je bohatá na lipidy a chudá na proteiny, a navíc obsahuje velké množství lyzosomálních enzymů. Při ischemii zde dochází k rychlému zkapalnění tkáně (kolikvaci) a vzniku pseudocysty (dutiny vyplněné likvorem)."
      },
      {
        question: "Jakým patogenetickým a biochemickým mechanismem vznikají křídově bílá ložiska v tukové tkáni retroperitonea, označovaná jako Balserovy nekrózy?",
        options: [
          "Nekrózy mozkové kůry u Alzheimerovy choroby",
          "Křídově bílá ložiska nekrózy tukové tkáně vzniklá působením uvolněných pankreatických lipáz",
          "Nekrotická ložiska v plicích při tuberkulóze",
          "Gangrenózní změny na prstech dolních končetin"
        ],
        correct: 1,
        explanation: "Při akutní nekróze slinivky břišní (pankreatitidě) se do okolí uvolňují lipázy. Ty štěpí tuky v omentu a retroperitoneu na mastné kyseliny, které reagují s vápenatými ionty za vzniku vápenatých mýdel (křídově bílá ložiska zvaná Balserovy nekrózy)."
      }
    ]
  },
  {
    id: "pat-11",
    title: "Akumulace lipidů (steatóza, lipidózy)",
    section: "Regresivní změny",
    keywords: ["steatóza", "lipidóza", "triglyceridy", "cholesterol", "kardiomyopatie", " Gaucher"],
    content: {
      definition: "Intracelulární akumulace lipidů zahrnuje steatózu (patologické hromadění neutrálních tuků/triglyceridů v buňkách, které je normálně neobsahují) a lipidózy (vrozené lyzosomální střádavé choroby způsobené defektem enzymů štěpících komplexní lipidy).",
      etiology: "Steatóza: hypoxie (nedostatek kyslíku pro beta-oxidaci), toxiny (alkohol, chlorované uhlovodíky), metabolické poruchy (obezita, diabetes mellitus, malnutrice). Lipidózy: genetické autozomálně recesivní mutace genů pro lyzosomální enzymy.",
      pathogenesis: "Steatóza jater: 1. Zvýšený přívod mastných kyselin do jater, 2. Snížená beta-oxidace v mitochondriích, 3. Zvýšená syntéza triglyceridů, 4. Porucha tvorby a sekrece lipoproteinů (VLDL) z buňky. Lipidózy (např. Gaucherova choroba): chybění glukocerebrosidázy vede k hromadění glukocerebrosidu v makrofázích (Gaucherovy buňky) po celém těle.",
      macroscopy: "Steatóza jater: játra jsou zvětšená, těžká (až 3 kg), měkká, na řezu žlutá, lesklá a mastná. Steatóza myokardu: 'tygrované srdce' (střídání žlutavých proužků steatózy pod endokardem s červenohnědým zdravým svalem). Gaucherova choroba: masivní splenomegalie a hepatomegalie.",
      microscopy: "Steatóza: v cytoplasmě opticky prázdné vakuoly (při standardním zpracování se tuk rozpustí v xylenu; průkaz je možný zmrazenými řezy a barvením Sudanovou červení). Rozlišuje se velkokapénková (jádro je odsunuto k periferii, např. u alkoholu) a malokapénková (jádro zůstává ve středu, např. Reyeův syndrom). Gaucherovy buňky: velké makrofágy s cytoplasmou vzhledu 'zmačkaného cigaretového papíru'.",
      clinical: "Steatóza jater je reverzibilní, ale může progredovat do steatohepatitidy a jaterní cirhózy. Lyzosomální lipidózy (Gaucher, Niemann-Pick, Tay-Sachs) mají těžký průběh s postižením CNS, hepatosplenomegalií a skeletu."
    },
    quiz: [
      {
        question: "Pokud hodnotíme histologický řez jaterní tkání se steatózou barvený standardní metodou hematoxylin-eosin, jak se tukové kapénky v buňkách mikroskopicky jeví?",
        options: [
          "Jako intenzivně růžová (eozinofilní) zrna v cytoplasmě",
          "Jako opticky prázdné, ostře ohraničené vakuoly v cytoplasmě buňky",
          "Jako tmavomodré krystaly v jádře",
          "Hepatocyty kompletně zanikají a jsou nahrazeny kolagenem"
        ],
        correct: 1,
        explanation: "Při běžném zpracování tkáně se používají organická rozpouštědla (např. xylen, alkohol), která tuky z buněk kompletně vylouží. V buňkách pak zbývají jen prázdná, kruhová místa - vakuoly."
      },
      {
        question: "Který konkrétní lyzosomální enzym chybí u pacientů s Gaucherovou chorobou a v jakých buňkách lidského těla se v důsledku toho hromadí jeho neštěpený substrát?",
        options: [
          "Kyselá maltáza; v kosterním svalu",
          "Glukocerebrosidáza; v makrofázích (monocyto-makrofágový systém)",
          "Sfingomyelináza; v neuronech",
          "Galaktosidáza; v cévním endotelu"
        ],
        correct: 1,
        explanation: "Gaucherova choroba je nejčastější lipidóza. Chybí enzym glukocerebrosidáza, což vede k akumulaci glukocerebrosidu v makrofázích. Tyto zvětšené buňky (Gaucherovy buňky) se hromadí ve slezině, játrech a kostní dřeni."
      }
    ]
  },
  {
    id: "pat-12",
    title: "Poruchy metabolizmu glycidů (glykogenózy, mukopolysacharidózy, mukoviscidóza)",
    section: "Regresivní změny",
    keywords: ["glykogenóza", "von Gierke", "Pompe", "mukoviscidóza", "CFTR", "mukopolysacharidózy"],
    content: {
      definition: "Tato skupina zahrnuje dědičné metabolické poruchy sacharidů (glykogenózy - střádání glykogenu v lyzosomech či cytoplasmě), mukopolysacharidózy (střádání glykosaminoglykanů) a mukoviscidózu (cystickou fibrózu - vrozenou poruchu transportu iontů vedoucí k tvorbě vazkého hlenu).",
      etiology: "Autozomálně recesivní genetické mutace. U mukoviscidózy jde o mutaci genu CFTR (nejčastěji delF508) na 7. chromozomu.",
      pathogenesis: "1. Glykogenózy (GSD): typ I (von Gierke) - deficit glukóza-6-fosfatázy (hepatorenální forma); typ II (Pompe) - deficit kyselé alfa-glukosidázy (kardiomegalie, lysosomální střádání). 2. Mukopolysacharidózy: deficit enzymů degradujících GAG (např. Hurlerové syndrom). 3. Mukoviscidóza: nefunkční CFTR kanál nepropouští chloridové ionty ven z buněk, což vede ke zvýšené reabsorpci sodíku a vody do buněk. Hlen na povrchu sliznic dehydratuje a stává se extrémně vazkým.",
      macroscopy: "GSD I: hepatomegalie, zvětšené bledé ledviny. GSD II: obrovská kardiomegalie. Mukoviscidóza: cysticky dilatované vývody slinivky (odtud 'cystická fibróza'), vazivová přestavba slinivky, bronchiektázie v plicích, hnisavé infekce plic, mekoniový ileus u novorozenců.",
      microscopy: "Glykogenózy: buňky (hepatocyty, kardiomyocyty) jsou zvětšené, mají 'rostlinný vzhled' (koutkovité, opticky prázdné cytoplasmy vyplněné glykogenem - průkaz barvením PAS). Mukoviscidóza: dilatované žlázové vývody ucpané eosinofilními hlenovými zátkami, periduktální fibróza, chronický zánět.",
      clinical: "GSD I vyvolává těžkou nalačno hypoglykémii a laktátovou acidózu. GSD II (Pompe) vede k časnému úmrtí na srdeční selhání. Mukoviscidóza se projevuje chronickými plicními infekcemi (Pseudomonas aeruginosa), pankreatickou insuficiencí (malabsorpce, steatorhea) a vysokou koncentrací chloridů v potu (diagnostický potní test)."
    },
    quiz: [
      {
        question: "Která z vrozených glykogenóz (GSD) postihuje primárně myokard a je jako jediná způsobena defektem lyzosomálního enzymu (kyselé maltázy / alfa-glukosidázy)?",
        options: [
          "Typ I (von Gierke)",
          "Typ II (Pompe)",
          "Typ V (McArdle)",
          "Typ IV (Andersen)"
        ],
        correct: 1,
        explanation: "Glykogenóza typu II (Pompeova choroba) je jedinečná tím, že se jedná o lyzosomální střádavé onemocnění (deficit kyselé alfa-glukosidázy/kyselé maltázy). Glykogen se hromadí v lyzosomech mnoha tkání, nejvýrazněji však v myokardu, což vede k masivní kardiomegalii a srdečnímu selhání v kojeneckém věku."
      },
      {
        question: "Který specifický iontový kanál na povrchu epiteliálních buněk je mutován u cystické fibrózy (mukoviscidózy) a jak se tato mutace projevuje na vlastnostech hlenu?",
        options: [
          "Sodíkový kanál ENaC; dochází k úniku sodíku do moči",
          "Chloridový kanál CFTR; dochází k sekreci hustého, dehydratovaného a vazkého hlenu exokrinními žlázami",
          "Vápníkový kanál L-typu; dochází k tetanii a křečím",
          "Draslíkový kanál ROMK; dochází k těžké hyperkalémii"
        ],
        correct: 1,
        explanation: "Mutace genu CFTR způsobuje poruchu transportu chloridových iontů na apikální membráně epiteliálních buněk. To vede k dehydrataci hlenu na povrchu sliznic dýchacího, trávicího a reprodukčního systému, který je pak velmi hustý (vazký) a ucpává vývody žláz."
      }
    ]
  },
  {
    id: "pat-13",
    title: "Amyloidóza (rozdělení, příčiny vzniku, charakteristické makroskopické a mikroskopické nálezy)",
    section: "Regresivní změny",
    keywords: ["amyloidóza", "amyloid", "fibrily", "Kongo", " AL", " AA", "senilní"],
    content: {
      definition: "Amyloidóza je skupina onemocnění charakterizovaná extracelulárním ukládáním patologického proteinu - amyloidu - do tkání. Amyloid má strukturu beta-skládaného listu, což ho činí odolným vůči proteolýze.",
      etiology: "AL amyloidóza (primární): monoklonální proliferace plazmatických buněk (produkuje lehké řetězce imunoglobulinů). AA amyloidóza (sekundární): chronické záněty (revmatoidní artritida, osteomyelitida, TBC) zvyšující produkci proteinu SAA v játrech. ATTR amyloidóza: mutovaný nebo wild-type transthyretin (senilní amyloidóza srdce).",
      pathogenesis: "Abnormální proteiny (lehké řetězce Ig, SAA, transthyretin) podléhají chybnému sbalení, agregují a vytvářejí nerozpustné fibrily (95 % hmoty amyloidu). Zbývajících 5 % tvoří glykoproteinová P-komponenta a proteoglykany, které napomáhají stabilizaci struktury.",
      macroscopy: "Postižené orgány (ledviny, slezina, játra, srdce) jsou zvětšené, tuhé, bledé, mají voskovitý nebo slaninkový vzhled. Slezina vykazuje buď sagové zbarvení (tapioková slezina - ložiska v lymfatických folikulech), nebo šunkové zbarvení (difuzní postižení červené pulpy).",
      microscopy: "V barvení H&E se amyloid jeví jako bezstrukturní, homogenní, světle růžová (eozinofilní) hmota uložená extracelulárně (v mezibuněčném prostoru, v cévních stěnách, glomerulech). Diagnostickým standardem je barvení Kongočervení (Congo Red), které v polarizovaném světle vykazuje jasně jablečně zelený dvojlom.",
      clinical: "Ukládání amyloidu utlačuje okolní funkční parenchym, což vede k jeho atrofii a selhání funkce. V ledvinách způsobuje nefrotický syndrom s masivní proteinurií a renální selhání. V srdci restrikční kardiomyopatii a arytmie."
    },
    quiz: [
      {
        question: "Které speciální histologické barvení a jaký fyzikální optický jev se v polarizačním mikroskopu standardně používají k jednoznačnému průkazu amyloidu ve tkáni?",
        options: [
          "Barvením Sudanovou černí k průkazu lipidů",
          "Barvením Kongočervení, které v polarizovaném světle vykazuje jablečně zelený dvojlom",
          "Průkazem acidorezistence podle Ziehl-Neelsena",
          "Imunohistochemickým průkazem cytokeratinů"
        ],
        correct: 1,
        explanation: "Barvení Kongočervení se specificky váže na strukturu beta-skládaného listu amyloidu. V polarizačním mikroskopu tato vazba vyvolává charakteristický, diagnosticky klíčový jablečně zelený dvojlom (anizotropii)."
      },
      {
        question: "U jaké skupiny patologických stavů a onemocnění dochází v těle k dlouhodobé nadprodukci reaktantu akutní fáze SAA a rozvoji sekundární (AA) amyloidózy?",
        options: [
          "Při mnohočetném myelomu (nádor z plazmatických buněk)",
          "U dlouhodobě probíhajících chronických zánětlivých onemocnění (např. revmatoidní artritida, osteomyelitida, TBC)",
          "Při předávkování vitamínem D",
          "U pacientů s Downovým syndromem v mozku"
        ],
        correct: 1,
        explanation: "AA amyloid vzniká z prekursoru SAA (serum amyloid A), což je reaktant akutní fáze tvořený v játrech při zánětu. Dlouhodobá nadprodukce SAA u chronických zánětů proto vede k rozvoji sekundární (AA) amyloidózy."
      }
    ]
  },
  {
    id: "pat-14",
    title: "Patologické zvápenatění (rozdělení, příčiny vzniku, lokalizace)",
    section: "Regresivní změny",
    keywords: ["zvápenatění", "kalcifikace", "dystrofická", "metastatická", "hyperkalcémie", "kossa"],
    content: {
      definition: "Patologické zvápenatění (kalcifikace) je abnormální ukládání solí vápníku (převážně fosforečnanu vápenatého ve formě hydroxyapatitu) do tkání, které normálně zvápenatělé nejsou.",
      etiology: "1. Dystrofická kalcifikace: vzniká v poškozených, odumírajících nebo nekrotických tkáních při normální hladině vápníku v séru. 2. Metastatická kalcifikace: vzniká ve zdravých tkáních v důsledku hyperkalcémie (zvýšené hladiny vápníku v krvi).",
      pathogenesis: "Dystrofická kalcifikace: nekrotické buňky ztrácejí schopnost regulovat influx vápníku, ten se váže na membránové fosfolipidy a krystalizuje. Metastatická kalcifikace: hyperkalcémie způsobená např. hyperparatyreózou, destrukcí kostí metastázami, intoxikací vitamínem D nebo selháním ledvin. Vápník se ukládá v tkáních, které vylučují kyselé metabolity, což zvyšuje lokální pH a podporuje srážení vápníku.",
      macroscopy: "Zvápenatělá tkáň je tuhá, tvrdá (kamenitá konzistence), na řezu skřípe, má bělavou barvu a zrnitý povrch. Příkladem jsou kalcifikované aterosklerotické pláty v cévách nebo zvápenatělé chlopně.",
      microscopy: "V barvení H&E se vápník jeví jako tmavomodrá (intenzivně bazofilní) amorfní zrna nebo hrudky, uložené intra- i extracelulárně. Speciálním průkazem je barvení podle von Kossy (stříbření, vápník se barví černě).",
      clinical: "Dystrofická kalcifikace je častá v aterosklerotických plátech (zvyšuje jejich křehkost a riziko ruptury) a na srdečních chlopních (vede k aortální stenóze). Metastatická kalcifikace postihuje zejména plíce, ledviny (nefrokalcinóza -> renální selhání) a žaludeční sliznici."
    },
    quiz: [
      {
        question: "Pokud vyšetřujeme hladinu vápníku v krevním séru u pacienta, u kterého dochází k dystrofickému zvápenatění (např. v tuberkulózním ložisku), jaké hodnoty naměříme?",
        options: [
          "Vždy extrémně zvýšené (hyperkalcémie)",
          "Normální (normokalcémie)",
          "Výrazně snížené (hypokalcémie)",
          "Kolísavé v závislosti na fázi měsíce"
        ],
        correct: 1,
        explanation: "Dystrofická kalcifikace probíhá u pacientů s normální kalcémií. Vápník se ukládá pasivně do poškozených, odumřelých či nekrotických tkání (např. staré jizvy, TBC ložiska, aterosklerotické pláty), které slouží jako krystalizační jádra."
      },
      {
        question: "Jaké lokální chemické a fyziologické podmínky v ledvinách, plicích a žaludeční sliznici způsobují, že tato místa přednostně podléhají metastatické kalcifikaci?",
        options: [
          "Protože tyto orgány mají nejnižší průtok krve",
          "Protože tyto orgány aktivně vylučují kyselé látky, což lokálně zvyšuje pH (alkalizuje tkáň) a usnadňuje srážení vápníku",
          "Tyto orgány jsou v embryonálním vývoji nejblíže kostem",
          "Jsou to jediné orgány obsahující kolagen typu IV"
        ],
        correct: 1,
        explanation: "V plicích (vylučování CO2), žaludku (vylučování HCl) a ledvinách (vylučování kyselé moči) dochází k lokálnímu vzestupu pH (vnitřní prostředí buněk a intersticium se posouvá k alkalické straně). Zásadité pH výrazně snižuje rozpustnost vápenatých solí a usnadňuje jejich precipitaci."
      }
    ]
  },
  {
    id: "pat-15",
    title: "Patologie autogenních pigmentů (melanin, lipofuscin, ceroid)",
    section: "Regresivní změny",
    keywords: ["melanin", "lipofuscin", "ceroid", "pigment", "hnědá", "atrofie", "opotřebení"],
    content: {
      definition: "Autogenní pigmenty jsou barevné látky vznikající vlastní metabolickou činností buněk organismu (na rozdíl od hematogenních neobsahují železo a nevznikají rozpadem hemoglobinu).",
      etiology: "Melanin: ochrana před UV zářením. Lipofuscin: stárnutí buněk, buněčné opotřebení, atrofie. Ceroid: patologická lipidová peroxidace (např. deficit vitamínu E, malabsorpce).",
      pathogenesis: "1. Melanin: tvořen melanocyty z tyrosinu v melanosomech (enzym tyrosináza). Poruchy: albinismus (vrozený deficit tyrosinázy), vitiligo (získaná autoimunitní destrukce melanocytů), melanom (nádor). 2. Lipofuscin ('pigment z opotřebení'): nerozpustný polymer lipidů a proteinů vznikající peroxidací membrán v autolyzosomech buněk, které se již nedělí. 3. Ceroid: strukturou podobný lipofuscinu, vzniká patologicky (např. v makrofázích při krvácení nebo nekróze tuku).",
      macroscopy: "Melanin: hnědé až černé zbarvení kůže, ložisek (mateřská znaménka, melanomy). Lipofuscin: hnědá atrofie (atrophia fusca) orgánů - např. játra a srdce jsou zmenšené a mají výrazně hnědé zbarvení.",
      microscopy: "Melanin: drobná, hnědá, ostře ohraničená intracytoplasmatická zrna (lze odbarvit oxidovadly, pozitivní barvení podle Fontany-Massona). Lipofuscin: jemně zrnitý, zlatožlutý až hnědý pigment uložený v cytoplasmě kolem jádra (perinukleárně) buněk (kardiomyocyty, hepatocyty). Vykazuje autofluorescenci.",
      clinical: "Lipofuscin sám o sobě není pro buňku toxický, je však spolehlivým markerem stárnutí tkáně a chronické podvýživy (senilní atrofie). Melanin hraje roli v diagnostice kožních lézí a maligního melanomu."
    },
    quiz: [
      {
        question: "Který žlutohnědý intracytoplasmatický pigment se hromadí v buňkách při stárnutí a atrofii a je označován jako 'pigment z opotřebení' (pigmentum ex atrophy)?",
        options: [
          "Hemosiderin",
          "Lipofuscin",
          "Melanin",
          "Bilirubin"
        ],
        correct: 1,
        explanation: "Lipofuscin je pigment z opotřebení. Hromadí se v dlouho žijících buňkách (neurony, kardiomyocyty, hepatocyty) jako produkt nedokončené lyzosomální degradace peroxidovaných membránových lipidů. Při atrofii orgánů se koncentruje a dává jim hnědou barvu."
      },
      {
        question: "Z hlediska etiopatogeneze a přítomnosti melanocytů v kůži, jaký je zásadní rozdíl mezi vrozeným albinismem a získaným vitiligem?",
        options: [
          "Albinismus je vrozená porucha syntézy melaninu (chybí tyrosináza) při zachovaném počtu melanocytů; vitiligo je získané ložiskové chybění melanocytů",
          "Albinismus postihuje pouze oči, vitiligo pouze kůži",
          "Vitiligo je způsobeno otravou těžkými kovy, albinismus UV zářením",
          "V mikroskopickém obraze se neliší"
        ],
        correct: 0,
        explanation: "Albinismus je genetická porucha, kdy melanocyty sice jsou přítomny, ale kvůli chybění funkční tyrosinázy nedokážou tvořit melanin. Vitiligo je získané (často autoimunitní) onemocnění charakterizované ložiskovou destrukcí a úplným vymizením melanocytů z epidermis."
      }
    ]
  },
  {
    id: "pat-16",
    title: "Patologie hematogenních pigmentů (hemosideróza, hemochromatóza)",
    section: "Regresivní změny",
    keywords: ["hemosiderin", "hemochromatóza", "hemosideróza", "železo", "ferritin", "Perls", "cirhóza"],
    content: {
      definition: "Hematogenní pigmenty vznikají přeměnou hemoglobinu. Patologické hromadění železa zahrnuje hemosiderózu (lokální nebo systémové hromadění železa v makrofázích bez poškození tkáně) a hemochromatózu (primární genetické onemocnění se střádáním železa v parenchymatózních buňkách a jejich poškozením).",
      etiology: "Hemosideróza: opakované krevní transfúze, masivní hemolýza (systémová) nebo lokální krvácení (např. hematom, městnání v plicích). Hemochromatóza: autozomálně recesivní mutace genu HFE (způsobuje hyperabsorpci železa ve střevě).",
      pathogenesis: "Nadbytek železa v buňkách přesahuje kapacitu ferritinu, železo se ukládá jako hemosiderin (agregáty ferritinu). Volné železo reaguje Fentonovou reakcí za vzniku extrémně reaktivních hydroxylových radikálů (ROS), které poškozují membrány a stimulují fibrogenezi.",
      macroscopy: "Hemochromatóza: 'bronzový diabetes' - kůže má kovově bronzové zbarvení, játra jsou zvětšená, tuhá, rezavě hnědá a uzlovitá (cirhóza), slinivka je svraštělá a tmavě hnědá, srdce je zvětšené (kardiomyopatie).",
      microscopy: "Hemosiderin: hrubší, zlatohnědá zrna uložená v cytoplasmě makrofágů (např. siderofágy v plicích) nebo hepatocytů. Prokazuje se Perlovou reakcí (barvení berlínskou modří - hemosiderin reaguje na jasně modrou barvu). U hemochromatózy je patrná vazivová přestavba jater a poškození buněk.",
      clinical: "Hemochromatóza se projevuje klasickou triádou: cirhóza jater, bronzová pigmentace kůže a diabetes mellitus (poškození ostrůvků slinivky). Hrozí také srdeční selhání a vysoké riziko rozvoje hepatocelulárního karcinomu."
    },
    quiz: [
      {
        question: "Které speciální barvicí metody se používají v histologii k jednoznačnému rozlišení hemosiderinu (obsahujícího železo) od lipofuscinu?",
        options: [
          "Kongočervení",
          "Perlovou reakcí (barvení berlínskou modří k průkazu Fe3+)",
          "Barvením podle Ziehl-Neelsena",
          "Sudanovou žlutí"
        ],
        correct: 1,
        explanation: "Hemosiderin obsahuje železité ionty (Fe3+), které po reakci s ferrokyanidem draselným a kyselinou chlorovodíkovou (Perlsova reakce) vytvářejí intenzivně modrou sraženinu (berlínskou modř). Lipofuscin železo neobsahuje a barví se negativně."
      },
      {
        question: "Které tři hlavní klinické a patologické příznaky tvoří klasickou diagnostickou triádu u pacientů s plně rozvinutou vrozenou hemochromatózou?",
        options: [
          "Dna, šedý zákal, hypertenze",
          "Cirhóza jater, bronzové zbarvení kůže, diabetes mellitus",
          "Plicní fibróza, splenomegalie, paréza lícního nervu",
          "Nefrotický syndrom, osteoporóza, alopecie"
        ],
        correct: 1,
        explanation: "Hemochromatóza je charakterizována nadměrným ukládáním železa do orgánů. Poškození hepatocytů vede k cirhóze jater, poškození beta-buněk pankreatu k diabetu a zvýšená stimulace melanocytů v kombinaci s ukládáním železa v kůži způsobuje její bronzové zbarvení."
      }
    ]
  },
  {
    id: "pat-17",
    title: "Ikterus všeobecně. Ikterus prehepatální.",
    section: "Regresivní změny",
    keywords: ["ikterus", "bilirubin", "prehepatální", "hemolýza", "nekonjugovaný", "žloutenka"],
    content: {
      definition: "Ikterus (žloutenka) je žluté zbarvení kůže, sliznic a očního bělma způsobené zvýšenou hladinou bilirubinu v krvi (hyperbilirubinémií). Prehepatální (hemolytický) ikterus vzniká nadprodukcí bilirubinu před jeho vstupem do jater.",
      etiology: "Masivní rozpad erytrocytů (hemolytické anémie, autoimunitní hemolýza, novorozenecký ikterus při inkompatibilitě Rh faktoru - erythroblastosis fetalis, malárie), rozsáhlé hematomy.",
      pathogenesis: "Při masivní hemolýze vzniká velké množství nekonjugovaného (nepřímého) bilirubinu z hemu. Játra mají omezenou kapacitu pro jeho konjugaci s kyselinou glukuronovou. Nekonjugovaný bilirubin je nerozpustný ve vodě, je vázán na albumin, neprochází glomerulární membránou v ledvinách a nevylučuje se močí (moč je světlá). Ve střevě se však tvoří více urobilinogenu a sterkobilinogenu (stolice je tmavá).",
      macroscopy: "Žlutavé zbarvení tkání. U prehepatálního ikteru má žloutek citronový nádech (flavínový ikterus). Slezina bývá zvětšená (splenomegalie) kvůli zvýšené destrukci erytrocytů. U novorozenců hrozí jádrový ikterus (kernikterus) - nekonjugovaný bilirubin prochází hematoencefalickou bariérou a barví bazální ganglia dožluta.",
      microscopy: "V histologii jater u prehepatálního ikteru nacházíme zmnožení hemosiderinu v Kupfferových buňkách, hepatocyty bývají bez výraznějších známek cholestázy (žlučové pigmenty v nich chybí).",
      clinical: "V laboratoři nacházíme zvýšený nekonjugovaný bilirubin v séru, zvýšený urobilinogen v moči a tmavou stolici (pleiochromní stolice). U novorozenců je kernikterus spojen s těžkým neurologickým poškozením."
    },
    quiz: [
      {
        question: "Z jakého biochemického důvodu se u čistého prehepatálního (hemolytického) ikteru nevyskytuje bilirubin v moči, přestože je pacient žlutý?",
        options: [
          "Protože ledviny jsou při hemolýze poškozené a nefiltrují vůbec nic",
          "Protože v krvi dominuje nekonjugovaný bilirubin, který je nerozpustný ve vodě a pevně vázaný na albumin, takže neprojde glomerulárním filtrem",
          "Protože bilirubin se v krvi okamžitě mění na železo",
          "Bilirubin se v moči objevuje a barví ji do tmavě hnědé barvy"
        ],
        correct: 1,
        explanation: "Nekonjugovaný bilirubin, který dominuje u prehepatálního ikteru, není rozpustný ve vodě a v oběhu cestuje navázaný na nosný protein albumin. Tento komplex je příliš velký, než aby mohl projít přes glomerulární membránu ledvin do moči."
      },
      {
        question: "Jak definujeme patologický stav označovaný jako kernikterus (jádrový ikterus) u novorozenců a jaké buňky jsou jím poškozeny?",
        options: [
          "Zvápenatění bazálních ganglií u starších osob",
          "Toxické poškození a žluté zbarvení bazálních ganglií mozku u novorozenců volným nekonjugovaným bilirubinem při těžké hyperbilirubinémii",
          "Ukládání žlučových kamenů v jaterním parenchymu",
          "Forma virové hepatitidy postihující jádra hepatocytů"
        ],
        correct: 1,
        explanation: "U novorozenců není ještě plně vyvinutá hematoencefalická bariéra. Při vysoké hladině volného nekonjugovaného bilirubinu (nad 340 μmol/l) může tento lipofilní pigment projít do mozku, kde se ukládá v bazálních gangliích (jádrech) a působí neurotoxicky."
      }
    ]
  },
  {
    id: "pat-18",
    title: "Ikterus všeobecně. Ikterus intrahepatální.",
    section: "Regresivní změny",
    keywords: ["ikterus", "intrahepatální", "hepatocelulární", "bilirubin", "hepatitida", "cholestáza"],
    content: {
      definition: "Intrahepatální (hepatocelulární neboli parenchymatózní) ikterus vzniká v důsledku poruchy vychytávání, konjugace nebo sekrece bilirubinu přímo v jaterních buňkách (hepatocytech).",
      etiology: "Poškození jaterního parenchymu: virové hepatitidy (A-E), alkoholické poškození jater, toxické vlivy (paracetamol, jedy hub - faloidin), jaterní cirhóza, vrozené poruchy transportu (Gilbertův, Crigler-Najjarův, Dubin-Johnsonův syndrom).",
      pathogenesis: "Poškozené hepatocyty nedokážou efektivně metabolizovat bilirubin. Dochází k poruše jeho konjugace a/nebo k úniku již konjugovaného bilirubinu z poškozených hepatocytů či žlučových kanálků zpět do krevního oběhu. V krvi je proto zvýšen jak konjugovaný, tak i nekonjugovaný bilirubin.",
      macroscopy: "Kůže a sliznice mají oranžovožlutý až špinavě žlutý odstín (rubínový ikterus). Játra mohou vykazovat změny podle vyvolávající příčiny - zmenšená a svraštělá u cirhózy nebo žlutá a zvětšená u steatózy/hepatitidy.",
      microscopy: "Přítomnost žlučového pigmentu (cholestáza) - žlučové zátky v dilatovaných žlučových kanálcích (biliární tromby), žlučový pigment v cytoplasmě hepatocytů a Kupfferových buněk. Hnací degenerace (balonová) hepatocytů, ložiskové nekrózy, zánětlivá infiltrace v portálních polích.",
      clinical: "V laboratoři je smíšená hyperbilirubinémie, výrazná elevace aminotransferáz (ALT, AST značící lýzu hepatocytů). Moč je tmavá (obsahuje konjugovaný bilirubin, který je rozpustný ve vodě), stolice může být normální nebo mírně světlejší."
    },
    quiz: [
      {
        question: "Pokud vyšetřujeme krevní sérum pacienta s akutním intrahepatálním (hepatocelulárním) ikterem, které laboratorní parametry a enzymy budou nejvíce zvýšené?",
        options: [
          "Pouze nekonjugovaný bilirubin, aminotransferázy jsou v normě",
          "Smíšený bilirubin (konjugovaný i nekonjugovaný) a výrazně zvýšené jaterní enzymy ALT a AST",
          "Pouze alkalická fosfatáza (ALP)",
          "Hladina hemoglobinu a počet erytrocytů"
        ],
        correct: 1,
        explanation: "Poškození jaterních buněk vede k poruše jak konjugace (stoupá nekonjugovaný bilirubin), tak vylučování (stoupá konjugovaný bilirubin). Rozpadem hepatocytů se navíc do oběhu uvolňují nitrobuněčné enzymy, zejména alaninaminotransferáza (ALT) a aspartátaminotransferáza (AST)."
      },
      {
        question: "Do jaké skupiny patologických stavů řadíme Gilbertův syndrom a jaký je jeho vliv na celkové zdraví pacienta?",
        options: [
          "Získaného toxického poškození jater alkoholem",
          "Benigní vrozené poruchy vychytávání a konjugace bilirubinu v játrech (snížená aktivita glukuronyltransferázy)",
          "Autoimunitní hepatitidy postihující děti",
          "Posthepatálního ikteru způsobeného nádorem žlučníku"
        ],
        correct: 1,
        explanation: "Gilbertův syndrom je velmi častá a benigní dědičná porucha (cca 5-10 % populace), kdy je v důsledku genetické mutace mírně snížena aktivita konjugujícího enzymu bilirubin-UGT. Projevuje se přechodným mírným vzestupem nekonjugovaného bilirubinu při stresu, hladovění či námaze."
      }
    ]
  },
  {
    id: "pat-19",
    title: "Ikterus všeobecně. Ikterus posthepatální.",
    section: "Regresivní změny",
    keywords: ["ikterus", "posthepatální", "obstrukční", "bilirubin", "konjugovaný", "acholická", "cholelitiáza"],
    content: {
      definition: "Posthepatální (obstrukční neboli mechanický) ikterus vzniká překážkou v odtoku žluči z jater žlučovými cestami do střeva (cholestáza).",
      etiology: "Obstrukce žlučových cest: žlučové kameny (cholelitiáza v ductus choledochus), nádory (karcinom hlavy pankreatu utlačující choledochus, cholangiokarcinom), striktury žlučových cest po operacích nebo zánětech.",
      pathogenesis: "Játra normálně vychytávají a konjugují bilirubin. Vzniklá konjugovaná žluč se však kvůli překážce hromadí v žlučových cestách, zvyšuje se v nich tlak, dochází k ruptuře žlučových kapilár a průniku konjugovaného bilirubinu a žlučových kyselin do jaterních sinusoid a odtud do krevního oběhu.",
      macroscopy: "Kůže a sliznice mají tmavě žluto-zelený až olivový odstín (verdínový ikterus - oxidace bilirubinu na biliverdin v kůži). Stolice je světlá, šedobílá (acholická stolice - chybí sterkobilin, který normálně barví stolici do hněda). Moč je velmi tmavá (vzhledu černého piva) kvůli masivnímu vylučování rozpustného konjugovaného bilirubinu ledvinami.",
      microscopy: "Výrazná cholestáza: dilatované žlučovody s velkými žlučovými zátkami, žlučový pigment v hepatocytech, biliární nekrózy (feathery degeneration - degradace hepatocytů žlučovými kyselinami), v portálních polích edém a infiltrace neutrofily.",
      clinical: "V laboratoři dominuje vysoký konjugovaný (přímý) bilirubin, vysoké markery cholestázy (ALP - alkalická fosfatáza, GMT - gama-glutamyltransferáza). Hromadění žlučových kyselin v krvi dráždí nervová zakončení v kůži a způsobuje těžké svědění (pruritus). Absencí žluči ve střevě vzniká porucha vstřebávání tuků a vitamínů rozpustných v tucích (A, D, E, K - hrozí krvácení při deficitu vit. K)."
    },
    quiz: [
      {
        question: "Při úplném uzávěru žlučových cest (posthepatálním ikteru), jaké typické změny barvy stolice a moči pozorujeme u pacienta a proč?",
        options: [
          "Stolice je tmavě černá, moč je světlá jako voda",
          "Stolice je světlá, šedobílá (acholická) a moč je tmavě hnědá (vzhledu černého piva)",
          "Oboje zůstává nezměněno",
          "Stolice je třešňově červená, moč je zelená"
        ],
        correct: 1,
        explanation: "Protože žluč nemůže téci do střeva, nevzniká sterkobilin a stolice ztrácí barvu (je acholická). Naopak konjugovaný bilirubin se hromadí v krvi, je rozpustný ve vodě a ledviny ho masivně vylučují do moči, kterou barví do tmavě hnědé barvy."
      },
      {
        question: "Při posthepatální obstrukci společného žlučovodu, které dva sérové enzymy (ukazatele biliární stázy) vykazují nejvýraznější vzestup?",
        options: [
          "ALT a AST",
          "ALP (alkalická fosfatáza) a GMT (gama-glutamyltransferáza)",
          "Amyláza a lipáza",
          "Kreatinkináza (CK-MB)"
        ],
        correct: 1,
        explanation: "Enzymy ALP a GMT jsou vázány na membrány buněk žlučových kanálků. Při tlaku žluči v ucpání nebo poškození žlučových cest dochází k jejich zvýšenému uvolňování do oběhu. Jsou to klasické markery cholestázy."
      }
    ]
  },
  {
    id: "pat-20",
    title: "Konkrementy (příčiny vzniku, rozdělení, makroskopické a mikroskopické nálezy)",
    section: "Regresivní změny",
    keywords: ["konkrementy", "litiáza", "kameny", "cholelitiáza", "urolitiáza", "cholesterol", "oxalát"],
    content: {
      definition: "Konkrementy (kameny) jsou pevná tělesa vznikající v dutých orgánech nebo vývodech žláz precipitací (vysrážením) organických nebo anorganických složek sekretu. Onemocnění se nazývá litiáza (lithiasis).",
      etiology: "1. Zvýšená koncentrace tvořících látek v roztoku (dehydratace, hyperkalciurie, hypercholesterolemie). 2. Změna pH (ovlivňuje rozpustnost solí). 3. Stagnace (stáza) sekretu. 4. Zánět (slouží jako zdroj krystalizačního jádra - detrit, bakterie).",
      pathogenesis: "Proces tvorby kamene začíná vznikem krystalizačního jádra (nidus) - např. shluk odloupaných epitelií, bakterií či hlenu. Na toto jádro se postupně nabalují další vrstvy precipitovaných solí. V dutinách (žlučník, močové cesty) dochází k postupnému zvětšování kamene.",
      macroscopy: "1. Žlučové kameny (cholelitiáza): cholesterolové (světle žluté, často solitární, měkké), pigmentové/bilirubinové (drobné, černé, tvrdé), smíšené (nejčastější, fazetované - ohlazené vzájemným třením). 2. Močové kameny (urolitiáza): oxalátové (kalciumoxálát - tmavé, ostnaté, způsobují krvácení), urátové (kyselina močová - hladké, žlutooranžové), fosfátové (šedobílé, křídovité, mohou tvořit odlitkové kameny pánvičky).",
      microscopy: "Mikroskopicky mají kameny vrstvenou strukturu (střídání organické matrix a krystalických solí). Ve tkáni vyvolávají konkrementy tlakovou atrofii sliznice, dlaždicobuněčnou metaplazii epitelu a chronický zánět s fibrózou stěny.",
      clinical: "Kameny mohou dlouho probíhat asymptomaticky. Při zaklínění v úzkých pasážích (žlučovod, močovod) vyvolávají silné stahy hladké svaloviny projevující se jako krutá, záchvatovitá bolest - kolika (biliární či renální). Obstrukce vede k infekcím (pyelonefritida, cholecystitida) a atrofii orgánu (hydronefróza ledviny)."
    },
    quiz: [
      {
        question: "Který typ močových konkrementů (urolitů) je v lidské populaci statisticky nejčastější a kvůli svému drsnému, ostnatému povrchu často způsobuje krvácení a koliky?",
        options: [
          "Struvitové (triplfosfátové) kameny",
          "Kameny z kalciumoxalátu (oxalátové)",
          "Urátové kameny (z kyseliny močové)",
          "Cystinové kameny"
        ],
        correct: 1,
        explanation: "Kameny z oxalátu vápenatého tvoří cca 70-80 % všech močových kamenů. Mají velmi tvrdou konzistenci a často ostrý, ostnatý či ježatý povrch, kterým mechanicky dráždí a poškozují sliznici močovodů, což se projevuje příměsí krve v moči (hematurií)."
      },
      {
        question: "Jak definujeme v urologické patologii termín 'odlitkový konkrement' (korálový kámen) ledviny a v jakých částech ledvinné pánvičky se tvoří?",
        options: [
          "Žlučový kámen, který kompletně vyplňuje žlučník a brání jeho stahování",
          "Velký močový kámen (často struvitový), který vyplňuje a kopíruje celý tvar ledvinné pánvičky a kalichů",
          "Kámen vznikající ve slinných žlázách",
          "Posmrtný nález zvápenatělé sleziny"
        ],
        correct: 1,
        explanation: "Odlitkové konkrementy vznikají nejčastěji v ledvinné pánvičce při chronických infekcích močových cest vyvolaných bakteriemi štěpícími močovinu (Proteus). Rostou tak, že postupně vyplní celou pánvičku i kalichy ledviny, čímž vytvoří odlitek dutého systému (vzhledem připomíná korál)."
      }
    ]
  }
];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_PATOLOGIE_1 = DATA_PATOLOGIE_1;
}
