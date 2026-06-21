// data_onco_2.js - Onkopatologie (témata 23 - 45)
const DATA_ONCO_2 = [
  
  {
    id: "onco-23",
    title: "Nádory tenkého a tlustého střeva",
    section: "Nádory zažívacího traktu",
    category: "Onkologie",
    keywords: ["kolorektální", "karcinom", "adenom", "polyp", "APC", "Lynch", "MSI", "tenké", "střevo", "CEA"],
    content: {
      definition: "Kolorektální karcinom (KRK) je jedním z nejčastějších zhoubných nádorů. Vychází z epiteliální výstelky tlustého střeva nebo konečníku. Nádory tenkého střeva jsou naopak velmi vzácné (tvoří < 5 % všech GIT tumorů).",
      etiology: "Strava s vysokým obsahem červeného masa, živočišných tuků, uzenin a nedostatkem vlákniny, obezita, alkoholismus, kouření. Chronické záněty: ulcerózní kolitida, Crohnova choroba. Dědičné syndromy: FAP (Familiární adenomatózní polypóza - mutace APC), Lynchův syndrom (HNPCC - mutace v MMR genech).",
      pathogenesis: "1. **Benigní epiteliální nádory (Adenomy)**: polypózní afekce, které se dělí na **tubulární** (nejčastější, nejméně rizikové), **tubulovilózní** a **vilózní** (nejvyšší riziko maligního zvratu, často přisedlé, produkují hlen). Prekanceróza pro karcinom.\n2. **Molekulární dráhy vzniku karcinomu**:\n- *Adenom-karcinomová sekvence (85 %)*: dráha chromozomální instability. Postupná akumulace mutací: ztráta tumor supresoru **APC** (hyperproliferace) -> mutace onkogenu **KRAS** (vznik adenomu) -> ztráta supresorů **TP53** a SMAD4 (vznik invazivního karcinomu). Trvá 10–15 let.\n- *Dráha mikrosatelitové nestability (MSI, 15 %)*: Lynchův syndrom. Defekt v genech pro mismatch repair (**MMR geny**: MLH1, MSH2, MSH6, PMS2) vede k neopraveným chybám v replikaci DNA (mikrosatelitech).",
      macroscopy: "Nádory vykazují výraznou dualitu podle lokalizace:\n- *Pravé kolon (cékum, colon ascendens)*: roste exofyticky (jako květák nebo polyp), je měkký, prokrvácený. Střevní lumen je zde široké a stolice tekutá, proto nevede k časné obstrukci. Projevuje se chronickým okultním krvácením.\n- *Levé kolon (colon descendens, sigmoideum, rektum)*: roste endofyticky, cirkulárně infiltruje stěnu a zužuje lumen (stenóza - na RTG obraz 'kousnutého jablka'). Způsobuje časné poruchy pasáže.",
      microscopy: "Převládá **adenokarcinom** (95 %). Vidíme nepravidelné žlázové tubuly infiltrující přes muscularis mucosae do submukózy a muscularis propria, obklopené desmoplastickým vazivovým stromatem. Nádorové buňky mají protáhlá hyperchromní jádra, četné mitózy. U **mucinózního adenokarcinomu** (> 50 % hlenu) jsou buňky rozptýleny v extracelulárních jezírkách hlenu; u varianty z **prstencovitých buněk** (signet-ring cells) hlen tlačí jádro k periferii.",
      clinical: "Pravostranné karcinomy: únava, slabost z mikrocytární sideropenické anémie. Levostranné karcinomy: změna rytmu stolice (zácpa střídaná s průjmy), čerstvá krev ve stolici (enteroragie), tužkovitá stolice, střevní neprůchodnost (ileus). Diagnostika: kolonoskopie s biopsií. Sledování recidivy: tumor marker **CEA** (karcinoembryonální antigen). Screening v ČR: test na okultní krvácení (TOKS/FIT) od 50 let, nebo screeningová kolonoskopie každých 10 let.",
      additionalInfo: "-  Ve střevě nejčastěji nacházíme polypy (adenomy), které mohou progredovat\nv adenokarcinom → tyto adenomy následně dělíme na konvenční a serrated\no  Konvenční adenomy = dělíme podle vzhledu na tubulární (stopkovité,\ntubulární povrch), vilózní (přisedlé lobulární povrch), tubulovilózní\n\no  Serrated adenomy (pilovité) = hyperplastický, sesilní (podobné\n\nhyperplastickým, jsou větší a nachází se spíš v pravém tračníku – pokud jsou\npřítomné cytologické atypie, tak se již jedná o nádorovou progresi), tradiční\n(přisedlé, nachází se spíš v levém tračníku, dysplastické)\n\n-  K těmto polypům mohou mít predispozici lidé s polypózami, jako např.\n\no  Familiární adenomatózní polypóza = AD, mutace APC (tumor-suspensorový\ngen) → dochází k odbrzdění jaderné transkripce těch faktorů, které se podílejí\nna proliferaci → proto se u těchto lidí nachází vícečetné adenomy ve střevě\no  MUTYH-polypóza = AR, dochází k mutaci MUTYH genu, který kóduje stejný\nprotein → jedná se víceméně o enzym, který se podílí na opravách DNA →\npokud tedy nefunguje správně, tak vznikají mutace, které zvyšují riziko\nrozvoje malignity (onkogeneze)\n\no  Peutz-Jeghersův syndrom = AD, přítomnost polypů ve střevě + mukokutánní\n\nhyperpigmentace\n\nMaligní nádory střeva a anu\n\n-  Epitelové, neuroendokrinní, mezenchymální i lymfomy\n-  Nejčastěji se setkáme s kolorektálním karcinomem\n-  V anální oblasti se objevuje problematika, že se zde nachází žlázový epitel, který pak\n\npřechází na dlaždicový → může se zde tedy vyskytnout adenokarcinom i\ndlaždicobuněčný karcinom (ten je často spojen s HPV infekcí)\n\n-  Nádory v tenkém střevě se vyskytují velmi vzácně, když se už vyskytnou, tak bývají\n\nsoučástí nějakého karcinomového syndromu jako je např. Lynchův syndrom – jedná se\n\no AD onemocnění, kde se nevyskytuje střevní polypóza (je zde dokonce absence\njakéhokoliv premorbidního fenotypu, takže prvním projeven je až maligní nádor) →\ntito lidí mají celkově zvýšené riziko malignit, mohou se objevit i ka ovaria,\nendometria, pankreatu, ale nejčastěji se u nich vyskytuje právě kolorektální karcinom\n-  Kolorektální karcinom (CRC) = jedná se o maligní epitelový nádor a predispozicí pro\njeho vznik je nezdravý životní styl definován jako „západní typ diety“, kdy se člověk\nstravuje větším množství živočišných bílkovin, rafinovaných cukrů, tuků, alkohol,\nnedostatek pohybu; ale také se nádor může vyskytovat v souvislosti s idiopatickými\nzáněty (MC, UC) a genetickými predispozicemi → nádor se rozděluje na pravostranný\na levostranný\n\no  Levostranný CRC = rostou endocyticky, ulcerovaně nebo anulárně, čímž\n\nmohou způsobovat stenózu střevního lumina → projevuje se zácpou, která\nmůže vyústit až v ileus, tenesmy, bolest v levém hypochondriu; kvůli\nulceracím se může objevit i krev ve stolici, nebo může docházet ke krvácení\nz konečníku bez vazby na defekaci, což může vyústit v rozvoj sideropenické\nanémie, později se rozvíjí i hubnutí a kachexie\n\no  Pravostranný CRC = rostou převážně exofyticky, ale nezpůsobují rigidní\n\nstenózy lumina, může docházet ke krvácení a rozvoji sideropenické anémie\n\nGastrointestinální lymfomy – zjm. zmínit MALT a EATL"
    },
    quiz: [
      {
        question: "Který subtyp polypózního adenomu tlustého střeva má nejvyšší riziko maligního zvratu do karcinomu?",
        options: [
          "Tubulární adenom",
          "Vilózní adenom (villous adenoma)",
          "Tubulovilózní adenom",
          "Hyperplastický polyp"
        ],
        correct: 1,
        explanation: "Vilózní adenomy jsou často větší, přisedlé (přisedle rostoucí na sliznici) a vykazují mikroskopicky prstovité výběžky (vily). Mají až 50% riziko přechodu v invazivní karcinom, což je výrazně více než u malých tubulárních adenomů."
      },
      {
        question: "Jak se liší typický klinický obraz a makroskopický růst karcinomu pravého a levého kolonu?",
        options: [
          "V pravém kolon roste stenozující prstenec způsobující zácpu; v levém kolon roste květákovitý tumor způsobující masivní krvácení",
          "V pravém kolon roste květákovitý exofytický tumor, který neucpává lumen a způsobuje sideropenickou anémii; v levém kolon roste cirkulárně infiltrující tumor vedoucí k zúžení lumenu (stenóze) a poruchám pasáže",
          "Oba typy rostou zcela identicky a neliší se",
          "Pravostranný karcinom se projevuje výhradně masivním zvracením krve"
        ],
        correct: 1,
        explanation: "Pravé kolon má široké lumen a tekutý obsah sliznice, proto se zde exofytické nádory projevují spíše plíživou anémií z okultního krvácení. Levé kolon má užší lumen a stolice je zahuštěná, takže cirkulární růst (stenóza) vede k zácpě, kolikám a riziku ileu."
      },
      {
        question: "Který dědičný syndrom (způsobený mutací MMR genů pro opravu chyb DNA) je spojen s rozvojem kolorektálního karcinomu bez předchozí masivní polypózy?",
        options: [
          "FAP (Familiární adenomatózní polypóza)",
          "Lynchův syndrom (HNPCC)",
          "Gardnerův syndrom",
          "Peutz-Jeghersův syndrom"
        ],
        correct: 1,
        explanation: "Lynchův syndrom (HNPCC - Hereditary Non-Polyposis Colorectal Cancer) vzniká mutací MMR genů (např. MSH2, MLH1). Nádory vznikají rychleji (přes MSI dráhu) bez stadií tisíců polypů, které nacházíme u FAP."
      },
      {
        question: "Který tumor marker se standardně vyšetřuje v krvi u pacientů po resekci kolorektálního karcinomu pro časný záchyt případné recidivy či metastáz?",
        type: "type-in",
        correct: ["CEA", "karcinoembryonální antigen"],
        explanation: "CEA (karcinoembryonální antigen) je onkofetální antigen. Jeho pooperační vzestup v séru spolehlivě signalizuje návrat onemocnění."
      },
      {
        question: "Jaká zkratka označuje dědičný syndrom charakterizovaný mutací genu APC a výskytem stovek až tisíců adenomatózních polypů v tlustém střevě, u kterého je 100% riziko maligního zvratu?",
        type: "type-in",
        correct: ["FAP", "Familiární adenomatózní polypóza"],
        explanation: "Familiární adenomatózní polypóza (FAP) je autozomálně dominantní onemocnění způsobené mutací genu APC, vyžadující preventivní kolektomii."
      }
    ]
},

  {
    id: "onco-24",
    title: "Nádory jater",
    section: "Nádory zažívacího traktu",
    category: "Onkologie",
    keywords: ["jaterní", "cirhóza", "hepatocelulární", "adenom", "hemangiom", "cholangiokarcinom", "metastázy", "AFP", "umbilikace"],
    content: {
      definition: "Nádory jater se dělí na primární (benigní a maligní) a sekundární (metastázy). Metastázy solidních tumorů jsou v játrech mnohonásobně (až 30x) častější než primární jaterní neoplazie.",
      etiology: "Cirhóza jater (jakékoliv etiologie) je hlavním rizikovým faktorem primárního karcinomu (HCC) – přítomna v 80–90 % případů. Klíčovými faktory jsou: chronická hepatitida B a C, alkoholismus, nealkoholická steatohepatitida (NASH) a aflatoxin B1 (toxin plísní). Užívání perorální antikoncepce u mladých žen je spojeno s rizikem hepatocelulárního adenomu.",
      pathogenesis: "1. **Benigní nádory**:\n- *Kavernózní hemangiom*: nejčastější benigní nádor jater, tvořen velkými krevními splavy. Riziko krvácení při biopsii jehlou.\n- *Fokální nodulární hyperplazie (FNH)*: nodulární leze s centrální vazivovou jizvou, nejde o pravý nádor, ale hyperplastickou odpověď na cévní anomálii.\n- *Hepatocelulární adenom*: benigní epitelový nádor z hepatocytů, hrozí spontánním prasknutím (rupturou) a masivním krvácením do dutiny břišní.\n2. **Maligní nádory**:\n- *Hepatocelulární karcinom (HCC)*: maligní tumor z hepatocytů. Vzniká maligní transformací v regeneračních uzlech u cirhózy.\n- *Cholangiokarcinom*: maligní tumor ze žlučovodů. Asociace s primární sklerozující cholangitidou (PSC), chronickou stázu žluči a infekcí jaterními motolicemi (Clonorchis sinensis) v Asii.\n- *Hepatoblastom*: vzácný embryonální tumor jater u dětí do 3 let.",
      macroscopy: "HCC: roste buď solitárně (jeden velký, prokrvácený a nekrotický uzel), multinodulárně (mnohočetné uzly u cirhózy), nebo difuzně. Nádorová tkáň má často **zelenavý nádech** (nádorové buňky produkují žluč). Cholangiokarcinom: tuhý, šedobílý uzel (neprodukuje žluč). Metastázy: mnohočetná, šedobílá ložiska s centrální nekrózou vedoucí k vtažení povrchu ložiska (**umbilikace**).",
      microscopy: "- *HCC*: nádorové buňky připomínají hepatocyty (polygonalní buňky s granularní eosinofilní cytoplasmou), které jsou uspořádány do trámců širších než 3 buňky (normální jaterní trámce mají 1-2 buňky) nebo tvoří pseudoglandulární struktury. V cytoplasmě je patrná tvorba žluči nebo Malloryho-Denkův hyalin.\n- *Cholangiokarcinom*: vykazuje strukturu adenokarcinomu (žlázové struktury s hlenem) obklopeného masivním desmoplastickým vazivovým stromatem.\n- *Metastázy*: zachovávají strukturu primárního nádoru (např. žlázky u kolorektálního adenokarcinomu).",
      clinical: "HCC: projevuje se náhlým zhoršením stavu u stabilního cirhotika (nově vzniklý ascites, ikterus, hubnutí). V krvi stoupá onkofetální tumor marker **AFP** (alfa-fetoprotein). HCC má výrazný sklon k **angioinvazi** (prorůstá do jaterních žil a portální žíly - riziko portální trombózy). Metastázy do jater pocházejí nejčastěji z GIT (kolorektální karcinom - šíření v. portae), prsu a plic.",
      additionalInfo: "-  Nejčastěji se zde vyskytují sekundární nádory (do jater mohou prakticky metastázovat\n\nvšechny maligní nádory)\n\nBenigní\n\n-  Kavernózní hemangiom = tvořen dilatovanými krevními cévami, které jsou od sebe\nodděleny vazivovými septy → probíhá asymptomaticky (náhodný nález), velké\nhemangiomy mohou zadržovat trombocyty → trombocytopenie (Kasabach-Meritové)\n→ většinou se jedná o subkapsulární ložisko, které může prasknout →\nhemoperitoneum\n\n-  Von Mayerburgův komplex = vývojová anomálie žlučovodů – biliární hamartom\n\nv játrech, které mohou napodobovat metastázy\n\n-  Hepatocelulární adenom = rizikové faktory – Hormonální antikoncepce, anabolické\n\nsteroidy → pokud je subkapsulární a praskne → hemoperitoneum\n\nMaligní\n\n-  Hepatocelulární karcinom = vzniká v játrech s cirhózou jako uzlovitá léze, která se\n\npostupně difúzně šíří do laloků → ivaduje do žil → hematogenní rozsev – zjm. plíce,\nkosti → příznaky se objeví až v posledním stádiu (ikterus, ascites, jaterní\nencefalopatie) → dobře diferencovaný napodobuje normální jaterní tkáň, ale ztrácí\nlobulární uspořádání, zvýšený N/C, hyperchromní jádra, Malloryho hyalin → spíše\nnapodobují tubulární nebo acinární růst, ohraničen pseudopouzdrem\n-  Cholangiocelulární = vychází z epitelu žlučovodů, jedná se o varianty\n\nadenokarcinomu (zjm. tubulárního typu), makroskopicky jsou bílé a tuhé\n\no  Klatskinův tumor (v oblasti hilu jater) = vzniká v místě spojení pravého a\n\nlevého žlučovodu v ductus hepaticus communis (extraheptální lokalizace) →\nmůže se šířit podél těchto žlučovodů do jater → invaze krevních a\nlymfatických cév\n\no  Nádor Vaterské papily = vede k obstrukci žlučového vývodu → rozvoj\n\nposthepatálního ikteru → tubulární karcinomy prorůstají do okolí (duodenum,\nhlava pankreatu)\n\n-  Karcinom žlučníku = adenokarcinomy, njč. roste exofyticky ve fundu žlučníku →\n\npřiléhá k játrům, do kterých může prorůstat → mohou také způsobovat\nkarcinomatózní peritonitidu"
    },
    quiz: [
      {
        question: "Který benigní nádor jater vykazuje úzkou souvislost s užíváním perorální antikoncepce a představuje riziko život ohrožujícího nitrobřišního krvácení?",
        options: [
          "Kavernózní hemangiom",
          "Hepatocelulární adenom (hepatocellular adenoma)",
          "Fokální nodulární hyperplazie (FNH)",
          "Cholangiokarcinom"
        ],
        correct: 1,
        explanation: "Hepatocelulární adenom je benigní epitelový nádor úzce spojený s estrogeny v antikoncepci. Má sklon k hemoragickým nekrózám a při ruptuře hrozí vykrvácením do břišní dutiny (hemoperitoneum)."
      },
      {
        question: "Jak se makroskopicky projevují vícečetné metastázy v játrech, které je odlišuje od primárního hepatocelulárního karcinomu?",
        options: [
          "Jsou vždy jasně zelené kvůli produkci žluči",
          "Tvoří vícečetné, ostře ohraničené šedobílé uzly s centrálním vtažením (umbilikací) v důsledku nekrózy",
          "Rostou výhradně difuzně bez tvorby uzlů",
          "Postihují pouze žlučové cesty"
        ],
        correct: 1,
        explanation: "Metastázy rostou v játrech jako vícečetné uzly. Protože rostou rychle, centrum uzlu trpí nedostatkem kyslíku a podléhá nekróze, která se svraští a vytvoří na povrchu jater typické pupkovité vtažení - umbilikaci."
      },
      {
        question: "Který specifický onkofetální tumor marker se stanovuje ze séra při podezření na vznik hepatocelulárního karcinomu (HCC) u pacienta s jaterní cirhózou?",
        type: "type-in",
        correct: ["AFP", "alfa-fetoprotein"],
        explanation: "Alfa-fetoprotein (AFP) je hlavní marker HCC. U dospělých je jeho zvýšená hladina (mimo těhotenství) vysoce podezřelá z HCC nebo germinálních nádorů."
      },
      {
        question: "Jak se nazývá maligní epitelový nádor vycházející z intrahepatálních nebo extrahepatálních žlučovodů?",
        type: "type-in",
        correct: ["cholangiokarcinom"],
        explanation: "Cholangiokarcinom je druhý nejčastější primární maligní nádor jater. Vychází z epitelu žlučových cest a neprodukuje žluč."
      }
    ]
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

      clinical: "Časná stadia jsou zcela bezpříznaková. Karcinom hlavy se projevuje **bezbolestným progresivním ikterem** (žloutenkou) z ucpání žlučovodu, doprovázeným **Courvoisierovým příznakem** (hmatný, zvětšený, ale nebolestivý žlučník). Karcinomy těla a ocasu se projeví až bolestmi v zádech z infiltrace nervů a hubnutím. Sleduje se marker **CA 19-9**.",
      additionalInfo: "Nádory exokrinního pankreatu\n\n-  Nejčastěji – duktální adenokarcinom → jeho prekurzorem je PanIN → rizikové\nfaktory (kouření, DM, alkohol, hereditární syndromy – stavy, které způsobují\nchronickou pankreatitidu) → solidní, neohraničený, tuhý, njč. roste na hlavě pankreatu\na infiltruje ductus choledochus s následným vznikem stenózy → šíří se perineurální do\nperitonea, kde se podílí na rozvoji karcinózy peritonea → metastázuje zjm.\nlymfogenně → většinou je tvořen dobře diferencovanýmí gnadulárními/tubulárními\nstrukturami, které infiltrují pankreatický parenchym → nádorový epitel je plochý\ns kubickými buňkami\n\nNádory endokrinního pankreatu – tvoří cca 2%\n\n-\n\nInzulinom = njč., benigní, solitární, ohraničený, opouzdřený → objevují se stavy\nhypoglykémie (zjm. po hladovění/fyzické námaze), zmatenost až ztráta vědomí\n\n-  Gastrinom (Zollinger-Ellisonův syndrom) = Z-E sy. vzniká v reakci na\n\nhypergastrinémii → hypersekrece HCl → vznik peptických vředů žaludku/duodena →\nobjevují se bolesti v souvislosti s jídlem a průjmy\n\n-  Glukagom = zvýšená produkce glukagonu → rozvíjí se syndrom, který zahrnuje mírný\n\nDM, anémii a migrující erythém\n\n-  VIPom = nadměrná sekrece VIP (vazoaktivní intersticiální peptid) – zvyšuje sekreci\nvody a elektrolytů ve střevě, inhibuje sekreci HCl → vyvolává syndrom WDHA\n(wattery diarrhea, hypokalemia, achlorhydria) → vodnaté průjmy vedoucí\nk nedostatku K+ a ztrátě HCl\n\n-  Karcinoid = produkce serotoninu → karcinoidový syndrom (viz. níže)"
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
      clinical: "Funkční NET tenkého střeva metastazující do jater vyvolávají **karcinoidový syndrom** (způsobený vyloučením serotoninu do systémového oběhu): 1. Záchvatovité zčervenání obličeje a krku (**flush**), 2. Průjmy, 3. Astmatické záchvaty (bronchospazmus), 4. Fibrotické změny na chlopních pravého srdce (Hedingerův syndrom - serotonin je v plicích odbouráván, proto levé srdce není postiženo).",
      additionalInfo: "-  Neuroendokrinní diferenciace (buňky produkující hormony) → klasifikovány do 3\n\nkategorií (neuroendokrinní tumory, neuroendokrinní karcinom, smíšené\nneuroendokrinní-nonendokrinní nádory)\n\nNeuroendokrinní tumory (NET I.-III.)\nNeuroendokrinní karcinomy (NEC G1-G3)\n\n-  Nízce diferencované, vysoce agresivní, malo- a velkobuněčná morfologie + exprese\n\nmarkerů neuroendokrinní produkce – bronchogenní karcinom\n\nSmíšené neuroendokrinní-noneuroendokrinní nádory (MiNEN)\n\n-  Bifázické – epitelová komponenta (většinou odpovídá karcinomu) a neuroendokrinní\nkomponenta (NET nebo NEC) → každá z komponent musí zaujímat aspoň 30%\n\nParaneopastické syndromy\n\n-  Karcinoidový syndrom = způsobené produkcí serotoninu → záchvaty zarudnutí,\n\nprůjmy, bronchokonstrikce; Karcinoidové srdce (ztluštění nástěnného endokardu i\nchlopní vazivem\n\n-  Hyperinzulinismus = způsobeno inzulinome → epizody hypoglykémie\n-  Zollinger-Ellisonův sy."
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
      clinical: "Klasická triáda příznaků (která se však vyskytuje jen u 10 % pacientů v pozdním stadiu): **hematurie** (krev v moči), **bolest v boku** a **hmatná rezistence**. Často se projevuje paraneoplastickými syndromy (erytrocytóza z produkce erythropoetinu, hyperkalcémie z produkce PTHrP). Má silný sklon k hematogennímu metastazování, a to zejména do plic (vzhled 'dělových koulí') a do kostí, kde vytváří charakteristické **osteolytické, pulzující metastázy** (bohatě prokrvené nádorové masy bourající kost, které se často projeví jako první příznak onemocnění ve formě patologické zlomeniny).",
      additionalInfo: "-  Nádory ledvin vychází z mezenchymu nebo tubulárních buněk → setkáme se zde, jak\n\ns benigními lézemi, tak i maligními\n\n-  Benigní = papilární adenom, renální onkocytom, angiomyolipom\n\n-  Maligní:\n\no  Světlobuněčný renální karcinom (Grawitzův tumor) = vzniká z parenchymu\nproximálního tubulu, a také je často spojen s mutací VHL genu (Von Hippel\nLindau) → jedná se o solidní nádory, který roste expanzivně → odtlačuje od\nsebe okolní tkáň, čímž si vytváří pseudopouzdro → může také invazivně\nprorůstat do ledvinné pánvičky, kde napadá cévy (proto velmi rychle zakládá\nhematogenní metastázy – zjm. do plic, kostí a mozku – nezřídka se na nádor\npřijde díky patologické zlomenině) → mikroskopicky je tvořen buňkami\ns objemnou cytoplazmou, díky obsahu glykogenu\n\no  Papilární renální karcinom = papilární buňky s úzkým lemem cytoplazmy →\n\nbazofilní\n\no  Chromofobocelulární renální karcinom = má alveolární uspořádání a je složen\nze 2 typů buněk – ze světlých buněk s růžovou cytoplazmou a projasněním a\npoté z menších eozinofeilnějších buněk → agresivní formy velmi redicivují i\npo odstranění ledviny → nejčastěji právě v místě jejího původního uložení"
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
      clinical: "Hlavním a často jediným příznakem je **intermitentní nebolestivá makrohematurie** (krev v moči, kterou pacient vidí). Diagnostika: cystoskopie s biopsií. Léčba: neinvazivní formy se řeší transuretrální resekcí (TURBT) a instilací BCG vakcíny do měchýře; invazivní karcinomy vyžadují radikální cystektomii (odstranění měchýře).",
      additionalInfo: "Urotelilární karcinom\n\n-  Nejčastější nádor, který se v močovém měchýři vyskytuje (až 97%) a hlavním\nrizikovým faktorem pro jeho vznik je kouření, a také genetické předpoklady\n\n-  Uroteliální léze mohou vzniknout 2 cestami:\n\no  Papilární = urotelilární hyperplastické léze, které propagují do exofytického\n\npapilárního karcinomu\n\no  Nepapilární = dysplastické léze (CIS), které rovnou přechází do invazivního\n\ntypu uroteliálního karcinomu\n\n-  Léze tedy lze rozdělit do 3 skupin:\n\no  Ploché = dysplastické → CIS → rychlá progrese a rozvoj invazivní složky\no  Neinvazivní = lepší prognóza\no  Invazivní = mohou vycházet z CIS, exofytického papilárních karcinomu nebo\n\ntaké mohou již růst od počátku\n\nDlaždicobuněčný karcinom\n\n-  Setkáváme se s ním velmi zřídka a často bývá spojen s dlouhodobým drážděním stěny\nmočového měchýře, který vyvolá metaplázii v dlaždicový epitel (njč. v důsledku\nnapadení schistosomy)\n\nPrimární adenokarcinom močového měchýře\n\n-  Vzniká velmi vzácně v oblasti urachu (zbytky embryonálního vývoje) na podkladně\n\nmetaplázie v močovém měchýři"
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
      clinical: "Dlouho asymptomatický. Pokročilé stadium se projeví dysurií (obtížné močení) nebo bolestmi v zádech. Karcinom prostaty typicky metastázuje do kostí (páteř, pánev), kde vyvolává **osteoplastické (sklerotické) metastázy** (dochází k novotvorbě kosti, kosti jsou na RTG bílé a extrémně husté). Sleduje se marker **PSA** (prostatický specifický antigen).",
      additionalInfo: "-  Nejčastěji (až 95%) se zde setkáváme s acinárním adenokarcinomem prostaty, který\nvzniká zjm. v zadní nebo periferní zóně a lze jej vyhmatat per rectum → je tvořen\nžlázkami, které jsou na sebe velmi hustě uspořádané (tzv. back to back) a často jim\nchybí bazální vrstva (normálně – dvouřadý cylindrický) → k posuzování\narchitektoniky těchto žlázek nám slouží Gleasonovo skóre (G1-G5) → metastázuje\nzjm. lymfogenně, ale později i hematogenně do kostí (zjm. křížová a žebra), kde nádor\npodporuje růst kostí a zakládá denzní kostní útvary (=osteoplazmatické metastázy) →\nKlinicky se stanovuje PSA (prostatický specifický Ag), který je velmi citlivým\ndiagnostickým markerem i velmi časných stádií → Zpočátku jsou příznaky často\npodobné příznakům prostatické hyperplázie (dysurie, hematurie, hematosperma,\n\nimpotence), později se vyskytuje i bolestivá erekce a potíže s defekací → následně i\nbolesti zad, edémy DK (způsobené útlakem nervů a cév kvůli zvětšeným uzlinám)\n-  Vzácně – duktální prostatický adenokarcinom (agresivnější), ale většinou se vyskytuje\n\nsoučasně s acinárním adenokarcinomem prostaty"
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
    section: "Nádory urogenitálního traktu",
    category: "Onkologie",
    keywords: ["varle", "seminom", "neseminom", "kryptorchismus", "AFP", "hCG", "yolk sac", "choriokarcinom", "Schiller-Duval"],
    content: {
      definition: "Nádory varlat postihují převážně mladé muže (ve věku 20–40 let). Více než 95 % z nich vychází ze zárodečných (germinálních) buněk a označují se jako germinální nádory. Dělí se na seminomy (50 %) a neseminomy (50 %).",
      etiology: "Hlavním rizikovým faktorem je **kryptorchismus** (nesestouplé varle - zvyšuje riziko 4–10x, a to i po chirurgické orchiopexi), syndrom testikulární dysgeneze (porucha vývoje varlat) a rodinná anamnéza.",
      pathogenesis: "Téměř všechny germinální nádory u dospělých (kromě spermatocytárního seminomu starších mužů) vznikají z prekurzorové léze zvané **GCNIS** (germ cell neoplasia in situ - atypické zárodečné buňky uvnitř semenotvorných kanálků).\n1. **Seminom**: nejčastější, roste pomaleji, vysoce radiocitlivý a chemocitlivý. **Zásadně nikdy neprodukuje AFP!**\n2. **Neseminomy** (agresivnější chování, časně metastázují hematogenně):\n- *Embryonální karcinom*: vysoce anaplastický, roste v pruzích a papilách, s častým krvácením a nekrózami.\n- *Nádor ze žloutkového váčku (Yolk sac tumor)*: nejčastější germinální tumor u dětí (do 3 let, benigní průběh), u dospělých je součástí smíšených neseminomů. **Charakteristicky produkuje AFP**.\n- *Choriokarcinom*: nejagresivnější, tvořen buňkami trofoblastu, vysoce prokrvácený, **produkuje hCG**. Metastázuje hematogenně do plic a mozku extrémně časně (často se manifestuje hemoptýzou před odhalením testikulárního ložiska).\n- *Teratom*: obsahuje tkáně všech tří zárodečných listů (chrupavka, podkoží, zuby). U postpubertálních mužů se teratom **vždy chová jako maligní nádor** (na rozdíl od žen, kde jsou zralé teratomy benigní!).",
      macroscopy: "Seminom: homogenní, šedobílý, masitý, laločnatý uzel zvětšující varle, bez ložisek nekróz a krvácení. Neseminomy (embryonální k., choriokarcinom): pestrý vzhled, neostře ohraničená, prokrvácená ložiska s masivními žlutavými nekrózami. Teratom: cystická struktura vyplněná rohovými hmotami, chrupavkou a vlasy.",
      microscopy: "- *Seminom*: velké, uniformní, polygonální buňky s jasnou cytoplasmou (bohatou na glykogen) a kulatým jádrem. Jsou uspořádány do hnízd oddělených vazivovými septy s výraznou **lymfocytární infiltrací** (někdy i s granulomy).\n- *Yolk sac tumor*: síťovité (retikulární) uspořádání, přítomnost **Schiller-Duvalových tělísek** (struktury připomínající glomeruly - centrální kapilára krytá vrstvou nádorových buněk v prázdném prostoru). Eosinofilní hyalinní kapičky v cytoplasmě (obsahují AFP).\n- *Choriokarcinom*: dimorfní struktura – syncytiotrofoblast (obří vícejaderné buňky produkující hCG) a cytotrofoblast (mononukleární buňky).\n- *Leydigův tumor* (ze zárodečného stroma): polygonální buňky s růžovou cytoplasmou obsahující tyčinkovité **Reinkeho krystaly**.",
      clinical: "Nebolestivé zvětšení a ztuhnutí varlete. Sérové markery jsou zásadní pro diagnostiku a staging: **hCG** (lidský choriový gonadotropin), **AFP** (alfa-fetoprotein) a **LDH** (odráží tumorózní nálož). **Klinické pravidlo**: Čistý seminom nesmí produkovat AFP. Zvýšení AFP u histologicky diagnostikovaného seminomu znamená přítomnost neseminomové složky (smíšený tumor) a vyžaduje agresivnější chemoterapii (režim BEP). Chirurgie: orhiektomie se provádí zásadně **transinguinálním přístupem** (nikdy ne skrotálně kvůli riziku rozsevu nádorových buněk do skrotální kůže a změny lymfatické drenáže).",
      additionalInfo: "-  Nádory varlat hodnotíme dle TNM klasifikace, kde T (tumor, hodnotíme velikost\nnádoru), N (nodus, hodnotíme počet postižených uzlin), M (metastázy, zda nádor\nzaložil vzdálené metastázy)\n\n-  U lidí s nádorem varlat je indikovaná inguinální orchioktomie (řez podél tříselného\n\nvazu) → intrakutánní biopsie je zde velmi přísně kontraindikována, jelikož by mohlo\ndojít k založení implantačních metastáz do podkoží a kůže podél vpichu jehly\n\nNádory germinální\n\n-  Vznikají z multipotentních kmenových buněk, které se mohou diferencovat v pohlavní\nbuňky (→ seminomy) nebo v jiné tkáně (→ non-seminomy, které ještě dělíme na\nsomatické – embryonální karcinom, teratomy; a extrasomatické – nádor ze\nžloutkového váčku, choriokarcinom) a jejich rizikovým faktorem pro jejich vznik jsou\nnesestouplá varlata (kryptorchismus)\n\n-  Seminom = maligní nádor → jedná se často o jednostranné bolestivé zvětšení varlete\n\n→ bývá solidní a mikroskopicky se skládá z buněk se světlou cytoplazmou\n(glykogen), má dobrou prognózu a dobře reaguje na radioterapii\n\n-  Embryonální karcinom = maligní, tvořen buňkami, které se podobají embryonálním\n\nkmenovým buňkám → jedná se o zvětšující se varle, které může procházet i\nhemoarickými či nekrotickými změnami → mikroskopicky je složen s buněk\ns eozinofilní cytoplazmou a objevují se i četné mitózy\n\n-  Nádor ze žloutkového váčku = je vysoce maligní a jedná se o jeden z nejčastějších\nnádorů varlete u dětí → nádorové buňky se řadí radiálně kolem cév, které pak\nprominují do mikrocyst (připomínají primitivní glomerula tzv. Schillerova-Duvalova\ntělíska) → nádor produkuje alfa-1-fetoprotein, který je spolehlivým diagnostickým\nmarkerem a také ukazatelem léčby\n\n-  Choriokarcinom = maligní nádory, který vychází z buněk trofoblastu → nádor\nprodukuje velké množství hCG (jehož hladina je diagnostickým markerem i\nukazatelem léčby, ale zároveň tyto vysoké hodnoty mohou vyvolat zkříženou reakci\nvůči TSH receptorům a způsobit tyreotoxikózu → zároveň je hCG hormon velmi\npodobný LH, takže dokáže stimulovat Leydigovy buňky k produkci androgenů a tato\nnadměrná produkce následně vede k přesmyku na estrogeny, které simulují mléčnou\nžlázu a způsobují gynekomastii\n\n-  Teratom = jedná se o tkáně, které vychází z 1 nebo klidně ze všech 3 zárodečných lišt\n→ jsou místu nepříslušné a dělíme je na zralé (benigní ze zralých buněk – objevují se\nzuby, vlasy, kosti apod.) , nezralé (maligní, z nezralých buněk) a monodermální\n(vychází pouze 1 jedné buněčné linie)\n\n-  Všechny zmíněné nádory se často vyskytují v rámci smíšených germinálních nádorech\n(jedná se často o směs embryonálního, teratomu, seminomu nebo žloutkového váčku)\n→ prognózu těchto nádorů určuje komponenta s nejvyšším agresivním potenciálem\n\nNádory ze zárodečné lišty\n\n-  Vyskytují se velmi zřídka a řadíme zde nádor z Leydigových buněk (1-2%) a nádor ze\n\nSertoliho buněk (<1%)"
    },
    quiz: [
      {
        question: "Pacientovi byl histologicky diagnostikován čistý seminom varlete, ale v krvi byla zjištěna vysoká hladina AFP (alfa-fetoproteinu). Co tento nález znamená klinicky?",
        options: [
          "Nález je normální, čistý seminom produkuje AFP běžně",
          "Pacient má ve skutečnosti smíšený germinální nádor obsahující neseminomovou složku (např. yolk sac tumor), což vylučuje diagnózu čistého seminomu a mění léčbu",
          "Pacient má doprovodnou hepatitidu",
          "Nádor metastazoval do kostí"
        ],
        correct: 1,
        explanation: "Čistý seminom nikdy neprodukuje AFP. Přítomnost zvýšeného AFP v séru znamená, že v nádoru je přítomna neseminomová složka (nejčastěji yolk sac tumor). Nádor se musí léčit jako neseminom (který je radiorezistentní a vyžaduje chemoterapii)."
      },
      {
        question: "Jak se nazývá specifické mikroskopické tělísko patognomické pro yolk sac tumor, které připomíná primitivní ledvinný glomerulus s centrální cévou?",
        options: [
          "Call-Exnerovo tělísko",
          "Schiller-Duvalovo tělísko",
          "Psamomatózní tělísko",
          "Aschoffovo tělísko"
        ],
        correct: 1,
        explanation: "Schiller-Duvalova tělíska jsou typická pro yolk sac tumor (nádor ze žloutkového váčku). Jde o kapilární kličku obklopenou nádorovými buňkami ležící v prostoru vystlaném plochými buňkami."
      },
      {
        question: "Který přístup (chirurgická cesta) se volí při orchiektomii (odstranění varlete) z důvodu podezření na maligní tumor a proč?",
        options: [
          "Přes skrotum, protože je to nejrychlejší cesta",
          "Zásadně transinguinální přístup (přes tříslo), aby se zabránilo rozsevu nádorových buněk do skrotální kůže s jinou lymfatickou drenáží a vzniku lokální recidivy",
          "Laparoskopický přístup přes dutinu břišní",
          "Transrektální přístup"
        ],
        correct: 1,
        explanation: "Lymfatická drenáž varlete jde podél vasa testicularia retroperitoneálně do paraaortálních uzlin. Lymfa ze skrota jde do tříselných uzlin. Skrotální přístup by mohl kontaminovat kůži skrota nádorovými buňkami a změnit směr metastazování, proto se operuje výhradně z tříselného řezu."
      },
      {
        question: "Která zkratka označuje prekurzorovou lézi, ze které vzniká většina testikulárních germinálních nádorů u dospělých?",
        type: "type-in",
        correct: ["GCNIS", "germ cell neoplasia in situ"],
        explanation: "GCNIS (germ cell neoplasia in situ) je prekurzorová léze lokalizovaná v semenotvorných kanálcích varlete."
      },
      {
        question: "Které krystaly (název podle objevitele) se nacházejí v cytoplasmě Leydigových buněk a pomáhají potvrdit diagnózu Leydigova tumoru?",
        type: "type-in",
        correct: ["Reinkeho krystaly", "Reinkeho", "Reinke"],
        explanation: "Reinkeho krystaly jsou specifické proteinové tyčinkovité inkluze v cytoplasmě buněk Leydigova tumoru."
      }
    ]
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
      clinical: "Karcinom čípku se screenuje cytologicky (PAP stěr) a kolposkopicky. Projevuje se kontaktním krvácením (po styku). Karcinom endometria se typicky projevuje **krvácením v postmenopauze** (vyžaduje abrazi dělohy - kyretáž k vyloučení karcinomu!). Adenomyóza se klinicky projevuje **menoragií** (silné krvácení), **dysmenoreou** (bolestivá menstruace) a chronickou pánevní bolestí.",
      additionalInfo: "Prekancerózy děložního hrdla\n\n-  Dělení na low- a high-grade skvamózní intraepiteliální neoplázie\no  Low-grade = CIN I (změny do výše 1/3 epitelu)\no  High-grade = CIN II (změny do výše 2/3 epitelu), CIN III (carcinoma in situ)\n\nKarcinomy děložního hrdla\n\n-\n\nJsou úzce spjaty s nákazou vysoce rizikovými sérotypy HPV 16, 18, který se nějčastěji\npodílí na rozvoji dlaždicobuněčného karcinomu (roste exofyticky, papilárně\ns ulcerovaným povrchem, ale může i endofyticky a invadovat do stromatu; jsou zde\npatrné buňky s virovými inkluzemi a perinukleárním haló – koilocyty); méně často se\npodílí na rozvojí adenokarcinom (njč. endometriální typ adenokarcinomu)\n\n-  Zpočátku probíhají asymptomaticky, ale později se objevuje krvácení mimo cyklus,\n\nvýtok i bolesti břicha\n\n-  Může vzniknout vesicovaginální píštěl (→ šíření do močového měchýře),\n\nrektovaginální píštěl (→ šíření do rekta)\n\nKarcinomy endometria\n\n-  Exofyticky rostoucí mohou vyplňovat klidně celou dělohu, endofyticky rostoucí\n\ninvadují do myometria\n\n-  Serózní karcinom = vzniká v polypu endometria, invaduje do myometria,\n\nlymfangiogeneze a extrauterinní šíření\n\n-  Mucinózní karcinom = mucinózní hlenotvorné buňky tvoří víc jak 50% nádoru\n-  Endometriální karcinom (rizikový faktor – vysoké hladiny estrogenu) = velmi dobře\n\npapodobuje nenádorové endometriální žlázy\n\n-  Světlobuněčný karcinom = hluboce invazivní, špatná prognóza\n-  Smíšený epiteliální a mezenchymální = Müllerianský nádor (→vzniká\n\nz embryonálních zbytků Müllerova vývodu, který dává vznik vývodným částem\nženských pohlavních orgánů)\n\nNádory myometria\n\n-  Setkáváme se zde zjm. z mezenchymálními nádory z hladkosvalových buněk\n-  Leiomyom = dobře ohraničený, uzlovitý nádor, může se vyskytovat mnohočetně, je\n\nestrogen-dependentní (v těhu roste, v klimakteriu regreduje), může podléhat\ndystrofické kalcifikaci (→ děložní kámen)\n\n-  Leiomyosarkom = maligní nádor z hladkosvalových buněk, který vždy vzniká de\nnovo!!, nikdy nevzniká z benigního leiomyomu; není ohraničen a metastázuje\nhematogenně (zjm. do plic)"
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
    section: "Nádory urogenitálního traktu",
    category: "Onkologie",
    keywords: ["vaječník", "cystadenom", "cystadenokarcinom", "teratom", "Meigs", "Krukenberg", "Call-Exner", "CA-125", "endometrióza"],
    content: {
      definition: "Nádory vaječníků představují vysoce heterogenní skupinu neoplazií. Vycházejí z různých buněčných komponent ovaria: povrchového epitelu, zárodečných (germinálních) buněk, nebo buněk zárodečného stroma. Významným benigním procesem v ovariu je **endometrióza** (přítomnost ložisek endometria mimo děložní dutinu).",
      etiology: "Rizikové faktory u epitelových karcinomů: vysoký počet ovulací (nuliparita - ženy bez dětí, absence kojení a antikoncepce, kdy dochází k opakovanému traumatizování povrchového epitelu), genetické mutace **BRCA1/2**, Lynchův syndrom. Endometrióza vzniká retrográdní menstruací přes vejcovody, metaplazií coelomového epitelu nebo cévním šířením.",
      pathogenesis: "1. **Epitelové nádory (70 %)**: dělí se na benigní, borderline (hraniční malignita, bez invaze do stroma) a maligní (karcinomy):\n- *Serózní (nejčastější)*: papilární architektura. Dělí se na LGSC (low-grade, mutace KRAS/BRAF) and HGSC (high-grade, 95 % mutací TP53, agresivní, často vychází z vejcovodu).\n- *Mucinózní*: vyplněné hlenem, mohou dosáhnout obřích rozměrů. Při ruptuře a rozsevu buněk vzniká **pseudomyxom peritonei** (gelatinózní břicho).\n- *Endometrioidní* and *jasnobuněčný*: úzká patogenetická vazba na endometriózu ovaria.\n- *Brennerův tumor*: vzácný benigní tumor obsahující hnízda uroteliálních buněk.\n2. **Germinální nádory (15 %)**:\n- *Zralý teratom (dermoidní cysta)*: nejčastější benigní ovariální tumor mladých žen. Obsahuje diferencované tkáně.\n- *Dysgerminom*: ženský ekvivalent seminomu, maligní, citlivý na radioterapii.\n- *Yolk sac tumor* (produkuje AFP) and *choriokarcinom* (produkuje hCG).\n3. **Nádory ze zárodečného stroma (10 %)**:\n- *Granulózový tumor*: low-grade maligní, produkuje estrogeny (vede k hyperplazii endometria a krvácení u postmenopauzálních žen).\n- *Fibrom-Thekom*: benigní, thekomy produkují estrogeny, fibromy jsou hormonálně inaktivní a jsou asociovány s **Meigsovým syndromem**.\n4. **Metastázy**: **Krukenbergův tumor** – bilaterální metastáza mucinózního karcinomu z prstencovitých buněk žaludku do ovarií.\n5. **Endometrióza ovaria**: ektopická sliznice reaguje na hormonální cyklus. Opakované cyklické krvácení do uzavřeného prostoru vede ke vzniku ovariálních **čokoládových cyst** (endometriomů) s hemosiderinovým pigmentem.",
      macroscopy: "Cystadenomy: velké, tenkostěnné jednokomorové či vícekomorové cysty s čirou tekutinou (serózní) nebo hustým hlenem (mucinózní). Karcinomy: solidně-cystické, s papilárními výrůstky (vegetacemi) na stěně, ložisky nekróz. Dermoidní cysta: cysta obsahující ložisko loje, vlasů, zubů. Čokoládová cysta: naplněna hustou, tmavě hnědou tekutinou (rozpadlá krev), stěna je fibrotická a svraštělá.",
      microscopy: "- *Serózní karcinom*: papilární struktury kryté atypickým epitelem, přítomnost koncentricky vrstvených kalcifikovaných kuliček - **psamomatózních tělísek**.\n- *Teratom*: zralé tkáně všech 3 zárodečných listů (chrupavka, epidermis, glie, bronchus, štítná žláza - *struma ovarii*).\n- *Granulózový tumor*: buňky s jádry vzhledu **kávového zrna** (rýha v jádře), tvořící primitivní folikuly vyplněné eosinofilním materiálem – **Call-Exnerova tělíska**.\n- *Krukenbergův tumor*: hnízda **prstencovitých buněk** (signet-ring cells) infiltrující ovariální stroma.\n- *Endometrióza*: ložiska endometriálních žlázek a stromatu ve stěně cysty doprovázená siderofágy (makrofágy s hemosiderinem).",
      clinical: "Ovariální karcinomy jsou přezdívány **tichý zabiják**, protože rostou bezpříznakově v pánvi. V době diagnózy jsou často generalizované implantacemi na peritoneum (**karcinomatóza peritonea** s ascitem). Sleduje se tumorózní marker **CA-125**. **Meigsův syndrom** je triáda: benigní fibrom ovaria, ascites a hydrothorax (fluidotorax), které po odstranění fibromu spontánně vymizí. Endometrióza se klinicky projevuje dysmenoreou, chronickou pánevní bolestí, dyspareunií a je častou příčinou neplodnosti.",
      additionalInfo: "-  Primární nádory = epitelové, sex-cord, germinální\n\nEpitelové\n\n-  Dle histo je dělíme na = serózní, mucinózní, endometriální a světlobuněčné\n-  Dle biologického chování = benigní, border-line, maligní\n-  Serózní nádory ovaria\n\no  Benigní = serózní cystadenom, serózní fibroadenom, povrchový serózní\n\npapilom\n\no  Border-line serózní nádor ovaria = zvýšená proliferace epitelu, ale bez\n\ndestruktivního invazivního růstu, bez high-grade jaderných atypií a četných\nmitóz → jedná se o výrůstky a bývá patrný rozsev na peritoneu → pokud jsou\ntato ložiska neinvazivní, tak se jedná o impantáty, avšak pokud jsou již\ninvazivní, tak se jedná o low-grade serózní karcinom ovária\n\no  Maligní\n\n▪  Low-grade serózní karcinom ovaria = papilárně rostoucí nádor a bývá\n\ndiagnostikován až v době diseminace po břišní dutině (může se\nprojevovat ascitem a bolestí břicha)\n\n▪  High-grade serózní karcinom = solidně rostoucí nádor, který si může\n\nsem tam zachovat papilární architektoniku, diseminuje do břišní dutiny\ni na omentum, jaderné atypie, četné mitózy\n\n-  Mucinózní nádory ovária\n\no  Benigní = njč. mucinózní cystadenom – jednostranné cystické léze o velikosti\naž 30 cm, vzniká na podkladě mucinózní metaplázie epitelu (Walthardova\nhnízda)\n\no  Maligní = mucinózní karcinom – velké, jednostranné léze, které nepostihují\n\npovrch ovaria\n\nSex-cord\n\n-  Vznikají ze zárodečných provazců nebo ze specializovaného stromatu gonád\n-  Nádory ze skupiny thékom-fibrom = buňky théky a fibroblastů\n\no  Njč. ovariální fibrom = benigní, solidní, tuhý → pokud jsou již patrné jaderné\n\natypie a mitózy, tak se jedná o maligní ovariální fibrosarkom\no  Thékom = <1%, jednostranné léze, hormonálně aktivní (estrogen)\n\n-  Nádory ze steroidogenních buněk\n\no  Z Leydigových buněk = jednostranné, v oblasti ovariálního hilu, žlutavé\n\n(vysoký obsah lipidů), cytoplazmatické Reinkeho krystaly\n\no  Steroidogenní nádor = benigní i maligní varianta → maligní je větší, nekrózy,\n\nhemoragie, jaderné atypie\n\n-  Nádory z buněk granulomatózy\n\no  Adultní = u postmenopauzálních žen, hormonálně aktivní (estrogen), často\n\nspojen s atypickou hyperplázii endometria\n\no  Juvenilní = z 80% je spojen s předčasnou pseudopubertou (pseudobuberta\npraecox → objevují se sekundární pohlavní znaky, ale nedochází i ovulaci\n(těhotenství není možné)\n\nGerminální\n\n-  Vznikají z germinálních (zárodečných) buněk\n-  Nádory z primitivních germinálních buněk = njč. se objevuje dysgerminom ovaria,\n\nkterý je solidní, opouzdřený, postihuje pouze 1 ovarium, světlé buňky s glykogenem\n→ dále se zde vyskytuje nádor ze žloutkového váčku, embryonální nádor a non-\ngestační choriokarcinom\n\n-  Teratom = vzniká z 1 nebo klidně ze všech 3 zárodečných listů → zralý (benigní, ze\nzralých buněk – obsahuje vlasy, zuby, kosti, šž, chrupavky, nervovou tkáň), nezralý\n(maligní, z nezralých buněk), monodermální (vznikají pouze z 1 typu tkáně – njč.\novariální struma tvořeno tkání z šž)\n\nSekundární\n\n-  Krukenbergův tumor = vzniká metastázemi z GIT\n\nSmíšené\n\n-  Mülleriánský nádor = high-grade karcinosarkom"
    },
    quiz: [
      {
        question: "Který ovariální tumor je spojen s Meigsovým syndromem a co tvoří klinickou triádu tohoto syndromu?",
        options: [
          "Granulózový tumor; triáda: tumor, hyperestrogenismus, karcinom endometria",
          "Ovariální fibrom (benigní stromální tumor); triáda: fibrom ovaria, ascites a hydrothorax (fluidotorax)",
          "Serózní cystadenokarcinom; triáda: tumor, ascites, pleurální výpotek",
          "Krukenbergův tumor; triáda: tumor žaludku, tumor vaječníku, ascites"
        ],
        correct: 1,
        explanation: "Meigsův syndrom je charakterizován přítomností benigního fibromu ovaria, nahromaděním tekutiny v břiše (ascites) a v hrudníku (hydrothorax). Po chirurgickém vyříznutí fibromu oba výpotky kompletně a trvale ustoupí."
      },
      {
        question: "Co jsou to Call-Exnerova tělíska a pro který ovariální nádor jsou mikroskopicky specifická?",
        options: [
          "Kalcifikované kuličky u serózního karcinomu",
          "Drobné dutinky vyplněné růžovým sekretem obklopené nádorovými buňkami s jádry vzhledu kávových zrn; specifická pro granulózový tumor",
          "Hlenové buňky u Krukenbergova tumoru",
          "Zralé tkáně u teratomu"
        ],
        correct: 1,
        explanation: "Call-Exnerova tělíska jsou typická pro granulózový tumor (nádor z buněk granulózy). Buňky secernují materiál podobný folikulární tekutině, což pod mikroskopem napodobuje primitivní Graafovy folikuly."
      },
      {
        question: "Jak se nazývá ovariální metastáza mucinózního karcinomu z prstencovitých buněk žaludku, která je typicky oboustranná a solidní?",
        options: [
          "Brennerův tumor",
          "Krukenbergův tumor",
          "Dysgerminom",
          "Struma ovarii"
        ],
        correct: 1,
        explanation: "Krukenbergův tumor je klasický příklad metastatického postižení vaječníků. Vychází z difuzního karcinomu žaludku, kdy se buňky šíří lymfogenně nebo transperitoneálně do obou vaječníků."
      },
      {
        question: "Který onkologický marker se standardně vyšetřuje ze séra pro sledování aktivity a recidivy ovariálních epiteliálních karcinomů?",
        type: "type-in",
        correct: ["CA-125", "CA125"],
        explanation: "CA-125 (Cancer Antigen 125) je glykoproteinový marker používaný u ovariálních karcinomů."
      },
      {
        question: "Jak se nazývá ovariální cysta vzniklá v důsledku endometriózy, která je vyplněná hustou tmavohnědou tekutinou z rozpadlé krve?",
        type: "type-in",
        correct: ["čokoládová cysta", "čokoládové cysty", "endometriom"],
        explanation: "Čokoládové cysty (endometriomy) vznikají cyklickým krvácením ektopického endometria v ovariu."
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
      clinical: "Screening v ČR: preventivní **mamografie** od 45 let každé 2 roky. Karcinom prsu metastázuje lymfogenně do podpažních (axilárních) uzlin (vyšetřuje se **sentinelová uzlina** - první spádová uzlina). Hematogenně do kostí, plic, jater.",
      additionalInfo: "Benigní\n\n-  Fibroadenom (njč.) = bifázický (složen ze 2 komponent – epiteliální a\n\nmezenchymální) → na základě uspořádání komponent rozlišujeme intrakanalikulární\n(epitelová komponenta obklopuje mezenchymální) a perikanalikulární\n\n(mezenchymální komponenta obklopuje epitelovou), je opouzdřený, ohraničený,\nnebolestivý a pohyblivý vůči spodině\n\n-  Tubulární adenom = laktační adenom prsu a papilom prsu (2. njč. benigní nádor prsu;\ncharakteristický 2 vrstvami nádorových buněk, které lemují větvící se stromální\npapily; roste intraduktálně, keříčkovitě\n\nMaligní\n\n-  CIS – prekancerózy\n\no  Léze, které odpovídají malignímu nádoru, ale jejich růst je omezen pouze na\n\nepitel (neinvadují do stromatu skrz BM – ta je neporušená)\n\no  Mikroskopicky je duktální nerozeznatelný od lobulárního (napomáhá barvení\n\nE-cadherinem → duktální pozitivní, lobulární negativní)\n\no  Duktální (DCIS) = high-grade (vysoká tendence přechodu do agresivity), Non-\ngrade (bez jaderných atypií; I – bez nekróz; II. – nekrózy); komedonekrózy →\ntypické pro šíření DCIS je intraepiteliální šíření až na dlaždicový epitel\nbradavky → rozvoj Pagetovy choroby bradavky, která se projevuje nehojící se\nulceracemi, které fibrinovou krustou\n\no  Lobulární (LCIS) = buňky ztratily expresi E-cadherinu (buněčné spoje) →\n\nmnoží se nahodile v lobulech a postupně způsobují jejich dilataci, později se\nšíří do jednotlivých duktů\n\n-\n\nInvazivní\n\no  Duktální karcinom (NST) = grading se určuje dle 3 parametrů (tvorba\nžlázových struktur, variabilita jader, počet mitóz), napodobuje žlázy\no  Lobulární karcinom = buňky bez E-cadherinu → množí se dyskohezivně,\n\ntypickým infiltrativním způsobem – řádkování (husí pochod)\n\no  Tubulární karcinom = hormonálně dependentní\no  Mucinózní karcinom = z mucinózních buněk\no  Papilární = z epitelových buněk\n\nPhylloides tumuor\n\n-  Bifázický, podobný intrakanalikulárnímu fibroadenomu (ale mezenchymální\n\nkomponenta Phylloides je více buněčná)\n\nPatologie mužského prsu\n\n-  Gynekomastie (mužské prso neobsahuje lobuly!!) = vzniká v důsledku hyperestrismu\n(př. při postižení jater, nebo choriokarcinomu varlat, který produkuje nadbytek hCG,\nkterý je podobný LH → sitmulace Leydigových buněk a přesmyk androgenů a\nestrogen → stimulace růstu prsní žlázy)\n\n-  Karcinom mužského prsu = njč. se jedná o invazivní duktální karcinom (NST)"
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
      clinical: "Kompletní mola se projevuje dělohou zvětšenou více, než odpovídá týdnu těhotenství, a vaginálním krvácením (odchodem váčků). Choriokarcinom je charakterizován **extrémně vysokou hladinou hCG** v krvi. Velmi časně metastázuje hematogenně do plic (způsobuje hemoptýzu). Je to však jeden z nejlépe léčitelných zhoubných nádorů chemoterapií (metotrexátem) s vysokým procentem vyléčení.",
      additionalInfo: "-  Trofoblast = zevní vrstva blastocysty, která dává vznik plodovým obalům a placentě,\n\nzároveň zajišťuje nidaci embrya do dělohy, výživu embrya a produkci hCG\n\n-  Existují také non-gestatní choriokarcinomy, které nemají souvislost s těhotenstvím →\n\nvznikají z germinálních buněk, které se chaoticky začnou formovat do struktur\ntrofoblastu, mají horší prognózu a hůře reagují na léčbu\n\nGestační choriokarcinom\n\n-  Maligní nádor s bifázickou strukturou → tvořen z cytotrofoblastu a syncitiotrofoblastu\n-  Nejčastěji vzniká v důsledku mola hydatosa complecta (prázdné vajíčko je oplozeno 2\n\nspermiemi → karyotyp je pouze parenterální → nevzniká embryo, klky jsou\nbezcévnaté a edematózní (na UV obraz sněžení) → roste destruktivně, šíří se do cév\n→ hematogenní rozsev – plíce, vagina, mozek, játra, kosti\n\n-  Produkuje hCG (diagnostický marker a ukazatel úspěšnosti léčby) → hCG se\n\nprodukuje i v případě non-gestačních choriokarcinomu (zkřížená reakce s TSH\nreceptory → tyreotoxikóza a také je podobný s LH → stimulace Leydigových buněk\nk nadměrné tvorbě androgenů → dochází k přesmyku na estrogeny → gynekomastie)"
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
    section: "Pediatrická patologie",
    category: "Onkologie",
    keywords: ["děti", "blastom", "leukémie", "neuroblastom", "Wilms", "retinoblastom", "leukokorie", "rozeta", "WT1", "RB1"],
    content: {
      definition: "Nádory dětského věku se zásadně liší od nádorů dospělých. Vzácně vycházejí z epitelu (karcinomy jsou u dětí extrémně vzácné), převažují nádory hematopoetické (leukémie, lymfomy), nádory CNS a maligní embryonální nádory (označované jako **blastomy**), které vycházejí z nezralých zárodečných tkání organogeneze.",
      etiology: "Vnější karcinogeny (strava, kouření) hrají minimální roli. Hlavní jsou genetické faktory: vrozené mutace tumor supresorových genů (např. **WT1, RB1, TP53**), chromozomální abnormality (Downův syndrom zvyšuje riziko leukémií 20x) and poruchy embryonálního vývoje.",
      pathogenesis: "1. **Akutní leukémie**: vůbec nejčastější dětské nádory (ALL tvoří 30 % dětských malignit).\n2. **Nádory CNS (druhé nejčastější)**: **Meduloblastom** (vysoce maligní neuroepiteliální tumor mozečku u dětí), **Pilocystický astrocytom** (benigní, Grade I mozečku, spojen s NF-1), **Ependymom** (ve 4. komoře).\n3. **Neuroblastom**: nejčastější mimolební solidní tumor dětí, vychází z buněk neurální lišty (sympatických ganglií nebo dřeně nadledvin). Vykazuje amplifikaci onkogenu **N-myc** (prognostický marker).\n4. **Nefroblastom (Wilmsův tumor)**: nejčastější dětský nádor ledviny (věk 2-5 let). Spojen s mutací genu **WT1**. Může být součástí syndromů (WAGR syndrom, Beckwith-Wiedemannův s.).\n5. **Retinoblastom**: vrozený (bilaterální, mutace zárodečné alely RB1) nebo sporadický (unilaterální) maligní nádor sítnice. Mutace genu **RB1** (klasický příklad Knudsonovy 'two-hit' hypotézy).\n6. **Rhabdomyosarkom**: nejčastější sarkom měkkých tkání u dětí (subtypy embryonální a alveolární). Buňky vykazují kosterně-svalovou diferenciaci.",
      macroscopy: "Nefroblastom: velký, měkký, laločnatý, šedobílý tumor, který roste z ledviny, stlačuje zbylý parenchym a má ložiska nekróz. Neuroblastom: neohraničená, měkká masa v retroperitoneu (nadledvině), často přechází přes střední čáru těla. Retinoblastom: bělavá uzlovitá masa na sítnici vyplňující sklivec.",
      microscopy: "Většina dětských solidních nádorů (neuroblastom, meduloblastom, Ewingův sarkom, rhabdomyosarkom) patří histologicky do skupiny **drobnokulatobuněčných modrých nádorů** (small round blue cell tumors) - buňky jsou malé, mají kulatá hyperchromní jádra a minimum cytoplasmy.\n- *Neuroblastom / Meduloblastom*: buňky tvoří **Homer-Wrightovy rozety** (buňky uspořádané do kruhu kolem centrální růžové zóny tvořené neuropilem - buněčnými výběžky, bez lumenu).\n- *Wilmsův tumor*: vykazuje **trifázickou strukturu** – obsahuje blastemovou složku (husté modré okrsky), epiteliální složku (primitivní tubuly a glomeruly) a stromální složku (vřetenovité buňky, myxoidní tkáň, příčně pruhovaný sval).\n- *Retinoblastom*: tvoří **Flexner-Wintersteinerovy rozety** (buňky kolem centrálního lumenu - primitivní fotoreceptory).\n- *Rhabdomyosarkom*: přítomnost podlouhlých **strap cells** (řemínkovitých buněk) s příčném pruhováním v cytoplasmě.",
      clinical: "Retinoblastom se klinicky manifestuje jako **leukokorie** (tzv. 'kočičí oko' – bílý odlesk zornice při fotografování s bleskem) a šilháním (strabismus). Wilmsův tumor se projevuje jako velké asymptomatické zvětšení břicha (hmatný tumor, který matka najde při koupání – **kontraindikace silné palpace** kvůli riziku ruptury pouzdra a rozsevu). Neuroblastom secernuje katecholaminy, což vede k hypertenzi, a v moči nacházíme zvýšenou hladinu **VMA** (kyseliny vanilmandlové) a **HVA** (kyseliny homovanilové).",
      additionalInfo: "-  Nejčastěji – onemocnění leukocytů (leukémie AML, ALL), i lymfomy (NHL I HL)\n-  Druhou nejčastější skupinou jsou CNS nádory – zjm. embryonální\n\nNádory měkkých tkání – rhabdomyosarkomy, juvenilní hemangiom, rhabdomyom\nNeuroblastické nádory – neuroblastom, ganglioneuroblastom, ganglioneurom\nNádory ledvin\n\n-  Nefroblastom (Wilmsův tumor) = tvoří 1 nádorový uzel (8-15 cm), který je velmi\n\ndobře ohraničený od nenádorové ledviny, ale okolní tkáň podléhá tlakové atrofii →\nmikroskopicky jsou patrné 3 složky (nediferencovaný blastém, diferencující se\nepitelové struktury a mezenchymální komponenta) → blastémové buňky jsou malé\ns vysokým N/C indexem a mitoticky velmi aktivní → někdy mohou být patrná i\nnefrogenní rezidua (nezralé struktury v ledvině) – jedná se o prekancerózy, které se\nmohou transformovat do nefroblastomu → často se vyskytují buď perilobulárně (četné\nložiska) nebo intralobulárně (solitární) → většinou regredují a atrofizují, čímž\nzanechávají po sobě vazivovou „jizvičku“\n\nNádory oka\n\n-  Retinoblastom = prorůstá z retiny do sklivce (endofyticky) → u objemnějších nádorů\nse vyskytují ložiska nekrotizace a kalcifikace → mikroskopicky je tvořen z malých\nnediferencovaných buněk s vysokým N/C indexem a vysokou mitotickou aktivitou →\nmůže prorůstat až do optického nervu i do mozku\n\nNádory jater\n\n-  Hepatoblastom = často bývá spojen s familiární adenomatózní polypózou, nevzniká\n\nv terénu jaterních onemocnění → nádor tvoří solitární uzel\n\no  Fetální = hepatocyty jsou uspořádané v trámcích, nádorové buňky obsahují\n\nglykogen v cytoplazmě, vysoká mitotická aktivita\n\no  Embryonální = primitivní buňky jsou uspořádané v difúzně rostoucích\n\nseskupeních nebo trámcích, zvýšená mitotická aktivita\n\no  Epiteliálně-mezenchymové = obsahují epitelovou složku, osteoid, myoidní\n\nnebo vazivovou tkáň"
    },
    quiz: [
      {
        question: "Jak se klinicky projevuje retinoblastom u dětí a jaký je genetický mechanismus jeho vzniku?",
        options: [
          "Projevuje se žloutnutím spojivky; mutace genu WT1",
          "Manifestuje se jako leukokorie (bílý odlesk zornice místo červeného reflexu) a šilháním; vzniká mutací obou alel tumor supresorového genu RB1 (Knudsonova hypotéza)",
          "Způsobuje slepotu a krvácení z nosu; mutace genu TP53",
          "Projevuje se zeleným zákalem; mutace genu APC"
        ],
        correct: 1,
        explanation: "Leukokorie (bílá zornice) je způsobena tím, že světlo se odráží od bílé masy nádoru sítnice. Retinoblastom vzniká ztrátou obou alel genu RB1. U dědičné formy je první mutace vrozená (všechny buňky těla) a druhá somatická (v sítnici, často oboustranně)."
      },
      {
        question: "Která histologická struktura definuje trifázický vzhled nefroblastomu (Wilmsova tumoru) pod mikroskopem?",
        options: [
          "Serózní buňky, mucinózní buňky a chrupavka",
          "Blastemová složka (husté modré buňky), epiteliální složka (primitivní žlázky/glomeruly) a stromální složka (vřetenovité buňky, svalovina)",
          "Pouze zralé adipocyty, cévy a hladký sval",
          "Homer-Wrightovy rozety, Pautrierovy mikroabscesy a psamomatózní tělíska"
        ],
        correct: 1,
        explanation: "Wilmsův tumor napodobuje vývoj ledviny. Obsahuje tři složky: nediferencovaný blastem (modré buňky), primitivní epitelové tubuly/glomeruly a mezenchymální stroma (které může obsahovat i kosterní sval)."
      },
      {
        question: "Pacient má diagnostikován neuroblastom. Které metabolity se standardně stanovují z moči pro potvrzení diagnózy a sledování úspěšnosti léčby?",
        options: [
          "Bence-Jonesova bílkovina a albumin",
          "Kyselina vanilmandlová (VMA) a kyselina homovanilová (HVA) - produkty metabolismu katecholaminů",
          "Hladina glukózy a kreatininu",
          "Kyselina močová a bilirubin"
        ],
        correct: 1,
        explanation: "Neuroblastomy vycházejí ze sympatické nervové soustavy a produkují katecholaminy (adrenalin, noradrenalin, dopamin). Ty jsou v těle odbourávány na VMA a HVA, které se vylučují močí. Jejich detekce je klíčovým diagnostickým testem."
      },
      {
        question: "Jak se nazývá bílý odlesk zornice (absence červeného reflexu) pozorovaný u dětí s retinoblastomem?",
        type: "type-in",
        correct: ["leukokorie", "leukokoria"],
        explanation: "Leukokorie je medicínský termín označující bílou zornici, způsobenou odrazem světla od bělavého retinálního nádoru."
      },
      {
        question: "Jak se nazývají rozety s centrálním neuropilem (bez lumenu), typické pro neuroblastom a meduloblastom?",
        type: "type-in",
        correct: ["Homer-Wrightovy rozety", "Homer-Wrightovy", "Homer-Wright", "Homer Wrightovy rozety"],
        explanation: "Homer-Wrightovy rozety jsou tvořeny nádorovými buňkami uspořádanými kolem růžové zóny tvořené neuropilem."
      }
    ]
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
      clinical: "Feochromocytom se projevuje **paroxysmální (záchvatovitou) arteriální hypertenzí** (extrémní vzestup tlaku při vyplavení adrenalinu), provázenou bušením srdce (tachykardií), bolestmi hlavy a opocením. V moči se detekují zvýšené hladiny metanefrinů a kyseliny vanilmandlové (VMA).",
      additionalInfo: "-  Pro odlišení benignity a malignity nám slouží Weissův skórovací systém (hodnocení\n\nmitóz, atypií, invazi do cév, ohraničení, …)\n\n-  Nadledviny jsou párové endokrinní žlázy nacházející se nad ledvinami → Dle\n\nmorfologie můžeme rozeznat dřeň a kůru\n\nNádory kůry nadledvin\n\n-  Adrenokortikotropní adenom = benigní, ohraničený, žlutavý nádor (díky velkému\n\nmnožství lipidů v buňkách – tzv. spongiocyty) → je hormonálně aktivní – produkuje\nzjm. kortizol, aldosteron a někdy i androgeny → na základě nadměrné sekrece těchto\nhormonů se podílí vzniku Cushingova syndromu (kvůli nadbytku kortizolu) nebo\nConnova syndromu (nadbytek aldosteronu → vysoký TK)\n\n-  Adrenokortikotropní karcinom = maligní, neohraničený, roste invazivně do okolních\n\norgánů (játra, ledviny), vyskytuje se ve 2 vrcholech (do 2 let života a kolem 70. let) →\nčasto dosahují až 5 cm a podléhají regresivním změnám (hemoragie, nekrózy)\n\n-  Myelolipom = benigní nádor, který je složen ze zralých tukových buněk a z ložisek\nkrvetvorby (ery, leu, megakaryocyty) → neprodukuje žádné hormony a je klinicky\nněmý (často se jedná o náhodný nález)\n\nNádory dřeně nadledvin\n\n-\nJsou součástí sympatického nervového systému a nádory produkují katecholaminy\n-  Feochromocytom = nejčastěji se vyskytuje benigní (až 90%) → jedná se o šedorůžový\n\nuzel, který po vložení do fixačního roztoku hnědne (dichroman draselný – kvůli\noxidaci katecholaminů v chromafinních buňkách) → pro tento nádor je\ncharakteristická nekontrolovatelná nadprodukce katecholaminů (zjm. noradrenalinu) a\nvznik záchvatovité (paroxysmální) hypertenze (náhle vzniklá hypertenze, kdy\ndiastolický TK může dosahovat až 140 mmHg, je život ohrožující a projevuje se\npalpitacemi, pocetím a bolestí hlavy) → mikroskopicky jsou nádorové buňky\nalveolárně uspořádány, čímž vytváří taková atypická hnízda, která se nazývají jako\nZellballen; Maligní feochromocytom je větší a má známky lokálního invazivního růstu\n\n-  Neuroblastom = maligní, nízce diferencovaný neuroektodermální nádor, který se njč.\nvyskytuje v dřeni nadledvin, zároveň se jedná o jeden z nejčastějších nádorů u dětí\n(cca 40% vzniká do 1 roku života) → charakteristické je pro něj přítomnost tzv.\nHomer-Wrightových rozet → tento nádor může během života dozrávat a měnit se\nv méně agresivní ganglioneuroblastom nebo dokonce i v benigní ganglioneurom"
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
      clinical: "Papilární a folikulární karcinomy dobře akumulují jód, proto se po chirurgickém odstranění štítné žlázy (tyreodektomii) doléčují podáním **radioaktivního jódu 131I** (radiojodová ablace). Medulární karcinom jód neakumuluje, v krvi se sleduje zvýšená hladina kalcitoninu.",
      additionalInfo: "-  TNM klasifikace\n\nFolikulární adenom\n\n-  Benigní, epiteliální nádor, solitární uzel, který je ohraničený vazivovým pouzdrem\n-\n\nInkocytární (Hürthleho) adenom = varianta tvořena buňkami s nápadně eozinofilní a\ngranulovanou cytoplazmou (hodně mitochondrií)\n\nKarcinomy ŠŽ\n\n-  Z folikulárních buněk = papilární, folikulární, anaplastický\n-  Z parafolikuláních buněk (C-buňky) = medulární\n-  Papilární = nejčastější, mikroskopicky se projevuje buňkami s maticovými jádry, která\njsou v centru projasněná (chromatin se natlačil na jadernou membránu), také bývají\npatrná psammomatózní tělíska, což jsou vrstvené kacilikace, které v důsledku\nodumřených papil nádoru → metastázuje lymfogenně do krčních uzlin\n\n-  Folikulární = pravděpodobně vzniká z folikulárního adenomu, makroskopicky se\n\njedná o šedavý uzel, který prorůstá celou šířkou svého pouzdra (tzv. transkapsulární\ninvaze), také jsou patrné angioinvaze, podle těchto 2 zmíněných věcí rozlišujeme 3\nkategorie nádoru (minimálně invazivní bez angioinvaze, minimálně invazivní\ns angioinvazí, široce invazivní folikulární karcinom) → produkuje hormony ŠŽ, což se\nmůže podílet a rozvoji tyreotoxikózy a metastázuje hematogenně (plíce, kosti, mozek)\n-  Anaplastický = často vzniká „zvrhnutím“ papilárního nebo folikulárního karcinomu →\nvelmi rychle lokálně roste, což způsobí útlak okolních tkání a následnou dušnost a\ndysfagii, zároveň velmi rychle vzdáleně metastázuje a úmrtnost nastává během\nněkolika měsíců (medián 5 měsíců) → mikroskopicky se rozlišuje několik forem\n(malobuněčná, velkobuněčná, sarkomatoidní)\n\n-  Medulární = šedavý nádor, který produkuje kalcitonin → jeho nadbytek se často\n\nvysráží do amyloidu, který je často patrný ve stromatu nádoru kalcitoninu\n\nOstatní nádory\n\n-  Primární lymfom ŠŽ = vždy non-Hodgkinovy (njč. MALT-lymfom), vzniká v terénu\n\ndlouhodobé autoimunitní tyreoitidy (njč. Hashimotovy)\n\n-  Metastázy = světlobuněčný karcinom ledviny, prsa, plíce, melanom, lymfomy"
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
      clinical: "U rodin s prokázanou mutací genu RET (MEN 2) se provádí **preventivní tyroidektomie** (odstranění štítné žlázy) již v dětském věku, protože rozvoj agresivního medulárního karcinomu je nevyhnutelný.",
      additionalInfo: "-  Adenomy hypofýzy (specka), nádory nadledvin, nádory ŠŽ\n\nNádory příštítných tělísek\n\n-  Regulují hladinu Ca2+ prostřednictvím PTH → jejich nádory vyvolávají\n\nhyperparatyreózu, která může vést k metastatickým kalcifikacím\n\n-  Adenom příštítného tělíska = postihuje 1 tělísko a většinou se jedná o solidné\n\nledvinovitý/ovoidní béžový útvar, který je tence opouzdřený → mikroskopicky buňky\nadenomu velmi dobře napodobují fyziologické složení tělíska (buňky hlavní a\noxyfilní)\n\n-  Karcinom příštítného tělíska = je velmi vzácný a je obtížné ho odlišit od benigního\nadenomu → spolehlivým kritériem je známka invaze do okolí (cévy, ŠŽ, svaly),\nvětšinou vzniká de novo, nikoli zvratem adenomu\n\nSyndromy mnohočetné endokrinní neoplázie (MEN)\n\n-  Skupina AD onemocnění, jejichž společným znakem je vzniku nádorů nebo\n\nhyperplázií v několika endokrinních orgánech\n\n-  MEN 1 (Wernerův syndrom) = mutace MEN1 na 11q, který kóduje menin (=tumor-\n\nsuspensorový gen) → odbrzdění faktorů způsobující proliferaci\n\n-  MEN 2 (Sippleův syndrom) = mutace proonkogenu RET → nález difúzních a\n\nnodulárních hyperplázií adrenální dřeně → noduly jsou považovány za\nfeochromocytomy → MEN 2A (doprovázen hyperparatyreózou na podkladě\nhyperplázie nebo adenomu příštítných tělísek), MEN 2B (bez hyperparatyreózy)"
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
    section: "Dermatopatologie",
    category: "Onkologie",
    keywords: ["bazaliom", "spinaliom", "keratóza", "keratin", "palisádování", "ulcus rodens", "seboroická"],
    content: {
      definition: "Nádory kůže jsou vůbec nejčastějšími lidskými nádory. Dělí se na benigní (např. seboroická keratóza, dermatofibrom), prekancerózy (aktinická keratóza, Bowenova choroba) and maligní (bazocelulární a dlaždicobuněčný karcinom).",
      etiology: "Sluneční záření – zejména ultrafialové záření (UV, především UVB, které způsobuje tyminové dimery v DNA). Světlý kožní fototyp (I a II - neschopnost opálení), chronická expozice arsenu, imunosuprese, chronické nehojící se rány (Marjolinův vřed u jizev po popáleninách), genetický albinismus.",
      pathogenesis: "1. **Benigní léze**: *Seboroická keratóza* (stařecká bradavice) – velmi častá benigní léze starších lidí, není spojená s UV. Mutace FGFR3.\n2. **Prekancerózy**:\n- *Aktinická (solární) keratóza*: prekurzor spinaliomu na osluněných místech. Vyvolaná UV. Dysplazie postihuje dolní třetinu epidermis.\n- *Bowenova choroba*: představuje dlaždicobuněčný karcinom *in situ* (dysplazie v celé šíři epidermis, ale neproniká přes bazální membránu).\n3. **Bazocelulární karcinom (bazaliom, 70-80 % malignit kůže)**: vychází z pluripotentních buněk bazální vrstvy. Roste infiltrujícím a lokálně destruktivním způsobem. Je **semimaligní** – vysoce destruktivní lokálně, ale **téměř nikdy nemetastázuje** (méně než 0,1 % případů). Mutace v dráze Hedgehog (gen PTCH1).\n4. **Dlaždicobuněčný karcinom (spinaliom, 20 %)**: vychází z keratinocytů stratum spinosum. Roste invazivně a **může metastázovat** do regionálních lymfatických uzlin. Předchází mu aktinická keratóza.",
      macroscopy: "Seboroická keratóza: ostře ohraničený, žlutohnědý až černý, vyvýšený drsný uzlík, který vypadá jako **nalepený na kůži**. Bazaliom: zpočátku lesklý perleťový uzlík s jemnými teleangiektáziemi (rozšířenými cévkami). Později se centrum rozpadá a tvoří vřed s vyvýšeným lesklým perleťovým lemem (**ulcus rodens**), nejčastěji na obličeji. Spinaliom: tuhé, vyvýšené, červené ložisko pokryté rohovými šupinami nebo ulcerující uzel na místech vystavených slunci.",
      microscopy: "- *Seboroická keratóza*: hyperplazie bazaloidních buněk, výrazná hyperkeratóza a tvorba pseudocyst vyplněných rohovinou (**rohovinové cysty** / horn cysts).\n- *Bazaliom*: čepy a hnízda tmavých bazaloidních buněk rostoucích z epidermis do dermis. Na okrajích hnízd jsou buňky seřazeny rovnoběžně vedle sebe jako plot (**periferní palisádování**). Při zpracování vzniká retrakční artefakt (odchlípení nádorových buněk od stroma).\n- *Spinocelulární karcinom*: atypické dlaždicové buňky infiltrující dermis. Nacházíme mezibuněčné můstky (desmosomy) a ložiska výrazného rohovění – růžové **keratinové perly** (keratin pearls).",
      clinical: "Bazaliom roste pomalu, léčbou je kompletní chirurgická excize. Pokud se neléčí, může způsobit rozsáhlou destrukci obličeje (poničení nosu, očnice - ulcus rodens). Spinaliom vyžaduje důslednější excizi a sledování regionálních uzlin. Prognóza je u obou při včasném záchytu vynikající.",
      additionalInfo: "-  Kůže je největším orgánem lidského těla a vzhledem ke své ploše a neustálémi\n\nvystavení okolním vlivům (zjm. UV-záření) je také velmi častým místem výskytu\nnádorových onemocnění\n\n-  Můžeme je rozdělit dle biologického chování na benigní a maligní\n\nBenigní nádory\n\n-  Vyskytují se poměrně často (př. znaménka, bradavice, fibromy), rostou pomalu, nešíří\n\nse do okolí ani nemetastázují\n\n-  Patří zde zjm. seboroická keratóza, která se njč. nachází na obličeji, trupu a\n\nkončetinách, vytváří tmavě pigmentované vyvýšené papuly s drsným povrchem,\nmikroskopicky je epidermis rozšířená a často jsou patrné i početné rohové\npseudocysty s rohověním → dále se můžeme setkat s cornu cutaneum (kožní rohy),\nkteré mohou vznikat také jako součást aktinické keratózy (kožní prekanceróza, kdy\ndochází k nadměrné hyperkeratóze a v extrémním případě mohou právě vznikat\nzmíněné rohy), jedná se o kuželovitý kožní výrůstek → Keratoakantom (rychle\nrostoucí kožní nádorek, který vzhledem připomíná dlaždicobuněčný karcinom)\n\nPrekancerózy kůže\n\n-  Aktinická keratóza = vzniká na místech vystavených slunci a dochází k nadměrné\n\nhyperkeratóze\n\n-  Bowenova choroba = jedná se o CIS s chronickým zánětem v dermis, makroskopicky\n\nse projevuje jako červené plaky\n\nMaligní nádory\n\n-  Nejčastějším maligním nádorem je bazaliom – ten se zprvu projevuje jako plochá léze,\npozději uzlovatí a nakonec vředovatí → vřed se rozšiřuje spolu s rostoucím nádorem\n(hlodající vřed – ulcus rodens) → mikroskopicky je bazofilnější než dlaždicobuněčný\nkarcinom (tzv. méně zralý), roste převážně endofyticky (tvoří invazivní nádorové čepy\na nádorové buňky na periferii těchto čepů mají palisádovité uspořádání – tzv. obraz\n\nnáhrobních kamenů, uprostřed čepů jsou buňky neuspořádané), nemá schopnost\nmetastázovat (asi jen v 0,5%)\n\n-  Dlaždicobuněčný karcinom = vzniká v místech, kde se fyziologicky vyskytuje\ndlaždicový epitel nebo v místech, kde došlo k dlaždicobuněčné metaplázii (př.\nbronchy kuřáků) → dobře diferencované formy mají patrné 2 složky – exofytickou (ta\nzahrnuje stratifikaci epitelových buněk → bazofilnější bazální vrstva a svrchní vrstvy\njsou eozinofilnější, buňky se směrem k povrchu oplošťují a rohovatí), endofytická\n(vzniká inverzí papil, tvoří se nádorové čepy, v kterých může docházet ke keratinizaci\na tvorbě keratinových perel) → u nízce diferencovaných forem chybí stratifikace a\njsou patrné četnější buněčné atypie a mitózy → u dobře diferencovaných forem je\nvelmi dobře patrný jejich původ (př. Verukózní karcinom – vysoce diferencovaná\nforma dlaždicobuněčného karcinomu s bradavcovitým vzhledem), metastázuje zjm.\nlymfogenně a pak i hematogenně (do plic)\n\nMezenchymální nádory\n\n-  Setkáme se zde njč. s lipomy, fibromy nebo neuronomy\n-  Dermatofibrom = benigní a řadí mezi fibrohistiocytární léze (tvořen proliferací\n\nfibroblastů a histiocytů v dermis)\n\n-  Dermatofibrosarcoma protuberans = border-line nebo maligní nádor (také\n\nfibrohistiocytární), který se vyznačuje jako pomalu rostoucí uzel njč. na trupu a\nkončetinách\n\n-  Hemangiomy (kapilární)\n-  Kaposiho sarkom a angiosarkom\n\nLymfomy – mycosis fungioides/Sérazyho syndrom"
    },
    quiz: [
      {
        question: "Jak se mikroskopicky projevuje bazocelulární karcinom (bazaliom) na okrajích nádorových čepů?",
        options: [
          "Tvorbou keratinových perel a desmosomů",
          "Charakteristickým periferním palisádováním jader (buňky jsou seřazeny paralelně vedle sebe jako plot) a retrakčními artefakty stroma",
          "Přítomností Pautrierových mikroabscesů",
          "Hnízdy melanocytů s pigmentem"
        ],
        correct: 1,
        explanation: "Periferní palisádování buněk na okrajích hnízd a přítomnost štěrbiny mezi nádorem a vazivem (retrakční artefakt) jsou klíčové mikroskopické znaky bazaliomu. Keratinové perly jsou naopak typické pro spinaliom."
      },
      {
        question: "Jak se liší biologické chování bazocelulárního karcinomu (bazaliomu) od dlaždicobuněčného karcinomu (spinaliomu)?",
        options: [
          "Bazaliom metastázuje velmi časně; spinaliom nemetastázuje vůbec",
          "Bazaliom je semimaligní – roste lokálně agresivně a destruktivně (ulcus rodens), ale prakticky nikdy nemetastázuje; spinaliom je plně maligní, roste rychleji a má schopnost metastázovat do regionálních uzlin",
          "Oba nádory jsou benigní",
          "Oba nádory jsou vysoce metastatické a vyžadují systémovou chemoterapii"
        ],
        correct: 1,
        explanation: "Bazaliom je považován za semimaligní nádor. Ničí okolní tkáně (může prožírat chrupavky uší, nosu), ale jeho metastatický potenciál je extrémně nízký. Spinaliom (spinocelulární karcinom) má reálné riziko lymfogenního metastázování."
      },
      {
        question: "Jak se nazývá velmi častá benigní léze kůže starších lidí (stařecká bradavice), která má drsný, žlutohnědý až černý povrch a vypadá jako nalepená na kůži?",
        type: "type-in",
        correct: ["seboroická keratóza", "seboroická keratoza"],
        explanation: "Seboroická keratóza (verruca seborrheica) je benigní epidermální léze bez maligního potenciálu, histologicky charakterizovaná rohovými cystami."
      },
      {
        question: "Jak se nazývá nehojící se destruktivní vřed vznikající uprostřed rostoucího bazaliomu na obličeji?",
        type: "type-in",
        correct: ["ulcus rodens"],
        explanation: "Ulcus rodens je označení pro ulcerovaný bazaliom, který se šíří do hloubky a destruuje okolní tkáně."
      }
    ]
},

  {
    id: "onco-40",
    title: "Melanom",
    section: "Dermatopatologie",
    category: "Onkologie",
    keywords: ["melanom", "melanocyt", "Breslow", "Clark", "BRAF", "ABCDE", "S100", "HMB-45"],
    content: {
      definition: "Maligní melanom je vysoce zhoubný nádor vycházející z pigmentových buněk – melanocytů. Vyskytuje se nejčastěji na kůži, ale může vzniknout i v oku (uveální melanom), na sliznicích (dutina ústní, anus) nebo v mozkových obalech. Patří k nejagresivnějším lidským nádorům.",
      etiology: "Akutní, intenzivní, intermitentní expozice slunci vedoucí k spálení kůže (zejména v dětství a dospívání), používání solárií. Vysoký počet mateřských znamének (atypických névů), světlý fototyp, genetická mutace CDKN2A (rodinný výskyt).",
      pathogenesis: "UV záření poškozuje DNA melanocytů a indukuje mutace. Klíčové genetické změny: aktivující mutace onkogenu **BRAF** (nejčastěji **BRAF V600E** v cca 50 % kožních melanomů, což vede k trvalé aktivaci MAPK dráhy), nebo mutace NRAS a KIT. Růst se dělí na dvě fáze:\n1. **Radiální (horizontální) fáze růstu**: buňky proliferují v epidermis podél bazální membrány. V této fázi nádor nemetastázuje.\n2. **Vertikální fáze růstu**: buňky prorůstají přes bazální membránu dolů do dermis (škáry). Zde získávají přístup k lymfatickým a krevním cévám, což umožňuje metastázování.",
      macroscopy: "Klinické vyšetření podle **pravidla ABCDE**:\n- **A** (Asymmetry): asymetrie tvaru léze.\n- **B** (Border): neostré, nepravidelné, zubaté okraje.\n- **C** (Color): barevná pestrost (odstíny hnědé, černé, červené, modré až bílé ložiska regrese).\n- **D** (Diameter): průměr léze > 6 mm.\n- **E** (Evolution): vývoj v čase (změna barvy, svědění, krvácení, růst).\nČtyři hlavní makroskopické subtypy:\n- *SSM (povrchově se šířící, 70 %)*: ploché pestré ložisko, dlouhá radiální fáze.\n- *Nodulární melanom (NM, 15 %)*: tmavý vyvýšený uzel, **chybí radiální fáze** (od počátku roste vertikálně, velmi agresivní).\n- *Lentigo maligna melanom (LMM)*: na obličeji starých osob, pomalý růst.\n- *Akrolentiginózní melanom (ALM)*: na dlaních, ploskách nohou a pod nehty (častý u tmavé rasy, není spojen s UV).",
      microscopy: "Atypické, pleomorfní, velké melanocyty s velkými hyperchromními jádry a nápadnými eozinofilními jadérky (často vzhledu 'třešně'). V cytoplasmě může (ale nemusí - *amelanotický melanom*) být hnědý pigment melanin. Nádorové buňky vykazují pagetoidní šíření (migrují do horních vrstev epidermis). Imunohistochemie: pozitivita markers **S100, HMB-45, Melan-A, SOX10**.",
      clinical: "Prognóza a staging jsou kriticky závislé na histologickém zhodnocení:\n- **Tloušťka podle Breslowa**: nejdůležitější prognostický faktor. Měří se v milimetrech od stratum granulosum epidermis po nejhlubší nádorovou buňku v dermis (T1: < 0,8 mm; T4: > 4 mm).\n- **Clarkovo hodnocení**: stupeň invaze do anatomických vrstev kůže (Level I: pouze v epidermis; Level V: do podkožního tuku).\nMelanom metastázuje velmi časně a nepředvídatelně: lymfogenně (sentinelová uzlina) i hematogenně (plíce, mozek, játra, kůže, srdce). Léčba: radikální excize s bezpečnostním lemem kůže (1-2 cm) + biopsie sentinelové uzliny. U pokročilých se užívá imunoterapie (anti-PD1: pembrolizumab) and cílená léčba (BRAF inhibitory: vemurafenib).",
      additionalInfo: "-  Vysoce maligní nádor neuroektodermového původu → pokročilý a metastatický\n\nmelanom se řadí mezi nádory s nejhorší prognózou (medián přežití je 8-10 měsíců)\n\n-  Nejčastěji se vyskytuje na kůži, ale může se vyskytovat i na sliznicích (ústa,\nanorektální oblast, jícen), v sítnici nebo dokonce i na mozkových plenách\n-  Většinou vzniká de novo, ale může také vzniknout z dysplastických névů\n-\n\nJsou charakterizovány proliferací atypických melanocytů a rozlišujeme u něj 2 fáze\nrůstu – časná/radiální (horizontální růst v epidermis), pozdní/vertikální (převažuje\ninfiltrace koria a vertikální růst koleruje s agresivitou nádoru)\n\n-  Můžeme rozlišovat 4 typy melanomů:\n\no  Superficiálně šířící se melanom (SSM) = nejčastější, v epidermis jsou patrná\n\nhnízda atypických melanocytů, která se šíří intraepidermálně\no  Lentigo maligna melanom (Hutschinsonova melanotická skvrna) =\n\nmikroskopicky se jedná o CIS, který často vzniká v místě poškození UV\nzářením → vyskytuje se zjm. na obličeji starších lidí a v této formě může\nmelanom přetrvávat i 10-15 let → makroskopicky se projevuje jako černo-\nhnedá pigmentace na kůži\n\no  Nodulární melanom = převažuje zde vertikální fáze růstu a má velmi špatnou\n\nprognózu a vysokou tendenci k metastázování, velmi agresivní\n\no  Akrální lentiginózní melanom = vyskytuje se na akrální částech (dlaně, plosky,\nnehty), subunguální melanom se vyznačuje pigmentovaným pruhem pod\nnehtem, který se může šířit k proximálnímu nebo laterálnímu valu, čemuž\nříkáme Hutchinsonův znak, mikroskopicky se jedná o proliferaci atypických\nmelanocytů v bazální vrstvě epidermis\n\n-  Staging melanomu stojí zjm na klasifikaci dle Breslowa (měření hloubky invazní\nkomponenty melanomu od stratum granulosum v mm; také nám slouží pro určení\n\ntoho, jak velké hranice excize musí být), klasifikace dle Clarka se spíš opírá o\nanatomické hranice kůže a v jaké vrstvě se invazivní komponenta nachází\n\n-  Pro odlišení melanomu od pigmentového névu nám pomáhá ABCDE kritéria = A\n\n(Asymmetry), B (border), C (colour), D (diameter >6 mm, 4 mm se už musí sledovat),\nE (elevation – postupný vývoj léze)\nImunohistopatologie = S100, Melan A, HBM-45, Ki-67 (proliferační marker)\n\n-"
    },
    quiz: [
      {
        question: "Který mikroskopický parametr je podle mezinárodních standardů nejdůležitějším prognostickým faktorem u kožního melanomu a jak se měří?",
        options: [
          "Clarkovo hodnocení invaze do anatomických vrstev kůže",
          "Tloušťka nádoru podle Breslowa (měřená v milimetrech od stratum granulosum po nejhlubší nádorovou buňku)",
          "Celkový objem tumoru v centimetrech",
          "Počet ložisek melaninu v cytoplasmě"
        ],
        correct: 1,
        explanation: "Breslowova tloušťka v mm is nejsilnějším prediktorem přežití a rizika metastáz. Clarkovo schéma (úroveň I-V) se dnes používá jako doplňkový údaj u tenkých melanomů."
      },
      {
        question: "Jak se liší radiální a vertikální fáze růstu u maligního melanomu z hlediska rizika metastáz?",
        options: [
          "V radiální fázi nádor roste do hloubky a metastázuje; ve vertikální fázi se šíří pouze po povrchu",
          "V radiální fázi roste nádor horizontálně v epidermis bez přístupu k cévám (nulové riziko metastáz); ve vertikální fázi buňky prorůstají do dermis, kde pronikají do lymfatických a krevních cév a metastázují",
          "Obě fáze mají stejné riziko metastáz",
          "Melanom nikdy nemá radiální fázi růstu"
        ],
        correct: 1,
        explanation: "Dokud je melanom v radiální fázi (šíření intraepidermálně), je vyléčitelný prostou excizí, protože v epidermis nejsou cévy. Přechod do vertikální fáze (invaze do dermis) představuje vznik rizika metastáz."
      },
      {
        question: "Která specifická genová mutace (způsobující trvalou aktivaci MAPK dráhy) se vyskytuje u přibližně 50 % kožních melanomů a slouží jako cíl pro moderní biologickou léčbu (např. vemurafenibem)?",
        type: "type-in",
        correct: ["BRAF V600E", "BRAF"],
        explanation: "Mutace BRAF V600E je nejčastější mutací u kožního melanomu, vedoucí k nekontrolované buněčné proliferaci."
      },
      {
        question: "Jaké je znění akronymu (zkratky pěti písmen ABCDE) používaného pro klinické hodnocení rizikovosti pigmentových névů?",
        type: "type-in",
        correct: ["Asymmetry, Border, Color, Diameter, Evolution", "asymetrie, ohraničení, barva, průměr, vývoj"],
        explanation: "Pravidlo ABCDE pomáhá odlišit benigní névus od maligního melanomu na základě asymetrie, okrajů, barvy, průměru a vývoje v čase."
      }
    ]
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
      clinical: "Schwannom roste excentricky, lze ho chirurgicky odstranit z nervu bez poškození jeho funkce. Neurofibrom nelze z nervu vyříznout bez porušení nervových vláken, často vyžaduje resekci celého nervového segmentu. Akustický schwannom (vestibulární schwannom) postihuje VIII. hlavový nerv a způsobuje hluchotu (bilaterální výskyt je patognomický pro NF2).",
      additionalInfo: "-  Vzácná, benigní, etio neznámé (některé formy jsou spojené s neurofibromatózy)\n-  Projevy = lokální zduření nervu, mravenčení postižené oblasti, ztráta citu, oslabení\n\nsvalů\n\n-  Léčba = mikroskopická chirurgie\n\nSchwannom (neurinom)\n\n-  Benigní, z Schwannových buněk, dobře ohraničený, opouzdřený, roste excentricky na\n\nokraji periferního nervu\n\n-  Většinou sporadický nebo součásti neurofibromatózy II.typu – u nich typicky vzniká\nbilaterální vestibulární schwannm (neuronom acusticu), který se charakterizován\nporuchou sluchu, rovnováhy → tento typ nádoru se může propagovat do cerebelo-\npontinního úhlu a způsobit útlak HN V., VII., mozečku i mozkového kmene\n-  Spinální schwannom = njč. vzniká na zadních míšních kořenech → způsobuje\n\nkořenové bolesti o příznaky z útlaku míchy\n\n-  Periferní schwannom = na periferních nervech hlavy, krku nebo končetin\n-  S-100 pozitivní\n-  Někdy produkují melanin → melanotický schwannom\n-  Mikroskopicky se střídají tzv. Antoni A s Antoni B oblastmi → Antoni A jsou\n\nhypercelulární, převažují zde vřetenité buňky, které mají nakupená jádra v jedné\nrovině „šikování“ – nazývají se jako Verocayova tělíska → Antoni B oblasti jsou\nhypocelulární mikrocystické oblasti, objevují se vřetenité buňky v edematózním\nmyxoidním stromatu\n\nNeurofibrom\n\n-  Dorbný, benigní, dobře ohraničený nádorem periferního nervu v dermis nebo podkoží\n\n→ později může prominovat na povrch\n\n-  Pokud se vyskytuje samostatně, tak se často jedná o sporadický výskyt u dospělých,\navšak pokud se vyskytuje četně, tak je často spojen s neurofibromatózou I. typu (von\nRecklinghausenova choroba), kde neurofibromy mají i tendenci progredovat do\nmaligního tumoru pochvy periferního nervu (MPNS)\n\n-  Projevuje se skvrami na kůži v barvě bílé kávy (café au lait) a také mohou být patrné\n\npigmentové hamartomy v duhovce (Lischovy noduly)\n-\nImunohistochemicky vykazuje pozitivitu na epitelové membránové Ag (EMA)\n-  Mikroskopicky se jedná o navzájem propletené svazky podlouhlých vřetenovitých\n\nbuněk, stroma je myxoidně změněné\n\n-  2 varianty = kožní a plexiformní (difúzní intrafascikulární růst)\n\nParagangliom a feochomocytom\n\n-  Většinou benigní, často se vyskytují v dřeni nadledvin, kde vychází z chromafinních\n\nbuněk a jsou hormonálně aktivní (produkují katecholaminy) → trvalé nebo\nzáchvatovité zvýšení TK, bolesti hlavy, palpitace, nevolnost, úzkost\n\nNeuroblastom\n\n-  Ve dřeni nadledvin, neuroektodermální nádor, který patří mezi maligní extrakraniální\nsolidní nádory dětského věku → vzniká z nezralých neuroblastů (bazofilní, small blue\n\ncells), místy tvoří Homer-Wrightovy rozety, které bývají vyplnění eozinofilní spletí\nvýběžků nádorových buněk\n\n-  Metastazuje lymfogenně i hematogenně (zjm. játra a kosti)\n-  Má schopnost dozrávat a zmenit se v méně agresviní ganglioneruoblastom nebo\n\nv zcela benigní ganglioneurom\n\nGanglioneuroblastom\n\n-\n\nJedná se o diferencující se variantu neuroblastomu s bifázickým uspořádáním →\nobsahuje úseky neuroblastomu i úseky zralé tkáně ganglioneuromu\n\n-  Nodulární = tkáň neuroblastomu tvoří uzly v jinak homogenním ganlioneuromu\n-  Smíšený\n\nGanglioneurom = vysoce diferencovaný nádor symaptického NS, který je tvořen z terminálně\ndiferencovanými gangliovými buňkami s nervovými výběžky"
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
      clinical: "Příznaky vyplývají ze zvýšeného **intrakraniálního tlaku** (ICP - syndrom nitrolební hypertenze): ranní bolesti hlavy, zvracení bez předchozí nevolnosti, edém papily očního nervu. Dalším projevem jsou epileptické záchvaty a ložiskové neurologické výpadky (parézy, poruchy řeči).",
      additionalInfo: "Embryonální nádory CNS\n\n-  Vysoce maligní nádory z nezralých buněk (WHO grade IV), fatální\n-  Meduloblastom = mezi 2.-8. rokem života, vychází z mozečku a vrůstá do IV. komory\n(→ hydrocefalus), jedná se o hypercelulrání nádor tvořen small blue cells, které mají\ntendenci k řádkování nebo tvorbě rozet Homer-Wrightova typu\n\n-  Atypický teratodidní nádor = v mozečku nebo v hemisférách, dosahuje velkých\nrozměrů, jedná se o vysoce maligní nádor a většina pacientů umírá do 1 roku\n-  Smíšené glioneuronální nádory (long-term epilepsy associated tumors) = nádory\ns nízkým maligním potenciálem, jsou složeny z gliových buněk a nádorových\nneuronů, které jsou zapojeny do korových neuronálních okruhů → vyvolávají epilepsii\n→ nádory jsou povrchově uložené njč. v temporálním laloku, a pacienta nejvíce\nohrožují právě vznikem farmakorezistentní epilepsie\n\nNádory mozkových plen (extraaxiální – mimo mozek, ale pořád v rámci lebky)\n-  Mohou se zde vyskytovat prakticky všechny mezenchymální nádory\n-  Meningiom = vychází z arachnotelu a bývá pevně spojen s dura mater → může\n\nzpůsobit útlak mozkové tkáně, ale neprorůstá to ní → útlak může vést k hydrocefalu\nnebo může dojít k útlaku mozkového kmene, což vede ke smrti → nejčastěji se nádor\nvyskytuje na konvexitě hemisfér nebo může růst podél kostí (meningeoma en plaque)\na vyvolat tak hyperplázii kostní hmoty → je dobře ohraničený a dobře odstranitelný,\nale může recidivovat → dle WHO se jedná o grade I, ale existuje i anaplastický\nmeningiom (g. III) → mikroskopicky je tvořen vřetenitými buňka, které jsou\nuspořádany do svazků a vírových struktur (whorls nebo až onion bulbs), také bývají\npřítomná psamomatózní tělíska (vrstvené kalifikace)\n\nOstatní primární nádory CNS\n\n-  Hematologické malignity – př. difúzní velkobuněčný B-lymfom\n-  Kraniofaryngeom = nádor dětí, ze zbytků Ratkeho výchlipky → může utlačovat\n\nchiasma opticum (zrakové poruchy) i hypotalamus a hypofýzu (endokrinní poruchy)"
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

      clinical: "Glioblastom roste extrémně rychle (příznaky se rozvinou během týdnů). Má fatální prognózu; i přes chirurgickou resekci, radioterapii a chemoterapii (Temozolomid) většina pacientů umírá do 12–15 měsíců. Infiltrativní charakter znemožňuje kompletní chirurgické odstranění (buňky jsou rozptýleny hluboko v makroskopicky zdravém mozku).",
      additionalInfo: "-  Nejčastější primární nádory CNS\n\nDifúzní astrocytom\n\n-  Kolem 40.-70. roku\n-  Vznikají v mozkových hemisférách a vykazují 3 stupně malignity → difúzní\n\nastrocytom (g. II – bez výrazných atypií, nádorové astrocyty jsou hvězdicovité\ns výběžky a mohou mít objemnější eozinofilní cytoplazmu – tzv. gemistocyty),\nanaplastický astrocytom (g. III – vyšší buněčnost, jaderné atypie, vysoká mitotická\n\naktivita), glioblastom (g. IV – charakteristika g.III + intratumurózní nekrózy a\nmikrovaskulární proliferace)\n\n-  Čím vyšší grade astrocytomu, tím vyšší proliferace a infiltrativní růst\n-  Tendence k malignímu progresu v čase („upgrade) = neléčený difúzní astrocytom\nběhem několika let progreduje do anaplastického a ten během několika let do\nglioblastomu (=sekundární glioblastom)\n\n-  Primární glioblastomy vznikají de novo a mají horší prognózu\n-  Tendence infiltrovat přes corpus callosum do druhé hemisféry (=motýlový nádor)\n-  Nutné stanovit mutace pro izocitrát-dehydrogenázu (IDH1 a IDH2) – mutované mají\n\nlepší prognózu\n\nOligodendrogliom\n\n-  V mozkových hemisférách a má 2 stupně malignity → oligodendrogliom (g. II –\n\npřežití 10-15 let s léčbou), anaplastický oligodendrogliom (g. III – 5 let)\nInfiltrativní, buňky s kulatými jádry a perinukleárním halo (fried eggs)\n\n-\n-  Nádorové buňky mají snahu tvořit shluky u povodních nervových buněk (=satelióza)\n-  Mutace IDH1/IDH2+kodelece 1p/19q → jejich současný výskyt značí lepší odezvu na\n\nchemo- a radioterapii\n\nEpendymom\n\n-  Vzniká z ependymální výstelky komor (zjm. IV) u dětí → u dospělých se vyskytuje\n\nzjm. v míše\n\n-  2 stupně malignity → ependymom (g. II), anaplastický ependymom (g III. –\n\nbuněčnější, jaderné atypie a vysoká proliferační aktivita)\n\n-  Solidní masa, která může vyplňovat IV. komoru (=odlitkový nádor) → hydrocefalus\n-  Mikroskopicky je tvořen buňkami s výběžky, které mají tendenci se upínat na stěnu\n\ncév a tvoři perivaskulární rozety (nepravé) → střídání buněčných oblastí\ns pseudorozetami se někdy přirovnává k obrazu leopardí kůže\n\n-  Myxopapilární ependymom = varianta v obalsti conus medullaris a filum terminale\n\nNádory choroideálního plexu\n\n-  Nejčastěji v laterálních komorách, jedná se o papilární struktury → většinou se jedná o\npapilom choroideálního plexu (g. I), ale existuje i karcinom (g. II.), který se často\nvyskytuje u pacientů se syndromem Li-Fraumeni (dědičné, vyšší riziko malignit)"
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
      clinical: "Projevují se rychle progredující nitrolební hypertenzí (bolesti hlavy, zvracení), ložiskovými defekty nebo psychiatickými změnami. Výrazný edém kolem metastáz se klinicky tlumí podáváním **vysokých dávek kortikosteroidů** (Dexamethasonu), které stabilizují hematoencefalickou bariéru.",
      additionalInfo: "-  Cca 50% nádorů mozku a míchy jsou metstázy (ka plic, prsu, GIT a ledvin nebo\n\n-\n\nmelanom)\nJsou dobře ohraničené, kulovité, často na rozhraní mezi bílou hmotou a mozkovou\nkůrou\n\n-  Mikroskopicky odpovídají primárním nádorům a kolem metastáz vzniká edém\n-  Projevují se bolestí hlavy, také se mohou připojit poruchy motoriky, kognitivních\n\nfunkcí a změny osobnosti, mnohočetná ložiska mohou způsobovat demenci a někdy\nmůže být prvním příznakem epileptický záchvat\n\n-  Dg = MRI a CT (na CT často působí jako hypodenzní ložisko s hyperdenzním lemem)"
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
    section: "Nádory pohybového aparátu",
    category: "Onkologie",
    keywords: ["kost", "osteosarkom", "Ewing", "chondrosarkom", "osteoid", "Codman", "t(11;22)"],
    content: {
      definition: "Nádory kostí se dělí na primární (velmi vzácné) a sekundární (metastázy - mnohonásobně častější). Primární zhoubné kostní nádory postihují převážně děti a mladé dospělé.",
      etiology: "U osteosarkomu: mutace tumor supresorových genů **RB1** (častý výskyt u pacientů, kteří přežili retinoblastom) and **TP53** (Li-Fraumeni syndrom). U starších pacientů vzniká na podkladě Pagetovy kostní choroby. U Ewingova sarkomu: specifická reciproké translokace **t(11;22)**.",
      pathogenesis: "1. **Nádory tvořící kost (Osteogenní)**:\n- *Osteoidní osteom*: benigní, malý tumor (< 2 cm) v kůře dlouhých kostí. Způsobuje výrazné noční bolesti vyvolané prostaglandiny, které **typicky mizí po podání salicylátů (aspirinu)**.\n- *Osteoblastom*: benigní, větší než 2 cm, nejčastěji v obratlích, bolest nemizí po aspirinu.\n- *Osteosarkom*: nejčastější primární maligní kostní nádor (mimo hematopoetické). Vrchol výskytu v 10–20 letech. Vzniká v metafýzách dlouhých kostí (50 % v okolí kolene – distální femur, proximální tibie).\n2. **Nádory tvořící chrupavku (Chondrogenní)**:\n- *Osteochondrom (exostóza)*: nejčastější benigní kostní leze, stopkatý výběžek krytý chrupavčitou čepičkou.\n- *Chondrom (Enchondrom)*: benigní, roste uvnitř dřeně krátkých kostí rukou a nohou.\n- *Chondrosarkom*: maligní nádor z chrupavky, postihuje starší dospělé (nad 50 let), lokalizován v pánvi, žebrech, rameni.\n3. **Ewingův sarkom**: vysoce maligní, extrémně agresivní neuroektodermální tumor dětí a dospívajících (do 20 let). Roste v diafýze dlouhých kostí. Charakterizován fúzním genem **EWS-FLI1** vzniklým translokací t(11;22).\n4. **Obrovskobuněčný kostní tumor (Osteoklastom)**: lokálně agresivní, u mladých dospělých (20-40 let) v epifýzách dlouhých kostí. Obsahuje reaktivní mnohojaderné obří buňky (osteoklasty).",
      macroscopy: "Osteosarkom: velká, neohraničená šedobílá masa infiltrující dřeňovou dutinu, destruující kortikalis kosti a nadzdvihující periost (okostici). Toto nadzdvihnutí periostu vyvolává reaktivní novotvorbu kosti, což na RTG snímku vytváří **Codmanův trojúhelník** (úhel periostu a kosti) a obraz **slunečních paprsků** (sunburst - spikuly kosti rostoucí kolmo k povrchu). Ewingův sarkom: šedobílá, měkká ložiska v diafýze, periost reaguje tvorbou koncentrických lamel, což dává na RTG obraz **slupky cibule** (onion-skin).\n- *Osteoklastom*: masivní hnědočervený tumor epifýzy, často cysticky změněný a prokrvácený.",
      microscopy: "- *Osteosarkom*: vysoce pleomorfní vřetenobuněčný mezenchymální tumor s bizarními mitózami. Zcela diagnostickým kritériem je **přímá produkce atypického osteoidu** (nezralé kostní matrix - růžová homogenní hmota tvořící krajkovitou síť) nádorovými buňkami.\n- *Chondrosarkom*: atypické chondrocyty v lakunách s vícečetnými jádry infiltrující kostní trámce.\n- *Ewingův sarkom*: monomorfní drobnokulatobuněčný modrý nádor (small round blue cells), buňky obsahují glykogen (jsou **PAS pozitivní**).\n- *Osteoklastom*: uniformní jednojaderné buňky stroma proložené obřími mnohojadernými osteoklastickými buňkami (obsahují i > 100 jader).",
      clinical: "Projevují se lokální bolestí kosti (často zpočátku připisovanou úrazu při sportu nebo růstu) a zduřením. Typické jsou patologické zlomeniny při minimálním násilí. Osteosarkom a Ewingův sarkom metastázují velmi časně hematogenně do plic. Léčba u maligních forem vyžaduje neoadjuvantní (předoperační) chemoterapii, radikální chirurgický výkon (resekce s náhradou endoprotézou) a adjuvantní chemoterapii. Ewingův sarkom je navíc vysoce radiocitlivý.",
      additionalInfo: "Osteogenní nádory\n\n-  Vznikají nekontrolovatelnou proliferací chondroblastů\n-  Osteom = benigní, roste na povrchu dlouhých kostí, které vznikly membránózní\n\nosifikací (zjm. kosti lebky) nebo se nachází ve dřeňové dutině dlouhých kostí, panve a\nobratlů → mnohočetný výskyt osteomů se nazývá jako Gardnerův tumor →\nmikroskopicky je tvořen zralou kostní tkání (kompaktní/spongiózní)\n\n-  Osteoidní osteom = benigní, děti a dospívající, <2 cm → vyvolává noční bolesti,\n\nmakroskopicky se jedná o ohraničené kulovité ložisko, které je ohraničeno lemem\nsklerotické kosti\n\n-  Osteosarkom = maligní osteoblasty, které produkují nádorovou kostní matrix → low-\n\ngrade jsou povrchové a high-grade centrální (zjm. konvenční osteosarkom)\n\no  Konvenční (centrální) = vysoce agresivní, vyrůstá ve dřeni metafýz dlouhých\nkostí (njč. distální část femuru nebo proximální část tibie) → objemný nádor a\nčasto jsou přítomné i cystické dutiny, nekrózy a ložiska hemoragie → nádorové\nbuňky jsou schopné produkovat chrupavčitou i vazivovou matrix a dle\npřevažující komponenty je dělíme na osteoblastické, chondroblastické a\nfibroblastické → rostou velmi agresivně, infiltruje se mezi trámce zdravé kosti,\nkterou postupně ničí → následně prorůstá do okolních měkkých tkání\n\no  Povrchové = méně agresivní, rostou pomaleji, lokálně deformují povrch kosti\n→ parostální osteosarkom roste zjm. na zadní ploše distálního femuru a\nperiostální osteosarkom roste na povrchu diafýzy femuru nebo tibie\n\nChondrogenní nádory\n\n-  Nádorové buňky produkují chrupavčitou matrix\n-  Enchondrom = benigní, tvořen ze zralé chrupavčité tkáně, postihuje zjm. krátké kosti\n\nHK a DK a projeví se zduřením postižené kůstky\n\n-  Enchondromatóza (Ollierova choroba) = jedná se o mnohočetný výskyt enchondromů\nv různých kostech, nemá nádorový původ (jedná se o vývojovou vadu enchondrální\nosifikace) → Maffucciho syndrom (enchondromatóza + vícečetné hemangiomy kůže)\n-  Osteochondrom = roste v metafýzách dlouhých kostní (zjm. kolem kolenního kloubu)\n→ vzniká z proliferujícího chondrocytu růstové ploténky, u které došlo k inaktivaci\ngenů, které jsou zapojeny do syntézy heparansulfátu (=modulátor enchondriální\nosifikace) → v místech růstové plotenky vytváří výrůstky (buď jsou široce přisedlé\nnebo vyrůstají na osifikované stopce)\n\n-  Chondrosarkom = primární maligní tumor kostí\n\no  Konvenční = vzniká většinou de novo (nebo na podkladě\n\nenchonromu/enchondromatózy) v kostech trupu, dlouhých kostech nebo\nlopatce → zvýšené riziko mají pacientky s estrogen-pozitivním ka prsu\n\no  Dediferencovaný = vysoce maligní varianta s bifázickou strukturou (low-grade\n\noblasti s high-grade oblastmi), masivně metastazují do plic a je chemo- i\nradiorezistentní\n\n-  Obrovskobuněčný nádor kosti = benigní, lokálně agresivní tumor, jedná se o směr\njednojaderných i velkých mnohojaderných nádorových buněk typu osteoklastů →\nvyrůstá v epifýzách dlouhých kostí (njč. u kolenního kloubu), v distálním konci radia a\nproximální epifýze humeru → projevuje se bolestí a zduřením → omezení pohybu\nv sousedním kloubu, patologické zlomeniny\n\n-  Ewingův tumor = vysoce maligní, mezenchymální, tvořen ze small blue cells → může\n\nbýt kdekoliv (njč. diafýzy dlouhých kostí a pánve) → vzniká z nediferencované\nmezenchymální buňky, která má potenciál vyzrávání neuroektodermálním směrem\n(projeví se to tvorbou pravých i nepravých rozet) → nádorová infiltrace je kašovitá,\nmakroskopicky napodobuje hnis → výrazná bolest postižené kosti"
    },
    quiz: [
      {
        question: "Co je absolutním a zcela diagnostickým histologickým kritériem pro potvrzení diagnózy osteosarkomu?",
        options: [
          "Přítomnost chrupavky v nádoru",
          "Přímá produkce atypického osteoidu (nezralé kostní matrix) maligními nádorovými buňkami",
          "Přítomnost mnohojaderných osteoklastů",
          "Pozitivita na keratinové markery"
        ],
        correct: 1,
        explanation: "Pro diagnózu osteosarkomu je klíčové prokázat, že anaplastické nádorové buňky samy přímo tvoří osteoid (kostní matrix). Pokud tumor kost netvoří (i když v ní roste a ničí ji), nejedná se o osteosarkom."
      },
      {
        question: "Který benigní nádor kosti způsobuje intenzivní noční bolesti, které typicky kompletně mizí po podání salicylátů (např. aspirinu)?",
        options: [
          "Osteoblastom",
          "Osteoidní osteom (osteoid osteoma)",
          "Osteochondrom",
          "Enchondrom"
        ],
        correct: 1,
        explanation: "Osteoidní osteom produkuje vysoké množství prostaglandinů PGE2, což stimuluje nervová zakončení v periostu a způsobuje silnou bolest. Salicyláty (inhibitory COX) tuto produkci zablokují a bolest okamžitě ustoupí."
      },
      {
        question: "Jaké typické radiologické (RTG) nálezy periostální reakce doprovázejí osteosarkom a Ewingův sarkom?",
        options: [
          "Oba nádory nevykazují na RTG žádné změny",
          "Osteosarkom vykazuje Codmanův trojúhelník a obraz slunečních paprsků (sunburst); Ewingův sarkom vykazuje periostální vrstvení vzhledu slupky cibule (onion-skin)",
          "Osteosarkom vykazuje vzhled mýdlových bublin; Ewingův sarkom vyseknuté otvory",
          "Oba se projevují jako sklerotická ložiska"
        ],
        correct: 1,
        explanation: "Rychlý růst těchto maligních nádorů nadzdvihuje periost. U osteosarkomu periost tvoří kosti podél cév (sluneční paprsky) a na okrajích (Codmanův trojúhelník). U Ewingova sarkomu periost tvoří soustředné vrstvy (slupka cibule)."
      },
      {
        question: "Která specifická chromozomální translokace (a z ní vzniklý fúzní gen EWS-FLI1) definuje Ewingův sarkom?",
        type: "type-in",
        correct: ["t(11;22)", "t(11,22)", "translokace t(11;22)"],
        explanation: "Translokace t(11;22)(q24;q12) je přítomna u více než 90 % Ewingových sarkomů a fúzuje gen EWS na 22. chromozomu s genem FLI1 na 11. chromozomu."
      },
      {
        question: "Jak se nazývá lokálně agresivní kostní tumor typický pro epifýzy dlouhých kostí, který obsahuje obří buňky s desítkami jader a na RTG snímku má vzhled 'mýdlových bublin'?",
        type: "type-in",
        correct: ["obrovskobuněčný kostní tumor", "osteoklastom", "obrovskobuněčný nádor kostí", "obrovskobuněčný tumor"],
        explanation: "Obrovskobuněčný kostní tumor (osteoklastom) postihuje epifýzy dlouhých kostí a je tvořen jednojaderným stromatem proloženým reaktivními osteoklastickými obřími buňkami."
      }
    ]
}];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_ONCO_2 = DATA_ONCO_2;
}
