// data_onco_1.js - Onkopatologie (témata 1 - 22)
const DATA_ONCO_1 = [
  
  {
    id: "onco-1",
    title: "Příčiny vzniku nádorů (fyzikální, chemické, biologické, genetické)",
    section: "Obecná onkologie",
    category: "Onkologie",
    keywords: ["onkogeneze", "mutagen", "radiace", "viry", "protoonkogen", "supresorový", "DNA"],
    content: {
      definition: "Nádorová transformace je vícestupňový proces charakterizovaný akumulací genetických a epigenetických změn v buňce, které vedou k nekontrolovanému dělení a úniku z kontrolních mechanismů organismu.",
      etiology: "1. Fyzikální: ionizující záření (RTG, gama - zlomy DNA), UV záření (tvorba tyminových dimerů), mechanické dráždění (azbest). 2. Chemické: karcinogeny (alkylační látky, polycyklické aromáty - benzo[a]pyren, nitrosaminy, aflatoxin B1). 3. Biologické: onkogenní viry (HPV, EBV, HBV, HCV, HTLV-1), bakterie (Helicobacter pylori) a paraziti. 4. Genetické: vrozené mutace nádorových supresorů.",
      pathogenesis: "Mutace postihují čtyři klíčové třídy genů: a) **Protoonkogeny** (podporují růst, po mutaci se mění na dominantní onkogeny, např. RAS, MYC, HER2), b) **Nádorové supresorové geny** (brzdí růst, vyžadují inaktivaci obou alel - Knudsonova hypotéza, např. TP53, Rb), c) **Geny regulující apoptózu** (např. BCL2) a d) **Geny opravy DNA** (např. BRCA1/2, MMR geny).",
      macroscopy: "Nespecifická. Karcinogeneze se projevuje změnami tkáňové struktury v místě působení nox (např. bronchogenní karcinom u kuřáků, karcinom kůže u osob vystavených UV záření, hepatocelulární karcinom po cirhóze).",
      microscopy: "Mikroskopicky nacházíme známky instability genomu: bizarní mitózy, aneuploidii, atypie jader a narušení buněčné polarity. Na buněčné úrovni dochází k aktivaci replikačního potenciálu, zvýšené metabolické aktivitě a poruše diferenciace.",
      clinical: "Klinicky význam spočívá v prevenci (omezení expozice tabákovému kouři, alkoholu, UV záření) a screeningu (např. očkování proti HPV pro prevenci karcinomu děložního hrdla; testování nosičství mutací BRCA1/2 u rodin s karcinomem prsu)."
    },
    quiz: [
      {
        question: "Který z následujících genů patří mezi klíčové nádorové supresory a je označován jako 'strážce genomu'?",
        options: [
          "KRAS",
          "TP53 (kódující protein p53)",
          "HER2/neu",
          "BCL2"
        ],
        correct: 1,
        explanation: "TP53 je nejvýznamnější nádorový supresor. Při poškození DNA zastaví buněčný cyklus v G1 fázi, aby mohla proběhnout oprava, nebo při těžkém poškození spustí apoptózu. Jeho mutace je přítomna u více než 50 % lidských nádorů."
      },
      {
        question: "Jaký biologický patogen je spojen se vznikem karcinomu žaludku a MALT lymfomu?",
        options: [
          "Epstein-Barrové virus (EBV)",
          "Helicobacter pylori (bakterie kolonizující žaludeční sliznici)",
          "Lidský papillomavirus (HPV)",
          "Virus hepatitidy B (HBV)"
        ],
        correct: 1,
        explanation: "Helicobacter pylori způsobuje chronickou gastritidu, která vede k hyperplazii lymfatické tkáně (riziko MALT lymfomu) a přes intestinální metaplazii až k adenokarcinomu žaludku."
      }
    ,
      {
        question: "Která zkratka označuje tumor supresorový gen (nazývaný 'strážce genomu'), jehož protein zastavuje buněčný cyklus při poškození DNA?",
        type: "type-in",
        correct: ["TP53", "p53"],
        explanation: "TP53 je nejvýznamnější nádorový supresor. Kóduje protein p53, který v reakci na poškození DNA zastaví buněčný cyklus k opravě nebo spustí apoptózu."
      },
      {
        question: "Která bakterie kolonizující žaludeční sliznici je spojena se vznikem karcinomu žaludku a MALT lymfomu?",
        type: "type-in",
        correct: ["Helicobacter pylori", "H. pylori"],
        explanation: "Helicobacter pylori způsobuje chronický zánět žaludku (gastritidu), který zvyšuje riziko vzniku adenokarcinomu žaludku a MALT lymfomu."
      }]
  },

  {
    id: "onco-2",
    title: "Prekancerózy a dysplázie",
    section: "Obecná onkologie",
    category: "Onkologie",
    keywords: ["prekanceróza", "dysplázie", "CIN", "metaplazie", "fakultativní", "obligatorní", "atipie"],
    content: {
      definition: "Prekanceróza (premaligní léze) je patologický stav tkáně, který vykazuje statisticky významně zvýšené riziko vzniku maligního nádoru. Dysplázie je porucha uspořádání, velikosti a tvaru buněk v rámci tkáně (nejčastěji epitelu), která nepředstavuje invazivní růst.",
      etiology: "Chronické dráždění (chemické, fyzikální), virové infekce (HPV), chronické záněty (ulcerozní kolitida, Barrettův jícen) a genetické predispozice.",
      pathogenesis: "Prekancerózy dělíme na: 1. **Fakultativní**: zhoubný zvrat nastává vzácně a po dlouhé době (např. chronická gastritida, senilní keratóza, leukoplakie). 2. **Obligatorní**: zhoubný zvrat je téměř jistý a nastává relativně brzy (např. adenomatózní polypy tlustého střeva, Barrettův jícen s těžkou dysplázií, xeroderma pigmentosum). Dysplázie se hodnotí na stupnici Low-grade (lehká až střední) a High-grade (těžká - těsně před invazí).",
      macroscopy: "Leukoplakie (bílá políčka na sliznicích, např. v ústní dutině), erytroplakie (červená, sametová ložiska), polypy (vyvýšené útvary nad úroveň sliznice), ulcerace nebo ploché vyhlazené zóny (např. na děložním čípku).",
      microscopy: "Mikroskopické znaky dysplázie: 1. Buněčné atypie (pleomorfismus, zvětšená, hyperchromní jádra, zmnožení mitóz, atypické mitózy), 2. Porucha architektoniky (ztráta polarity buněk, narušení vrstevnatosti epitelu), ale **bazální membrána zůstává neporušená** (jakmile buňky proniknou pod bazální membránu, jde o invazivní karcinom).",
      clinical: "Klinický význam je včasná diagnostika. Provádí se preventivní stěry z děložního čípku (cytologie), kolonoskopické odstraňování polypů (polypektomie) a sledování pacientů s chronickými záněty. High-grade dysplázie vyžaduje chirurgické řešení (konizace, resekce)."
    },
    quiz: [
      {
        question: "Jaký je zásadní mikroskopický rozdíl mezi těžkou dysplázií (High-grade) a invazivním karcinomem?",
        options: [
          "Těžká dysplázie neobsahuje žádné atypické mitózy",
          "U těžké dysplázie jsou buňky cytologicky abnormální, ale respektují bazální membránu (nedochází k invazi); u invazivního karcinomu dochází k destrukci bazální membrány a infiltraci stroma cévami",
          "Dysplázie postihuje pouze mezenchymální tkáně",
          "U invazivního karcinomu chybí pleomorfismus jader"
        ],
        correct: 1,
        explanation: "Dysplázie (i ta nejtěžší - High-grade) je intraepiteliální proces. Epitelové buňky vykazují všechny známky malignity, ale bazální membrána je celistvá. Jakmile buňky proniknou bazální membránou do přilehlého vazivového stroma (lamina propria/dermis), jedná se o invazivní karcinom."
      },
      {
        question: "Která z následujících lézí je považována za typickou obligatorní (stacionární) prekancerózu?",
        options: [
          "Chronický žaludeční vřed",
          "Adenomatózní (tubulární/vilózní) polyp tlustého střeva",
          "Solární (senilní) keratóza kůže",
          "Chronická bronchitida"
        ],
        correct: 1,
        explanation: "Adenomatózní polyp tlustého střeva (zejména vilózní typ a s velikostí nad 2 cm) vykazuje velmi vysoké procento maligního zvratu v adenokarcinom (adenom-karcinomová sekvence), a proto je považován za obligatorní prekancerózu a kolonoskopicky se odstraňuje."
      }
    ,
      {
        question: "Která membrána zůstává neporušená u carcinoma in situ a dysplázií, na rozdíl od invazivního karcinomu?",
        type: "type-in",
        correct: ["bazální membrána", "bazální"],
        explanation: "Zachování celistvosti bazální membrány je klíčovým rozlišovacím znakem neinvazivních lézí (dysplázie, CIS) od invazivních karcinomů."
      },
      {
        question: "Jaká zkratka označuje prekancerózu dlaždicového epitelu děložního čípku (cervikální intraepiteliální neoplazii)?",
        type: "type-in",
        correct: ["CIN"],
        explanation: "CIN (Cervical Intraepithelial Neoplasia) se dělí do tří stupňů (CIN 1–3) podle hloubky postižení epitelu."
      }]
  },

  {
    id: "onco-3",
    title: "Nepravé nádory (pseudotumory)",
    section: "Obecná onkologie",
    category: "Onkologie",
    keywords: ["pseudotumor", "hamartom", "choristom", "cysta", "hyperplazie", "keloid", "granulom"],
    content: {
      definition: "Nepravé nádory (pseudotumory) jsou afekce, které makroskopicky i klinicky napodobují nádor (tvoří zduření či masu), ale chybí jim autonomní, nekontrolovaný a progresivní růst typický pro pravé neoplazie.",
      etiology: "Zánětlivé procesy, hojení ran s nadprodukcí vaziva, vrozené vývojové anomálie (chybné složení tkání), městnání sekretu v dutinách.",
      pathogenesis: "Klasifikace pseudotumorů: \n1. **Hyperplazie**: zvětšení tkáně zvýšením počtu buněk jako odpověď na stimulaci (např. nodulární hyperplazie prostaty, tyreoidální struma). \n2. **Zánětlivý pseudotumor**: např. granulomy (TBC, sarkoidóza), polypy sliznic (nosní katarální polypy). \n3. **Cysty**: dutiny vystlané epitelem a vyplněné tekutinou či kaší (retence žláz - atherom; parazitární cysty). \n4. **Hamartom**: vrozená anomálie; přítomnost tkání na správném místě, ale v chybném, chaotickém uspořádání a poměru (např. chondrohamartom plíce - chrupavka, vazivo a epitel). \n5. **Choristom**: heterotopie; přítomnost normálně diferencované tkáně v cizím orgánu (např. ložisko slinivky ve stěně žaludku).",
      macroscopy: "Nodulární, ohraničené uzly, cystické dutiny vyplněné žlutým, bílým či čirým obsahem. Např. keloid (vyvýšená, tuhá, červenorůžová jizva přesahující okraje původní rány).",
      microscopy: "Mikroskopická struktura je zralá, uspořádaná, buňky nevykazují cytologické atypie, pleomorfismus ani patologické mitózy. U hamartomu vidíme zralé tkáně (např. tuk, cévy, chrupavka) poskládané bez organické architektury. U cyst nacházíme epitelovou výstelku (dlaždicový, cylindrický epitel) a vazivovou stěnu.",
      clinical: "Klinický význam spočívá v diferenciální diagnóze (odlišení od maligního nádoru). Často vyžadují histologické vyšetření k vyloučení neoplazie. Většinou se řeší prostou excizí a nerecidivují."
    },
    quiz: [
      {
        question: "Co je to hamartom?",
        options: [
          "Zhoubný nádor z cévního endotelu",
          "Vrozený pseudotumor, který představuje chaotické, nepravidelné uspořádání zralých tkání na místě, kde se tyto tkáně běžně vyskytují (např. chondrohamartom plíce)",
          "Přítomnost normální tkáně v nenormálním orgánu (např. žaludeční sliznice v Meckelově divertiklu)",
          "Dutina vyplněná hnisem"
        ],
        correct: 1,
        explanation: "Hamartom je vrozená tkáňová anomálie. Skládá se ze zralých struktur, které jsou pro daný orgán typické, ale jsou pomíchány v chaotický uzel (např. v plíci směs chrupavky, hladké svaloviny a průduškového epitelu)."
      },
      {
        question: "Co je to choristom (heterotopie)?",
        options: [
          "Nádor vzniklý po ozáření",
          "Vrozená přítomnost mikroskopicky normální tkáně v neobvyklé anatomické lokalizaci, kde se normálně nevyskytuje (např. okrsek pankreatu ve stěně žaludku)",
          "Jizva po popálení",
          "Zánětlivý polyp v nose"
        ],
        correct: 1,
        explanation: "Choristom (nebo heterotopie) je přítomnost normální tkáně mimo její obvyklé místo. Tkáň je histologicky zcela zralá a funkční, ale nachází se v cizím orgánu (např. buňky slinivky břišní ve stěně dvanáctníku)."
      }
    ,
      {
        question: "Jak se nazývá vrozený pseudotumor tvořený chaotickou směsí zralých tkání v orgánu, kde se tyto tkáně běžně vyskytují?",
        type: "type-in",
        correct: ["hamartom"],
        explanation: "Hamartom je vrozená tkáňová anomálie, kde jsou zralé tkáně přítomny na správném místě, ale v chaotickém uspořádání."
      },
      {
        question: "Jak se nazývá přítomnost mikroskopicky normální tkáně v neobvyklé lokalizaci, kde se běžně nevyskytuje?",
        type: "type-in",
        correct: ["choristom", "heterotopie"],
        explanation: "Choristom (heterotopie) představuje nález zralé tkáně v abnormálním místě (např. ložisko slinivky ve stěně žaludku)."
      }]
  },

  {
    id: "onco-4",
    title: "Biologická povaha nádorů – dělení",
    section: "Obecná onkologie",
    category: "Onkologie",
    keywords: ["benigní", "maligní", "hranice", "semimaligní", "potenciál", "invaze", "metastázy"],
    content: {
      definition: "Podle biologické povahy a klinického průběhu dělíme pravé nádory do tří hlavních skupin: benigní (nezhoubné), maligní (zhoubné) a nádory s hraniční malignitou (borderline / semimaligní).",
      etiology: "Genetické mutace ovlivňující invazivitu buněk, adhezivní molekuly (ztráta E-cadherinů) a schopnost metastázovat (neoangiogeneze, sekrece metaloproteináz).",
      pathogenesis: "1. **Benigní**: rostou expanzivně (utlačují okolí, mívají vazivové pouzdro), neinvadují, nemetastázují, buňky jsou vysoce diferencované a podobné výchozí tkáni. \n2. **Maligní**: rostou invazivně a destruktivně (prorůstají do okolí, ničí ho), zakládají dceřiná ložiska (metastázy), vykazují různý stupeň anaplázie (ztráty diferenciace). \n3. **Semimaligní / Borderline**: rostou lokálně invazivně a destruktivně, ale prakticky nikdy nemetastázují (např. bazaliom kůže, ameloblastom čelisti). \n4. **Potenciálně maligní**: benigní vzhled, ale biologicky nepředvídatelné (např. gastrointestinální stromální tumor - GIST).",
      macroscopy: "Benigní: ohraničené, kulaté, pohyblivé proti okolí, často opouzdřené, na řezu homogenní. Maligní: neohraničené, s nepravidelnými okraji, pevně fixované k okolí, na řezu nehomogenní, s ložisky nekróz a krvácení.",
      microscopy: "Benigní: monomorfní buňky bez atypií, normální struktura, vzácné a typické mitózy. Maligní: pleomorfismus (různorodost tvaru buněk a jader), hyperchromazie jader, vysoký nukleoplasmový poměr (velká jádra), patologické mitózy (třípólové atd.), prorůstání bazální membrány a invaze do cév (angioinvaze).",
      clinical: "Benigní nádory ohrožují pacienta lokálním útlakem (např. meningiom v lebce) nebo hormonální aktivitou. Maligní nádory vedou bez léčby k destrukci orgánů, kachexii (sešlosti) a smrti. Léčebný přístup se u obou skupin zásadně liší (od prostého sledování po agresivní chemoterapii a resekci)."
    },
    quiz: [
      {
        question: "Jak se chová semimaligní (lokálně destruktivní) nádor, jako je např. bazaliom kůže?",
        options: [
          "Roste expanzivně a tvoří pouzdro",
          "Roste lokálně invazivně a ničí okolní tkáně, ale zakládá metastázy jen zcela výjimečně",
          "Okamžitě metastázuje hematogenní cestou do plic a jater",
          "Není schopen recidivy po odstranění"
        ],
        correct: 1,
        explanation: "Semimaligní nádory (např. bazocelulární karcinom kůže - bazaliom) mají invazivní charakter a lokálně ničí kůži i chrupavku pod ní, čímž napodobují maligní tumory. Jejich výhodou však je, že prakticky nikdy nezakládají vzdálené metastázy."
      },
      {
        question: "Který z následujících růstových znaků je typický pro benigní nádory?",
        options: [
          "Infiltrativní a destruktivní růst do sousedních orgánů",
          "Expanzivní růst, často s vytvořením vazivového pouzdra, které nádor odděluje od okolí",
          "Průnik do lymfatických cév a embolizace do uzlin",
          "Rychlý rozpad s kolikvancí a nekrózou velké části nádoru"
        ],
        correct: 1,
        explanation: "Benigní nádory rostou pomalu a expanzivně (tlačí tkáň před sebou). Okolní zdravé vazivo se tlakem komprimuje a vytváří pouzdro (kapsulu), což usnadňuje chirurgické vyloupnutí (enukleaci) nádoru."
      }
    ,
      {
        question: "Jak se nazývá zhoubný epiteliální nádor obecně?",
        type: "type-in",
        correct: ["karcinom"],
        explanation: "Karcinomy are maligní nádory vycházející z epiteliálních tkání a tvoří většinu lidských zhoubných nádorů."
      },
      {
        question: "Jak se nazývá zhoubný mezenchymální nádor obecně?",
        type: "type-in",
        correct: ["sarkom"],
        explanation: "Sarkomy jsou maligní nádory mezenchymálního původu (vycházející z pojiva, tuku, svalů, kostí či cév)."
      }]
  },

  {
    id: "onco-5",
    title: "Kritéria benignity a malignity nádorů",
    section: "Obecná onkologie",
    category: "Onkologie",
    keywords: ["atypie", "mitóza", "anaplázie", "pleomorfismus", "diferenciace", "metastáza", "invaze"],
    content: {
      definition: "Rozlišení benigního a maligního nádoru je založeno na kombinaci klinických, makroskopických a zejména mikroskopických (histologických a cytologických) kritérií.",
      etiology: "Molekulární podklad: maligní nádory mají mutované geny pro buněčnou adhezi (integriny, cadheriny), zvýšenou expresi metaloproteináz (štěpí stroma) a angiogenních faktorů (VEGF).",
      pathogenesis: "Kritéria dělíme na: \n1. **Klinicko-makroskopická**: Rychlost růstu (benigní pomalý, maligní rychlý), ohraničení (benigní ostré, maligní neostré s infiltrací), metastázy (pouze u maligních). \n2. **Histologická (uspořádání)**: Diferenciace (benigní vyzrálé, maligní vykazují anaplázii - ztrátu diferenciace a polarity buněk). \n3. **Cytologická (vzhled buněk)**: Pleomorfismus (variabilita velikosti a tvaru), hyperchromazie jader (tmavá jádra plná DNA), zvětšená jadérka, patologické mitózy (vícepólové dělení).",
      macroscopy: "Benigní: hladký povrch, lobulární, tuhý nebo elastický, ohraničený od okolí. Maligní: infiltrující prsty do okolí, fixovaný, s ložisky nekrózy (šedavé, rozbředlé), hemoragií (krvavé) a centrální ulcerací (vředy u slizničních karcinomů).",
      microscopy: "Pod mikroskopem hodnotíme gradování (grading - G1-G4). G1 je dobře diferencovaný (podobný mateřské tkáni), G4 je anaplastický (zcela nediferencovaný - nelze určit původ bez IHC). Patognomickým znakem malignity jsou atypické mitózy (tvar Y, kříže) a invaze buněk přes bazální membránu či do cév (angioinvaze).",
      clinical: "Klasifikace TNM (T - tumor, N - nodi, M - metastázy) určuje klinické stadium (staging). Správný grading a staging určují prognózu pacienta a volbu léčebného protokolu (chirurgie, chemoterapie, radioterapie)."
    },
    quiz: [
      {
        question: "Co znamená termín 'anaplázie' u nádorových buněk?",
        options: [
          "Zvýšená citlivost na hormonální léčbu",
          "Ztráta strukturální a funkční diferenciace buněk, kdy se buňky stávají nezralými a nepodobají se původní zdravé tkáni",
          "Ukládání vápníku do stroma nádoru",
          "Zvětšení buněk bez poruchy jejich funkce"
        ],
        correct: 1,
        explanation: "Anaplázie je klasickým znakem zhoubnosti. Znamená to, že buňky ztratily svou specializaci (diferenciaci) a vrátily se do primitivního stadia. Anaplastické nádory jsou vysoce agresivní a k určení jejich původu je nutné použít imunohistochemii."
      },
      {
        question: "Který z následujících mikroskopických nálezů svědčí nejsilněji pro malignitu nádoru?",
        options: [
          "Přítomnost velkého množství zralých kolagenních vláken ve stroma",
          "Přítomnost atypických, vícepólových mitóz a invaze buněk do lymfatických či krevních cév",
          "Monomorfní vzhled buněk s kulatými jádry",
          "Nahromadění tuku v cytoplasmě buněk"
        ],
        correct: 1,
        explanation: "Atypické mitózy (např. tripolární, kvadripolární vřeténka) svědčí o těžké instabilitě genomu. Lymfangioinvaze a angioinvaze (průnik buněk do cév) jsou přímým důkazem schopnosti nádoru metastázovat a šířit se do těla."
      }
    ,
      {
        question: "Jak se latinsky označuje ztráta strukturální a funkční diferenciace buněk v maligním nádoru (kdy se buňky stávají nezralými)?",
        type: "type-in",
        correct: ["anaplázie", "anaplasie"],
        explanation: "Anaplázie je klasickým mikroskopickým znakem malignity, značící ztrátu diferenciace a polarity buněk."
      },
      {
        question: "Která zkratka označuje mezinárodní systém hodnocení rozsahu nádoru (velikost, uzliny, metastázy)?",
        type: "type-in",
        correct: ["TNM"],
        explanation: "Systém TNM (Tumor, Nodus, Metastasis) určuje klinické stadium (staging) a pomáhá zvolit správnou léčbu."
      }]
  },

  {
    id: "onco-6",
    title: "Benigní a maligní epiteliální nádory",
    section: "Epiteliální a mezenchymální nádory",
    category: "Onkologie",
    keywords: ["adenom", "papilom", "karcinom", "adenokarcinom", "dlaždicobuněčný", "metaplázie", "keratinizace"],
    content: {
      definition: "Epiteliální nádory vycházejí z krycího, žlázového nebo uroteliálního epitelu. Benigní se dělí na papilomy a adenomy. Maligní epiteliální nádory se označují jako **karcinomy**.",
      etiology: "Karcinomy jsou nejčastější lidské zhoubné nádory. Příčinou jsou mutace nahromaděné během života vlivem vnějších vlivů (kouření, strava, hormony, záření).",
      pathogenesis: "1. **Benigní**: \n- *Papilom*: roste exofyticky (květákovitě) z krycího epitelu (dlaždicového, urotelu). \n- *Adenom*: ze žlázového epitelu, tvoří tubuly, aciny či cysty (cystadenom). \n2. **Maligní (karcinomy)**: \n- *Dlaždicobuněčný (spinocelulární) karcinom*: vychází z dlaždicového epitelu (nebo metaplastického). Charakteristická je tvorba keratinu. \n- *Adenokarcinom*: vychází ze žlázového epitelu, tvoří abnormální žlázové formace s hlenotvorbou. \n- *Uroteliální karcinom*: z přechodného epitelu močových cest. \n- *Nediferencovaný karcinom*: anaplastický, roste v čepy.",
      macroscopy: "Papilom: bradavičnatý, květákovitý povrch (např. papilom sliznice úst). Adenom: ohraničený uzel (např. folikulární adenom štítné žlázy). Karcinomy: infiltrativní, tuhé uzly, na sliznicích tvoří miskovité vředy se zvýšenými, navalitými okraji (ulcerovaný karcinom).",
      microscopy: "Spinocelulární karcinom: čepy atypických dlaždicových buněk, mezibuněčné můstky (desmosomy), rohovění v centru čepů (růžové vrstvené koule - **rakovinové perly** / keratin pearls). Adenokarcinom: atypické žlázky vystlané polymorfním epitelem s patologickými mitózami, prorůstající do vaziva, průkaz hlenu barvením mucikarmínem nebo PAS.",
      clinical: "Karcinomy metastázují **primárně lymfogenní cestou** do regionálních lymfatických uzlin (později i hematogenně do plic, jater, kostí). Léčba zahrnuje radikální resekci, disekci uzlin, chemoterapii a radioterapii."
    },
    quiz: [
      {
        question: "Jak se nazývá zhoubný epiteliální nádor vycházející ze žlázových buněk?",
        options: [
          "Fibrosarkom",
          "Adenokarcinom",
          "Papilokarcinom",
          "Leiomyom"
        ],
        correct: 1,
        explanation: "Zatímco 'adenom' je benigní nádor ze žlázového epitelu, jeho zhoubný protějšek se označuje jako 'adenokarcinom'. Tvoří patologické žlázové tubuly a aciny."
      },
      {
        question: "Co jsou to 'rakovinové (keratinové) perly' v histologickém řezu?",
        options: [
          "Ložiska vápníku v adenokarcinomu",
          "Kulaté, růžové (eozinofilní) koncentrické formace zrohovatělých buněk (keratinu) uvnitř čepů dlaždicobuněčného (spinocelulárního) karcinomu",
          "Krystaly cholesterolu v cévách",
          "Lymfocyty obklopující nádor"
        ],
        correct: 1,
        explanation: "U dobře a středně diferencovaného dlaždicobuněčného karcinomu se buňky snaží plnit svou původní funkci - tvorbu keratinu (rohovění). Protože však rostou v uzavřených čepech hluboko ve tkáni, keratin se hromadí uprostřed čepů a vytváří koncentrické útvary připomínající perly."
      }
    ,
      {
        question: "Jak se nazývá benigní nádor ze žlázového epitelu?",
        type: "type-in",
        correct: ["adenom"],
        explanation: "Adenomy jsou benigní epiteliální neoplazie, které vytvářejí žlázové formace (tubuly, aciny) nebo cysty."
      },
      {
        question: "Jak se nazývají kulaté růžové koncentrické útvary zrohovatělého keratinu v dlaždicobuněčném karcinomu?",
        type: "type-in",
        correct: ["rakovinové perly", "keratinové perly", "rakovinné perly"],
        explanation: "Rakovinové perly (keratinové perly) jsou typickým znakem dobře diferencovaného dlaždicobuněčného (spinocelulárního) karcinomu."
      }]
  },

  {
    id: "onco-7",
    title: "Benigní a maligní mezenchymální nádory",
    section: "Epiteliální a mezenchymální nádory",
    category: "Onkologie",
    keywords: ["sarkom", "fibrom", "lipom", "leiomyom", "rhabdomyosarkom", "osteosarkom", "hematogenní"],
    content: {
      definition: "Mezenchymální nádory vycházejí z pojivových tkání (vazivo, tuk, chrupavka, kost) a svalové tkáně. Benigní nádory se pojmenovávají příponou **-om** (lipom, leiomyom). Maligní se označují jako **sarkomy** (např. liposarkom).",
      etiology: "Sarkomy jsou u dospělých vzácné (tvoří cca 1 % všech zhoubných nádorů), častější jsou u dětí a mladých dospělých. Vznikají de novo, nikoli zvratem z benigních mezenchymálních nádorů (např. leiomyosarkom nevzniká z leiomyomu).",
      pathogenesis: "Dělení podle tkáně původu: \n- *Vazivo*: Fibrom vs. Fibrosarkom \n- *Tuk*: Lipom vs. Liposarkom \n- *Hladká svalovina*: Leiomyom (velmi častý v děloze) vs. Leiomyosarkom \n- *Kosterní svalovina*: Rhabdomyom vs. Rhabdomyosarkom (agresivní dětský nádor) \n- *Kost*: Osteom vs. Osteosarkom \n- *Chrupavka*: Chondrom vs. Chondrosarkom.",
      macroscopy: "Benigní: dobře ohraničené, často opouzdřené, na řezu homogenní (lipom je žlutý, měkký, lalůčkovitý; leiomyom je bílý, tuhý, se spirálovitou kresbou). Sarkomy: velké, neohraničené, masité konzistence (vzhled rybího masa), s ložisky nekróz, hemoragií a cystické degenerace.",
      microscopy: "Benigní: zralé buňky bez atypií, hojné mezibuněčné stroma (kolagen, tuk). Sarkomy: vysoká buněčnost, anaplastické buňky (vřetenobuněčné, polymorfní), obří mnohojaderné buňky, atypické mitózy. U liposarkomu nacházíme **lipoblasty** (buňky s vakuolami tuku stlačujícími jádro). U osteosarkomu je typická tvorba **osteoidu** přímo nádorovými buňkami.",
      clinical: "Sarkomy se šíří **hematogenní cestou** (nejčastěji metastázují do plic a jater), lymfogenní metastázy jsou vzácné. Rostou velmi agresivně a lokálně recidivují. Léčba vyžaduje širokou chirurgickou excizi a chemoterapii."
    },
    quiz: [
      {
        question: "Jakou cestou se primárně šíří (metastázují) maligní mezenchymální nádory (sarkomy)?",
        options: [
          "Výhradně lymfogenní cestou do uzlin",
          "Hematogenní cestou (krevním oběhem), s nejčastějším výskytem metastáz v plicích",
          "Podél nervových pochev",
          "Pouze přímým přestupem přes pleuru"
        ],
        correct: 1,
        explanation: "Na rozdíl od karcinomů, které se šíří nejprve lymfatickými cestami, sarkomy mají tendenci invadovat přímo do krevního řečiště. Krevní oběh je roznáší do prvního kapilárního filtru, kterým jsou plíce."
      },
      {
        question: "Co je to leiomyom a kde se s ním v lidském těle setkáváme nejčastěji?",
        options: [
          "Maligní nádor z kosterního svalu v končetinách",
          "Benigní nádor z hladké svaloviny, který se extrémně často vyskytuje v děloze (uterinní myom)",
          "Zhoubný nádor z tuku",
          "Nádor z kostní tkáně"
        ],
        correct: 1,
        explanation: "Leiomyom je benigní nádor z buněk hladké svaloviny. Je to nejčastější nádor u žen vůbec, postihuje dělohu (myometrium) u více než 70 % žen ve fertilním věku, kde způsobuje krvácení a neplodnost."
      }
    ,
      {
        question: "Jak se nazývá benigní nádor z buněk hladké svaloviny, velmi častý v děloze?",
        type: "type-in",
        correct: ["leiomyom", "myom"],
        explanation: "Leiomyom je nejčastější benigní nádor z hladké svaloviny. V děloze se označuje také jako děložní myom."
      },
      {
        question: "Jak se nazývá zhoubný mezenchymální nádor z tukové tkáně?",
        type: "type-in",
        correct: ["liposarkom"],
        explanation: "Liposarkom je zhoubný mezenchymální tumor z tukové tkáně, charakteristický výskytem lipoblastů."
      }]
  },

  {
    id: "onco-8",
    title: "Neuroektodermální nádory",
    section: "Epiteliální a mezenchymální nádory",
    category: "Onkologie",
    keywords: ["melanom", "nevus", "gliom", "neuroblastom", "meduloblastom", "S100", "melanin"],
    content: {
      definition: "Neuroektodermální nádory vycházejí z buněk odvozených z neurální trubice nebo z neurální lišty (např. melanocyty, buňky glie, neurony, buňky dřeně nadledvin).",
      etiology: "U melanocytárních: UV záření (slunění, solária). U embryonálních (neuroblastom, meduloblastom): genetické aberace a delece u dětí (např. amplifikace MYCN).",
      pathogenesis: "Dělí se na: \n1. **Melanocytární**: benigní nevi (mateřská znaménka) vs. maligní melanom. \n2. **Gliové (CNS)**: astrocytomy, glioblastom (vychází z neuroektodermu mozku). \n3. **Embryonální**: Meduloblastom (maligní nádor mozečku u dětí), Neuroblastom (z buněk sympatiku, nejčastěji v dřeni nadledvin u dětí). \n4. **Nádory z buněk Schwannových**: Schwannom, Neurofibrom.",
      macroscopy: "Melanocytární: pigmentované (černé, hnědé, pestré) kožní léze s nepravidelnými okraji. Meduloblastom: měkký, šedavý uzel ve vermis mozečku dětí, utlačující 4. komoru. Neuroblastom: velká, prokrvácená tumorózní masa v retroperitoneu (nadledvině) dětí.",
      microscopy: "Melanom: hnízda atypických melanocytů s pigmentem melaninu (lze prokázat barvením podle Masson-Fontany), výrazná exprese markeru **S100**, HMB-45 a Melan-A. Neuroblastom: drobnokulatobuněčný modrý nádor (small round blue cell tumor), buňky tvoří **Homer-Wrightovy rozety** (buňky uspořádané dokola kolem centrálního růžového fibrilárního materiálu).",
      clinical: "Neuroblastom v nadledvině produkuje katecholaminy (jejich metabolity kyselina vanilmandlová - VMA se stanovují v moči). Meduloblastom je vysoce maligní, ale radiocitlivý. Melanom kůže má extrémní metastatický potenciál (lymfogenně i hematogenně)."
    },
    quiz: [
      {
        question: "Co jsou to Homer-Wrightovy rozety a u kterého neuroektodermálního dětského nádoru je nacházíme?",
        options: [
          "Ložiska keratinu u spinocelulárního karcinomu",
          "Kruhovité formace nádorových buněk obklopující centrální růžovou zónu tvořenou neurálními výběžky (neuropilem), typické pro neuroblastom a meduloblastom",
          "Pěnové buňky v ateroskleróze",
          "Uzly v plicích u silikózy"
        ],
        correct: 1,
        explanation: "Homer-Wrightovy rozety jsou klasickým histologickým nálezem u primitivních neuroektodermálních nádorů (neuroblastom, meduloblastom). Nádorové buňky se uspořádají do prstence kolem centrálního ložiska tvořeného proplétajícími se výběžky těchto buněk (neuropilem)."
      },
      {
        question: "Který imunohistochemický marker je vysoce citlivým ukazatelem pro neuroektodermální nádory, zejména melanom a schwannom?",
        options: [
          "Cytokeratin (CK)",
          "Protein S100",
          "Prostatický specifický antigen (PSA)",
          "Desmin"
        ],
        correct: 1,
        explanation: "S100 je kyselý vápník-vázající protein přítomný v buňkách odvozených z neurální lišty (melanocyty, glie, Schwannovy buňky). Imunohistochemický průkaz S100 je klíčový pro potvrzení diagnózy melanomu a schwannomu."
      }
    ,
      {
        question: "Který vápník-vázající protein je citlivým IHC markerem pro buňky odvozené z neurální lišty (např. melanom, schwannom)?",
        type: "type-in",
        correct: ["S100", "protein S100"],
        explanation: "Protein S100 je standardním imunohistochemickým markerem pro neuroektodermální léze (melanocyty, glie, Schwannovy buňky)."
      },
      {
        question: "Jak se nazývá nejčastější maligní neuroektodermální nádor kůže tvořený atypickými melanocyty?",
        type: "type-in",
        correct: ["melanom", "maligní melanom"],
        explanation: "Maligní melanom vychází z melanocytů a vyznačuje se extrémním metastatickým potenciálem."
      }]
  },

  {
    id: "onco-9",
    title: "Carcinoma in situ",
    section: "Obecná onkologie",
    category: "Onkologie",
    keywords: ["carcinoma in situ", "CIS", "bazální", "membrána", "intraepiteliální", "metaplázie", "neinvazivní"],
    content: {
      definition: "Carcinoma in situ (CIS) neboli neinvazivní intraepiteliální karcinom je rané stadium rakoviny, kdy buňky vykazují všechny cytologické znaky malignity (anaplázii, pleomorfismus, patologické mitózy), ale **nerostou infiltrativně a nerespektují basální membránu**.",
      etiology: "Stejná jako u invazivních karcinomů: HPV infekce (děložní hrdlo), UV záření (kůže - Bowenova choroba), kouření (bronchus), chronické podráždění.",
      pathogenesis: "Představuje poslední krok v procesu karcinogeneze před vznikem invazivního karcinomu. Protože bazální membrána je celistvá a v epitelu chybí krevní a lymfatické cévy, CIS **není schopen metastázovat**. Pokud se neodstraní, buňky začnou produkovat metaloproteinázy, naruší bazální membránu a přejdou do invazivního stadia.",
      macroscopy: "Často makroskopicky nenápadný, projevuje se jen jako zhrubnutí sliznice, leukoplakie, zarudnutí (erytroplakie) nebo eroze. Na děložním čípku se detekuje jodovým testem (Schillerův test - dysplastický epitel neobsahuje glykogen a nebarví se hnědě) nebo kolposkopií.",
      microscopy: "Pod mikroskopem nacházíme atypické epitelové buňky v celé šířce (tloušťce) epitelu od bazální vrstvy až k povrchu (ztráta stratifikace). Jádra jsou velká, hyperchromní, mitózy jsou četné a přítomné i v horních vrstvách epitelu. Klíčový je nález **neporušené a celistvé bazální membrány** (zvláštní barvení na retikulin nebo kolagen IV).",
      clinical: "CIS je 100% vyléčitelný včasným lokálním chirurgickým zákrokem. Příkladem je konizace děložního hrdla, lokální excize u Bowenovy choroby kůže nebo transuretrální resekce u CIS močového měchýře. Pacient po výkonu nevyžaduje chemoterapii."
    },
    quiz: [
      {
        question: "Proč není Carcinoma in situ (CIS) schopen zakládat metastázy?",
        options: [
          "Protože jeho buňky neumí přežít v krvi",
          "Protože epitel nemá vlastní cévní ani lymfatické zásobení a buňky nepronikly přes bazální membránu do stroma, kde cévy jsou",
          "Protože roste pouze na kůži",
          "Protože imunitní systém tyto buňky v krvi okamžitě zničí"
        ],
        correct: 1,
        explanation: "Epitel je bezcévná tkáň. Všechny cévy (krevní i lymfatické) se nacházejí pod bazální membránou v pojivovém stroma. Dokud buňky CIS neprotrhnou bazální membránu (čímž by se staly invazivním karcinomem), nemají fyzický přístup k cévám a nemohou se šířit do těla."
      },
      {
        question: "Jak se liší kolposkopický/cytologický nález u těžké dysplázie/CIS děložního čípku při Schillerově testu (potření Lugolovým roztokem)?",
        options: [
          "Oblast s CIS se zbarví sytě černě",
          "Oblast s CIS se nezbarví (zůstane bledá), protože dysplastické buňky ztrácejí glykogen, který Lugolův jód normálně barví mahagonově hnědě",
          "Celá sliznice se rozpustí",
          "Sliznice začne intenzivně krvácet"
        ],
        correct: 1,
        explanation: "Zdravé, zralé dlaždicové buňky děložního čípku obsahují hodně glykogenu. Lugolův roztok (jód) reaguje s glykogenem a barví sliznici do tmavě hnědé barvy. Nádorově změněné buňky (dysplastické/CIS) mají změněný metabolismus, glykogen neobsahují, a proto tato ložiska po potření jódem zůstávají světlá (jód-negativní zóny)."
      }
    ,
      {
        question: "Jak se latinsky nazývá neinvazivní intraepiteliální karcinom, který neprostupuje bazální membránu?",
        type: "type-in",
        correct: ["carcinoma in situ", "CIS"],
        explanation: "Carcinoma in situ (CIS) je neinvazivní nádor bez metastatického potenciálu, protože nedosahuje k cévám ve stroma."
      },
      {
        question: "Jak se nazývá test potření děložního čípku Lugolovým roztokem pro screening dysplázií?",
        type: "type-in",
        correct: ["Schillerův test", "Schillerův"],
        explanation: "Schillerův jódový test detekuje oblasti bez glykogenu (dysplastický epitel zůstane světlý, zdravý se zbarví mahagonově hnědě)."
      }]
  },

  {
    id: "onco-10",
    title: "Leukémie (přehled)",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["leukémie", "blast", "akutní", "chronická", "myeloidní", "lymfoblastická", "dřeň"],
    content: {
      definition: "Leukémie jsou maligní neoplazie krvetvorby vycházející z buněk kostní dřeně, které se vyznačují difuzním nahrazením normální dřeně nádorovými buňkami a jejich vyplavením do periferní krve.",
      etiology: "Chromozomální aberace (např. Filadelfský chromozom), expozice alkylujícím látkám, benzenu, ionizujícímu záření, Downův syndrom.",
      pathogenesis: "Základní dělení je na **akutní** (hromadění nezralých buněk - blastů, rychlý průběh) a **chronické** (hromadění diferencovanějších buněk, pomalý průběh). Dále se dělí na **myeloidní** a **lymfatické**: \n1. **ALL** (Akutní lymfoblastická leukémie): nejčastější u dětí (85 %). \n2. **AML** (Akutní myeloidní leukémie): nejčastější akutní u dospělých. \n3. **CLL** (Chronická lymfocytární leukémie): nejčastější vůbec u starých lidí (nádor z B-lymfocytů). \n4. **CML** (Chronická myeloidní leukémie): spojena s translokací t(9;22) - Filadelfským chromozomem.",
      macroscopy: "Kostní dřeň je hyperplastická, má šedorůžovou nebo žlutavou barvu (hnisavý vzhled - dřeň 'pyoidní'). Splenomegalie (extrémní u CML, kdy slezina váží i 3-5 kg), hepatomegalie a lymfadenopatie (zvětšení uzlin, typické pro CLL). Krvácivé projevy na sliznicích (petechie) a bledost.",
      microscopy: "Kostní dřeň je kompletně buněčná (hypercelulární), tuková tkáň dřeně je vytlačena. U akutních leukémií dominují blasty (> 20 % v kostní dřeni). U AML nacházíme v cytoplasmě blastů růžové jehlicovité struktury - **Auerovy tyčinky** (agregáty granul). U CLL nacházíme v nátěru zralé lymfocyty a křehké stíny rozpadlých buněk - **Gumprechtovy stíny**.",
      clinical: "Příznaky vyplývají ze selhání kostní dřeně: 1. Anémie (únava, dušnost), 2. Neutropenie (těžké infekce, sepse), 3. Trombocytopenie (krvácení z dásní, hematomy). Akutní leukémie vyžadují okamžitou agresivní chemoterapii a transplantaci kostní dřeně."
    },
    quiz: [
      {
        question: "Co jsou to Auerovy tyčinky (Auer rods) a u kterého typu leukémie je nacházíme?",
        options: [
          "Bakterie u tuberkulózy kostí",
          "Jehlicovité, červenorůžové intracytoplasmatické struktury (vzniklé splynutím azurofilních granul) v blastech u Akutní myeloidní leukémie (AML)",
          "Zbytky jader u chronické lymfatické leukémie",
          "Pigmentové inkluze u melanomu"
        ],
        correct: 1,
        explanation: "Auerovy tyčinky jsou patognomické pro myeloidní řadu. Jejich nález v cytoplasmě blastů v nátěru periferní krve či dřeně spolehlivě odlišuje Akutní myeloidní leukémii (AML) od Akutní lymfoblastické leukémie (ALL)."
      },
      {
        question: "Který genetický nález (translokace) definuje Chronickou myeloidní leukémii (CML) a vede ke vzniku fúzního genu BCR-ABL?",
        options: [
          "t(8;14) u Burkittova lymfomu",
          "t(9;22) neboli Filadelfský chromozom (Philadelphia chromosome)",
          "t(11;14) u lymfomu z plášťových buněk",
          "t(15;17) u APML"
        ],
        correct: 1,
        explanation: "CML je charakterizována reciprokou translokací t(9;22). Část protoonkogenu ABL z 9. chromozomu se přenese na 22. chromozom do oblasti genu BCR. Vzniká fúzní gen BCR-ABL, který kóduje trvale aktivní tyrosinkinázu stimulující nekontrolovanou produkci granulocytů."
      }
    ,
      {
        question: "Jak se nazývají růžové jehlicovité struktury v cytoplasmě blastů typické pro akutní myeloidní leukémii (AML)?",
        type: "type-in",
        correct: ["Auerovy tyčinky", "Auerovy tyče"],
        explanation: "Auerovy tyčinky jsou intracytoplasmatické jehlicovité struktury vzniklé splynutím azurofilních granul v myeloidních blastech."
      },
      {
        question: "Která zkratka označuje chromozom vzniklý translokací t(9;22) u CML?",
        type: "type-in",
        correct: ["Filadelfský chromozom", "Philadelphia chromozom", "Ph chromozom"],
        explanation: "Filadelfský chromozom (Ph) obsahuje fúzní gen BCR-ABL s permanentní tyrosinkinázovou aktivitou, což spouští CML."
      }]
  },

  {
    id: "onco-11",
    title: "Hodgkinův lymfom",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["Hodgkin", "lymfom", "Reed", "Sternberg", "Hodgkinovy", "bimodální", "uzliny", "skleróza"],
    content: {
      definition: "Hodgkinův lymfom (HL) je specifický maligní lymfom, který postihuje lymfatické uzliny a vyznačuje se přítomností obřích nádorových buněk (buněk Reedové-Sternberga a buněk Hodgkinových) obklopených reaktivním, nenádorovým zánětlivým doprovodem.",
      etiology: "Silná asociace s infekcí virem Epstein-Barrové (EBV) v cca 40–50 % případů, imunodeficity.",
      pathogenesis: "Nádorové buňky (RS buňky) jsou monoklonální B-lymfocyty, které ztratily schopnost exprese imunoglobulinů a unikají apoptóze. Produkují cytokiny (IL-5, IL-6), které lákají reaktivní buňky (lymfocyty, eosinofily, histiocyty, plazmatické buňky). Zánětlivý infiltrát tvoří 99 % hmoty nádoru, vlastní nádorové buňky tvoří pouze 1–3 %.",
      macroscopy: "Zvětšené, nebolestivé lymfatické uzliny (nejčastěji krční a mediastinální). Uzliny jsou tuhé, na řezu šedobílé, u nodulární sklerózy rozdělené vazivovými zářezy do uzlovitých ložisek. Uzliny nesplývají v jeden paket tak snadno jako u jiných lymfomů.",
      microscopy: "Klíčové nádorové buňky: \n1. **Hodgkinova buňka**: velká, jednojaderná, s obřím eozinofilním jadérkem. \n2. **Buňka Reedové-Sternberga (RS buňka)**: obří, vícejaderná (nebo dvoujaderná), s jádry zrcadlově proti sobě (vzhled **sovích očí**). \n3. **Lakunární buňky** (u typu nodulární skleróza): cytoplasma se při fixaci smrští a buňka vypadá, že leží v prázdné lakuně. \nHlavní subtypy HL: Nodulární skleróza (nejčastější), Smíšená buněčnost, Bohatý na lymfocyty, Lymfocytární deplece (nejhorší prognóza).",
      clinical: "Vyskytuje se v bimodálním věkovém rozložení (vrchol mezi 20.–30. rokem a pak po 60. roce). Projevuje se nebolestivým zvětšením uzlin a **B-příznaky** (horečka, noční pocení, úbytek hmotnosti > 10 %). Má vynikající prognózu, většina pacientů se vyléčí chemoterapií ABVD a radioterapií."
    },
    quiz: [
      {
        question: "Jak vypadá typická buňka Reedové-Sternberga (RS buňka) pod mikroskopem?",
        options: [
          "Je to malý, tmavý lymfocyt s rozpadlým jádrem",
          "Je to obří, dvoujaderná nebo vícejaderná buňka, kde jádra leží vedle sebe se zrcadlovým obrazem a obsahují obrovská, růžová jadérka (vzhled sovích očí)",
          "Jde o buňku vyplněnou hlenovými vakuolami posunujícími jádro k okraji",
          "Je to bezjaderný stín buňky"
        ],
        correct: 1,
        explanation: "RS buňky jsou diagnostickým znakem Hodgkinova lymfomu. Jsou to obří buňky vzniklé endomitózou. Klasická dvoujaderná forma s nápadnými jadérky obklopenými světlým dvorcem připomíná oči sovy (owl-eye appearance)."
      },
      {
        question: "Co tvoří převážnou část (97-99 %) objemu nádorové uzliny u Hodgkinova lymfomu?",
        options: [
          "Čistě nádorové RS buňky bez jiných elementů",
          "Reaktivní, nenádorové pozadí tvořené lymfocyty, plazmatickými buňkami, histiocyty, eosinofilními granulocyty a vazivem",
          "Ložiska hnisu a nekrózy",
          "Kaseózní nekróza a epiteloidní buňky"
        ],
        correct: 1,
        explanation: "Hodgkinův lymfom je v patologii unikátní. Samotných nádorových buněk (Hodgkinových a RS) je v uzlině velmi málo. Tyto buňky však vylučují velké množství cytokinů a chemokinů, které do uzliny přivolají obrovské množství zdravých imunitních buněk, jež tvoří pozadí nádoru."
      }
    ,
      {
        question: "Jak se nazývají diagnostické obří dvoujaderné buňky s jádry vzhledu 'sovích očí' u Hodgkinova lymfomu?",
        type: "type-in",
        correct: ["Reedové-Sternberga buňky", "Reed-Sternbergovy buňky", "RS buňky"],
        explanation: "Buňky Reedové-Sternberga (RS buňky) jsou diagnostické obří buňky Hodgkinova lymfomu, vzniklé endomitózou B-lymfocytů."
      },
      {
        question: "Který virus je silně asociován s rozvojem Hodgkinova lymfomu a Burkittova lymfomu?",
        type: "type-in",
        correct: ["EBV", "Epstein-Barrové virus", "Epstein-Barrové"],
        explanation: "Epstein-Barrové virus (EBV) je onkogenní herpesvirus, který hraje roli v patogenezi několika lymfomů."
      }]
  },

  {
    id: "onco-12",
    title: "Lymfomy z B řady (obecný přehled a patogeneze)",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["B-lymfom", "imunoglobulin", "diferenciace", "folikul", "centrum", "somatické", "translokace"],
    content: {
      definition: "Lymfomy z B řady jsou maligní neoplazie vycházející z různých vývojových stadií B-lymfocytů (od prekurzorů v kostní dřeni až po zralé paměťové B-buňky a plazmatické buňky v periferních lymfatických tkáních).",
      etiology: "Poruchy imunitního systému (autoimunity - Sjögren, celiakie; imunodeficity - HIV), chronické antigení stimulace (H. pylori, virus EBV, virus HCV) a translokace genů.",
      pathogenesis: "B-lymfocyty během svého zrání v zárodečných (germinálních) centrech uzlin procházejí procesem **somatické hypermutace** a **třídového přesmyku** imunoglobulinových genů. Tyto procesy vyžadují cílené štěpení DNA. Pokud dojde k chybě v opravách, vznikají typické onkogenní translokace (např. připojení protoonkogenů pod silný promotor pro těžký řetězec imunoglobulinů IGH). B-lymfomy představují více než 85–90 % všech non-Hodgkinových lymfomů.",
      macroscopy: "Difuzní zvětšení lymfatických uzlin, které často splývají do velkých paketů. Uzliny jsou elastické nebo měkké, na řezu homogenní, rybího vzhledu, šedavé barvy. Postižení mimouzlinových (extragonadálních) orgánů - slezina, játra, zažívací trakt (zejména žaludek).",
      microscopy: "Mikroskopicky dochází k setření normální architektury uzliny (mizí sinusy a zárodečná centra). Nádorové buňky mohou růst **nodulárně** (napodobují folikuly) nebo **difuzně** (homogenní masa buněk). Všechny B-lymfomy vykazují pozitivitu v B-markerech: **CD19, CD20, CD79a** a vykazují klonalitu (exprese pouze lehkého řetězce kappa nebo lambda).",
      clinical: "Projevují se lymfadenopatií (zvětšením uzlin), hepatosplenomegalií a B-příznaky. Diagnostika vyžaduje celou exirpovanou uzlinu (cytologická punkce je pro určení typu lymfomu nedostatečná). Hlavním terapeutickým standardem je imunochemoterapie (např. režim CHOP s protilátkou proti CD20 - **Rituximab**)."
    },
    quiz: [
      {
        question: "Který imunohistochemický marker (povrchový znak) je přítomen na téměř všech zralých B-lymfomech a je cílem cílené biologické léčby Rituximabem?",
        options: [
          "CD3 (marker T-lymfocytů)",
          "CD20",
          "CD15",
          "S100"
        ],
        correct: 1,
        explanation: "CD20 je specifický membránový protein přítomný na B-lymfocytech od stadia pre-B buňky až po zralý lymfocyt (chybí na plazmatických buňkách). Rituximab je monoklonální protilátka proti CD20, která se specificky váže na B-buňky a ničí je."
      },
      {
        question: "Proč vzniká většina lymfomů právě z B-lymfocytů a ne z T-lymfocytů?",
        options: [
          "Protože B-lymfocytů je v těle 1000x více",
          "Protože B-lymfocyty během zrání v zárodečném centru uzliny procházejí přirozeným genetickým štěpením a mutacemi (somatická hypermutace, VDJ rekombinace), což zvyšuje riziko chybné translokace",
          "T-lymfocyty nemohou mutovat",
          "B-lymfocyty jsou napadány bakteriemi"
        ],
        correct: 1,
        explanation: "Zrání B-lymfocytů zahrnuje aktivní procesy modifikace DNA (VDJ rekombinace, somatická hypermutace v germinálním centru a třídový přesmyk). Tyto fyziologické zlomy DNA prováděné enzymem AID (activation-induced cytidine deaminase) jsou náchylné k chybám, které mohou omylem propojit onkogen (např. BCL2 nebo MYC) s promotorem pro imunoglobuliny."
      }
    ,
      {
        question: "Který membránový receptor na zralých B-lymfocytech je hlavním cílem terapeutické protilátky Rituximab?",
        type: "type-in",
        correct: ["CD20"],
        explanation: "CD20 je specifický povrchový marker B-lymfocytů, který slouží jako cíl monoklonální protilátky Rituximabu."
      },
      {
        question: "Jak se nazývá enzym, který spouští somatickou hypermutaci a zlomy DNA v germinálním centru B-buněk, což zvyšuje riziko translokací?",
        type: "type-in",
        correct: ["AID"],
        explanation: "Enzym AID (activation-induced cytidine deaminase) je nezbytný pro somatickou hypermutaci a přesmyk řetězců u B-lymfocytů."
      }]
  },

  {
    id: "onco-13",
    title: "Lymfomy z T řady (obecný přehled a patogeneze)",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["T-lymfom", "timus", "lymfocyty", "epidermotropismus", "sezary", "fungoides", "CD3"],
    content: {
      definition: "Lymfomy z T řady a NK buněk jsou heterogenní skupina maligních neoplazií vycházejících z prekurzorů T-lymfocytů (v thymu) nebo ze zralých periferních T-lymfocytů či NK buněk.",
      etiology: "Infekce virem HTLV-1 (asociace s T-leukémií/lymfomem dospělých), virus EBV (asociace s extranodálním NK/T-lymfomem), celiakie (asociace s enteropatickým T-lymfomem EATL).",
      pathogenesis: "T-lymfomy představují cca 10–15 % non-Hodgkinových lymfomů. Vycházejí z různých subpopulací T-buněk (pomocné CD4+, cytotoxické CD8+, NK buňky). Často vykazují extranodální lokalizaci s afinitou ke kůži (kožní T-lymfomy), zažívacímu traktu nebo nosní dutině. Vykazují agresivní biologické chování s rychlou infiltrací stěn cév (angiodestrukce) a tkáňovou nekrózou.",
      macroscopy: "Extranodální postižení: \n- *Kožní T-lymfomy* (Mycosis fungoides): suchá šupinatá ložiska (plaky) na kůži napodobující ekzém, která přecházejí v uzlovité tumory, které ulcerují. \n- *Enteropatický T-lymfom* (EATL): mnohočetné vředy a perforace v tenkém střevě u celiaků.",
      microscopy: "Setření struktury uzliny s infiltrací pleomorfními T-buňkami (často s nepravidelnými, laločnatými či cerebriformními - vzhled mozku - jádry). U Mycosis fungoides je typický **epidermotropismus** (nádorové T-lymfocyty migrují do epidermis kůže, kde tvoří intraepidermální shluky - **Pautrierovy mikroabscesy**). Imunohistochemické markery T-řady: **CD3, CD2, CD5, CD7, CD4, CD8**.",
      clinical: "Lymfomy z T-řady mají obecně podstatně **horší prognózu** než B-lymfomy a hůře odpovídají na standardní chemoterapii. Sezaryho syndrom je leukemická varianta kožního T-lymfomu (triáda: erytrodermie - zčervenání celého těla, lymfadenopatie a přítomnost Sezaryho buněk s cerebriformními jádry v krvi)."
    },
    quiz: [
      {
        question: "Co je to epidermotropismus a pro který T-lymfom je typický?",
        options: [
          "Růst nádoru v kostní dřeni",
          "Schopnost atypických T-lymfocytů aktivně migrovat do epidermis kůže za vzniku Pautrierových mikroabscesů; typické pro Mycosis fungoides (kožní T-lymfom)",
          "Šíření nádoru podél krevních cév v plicích",
          "Ukládání melaninu do buněk lymfomu"
        ],
        correct: 1,
        explanation: "Mycosis fungoides je primární kožní T-lymfom z pomocných CD4+ lymfocytů. Tyto buňky mají afinitu ke kůži (homing) a pronikají do epidermis (epidermotropismus), kde tvoří drobné shluky buněk (Pautrierovy mikroabscesy), což je histologický diagnostický klíč."
      },
      {
        question: "Který zralý T-lymfom vzniká jako vzácná, ale těžká komplikace u neléčené nebo refrakterní celiakie?",
        options: [
          "Hodgkinův lymfom",
          "Enteropatický T-lymfom asociovaný s enteropatií (EATL)",
          "Folikulární lymfom",
          "Burkittův lymfom"
        ],
        correct: 1,
        explanation: "EATL je agresivní T-lymfom tenkého střeva. Vyvíjí se u pacientů s celiakií (často neléčenou bezlepkovou dietou) z intraepiteliálních T-lymfocytů sliznice střeva. Způsobuje ulcerace, krvácení a nebezpečné perforace střevní stěny."
      }
    ,
      {
        question: "Který CD marker je základním histologickým a imunohistochemickým ukazatelem přítomnosti T-lymfocytů?",
        type: "type-in",
        correct: ["CD3"],
        explanation: "CD3 je antigen asociovaný s T-buněčným receptorem (TCR) a je univerzálním markerem pro zralé T-lymfocyty."
      },
      {
        question: "Který virus je původcem T-leukémie/lymfomu dospělých (ATLL)?",
        type: "type-in",
        correct: ["HTLV-1", "HTLV 1"],
        explanation: "HTLV-1 (Human T-cell Leukemia Virus type 1) je retrovirus spojený s rozvojem endemické leukémie/lymfomu z T-buněk."
      }]
  },

  {
    id: "onco-14",
    title: "Non-Hodgkinovy lymfomy z B řady",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["NHL", "DLBCL", "folikulární", "Burkitt", "starry", "sky", "CLL", "BCL2", "MYC"],
    content: {
      definition: "Non-Hodgkinovy lymfomy (NHL) z B řady jsou různorodá skupina B-lymfoproliferativních onemocnění s vyloučením Hodgkinova lymfomu. Dělí se na indolentní (pomalé) a agresivní (rychle progredující).",
      etiology: "Chromozomální translokace: t(14;18) u folikulárního lymfomu; t(8;14) u Burkittova lymfomu; t(11;14) u lymfomu z plášťových buněk.",
      pathogenesis: "1. **DLBCL** (Difuzní velkobuněčný B-lymfom): nejčastější agresivní B-NHL. Rychlý růst, mutace BCL6. \n2. **Folikulární lymfom**: nejčastější indolentní B-NHL. Translokace t(14;18) spojuje protoonkogen **BCL2** s promotorem IGH, což vede k nadprodukci proteinu BCL2. BCL2 blokuje apoptózu, takže buňky neumíratelně přežívají. \n3. **Burkittův lymfom**: extrémně agresivní. Translokace t(8;14) aktivuje onkogen **MYC** (regulátor buněčného cyklu), což vede k nejrychlejšímu dělení buněk u lidských nádorů (mitotický index 100 %). Spojen s EBV.",
      macroscopy: "Zvětšené uzliny splývající do masivních konglomerátů (paketů). V GIT (časté u DLBCL) tvoří velké tumorózní masy, které mohou způsobit střevní obstrukci nebo ulcerace.",
      microscopy: "DLBCL: difuzní růst velkých buněk (3-4x větších než normální lymfocyt) s atypickými jádry a jadérky. Folikulární l.: nodulární (folikulární) uspořádání, chybí polarizace folikulů a chybí makrofágy (rozdíl od reaktivní hyperplazie). Burkittův l.: difuzní infiltrace středně velkých buněk s vysokou mitotickou aktivitou a četnými makrofágy fagocytujícími apoptotické buňky, což pod mikroskopem při slabém zvětšení vytváří obraz **hvězdného nebe** (starry sky appearance).",
      clinical: "Indolentní lymfomy (folikulární) jsou v době diagnózy často generalizované, rostou pomalu, jsou nevyléčitelné, ale pacienti s nimi žijí řadu let. Agresivní lymfomy (DLBCL, Burkitt) rostou rychle, bez léčby zabíjejí během měsíců, ale jsou citlivé na chemoterapii a lze je vyléčit. Burkittův lymfom se v Africe manifestuje nádory čelisti (endemický typ), v Evropě abdominální masou (sporadický typ)."
    },
    quiz: [
      {
        question: "Který mikroskopický obraz je typický pro Burkittův lymfom?",
        options: [
          "Nodulární (folikulární) uspořádání s jizvením",
          "Obraz 'hvězdného nebe' (starry sky) vytvořený tmavým pozadím nádorových buněk, ve kterém jsou roztroušeny světlé makrofágy s pohlceným buněčným detritem",
          "Přítomnost obřích buněk s jádry vzhledu sovích očí",
          "Záplava eosinofilů a plazmatických buněk"
        ],
        correct: 1,
        explanation: "Burkittův lymfom má extrémní buněčný obrat (všechny buňky se dělí a mnoho jich hyne apoptózou). Světlé makrofágy (hvězdy) pohlcují tyto odumřelé buňky a jsou roztroušeny v temném poli rychle se dělících nádorových lymfocytů (nebe)."
      },
      {
        question: "Co je hlavním patogenetickým důsledkem translokace t(14;18) u folikulárního lymfomu?",
        options: [
          "Nadprodukce inzulínu",
          "Overexprese (nadměrná tvorba) antiapoptotického proteinu BCL2, což zabraňuje přirozené smrti (apoptóze) B-lymfocytů v zárodečných centrech",
          "Okamžitá destrukce kostní dřeně",
          "Ztráta exprese všech B-markerů"
        ],
        correct: 1,
        explanation: "Translokace t(14;18) přenese gen BCL2 z 18. chromozomu za promotor genu IGH (těžký řetězec imunoglobulinu) na 14. chromozomu, který je v B-buňkách trvale aktivní. Nadbytek BCL2 chrání buňky před apoptózou, takže se hromadí (indolentní růst)."
      }
    ,
      {
        question: "Jak se nazývá nejčastější non-Hodgkinův B-lymfom u dospělých, charakteristický rychlým agresivním růstem a velkými buňkami?",
        type: "type-in",
        correct: ["DLBCL", "difuzní velkobuněčný B-lymfom"],
        explanation: "DLBCL (Diffuse Large B-Cell Lymphoma) představuje nejčastější agresivní non-Hodgkinův lymfom dospělého věku."
      },
      {
        question: "Jak se nazývá vysoce agresivní dětský B-lymfom spojený s translokací t(8;14) a histologickým obrazem 'hvězdného nebe'?",
        type: "type-in",
        correct: ["Burkittův lymfom", "Burkittův"],
        explanation: "Burkittův lymfom je charakteristický extrémně rychlou proliferací a přítomností makrofágů tvořících obraz 'hvězdného nebe'."
      }]
  },

  {
    id: "onco-15",
    title: "Non-Hodgkinovy lymfomy z T řady",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["T-NHL", "periferní", "anaplastický", "ALK", "mycosis", "erytrodermie", "cerebriformní"],
    content: {
      definition: "Non-Hodgkinovy lymfomy z T řady (T-NHL) představují maligní klonální proliferace zralých (periferních) T-lymfocytů.",
      etiology: "Většina příčin je neznámá. Některé asociace s retroviry (HTLV-1) nebo chronickým poškozením sliznic (celiakie).",
      pathogenesis: "1. **Periferní T-lymfom, blíže neurčený** (PTCL-NOS): nejčastější zralý T-NHL u dospělých. Vysoce agresivní. \n2. **Anaplastický velkobuněčný lymfom** (ALCL): charakterizován přítomností 'hallmark' buněk a často translokací t(2;5) vedoucí k fúzi genu **ALK** (anaplastic lymphoma kinase). ALK+ varianta má u mladých lepší prognózu než ALK-. \n3. **Mycosis fungoides**: primárně kožní T-lymfom postihující epidermis.",
      macroscopy: "PTCL-NOS: generalizovaná lymfadenopatie, splenomegalie, postižení kůže a plic. ALCL: zvětšení uzlin, často kožní uzly. Mycosis fungoides: kožní plaky a nádory, které se rozpadají.",
      microscopy: "PTCL-NOS: výrazný pleomorfismus buněk (malé, střední, obří), reaktivní zánětlivé pozadí (může napodobovat Hodgkinův lymfom). ALCL: velké, pleomorfní buňky s podkovovitými nebo ledvinovitými jádry a světlou zónou u jádra ('hallmark' buňky), imunohistochemicky **CD30 pozitivní** a často ALK pozitivní. Mycosis fungoides: cerebriformní jádra lymfocytů, epidermotropismus.",
      clinical: "T-NHL lymfomy mívají závažný průběh. ALK+ anaplastický lymfom postihuje mladší pacienty a má dobrou šanci na vyléčení chemoterapií. PTCL-NOS má velmi špatnou prognózu s rychlým relapsem. Kožní formy mohou probíhat řadu let indolentně, ale v tumorózním stadiu jsou špatně léčitelné."
    },
    quiz: [
      {
        question: "Který receptor/marker je typicky silně exprimován na buňkách Anaplastického velkobuněčného lymfomu (ALCL) a slouží jako diagnostický znak?",
        options: [
          "CD20 (B-marker)",
          "CD30 (Ki-1 antigen)",
          "CD15",
          "PSA"
        ],
        correct: 1,
        explanation: "CD30 je aktivovaný antigen exprimovaný na anaplastických buňkách ALCL (transmembránový receptor z rodiny TNF). CD30 je přítomen také u Hodgkinova lymfomu, ale ALCL se odlišuje chyběním reaktivního pozadí a specifickými 'hallmark' buňkami."
      },
      {
        question: "Jak se nazývá fúzní protein vznikající translokací t(2;5) u anaplastického velkobuněčného lymfomu (ALCL), jehož přítomnost značí lepší prognózu?",
        options: [
          "BCR-ABL",
          "NPM-ALK",
          "PML-RARA",
          "IgH-BCL2"
        ],
        correct: 1,
        explanation: "Translokace t(2;5) spojuje gen NPM (nucleophosmin) na 5. chromozomu s genem ALK (anaplastic lymphoma kinase) na 2. chromozomu. Fúzní protein NPM-ALK vykazuje stálou tyrosinkinázovou aktivitu. Nádory s tímto proteinem (ALK+) jsou lépe léčitelné než ALK- formy."
      }
    ,
      {
        question: "Jak se nazývá nejčastější kožní T-lymfom projevující se ekzémovými plaky a epidermotropismem?",
        type: "type-in",
        correct: ["mycosis fungoides"],
        explanation: "Mycosis fungoides je primární kožní T-lymfom, u kterého atypické CD4+ buňky migrují do epidermis."
      },
      {
        question: "Jak se nazývají shluky nádorových T-lymfocytů v epidermis kůže u mycosis fungoides?",
        type: "type-in",
        correct: ["Pautrierovy mikroabscesy", "Pautrierovy"],
        explanation: "Pautrierovy mikroabscesy jsou intraepidermální shluky nádorových T-buněk, typické pro histologický obraz mycosis fungoides."
      }]
  },

  {
    id: "onco-16",
    title: "Plazmocytom, myelom",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["myelom", "plazmocytom", "kost", "osteolýza", "Bence", "Jones", "monoklonální", "M-gradient"],
    content: {
      definition: "Mnohočetný myelom (Kahlerova choroba) je maligní tumorózní proliferace plazmatických buněk v kostní dřeni, která produkuje monoklonální imunoglobulin (tzv. M-protein / paraprotein) a vede k destrukci kostí.",
      etiology: "Neznámá. Roli hrají genetické změny (translokace genu IGH) a stimulace růstovým faktorem IL-6 (hlavní přežívací faktor plazmatických buněk).",
      pathogenesis: "Nádorové plazmatické buňky v kostní dřeni produkují cytokiny (MIP-1a), které stimulují osteoklasty (buňky odbourávající kost) a inhibují osteoblasty (tvorbu kosti). Dochází k masivní **osteolýze** (rozpouštění kosti), což uvolňuje vápník do krve (hyperkalcémie). Nadbytek lehkých řetězců imunoglobulinů (paraproteinu) poškozuje ledviny - vylučují se močí jako **Bence-Jonesova bílkovina**.",
      macroscopy: "Kosti (lebka, páteř, žebra) obsahují mnohočetná ložiska osteolýzy, která vypadají jako ostře vyseknuté, kruhové otvory (vzhled **prostříleného plechu** / punched-out lesions). Hrozí patologické zlomeniny obratlů. Ledviny jsou bledé, zvětšené (myelomová ledvina).",
      microscopy: "Kostní dřeň je infiltrována plazmatickými buňkami (plazmocyty s excentricky uloženým kulatým jádrem s chromatinem uspořádaným jako loukoťové kolo a širokou bazofilní cytoplasmou s prosvětlením - Golgiho zónou). Vyskytují se atypické formy (vícejaderné). V ledvinných tubulech nacházíme tvrdé, eosinofilní (růžové) proteinové odlitky (paraprotein) obklopené obřími buňkami z cizích těles (**myelomová nefróza**).",
      clinical: "Klinické projevy (akronym **CRAB**): \n- **C** (Calcium): hyperkalcémie (zácpa, zmatenost), \n- **R** (Renal): selhání ledvin (tubulární poškození paraproteinem), \n- **A** (Anemia): selhání dřeně infiltrátem, \n- **B** (Bone): bolesti kostí a patologické fraktury. V elektroforéze séra nacházíme vysoký úzký pík - **M-gradient**."
    },
    quiz: [
      {
        question: "Co je to Bence-Jonesova bílkovina?",
        options: [
          "Bílkovina tvořící amyloid v mozku",
          "Volné lehké řetězce (kappa nebo lambda) imunoglobulinů produkované nádorovými plazmocyty, které se pro malou velikost filtrují v glomerulech a nacházejí se v moči u pacientů s myelomem",
          "Enzym štěpící chrupavku",
          "Nádorový marker produkovaný karcinomem prsu"
        ],
        correct: 1,
        explanation: "Mnohočetný myelom produkuje kompletní imunoglobuliny nebo jen jejich části. Volné lehké řetězce (Bence-Jonesova bílkovina) snadno procházejí ledvinným filtrem do moči, kde se dají detekovat (zahřívacím testem nebo imunofixací) a představují těžké riziko pro ucpání a poškození tubulů ledvin."
      },
      {
        question: "Jak se makroskopicky projevuje destrukce kostí u mnohočetného myelomu (např. na RTG lebky)?",
        options: [
          "Tvorbou velkých kostních výrůstků (osteofytů)",
          "Mnohočetnými ostře ohraničenými ložisky osteolýzy bez reaktivní novotvorby kosti (vzhled 'prostříleného plechu')",
          "Difuzním ztluštěním a zahuštěním kostní tkáně (osteoskleróza)",
          "Kostí prorůstají chrupavčité uzly"
        ],
        correct: 1,
        explanation: "Osteoklasty aktivované myelomem rozpouštějí kostní tkáň lokálně. Na RTG snímcích kostí (typicky plochých kostí jako je lebka) to vytváří charakteristická ložiska chybějící kosti, která vypadají jako čistě vyseknutá děrovačkou."
      }
    ,
      {
        question: "Jak se nazývá protein (volné lehké řetězce Ig) vylučovaný do moči u pacientů s mnohočetným myelomem?",
        type: "type-in",
        correct: ["Bence-Jonesova bílkovina", "Bence-Jonesův protein", "Bence Jones protein"],
        explanation: "Bence-Jonesova bílkovina představuje monoklonální volné lehké řetězce imunoglobulinů (kappa/lambda), které mohou poškodit tubuly ledvin."
      },
      {
        question: "Jak se označuje ložiskové prořídnutí kostí u myelomu na rentgenu lebky (vzhled prostřílené lebky)?",
        type: "type-in",
        correct: ["osteolýza", "osteolytická ložiska", "osteolytické ložisko"],
        explanation: "Nádorové plazmatické buňky produkují faktory aktivující osteoklasty, což vede k rozpadu kosti (osteolýze)."
      }]
  },

  {
    id: "onco-17",
    title: "Nádory cév",
    section: "Nádory srdce a cév",
    category: "Onkologie",
    keywords: ["hemangiom", "angiosarkom", "Kaposi", "kapilární", "kavernózní", "endotel", "HHV8"],
    content: {
      definition: "Nádory cév vycházejí z endoteliálních buněk (krevních či lymfatických cév) nebo z buněk obklopujících cévy (pericyty). Dělí se na benigní (hemangiomy, lymfangiomy), intermediární (Kaposiho sarkom) a maligní (angiosarkomy).",
      etiology: "Hemangiomy jsou často vrozené (dětské jahodové hemangiomy). Kaposiho sarkom je vyvolán lidským herpesvirem 8 (**HHV-8**) v terénu oslabené imunity (AIDS). Angiosarkomy mohou vzniknout po ozáření (např. po léčbě karcinomu prsu) nebo po expozici vinylchloridu v játrech.",
      pathogenesis: "1. **Benigní**: \n- *Kapilární hemangiom*: nejčastější, tvořený klubíčky tenkostěnných kapilár. \n- *Kavernózní hemangiom*: tvořen velkými, krví naplněnými prostorami. Častý v játrech. \n2. **Intermediární**: \n- *Kaposiho sarkom*: low-grade maligní cévní tumor, u pacientů s HIV/AIDS. \n3. **Maligní**: \n- *Angiosarkom*: vysoce agresivní, špatně diferencovaný nádor z endotelu.",
      macroscopy: "Kapilární hemangiom: červený až fialový uzlík na kůži (hemangiom jahodový u dětí). Kavernózní hemangiom jater: tmavě červený, měkký, ohraničený uzel pod pouzdrem jater, hrozí krvácením při biopsii jehlou. Kaposiho sarkom: červenofialové skvrny, plaky a uzly na kůži končetin, patře a v GIT. Angiosarkom: neohraničená, masivní krvavá ložiska.",
      microscopy: "Hemangiomy: zralé cévní prostory vystlané plochým, jednovrstevným endotelem bez atypií. Angiosarkom: divoká anastomozující síť cévních štěrbin, lemovaná atypickými, polymorfními endoteliemi, které vyčnívají do lumen. Prokazuje se markerem **CD31** nebo faktorem VIII.",
      clinical: "Kavernózní hemangiomy jsou většinou asymptomatické a nacházejí se jako náhodný nález na ultrazvuku jater. Kaposiho sarkom u AIDS reaguje na antiretrovirovou terapii (HAART). Angiosarkom je extrémně agresivní a prognóza je velmi nepříznivá."
    },
    quiz: [
      {
        question: "Který virus je přímým původcem Kaposiho sarkomu u pacientů s AIDS?",
        options: [
          "Lidský papillomavirus (HPV)",
          "Lidský herpesvirus 8 (HHV-8 neboli KSHV)",
          "Epstein-Barrové virus (EBV)",
          "Virus hepatitidy C (HCV)"
        ],
        correct: 1,
        explanation: "HHV-8 (herpesvirus asociovaný s Kaposiho sarkomem) infikuje endotelové buňky a buňky vřetenovité. V přítomnosti imunitního deficitu (AIDS) vir produkuje proteiny stimulující proliferaci cév a zánět, což vede ke vzniku nádorových plaků a uzlů."
      },
      {
        question: "Který specifický endoteliální marker se používá v imunohistochemii k potvrzení cévního původu nádoru (např. angiosarkomu)?",
        options: [
          "Desmin",
          "CD31 (nebo CD34 / von Willebrandův faktor)",
          "Cytokeratin",
          "Chromogranin"
        ],
        correct: 1,
        explanation: "CD31 je adhezivní molekula endotelových buněk (PECAM-1). Její imunohistochemický průkaz na membráně nádorových buněk spolehlivě potvrzuje, že anaplastický nádor vychází z endotelu cév."
      }
    ,
      {
        question: "Jak se nazývá benigní nádor z krevních cév?",
        type: "type-in",
        correct: ["hemangiom"],
        explanation: "Hemangiom je velmi častý benigní nádor z cévního endotelu, vyskytující se na kůži, sliznicích nebo v játrech."
      },
      {
        question: "Jak se nazývá maligní cévní nádor typický pro pacienty s AIDS, vyvolaný virem HHV-8?",
        type: "type-in",
        correct: ["Kaposiho sarkom", "Kaposiho"],
        explanation: "Kaposiho sarkom je vřetenobuněčný nádor z cévního endotelu, vyvolaný lidským herpesvirem 8 (HHV-8) u oslabených pacientů."
      }]
  },

  {
    id: "onco-18",
    title: "Nádory srdce",
    section: "Nádory srdce a cév",
    category: "Onkologie",
    keywords: ["myxom", "rhabdomyom", "srdce", "metastázy", "síň", " Carney"],
    content: {
      definition: "Nádory srdce se dělí na primární (velmi vzácné, většinou benigní) a sekundární (metastatické, mnohonásobně častější). Nejčastějším primárním nádorem u dospělých je myxom síně, u dětí rhabdomyom.",
      etiology: "Myxom: většinou sporadický, v 10 % součástí dědičného syndromu (Carneyův komplex). Rhabdomyom: silná asociace s **tuberózní sklerózou** (genetické onemocnění s mutací TSC1/TSC2). Metastázy: nejčastěji sem metastázuje karcinom plic, prsu, melanom a lymfomy.",
      pathogenesis: "Myxom: vychází z multipotentních mezenchymálních buněk subendokardu. Rhabdomyom: je považován spíše za hamartom než za pravou neoplazii, představuje uzly nezralých srdečních svalových buněk.",
      macroscopy: "Myxom: v 90 % roste v **levé síni** (přisedlý k fossa ovalis), má polypózní, želatinózní (rosolovitý), žlutavý vzhled, často stopkatý, hrozí jeho uvolnění nebo ucpání mitrální chlopně. Rhabdomyom: šedobílé, pevné uzly ve stěně komor srdce novorozenců.",
      microscopy: "Myxom: chudobuněčný, tvořený hlenovitou (myxoidní) kyselou matrix bohatou na kyselé mukopolysacharidy, v níž jsou roztroušeny hvězdicovité nebo vřetenovité myxomové buňky tvořící hnízda či prstence. Rhabdomyom: velké buňky plné glykogenu, cytoplasma je stažena k okrajům a jádro visí uprostřed na jemných svalových vláknech (tzv. **pavoukovité buňky** / spider cells).",
      clinical: "Myxom levé síně se klinicky projevuje: 1. Embolizací (kousky želatinózní tkáně nebo nasedající tromby se uvolní do mozku a způsobí CMP), 2. Obstrukcí chlopně (stopkatý myxom funguje jako ventil, při změně polohy těla ucpe mitrální ústí -> synkopa, náhlá dušnost). Rhabdomyom u dětí často spontánně regreduje (zmenší se)."
    },
    quiz: [
      {
        question: "Kde v srdci se nejčastěji nachází benigní myxom u dospělých?",
        options: [
          "V pravé komoře",
          "V levé síni (přisedlý stopkou k přepážce v oblasti fossa ovalis)",
          "Na aortální chlopni",
          "V hrotu levé komory"
        ],
        correct: 1,
        explanation: "Myxom má výraznou predilekci pro levou síň (cca 75-80 % případů). Protože roste jako stopkatý rosolovitý polyp, může se při stahu síně pohybovat skrz mitrální chlopeň a mechanicky blokovat průtok krve."
      },
      {
        question: "Co jsou to 'pavoukovité buňky' (spider cells) a u kterého srdečního tumoru je nacházíme?",
        options: [
          "Atypické lymfocyty u Hodgkinova lymfomu",
          "Velké kardiomyocyty s cytoplasmou staženou do tenkých vláken vedoucích k jádru, vyplněné glykogenem; typické pro rhabdomyom u dětí",
          "Nádorové buňky cévního angiosarkomu",
          "Buňky tvořící amyloid"
        ],
        correct: 1,
        explanation: "U rhabdomyomu srdce (často spojeného s tuberózní sklerózou) jsou buňky plné glykogenu, který se při zpracování rozpustí. Cytoplasmatické výběžky vybíhající z jádra k sarkolemě pak pod mikroskopem připomínají pavoučí nohy, odtud název pavoukovité buňky."
      }
    ,
      {
        question: "Jak se nazývá nejčastější benigní nádor srdce, lokalizovaný typicky v levé síni?",
        type: "type-in",
        correct: ["myxom", "myxom srdce"],
        explanation: "Myxom je nejčastější primární tumor srdce u dospělých. Vychází z mezenchymu a tvoří stopkatou rosolovitou masu v levé síni."
      },
      {
        question: "Jak se nazývá benigní nádor ze svaloviny srdce, asociovaný s tuberózní sklerózou u dětí?",
        type: "type-in",
        correct: ["rhabdomyom", "rhabdomyom srdce"],
        explanation: "Rhabdomyom je nejčastější primární tumor srdce u kojenců a dětí, úzce spojený s genetickým syndromem tuberózní sklerózy."
      }]
  },

  {
    id: "onco-19",
    title: "Nádory plic",
    section: "Nádory hrudníku a srdce",
    category: "Onkologie",
    keywords: ["karcinom", "plíce", "malobuněčný", "nemalobuněčný", "kouření", "epidermoidní", "adenokarcinom"],
    content: {
      definition: "Karcinomy plic (bronchogenní karcinom) jsou jedny z nejčastějších a nejsmrtelnějších malignit na světě. Dělí se na dvě hlavní skupiny: malobuněčný karcinom (SCLC, 15 %) a nemalobuněčné karcinomy (NSCLC, 85 %).",
      etiology: "Kouření tabáku (způsobuje 85–90 % případů, riziko stoupá s počtem vykouřených cigaret), expozice radonu, azbestu a znečištěné ovzduší.",
      pathogenesis: "1. **Malobuněčný karcinom** (SCLC): vychází z neuroendokrinních buněk bronchů. Extrémně agresivní, rychle metastázuje, silná asociace s kouřením. Produkuje hormony (paraneoplastické syndromy). \n2. **Nemalobuněčné karcinomy** (NSCLC): \n- *Dlaždicobuněčný (epidermoidní) karcinom*: roste centrálně v hlavních bronších, předchází mu dlaždicová metaplazie epitelu u kuřáků. \n- *Adenokarcinom*: roste periferně v plicním parenchymu, nejčastější karcinom u nekuřáků a u žen.",
      macroscopy: "Centrální karcinomy (dlaždicobuněčný, malobuněčný): tuhá, šedobílá masa vycházející z bronchu u hilu, zužuje lumen (atelektáza za překážkou), prorůstá do mediastina a uzlin. Periferní (adenokarcinom): uzel pod pleurou, často vtahuje pleuru dovnitř (pleurální svraštění).",
      microscopy: "Spinocelulární k.: keratinizace (perly), mezibuněčné můstky. Adenokarcinom: žlázové formace, mucinózně pozitivní, často pozitivní marker **TTF-1**. Malobuněčný k.: drobné buňky (2-3x větší než lymfocyt) s minimem cytoplasmy, tmavými jádry bez jadérek (vzhled **ovesných zrn** / oat cells), typický fenomén **Azzopardiho** (inkrustace cévních stěn DNA z rozpadlých buněk).",
      clinical: "Projevuje se chronickým kašlem (změna charakteru kašle u kuřáka), hemoptýzou (vykašlávání krve), dušností a syndromem horní duté žíly (útlak mediastina). Malobuněčný karcinom se v době diagnózy považuje za generalizovaný, neléčí se chirurgicky, ale chemoterapií. NSCLC se v časném stadiu operují."
    },
    quiz: [
      {
        question: "Který typ plicního karcinomu je typický pro nekuřáky a ženy, a roste převážně v periferii plic?",
        options: [
          "Malobuněčný karcinom",
          "Dlaždicobuněčný (spinocelulární) karcinom",
          "Adenokarcinom",
          "Karcinoid"
        ],
        correct: 2,
        explanation: "Adenokarcinom je nejčastějším typem plicního karcinomu u nekuřáků. Roste na rozdíl od centrálních karcinomů (dlaždicobuněčného a malobuněčného) v periferních částech plicního parenchymu, často v oblasti jizev."
      },
      {
        question: "Co je to Azzopardiho fenomén a u kterého vysoce maligního plicního nádoru ho nacházíme?",
        options: [
          "Keratinizace buněk u spinocelulárního karcinomu",
          "Inkrustace stěn cév uvolněnou bazofilní DNA z rozpadlých nádorových buněk, typická pro malobuněčný karcinom plic",
          "Ukládání amyloidu do pleury",
          "Tvorba hlenu v adenokarcinomu"
        ],
        correct: 1,
        explanation: "Malobuněčný karcinom má extrémně vysokou míru buněčného rozpadu. Uvolněná nukleová kyselina (DNA) z rozpadlých jader inkrustuje (potahuje) stěny přilehlých krevních cév, což se mikroskopicky projevuje intenzivním tmavě modrým (bazofilním) zbarvením cévní stěny (Azzopardiho efekt)."
      }
    ,
      {
        question: "Který typ karcinomu plic je nejsilněji spojen s kouřením a má neuroendokrinní diferenciaci a velmi špatnou prognózu?",
        type: "type-in",
        correct: ["malobuněčný karcinom", "malobuněčný plicní karcinom", "SCLC"],
        explanation: "Malobuněčný karcinom plic (SCLC) je agresivní neuroendokrinní nádor s časným metastázováním a silným sklonem k paraneoplaziím."
      },
      {
        question: "Který typ karcinomu plic vzniká periferně (často v jizvách) a je nejčastější u nekuřáků a žen?",
        type: "type-in",
        correct: ["adenokarcinom", "adenokarcinom plic"],
        explanation: "Adenokarcinom plic je dnes nejčastějším histologickým typem plicního karcinomu, typicky lokalizovaným v periferii."
      }]
  },

  {
    id: "onco-20",
    title: "Nádory pleury",
    section: "Nádory hrudníku a srdce",
    category: "Onkologie",
    keywords: ["pleura", "mezoteliom", "azbest", "výpotek", "bifázický", "pohrudnice"],
    content: {
      definition: "Nádory pleury mohou být sekundární (metastázy karcinomů plic, prsu - nejčastější) nebo primární, z nichž nejvýznamnější je maligní mezoteliom pleury.",
      etiology: "Maligní mezoteliom je v 80–90 % případů spojen s profesní nebo ekologickou expozicí **azbestu**. Latence mezi expozicí a vznikem nádoru je velmi dlouhá (20–50 let). Kouření nezvyšuje riziko mezoteliomu (ale v kombinaci s azbestem dramaticky zvyšuje riziko karcinomu plic).",
      pathogenesis: "Vdechnutá jehlicovitá vlákna azbestu (zejména amfibolový typ) migrují do pleurální dutiny, kde vyvolávají chronický zánět, tvorbu reaktivních kyslíkových druhů (ROS) a přímé poškození mezotelových buněk, což vede k jejich transformaci.",
      macroscopy: "Nádor začíná jako drobné uzlíky na parietální pleuře. Postupně splývá a vytváří tlustý, tuhý, šedobílý plášť (pancíř), který obaluje celou plíci, stlačuje ji (způsobuje kolaps) a šíří se do perikardu a bránice. Bývá provázen masivním, často krvavým pleurálním výpotkem.",
      microscopy: "Maligní mezoteliom má typický **bifázický vzhled** (obsahuje epiteloidní a sarkomatoidní komponentu). Epiteloidní typ (nejčastější) tvoří tubuly a papily napodobující adenokarcinom (diferenciální diagnóza se provádí imunohistochemicky: mezoteliom je pozitivní na **calretinin, WT-1 a cytokeratin 5/6**, ale negativní na CEA a TTF-1).",
      clinical: "Projevuje se dušností (z útlaku plíce a výpotku) a krutou bolestí na hrudi (infiltrace mezižeberních nervů). Nádor je extrémně agresivní, špatně reaguje na léčbu a většina pacientů umírá do 1 roku od diagnózy."
    },
    quiz: [
      {
        question: "Která minerální noxa je hlavním rizikovým faktorem pro vznik maligního mezoteliomu pleury?",
        options: [
          "Křemenný prach (SiO2)",
          "Uhelný prach",
          "Azbest (azbestová vlákna)",
          "Výpary z olova"
        ],
        correct: 2,
        explanation: "Azbest je prokázaný lidský karcinogen s afinitou k pleuře. Jehlicovitá vlákna azbestu se nedokážou v plicích odbourat, mechanicky a chemicky dráždí mezotelové buňky po desítky let, což vyústí v maligní mezoteliom."
      },
      {
        question: "Který imunohistochemický marker se používá k odlišení epiteloidního mezoteliomu pleury od metastázy adenokarcinomu plic?",
        options: [
          "TTF-1",
          "Calretinin (a cytokeratin 5/6)",
          "PSA",
          "Desmin"
        ],
        correct: 1,
        explanation: "Calretinin je protein vázající vápník, který je vysoce specifický pro buňky mezotelu a nádory z nich vycházející (mezoteliomy). Naopak adenokarcinom plic je calretinin-negativní a TTF-1 pozitivní, což patologovi umožňuje tyto dva strukturálně podobné nádory odlišit."
      }
    ,
      {
        question: "Jak se nazývá vysoce maligní nádor pleury, jehož hlavním vyvolávajícím faktorem je inhalace azbestu?",
        type: "type-in",
        correct: ["mezoteliom", "maligní mezoteliom pleury", "maligní mezoteliom"],
        explanation: "Maligní mezoteliom pohrudnice (pleury) je nepříznivý nádor s dlouhou latencí expozice azbestovým vláknům."
      },
      {
        question: "Jak se nazývá přítomnost tekutiny v pohrudniční dutině, která doprovází nádory pleury?",
        type: "type-in",
        correct: ["fluidothorax", "pleurální výpotek", "hydrothorax"],
        explanation: "Pleurální výpotek (fluidothorax) je častým průvodním jevem a příznakem nádorů pleury či plic, který utlačuje plíci."
      }]
  },

  {
    id: "onco-21",
    title: "Nádory slinných žláz",
    section: "Nádory GIT a slinných žláz",
    category: "Onkologie",
    keywords: ["slinné", "adenom", "pleomorfní", "Warthin", "mukoepidermoidní", "parotis", "cylindrom"],
    content: {
      definition: "Nádory slinných žláz postihují velké (glandula parotis - 80 %, submandibularis, sublingualis) a malé slinné žlázy. Většina nádorů v glandula parotis je benigní, v menších žlázách stoupá podíl maligních.",
      etiology: "Neznámá. U Warthinova tumoru je silná asociace s kouřením. U některých maligních hrají roli genetické translokace.",
      pathogenesis: "1. **Benigní**: \n- *Pleomorfní adenom* (smíšený tumor): nejčastější tumor slinných žláz (vychází z myoepiteliálních a duktálních buněk). Roste pomalu, ale může malignizovat. \n- *Warthinův tumor* (cystadenolymphoma): postihuje téměř výhradně glandula parotis starších mužů-kuřáků. \n2. **Maligní**: \n- *Mukoepidermoidní karcinom*: nejčastější maligní nádor slinných žláz, tvořen směsí hlenotvorných a dlaždicových buněk. \n- *Adenoidně cystický karcinom* (cylindrom): roste infiltrující podél nervů, má vysoké riziko pozdních metastáz.",
      macroscopy: "Pleomorfní adenom: kulatý, tuhý, laločnatý uzel s hladkým povrchem, na řezu šedobílý s chrupavčitými a rosolovitými ložisky. Warthinův tumor: měkký, často cystický uzel vyplněný hnědavou tekutinou (jako čokoláda). Cylindrom: neohraničený, šedavý, tuhý.",
      microscopy: "Pleomorfní adenom: **pleomorfní (smíšený) vzhled** - epitelové žlázky a myoepiteliální buňky rozptýlené v myxoidním, chrupavčitém (chondroidním) a sklovitém (hyalinním) stroma. Warthinův tumor: cystické prostory vystlané dvouvrstevným onkocytárním epitelem (růžový epitel), pod nímž je masivní reaktivní lymfatická tkáň s germinálními centry. Adenoidně cystický k.: buňky tvoří hnízda s prázdnými okrouhlými prostory (vzhled **švýcarského sýra** nebo cylindrů).",
      clinical: "Pleomorfní adenom se musí vyoperovat s lemem zdravé tkáně (parotidektomie), protože má mikroskopické prstovité výběžky prorůstající pouzdrem. Při nedbalém vyloupnutí hrozí recidiva a poškození **nervus facialis** (lícního nervu), který prochází glandula parotis."
    },
    quiz: [
      {
        question: "Který benigní nádor slinných žláz je typický svým 'smíšeným' histologickým vzhledem, kde se epitelové struktury střídají s myxoidním a chrupavčitým stroma?",
        options: [
          "Warthinův tumor",
          "Pleomorfní adenom (smíšený tumor slinné žlázy)",
          "Mukoepidermoidní karcinom",
          "Onkocytom"
        ],
        correct: 1,
        explanation: "Pleomorfní adenom je nazýván 'smíšeným' nádorem, protože myoepiteliální buňky produkují stroma, které podléhá hlenovité a chrupavčité přeměně. Pod mikroskopem tak vedle sebe vidíme epitelové žlázky a oblasti připomínající chrupavku."
      },
      {
        question: "Který nerv je v bezprostředním ohrožení při operacích nádorů glandula parotis (příušní žlázy)?",
        options: [
          "Nervus vagus (X. hlavový nerv)",
          "Nervus facialis (VII. hlavový nerv - lícní nerv)",
          "Nervus trigeminus (V. hlavový nerv)",
          "Nervus phrenicus"
        ],
        correct: 1,
        explanation: "Nervus facialis prochází přímo skrz parenchym glandula parotis a dělí ji na povrchový a hluboký list. Růst nádoru nebo neopatrná operace (parotidektomie) může nerv poškodit, což vede k paréze (ochrnutí) mimického svalstva obličeje na postižené straně."
      }
    ,
      {
        question: "Jak se nazývá nejčastější benigní nádor slinných žláz, charakteristický směsí epiteliální a mezenchymální složky (smíšený tumor)?",
        type: "type-in",
        correct: ["pleomorfní adenom"],
        explanation: "Pleomorfní adenom (smíšený tumor) postihuje nejčastěji příušní žlázu a obsahuje buňky epitelu i myxoidní či chrupavčité stroma."
      },
      {
        question: "Jak se nazývá benigní cystický nádor slinných žláz s lymfatickým stroma, vyskytující se téměř výhradně u kuřáků?",
        type: "type-in",
        correct: ["Warthinův tumor", "Warthinův nádor", "adenolymfom"],
        explanation: "Warthinův tumor (adenolymfom) se vyskytuje v glandula parotis, typicky u starších mužů s anamnézou kouření."
      }]
  },

  {
    id: "onco-22",
    title: "Nádory jícnu a žaludku",
    section: "Nádory GIT a slinných žláz",
    category: "Onkologie",
    keywords: ["žaludek", "jícen", "karcinom", "adenokarcinom", "Barrett", "prstenčitý", "Linitis", "Krukenberg"],
    content: {
      definition: "Nádory jícnu a žaludku jsou vysoce maligní epiteliální tumory s nepříznivou prognózou.",
      etiology: "Jícen: 1. Spinocelulární karcinom (kouření, alkohol, horké nápoje, poleptání), 2. Adenokarcinom (vzniká na podkladě **Barrettova jícnu** při refluxní chorobě). Žaludek: Helicobacter pylori, uzená jídla (nitrosaminy), genetika (mutace genu CDH1 pro E-cadherin - dědičný difuzní karcinom žaludku).",
      pathogenesis: "Žaludeční karcinom se dělí podle Laurena na: \n1. **Intestinální typ**: tvoří žlázy, předchází mu intestinální metaplazie sliznice (přeměna na střevní typ), asociace s H. pylori. \n2. **Difuzní typ**: netvoří žlázy, buňky rostou disociovaně (odděleně, chybí E-cadherin) a infiltrují stěnu žaludku, což vede k jejímu zbytnění. Buňky střádají hlen, který odsouvá jádro k okraji (buňky **prstenčitého vzhledu** / signet-ring cells).",
      macroscopy: "Karcinom jícnu: zužuje lumen (stenóza), způsobuje dysfagii. Karcinom žaludku: ulcerovaný (miskovitý vřed s navalitými okraji) nebo difuzní (**Linitis plastica** - žaludek je malý, s extrémně tlustou, tuhou kožovitou stěnou připomínající koženou lahev).",
      microscopy: "Barrettův jícen: přeměna dlaždicového epitelu jícnu na cylindrický s pohárkovými buňkami (metaplazie). Difuzní karcinom žaludku: stroma je fibrotické (desmoplazie), v něm roztroušené disociované buňky s hlenovou vakuolou v cytoplasmě a oploštělým jádrem u okraje (buňky tvaru pečetního prstenu).",
      clinical: "Žaludeční karcinom má dlouho němý průběh (bolesti nadbřišku, hubnutí, odpor k masu). Často se manifestuje až metastázami: 1. **Virchowova uzlina** (zvětšená levá supraklavikulární uzlina), 2. **Krukenbergův tumor** (oboustranná metastáza difuzního karcinomu žaludku do vaječníků roznášená implantací po peritoneu)."
    },
    quiz: [
      {
        question: "Co je to Barrettův jícen a jaký nádor na jeho podkladě vzniká?",
        options: [
          "Zánět jícnu způsobený plísněmi; vzniká po něm lymfom",
          "Slizniční metaplazie, kdy se původní vrstevnatý dlaždicový epitel jícnu vlivem kyselého refluxu mění na jednovrstevný cylindrický epitel se žlázkami a pohárkovými buňkami; hrozí vznikem adenokarcinomu jícnu",
          "Zúžení jícnu po poleptání louhem; hrozí spinocelulární karcinom",
          "Vrozená vývojová vada s chyběním jícnu"
        ],
        correct: 1,
        explanation: "Barrettův jícen je obranná reakce sliznice na chronické dráždění žaludeční kyselinou (reflux). Cylindrický (střevní) epitel lépe odolává kyselině než dlaždicový. Tato metaplazie je však nestabilní a přes dysplázii často progreduje do zhoubného adenokarcinomu spodní třetiny jícnu."
      },
      {
        question: "Co charakterizuje buňky tvaru 'pečetního prstenu' (signet-ring cells) u difuzního karcinomu žaludku?",
        options: [
          "Jsou to buňky s mnoha jádry uspořádanými do kruhu",
          "Jsou to jednotlivé, disociované buňky, jejichž cytoplasma je vyplněna velkou hlenovou vakuolou, která odtlačila a oploštila buněčné jádro k buněčné membráně",
          "Jsou to buňky zničené ozařováním",
          "Jsou to buňky tvořící krystaly vápníku"
        ],
        correct: 1,
        explanation: "U difuzního (Laurenova) typu karcinomu žaludku buňky neudrží kontakt a netvoří žlázy. Buňky produkují hlen (mucin), který se hromadí uvnitř cytoplasmy. Obří vakuola hlenu stlačí jádro k okraji, což buňce pod mikroskopem dává typický tvar pečetního prstenu."
      }
    ,
      {
        question: "Který typ karcinomu jícnu dominuje v jeho dolní třetině a vzniká v terénu Barrettova jícnu?",
        type: "type-in",
        correct: ["adenokarcinom"],
        explanation: "Adenokarcinom jícnu vzniká v důsledku intestinální metaplazie sliznice (Barrettova jícnu) při chronickém refluxu HCl."
      },
      {
        question: "Jak se nazývá metastáza mucinózního karcinomu žaludku do vaječníků?",
        type: "type-in",
        correct: ["Krukenbergův tumor", "Krukenbergův nádor"],
        explanation: "Krukenbergův tumor je bilaterální metastáza adenokarcinomu (typicky ze žaludku) do ovarií, tvořená buňkami tvaru pečetního prstenu."
      }]
  }

];

// Export database parts into window namespace
if (typeof window !== 'undefined') {
  window.DATA_ONCO_1 = DATA_ONCO_1;
}
