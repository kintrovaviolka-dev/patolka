// data_special_1.js - Speciální patologie (témata 1 - 25)
const DATA_SPECIAL_1 = [
  {
    id: "spec-1",
    title: "Hypertenze",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["hypertenze", "arteriolo-skleróza", "hyalinní", "hyperplastická", "nefroskleróza", "apoplexie"],
    content: {
      definition: "Arteriální hypertenze je definována jako opakované zvýšení systémového krevního tlaku na hodnoty 140/90 mmHg a vyšší. Dělí se na esenciální (primární, 90–95 %) a sekundární (symptomatickou, 5–10 %).",
      etiology: "Esenciální: polygenní dědičnost, nadbytečný příjem soli, obezita, stres, kouření. Sekundární: renální (renoparenchymová - glomerulonefritidy; renovaskulární - stenóza a. renalis), endokrinní (Connův, Cushingův syndrom, feochromocytom) nebo koarktace aorty.",
      pathogenesis: "Dlouhodobé zvýšení tlaku poškozuje cévy a zvyšuje zátěž na levé srdce. Urychluje aterosklerózu ve velkých tepnách a vyvolává specifické změny v malých tepnách (arteriolách) - dochází k endoteliální dysfunkci a průniku plazmatických proteinů do stěny cév.",
      macroscopy: "Srdce: hypertrofie levé komory (hmotnost srdce stoupá nad 400g, tloušťka stěny nad 15mm), stěna je tuhá. Ledviny (u chronické benigní hypertenze): symetricky zmenšené, tuhé, s jemně zrnitým povrchem (arteriolosklerotická nefroskleróza). Mozek: přítomnost drobných krvácení nebo lakunárních infarktů.",
      microscopy: "1. Benigní hypertenze: hyalinní arterioloskleróza - stěna arteriol je ztluštělá, homogenní, růžová (eozinofilní) s obliterací lumen. V glomerultech ledvin vidíme sklerotizaci. 2. Maligní hypertenze: hyperplastická arterioloskleróza - koncentrické, cibulovité uspořádání buněk hladké svaloviny a zbytnělé intimy, a fibrinoidní nekróza stěny arteriol s infiltrací neutrofily.",
      clinical: "Klinické komplikace: srdeční selhání (přechod z kompenzované hypertrofie do dilatace), ischemická CMP, krvácení do mozku (apoplexie z ruptury Charcot-Bouchardových aneurysmat), chronické selhání ledvin (uremie) a disekce aorty."
    },
    quiz: [
      {
        question: "Jak se mikroskopicky projevuje poškození arteriol u maligní hypertenze?",
        options: [
          "Ukládáním amyloidu do medie cév",
          "Hyperplastickou arteriolosklerózou (cibulovité uspořádání stěny) a fibrinoidní nekrózou cévní stěny",
          "Pouhou dilatací cév a chyběním buněk stěny",
          "Zmnožením elastických vláken bez zúžení lumen"
        ],
        correct: 1,
        explanation: "Maligní hypertenze (tkáňově destruktivní forma) vyvolává těžké poškození malých cév. Typickým nálezem je cibulovité ztluštění intimy (hyperplastická arterioloskleróza) a nekróza cévní stěny s depozity fibrinu (fibrinoidní nekróza), což vede k rychlé ischemii cílových orgánů."
      },
      {
        question: "Jak vypadají ledviny u pacienta s dlouhodobou benigní arteriální hypertenzí?",
        options: [
          "Jsou masivně zvětšené, sytě červené a měkké",
          "Jsou symetricky zmenšené, tuhé, s jemně zrnitým šedočerveným povrchem",
          "Obsahují velké množství hnisavých abscesů",
          "Jsou přeměněny na shluk velkých tenkostěnných cyst"
        ],
        correct: 1,
        explanation: "Benigní hypertenze vede k chronické ischemii glomerulů v důsledku hyalinní arteriolosklerózy. Glomeruly atrofují a zanikají, což se makroskopicky projeví zmenšením ledvin (nefroskleróza), ztuhnutím a typickým jemně zrnitým povrchem (jizvičky po zaniklých glomerulech)."
      }
    ]
  },
  {
    id: "spec-2",
    title: "Ateroskleróza (etiologie, patogeneze, manifestace)",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["ateroskleróza", "atheroma", "LDL", "pěnové", "ruptura", "trombus", "fibrous"],
    content: {
      definition: "Ateroskleróza je chronické zánětlivé a degenerativní onemocnění postihující elastické a velké či střední svalové tepny, charakterizované tvorbou aterosklerotických plátů v intimě.",
      etiology: "Neovlivnitelné faktory: věk, pohlaví (muži náchylnější), genetická predispozice. Ovlivnitelné faktory: hyperlipidémie (vysoké LDL, nízké HDL), arteriální hypertenze, kouření, diabetes mellitus, obezita.",
      pathogenesis: "Hypotéza 'odpovědi na poškození': 1. Chronické poškození endotelu (hypertenzí, toxiny). 2. Průnik a akumulace lipidů (LDL) do intimy, kde oxidují (oxLDL). 3. Adheze monocytů a jejich migrace do intimy, kde se mění v makrofágy a fagocytují oxLDL za vzniku pěnových buněk (foam cells). 4. Proliferace hladkých svalových buněk a migrace do intimy, kde tvoří vazivovou čepičku (fibrous cap) nad lipidovým jádrem.",
      macroscopy: "Zpočátku tukové proužky (fatty streaks - žlutavé skvrny na intimě aorty). Později stabilní vazivové pláty (bělavé, vyvýšené) a nestabilní ateromové pláty (s kašovitým žlutým lipidovým jádrem). V pokročilém stadiu kalcifikované pláty, ulcerované pláty s nasedající trombózou.",
      microscopy: "Plát obsahuje: a) Fibromuskulární čepičku (kolagen, hladké svalové buňky), b) Buněčnou zónu (makrofágy, lymfocyty, pěnové buňky), c) Nekrotické centrum (kašovitá hmota z lipidů, krystalů cholesterolu - jehlicovité prázdné prostory, buněčného detritu a kalcifikací). Na okrajích plátu dochází k neovaskularizaci.",
      clinical: "Manifestace: 1. Akutní (ruptura či eroze plátu s okamžitou trombózou): infarkt myokardu, ischemická CMP. 2. Chronická (postupné zužování průsvitu): angina pectoris, ischemická choroba dolních končetin (klaudikace, gangréna). Oslabením medie pod plátem hrozí vznik aneurysmatu."
    },
    quiz: [
      {
        question: "Co jsou to pěnové buňky (foam cells) v aterosklerotickém plátu?",
        options: [
          "Buňky vylučující hlen na povrch plátu",
          "Makrofágy a buňky hladké svaloviny, které v intimě naakumulovaly velké množství oxidovaných lipidů (cholesterolu)",
          "Nádorové buňky z endotelu",
          "Odumřelé neutrofily tvořící hnis"
        ],
        correct: 1,
        explanation: "Pěnové buňky vznikají, když monocyty/makrofágy vstoupí do intimy a nekontrolovaně fagocytují oxidované LDL částice přes scavengerové receptory. Jejich cytoplasma se přeplní lipidovými vakuolami, což jim pod mikroskopem dává charakteristický pěnovitý vzhled."
      },
      {
        question: "Která komplikace aterosklerotického plátu vede bezprostředně k akutnímu infarktu myokardu?",
        options: [
          "Pomalá kalcifikace plátu",
          "Ruptura nebo eroze plátu s následnou aktivací hemostázy a vznikem okluzivního trombu",
          "Atrofie vazivové čepičky bez vzniku trombu",
          "Ukládání amyloidu do plátu"
        ],
        correct: 1,
        explanation: "Stabilní plát způsobuje chronické zúžení tepny (např. angina pectoris). Akutní koronární syndrom (infarkt) vzniká tehdy, když praskne (ruptura) oslabená vazivová čepička nestabilního plátu. Obnažený kolagen a lipidové jádro spustí adhezi destiček a koagulaci, což během minut ucpe tepnu trombem."
      }
    ]
  },
  {
    id: "spec-3",
    title: "Aneurysmata",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["aneurysma", "disekce", "aorta", "luetické", "břišní", "marfan", "syfilis"],
    content: {
      definition: "Aneurysma je patologická, lokalizovaná dilatace (rozšíření) cévy nebo srdeční stěny. Dělí se na pravé (stěna je tvořena všemi třemi vrstvami cévní stěny) a nepravé / pseudoaneurysma (hematom ohraničený okolním vazivem po ruptuře cévy).",
      etiology: "Ateroskleróza (nejčastěji u aneurysmatu břišní aorty), hypertenze, vrozené vady (deficit kolagenu u Marfanova či Ehlers-Danlosova syndromu), syfilis (luetické aneurysma hrudní aorty), mykotické (infekční) aneurysma.",
      pathogenesis: "Základním mechanismem je oslabení a degenerace medie (střední vrstvy cévní stěny). U aterosklerózy plát brání výživě medie z lumen (difúzí) a utlačuje ji. U syfilis dochází k zánětu vasa vasorum (cév vyživujících stěnu aorty) s jejich obliterací, což vede k ischemii a jizvení medie hrudní aorty. U Marfanova syndromu vzniká cystická medionekróza.",
      macroscopy: "1. Aneurysma břišní aorty (AAA): nejčastěji pod odstupem renálních tepen, vakovité nebo vřetenovité, často vyplněné vrstveným nástěnným trombem. 2. Disekce aorty (nepravé aneurysma): trhlina v intimě (nejčastěji v ascenzní aortě) umožní krvi proniknout do medie a rozštěpit stěnu aorty na dva kanály.",
      microscopy: "Mikroskopicky prokazujeme ztrátu a fragmentaci elastických vláken v medii (barvení na elastiku), úbytek hladkých svalových buněk a jejich náhradu vazivem nebo hlenovitou matrix (cystická medionekróza). U disekce nacházíme krevní výron štěpící vrstvy medie.",
      clinical: "Rizika aneurysmat: 1. Ruptura s fatálním vnitřním krvácením (hemoperitoneum u AAA, srdeční tamponáda u disekce ascenzní aorty). 2. Embolizace úlomků trombu z aneurysmatu do periferie. 3. Útlak okolních struktur (eroze obratlů, útlak jícnu)."
    },
    quiz: [
      {
        question: "Co je to disekce aorty?",
        options: [
          "Chirurgické odstranění aorty při pitvě",
          "Podélné rozštěpení stěny aorty krví, která vnikla trhlinou v intimě do medie a vytvořila falešný krevní kanál",
          "Zánět aorty vyvolaný plísněmi",
          "Vrozené chybění aorty"
        ],
        correct: 1,
        explanation: "Disekce aorty (často nesprávně označovaná jako 'ruptura aneurysmatu') vzniká tehdy, když krev pod vysokým tlakem (často u hypertoniků) pronikne trhlinou v intimě do medie. Krev se šíří podél aorty a štěpí medii na vnitřní a vnější vrstvu, což hrozí protržením ven (rupturou) nebo ucpáním větví aorty."
      },
      {
        question: "Pro které onemocnění je typický vznik aneurysmatu hrudní aorty v důsledku obliterujícího zánětu vasa vasorum?",
        options: [
          "Diabetes mellitus",
          "Terciární syfilis (lues)",
          "TBC",
          "Marfanův syndrom"
        ],
        correct: 1,
        explanation: "Terciární syfilis má predilekci pro hrudní aortu (luetická aortitida). Treponemy vyvolávají zánět kolem drobných vyživujících cév aorty (vasa vasorum), což vede k jejich ucpání (endarteritis obliterans). Výsledkem je ischemie medie aorty, ztráta její elasticity a vznik velkého aneurysmatu hrudní aorty."
      }
    ]
  },
  {
    id: "spec-4",
    title: "Vaskulitidy",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["vaskulitida", "obří", "Takayasu", "PAN", "Kawasaki", "Wegener", "ANCA"],
    content: {
      definition: "Vaskulitidy jsou skupina zánětlivých onemocnění cévní stěny, která mohou vést k poškození endotelu, trombóze, zúžení lumen (ischemii) nebo naopak k oslabení stěny a vzniku aneurysmat.",
      etiology: "Většina je autoimunitní povahy (imunokomplexy, ANCA protilátky, buněčná imunita). Výjimečně infekční (přímá invaze mikrobů do cévní stěny).",
      pathogenesis: "Dělení podle kalibru postižených cév: 1. Velké cévy: Obřízobuněčná (temporální) arteritida (postihuje a. temporalis u starších lidí); Takayasuova arteritida ('bezpulsová nemoc' mladých žen, postihuje oblouk aorty). 2. Střední cévy: Polyarteritis nodosa (PAN - nekrotizující zánět cév, asociace s hepatitidou B); Kawasakiho choroba (u dětí, postihuje koronární tepny). 3. Malé cévy: Granulomatóza s polyangiitidou (Wegenerova - nekrotizující granulomy v dýchacích cestách a ledvinách, asociace s c-ANCA/PR3-ANCA); Mikroskopická polyangiitida (asociace s p-ANCA/MPO-ANCA).",
      macroscopy: "Temporální arteritida: a. temporalis je zbytnělá, tuhá, bolestivá, hmatná jako pevný provazec. Polyarteritis nodosa: uzlovité ztluštění podél středních tepen (vícečetná drobná aneurysmata střídaná se stenózami). Wegenerova g.: ulcerace nosní přepážky (sedlovitý nos), ložiska nekrózy v plicích.",
      microscopy: "Obřízobuněčná a Takayasuova a.: granulomatózní zánět v medii cévní stěny s fragmentací elastiky a přítomností obřích mnohojaderných buněk. Polyarteritis nodosa: transmurální fibrinoidní nekróza stěny cév, infiltrát z neutrofilů a eosinofilů. Wegenerova g.: nekrotizující granulomy, vaskulitida malých cév, v ledvinách srpková glomerulonefritida.",
      clinical: "Temporální arteritida se projevuje bolestmi hlavy a hrozí náhlou slepotou při ucpání a. ophthalmica. Kawasakiho choroba u dětí vyžaduje léčbu imunoglobuliny, protože bez ní vznikají aneurysmata koronárních tepen s rizikem infarktu."
    },
    quiz: [
      {
        question: "Která vaskulitida postihuje typicky koronární tepny u malých dětí a hrozí vznikem jejich aneurysmat a infarktem?",
        options: [
          "Obřízobuněčná (temporální) arteritida",
          "Kawasakiho choroba",
          "Granulomatóza s polyangiitidou (Wegenerova)",
          "Takayasuova arteritida"
        ],
        correct: 1,
        explanation: "Kawasakiho choroba (syndrom mukokutánních lymfatických uzlin) je akutní vaskulitida postihující kojence a malé děti. Má afinitu ke koronárním tepnám. Včasné podání intravenózních imunoglobulinů (IVIG) a aspirinu dramaticky snižuje riziko srdečních komplikací."
      },
      {
        question: "Která protilátka je typickým laboratorním markerem u Granulomatózy s polyangiitidou (Wegenerovy)?",
        options: [
          "Antinukleární protilátky (ANA)",
          "c-ANCA (PR3-ANCA - protilátky proti proteináze 3 v cytoplasmě neutrofilů)",
          "p-ANCA (MPO-ANCA)",
          "Revmatoidní faktor"
        ],
        correct: 1,
        explanation: "c-ANCA (cytoplasmatická ANCA, cíl PR3) je vysoce specifická pro Wegenerovu granulomatózu. p-ANCA (perinukleární ANCA, cíl MPO) se vyskytuje spíše u mikroskopické polyangiitidy a syndromu Churg-Straussové."
      }
    ]
  },
  {
    id: "spec-5",
    title: "Vrozené vývojové vady srdce",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: [" vady", "zkrat", "Fallot", "koarktace", "ductus", "cyanóza", "Eisenmenger"],
    content: {
      definition: "Vrozené vývojové vady (VVV) srdce jsou strukturální abnormality srdce a velkých cév vzniklé během prenatálního vývoje v důsledku chybné organogeneze (3.–8. týden gestace).",
      etiology: "Chromozomové aberace (Downův syndrom - defekt septa síní a komor; Turnerův syndrom - koarktace aorty), teratogeny (alkohol - syndrom FAS, zarděnky matky v těhotenství - perzistující ductus arteriosus), multifaktoriální vlivy.",
      pathogenesis: "Tři hlavní skupiny vad: 1. Vady s levopravým zkratem (necyanotické v počátku): krev teče z levého (vysokotlakého) srdce do pravého (nízkotlakého). Příklad: Defekt septa síní (ASD), Defekt septa komor (VSD), Otevřená tepenná dučej (PDA). Dlouhodobě vedou k plicní hypertenzi, remodelaci cév a obrácení zkratu na pravolevý s rozvojem cyanózy (Eisenmengerův syndrom). 2. Vady s pravolevým zkratem (cyanotické od narození): odkysličená krev obchází plíce a jde přímo do těla. Příklad: Fallotova tetralogie, Transpozice velkých tepen. 3. Vady obstrukční (bez zkratu): např. Koarktace aorty (zúžení aorty).",
      macroscopy: "Fallotova tetralogie (čtyři znaky): 1. Defekt septa komor (VSD), 2. Dextropozice (nasedání) aorty nad defektem, 3. Stenóza plicnice (infundibulární), 4. Hypertrofie pravé komory (následek stenózy - srdce má tvar dřeváku). Koarktace aorty: zúžení aorty buď preduktální (infantilní forma, spojená s PDA), nebo postduktální (adultní forma, hypertrofie levé komory, dilatace aa. intercostales pro kolaterální oběh).",
      microscopy: "Mikroskopicky se v plicním řečišti u vad s levopravým zkratem vyvíjí plexiformní plicní arteriální choroba (zbytnění medie cév a proliferace intimy, obliterace lumen). U koarktace aorty nacházíme kolaterální cévy s hypertrofií medie.",
      clinical: "Eisenmengerův syndrom se projevuje cyanózou, paličkovitými prsty a nehty tvaru hodinového sklíčka. U adultní koarktace aorty je typická hypertenze na horních končetinách a hypotenze s chladem na dolních končetinách."
    },
    quiz: [
      {
        question: "Které čtyři patologické znaky definují Fallotovu tetralogii?",
        options: [
          "Defekt síňového septa, koarktace aorty, mitrální stenóza, hypertrofie levé komory",
          "Defekt komorového septa (VSD), nasedající aorta, stenóza plicnice (plicního kmene) a hypertrofie pravé komory",
          "Transpozice velkých tepen, otevřený ductus, atrézie trikuspidální chlopně, myokarditida",
          "Dextrokardie, situs inversus, splenomegalie, ascites"
        ],
        correct: 1,
        explanation: "Fallotova tetralogie je nejčastější cyanotická vada. Skládá se z defektu komorového septa, nad kterým nasedá aorta, zúžení plicnice (které omezuje průtok krve plícemi a tlačí krev přes defekt do aorty) a následné hypertrofie pravé komory pracující proti vysokému tlaku."
      },
      {
        question: "Co je to Eisenmengerův syndrom?",
        options: [
          "Náhlé protržení mezikomorové přepážky po infarktu",
          "Obrácení původně levopravého zkratu na pravolevý (s rozvojem cyanózy) v důsledku fixované plicní hypertenze a cévních změn v plicích",
          "Vrozené zúžení plicnice u starých lidí",
          "Ukládání vápníku do mitrální chlopně"
        ],
        correct: 1,
        explanation: "U levopravých zkratů (VSD, ASD, PDA) protéká plícemi nadměrné množství krve. Plicní arterie reagují na vysoký průtok a tlak zbytněním stěny (remodelací). Tím se zvýší plicní vaskulární rezistence, tlak v pravém srdci převýší tlak v levém a zkrat se obrátí. Do těla začne proudit odkysličená krev, což způsobí cyanózu (modrání)."
      }
    ]
  },
  {
    id: "spec-6",
    title: "Infekční a neinfekční endokarditidy",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["endokarditida", "vegetace", "infekční", "revmatická", "Libman", "marantická", "Aschoff"],
    content: {
      definition: "Endokarditida je zánětlivé onemocnění vnitřní výstelky srdce (endokardu), které postihuje téměř výhradně srdeční chlopně. Dělí se na infekční (bakteriální, mykotická) a neinfekční (revmatická, marantická, Libman-Sacksova).",
      etiology: "1. Infekční: Staphylococcus aureus (akutní u zdravých chlopní, narkomani), Streptococcus viridans (subakutní u předem poškozených chlopní). 2. Revmatická: následek streptokokové angíny (molekulární mimikry). 3. Marantická (trombotická): u pokročilých nádorů (hyperkoagulační stav). 4. Libman-Sacksova: u systémového lupusu (SLE).",
      pathogenesis: "Společným rysem je tvorba vegetací (náletů) na chlopních. U infekční endokarditidy bakterie adherují na poškozenou chlopni, množí se a ničí tkáň (destruktivní). U neinfekčních forem dochází k ukládání fibrinu a destiček bez přítomnosti mikrobů (imunitně nebo hyperkoagulací).",
      macroscopy: "1. Infekční: velké, křehké, polypózní vegetace (šedozelené), které chlopni destruují (perforace cípů, ruptura šlašinek). 2. Revmatická: drobné, bradavičnaté vegetace (verrucae) podél linie uzávěru chlopně. 3. Marantická: středně velké, křehké, sterilní vegetace bez destrukce. 4. Libman-Sacksova: ploché vegetace na obou stranách cípu chlopně.",
      microscopy: "1. Infekční: vegetace tvořená fibrinem, destičkami, zánětlivým detritem a masivními koloniemi bakterií, na spodině granulační tkáň a nekróza. 2. Revmatická: fibrózní organizace vegetací s přítomností Aschoffových uzlíků v myokardu (granulomy s Aničkovovými buňkami - histiocyty s jádrem vzhledu housenky).",
      clinical: "Infekční endokarditida se projevuje vysokými horečkami, šelesty na srdci a septickými embolizacemi (infarkty v mozku, ledvinách, třískové hemoragie pod nehty, Oslerovy uzlíky na prstech). Hrozí akutní srdeční selhání z chlopenní destrukce."
    },
    quiz: [
      {
        question: "Jak se makroskopicky projevují vegetace u infekční endokarditidy na rozdíl od revmatické?",
        options: [
          "U infekční jsou to drobné, pevné bradavičky; u revmatické velké, křehké a destruktivní polypy",
          "U infekční jsou vegetace velké, křehké, polypózní a způsobují destrukci chlopně (perforaci); u revmatické jsou to drobné, bradavičnaté vegetace podél okraje chlopně",
          "Vegetace u infekční endokarditidy zcela chybí",
          "Jsou to černé skvrny na síních"
        ],
        correct: 1,
        explanation: "Infekční endokarditida je invazivní a destruktivní proces. Bakterie tvoří velké, drobivé (křehké) vegetace, které rozežírají chlopenní tkáň (perforují cípy nebo trhají šlašinky). Revmatická endokarditida je sterilní zánět a tvoří jen drobné bradavičky (verrucae) bez destrukce chlopně."
      },
      {
        question: "Co jsou to Aničkovovy buňky (Anitschkow cells) a kde je nacházíme?",
        options: [
          "Pěnové buňky v jaterní cirhóze",
          "Aktivované histiocyty s charakteristickým jádrem (vzhledu housenky) nacházející se v Aschoffových uzlících u revmatické horečky",
          "Nádorové buňky u karcinomu plic",
          "Buňky tvořící myelin v CNS"
        ],
        correct: 1,
        explanation: "Aničkovovy buňky jsou specificky změněné makrofágy (histiocyty) s chromatinem kondenzovaným uprostřed jádra do podélného proužku (připomíná housenku). Jsou hlavní součástí Aschoffových tělísek (granulomů) v myokardu při revmatické horečce (při zkoušce na ně často padá otázka)."
      }
    ]
  },
  {
    id: "spec-7",
    title: "Chlopenní vady – příčiny, makro nálezy – Chlopenní vady starých lidí",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["chlopenní", "stenóza", "insuficience", "aortální", "mitrální", "kalcifikace", "myxoidní"],
    content: {
      definition: "Chlopenní vady jsou strukturální poškození srdečních chlopní, která narušují jednosměrný tok krve srdcem. Dělí se na stenózu (zúžení ústí chlopně, brání průtoku krve vpřed) a insuficienci (nedovíravost chlopně, umožňuje zpětný tok/regurgitaci).",
      etiology: "Postinfekční (porevmatické poškození), degenerativní (senilní kalcifikovaná aortální stenóza - nejčastější vada u starých lidí), myxoidní degenerace (prolaps mitrální chlopně), infekční endokarditida (způsobuje insuficienci), dilatační kardiomyopatie (funkční insuficience).",
      pathogenesis: "Stenóza vede k tlakovému přetížení oddílu před chlopní (způsobí koncentrickou hypertrofii, např. hypertrofii levé komory u aortální stenózy). Insuficience vede k objemovému přetížení cévního oddílu před i za chlopní (způsobí excentrickou hypertrofii a dilataci).",
      macroscopy: "1. Senilní kalcifikovaná aortální stenóza: cípy chlopně jsou ztluštělé, deformované a ztuhlé masivními uzlovitými ložisky dystrofické kalcifikace v sinus Valsalvae (komisury cípů však na rozdíl od revmatické vady nesplývají!). 2. Porevmatická mitrální stenóza: komisury cípů splývají, šlašinky jsou zkrácené a srostlé, chlopeň má vzhled 'rybí tlamy' nebo 'knoflíkové dírky'. 3. Prolaps mitrální chlopně: cípy jsou zvětšené, balonovitě prohnuté do levé síně, šlašinky jsou tenké a prodloužené.",
      microscopy: "Kalcifikovaná stenóza: velké amorfní modré hrudky vápníku (dystrofická kalcifikace) ve fibrose cípů. Prolaps chlopně: myxoidní degenerace - úbytek kolagenu ve spongiózní vrstvě cípu a jeho nahrazení hlenovitou (acid mucopolysaccharide) matrix.",
      clinical: "Aortální stenóza starých lidí se projevuje klasickou triádou: námahová dušnost, angina pectoris a synkopa (mdloba při námaze z ischemie mozku). Hrozí náhlá srdeční smrt. Mitrální stenóza vede k plicní hypertenzi, hypertrofii pravé komory a k fibrilaci síní s rizikem embolizace do mozku."
    },
    quiz: [
      {
        question: "Jaká je nejčastější chlopenní vada u starých lidí (nad 70 let) a co je její hlavní příčinou?",
        options: [
          "Mitrální stenóza způsobená syfilidou",
          "Kalcifikovaná aortální stenóza způsobená degenerativním ukládáním vápníku (dystrofickou kalcifikací)",
          "Trikuspidální insuficience způsobená revmatickou horečkou",
          "Prolaps mitrální chlopně způsobený infarktem"
        ],
        correct: 1,
        explanation: "Degenerativní kalcifikovaná aortální stenóza je nejčastější chlopenní vadou ve stáří. Vzniká opotřebením chlopně a pasivním ukládáním vápenatých solí do cípů (dystrofická kalcifikace), což vede k jejich znehybnění a stenóze ústí."
      },
      {
        question: "Vzhled chlopně připomínající 'rybí tlamu' (rybí ústa) s fúzí komisur a zkrácením šlašinek je typickým porevmatickým nálezem u:",
        options: [
          "Aortální insuficience",
          "Mitrální stenózy",
          "Trikuspidální stenózy",
          "Prolapsu pulmonální chlopně"
        ],
        correct: 1,
        explanation: "Porevmatický zánět vyvolává masivní organizaci a jizvení chlopně. U mitrální chlopně dochází ke splynutí (fúzi) komisur cípů a svraštění šlašinek, což chlopeň trvale zafixuje v polootřeném stavu, který pod mikroskopem a makroskopicky připomíná rybí tlamu."
      }
    ]
  },
  {
    id: "spec-8",
    title: "Ischemická choroba srdeční",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["ICHS", "infarkt", "angina", "pectoris", "myokard", "reperfúze", "ruptura"],
    content: {
      definition: "Ischemická choroba srdeční (ICHS) je onemocnění způsobené nepoměrem mezi přítokem arteriální krve koronárními tepnami (nabídkou kyslíku) a metabolickými nároky myokardu (poptávkou po kyslíku).",
      etiology: "Ateroskleróza koronárních tepen (způsobuje > 90 % případů ICHS), koronární spazmus, vaskulitidy koronárních cév.",
      pathogenesis: "Dělí se na: 1. Chronické formy: Stabilní angina pectoris (chronické zužování lumenu plátem o > 75 %, ischémie a bolest vzniká při námaze), Chronická ICHS se srdečním selháním. 2. Akutní formy (akutní koronární syndrom - AKS): Nestabilní angina pectoris (ruptura plátu a neúplný trombus), Akutní infarkt myokardu (kompletní okluze koronární tepny trombem, vzniká koagulační nekróza), Náhlá srdeční smrt (arytmie při akutní ischemii). Infarkt se dělí na transmurální (subepikardiální - postihuje celou šířku stěny, STEMI) a subendokardiální (postihuje jen vnitřní 1/3 stěny, NSTEMI).",
      macroscopy: "Morfologický vývoj infarktu myokardu: \n- do 12 hod: makroskopicky nepatrný (lze prokázat TTC barvením - nekrotická ložiska zůstávají nebarvená); \n- 12–24 hod: ložisko je bledé nebo šedočervené (překrvení); \n- 3.–7. den: ložisko je žlutavé (infiltrace neutrofily a kolikvace detritu), ohraničené červeným lemem; \n- od 2. týdne: prorůstání šedavé granulační tkáně; \n- 6. týden: vznik pevné, bílé vazivové jizvy.",
      microscopy: "Mikroskopický vývoj: \n- 4–12 hod: vlnovité kardiomyocyty, eozinofilie cytoplasmy, ztráta příčného pruhování; \n- 24–72 hod: plně rozvinutá koagulační nekróza (kardiomyocyty bez jader), masivní infiltrace neutrofilními granulocyty; \n- 3.–7. den: rozpad kardiomyocytů a fagocytóza makrofágy; \n- 10. den: novotvořené kapiláry a fibroblasty (granulační tkáň); \n- 6. týden a dále: husté kolagenní vazivo (jizva).",
      clinical: "Komplikace infarktu: 1. Arytmie (fibrilace komor - nejčastější příčina smrti v prvních hodinách), 2. Kardiogenní šok (při nekróze > 40 % masy LK), 3. Ruptura myokardu (typicky 3.–7. den, kdy je nekróza nejměkčí - ruptura stěny s tamponádou srdce, ruptura septa, ruptura papilárního svalu s akutní mitrální insuficiencí), 4. Aneurysma levé komory (pozdní komplikace z vytenčené jizvy)."
    },
    quiz: [
      {
        question: "Kdy je nejvyšší riziko ruptury myokardu (volné stěny levé komory) po prodělaném infarktu a proč?",
        options: [
          "V prvních 2 hodinách z důvodu vysoké elasticity buněk",
          "Mezi 3. a 7. dnem, protože v ložisku vrcholí infiltrace neutrofily a enzymatická kolikvace (změkčení) nekrotické tkáně",
          "Po 6 týdnech, kdy se tvoří jizva",
          "Riziko je stejné po dobu jednoho roku"
        ],
        correct: 1,
        explanation: "V období 3. až 7. dne po infarktu odstraňují neutrofily a makrofágy svými enzymy nekrotický detrit. Tkáň v této fázi ztrácí pevnou strukturu a je nejměkčí (myomalacie). Pevná vazivová jizva se ještě nezačala tvořit, a proto stěna pod tlakem krve v komoře nejsnadněji praskne."
      },
      {
        question: "Jak se liší transmurální infarkt (STEMI) od subendokardiálního (NSTEMI)?",
        options: [
          "Transmurální infarkt postihuje pouze pravou síň",
          "Transmurální infarkt postihuje celou šířku stěny komory (subendokard až subepikard) a je způsoben úplným uzávěrem tepny; subendokardiální postihuje vnitřní 1/3 stěny, kde je nejhorší prokrvení",
          "Subendokardiální infarkt se hojí bez jizvy",
          "Transmurální infarkt je vždy vyvolán zánětem cév"
        ],
        correct: 1,
        explanation: "Transmurální infarkt prostupuje celou stěnou komory a vzniká při náhlém a úplném ucpání koronární tepny. Subendokardiální infarkt je omezen na vnitřní třetinu stěny levé komory, která je nejvíce vzdálená od koronárních tepen (nejcitlivější k hypoxii), a vzniká např. při neúplném uzávěru nebo celkovém poklesu tlaku."
      }
    ]
  },
  {
    id: "spec-9",
    title: "Kardiomyopatie, myokarditidy",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["myokarditida", "kardiomyopatie", "dilatační", "hypertrofická", "restrikční", "coxsackie", "myofibrila"],
    content: {
      definition: "Kardiomyopatie (KMP) jsou skupina onemocnění postihujících přímo srdeční sval, která vedou k jeho dysfunkci a nejsou důsledkem ICHS, chlopenních vad nebo hypertenze. Myokarditida je zánětlivé onemocnění srdečního svalu.",
      etiology: "KMP: 1. Dilatační (nejčastější - alkohol, toxiny, genetika - 30 %, postmyokarditická), 2. Hypertrofická (genetická - mutace proteinů sarkomery, např. beta-myosinu těžkého řetězce), 3. Restrikční (amyloidóza, sarkoidóza, hemochromatóza). Myokarditidy: nejčastěji virové (Coxsackie B, adenovirus, chřipka), autoimunitní (lupus, obřízobuněčná), polékové.",
      pathogenesis: "Dilatační KMP: ochabnutí a dilatace všech srdečních dutin vede k těžké systolické dysfunkci (srdce špatně pumpuje). Hypertrofická KMP: masivní asymetrická hypertrofie (zejména komorového septa) vede k diastolické dysfunkci (srdce se špatně plní) a hrozí obstrukce výtokového traktu levé komory (HOCM). Restrikční KMP: ztuhnutí stěny brání plnění komor v diastole.",
      macroscopy: "Dilatační KMP: obrovské, ochablé srdce (hmotnost i > 600g), dilatace všech oddílů, ztenčení stěn, časté nástěnné tromby v hrotu. Hypertrofická KMP: masivní ztluštění stěny komory (přes 20 mm) a septa, dutina levé komory je zmenšená (tvar banánu). Myokarditida: srdce je ochablé, bledé, s drobnými petechiemi a skvrnitým vzhledem.",
      microscopy: "Dilatační KMP: hypertrofie kardiomyocytů střídaná s jejich atrofií, difuzní intersticiální fibróza. Hypertrofická KMP: 'myocyte disarray' (chaotické, dezorganizované uspořádání kardiomyocytů a jejich myofibril, které normálně běží paralelně). Myokarditida: edém intersticila a hustý buněčný infiltrát (lymfocytární u virových, obřízobuněčný, nebo eosinofilní u alergických reakcí), ložiska nekrózy kardiomyocytů.",
      clinical: "Dilatační KMP se projevuje progresivním městnavým srdečním selháním. Hypertrofická KMP je nejčastější příčinou náhlé smrti mladých sportovců (arytmie při námaze). Myokarditida může probíhat nenápadně (únava, nespecifická bolest na hrudi), ale i jako akutní srdeční selhání napodobující infarkt."
    },
    quiz: [
      {
        question: "Co je to 'myocyte disarray' a pro kterou patologii je typický?",
        options: [
          "Rozpad buněk u nekrózy",
          "Chaotické, dezorganizované a větvené uspořádání kardiomyocytů (a jejich myofibril), doprovázené intersticiální fibrózou, typické pro hypertrofickou kardiomyopatii (HCM)",
          "Ukládání lipidů do cytoplasmy",
          "Zánět cév v myokardu"
        ],
        correct: 1,
        explanation: "U hypertrofické kardiomyopatie (HCM) chybí normální paralelní uspořádání kardiomyocytů. Buňky jsou dezorganizované, kříží se a větví (myocyte disarray). To je histologickým podkladem pro vznik maligních arytmií a náhlé smrti."
      },
      {
        question: "Která skupina virů je nejčastějším infekčním původcem myokarditid v Evropě?",
        options: [
          "Retroviry (HIV)",
          "Enteroviry (zejména viry Coxsackie B)",
          "Rhabdoviry (virus vztekliny)",
          "Papilomaviry"
        ],
        correct: 1,
        explanation: "Viry Coxsackie B a adenoviry jsou nejčastějšími virovými původci akutní myokarditidy. Vykazují přímou afinitu k receptorům na kardiomyocytech (CAR receptor), do kterých vstupují a vyvolávají lymfocytární zánět."
      }
    ]
  },
  {
    id: "spec-10",
    title: "Patologie perikardu",
    section: "Kardiovaskulární systém",
    category: "Speciální",
    keywords: ["perikarditida", "tamponáda", "výpotek", "uremická", "konstriktivní", "fibrinózní"],
    content: {
      definition: "Patologie perikardu zahrnuje hromadění tekutiny v perikardiální dutině (výpotek, hemoperikard) a zánětlivé procesy (perikarditidy).",
      etiology: "1. Perikardiální výpotek (hydroperikard): srdeční selhání, nefrotický syndrom. Hemoperikard (krev v perikardu): ruptura stěny komory při infarktu, ruptura disekce aorty, trauma. 2. Perikarditida: virová (Coxsackie), uremická (při selhání ledvin), tuberkulózní, nádorová (metastázy karcinomu prsu, plic).",
      pathogenesis: "Hromadění tekutiny v perikardu zvyšuje tlak na srdce. Pokud se tekutina nahromadí rychle (např. > 200 ml krve u ruptury), srdce se v diastole nemůže plnit, což vede k fatálnímu poklesu srdečního výdeje - srdeční tamponádě. Zánět (perikarditida) se dělí na: serózní, fibrinózní (suchá, uremická), hnisavou (bakteriální) a hemoragickou (nádorová, TBC).",
      macroscopy: "Fibrinózní perikarditida: 'cor villosum' (drsné srdce pokryté blánami a vlákny fibrinu). Hemoperikard: perikard je napjatý, naplněný tmavou krví a koaguly. Chronická konstriktivní perikarditida: perikard je extrémně zbytlý, vazivově změněný, těsně obepíná srdce a může být prostoupen vápníkem (pancéřové srdce - pericarditis petrosa).",
      microscopy: "Fibrinózní perikarditida: povrch epikardu je krytý eozinofilní sítí fibrinu s neutrofily, pod ním je hyperémie a zánětlivá infiltrace subepikardiálního tuku. Konstriktivní p.: husté hyalinní vazivo s ložisky kalcifikace, chybí mezotelová výstelka perikardiální dutiny.",
      clinical: "Tamponáda srdce se projevuje Beckovou triádou: hypotenze, tiché/zastřené srdeční ozvy a distenze (zvýšená náplň) krčních žil. Konstriktivní perikarditida klinicky napodobuje pravostranné srdeční selhání omezením diastolického plnění srdce."
    },
    quiz: [
      {
        question: "Co tvoří Beckovu triádu klinických příznaků u akutní tamponády srdce?",
        options: [
          "Horečka, kašel, dušnost",
          "Hypotenze, distenze krčních žil a tiché (zastřené) srdeční ozvy",
          "Tachykardie, anémie, splenomegalie",
          "Vysoký krevní tlak, bradykardie, edém papily"
        ],
        correct: 1,
        explanation: "Beckova triáda je klasický soubor příznaků u srdeční tamponády. Tlak tekutiny brání plnění komor, což vede k hypotenzi. Krev se hromadí před srdcem (stoupá venózní tlak -> distenze krčních žil). Tekutina kolem srdce tlumí přenos zvuku, ozvy jsou proto špatně slyšitelné."
      },
      {
        question: "Co je to 'pancéřové srdce' (pericarditis petrosa)?",
        options: [
          "Nádorové postižení srdce",
          "Pozdní stadium chronické konstriktivní perikarditidy, kdy zbytnělý perikard vazivově obliteruje a masivně zvápenatí (kalcifikuje), čímž srdce pevně sevře",
          "Hypertrofie levé komory u těžkých válečníků",
          "Zbytnění srdce u hemochromatózy"
        ],
        correct: 1,
        explanation: "Při chronickém zánětu (např. po TBC nebo hnisavé perikarditidě) se fibrinózní exsudát zorganizuje v husté vazivo. Dochází k obliteraci (zaniknutí) perikardiální dutiny a ukládání solí vápníku (dystrofická kalcifikace). Srdce je obklopeno pevným 'pancířem' z vápníku a vaziva."
      }
    ]
  },
  {
    id: "spec-11",
    title: "Záněty horních cest dýchacích",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["laryngitida", "epiglotitida", "rhinitida", "sinusitida", "krup", "katar"],
    content: {
      definition: "Záněty horních cest dýchacích postihují nosní dutinu (rhinitis), vedlejší nosní dutiny (sinusitis), hltan (pharyngitis) a hrtan (laryngitis).",
      etiology: "Nejčastěji viry (rhinoviry, adenoviry, chřipka, parachřipka), bakterie (Streptococcus pyogenes, Haemophilus influenzae, Corynebacterium diphtheriae).",
      pathogenesis: "1. Akutní rhinitida (rýma): katarální zánět sliznice nosu s hypersekrecí hlenu a edémem sliznice. 2. Akutní epiglotitida: těžký zánět záklopky hrtanové (vyvolaný Haemophilus influenzae typu B u dětí). 3. Akutní laryngitida (pseudokrup): subglotický edém hrtanu (viry parachřipky).",
      macroscopy: "Katarální rýma: sliznice je zarudlá, zduřelá, pokrytá vodnatým až hlenovým sekretem. Epiglotitida: epiglotis je masivně oteklá, třešňově červená, ucpává vchod do hrtanu. Pseudokrup: zduření a zarudnutí sliznice pod hlasivkami.",
      microscopy: "Edém sliznice a submukózy, dilatace cév, infiltrace zánětlivými buňkami (lymfocyty u virů, neutrofily u bakterií). U alergické rýmy nacházíme v infiltrátu záplavu eosinofilních granulocytů a hyperplazii pohárkových buněk.",
      clinical: "U dětí jsou záněty hrtanu extrémně nebezpečné kvůli úzkému anatomickému průsvitu. Akutní epiglotitida je život ohrožující stav (hrozí náhlé udušení, nesmí se vyšetřovat špachtlí, nutná intubace). Pseudokrup se projevuje štěkavým kašlem a inspiračním stridorem v noci."
    },
    quiz: [
      {
        question: "Který patogen je hlavním původcem život ohrožující akutní epiglotitidy u dětí?",
        options: [
          "Rhinovirus",
          "Haemophilus influenzae typu B",
          "Streptococcus pneumoniae",
          "Corynebacterium diphtheriae"
        ],
        correct: 1,
        explanation: "Akutní epiglotitida je bakteriální zánět vyvolaný Haemophilus influenzae B. Způsobuje rychlý edém záklopky, která může kompletně uzavřít dýchací cesty. Očkování proti Hib výrazně snížilo výskyt této závažné nemoci."
      },
      {
        question: "Jak se liší buněčné složení infiltrátu u alergické rýmy (rhinitidy) od běžné virové rýmy?",
        options: [
          "U alergické rýmy v infiltrátu dominují eosinofilní granulocyty; u virové rýmy lymfocyty",
          "U alergické rýmy dominují neutrofily a bakterie",
          "U alergické rýmy infiltrát zcela chybí",
          "U virové rýmy nacházíme kaseózní nekrózu"
        ],
        correct: 0,
        explanation: "Alergická rýma je reakcí I. typu zprostředkovanou IgE. Mediátory žírných buněk lákají do sliznice nosu eosinofilní granulocyty, které jsou typickým histologickým markerem alergických zánětů. U běžné virové rýmy nacházíme klasický lymfocytární infiltrát."
      }
    ]
  },
  {
    id: "spec-12",
    title: "Poruchy vzdušnosti plic (atelektáza, kolaps, emfyzém)",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["atelektáza", "kolaps", "emfyzém", "resorpční", "kompresivní", "panacinar", "centrilobular"],
    content: {
      definition: "Poruchy vzdušnosti plic zahrnují stavy snížené vzdušnosti (atelektáza a kolaps plíce) a stavy zvýšené vzdušnosti s destrukcí tkáně (plicní emfyzém/rozedma).",
      etiology: "1. Atelektáza/Kolaps: obstrukce bronchů (nádor, cizí těleso, hlenová zátka - resorpční atelektáza), přítomnost vzduchu/tekutiny v pleuritě (kompresivní kolaps), ztráta surfaktantu. 2. Emfyzém: kouření (centrilobulární emfyzém), deficit alfa-1-antitrypsinu (panlobulární/panacinární emfyzém).",
      pathogenesis: "Atelektáza resorpční: po ucpání bronchu se vzduch za překážkou vstřebá a alveoly splasknou. Kolaps kompresivní: tlak zvenčí (např. pneumotorax) stlačí plicní parenchym. Emfyzém: nerovnováha mezi elastázami (produkovanými makrofágy a neutrofily z kouření) a antielastázami (alfa-1-antitrypsin). Elastázy destruují elastická vlákna v alveolárních stěnách, což vede k trvalému rozšíření dýchacích prostor za terminálními bronchioly a destrukci sept bez plicní fibrózy.",
      macroscopy: "Kolaps: plíce je zmenšená, tuhá, bezvzdušná (neplave ve vodě), má tmavě modrofialovou barvu. Emfyzém: plíce jsou zvětšené, bledé, měkké (nadýchané), překrývají srdce, při stisku prstem v nich zůstává důlek. Hrudník má soudkovitý tvar.",
      microscopy: "Atelektáza: alveoly jsou štěrbinovité, splasklé, septa jsou těsně u sebe, cévy jsou dilatované. Emfyzém: obří, opticky prázdné alveolární prostory vzniklé spojením sousedních alveolů po destrukci alveolárních sept (v stěně chybí elastická vlákna, stěny jsou tenké a uťaté).",
      clinical: "Atelektáza snižuje ventilační plochu a predisponuje k infekcím (pneumoniím). Emfyzém je součástí CHOPN (chronické obstrukční plicní nemoci), vede k destrukci plicních kapilár (redukce řečiště), rozvoji plicní hypertenze a cor pulmonale (pravostranné srdeční selhání)."
    },
    quiz: [
      {
        question: "Jaký je hlavní patogenetický mechanismus vzniku plicního emfyzému u kuřáků?",
        options: [
          "Mechanické roztržení alveolů při kašli",
          "Nerovnováha mezi proteázami (elastázami z makrofágů) a antiproteázami (alfa-1-antitrypsinem), což vede k destrukci elastické kostry alveolárních sept",
          "Tvorba jizev v plicním interstiticiu",
          "Aktivní stah hladké svaloviny v alveolech"
        ],
        correct: 1,
        explanation: "Kouření cigaret aktivuje alveolární makrofágy a neutrofily, které uvolňují proteolytické enzymy (zejména elastázu). Pokud tyto proteázy překonají ochrannou kapacitu antiproteáz (např. v důsledku jejich inaktivace kouřem nebo vrozeného deficitu AAT), dojde k odbourání elastinu v alveolárních stěnách, jejich destrukci a vzniku rozedmy (emfyzému)."
      },
      {
        question: "Který typ emfyzému se typicky vyvíjí u pacientů s vrozeným deficitem alfa-1-antitrypsinu (AAT)?",
        options: [
          "Centrilobulární (centriacinární) emfyzém",
          "Panlobulární (panacinární) emfyzém",
          "Paraseptální emfyzém",
          "Nepravidelný emfyzém kolem jizev"
        ],
        correct: 1,
        explanation: "Deficit AAT vede k panlobulárnímu (panacinárnímu) emfyzému, který postihuje rovnoměrně celý acinus a je nejvýraznější v dolních lalocích plic. Centrilobulární emfyzém (postihuje hlavně proximální respirační bronchioly) je typický pro klasické kuřáky bez deficitu AAT a postihuje horní plicní laloky."
      }
    ]
  },
  {
    id: "spec-13",
    title: "Edém plic",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["edém", "plicní", "hydrostatický", "permeabilitní", "siderofágy", "růžová"],
    content: {
      definition: "Edém plic (plicní otok) je nadměrné hromadění tekutiny v plicním parenchymu (nejprve v interstiticiu, následně v alveolech), které vážně narušuje výměnu plynů.",
      etiology: "1. Kardiogenní (hemodynamický/hydrostatický): akutní levostranné srdeční selhání (infarkt myokardu, hypertenzní krize, mitrální stenóza). 2. Nekardiogenní (permeabilitní/toxický): přímé poškození alveolo-kapilární membrány inhalací toxických plynů, infekcemi (těžké pneumonie), sepsí, aspirací žaludečního obsahu (ARDS).",
      pathogenesis: "Kardiogenní edém: selhání levé komory zvýší tlak v plicních žilách a kapilárách. Hydrostatický tlak překročí onkotický tlak plazmy, tekutina filtruje do alveolů. Nekardiogenní edém: zánětlivé poškození endotelu kapilár a epitelu alveolů vede k masivnímu úniku proteinů a tekutiny do alveolů bez zvýšení hydrostatického tlaku.",
      macroscopy: "Plíce jsou masivně zvětšené, těžké (mohou vážit i přes 1000 g), těstovité konzistence, tmavě červené. Při tlaku na plicní řez vytéká velké množství napěněné, růžové nebo zakalené tekutiny (pěna vzniká smícháním vzduchu, tekutiny a surfaktantu).",
      microscopy: "Alveoly jsou vyplněné homogenní, světle růžovou (eozinofilní) tekutinou (edémová tekutina). Kapiláry v alveolárních septech jsou extrémně dilatované a přeplněné erytrocyty. V alveolech mohou být přítomny siderofágy (makrofágy s hemosiderinem u chronického městnání).",
      clinical: "Projevuje se těžkou, náhle vzniklou dušností (ortopnoe), cyanózou, úzkostí a vykašláváním růžového napěněného sputa. Nad plícemi jsou slyšitelné vlhké, nesouvučné fenomény (chrápoty). Vyžaduje urgentní podání kyslíku, diuretik a vasodilatancií."
    },
    quiz: [
      {
        question: "Proč vytéká z řezu edematózní plíce při makroskopickém vyšetření napěněná tekutina?",
        options: [
          "V důsledku přítomnosti plynotvorných bakterií",
          "Smícháním edémové tekutiny, vzduchu v alveolech a plicního surfaktantu během dýchacích pohybů před smrtí",
          "Je to způsobeno rozpadem plicních cév",
          "V plicích se tvoří mýdlo"
        ],
        correct: 1,
        explanation: "Plicní edémová tekutina se v dýchacích cestách mísí se zbytkovým vzduchem a surfaktantem (který snižuje povrchové napětí). Dýcháním se tato směs napění. Pěna pak ucpává bronchiální strom a brání ventilaci."
      },
      {
        question: "Jaký je hlavní rozdíl v patogenezi kardiogenního a nekardiogenního (ARDS) edému plic?",
        options: [
          "Kardiogenní edém vzniká pouze u dětí",
          "Kardiogenní edém vzniká zvýšením hydrostatického tlaku v kapilárách při selhání levého srdce; nekardiogenní (ARDS) vzniká poškozením alveolo-kapilární membrány a zvýšením její propustnosti (permeability)",
          "U nekardiogenního edému tekutina neobsahuje žádné bílkoviny",
          "Kardiogenní edém se neprojevuje dušností"
        ],
        correct: 1,
        explanation: "Kardiogenní edém je hydrostatický (fyzikální přetlak v cévách). Nekardiogenní edém (ARDS) je permeabilitní (zánětlivá destrukce buněčné bariéry endotel-epitel, kudy tekutina volně teče i při normálním krevním tlaku)."
      }
    ]
  },
  {
    id: "spec-14",
    title: "Plicní embolie",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["embolie", "plicní", "cor pulmonale", "tromboembolie", "bifurkace", "sedlovitý", "stáza"],
    content: {
      definition: "Plicní embolie (PE) je ucpání plicnice (a. pulmonalis) nebo jejích větví vmetkem (nejčastěji krevní sraženinou - tromboembolie) zaneseným z venózního systému.",
      etiology: "Zdroj v > 95 % případů tvoří hluboká žilní trombóza (HŽT) dolních končetin a pánve. Rizikové faktory: imobilizace (sádra, dlouhý let), pooperační stavy, onkologická onemocnění, trombofilní stavy (Leidenská mutace).",
      pathogenesis: "Embolus putuje z žil nohy přes dolní dutou žílu, pravou síň a komoru do plicního cévního řečiště. Následky závisí na velikosti vmetku: 1. Masivní embolie (ucpání > 60 % řečiště) prudce zvýší odpor v plicním oběhu -> akutní cor pulmonale (přetížení a selhání pravé komory) a kardiogenní šok. 2. Submasivní/drobná embolie ucpává menší větve.",
      macroscopy: "Masivní embolie: v bifurkaci plicnice nebo v hlavních kmenech nacházíme dlouhý, vinutý, suchý embolus (často 'sedlovitý' - zasahuje do obou větví). Pravá komora bývá akutně dilatovaná. U menších embolů v plicích nacházíme hemoragické (červené) infarkty (klínovitého tvaru, tuhé, tmavě červené).",
      microscopy: "V lumen plicních artérií nacházíme krevní sraženinu vykazující Zahnovy linie (střídání destičkových a fibrinových proužků, což dokazuje, že trombus vznikl zaživa a byl odtržen). V okolním parenchymu při infarktu vidíme alveoly zaplavené erytrocyty a nekrózu alveolárních stěn.",
      clinical: "Plicní embolie se projevuje náhle vzniklou dušností, tachypnoí, bolestí na hrudi (pleurálního charakteru), kašlem (někdy s hemoptýzou) a kolapsem. Masivní PE vede k okamžité smrti (elektromechanická disociace - EMD)."
    },
    quiz: [
      {
        question: "Co je to sedlovitý embolus (saddle embolus)?",
        options: [
          "Embolus v cévách dolní končetiny u jezdců na koni",
          "Velký embolus, který uvízne v bifurkaci plicního kmene (truncus pulmonalis) a zasahuje do pravé i levé plicní tepny",
          "Tuková kapénka v ledvinách",
          "Trombus na mitrální chlopni"
        ],
        correct: 1,
        explanation: "Sedlovitý embolus je masivní krevní sraženina, která je tak velká, že se usadí přímo v místě větvení plicnice na pravou a levou větev. Zablokuje průtok krve do obou plic najednou, což způsobí okamžité pravostranné selhání a náhlou smrt."
      },
      {
        question: "Proč ucpání drobné větve plicnice u jinak zdravého mladého člověka obvykle nezpůsobí infarkt plíce?",
        options: [
          "Protože plíce nemají žádné nervy",
          "Díky dvojímu krevnímu zásobení plic (a. pulmonalis a aa. bronchiales z aorty) - bronchiální oběh zajistí výživu tkáně i při výpadku plicnice",
          "Protože plicní tkáň nepotřebuje kyslík",
          "U mladých lidí se embolie nevyskytuje"
        ],
        correct: 1,
        explanation: "Plíce mají dvojí oběh: funkční (a. pulmonalis) a nutriční (aa. bronchiales). U zdravého člověka bronchiální tepny bez problému vyživí plicní tkáň, pokud se ucpe malá větev plicnice. Infarkt plíce vzniká spíše u pacientů, kteří již mají chronické městnání v plicích (např. při srdečním selhání), kdy je i bronchiální oběh neúčinný."
      }
    ]
  },
  {
    id: "spec-15",
    title: "Infarkt plíce",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["infarkt", "plíce", "hemoragický", "červený", "bronchiales", "pleurální"],
    content: {
      definition: "Infarkt plíce je ložisko ischemické nekrózy plicního parenchymu, které je kvůli specifickému cévnímu zásobení plic téměř vždy hemoragické (červené).",
      etiology: "Ucpání střední nebo menší větve a. pulmonalis embolusem u pacienta s již přítomným chronickým městnáním v plicním oběhu (např. při levostranném srdečním selhání).",
      pathogenesis: "Uzávěr větve plicnice zastaví funkční oběh. Vzhledem k městnání je však tlak v bronchiálních tepnách (nutriční oběh) nedostatečný pro udržení viability tkáně, ale dostatečný pro to, aby krev z bronchiálního řečiště a z okolních kapilár prosákla do nekrotizující tkáně. Alveoly se zaplaví krví.",
      macroscopy: "Ložisko má typický klínovitý tvar (bází k pleuře, hrotem k místu uzávěru cévy). Je tmavě červené až černé, tuhé, vyvýšené nad okolí. Pohrudnice nad infarktem vykazuje fibrinózní zánět (pleuritis fibrinosa - drsný povrch). Později se ložisko odbarvuje a hojí se vtaženou vazivovou jizvou.",
      microscopy: "Koagulační nekróza alveolárních sept (stíny alveolů bez jader), alveolární prostory jsou kompletně vyplněné erytrocyty (extravazát krve), které podléhají rozpadu (hemolýze). Na okrajích ložiska je zánětlivý infiltrát a tvorba hemosiderinu (siderofágy).",
      clinical: "Projevuje se náhlou ostrou bolestí na hrudi (dráždení pleury nad infarktem), kašlem s vykašláváním tmavé krve (hemoptýza) a dušností. Při poslechu může být slyšitelný pleurální třecí šelest."
    },
    quiz: [
      {
        question: "Jaký tvar a barvu má plicní infarkt při makroskopickém vyšetření?",
        options: [
          "Kruhový a křídově bílý",
          "Klínovitý a tmavě červený až černý (hemoragický infarkt)",
          "Nepravidelný a žlutavý",
          "Plicní infarkt nelze makroskopicky poznat"
        ],
        correct: 1,
        explanation: "Plicní infarkt je klínovitý (odpovídá větvení ucpané tepny) a hemoragický (červený). Nekrotická plicní tkáň je masivně prosáklá krví z bronchiálních kolaterál a městnajících žil, což jí dává tmavě červenou až černou barvu."
      },
      {
        question: "Proč je povrch pohrudnice (pleury) nad čerstvým plicním infarktem drsný a pokrytý šedavým povlakem?",
        options: [
          "V důsledku hromadění tuku",
          "Dochází k reaktivnímu fibrinóznímu zánětu pohrudnice (pleuritis fibrinosa) nad ložiskem nekrózy",
          "Jde o metastázy nádoru",
          "Je to způsobeno přítomností vápníku"
        ],
        correct: 1,
        explanation: "Nekróza plicního parenchymu sahá často až pod poplicnici (viscerální pleuru). To vyvolá sterilní, reaktivní zánět pleury s exsudací fibrinogenu. Ten se srazí na fibrin a způsobí tření pleury při dýchání, což vyvolává typickou ostrou bolest."
      }
    ]
  },
  {
    id: "spec-16",
    title: "Syndrom akutní respirační tísně dospělých (ARDS)",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["ARDS", "hyalinní", "membrány", "šoková", "surfaktant", "septický"],
    content: {
      definition: "Syndrom akutní respirační tísně dospělých (ARDS, dříve 'šoková plíce') je syndrom těžkého dechového selhání charakterizovaný oboustranným plicním edémem (nekardiogenním) a těžkou hypoxémií refrakterní k léčbě kyslíkem.",
      etiology: "Sepse (nejčastěji), těžká traumata (popáleniny, polytraumata), inhalace toxických plynů, aspirace žaludečního obsahu, těžké pneumonie (včetně COVID-19), akutní pankreatitida.",
      pathogenesis: "Společným jmenovatelem je difuzní alveolární poškození (DAD - Diffuse Alveolar Damage): 1. Aktivace neutrofilů v plicních kapilárách, uvolnění proteáz a ROS. 2. Poškození endotelu kapilár a alveolárního epitelu (pneumocytů I. typu). 3. Masivní únik tekutiny bohaté na bílkoviny do alveolů (edém). 4. Nekrotické epitelie se mísí s fibrinem a tvoří hyalinní blány podél alveolárních stěn. 5. Kolaps alveolů ze ztráty surfaktantu (pneumocyty II. typu jsou poškozené).",
      macroscopy: "Plíce jsou oboustranně zvětšené, těžké, bezvzdušné (připomínají játra - hepatizace plic), tmavě červené, na řezu z nich vytéká zakalená krvavá tekutina.",
      microscopy: "Fáze ARDS: 1. Akutní (exsudativní, 1.–7. den): edém sept, překrvení kapilár a přítomnost růžových, tlustých hyalinních blan (hyaline membranes) lemujících alveolární prostory. 2. Proliferativní/Organizační (po 7 dnech): proliferace pneumocytů II. typu k opravě epitelu a novotvorba vaziva (fibroblasty) v septech.",
      clinical: "Projevuje se rychlým rozvojem těžké dušnosti, tachypnoí a cyanózou. RTG plic vykazuje oboustranné difuzní zastínění ('mléčné sklo'). Úmrtnost je vysoká (kolem 40 %), pacienti vyžadují umělou plicní ventilaci. Hrozí plicní fibróza."
    },
    quiz: [
      {
        question: "Co jsou to hyalinní blány (hyaline membranes) v plicích a u jakého syndromu jsou typickým histologickým nálezem?",
        options: [
          "Bělostná vazivová pouzdra u tuberkulózy",
          "Růžové, homogenní povlaky lemující alveoly tvořené směsí fibrinu a proteinů z odumřelých pneumocytů; jsou typické pro akutní fázi ARDS (a RDS novorozenců)",
          "Zvápenatělá ložiska u silikózy",
          "Nádorové struktury v průduškách"
        ],
        correct: 1,
        explanation: "Hyalinní blány vznikají při difuzním alveolárním poškození (DAD). Bílkoviny uniklé z poškozených kapilár (fibrin) se smísí s nekrotickým detritem pneumocytů I. typu a vytvoří blány pokrývající vnitřní povrch alveolů, což dramaticky blokuje difuzi kyslíku."
      },
      {
        question: "Proč dochází u ARDS ke kolapsu alveolů (atelektáze)?",
        options: [
          "Kvůli nedostatku vzduchu v atmosféře",
          "V důsledku poškození pneumocytů II. typu, což vede k deficitu surfaktantu a zvýšení povrchového napětí alveolů",
          "V cévách chybí erytrocyty",
          "Způsobuje to ukládání amyloidu"
        ],
        correct: 1,
        explanation: "Pneumocyty II. typu produkují surfaktant (tenziaktivní látku snižující povrchové napětí alveolů). Jejich zánětlivé poškození u ARDS vede k nedostatku surfaktantu, což způsobí, že alveoly se při výdechu smrští a slepí (zkolabují)."
      }
    ]
  },
  {
    id: "spec-17",
    title: "Chronické intersticiální choroby plicní",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["intersticiální", "fibróza", "voštinová", "alveolitida", "IPF", "pneumokonióza"],
    content: {
      definition: "Chronické intersticiální choroby plicní (plicní fibrózy) jsou heterogenní skupina onemocnění charakterizovaná difuzním zánětem a progresivní fibrózou alveolárních sept (intersticia), což vede k restrikční ventilační poruše.",
      etiology: "Idiopatická plicní fibróza (IPF - nejčastější, neznámá příčina), pneumokoniózy (silikóza, azbestóza), hypersenzitivní pneumonitida (farmářská plíce), polékové plicní fibrózy (amiodaron, bleomycin), autoimunitní choroby (systémová sklerodermie).",
      pathogenesis: "Opakovaná ložisková poškození alveolárního epitelu vedou k abnormálnímu hojení. Namísto regenerace dochází k aktivaci fibroblastů a myofibroblastů (fibrogenní cytokiny TGF-beta), které masivně produkují kolagen. Alveolární septa tloustnou, alveoly zanikají a plíce ztrácí poddajnost.",
      macroscopy: "Plíce jsou zmenšené, tuhé, těžké, bezvzdušné. Povrch plíce je nepravidelně hrbolatý (vzhled 'dlažebních kostek' z retrakce jizev). Na řezu má tkáň voštinový vzhled (honeycomb lung - drobné cysty oddělené tuhým vazivem).",
      microscopy: "Difuzní intersticiální fibróza: alveolární septa jsou masivně ztluštělá kolagenním vazivem, kapilární síť mizí. Nacházíme fibroblastická ložiska (fibroblastic foci). V pozdní fázi vznikají cystické prostory vystlané bronchiálním epitelem (voštinová přestavba).",
      clinical: "Projevuje se plíživě narůstající suchou námahovou dušností a suchým kašlem. Při poslechu jsou typické jemné inspirační krepitace (zvuk rozlepování suchého zipu). Vede k plicní hypertenzi, cor pulmonale a respiračnímu selhání."
    },
    quiz: [
      {
        question: "Co vyjadřuje termín 'voštinová plíce' (honeycomb lung)?",
        options: [
          "Plicní tkáň napadenou včelami",
          "Konečné stadium plicní fibrózy, kdy je normální plicní parenchym nahrazen cystickými dutinkami s tuhou vazivovou stěnou",
          "Akutní plicní edém",
          "Vzhled plic u akutní bakteriální pneumonie"
        ],
        correct: 1,
        explanation: "Voštinová plíce je makroskopickým i mikroskopickým obrazem terminální fáze plicních fibróz. Plicní sklípky jsou zničeny zánětem a jizvením a nahrazeny drobnými cystickými prostory (voštinami) s tuhými kolagenními stěnami."
      },
      {
        question: "Jaký poslechový nález je charakteristický pro pacienty s plicní fibrózou (intersticiálními plicními procesy)?",
        options: [
          "Tiché dýchání bez jakýchkoliv zvuků",
          "Inspirační krepitus (zvuk připomínající rozlepování suchého zipu) na konci nádechu",
          "Pískoty a vrzoty při výdechu",
          "Vlhké nesouvučné chrápoty"
        ],
        correct: 1,
        explanation: "Inspirační krepitace (velcro crackles) vzniká rozlepováním tuhých stěn sklípků na konci nádechu. Zvuk je suchý a velmi charakteristický pro plicní fibrózu, na rozdíl od vhkých chrapotů u edému plic."
      }
    ]
  },
  {
    id: "spec-18",
    title: "Bakteriální záněty plic (etiologie, makroskopické a mikroskopické nálezy, komplikace)",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["pneumonie", "bronchopneumonie", "krupózní", "hepatizace", "komplikace", "pneumokok"],
    content: {
      definition: "Bakteriální pneumonie je akutní zánět plicního parenchymu (alveolů a bronchiolů) vyvolaný bakteriálními patogeny, doprovázený exsudací do sklípkových prostor.",
      etiology: "Streptococcus pneumoniae (pneumokok - nejčastější), Staphylococcus aureus, Haemophilus influenzae, Klebsiella pneumoniae, Pseudomonas aeruginosa.",
      pathogenesis: "Dva hlavní anatomické typy: 1. Lobární (krupózní) pneumonie: postihuje difuzně celý plicní lalok. Klasický průběh má čtyři stadia (kongesce, červená hepatizace, šedá hepatizace, rezoluce). Dnes je vzácná díky antibiotikům. 2. Bronchopneumonie: ložiskový zánět začínající v bronchiolách a šířící se na okolní alveoly (tvoří vícečetná ložiska).",
      macroscopy: "Lobární pneumonie: postižený lalok je zvětšený, tuhý, těžký, bezvzdušný. Ve stadiu červené hepatizace je tmavě červený (vzhled jater). V šedé hepatizaci je šedavý, suchý. Bronchopneumonie: plíce je skvrnitá, nacházíme v ní vícečetná šedavá nebo žlutavá ložiska (1–3 cm) tuhé konzistence střídaná se vzdušnou plící.",
      microscopy: "Lobární pneumonie: \n- stadium červené hepatizace: alveoly jsou zaplavené exsudátem z fibrinové sítě, hojných erytrocytů a neutrofilů; \n- stadium šedé hepatizace: erytrocyty se rozpadají, v alveolech dominuje fibrin a hustý infiltrát neutrofilů. Bronchopneumonie: bronchioly jsou vyplněné hnisavým exsudátem, zánět se šíří do okolních alveolů, v infiltrátu převažují neutrofily, stroma (septa) je překrvené.",
      clinical: "Komplikace: 1. Karnifikace plíce (organizace exsudátu vazivem za vzniku nevzdušné tkáně - plíce 'masovatí'), 2. Pleurální empyém (hnis v pleuře), 3. Plicní absces (kolikvace tkáně s dutinou), 4. Sepse a metastatické abscesy (např. meningitida)."
    },
    quiz: [
      {
        question: "Co znamená termín 'karnifikace plíce' (masovatění plíce) jako komplikace pneumonie?",
        options: [
          "Přeměna plicní tkáně v kosterní sval",
          "Nedostatečné vyčištění fibrinózního exsudátu z alveolů, který je následně zorganizován granulační tkání a přeměněn v nevzdušné kolagenní vazivo (tkáň vzhledem připomíná maso)",
          "Zvýšená vzdušnost plic",
          "Nádorové bujení plic"
        ],
        correct: 1,
        explanation: "Při normálním hojení (rezoluci) pneumonie enzymy makrofágů exsudát zkapalní a ten je vykašlán nebo resorbován. Pokud se tak nestane (např. při špatné imunitě), do fibrinu v alveolech vrůstá ze sept vazivo. Alveoly zanikají a plíce se mění v masitou vazivovou jizvu (karnifikuje)."
      },
      {
        question: "Které buňky tvoří hlavní složku alveolárního exsudátu ve stadiu šedé hepatizace lobární pneumonie?",
        options: [
          "Erytrocyty a plazmatické buňky",
          "Fibrin a odumřelé neutrofilní granulocyty",
          "Eosinofily a fibroblasty",
          "Mnohojaderné obří buňky Langhansova typu"
        ],
        correct: 1,
        explanation: "Ve stadiu šedé hepatizace (hepatisatio grisea) dochází k lýze (rozpadu) erytrocytů z předchozího stadia. V alveolech dominuje hustá síť fibrinu a záplava aktivních i odumřelých neutrofilů, což dává plíci typickou šedou barvu a suchý vzhled."
      }
    ]
  },
  {
    id: "spec-19",
    title: "Virové a mykotické záněty plic (etiologie, makroskopické a mikroskopické nálezy)",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["atypická", "pneumonie", "intersticiální", "pneumocystóza", "aspergilus", "kandidóza"],
    content: {
      definition: "Virové plicní záněty (atypické pneumonie) postihují primárně intersticium plic. Mykotické (plísňové) záněty jsou oportunní infekce u imunokompromitovaných jedinců a často vyvolávají nekrózu a granulomy.",
      etiology: "Virové: Influenza (chřipka), RSV, CMV, SARS-CoV-2. Mykotické: Aspergillus fumigatus, Candida albicans, Pneumocystis jirovecii (houba vyvolávající pneumocystózu u AIDS).",
      pathogenesis: "Virová pneumonie: virus napadá pneumocyty a buňky bronchiolů, vyvolává jejich alteraci. Zánět (exsudát) se nehromadí v alveolech (ty zůstávají volné - proto atypická), ale v alveolárních septech (intersticiu). Mykotická: plísňová vlákna (hyfy) mají tendenci prorůstat stěnou cév (angioinvazivní růst) -> trombózy -> infarkty a nekrózy plic.",
      macroscopy: "Virová p.: plíce jsou překrvené, skvrnité, mírně tuhé, bez výrazných ložisek hnisu. Aspergilóza: šedohnědé kulaté uzly s černým středem (aspergilom v starých kavernách), ložiska nekrózy. Pneumocystóza: plíce tuhé, bezvzdušné, šedobílé.",
      microscopy: "Virová p.: alveolární septa jsou masivně ztluštělá edémem a infiltrátem z lymfocytů, plazmocytů a histiocytů (intersticiální pneumonitida). V alveolech mohou být hyalinní blány. Aspergilóza: větvené hyfy (pod úhlem 45°) prorůstající do cév, nekróza a hemoragie. Pneumocystóza: alveoly vyplněné eozinofilním 'pěnovým' exsudátem (připomíná plástev medu), stříbřením se prokáží drobné cysty Pneumocystis.",
      clinical: "Virové pneumonie se projevují suchým, dráždivým kašlem (v alveolech není hnis), vysokou horečkou a dušností. Mykotické infekce jsou vysoce fatální u hematologických pacientů a po transplantacích."
    },
    quiz: [
      {
        question: "Proč se virové pneumonie klinicky i morfologicky označují jako 'atypické'?",
        options: [
          "Protože se nevyskytují v plicích, ale v ledvinách",
          "Protože zánětlivý infiltrát (lymfocyty) a edém postihují alveolární septa (intersticium) a alveoly zůstávají vzdušné (bez hnisavého exsudátu)",
          "Protože se léčí zásadně chirurgickým odstraněním plíce",
          "Protože je způsobují priony"
        ],
        correct: 1,
        explanation: "Běžná bakteriální pneumonie (typická) vyplní alveoly hnisem, což je vidět na RTG jako stín a poslechově jako chrápoty. Virová (atypická) pneumonie má exsudát v septech. Alveoly jsou volné, takže poslechový nález může být chudý (atypický) i při těžké dušnosti."
      },
      {
        question: "Jak se v histologickém řezu plic projevuje plicní pneumocystóza (typická pro pacienty s AIDS)?",
        options: [
          "Kaseózní nekrózou celého laloku",
          "Přítomností růžového, napěněného (voštinovitého) exsudátu v alveolech, připomínajícího včelí plástev, obsahujícího drobné cysty",
          "Tvorbou kostní tkáně v septech",
          "Obřími nádorovými buňkami"
        ],
        correct: 1,
        explanation: "Pneumocystis jirovecii tvoří v alveolech charakteristický napěněný eozinofilní exsudát. Cysty jsou dobře viditelné při barvení podle Grocotta (methenamin stříbra) jako drobné černé kuličky tvaru promáčklého míčku."
      }
    ]
  },
  {
    id: "spec-20",
    title: "Patologie pleury",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["pleura", "pleuritida", "pneumotorax", "mesoteliom", "empyém", "výpotek"],
    content: {
      definition: "Patologie pleury (pohrudnice a poplicnice) zahrnuje přítomnost patologického obsahu v pleurální dutině (výpotek, krev, vzduch, hnis) a zánětlivé či nádorové procesy.",
      etiology: "Pleurální výpotek (hydrothorax): srdeční selhání. Krvácení (hemothorax): trauma, ruptura aneurysmatu. Vzduch (pneumothorax - PTX): ruptura emfyzémové buly (spontánní), trauma hrudníku. Zánět (pleuritis): šíření z pneumonie. Nádory: mezoteliom (azbest).",
      pathogenesis: "Pneumotorax: vniknutí vzduchu do pleurální dutiny zruší negativní nitrohrudní tlak, což vede ke kolapsu plíce. Pleuritida se vyvíjí nejčastěji jako reakce na plicní infekce: 1. Pleuritis sicca (suchá): povrch je pokryt fibrinem, vyvolává tření. 2. Pleuritis humida (vlhká): exsudace tekutiny (serózní, fibrinózní, hemoragická). 3. Pleurální empyém: hnisavý exsudát v pleurální dutině.",
      macroscopy: "Suchá pleuritida: matný, drsný, šedavý povrch pleury. Empyém: pleurální dutina je vyplněna hustým žlutozeleným hnisem, pleura je zbytnělá. Mezoteliom: difuzní šedobílé ztluštění pleury, které obepíná a stlačuje celou plíci jako tuhý krunýř.",
      microscopy: "Pleuritida: na povrchu pleury vrstva eozinofilního fibrinu s neutrofily, pod ní granulační tkáň a hyperémie. Pleurální empyém: masivní vrstva rozpadlých neutrofilů. Maligní mezoteliom: epiteloidní, sarkomatoidní nebo bifázický růst atypických mezotelií (pozitivita calretininu v IHC).",
      clinical: "Pneumotorax (zejména ventilový - tenzní) je akutní stav s posunem mediastina a útlakem žilního návratu, vyžaduje urgentní jehlovou dekompresi. Maligní mezoteliom pleury má extrémně špatnou prognózu a je spojen s expozicí azbestu."
    },
    quiz: [
      {
        question: "Co je to tenzní (ventilový) pneumotorax?",
        options: [
          "Chronický zánět pleury s usazováním vápníku",
          "Stav, kdy vzduch při nádechu proudí trhlinou do pleurální dutiny, ale při výdechu nemůže uniknout zpět (ventil), což vede k tlaku v hrudníku, kolapsu plíce, posunu mediastina a útlaku srdce",
          "Přítomnost hnisu v pleurální dutině",
          "Nádorové bujení na pohrudnici"
        ],
        correct: 1,
        explanation: "Tenzní pneumotorax funguje jako jednosměrný ventil. Tlak vzduchu v pleurální dutině s každým nádechem stoupá. Dochází k přetlačení mediastina na zdravou stranu, což stlačí zdravou plíci a zaškrtí duté žíly ústící do srdce (hrozí rychlá zástava oběhu)."
      },
      {
        question: "Který zhoubný nádor pleury je typicky spojen s vdechováním azbestových vláken?",
        options: [
          "Maligní mezoteliom pleury",
          "Bronchogenní adenokarcinom",
          "Spinocelulární karcinom",
          "Malobuněčný karcinom"
        ],
        correct: 0,
        explanation: "Maligní mezoteliom pleury je primární nádor vycházející z mezotelových buněk pohrudnice. Expozice azbestu je hlavním známým rizikovým faktorem, přičemž nádor vzniká s dlouhou latencí."
      }
    ]
  },
  {
    id: "spec-21",
    title: "Patologie mediastina",
    section: "Respirační systém",
    category: "Speciální",
    keywords: ["mediastinum", "mediastinitida", "thymom", "syndrom", "vena", "cava"],
    content: {
      definition: "Patologie mediastina (mezihrudí) zahrnuje zánětlivé procesy (mediastinitidy) a cystické či nádorové léze (thymom, lymfomy, neurogenní nádory).",
      etiology: "1. Akutní mediastinitida: perforace jícnu (např. Boerhaaveův syndrom po zvracení, cizí těleso), šíření z hlubokého krčního zánětu (od zubů), dehiscence sternotomie po operacích srdce. 2. Nádory: přední mediastinum (thymom, teratom, lymfomy, thyroidální struma - pravidlo 4T); zadní mediastinum (neurogenní nádory).",
      pathogenesis: "Akutní mediastinitida: agresivní hnisavý až gangrenózní zánět, který se rychle šíří volným mediastinálním tukem působením gravitace a pohybů srdce/dýchání. Nádory a cysty působí v mediastinu mechanicky útlakem okolních struktur (průdušnice, jícen, velké cévy).",
      macroscopy: "Mediastinitida: tkáň je prosáklá žlutozeleným hnisem, páchne, tuk je nekrotický, ložiska gangrény. Syndrom horní duté žíly: masivní překrvení a otok obličeje, krku a horních končetin (tzv. Stokesův límec) v důsledku útlaku v. cava superior nádorem (např. lymfomem).",
      microscopy: "Mediastinitida: masivní záplava neutrofilů, nekróza tukové tkáně, fibrin, bakterie. Thymom: nádor z epiteliálních buněk brzlíku, mikroskopicky se dělí na typ A (vřetenité buňky), typ B (kulaté epitelie s hojnými lymfocyty) a typ C (maligní karcinom thymu).",
      clinical: "Akutní mediastinitida má extrémně vysokou úmrtnost (až 50 %) a vyžaduje urgentní chirurgickou drenáž a antibiotika. Projevuje se krutou bolestí za hrudní kostí. Thymomy mohou být asociovány s autoimunitní myasthenia gravis (svalová slabost)."
    },
    quiz: [
      {
        question: "Co je to Stokesův límec a u jakého stavu v mediastinu vzniká?",
        options: [
          "Zvápenatění krčních lymfatických uzlin",
          "Otok a cyanóza obličeje, krku a horní části hrudníku vznikající při útlaku horní duté žíly (syndrom horní duté žíly) nádorem v mediastinu",
          "Zánět záklopky hrtanové",
          "Vrozená kožní řasa na krku"
        ],
        correct: 1,
        explanation: "Stokesův límec je klinickým projevem obstrukce v. cava superior. Nádor (např. bronchogenní karcinom nebo lymfom) stlačí tuto tenkostěnnou žílu, což zablokuje odtok krve z horní poloviny těla. Vzniká edém a cyanóza hlavy a krku."
      },
      {
        question: "Které autoimunitní neurologické onemocnění je typicky asociováno s thymomem (nádorem brzlíku)?",
        options: [
          "Roztroušená skleróza (RS)",
          "Myasthenia gravis (těžká svalová slabost)",
          "Alzheimerova choroba",
          "Parkinsonova nemoc"
        ],
        correct: 1,
        explanation: "Myasthenia gravis (způsobená protilátkami proti acetylcholinovým receptorům na nervosvalové ploténce) je přítomna u cca 30–40 % pacientů s thymomem. Odstranění thymomu (thymektomie) často vede ke zlepšení příznaků myastenie."
      }
    ]
  },
  {
    id: "spec-22",
    title: "Patologie jícnu",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["jícen", "varixy", "reflux", "esofagitida", "Barrett", "divertikl", "karcinom"],
    content: {
      definition: "Patologie jícnu zahrnuje poruchy motility (achalázie), dilatace cév (jícnové varixy), záněty (ezofagitidy) a nádory (spinocelulární karcinom, adenokarcinom).",
      etiology: "1. Jícnové varixy: portální hypertenze (jaterní cirhóza). 2. Refluxní ezofagitida (GERD): nedovíravost dolního jícnového svěrače. 3. Karcinom: kouření a alkohol (spinocelulární), Barrettův jícen (adenokarcinom).",
      pathogenesis: "Jícnové varixy: při portální hypertenzi teče krev z v. portae přes anastomózy (v. gastrica sinistra a vv. oesophageae) do v. cava superior. Tyto drobné podslizniční žíly jícnu se masivně rozšíří. Refluxní ezofagitida: kyselý žaludeční obsah dráždí dlaždicový epitel jícnu, což vede k zánětu a případně k intestinální metaplazii (Barrettův jícen).",
      macroscopy: "Jícnové varixy: vinuté, modravé, zbytnělé žíly vyčnívající do podslizniční vrstvy dolního jícnu (po ruptuře nacházíme masivní krvácení). Refluxní ezofagitida: překrvení, lineární eroze a vředy v dolní třetině jícnu. Barrettův jícen: červené, sametové jazyky sliznice šířící se z žaludku nahoru.",
      microscopy: "Refluxní ezofagitida: hyperplazie bazální vrstvy dlaždicového epitelu, prodloužení papil dermis, infiltrace eosinofily a neutrofily. Barrettův jícen: jednovrstevný cylindrický epitel s mucinózními pohárkovými buňkami (střevní metaplazie) namísto dlaždicového epitelu. Karcinom: buď spinocelulární (rohovějící čepy), nebo adenokarcinom (tvorba žlázek z Barrettova jícnu).",
      clinical: "Ruptura jícnových varixů způsobuje masivní, život ohrožující krvácení (zvracení jasné krve - hematemeze, černá stolice - melena) s úmrtností kolem 30 % při první epizodě. Barrettův jícen je závažná prekanceróza, vyžadující pravidelné bioptické sledování."
    },
    quiz: [
      {
        question: "Proč vznikají jícnové varixy a jaké je jejich hlavní riziko?",
        options: [
          "Při nedostatku potravy; hrozí udušením",
          "Při portální hypertenzi (např. u jaterní cirhózy) jako portokavální anastomózy; hrozí jejich prasknutím a fatálním krvácením do trávicího traktu (hematemeze)",
          "V důsledku infekce plísněmi; hrozí zúžením jícnu",
          "Jsou to nezhoubné polypy"
        ],
        correct: 1,
        explanation: "Jícnové varixy jsou rozšířené žíly v dolní třetině jícnu, které slouží jako obtoková dráha (portokavální anastomóza) při vysokém tlaku v portální žíle. Jejich stěna je tenká a pod tlakem snadno praskne, což vyvolá masivní krvácení do GIT."
      },
      {
        question: "Který typ zhoubného nádoru jícnu vzniká v terénu Barrettova jícnu (intestinální metaplazie)?",
        options: [
          "Spinocelulární karcinom",
          "Adenokarcinom",
          "Leiomyosarkom",
          "Karcinoid"
        ],
        correct: 1,
        explanation: "Barrettův jícen představuje přeměnu dlaždicového epitelu na žlázový cylindrický epitel (metaplazii). Z tohoto žlázového epitelu se při hromadění mutací vyvíjí adenokarcinom. Spinocelulární karcinom vzniká z původního dlaždicového epitelu (hlavně vlivem alkoholu a kouření)."
      }
    ]
  },
  {
    id: "spec-23",
    title: "Gastritidy",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["gastritida", "autoimunitní", "pylori", "helicobacter", "anémie", "atrofie"],
    content: {
      definition: "Gastritida je zánětlivé onemocnění žaludeční sliznice. Dělí se na akutní (krátkodobý zánět, často s erozemi) a chronickou (dlouhodobý zánět vedoucí k atrofii sliznice).",
      etiology: "Akutní gastritida: NSAID (aspirin, ibuprofen), alkohol, těžký stres (stresové vředy), popáleniny (Curlingův vřed), intrakraniální tlak (Cushingův vřed). Chronická gastritida: 1. Typ A (autoimunitní): protilátky proti parietálním buňkám; 2. Typ B (bakteriální): infekce Helicobacter pylori (nejčastější); 3. Typ C (chemická): reflux žluči z dvanáctníku, NSAID.",
      pathogenesis: "Akutní g.: NSAID blokují COX-1 a snižují syntézu prostaglandinů, které chrání sliznici (snižují HCl, zvyšují hlen a HCO3-). Bez prostaglandinů kyselina poleptá sliznici. Chronická typ A: autoimunitní destrukce parietálních buněk v těle žaludku vede k achlorhydrii (chybí HCl) a nedostatku vnitřního faktoru. Chronická typ B: H. pylori produkuje ureázu (štěpí močovinu na amoniak, který ho chrání před kyselinou), poškozuje sliznici toxiny (CagA, VacA) a vyvolává chronický zánět antrum žaludku.",
      macroscopy: "Akutní g.: sliznice je zarudlá, oteklá, s četnými drobnými černohnědými erozemi (natrávená krev). Chronická atrofická gastritida: sliznice je vytenčená, vyhlazená (ztráta řas), jsou pod ní patrné prosvítající cévy submukózy.",
      microscopy: "Akutní g.: edém sliznice, překrvení, infiltrace neutrofily v lamina propria, povrchové nekrózy (eroze). Chronická g.: infiltrace lymfocyty a plazmatickými buňkami. U typu A: atrofie žlázek těla žaludku, chybění parietálních buněk. U typu B: H. pylori prokazatelný na povrchu hlenu (spirálovité tyčinky, barvení stříbřením Warthin-Starry nebo Giemsa), tvorba lymfatických folikulů ve sliznici (MALT).",
      clinical: "Chronická gastritida typu A vede k perniciózní anémii (nedostatek B12). Chronická gastritida typu B zvyšuje riziko peptických vředů, adenokarcinomu žaludku a MALT lymfomu (nádor z lymfatické tkáně sliznice)."
    },
    quiz: [
      {
        question: "U kterého typu chronické gastritidy dochází k autoimunitní destrukci parietálních buněk těla žaludku a k rozvoji perniciózní anémie?",
        options: [
          "U typu B (bakteriální - Helicobacter pylori)",
          "U typu A (autoimunitní)",
          "U typu C (chemická - reflux žluči)",
          "Gastritida nemá vliv na krevní obraz"
        ],
        correct: 1,
        explanation: "Chronická gastritida typu A (autoimunitní, 'A' jako autoimunitní) postihuje tělo a klenbu žaludku, kde jsou uloženy parietální buňky tvořící HCl a vnitřní faktor. Jejich destrukce znemožní vstřebávání vit. B12 a vyvolá perniciózní (megaloblastovou) anémii."
      },
      {
        question: "Jak se Helicobacter pylori chrání před extrémně kyselým prostředím žaludku?",
        options: [
          "Tvorbou silného voskového obalu",
          "Produkcí enzymu ureázy, který štěpí močovinu na amoniak a oxid uhličitý; vzniklý amoniak neutralizuje kyselinu v okolí bakterie",
          "Vniknutím přímo do buněk (intracelulárně)",
          "Helicobacter kyselé prostředí nesnáší a žije pouze ve dvanáctníku"
        ],
        correct: 1,
        explanation: "Helicobacter pylori produkuje velké množství ureázy. Tento enzym štěpí ureu (močovinu) přítomnou v žaludeční šťávě na alkalický amoniak (NH3), který vytvoří kolem bakterie zásaditý mikro-mrak ('neutralizační štít'), což jí umožní přežít v žaludku."
      }
    ]
  },
  {
    id: "spec-24",
    title: "Gastroduodenální vředová choroba",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["vřed", "peptický", "žaludeční", "duodenální", "perforace", "penetrace", "hemoragie"],
    content: {
      definition: "Gastroduodenální (peptická) vředová choroba je chronické, recidivující onemocnění charakterizované tvorbou vředů (defektů sliznice pronikajících přes lamina muscularis mucosae) v žaludku nebo v prvním úseku dvanáctníku.",
      etiology: "Infekce Helicobacter pylori (vyskytuje se u 70 % žaludečních a > 90 % duodenálních vředů), užívání NSAID (aspirin, ibuprofen), kouření, alkohol, genetické faktory (zvýšená sekrece HCl).",
      pathogenesis: "Nerovnováha mezi agresivními faktory (kyselina chlorovodíková, pepsin, H. pylori, žlučové kyseliny) a ochrannými faktory sliznice (hlenová vrstva, sekrece bikarbonátu, dobré prokrvení sliznice, prostaglandiny). H. pylori indukuje zánět a snižuje sekreci somatostatinu, což vede k hypersekreci HCl a poškození dvanáctníku (duodenální vřed).",
      macroscopy: "Chronický peptický vřed je obvykle solitární, kruhový nebo oválný (velikost 1–4 cm), s ostrými, strmými okraji (jako vyseknutý razidlem). Spodina vředu je čistá, šedavá (pokrytá fibrinem). Okolní sliznice se paprsčitě sbíhá k vředu (retrakce jizvy). Na rozdíl od vředovitého karcinomu, který má navalité, nepravidelné okraje.",
      microscopy: "Mikroskopicky má spodina chronického aktivního vředu čtyři vrstvy (od povrchu do hloubky): 1. Nekrotický detrit (fibrin, buněčné zbytky), 2. Pásmo nespecifického zánětu (neutrofily), 3. Pásmo granulační tkáně (fibroblasty, novotvořené kapiláry), 4. Vazivová jizva (kolagenní vazivo nahrazující muscularis propria).",
      clinical: "Projevuje se epigastrickou bolestí: u duodenálního vředu nalačno a v noci (bolest ustupuje po jídle); u žaludečního vředu bolest vzniká brzy po jídle. Komplikace: 1. Krvácení (masivní hematemeze a melena při nahlodání cévy na spodině - např. a. gastroduodenalis), 2. Perforace (protržení stěny do volné dutiny břišní -> purulentní peritonitida), 3. Penetrace (prohlodání do sousedního orgánu - typicky do slinivky břišní), 4. Stenoza pyloru (jizvením)."
    },
    quiz: [
      {
        question: "Jak se makroskopicky liší benigní peptický vřed od ulcerovaného adenokarcinomu žaludku?",
        options: [
          "Benigní vřed je vždy větší než 10 cm",
          "Benigní vřed je ostře ohraničený, má hladké a strmé okraje a čistou spodinu; maligní vřed má nepravidelné, navalité (vyvýšené) okraje a špinavou, nekrotickou spodinu",
          "Maligní vřed se nevyskytuje v žaludku, pouze v jícnu",
          "Neliší se, diagnózu lze stanovit pouze posmrtně"
        ],
        correct: 1,
        explanation: "Toto odlišení je zásadní při gastroskopii. Benigní peptický vřed vypadá jako 'vyseknutý razidlem' s čistým dnem. Karcinom roste infiltrativně, proto jsou jeho okraje vyvýšené (navalité), nepravidelné a dno je vyplněno rozpadající se nádorovou tkání. Vždy se však odebírá biopsie k potvrzení."
      },
      {
        question: "Která významná tepna bývá nejčastěji nahlodána (arozována) vředem na zadní stěně dvanáctníku, což vede k masivnímu krvácení?",
        options: [
          "Arteria splenica",
          "Arteria gastroduodenalis",
          "Arteria renalis dextra",
          "Arteria mesenterica superior"
        ],
        correct: 1,
        explanation: "Arteria gastroduodenalis probíhá těsně za zadní stěnou bulbu dvanáctníku (duodena). Pokud vřed na zadní stěně penetruje hluboko přes stěnu, může nahlodat (arozovat) tuto velkou tepnu, což vyvolá prudké, život ohrožující krvácení."
      }
    ]
  },
  {
    id: "spec-25",
    title: "Malabsorpční syndrom (m. Whipple), Celiakie",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["celiakie", "gluten", "malabsorpce", "Whipple", "PAS", "Tropheryma", "klky"],
    content: {
      definition: "Malabsorpční syndrom je stav narušení trávení (maldigesce) a/nebo vstřebávání (malabsorpce) živin, vitamínů a vody v tenkém střevě. Celiakie (glutenová enteropatie) je autoimunitní enteropatie vyvolaná nesnášenlivostí lepku (glutenu).",
      etiology: "Celiakie: genetická dispozice (vazba na HLA-DQ2/DQ8), přítomnost lepku v potravě. Whippleova choroba: infekce bakterií Tropheryma whipplei.",
      pathogenesis: "Celiakie: lepek je štěpen na gliadin. Tkáňová transglutamináza (tTG) deamiduje gliadin, který je pak prezentován imunitním buňkám. CD4+ T-lymfocyty spouštějí zánětlivou reakci a CD8+ intraepiteliální lymfocyty ničí enterocyty tenkého střeva. Dochází k postupné atrofii střevních klků. Whippleova choroba: bakterie se hromadí v makrofázích lamina propria tenkého střeva a blokují lymfatický odtok (porucha vstřebávání tuků).",
      macroscopy: "Celiakie: sliznice dvanáctníku a lačníku je vyhlazená, chybí normální cirkulární řasy (Kerckringovy), má mozaikovitý povrch. Whippleova ch.: sliznice tenkého střeva je zbytnělá, s bělavě-žlutými skvrnami (nahromaděný tuk v lymfatických cévách).",
      microscopy: "Celiakie (klasické histologické znaky - klasifikace podle Marshe): 1. Atrofie (vyhlazení) střevních klků (vymizení absorpční plochy), 2. Hyperplazie (prodloužení) Lieberkühnových krypt (snaha o regeneraci), 3. Zmnožení intraepiteliálních lymfocytů (IEL > 25 na 100 enterocytů), 4. Chronický zánětlivý infiltrát v lamina propria. Whippleova ch.: lamina propria je zapplavená velkými pěnivými makrofágy, které obsahují tyčinkovité bakterie (vysoce pozitivní v barvení PAS - jasně červená zrna).",
      clinical: "Celiakie se projevuje chronickými průjmy, objemnou mastnou stolicí (steatorhea), hubnutím, anémií z nedostatku železa a osteoporózou. V séru se stanovují protilátky proti tTG (IgA). Whippleova choroba je systémová: kromě malabsorpce způsobuje artritidu, horečky a neurologické příznaky."
    },
    quiz: [
      {
        question: "Které tři histologické změny v tenkém střevě jsou typické pro rozvinutou celiakii (Marsh III)?",
        options: [
          "Ukládání amyloidu, nekróza svaloviny, hnisavý infiltrát",
          "Atrofie (vyhlazení) klků, hyperplazie krypt a zmnožení intraepiteliálních lymfocytů (IEL)",
          "Dlaždicobuněčná metaplazie, tvorba abscesů, kalcifikace",
          "Přítomnost kaseózní nekrózy v submukóze"
        ],
        correct: 1,
        explanation: "Histologický obraz celiakie je charakterizován destrukcí klků (atrofie), prodloužením krypt, ze kterých buňky regenerují (hyperplazie), a přítomností zánětu - lymfocytů přímo v epitelu (intraepiteliální lymfocytóza) a v lamina propria."
      },
      {
        question: "Jakým barvením se v histologii prokazují makrofágy u Whippleovy choroby?",
        options: [
          "Barvením Kongočervení",
          "PAS barvením (Periodic Acid-Schiff - barví se intenzivně purpurově/červeně)",
          "Perlovou reakcí",
          "Ziehl-Neelsenovým barvením"
        ],
        correct: 1,
        explanation: "Bakterie Tropheryma whipplei, které jsou nahromaděné v cytoplasmě makrofágů, mají stěnu bohatou na glykoproteiny. Tyto glykoproteiny reagují v PAS barvení intenzivně purpurovou (červenou) barvou. PAS-pozitivní makrofágy v tenkém střevě jsou pro Whippleovu chorobu diagnostické."
      }
    ]
  }
];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_SPECIAL_1 = DATA_SPECIAL_1;
}
