// data_onco_2.js - Onkopatologie (témata 23 - 45)
const DATA_ONCO_2 = [
  
  {
    id: "onco-23",
    title: "Nádory tenkého a tlustého střeva",
    section: "Nádory GIT a slinných žláz",
    category: "Onkologie",
    keywords: ["kolorektální", "karcinom", "adenom", "polyp", "FAP", "Lynch", "CEA", "stenóza"],
    content: {
      definition: "Kolorektální karcinom (KRK) je jedním z nejčastějších zhoubných nádorů v ČR. Vychází z epiteliální výstelky tlustého střeva nebo konečníku. Nádory tenkého střeva jsou naopak velmi vzácné.",
      etiology: "Strava s vysokým obsahem červeného masa, živočišných tuků a nedostatkem vlákniny, kouření, obezita, chronické záněty (ulcerózní kolitida). Dědičné syndromy: FAP (Familiární adenomatózní polypóza - mutace genu APC), Lynchův syndrom (HNPCC - mutace v MMR genech opravujících chyby párování bází).",
      pathogenesis: "Rozvíjí se převážně cestou **adenom-karcinomové sekvence** (polypózní adenom progreduje přes dysplázii do invazivního karcinomu, trvá to 10–15 let; mutace APC -> KRAS -> TP53). U Lynchova syndromu vzniká přes mutace mikrosatelitové nestability (MSI path).",
      macroscopy: "1. Pravé colon (cékum, ascendens): roste exofyticky (jako květák), krvácí (způsobuje anémii), stolice je tekutá, proto nevede k obstrukci. 2. Levé colon (descendens, sigmoideum): roste cirkulárně, infiltruje stěnu a zužuje lumen (stenóza - tvar **kousnutého jablka** na rentgenu), vede k poruchám pasáže (zácpa střídaná s průjmem) až k ileu.",
      microscopy: "Převážnou většinu (95 %) tvoří **adenokarcinomy**. Vidíme nepravidelné žlázové tubuly infiltrující stěnu (tunicu muscularis propria) obklopené reaktivním fibrotickým stroma (desmoplazií). Nádorové buňky vykazují jaderné atypie, hyperchromazii a patologické mitózy. U mucinózní formy jsou buňky uloženy v jezírkách hlenu.",
      clinical: "Projevuje se krví ve stolici (enteroragie u levého, okultní krvácení u pravého colon), únavou z anémie a hubnutím. Screening v ČR: test na okultní krvácení do stolice (TOKS) od 50 let a screeningová kolonoskopie. Nádorový marker sledovaný po operaci pro záchyt recidivy je **CEA** (karcinoembryonální antigen)."
    },
    quiz: [
      {
        question: "Jak se liší makroskopický růst a klinické projevy karcinomu pravého tlustého střeva (cékum, vzestupný tračník) od levého tlustého střeva?",
        options: [
          "V pravém colon roste nádor vždy difuzně, v levém vůbec nevzniká",
          "V pravém colon roste převážně exofyticky (polypózně) a projevuje se plíživým krvácením a anémií; v levém roste cirkulárně (stenotizujícím způsobem) a projevuje se střídáním zácpy a průjmu či střevní neprůchodností",
          "V pravém colon nádory neobstruují, protože pravé střevo nemá svalovinu",
          "V levém colon nádory nikdy nekrvácí"
        ],
        correct: 1,
        explanation: "Pravé colon má široké lumen a kašovitý obsah. Karcinomy zde rostou jako květákovité masy, které spíše exulcerují a chronicky krvácejí (anémie). Levé kolono má úzké lumen a stolička je zahuštěná. Kruhový (prstencovitý) růst karcinomu zde proto rychle způsobí zúžení střeva a střevní potíže."
      },
      {
        question: "Který genetický syndrom je charakterizován vznikem tisíců adenomatózních polypů v tlustém střevě již v mladém věku s téměř 100% jistotou maligního zvratu před 40. rokem života bez preventivní kolektomie?",
        options: [
          "Lynchův syndrom (HNPCC)",
          "Familiární adenomatózní polypóza (FAP - mutace APC genu)",
          "Li-Fraumeni syndrom",
          "Peutz-Jeghersův syndrom"
        ],
        correct: 1,
        explanation: "FAP je autozomálně dominantní onemocnění způsobené mutací tumor supresorového genu APC. Vyvolává masivní polypózu střeva. Maligní zvrat alespoň jednoho z tisíců polypů je nevyhnutelný, a proto se provádí preventivní odstranění celého tlustého střeva (kolektomie)."
      }
    ,
      {
        question: "Jak se nazývá dědičný syndrom (způsobený mutací APC) projevující se tisíci polypy v tlustém střevě?",
        type: "type-in",
        correct: ["FAP", "familiární adenomatózní polypóza"],
        explanation: "FAP je autozomálně dominantní onemocnění s mutací APC genu, vedoucí k polypóze střeva a nevyhnutelnému karcinomu."
      },
      {
        question: "Který nádorový marker v krvi se sleduje pro záchyt recidivy kolorektálního karcinomu po operaci?",
        type: "type-in",
        correct: ["CEA", "karcinoembryonální antigen"],
        explanation: "CEA (karcinoembryonální antigen) je onkofetální protein, jehož sledování v krvi pomáhá odhalit recidivu kolorektálního karcinomu."
      }]
  },

  {
    id: "onco-24",
    title: "Nádory jater",
    section: "Nádory GIT a slinných žláz",
    category: "Onkologie",
    keywords: ["hepatocelulární", "karcinom", "cirhóza", "metastázy", "adenom", "cholangiokarcinom", "AFP"],
    content: {
      definition: "Nádory jater se dělí na primární (benigní a maligní) a sekundární (metastázy - mnohonásobně častější). Nejdůležitějším primárním zhoubným nádorem je hepatocelulární karcinom (HCC).",
      etiology: "HCC vzniká v 80–90 % případů na podkladě **jaterní cirhózy** (hlavní příčiny: chronická hepatitida B a C, alkoholismus, nealkoholická steatohepatitida - NASH, expozice aflatoxinu B1 z plísní). Benigní hepatocelulární adenom je spojen s užíváním **perorální antikoncepce** u mladých žen.",
      pathogenesis: "Chronická nekróza a regenerace hepatocytů u cirhózy vede k akumulaci mutací (např. v genu TP53). Cholangiokarcinom (karcinom žlučovodů) je asociován s chronickou biliární stázu a infekcí motolicemi v Asii.",
      macroscopy: "HCC roste buď solárně (jeden velký, prokrvácený a nekrotický uzel), multinodulárně (mnohočetné uzly), nebo difuzně (infiltruje celá játra, splývá s cirhózou). Játra jsou zvětšená, těžká. Nádor má často **zelenavý nádech** (nádorové buňky tvoří žluč, kterou nemají kam vyloučit). Metastázy v játrech: mnohočetné, kulaté uzly s centrálním vtažením (**umbilikací** z nekrózy).",
      microscopy: "HCC: buňky podobné hepatocytům uspořádané do trámců širokých více než 3 buňky (zdravá játra mají trámce široké 1-2 buňky) nebo tvořící pseudoglandulární struktury. V cytoplasmě nacházíme žlučový pigment. Cholangiokarcinom: typický adenokarcinom, tvoří žlázky s produkcí hlenu, obklopené masivním vazivem.",
      clinical: "Projevuje se zhoršením jaterních funkcí u cirhotika (náhlý vznik ascitu, ikteru, hubnutí). V krvi stoupá hladina tumorózního markeru **AFP** (alfa-fetoprotein). HCC má sklon k invazi do jaterních žil a v. portae (riziko portální trombózy). Léčba: resekce, transplantace jater nebo chemoembolizace (TACE)."
    },
    quiz: [
      {
        question: "Který tumorózní marker je v krvi typicky zvýšen u pacientů s hepatocelulárním karcinomem (HCC)?",
        options: [
          "PSA",
          "Alfa-fetoprotein (AFP)",
          "CEA",
          "CA-125"
        ],
        correct: 1,
        explanation: "AFP je fetální protein. Jeho hladina po narození klesá k nule. Při zhoubné přeměně hepatocytů (dediferenciaci) buňky začnou AFP opět masivně syntetizovat, což slouží jako významný diagnostický marker."
      },
      {
        question: "Jak lze při pitvě nebo na makroskopickém preparátu jater spolehlivě odlišit primární hepatocelulární karcinom od jaterních metastáz?",
        options: [
          "HCC tvoří vždy jen černé uzly na kůži",
          "HCC bývá spojen s cirhózou a tvoří často jeden dominantní, nazelenalý uzel; jaterní metastázy jsou typicky mnohočetné, bílošedé uzly roztroušené v obou lalocích, vykazující centrální vtažení (umbilikaci) z nekrózy",
          "Metastázy v játrech nikdy neobsahují nekrózy",
          "Játra s metastázami jsou vždy zmenšená na 500g"
        ],
        correct: 1,
        explanation: "Jelikož játra filtrují krev z portálního oběhu (z celého zažívacího traktu), jsou nejčastějším místem metastáz (např. z tlustého střeva, žaludku). Tyto metastázy tvoří typické mnohočetné uzlíky 'vypadající jako terče' s propadlým středem (umbilikací) z ischemické nekrózy uprostřed rychle rostoucího uzlu."
      }
    ,
      {
        question: "Která zkratka označuje nejčastější primární maligní nádor jater vznikající v terénu cirhózy?",
        type: "type-in",
        correct: ["HCC", "hepatocelulární karcinom"],
        explanation: "HCC (Hepatocelulární karcinom) vzniká v drtivé většině případů na podkladě jaterní cirhózy (alkohol, hepatitidy)."
      },
      {
        question: "Který marker se stanovuje v séru při podezření na hepatocelulární karcinom?",
        type: "type-in",
        correct: ["AFP", "alfa-fetoprotein"],
        explanation: "Alfa-fetoprotein (AFP) je typický onkofetální marker, jehož hladina v séru stoupá u HCC a některých germinálních nádorů."
      }]
  },

  {
    id: "onco-25",
    title: "Nádory pankreatu",
    section: "Nádory GIT a slinných žláz",
    category: "Onkologie",
    keywords: ["pankreas", "karcinom", "hlava", "ikterus", "adenokarcinom", "Courvoisier", "CA19"],
    content: {
      definition: "Karcinom pankreatu (slinivky břišní) je jeden z nejagresivnějších lidských nádorů s extrémně vysokou úmrtností. Vychází převážně z duktálního epitelu slinivky.",
      etiology: "Kouření (hlavní ovlivnitelný faktor), chronická pankreatitida, diabetes mellitus, obezita a genetické mutace (např. BRCA2, CDKN2A).",
      pathogenesis: "Vzniká přes prekurzorové léze zvané PanIN (pankreatická intraepiteliální neoplazie). Téměř 95 % karcinomů pankreatu má mutaci v onkogenu **KRAS**. Rychle infiltruje okolní nervové pleteně a metastázuje do jater a peritonea.",
      macroscopy: "Nádor se nejčastěji (60 %) nachází v **hlavě pankreatu**. Tvoří neostře ohraničený, extrémně tuhý, šedobílý uzel, který utlačuje společný žlučovod (ductus choledochus) a hlavní pankreatický vývod. To vede k dilataci žlučových cest a k atrofii těla a ocasu slinivky.",
      microscopy: "Nejčastější (90 %) je **duktální adenokarcinom**. Tvoří nepravidelné, deformované žlázové struktury vystlané atypickým epitelem, které infiltrují vazivo. Charakteristická je masivní vazivová reakce stroma (**desmoplazie** - výrazná novotvorba kolagenního vaziva stimulovaná nádorovými buňkami), která makroskopicky dodává nádoru jeho extrémní (až kamennou) tvrdost. Typická je **perineurální invaze** (nádorové buňky obklopují a prorůstají do nervových pochev, což způsobuje silné bolesti).",

      clinical: "Časná stadia jsou zcela bezpříznaková. Karcinom hlavy se projevuje **bezbolestným progresivním ikterem** (žloutenkou) z ucpání žlučovodu, doprovázeným **Courvoisierovým příznakem** (hmatný, zvětšený, ale nebolestivý žlučník). Karcinomy těla a ocasu se projeví až bolestmi v zádech z infiltrace nervů a hubnutím. Sleduje se marker **CA 19-9**."
    },
    quiz: [
      {
        question: "Co je to Courvoisierovo pravidlo (Courvoisierův příznak) u pacienta se žloutenkou?",
        options: [
          "Horečka, zvětšená slezina a tmavá moč",
          "Přítomnost hmatného, zvětšeného, ale zcela nebolestivého žlučníku, což svědčí pro mechanický uzávěr žlučovodu zvenčí (nejčastěji karcinomem hlavy pankreatu)",
          "Silná bolest při poklepu na pravé podžebří",
          "Přítomnost ascitu u cirhózy"
        ],
        correct: 1,
        explanation: "Při ucpání žlučovodu žlučovým kamenem je žlučník chronicky zjizvený a nemůže se roztáhnout, uzávěr navíc bolí (kolika). U karcinomu hlavy pankreatu roste tumor pomalu a bezbolestně tlačí na žlučovod. Zdravý, elastický žlučník se pod tlakem městnající žluči masivně roztáhne a je hmatný přes břišní stěnu jako nebolestivý balon."
      },
      {
        question: "Která mikroskopická vlastnost vysvětluje silnou, krutou bolest zad u pacientů s karcinomem slinivky?",
        options: [
          "Ukládání vápníku do páteře",
          "Perineurální invaze (tendence nádorových buněk infiltrovat a šířit se podél nervových vláken a pochev)",
          "Tvorba hlenu, který rozpouští kosti",
          "Masivní krvácení do retroperitonea"
        ],
        correct: 1,
        explanation: "Duktální adenokarcinom slinivky má silnou neurotropní aktivitu. Buňky prorůstají do peri- a intraneurálních prostor (kolem nervů), zejména do plexus celiacus v retroperitoneu, což dráždí nervová zakončení a způsobuje nesnesitelnou, fixovanou bolest zad."
      }
    ,
      {
        question: "V které části slinivky břišní (pankreatu) se nejčastěji nachází karcinom, což vyvolává Courvoisierův příznak?",
        type: "type-in",
        correct: ["hlava", "hlava pankreatu", "hlavě"],
        explanation: "Karcinom hlavy pankreatu stlačuje společný žlučovod a brzy způsobuje bezbolestnou žloutenku a hmatný žlučník (Courvoisier)."
      },
      {
        question: "Jak se nazývá invaze nádorových buněk podél nervových vláken, způsobující krutou bolest zad u karcinomu slinivky?",
        type: "type-in",
        correct: ["perineurální invaze", "perineurální"],
        explanation: "Perineurální invaze (šíření nádorových buněk v obalech nervů) dráždí nervová zakončení plexus celiacus a působí silnou bolest."
      }]
  },

  {
    id: "onco-26",
    title: "Neuroendokrinní nádory GIT a plic (NETy)",
    section: "Neuroendokrinní nádory",
    category: "Onkologie",
    keywords: ["karcinoid", "NET", "serotonin", "chromogranin", "synaptofyzin", "karcinoidový", "flush"],
    content: {
      definition: "Neuroendokrinní nádory (NET, dříve označované jako karcinoidy) jsou neoplazie vycházející z buněk difuzního neuroendokrinního systému (DNES). Vyskytují se nejčastěji v zažívacím traktu (appendix, tenké střevo, rektum) a v plicích.",
      etiology: "Většina je sporadická. Malá část vzniká v rámci genetického syndromu **MEN 1** (Mnohočetná endokrinní neoplazie typu 1).",
      pathogenesis: "Buňky NET si zachovávají schopnost syntetizovat a ukládat bioaktivní aminy a hormony (např. **serotonin**, histamin, gastrin). Dělí se podle mitotického indexu (Ki-67) do tří stupňů: NET G1 (pomalý, benigní chování), NET G2 a NET G3 / NEC (neuroendokrinní karcinom - vysoce maligní, anaplastický).",
      macroscopy: "NET v apendixu (nejčastější náhodný nález při apendektomii): tuhý, žlutavý nebo oranžový uzlík na hrotu apendixu. V tenkém střevě roste jako tuhý podslizniční uzel, který vyvolává výraznou desmoplazii (vazivové svraštění kliček střeva a omenta, vedoucí k ileu).",
      microscopy: "Buňky jsou vysoce uniformní, mají kulatá jádra s chromatinem vzhledu **soli a pepře** (salt-and-pepper chromatin). Rostou v ostrovy, čepy nebo trabekuly. V cytoplasmě jsou patrná neurosekreční granula, která se barví imunohistochemicky na **chromogranin A** a **synaptofyzin**.",
      clinical: "Funkční NET tenkého střeva metastazující do jater vyvolávají **karcinoidový syndrom** (způsobený vyloučením serotoninu do systémového oběhu): 1. Záchvatovité zčervenání obličeje a krku (**flush**), 2. Průjmy, 3. Astmatické záchvaty (bronchospazmus), 4. Fibrotické změny na chlopních pravého srdce (Hedingerův syndrom - serotonin je v plicích odbouráván, proto levé srdce není postiženo)."
    },
    quiz: [
      {
        question: "Proč se karcinoidový syndrom (zčervenání, průjmy) u karcinoidu tenkého střeva projeví až v momentě, kdy nádor metastázuje do jater?",
        options: [
          "Protože játra začnou serotonin sama vyrábět",
          "Protože při lokalizaci v samotném střevě je serotonin odváděn v. portae do jater, kde je kompletně metabolizován (znehodnocen) monoaminooxidázou (MAO); jaterní metastázy vylučují serotonin přímo do jaterních žil a systémového oběhu",
          "Metastázy v játrech jsou nefunkční",
          "Protože serotonin se aktivuje pouze stykem se žlučí"
        ],
        correct: 1,
        explanation: "Tento jev souvisí s efektem prvního průchodu játry (first-pass effect). Serotonin ze střeva putuje portální krví přímo do jater, kde ho enzymy odbourají. Pokud však nádor metastázuje do jater, tyto uzly vylučují serotonin přímo do systémového oběhu (venózní krví odtékající z jater), což vyvolá klinické příznaky."
      },
      {
        question: "Které dva imunohistochemické markery se standardně používají k potvrzení neuroendokrinní diferenciace nádorových buněk?",
        options: [
          "Cytokeratin a Vimentin",
          "Chromogranin A a Synaptofyzin",
          "Desmin a CD3",
          "S100 a HMB-45"
        ],
        correct: 1,
        explanation: "Chromogranin A je protein obsažený v sekrečních granulech neuroendokrinních buněk a synaptofyzin je protein membrány synaptických váčků. Tyto dva markery jsou standardními diagnostickými pilíři pro všechny neuroendokrinní nádory."
      }
    ,
      {
        question: "Jak se dříve označovaly dobře diferencované neuroendokrinní nádory (NET) tenkého střeva nebo apendixu?",
        type: "type-in",
        correct: ["karcinoid", "karcinoidy"],
        explanation: "Termín 'karcinoid' byl v minulosti používán pro neuroendokrinní nádory s pomalým růstem, které napodobovaly karcinom."
      },
      {
        question: "Který hormon/neurotransmitér je produkován NET a jeho uvolnění do oběhu způsobuje zčervenání (flush) a průjmy?",
        type: "type-in",
        correct: ["serotonin"],
        explanation: "Serotonin (5-HT) uvolňovaný funkčními NET tenkého střeva (po metastazování do jater) způsobuje typický karcinoidový syndrom."
      }]
  },

  {
    id: "onco-27",
    title: "Nádory ledvin",
    section: "Nádory urogenitální",
    category: "Onkologie",
    keywords: ["Grawitz", "karcinom", "ledviny", "jasnobuněčný", "VHL", "hematurie", "metastázy"],
    content: {
      definition: "Nádory ledvin u dospělých jsou v 85 % reprezentovány renálním (jasnobuněčným) karcinomem (RCC, dříve Grawitzův tumor). U dětí je typický Wilmsův tumor (nefroblastom).",
      etiology: "Kouření (zdvojnásobuje riziko), obezita, hypertenze, expozice těžkým kovům (kadmium). Genetika: mutace tumor supresorového genu **VHL** (von Hippel-Lindau) na 3. chromozomu.",
      pathogenesis: "Jasnobuněčný karcinom (nejčastější subtyp RCC, 75 %) vychází z buněk proximálního tubulu. Ztráta genu VHL vede k akumulaci faktoru HIF-1a, což stimuluje masivní tvorbu **VEGF** a růst cév. Nádor je proto extrémně prokrvený. Má sklon prorůstat do **vena renalis** a šířit se jako nádorový trombus až do vena cava inferior.",
      macroscopy: "Nádor tvoří velký, kulatý, pestrý uzel na pólu ledviny. Je charakteristicky **svítivě žlutý** (kvůli vysokému obsahu lipidů a cholesterolu v buňkách), střídaný s tmavě červenými okrsky krvácení, šedavými nekrózami a cystickými dutinami. Ostré ohraničení proti zdravé kůře.",
      microscopy: "Jasnobuněčný karcinom: buňky s **opticky prázdnou (jasnou) cytoplasmou** (lipidy a glykogen se při zpracování rozpustí), s dobře definovanými buněčnými hranicemi (vzhled rostlinných buněk). Jsou uspořádány do hnízd obklopených hustou sítí tenkostěnných kapilár.",
      clinical: "Klasická triáda příznaků (která se však vyskytuje jen u 10 % pacientů v pozdním stadiu): **hematurie** (krev v moči), **bolest v boku** a **hmatná rezistence**. Často se projevuje paraneoplastickými syndromy (erytrocytóza z produkce erythropoetinu, hyperkalcémie z produkce PTHrP). Má silný sklon k hematogennímu metastazování, a to zejména do plic (vzhled 'dělových koulí') a do kostí, kde vytváří charakteristické **osteolytické, pulzující metastázy** (bohatě prokrvené nádorové masy bourající kost, které se často projeví jako první příznak onemocnění ve formě patologické zlomeniny)."
    },
    quiz: [
      {
        question: "Proč jsou buňky jasnobuněčného karcinomu ledviny (RCC) pod mikroskopem charakteristicky opticky prázdné (jasné)?",
        options: [
          "Protože jsou vyplněny vzduchem",
          "Protože jejich cytoplasma obsahuje velké množství glykogenu a lipidů (cholesterolu), které se při standardním zpracování tkáně v organických rozpouštědlech vymyjí a zanechají prázdná místa",
          "Protože buňky nemají jádro",
          "Je to důsledek masivního ukládání amyloidu"
        ],
        correct: 1,
        explanation: "Nádorové buňky RCC hromadí v cytoplasmě cholesterol a glykogen. Při histologickém zpracování (odvodnění alkoholem, zalití do parafinu s použitím xylenu) se tyto látky rozpustí a vymyjí, takže v řezu zůstane jen prázdná cytoplasma s tenkou buněčnou membránou."
      },
      {
        question: "Jakou specifickou anatomickou cestou se renální karcinom nejčastěji šíří do těla?",
        options: [
          "Prorůstáním do tlustého střeva",
          "Invazí do vena renalis, kde může vytvořit nádorový špunt (trombus) rostoucí podél vena cava inferior až do pravé síně srdce",
          "Šířením močovodem do močového měchýře",
          "Podél lícního nervu"
        ],
        correct: 1,
        explanation: "RCC má výraznou tendenci k invazi do žilního systému. Nádor prorůstá stěnou drobných žil do hlavní ledvinné žíly (v. renalis) a roste jako souvislý nádorový válec (trombus) směrem do dolní duté žíly, což může mechanicky blokovat krevní návrat."
      }
    ,
      {
        question: "Který gen (lokalizovaný na 3. chromozomu) je mutován u familiární formy jasnobuněčného karcinomu ledviny?",
        type: "type-in",
        correct: ["VHL", "von Hippel-Lindau"],
        explanation: "Inaktivace tumor supresorového genu VHL způsobuje syndrom von Hippel-Lindau a rozvoj jasnobuněčných karcinomů ledvin."
      },
      {
        question: "Jak se nazývá maligní nádor ledviny u dětí (nefroblastom)?",
        type: "type-in",
        correct: ["Wilmsův tumor", "Wilmsův nádor", "nefroblastom"],
        explanation: "Wilmsův tumor (nefroblastom) je nejčastější dětský nádor ledvin, vycházející z metanefrického blastému."
      }]
  },

  {
    id: "onco-28",
    title: "Nádory močového měchýře",
    section: "Nádory urogenitální",
    category: "Onkologie",
    keywords: ["urotel", "karcinom", "měchýř", "hematurie", "papilární", "anilinové", "kouření"],
    content: {
      definition: "Nádory močového měchýře a močových cest vycházejí z přechodného epitelu (urotelu). Téměř 90 % těchto nádorů tvoří uroteliální karcinomy.",
      etiology: "Kouření cigaret (způsobuje 50 % případů, karcinogeny se vylučují močí a dráždí sliznici), expozice průmyslovým chemikáliím (**anilinová barviva** - textilní a gumárenský průmysl), chronické záněty, infekce schistosomózou (asociace s dlaždicobuněčným karcinomem měchýře v Egyptě).",
      pathogenesis: "Uroteliální tumory mají často **multifokální charakter** (tzv. teorie 'kancerizace pole' - celá sliznice vystavená karcinogenům v moči je náchylná k transformaci, nádory se proto vyskytují na více místech najednou nebo v různém čase - recidivy). Roste buď jako papilární (exofytický, neinvazivní), nebo jako plochý (infiltrativní, vysoce maligní, často z carcinoma in situ).",
      macroscopy: "Papilární forma: červenavé, křehké, třásnité útvary připomínající mořskou sasanku na sliznici měchýře. Infiltrativní forma: tuhé ztluštění stěny měchýře s exulcerací a krvácením.",
      microscopy: "Uroteliální papilární karcinom se dělí na Low-grade (jemné papily vystlané mírně atypickým urotelem s více než 7 vrstvami buněk) a High-grade (hrubé papily s těžkým pleomorfismem, hyperchromními jádry a četnými mitózami). Hodnotí se hloubka invaze do svaloviny měchýře (**detruzoru** - klíčové pro staging).",
      clinical: "Hlavním a často jediným příznakem je **intermitentní nebolestivá makrohematurie** (krev v moči, kterou pacient vidí). Diagnostika: cystoskopie s biopsií. Léčba: neinvazivní formy se řeší transuretrální resekcí (TURBT) a instilací BCG vakcíny do měchýře; invazivní karcinomy vyžadují radikální cystektomii (odstranění měchýře)."
    },
    quiz: [
      {
        question: "Co znamená pojem 'teorie kancerizace pole' (field cancerization) u uroteliálních karcinomů?",
        options: [
          "Nádor roste pouze u zemědělců pracujících na poli",
          "Předpoklad, že celá sliznice močových cest (ledvinná pánvička, močovod, měchýř) byla vystavena stejným karcinogenům z moči, a proto na ní může nezávisle na sobě vzniknout více nádorů najednou nebo v průběhu času (vysoké riziko recidiv)",
          "Nádor metastázuje pouze do kůže břicha",
          "Sliznice se mění na chrupavku"
        ],
        correct: 1,
        explanation: "Moč hromadí vylučované karcinogeny (např. z tabákového kouře). Celá výstelka močových cest je jimi drážděna. Proto odstranění jednoho nádoru v měchýři nevylučuje, že se později neobjeví jiný na jiném místě (např. v močovodu), což vyžaduje dlouhodobé sledování pacientů."
      },
      {
        question: "Který klinický příznak je nejčastějším varovným signálem karcinomu močového měchýře?",
        options: [
          "Krutá renální kolika vyzařující do třísla",
          "Opakovaná, zcela nebolestivá hematurie (přítomnost krve v moči)",
          "Neschopnost udržet moč (inkontinence)",
          "Vysoká horečka s třesavkou"
        ],
        correct: 1,
        explanation: "Krvácení z papilárních výběžků nádoru se projeví červenou močí. Na rozdíl od zánětu močových cest nebo průchodu kamene, toto krvácení u karcinomu neprovází žádná bolest, což pacienta často vede k podcenění situace."
      }
    ,
      {
        question: "Který typ epitelu vystýlá močový měchýř a dává vznik nejčastějším karcinomům měchýře?",
        type: "type-in",
        correct: ["urotel", "přechodný epitel"],
        explanation: "Urotel (přechodný epitel) je specializovaný vícevrstevný epitel močových cest, ze kterého vzniká uroteliální karcinom."
      },
      {
        question: "Která chemická barviva (expozice v průmyslu) jsou klasickým rizikovým faktorem karcinomu močového měchýře?",
        type: "type-in",
        correct: ["anilinová barviva", "anilinová", "anilin"],
        explanation: "Aromatické aminy (anilinová barviva) vylučované močí po expozici v průmyslu vyvolávají maligní transformaci urotelu."
      }]
  },

  {
    id: "onco-29",
    title: "Nádory prostaty",
    section: "Nádory urogenitální",
    category: "Onkologie",
    keywords: ["prostata", "karcinom", "PSA", "osteoplastické", "periferní", "Gleason", "biopsie"],
    content: {
      definition: "Adenokarcinom prostaty je nejčastějším zhoubným nádorem u mužů v ČR. Vychází ze žlázového epitelu prostaty, nejčastěji z její periferní zóny.",
      etiology: "Věk (výskyt prudce stoupá po 50. roce), rodinná anamnéza (genetické mutace BRCA1/2, HOXB13), etnické vlivy, strava bohatá na živočišné tuky.",
      pathogenesis: "Růst nádorových buněk je závislý na **androgenech** (testosteronu). Na rozdíl od benigní hyperplazie prostaty (BPH), která vzniká v tranzitní (centrální) zóně a brzy utlačuje močovou trubici, karcinom roste v **periferní zóně** (vzadu), takže dlouho nezpůsobuje potíže s močením.",
      macroscopy: "Nádor je často makroskopicky špatně patrný. Při palpaci per rectum (přes konečník) je prostata zvětšená, s ložisky extrémní, kamenné tvrdosti. Na řezu lze někdy nalézt neostré, šedožluté, tuhé okrsky v zadní části žlázy.",
      microscopy: "Téměř vždy jde o **adenokarcinom**. Charakteristická je ztráta **bazální vrstvy buněk** v nádorových žlázkách (zdravá prostata má žlázky dvouvrstevné - sekreční a bazální buňky; u karcinomu bazální buňky chybí, což se prokazuje imunohistochemicky p63 / CK5/6). K hodnocení se používá **Gleasonovo skóre** (hodnotí architektoniku od 1 do 5, výsledná známka je součtem dvou nejčastějších obrazů, např. 3+4=7).",
      clinical: "Dlouho asymptomatický. Pokročilé stadium se projeví dysurií (obtížné močení) nebo bolestmi v zádech. Karcinom prostaty typicky metastázuje do kostí (páteř, pánev), kde vyvolává **osteoplastické (sklerotické) metastázy** (dochází k novotvorbě kosti, kosti jsou na RTG bílé a extrémně husté). Sleduje se marker **PSA** (prostatický specifický antigen)."
    },
    quiz: [
      {
        question: "Jak se liší karcinom prostaty od benigní hyperplazie prostaty (BPH) z hlediska anatomické lokalizace ve žláze a klinických projevů v počátku?",
        options: [
          "Karcinom roste v centrální zóně a způsobuje okamžitou zástavu močení; BPH v periferní zóně a neprojevuje se vůbec",
          "Karcinom vzniká nejčastěji v periferní (zadní) zóně, takže dlouho nezpůsobuje obstrukci močové trubice a je klinicky němý; BPH vzniká v tranzitní (kolem močové trubice) zóně a projevuje se brzy obtížným močením (slbý proud, nykturie)",
          "Oba procesy jsou identické",
          "Karcinom roste pouze na povrchu prostaty pod kůží"
        ],
        correct: 1,
        explanation: "Vzhledem k lokalizaci karcinomu prostaty v periferní zóně (vzadu u rekta) nádor netlačí na močovou trubici probíhající středem žlázy. Proto v časném stadiu nezpůsobuje močové potíže. Lze ho však nahmatat prstem přes konečník (vyšetření per rectum)."
      },
      {
        question: "Jaký typ kostních metastáz je typický pro pokročilý adenokarcinom prostaty?",
        options: [
          "Osteolytické metastázy (rozpouštění kosti, otvory v kostech)",
          "Osteoplastické (osteosklerotické) metastázy (stimulace osteoblastů k nadměrné tvorbě husté kostní tkáně)",
          "Kosti se mění v chrupavku",
          "V kostech se tvoří hnisavé abscesy"
        ],
        correct: 1,
        explanation: "Karcinom prostaty je jedinečný tím, že jeho buňky produkují faktory (např. Wnt, BMP), které stimulují osteoblasty k novotvorbě kosti v místě metastázy. Tyto metastázy (nejčastěji v pánvi a bederní páteři) se projevují jako ložiska zvýšené density kosti, což je vidět na RTG i scintigrafii."
      }
    ,
      {
        question: "V které zóně prostaty nejčastěji vzniká adenokarcinom, což vysvětluje jeho dlouhou bezpříznakovost?",
        type: "type-in",
        correct: ["periferní zóna", "periferní", "zadní zóna", "zadní"],
        explanation: "Adenokarcinom prostaty vzniká v periferní (zadní) zóně. Netlačí proto v počátku na močovou trubici a je asymptomatický."
      },
      {
        question: "Který specifický marker v krvi se používá pro screening a sledování karcinomu prostaty?",
        type: "type-in",
        correct: ["PSA", "prostatický specifický antigen"],
        explanation: "PSA (prostatický specifický antigen) je glykoprotein produkovaný prostatou; jeho hladina stoupá u karcinomu, zánětu i benigní hyperplazie."
      }]
  },

  {
    id: "onco-30",
    title: "Nádory varlat",
    section: "Nádory urogenitální",
    category: "Onkologie",
    keywords: ["seminom", "varle", "nádor", "embryonální", "choriokarcinom", "hCG", "yolk", "kryptorchismus"],
    content: {
      definition: "Nádory varlat postihují převážně mladé muže (20–40 let). Více než 95 % z nich vychází ze zárodečných buněk (germinalní nádory). Dělí se na seminomy a neseminomy.",
      etiology: "Hlavním rizikovým faktorem je **kryptorchismus** (nesestouplé varle - riziko stoupá 4–10x), syndrom testikulární dysgeneze, rodinná anamnéza.",
      pathogenesis: "Všechny germinální nádory (kromě spermatocytárního seminomu) vznikají z prekurzoru zvaného GCNIS (germ cell neoplasia in situ). \n1. **Seminom**: nejčastější (50 %), pomalejší růst, velmi radiocitlivý. \n2. **Neseminomy** (agresivnější, sklon k časnému metastázování): \n- *Embryonální karcinom*: anaplastický, tvoří žlázy a papily. \n- *Nádor ze žloutkového váčku* (yolk sac tumor): nejčastější u malých dětí (do 3 let). \n- *Choriokarcinom*: vysoce maligní, tvořen syncytiotrofoblastem a cytotrofoblastem, krvácí. \n- *Teratom*: obsahuje tkáně všech 3 zárodečných listů (u dospělých mužů je na rozdíl od žen považován vždy za maligní!).",
      macroscopy: "Seminom: homogenní, laločnatý, šedobílý, masitý uzel, který zvětšuje varle, bez krvácení a nekróz. Embryonální karcinom a Choriokarcinom: pestrý vzhled, masivní nekrózy, prokrvácení, neostré ohraničení.",
      microscopy: "Seminom: velké, uniformní, polygonální buňky s jasnou cytoplasmou (glykogen) a kulatým jádrem s nápadným jadérkem, uspořádané do okrsků oddělených vazivovými septy s výrazným **lymfocytárním infiltrátem**. Yolk sac tumor: síťovité (retikulární) uspořádání, přítomnost **Schiller-Duvalových tělísek** (struktura připomínající glomerulus - céva obklopená nádorovými buňkami v dutině). Choriokarcinom: dvoufázový růst syncytiotrofoblastu (obří vícejaderné buňky) a cytotrofoblastu (jednojaderné buňky).",
      clinical: "Projevuje se jako nebolestivé zvětšení a ztuhnutí varlete. Sledují se sérové markery: **hCG** (lidský choriový gonadotropin, produkován syncytiotrofoblastem u choriokarcinomu a seminomu), **AFP** (alfa-fetoprotein, produkován yolk sac tumorem) a **LDH** (odráží masu nádoru). Je zcela zásadní, že čistý seminom **NIKDY neprodukuje AFP**. Pokud je u pacienta s histologickou diagnózou seminomu zjištěna zvýšená hladina AFP, znamená to, že se ve skutečnosti jedná o smíšený germinální nádor s neseminomovou složkou (yolk sac tumor). Toto zjištění dramaticky mění léčbu, protože čisté seminomy jsou vysoce citlivé na radioterapii, zatímco neseminomy nikoliv."
    },
    quiz: [
      {
        question: "U kterého germinálního nádoru varlete nacházíme pod mikroskopem Schiller-Duvalova tělíska (struktury napodobující primitivní glomeruly)?",
        options: [
          "Seminom",
          "Nádor ze žloutkového váčku (yolk sac tumor)",
          "Teratom",
          "Leydigom"
        ],
        correct: 1,
        explanation: "Schiller-Duvalova tělíska jsou patognomickým histologickým znakem nádoru ze žloutkového váčku. Skládají se z centrální krevní cévy lemované nádorovým epitelem, která vyčnívá do malého prostoru vystlaného rovněž nádorovým epitelem (napodobuje to glomerulární klubíčko v Bowmanově pouzdře)."
      },
      {
        question: "Který z nádorových markerů je typicky zvýšen u neseminomových nádorů (konkrétně yolk sac tumoru), ale jeho přítomnost v krvi spolehlivě vylučuje čistý seminom?",
        options: [
          "hCG",
          "Alfa-fetoprotein (AFP)",
          "PSA",
          "S100"
        ],
        correct: 1,
        explanation: "Seminomy nikdy neprodukují AFP. Pokud je u pacienta s podezřením na seminom zvýšen AFP, znamená to, že se jedná o smíšený germinální nádor obsahující neseminomovou složku (yolk sac tumor), což zásadně mění léčebnou strategii (neseminomy jsou radiorezistentní a léčí se chemoterapií a chirurgicky)."
      }
    ,
      {
        question: "Jak se nazývá nejčastější, dobře ohraničený a vysoce radiocitlivý germinální nádor varlete?",
        type: "type-in",
        correct: ["seminom"],
        explanation: "Seminom je nejčastější maligní germinální tumor varlete. Je typický kulatými buňkami s jasnou cytoplasmou a lymfocytárními septy."
      },
      {
        question: "Jak se nazývá vrozená vada nesestouplého varlete, která je hlavním rizikovým faktorem pro vznik nádorů?",
        type: "type-in",
        correct: ["kryptorchismus"],
        explanation: "Kryptorchismus je porucha sestupu varlete do šourku, která až desetkrát zvyšuje riziko vzniku maligního nádoru."
      }]
  },

  {
    id: "onco-31",
    title: "Nádory dělohy a děložního hrdla",
    section: "Gynekologická onkopatologie a prs",
    category: "Onkologie",
    keywords: ["děloha", "čípek", "karcinom", "endometrioidní", "HPV", "leiomyom", "CIN", "dlaždicový", "adenomyóza"],
    content: {
      definition: "Tato témata zahrnují dvě odlišné malignity: karcinom děložního hrdla (cervixu - převážně dlaždicobuněčný) a karcinom těla děložního (endometria - převážně adenokarcinom). Patří sem také benigní nádory (leiomyomy) a reaktivní stavy, jako je **adenomyóza dělohy** (přítomnost endometriálních žlázek a stroma v myometriu).",
      etiology: "Karcinom cervixu: infekce vysoce rizikovými typy **HPV** (zejména **16 a 18**), časný začátek sexuálního života, střídání partnerů, kouření. Karcinom endometria: **hyperestrogenismus** (nadbytek estrogenů neoponovaný gestageny - obezita, anovulační cykly, hormonální léčba). Adenomyóza: invaze bazální vrstvy endometria do myometria za přispění narušení zóny junctional zone.",
      pathogenesis: "1. **Karcinom cervixu**: HPV proteiny E6 (blokuje p53) a E7 (blokuje Rb) inaktivují buněčné supresory. Vzniká dysplázie (CIN 1–3) progredující do invazivního dlaždicobuněčného karcinomu. \n2. **Karcinom endometria**: typ I (endometrioidní, 80 %): vzniká na podkladě hyperplazie endometria stimulované estrogeny, mutace PTEN. Typ II (serózní, 20 %): starší ženy, vzniká v atrofickém endometriu, agresivní, mutace TP53. \n3. **Adenomyóza**: proliferace bazálního endometria prorůstajícího do myometria, které reaguje kompenzatorní hypertrofií hladké svaloviny.",
      macroscopy: "Karcinom cervixu: exofytický (květákovitý tumor čípku) nebo endofytický (infiltruje stěnu děložního hrdla, mění ho v tuhou hlaveň). Karcinom endometria: polypózní, křehká, šedavá masa vyplňující děložní dutinu a infiltrující myometrium (svalovinu). Adenomyóza: děloha je difuzně zvětšená, kulovitá (globózní), na řezu je myometrium ztluštělé s drobnými šedohnědými ložisky nebo drobnými cystičkami s krví.",
      microscopy: "Karcinom cervixu: dlaždicobuněčný karcinom (rohovějící nebo nerohovějící), méně často adenokarcinom cervixu. Karcinom endometria typ I: endometrioidní adenokarcinom (atypické, natěsnané žlázky bez stroma). Typ II: serózní karcinom (papilární struktury, těžké atypie, častá **psamomata**). Adenomyóza: ostrůvky endometriálních žlázek a buněčného stroma v myometriu, obklopené hyperplastickou hladkou svalovinou.",
      clinical: "Karcinom čípku se screenuje cytologicky (PAP stěr) a kolposkopicky. Projevuje se kontaktním krvácením (po styku). Karcinom endometria se typicky projevuje **krvácením v postmenopauze** (vyžaduje abrazi dělohy - kyretáž k vyloučení karcinomu!). Adenomyóza se klinicky projevuje **menoragií** (silné krvácení), **dysmenoreou** (bolestivá menstruace) a chronickou pánevní bolestí."
    },
    quiz: [
      {
        question: "Které dva onkoproteiny produkované vysoce rizikovými typy viru HPV (16, 18) jsou zodpovědné za inaktivaci tumor supresorových proteinů p53 a Rb v buňkách děložního čípku?",
        options: [
          "Onkoproteiny E1 a E2",
          "Onkoproteiny E6 (inaktivuje p53) a E7 (inaktivuje Rb)",
          "Onkoproteiny L1 a L2 (kapsidové proteiny)",
          "Onkoproteiny gp120 a gp41"
        ],
        correct: 1,
        explanation: "Proteiny E6 a E7 jsou klíčové pro HPV karcinogenezi. E6 se váže na p53 a posílá ho k degradaci, čímž buňka ztrácí schopnost opravy DNA a apoptózy. E7 se váže na Rb, uvolňuje transkripční faktor E2F a nutí buňku trvale se dělit."
      },
      {
        question: "Jak se nejčastěji klinicky manifestuje karcinom těla děložního (endometria) u starších žen?",
        options: [
          "Masivním zvětšením břicha (ascites)",
          "Krvácením z rodidel v postmenopauze (po přechodu)",
          "Náhlou dušností",
          "Vznikem vředů na kůži genitálu"
        ],
        correct: 1,
        explanation: "Karcinom endometria postihuje nejčastěji ženy po menopauze. Růst tumoru a jeho rozpad vede ke krvácení do děložní dutiny. Jelikož tyto ženy již nemenstruují, každé takové krvácení je alarmující a umožňuje včasnou diagnostiku kyretáží."
      },
      {
        question: "Jak se nazývá benigní stav dělohy, při kterém dochází k prorůstání endometriálních žlázek a stroma do děložní svaloviny (myometria)?",
        options: [
          "Endometrioidní adenokarcinom",
          "Adenomyóza dělohy",
          "Leiomyom dělohy",
          "Atypická hyperplazie endometria"
        ],
        correct: 1,
        explanation: "Adenomyóza je benigní invaze bazální vrstvy endometria do myometria. Vede k reaktivní hyperplazii hladké svaloviny, difuznímu zvětšení dělohy a projevuje se bolestivým a silným menstruačním krvácením."
      },
      {
        question: "Které dva onkoproteiny produkované HPV inaktivují supresory p53 a Rb v buňkách děložního čípku?",
        type: "type-in",
        correct: ["E6 a E7", "E6, E7", "E6 a E7 onkoproteiny"],
        explanation: "Onkoprotein E6 blokuje a degraduje p53, onkoprotein E7 se váže na Rb. Společně vedou k maligní transformaci buněk čípku."
      },
      {
        question: "Jaký je hlavní klinický příznak karcinomu endometria u starších žen?",
        type: "type-in",
        correct: ["krvácení v postmenopauze", "krvácení po přechodu", "vaginální krvácení"],
        explanation: "Každé krvácení z rodidel u ženy po menopauze (přechodu) is podezřelé a vyžaduje vyšetření k vyloučení karcinomu endometria."
      },
      {
        question: "Jaký benigní stav dělohy je charakterizován přítomností endometriálních žlázek a stroma uvnitř myometria?",
        type: "type-in",
        correct: ["adenomyóza", "adenomyóza dělohy", "adenomyosa"],
        explanation: "Adenomyóza (někdy označovaná jako vnitřní endometrióza) představuje přítomnost děložní sliznice hluboko v myometriu."
      }
    ]
  },

  {
    id: "onco-32",
    title: "Nádory ovárií",
    section: "Gynekologická onkopatologie a prs",
    category: "Onkologie",
    keywords: ["ovaria", "cystadenom", "teratom", "Krukenberg", "CA125", "serózní", "mucinosní", "endometrióza"],
    content: {
      definition: "Nádory vaječníků vykazují obrovskou histologickou různorodost. Dělí se na epitelové (nejčastější), germinální, nádory ze zárodečného stroma a metastázy. Častým nenádorovým procesem s rizikem cystické transformace vaječníku je **endometrióza** (přítomnost endometria mimo děložní dutinu).",
      etiology: "U epitelových karcinomů: vysoký počet ovulací (bez těhotenství a kojení - traumatizace povrchu ovaria), genetické mutace BRCA1/2, Lynchův syndrom. Endometrióza vzniká např. retrográdní menstruací přes vejcovody, metaplazií coelomového epitelu či lymfogenním šířením.",
      pathogenesis: "1. **Epitelové nádory** (65–70 %, dělí se na benigní cystadenom, borderline a maligní cystadenokarcinom): \n- *Serózní*: nejčastější, často oboustranný, serózní obsah. \n- *Mucinózní*: vyplněn hlenem, může dosáhnout obřích rozměrů. \n2. **Germinální nádory**: \n- *Dermoidní cysta* (zralý cystický teratom): nejčastější benigní tumor u mladých žen. \n3. **Nádory ze stroma**: *Fibrom* (spojen s Meigsovým syndromem), *Granulózový tumor* (produkuje estrogeny). \n4. **Metastázy**: *Krukenbergův tumor* (z difuzního karcinomu žaludku). \n5. **Endometrióza ovaria**: cyklické krvácení ektopického endometria v ovariu vede k hromadění krve a vzniku pseudocyst.",
      macroscopy: "Cystadenomy: velké, tenkostěnné cysty naplněné čirou tekutinou (serózní) nebo hustým hlenem (mucinózní). Karcinomy: solidně-cystické, s papilárními výrůstky na vnitřní i vnější stěně cysty. Teratom (dermoidní cysta): cysta vyplněná mazem, vlasy, zuby a chrupavkou. Endometrióza ovaria: ovariální **čokoládové cysty** (endometriomy) o velikosti až několika cm, vyplněné tmavohnědou hustou tekutinou (rozpadlá krev), se svraštělým, fibrotickým pouzdrem.",
      microscopy: "Serózní karcinom: papily kryté atypickým cylindrickým epitelem, přítomnost **psamomatózních tělísek** (kulaté kalcifikované kuličky s koncentrickým vrstvením). Teratom: přítomnost struktur kůže (epidermis, mazové žlázy), mozkové tkáně, štítné žlázy, chrupavky a střeva. Endometrióza: ložiska endometriálních žlázek a stroma ve stěně cysty, doprovázená hojnou přítomností makrofágů s hemosiderinem (**siderofágy**).",
      clinical: "Ovariální karcinom je přezdíván **tichý zabiják**, protože roste dlouho bezpříznakově v břišní dutině a odhalí se až v pozdním stadiu (šíří se implantací po peritoneu - ascites, karcinomatóza peritonea). Sleduje se tumorózní marker **CA-125**. Meigsův syndrom u fibromu ovaria: triáda fibrom ovaria, hydrothorax a ascites. Endometrióza se projevuje dysmenoreou, chronickou pánevní bolestí, dyspareunií (bolest při styku) a je častou příčinou sterility."
    },
    quiz: [
      {
        question: "Co je to dermoidní cysta (zralý cystický teratom) ovaria a co typicky obsahuje?",
        options: [
          "Zhoubný nádor z buněk žloutkového váčku produkující AFP",
          "Benigní germinální nádor tvořený zralými tkáněmi ze všech tří zárodečných listů, makroskopicky se projevující jako cysta vyplněná kožním mazem, vlasy, zuby, chrupavkou či okrsky mozkové tkáně",
          "Metastáza karcinomu plic",
          "Jednoduchá cysta vyplněná čistou vodou"
        ],
        correct: 1,
        explanation: "Dermoidní cysta je nejčastější ovariální nádor u mladých žen. Vychází ze zárodečné buňky, která se začne vyvíjet a diferencovat do různých zralých tkání těla (nejčastěji ektodermu - kůže, vlasy, zuby, glie), které se hromadí v cystické dutině."
      },
      {
        question: "Co jsou to psamomata (psamomatózní tělíska) a u kterého ovariálního nádoru jsou typickým mikroskopickým nálezem?",
        options: [
          "Bakteriální shluky v tubě",
          "Drobné, kulaté, koncentricky vrstvené kalcifikace (vápenateté kuličky) vzniklé nekrotizací a zvápenatěním papilárních struktur, typické pro serózní ovariální karcinom (a meningiom)",
          "Tukové buňky v myometriu",
          "Odlitky proteinů v ledvině"
        ],
        correct: 1,
        explanation: "Psamomata (z řeckého psammos = písek) vznikají, když hrot papily u serózního karcinomu odumře (ischemií) a do tohoto ložiska se pasivně uloží soli vápníku (dystrofická kalcifikace). Pod mikroskopem vypadají jako růžovomodré vrstvené kuličky."
      },
      {
        question: "Jak se nazývá přítomnost endometriálních žlázek a stroma mimo děložní dutinu (např. na ovariu, kde tvoří tzv. čokoládové cysty)?",
        options: [
          "Hyperplazie endometria",
          "Krukenbergův tumor",
          "Endometrióza",
          "Adenomyóza"
        ],
        correct: 2,
        explanation: "Endometrióza je definována jako přítomnost děložní sliznice (žlázek i stroma) mimo děložní dutinu. Ovárium je nejčastější lokalizací, kde cyklické krvácení vede k tvorbě pseudocyst naplněných hnědavou, rozpadlou krví (tzv. čokoládové cysty neboli endometriomy)."
      },
      {
        question: "Jak se nazývá benigní ovariální teratom (dermoidní cysta), který obsahuje zralé tkáně jako vlasy, zuby a maz?",
        type: "type-in",
        correct: ["dermoidní cysta", "zralý teratom", "teratom"],
        explanation: "Zralý cystický teratom (dermoidní cysta) je benigní ovariální nádor obsahující zralé deriváty ektodermu, mezodermu a endodermu."
      },
      {
        question: "Který ovariální nádor (metastáza ze žaludku) is charakterizován buňkami vzhledu pečetního prstenu?",
        type: "type-in",
        correct: ["Krukenbergův tumor", "Krukenbergův nádor"],
        explanation: "Krukenbergův tumor je oboustranná ovariální metastáza hlenotvorného karcinomu žaludku (s buňkami vzhledu pečetního prstenu)."
      },
      {
        question: "Jak se nazývají cysty na vaječnících u endometriózy vyplněné rozpadlou starou krví?",
        type: "type-in",
        correct: ["čokoládové cysty", "čokoládová cysta", "endometriomy", "endometriom"],
        explanation: "Čokoládové cysty (endometriomy) vznikají cyklickým krvácením ektopického endometria na ovariu. Obsahují tmavohnědou tekutinu bohatou na hemosiderin z rozpadlých červených krvinek."
      }
    ]
  },

  {
    id: "onco-33",
    title: "Nádory prsu",
    section: "Gynekologická onkopatologie a prs",
    category: "Onkologie",
    keywords: ["prs", "karcinom", "fibroadenom", "duktální", "lobulární", "BRCA", "herceptin", "HER2"],
    content: {
      definition: "Nádory prsu postihují převážně ženy. Zahrnují benigní afekce (fibroadenom - nejčastější) a maligní (karcinom prsu - nejčastější zhoubný nádor u žen v ČR).",
      etiology: "Hormonální vlivy (dlouhá expozice estrogenům - časná menarché, pozdní menopauza, bezdětost), obezita, genetické mutace **BRCA1 a BRCA2** (vysoké riziko karcinomu prsu a ovarií).",
      pathogenesis: "1. **Benigní**: *Fibroadenom*: roste z vaziva a žlázového epitelu u mladých žen. \n2. **Maligní (karcinom prsu)**: vzniká přes neinvazivní stadia (DCIS - duktální carcinoma in situ, LCIS - lobulární CIS): \n- *Infiltrativní duktální karcinom* (NST, 75 %): nejčastější, tvoří čepy a žlázky, doprovázen tuhým vazivem. \n- *Infiltrativní lobulární karcinom* (15 %): buňky rostou disociovaně, často postihuje oba prsy.",
      macroscopy: "Fibroadenom: kulatý, tuhý, elastický, perfektně ohraničený a volně pohyblivý uzel (nevtahuje kůži). Karcinom prsu: nepravidelný, extrémně tuhý uzel (jako kámen), neohraničený, fixovaný, **vtahuje kůži nebo bradavku** (vzhled **pomerančové kůry** / peau d'orange v důsledku ucpání lymfatických cév nádorem).",
      microscopy: "Infiltrativní lobulární karcinom má charakteristický růst: malé, uniformní buňky rostou v řadách za sebou jako **indická řada** (indian filing) a obtáčejí zdravé vývody (terčovitý vzhled). U karcinomu prsu se rutinně vyšetřují receptory: estrogenový (ER), progesteronový (PR) a receptor **HER2/neu** (pokud je HER2 pozitivní, podává se cílená léčba - Trastuzumab/Herceptin).",
      clinical: "Screening v ČR: preventivní **mamografie** od 45 let každé 2 roky. Karcinom prsu metastázuje lymfogenně do podpažních (axilárních) uzlin (vyšetřuje se **sentinelová uzlina** - první spádová uzlina). Hematogenně do kostí, plic, jater."
    },
    quiz: [
      {
        question: "Jak se pod mikroskopem projevuje typické uspořádání buněk u infiltrativního lobulárního karcinomu prsu?",
        options: [
          "Tvorbou velkých, papilárních struktur s psamomy",
          "Růstem malých, uniformních buněk v jedné řadě za sebou (tzv. 'indická řada' / indian file) infiltrujících stroma",
          "Tvorbou obřích cyst vyplněných keratinem",
          "Tvorbou cibulovitých struktur kolem cév"
        ],
        correct: 1,
        explanation: "U lobulárního karcinomu chybí exprese adhezivního proteinu E-cadherinu (buňky nedrží pohromadě). Proto netvoří žlázové tubuly, ale protlačují se vazivovým stroma samostatně, řazené v tenkých jednobuněčných proužcích připomínajících pochodující indiány v zástupu."
      },
      {
        question: "Co způsobuje vznik vzhledu 'pomerančové kůry' (peau d'orange) na kůži prsu u pokročilého karcinomu?",
        options: [
          "Alergická reakce na podprsenku",
          "Infiltrace a ucpání podkožních lymfatických cév nádorovými buňkami, což vede k lymfedému kůže; kůže oteče, ale v místech vlasových folikulů a pórů (které jsou fixovány vazivem) zůstává vtažená",
          "Ukládání karotenu do podkoží",
          "Přímé vycestování nádorových buněk na povrch kůže"
        ],
        correct: 1,
        explanation: "Peau d'orange je klinickým markerem zánětlivého karcinomu nebo pokročilého stádia. Nádorové čepy ucpou lymfatickou drenáž. Kůže zduří lymfatickým otokem, ale vazivové septa kůži drží v místech pórů pevně, což vytváří důlkovaný vzhled pomerančové kůry."
      }
    ,
      {
        question: "Jak se označuje růst malých uniformních buněk v řadách za sebou u infiltrativního lobulárního karcinomu prsu?",
        type: "type-in",
        correct: ["indická řada", "indické řady", "indian file"],
        explanation: "Kvůli ztrátě E-cadherinu rostou buňky lobulárního karcinomu disociovaně a řadí se ve stroma do tenkých zástupů ('indických řad')."
      },
      {
        question: "Který typ karcinomu prsu vykazuje neinvazivní růst uvnitř mlékovodů a označuje se zkratkou DCIS?",
        type: "type-in",
        correct: ["duktální karcinom in situ", "duktální carcinoma in situ"],
        explanation: "DCIS (Ductal Carcinoma In Situ) je preinvazivní léze ohraničená myoepiteliální vrstvou mlékovodů."
      }]
  },

  {
    id: "onco-34",
    title: "Nádory trofoblastu",
    section: "Gynekologická onkopatologie a prs",
    category: "Onkologie",
    keywords: ["trofoblast", "mola", "hydatidosa", "choriokarcinom", "syncytiotrofoblast", "těhotenství", "hCG"],
    content: {
      definition: "Gestační trofoblastická nemoc je skupina afekcí vycházejících z abnormální proliferace trofoblastu (tkáně placenty). Zahrnuje molu hydatidosu (parciální a kompletní - benigní formy) a choriokarcinom (vysoce zhoubný nádor).",
      etiology: "Chyba při oplození vajíčka spermií: \n- *Kompletní mola*: oplození 'prázdného' vajíčka (bez genetické informace) jednou nebo dvěma spermiemi (genom je 100% otcovský, 46,XX). \n- *Parciální mola*: oplození normálního vajíčka dvěma spermiemi (vzniká triploidie, 69,XXY).",
      pathogenesis: "Mola hydatidosa: dochází k edému klků placenty a proliferaci trofoblastu. Choriokarcinom: vzniká transformací trofoblastu po prodělané mole (50 %), po potratu (25 %) nebo po normálním těhotenství (22 %). Vykazuje extrémní invazivitu do cév.",
      macroscopy: "Kompletní mola: děloha je vyplněna hroznovitým útvarem tvořeným velkým množstvím průsvitných, tenkostěnných váčků naplněných tekutinou (připomíná **hrozny vína**), chybí plod. Choriokarcinom: měkká, tmavě červená (krvavá), drobivá masa destruující stěnu dělohy.",
      microscopy: "Mola hydatidosa: masivně zvětšené (hydrotické) klky placenty bez cév, lemované proliferujícím trofoblastem. Choriokarcinom: absence choriových klků (klíčový rozdíl oproti mole!), nádor je tvořen čistě smíšenou proliferací atypického syncytiotrofoblastu a cytotrofoblastu, s rozsáhlými hemoragiemi a nekrózou.",
      clinical: "Kompletní mola se projevuje dělohou zvětšenou více, než odpovídá týdnu těhotenství, a vaginálním krvácením (odchodem váčků). Choriokarcinom je charakterizován **extrémně vysokou hladinou hCG** v krvi. Velmi časně metastázuje hematogenně do plic (způsobuje hemoptýzu). Je to však jeden z nejlépe léčitelných zhoubných nádorů chemoterapií (metotrexátem) s vysokým procentem vyléčení."
    },
    quiz: [
      {
        question: "Jak se makroskopicky projevuje kompletní mola hydatidosa v děložní dutině?",
        options: [
          "Jako jeden velký tuhý vazivový uzel",
          "Jako shluk velkého množství drobných, průsvitných váčků naplněných tekutinou, které připomínají hrozny vína, přičemž plod zcela chybí",
          "Jako ztenčení stěny dělohy s jejím protržením",
          "Jako černé skvrny na sliznici"
        ],
        correct: 1,
        explanation: "Při kompletní mole dochází k hydropsu (naplnění vodou) choriových klků placenty a proliferaci trofoblastu bez vývoje plodu. Klky nabobtnají do tvaru váčků (velikosti až 1-2 cm) a vyplní celou dělohu jako hroznovitá masa."
      },
      {
        question: "Který hormon je produkován nádory trofoblastu (mola, choriokarcinom) a slouží jako primární marker pro diagnostiku a sledování úspěšnosti léčby?",
        options: [
          "Estrogen",
          "Lidský choriový gonadotropin (hCG)",
          "Progesteron",
          "Inzulín"
        ],
        correct: 1,
        explanation: "Trofoblast (placenta) fyziologicky produkuje hormon hCG k udržení těhotenství. Nádory trofoblastu si tuto schopnost uchovávají a produkují hCG v obrovském množství. Sledování poklesu hCG po léčbě je zásadní pro potvrzení eliminace choriokarcinomu."
      }
    ,
      {
        question: "Jak se nazývá hroznovitá neoplastická proliferace placenty bez přítomnosti plodu (kompletní forma)?",
        type: "type-in",
        correct: ["mola hydatidosa", "kompletní mola", "mola"],
        explanation: "Kompletní mola hydatidosa je charakteristická hydropsickým zduřením klků placenty připomínajícím hrozny vína a absencí plodu."
      },
      {
        question: "Který zhoubný nádor trofoblastu vzniká po mole, potratu či porodu a extrémně časně metastázuje do plic?",
        type: "type-in",
        correct: ["choriokarcinom"],
        explanation: "Choriokarcinom je agresivní maligní nádor trofoblastu s výrazným sklonem k hematogennímu metastázování do plic."
      }]
  },

  {
    id: "onco-35",
    title: "Nejčastější nádory u dětí",
    section: "Pediatrická onkopatologie",
    category: "Onkologie",
    keywords: ["děti", "blastom", "nefroblastom", "neuroblastom", "retinoblastom", "leukémie", "Wilms"],
    content: {
      definition: "Nádory dětského věku se zásadně liší od nádorů dospělých. Převažují nádory hematopoetické (leukémie, lymfomy) a nádory embryonální (označované jako **blastomy**), které vycházejí z nezralých zárodečných tkání.",
      etiology: "Genetické faktory (vrozené mutace tumor supresorů, např. genů WT1, RB1), poruchy embryogeneze. Vlivy vnějšího prostředí hrají u dětí minimální roli (krátká doba expozice).",
      pathogenesis: "1. **Leukémie**: nejčastější dětské neoplazie (ALL tvoří 30 % všech dětských rakovin). \n2. **Neuroblastom**: nejčastější solidní mimolební tumor dětí (vychází ze sympatických ganglií nebo dřeně nadledvin). \n3. **Nefroblastom (Wilmsův tumor)**: nejčastější nádor ledviny u dětí (mutace WT1). \n4. **Meduloblastom**: maligní nádor mozečku dětí. \n5. **Retinoblastom**: vrozený nádor sítnice oka (mutace genu **RB1**).",
      macroscopy: "Nefroblastom: velká, měkká, šedavá masa v břiše dítěte, která deformuje ledvinu, s ložisky nekróz. Retinoblastom: bělavá masa uvnitř očního bulbu, která způsobuje bělavý odlesk zornice (leukokorii).",
      microscopy: "Většina embryonálních dětských nádorů patří do skupiny **drobnokulatobuněčných modrých nádorů** (small round blue cell tumors) - buňky jsou malé, uniformní, s minimem cytoplasmy a tmavými jádry. Wilmsův tumor je charakteristický **trifázickou strukturou**: obsahuje blastemovou složku (husté modré okrsky), epiteliální složku (primitivní žlázky a glomeruly) a stromální složku (vřetenovité buňky, hladký sval).",
      clinical: "Retinoblastom se klinicky manifestuje jako **kočičí oko** (leukokoria - zornice při osvětlení bleskem nečervená, ale svítí bíle). Wilmsův tumor se projevuje jako asymptomatické zvětšení bříška dítěte (hmatná rezistence, kterou matka nahmatá při koupání, nesmí se palpovat silou kvůli riziku ruptury pouzdra)."
    },
    quiz: [
      {
        question: "Jak se v histologickém řezu projevuje typická 'trifázická' struktura Wilmsova tumoru (nefroblastomu) u dětí?",
        options: [
          "Přítomností keratinu, tuku a chrupavky",
          "Směsí blastemové složky (husté okrsky modrých buněk), epiteliální složky (primitivní tubuly a glomeruly) a stromální složky (vřetenobuněčné vazivo)",
          "Ukládáním amyloidu, vápníku a žluči",
          "Přítomností zralých nervů, cév a svalů"
        ],
        correct: 1,
        explanation: "Wilmsův tumor napodobuje embryonální vývoj ledviny. Skládá se ze tří složek: nejméně zralé blastemy (tmavé buňky), pokusů o tvorbu ledvinných struktur (epitelové tubuly) a doprovodného nezralého stroma (stromální komponenta)."
      },
      {
        question: "Co je to leukokoria (příznak 'kočičího oka') a u kterého dětského nádoru je typickým klinickým projevem?",
        options: [
          "Zelené zbarvení duhovky u melanomu oka",
          "Bělavý odlesk zornice při osvětlení (např. při fotografování s bleskem), způsobený odrazem světla od bělavé masy nádoru sítnice; typické pro retinoblastom",
          "Krvácení do přední komory oční u leukémie",
          "Ztráta zraku u meduloblastomu"
        ],
        correct: 1,
        explanation: "Retinoblastom roste ze sítnice směrem do sklivce. Při pohledu do oka nebo na fotografii chybí normální červený reflex pozadí (vyvolaný prokrvenou choriodeou), protože světlo se odrazí od šedobílé masy nádoru sítnice, což se jeví jako bílá zornice."
      }
    ,
      {
        question: "Jak se nazývá nejčastější maligní nitrooční nádor u dětí, spojený s mutací genu RB1?",
        type: "type-in",
        correct: ["retinoblastom"],
        explanation: "Retinoblastom je vrozený maligní nádor sítnice u dětí, vyvolaný mutací obou alel tumor supresorového genu RB1."
      },
      {
        question: "Jak se označuje bílý odlesk zornice (kočičí oko) u dětí s retinoblastomem?",
        type: "type-in",
        correct: ["leukokorie"],
        explanation: "Leukokorie (bílý odlesk zornice při dopadu světla) je nejčastějším klinickým příznakem rozvíjejícího se retinoblastomu."
      }]
  },

  {
    id: "onco-36",
    title: "Nádory nadledvin",
    section: "Endokrinní onkopatologie",
    category: "Onkologie",
    keywords: ["nadledviny", "feochromocytom", "adenom", "karcinom", "adrenalin", "hypertenze", "lipid"],
    content: {
      definition: "Nádory nadledvin se dělí podle lokalizace na nádory kůry (adenom, karcinom kůry nadledvin) a nádory dřeně (feochromocytom). Mohou být hormonálně funkční nebo nefunkční.",
      etiology: "Adenom/karcinom: sporadické, asociace s Beckwith-Wiedemannovým syndromem. Feochromocytom: v 30–40 % familiární (mutace v genech RET u syndromu **MEN 2**, VHL, NF1).",
      pathogenesis: "1. **Adenom kůry nadledvin**: benigní, často produkuje aldosteron (Connův s.) nebo kortizol (Cushingův s.). \n2. **Karcinom kůry**: vzácný, vysoce maligní, často produkuje androgeny (virilizace). \n3. **Feochromocytom**: tumor z chromafinních buněk dřeně nadledvin, produkuje **katecholaminy** (adrenalin, noradrenalin). Dříve platilo 'pravidlo 10 %': 10 % je bilaterálních, 10 % maligních, 10 % extraadrenálních (paragangliomy).",
      macroscopy: "Adenom kůry: malý, ohraničený, svítivě žlutý uzel (kvůli obsahu lipidů). Karcinom kůry: velký (> 100g), prokrvácený, nekrotický uzel. Feochromocytom: šedohnědý, prokrvácený uzel, na řezu tmavne po expozici draselným solím chromu (chromafinní reakce).",
      microscopy: "Adenom kůry: buňky podobné zona fasciculata (světlá, lipidová cytoplasma). Karcinom kůry: buněčný pleomorfismus, invaze do cév, nekrózy. Feochromocytom: polygonální buňky uspořádané do hnízd (**Zellballen**) obklopených cévami. Cytoplasma je jemně granulární, jádra vykazují mírný pleomorfismus.",
      clinical: "Feochromocytom se projevuje **paroxysmální (záchvatovitou) arteriální hypertenzí** (extrémní vzestup tlaku při vyplavení adrenalinu), provázenou bušením srdce (tachykardií), bolestmi hlavy a opocením. V moči se detekují zvýšené hladiny metanefrinů a kyseliny vanilmandlové (VMA)."
    },
    quiz: [
      {
        question: "Jak se klinicky nejčastěji projevuje funkční feochromocytom dřeně nadledvin?",
        options: [
          "Těžkou hypoglykémií a hubnutím",
          "Paroxysmální (záchvatovitou) nebo fixovanou arteriální hypertenzí doprovázenou bušením srdce, bolestmi hlavy, úzkostí a pocením",
          "Bronzovým zbarvením kůže a nízkým tlakem",
          "Vypadáváním vlasů a únavou"
        ],
        correct: 1,
        explanation: "Feochromocytom produkuje velké množství katecholaminů (adrenalinu a noradrenalinu). Tyto hormony vyvolávají stažení cév (vazokonstrikci) a stimulují srdce. Vyplavení může být vyvoláno i mechanickým tlakem na břicho, což vede k život ohrožujícím záchvatům extrémně vysokého tlaku."
      },
      {
        question: "Co označuje německý termín 'Zellballen' v histologii feochromocytomu?",
        options: [
          "Bílkovinné odlitky v ledvině",
          "Uspořádání nádorových chromafinních buněk do kulatých hnízd (balonků) ohraničených tenkými cévními septory a podpůrnými sustentakulárními buňkami",
          "Kaseózní nekrózu",
          "Rohovatějící čepy buněk"
        ],
        correct: 1,
        explanation: "Zellballen (hnízda buněk) je typickým histologickým uspořádáním feochromocytu a paragangliomů. Polygonální buňky tvoří malé skupinky připomínající plesy, které jsou hustě opředeny sítí kapilár (což usnadňuje uvolňování hormonů do krve)."
      }
    ,
      {
        question: "Jak se nazývá zhoubný nádor dřeně nadledvin (nebo sympatiku) u dětí, tvořený drobnými kulatými modrými buňkami?",
        type: "type-in",
        correct: ["neuroblastom"],
        explanation: "Neuroblastom je maligní nádor z buněk sympatiku u dětí, tvořící pod mikroskopem Homer-Wrightovy rozety."
      },
      {
        question: "Jak se nazývá benigní nádor kůry nadledvin, který může produkovat kortizol a způsobit Cushingův syndrom?",
        type: "type-in",
        correct: ["adenom kůry nadledvin", "adenom nadledviny", "adenom"],
        explanation: "Adenom kůry nadledvin je častý benigní uzel, který při hormonální aktivitě produkuje nadbytek kortizolu."
      }]
  },

  {
    id: "onco-37",
    title: "Nádory štítné žlázy",
    section: "Endokrinní onkopatologie",
    category: "Onkologie",
    keywords: ["štítná", "karcinom", "papilární", "folikulární", "medulární", "kalcitonin", "amyloid"],
    content: {
      definition: "Nádory štítné žlázy zahrnují benigní adenomy (folikulární adenom) a karcinomy, které vykazují různé biologické chování od vysoce vyléčitelných až po okamžitě fatální.",
      etiology: "Ionizující záření na krk v dětství (hlavní faktor pro papilární karcinom), nedostatek jódu (asociace s folikulárním karcinomem). Genetické mutace: fúze RET/PTC, mutace BRAF (papilární), mutace genu RET (medulární).",
      pathogenesis: "1. **Papilární karcinom** (80 %): nejčastější, skvělá prognóza, šíří se lymfogenně do krčních uzlin. \n2. **Folikulární karcinom** (15 %): invazivní charakter, šíří se **hematogenně** (do kostí a plic). \n3. **Medulární karcinom** (5 %): vychází z **C-buněk** tvořících **kalcitonin**. Je spojen se syndromem **MEN 2** (způsoben zárodečnou mutací onkogenu RET). \n4. **Anaplastický karcinom**: starší lidé, vysoce agresivní, neléčitelný.",
      macroscopy: "Papilární: neohraničený, tuhý, šedobílý uzel, často s cystickými změnami a kalcifikacemi. Folikulární: na rozdíl od benigního adenomu prorůstá přes vlastní vazivové pouzdro do okolí (minimálně invazivní). Anaplastický: obrovská masa destruující struktury krku (průdušnici, jícen).",
      microscopy: "Papilární k.: papily a charakteristická jádra - **prázdná jádra vzhledu Sirotka Aničky** (Orphan Annie eyes - chromatin je odtlačen k okrajům jádra) a jaderné pseudoinfoliace. Přítomnost psamomatózních tělísek. Medulární k.: polygonální buňky v hnízdech, stroma obsahuje růžová depozita **amyloidu** (tvořeného prokalcitoninem - pozitivní v barvení Kongočervení).",
      clinical: "Papilární a folikulární karcinomy dobře akumulují jód, proto se po chirurgickém odstranění štítné žlázy (tyreodektomii) doléčují podáním **radioaktivního jódu 131I** (radiojodová ablace). Medulární karcinom jód neakumuluje, v krvi se sleduje zvýšená hladina kalcitoninu."
    },
    quiz: [
      {
        question: "Který histologický znak v jádrech buněk je typický pro papilární karcinom štítné žlázy (tzv. Orphan Annie eyes)?",
        options: [
          "Jádra vyplněná melaninem",
          "Opticky prázdná, světlá jádra s chromatinem kondenzovaným při jaderné membráně a jadernými zářezy (pseudoinfluzemi)",
          "Rozpad jader na bazofilní prach",
          "Jádra tvaru housenky"
        ],
        correct: 1,
        explanation: "Jádra Orphan Annie (podle americké komiksové postavičky Sirotka Aničky, která měla kreslené oči bez panenek) jsou diagnostickým znakem papilárního karcinomu. Optická prázdnota jader je způsobena překrýváním jaderné membrány a distribucí chromatinu."
      },
      {
        question: "Z jakých buněk štítné žlázy vychází medulární karcinom a jakou specifickou látku tyto buňky a nádor produkují?",
        options: [
          "Z folikulárních buněk; produkuje tyroxin (T4)",
          "Z parafolikulárních C-buněk; produkuje kalcitonin (což se histologicky projevuje amyloidem ve stroma)",
          "Z lymfocytů; produkuje imunoglobuliny",
          "Z myoepitelu; produkuje hlen"
        ],
        correct: 1,
        explanation: "Medulární karcinom je neuroendokrinní tumor z parafolikulárních C-buněk, které fyziologicky produkují kalcitonin (snižuje hladinu vápníku). Nadbytek prokalcitoninu se sráží v mezibuněčném prostoru za vzniku specifického ovariálního stroma bohatého na amyloid."
      }
    ,
      {
        question: "Jak se nazývá nejčastější typ karcinomu štítné žlázy, mikroskopicky charakteristický jádry vzhledu 'Orphan Annie' (matné sklo)?",
        type: "type-in",
        correct: ["papilární karcinom", "papilární karcinom štítné žlázy"],
        explanation: "Papilární karcinom je nejčastější zhoubný nádor štítné žlázy, charakteristický prázdnými jádry ('Orphan Annie' eyes)."
      },
      {
        question: "Který karcinom štítné žlázy vychází z parafolikulárních C-buněk a produkuje calcitonin?",
        type: "type-in",
        correct: ["medulární karcinom", "medulární karcinom štítné žlázy"],
        explanation: "Medulární karcinom štítné žlázy vychází z neuroendokrinních C-buněk, produkuje calcitonin a často obsahuje amyloid ve stroma."
      }]
  },

  {
    id: "onco-38",
    title: "Nádory endokrinního systému (Mnohočetná endokrinní neoplazie - MEN)",
    section: "Endokrinní onkopatologie",
    category: "Onkologie",
    keywords: ["MEN", "hypofýza", "pankreas", "parathyreoidea", "medulární", "feochromocytom", "RET"],
    content: {
      definition: "Syndromy mnohočetné endokrinní neoplazie (MEN) jsou skupina autozomálně dominantně dědičných onemocnění charakterizovaných vznikem hyperplazií a nádorů (benigních i maligních) ve více endokrinních žlázách současně.",
      etiology: "1. **MEN 1** (Wermerův syndrom): mutace tumor supresorového genu MEN1 (kóduje protein menin) na 11. chromozomu. \n2. **MEN 2** (Sippleův syndrom): zárodečná mutace protoonkogenu **RET** (kóduje receptorovou tyrosinkinázu) na 10. chromozomu.",
      pathogenesis: "Mutace predisponují k proliferaci endokrinních buněk. \n- **MEN 1 (pravidlo tří P)**: \n  1. **P**arathyroid (hyperplazie příštitných tělísek -> hyperparatyreóza), \n  2. **P**ancreas (NETy slinivky - gastrinom vyvolávající Zollinger-Ellisonův syndrom, inzulinom), \n  3. **P**ituitary (adenomy hypofýzy - prolaktinom). \n- **MEN 2A**: \n  1. Medulární karcinom štítné žlázy (MTC - u 100 % pacientů), \n  2. Feochromocytom nadledvin, \n  3. Hyperplazie příštitných tělísek. \n- **MEN 2B**: \n  1. Medulární karcinom štítné žlázy, \n  2. Feochromocytom, \n  3. Slizniční neuromové uzlíky (rty, jazyk) a marfanoidní habitus (štíhlá postava, dlouhé prsty).",
      macroscopy: "Mnohočetné uzly v postižených žlázách (např. hyperplazie všech 4 příštitných tělísek, oboustranné feochromocytomy nadledvin). Slizniční neuromy se projevují jako drobné tuhé uzlíky na rtech a jazyku.",
      microscopy: "Mikroskopicky se setkáváme s přechodem od difuzní hyperplazie přes uzlovou hyperplazii až k ložiskům adenomů a karcinomů. U medulárního karcinomu štítné žlázy v rámci MEN nacházíme histologický nález C-buněčné hyperplazie v okolním parenchymu (což nesvědčí pro sporadický typ).",
      clinical: "U rodin s prokázanou mutací genu RET (MEN 2) se provádí **preventivní tyroidektomie** (odstranění štítné žlázy) již v dětském věku, protože rozvoj agresivního medulárního karcinomu je nevyhnutelný."
    },
    quiz: [
      {
        question: "Které tři endokrinní orgány jsou postiženy u syndromu MEN 1 (Wermerova syndromu neboli pravidla tří 'P')?",
        options: [
          "Plíce, prostata, pankreas",
          "Příštitná tělíska (Parathyroid), slinivka (Pancreas) a podvěsek mozkový (Pituitary)",
          "Prs, pleura, perikard",
          "Pokožka, plíce, pohrudnice"
        ],
        correct: 1,
        explanation: "MEN 1 postihuje příštitná tělíska (způsobuje hyperkalcémii), endokrinní slinivku (např. gastrinomy tvořící vředy v žaludku) a adenohypofýzu (prolaktinomy). Pomůckou pro zapamatování je pravidlo 3P."
      },
      {
        question: "U pacientů s mutací kterého protoonkogenu se provádí preventivní odstranění štítné žlázy již v dětství z důvodu extrémního rizika vzniku medulárního karcinomu v rámci syndromu MEN 2?",
        options: [
          "Mutace genu APC",
          "Mutace protoonkogenu RET",
          "Mutace genu BRCA1",
          "Mutace genu TP53"
        ],
        correct: 1,
        explanation: "Zárodečné mutace RET (receptorové tyrosinkinázy) způsobují trvalou aktivaci receptoru bez nutnosti vazby ligandu. To vede se 100% jistotou k rozvoji medulárního karcinomu štítné žlázy. Preventivní operace zachraňuje těmto pacientům život."
      }
    ,
      {
        question: "Který hormon je nadměrně produkován u gastrinomu, což vede k rozvoji těžkých peptických vředů (Zollinger-Ellisonův syndrom)?",
        type: "type-in",
        correct: ["gastrin"],
        explanation: "Gastrin produkovaný gastrinomem masivně stimuluje sekreci HCl v žaludku, což vede k tvorbě mnohočetných těžkých vředů."
      },
      {
        question: "Která zkratka označuje syndrom mnohočetné endokrinní neoplazie?",
        type: "type-in",
        correct: ["MEN"],
        explanation: "MEN (Multiple Endocrine Neoplasia) sdružuje familiární syndromy (MEN 1, MEN 2A/B) s výskytem nádorů různých endokrinních žláz."
      }]
  },

  {
    id: "onco-39",
    title: "Nádory kůže (mimo melanom)",
    section: "Nádory kůže a melanom",
    category: "Onkologie",
    keywords: ["bazaliom", "spinaliom", "kůže", "keratóza", "perly", "palisádování", "ulcus"],
    content: {
      definition: "Nádory kůže jsou nejčastějšími lidskými nádory vůbec. Dělí se na benigní (seboroická keratóza, histiocytom) a maligní, z nichž nejčastější jsou bazocelulární karcinom (bazaliom) a dlaždicobuněčný karcinom (spinaliom).",
      etiology: "Chronické vystavení slunečnímu záření (UV záření), světlý fototyp (blond vlasy, modré oči, neschopnost opálení), expozice arsenu, chronické nehojící se rány.",
      pathogenesis: "1. **Bazocelulární karcinom** (bazaliom): nejčastější. Vychází z bazálních buněk epidermis. Roste lokálně destruktivně, ale **prakticky nikdy nemetastázuje** (semimaligní chování). Mutace v dráze Hedgehog (gen PTCH). \n2. **Dlaždicobuněčný karcinom** (spinaliom): vychází z keratinocytů stratum spinosum. Předchází mu prekanceróza **solární (aktinická) keratóza**. Roste invazivně a **může metastázovat** do lymfatických uzlin.",
      macroscopy: "Bazaliom: perleťový uzlík (nodulus) s drobnými rozšířenými cévkami (teleangiektáziemi) na povrchu, který se později uprostřed rozpadá a tvoří nehojící se vřed s lesklým lemem (**ulcus rodens**). Nejčastěji na obličeji. Spinaliom: tuhá, vyvýšená, šupinatá, často rohovějící nebo ulcerovaná plocha na místech vystavených slunci (uši, čelo, hřbety rukou).",
      microscopy: "Bazaliom: čepy a hnízda tmavých buněk s velkým jádrem připomínajících bazální buňky. Na okrajích hnízd jsou buňky seřazeny paralelně vedle sebe jako plot (**palisádování buněk** / peripheral palisading). Stroma vykazuje retrakční artefakty (odchlípnutí stroma od nádoru při fixaci). Spinaliom: atypické dlaždicové buňky, rohovění (keratinové perly), mezibuněčné můstky.",
      clinical: "Bazaliom se řeší prostým chirurgickým vyříznutím (excizí). Pokud se neléčí, může způsobit rozsáhlou destrukci obličeje (poničení nosu, očnice - ulcus rodens). Spinaliom vyžaduje důslednější excizi a sledování regionálních uzlin."
    },
    quiz: [
      {
        question: "Který mikroskopický znak na okrajích nádorových čepů je charakteristický pro bazaliom (bazocelulární karcinom) kůže?",
        options: [
          "Tvorba rakovinových perel",
          "Palisádování buněk (paralelní seřazení sloupcovitých buněk na periferii čepů) a retrakční artefakty",
          "Přítomnost Homer-Wrightových rozet",
          "Ukládání melaninu do vaziva"
        ],
        correct: 1,
        explanation: "Při okrajích hnízd bazaliomu se buňky orientují kolmo k hranici stroma, což pod mikroskopem vypadá jako řada kůlů v plotě (palisáda). Při zpracování se navíc vazivové stroma smrští více než nádorové čepy, což vytvoří charakteristické štěrbiny (retrakční zářezy)."
      },
      {
        question: "Jak se liší biologické chování bazaliomu od spinaliomu (dlaždicobuněčného karcinomu) kůže?",
        options: [
          "Bazaliom je benigní a spinaliom semimaligní",
          "Bazaliom roste lokálně destruktivně, ale téměř nikdy nemetastázuje; spinaliom roste rovněž destruktivně a má schopnost metastázovat (zejména lymfogenně do regionálních uzlin)",
          "Spinaliom nikdy neinvaduje do škáry (dermis)",
          "Bazaliom roste výhradně u dětí"
        ],
        correct: 1,
        explanation: "Bazaliom je učebnicovým příkladem semimalignity - ničí tkáně v místě růstu, ale nezakládá vzdálená ložiska. Spinaliom je plně maligní karcinom, který po proniknutí do dermis může vniknout do lymfatických cév a metastázovat."
      }
    ,
      {
        question: "Jak se nazývá nejčastější maligní nádor kůže (semimaligní, lokálně invazivní), který prakticky nemetastázuje?",
        type: "type-in",
        correct: ["bazaliom", "bazocelulární karcinom"],
        explanation: "Bazaliom (bazocelulární karcinom) roste lokálně invazivně a destruktivně (např. na obličeji), ale prakticky nikdy nemetastázuje."
      },
      {
        question: "Jak se nazývá zhoubný epiteliální nádor kůže vycházející z keratinocytů, který tvoří keratinové perly?",
        type: "type-in",
        correct: ["spinocelulární karcinom", "dlaždicobuněčný karcinom"],
        explanation: "Spinocelulární karcinom (dlaždicobuněčný karcinom kůže) vychází z epidermis a tvoří rohovějící keratinové čepy."
      }]
  },

  {
    id: "onco-40",
    title: "Melanom",
    section: "Nádory kůže a melanom",
    category: "Onkologie",
    keywords: ["melanom", "kůže", "melanocyty", "Breslow", "Clark", "S100", "ABCDE", "melanin"],
    content: {
      definition: "Maligní melanom je vysoce zhoubný nádor vycházející z melanocytů (pigmentových buněk kůže, oka či sliznic). Patří mezi nejagresivnější lidské nádory s extrémním metastatickým potenciálem.",
      etiology: "Akutní, intermitentní slunění vedoucí k spálení kůže (zejména v dětství), solária, vysoký počet mateřských znamének (atypických névů), rodinná anamnéza.",
      pathogenesis: "UV záření poškozuje DNA melanocytů. Časté jsou mutace v onkogenu **BRAF** (mutace V600E u cca 50 % kožních melanomů - cíl biologické léčby Vemurafenibem) nebo genu NRAS. Nádor roste nejprve horizontálně (radiální fáze růstu v epidermis - bez rizika metastáz) a následně vertikálně (prorůstá do škáry - dermis, kde získává přístup k cévám a metastázuje).",
      macroscopy: "Klinické hodnocení podle **pravidla ABCDE**: \n- **A** (Asymmetry): asymetrie tvaru, \n- **B** (Border): neostré, nepravidelné okraje, \n- **C** (Color): barevná pestrost (černá, hnědá, červená, bílá), \n- **D** (Diameter): průměr větší než 6 mm, \n- **E** (Evolution): vývoj, změna v čase (svědění, krvácení, růst).",
      microscopy: "Atypické, velké melanocyty s hyperchromními jádry a nápadnými eozinofilními jadérky. Mohou obsahovat hnědý pigment melanin. Pro hodnocení prognózy je nejdůležitější **tloušťka nádoru podle Breslowa** (měří se v milimetrech od stratum granulosum po nejhlubší nádorovou buňku). Clarkova klasifikace hodnotí zásah do anatomických vrstev kůže (I–V). Imunohistochemie: pozitivita **S100, HMB-45, Melan-A**.",
      clinical: "Melanom velmi časně a nepředvídatelně metastázuje lymfogenně (regionální uzliny) i hematogenně (plíce, játra, mozek, kůže). Léčba: radikální chirurgická excize s bezpečnostním lemem kůže a biopsie sentinelové uzliny. U pokročilých se užívá imunoterapie (checkpoint inhibitory - pembrolizumab) a cílená léčba (BRAF inhibitory)."
    },
    quiz: [
      {
        question: "Co je to klasifikace podle Breslowa u maligního melanomu a proč je klinicky tak důležitá?",
        options: [
          "Hodnocení počtu mitóz v lymfatických uzlinách",
          "Měření tloušťky (hloubky) invaze melanomu v milimetrech od stratum granulosum po nejhlubší bod infiltrace; je to nejdůležitější prognostický faktor určující riziko metastáz a šíři chirurgického lemu",
          "Hodnocení barvy melanomu na stupnici 1 až 10",
          "Měření průměru skvrny pravítkem"
        ],
        correct: 1,
        explanation: "Breslowova tloušťka přímo koreluje s přežitím pacienta. Melanomy s tloušťkou pod 0.8 mm (tenké) mají vynikající prognózu, zatímco melanomy s tloušťkou nad 4 mm (tlusté) mají vysoké riziko mikrometastáz v těle a vyžadují agresivní léčbu."
      },
      {
        question: "Která genová mutace (přítomná u cca 50 % kožních melanomů) je hlavním cílem moderní cílené léčby Vemurafenibem?",
        options: [
          "Mutace genu APC",
          "Mutace genu BRAF (konkrétně V600E)",
          "Mutace fúzního genu BCR-ABL",
          "Mutace genu BRCA1"
        ],
        correct: 1,
        explanation: "Mutace BRAF V600E vede k trvalé aktivaci MAPkinázové dráhy, která stimuluje růst a dělení melanocytů bez vnějších signálů. Specifické BRAF inhibitory (např. vemurafenib, dabrafenib) tuto dráhu blokují a dokážou rychle zmenšit i pokročilé metastatické melanomy."
      }
    ,
      {
        question: "Která zkratka (pravidlo ABCDE) reprezentuje nepravidelnost okrajů u maligního melanomu?",
        type: "type-in",
        correct: ["B", "border"],
        explanation: "Písmeno B v pravidle ABCDE označuje 'Border' (okraj), který je u maligního melanomu typicky nepravidelný nebo vroubkovaný."
      },
      {
        question: "Který kožní pigment (produkovaný melanocyty) je přítomen v buňkách melanomu a barví ho do černa či hněda?",
        type: "type-in",
        correct: ["melanin"],
        explanation: "Melanin je přirozený kožní pigment. Jeho nadměrná produkce atypickými melanocyty dodává melanomu jeho tmavé zbarvení."
      }]
  },

  {
    id: "onco-41",
    title: "Nádory periferních nervů",
    section: "Nádory nervového systému",
    category: "Onkologie",
    keywords: ["schwannom", "neurofibrom", "MPNST", "Antoni", "Verocay", "tělíska", "S100", "Recklinghausen"],
    content: {
      definition: "Nádory periferních nervů vycházejí z buněk pochvy nervu (Schwannových buněk, fibroblastů, perineurálních buněk). Patří sem benigní schwannom a neurofibrom a maligní MPNST (maligní nádor z pochvy periferního nervu).",
      etiology: "Většina je sporadická. Neurofibromy jsou silně asociovány s **Neurofibromatózou typu 1** (von Recklinghausenova choroba - mutace genu NF1). Schwannomy s **Neurofibromatózou typu 2** (mutace NF2).",
      pathogenesis: "1. **Schwannom** (neurilemomy): benigní, opouzdřený nádor tvořený čistě Schwannovými buňkami. Nerv neprostupuje středem nádoru, ale je odsunut k jeho okraji. \n2. **Neurofibrom**: neopouzdřený, tvořený směsí buněk (Schwannovy b., fibroblasty, perineurální b.). Nerv probíhá přímo **středem nádoru** (nervová vlákna jsou infiltrována). \n3. **MPNST**: vysoce maligní vřetenobuněčný sarkom, vzniká často maligním zvratem z plexiformního neurofibromu u NF1.",
      macroscopy: "Schwannom: solitární, tuhý, opouzdřený, na řezu šedobílý s cystickými a žlutavými ložisky, přisedlý k nervu. Neurofibrom: měkké kožní uzly (neurofibromatóza se projevuje stovkami takových uzlů po těle) nebo plexiformní typ (vypadá jako 'pytel červů' infiltrující nervové pleteně).",
      microscopy: "Schwannom: typický bifázický obraz: \n- *Antoni A*: vysoce buněčné oblasti, protáhlé buňky tvoří paralelní řady jader oddělené růžovými zónami bez jader (**Verocayova tělíska**). \n- *Antoni B*: chudobuněčné, myxoidní, prosáklé oblasti. \nNeurofibrom: buňky s vlnovitými jádry rozptýlené v kolagenním stroma (vzhled **vlnitého vlasu**). Obě benigní formy jsou **S100 pozitivní**.",
      clinical: "Schwannom roste excentricky, lze ho chirurgicky odstranit z nervu bez poškození jeho funkce. Neurofibrom nelze z nervu vyříznout bez porušení nervových vláken, často vyžaduje resekci celého nervového segmentu. Akustický schwannom (vestibulární schwannom) postihuje VIII. hlavový nerv a způsobuje hluchotu (bilaterální výskyt je patognomický pro NF2)."
    },
    quiz: [
      {
        question: "Co jsou to Verocayova tělíska a u kterého nádoru pochvy periferního nervu jsou typickým mikroskopickým nálezem?",
        options: [
          "Rohovatějící struktury u dlaždicového karcinomu",
          "Palisádovitě uspořádaná jádra buněk oddělená bezbuněčnými eozinofilními (růžovými) zónami v oblasti Antoni A u schwannomu",
          "Krystaly cholesterolu v cévách",
          "Ložiska vápníku v mozku"
        ],
        correct: 1,
        explanation: "Verocayova tělíska jsou tvořena paralelně seřazenými jádry Schwannových buněk, které se střídají s růžovými proužky tvořenými výběžky těchto buněk. Tento obraz se nachází v hustých buněčných oblastech (Antoni A) schwannomu."
      },
      {
        question: "Jak se liší schwannom od neurofibromu z hlediska vztahu k postiženému nervu a možností chirurgické léčby?",
        options: [
          "Schwannom nelze z nervu odstranit; neurofibrom ano",
          "Schwannom roste excentricky (nerv je odsunut k okraji a lze ho z nervu chirurgicky vyloupnout bez jeho poškození); neurofibrom infiltruje nervová vlákna probíhající středem nádoru a jeho odstranění vyžaduje resekci celého nervu",
          "Neliší se, oba rostou v kostech",
          "Neurofibrom se vyskytuje výhradně v mozku"
        ],
        correct: 1,
        explanation: "Schwannom je opouzdřený uzel přisedlý k boku nervu, takže chirurg může opatrně otevřít epineurium a uzel vyloupnout (enukleovat). Neurofibrom je difuzní proces prolínající se s nervovými vlákny, jeho vyříznutí znamená trvalé přerušení nervové dráhy."
      }
    ,
      {
        question: "Jak se nazývá benigní nádor ze Schwannových buněk, který je mikroskopicky charakterizován zónami Antoni A a Antoni B?",
        type: "type-in",
        correct: ["schwannom", "neurilemom"],
        explanation: "Schwannom (neurilemom) je benigní, opouzdřený nádor periferního nervu složený čistě ze Schwannových buněk."
      },
      {
        question: "Jak se nazývají seřazená jádra Schwannových buněk v zónách Antoni A u schwannomu?",
        type: "type-in",
        correct: ["Verocayova tělíska", "Verocayovy řady"],
        explanation: "Verocayova tělíska představují palisádovité seřazení jader Schwannových buněk oddělených buněčnými výběžky v zónách Antoni A."
      }]
  },

  {
    id: "onco-42",
    title: "Nádory mozku a mozkových obalů",
    section: "Nádory nervového systému",
    category: "Onkologie",
    keywords: ["meningiom", "mozek", "metastázy", "pseudotumor", "psamomata", "syndrom", "ICP"],
    content: {
      definition: "Nádory centrálního nervového systému (CNS) tvoří specifickou skupinu. Primární nádory mozku metastázují mimo CNS jen zcela výjimečně, ale i biologicky benigní nádor může pacienta usmrtit lokálním tlakem v uzavřené lebce.",
      etiology: "Záření na hlavu, genetické syndromy (NF1, NF2, tuberózní skleróza, Li-Fraumeni). Metastázy (mnohonásobně častější než primární): nejčastěji z karcinomu plic, prsu, ledvin a melanomu.",
      pathogenesis: "1. **Meningiomy** (30 % primárních): benigní nádory z buněk arachnoidey (mozkových obalů). Rostou pomalu, utlačují mozek zvenčí (neinvadují do mozkového parenchymu). \n2. **Gliomy**: rostou uvnitř mozku (infiltrativně). \n3. **Meduloblastom**: agresivní dětský nádor mozečku. \n4. **Metastázy**: šíří se hematogenně, bývají lokalizovány na rozhraní šedé a bílé hmoty.",
      macroscopy: "Meningiom: tuhý, kulatý, šedavý uzel přirostlý k dura mater, který vtiskuje důlek do mozkové kůry (tlačí ji před sebou). Metastázy: mnohočetné, ohraničené, často prokrvácené a nekrotické uzly obklopené výrazným **mozkovým edémem** (otokem).",
      microscopy: "Meningiom: buňky uspořádané do vírů (koncentrických cibulovitých struktur), přítomnost četných **psamomatózních tělísek** (zvápenatělých kuliček). Nádorové buňky vykazují pozitivitu v receptoru pro progesteron (PR) a EMA.",
      clinical: "Příznaky vyplývají ze zvýšeného **intrakraniálního tlaku** (ICP - syndrom nitrolební hypertenze): ranní bolesti hlavy, zvracení bez předchozí nevolnosti, edém papily očního nervu. Dalším projevem jsou epileptické záchvaty a ložiskové neurologické výpadky (parézy, poruchy řeči)."
    },
    quiz: [
      {
        question: "Proč může být meningiom, který je histologicky zcela benigní (Grade I podle WHO), pro pacienta život ohrožující?",
        options: [
          "Protože produkuje velké množství toxického melaninu",
          "Protože roste uvnitř pevné, neroztažitelné lebky (kalvy) a svým tlakem na okolní mozkovou tkáň způsobuje její ischemii, atrofii nebo nebezpečné herniace (vklínění) mozkového kmene",
          "Protože se šíří močí do ledvin",
          "Protože se po 2 dnech mění v osteosarkom"
        ],
        correct: 1,
        explanation: "Lebka je pevná kostěná schránka s fixním objemem. Každý nový prostor zabírající proces (i pomalu rostoucí benigní meningiom) zvyšuje nitrolební tlak. Tlak utlačuje zdravou mozkovou tkáň a cévy, což vede k neurologickým výpadkům a při kritickém tlaku k úmrtí z utlačení životně důležitých center v mozkovém kmeni."
      },
      {
        question: "Který histologický nález je klasickým diagnostickým klíčem pro meningiom?",
        options: [
          "Homer-Wrightovy rozety",
          "Koncentrické (cibulovité) víření vřetenovitých buněk arachnoidey a přítomnost psamomatózních tělísek (psamomatózní meningiom)",
          "Auerovy tyčinky v buňkách",
          "Dlaždicobuněčná metaplazie s rohověním"
        ],
        correct: 1,
        explanation: "Meningoteliální buňky mají přirozenou tendenci se k sobě těsně přimykat a obtáčet se. V nádoru to vytváří charakteristické mikroskopické víry. Hroty těchto vírů často podléhají hyalinizaci a kalcifikaci za vzniku psamomatózních tělísek."
      }
    ,
      {
        question: "Jak se nazývá nejčastější benigní nádor mozkových obalů, který roste pomalu a stlačuje mozkovou tkáň?",
        type: "type-in",
        correct: ["meningiom"],
        explanation: "Meningiom roste expanzivně z arachnoidálních buněk a stlačuje přilehlý mozek; je typický přítomností psamomatózních tělísek."
      },
      {
        question: "Které mikroskopické vrstvené vápenaté struktury (kuličky) typicky nacházíme v meningiomu?",
        type: "type-in",
        correct: ["psamomata", "psamomatózní tělíska"],
        explanation: "Psamomatózní tělíska (psamomata) jsou koncentricky vrstvené kalcifikované kuličky, které nacházíme v meningiomu a serózním karcinomu ovaria."
      }]
  },

  {
    id: "onco-43",
    title: "Gliomy",
    section: "Nádory nervového systému",
    category: "Onkologie",
    keywords: ["gliom", "astrocytom", "glioblastom", "multiformní", "motýl", "nekróza", "GFAP", "grade"],
    content: {
      definition: "Gliomy jsou primární nádory mozkového parenchymu vycházející z neuroglie (podpůrné tkáně CNS - astrocytů, oligodendrocytů, ependymu). Nejdůležitější a nejčastější jsou astrocytární gliomy.",
      etiology: "Většina je sporadická. Roli hrají mutace v genech IDH1/2 (důležité pro prognózu a klasifikaci) a inaktivace p53.",
      pathogenesis: "Astrocytární gliomy se dělí podle stupně malignity (WHO Grade I–IV): \n1. **Pilocystický astrocytom** (WHO Grade I): benigní, u dětí, dobře ohraničený. \n2. **Difuzní astrocytom** (WHO Grade II): infiltrativní, pomalý, ale časem progreduje do vyšších stupňů. \n3. **Anaplastický astrocytom** (WHO Grade III): agresivní, vysoká mitotická aktivita. \n4. **Glioblastom** (dříve glioblastoma multiforme, WHO Grade IV): nejčastější a nejvíce zhoubný primární tumor mozku u dospělých.",
      macroscopy: "Glioblastom: velká, neohraničená, pestrá masa uvnitř hemisféry. Obsahuje žlutavá ložiska nekróz, červené hemoragie a cysty. Často přechází přes corpus callosum do druhé hemisféry, což na řezu vytváří obraz **motýlovitého glioblastomu** (butterfly glioma).",
      microscopy: "Glioblastom se vyznačuje čtyřmi klíčovými histologickými znaky: 1. Těžký buněčný pleomorfismus, 2. Četné patologické mitózy, 3. Hadovité (serpentinní) **ložiskové nekrózy** lemované nádorovými buňkami (tzv. **pseudopalisádování** / pseudopalisading of tumor cells), 4. Výrazná **mikrovaskulární (či glomeruloidní) proliferace cévního endotelu** (nádor produkuje nadměrné množství VEGF, což nutí cévy tvořit zmnožená klubíčka připomínající ledvinné glomeruly). Nádorové buňky jsou silně pozitivní v markeru **GFAP** (glial fibrillary acidic protein).",

      clinical: "Glioblastom roste extrémně rychle (příznaky se rozvinou během týdnů). Má fatální prognózu; i přes chirurgickou resekci, radioterapii a chemoterapii (Temozolomid) většina pacientů umírá do 12–15 měsíců. Infiltrativní charakter znemožňuje kompletní chirurgické odstranění (buňky jsou rozptýleny hluboko v makroskopicky zdravém mozku)."
    },
    quiz: [
      {
        question: "Co je to 'pseudopalisádování' buněk a u kterého vysoce maligního mozkového nádoru ho nacházíme?",
        options: [
          "Uspořádání buněk u bazaliomu",
          "Nahromadění nádorových astrocytů na okrajích nepravidelných (hadovitých) ložisek nekrózy, kde buňky utíkají před hypoxií; typické pro glioblastom (WHO Grade IV)",
          "Uspořádání lymfocytů v Hodgkinově lymfomu",
          "Tvorba rozet u neuroblastomu"
        ],
        correct: 1,
        explanation: "U glioblastomu rostou buňky tak rychle, že cévy nestačí tkáň vyživovat, a vznikají nekrózy. Nádorové buňky se stahují pryč z oblasti odumírající tkáně (kde je nedostatek kyslíku) a řadí se těsně vedle sebe na rozhraní nekrózy a živé tkáně, což vytváří lem pseudopalisád."
      },
      {
        question: "Který specifický intermediární filamentární protein se používá jako imunohistochemický marker pro průkaz astrocytárního původu gliomů?",
        options: [
          "Cytokeratin",
          "GFAP (Glial Fibrillary Acidic Protein)",
          "Desmin",
          "Chromogranin"
        ],
        correct: 1,
        explanation: "GFAP je protein intermediárních filament specifický pro astrocyty a buňky ependymu. Jeho průkaz v biopsii potvrzuje, že anaplastický nádor mozku patří do skupiny astrocytomů/glioblastomů a nejedná se např. o metastázu karcinomu plic (která by byla GFAP-negativní a cytokeratin-pozitivní)."
      }
    ,
      {
        question: "Jak se nazývá nejčastější a extrémně maligní gliový nádor u dospělých (grade IV astrocytom)?",
        type: "type-in",
        correct: ["glioblastom", "glioblastoma multiforme"],
        explanation: "Glioblastom je nejagresivnější gliový nádor, charakteristický ložisky nekróz lemovaných palisádami nádorových buněk."
      },
      {
        question: "Který protein cytoskeletu je standardním IHC markerem pro buňky astroglie a gliové nádory?",
        type: "type-in",
        correct: ["GFAP"],
        explanation: "GFAP (Glial Fibrillary Acidic Protein) je intermediální filamentum typické pro astrocyty a gliové nádory (astrocytomy, glioblastom)."
      },
      {
        question: "Které dva patognomické mikroskopické znaky posouvají diagnózu astrocytomu na nejvyšší stupeň malignity - Glioblastom (WHO Grade IV)?",
        options: [
          "Přítomnost Rosenthalových vláken a eozinofilních granulárních tělísek",
          "Kalcitové sférokrystaly (psammomatozní tělíska) a whorly (víry) buněk",
          "Hadovité nekrózy lemované pseudopalisádami buněk a mikrovaskulární (glomeruloidní) proliferace cév",
          "Homer-Wrightovy rozety a masivní tvorba retikulinu"
        ],
        correct: 2,
        explanation: "Glioblastom roste rychleji, než jej stihnou cévy vyživovat. To vede ke vzniku hadovitých nekróz. Nádorové buňky utíkají před hypoxií a řadí se na okraj nekrózy do tzv. pseudopalisád. Zároveň nádor vylučuje extrémní množství VEGF, které stimuluje růst endotelu do bizarních, zbytnělých klubíček (mikrovaskulární/glomeruloidní proliferace)."
      }]
  },

  {
    id: "onco-44",
    title: "Metastatické nádory mozku",
    section: "Nádory nervového systému",
    category: "Onkologie",
    keywords: ["metastázy", "mozek", "plíce", "prs", "edém", "mnohočetné", "rozhraní"],
    content: {
      definition: "Metastatické nádory mozku jsou zhoubná ložiska v mozkovém parenchymu, která sem byla zanesena krví z jiného primárního ložiska v těle. Jsou nejčastějšími nádory mozku vůbec (převyšují primární nádory v poměru 10:1).",
      etiology: "Nejčastější primární zdroje: \n1. **Karcinom plic** (způsobuje 50 % mozkových metastáz), \n2. **Karcinom prsu** (15–20 %), \n3. **Maligní melanom kůže** (10 % - má nejvyšší relativní sklon metastázovat do mozku), \n4. **Karcinom ledviny** (RCC), \n5. Karcinomy trávicího traktu.",
      pathogenesis: "Nádorové buňky vnikají do krevního oběhu a embolizují do drobných mozkových kapilár. Nejčastěji se zachycují v místech, kde se zpomaluje průtok a mění se cévní větvení - na **rozhraní šedé a bílé hmoty** a v mozečku. Růst metastáz poškozuje hematoencefalickou bariéru, což vede k masivnímu úniku tekutiny do okolí a vzniku edému.",
      macroscopy: "Typicky **mnohočetná**, ostře ohraničená, kulatá ložiska. Na řezu jsou šedobílá, často s centrální nekrózou (měkký, kašovitý střed) a prokrvácením (zejména u metastáz melanomu - ložiska jsou černá, a ledviny - červená). Okolní mozková tkáň je vlhká, lesklá a žlutavá (výrazný kolaterální edém).",
      microscopy: "Mikroskopicky jsou metastázy ostře ohraničené od okolního neuropilu (na rozdíl od primárních gliomů, které rostou difuzně a neznatelně splývají s mozkem). Histologický vzhled odpovídá primárnímu nádoru (např. žlázky u adenokarcinomu prsu, hnízda dlaždicových buněk u karcinomu plic).",
      clinical: "Projevují se rychle progredující nitrolební hypertenzí (bolesti hlavy, zvracení), ložiskovými defekty nebo psychiatickými změnami. Výrazný edém kolem metastáz se klinicky tlumí podáváním **vysokých dávek kortikosteroidů** (Dexamethasonu), které stabilizují hematoencefalickou bariéru."
    },
    quiz: [
      {
        question: "Který zhoubný nádor je nejčastějším zdrojem hematogenních metastáz do mozku?",
        options: [
          "Karcinom prostaty",
          "Karcinom plic",
          "Osteosarkom",
          "Karcinom děložního čípku"
        ],
        correct: 1,
        explanation: "Karcinom plic (zejména malobuněčný a adenokarcinom) velmi snadno invaduje do plicních žil. Krev z plic teče přímo do levého srdce a odtud aortou a karotidami do mozku, což plicním nádorům usnadňuje embolizaci do CNS."
      },
      {
        question: "Jak se liší histologické ohraničení metastázy v mozku od primárního difuzního astrocytomu?",
        options: [
          "Neliší se, oba jsou neohraničené",
          "Metastáza je mikroskopicky ostře ohraničená od okolní mozkové tkáně; difuzní astrocytom roste infiltrativně a plynule splývá s okolním neuropilem bez jasné hranice",
          "Metastázy rostou pouze uvnitř komor",
          "Astrocytom tvoří vždy vazivové pouzdro"
        ],
        correct: 1,
        explanation: "Toto je klíčový rozdíl pro patologa. Karcinomové metastázy jsou 'cizí' tkáň, která se do mozku dostala zvenčí, proto roste jako expandující uzel s ostrým okrajem. Gliomy jsou nádory z vlastních mozkových buněk, které se rozlézají podél zdravých myelinových vláken hluboko do okolí, takže nemají žádnou hranici."
      }
    ,
      {
        question: "Metastázy kterého kožního nádoru jsou v mozku typicky černé nebo hnědé?",
        type: "type-in",
        correct: ["melanom", "maligní melanom"],
        explanation: "Metastázy maligního melanomu si často uchovávají schopnost tvorby pigmentu, a proto se v mozku jeví jako tmavě hnědé či černé uzly."
      },
      {
        question: "Jak se označuje zóna otoku mozkové tkáně v okolí metastázy?",
        type: "type-in",
        correct: ["perifokální edém", "edém mozku", "edém"],
        explanation: "Rychle rostoucí metastáza vyvolává v okolní mozkové tkáni výraznou reakci a edém (perifokální edém), který zhoršuje neurologické příznaky."
      }]
  },

  {
    id: "onco-45",
    title: "Nádory kosti",
    section: "Epiteliální a mezenchymální nádory",
    category: "Onkologie",
    keywords: ["osteosarkom", "kost", "Ewing", "sarkom", "chondrosarkom", "osteoid", "Codman", "cibule"],
    content: {
      definition: "Nádory kostí se dělí na primární (velmi vzácné) a sekundární (metastázy karcinomů prsu, prostaty, plic - nejčastější). Primární zhoubné kostní nádory postihují převážně děti a mladé dospělé. Pro diagnózu osteosarkomu je absolutním předpokladem **přímá produkce atypického osteoidu (nezralé kostní matrix) maligními osteoblasty**.",

      etiology: "Osteosarkom: mutace genů RB1 (asociace s retinoblastomem), TP53 (Li-Fraumeni), Pagetova kostní choroba u starších. Ewingův sarkom: specifická chromozomální translokace t(11;22) vytvářející fúzní gen **EWS-FLI1**.",
      pathogenesis: "1. **Osteosarkom**: nejčastější primární maligní nádor kosti u mladých (10–20 let). Vzniká v metafýzách dlouhých kostí (kolem kolene - distální femur, proximální tibie). \n2. **Ewingův sarkom**: vysoce agresivní, u dětí do 15 let. Roste v diafýzách dlouhých kostí. \n3. **Chondrosarkom**: maligní nádor z chrupavky, u starších dospělých.",
      macroscopy: "Osteosarkom: velká, destruktivní masa v metafýze, která prorůstá kortikalis a nadzdvihuje periost (okostici). To na rentgenu vytváří **Codmanův trojúhelník** (úhel mezi nadzdvihnutým periostem a kostí) a obraz **slunečních paprsků** (spikuly kosti). Ewingův sarkom: destruuje dřeňovou dutinu, periost reaguje tvorbou koncentrických vrstev kosti připomínajících **slupky cibule**.",
      microscopy: "Osteosarkom: anaplastické vřetenovité mezenchymální buňky vykazující těžký pleomorfismus a bizarní mitózy. Zcela diagnostickým kritériem je, že tyto buňky **přímo produkují atypický osteoid** (nezralou kostní matrix - růžová homogenní hmota odkládaná jako krajkovitá síť mezi nádorovými buňkami). Ewingův sarkom: drobnokulatobuněčný modrý nádor (small round blue cell tumor), buňky jsou bohaté na glykogen (PAS pozitivní).",

      clinical: "Projevují se bolestí kosti (často mylně připisovanou růstu nebo úrazu při sportu) a zduřením. Typické jsou patologické zlomeniny při minimálním násilí. Osteosarkom a Ewingův sarkom metastázují velmi časně hematogenně do plic. Léčba vyžaduje předoperační (neoadjuvantní) chemoterapii a radikální chirurgický výkon (resekce kosti se zachováním končetiny - náhradou endoprotézou)."
    },
    quiz: [
      {
        question: "Který histologický nález je nezbytnou podmínkou pro diagnózu osteosarkomu?",
        options: [
          "Přítomnost zralé hyalinní chrupavky",
          "Přímá produkce osteoidu (nezralé kostní matrix) anaplastickými nádorovými buňkami",
          "Přítomnost Pautrierových mikroabscesů",
          "Tvorba žlázových struktur produkujících hlen"
        ],
        correct: 1,
        explanation: "Osteoid je růžová proteinová hmota, která se později mineralizuje na kost. Pouze osteosarkomové buňky mají schopnost tvořit osteoid samy (osteogeneze). Nález atypického osteoidu obklopeného bizarními maligními buňkami je pro diagnózu rozhodující."
      },
      {
        question: "Co je to Codmanův trojúhelník a u kterého kostního nádoru se s ním typicky setkáváme na rentgenu?",
        options: [
          "Zlomenina kyčelního kloubu",
          "Stín na RTG plic",
          "Rentgenový obraz vzniklý nadzdvihnutím periostu (okostice) rychle rostoucím nádorem, kdy se periost v místě odchlípení snaží tvořit novou kost, typický pro osteosarkom",
          "Tvar nádoru na lebce"
        ],
        correct: 2,
        explanation: "Rychle rostoucí osteosarkom prorazí kortikální kost a tlačí na periost, který se odchlipuje od kosti. Na okrajích tohoto odchlípení periost reaguje novotvorbou kosti, což na RTG snímku vytváří charakteristický trojúhelníkový stín (Codmanův úhel/trojúhelník)."
      }
    ,
      {
        question: "Který nejčastější primární maligní nádor kosti u mladých lidí (v metafýze dlouhých kostí) přímo produkuje osteoid?",
        type: "type-in",
        correct: ["osteosarkom"],
        explanation: "Osteosarkom je maligní nádor kosti u dospívajících, jehož diagnostickým kritériem je přímá tvorba osteoidu nádorovými buňkami."
      },
      {
        question: "Který vysoce maligní dětský kostní nádor (v diafýze) je spojen s translokací t(11;22) a obrazem cibulových slupek?",
        type: "type-in",
        correct: ["Ewingův sarkom"],
        explanation: "Ewingův sarkom je drobnokulatobuněčný nádor diafýzy kostí, charakteristický periostální reakcí připomínající slupky cibule."
      },
      {
        question: "Co je definitivním a absolutně nezbytným histologickým kritériem pro to, aby mohl patolog diagnostikovat nádor jako osteosarkom (a odlišit ho tak například od fibrosarkomu rostoucího v kosti)?",
        options: [
          "Přítomnost vícejaderných obrovských buněk typu osteoklastů",
          "Přímá produkce atypického osteoidu (nezralé kostní matrix) samotnými maligními nádorovými buňkami",
          "Nález Codmanova trojúhelníku na rentgenu",
          "Záplava malých kulatých modrých buněk s vysokým obsahem glykogenu"
        ],
        correct: 1,
        explanation: "Klíčovým diagnostickým znakem osteosarkomu je, že samotné anaplastické nádorové buňky mají částečně zachovanou osteoblastickou diferenciaci a jsou schopny přímo (bez preexistující chrupavky) tvořit novou nezralou kostní hmotu (osteoid). Pokud patolog v mikroskopu nevidí nádorovými buňkami tvořený osteoid, nemůže diagnózu osteosarkomu stanovit."
      }]
  }
];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_ONCO_2 = DATA_ONCO_2;
}
