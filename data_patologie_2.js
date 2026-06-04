// data_patologie_2.js - Databáze otázek z obecné patologie (témata 21 - 40)
const DATA_PATOLOGIE_2 = [
  {
    id: "pat-21",
    title: "Atrofie (rozdělení, příčiny, příklady)",
    section: "Adaptace a progresivní změny",
    keywords: ["atrofie", "involuce", "hypofunkce", "kachexie", "tlaková", "senilní", "numerická"],
    content: {
      definition: "Atrofie je získané zmenšení původně normálně vyvinutého orgánu nebo tkáně v důsledku úbytku jeho funkčních buněk a/nebo zmenšení jejich velikosti. Představuje adaptaci buňky na snížené metabolické nároky.",
      etiology: "Nedostatečná výživa (hladovění, stenóza jícnu), snížení zátěže (imobilizace končetiny), ztráta inervace (obrna), snížení cévního zásobení (ischémie), ztráta endokrinní stimulace (menopauza) nebo mechanický tlak (nádor, městnání sekretu).",
      pathogenesis: "Rozlišuje se: 1. Atrofie prostá (atrophia simplex) - zmenšuje se velikost buněk (častá v srdci, kosterním svalu); 2. Atrofie numerická (atrophia numerica) - klesá počet buněk apoptózou (častá v děloze, kostní dřeni). V buňkách klesá proteosyntéza, zvyšuje se degradace proteinů (systém ubiquitin-proteasom) a probíhá autofagie opotřebených organel.",
      macroscopy: "Orgán je zmenšený, jeho hmotnost je snížená. Pouzdro bývá zvrásněné, cévní řečiště je vinuté (cévní kličky se přizpůsobují menšímu objemu). Konzistence bývá tužší kvůli relativnímu zmnožení stroma. U hnědé atrofie (atrophia fusca) mají orgány (srdce, játra) tmavě hnědé zbarvení.",
      microscopy: "Buňky jsou menší než normálně. V cytoplasmě atrofických buněk se hromadí zrnka lipofuscinu (žlutohnědý pigment z opotřebení, perinukleárně). V parenchymu může docházet k relativnímu zmnožení vaziva nebo k jeho nahrazení tukovou tkání (atrophia lipomatosa, např. v hypoplastickém pankreatu).",
      clinical: "Atrofie je reverzibilní proces - při obnovení fyziologických podmínek se buňky mohou vrátit k původní velikosti. Pokud však příčina trvá příliš dlouho, buňky odumírají a tkáň je nahrazena vazivem. Příkladem je atrofie mozkové kůry u aterosklerózy s následnou demencí."
    },
    quiz: [
      {
        question: "Jak se liší atrofie prostá (simplex) od atrofie numerické?",
        options: [
          "Prostá atrofie je vrozená, numerická získaná",
          "U prosté atrofie se zmenšuje velikost jednotlivých buněk; u numerické atrofie klesá celkový počet buněk",
          "Prostá atrofie postihuje pouze kůži, numerická kosti",
          "U numerické atrofie buňky vykazují buněčný atypismus"
        ],
        correct: 1,
        explanation: "U atrofie prosté (typické např. pro kardiomyocyty či kosterní svaly) buňky zmenšují svůj objem, aby snížily energetické nároky. U numerické atrofie (typické pro dělící se tkáně) klesá počet buněk, nejčastěji mechanismem apoptózy."
      },
      {
        question: "Co je to atrophia lipomatosa (lipomatózní atrofie)?",
        options: [
          "Zmenšení tukové tkáně u kachektických pacientů",
          "Stav, kdy je atrofovaný parenchym orgánu (např. slinivky, kostní dřeně či ledviny) nahrazen zmnoženou tukovou tkání",
          "Nádorové bujení tukové tkáně",
          "Ukládání lipidů v cytoplasmě hepatocytů"
        ],
        correct: 1,
        explanation: "Při atrofii funkčního parenchymu některých orgánů se uvolněné místo vyplňuje tukovým vazivem (vakatní hypertrofie tuku), aby se zachoval objem a tvar orgánu. Typické je to pro slinivku břišní, lymfatické uzliny či ledvinný sinus."
      }
    ]
  },
  {
    id: "pat-22",
    title: "Metaplázie, metalaxie",
    section: "Adaptace a progresivní změny",
    keywords: ["metaplázie", "metalaxie", "dlaždicobuněčná", "Barrettův", "reprogramování"],
    content: {
      definition: "Metaplazie je plně reverzibilní adaptivní změna, při které je jeden diferencovaný buněčný typ (epiteliální nebo mezenchymální) nahrazen jiným diferencovaným buněčným typem odolnějším vůči nepříznivým vnějším vlivům. Metalaxie je přestavba tkáně (např. kosti při hojení zlomeniny).",
      etiology: "Chronické mechanické, chemické nebo fyzikální dráždění. Příkladem je kouření (v plicích), reflux HCl (v jícnu), přítomnost konkrementů (v žlučových či močových cestách).",
      pathogenesis: "Metaplazie nevzniká tak, že by se již hotová diferencovaná buňka přeměnila v jinou. Dochází k reprogramování kmenových (rezervních) buněk v tkáni působením lokálních cytokinů a růstových faktorů. Tyto kmenové buňky pak nastoupí jinou diferenciační dráhu.",
      macroscopy: "Sliznice mění svůj vzhled. Např. u Barrettova jícnu se normálně světlá, hladká dlaždicobuněčná sliznice jícnu mění v červenavou, sametovou sliznici žaludečního/střevního typu (intestinální metaplazie).",
      microscopy: "1. Dlaždicobuněčná metaplazie: víceřadý řasinkový epitel průdušek u kuřáků je nahrazen vrstevnatým dlaždicovým epitelem. 2. Intestinální metaplazie: jednovrstevný dlaždicový epitel jícnu u refluxu je nahrazen jednovrstevným cylindrickým epitelem s pohárkovými buňkami (Barrettův jícen). 3. Mezenchymální metaplazie: vznik kostní tkáně v jizvách (myositis ossificans).",
      clinical: "Metaplastický epitel je sice odolnější vůči dráždění, ale ztrácí své původní důležité funkce (např. řasinky v průduškách neodstraňují hlen). Zásadní je, že dlouhodobě trvající metaplazie se může zvrhnout v dysplazii a vyústit v maligní nádor (karcinom plic z dlaždicobuněčné metaplazie, adenokarcinom z Barrettova jícnu)."
    },
    quiz: [
      {
        question: "Co je podstatou Barrettova jícnu?",
        options: [
          "Vrozená atrézie jícnu u novorozenců",
          "Metaplazie jednovrstevného dlaždicového epitelu jícnu na epitel cylindrický se střevními pohárkovými buňkami v důsledku refluxu žaludeční kyseliny",
          "Infekce jícnu plísní Candida albicans",
          "Výskyt jícnových varixů při portální hypertenzi"
        ],
        correct: 1,
        explanation: "Barrettův jícen je klasickým příkladem cylindrické (intestinální) metaplazie. Vzniká jako adaptace na chronické poleptání sliznice jícnu kyselým žaludečním obsahem. Vícevrstevný dlaždicový epitel se mění na jednovrstevný cylindrický epitel s pohárkovými buňkami, který lépe odolává kyselině, ale představuje prekancerózu."
      },
      {
        question: "Je metaplazie reverzibilní (vratný) děj?",
        options: [
          "Ne, jakmile jednou vznikne, je trvalá a nelze ji zvrátit",
          "Ano, pokud se odstraní dráždivý podnět, tkáň se může vrátit k původnímu typu epitelu",
          "Je reverzibilní pouze u dětí do 10 let",
          "Reverzibilní je pouze mezenchymální metaplazie, epiteliální nikoliv"
        ],
        correct: 1,
        explanation: "Metaplazie je adaptivní proces. Pokud odstraníme příčinu dráždění (např. pacient přestane kouřit nebo se vyléčí reflux), kmenové buňky se vrátí k produkci původního fyziologického typu buněk."
      }
    ]
  },
  {
    id: "pat-23",
    title: "Hypertrofie, hyperplázie",
    section: "Adaptace a progresivní změny",
    keywords: ["hypertrofie", "hyperplázie", "adaptace", "myokard", "prostata", "gravidita"],
    content: {
      definition: "Hypertrofie a hyperplazie jsou progresivní adaptivní procesy vedoucí ke zvětšení objemu tkáně nebo orgánu. Hypertrofie je zvětšení velikosti jednotlivých buněk. Hyperplazie je zvýšení počtu buněk.",
      etiology: "Zvýšená funkční zátěž (cvičení, hypertenze), hormonální stimulace (těhotenství, puberta) nebo kompenzace po ztrátě tkáně (resekce jater).",
      pathogenesis: "Hypertrofie: probíhá v tkáních s omezenou nebo nulovou schopností dělení buněk (srdce, kosterní sval, neurony). Dochází k aktivaci genů pro syntézu strukturálních proteinů a organel (zmnožení myofibril, mitochondrií). Hyperplazie: probíhá v tkáních s dělícími se buňkami (epitelie, stroma, kostní dřeň). Je stimulována růstovými faktory a hormony, které aktivují buněčný cyklus.",
      macroscopy: "Orgán je zvětšený a těžší. U hypertrofie myokardu stěna levé komory ztluští (nad fyziologických 12 mm, u těžké hypertenze až na 25 mm). U hyperplazie prostaty (BPH) nacházíme uzlovité zvětšení periuretrální zóny stlačující močovou trubici.",
      microscopy: "Hypertrofie: kardiomyocyty jsou širší, mají velká, hyperchromní a hranatá jádra (polyploidie). Hyperplazie: zmnožení normálně vyhlížejících buněk, např. u hyperplazie endometria nacházíme zmnožení žlázek s mitotickou aktivitou.",
      clinical: "Hypertrofie srdce je zpočátku kompenzačním mechanismem. Nadkritická hypertrofie (přesahující možnosti cévního zásobení) však vede k ischemii, fibrotizaci myokardu a srdečnímu selhání. Hyperplazie může být fyziologická (růst dělohy v graviditě) nebo patologická (hyperplazie endometria při nadbytku estrogenů s rizikem maligního zvratu)."
    },
    quiz: [
      {
        question: "Proč dochází v srdci při dlouhodobé hypertenzi k hypertrofii a nikoliv k hyperplazii kardiomyocytů?",
        options: [
          "Protože srdce nemá dostatečné cévní zásobení pro dělení buněk",
          "Protože kardiomyocyty dospělého člověka jsou permanentní buňky, které ztratily schopnost mitotického dělení, a mohou se adaptovat pouze zvětšením své velikosti",
          "Protože kardiomyocyty se dělí příliš rychle a nestíhají růst",
          "V srdci dochází k oběma procesům rovnoměrně"
        ],
        correct: 1,
        explanation: "Dospělé kardiomyocyty jsou trvale diferencované buňky (v G0 fázi buněčného cyklu) a nemohou se množit dělením (hyperplazií). Jedinou možnou adaptací na zvýšenou zátěž je hypertrofie - syntéza nových myofibril a zvětšení objemu stávajících buněk."
      },
      {
        question: "Který z následujících příkladů představuje patologickou hyperplazii?",
        options: [
          "Zvětšení mléčné žlázy během laktace",
          "Benigní hyperplazie prostaty (BPH) a hyperplazie endometria vlivem estrogenové stimulace",
          "Zbytnění kosterního svalstva u kulturistů",
          "Zbytnění levé komory srdeční u hypertenze"
        ],
        correct: 1,
        explanation: "BPH a estrogeny indukovaná hyperplazie endometria jsou klasické patologické hyperplazie (zmnožení počtu buněk pod vlivem dysregulovaných hormonů). Zvětšení prsu v laktaci je fyziologická hyperplazie, zatímco zbytnění svalů a srdce jsou příklady hypertrofie."
      }
    ]
  },
  {
    id: "pat-24",
    title: "Regenerace, reparace",
    section: "Adaptace a progresivní změny",
    keywords: ["regenerace", "reparace", "hojení", "granulační", "jizva", "labilní", "stabilní"],
    content: {
      definition: "Hojení tkání po poškození probíhá dvěma způsoby: regenerací (úplná obnova původní struktury a funkce tkáně nahrazením identickými buňkami) nebo reparací (zahojení defektu méněcennou vazivovou tkání za vzniku jizvy).",
      etiology: "Jakékoliv poškození buněk a tkání - traumata, záněty, nekrózy (infarkty), chirurgické řezy.",
      pathogenesis: "Schopnost regenerace závisí na typu buněk: 1. Labilní buňky (neustále se dělí - epitelie kůže, sliznic, krvetvorba) - excelentní regenerace. 2. Stabilní buňky (v klidu, ale při poškození mohou vstoupit do buněčného cyklu - hepatocyty, epitel tubulů ledvin) - regenerují, pokud je zachováno vazivové stroma. 3. Permanentní buňky (nedělí se - neurony, kardiomyocyty) - hojí se vždy reparací (jizvou). Fáze reparace: zánět, tvorba granulační tkáně (novotvořené cévy, fibroblasty), ukládání kolagenu a remodelace vaziva v jizvu.",
      macroscopy: "Regenerace: tkáň vypadá identicky jako před poškozením. Reparace: vzniká jizva (cicatrix) - zpočátku červená a měkká (bohatá na cévy), postupně bledne, tuhne a smršťuje se (kontrakce jizvy myofibroblasty).",
      microscopy: "Granulační tkáň: zmnožené kapiláry lemované aktivním endotelem, mladé fibroblasty syntetizující kolagen, zánětlivý infiltrát (makrofágy čistící detrit). Zralá jizva: chudá na cévy a buňky, dominují husté, paralelně uspořádané snopce kolagenu.",
      clinical: "Při reparaci dochází k trvalé ztrátě původní funkce v místě jizvy (např. jizva po infarktu myokardu se nestahuje, vazivová jizva v ledvině nefiltruje moč). Hojení ovlivňuje věk, výživa (vitamín C nutný pro syntézu kolagenu), prokrvení a přítomnost infekce."
    },
    quiz: [
      {
        question: "Jak se hojí ischemická nekróza (infarkt) myokardu?",
        options: [
          "Kompletní regenerací kardiomyocytů a obnovením kontraktility",
          "Reparací - náhradou nekrotického ložiska nespecifickou vazivovou jizvou",
          "Vznikem tekuté pseudocysty vyplněné likvorem",
          "Hojí se uhelnou pseudomelanózou"
        ],
        correct: 1,
        explanation: "Kardiomyocyty jsou permanentní buňky bez schopnosti dělení. Po jejich odumření (infarktu) nemůže dojít k regeneraci; defekt je vyčištěn makrofágy a nahrazen vazivem (jizvou), které sice mechanicky stěnu zpevní, ale nepodílí se na stahu srdce."
      },
      {
        question: "Které buňky řadíme mezi labilní s nejvyšší schopností regenerace?",
        options: [
          "Neurony a buňky neuroglie",
          "Epidermis kůže, slizniční epitely GIT a buňky kostní dřeně",
          "Hepatocyty a buňky slinivky břišní",
          "Kosterní a hladké svalové buňky"
        ],
        correct: 1,
        explanation: "Labilní buňky se fyziologicky neustále dělí, aby nahradily buňky odloupané nebo zaniklé. Patří sem krycí epitely kůže a sliznic a kmenové buňky krvetvorby. Mají vynikající regenerační schopnost."
      }
    ]
  },
  {
    id: "pat-25",
    title: "Patologie stárnutí",
    section: "Adaptace a progresivní změny",
    keywords: ["stárnutí", "senescence", "telomery", "radikály", " Werner", "progerie"],
    content: {
      definition: "Stárnutí (senescence) je progresivní, fyziologický proces charakterizovaný postupným poklesem funkční kapacity buněk a tkání, sníženou adaptabilitou a zvýšenou náchylností k nemocem.",
      etiology: "Kombinace genetického programu (vnitřní faktory) a kumulativního poškození vlivem vnějšího prostředí (oxidační stres, záření, toxiny).",
      pathogenesis: "Teorie stárnutí: 1. Geneticky programované stárnutí - replikační senescence buněk. S každým dělením dochází ke zkracování telomer (koncových částí chromozomů), až buňka dosáhne Hayflickova limitu a přestane se dělit. Enzym telomeráza je aktivní u kmenových a nádorových buněk, u somatických chybí. 2. Teorie volných radikálů (kumulace oxidačního poškození DNA a mitochondrií). 3. Hromadění poškozených proteinů (ztráta proteostázy). Syndrome předčasného stárnutí (např. Wernerův syndrom, Hutchinson-Gilfordova progerie) jsou způsobeny mutacemi genů pro opravu DNA (např. helikázy).",
      macroscopy: "Celková atrofie orgánů (zmenšení mozku, srdce, jater), ztráta elasticity kůže (vrásky), šedivění vlasů (ztráta melanocytů ve folikulech), osteoporóza (řídnutí kostí), sklerotické změny cév.",
      microscopy: "Atrofie buněk, přítomnost lipofuscinu (perinukleárně). Zmnožení intersticilního kolagenu a ztráta elastických vláken. Akumulace somatických mutací a abnormality v buněčných jádrech.",
      clinical: "Stárnutí je spojeno s poklesem imunitní obrany (imunosenescence -> vyšší riziko infekcí a nádorů), sníženou adaptací oběhového systému, rozvojem neurodegenerace (Alzheimer) a metabolických poruch. Vede k přirozené smrti selháním homeostázy."
    },
    quiz: [
      {
        question: "Co je to Hayflickův limit?",
        options: [
          "Maximální tepová frekvence u starších osob",
          "Omezený počet dělení (replikační limit), kterým somatická buňka může projít před vstupem do fáze senescence, způsobený zkracováním telomer",
          "Maximální dávka ionizujícího ozáření, kterou tělo snese",
          "Limit pro vylučování urey ledvinami"
        ],
        correct: 1,
        explanation: "Hayflickův limit udává, že běžné lidské somatické buňky se mohou rozdělit pouze cca 50-70krát. Je to dáno tím, že při každé replikaci DNA se zkrátí telomery na koncích chromozomů. Jakmile dosáhnou kritické délky, aktivuje se p53 dráha a buňka se přestane dělit."
      },
      {
        question: "Který pigment se typicky hromadí v buňkách při stárnutí (senescenci)?",
        options: [
          "Hemosiderin",
          "Lipofuscin",
          "Melanin",
          "Bilirubin"
        ],
        correct: 1,
        explanation: "Lipofuscin je klasický pigment stárnutí. Hromadí se v lysosomech postmitotických buněk (neurony, kardiomyocyty) jako nerozpustný zbytek po peroxidaci lipidů a degradaci organel."
      }
    ]
  },
  {
    id: "pat-26",
    title: "Poruchy oběhu (příčiny a projevy oběhového selhání)",
    section: "Poruchy oběhu a perfuze",
    keywords: ["selhání", "oběh", "šok", "městnání", "edém", "cyanóza", "stáza"],
    content: {
      definition: "Poruchy oběhu zahrnují stavy, kdy kardiovaskulární systém není schopen zajistit dostatečný průtok krve tkáněmi k pokrytí jejich metabolických potřeb (oběhové selhání), nebo dochází k lokálním poruchám distribuce krve.",
      etiology: "1. Srdeční příčiny (kardiogenní - infarkt myokardu, chlopenní vady, arytmie). 2. Cévní příčiny (ztráta cévního tonu - anafylaxe, sepse; mechanická obstrukce - embolie). 3. Objemové příčiny (hypovolemie - krvácení, dehydratace).",
      pathogenesis: "Oběhové selhání se dělí na: a) Akutní (vedoucí k šoku - kritickému poklesu perfuze s tkáňovou hypoxií a přechodem na anaerobní metabolismus); b) Chronické (městnavé srdeční selhání - aktivace kompenzačních mechanismů: sympatikus, osa RAAS s retencí sodíku a vody, hypertrofie myokardu).",
      macroscopy: "Chronické levostranné selhání: překrvené, těžké plíce, rezavé zbarvení plic (indurace). Chronické pravostranné selhání: městnání ve velkém oběhu - otoky dolních končetin (anasarka), zvětšená muškátová játra (hepar moschatum), ascites (tekutina v břiše), městnavá slezina.",
      microscopy: "Plicní městnání: kapiláry v alveolárních septech jsou přeplněné erytrocyty, v alveolech je edémová tekutina a siderofágy (buňky srdečního selhání - makrofágy s hemosiderinem). Muškátová játra: venostáza a nekróza kolem centrálních venul, steatóza hepatocytů na periferii lalůčku.",
      clinical: "Projevy levostranného selhání: dušnost (dyspnoe), kašel s vykašláváním růžového sputa (plicní edém), ortopnoe (dušnost vleže). Projevy pravostranného selhání: symetrické otoky kotníků, zvýšená náplň krčních žil, hepatomegalie a dyspeptické potíže při překrvení GIT."
    },
    quiz: [
      {
        question: "Co jsou to 'buňky srdečního selhání' (heart failure cells) v plicních alveolech?",
        options: [
          "Hypertrofické kardiomyocyty, které vycestovaly do plic",
          "Alveolární makrofágy fagocytující erytrocyty, naplněné hemosiderinem, uvolněné při plicním městnání",
          "Plicní fibroblasty produkující kolagen",
          "Nádorové buňky plic"
        ],
        correct: 1,
        explanation: "Při levostranném srdečním selhání stoupá tlak v plicních cévách. Kapiláry praskají a erytrocyty unikají do alveolů. Zde jsou fagocytovány alveolárními makrofágy, v nichž se hemoglobin mění na hemosiderin. Tyto buňky (siderofágy) jsou typickým znakem městnání v plicích."
      },
      {
        question: "Jak vzniká makroskopický obraz 'muškátových jater' (hepar moschatum)?",
        options: [
          "Ukládáním amyloidových vláken kolem portálních polí",
          "Střídáním tmavě červených center lalůčků (stagnace krve a nekróza při pravostranném selhání) se světle žlutou periferií (steatóza z hypoxie)",
          "Infekcí jater parazity",
          "Difuzním jaterním infarktem"
        ],
        correct: 1,
        explanation: "Při chronickém městnání krve (pravostranné selhání) stagnuje krev v játrech kolem centrální žíly. Vzniká zde překrvení a tlaková nekróza. Okolní hepatocyty trpí hypoxií a podléhají steatóze (hromadění tuku). Na řezu to vytváří skvrnitý vzhled připomínající muškátový oříšek."
      }
    ]
  },
  {
    id: "pat-27",
    title: "Poruchy tkáňové perfuze (hyperémie, hemoragie)",
    section: "Poruchy oběhu a perfuze",
    keywords: ["hyperémie", "hemoragie", "kongesce", "krvácení", "hematom", "petechie"],
    content: {
      definition: "Hyperémie je zvýšené množství krve v cévách určité tkáně/orgánu. Hemoragie (krvácení) je únik krve z cévního řečiště mimo cévní stěnu.",
      etiology: "Hyperémie aktivní: zánět, zvýšená fyzická zátěž. Hyperémie pasivní (kongesce/venostáza): překážka v žilním odtoku (trombóza, srdeční selhání). Hemoragie: trauma, narušení cévní stěny patologickým procesem (ateroskleróza, aneurysma, nádor), poruchy srážlivosti (trombocytopenie, hemofilie).",
      pathogenesis: "Aktivní hyperémie je arteriální (dilatace arteriol vede k vyššímu přítoku okysličené krve). Pasivní hyperémie je venózní (stagnace odkysličené krve). Hemoragie vzniká: 1. per rhexin (roztržení cévy), 2. per diabrosin (prohlodání stěny např. vředem, nádorem), 3. per diapedesin (prolínání erytrocytů mezi endoteliemi při zvýšené propustnosti, např. u hypoxie, toxinů).",
      macroscopy: "Aktivní hyperémie: tkáň je jasně červená a teplá (erytém). Pasivní hyperémie: tkáň je modrofialová, studená (cyanóza), spojená s otokem. Hemoragie: petechie (tečkovité krvácení do 2 mm), purpura (krvavé skvrny do 1 cm), ekchymózy/sugilace (větší plošné podkožní výrony), hematom (trojrozměrný nahromaděný krevní výron).",
      microscopy: "Hyperémie: kapiláry a cévy jsou extrémně dilatované a přeplněné erytrocyty. Hemoragie: přítomnost erytrocytů mimo cévní lumen v intersticiu. Později se v místě objevují makrofágy s hemosiderinem (siderofágy) z odbouraného hemoglobinu.",
      clinical: "Důsledky krvácení závisí na rychlosti a objemu ztracené krve. Náhlá ztráta > 30 % objemu vede k hemoragickému šoku. Důležitá je také lokalizace - i malé krvácení do mozkového kmene nebo perikardu (tamponáda srdce) může být fatální."
    },
    quiz: [
      {
        question: "Jak se nazývá drobný, tečkovitý krevní výron do kůže nebo sliznic o velikosti do 2 mm?",
        options: [
          "Ekchymóza",
          "Petechie",
          "Hematom",
          "Sugilace"
        ],
        correct: 1,
        explanation: "Petechie jsou drobné (tečkovité) krevní výrony o velikosti do 2 mm. Vznikají nejčastěji při nedostatku krevních destiček (trombocytopenii), poruchách jejich funkce nebo zvýšené propustnosti kapilár (vaskulitidy)."
      },
      {
        question: "Co je to krvácení 'per diapedesin'?",
        options: [
          "Krvácení z mechanicky přerušené cévy",
          "Krvácení způsobené nádorovým rozrušením cévní stěny",
          "Krvácení prolínáním erytrocytů skrz neporušenou, ale zvýšeně propustnou stěnu kapilár a postkapilárních venul",
          "Krvácení z prasklého cévního aneurysmatu"
        ],
        correct: 2,
        explanation: "Při diapedéze nedochází k makroskopické ruptuře cévy. Erytrocyty procházejí (prolínají) skrz rozšířené mezibuněčné prostory mezi endoteliemi. Bývá to důsledek hypoxie, toxického poškození nebo těžkého zánětu."
      }
    ]
  },
  {
    id: "pat-28",
    title: "Poruchy tkáňové perfuze (ischémie, infarkt)",
    section: "Poruchy oběhu a perfuze",
    keywords: ["ischémie", "infarkt", "nekróza", "anémie", "bílý", "červený", "okluze"],
    content: {
      definition: "Ischemie je lokální omezení nebo úplné zastavení přítoku arteriální krve do tkáně, což vede k nedostatku kyslíku a živin. Infarkt je ložisko koagulační (nebo kolikvační v mozku) nekrózy tkáně způsobené akutní ischemií.",
      etiology: "Okluze tepny: trombóza, embolie, spazmus tepny, aterosklerotický plát, mechanický útlak cévy zvenčí (např. strangulace střeva).",
      pathogenesis: "Ischemie vede k poklesu ATP, selhání sodíko-draselné pumpy, edému buňky, influxu vápníku a aktivaci lytických enzymů, což vyústí v nekrózu. Rozlišují se: 1. Bílý (anemický) infarkt: vzniká v solidních orgánech s anatomicky konečnými tepnami (srdce, ledviny, slezina). 2. Červený (hemoragický) infarkt: vzniká v orgánech s dvojím oběhem (plíce, játra), v tkáních s bohatým kolaterálním oběhem (střevo) nebo při uvolnění žilního odtoku.",
      macroscopy: "Bílý infarkt: ložisko má tvar klínu (báze směřuje k povrchu orgánu, hrot k místu uzávěru cévy), je tuhé, šedavě žluté, ohraničené červeným lemem překrvení. Červený infarkt: ložisko je tmavě červené, prosáklé krví, pevné (např. plicní infarkt u městnání). Infarkt mozku (encefalomalacie): ložisko je kašovité, zkapalněné.",
      microscopy: "Bílý infarkt: koagulační nekróza - bezjaderné stíny buněk se zachovanou konturou tkáně, na periferii infiltrace neutrofily a novotvořené cévy (reparace). Červený infarkt: nekróza parenchymu masivně prostoupená erytrocyty z kolaterálního oběhu.",
      clinical: "Klinické projevy závisí na lokalizaci a citlivosti tkáně k hypoxii (mozek odumírá za 3-5 min, myokard za 20-30 min, vazivo vydrží hodiny). Typickými příklady jsou infarkt myokardu (bolest za hrudní kostí) a ischemická cévní mozková příhoda."
    },
    quiz: [
      {
        question: "Ve kterém z následujících orgánů vzniká typicky červený (hemoragický) infarkt?",
        options: [
          "V ledvině",
          "V plicích a střevě",
          "V myokardu",
          "Ve slezině"
        ],
        correct: 1,
        explanation: "Hemoragický infarkt vzniká v orgánech s dvojím krevním zásobením (např. plíce s a. pulmonalis a aa. bronchiales) nebo v tkáních s bohatou kolaterální sítí (střevo). Po uzávěru jedné cévy dochází k nekróze, ale do poškozeného ložiska stále proniká krev z druhého oběhu, která ho prosákne."
      },
      {
        question: "Jaký tvar má typicky ložisko anemického infarktu v ledvině nebo slezině?",
        options: [
          "Pravidelně kruhový",
          "Tvar klínu (bází k povrchu orgánu, hrotem k zablokované cévě)",
          "Nepravidelný, hvězdicovitý",
          "Infarkt postihuje vždy celý orgán difuzně"
        ],
        correct: 1,
        explanation: "Teplotní a cévní větvení v ledvině a slezině má vějířovitý charakter. Uzávěr větve proto způsobí nekrózu v oblasti, která se od místa uzávěru rozšiřuje k povrchu orgánu, což vytváří klínovitý tvar."
      }
    ]
  },
  {
    id: "pat-29",
    title: "Trombóza (rozdělení, příčiny vzniku, následky, organizace trombu)",
    section: "Poruchy oběhu and perfuze",
    keywords: ["trombóza", "trombus", "Virchow", "endotel", "hemostáza", "koagulace", "destičky"],
    content: {
      definition: "Trombóza je patologická intravaskulární koagulace krve zaživa, která vede k tvorbě sraženiny (trombu) a může způsobit částečnou či úplnou obstrukci cévy.",
      etiology: "Virchowova triáda: 1. Poškození endotelu (ateroskleróza, zánět cév, hypertenze). 2. Porucha toku krve - stáza nebo turbulence (imobilizace, varixy, aneurysmata). 3. Hyperkoagulační stav / trombofilie (genetický deficit antithrombinu III, proteinu C/S, Leidenská mutace faktoru V, dehydratace, nádory).",
      pathogenesis: "Arteriální trombus: vzniká v rychle proudící krvi, základem je adheze a agregace destiček na poškozený endotel (bílý destičkový trombus). Venózní trombus: vzniká v pomalu proudící krvi stagnací, dominuje aktivace koagulační kaskády s tvorbou fibrinové sítě zachycující erytrocyty (červený fibrinový trombus). Smíšený trombus (např. vrstvený) má střídající se vrstvy destiček/fibrinu a erytrocytů (Zahnovy linie).",
      macroscopy: "Trombus je suchý, matný, křehký, drsný a lpí na cévní stěně v místě poškození. Na řezu lze vidět Zahnovy linie. Arteriální tromby rostou retrográdně (proti proudu), žilní tromby propagují ve směru toku krve (k srdci).",
      microscopy: "Mikroskopicky vidíme sítě eozinofilního fibrinu s agregovanými krevními destičkami a zachycenými erytrocyty a leukocyty. Organizace trombu: prorůstání fibroblastů a endotelií z cévní stěny do trombu (granulační tkáň), tvorba nových cévních kanálků (rekanalizace trombu)."
    },
    quiz: [
      {
        question: "Co tvoří Virchowovu triádu rizikových faktorů pro vznik trombózy?",
        options: [
          "Hypotenze, anémie, trombocytopenie",
          "Poškození endotelu, poruchy proudění krve (stáza/turbulence) a hyperkoagulační stavy (trombofilie)",
          "Horečka, leukocytóza, tachykardie",
          "Ateroskleróza, obezita, věk nad 60 let"
        ],
        correct: 1,
        explanation: "Virchowova triáda popisuje tři hlavní patofyziologické mechanismy vedoucí k trombóze: poškození cévní stěny (endotelu), zpomalení či narušení toku krve (např. při imobilizaci) a změny ve složení krve vedoucí ke zvýšené srážlivosti."
      },
      {
        question: "Jak se chová venózní (žilní) trombus z hlediska směru svého růstu (propagace)?",
        options: [
          "Roste proti směru toku krve (retrográdně)",
          "Propaguje (roste) ve směru toku krve, tedy směrem k srdci",
          "Roste radiálně do všech stran stejně",
          "Žilní trombus nikdy neroste, zůstává stabilní"
        ],
        correct: 1,
        explanation: "Žilní tromby vznikají nejčastěji v žilách dolních končetin a pánve. Rostou ve směru proudící krve (k srdci) a jejich volný konec může dosahovat až do velkých žilních kmenů, odkud se snadno utrhne a způsobí embolii."
      }
    ]
  },
  {
    id: "pat-30",
    title: "Embólie (rozdělení, příčiny vzniku, následky)",
    section: "Poruchy oběhu a perfuze",
    keywords: ["embolie", "embolus", "plicní", "paradoxní", "tuková", "vzduchová", "plodová"],
    content: {
      definition: "Embolie je zanesení pevného, tekutého nebo plynného materiálu (embolu) krevním oběhem do místa zúžení cévního řečiště, kde způsobí ucpání lumen a následnou ischemii.",
      etiology: "Uvolnění trombu (tromboembolie - 99 % případů), tukové kapénky (zlomeniny dlouhých kostí), vzduch (traumata krku, iatrogenně), plodová voda (komplikace porodu), cizí tělesa, nádorové buňky.",
      pathogenesis: "1. Tromboembolie plicní: embolus z hlubokých žil dolních končetin/pánve projde přes pravé srdce do a. pulmonalis. 2. Periferní (arteriální) embolie: zdroj v levém srdci (fibrilace síní, infarkt myokardu, vegetace u endokarditidy), embolus ucpává větve aorty (mozek, ledviny, končetiny). 3. Paradoxní embolie: embolus projde z pravého oběhu do levého přes defekt septa (např. foramen ovale patens). 4. Retrográdní embolie: embolus se pohybuje proti proudu krve působením gravitace (vzácné).",
      macroscopy: "Plicní embolie: masivní sedlovitý embolus v bifurkaci a. pulmonalis (způsobí náhlou smrt). U menších větví plicní infarkt (červený). Periferní embolie: infarkty cílových orgánů (bílý infarkt ledviny, gangréna končetiny). Tuková embolie: petechie na hrudníku, mozková mikrokrvácení.",
      microscopy: "Mikroskopicky prokazujeme strukturu embolizovaného materiálu v lumen ucpané cévy. Např. u tukové embolie nacházíme opticky prázdné tukové kapénky v plicních kapilárách (průkaz barvením na tuky na zmrazených řezech). U embolie plodovou vodou vidíme dlaždicové buňky plodu (lanugo) v plicním řečišti matky.",
      clinical: "Plicní embolie se projevuje náhlou dušností, bolestí na hrudi, cyanózou. Masivní embolie (ucpání > 60 % plicního řečiště) vede k akutnímu selhání pravé komory (cor pulmonale acutum) a kardiogennímu šoku se smrtí."
    },
    quiz: [
      {
        question: "Odkud nejčastěji pochází embolus, který způsobí plicní embolii?",
        options: [
          "Z levé srdeční komory po infarktu",
          "Z hlubokých žil dolních končetin a pánve",
          "Z karotických arterií",
          "Z portální žíly"
        ],
        correct: 1,
        explanation: "Více než 95 % případů plicní embolie je způsobeno uvolněním trombu z hlubokého žilního systému dolních končetin (hluboká žilní trombóza - HŽT) nebo pánve. Krevní proud zanese trombus přes dolní dutou žílu a pravé srdeční oddíly do plicnice."
      },
      {
        question: "Co je to paradoxní embolie?",
        options: [
          "Embolie, která nezpůsobí žádné příznaky",
          "Průchod žilního embolu do arteriálního řečiště přes patologickou komunikaci mezi pravým a levým srdcem (např. defekt septa síní)",
          "Embolie způsobená obráceným tokem krve při kašli",
          "Embolie tukové tkáně do mozku"
        ],
        correct: 1,
        explanation: "Paradoxní embolie nastává, pokud embolus vzniklý v žilním systému (např. na noze) neuvízne v plicích, ale projde přes pravolevý zkrat v srdci (např. otevřené foramen ovale) přímo do levé síně a komory, odkud je vyvržen do systémových tepen (např. do mozku, kde způsobí mrtvici)."
      }
    ]
  },
  {
    id: "pat-31",
    title: "Organizace trombu a hematomu",
    section: "Poruchy oběhu a perfuze",
    keywords: ["organizace", "rekanalizace", "hematom", "hemosiderin", "granulační", "myofibroblast"],
    content: {
      definition: "Organizace je proces, při kterém je nefunkční hmota (trombus, hematom, nekróza) postupně nahrazena živou cévnatou vazivovou tkání (reparace) s následným jizvením.",
      etiology: "Přítomnost velkého krevního koagula v cévě (trombus) nebo mimo cévu v tkáni (hematom) po ruptuře cévy.",
      pathogenesis: "1. Infiltrace zánětlivými buňkami (neutrofily, makrofágy) - fagocytóza detritu, fibrinu a erytrocytů. 2. Prorůstání granulační tkáně: endotelové buňky tvoří pupeny a vytvářejí nové kapiláry (novovaskularizace), fibroblasty migrují a syntetizují kolagen typu III. 3. U trombu: dochází k rekanalizaci (novotvořené kapiláry se spojují a vytvářejí nové kanálky skrz trombus, čímž se částečně obnoví průtok). 4. U hematomu: dochází k opouzdření a tvorbě pseudocysty (odbouráním vnitřku zůstane dutina vyplněná čirou tekutinou) nebo k resorpci a jizvení.",
      macroscopy: "Čerstvý hematom: tmavě červený, měkký. Organizovaný hematom: ohraničený tuhým vazivovým prstencem, uprostřed rezavě hnědý (přítomnost hemosiderinu) nebo čirý (pseudocysta). Změny barev hematomu (modřiny): červená (hemoglobin) -> modrofialová -> zelená (biliverdin) -> žlutohnědá (hemosiderin).",
      microscopy: "Mikroskopicky vidíme granulační tkáň: hustou síť nově vytvořených kapilár a vřetenitých fibroblastů, hojné makrofágy naplněné hemosiderinem (siderofágy). Postupně klesá celulizace a roste množství kolagenu (jizva).",
      clinical: "Úspěšná rekanalizace trombu může zmírnit chronickou žilní insuficienci. U hematomu může proces organizace trvat týdny až měsíce. Pokud je hematom velký, jeho střed může podlehnout kolikvaci bez organizace a vzniká opouzdřená pseudocysta."
    },
    quiz: [
      {
        question: "Co je to rekanalizace trombu?",
        options: [
          "Uvolnění trombu a jeho odplavení proudem krve",
          "Proces, při kterém v organizujícím se trombu vznikají nové cévní kanálky kryté endotelem, které částečně obnovují průtok krve",
          "Rozpuštění trombu pomocí fibrinolytik",
          "Zvápenatění trombu na žilní kámen (flebolit)"
        ],
        correct: 1,
        explanation: "Při organizaci trombu vrůstají ze stěny cévy endotelové buňky, které vytvářejí kapilární síť. Tyto kapiláry se postupně spojí a vytvoří kanálky procházející napříč trombem, což umožní alespoň částečný průtok krve původně ucpanou cévou."
      },
      {
        question: "Který pigment je zodpovědný za žlutohnědé zbarvení ustupující modřiny (hematomu) a jak se mikroskopicky prokazuje?",
        options: [
          "Lipofuscin; barvením Fontanou",
          "Hemosiderin; Perlovou reakcí (berlínská modř)",
          "Bilirubin; barvením Sudan",
          "Melanin; IHC průkazem S100"
        ],
        correct: 1,
        explanation: "Hemosiderin vzniká odbouráváním hemoglobinu uvolněného z rozpadlých erytrocytů v hematomu. Makroskopicky barví tkáň do žlutohněda a mikroskopicky se specificky prokazuje Perlovou reakcí na modro."
      }
    ]
  },
  {
    id: "pat-32",
    title: "Hemoragické diatézy (základní dělení, typické obrazy jednotlivých forem)",
    section: "Poruchy oběhu a perfuze",
    keywords: ["diatéza", "hemoragická", "trombocytopenie", "hemofilie", "koagulopatie", "vaskulopatie"],
    content: {
      definition: "Hemoragické diatézy jsou stavy charakterizované zvýšeným sklonem ke krvácení (krvácivost), které vzniká buď spontánně, nebo neodpovídá intenzitou vyvolávajícímu podnětu.",
      etiology: "Vrozené genetické poruchy (hemofilie A/B, von Willebrandova choroba) nebo získané stavy (deficit vitamínu K, jaterní selhání, trombocytopenie při leukémii, polékové stavy - warfarin, aspirin).",
      pathogenesis: "Dělení podle postižené složky hemostázy: 1. Trombocytární (trombocytopenie - nedostatek, trombocytopatie - porucha funkce): porucha primární hemostázy (tvorby destičkového zátky). 2. Koagulopatie (poruchy plazmatických faktorů): porucha sekundární hemostázy (tvorby fibrinu). 3. Vaskulopatie (poruchy cévní stěny): zvýšená křehkost a propustnost cév.",
      macroscopy: "Trombocytární a vaskulární formy: krvácení slizniční a kožní - petechie, purpura, ekchymózy, epistaxe (krvácení z nosu). Koagulační formy (např. hemofilie): krvácení do hlubokých tkání - hematomy ve svalech a krvácení do kloubů (hemartros).",
      microscopy: "Mikroskopicky nacházíme extravazáty erytrocytů v tkáních. U hemofilického hemartrosu vidíme chronickou synovitidu s depozity hemosiderinu v synoviální membráně a destrukci kloubní chrupavky.",
      clinical: "U hemofilie A (deficit FVIII) a B (deficit FIX), které jsou gonozomálně recesivně dědičné (postihují muže), je hlavním rizikem invalidizace kvůli poškození kloubů krvácením. Von Willebrandova choroba (nejčastější vrozená diatéza) kombinuje poruchu destiček a sníženou hladinu FVIII."
    },
    quiz: [
      {
        question: "Jaký typ krvácení je typický pro koagulopatie (např. hemofilie A/B)?",
        options: [
          "Drobné tečkovité krvácení (petechie) na kůži dolních končetin",
          "Krvácení do velkých kloubů (hemartros) a tvorba hlubokých svalových hematomů",
          "Difuzní kapilární prosakování sliznic",
          "Krvácení se u hemofiliků neobjevuje, stoupá pouze srážlivost"
        ],
        correct: 1,
        explanation: "Koagulopatie představují poruchu sekundární hemostázy (tvorby fibrinu). Krvácení se typicky objevuje s latencí po traumatu a postihuje hluboké struktury - klouby (kolena, lokty) a svaly. Petechie jsou naopak typické pro poruchy destiček (trombocytopenie)."
      },
      {
        question: "Hemofilie A je způsobena defektem kterého koagulačního faktoru?",
        options: [
          "Faktoru IX (FIX)",
          "Faktoru VIII (FVIII)",
          "Faktoru VII (FVII)",
          "Faktoru X (FX)"
        ],
        correct: 1,
        explanation: "Hemofilie A je způsobena vrozeným defektem nebo absencí koagulačního faktoru VIII. Hemofilie B je způsobena defektem faktoru IX. Obě vady jsou vázané na chromozom X."
      }
    ]
  },
  {
    id: "pat-33",
    title: "Anémie (přehled)",
    section: "Poruchy oběhu a perfuze",
    keywords: ["anémie", "erytrocyty", "hemoglobin", "sideropenická", "megaloblastová", "hemolytická"],
    content: {
      definition: "Anémie (chudokrevnost) je stav charakterizovaný snížením koncentrace hemoglobinu a/nebo počtu erytrocytů v jednotce objemu krve pod fyziologickou mez, což vede ke snížení kapacity krve přenášet kyslík.",
      etiology: "1. Snížená produkce: nedostatek stavebních látek (železo - sideropenická anémie, vit. B12/kyselina listová - megaloblastová anémie), útlum kostní dřeně (aplastická anémie). 2. Zvýšené ztráty: akutní nebo chronické krvácení. 3. Zvýšená destrukce: hemolytické anémie (korpuskulární - např. srpkovitá anémie, extrakorpuskulární - imunologická hemolýza).",
      pathogenesis: "Sideropenická anémie: nedostatek železa blokuje syntézu hemu -> erytrocyty jsou malé a chudé na hemoglobin. Megaloblastová anémie: nedostatek vit. B12/kyseliny listové blokuje syntézu DNA, buňky se nedělí a v kostní dřeni vznikají obří prekursory (megaloblasty) a v krvi velké erytrocyty (makrocyty). Hemolytické anémie: zkrácení přežívání erytrocytů pod 120 dní.",
      macroscopy: "Celková bledost kůže a sliznic, u hemolytických anémií spojená s mírným ikterem. Srdce může vykazovat známky hypoxie (tygrované srdce - steatóza kardiomyocytů). U chronických anémií hypertrofie levé komory (kompenzační hyperkinetická cirkulace).",
      microscopy: "Krevní nátěr: sideropenická (mikrocytární hypochromní - malé, bledé erytrocyty s velkým centrálním vyjasněním); megaloblastová (makrocytární normochromní - velké, oválné erytrocyty, hypersegmentované neutrofily s > 5 laloky).",
      clinical: "Anemický syndrom: únava, slabost, dušnost při námaze, motání hlavy, tachykardie (bušení srdce). U sideropenické anémie se objevují křehké nehty (koilonychie) a koutky úst. Megaloblastová (perniciózní) anémie vyvolává i neurologické příznaky (funikulární myelóza)."
    },
    quiz: [
      {
        question: "Jak se v krevním nátěru morfologicky jeví nejčastější anémie - sideropenická (z nedostatku železa)?",
        options: [
          "Jako makrocytární normochromní (velké erytrocyty)",
          "Jako mikrocytární hypochromní (malé, bledé erytrocyty s velkým centrálním vyjasněním)",
          "Přítomností srpkovitých buněk",
          "Přítomností megaloblastů v periferní krvi"
        ],
        correct: 1,
        explanation: "Nedostatek železa znemožňuje tvorbu dostatečného množství hemoglobinu. Buňky procházejí v kostní dřeni větším počtem dělení a do oběhu se dostávají erytrocyty zmenšené (mikrocyty) a s nízkým obsahem barviva (hypochromní)."
      },
      {
        question: "Co je příčinou perniciózní anémie?",
        options: [
          "Akutní krvácení z žaludečního vředu",
          "Autoimunitní destrukce parietálních buněk žaludku, což vede k nedostatku vnitřního faktoru (Intrinsic Factor) nutného pro vstřebávání vitamínu B12",
          "Vrozený deficit ferochelatázy",
          "Expozice olovu v práci"
        ],
        correct: 1,
        explanation: "Perniciózní anémie je autoimunitní onemocnění. Tvorba protilátek proti parietálním buňkám žaludeční sliznice (a/nebo proti vnitřnímu faktoru) vede k atrofii sliznice žaludku a znemožňuje vstřebávání vitamínu B12 v terminálním ileu, což vyústí v megaloblastovou anémii."
      }
    ]
  },
  {
    id: "pat-34",
    title: "Zánět obecně (definice, příčiny, příznaky a průběh)",
    section: "Zánětlivé procesy",
    keywords: ["zánět", "rubor", "calor", "dolor", "tumor", "functio", "akutní"],
    content: {
      definition: "Zánět (inflammatio) je komplexní obranná a adaptivní reakce organismu s účastí cévního, buněčného a humorálního systému na poškození tkáně, jejímž cílem je eliminovat vyvolávající příčinu, ohraničit poškození a zahájit proces hojení.",
      etiology: "Biologické noxy (bakterie, viry, plísně), fyzikální vlivy (trauma, teplo, chlad, záření), chemické látky (kyseliny, jedy) a imunopatologické reakce (autoimunita, alergie).",
      pathogenesis: "Základní fáze akutního zánětu: 1. Alterace (poškození buněk a tkáně). 2. Exsudace (vaskulární reakce: vazodilatace a zvýšená propustnost cév vedoucí k úniku tekutiny - exsudátu - a proteinů do intersticilního prostoru). 3. Infiltrace (extravazace/migrace zánětlivých buněk - neutrofilů u akutního zánětu, lymfocytů/makrofágů u chronického). 4. Proliferace (tvorba granulační tkáně za účelem hojení).",
      macroscopy: "Pět klasických (Celsus-Galenových) příznaků zánětu: 1. Rubor (zarudnutí - aktivní hyperémie), 2. Calor (horko - zvýšený průtok krve a metabolismus ložiska), 3. Tumor (otok - nahromadění exsudátu), 4. Dolor (bolest - dráždění nervových zakončení mediátory zánětu a tlakem exsudátu), 5. Functio laesa (porucha funkce).",
      microscopy: "Mikroskopicky nacházíme dilatované a překrvené cévy, edém intersticila (exsudát), marginaci a diapedézu bílých krvinek cévní stěnou do okolí. U chronického zánětu dominují lymfocyty, plazmatické buňky, makrofágy a novotvořené vazivo.",
      clinical: "Akutní zánět nastupuje rychle a trvá dny až týdny. Pokud se noxu nepodaří eliminovat, zánět přechází do chronického stadia (trvá měsíce až roky), které je charakterizováno současným průběhem poškození, zánětu a hojení (reparace) s jizvením."
    },
    quiz: [
      {
        question: "Kterých pět klasických lokálních příznaků charakterizuje akutní zánět?",
        options: [
          "Horečka, zimnice, leukocytóza, splenomegalie, únava",
          "Rubor (zarudnutí), calor (horko), tumor (otok), dolor (bolest), functio laesa (porucha funkce)",
          "Bledost, chlad, nekróza, znecitlivění, jizvení",
          "Kalcifikace, atrofie, amyloidóza, hyperplazie, dystrofie"
        ],
        correct: 1,
        explanation: "Pět klasických lokálních příznaků zánětu popsal z velké části již Celsus v 1. století n. l. (rubor, calor, tumor, dolor), pátý příznak (functio laesa) přidal později Galenos. Jsou to přímé makroskopické důsledky vaskulárních a buněčných změn v ložisku."
      },
      {
        question: "Jaké buňky dominují v zánětlivém infiltrátu u akutního zánětu?",
        options: [
          "Lymfocyty a plazmatické buňky",
          "Neutrofilní granulocyty (polymorfonukleáry)",
          "Obří mnohojaderné buňky z cizích těles",
          "Fibroblasty a myofibroblasty"
        ],
        correct: 1,
        explanation: "Neutrofily jsou první obrannou linií a migrují do místa zánětu během prvních hodin. Jsou typickým buněčným markerem akutního (zejména hnisavého) zánětu. Lymfocyty a plazmatické buňky jsou naopak charakteristické pro zánět chronický."
      }
    ]
  },
  {
    id: "pat-35",
    title: "Makroskopické a mikroskopické projevy zánětu",
    section: "Zánětlivé procesy",
    keywords: ["alterace", "exsudace", "proliferace", "infiltrace", "hyperémie", "edém"],
    content: {
      definition: "Zánět se projevuje specifickými strukturálními a buněčnými změnami, které lze pozorovat makroskopicky (volným okem) i mikroskopicky.",
      etiology: "Působení tkáňového poškození (noxy) vyvolávající vaskulární a buněčné reakce zprostředkované chemickými mediátory (histamin, bradykinin, prostaglandiny, cytokiny).",
      pathogenesis: "Poškození buněk vede k uvolnění preforemovaných mediátorů (např. histaminu ze žírných buněk). Následuje vazodilatace arteriol (aktivní hyperémie) a zvýšení propustnosti cév (endotelové buňky se kontrahují a tvoří mezery). Tím uniká tekutina s proteiny (exsudát) do tkáně. Leukocyty se přichytávají na endotel (marginace, adheze pomocí selektinů a integrinů) a migrují ven (transmigrace/diapedéza).",
      macroscopy: "Ložisko zánětu je červené (rubor), oteklé (tumor), teplé na dotek (calor), bolestivé (dolor). Sliznice jsou pokryté hlenem, fibrinem nebo hnisem. Orgány mohou mít napjaté pouzdro a prosáklý vzhled.",
      microscopy: "1. Kapiláry a venuly jsou široké, naplněné erytrocyty (stáza krve). 2. Intersticium je rozvolněné edémovou tekutinou (eozinofilní prosáknutí). 3. V tkáni nacházíme zánětlivé buňky (infiltrát): neutrofily (segmentovaná jádra), lymfocyty (malé buňky s tmavým kulatým jádrem), plazmatické buňky (excentrické jádro s loukoťovitým chromatinem a světlá zóna u jádra). 4. Ložiska poškození buněk (dystrofie, nekróza - alterace).",
      clinical: "Typ infiltrace a charakter exsudátu pomáhá patologovi určit původce zánětu (např. bakterie vyvolávají hnisavý infiltrát s neutrofily, viry lymfocytární infiltrát, paraziti či alergie eosinofilní infiltrát)."
    },
    quiz: [
      {
        question: "Co způsobuje zvýšenou cévní propustnost (permeabilitu) v ložisku akutního zánětu?",
        options: [
          "Mechanické roztržení cévního řečiště",
          "Kontrakce endotelií a vznik interendotelových mezer působením mediátorů (např. histaminu)",
          "Zvýšený onkotický tlak v intersticiu",
          "Tvorba kolagenu v cévní stěně"
        ],
        correct: 1,
        explanation: "Působením zánětlivých mediátorů (histamin, leukotrieny, bradykinin) dochází k aktivní kontrakci endotelových buněk v postkapilárních venulách. Buňky se smrští, čímž mezi nimi vzniknou štěrbiny, kterými může unikat tekutina s velkými molekulami proteinů."
      },
      {
        question: "Jak se mikroskopicky projevuje fáze alterace při zánětu?",
        options: [
          "Tvorbou jizvy a ukládáním kolagenu",
          "Poškozením parenchymu tkáně (od dystrofických změn až po nekrózu buněk)",
          "Novotvorbou cév (angiogenezí)",
          "Pouhou dilatací cév bez poškození buněk"
        ],
        correct: 1,
        explanation: "Alterace je první fází zánětu a představuje přímé poškození buněk a intersticila působící noxou. Morfologicky se projevuje regresivními změnami, jako je hydropická či vakuolární dystrofie, nebo nekróza buněk."
      }
    ]
  },
  {
    id: "pat-36",
    title: "Složení zánětlivého exsudátu",
    section: "Zánětlivé procesy",
    keywords: ["exsudát", "transudát", "fibrinogen", "hnis", "bílkoviny", "hustota"],
    content: {
      definition: "Zánětlivý exsudát je tekutina bohatá na bílkoviny a zánětlivé buňky, která v důsledku zvýšené cévní propustnosti uniká z krevního oběhu do zánětlivě změněné tkáně nebo tělesných dutin.",
      etiology: "Akutní zánět jakékoliv etiologie spojený se zvýšením permeability cévní stěny.",
      pathogenesis: "Unikající tekutina obsahuje velké molekuly proteinů (včetně fibrinogenu), které by přes normální neporušenou cévní stěnu neprošly. Ve tkáni se fibrinogen mění na nerozpustný fibrin. Rozdíl oproti transudátu: Transudát je nezánětlivý ultrafiltrát plazmy s nízkým obsahem bílkovin a buněk, vznikající zvýšením hydrostatického tlaku (srdeční selhání) nebo poklesem onkotického tlaku (hypalbuminémie).",
      macroscopy: "Exsudát může být: 1. Čirý/světle žlutý (serózní), 2. Zakalený, hustý, žlutozelený (hnisavý), 3. Vláknitý, šedobílý (fibrinózní), 4. Červený/krvavý (hemoragický exsudát - obsahuje erytrocyty).",
      microscopy: "Mikroskopicky se exsudát skládá z: a) Tekuté složky (edém, imunoglobuliny, komplement), b) Fibrinové sítě (růžová vlákna), c) Buněčné složky (neutrofily, lymfocyty, odloupané mezotelové či epitelové buňky).",
      clinical: "Laboratorní odlišení exsudátu od transudátu (např. při pleurálním výpotku) se provádí pomocí Lightových kritérií: exsudát má vysokou koncentraci bílkovin (> 30 g/l), vysokou aktivitu LDH (laktátdehydrogenázy) a specifickou hmotnost nad 1018 g/l."
    },
    quiz: [
      {
        question: "Jak se liší zánětlivý exsudát od nezánětlivého transudátu?",
        options: [
          "Exsudát má nízký obsah bílkovin a chybí v něm buňky",
          "Exsudát má vysoký obsah bílkovin (> 30 g/l), vysokou aktivitu LDH a obsahuje zánětlivé buňky v důsledku zvýšené cévní propustnosti",
          "Transudát vzniká pouze u infekčních onemocnění",
          "Exsudát je vždy čirý a transudát vždy hnisavý"
        ],
        correct: 1,
        explanation: "Exsudát doprovází zánětlivou reakci, kde je poškozená (propustná) cévní stěna, proto obsahuje proteiny (včetně velkého fibrinogenu) a buňky. Transudát vzniká mechanickým filtrováním při neporušené cévní stěně (např. u edému při srdečním selhání), a je proto na bílkoviny chudý."
      },
      {
        question: "Která bílkovina plazmy se v exsudátu sráží na nerozpustná růžová vlákna viditelná v histologii?",
        options: [
          "Albumin",
          "Fibrinogen (mění se na fibrin)",
          "Transthyretin",
          "C-reaktivní protein"
        ],
        correct: 1,
        explanation: "Fibrinogen je velký plazmatický protein. Při zvýšené propustnosti cév uniká do tkáně, kde je tkáňovým tromboplastinem aktivován a polymeruje na nerozpustný fibrin, který tvoří vláknitou síť."
      }
    ]
  },
  {
    id: "pat-37",
    title: "Exsudativní zánět",
    section: "Zánětlivé procesy",
    keywords: ["exsudativní", "serózní", "fibrinózní", "hnisavý", "katarální", "gangrenózní"],
    content: {
      definition: "Exsudativní zánět je nejčastější typ akutního zánětu, u kterého dominuje tvorba tekutého nebo buněčného exsudátu nad poškozením (alterací) a novotvorbou tkáně (proliferací).",
      etiology: "Bakteriální a virové infekce, popáleniny, chemická poleptání, autoimunitní reakce.",
      pathogenesis: "Hlavním mechanismem je vaskulární reakce s exsudací tekutiny a emigrací leukocytů do ložiska. Dělí se podle charakteru exsudátu na: 1. Serózní (vodnatý exsudát chudý na fibrin), 2. Katarální (serózní zánět sliznic s příměsí hlenu), 3. Fibrinózní (exsudát bohatý na fibrinogen, který se sráží), 4. Hnisavý (exsudát bohatý na neutrofily, které hynou a tvoří hnis), 5. Hemoragický (příměs erytrocytů z poškozených cév), 6. Gangrenózní (nekrotizující zánět komplikovaný hnilobnými bakteriemi).",
      macroscopy: "Závisí na subtypu: Serózní: např. puchýř na kůži. Fibrinózní: šedavé blány na sliznicích (pseudomembrány) nebo drsný povrch seróz (např. 'cor villosum' u perikarditidy). Hnisavý: tekutý žlutozelený hnis v tkáni (absces) nebo na povrchu. Gangrenózní: cárovitý rozpad tkáně s odporným zápachem.",
      microscopy: "Mikroskopický obraz odpovídá typu exsudátu: serózní vykazuje světlé edémové prosáknutí, fibrinózní sítě růžových vláken fibrinu, hnisavý záplavu neutrofilních granulocytů s rozpadem (detritem) tkáně.",
      clinical: "Průběh může být lokalizovaný nebo difuzní. Významná je tendence k šíření (např. hnisavý zánět se může šířit jako flegmóna). Hojení probíhá resorpcí exsudátu, nebo jeho organizací vazivem (vznik srůstů u fibrinózního zánětu)."
    },
    quiz: [
      {
        question: "Jak se dělí exsudativní záněty podle charakteru exsudátu?",
        options: [
          "Na primární a sekundární",
          "Na serózní, fibrinózní, hnisavý, katarální, hemoragický a gangrenózní",
          "Na granulomatózní a nespecifické",
          "Na benigní a maligní"
        ],
        correct: 1,
        explanation: "Toto dělení je založeno na makroskopickém a mikroskopickém vzhledu zánětlivého výpotku (exsudátu), což odráží typ a intenzitu poškození cév a druh vyvolávajícího patogenu."
      },
      {
        question: "Co je to katarální zánět?",
        options: [
          "Hluboký zánět kostí",
          "Serózní zánět sliznic doprovázený zvýšenou tvorbou a vylučováním hlenu (např. rýma)",
          "Zánět oka vedoucí k šedému zákalu",
          "Nekrotizující zánět svalů"
        ],
        correct: 1,
        explanation: "Katarální zánět (katars) je specifická forma serózního zánětu sliznic, které obsahují hlenové žlázky nebo pohárkové buňky. Podrážděním dochází k hypersekreci hlenu, který se mísí s exsudátem (typickým příkladem je běžná rýma - katar horních cest dýchacích)."
      }
    ]
  },
  {
    id: "pat-38",
    title: "Serózní zánět",
    section: "Zánětlivé procesy",
    keywords: ["serózní", "puchýř", "katar", "bula", "výpotek", "edém"],
    content: {
      definition: "Serózní zánět je nejlehčí forma exsudativního zánětu, charakterizovaná tvorbou vodnaté, čiré nebo mírně zakalené tekutiny (exsudátu) s nízkým obsahem bílkovin (převážně albuminu) a malým množstvím buněk.",
      etiology: "Fyzikální a chemické vlivy (popáleniny II. stupně, tření kůže - puchýř, sluneční záření), virové infekce (např. herpes virus), mírné bakteriální infekce, alergické reakce (senná rýma).",
      pathogenesis: "Mírné poškození cévní stěny vede k úniku pouze malých proteinů (albuminu) a vody. Fibrinogen do tkáně neproniká, proto se exsudát nesráží a zůstává tekutý.",
      macroscopy: "1. Na kůži: puchýř (vesicula, bula) - tekutina nadzvedává epidermis. 2. Na serózních blanách (pleura, perikard, peritoneum): serózní pleuritida/perikarditida - hromadění čiré tekutiny v dutině (výpotek). 3. Na sliznicích (katarální zánět): sliznice je zarudlá, zduřelá, pokrytá tekutým hlenovým sekretem (katarální rýma).",
      microscopy: "Tkáň je rozvolněná edémem. V intersticiu nacházíme světlé, homogenní eozinofilní prosáknutí. Buněčný infiltrát je chudý, skládá se převážně z lymfocytů a ojedinělých neutrofilů a odloupaných epiteliálních buněk.",
      clinical: "Serózní zánět se hojí velmi dobře a rychle. Exsudát se resorbuje lymfatickými cévami a dochází k úplné regeneraci ad integrum bez vzniku jizev (např. zhojení puchýře po popálení)."
    },
    quiz: [
      {
        question: "Proč se serózní exsudát na rozdíl od fibrinózního ve tkáni nesráží?",
        options: [
          "Protože obsahuje protisrážlivé látky (heparin)",
          "Protože poškození cév je mírné a do exsudátu neproniká velká molekula fibrinogenu",
          "Protože v něm chybí voda",
          "Sráží se, ale velmi pomalu (v řádu týdnů)"
        ],
        correct: 1,
        explanation: "Při mírném zánětu (serózním) se propustnost cév zvýší jen natolik, že cévní stěnou projdou malé bílkoviny (např. albumin). Velký fibrinogen zůstává v krvi. Bez fibrinogenu se tekutina nemá jak srazit a zůstává vodnatá."
      },
      {
        question: "Příkladem serózního zánětu na kůži je:",
        options: [
          "Kaseózní nekróza",
          "Puchýř (bula) u popálenin II. stupně nebo oparu (herpes)",
          "Absces vyplněný hnisem",
          "Černý příškvar"
        ],
        correct: 1,
        explanation: "Kožní puchýř je typickým příkladem serózního zánětu. Tekutina (serózní exsudát) se hromadí pod epidermis (nebo uvnitř ní) a nadzvedává ji."
      }
    ]
  },
  {
    id: "pat-39",
    title: "Fibrinózní zánět",
    section: "Zánětlivé procesy",
    keywords: ["fibrinózní", "fibrin", "pseudomembrána", "pablána", "srůsty", "cor villosum"],
    content: {
      definition: "Fibrinózní zánět je těžší forma exsudativního zánětu, u které z cév uniká velké množství fibrinogenu, který se v tkáni sráží na nerozpustný fibrin a vytváří šedobílá vlákna nebo blány.",
      etiology: "Těžké bakteriální infekce (Corynebacterium diphtheriae - záškrt, Shigella - dyzenterie), uremie (hromadění močoviny v krvi při selhání ledvin), revmatická horečka, virové infekce (např. fibrinózní perikarditida).",
      pathogenesis: "Výrazné poškození cévní stěny (alterace endotelu) umožní únik velkých molekul fibrinogenu do tkáně či na povrchy orgánů. Zde se fibrinogen působením tkáňových faktorů srazí na fibrin. Fibrinózní zánět se dělí na: a) Krupózní (pablána lpí volně, lze ji sloupnout bez poškození podkladu - např. krupózní pneumonie), b) Diphtherický/pseudomembranózní (pablána lpí pevně, prorůstá do nekrózy sliznice, po sloupnutí vzniká vřed), c) Eschariotický/nekrotizující (hluboká nekróza prostoupená fibrinem).",
      macroscopy: "Na serózách: povrch je matný, drsný, pokrytý šedobílými vlákny. Příkladem je fibrinózní perikarditida - 'cor villosum' (chlupaté srdce) - srdce vypadá jako pokryté chuchvalci vlny. Na sliznicích: šedobílé až žlutavé povlaky (pablány/pseudomembrány). V plicích: plíce jsou tuhé, bezvzdušné, šedé (šedá hepatizace u krupózní pneumonie).",
      microscopy: "Sítě růžových (eozinofilních) vláken fibrinu, v nichž jsou zachyceny zánětlivé buňky (neutrofily) a buněčný detrit. Pod pablánou bývá patrná nekróza sliznice.",
      clinical: "Fibrinózní exsudát se obtížně resorbuje. Hojí se nejčastěji reparací: do fibrinu vrůstá granulační tkáň (organizace fibrinu), která se mění ve vazivo. Na serózních blanách (pleura, perikard) to vede ke vzniku pevných vazivových srůstů (adhezí) a obliteraci dutin (např. u perikardu hrozí constrictio pericardi - pancéřové srdce omezující plnění komor)."
    },
    quiz: [
      {
        question: "Co znamená makroskopický termín 'cor villosum' (chlupaté srdce)?",
        options: [
          "Vrozená vada s růstem vlasů na epikardu",
          "Fibrinózní perikarditida, kdy se na povrchu srdce sráží fibrin do podoby hrubých šedobílých vláken připomínajících chlupy",
          "Nádorové bujení na perikardu",
          "Těžká steatóza myokardu"
        ],
        correct: 1,
        explanation: "Při fibrinózní perikarditidě (např. u uremie nebo revmatické horečky) se na povrchu epikardu a perikardu sráží fibrin. Pohybem srdce se tento fibrin formuje do nitkovitých struktur. Srdce pak makroskopicky vypadá 'chlupaté' (cor villosum)."
      },
      {
        question: "Jak se liší krupózní fibrinózní zánět od diphtherického (difteroidního) na sliznici?",
        options: [
          "Krupózní zánět postihuje pouze kůži",
          "U krupózního zánětu pablána lpí volně na neporušeném epitelu a lze ji snadno sloupnout; u diphtherického zánětu pablána vrůstá do nekrotické sliznice a po jejím stržení sliznice krvácí a vzniká vřed",
          "Krupózní zánět je vždy způsoben plísněmi",
          "Diphtherický zánět se hojí bez jizev, krupózní vždy jizvou"
        ],
        correct: 1,
        explanation: "U krupózního zánětu (např. krupózní tracheitida) je nekróza povrchová, a proto se pablána dá snadno oddělit. U diphtherického (např. záškrt v krku nebo pseudomembranózní kolitida) sahá nekróza hluboko a fibrin ji fixuje k podkladu. Stržení pablány vede k poškození tkáně a krvácení."
      }
    ]
  },
  {
    id: "pat-40",
    title: "Hnisavý zánět",
    section: "Zánětlivé procesy",
    keywords: ["hnisavý", "hnis", "absces", "flegmóna", "neutrofily", "pyogenní", "empas"],
    content: {
      definition: "Hnisavý zánět je forma exsudativního zánětu charakterizovaná tvorbou hnisu (pus) - zakalené, husté tekutiny složené z odumřelých neutrofilů, zkapalněné nekrotické tkáně a bakterií.",
      etiology: "Infekce pyogenními (hnisavými) bakteriemi: Staphylococcus aureus, Streptococcus pyogenes, Neisseria meningitidis/gonorrhoeae, Escherichia coli.",
      pathogenesis: "Bakterie produkují chemoatraktanty, které lákají obrovské množství neutrofilů. Neutrofily uvolňují své lyzosomální enzymy (myeloperoxidázu, elastázu) do okolí, což vede k enzymatickému zkapalnění (kolikvaci) nekrotické tkáně a bakterií za vzniku hnisu. Hnisavý zánět se dělí na: 1. Ohraničený (absces - nekróza tkáně s tvorbou dutiny vyplněné hnisem), 2. Neohraničený/difuzní (flegmóna - hnisavý zánět šířící se intersticila, typicky v podkoží), 3. Empyém (hromadění hnisu v anatomických dutinách - např. empyém žlučníku, pleury).",
      macroscopy: "Hnis: hustá, viskózní tekutina žlutavé, šedavé nebo zelenavé barvy (způsobené zeleným enzymem myeloperoxidázou v neutrofilech). Absces: dutina s hnisem obklopená pyogenní membránou (cévnaté vazivo). Flegmóna: tkáň je prosáklá žlutozeleným hnisem, neohraničená, měkká, nekróza splývá.",
      microscopy: "Masivní infiltrace neutrofilními granulocyty (segmentovaná jádra), z nichž mnohé vykazují známky rozpadu (karyorexe). Struktura původní tkáně je v místě ložiska zcela zničena kolikvaci. U abscesu je patrná okolní pyogenní membrána (granulační tkáň).",
      clinical: "Hnisavé infekce mají tendenci k celkovým projevům (horečka, leukocytóza v krvi). Abscesy se musí léčit chirurgickým vypuštěním (zásada 'Ubi pus, ibi evacua'), protože antibiotika špatně pronikají do nekrózy. Flegmóna (např. erysipel) se šíří rychle podél fascií a hrozí rozvojem sepse."
    },
    quiz: [
      {
        question: "Jaký je zásadní rozdíl mezi abscesem a flegmónou?",
        options: [
          "Absces je způsoben viry, flegmóna bakteriemi",
          "Absces je ohraničený hnisavý zánět s destrukcí tkáně a tvorbou dutiny; flegmóna je difuzní, neohraničený hnisavý zánět šířící se volně intersticila (např. podkožím)",
          "Absces se hojí bez jizev, flegmóna vždy jizvou",
          "Absces postihuje pouze plíce, flegmóna pouze kůži"
        ],
        correct: 1,
        explanation: "Absces je lokalizovaný zánět, kde se kolem hnisavého ložiska vytvoří ohraničující vazivový val (pyogenní membrána). Flegmóna je neohraničená, šíří se volně tkáňovými štěrbinami a mezerami (často působením enzymů jako hyaluronidáza produkovaných streptokoky)."
      },
      {
        question: "Co je to empyém?",
        options: [
          "Hnisavý zánět probíhající v kostní dřeni",
          "Nahromadění hnisu v přirozených (již existujících) tělesných dutinách nebo dutých orgánech (např. v pleurální dutině, žlučníku)",
          "Puchýř naplněný krví",
          "Chronický zánět plic vyvolaný prachem"
        ],
        correct: 1,
        explanation: "Empyém (empyema) je termín pro hnisavý zánět v preexistující anatomické dutině. Na rozdíl od abscesu zde zánět nevytváří novou dutinu destrukcí parenchymu, ale vyplňuje dutinu stávající (např. empyema vesicae felleae - žlučníku, empyema thoracis - pleury)."
      }
    ]
  }
];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_PATOLOGIE_2 = DATA_PATOLOGIE_2;
}
