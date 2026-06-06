// data_special_2.js - Speciální patologie (témata 26 - 51)
const DATA_SPECIAL_2 = [
  {
    id: "spec-26",
    title: "Infekční střevní záněty",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["enteritis", "infekční", "salmonela", "shigella", "cholera", "tyfus", "pseudomembranózní"],
    content: {
      definition: "Infekční střevní záněty (enteritidy, kolitidy, enterokolitidy) jsou zánětlivá onemocnění tenkého a/nebo tlustého střeva vyvolaná patogenními mikroorganismy.",
      etiology: "Bakterie: Salmonella enteritidis, Shigella dysenteriae, Campylobacter jejuni, Vibrio cholerae, Salmonella typhi (břišní tyfus). Viry: rotaviry (u dětí), noroviry. Paraziti: Entamoeba histolytica.",
      pathogenesis: "Mechanismy poškození: 1. Produkce enterotoxinů: bakterie se nemusejí šířit hluboko do tkáně, ale toxin stimuluje sekreci iontů a vody (např. cholera toxin aktivuje adenylátcyklázu -> masivní vodnatý průjem). 2. Invazivní typ: bakterie pronikají do enterocytů, ničí je a vyvolávají zánět s tvorbou erozí a ulcerací (Salmonela, Shigella). 3. Břišní tyfus: bakterie pronikají přes Peyerovy plaky tenkého střeva do lymfy a krve (systémové onemocnění).",
      macroscopy: "Cholera: sliznice je světlá, bez erozí (masivní sekrece bez destrukce tissue - stolice vzhledu rýžového odvaru). Shigellóza (úplavice): sliznice tlustého střeva je zarudlá, zduřelá, pokrytá šedavými pablánami (pseudomembránami), pod nimi jsou vředy. Břišní tyfus: zduření Peyerových plaků (vzhled mozkové kůry), v průběhu 3. týdne vznikají vředy podél dlouhé osy střeva (hrozí perforace).",
      microscopy: "Invazivní enteritidy: překrvení sliznice, edém, infiltrace lamina propria neutrofily (u akutních fází) a lymfocyty. Tyfus: tyfový granulom (tyfomy) - nahromadění velkých histiocytů (tyfových buněk, které fagocytují erytrocyty a bakterie) bez přítomnosti neutrofilů.",
      clinical: "Projevuje se průjmy (vodnatými u toxických forem, s příměsí krve a hlenu - dysenterie - u invazivních forem), bolestmi břicha, horečkou a dehydratací. Břišní tyfus vyvolává vysoké horečky, splenomegalii a roseolu na břiše."
    },
    quiz: [
      {
        question: "Jak se mění sliznice tenkého střeva u břišního tyfu (Salmonella typhi)?",
        options: [
          "Nedochází k žádným změnám, bakterie žije pouze v žaludku",
          "Dochází k výraznému zduření Peyerových plaků, které následně nekrotizují a mění se v hluboké vředy orientované podél dlouhé osy střeva",
          "Sliznice je kompletně pokrytá kvasinkovými povlaky",
          "Vznikají zde stovky drobných polypů"
        ],
        correct: 1,
        explanation: "Salmonella typhi má afinitu k lymfatické tkáni tenkého střeva (Peyerovým plakům). Ty v první fázi zduří (hyperplazie), ve druhé nekrotizují a ve třetí se odloučí za vzniku tyfových vředů. Protože Peyerovy plaky leží podél dlouhé osy střeva, jsou i vředy orientovány podélně."
      },
      {
        question: "Co je hlavním patogenetickým mechanismem cholery (Vibrio cholerae)?",
        options: [
          "Přímá destrukce sliznice a vznik hlubokých vředů",
          "Produkce choleratoxinu, který se váže na buňky sliznice, trvale aktivuje adenylátcyklázu a vyvolá masivní sekreci chloridů, sodíku a vody do lumen střeva bez poškození struktury sliznice",
          "Tvorba pseudomembrán v tlustém střevě",
          "Invaze bakterií do mozku a CNS"
        ],
        correct: 1,
        explanation: "Vibrio cholerae neničí střevní sliznici (klky jsou neporušené). Choleratoxin však vyvolá masivní sekreci iontů do střeva. Voda následuje ionty osmózou, což vede k extrémním průjmům (až 20 litrů denně) a rychlé smrti z dehydratace."
      }
    ]
  },
  {
    id: "spec-27",
    title: "Idiopathic střevní záněty (IBD)",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["Crohn", "kolitida", "ulcerózní", "transmurální", "kryptový", "pannus", "píštěl"],
    content: {
      definition: "Idiopatické střevní záněty (IBD) zahrnují dvě chronická, imunitně zprostředkovaná onemocnění trávicího traktu: Crohnovu chorobu (MC) a ulcerózní kolitidu (UC).",
      etiology: "Neznámá přesná příčina. Předpokládá se kombinace genetické predispozice (mutace genu NOD2 u MC), dysregulace imunitního systému a abnormální reakce na střevní mikroflóru.",
      pathogenesis: "1. Crohnova choroba: transmurální (postihuje celou šířku stěny) granulomatózní zánět, který může postihnout jakoukoli část GIT od úst po konečník (nejčastěji terminální ileum). Typický je segmentální výskyt (zdravé úseky střídají nemocné). 2. Ulcerózní kolitida: povrchový zánět (omezen na sliznici a submukózu) postihující výhradně tlusté střevo, začíná vždy v rektu a šíří se kontinuálně proximálně.",
      macroscopy: "Crohnova ch.: sliznice vzhledu dlažebních kostek (cobblestone appearance) v důsledku hlubokých štěrbinovitých vředů (fisur) střídaných s oteklou sliznicí, stěna střeva je masivně ztluštělá, zúžené lumen, přítomnost píštělí (fistulae) a striktur. Ulcerózní kolitida: sliznice je difuzně zarudlá, zrnitá, křehká, s četnými povrchovými vředy splývajícími dohromady, přítomnost pseudopolypů (ostrůvky zachované sliznice vyčnívající nad vředy), stěna střeva není zbytnělá.",
      microscopy: "Crohnova ch.: transmurální lymfocytární infiltrace, přítomnost nekaseifikujících granulomů (ve 40–60 % případů) v celé šířce stěny, hluboké fisury pronikající do svaloviny. Ulcerózní kolitida: zánět omezen na sliznici. Kryptitida (neutrofily v epitelu krypt) a kryptové abscesy (neutrofily v lumen krypt), ulcerace sliznice, chybění granulomů.",
      clinical: "Crohnova ch. se projevuje bolestmi břicha (často v pravém podbřišku napodobující apendicitidu), průjmy, píštělemi kolem konečníku a hubnutím. Ulcerózní kolitida se projevuje krvavými průjmy a tenesmy (bolestivé nucení na stolici). U UC hrozí toxické megakolon a u obou stoupá riziko kolorektálního karcinomu."
    },
    quiz: [
      {
        question: "Který z následujících znaků je typický pro Crohnovu chorobu na rozdíl od ulcerózní kolitidy?",
        options: [
          "Postižení je omezeno výhradně na sliznici a submukózu tlustého střeva",
          "Transmurální zánět postihující celou šířku stěny střeva, segmentální výskyt v jakékoli části GIT a přítomnost nekaseifikujících granulomů",
          "Vždy začíná v rektu a šíří se kontinuálně",
          "Tvorba kryptových abscesů bez postižení svalové vrstvy"
        ],
        correct: 1,
        explanation: "Crohnova choroba postihuje celou stěnu střeva (transmurální charakter, proto vznikají píštěle a perforace) a může postihnout kteroukoli část trávicí trubice (skákavé léze). Ulcerózní kolitida je povrchový zánět omezený na sliznici/submukózu a postihuje pouze tlusté střevo."
      },
      {
        question: "Co jsou to pseudopolypy u ulcerózní kolitidy?",
        options: [
          "Nádorové adenomy v tlustém střevě",
          "Ostrůvky relativně zdravé sliznice, které vyčnívají nad okolní rozsáhlé plochy ulcerací a erozí",
          "Paraziti přichycení na sliznici",
          "Vrozené vývojové vady střeva"
        ],
        correct: 1,
        explanation: "Při těžké ulcerózní kolitidě dochází k rozsáhlému odloučení sliznice (ulceracím). Zbytky sliznice, které zánět nezničil, vyčnívají nad okolní vyhlazená dnová ložiska vředů a makroskopicky připomínají polypy (proto pseudopolypy - nepravé polypy)."
      }
    ]
  },
  {
    id: "spec-28",
    title: "Změny polohy a průsvitu střeva",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["ileus", "volvulus", "invaginace", "strangulace", "stenóza", "obstrukce"],
    content: {
      definition: "Změny polohy střeva (volvulus, invaginace) a průsvitu (stenóza, obstrukce) vedou k narušení pasáže střevního obsahu - střevní neprůchodnosti (ileu).",
      etiology: "Nádory (karcinom tlustého střeva - nejčastější příčina mechanické obstrukce u dospělých), srůsty po operacích, vrozené stenózy, uskřinutí kýly.",
      pathogenesis: "1. Volvulus: otočení kličky střeva kolem své osy na mezenteriu. Dojde k zaškrcení cév (strangulaci) -> hemoragické infarktaci střeva. 2. Invaginace (intususcepce): vsunutí jednoho úseku střeva do úseku následujícího (časté u dětí v ileocékální oblasti). Vsunuté střevo je taženo peristaltikou, dochází ke strangulaci mezenteria. 3. Ileus mechanický (obstrukce zátkou, nádorem) vs. ileus paralytický (neurogenní zástava peristaltiky, např. po operaci nebo při peritonitidě).",
      macroscopy: "Střevo nad překážkou je masivně dilatované, naplněné plynem a tekutinou, stěna je tenká. Střevo pod překážkou je splasklé. U volvulu nebo invaginace je postižený úsek tmavě červenofialový, prosáklý krví, stěna je gangrenózní (hemoragický infarkt střeva).",
      microscopy: "Nekróza střevní sliznice a následně celé stěny (gangréna), masivní extravazát erytrocytů v lamina propria a submukóze, zánětlivá reakce na seróze (peritonitis).",
      clinical: "Projevuje se krutými kolikovitými bolestmi břicha (u mechanického ileu), zvracením (nejprve žaludečního obsahu, později fekaloidního - miserere), zástavou odchodu plynů a stolice. Hrozí ruptura střeva, peritonitida a fekální šok."
    },
    quiz: [
      {
        question: "Co je to volvulus?",
        options: [
          "Vsunutí jednoho úseku střeva do druhého",
          "Otočení kličky střeva (a jejího mezenteria) kolem své osy, což vede k zaškrcení cév (strangulaci) a ischemii",
          "Zánět slepého střeva",
          "Vrozené rozšíření tlustého střeva"
        ],
        correct: 1,
        explanation: "Volvulus je mechanická změna polohy, kdy se střevní klička otočí kolem úchytu na mezenteriu. Tím se zaškrtí jak lumen střeva, tak vyživující cévy (arterie i žíly). Vzniká strangulační ileus s rychlým rozvojem nekrózy střeva."
      },
      {
        question: "Jak se nazývá stav, kdy se jeden úsek střeva vsune (teleskopicky) do sousedního úseku?",
        options: [
          "Volvulus",
          "Invaginace (intususcepce)",
          "Herniace",
          "Divertikulóza"
        ],
        correct: 1,
        explanation: "Invaginace (intususcepce) je typická pro malé děti (často při změně stravy nebo po virové infekci zvětšující lymfatické uzliny ve střevě). Peristaltika vtáhne jeden úsek střeva do druhého jako teleskopickou anténu, což vede k ucpání a ischemii."
      }
    ]
  },
  {
    id: "spec-29",
    title: "Hernie",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["hernie", "kýla", "branka", "vak", "uskřinutí", "inkarcerace", "strangulace"],
    content: {
      definition: "Hernie (kýla) je abnormální protruze (vychlípení) parietálního peritonea a orgánů dutiny břišní oslabeným místem (kýlní brankou) ve stěně břišní.",
      etiology: "Zvýšený nitrobřišní tlak (zvedání těžkých břemen, chronický kašel, ascites, obezita), vrozené nebo získané oslabení stěny (jizvy po operacích).",
      pathogenesis: "Kýla se skládá z: 1. Kýlní branky (otvor ve stěně břišní - např. tříselný kanál, pupek), 2. Kýlního vaku (vychlípené peritoneum), 3. Kýlního obsahu (kličky střeva, omentum). Hlavní komplikací je inkarcerace (uskřinutí) - stlačení kýlního obsahu v brance. Nejdříve se stlačí žíly (venostáza, edém), což ještě více zvětší objem vaku a následně se uzavře arteriální přítok (strangulace -> hemoragická nekróza střeva).",
      macroscopy: "Zevně viditelné vyklenutí. U inkarcerované kýly je kýlní obsah (např. klička tenkého střeva) zbytnělý, tmavě červený až černý, tekutina v kýlním vaku je zakalená a krvavá. Stěna střeva je křehká, hnilobně rozpadlá (gangréna).",
      microscopy: "Mikroskopicky nacházíme známky hemoragického infarktu střevní stěny: nekróza sliznice i svaloviny, masivní edém a infiltrace erytrocyty v submukóze, fibrinózní exsudát na serózním povrchu.",
      clinical: "Reponibilní kýlu lze volně zatlačit zpět. Inkarcerovaná (uskřinutá) kýla je nebolestivější náhlá příhoda břišní, projevuje se krutou bolestí, kýla je tvrdá, nelze ji reponovat. Vyžaduje okamžitou operaci, jinak hrozí gangréna střeva a peritonitida."
    },
    quiz: [
      {
        question: "Z jakých tří základních částí se skládá každá kýla (hernie)?",
        options: [
          "Žaludek, jícen, dvanáctník",
          "Kýlní branka, kýlní vak a kýlní obsah",
          "Tepna, žíla, nerv",
          "Kůže, podkoží, fascie"
        ],
        correct: 1,
        explanation: "Kýla je definována přítomností kýlní branky (otvoru v břišní stěně), kýlního vaku (peritoneálního obalu, který se vychlipuje) a kýlního obsahu (orgánů, nejčastěji střeva či omenta, které do vaku vnikly)."
      },
      {
        question: "Proč je inkarcerace (uskřinutí) kýly nebezpečná?",
        options: [
          "Způsobuje rychlý vznik cukrovky",
          "Vede k zaškrcení cév (strangulaci) kýlního obsahu, což způsobí hemoragickou nekrózu a gangrénu střeva s rizikem perforace a peritonitidy",
          "Způsobuje pouze kosmetickou vadu",
          "Kýla se při uskřinutí promění v zhoubný nádor"
        ],
        correct: 1,
        explanation: "Při uskřinutí kýly v brance dojde k mechanickému stlačení cév v mezenteriu. Tím se zablokuje odtok krve, vznikne otok a následně se zastaví přítok tepenné krve (strangulace). Bez krve střevo rychle odumírá (gangréna), může prasknout a infikovat dutinu břišní stolicí."
      }
    ]
  },
  {
    id: "spec-30",
    title: "Patologie peritoneální dutiny",
    section: "Trávicí systém",
    category: "Speciální",
    keywords: ["peritonitida", "peritoneum", "ascites", "srůsty", "perforace", "karcinomóza"],
    content: {
      definition: "Patologie peritoneální dutiny zahrnuje hromadění tekutiny (ascites), záněty pobřišnice (peritonitidy) a nádorové procesy.",
      etiology: "1. Ascites (nezánětlivý transudát): portální hypertenze (cirhóza), srdeční selhání, nefrotický syndrom. 2. Peritonitida: perforace dutého orgánu (prasklý žaludeční vřed, apendicitida, perforace žlučníku), pooperační infekce. 3. Nádory: metastatický rozsev (karcinomóza peritonea z karcinomu vaječníků, žaludku).",
      pathogenesis: "Peritonitida je nejčastěji bakteriální a chemická (únik HCl, žluči či stolice). Zánět se rychle šíří po velké ploše peritonea. Dochází k masivní exsudaci tekutiny a proteinů (hrozí hypovolemický šok) a paralytickému ileu (reflexní zástava peristaltiky).",
      macroscopy: "Peritonitida: peritoneum je zarudlé, matné, pokryté šedavým fibrinem nebo tekutým žlutozeleným hnisem (pyoperitoneum). Střevní kličky jsou slepené fibrinem. Karcinomóza: na peritoneu nacházíme tisíce drobných bělavých nádorových uzlíků.",
      microscopy: "Peritonitida: na povrchu peritonea vrstva fibrinu, záplava neutrofilních granulocytů, pod tím edém a překrvení cév mesotelu. Karcinomóza: infiltrace atypickými žlázovými buňkami (u adenokarcinomů) obklopenými desmoplastickým stromatem.",
      clinical: "Akutní difuzní peritonitida se projevuje jako náhlá příhoda břišní (NPB): krutá bolest břicha, obranné stažení břišních svalů (defense musculaire - břicho tvrdé jako prkno), chybění střevních zvuků (ticho u paralytického ileu) a rozvoj septického šoku."
    },
    quiz: [
      {
        question: "Co je to 'defense musculaire' (svalové stažení) u akutní peritonitidy?",
        options: [
          "Křeč lýtkových svalů u sportovců",
          "Reflexní, vůlí neovlivnitelné stažení (ztuhnutí) svalů břišní stěny vyvolané podrážděním parietálního peritonea zánětem (břicho tvrdé jako prkno)",
          "Ochrnutí břišních svalů",
          "Tvorba jizev ve svalech břicha"
        ],
        correct: 1,
        explanation: "Defense musculaire je klíčovým klinickým znakem podráždění pobřišnice. Zánětlivý proces dráždí senzitivní nervy parietálního peritonea, což vyvolá reflexní spasmus svalů břišní stěny k ochraně vnitřních orgánů."
      },
      {
        question: "Co je to karcinomóza peritonea?",
        options: [
          "Vrozená vývojová vada pobřišnice",
          "Rozsáhlý metastatický rozsev nádorových buněk (např. z karcinomu vaječníku či žaludku) po celém povrchu peritoneální dutiny v podobě četných uzlíků",
          "Zánět peritonea vyvolaný viry",
          "Tvorba žlučových kamenů v břiše"
        ],
        correct: 1,
        explanation: "Karcinomóza peritonea představuje pokročilé stadium intraabdominálních nádorů. Nádorové buňky se uvolní do peritoneální dutiny, usadí se na pobřišnici a tvoří zde tisíce metastatických uzlíků, což bývá doprovázeno tvorbou hemoragického ascitu."
      }
    ]
  },
  {
    id: "spec-31",
    title: "Cirhóza jater",
    section: "Hepatobiliární a pankreas",
    category: "Speciální",
    keywords: ["cirhóza", "jater", "uzly", "portální", "hypertenze", "fibrosis", "alkohol"],
    content: {
      definition: "Cirhóza jater je konečné stadium chronických jaterních onemocnění charakterizované difuzní destrukcí jaterní architektury, tvorbou vazivových sept a regenerativních uzlů hepatocytů.",
      etiology: "Chronický alkoholismus (nejčastější v ČR), chronická virová hepatitida B a C, nealkoholická steatohepatitida (NASH), autoimunitní choroby (primární biliární cholangitida), metabolické vady (hemochromatóza, Wilsonova choroba).",
      pathogenesis: "Chronické poškození hepatocytů aktivuje zánět. Kličové jsou **Hvězdicové (Itoovy) buňky** v Disseově prostoru, které se mění na myofibroblasty a začnou masivně produkovat kolagen (fibrogeneze). Vazivo obklopí regenerující hepatocyty a vytvoří uzly. Dochází k zániku jaterních sinusoid a zaškrcení v. portae (rozvoj portální hypertenze).",
      macroscopy: "Játra jsou zmenšená (v pozdním stadiu), tuhá, rezavě hnědá nebo žlutozelená (podle městnání žluči). Povrch i řez jsou nepravidelně uzlovité (mikronodulární cirhóza - uzly do 3 mm, typická pro alkohol; makronodulární cirhóza - uzly nad 3 mm, u hepatitid).",
      microscopy: "Kompletní ztráta normálního uspořádání lalůčků. Vidíme regenerativní uzly hepatocytů (pseudolalůčky, které postrádají centrální žílu a portální pole) obklopené širokými pruhy kolagenního vaziva (sept), v nichž nacházíme zánětlivý infiltrát a proliferující žlučovody.",
      clinical: "Dva hlavní syndromy: 1. Jaterní insuficience: hypalbuminémie (edémy, ascites), poruchy koagulace (krvácivost), ikterus, jaterní encefalopatie (toxické působení amoniaku na mozek -> kóma). 2. Portální hypertenze: ascites, splenomegalie, jícnové varixy, caput Medusae (rozšířené žíly kolem pupku). Vysoké riziko vzniku hepatocelulárního karcinomu."
    },
    quiz: [
      {
        question: "Které buňky jsou hlavními producenty kolagenu (vaziva) při rozvoji jaterní cirhózy?",
        options: [
          "Kupfferovy buňky (makrofágy)",
          "Hvězdicové (Itoovy) buňky Disseova prostoru, které se aktivují a transdiferencují na myofibroblasty",
          "Hepatocyty",
          "Endotelové buňky jaterních sinusoid"
        ],
        correct: 1,
        explanation: "Itoovy (hvězdicové) buňky normálně slouží k ukládání vitamínu A. Při chronickém zánětu a poškození jater jsou stimulovány cytokiny (zejména TGF-beta), mění se v buňky podobné fibroblastům a produkují kolagen, což je základem jaterní fibrózy a cirhózy."
      },
      {
        question: "Jak se mikroskopicky liší regenerativní uzel (pseudolalůček) u cirhózy od zdravého jaterního lalůčku?",
        options: [
          "Neliší se vůbec",
          "Regenerativní uzel postrádá normální uspořádání trámců a chybí v něm centrální žíla a portální pole (typické struktury zdravého lalůčku)",
          "Uzel obsahuje pouze tukové buňky",
          "Uzel je tvořen výhradně amyloidem"
        ],
        correct: 1,
        explanation: "Zdravý jaterní lalůček má přísnou geometrii (trámce hepatocytů směřují od portálního pole k centrální žíle). U cirhózy je tato struktura zničena. Regenerativní uzly jsou jen chaotické shluky hepatocytů obklopené vazivem bez uspořádaného cévního zásobení (proto pseudolalůčky)."
      }
    ]
  },
  {
    id: "spec-32",
    title: "Virové hepatitidy",
    section: "Hepatobiliární a pankreas",
    category: "Speciální",
    keywords: ["hepatitida", "matné", "sklo", "Councilman", "necroza", "HBV", "HCV"],
    content: {
      definition: "Virové hepatitidy jsou infekční zánětlivá onemocnění jater vyvolaná hepatotropními viry (A, B, C, D, E), které primárně napadají a poškozují hepatocyty.",
      etiology: "Hepatitis A (fekálně-orální, epidemie, nevede k chronicitě), Hepatitis B (krev, sex, vertikálně, hrozí chronicita 5–10 %), Hepatitis C (krev - narkomani, vysoké riziko chronicity > 80 %), Hepatitis D (superinfekce pouze s HBV), Hepatitis E (fekálně-orální, nebezpečná u těhotných).",
      pathogenesis: "Poškození jater není způsobeno přímým cytopatickým efektem virů (kromě některých výjimek), ale imunitní odpovědí hostitele. CD8+ cytotoxické T-lymfocyty napadají infikované hepatocyty prezentující virové antigeny, což vede k jejich apoptóze a nekróze.",
      macroscopy: "Akutní hepatitida: játra jsou mírně zvětšená, červená (zelenavá u cholestázy), napjaté pouzdro. Chronická hepatitida: játra mohou vykazovat různý stupeň fibrózy progredující až do cirhózy.",
      microscopy: "1. Akutní hepatitida: balonová degenerace hepatocytů (zduření vodou), přítomnost Councilmanových tělísek (scvrklé, eozinofilní apoptotické hepatocyty bez jádra), lobulární zánětlivý infiltrát (lymfocyty), Kupfferovy buňky fagocytují detrit. 2. Chronická hepatitida: portální lymfocytární infiltrát šířící se přes rozhraní (interface hepatitis), portální a přemosťující fibróza. Specifický nález u HBV: **hepatocyty vzhledu matného skla** (ground-glass hepatocytes - cytoplasma vyplněná HBsAg).",
      clinical: "Projevuje se únavou, nechutenstvím, nevolností, ikterem (žloutenkou), tmavou močí a svěděním kůže. Chronická hepatitida B a C jsou hlavními příčinami rozvoje jaterní cirhózy a hepatocelulárního karcinomu (HCC)."
    },
    quiz: [
      {
        question: "Co jsou to Councilmanova tělíska (Councilman bodies) v jaterní histologii?",
        options: [
          "Bakterie u břišního tyfu",
          "Apoptotické, scvrklé, eozinofilní (růžové) hepatocyty, které ztratily jádro, typické pro akutní virovou hepatitidu",
          "Krystaly cholesterolu v žlučníku",
          "Jaterní buňky vyplněné tukem"
        ],
        correct: 1,
        explanation: "Councilmanovo tělísko je morfologický projev apoptózy jednotlivých hepatocytů. Buňka se smrští, ztratí jádro a její cytoplasma se stane intenzivně eozinofilní (růžovou). Je to klasický histologický nález u virových a toxických hepatitid."
      },
      {
        question: "Jak se pod mikroskopem projevuje přítomnost hepatocytů 'vzhledu matného skla' (ground-glass hepatocytes) a pro kterou infekci jsou typické?",
        options: [
          "Jsou vyplněny amyloidem; typické pro tuberkulózu",
          "Jejich cytoplasma je homogenní, matně růžová v důsledku masivního nahromadění virového antigenu HBsAg v endoplazmatickém retikulu; typické pro chronickou hepatitidu B (HBV)",
          "Obsahují velké množství vápníku; typické pro stárnutí",
          "Jsou to buňky naplněné alkoholem"
        ],
        correct: 1,
        explanation: "U chronické infekce HBV buňka produkuje nadbytek povrchového antigenu HBsAg, který se hromadí v hladkém endoplazmatickém retikulu. To dodává cytoplasmě specifický matný, jemně zrnitý (mléčný) vzhled, označovaný jako vzhled matného skla."
      }
    ]
  },
  {
    id: "spec-33",
    title: "Patologie žlučníku a extrahepatických žlučových cest",
    section: "Hepatobiliární a pankreas",
    category: "Speciální",
    keywords: ["žlučník", "cholelitiáza", "cholecystitida", "hydrops", "cholesterolóza", "jahodový"],
    content: {
      definition: "Patologie žlučového systému zahrnuje tvorbu kamenů (cholecystolitiáza), záněty žlučníku (cholecystitidy) a žlučových cest (cholangitidy) a městnání žluči.",
      etiology: "Cholecystolitiáza (kamenná choroba): obezita, ženské pohlaví (estrogeny zvyšují sekreci cholesterolu), věk, rychlé hubnutí. Cholecystitida: v 90 % případů komplikace litiázy (zaklínění kamene v ductus cysticus).",
      pathogenesis: "Cholecystolitiáza: přesycení žluči cholesterolem, jeho krystalizace a růst kamene. Cholecystitida akutní: kámen zablokuje odtok žluči. Hromadící se žluč dráždí sliznici chemicky, dochází k ischemii stěny z tlaku a následně k bakteriální superinfekci. Cholangitida: zánět žlučovodů, často ascendentní (bakterie ze střeva při stáze žluči).",
      macroscopy: "Akutní cholecystitida: žlučník je zvětšený, stěna masivně ztluštělá, prosáklá, seróza je pokrytá fibrinem, uvnitř zakalená žluč nebo hnis a kameny. Hydrops žlučníku: chronické ucpání bez infekce, žlučník je obrovský, tenkostěnný, vyplněný čirým hlenovým sekretem. **Cholesterolóza žlučníku (jahodový žlučník)**: na červené sliznici síť žlutých teček.",
      microscopy: "Akutní cholecystitida: edém stěny, ulcerace sliznice, infiltrace neutrofily v celé šířce stěny (hrozí perforace). Cholesterolóza: lamina propria sliznice je vyplněna kupami makrofágů s napěněnou cytoplasmou přeplněnou estery cholesterolu (nemá vztah k zánětu).",
      clinical: "Projevuje se biliární kolikou (krutá bolest v pravém podžebří vyzařující do zad a pod pravou lopatku), nevolností a zvracením. U cholecystitidy je pozitivní Murphyho příznak (bolest při nádechu při stlačení podžebří). Hrozí perforace žlučníku a biliární peritonitida."
    },
    quiz: [
      {
        question: "Co je to cholesterolóza žlučníku (jahodový žlučník)?",
        options: [
          "Maligní nádor žlučníku rostoucí jako jahoda",
          "Slizniční změna, kdy makrofágy v lamina propria akumulují estery cholesterolu, což na červené sliznici vytváří žlutou kresbu připomínající zrníčka jahody",
          "Zvápenatění stěny žlučníku",
          "Ucpání žlučníku cholesterolovým kamenem"
        ],
        correct: 1,
        explanation: "Cholesterolóza je benigní metabolická změna. Mucinózní makrofágy sliznice pohlcují přebytečný cholesterol ze žluči. Hromadí se v klcích sliznice a makroskopicky to vypadá jako žlutá zrníčka na červeném podkladu (jahodový vzhled). Nemá to klinický význam a nesouvisí to s cholecystitidou."
      },
      {
        question: "Co je to hydrops žlučníku?",
        options: [
          "Hnisavý zánět žlučníku s tvorbou píštěle",
          "Stav, kdy po dlouhodobém mechanickém uzávěru ductus cysticus (kamenem) bez přítomnosti infekce žlučník resorbuje žlučové pigmenty a jeho sliznice produkuje čirý hlen, který žlučník masivně roztáhne",
          "Vrozená absence žlučníku",
          "Rozpad stěny žlučníku"
        ],
        correct: 1,
        explanation: "Při ucpání vývodu žlučníku kamenem bez bakteriální infekce se žluč nemůže obnovovat. Žlučová barviva se postupně vstřebají (sliznice je resorbuje) a žlázky žlučníku dál produkují hlenový sekret. Žlučník se naplní čirou tekutinou (bílé žluči) a napne se (hydrops)."
      }
    ]
  },
  {
    id: "spec-34",
    title: "Záněty pankreatu",
    section: "Hepatobiliární a pankreas",
    category: "Speciální",
    keywords: ["pankreatitida", "enzymy", "Balser", "autodigesce", "lipáza", "amyláza", "alkohol"],
    content: {
      definition: "Záněty slinivky břišní se dělí na akutní pankreatitidu (život ohrožující stav charakterizovaný autodigescí/samonatrávením slinivky jejími vlastními aktivovanými enzymy) a chronickou pankreatitidu (progresivní destrukce parenchymu s vazivovou přestavbou).",
      etiology: "Akutní p.: biliární (zaklínění žlučového kamene ve společné ampule - zpětný tok žluči do slinivky), alkoholismus (toxické poškození acinů), traumata, hypertriglyceridémie. Chronická p.: dlouhodobý alkoholismus (nejčastější), cystická fibróza, autoimunitní pankreatitida.",
      pathogenesis: "Akutní p.: předčasná aktivace tryspinogenu na trypsin přímo v acinárních buňkách (normálně k tomu dochází až ve dvanáctníku). Trypsin aktivuje ostatní enzymy: 1. Elastázu (rozrušuje stěny cév -> masivní krvácení), 2. Fosfolipázu A2 (ničí buněčné membrány acinů), 3. Lipázu (štěpí tuky v okolí slinivky). Chronická p.: opakované ataky mírného zánětu aktivují hvězdicové buňky pankreatu k tvorbě vaziva, což vede k atrofii acinů.",
      macroscopy: "Akutní p.: slinivka je zvětšená, prosáklá krví (černočervená ložiska hemoragie), střídaná s ložisky šedé nekrózy. V okolním tuku (omentum, retroperitoneum) nacházíme křídově bílá ložiska nekrózy tuku (Balserovy nekrózy). Chronická p.: slinivka je zmenšená, extrémně tuhá (vazivová), s nepravidelnými kalcifikacemi a dilatovanými vývody vyplněnými bílkovinnými zátkami.",
      microscopy: "Akutní p.: koagulační nekróza acinárních buněk, masivní krvácení (extravazát erytrocytů), nekróza tukové tkáně (stíny adipocytů bez jader vyplněné amorfnou modrorůžovou hmotou - vápenatými mýdly). Chronická p.: difuzní fibróza, atrofie a ztráta acinů, chronický zánětlivý infiltrát, Langerhansovy ostrůvky jsou dlouho zachovány (mizí až v pozdním stadiu).",
      clinical: "Akutní pankreatitida se projevuje náhlou, krutou bolestí v nadbřišku vyzařující do zad (pássovitá bolest), zvracením, rozvojem šoku a multiorgánového selhání (MODS). V krvi je vysoká amyláza a lipáza. Chronická pankreatitida vede k exokrinní insuficienci (malabsorpce, steatorhea) a endokrinní insuficienci (diabetes mellitus)."
    },
    quiz: [
      {
        question: "Jaký patofyziologický děj je spouštěcím mechanismem akutní pankreatitidy?",
        options: [
          "Bakteriální infekce z jícnu",
          "Předčasná vnitrobuňková aktivace trypsinogenu na trypsin přímo v pankreatu, což spustí kaskádu autodigesce (samonatrávení) tkáně vlastními enzymy",
          "Nedostatek inzulínu v Langerhansových ostrůvcích",
          "Ukládání železa v acinech"
        ],
        correct: 1,
        explanation: "Slinivka tvoří enzymy v neaktivní formě (proenzymy). Pokud dojde k jejich předčasné aktivaci (zejména trypsinu) ještě uvnitř slinivky, spustí se destruktivní proces - trypsin aktivuje další enzymy, které začnou trávit vlastní tkáň slinivky a jejích cév."
      },
      {
        question: "Jak vznikají Balserovy nekrózy u akutní pankreatitidy?",
        options: [
          "Ukládáním cholesterolu do slzných žláz",
          "Působením uvolněné pankreatické lipázy na tukovou tkáň; uvolněné mastné kyseliny se spojují s vápníkem za vzniku křídově bílých mýdel",
          "Kaseózní nekrózou slinivky vyvolanou TBC",
          "Zvápenatěním cév v mozku"
        ],
        correct: 1,
        explanation: "Uvolněná lipáza štěpí triglyceridy v tukových buňkách na glycerol a volné mastné kyseliny. Tyto kyseliny okamžitě reagují s ionty vápníku z okolní tekutiny (zmýdelnění). Vznikají nerozpustná vápenatá mýdla, která makroskopicky vidíme jako křídově bílé skvrny (Balserovy nekrózy) v tuku."
      }
    ]
  },
  {
    id: "spec-35",
    title: "Splenomegalie – nádorové a nenádorové příčiny",
    section: "Hepatobiliární a pankreas",
    category: "Speciální",
    keywords: ["splenomegalie", "slezina", "portální", "leukémie", "amyloidóza", "hyperplazie", "městnání"],
    content: {
      definition: "Splenomegalie je patologické zvětšení sleziny (nad fyziologických cca 150 g a délku 12 cm). Extrémní splenomegalie označuje stav, kdy slezina váží více než 1000 g.",
      etiology: "1. Nenádorové: portální hypertenze (jaterní cirhóza - městnavá splenomegalie), infekce (infekční mononukleóza, sepse - splenitis acuta, malárie), střádavé choroby (Gaucherova choroba, amyloidóza), autoimunitní (Feltyho syndrom). 2. Nádorové: myeloproliferativní neoplazie (chronická myeloidní leukémie - CML, primární myelofibróza), lymfomy (lymfom ze slezinné marginální zóny), leukémie.",
      pathogenesis: "Městnání: vysoký tlak ve v. lienalis brání odtoku krve, krev stagnuje v červené pulpě, což vede k hypertrofii a fibróze stroma sleziny. Infekce: zmnožení lymfocytů v bílé pulpě a aktivace makrofágů (hyperplazie). Myeloproliferace: slezina slouží jako místo extramedulární hematopoézy (krvetvorby) nebo je přímo infiltrována nádorovými buňkami.",
      macroscopy: "Městnavá slezina: zvětšená, tuhá, na řezu tmavě červená (kyanozní), pouzdro je ztluštělé. Akutní splenitis (u sepse): slezina je zvětšená, extrémně měkká, blátivá konzistence, na řezu se pulpa stírá a vytéká (tzv. septická slezina). Leukemická slezina: gigantické rozměry (může vyplnit celé břicho), tuhá, na řezu mohou být patrné infarkty (světlé klínovité oblasti z relativní ischemie).",
      microscopy: "Městnání: dilatace sinusů červené pulpy přeplněných erytrocyty, zbytnění retikulárních vláken (fibróza), přítomnost Gandy-Gamnových tělísek (ložiska fibrózy a kalcifikace s hemosiderinem). Leukémie: masivní infiltrace červené nebo bílé pulpy atypickými leukemickými buňkami.",
      clinical: "Zvětšená slezina je náchylná k ruptuře při traumatu břicha (hrozí život ohrožující krvácení). Může vést k hypersplenismu - stavu, kdy zvětšená slezina nadměrně zachycuje a ničí krevní buňky, což vede k cytopenii (anémie, leukopenie, trombocytopenie)."
    },
    quiz: [
      {
        question: "U kterého zhoubného onemocnění krvetvorby nacházíme nejčastěji extrémní splenomegalii (slezina vážící i několik kilogramů)?",
        options: [
          "U akutní lymfoblastické leukémie (ALL)",
          "U chronické myeloidní leukémie (CML) a primární myelofibrózy",
          "U Hodgkinova lymfomu",
          "U mnohočetného myelomu"
        ],
        correct: 1,
        explanation: "Chronická myeloidní leukémie (CML) a primární myelofibróza jsou spojeny s masivní extramedulární hematopoézou a infiltrací sleziny. Slezina zde dosahuje gigantických rozměrů, což pacient pociťuje jako tlak v levém podžebří."
      },
      {
        question: "Co je to hypersplenismus?",
        options: [
          "Nádorové bujení buněk sleziny",
          "Funkční stav spojený se splenomegalií, kdy zvětšená slezina nadměrně filtruje a destruuje krevní elementy, což vede k poklesu červených krvinek, bílých krvinek a destiček v periferní krvi (pancytopenii)",
          "Vrozená přítomnost přídatných slezin",
          "Zánět sleziny u malárie"
        ],
        correct: 1,
        explanation: "Hypersplenismus není konkrétní nemoc, ale syndrom doprovázející splenomegalii. Slezina je příliš aktivní při odbourávání krvinek. Výsledkem je anémie, náchylnost k infekcím (leukopenie) a krvácení (trombocytopenie)."
      }
    ]
  },
  {
    id: "spec-36",
    title: "Nefrolithiáza",
    section: "Nefrologie a urologie",
    category: "Speciální",
    keywords: ["nefrolitiáza", "ledviny", "oxalát", "struvit", "odlitkový", "kolika", "hydronefróza"],
    content: {
      definition: "Nefrolithiáza (urolithiáza) je přítomnost močových konkrétů (kamenů) v pánvičce ledvinné nebo kalichách. Pokud se kámen posune do močových cest, mluvíme o urolitiáze.",
      etiology: "Dehydratace (koncentrovaná moč), metabolické poruchy (hyperkalciurie u hyperparatyreózy, hyperoxalurie, hyperurikémie u dny), změny pH moči, infekce močových cest (bakterie produkující ureázu, např. Proteus).",
      pathogenesis: "Vysrážení solí při nasycení moči. Krystaly rostou na organické matrix (nidus). Kyselá moč (pH < 5.5) podporuje tvorbu kamenů z kyseliny močové (urátové). Zásaditá moč (pH > 7.2) podporuje vznik fosfátových a struvitových kamenů (infekční kameny).",
      macroscopy: "Kameny mohou být drobné (písek) nebo velké. 1. Kalciumoxalátové: tmavé, ježaté, tvrdé. 2. Urátové: žlutohnědé, hladké. 3. Struvitové (triplfosfátové): šedobílé, drolivé, tvoří odlitkové kameny (staghorn calculi) kopírující tvar pánvičky ledvinné.",
      microscopy: "Mikroskopicky ve tkáni ledviny přítomnost kamene vyvolává tlakovou atrofii pánvičky, dlaždicobuněčnou metaplazii přechodného epitelu a chronický intersticiální zánět s fibrózou.",
      clinical: "Zaklínění kamene v močovodu vyvolá renální koliku (krutá záchvatovitá bolest v bedru vyzařující do třísla a genitálu), provázenou hematurií (krev v moči). Obstrukce odtoku moči vede k hydronefróze (rozšíření pánvičky a kalichů s atrofií parenchymu ledviny) a pyelonefritidě (hnisavý zánět ledviny)."
    },
    quiz: [
      {
        question: "Která bakterie je typicky asociována se vznikem struvitových (infekčních) odlitkových kamenů v ledvině?",
        options: [
          "Escherichia coli",
          "Proteus vulgaris (nebo Proteus mirabilis - štěpí močovinu na amoniak, což alkalizuje moč)",
          "Streptococcus pyogenes",
          "Mycobacterium tuberculosis"
        ],
        correct: 1,
        explanation: "Bakterie rodu Proteus produkují ureázu. Tento enzym štěpí močovinu v moči na amoniak, což výrazně zvýší pH moči (alkalizace). V zásadité moči precipituje fosforečnan amonno-hořečnatý (struvit) a tvoří velké odlitkové kameny."
      },
      {
        question: "Co je to hydronefróza ledviny?",
        options: [
          "Nádorové bujení ledvinné pánvičky",
          "Rozšíření ledvinné pánvičky a kalichů městnající močí při překážce v odtoku (např. zaklíněném kameni), doprovázené tlakovou atrofií funkčního parenchymu ledviny",
          "Hnisavý zánět ledviny",
          "Vrozená cystická ledvina"
        ],
        correct: 1,
        explanation: "Při překážce v močových cestách (kámen, nádor) moč nemůže odtékat. Tlak moči se přenáší zpět do ledviny, což roztáhne pánvičku a kalichy. Dlouhodobý tlak utlačí cévy a parenchym, ledvina atrofuje a mění se v tenkostěnný vak bez funkční tkáně."
      }
    ]
  },
  {
    id: "spec-37",
    title: "Glomerulonefritidy",
    section: "Nefrologie a urologie",
    category: "Speciální",
    keywords: ["glomerulonefritida", "nefritický", "nefrotický", "srpky", "komplement", "imunokomplexy", "biopsie"],
    content: {
      definition: "Glomerulonefritidy (GN) jsou skupina zánětlivých onemocnění postihujících primárně glomeruly ledvin. Mohou být primární (omezené na ledviny) nebo sekundární (součást systémových chorob, např. SLE).",
      etiology: "Nejčastěji imunitní mechanismy: ukládání cirkulujících imunokomplexů (např. poststreptokoková GN), tvorba imunokomplexů in situ (membranózní GN) nebo protilátky proti glomerulární bazální membráně (Goodpastureův syndrom).",
      pathogenesis: "Zánětlivé poškození glomerulů se klinicky manifestuje dvěma hlavními syndromy: \n1. Nefritický syndrom: zánět poškodí stěnu kapilár, dochází k úniku erytrocytů (hematurie) a mírnému úniku bílkovin, klesá filtrace (oliguria, retence sodíku a vody -> hypertenze). \n2. Nefrotický syndrom: poškození podocytů (filtračních štěrbin) vede k masivnímu úniku bílkovin (proteinurie > 3.5 g/24h), což způsobí hypalbuminémii, pokles onkotického tlaku (generalizované otoky - anasarka) a hyperlipidémii.",
      macroscopy: "Akutní GN: ledviny jsou zvětšené, bledé, s drobnými petechiemi na povrchu (vzhled 'bleší kůže'). Rychle progredující GN (srpková): ledviny jsou zvětšené, bledé, křehké. Chronická GN: oboustranně zmenšené, svraštělé ledviny s hrubým povrchem.",
      microscopy: "1. Poststreptokoková GN: difuzní endokapilární hypercelularita (glomeruly jsou velké, ucpané proliferujícími endoteliemi, mezangiem a neutrofily). V elektronové mikroskopii nacházíme 'humps' (subepiteliální depozita imunokomplexů). \n2. Rychle progredující GN (RPGN): přítomnost **srpků** (crescents) v Bowmanově pouzdře tvořených proliferujícím parietálním epitelem a makrofágy (srpky stlačují a ničí glomeruly). \n3. Membranózní GN: difuzní ztluštění stěny kapilár bez hypercelularity, tvorba 'spikes' (hrotů) na bazální membráně.",
      clinical: "RPGN (srpková) je závažný stav vedoucí k renálnímu selhání během týdnů až měsíců. Chronická GN vede k postupné sklerotizaci všech glomerulů a k terminálnímu selhání ledvin vyžadujícímu dialýzu či transplantaci."
    },
    quiz: [
      {
        question: "Který mikroskopický nález charakterizuje Rychle progredující glomerulonefritidu (RPGN) vyvolávající rychlé selhání ledvin?",
        options: [
          "Pouhá steatóza tubulů",
          "Tvorba srpků (crescents) v Bowmanově pouzdře, tvořených proliferujícím epitelem a makrofágy, které stlačují kapilární klubíčko",
          "Kompletní amyloidóza glomerulů",
          "Absence jakýchkoliv buněk v glomerulu"
        ],
        correct: 1,
        explanation: "Tvorba srpků je reakcí na těžké poškození kapilární stěny s průnikem fibrinu do Bowmanova prostoru. Fibrin stimuluje proliferaci buněk Bowmanova pouzdra a migraci makrofágů. Tyto srpky stlačí a nevratně zničí glomerulus (srpková GN)."
      },
      {
        question: "Co charakterizuje nefrotický syndrom?",
        options: [
          "Masivní hematurie a vysoký krevní tlak bez proteinurie",
          "Masivní proteinurie (> 3.5 g/24h), hypalbuminémie, generalizované edémy (otoky) a hyperlipidémie",
          "Přítomnost žlučových kamenů v moči",
          "Akutní zánět močového měchýře"
        ],
        correct: 1,
        explanation: "Nefrotický syndrom vzniká poškozením filtrační bariéry (podocytů), což umožní masivní únik albuminu do moči. Ztráta albuminu sníží onkotický tlak krve, což vede k úniku tekutiny do tkání (otoky). Játra se snaží kompenzovat úbytek proteinů zvýšenou syntézou lipoproteinů (hyperlipidémie)."
      }
    ]
  },
  {
    id: "spec-38",
    title: "Diabetická nefropatie",
    section: "Nefrologie a urologie",
    category: "Speciální",
    keywords: ["diabetická", "nefropatie", "Kimmelstiel", "Wilson", "nodulární", "hyalinní", "mikroalbuminurie"],
    content: {
      definition: "Diabetická nefropatie je specifické postižení ledvin u pacientů s diabetes mellitus (1. i 2. typu), které vzniká na podkladě diabetické mikroangiopatie a vede k chronickému selhání ledvin.",
      etiology: "Dlouhodobá nekompenzovaná hyperglykémie u diabetiků.",
      pathogenesis: "Hyperglykémie spouští neenzymatickou glykaci proteinů s tvorbou AGEs (Advanced Glycation End-products) a vyvolává hemodynamické změny (dilatace přívodné a. afferens a konstrikce odvodné a. efferens vlivem angiotensinu II -> glomerulární hyperfiltrace a hypertenze). Dochází k zahuštění a zbytnění glomerulární bazální membrány a expanzi mezangia.",
      macroscopy: "V časných stadiích jsou ledviny zvětšené (hyperfiltrace a hypertrofie). V pozdním stadiu jsou symetricky zmenšené, tuhé, s mírně hrbolatým povrchem (diabetická nefroskleróza).",
      microscopy: "Klíčové histologické změny: 1. Difuzní mezangiální expanze (zmnožení mezangiální matrix). 2. **Nodulární glomerulární skleróza (Kimmelstiel-Wilsonova léze)**: přítomnost kulatých, růžových, acelulárních uzlů (nodulů) na periferii glomerulu. 3. Zbytnění glomerulární bazální membrány (GBM). 4. Hyalinní arterioloskleróza postihující jak afferentní, tak **efferentní** arteriolu (vysoce specifické pro diabetes, u hypertenze postihuje jen afferentní!).",
      clinical: "Nejranějším klinickým markerem je **mikroalbuminurie** (únik albuminu 30–300 mg/24h, lze ovlivnit ACE inhibitory). Později se rozvíjí manifestní proteinurie, nefrotický syndrom a progresivní selhání ledvin. Diabetická nefropatie je nejčastější příčinou zařazení pacientů do dialyzačního programu."
    },
    quiz: [
      {
        question: "Jak se nazývá specifická nodulární léze v glomerulech u pokročilé diabetické nefropatie?",
        options: [
          "Aschoffovo tělísko",
          "Kimmelstiel-Wilsonovy uzly (nodulární glomeruloskleróza)",
          "Councilmanovo tělísko",
          "Gandy-Gamnova tělíska"
        ],
        correct: 1,
        explanation: "Kimmelstiel-Wilsonovy uzly jsou kulaté, eozinofilní (růžové) noduly v mezangiu glomerulu, tvořené zmnoženou matrix a glykovanými proteiny. Jsou patognomické (vysoce specifické) pro diabetickou nefropatii."
      },
      {
        question: "Který nález na cévách ledvin (arteriolách) je specifický pro diabetes a odlišuje ho od běžné arteriální hypertenze?",
        options: [
          "Fibrinoidní nekróza a. renalis",
          "Hyalinní arterioloskleróza postihující jak přívodnou (afferentní), tak i odvodnou (efferentní) arteriolu",
          "Obřízobuněčný zánět cévní stěny",
          "Kalcifikace pouze v. renalis"
        ],
        correct: 1,
        explanation: "Při běžné hypertenzi postihuje hyalinní arterioloskleróza pouze arteriola afferens (přívodnou cévu). U diabetu dochází k metabolickému poškození cév oboustranně - postižena je jak přívodná (afferentní), tak odvodná (efferentní) arteriola, což je důležitý bioptický rozlišovací znak."
      }
    ]
  },
  {
    id: "spec-39",
    title: "Tubulointersticiální nefritidy",
    section: "Nefrologie a urologie",
    category: "Speciální",
    keywords: ["nefritida", "pyelonefritida", "tubulointersticiální", "bakteriální", "poléková", "neutrofily"],
    content: {
      definition: "Tubulointersticiální nefritidy (TIN) jsou různorodá skupina zánětlivých onemocnění, která postihují primárně ledvinné tubuly a intersticium, zatímco glomeruly jsou ušetřeny nebo poškozeny až sekundárně. Dělí se na infekční (pyelonefritidy) a neinfekční (např. polékové).",
      etiology: "1. Akutní pyelonefritida (infekční): ascendentní bakteriální infekce (Escherichia coli u 80 % případů) při močové stáze (těhotenství, hyperplazie prostaty, reflux). 2. Akutní neinfekční TIN: poléková hypersenzitivita (antibiotika - peniciliny, sulfonamidy; NSAID).",
      pathogenesis: "Ascendentní pyelonefritida: bakterie pronikají z močového měchýře přes močovody do ledvinné pánvičky a odtud do ledvinného parenchymu (vezikoureterální reflux je klíčový predisponující faktor). Poléková TIN: léky fungují jako hapteny, vyvolávají imunopatologickou reakci typu IV (buněčnou přecitlivělost) v intersticiu ledvin.",
      macroscopy: "Akutní pyelonefritida: ledvina je zvětšená, na povrchu i řezu nacházíme četná žlutavá ložiska (abscesy) obklopená červeným lemem, sliznice pánvičky je překrvená a pokrytá hnisem. Poléková TIN: ledviny jsou zvětšené, bledé.",
      microscopy: "Akutní pyelonefritida: masivní infiltrace neutrofily v intersticiu a v lumen tubulů (tvorba leukocytárních válců), nekróza tubulárních buněk. Poléková TIN: edém intersticia, lymfocytární a plazmocytární infiltrát s vysokým podílem **eosinofilních granulocytů** (typické pro alergickou polékovou reakci!).",
      clinical: "Akutní pyelonefritida se projevuje vysokou horečkou, třesavkou, bolestí v bedru (tapottement pozitivní) a dysuriickými potížemi (pálení při močení). Poléková TIN se projevuje akutním selháním ledvin s horečkou, kožní vyrážkou a eosinofilií v krvi i moči po nasazení léku."
    },
    quiz: [
      {
        question: "Která buňka je typickým mikroskopickým nálezem v intersticiálním infiltrátu u akutní polékové (alergické) tubulointersticiální nefritidy?",
        options: [
          "Obří Langhansova buňka",
          "Eosinofilní granulocyt",
          "Pěnový makrofág",
          "Neutrofilní granulocyt v tubulech"
        ],
        correct: 1,
        explanation: "Poléková tubulointersticiální nefritida je alergickou reakcí na léky (např. peniciliny, NSAID). Typickým histologickým znakem v interstiticiálním infiltrátu je vysoké zastoupení eosinofilních granulocytů (eosinofilů), které doprovázejí edém a lymfocyty."
      },
      {
        question: "Jaká je nejčastější cesta vstupu infekce do ledviny u akutní pyelonefritidy?",
        options: [
          "Hematogenní cesta (krevním oběhem ze srdce)",
          "Ascendentní cesta (vzestupně z dolních močových cest přes močovody, často při refluxu)",
          "Přímý průnik přes kůži zad",
          "Lymfatická cesta z tlustého střeva"
        ],
        correct: 1,
        explanation: "Akutní pyelonefritida vzniká nejčastěji vzestupem (ascendentně) bakterií (hlavně E. coli z tlustého střeva) z močového měchýře. Ulehčuje to stáza moči nebo vezikoureterální reflux (porucha chlopenního mechanismu ústí močovodu)."
      }
    ]
  },
  {
    id: "spec-40",
    title: "Nejčastější patologie perinatálního období",
    section: "Perinatální patologie",
    category: "Speciální",
    keywords: ["perinatální", "syndrom", "hyalinní", "surfaktant", "nezralost", "asfyxie", "mekonium"],
    content: {
      definition: "Perinatální patologie zahrnuje nemoci a poruchy plodu a novorozence vznikající v období kolem porodu (od 22. týdne těhotenství do 7. dne po porodu).",
      etiology: "Předčasný porod (nedonošenost), intrauterinní asfyxie (nedostatek kyslíku), infekce plodu (choriomnionitida matky), porodní traumata.",
      pathogenesis: "1. Syndrom respirační tísně novorozence (RDS / nemoc hyalinních blan): typický u nedonošenců. Nezralé plíce (pneumocyty II. typu) netvoří dostatek **surfaktantu**. Alveoly kolabují, vzniká asfyxie a poškození endotelu s únikem fibrinu. 2. Aspirace mekonia: při intrauterinní hypoxii plod uvolní smolku (mekonium) do plodové vody a aspiruje ji do plic -> obstrukce dýchacích cest a chemická pneumonitida. 3. Sepsis neonatorum: infekce při průchodu porodním kanálem (Streptococcus agalactiae - GBS).",
      macroscopy: "RDS: plíce jsou bezvzdušné, tuhé, tmavě červené (připomínají játra - neplavou ve vodě). Aspirace mekonia: plíce jsou zvětšené, na řezu skvrnité se žlutozelenými okrsky hlenu a mekonia v bronších.",
      microscopy: "RDS: atelektáza (splasklé alveoly), dilatované alveolární vývody lemované tlustými eozinofilními (růžovými) hyalinními blanami. Aspirace mekonia: v lumen alveolů a bronchů nacházíme šupiny z kůže plodu (korneocyty), lanugo a žlutohnědé mekonium.",
      clinical: "U RDS se u nedonošence brzy po porodu rozvíjí dušnost, zatahování mezižeberních prostor a grunting (vrčivý výdech). Prevencí je podání kortikosteroidů matce před předčasným porodem k urychlení zralosti plic plodu."
    },
    quiz: [
      {
        question: "Co je hlavní příčinou vzniku syndromu respirační tísně novorozence (RDS)?",
        options: [
          "Vrozená srdeční vada",
          "Nezralost plic s nedostatkem plicního surfaktantu u předčasně narozených dětí",
          "Vdechnutí cizího tělesa",
          "Aspirace plodové vody"
        ],
        correct: 1,
        explanation: "Plicní surfaktant snižuje povrchové napětí alveolů a drží je otevřené. Syntéza surfaktantu pneumocyty II. typu vrcholí až po 35. týdnu gestace. U předčasně narozených dětí vede nedostatek surfaktantu k masivnímu kolapsu plic (atelektáze) a rozvoji RDS."
      },
      {
        question: "Jak se v histologii plic prokazuje aspirace mekonia (smolky)?",
        options: [
          "Přítomností krystalů vápníku",
          "Nálezem odloupaných bezjaderných kožních šupin plodu (korneocytů), chloupků (lanuga) a žlutohnědého mekonického pigmentu v alveolech a bronších",
          "Tvorbou Aschoffových uzlíků",
          "Nálezem kolonií plísní"
        ],
        correct: 1,
        explanation: "Mekonium (smolka) obsahuje odloupané buňky kůže plodu a lanugo, které plod polkl a vyloučil do plodové vody. Při intrauterinním stresu a asfyxii plod začne lapavě dýchat a tuto znečištěnou plodovou vodu vdechne do plic, což histolog prokáže nálezem těchto struktur v alveolech."
      }
    ]
  },
  {
    id: "spec-41",
    title: "Hyperfunkční a hypofunkční syndromy hypofýzy, Adenomy hypofýzy",
    section: "Endokrinní systém",
    category: "Speciální",
    keywords: ["hypofýza", "adenom", "prolaktinom", "gigantismus", "akromegalie", "Sheehan", "nanismus"],
    content: {
      definition: "Patologie hypofýzy zahrnuje benigní nádory (adenomy) předního laloku (adenohypofýzy) a syndromy způsobené nadbytkem (hyperpituitarismus) nebo nedostatkem (hypopituitarismus) hypofyzárních hormonů.",
      etiology: "Adenomy: monoklonální neoplazie buněk adenohypofýzy. Hypopituitarismus: Sheehanův syndrom (poporodní nekróza hypofýzy), tumor (útlak zdravé tkáně makroadenomem).",
      pathogenesis: "1. Hyperfunkční syndromy: Prolaktinom (nejčastější adenom) -> hyperprolaktinémie; Somatotropní adenom -> nadprodukce růstového hormonu (GH). Před uzávěrem růstových plotének vyvolá gigantismus (obří vzrůst), v dospělosti akromegalii. Kortikotropní adenom -> nadprodukce ACTH vyvolávající Cushingovu nemoc. 2. Hypofunkční syndromy: Sheehanův syndrom - v těhotenství se hypofýza zvětší, ale její cévní zásobení se nezvýší. Při masivním poporodním krvácení a šoku dojde k ischemii a nekróze hypofýzy.",
      macroscopy: "Adenomy se dělí na mikroadenomy (do 10 mm) a makroadenomy (nad 10 mm - mohou utlačovat chiasma opticum a způsobovat výpadky zorného pole - bitemporální hemianopsii). Sheehanův syndrom: svraštělá, vazivově změněná sella turcica.",
      microscopy: "Adenomy: monomorfní (jednotvárná) populace buněk ( acidofilní, bazofilní nebo chromofobní), chybí normální retikulární síť (rozdíl od hyperplazie). Buněčné jádro bývá uniformní, bez mitóz.",
      clinical: "Prolaktinom se projevuje galaktoreou (tvorba mléka mimo kojení), amenoreou (ztráta menstruace) a neplodností. Akromegalie se projevuje zvětšováním koncových částí těla (ruce, nohy, čelist - prognatie, nadočnicové oblouky) a makroglosií (velký jazyk)."
    },
    quiz: [
      {
        question: "Jak se liší gigantismus od akromegalie při nadprodukci růstového hormonu (GH) somatotropním adenomem?",
        options: [
          "Gigantismus vzniká pouze u žen, akromegalie u mužů",
          "Gigantismus vzniká v dětství před uzávěrem epifyzárních růstových plotének (dochází k nadměrnému růstu do výšky); akromegalie vzniká v dospělosti po uzávěru plotének (rostou pouze koncové části těla - akra, čelist, vnitřní orgány)",
          "Akromegalie je vrozená, gigantismus získaný",
          "Akromegalie se projevuje zmenšením orgánů"
        ],
        correct: 1,
        explanation: "Růstový hormon stimuluje růst kostí do délky přes chrupavky růstových plotének. Pokud ploténky v pubertě zkostnatí (uzavřou se), růst do výšky již není možný. Nadbytek GH v dospělosti (akromegalie) proto stimuluje pouze růst plochých kostí, měkkých tkání a akrálních částí."
      },
      {
        question: "Co je to Sheehanův syndrom?",
        options: [
          "Nádor nadledvin produkující adrenalin",
          "Poporodní ischemická nekróza adenohypofýzy způsobená těžkým krvácením a šokem během porodu, u těhotensky zvětšené hypofýzy",
          "Vrozený nedostatek hormonů štítné žlázy",
          "Zánět hypofýzy vyvolaný tuberkulózou"
        ],
        correct: 1,
        explanation: "Během těhotenství dochází k fyziologické hyperplazii buněk tvořících prolaktin, hypofýza se zvětší téměř na dvojnásobek. Její cévní zásobení (portálí oběh) je však zranitelné. Masivní krvácení při porodu vyvolá hypotenzi a způsobí infarkt (nekrózu) této zbytnělé hypofýzy."
      }
    ]
  },
  {
    id: "spec-42",
    title: "Hyperfunkce kůry nadledvin",
    section: "Endokrinní systém",
    category: "Speciální",
    keywords: ["nadledviny", "Cushing", "Conn", "aldosteron", "kortizol", "adenom", "feochromocytom"],
    content: {
      definition: "Hyperfunkce kůry nadledvin zahrnuje syndromy způsobené nadprodukcí jejích tří hlavních steroidních hormonů: kortizolu (Cushingův syndrom), aldosteronu (Connův syndrom) a androgenů (adrenogenitální syndrom).",
      etiology: "1. Cushingův syndrom: iatrogenní (podávání kortikosteroidů - nejčastější), adenom hypofýzy produkující ACTH (Cushingova nemoc), funkční adenom/karcinom kůry nadledvin, paraneoplastická produkce ACTH (malobuněčný karcinom plic). 2. Connův syndrom: aldosteron-produkující adenom kůry nadledvin (zona glomerulosa).",
      pathogenesis: "Cushing: chronický nadbytek kortizolu stimuluje glukoneogenezi (hyperglykémie), odbourává proteiny (atrofie svalů, strie na kůži) a způsobuje redistribuci tuku. Conn: nadbytek aldosteronu zvyšuje reabsorpci sodíku a vody v ledvinách a vylučování draslíku -> hypervolemie a hypertenze s hypokalémií.",
      macroscopy: "Nádory nadledvin (adenomy): solitární, malé, kulaté, charakteristicky svítivě žluté na řezu (kvůli vysokému obsahu lipidů/cholesterolu, ze kterého se steroidní hormony tvoří), dobře ohraničené. Cushingův syndrom: centrální obezita, měsíčkovitý obličej (moon face), býčí šíje (buffalo hump), fialové strie na břiše.",
      microscopy: "Adenom kůry nadledvin: buňky podobné buňkám zona fasciculata - velké, s bohatou, světlou, lipidovými vakuolami vyplněnou cytoplasmou (čistá cytoplasma). Chybí buněčné atypie a mitózy (rozdíl od karcinomu). Atrofie kůry druhostranné nadledviny u jednostranného funkčního adenomu (zpětná vazba přes ACTH).",
      clinical: "Cushingův syndrom doprovází svalová slabost, osteoporóza, arteriální hypertenze a náchylnost k infekcím. Connův syndrom se klinicky projevuje refrakterní hypertenzí a svalovou slabostí či křečemi z hypokalémie (nedostatku draslíku)."
    },
    quiz: [
      {
        question: "Jak se liší Cushingův syndrom od Cushingovy nemoci?",
        options: [
          "Neliší se, jde o synonyma",
          "Cushingův syndrom je obecný stav nadbytku kortizolu z jakékoli příčiny (např. iatrogenní, adenom nadledviny); Cushingova nemoc je specifická podskupina způsobená ACTH-produkujícím adenomem hypofýzy",
          "Cushingova nemoc postihuje pouze muže",
          "U Cushingovy nemoci je hladina kortizolu nízká"
        ],
        correct: 1,
        explanation: "Cushingův syndrom je střešní pojem pro klinické projevy hyperkortizolismu. Pokud je příčinou tohoto stavu přímo nádor v podvěsku mozkovém (hypofýze) secernující hormon ACTH, který nadledviny k produkci kortizolu stimuluje, označuje se to jako Cushingova nemoc (Cushing's disease)."
      },
      {
        question: "Co je hlavním klinickým projevem Connova syndromu (primárního hyperaldosteronismu)?",
        options: [
          "Extrémní hubnutí a hypoglykémie",
          "Arteriální hypertenze spojená s hypokalémií (svalová slabost, parestezie, křeče)",
          "Bronzové zbarvení kůže a hypotenze",
          "Porucha růstu kostí"
        ],
        correct: 1,
        explanation: "Aldosteron zvyšuje zpětné vstřebávání sodíku (Na+) a vody (čímž roste objem krve a tlak -> hypertenze) a zároveň nutí ledviny vylučovat draslík (K+) do moči. Nedostatek draslíku (hypokalémie) mění elektrickou dráždivost membrán, což vede k typické svalové slabosti a křečím."
      }
    ]
  },
  {
    id: "spec-43",
    title: "Nenádorová onemocnění štítné žlázy autoimunitní a neautoimunitní povahy",
    section: "Endokrinní systém",
    category: "Speciální",
    keywords: ["štítná", "struma", "Hashimoto", "Graves", "thyreotoxikóza", "lymfoepiteliální", "koloid"],
    content: {
      definition: "Nenádorová onemocnění štítné žlázy zahrnují stavy spojené se zvětšením žlázy (struma), hyperfunkcí (hypertyreóza/tyreotoxikóza) a hypofunkcí (hypotyreóza).",
      etiology: "1. Graves-Basedowova choroba (autoimunitní hypertyreóza): protilátky proti TSH-receptoru (TSI). 2. Hashimotova tyroiditida (autoimunitní hypotyreóza): autoimunitní destrukce folikulů. 3. Endemická struma (neautoimunitní): deficit jódu v potravě.",
      pathogenesis: "Graves-Basedow: protilátky typu IgG se vážou na receptor pro TSH na tyreocytech a trvale ho stimulují (imunopatologická reakce II. typu). Dochází k nadprodukci T3 a T4. Hashimotova tyroiditida: CD8+ cytotoxické lymfocyty a protilátky (proti tyreoperoxidáze - anti-TPO) vyvolávají destrukci folikulů, což vede k postupné hypotyreóze. Endemická struma: nedostatek jódu omezí tvorbu hormonů, stoupá sekrece TSH z hypofýzy, což vede k hyperplazii a hypertrofii folikulů (strumigeneze).",
      macroscopy: "Graves-Basedow: žláza je symetricky zvětšená, sytě červená (masivně prokrvená). Hashimotova t.: žláza je zvětšená, tuhá, na řezu bledá, šedožlutá (připomíná lymfatickou uzlinu). Koloidní struma: obrovská, uzlovitá, na řezu průsvitná, hnědavá (vyplněná koloidem).",
      microscopy: "Graves-Basedow: folikuly jsou vystlány vysokým cylindrickým epitelem, koloid je bledý, s lakunami resorpce při okrajích (vzhled krajky). Hashimotova t.: masivní lymfocytární a plazmocytární infiltrát tvořící lymfatické folikuly s germinálními centry (nahrazení parenchymu), přítomnost **Hürthleových (onkocytárních) buněk** (epitelie s bohatou, granulární, intenzivně růžovou cytoplasmou plnou mitochondrií).",
      clinical: "Graves-Basedow se projevuje tyreotoxickou triádou (Merseburgská triáda): struma, tachykardie a exoftalmus (vystoupení očí v důsledku infiltrace retroorbitálního prostoru). Hashimotova t. se projevuje myxedémem (těstovitý otok podkoží), únavou, zimomřivostí, zácpou a přibýváním na váze."
    },
    quiz: [
      {
        question: "Co tvoří klasickou Merseburgskou triádu u Graves-Basedowovy tyreotoxikózy?",
        options: [
          "Horečka, kašel, dušnost",
          "Struma (zvětšení štítné žlázy), tachykardie (bušení srdce) a exoftalmus (vystoupení očí z orbit)",
          "Hypertenze, obezita, strie",
          "Ikterus, splenomegalie, ascites"
        ],
        correct: 1,
        explanation: "Merseburgská triáda je typickým klinickým obrazem Graves-Basedowovy choroby. Exoftalmus (ophthalmopathia) vzniká autoimunitním zánětem retroorbitálního tuku a okohybných svalů, které otékají a tlačí oční bulby dopředu."
      },
      {
        question: "Co jsou to Hürthleovy buňky (onkocyty) typické pro Hashimotovu tyroiditidu?",
        options: [
          "Apoptotické lymfocyty v uzlinách",
          "Metaplasticky změněné folikulární buňky štítné žlázy s bohatou, granulární, výrazně růžovou (eozinofilní) cytoplasmou, která je přeplněná mitochondriemi",
          "Nádorové buňky produkující kalcitonin",
          "Buňky tvořící koloid"
        ],
        correct: 1,
        explanation: "Hürthleovy (onkocytární/oxyfilní) buňky vznikají jako reakce na chronický stres a poškození folikulů. Zmnožení mitochondrií v jejich cytoplasmě jim dává specifický růžový a granulární vzhled. Jsou typickým diagnostickým znakem v biopsii u Hashimotovy tyroiditidy."
      }
    ]
  },
  {
    id: "spec-44",
    title: "Makroskopické a mikroskopické projevy kožních nemocí",
    section: "Dermatopatologie",
    category: "Speciální",
    keywords: ["akantóza", "hyperkeratóza", "spongióza", "makula", "papula", "paprsek", "dermis"],
    content: {
      definition: "Tato kapitola shrnuje základní terminologii používanou v patologii kůže k popisu klinických (makroskopických) kožních lézí a histologických (mikroskopických) změn v epidermis a dermis.",
      etiology: "Infekce, imunologické reakce, fyzikální a chemické vlivy, genetické poruchy diferenciace epidermis.",
      pathogenesis: "Změny v kůži odrážejí poruchy keratinizace, soudržnosti buněk (akantolýza) nebo edému (spongióza) v epidermis a reaktivních procesů v dermis.",
      macroscopy: "Základní kožní léze (eflorescence): 1. Makula (skvrna) - plochá změna barvy kůže. 2. Papula (pupínek) - vyvýšená, pevná léze do 5 mm. 3. Vezikula (puchýřek) - dutinka vyplněná tekutinou do 5 mm (bula je nad 5 mm). 4. Pustula (neštovička) - dutinka vyplněná hnisem. 5. Plak - plochá vyvýšená léze (obvykle > 1 cm). 6. Skvama (šupina) - olupující se zrohovatělá epidermis.",
      microscopy: "Histologické pojmy: 1. Hyperkeratóza: zbytnění stratum corneum (rohovité vrstvy). 2. Parakeratóza: perzistence jader v buňkách stratum corneum (normálně jsou bezjaderné, značí zrychlené rohovění - např. u lupénky). 3. Akantóza: zbytnění stratum spinosum (trnitých buněk). 4. Spongióza: mezibuněčný edém (tekutina) v epidermis (typické pro ekzémy). 5. Akantolýza: ztráta mezibuněčných spojů (desmosomů) vedoucí k rozpadu epidermis a tvorbě puchýřů (pemphigus).",
      clinical: "Správné používání a interpretace těchto pojmů je klíčová pro histopatologickou diagnostiku kožních biopsií u zánětlivých dermatóz i nádorů (např. melanomu či bazaliomu)."
    },
    quiz: [
      {
        question: "Co je to parakeratóza v histologickém obraze kůže?",
        options: [
          "Ztráta buněčných jader v bazální vrstvě kůže",
          "Abnormální rohovění charakterizované přítomností (perzistencí) buněčných jader v buňkách stratum corneum (rohovité vrstvy), spojené se zrychlenou keratinizací",
          "Úplné chybění pigmentu melanin",
          "Edém mezi buňkami epidermis"
        ],
        correct: 1,
        explanation: "Normálně buňky při průchodu do stratum corneum ztrácejí jádra a mění se v rohovité šupiny. Pokud je proces zrychlený (např. u lupénky/psoriázy), buňky nestihnou jádra odbourat a ta přetrvávají v rohovité vrstvě (parakeratóza)."
      },
      {
        question: "Jak se definuje pojem akantolýza?",
        options: [
          "Ztluštění rohovité vrstvy kůže",
          "Ztráta soudržnosti mezi epidermálními buňkami (rozpad desmosomů), což vede k separaci buněk a tvorbě nitrobuněčných puchýřů (např. u pemphigusu)",
          "Prorůstání vaziva do epidermis",
          "Zánět cév v dermis"
        ],
        correct: 1,
        explanation: "Akantolýza je rozpad spojů (desmosomů) mezi keratinocyty. Buňky se zakulatí, oddělí se od sebe a v epidermis vzniká trhlina a následně puchýř. Je to typický znak autoimunitního pemphigusu."
      }
    ]
  },
  {
    id: "spec-45",
    title: "Neinfekční a infekční dermatitidy (přehled)",
    section: "Dermatopatologie",
    category: "Speciální",
    keywords: ["dermatitida", "ekzém", "psoriáza", "lupénka", "pemphigus", "impetigo", "erythema"],
    content: {
      definition: "Dermatitidy (ekzémy, záněty kůže) jsou zánětlivá onemocnění kůže, která se dělí na neinfekční (imunitně zprostředkované - ekzémy, lupénka, puchýřnaté choroby) a infekční (vyvolané bakteriemi, viry či plísněmi).",
      etiology: "1. Neinfekční: Alergický kontaktní ekzém (reakce typu IV na nikl, kosmetiku), Psoriáza (lupénka - autoimunitní T-buňkami zprostředkovaná hyperproliferace), Pemphigus vulgaris (protilátky proti desmogleinu-3). 2. Infekční: Impetigo (Staphylococcus aureus/Streptococcus pyogenes), Bradavice (HPV), Pásový opar (Varicella-zoster virus).",
      pathogenesis: "Psoriáza: T-lymfocyty secernují cytokiny (IL-17, IL-23), které dramaticky urychlují proliferaci keratinocytů (buněčný cyklus zkrácen z 28 dní na 3–5 dní). Pemphigus: IgG protilátky ničí desmosomy (akantolýza) -> vzniká intraepidermální puchýř.",
      macroscopy: "Kontaktní ekzém: erytém, drobné svědivé puchýřky (vesikuly), mokvání, krusty. Psoriáza: ostře ohraničené červené plaky pokryté stříbřitě lesklými šupinami (typicky na extenzorech - lokty, kolena). Impetigo: medově žluté krusty v obličeji u dětí.",
      microscopy: "Ekzém: výrazná spongióza (mezibuněčný edém tvořící vakuoly v epidermis), exocytóza (lymfocyty v epidermis), perivaskulární infiltrát v dermis. Psoriáza: výrazná parakeratóza, akantóza s prodloužením epidermálních čepů (vzhled zubů hřebenu), chybění stratum granulosum, přítomnost Munroových mikroabscesů (shluky neutrofilů v rohovité vrstvě). Pemphigus: suprabazální štěrbina (puchýř těsně nad bazální vrstvou - bazální buňky drží na membráně jako 'řada náhrobků' - tombstone appearance).",
      clinical: "Psoriáza je chronické onemocnění spojené s rizikem psoriatické artritidy. Pemphigus vulgaris je bez léčby (imunosupresivy) fatální kvůli ztrátám tekutin a infekcím v plošných erozích po prasklých puchýřích."
    },
    quiz: [
      {
        question: "Které histologické znaky jsou klíčové pro diagnózu lupénky (psoriázy) v kožní biopsii?",
        options: [
          "Spongióza a masivní edém dermis",
          "Výrazná parakeratóza (šupiny s jádry), akantóza s pravidelným prodloužením epidermálních čepů, chybění stratum granulosum a Munroovy mikroabscesy (neutrofily v rohovině)",
          "Intraepidermální suprabazální puchýř z akantolýzy",
          "Tvorba granulomů s kaseózní nekrózou"
        ],
        correct: 1,
        explanation: "Psoriáza se vyznačuje hyperproliferací. Zrychlený růst buněk vede k ztluštění epidermis (akantóza) s typickým protáhnutím čepů, parakeratóze (buňky si ponechávají jádra) a akumulaci neutrofilů v rohovité vrstvě (Munroovy mikroabscesy)."
      },
      {
        question: "Medově žluté krusty (honey-colored crusts) na obličeji dětí jsou typickým klinickým nálezem u:",
        options: [
          "Alergického ekzému",
          "Impetiga (bakteriální infekce kůže)",
          "Lupénky",
          "Pásového oparu"
        ],
        correct: 1,
        explanation: "Impetigo je vysoce nakažlivé bakteriální onemocnění kůže (způsobené stafylokoky či streptokoky). Tvoří puchýřky, které praskají, a zasychající exsudát vytváří pro impetigo zcela charakteristické medově žluté krusty."
      }
    ]
  },
  {
    id: "spec-46",
    title: "Edém mozku",
    section: "Neuropatologie",
    category: "Speciální",
    keywords: ["edém", "mozku", "vazogenní", "cytotoxický", "herniace", "tlak", "mozkový"],
    content: {
      definition: "Edém mozku je nadměrné hromadění tekutiny v mozkovém parenchymu (v buňkách nebo v mezibuněčném prostoru), které vede ke zvýšení intrakraniálního tlaku.",
      etiology: "Traumata hlavy, ischémie (infarkt mozku), krvácení, nádory (metastázy), infekce (meningitidy, encefalitidy), akutní hyponatrémie.",
      pathogenesis: "Dva hlavní typy: 1. Vazogenní edém (nejčastější): poškození hematoencefalické bariéry (HEB) - u tumorů, zánětů. Tekutina bohatá na bílkoviny uniká z kapilár do intersticia (hlavně v bílé hmotě). 2. Cytotoxický edém: poškození buněčného metabolismu (např. nedostatek ATP při ischemii). Selhává Na+/K+ pumpa, sodík a voda se hromadí uvnitř buněk (neurony, glie), které otečou (hlavně v šedé hmotě). Podtyp: intersticiální edém (transependymální průsak u hydrocefalu).",
      macroscopy: "Mozek je zvětšený, těžký. Závity (gyry) jsou oploštělé, rýhy (sulci) jsou zúžené až vymizelé. Komory jsou stlačené. Hlavním rizikem jsou herniace (uskřinutí/kýly) mozku: subfalinní (zasunutí g. cinguli pod falx cerebri), transtentoriální/uncální (zasunutí uncus g. hippocampi pod tentorium cerebelli) a tonzilární (vtlačení tonzil mozečku do foramen magnum - stlačí mozkový kmen).",
      microscopy: "Mikroskopicky nacházíme rozvolnění neuropilu (mezibuněčného prostoru) - světlá projasnění kolem cév a neuronů (perivaskulární a perineurální edém). Buňky (zejména astrocyty) mají zvětšenou, světlou cytoplasmu (vakuolizaci).",
      clinical: "Projevuje se syndromem intrakraniální hypertenze: kruté bolesti hlavy, zvracení (bez předchozí nauzey, často proudem), edém papily zrakového nervu (stáza), bradykardie a hypertenze (Cushingův reflex). Tonzilární herniace stlačí dechové a kardiovaskulární centrum v prodloužené míše a způsobí smrt."
    },
    quiz: [
      {
        question: "Jak se liší patogeneze vazogenního a cytotoxického edému mozku?",
        options: [
          "Vazogenní edém vzniká pouze u dětí, cytotoxický u dospělých",
          "Vazogenní edém je způsoben poškozením hematoencefalické bariéry s únikem tekutiny do intersticia; cytotoxický edém je způsoben selháním metabolických pump (nedostatkem ATP) s hromaděním vody uvnitř samotných buněk",
          "U cytotoxického edému tekutina vytéká z uší",
          "Vazogenní edém postihuje pouze mozeček"
        ],
        correct: 1,
        explanation: "Vazogenní edém je extracelulární (tekutina je v mezibuněčném prostoru kvůli poruše těsných spojů kapilár). Cytotoxický edém je intracelulární (buňky otečou zevnitř, protože kvůli ischemii nemají energii na odčerpávání sodíku)."
      },
      {
        question: "Která mozková herniace (kýla) je nejnebezpečnější a bezprostředně ohrožuje život pacienta zástavou dechu?",
        options: [
          "Subfalinní herniace (gyrus cinguli pod falx)",
          "Tonzilární herniace (vtlačení tonzil mozečku do foramen magnum, což stlačí prodlouženou míchu)",
          "Transtentoriální herniace uncu",
          "Herniace přes trepanační otvor v lebce"
        ],
        correct: 1,
        explanation: "Při tonzilární herniaci jsou mozečkové tonzily vtlačeny do týlního otvoru (foramen magnum). V tomto prostoru prochází prodloužená mícha, kde sídlí životně důležitá centra pro řízení dýchání a krevního oběhu. Jejich stlačení vyvolá okamžitou zástavu dechu."
      }
    ]
  },
  {
    id: "spec-47",
    title: "Hydrocefalus",
    section: "Neuropatologie",
    category: "Speciální",
    keywords: ["hydrocefalus", "likvor", "komory", "obstrukční", "komunikující", "přetlak"],
    content: {
      definition: "Hydrocefalus je patologické zvětšení objemu mozkomíšního moku (likvoru) v intrakraniálním prostoru, spojené s dilatací mozkových komor.",
      etiology: "Nádory (blokáda toku likvoru), stavy po meningitidě nebo subarachnoidálním krvácení (jizvení arachnoidálních klků), vrozené vady (stenóza Sylviova aqueduktu), nadprodukce likvoru (papilom chorioideálního plexu - vzácné).",
      pathogenesis: "Likvor se tvoří v plexu chorioideus, teče přes komory (postranní -> III. -> aquedukt -> IV.) do subarachnoidálního prostoru a vstřebává se v Pacchioniho (arachnoidálních) klcích do splavů. \nTypy hydrocefalu: \n1. Obstrukční (nekomunikující): překážka toku likvoru uvnitř komorového systému (např. ucpání Sylviova aqueduktu nebo foramen Monro). \n2. Komunikující: likvor volně protéká komorami, ale je porušeno jeho vstřebávání v arachnoidálních klcích. \n3. Hydrocephalus ex vacuo: pasivní zvětšení komor jako náhrada za atrofovaný mozkový parenchym (např. u Alzheimerovy choroby - bez zvýšení tlaku likvoru).",
      macroscopy: "Komorový systém (postranní a III. komora) je masivně dilatovaný. Mozkový parenchym (bílá i šedá hmota) je ztenčený a utlačený (tlaková atrofie). U novorozenců (před srostnutím lebečních švů) dochází k masivnímu zvětšení hlavy (makrocefalie). U dospělých se lebka zvětšit nemůže, stoupá intrakraniální tlak.",
      microscopy: "Zploštění ependymové výstelky komor, úbytek a degenerace myelinizovaných vláken v bílé hmotě kolem komor, intersticiální edém mozkové tkáně (průsak likvoru stěnou komor).",
      clinical: "U dospělých se projevuje bolestmi hlavy, zvracením, poruchami zraku. Specifickou jednotkou je normotenzní hydrocefalus starých lidí (projevuje se triádou: porucha chůze, demence, inkontinence). Léčbou je zavedení zkratu (shuntu) odvádějícího likvor do břišní dutiny."
    },
    quiz: [
      {
        question: "Jaký je rozdíl mezi komunikujícím a nekomunikujícím (obstrukčním) hydrocefalem?",
        options: [
          "Komunikující hydrocefalus postihuje pouze děti",
          "U komunikujícího hydrocefalu likvor volně protéká komorovým systémem, ale je porušeno jeho vstřebávání; u nekomunikujícího je překážka přímo v komorách (likvor se nedostane do subarachnoidálního prostoru)",
          "Nekomunikující hydrocefalus nemá žádné příznaky",
          "Komunikující hydrocefalus je vyvolán alkoholem"
        ],
        correct: 1,
        explanation: "Nekomunikující (obstrukční) hydrocefalus vzniká tehdy, když blokáda (nádor, vrozené zúžení) leží uvnitř komor (např. ucpání průchodu mezi III. a IV. komorou). Komory před překážkou se roztáhnou, ale s prostorem kolem mozku nekomunikují. U komunikujícího je tok volný, ale likvor se nevstřebává v klcích do krve."
      },
      {
        question: "Co je to hydrocephalus ex vacuo?",
        options: [
          "Akutní hromadění likvoru po úrazu",
          "Kompensatorní zvětšení mozkových komor, které pasivně zaplňuje prostor vzniklý úbytkem (atrofií) mozkové tkáně (např. u demencí), bez zvýšení tlaku likvoru",
          "Hydrocefalus způsobený ucpáním cév",
          "Vrozené chybění mozkových komor"
        ],
        correct: 1,
        explanation: "U hydrocephalus ex vacuo (doslova 'z prázdnoty') není problém v tvorbě či toku likvoru. Mozek atrofuje (zmenšuje se např. věkem či degenerací) a uvolněné místo v lebce se pasivně vyplní větším množstvím likvoru a roztažením komor. Tlak v lebce zůstává normální."
      }
    ]
  },
  {
    id: "spec-48",
    title: "Ischémie centrální nervové soustavy",
    section: "Neuropatologie",
    category: "Speciální",
    keywords: ["ischémie", "infarkt", "encefalomalacie", "kolikvační", "malacie", "penumbra", "glie"],
    content: {
      definition: "Ischémie CNS (ischemická cévní mozková příhoda - iCMP, mozkový infarkt) je ložiskové poškození mozkové tkáně způsobené nedostatečným přítokem krve a kyslíku cévním uzávěrem.",
      etiology: "Trombóza (nasedající na aterosklerózu mozkových tepen - a. cerebri media), embolie (z levého srdce při fibrilaci síní, nebo z karotických tepen), systémová hypotenze (globální ischemie mozku).",
      pathogenesis: "Ischemie vyvolá kolaps energetického metabolismu. Okolo ložiska nekrózy se nachází **penumbra** (oblast ischemického polostínu - buňky jsou funkčně němé, ale strukturně ještě živé, lze je zachránit rychlou trombolýzou). Mozkový infarkt podléhá specifické kolikvační (zkapalňující) nekróze (encefalomalacii) z důvodu vysokého obsahu lipidů a lytických enzymů v mozku.",
      macroscopy: "Morfologický vývoj mozkového infarktu (encefalomalacie): \n- 0–24 hod: makroskopicky nepatrný, tkáň je mírně prosáklá a měkčí; \n- 24–48 hod (šedá malacie): tkáň je kašovitá, oteklá, stírá se hranice mezi šedou a bílou hmotou; \n- od 4. dne (žlutá malacie): rozpad tkáně na žlutavou tekutou kaši (způsobeno makrofágy čistícími myelin); \n- po týdnech: vzniká pseudocysta (dutina vyplněná likvorem), ohraničená tuhým lemem.",
      microscopy: "Mikroskopický vývoj: \n- 6–12 hod: 'červené neurony' (red neurons - scvrklé neurony s intenzivně eozinofilní cytoplasmou a pyknotickým jádrem), edém; \n- 24–72 hod: nekróza tkáně, infiltrace neutrofily; \n- od 3. dne: masivní infiltrace **zrníčkovými buňkami** (lipofágy - makrofágy s pěnivou cytoplasmou vyplněnou myelinem a lipidy); \n- po týdnech: proliferace astrocytů (reaktivní glióza) na obvodu, které tvoří stěnu výsledné pseudocysty (tzv. glio-vazivová jizva).",
      clinical: "Projevuje se náhlým rozvojem neurologického deficitu (paréza končetin, pokleslý koutek úst, poruchy řeči - afázie). Časové okno pro účinnou trombolýzu/trombektomii je cca 4.5 hodiny od začátku příznaků."
    },
    quiz: [
      {
        question: "Co jsou to 'zrníčkové buňky' (gitter cells / lipofágy) v histologickém obraze hojícího se mozkového infarktu?",
        options: [
          "Nádorové buňky z neuroglie",
          "Aktivované makrofágy (mikroglie), které fagocytovaly rozpadlý myelin (lipidy) z nekrotické mozkové tkáně, a získaly tak pěnivou cytoplasmu",
          "Krystaly vápníku v mozku",
          "Neurony poškozené alkoholem"
        ],
        correct: 1,
        explanation: "Při encefalomalacii dochází k rozpadu myelinu (který je bohatý na lipidy). Kolem 3. až 4. dne se v ložisku objevují makrofágy (mikroglie). Ty myelin pohltí a jejich cytoplasma se naplní tukovými kapénkami, což jim dává zrnitý (pěnový) vzhled (lipofágy)."
      },
      {
        question: "Jak se nazývá glie-vazivová jizva a dutina, která vzniká jako konečné stadium hojení mozkového infarktu?",
        options: [
          "Fibrotická jizva",
          "Pseudocysta (postmalatická dutina) ohraničená lemem reaktivních astrocytů (glióza)",
          "Kaseózní kaverna",
          "Neurom"
        ],
        correct: 1,
        explanation: "V mozku chybí klasické vazivové stroma, a proto se zde netvoří pevná kolagenní jizva jako v srdci. Defekt se hojí kolikvaci (zkapalněním), rozpadlý materiál je odklizen a na jeho místě vzniká dutina (pseudocysta) ohraničená reaktivně zmnoženými astrocyty (gliová jizva)."
      }
    ]
  },
  {
    id: "spec-49",
    title: "Intrakraniální krvácení",
    section: "Neuropatologie",
    category: "Speciální",
    keywords: ["krvácení", "intrakraniální", "epidurální", "subdurální", "subarachnoidální", "aneurysma", "hypertenze"],
    content: {
      definition: "Intrakraniální krvácení zahrnuje krvácení do mozkového parenchymu (intracerebrální) a krvácení do prostorů mezi mozkovými plenami (epidurální, subdurální, subarachnoidální).",
      etiology: "1. Epidurální: trauma hlavy s frakturou spánkové kosti a natržením a. meningea media. 2. Subdurální: trauma hlavy s natržením přemosťujících žil. 3. Subarachnoidální: ruptura vakovitého (berry) aneurysmatu na Willisově okruhu. 4. Intracerebrální: arteriální hypertenze (ruptura Charcot-Bouchardových aneurysmat v bazálních gangliích).",
      pathogenesis: "Epidurální: krvácení pod vysokým arteriálním tlakem mezi lebeční kost a dura mater. Rychle stlačuje mozek. Subdurální: krvácení pod nízkým venózním tlakem mezi dura mater a arachnoideu (u starých lidí a alkoholiků s atrofií mozku, kdy jsou přemosťující žíly napnuté). Subarachnoidální: krvácení do prostoru s likvorem (mezi arachnoideu a pia mater). Intracerebrální: krvácení přímo do tkáně, často v oblasti capsula interna.",
      macroscopy: "Epidurální hematom: bikonvexní (čočkovitý) tvar krevního výronu přitisknutý k lebce. Subdurální hematom: srpkovitý (crescent) tvar krevního výronu kopírující povrch hemisféry. Subarachnoidální: mozkové rýhy na spodině mozku jsou vyplněné tmavě červenou tekutou krví a koaguly (krev v likvoru). Intracerebrální: masivní hematom v bazálních gangliích, často s protržením do komor (hemocefalus).",
      microscopy: "Průkaz extravazátu erytrocytů, v okolní mozkové tkáni edém a ischemické změny neuronů. U subdurálního hematomu se po čase tvoří vazivové opouzdření (granulační tkáň vrůstající z dura mater) s makrofágy plnými hemosiderinu.",
      clinical: "Epidurální: typický je **lucidní interval** (po úrazu bezvědomí, pak návrat k vědomí a za několik hodin prudké zhoršení a kóma). Subarachnoidální: projevuje se náhlou, extrémně krutou bolestí hlavy (pacienti ji popisují jako 'nejhorší bolest v životě') a opozicí šíje (meningismus)."
    },
    quiz: [
      {
        question: "Která céva je nejčastějším zdrojem krvácení u akutního epidurálního hematomu a jaký má hematom tvar na CT vyšetření?",
        options: [
          "Přemosťující žíly; srpkovitý tvar",
          "Arteria meningea media (často po fraktuře spánkové kosti); bikonvexní (čočkovitý) tvar",
          "Aneurysma a. cerebri media; difuzní postižení rýh",
          "Vena magna Galeni; kruhový tvar"
        ],
        correct: 1,
        explanation: "Epidurální hematom vzniká natržením a. meningea media (arteriální krvácení). Krev se hromadí pod tlakem a odtlačuje duru od kosti. Protože dura mater je k lebce pevně přichycena v místech lebečních švů, krev se nemůže volně šířit a vytváří ohraničený čočkovitý (bikonvexní) tvar."
      },
      {
        question: "Co je nejčastější příčinou netraumatického subarachnoidálního krvácení (SAK)?",
        options: [
          "Ruptura jícnových varixů",
          "Ruptura vrozeného vakovitého (berry) aneurysmatu na Willisově arteriálním okruhu (nejčastěji v oblasti a. communicans anterior)",
          "Natržení přemosťujících žil",
          "Těžký chronický zánět uší"
        ],
        correct: 1,
        explanation: "Subarachnoidální krvácení vzniká rupturou tepny v subarachnoidálním prostoru, kde protéká likvor. Nejčastější netraumatickou příčinou je prasknutí vrozeného vakovitého aneurysmatu na cévním okruhu na spodině mozku (Willisově okruhu)."
      }
    ]
  },
  {
    id: "spec-50",
    title: "Meningitidy",
    section: "Neuropatologie",
    category: "Speciální",
    keywords: ["meningitis", "hnisavá", "likvor", "leptomeningy", "meningokok", "pneumokok", "tuberkulózní"],
    content: {
      definition: "Meningitida je zánětlivé onemocnění mozkových plen (leptomening - arachnoidey a pia mater). Dělí se na akutní hnisavou (bakteriální), akutní nehnisavou (virovou/aseptickou) a chronickou (specifickou - např. tuberkulózní).",
      etiology: "1. Akutní hnisavá: Neisseria meningitidis (meningokok - epidemie u mladých), Streptococcus pneumoniae (pneumokok - u starších a po traumatech), Escherichia coli a Streptococcus agalactiae (u novorozenců). 2. Virová: enteroviry, virus klíšťové encefalitidy. 3. Chronická: Mycobacterium tuberculosis.",
      pathogenesis: "Bakterie pronikají do likvorových cest nejčastěji hematogenně (z plic, nosohltanu) nebo přímým přestupem (při zánětu středního ucha - otogenní meningitis, při fraktuře base lebky). Dochází k masivní zánětlivé reakci v subarachnoidálním prostoru. Hnisavý exsudát se šíří likvorem a ucpává jeho cirkulaci.",
      macroscopy: "Akutní hnisavá m.: leptomeningy jsou zkalené, prosáklé, cévy jsou silně překrvené. V subarachnoidálním prostoru se hromadí hustý žlutozelený hnis, který pokrývá mozek jako čepice (u pneumokoka na konvexitě mozku, u meningokoka na basi). Tuberkulózní m.: želatinózní exsudát na basi mozku se specifickými uzlíky.",
      microscopy: "Hnisavá m.: subarachnoidální prostor je masivně rozšířen a vyplněn hustým exsudátem z fibrinové sítě a neutrofilů. Cévy pia mater jsou dilatované a překrvené, zánět může pronikat podél cév do povrchové kůry mozku (meningoencefalitida). Virová m.: infiltrát je chudý, tvořený výhradně lymfocyty.",
      clinical: "Projevuje se meningeálním syndromem: krutá bolest hlavy, horečka, světloplachost, zvracení a **opozice šíje** (ztuhnutí šíje - pacient nedokáže předklonit hlavu k hrudníku). Pozitivní Kernigův a Brudzinského příznak. Vyšetření likvoru (lumbální punkce) u hnisavé m. prokazuje zakalený likvor, tisíce neutrofilů, vysokou bílkovinu a velmi nízkou glukózu (spotřebována bakteriemi)."
    },
    quiz: [
      {
        question: "Jak se mění biochemický a cytologický nález v mozkomíšním moku (likvoru) u akutní bakteriální hnisavé meningitidy?",
        options: [
          "Likvor je čirý, chybí v něm buňky, glukóza je zvýšená",
          "Likvor je zakalený/hnisavý, obsahuje tisíce neutrofilních granulocytů, hladina bílkoviny je výrazně zvýšená a glukóza je kriticky snížená",
          "Likvor se mění v krev",
          "Nález je zcela normální"
        ],
        correct: 1,
        explanation: "Bakterie a neutrofily způsobí zakalení likvoru. Zánětlivá exsudace zvýší množství bílkovin. Bakterie pro svůj metabolismus masivně spotřebovávají glukózu z likvoru, proto její hladina (glykorachie) prudce klesá, což je klíčový rozdíl oproti virovým meningitidám (kde je glukóza v normě)."
      },
      {
        question: "Který patogen je nejčastějším původcem novorozenecké hnisavé meningitidy?",
        options: [
          "Neisseria meningitidis",
          "Streptococcus agalactiae (GBS - streptokok skupiny B) a Escherichia coli",
          "Streptococcus pneumoniae",
          "Virus chřipky"
        ],
        correct: 1,
        explanation: "Novorozenci se infikují při průchodu porodním kanálem matky. Nejčastějšími patogeny jsou proto bakterie kolonizující vagínu a konečník matky - Streptococcus agalactiae (GBS) a E. coli. Prevencí je screening GBS u těhotných."
      }
    ]
  },
  {
    id: "spec-51",
    title: "Encefalitidy",
    section: "Neuropatologie",
    category: "Speciální",
    keywords: ["encefalitida", "glie", "Negri", "kousnutí", "vzteklina", "herpes", "perivaskulární"],
    content: {
      definition: "Encefalitida je zánětlivé onemocnění mozkového parenchymu, které je nejčastěji způsobeno viry a postihuje neurony a neuroglii.",
      etiology: "Virus klíšťové encefalitidy (flavivirus), Herpes simplex virus (HSV-1), virus vztekliny (rabies virus), HIV (HIV encefalopatie), enteroviry.",
      pathogenesis: "Viry vstupují do CNS buď hematogenně (klíšťová e.), nebo retrográdním axonálním transportem podél nervů z místa vstupu (HSV-1 z trojklaného nervu do spánkového laloku; virus vztekliny z místa kousnutí zvířetem). Zánětlivá reakce vede k degeneraci a nekróze neuronů a aktivaci mikroglie k odklízení detritu.",
      macroscopy: "Mozek je oteklý (edém), překrvený, s drobnými petechiálními krváceními v šedé hmotě. HSV-1 encefalitida: má typický obraz těžké nekrotizující a hemoragické encefalitidy postihující asymetricky spánkové (temporální) a čelní laloky.",
      microscopy: "Společné histologické znaky virových encefalitid: 1. **Perivaskulární manžety** (perivascular cuffing - lymfocyty nahromaděné v Robinových-Virchowových prostorech kolem cév). 2. **Mikrogliální uzlíky** (shluky aktivované mikroglie v místech zániku neuronů). 3. **Neuronofágie** (makrofágy/glie obklopující a fagocytující odumírající neuron). Specifické inkluze: Negriho tělíska (eozinofilní intracytoplasmatické inkluze v pyramidových buňkách hippocampu a Purkyňových buňkách mozečku u vztekliny); Cowdryho A inkluze (intranukleární inkluze u HSV).",
      clinical: "Projevuje se horečkou, bolestmi hlavy, poruchami vědomí (somnolence až kóma), epileptickými záchvaty a ložiskovými neurologickými příznaky (parézy, poruchy řeči). Vzteklina je bez včasné vakcinace po kousnutí 100% fatální (projevuje se hydrofobií a křečemi)."
    },
    quiz: [
      {
        question: "Co jsou to Negriho tělíska (Negri bodies) a pro kterou infekci jsou patognomickým nálezem?",
        options: [
          "Bakteriální shluky u syfilis",
          "Eozinofilní intracytoplasmatické inkluze (tvořené virovými proteiny a nukleokapsidami) v neuronech hippocampu a mozečku, typické pro vzteklinu (rabies)",
          " amyloidové plaky u Alzheimerovy choroby",
          "Zvápenatělé uzlíky v plicích"
        ],
        correct: 1,
        explanation: "Negriho tělíska jsou specifické virové inkluze v cytoplasmě velkých neuronů. Jejich průkaz v mozku zvířete (např. lišky, psa) potvrzuje vzteklinu. Jsou lokalizovány hlavně v pyramidových buňkách hippocampu (Ammonova rohu) a Purkyňových buňkách mozečku."
      },
      {
        question: "Který virus způsobuje těžkou, asymetrickou nekrotizující a hemoragickou encefalitidu s predilekcí pro spánkové (temporální) laloky?",
        options: [
          "Virus klíšťové encefalitidy",
          "Herpes simplex virus typ 1 (HSV-1)",
          "Poliovirus (virus dětské obrny)",
          "Virus spalniček"
        ],
        correct: 1,
        explanation: "HSV-1 encefalitida je nejčastější sporadická fatální encefalitida. Má typickou afinitu k temporálním a frontálním lalokům, kde způsobuje rozsáhlou nekrózu a krvácení. Vyžaduje okamžitou léčbu intravenózním acyklovirem."
      }
    ]
  }
];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_SPECIAL_2 = DATA_SPECIAL_2;
}
