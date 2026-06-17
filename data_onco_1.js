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
        question: "Jaká zkratka označuje prekancerózu dlaždicového epitelu děložního čípku?",
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
        explanation: "Leiomyom je benigní nádor z buněk hladké svaloviny. Je to nejčastější nádor u žen vůbec, postihuje dělohu (myometrium) u žen ve fertilním věku, kde způsobuje krvácení a neplodnost."
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
      definition: "Carcinoma in situ (CIS) neboli neinvazivní intraepiteliální karcinom je rané stadium rakoviny, kdy buňky vykazují všechny cytologické znaky malignity (anaplázii, pleomorfismus, patologické mitózy), ale **nerostou infiltrativně a respektují basální membránu**.",
      etiology: "Stejná jako u invazivních karcinomů: HPV infekce (děložní hrdlo), UV záření (kůže - Bowenova choroba), kouření (bronchus), chronické podráždění.",
      pathogenesis: "Představuje poslední krok v procesu karcinogeneze před vznikem invazivního karcinomu. Protože bazální membrána je celistvá a v epitelu chybí krevní a lymfatické cévy, CIS **není schopen metastázovat**. Pokud se neodstraní, buňky začnou produkovat metaloproteinázy, naruší bazální membránu a přejdou do invazivního stadia.",
      macroscopy: "Často makroskopicky nenápadný, projevuje se jen jako zhrubnutí sliznice, leukoplakie, zarudnutí (erytroplakie) nebo eroze. Na děložním čípku se detekuje jodovým testem (Schillerův test - dysplastický epitel neobsahuje glykogen a nebarví se hnědě) nebo kolposkopií.",
      microscopy: "Pod mikroskopem nacházíme atypické epitelové buňky v celé šířce (tloušťce) epitelu od bazální vrstvy až k povrchu (ztráta stratifikace). Jádra jsou velká, hyperchromní, mitózy jsou četné a přítomné i v horních vrstvách epitelu. Klíčovým rozlišovacím znakem od invazivního karcinomu je zachovalá, celistvá bazální membrána.",
      clinical: "Carcinoma in situ je plně vyléčitelný lokálním chirurgickým odstraněním (např. konizace u děložního čípku, excize u kůže), protože nemá přístup k cévám a nemůže metastázovat. Pokud se však neléčí, progreduje v invazivní karcinom s rizikem metastáz."
    },
    quiz: [
      {
        question: "Jaký je hlavní rozdíl mezi carcinoma in situ (CIS) a invazivním karcinomem?",
        options: [
          "Carcinoma in situ má větší sklon k hematogennímu metastázování",
          "Carcinoma in situ respektuje bazální membránu a neroste infiltrativně",
          "Carcinoma in situ je tvořen výhradně benigními buňkami bez atypií",
          "Carcinoma in situ se vyskytuje pouze v mezenchymálních tkáních"
        ],
        correct: 1,
        explanation: "Hlavním kritériem carcinoma in situ je, že atypické buňky vykazují znaky malignity, ale respektují celistvost bazální membrány a neinvadují do okolního stromatu."
      },
      {
        question: "Může carcinoma in situ (CIS) zakládat metastázy v lymfatických uzlinách?",
        options: [
          "Ano, metastázuje velmi časně a preferenčně lymfogenní cestou",
          "Ano, ale pouze v případě, že se jedná o melanom in situ",
          "Ne, protože v epitelu chybí krevní a lymfatické cévy a tumor neprostupuje bazální membránou",
          "Ne, protože CIS je benigní léze, která nikdy nemetastázuje"
        ],
        correct: 2,
        explanation: "Protože CIS neprostupuje bazální membránu a v epitelové vrstvě nejsou krevní ani lymfatické cévy, nemá tumor možnost šířit se do oběhu a zakládat metastázy."
      },
      {
        question: "Jak se nazývá neinvazivní intraepiteliální karcinom kůže vyvolaný zejména UV zářením?",
        type: "type-in",
        correct: ["Bowenova choroba", "morbus Bowen", "Bowenova nemoc"],
        explanation: "Bowenova choroba (morbus Bowen) je squamous cell carcinoma in situ kůže (intraepidermální karcinom)."
      },
      {
        question: "Který jodový test se používá při kolposkopii k detekci dysplázií a carcinoma in situ na děložním čípku?",
        type: "type-in",
        correct: ["Schillerův test", "Schillerův", "Schillerova zkouška"],
        explanation: "Schillerův test využívá Lugolův roztok; normální buňky obsahující glykogen se barví tmavohnědě, zatímco dysplastické buňky a CIS glykogen neobsahují a zůstávají nebarvené."
      }
    ]
  },

  {
    id: "onco-10",
    title: "Leukémie (přehled)",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["leukémie", "blast", "akutní", "chronická", "myeloidní", "lymfoblastická", "dřeň", "myelofthíza", "anémie", "cytopenie"],
    content: {
      definition: "Leukémie jsou maligní neoplazie krvetvorby vycházející z buněk kostní dřeně, které se vyznačují difuzním nahrazením normální dřeně nádorových buněk a vyplavením nádorových buněk do periferní krve.",
      etiology: "Chromozomální aberace (např. Filadelfský chromozom), expozice alkylujícím látkám, benzenu, ionizujícímu záření, Downův syndrom.",
      pathogenesis: "Základní dělení je na **akutní** (hromadění nezralých buněk - blastů, rychlý průběh) a **chronické** (hromadění diferencovanějších buněk, pomalý průběh). Dále se dělí na **myeloidní** a **lymfatické**: \n1. **ALL** (Akutní lymfoblastická leukémie): nejčastější u dětí (85 %). \n2. **AML** (Akutní myeloidní leukémie): nejčastější akutní u dospělých. \n3. **CLL** (Chronická lymfocytární leukémie): nejčastější vůbec u starých lidí (nádor z B-lymfocytů). \n4. **CML** (Chronická myeloidní leukémie): spojena s translokací t(9;22) - Filadelfským chromozomem. U všech typů dochází k postupnému zaplavení dřeně nádorovým klonem a útlaku normální fyziologické krvetvorby (proces označovaný jako **myelofthíza**).",
      macroscopy: "Kostní dřeň je hyperplastická, má šedorůžovou nebo žlutavou barvu (hnisavý vzhled - dřeň 'pyoidní'). Splenomegalie (extrémní u CML, kdy slezina váží i 3-5 kg), hepatomegalie a lymfadenopatie (zvětšení uzlin, typické pro CLL). Krvácivé projevy na sliznicích (petechie) a bledost.",
      microscopy: "Kostní dřeň je kompletně buněčná (hypercelulární), tuková tkáň dřeně je vytlačena. U akutních leukémií dominují blasti (> 20 % v kostní dřeni). U AML nacházíme v cytoplasmě blastů růžové jehlicovité struktury - **Auerovy tyčinky** (agregáty granul). U CLL nacházíme v nátěru zralé lymfocyty a křehké stíny rozpadlých buněk - **Gumprechtovy stíny**.",
      clinical: "Příznaky vyplývají ze selhání kostní dřeně v důsledku **myelofthízy**: 1. **Normocytární normochromní anémie** (únava, bledost, slabost, dušnost - způsobená vytlačením erytroidních progenitorů), 2. Neutropenie/granulocytopenie (těžké oportunní infekce, sepse), 3. Trombocytopenie (krvácení z dásní, petechie, hematomy). Akutní leukémie vyžadují okamžitou agresivní chemoterapii a transplantaci kostní dřeně."
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
      },
      {
        question: "Jakým patogenetickým mechanismem dochází k rozvoji těžké anémie u pacientů s akutní leukémií?",
        options: [
          "Nedostatkem železa v důsledku špatného vstřebávání",
          "Utlačením a nahrazením normální krvetvorné tkáně v kostní dřeni masivním zmnožením nádorového leukemického klonu (myelofthíza)",
          "Zvýšenou ztrátou krve ledvinami",
          "Autoimunitní destrukcí erytrocytů v cévách"
        ],
        correct: 1,
        explanation: "Mechanismus anémie (a dalších cytopenií) u akutních leukémií je způsoben myelofthízou. Nádorové blasty nekontrolovaně proliferují a fyzicky vytlačují zdravé progenitorové buňky erytrocytární řady v kostní dřeně, což vede k selhání tvorby červených krvinek."
      },
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
      },
      {
        question: "Jak se nazývá stav, kdy je normální hematopoetická tkáň v kostní dřeni nahrazena/vytlačena nádorovými buňkami?",
        type: "type-in",
        correct: ["myelofthíza", "myelofthiza", "myelophthisis"],
        explanation: "Myelofthíza je proces vytlačení normální kostní dřeně infiltrátem (např. leukemickými buňkami, metastázami solidních nádorů nebo vazivovou tkání)."
      }
    ]
  },

  {
    id: "onco-11",
    title: "Hodgkinův lymfom",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["Hodgkin", "lymfom", "Reed", "Sternberg", "Hodgkinovy", "bimodální", "uzliny", "skleróza", "CD30", "CD15", "Ann Arbor"],
    content: {
      definition: "Hodgkinův lymfom (HL) je specifická maligní lymfoproliferace postihující lymfatické uzliny. Je charakteristický přítomností obřích maligních buněk (Hodgkinových a Reedové-Sternberga) obklopených hojným reaktivním zánětlivým doprovodem (97–99 % masy nádoru). Dělí se na klasický Hodgkinův lymfom (CHL, 95 %) and nodulární lymfocytárně predominantní Hodgkinův lymfom (NLPHL, 5 %).",
      etiology: "Silná asociace s infekcí virem Epstein-Barrové (EBV) v cca 40–50 % případů klasického HL (zejména u typu smíšené buněčnosti a lymfocytární deplece), imunodeficity (HIV, po transplantacích).",
      pathogenesis: "Nádorové buňky (RS buňky) jsou monoklonální B-lymfocyty pocházející z buněk zárodečného centra, které v důsledku somatických mutací ztratily schopnost exprese imunoglobulinů a unikly apoptóze. Tyto buňky secernují řadu cytokinů a chemokinů (IL-5, IL-6, IL-13, TNF-alfa, TGF-beta), které aktivně rekrutují a udržují nenádorové reaktivní pozadí (T a B lymfocyty, eozinofily, plazmocyty, makrofágy, fibroblasty).",
      macroscopy: "Zvětšené, nebolestivé, gumovité lymfatické uzliny (typicky krční, supraklavikulární a mediastinální). Roste unicentricky a šíří se anatomicky souvisle do sousedních uzlinových skupin. Na řezu je tkáň šedobílá, u nodulární sklerózy je rozdělena tuhými bílými vazivovými proužky do uzlovitých ložisek. Uzliny obvykle nesplývají v paket tak snadno jako u non-Hodgkinových lymfomů.",
      microscopy: "1. **Nádorové buňky**: \n- *Hodgkinova buňka*: velká mononukleární buňka s velkým eosinofilním jadérkem. \n- *Reedové-Sternberga (RS) buňka*: obří multinukleární (nebo dvoujaderná) buňka s jadérky vzhledu 'sovích očí'. \n- *Lakunární buňky* (typ nodulární skleróza): smrštěním cytoplasmy při fixaci vzniká opticky prázdný prostor (lakuna) kolem buňky. \n- *Popcorn buňky (L&H buňky)* (u NLPHL): laločnaté jádro připomínající vypukanou kukuřici. \n2. **Imunofenotyp**: \n- *Klasický HL*: **CD30+, CD15+**, CD45-, CD20- (většinou). \n- *NLPHL*: **CD20+, CD45+**, CD30-, CD15-. \n3. **Subtypy klasického HL**: \n- *Nodulární skleróza (NS, 70 %)*: mladé ženy, kolagenní pruhy, lakunární buňky. \n- *Smíšená buněčnost (MC)*: starší věk, silná asociace s EBV, hojné eozinofily a RS buňky. \n- *Bohatý na lymfocyty (LR)*: nejlepší prognóza CHL, reaktivní pozadí tvoří převážně zralé lymfocyty. \n- *Lymfocytární deplece (LD)*: nejvzácnější, nejhorší prognóza, chudé na reaktivní buňky, masivní přítomnost atypických RS buněk (u HIV).",
      clinical: "Bimodální věková křivka (vrchol mezi 20.–30. rokem a pak po 60. roce). Projevuje se nebolestivou lymfadenopatií a systémovými **B-příznaky** (horečka > 38 °C, noční pocení, pokles hmotnosti o > 10 % za 6 měsíců). Staging se hodnotí podle **klasifikace Ann Arbor** (stadium I: jedna uzlinová oblast; II: dvě a více na jedné straně bránice; III: obě strany bránice; IV: mimouzlinové orgány - kostní dřeň, plíce). Prognóza je vynikající (přes 80–90 % pacientů se vyléčí pomocí režimu ABVD ± radioterapie)."
    },
    quiz: [
      {
        question: "Jak se liší imunofenotyp nádorových buněk u klasického Hodgkinova lymfomu (CHL) od nodulárního lymfocytárně predominantního Hodgkinova lymfomu (NLPHL)?",
        options: [
          "Maligní buňky u CHL jsou CD20+ a CD45+, zatímco u NLPHL vyjadřují CD30 a CD15",
          "Maligní buňky u CHL jsou CD30+ a CD15+ (přičemž jsou CD20- a CD45-), zatímco u NLPHL jsou pozitivní na B-buněčné markery CD20+ a leukocytární antigen CD45+ (a negativní na CD30 a CD15)",
          "U obou typů jsou buňky výhradně CD3+ a CD8+",
          "U klasického HL chybí jakákoliv membránová exprese receptorů"
        ],
        correct: 1,
        explanation: "Toto rozlišení je kritické. Nádorové buňky klasického HL (Hodgkinovy a RS buňky) ztratily typické B-markery a nesou CD30 a CD15. Nádorové buňky NLPHL (L&H popkornové buňky) si naopak zachovávají plný B-buněčný fenotyp (CD20+, CD45+)."
      },
      {
        question: "Který subtyp klasického Hodgkinova lymfomu je nejčastější v západních zemích, postihuje zejména mladé ženy a projevuje se mediastinální masou a přítomností kolagenních proužků na řezu uzlinou?",
        options: [
          "Subtyp se smíšenou buněčností (mixed cellularity)",
          "Nodulární skleróza (nodular sclerosis)",
          "Subtyp bohatý na lymfocyty (lymphocyte-rich)",
          "Subtyp s lymfocytární deplecí (lymphocyte-depleted)"
        ],
        correct: 1,
        explanation: "Nodulární skleróza tvoří až 70 % všech případů Hodgkinova lymfomu. Pod mikroskopem se vyznačuje vazivovými kolagenními septy ohraničujícími nádorové noduly a typickými lakunárními buňkami."
      },
      {
        question: "Co vyjadřují písmena 'A' a 'B' u stagingu Hodgkinova lymfomu (např. stadium IIB) podle Ann Arbor klasifikace?",
        options: [
          "A značí mladý věk pacienta, B starší věk",
          "A znamená nepřítomnost celkových (systémových) příznaků; B znamená přítomnost tzv. B-příznaků (horečka, noční pocení, úbytek na váze)",
          "A znamená postižení nad bránicí, B pod bránicí",
          "A označuje postižení pouze kostní dřeně"
        ],
        correct: 1,
        explanation: "B-příznaky mají zásadní prognostický význam a ovlivňují intenzitu léčby. Zahrnují nevysvětlitelné horečky nad 38 °C, profúzní noční pocení a neúmyslný úbytek hmotnosti o více než 10 % za posledních 6 měsíců."
      },
      {
        question: "Jak se nazývá specifická varianta nádorových buněk typická pro nodulární lymfocytárně predominantní Hodgkinův lymfom (NLPHL), která má laločnaté jádro?",
        type: "type-in",
        correct: ["popcorn buňka", "popcorn buňky", "L&H buňka", "L&H buňky", "popcorn"],
        explanation: "Popcorn buňky (L&H buňky - Lymphocytic and Histiocytic) jsou charakteristické pro NLPHL. Mají laločnaté jádro připomínající popcorn a jsou CD20+."
      },
      {
        question: "Které dvě CD zkratky (např. CDXX a CDYY) definují klasický imunofenotyp nádorových buněk u klasického Hodgkinova lymfomu?",
        type: "type-in",
        correct: ["CD30 a CD15", "CD15 a CD30", "CD30+ a CD15+", "CD15+ a CD30+"],
        explanation: "Maligní Reedové-Sternberga a Hodgkinovy buňky u klasického HL jsou charakteristicky CD30 pozitivní a CD15 pozitivní."
      },
      {
        question: "Který stagingový systém (název podle města v USA) se používá k určení klinického stadia I až IV u Hodgkinova lymfomu?",
        type: "type-in",
        correct: ["Ann Arbor", "Ann Arbor klasifikace", "Ann Arbor systém"],
        explanation: "Staging Hodgkinova i non-Hodgkinových lymfomů se standardně provádí podle Ann Arbor klasifikace na základě počtu postižených uzlinových skupin a jejich vztahu k bránici."
      }
    ]
},

  {
    id: "onco-12",
    title: "Lymfomy z B řady (obecný přehled a patogeneze)",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["B-lymfom", "imunoglobulin", "diferenciace", "folikul", "centrum", "somatické", "translokace", "AID"],
    content: {
      definition: "Lymfomy z B řady jsou maligní neoplazie vycházející z různých vývojových stadií B-lymfocytů. Tyto stádia sahají od nejranějších prekurzorů v kostní dřeni (představujících lymfoblasty) až po zralé, antigenem stimulované B-buňky (v zárodečných centrech) a terminální plazmatické buňky.",
      etiology: "Poruchy imunitního systému (autoimunitní choroby jako Sjögrenův syndrom, revmatoidní artritida; vrozené či získané imunodeficity, např. HIV/AIDS), chronické antigenní stimulace (Helicobacter pylori v žaludku, virus hepatitidy C - HCV, EBV, borélie) a specifické genetické translokace.",
      pathogenesis: "B-lymfocyty procházejí během svého vývoje procesy, které přirozeně pozměňují jejich DNA: VDJ rekombinace, **somatická hypermutace** v zárodečných (germinálních) centrech a **třídový přesmyk** imunoglobulinových genů. Tyto fyziologické zlomy v DNA vyžadují působení enzymu **AID** (activation-induced cytidine deaminase). Pokud dojde k chybě v opravách, může být onkogen (např. BCL2, MYC, CCND1) připojen k vysoce aktivnímu promotoru pro těžký řetězec imunoglobulinů (IGH). B-lymfomy představují 85–90 % všech non-Hodgkinových lymfomů (NHL).",
      macroscopy: "Difuzní zvětšení lymfatických uzlin, které často splývají do velkých, nebolestivých balíků (paketů). Uzliny jsou elastické nebo měkké, na řezu homogenní, šedorůžové, vzhledu rybího masa. Může dojít k postižení extranodálních (mimouzlinových) tkání, např. sleziny, jater, kostní dřeně a gastrointestinálního traktu (žaludek).",
      microscopy: "Setření normální architektury uzliny (mizí marginální sinusy a folikuly). Růst je buď **nodulární** (folikulární), nebo **difuzní** (homogenní buněčný infiltrát). Všechny B-lymfomy vykazují pozitivitu v B-specifických markerech: **CD19, CD20, CD22, CD79a, PAX-5**. Charakteristická je **klonální restrikce lehkých řetězců** (buňky produkují buď pouze kappa, nebo pouze lambda řetězce; fyziologický poměr je cca 2:1, posun k výhradní produkci jednoho typu značí klonalitu/malignitu).",
      clinical: "Lymfadenopatie, splenomegalie, hepatomegalie a celkové příznaky (horečky, hubnutí, noční pocení). Pro diagnózu je nutná celá exstirpovaná uzlina (cytologická punkce nepostačuje). Hlavním terapeutickým standardem u CD20+ lymfomů je imunochemoterapie s přidáním protilátky **Rituximab** (anti-CD20)."
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
      },
      {
        question: "Který jev se používá v imunohistochemii k průkazu klonality a tím maligního charakteru B-lymfoproliferace?",
        options: [
          "Ztráta exprese všech B-markerů",
          "Klonální restrikce lehkých řetězců (nádorové buňky vyjadřují výhradně jen řetězec kappa, nebo jen lambda, zatímco reaktivní zánět je polyklonální a obsahuje směs obou v poměru cca 2:1)",
          "Přítomnost proteinu p53",
          "Exprese markeru CD3"
        ],
        correct: 1,
        explanation: "Klonální restrikce je klíčovým důkazem neoplazie. Reaktivní zduření uzliny obsahuje směs buněk tvořících kappa i lambda řetězce. Pokud v uzlině dominují buňky s jedním typem lehkého řetězce, jde o klonální (nádorovou) populaci."
      },
      {
        question: "Který membránový receptor na zralých B-lymfocytech je hlavním cílem terapeutické protilátky Rituximab?",
        type: "type-in",
        correct: ["CD20"],
        explanation: "CD20 je specifický povrchový marker B-lymfocytů, který slouží jako cíl monoklonální protilátky Rituximabu."
      },
      {
        question: "Jak se nazývá enzym, který spouští somatickou hypermutaci a zlomy DNA v germinálním centru B-buněk, což zvyšuje riziko translokací?",
        type: "type-in",
        correct: ["AID", "activation-induced cytidine deaminase"],
        explanation: "Enzym AID (activation-induced cytidine deaminase) je nezbytný pro somatickou hypermutaci a přesmyk řetězců u B-lymfocytů."
      }
    ]
},

  {
    id: "onco-13",
    title: "Lymfomy z T řady (obecný přehled a patogeneze)",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["T-lymfom", "extranodální", "angioinvazivita", "celiakie", "EATL", "HTLV-1", "Sézary"],
    content: {
      definition: "Lymfomy z T řady a NK buněk jsou heterogenní skupina maligních neoplazií vycházejících buď z nezralých prekurzorů T-lymfocytů (v thymu), nebo ze zralých periferních T-lymfocytů a NK buněk.",
      etiology: "Infekce retrovirem **HTLV-1** (asociován s T-leukémií/lymfomem dospělých - ATLL), virus **EBV** (asociace s extranodálním NK/T-lymfomem, nosním typem), chronické poškození sliznice tenkého střeva glutenem u neléčené celiakie (asociace s enteropatickým T-lymfomem - EATL).",
      pathogenesis: "Představují cca 10–15 % všech NHL. Vycházejí z funkčních subpopulací T-buněk (helpery CD4+, cytotoxické CD8+, NK buňky). Typické je agresivní biologické chování, vysoká afinita k extranodálním tkáním (kůže, zažívací trakt, nosní dutina), sklon k infiltraci stěn cév s jejich následnou destrukcí (**angioinvazivita** / angiodestrukce) a rozsáhlým ischemickým nekrózám.",
      macroscopy: "Extranodální postižení: \n1. *Kožní T-lymfomy* (Mycosis fungoides): nejprve ekzémovité skvrny (patche), pak vyvýšené plaky a nakonec velké uzlovité, rozpadající se tumory. \n2. *EATL*: mnohočetné ulcerace a vředy ve sliznici tenkého střeva u pacientů s celiakií, vedoucí k perforaci střeva. \n3. *Nasal type NK/T-lymphoma*: destruktivní léze střední čáry obličeje (nekrotizující destrukce nosní přepážky a patra).",
      microscopy: "Infiltrace uzlin či tkání pleomorfními, atypickými T-buňkami, které mají nepravidelná, laločnatá či zářezovitá jádra. U Mycosis fungoides je typický **epidermotropismus** (nádorové buňky migrují do epidermis, kde tvoří drobné shluky - **Pautrierovy mikroabscesy**). Imunohistochemický profil zralých T-lymfomů vykazuje pan-T markery: **CD2, CD3, CD5, CD7** (některé markery mohou nádorové buňky ztratit) a CD4 nebo CD8.",
      clinical: "Obecně mají **podstatně horší prognózu** a slabší odpověď na standardní chemoterapii než B-lymfomy. Sézaryho syndrom je leukemická varianta kožního T-lymfomu charakterizovaná triádou: **erytrodermie** (zčervenání celého těla, intenzivní svědění), **lymfadenopatie** a **Sézaryho buňky** s cerebriformními (mozku podobnými) jádry v periferní krvi."
    },
    quiz: [
      {
        question: "Které onemocnění zažívacího traktu je spojeno s rizikem vzniku enteropatického T-lymfomu (EATL)?",
        options: [
          "Crohnova choroba",
          "Celiakie (gluten-senzitivní enteropatie)",
          "Ulcerózní kolitida",
          "Gastritida vyvolaná H. pylori"
        ],
        correct: 1,
        explanation: "U pacientů s dlouhodobě neléčenou nebo na bezlepkovou dietu nereagující (refrakterní) celiakií dochází k maligní transformaci intraepiteliálních T-lymfocytů tenkého střeva a rozvoji EATL, který často komplikuje perforace střeva."
      },
      {
        question: "Co tvoří klinickou triádu Sézaryho syndromu?",
        options: [
          "Anémie, trombocytopenie, leukocytóza",
          "Erytrodermie (zčervenání celého těla), lymfadenopatie a přítomnost Sézaryho buněk s cerebriformními jádry v krvi",
          "Splenomegalie, hepatomegalie, horečka",
          "Kašel, dušnost, mediastinální masa"
        ],
        correct: 1,
        explanation: "Sézaryho syndrom je leukemická fáze kožního T-lymfomu. Projevuje se celotělovým erytémem a svěděním (erytrodermie), zvětšením uzlin (lymfadenopatie) a vyplavením nádorových T-buněk se zářezy v jádře (cerebriformní tvar) do krve."
      },
      {
        question: "Která vlastnost růstu T-lymfomů vysvětluje častý nález rozsáhlých nekróz a ulcerací v postižených tkáních?",
        options: [
          "Tvorba velkého množství kolagenu",
          "Angioinvazivita (nádorové buňky prorůstají stěnou cév a ničí je, což vede k ischemii a nekróze tkáně)",
          "Neschopnost dělení",
          "Tvorba amyloidu"
        ],
        correct: 1,
        explanation: "T-lymfomy a NK-lymfomy (např. extranodální NK/T lymfom obličeje) mají typicky angioinvazivní růst. Infiltrují a destruují stěny cév (angiodestrukce), což vede k infarktům, nekrózám a rozpadu tkání."
      },
      {
        question: "Jak se nazývá mikroskopický nález u Mycosis fungoides, kdy nádorové T-buňky tvoří shluky v epidermis?",
        type: "type-in",
        correct: ["Pautrierovy mikroabscesy", "Pautrierův mikroabsces", "Pautrierovy mikroabscesy"],
        explanation: "Pautrierovy mikroabscesy jsou intraepidermální shluky atypických T-lymfocytů s cerebriformními jádry, typické pro kožní T-lymfomy."
      }
    ]
},

  {
    id: "onco-14",
    title: "Non-Hodgkinovy lymfomy z B řady",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["NHL", "B-lymfom", "DLBCL", "folikulární", "Burkitt", "starry sky", "t(14;18)", "MALT", "Richter"],
    content: {
      definition: "Non-Hodgkinovy lymfomy (NHL) z B řady tvoří široké spektrum klonálních neoplazií zralých B-lymfocytů. Zásadní klinicko-patologické dělení je na lymfomy **indolentní** (pomalý růst, obtížně léčitelné, ale dlouhé přežití) a **agresivní** (rychlý růst, bez léčby fatální, ale vysoce citlivé na chemoterapii).",
      etiology: "Specifické chromozomální translokace: t(14;18) u folikulárního lymfomu; t(8;14) u Burkittova lymfomu; t(11;14) u lymfomu z plášťových buněk. Chronické stimulace: Helicobacter pylori u žaludečního MALT lymfomu.",
      pathogenesis: "1. **DLBCL** (Difuzní velkobuněčný B-lymfom): nejčastější agresivní B-NHL. Roste de novo nebo transformací z indolentních lymfomů (např. z CLL či FL - tzv. Richterova transformace). Mutace/reuspořádání BCL6.\n2. **Folikulární lymfom (FL)**: nejčastější indolentní B-NHL. Translokace t(14;18) spojuje onkogen **BCL2** s promotorem těžkého řetězce imunoglobulinů (IGH). BCL2 je anti-apoptotický protein, jeho nadprodukce blokuje apoptózu a buňky přežívají. Grading 1-3 podle počtu centroblastů.\n3. **Burkittův lymfom**: extrémně agresivní (nejrychleji rostoucí lidský tumor), translokace t(8;14) aktivuje onkogen **MYC** (řídí buněčný cyklus), proliferační index Ki-67 se blíží 100 %.\n4. **Lymfom z plášťových buněk (MCL)**: t(11;14) vede k nadprodukci **cyklinu D1** (regulátor buněčného cyklu), CD5+, CD23-. Často postihuje GIT (lymfomatoidní polypóza).\n5. **MALT lymfom**: roste extranodálně v žaludku, spojen s H. pylori. Eradikace H. pylori může vést k úplné regresi nádoru.",
      macroscopy: "Výrazná lymfadenopatie (uzliny splývají do paketů). U extranodálních forem v GIT (časté u DLBCL, MALT a MCL) nacházíme polypózní masy, vředy či difuzní ztluštění stěny žaludku nebo střeva, které mohou vést k ileu.",
      microscopy: "- *DLBCL*: difuzní infiltrát velkých buněk (velikosti makrofágu) s velkými vezikulárními jádry.\n- *Folikulární lymfom*: nodulární růst tvořící neostře ohraničené folikuly, chybí polarizace a makrofágy (rozdíl od reaktivní hyperplazie).\n- *Burkittův lymfom*: difuzní pole středně velkých buněk s vysokou mitotickou aktivitou. Četné makrofágy fagocytující buněčný detritus vytvářejí při slabém zvětšení vzhled **hvězdného nebe** (starry sky).\n- *MALT*: infiltrace marginální zóny s tvorbou **lymfoepiteliálních lézí** (nádorové buňky invadují a ničí žlázky sliznice).",
      clinical: "Indolentní lymfomy (FL, MALT, CLL) postihují starší, rostou pomalu, často v době diagnózy generalizované do kostní dřeně, ale mají dlouhé přežití. Agresivní lymfomy (DLBCL, Burkitt, MCL) vyžadují okamžitou terapii (chemoterapie CHOP + Rituximab). Burkittův lymfom se dělí na endemický (africký, postihuje čelisti dětí, asociace s EBV) a sporadický (abdominální tumor)."
    },
    quiz: [
      {
        question: "Která chromozomální translokace a gen jsou spojeny se vznikem folikulárního lymfomu a blokádou apoptózy?",
        options: [
          "t(8;14) a gen MYC",
          "t(14;18) a gen BCL2",
          "t(11;14) a gen CCND1 (cyklin D1)",
          "t(9;22) a gen BCR-ABL"
        ],
        correct: 1,
        explanation: "Translokace t(14;18) u folikulárního lymfomu přenáší gen BCL2 pod promotor pro těžký řetězec imunoglobulinů (IGH). To vede k nadměrné tvorbě proteinu BCL2, který brání buňkám vstoupit do apoptózy, takže se hromadí."
      },
      {
        question: "Co pod mikroskopem vytváří vzhled 'hvězdného nebe' (starry sky appearance) u Burkittova lymfomu?",
        options: [
          "Ukládání krystalů vápníku v nádoru",
          "Difuzní pole tmavých, rychle se dělících nádorových B-buněk proložené světlými makrofágy požírajícími apoptotická tělíska",
          "Kombinace folikulů a cév",
          "Zbytky kolagenních vláken"
        ],
        correct: 1,
        explanation: "Burkittův lymfom má extrémně vysokou proliferaci i buněčný rozpad. Reaktivní makrofágy odstraňují apoptotické buňky a pod mikroskopem vypadají jako světlé skvrny (hvězdy) na tmavém pozadí nádorových buněk (noční obloha)."
      },
      {
        question: "Který zralý B-lymfom je spojen s Helicobacter pylori v žaludku a může po eradikaci této bakterie kompletně regredovat?",
        options: [
          "DLBCL",
          "MALT lymfom (extranodální lymfom z marginální zóny)",
          "Burkittův lymfom",
          "Lymfom z plášťových buněk"
        ],
        correct: 1,
        explanation: "MALT lymfom vzniká v žaludeční sliznici na podkladě chronického zánětu vyvolaného H. pylori. V časném stadiu je nádor závislý na antigenní stimulaci touto bakterií, proto jeho odstranění (antibiotiky) vede k vyléčení lymfomu."
      },
      {
        question: "Jak se nazývá proces, kdy se indolentní lymfom (např. CLL nebo folikulární lymfom) transformuje do agresivního difuzního velkobuněčného B-lymfomu (DLBCL)?",
        type: "type-in",
        correct: ["Richterova transformace", "Richterův syndrom", "Richterova"],
        explanation: "Richterova transformace (Richterův syndrom) je transformace CLL/SLL nebo jiného indolentního B-lymfomu do agresivního DLBCL, doprovázená špatnou prognózou."
      },
      {
        question: "Který protein (regulátor buněčného cyklu) je nadměrně produkován u lymfomu z plášťových buněk (MCL) v důsledku translokace t(11;14)?",
        type: "type-in",
        correct: ["cyklin D1", "cyclin D1"],
        explanation: "Translokace t(11;14) u MCL vede k trvalé aktivaci genu CCND1 a nadprodukci proteinu cyklinu D1, který urychluje průchod buněčným cyklem."
      }
    ]
},

  {
    id: "onco-15",
    title: "Non-Hodgkinovy lymfomy z T řady",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["T-NHL", "ALCL", "ALK", "Mycosis fungoides", "Sézary", "epidermotropismus", "hallmark buňky"],
    content: {
      definition: "Non-Hodgkinovy lymfomy z T řady (T-NHL) představují klonální neoplazie vycházející ze zralých, post-thymových T-lymfocytů. Jsou méně časté než B-lymfomy a klinicky se chovají agresivněji.",
      etiology: "Většina je neznámá. Některé typy jsou úzce spjaty s specifickými podněty: chronické poškození sliznice tenkého střeva (celiakie u EATL), retrovirus HTLV-1.",
      pathogenesis: "1. **Periferní T-lymfom, blíže neurčený (PTCL-NOS)**: nejčastější uzlinový T-NHL, diagnóza per exclusionem, vysoce agresivní.\n2. **Anaplastický velkobuněčný lymfom (ALCL)**: t(2;5) translokace vede k fúzi genu **ALK** (anaplastic lymphoma kinase). ALK pozitivní forma se vyskytuje u mladých a má dobrou prognózu; ALK negativní forma postihuje starší a má špatnou prognózu.\n3. **Mycosis fungoides**: primárně kožní T-lymfom (CTCL) s dlouhodobým indolentním průběhem v epidermis, který se v pozdních stadiích může šířit do uzlin a vnitřních orgánů.\n4. **EATL**: vzniká u pacientů s refrakterní celiakií z intraepiteliálních T-lymfocytů, vede k nekrózám a ulceracím tenkého střeva.",
      macroscopy: "PTCL-NOS: masivní lymfadenopatie, hepatosplenomegalie. ALCL: zvětšení uzlin, často kožní tumory. Mycosis fungoides: v prvním stadiu červená suchá ložiska (ekzematoidní patche), ve druhém stadiu vyvýšené plaky a ve třetím stadiu velké, infiltrující a ulcerující uzly.",
      microscopy: "- *PTCL-NOS*: výrazný buněčný pleomorfismus (směs malých, středních a velkých buněk) s reaktivním zánětlivým pozadím.\n- *ALCL*: velké anaplastické buňky s ledvinovitými či podkovovitými jádry a prosvětlením v cytoplasmě (**hallmark cells**). Jsou **CD30+** a často vyjadřují protein ALK.\n- *Mycosis fungoides*: v epidermis nacházíme atypické T-lymfocyty s cerebriformními jádry migrující do pokožky (**epidermotropismus**) a tvořící **Pautrierovy mikroabscesy**.",
      clinical: "Agresivní chování. ALK+ ALCL je dobře léčitelný chemoterapií. PTCL-NOS má velmi nepříznivou prognózu s rychlým relapsem. Sézaryho syndrom (leukemická fáze kožního T-lymfomu) se projevuje erytrodermií, lymfadenopatií a cirkulujícími cerebriformními buňkami."
    },
    quiz: [
      {
        question: "Jak se nazývají typické buňky s ledvinovitým jádrem a světlou zónou u jádra nacházející se u anaplastického velkobuněčného lymfomu (ALCL)?",
        options: [
          "Reedové-Sternberga buňky",
          "Hallmark buňky (hallmark cells)",
          "Popcorn buňky",
          "Sézaryho buňky"
        ],
        correct: 1,
        explanation: "Hallmark buňky jsou typické pro ALCL. Mají excentrické, ledvinovité nebo podkovovité jádro s eosinofilní paranukleární zónou (odpovídající Golgiho aparátu)."
      },
      {
        question: "Který protein, zjišťovaný imunohistochemicky, je klíčovým prognostickým markerem u ALCL?",
        options: [
          "CD20",
          "ALK (anaplastická lymfomová kináza)",
          "BCL2",
          "CD3"
        ],
        correct: 1,
        explanation: "ALK pozitivní ALCL (spojený s translokací t(2;5)) postihuje mladší pacienty a vykazuje výbornou odpověď na léčbu s 5letým přežitím přes 80 %. ALK negativní forma postihuje starší a má výrazně horší prognózu."
      },
      {
        question: "Jak se nazývá kožní T-lymfom charakterizovaný intraepidermálními shluky atypických T-buněk (Pautrierovými mikroabscesy) a dlouhodobým vývojem skvrn a plaků na kůži?",
        options: [
          "Sézaryho syndrom",
          "Mycosis fungoides",
          "EATL",
          "PTCL-NOS"
        ],
        correct: 1,
        explanation: "Mycosis fungoides je nejčastější primárně kožní T-lymfom. Je charakterizován epidermotropismem (nádorové buňky migrují do epidermis) a tvorbou Pautrierových mikroabscesů."
      },
      {
        question: "Která slizniční komplikace zažívacího traktu je typická pro EATL a bezprostředně ohrožuje život pacienta?",
        type: "type-in",
        correct: ["perforace střeva", "perforace tenkého střeva", "perforace"],
        explanation: "EATL (enteropatický T-lymfom) způsobuje hluboké vředy ve sliznici tenkého střeva, které často vedou k perforaci střeva a peritonitidě."
      }
    ]
},

  {
    id: "onco-16",
    title: "Plazmocytom, myelom",
    section: "Hematopatologie",
    category: "Onkologie",
    keywords: ["myelom", "Kahler", "paraprotein", "Bence-Jones", "osteolýza", "CRAB", "MGUS", "IL-6"],
    content: {
      definition: "Mnohočetný myelom (Kahlerova choroba) je maligní nádorové onemocnění vycházející z plazmatických buněk v kostní dřeni. Charakteristickým rysem je produkce monoklonálního imunoglobulinu nebo jeho lehkých řetězců (tzv. **paraproteinu** / M-proteinu).",
      etiology: "Neznámá. Roli hrají genetické translokace postihující gen pro těžký řetězec imunoglobulinu (IGH) a zvýšená stimulace interleukinem 6 (**IL-6**), který je klíčovým růstovým a přežívacím faktorem pro myelomové buňky.",
      pathogenesis: "Nádorové plazmatické buňky kolonizují kostní dřeň a secernují faktory (např. **RANKL**, MIP-1a), které stimulují osteoklasty k odbourávání kosti a inhibují osteoblasty (přes DKK1). Výsledkem je masivní **osteolýza** (rozpouštění kostní tkáně), která uvolňuje vápník do krevního oběhu. Dále buňky produkují nadbytek lehkých řetězců imunoglobulinů (kappa nebo lambda), které se filtrují v ledvinách, ucpávají tubuly a poškozují je (tzv. **Bence-Jonesova bílkovina**).",
      macroscopy: "V kostech skeletu (lebka, obratle, žebra) nacházíme mnohočetná, ostře ohraničená ložiska osteolýzy, která na RTG snímcích vypadají jako otvory ve sklenici (vzhled **prostříleného plechu** / punched-out lesions). Ledviny jsou zvětšené, bledé, tuhé. Solitární ložisko v kosti se označuje jako **solitární plazmocytom**.",
      microscopy: "Kostní dřeň je infiltrována klonálními plazmatickými buňkami (plazmocyty s excentricky uloženým kulatým jádrem s loukoťovitým uspořádáním chromatinu a bazofilní cytoplasmou s perinukleárním prosvětlením). V ledvinách nacházíme **myelomovou nefrózu**: v distálních tubulech a sběracích kanálcích jsou uloženy tvrdé, růžové (eosinofilní) proteinové odlitky (paraprotein) obklopené reaktivními obřími buňkami z cizích těles.",
      clinical: "Klinická manifestace se shrnuje pod akronym **CRAB**: \n- **C** (Calcium): hyperkalcémie (zácpa, zmatenost, polyurie), \n- **R** (Renal insufficiency): renální selhání způsobené toxickým účinkem lehkých řetězců na tubuly, \n- **A** (Anemia): chudokrevnost z útlaku krvetvorby v kostní dřeni (myelofthíza), \n- **B** (Bone lesions): bolesti kostí (zejména v zádech), patologické zlomeniny obratlů a žeber. \nPrekurzorovým stadiem je **MGUS** (monoklonální gamapatie nejasného významu), která má stabilní hladinu paraproteinu a **chybí u ní příznaky CRAB**."
    },
    quiz: [
      {
        question: "Co znamená akronym CRAB používaný pro klinické projevy mnohočetného myelomu?",
        options: [
          "Cardiac failure, Renal failure, Anemia, Bone pain",
          "Calcium elevation (hyperkalcémie), Renal insufficiency (selhání ledvin), Anemia (chudokrevnost), Bone lesions (osteolytická ložiska kostí)",
          "Congestive heart, Respiratory distress, Ascites, Bleeding",
          "Cellular lysis, Radiotherapy, Alkylating agents, Bence-Jones"
        ],
        correct: 1,
        explanation: "Akronym CRAB definuje orgánové poškození způsobené myelomem. Hyperkalcémie vzniká z osteolýzy, renální selhání z obstrukce tubulů paraproteinem, anémie z myelofthízy a kostní destrukce (lytická ložiska) ze stimulace osteoklastů."
      },
      {
        question: "Jak se nazývá stav (prekurzor), který se vyznačuje přítomností monoklonálního paraproteinu v séru (< 30 g/l) a klonálních plazmocytů v kostní dřeni (< 10 %), ale pacient nemá žádné příznaky ze skupiny CRAB?",
        options: [
          "Solitární plazmocytom",
          "MGUS (monoklonální gamapatie nejasného významu)",
          "Kahlerova choroba",
          "Smoldering myelom"
        ],
        correct: 1,
        explanation: "MGUS (Monoclonal Gammopathy of Undetermined Significance) je stabilní prekurzor myelomu. Nemá žádné klinické projevy orgánového poškození. Ročně jich cca 1 % přechází do manifestního myelomu."
      },
      {
        question: "Jaký je hlavní mechanismus vzniku osteolytických ložisek (vzhledu prostříleného plechu) u pacientů s myelomem?",
        options: [
          "Nádorové buňky samy požírají kost enzymy",
          "Nádorové buňky produkují RANKL (a další faktory), což stimuluje osteoklasty k odbourávání kosti, a zároveň inhibují aktivitu osteoblastů",
          "Kyselá moč rozpouští kosti",
          "Kosti praskají pod tlakem svalů"
        ],
        correct: 1,
        explanation: "Myelomové buňky aktivují přirozené buňky odbourávající kost (osteoklasty) přes signalizaci RANKL. Současně secernují inhibitory (DKK1), které blokují tvorbu nové kosti osteoblasty. Kost se tak odbourává, ale netvoří."
      },
      {
        question: "Jak se nazývají lehké řetězce imunoglobulinů vylučované močí u pacientů s myelomem, které ucpávají tubuly a poškozují ledvinu?",
        type: "type-in",
        correct: ["Bence-Jonesova bílkovina", "Bence Jonesova bílkovina", "Bence-Jones", "Bence Jones"],
        explanation: "Bence-Jonesova bílkovina jsou volné lehké řetězce (kappa/lambda), které se filtrují v glomerulech, precipitují v tubulech a vyvolávají myelomovou nefrózu."
      },
      {
        question: "Který cytokin (interleukin) je nejdůležitějším růstovým a přežívacím faktorem pro plazmatické buňky v kostní dřeni?",
        type: "type-in",
        correct: ["IL-6", "interleukin 6", "interleukin-6"],
        explanation: "IL-6 (interleukin-6) je klíčový růstový faktor produkovaný buňkami stromatu dřeně, který podporuje přežívání a dělení myelomových buněk."
      }
    ]
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
    keywords: ["karcinom", "plíce", "malobuněčný", "nemalobuněčný", "hamartom", "epidermoidní", "adenokarcinom", "karcinoid", "TTF-1", "EGFR", "ALK", "Pancoast", "Azzopardi"],
    content: {
      definition: "Nádory plic se dělí na benigní (vzácné, např. chondroidní hamartom) a maligní, z nichž 90–95 % tvoří bronchogenní karcinom. Ten se klinicko-patologicky dělí na dvě zásadní skupiny: nemalobuněčný karcinom (NSCLC, cca 85 %) a malobuněčný karcinom (SCLC, cca 15 %). Samostatnou skupinu neuroendokrinních tumorů tvoří plicní karcinoidy.",
      etiology: "Kouření tabáku (způsobuje 85–90 % všech případů karcinomů plic, riziko koreluje s počtem vykouřených cigaret a dobou kouření), expozice radonu, azbestu (synergický účinek s kouřením), znečištěné ovzduší, průmyslové noxy (arsen, nikl, chrom).",
      pathogenesis: "1. **Benigní nádory**: *Chondroidní hamartom* – nejčastější, jde o benigní afekci obsahující směs tkání plicní stěny (chrupavka, tuk, vazivo, epitel).\n2. **Nemalobuněčný karcinom (NSCLC)**:\n- *Adenokarcinom (nejčastější, 40 %)*: roste periferně (často v plicních jizvách), častý u žen a nekuřáků. Prekurzory: Atypická adenomatózní hyperplazie (AAH) -> Adenocarcinoma in situ (AIS, dříve bronchoalveolární karcinom - šíří se lepidicky podél alveolárních sept). Časté jsou řidičské (driver) mutace: **EGFR, ALK translokace, KRAS, ROS1**.\n- *Dlaždicobuněčný (spinocelulární) karcinom (30 %)*: roste centrálně v hlavních bronších. Předchází mu dlaždicová metaplazie a dysplazie epitelu u kuřáků. Má sklon k centrální nekróze a kavitaci (tvorbě dutin). Produkuje protein podobný parathormonu (**PTHrP**), což vede k paraneoplastické hyperkalcémii.\n- *Velkobuněčný karcinom (10 %)*: špatně diferencovaný, anaplastický, diagnóza per exclusionem.\n3. **Malobuněčný karcinom (SCLC, 15 %)**: centrálně rostoucí, neuroendokrinní malignita s extrémně vysokou mitotickou aktivitou. Silná asociace s kouřením. Typická produkce hormonů (paraneoplastické syndromy: **SIADH** – nadbytek ADH vedoucí k hyponatrémii, **Cushingův syndrom** – nadbytek ACTH, **Lambert-Eatonův myastenický syndrom** – autoprotilátky proti vápníkovým kanálům).\n4. **Karcinoid (Neuroendokrinní tumor)**: *typický karcinoid* (low-grade, benigní/nízce maligní, roste polypózně do lumenu bronchu) a *atypický karcinoid* (intermediate-grade). Může vyvolat karcinoidový syndrom (produkce serotoninu).",
      macroscopy: "Centrální karcinomy (SCLC, spinocelulární k.): tuhá, šedobílá masa vycházející z velkých bronchů v oblasti hilu, zužující lumen (vede k atelektáze a poststenotické pneumonii za překážkou), šíří se do mediastina a uzlin. Periferní karcinomy (adenokarcinom): solitární uzel pod pleurou, často vtahuje pleuru dovnitř (pleurální svraštění). Hamartom: ostře ohraničený, tvrdý, laločnatý uzel (vzhled 'bílého mramoru').",
      microscopy: "- *Adenokarcinom*: žlázové formace, tvorba mucinu (hlenu), imunohistochemická pozitivita markers **TTF-1** a **Napsin A**.\n- *Dlaždicobuněčný k.*: čepy atypických buněk s mezibuněčnými můstky (desmosomy) a keratinizací (keratinové / rakovinové perly).\n- *Malobuněčný k.*: drobné uniformní buňky s minimem cytoplasmy a tmavými jádry bez patrných jadérek (vzhled **ovesných zrn** / oat cells). Typický **Azzopardiho fenomén** (modré zbarvení cévních stěn způsobené inkrustací DNA z rozpadlých nádorových buněk). Pozitivita neuroendokrinních markerů: **CD56, chromogranin, synaptofysin**.\n- *Hamartom*: ložiska zralé hyalinní chrupavky, tuku, vaziva a štěrbiny vystlané plicním epitelem.",
      clinical: "Projevuje se kašlem (zejména změna charakteru kašle u kuřáka), hemoptýzou, dušností, úbytkem hmotnosti. Lokální šíření může způsobit **syndrom horní duté žíly** (útlak v. cava superior – edém obličeje a krku, dilatace povrchových cév), Pancoastův tumor (karcinom apexu plíce utlačující plexus brachialis a sympatikus – Hornerova triáda: mióza, ptóza, enoftalmus, anhidróza). Malobuněčný karcinom je v době záchytu téměř vždy generalizovaný a neléčí se resekcí, ale chemoterapií. NSCLC v časném stadiu podstupují resekci (lobektomie, pneumonektomie) a u adenokarcinomů se vyšetřují driver mutace pro cílenou biologickou léčbu."
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
      },
      {
        question: "Který paraneoplastický syndrom je spojen s produkcí parathormonu podobného proteinu (PTHrP) a u kterého typu plicního karcinomu ho nacházíme?",
        options: [
          "SIADH (hyponatrémie) u malobuněčného karcinomu",
          "Hyperkalcémie u dlaždicobuněčného karcinomu",
          "Cushingův syndrom u adenokarcinomu",
          "Lambert-Eatonův syndrom u velkobuněčného karcinomu"
        ],
        correct: 1,
        explanation: "Dlaždicobuněčný karcinom plic často produkuje protein podobný parathormonu (PTHrP), což vede k patologické resorpci vápníku z kostí a vzniku hyperkalcémie."
      },
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
      },
      {
        question: "Jak se nazývá nádor plicního apexu (hrotu), který může utlačovat krční sympatikus a způsobit Hornerův syndrom?",
        type: "type-in",
        correct: ["Pancoastův tumor", "Pancoastův", "Pancoast"],
        explanation: "Pancoastův tumor roste v plicním hrotu a způsobuje destrukci žeber, útlak plexus brachialis (bolest paže) a krčního sympatiku (Hornerův syndrom: mióza, ptóza, enoftalmus)."
      }
    ]
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
      clinical: "Pleomorfní adenom se musí vyoperovat s dostatečným lemem zdravé tkáně (parotidektomie), protože vytváří mikroskopické prstovité výběžky (pseudopodie) prorůstající pouzdrem do okolí. Pouhé vyloupnutí (enukleace) nádoru je hrubou chybou, po které téměř vždy následuje **lokální recidiva**. Při operaci existuje vysoké riziko poškození **nervus facialis** (lícního nervu), který prochází středem glandula parotis."
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
      etiology: "Jícen: 1. **Spinocelulární karcinom** (asociován s kouřením a alkoholem, typicky postihuje horní a střední třetinu jícnu), 2. **Adenokarcinom** (vzniká na podkladě **Barrettova jícnu** při těžkém chronickém refluxu - GERD, postihuje výhradně dolní třetinu jícnu). Žaludek: Helicobacter pylori, uzená jídla (nitrosaminy), genetika (mutace genu CDH1 pro E-cadherin - dědičný difuzní karcinom žaludku).",
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
