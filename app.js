// app.js - Aplikační logika studijního portálu Obecné Patologie

document.addEventListener("DOMContentLoaded", () => {

  // Bezpečnostní funkce pro prevenci XSS
  function escapeHTML(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // Pomocná funkce pro formátování textu (převod ** na <strong>, * na <em>, \n na <br>)
  function formatText(str) {
    if (str === null || str === undefined) return "";
    let escaped = escapeHTML(str);
    return escaped
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");
  }

  // Databáze eponymních pojmů a jejich definic
  const EPONYMS_DB = [
    {
      name: "Auerovy tyčinky",
      def: "Intracytoplasmatické jehlicovité struktury vzniklé splynutím azurofilních granul v myeloidních blastech (typické pro AML).",
      patterns: [/Auer/i]
    },
    {
      name: "Gumprechtovy stíny",
      def: "Křehké, rozpadlé lymfocyty v nátěru periferní krve (typické pro chronickou lymfocytární leukémii - CLL).",
      patterns: [/Gumprecht/i]
    },
    {
      name: "Burkittův lymfom",
      def: "Extrémně agresivní B-buněčný nehodgkinský lymfom spojený s translokací t(8;14) a infekcí EBV.",
      patterns: [/Burkitt/i]
    },
    {
      name: "Hodgkinův lymfom",
      def: "Maligní lymfoproliferativní onemocnění charakterizované přítomností Reed-Sternbergových buněk a reaktivním buněčným pozadím.",
      patterns: [/Hodgkin/i]
    },
    {
      name: "Reed-Sternbergovy buňky",
      def: "Velké vícejaderné nádorové B-buňky se zrcadlovými jádry a výraznými jadérky (vzhled „sovích očí“) u Hodgkinova lymfomu.",
      patterns: [/Reed[- ]Sternberg/i]
    },
    {
      name: "Balserovy nekrózy",
      def: "Enzymatické nekrózy tukové tkáně (liponekrózy) u akutní pankreatitidy způsobené uvolněním lipáz s tvorbou vápenatých mýdel (křídově bílá ložiska).",
      patterns: [/Balser/i]
    },
    {
      name: "Gaucherova choroba",
      def: "Nejčastější lyzosomální střádavé onemocnění ze skupiny lipidóz, způsobené deficitem glukocerebrosidázy.",
      patterns: [/Gaucher/i]
    },
    {
      name: "Pompeova choroba",
      def: "Glykogenóza typu II, lyzosomální střádavé onemocnění způsobené deficitem kyselé alfa-glukosidázy.",
      patterns: [/Pompe/i]
    },
    {
      name: "Gilbertův syndrom",
      def: "Benigní dědičná porucha konjugace bilirubinu způsobená sníženou aktivitou UDP-glukuronosyltransferázy.",
      patterns: [/Gilbert/i]
    },
    {
      name: "Crigler-Najjarův syndrom",
      def: "Dědičná nekonjugovaná hyperbilirubinémie způsobená těžkým deficitem (typ II) nebo úplným chyběním (typ I) UDP-glukuronosyltransferázy.",
      patterns: [/Crigler/i]
    },
    {
      name: "Dubin-Johnsonův syndrom",
      def: "Dědičná konjugovaná hyperbilirubinémie s poruchou vylučování bilirubinu do žluče, projevující se černým zbarvením jater.",
      patterns: [/Dubin/i]
    },
    {
      name: "Lynchův syndrom (HNPCC)",
      def: "Dědičný nepolypózní kolorektální karcinom způsobený zárodečnou mutací v MMR genech (oprava nesprávně spárovaných bází).",
      patterns: [/Lynch/i]
    },
    {
      name: "Peutz-Jeghersův syndrom",
      def: "Autozomálně dominantní syndrom s hamartomovou polypózou v GIT a typickými pigmentovými skvrnami na sliznicích a rtech.",
      patterns: [/Peutz/i]
    },
    {
      name: "Courvoisierův příznak",
      def: "Hmatný zvětšený nebolestivý žlučník doprovázený žloutenkou, typicky způsobený nádorem hlavy pankreatu utlačujícím žlučové cesty.",
      patterns: [/Courvoisier/i]
    },
    {
      name: "Grawitzův tumor",
      def: "Tradiční a historický název pro světlobuněčný (jasnobuněčný) karcinom ledviny (RCC).",
      patterns: [/Grawitz/i]
    },
    {
      name: "Wilmsův tumor (nefroblastom)",
      def: "Maligní embryonální nádor ledvin u dětí vykazující trifázickou strukturu (blastém, stroma, epitel).",
      patterns: [/Wilms/i]
    },
    {
      name: "Schiller-Duvalova tělíska",
      def: "Histologické struktury napodobující primitivní glomeruly s centrální cévou, patognomické pro nádor ze žloutkového váčku.",
      patterns: [/Schiller[- ]Duval/i]
    },
    {
      name: "Krukenbergův tumor",
      def: "Oboustranná ovariální metastáza hlenotvorného (mucinózního) karcinomu, nejčastěji ze žaludku, tvořená buňkami tvaru pečetního prstenu.",
      patterns: [/Krukenberg/i]
    },
    {
      name: "Homer-Wrightovy rozety",
      def: "Uspořádání nádorových buněk do kruhu kolem centrální růžové fibrilární zóny bez centrálního lumina (typické pro neuroblastom, meduloblastom).",
      patterns: [/Homer[- ]Wright/i]
    },
    {
      name: "Cushingův syndrom",
      def: "Klinický stav vyvolaný dlouhodobým nadbytkem glukokortikoidů (kortizolu), např. v důsledku adenomu nadledviny nebo hypofýzy.",
      patterns: [/Cushing/i]
    },
    {
      name: "Connův syndrom",
      def: "Primární hyperaldosteronismus způsobený adenomem kůry nadledvin produkujícím aldosteron, projevující se hypertenzí a hypokalémií.",
      patterns: [/Conn/i]
    },
    {
      name: "Crohnova nemoc",
      def: "Nespecifický zánět postihující diskontinuálně jakoukoli část trávicího traktu, typicky transmurálně a s přítomností nesýřících granulomů.",
      patterns: [/Crohn/i]
    },
    {
      name: "Barrettův jícen",
      def: "Metaplazie dlaždicového epitelu jícnu na cylindrický epitel střevního typu jako následek refluxní ezofagitidy (prekanceróza).",
      patterns: [/Barrett/i]
    },
    {
      name: "Ghonův infekt",
      def: "Primární ložisko plicní tuberkulózy, které spolu s postiženou regionální lymfatickou uzlinou tvoří tzv. primární komplex.",
      patterns: [/Ghon/i]
    },
    {
      name: "Aschoffova tělíska",
      def: "Charakteristické granulomatózní uzlíky ve stěně srdce (myokardu) u revmatické horečky obsahující Anitschkowovy buňky.",
      patterns: [/Aschoff/i]
    },
    {
      name: "Anitschkowovy buňky",
      def: "Aktivované histiocyty s charakteristickým uspořádáním chromatinu v jádře připomínajícím housenku, typické pro revmatickou horečku.",
      patterns: [/Anitschkow/i]
    },
    {
      name: "Russellova tělíska",
      def: "Intracytoplasmatické akumulace nadbytečně syntetizovaných imunoglobulinů v plazmatických buňkách.",
      patterns: [/Russell/i]
    },
    {
      name: "Virchowova uzlina",
      def: "Zvětšená levá supraklavikulární lymfatická uzlina, která je častým místem metastáz nádorů žaludku a jiných břišních orgánů.",
      patterns: [/Virchow/i]
    },
    {
      name: "Trousseauův syndrom",
      def: "Spontánní a migrující žilní tromboflebitida spojená s viscerálními malignitami, nejčastěji karcinomem pankreatu (paraneoplastický projev).",
      patterns: [/Trousseau/i]
    },
    {
      name: "Bence-Jonesova bílkovina",
      def: "Monoklonální lehké řetězce imunoglobulinů vylučované močí u pacientů s mnohočetným myelomem (Kahlerovou chorobou).",
      patterns: [/Bence[- ]Jones/i]
    },
    {
      name: "Kahlerova choroba",
      def: "Alternativní a klinicky používaný název pro mnohočetný myelom - maligní nádor z plazmatických buněk.",
      patterns: [/Kahler/i]
    },
    {
      name: "Kaposiho sarkom",
      def: "Maligní mezenchymální nádor vycházející z endotelu cév, vyvolaný virem HHV-8 a silně spojený s infekcí HIV (AIDS).",
      patterns: [/Kaposi/i]
    },
    {
      name: "Downův syndrom",
      def: "Vrozená chromozomální aberace způsobená trizomií 21. chromozomu, spojená s typickými dysmorfickými rysy a mentální retardací.",
      patterns: [/Down/i]
    },
    {
      name: "Turnerův syndrom",
      def: "Vrozená chromozomální aberace u žen s karyotypem 45,X, projevující se gonádovou dysgenezí, neplodností a nižším vzrůstem.",
      patterns: [/Turner/i]
    },
    {
      name: "Klinefelterův syndrom",
      def: "Vrozená chromozomální aberace u mužů s karyotypem 47,XXY, projevující se hypogonadismem, sterilitou a gynekomastií.",
      patterns: [/Klinefelter/i]
    },
    {
      name: "Marfanův syndrom",
      def: "Dědičná autozomálně dominantní porucha pojivové tkáně způsobená mutací genu pro fibrilin-1, s rizikem disekce aorty.",
      patterns: [/Marfan/i]
    },
    {
      name: "Ehlers-Danlosův syndrom",
      def: "Skupina dědičných syndromů charakterizovaných poruchou syntézy kolagenu, projevující se hyperelasticitou kůže a kloubní hypermobilitou.",
      patterns: [/Ehlers/i]
    },
    {
      name: "Breslowova tloušťka",
      def: "Prognostická klasifikace kožního melanomu určující hloubku invaze v milimetrech vertikální tloušťky nádoru.",
      patterns: [/Breslow/i]
    },
    {
      name: "Clarkův level",
      def: "Klasifikace melanomu kůže hodnotící hloubku invaze podle zasažených anatomických vrstev kůže (epidermis až subkutis).",
      patterns: [/Clark/i]
    },
    {
      name: "Malloryho tělíska",
      def: "Eozinofilní intracytoplasmatické inkluze agregovaných intermediárních filament (cytokeratinů) v hepatocytech, typické pro alkoholické poškození jater.",
      patterns: [/Mallory/i]
    },
    {
      name: "Zenkerův divertikl",
      def: "Pulsní divertikl stěny jícnu a hltanu v Kilianově trojúhelníku nad horním jícnovým svěračem.",
      patterns: [/Zenker/i]
    },
    {
      name: "Whippleova choroba",
      def: "Systémové infekční onemocnění vyvolané bakterií Tropheryma whipplei, projevující se malabsorpcí, průjmy a přítomností PAS-pozitivních makrofágů.",
      patterns: [/Whipple/i]
    },
    {
      name: "Hirschsprungova nemoc",
      def: "Vrozené megakolon způsobené poruchou migrace buněk neurální lišty, což vede k aganglionóze distálního tlustého střeva.",
      patterns: [/Hirschsprung/i]
    },
    {
      name: "Meckelův divertikl",
      def: "Pravý divertikl ilea vzniklý nedokonalým uzávěrem ductus omphalomesentericus, často obsahuje ektopickou žaludeční sliznici.",
      patterns: [/Meckel/i]
    },
    {
      name: "Wilsonova choroba",
      def: "Dědičná porucha vylučování mědi do žluče, vedoucí k jejímu střádání v játrech, mozku (lentikulární degenerace) a rohovce.",
      patterns: [/Wilson/i]
    },
    {
      name: "Goodpastureův syndrom",
      def: "Autoimunitní onemocnění vyvolané protilátkami proti bazální membráně (anti-GBM) plicních alveolů a glomerulů ledvin.",
      patterns: [/Goodpasture/i]
    },
    {
      name: "Alportův syndrom",
      def: "Dědičná nefritida způsobená mutací genů pro kolagen typu IV, spojená s hematurií, progresivním selháním ledvin a hluchotou.",
      patterns: [/Alport/i]
    },
    {
      name: "Wegenerova granulomatóza",
      def: "Systémová nekrotizující vaskulitida postihující horní a dolní dýchací cesty a ledviny, asociovaná s protilátkami c-ANCA (PR3-ANCA).",
      patterns: [/Wegener/i]
    },
    {
      name: "Takayasuova arteritida",
      def: "Granulomatózní vaskulitida velkých tepen (zejména aorty a jejích větví), typická pro mladé ženy (bezpulzní nemoc).",
      patterns: [/Takayasu/i]
    },
    {
      name: "Buergerova choroba",
      def: "Thromboangiitis obliterans, segmentální zánětlivé a trombotické postižení malých a středních cév končetin, typicky u mladých kuřáků.",
      patterns: [/Buerger/i]
    },
    {
      name: "Kawasakiho nemoc",
      def: "Akutní febrilní vaskulitida středně velkých tepen u malých dětí, s predilekčním postižením koronárních tepen (riziko aneurysmat).",
      patterns: [/Kawasaki/i]
    },
    {
      name: "Libman-Sacksova endokarditida",
      def: "Nesterilní verukózní endokarditida u systémového lupus erythematodes (SLE), s depozity na obou stranách chlopně.",
      patterns: [/Libman/i]
    },
    {
      name: "Rothovy skvrny",
      def: "Krvácení do sítnice s bledým středem (tvořeným fibrinovým koagulem), typicky u infekční endokarditidy.",
      patterns: [/Roth/i]
    },
    {
      name: "Janewayovy léze",
      def: "Nebolestivé erytematózní či hemoragické makuly na dlaních a ploskách u infekční endokarditidy (způsobené septickými emboly).",
      patterns: [/Janeway/i]
    },
    {
      name: "Oslerovy uzly",
      def: "Bolestivé imunokomplexové uzlíky na prstech rukou či nohou, typické pro infekční endokarditidu.",
      patterns: [/Osler/i]
    },
    {
      name: "Langhansovy obrovské buňky",
      def: "Vícejaderné obrovské buňky vznikající fúzí epiteloidních makrofágů u specifických zánětů (typické pro tuberkulózní granulomy).",
      patterns: [/Langhans/i]
    },
    {
      name: "Langerhansovy buňky / Langerhansovy ostrůvky",
      def: "Dendritické buňky v kůži (místo původu histiocytózy) nebo endokrinní buňky pankreatu (Langerhansovy ostrůvky).",
      patterns: [/Langerhans/i]
    },
    {
      name: "Wermerův syndrom (MEN 1)",
      def: "Syndrom mnohočetné endokrinní neoplazie postihující příštítná tělíska (hyperplazie/adenom), pankreas (NETy) a hypofýzu (adenom).",
      patterns: [/Wermer/i]
    },
    {
      name: "Sippleův syndrom (MEN 2A)",
      def: "Syndrom mnohočetné endokrinní neoplazie postihující medulární karcinom štítné žlázy, feochromocytom a příštítná tělíska.",
      patterns: [/Sipple/i]
    },
    {
      name: "Cowdryho inkluze",
      def: "Intranukleární eozinofilní virové inkluze typické pro infekci viry ze skupiny Herpesviridae.",
      patterns: [/Cowdry/i]
    },
    {
      name: "Negriho tělíska",
      def: "Eozinofilní intracytoplasmatické inkluze v neuronech (zejména Purkyňových buňkách a hippokampu), patognomické pro vzteklinu.",
      patterns: [/Negri/i]
    },
    {
      name: "Lewyho tělíska",
      def: "Intracytoplasmatické eozinofilní inkluze tvořené alfa-synukleinem v neuronech u Parkinsonovy choroby a demence s Lewyho tělísky.",
      patterns: [/Lewy/i]
    },
    {
      name: "Burtonův lem",
      def: "Modrošedý lem na dásních způsobený usazováním sulfidu olovnatého při chronické otravě olovem.",
      patterns: [/Burton/i]
    },
    {
      name: "Hedingerův syndrom",
      def: "Pravostranná srdeční endokarditida s fibrózou chlopní u pacientů s karcinoidovým syndromem vyvolaným serotoninem.",
      patterns: [/Hedinger/i]
    },
    {
      name: "Meigsův syndrom",
      def: "Koexistence benigního ovariálního fibromu, ascitu a hydrothoraxu, mizící po odstranění tumoru.",
      patterns: [/Meigs/i]
    },
    {
      name: "Aschoffovo-Rokitanské sinusy",
      def: "Divertikly sliznice žlučníku pronikající do svalové vrstvy, spojené s chronickou cholecystitidou.",
      patterns: [/Rokitansk/i]
    },
    {
      name: "Crookeovy buňky",
      def: "Bazofilní buňky adenohypofýzy vykazující hyalinní změnu v důsledku chronického nadbytku glukokortikoidů (u Cushingova syndromu).",
      patterns: [/Crooke/i]
    },
    {
      name: "Kimmelstiel-Wilsonova glomeruloskleróza",
      def: "Nodulární interkapilární glomeruloskleróza, patognomický histologický nález u diabetické nefropatie.",
      patterns: [/Kimmelstiel/i]
    },
    {
      name: "Lichtenbergovy obrazce",
      def: "Stromovité zarudnutí kůže vznikající po zásahu bleskem v důsledku dilatace podkožních kapilár.",
      patterns: [/Lichtenberg/i]
    },
    {
      name: "Carneyův komplex",
      def: "Dědičný syndrom charakterizovaný myxomy (srdečními i kožními), skvrnitou pigmentací kůže a endokrinní hyperaktivitou.",
      patterns: [/Carney/i]
    },
    {
      name: "Lightova kritéria",
      def: "Sada biochemických kritérií sloužící k rozlišení pleurálního exsudátu od transudátu.",
      patterns: [/Light/i]
    },
    {
      name: "Löfgrenův syndrom",
      def: "Akutní forma sarkoidózy charakterizovaná triádou: erythema nodosum, bilaterální hilová lymfadenopatie a polyartritida.",
      patterns: [/Lofgren/i, /Löfgren/i]
    },
    {
      name: "Munroovy mikroabscesy",
      def: "Drobné nahromadění neutrofilů v rohovité vrstvě epidermis (stratum corneum) u lupénky (psoriázy).",
      patterns: [/Munro/i]
    },
    {
      name: "Pautrierovy mikroabscesy",
      def: "Intraepiteliální shluky atypických T-lymfocytů v epidermis, typické pro mycosis fungoides (kožní T-lymfom).",
      patterns: [/Pautrier/i]
    },
    {
      name: "Stokesův límec",
      def: "Otok krku, hlavy a horních končetin doprovázený cyanózou v důsledku syndromu horní duté žíly (útlak nádorem v mediastinu).",
      patterns: [/Stokes/i]
    },
    {
      name: "Zahnovy linie / Zahnova infarkt",
      def: "Zahnovy linie: střídající se světlé a tmavé vrstvy v intravitálním trombu. Zahnovy infarkty: pseudo-infarkty jater způsobené trombózou v. portae.",
      patterns: [/Zahn/i]
    },
    {
      name: "Zollinger-Ellisonův syndrom",
      def: "Gastrinom (nejčastěji pankreatu nebo duodena) produkující nadbytek gastrinu, což vede k těžké hyperaciditě a mnohočetným peptickým vředům.",
      patterns: [/Zollinger/i]
    }
  ];

  // Získání eponymních pojmů pro otázku
  function getEponymsForQuestion(q) {
    if (!q || !q.content) return [];
    const textToSearch = [
      q.title || "",
      q.section || "",
      (q.keywords || []).join(" "),
      q.content.definition || "",
      q.content.etiology || "",
      q.content.pathogenesis || "",
      q.content.macroscopy || "",
      q.content.microscopy || "",
      q.content.clinical || ""
    ].join(" ").toLowerCase();

    return EPONYMS_DB.filter(ep => {
      return ep.patterns.some(pattern => pattern.test(textToSearch));
    });
  }

  // 1. Sloučení databází otázek
  const QUESTIONS = [
    ...(window.DATA_PATOLOGIE_1 || []).map(q => ({ ...q, category: "Obecná" })),
    ...(window.DATA_PATOLOGIE_2 || []).map(q => ({ ...q, category: "Obecná" })),
    ...(window.DATA_PATOLOGIE_3 || []).map(q => ({ ...q, category: "Obecná" })),
    ...(window.DATA_SPECIAL_1 || []).map(q => ({ ...q, category: "Speciální" })),
    ...(window.DATA_SPECIAL_2 || []).map(q => ({ ...q, category: "Speciální" })),
    ...(window.DATA_ONCO_1 || []).map(q => ({ ...q, category: "Onkologie" })),
    ...(window.DATA_ONCO_2 || []).map(q => ({ ...q, category: "Onkologie" }))
  ];

  // Ověření, zda se data načetla
  if (QUESTIONS.length === 0) {
    console.error("Chyba: Databáze otázek je prázdná nebo nebyla správně načtena.");
    document.getElementById("cards-grid").innerHTML = "<p class='text-center text-rose'>Chyba při načítání databáze otázek. Zkontrolujte prosím datové soubory.</p>";
    return;
  }

  // 2. Definice intervalů Leitnerova systému (v milisekundách)
  const LEITNER_INTERVALS = {
    1: 24 * 60 * 60 * 1000,      // Box 1: 1 den
    2: 2 * 24 * 60 * 60 * 1000,  // Box 2: 2 dny
    3: 5 * 24 * 60 * 60 * 1000,  // Box 3: 5 dní
    4: 10 * 24 * 60 * 60 * 1000  // Box 4: 10 dní (Zvládnuté)
  };

  // 3. Inicializace stavu (Pokrok uživatele) z localStorage
  let userProgress = JSON.parse(localStorage.getItem("patologie_progress")) || {};
  
  // Zajištění, že všechny otázky mají záznam v progressu
  QUESTIONS.forEach(q => {
    if (!userProgress[q.id]) {
      userProgress[q.id] = {
        box: 1,
        lastReviewed: null,
        nextReview: null, // null znamená, že nebyla nikdy testována (a je tedy k dispozici okamžitě)
        testedCount: 0,
        correctCount: 0
      };
    }
  });
  saveProgress();

  // 4. Globální stav aplikace
  let activeQuestion = null;
  let activeTab = "tab-study";
  let activeFilterCategory = "all";
  let activeFilterSection = "all";
  let activeFilterStatus = "all";
  let activeSearchQuery = "";
  
  // Herní stav pro přiřazovačku
  let gameMode = "normal"; // "normal" nebo "eponyms"
  let gameSelectedTerm = null;
  let gameSelectedDesc = null;
  let gamePairsLeft = 0;
  let gameErrorsCount = 0;
  let gameCurrentPairs = []; // Obsahuje aktivní dvojice v aktuálním kole

  // 5. DOM Elementy
  const cardsGrid = document.getElementById("cards-grid");
  const searchInput = document.getElementById("search-input");
  const categoryFilter = document.getElementById("category-filter");
  const sectionFilter = document.getElementById("section-filter");
  const statusFilter = document.getElementById("status-filter");
  const totalQuestionsCountEl = document.getElementById("total-questions-count");

  // Dynamická inicializace celkového počtu otázek
  if (totalQuestionsCountEl) {
    totalQuestionsCountEl.textContent = QUESTIONS.length;
  }
  
  // Dom elementů statistik
  const statProgressPct = document.getElementById("stat-progress-pct");
  const statProgressBar = document.getElementById("stat-progress-bar");
  const statProgressRatio = document.getElementById("stat-progress-ratio");
  const box1CountEl = document.getElementById("box-1-count");
  const box2CountEl = document.getElementById("box-2-count");
  const box3CountEl = document.getElementById("box-3-count");
  const box4CountEl = document.getElementById("box-4-count");
  const statDueCountEl = document.getElementById("stat-due-count");
  const statDueDescEl = document.getElementById("stat-due-desc");
  const studyDueBtn = document.getElementById("study-due-btn");
  
  // Dialogové okno
  const detailDialog = document.getElementById("detail-dialog");
  const dialogCloseBtn = document.getElementById("dialog-close");
  const dialogTitle = document.getElementById("dialog-title");
  const dialogSection = document.getElementById("dialog-section");
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");
  
  // Výkladové elementy
  const studyDefinition = document.getElementById("study-definition");
  const studyEtiology = document.getElementById("study-etiology");
  const studyPathogenesis = document.getElementById("study-pathogenesis");
  const studyMacroscopy = document.getElementById("study-macroscopy");
  const studyMicroscopy = document.getElementById("study-microscopy");
  const studyClinical = document.getElementById("study-clinical");
  const studyAdditionalInfoContainer = document.getElementById("study-additional-info-container");
  const studyAdditionalInfoContent = document.getElementById("study-additional-info-content");
  const studyAdditionalInfoToggle = document.getElementById("study-additional-info-toggle");
  const leitnerBtns = document.querySelectorAll(".leitner-btn");
  
  // Kvízové elementy
  const quizContainer = document.getElementById("quiz-container");
  
  // Elementy hry
  const gameDialog = document.getElementById("game-dialog");
  const gameOpenBtn = document.getElementById("matching-game-open-btn");
  const gameOpenEponymsBtn = document.getElementById("matching-game-eponyms-open-btn");
  const gameCloseBtn = document.getElementById("game-close");
  const gameColLeft = document.getElementById("game-column-left");
  const gameColRight = document.getElementById("game-column-right");
  const gameLeftCountEl = document.getElementById("game-left-count");
  const gameErrorsEl = document.getElementById("game-errors");
  const gameResetBtn = document.getElementById("game-reset-btn");
  
  // Přepínač motivu
  const themeToggle = document.getElementById("theme-toggle");

  // 6. Funkce pro správu uložení
  function saveProgress() {
    localStorage.setItem("patologie_progress", JSON.stringify(userProgress));
  }

  // 7. Vyhodnocení, zda je karta "Due" (k opakování)
  function isCardDue(id) {
    const qProgress = userProgress[id];
    if (!qProgress) return true;
    
    // Pokud nebyla nikdy testována/prohlížena, je due (chceme ji uživateli předhodit)
    if (!qProgress.lastReviewed) return true;
    
    // Pokud nastal čas příštího opakování
    if (qProgress.nextReview && Date.now() >= qProgress.nextReview) return true;
    
    return false;
  }

  // 8. Výpočet a aktualizace statistik na Dashboardu
  function updateDashboard() {
    let totalQuestions = QUESTIONS.length;
    let b1 = 0, b2 = 0, b3 = 0, b4 = 0;
    let dueCount = 0;

    QUESTIONS.forEach(q => {
      const qProgress = userProgress[q.id];
      if (qProgress) {
        if (qProgress.box === 1) b1++;
        else if (qProgress.box === 2) b2++;
        else if (qProgress.box === 3) b3++;
        else if (qProgress.box === 4) b4++;

        if (isCardDue(q.id)) {
          dueCount++;
        }
      }
    });

    // Zvládnuté jsou ty v Boxu 4
    let masteredCount = b4;
    let progressPct = Math.round((masteredCount / totalQuestions) * 100);

    // Vykreslení do UI
    statProgressPct.textContent = `${progressPct} %`;
    statProgressBar.style.width = `${progressPct}%`;
    statProgressRatio.textContent = `Zvládnuté: ${masteredCount} z ${totalQuestions} otázek`;

    box1CountEl.textContent = b1;
    box2CountEl.textContent = b2;
    box3CountEl.textContent = b3;
    box4CountEl.textContent = b4;

    statDueCountEl.textContent = dueCount;
    if (dueCount > 0) {
      statDueDescEl.textContent = `Dnes by ses měl/a podívat na ${dueCount} karet.`;
      studyDueBtn.style.display = "inline-flex";
    } else {
      statDueDescEl.textContent = "Skvělá práce! Pro dnešek máš vše splněno.";
      studyDueBtn.style.display = "none";
    }
  }

  // 9. Vykreslení gridu studijních karet
  function renderQuestionsGrid() {
    cardsGrid.innerHTML = "";
    
    const filteredQuestions = QUESTIONS.filter(q => {
      // Vyhledávání (titulky, kapitoly, klíčová slova)
      const matchesSearch = q.title.toLowerCase().includes(activeSearchQuery) || 
                            q.section.toLowerCase().includes(activeSearchQuery) || 
                            q.keywords.some(k => k.toLowerCase().includes(activeSearchQuery)) ||
                            q.content.microscopy.toLowerCase().includes(activeSearchQuery) ||
                            q.content.macroscopy.toLowerCase().includes(activeSearchQuery);
      
      // Filtr podle oboru
      const matchesCategory = activeFilterCategory === "all" || q.category === activeFilterCategory;
      
      // Filtr podle kapitol
      const matchesSection = activeFilterSection === "all" || q.section === activeFilterSection;
      
      // Filtr podle stavu studia
      let matchesStatus = true;
      const qProgress = userProgress[q.id];
      
      if (activeFilterStatus === "due") {
        matchesStatus = isCardDue(q.id);
      } else if (activeFilterStatus === "box-1") {
        matchesStatus = qProgress.box === 1 && qProgress.lastReviewed !== null;
      } else if (activeFilterStatus === "box-2") {
        matchesStatus = qProgress.box === 2;
      } else if (activeFilterStatus === "box-3") {
        matchesStatus = qProgress.box === 3;
      } else if (activeFilterStatus === "box-4") {
        matchesStatus = qProgress.box === 4;
      } else if (activeFilterStatus === "unstudied") {
        matchesStatus = qProgress.lastReviewed === null;
      }

      return matchesSearch && matchesCategory && matchesSection && matchesStatus;
    });

    if (filteredQuestions.length === 0) {
      cardsGrid.innerHTML = "<p class='text-center text-secondary grid-empty-message'>Žádné otázky neodpovídají zvoleným filtrům.</p>";
      return;
    }

    filteredQuestions.forEach(q => {
      const qProgress = userProgress[q.id];
      const card = document.createElement("div");
      card.className = "question-card";
      card.setAttribute("data-id", q.id);

      const isDue = isCardDue(q.id);
      const isUnstudied = qProgress.lastReviewed === null;

      const eponyms = getEponymsForQuestion(q);
      let eponymsHTML = "";
      if (eponyms.length > 0) {
        eponymsHTML = `
          <div class="card-eponyms-badges">
            ${eponyms.map(ep => `<span class="card-eponym-badge" title="${escapeHTML(ep.def)}">${escapeHTML(ep.name)}</span>`).join("")}
          </div>
        `;
      }

      card.innerHTML = `
        <div class="card-top">
          <span class="card-id">${escapeHTML(q.id)}</span>
          <div class="card-box-indicator b-${escapeHTML(qProgress.box)}" title="Krabička ${escapeHTML(qProgress.box)}"></div>
        </div>
        <h3 class="card-title">${escapeHTML(q.title)}</h3>
        ${eponymsHTML}
        <div class="card-footer">
          <span class="card-section">${escapeHTML(q.section)}</span>
          ${isDue ? `<span class="due-badge">K opakování</span>` : ""}
          ${isUnstudied && !isDue ? `<span class="due-badge" style="background-color: var(--primary-light); color: var(--primary); border-color: rgba(59,130,246,0.2)">Nová</span>` : ""}
        </div>
      `;

      cardsGrid.appendChild(card);
    });
  }

  // 10. Otevření detailu otázky
  function openQuestionDetail(id) {
    activeQuestion = QUESTIONS.find(q => q.id === id);
    if (!activeQuestion) return;

    // Resetovat aktivní záložku na "Výklad"
    switchTab("tab-study");

    // Naplnění textů
    dialogTitle.textContent = activeQuestion.title;
    dialogSection.textContent = activeQuestion.section;
    
    studyDefinition.innerHTML = formatText(activeQuestion.content.definition);
    studyEtiology.innerHTML = formatText(activeQuestion.content.etiology);
    studyPathogenesis.innerHTML = formatText(activeQuestion.content.pathogenesis);
    
    // Zvýraznění makro/mikro (specifické pro patologii)
    studyMacroscopy.innerHTML = formatText(activeQuestion.content.macroscopy);
    studyMicroscopy.innerHTML = formatText(activeQuestion.content.microscopy);
    studyClinical.innerHTML = formatText(activeQuestion.content.clinical);

    // Zobrazení a naplnění doplňujících podrobností
    if (activeQuestion.content.additionalInfo) {
      studyAdditionalInfoContainer.style.display = "block";
      studyAdditionalInfoContent.style.display = "none";
      studyAdditionalInfoToggle.classList.remove("expanded");
      const icon = studyAdditionalInfoToggle.querySelector(".toggle-icon");
      if (icon) icon.textContent = "▼";
      studyAdditionalInfoContent.innerHTML = formatText(activeQuestion.content.additionalInfo);
    } else {
      studyAdditionalInfoContainer.style.display = "none";
      studyAdditionalInfoContent.innerHTML = "";
    }

    // Zobrazení a naplnění eponymních pojmů
    const eponymsContainer = document.getElementById("study-eponyms-container");
    const eponymsList = document.getElementById("study-eponyms-list");
    if (eponymsContainer && eponymsList) {
      const eponyms = getEponymsForQuestion(activeQuestion);
      if (eponyms.length > 0) {
        eponymsList.innerHTML = eponyms.map(ep => `
          <div class="eponym-item">
            <div class="eponym-name">${escapeHTML(ep.name)}</div>
            <div class="eponym-def">${escapeHTML(ep.def)}</div>
          </div>
        `).join("");
        eponymsContainer.style.display = "block";
      } else {
        eponymsContainer.style.display = "none";
      }
    }

    // Vykreslení kvízu
    renderQuiz();

    // Zobrazení odkazu na mikroskopický preparát
    const oldPrepBtn = document.getElementById("open-preparat-btn-from-card");
    if (oldPrepBtn) oldPrepBtn.remove();

    const matchingPrep = findMatchingSlide(activeQuestion);
    if (matchingPrep) {
      const prepBtn = document.createElement("button");
      prepBtn.id = "open-preparat-btn-from-card";
      prepBtn.className = "btn-open-preparat-from-card";
      prepBtn.innerHTML = `🔬 Zobrazit preparát zkoušky: <strong>${escapeHTML(matchingPrep.title)}</strong>`;
      prepBtn.onclick = () => {
        detailDialog.close();
        document.body.style.overflow = "";
        openPreparatyDialogAndSelect(matchingPrep.id);
      };
      document.querySelector(".study-content").appendChild(prepBtn);
    }

    // Zobrazení dialogu
    detailDialog.showModal();
    document.body.style.overflow = "hidden"; // Zamezení rolování na pozadí
  }

  // 11. Přepínání záložek v detailu
  function switchTab(tabId) {
    activeTab = tabId;
    
    tabBtns.forEach(btn => {
      if (btn.getAttribute("data-tab") === tabId) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    tabPanels.forEach(panel => {
      if (panel.id === tabId) {
        panel.classList.add("active");
      } else {
        panel.classList.remove("active");
      }
    });
  }

  // 12. Vyhodnocení Spaced Repetition (tlačítka Leitnerova systému)
  function gradeQuestion(grade) {
    if (!activeQuestion) return;
    
    const qId = activeQuestion.id;
    const progress = userProgress[qId];
    const now = Date.now();

    let newBox = progress.box;

    if (grade === "wrong") {
      newBox = 1; // Chyba vrací kartu do Boxu 1
    } else if (grade === "good") {
      newBox = Math.min(progress.box + 1, 4); // Slibné posune o 1 box dopředu (max Box 4)
    } else if (grade === "perfect") {
      newBox = 4; // Skvělé okamžitě posune do Boxu 4
    }

    progress.box = newBox;
    progress.lastReviewed = now;
    progress.nextReview = now + LEITNER_INTERVALS[newBox];
    progress.testedCount++;

    saveProgress();
    updateDashboard();
    renderQuestionsGrid();
    closeDetailDialog();
  }

  function closeDetailDialog() {
    detailDialog.close();
    document.body.style.overflow = ""; // Obnovení rolování
    activeQuestion = null;
  }

  // 13. Vygenerování a zobrazení kvízu
  function renderQuiz() {
    quizContainer.innerHTML = "";
    
    if (!activeQuestion.quiz || activeQuestion.quiz.length === 0) {
      quizContainer.innerHTML = "<p class='text-center text-muted'>Pro toto téma zatím není dostupný kvíz.</p>";
      return;
    }

    const quizWrapper = document.createElement("div");
    quizWrapper.className = "quiz-wrapper";

    activeQuestion.quiz.forEach((q, qIndex) => {
      const quizCard = document.createElement("div");
      quizCard.className = "quiz-card";
      
      if (q.type === "type-in") {
        quizCard.innerHTML = `
          <div class="quiz-question">${qIndex + 1}. ${formatText(q.question)}</div>
          <div class="quiz-type-in-container" id="type-in-container-${qIndex}">
            <input type="text" class="quiz-type-in-input" id="type-in-input-${qIndex}" placeholder="Napište svou odpověď...">
            <button class="btn btn-primary quiz-type-in-submit" id="type-in-submit-${qIndex}">Ověřit</button>
          </div>
          <div class="quiz-type-in-feedback" id="feedback-${qIndex}" style="display: none;"></div>
          <div class="quiz-explanation" id="explanation-${qIndex}" style="display: none;">
            <strong>Vysvětlení:</strong> ${formatText(q.explanation)}
          </div>
        `;
      } else {
        let optionsHTML = "";
        q.options.forEach((opt, optIndex) => {
          optionsHTML += `
            <button class="quiz-option" data-qindex="${qIndex}" data-optindex="${optIndex}">
              ${formatText(opt)}
            </button>
          `;
        });

        quizCard.innerHTML = `
          <div class="quiz-question">${qIndex + 1}. ${formatText(q.question)}</div>
          <div class="quiz-options">
            ${optionsHTML}
          </div>
          <div class="quiz-explanation" id="explanation-${qIndex}" style="display: none;">
            <strong>Vysvětlení:</strong> ${formatText(q.explanation)}
          </div>
        `;
      }

      quizWrapper.appendChild(quizCard);
    });

    quizContainer.appendChild(quizWrapper);

    // Event listenery pro možnosti v kvízu
    const options = quizContainer.querySelectorAll(".quiz-option");
    options.forEach(option => {
      option.addEventListener("click", function() {
        const qIndex = parseInt(this.getAttribute("data-qindex"));
        const optIndex = parseInt(this.getAttribute("data-optindex"));
        const quizData = activeQuestion.quiz[qIndex];
        
        // Zamezení vícenásobné volbě pro stejnou otázku
        const parent = this.closest(".quiz-options");
        if (parent.classList.contains("answered")) return;
        parent.classList.add("answered");

        // Zvýraznění správné a špatné odpovědi
        const btns = parent.querySelectorAll(".quiz-option");
        btns.forEach((btn, idx) => {
          if (idx === quizData.correct) {
            btn.classList.add("correct"); // Správná zelená
          }
          if (idx === optIndex && idx !== quizData.correct) {
            btn.classList.add("incorrect"); // Vybraná špatná červená
          }
        });

        // Statistiky
        if (optIndex === quizData.correct) {
          userProgress[activeQuestion.id].correctCount++;
        }
        saveProgress();

        // Zobrazení vysvětlení
        const explanationBox = document.getElementById(`explanation-${qIndex}`);
        explanationBox.style.display = "block";
      });
    });

    // Event listenery pro type-in otázky
    const submitBtns = quizContainer.querySelectorAll(".quiz-type-in-submit");
    submitBtns.forEach(btn => {
      const qIndex = parseInt(btn.id.split("-").pop());
      const inputEl = document.getElementById(`type-in-input-${qIndex}`);
      
      // Submit na tlačítko klik
      btn.addEventListener("click", function() {
        submitTypeInAnswer(qIndex);
      });

      // Submit na stisk klávesy Enter v inputu
      if (inputEl) {
        inputEl.addEventListener("keypress", function(e) {
          if (e.key === "Enter") {
            submitTypeInAnswer(qIndex);
          }
        });
      }
    });

    // Společná funkce pro vyhodnocení type-in odpovědi
    function submitTypeInAnswer(qIndex) {
      const inputEl = document.getElementById(`type-in-input-${qIndex}`);
      const submitBtn = document.getElementById(`type-in-submit-${qIndex}`);
      const feedbackEl = document.getElementById(`feedback-${qIndex}`);
      const explanationEl = document.getElementById(`explanation-${qIndex}`);
      const quizData = activeQuestion.quiz[qIndex];

      if (!inputEl || !submitBtn || submitBtn.disabled) return;

      const userAnswer = inputEl.value.trim();
      if (!userAnswer) return; // Nedělat nic, pokud je pole prázdné

      // Zamezit další editaci
      inputEl.disabled = true;
      submitBtn.disabled = true;

      // Kontrola odpovědi (case-insensitive, ořezané mezery)
      let isCorrect = false;
      const normalizedUserAnswer = userAnswer.toLowerCase();

      if (Array.isArray(quizData.correct)) {
        isCorrect = quizData.correct.some(ans => ans.toLowerCase().trim() === normalizedUserAnswer);
      } else {
        isCorrect = quizData.correct.toLowerCase().trim() === normalizedUserAnswer;
      }

      feedbackEl.style.display = "flex";
      explanationEl.style.display = "block";

      if (isCorrect) {
        feedbackEl.className = "quiz-type-in-feedback correct";
        feedbackEl.innerHTML = `<span>✓ Správně! Odpověď: <strong>${escapeHTML(Array.isArray(quizData.correct) ? quizData.correct[0] : quizData.correct)}</strong></span>`;
        userProgress[activeQuestion.id].correctCount++;
      } else {
        feedbackEl.className = "quiz-type-in-feedback incorrect";
        feedbackEl.innerHTML = `<span>✗ Nesprávně. Správná odpověď: <strong>${escapeHTML(Array.isArray(quizData.correct) ? quizData.correct.join(" nebo ") : quizData.correct)}</strong></span>`;
      }

      saveProgress();
    }
  }

  // 14. LOGIKA PŘIŘAZOVACÍ HRY (MATCHING GAME)
  function openMatchingGame() {
    const gameTitleEl = document.getElementById("game-title");
    const gameDescEl = document.getElementById("game-description");

    if (gameMode === "eponyms") {
      if (gameTitleEl) gameTitleEl.textContent = "Přiřazování eponymních pojmů";
      if (gameDescEl) gameDescEl.textContent = "Spojuj správné dvojice: Eponymní název vlevo a jeho stručná definice/kontext vpravo.";

      if (EPONYMS_DB.length < 4) {
        alert("Nedostatek dat pro přiřazovačku.");
        return;
      }

      // Výběr 4 náhodných eponym z EPONYMS_DB
      const shuffled = [...EPONYMS_DB].sort(() => 0.5 - Math.random());
      gameCurrentPairs = shuffled.slice(0, 4);

      gameSelectedTerm = null;
      gameSelectedDesc = null;
      gameErrorsCount = 0;
      gamePairsLeft = 4;

      gameErrorsEl.textContent = "0";
      gameLeftCountEl.textContent = "4";

      // Vytvoření seznamu termínů a popisů
      const terms = gameCurrentPairs.map((ep, idx) => ({
        id: idx.toString(),
        text: ep.name
      }));

      const descriptions = gameCurrentPairs.map((ep, idx) => ({
        id: idx.toString(),
        text: ep.def
      }));

      // Náhodně promíchat sloupce nezávisle na sobě
      const shuffledTerms = [...terms].sort(() => 0.5 - Math.random());
      const shuffledDescs = [...descriptions].sort(() => 0.5 - Math.random());

      // Vykreslení do UI
      gameColLeft.innerHTML = "";
      gameColRight.innerHTML = "";

      shuffledTerms.forEach(t => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.setAttribute("data-id", t.id);
        card.innerHTML = formatText(t.text);
        card.addEventListener("click", () => selectTerm(card));
        gameColLeft.appendChild(card);
      });

      shuffledDescs.forEach(d => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.setAttribute("data-id", d.id);
        card.innerHTML = formatText(d.text);
        card.addEventListener("click", () => selectDesc(card));
        gameColRight.appendChild(card);
      });

      gameDialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (gameTitleEl) gameTitleEl.textContent = "Přiřazování patologických pojmů";
      if (gameDescEl) gameDescEl.textContent = "Spojuj správné dvojice: Termín vlevo a jeho odpovídající histologický/makroskopický popis vpravo.";

      // Výběr 4 náhodných otázek s vyplněnou definicí
      const validQuestions = QUESTIONS.filter(q => q.content && q.content.definition);
      if (validQuestions.length < 4) {
        alert("Nedostatek dat pro přiřazovačku.");
        return;
      }

      // Náhodné promíchání a výběr 4 unikátních otázek
      const shuffled = [...validQuestions].sort(() => 0.5 - Math.random());
      gameCurrentPairs = shuffled.slice(0, 4);

      gameSelectedTerm = null;
      gameSelectedDesc = null;
      gameErrorsCount = 0;
      gamePairsLeft = 4;

      gameErrorsEl.textContent = "0";
      gameLeftCountEl.textContent = "4";

      // Vytvoření seznamu termínů a popisů
      const terms = gameCurrentPairs.map(q => ({
        id: q.id,
        text: q.title
      }));

      const descriptions = gameCurrentPairs.map(q => {
        // Použijeme zkrácenou verzi makro- nebo mikro- nálezu, aby to byla opravdová patologická zkouška
        let shortText = q.content.definition;
        
        // Pokusíme se vzít zajímavou větu z makroskopie nebo mikroskopie, pokud existuje
        if (q.content.macroscopy && q.content.macroscopy.length > 20) {
          shortText = q.content.macroscopy;
        } else if (q.content.microscopy && q.content.microscopy.length > 20) {
          shortText = q.content.microscopy;
        }
        
        // Zkrácení na max 120 znaků pro karty
        if (shortText.length > 130) {
          shortText = shortText.substring(0, 125) + "...";
        }

        return {
          id: q.id,
          text: shortText
        };
      });

      // Náhodně promíchat sloupce nezávisle na sobě
      const shuffledTerms = [...terms].sort(() => 0.5 - Math.random());
      const shuffledDescs = [...descriptions].sort(() => 0.5 - Math.random());

      // Vykreslení do UI
      gameColLeft.innerHTML = "";
      gameColRight.innerHTML = "";

      shuffledTerms.forEach(t => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.setAttribute("data-id", t.id);
        card.innerHTML = formatText(t.text);
        card.addEventListener("click", () => selectTerm(card));
        gameColLeft.appendChild(card);
      });

      shuffledDescs.forEach(d => {
        const card = document.createElement("div");
        card.className = "game-card";
        card.setAttribute("data-id", d.id);
        card.innerHTML = formatText(d.text);
        card.addEventListener("click", () => selectDesc(card));
        gameColRight.appendChild(card);
      });

      gameDialog.showModal();
      document.body.style.overflow = "hidden";
    }
  }

  function selectTerm(card) {
    if (card.classList.contains("matched")) return;

    // Pokud už je něco vybráno, zrušit zvýraznění
    const alreadySelected = gameColLeft.querySelector(".game-card.selected");
    if (alreadySelected) alreadySelected.classList.remove("selected");

    gameSelectedTerm = card;
    card.classList.add("selected");

    checkGameMatch();
  }

  function selectDesc(card) {
    if (card.classList.contains("matched")) return;

    // Pokud už je něco vybráno, zrušit zvýraznění
    const alreadySelected = gameColRight.querySelector(".game-card.selected");
    if (alreadySelected) alreadySelected.classList.remove("selected");

    gameSelectedDesc = card;
    card.classList.add("selected");

    checkGameMatch();
  }

  function checkGameMatch() {
    if (!gameSelectedTerm || !gameSelectedDesc) return;

    const termId = gameSelectedTerm.getAttribute("data-id");
    const descId = gameSelectedDesc.getAttribute("data-id");

    if (termId === descId) {
      // SPRÁVNÁ DVOJICE
      const tCard = gameSelectedTerm;
      const dCard = gameSelectedDesc;

      tCard.classList.remove("selected");
      dCard.classList.remove("selected");
      tCard.classList.add("matched");
      dCard.classList.add("matched");

      gamePairsLeft--;
      gameLeftCountEl.textContent = gamePairsLeft;

      gameSelectedTerm = null;
      gameSelectedDesc = null;

      // Pokud jsou všechny dvojice spárovány
      if (gamePairsLeft === 0) {
        setTimeout(() => {
          const msg = gameMode === "eponyms" 
            ? `Gratulujeme! Úspěšně jsi přiřadila všechny eponymní pojmy s počtem chyb: ${gameErrorsCount}.`
            : `Gratulujeme! Úspěšně jsi přiřadila všechny patologické pojmy s počtem chyb: ${gameErrorsCount}.`;
          alert(msg);
          openMatchingGame(); // Automaticky spustit další kolo
        }, 500);
      }
    } else {
      // ŠPATNÁ DVOJICE
      const tCard = gameSelectedTerm;
      const dCard = gameSelectedDesc;

      tCard.classList.add("wrong");
      dCard.classList.add("wrong");

      gameErrorsCount++;
      gameErrorsEl.textContent = gameErrorsCount;

      gameSelectedTerm = null;
      gameSelectedDesc = null;

      // Zrušení chybného stavu po chvíli
      setTimeout(() => {
        tCard.classList.remove("selected", "wrong");
        dCard.classList.remove("selected", "wrong");
      }, 700);
    }
  }

  // Pomocná funkce pro filtraci kapitol na základě oboru
  function updateChapterFilterOptions() {
    if (!categoryFilter || !sectionFilter) return;
    const selectedCategory = categoryFilter.value;
    let resetSelected = false;
    
    Array.from(sectionFilter.options).forEach(opt => {
      const optCategory = opt.getAttribute("data-category");
      if (!optCategory || selectedCategory === "all" || optCategory === selectedCategory) {
        opt.style.display = "";
      } else {
        opt.style.display = "none";
        if (sectionFilter.value === opt.value) {
          resetSelected = true;
        }
      }
    });
    
    if (resetSelected) {
      sectionFilter.value = "all";
      activeFilterSection = "all";
    }
  }

  function closeMatchingGame() {
    gameDialog.close();
    document.body.style.overflow = "";
  }

  // 15. NASTAVENÍ EVENT LISTENERŮ

  // Filtry
  cardsGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".question-card");
    if (card) {
      openQuestionDetail(card.getAttribute("data-id"));
    }
  });

  searchInput.addEventListener("input", (e) => {
    activeSearchQuery = e.target.value.toLowerCase().trim();
    renderQuestionsGrid();
  });

  categoryFilter.addEventListener("change", (e) => {
    activeFilterCategory = e.target.value;
    updateChapterFilterOptions();
    renderQuestionsGrid();
  });

  sectionFilter.addEventListener("change", (e) => {
    activeFilterSection = e.target.value;
    renderQuestionsGrid();
  });

  statusFilter.addEventListener("change", (e) => {
    activeFilterStatus = e.target.value;
    renderQuestionsGrid();
  });

  // Tlačítka pro uzavření a přepínání záložek
  dialogCloseBtn.addEventListener("click", closeDetailDialog);
  
  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Tlačítka Spaced Repetition hodnocení v detailu
  leitnerBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const grade = btn.getAttribute("data-grade");
      gradeQuestion(grade);
    });
  });

  // Tlačítko "Učit se dnešní karty" z dashboardu
  studyDueBtn.addEventListener("click", () => {
    // Nastavit filtr stavu na "K opakování" a vybrat první k opakování
    statusFilter.value = "due";
    activeFilterStatus = "due";
    renderQuestionsGrid();
    
    // Automaticky otevřít první kartu z gridu, pokud nějaká existuje
    const firstCard = cardsGrid.querySelector(".question-card");
    if (firstCard) {
      const id = firstCard.getAttribute("data-id");
      openQuestionDetail(id);
    }
  });

  // Event listenery pro Přiřazovací hru
  gameOpenBtn.addEventListener("click", () => {
    gameMode = "normal";
    openMatchingGame();
  });
  gameOpenEponymsBtn.addEventListener("click", () => {
    gameMode = "eponyms";
    openMatchingGame();
  });
  gameCloseBtn.addEventListener("click", closeMatchingGame);
  gameResetBtn.addEventListener("click", () => {
    openMatchingGame();
  });

  // Tlačítko pro doplňující podrobnosti
  if (studyAdditionalInfoToggle && studyAdditionalInfoContent) {
    studyAdditionalInfoToggle.addEventListener("click", () => {
      const isHidden = studyAdditionalInfoContent.style.display === "none" || studyAdditionalInfoContent.style.display === "";
      if (isHidden) {
        studyAdditionalInfoContent.style.display = "block";
        studyAdditionalInfoToggle.classList.add("expanded");
        const icon = studyAdditionalInfoToggle.querySelector(".toggle-icon");
        if (icon) icon.textContent = "▲";
      } else {
        studyAdditionalInfoContent.style.display = "none";
        studyAdditionalInfoToggle.classList.remove("expanded");
        const icon = studyAdditionalInfoToggle.querySelector(".toggle-icon");
        if (icon) icon.textContent = "▼";
      }
    });
  }

  // 16. SPRÁVA TÉMATU (TMÁVÝ / SVĚTLÝ REŽIM)
  const savedTheme = localStorage.getItem("patologie_theme") || "dark-theme";
  document.body.className = savedTheme;

  themeToggle.addEventListener("click", () => {
    if (document.body.classList.contains("dark-theme")) {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
      localStorage.setItem("patologie_theme", "light-theme");
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      localStorage.setItem("patologie_theme", "dark-theme");
    }
  });

  // ==========================================================================
  // LOGIKA PROHLÍŽEČE PREPARÁTŮ
  // ==========================================================================
  const preparatyDialog = document.getElementById("preparaty-dialog");
  const preparatyOpenBtn = document.getElementById("preparaty-open-btn");
  const preparatyCloseBtn = document.getElementById("preparaty-close");
  const preparatySearchInput = document.getElementById("preparaty-search-input");
  const preparatyList = document.getElementById("preparaty-list");
  const preparatyViewerContent = document.getElementById("preparaty-viewer-content");
  const preparatyNoSelection = document.getElementById("preparaty-no-selection");
  const preparatyDetailTitle = document.getElementById("preparaty-detail-title");
  const preparatyDetailBadge = document.getElementById("preparaty-detail-badge");
  const preparatyDetailDesc = document.getElementById("preparaty-detail-desc");
  const preparatyCarouselImg = document.getElementById("preparaty-carousel-img");
  const preparatyCarouselPrev = document.getElementById("preparaty-carousel-prev");
  const preparatyCarouselNext = document.getElementById("preparaty-carousel-next");
  const preparatyCarouselCounter = document.getElementById("preparaty-carousel-counter");
  const preparatyLinkQuestionBtn = document.getElementById("preparaty-link-question-btn");
  const preparatyFilterTabs = document.querySelectorAll(".prep-tab");

  // Lightbox elements
  const lightbox = document.getElementById("preparaty-lightbox");
  const lightboxImg = document.getElementById("preparaty-lightbox-img");
  const lightboxClose = document.getElementById("preparaty-lightbox-close");
  const lightboxCaption = document.getElementById("preparaty-lightbox-caption");

  let activePrep = null;
  let activePrepImageIndex = 0;
  let preparatyFilter = "all";
  let preparatySearchQuery = "";

  let starredPreparaty = JSON.parse(localStorage.getItem("patologie_starred_preparaty")) || [];

  function isPreparatStarred(id) {
    return starredPreparaty.includes(id);
  }

  function toggleStarPreparat(id) {
    const idx = starredPreparaty.indexOf(id);
    if (idx === -1) {
      starredPreparaty.push(id);
    } else {
      starredPreparaty.splice(idx, 1);
    }
    localStorage.setItem("patologie_starred_preparaty", JSON.stringify(starredPreparaty));
    updateStarredCount();
    renderPreparatyList();
  }

  function updateStarredCount() {
    const countEl = document.getElementById("preparaty-starred-count");
    if (countEl) {
      countEl.textContent = starredPreparaty.length;
    }
  }

  const normalizeString = str => str ? str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim() : "";

  function findMatchingSlide(question) {
    if (!window.PREPARATY_DATA) return null;
    const normQ = normalizeString(question.title);
    
    // Title match
    for (const prep of window.PREPARATY_DATA) {
      const normP = normalizeString(prep.title);
      if (normP === normQ || normQ.includes(normP) || normP.includes(normQ)) {
        return prep;
      }
    }
    // Keyword match
    for (const prep of window.PREPARATY_DATA) {
      const normP = normalizeString(prep.title);
      for (const kw of question.keywords) {
        const normKw = normalizeString(kw);
        if (normKw.length > 3 && (normP === normKw || normP.includes(normKw) || normKw.includes(normP))) {
          return prep;
        }
      }
    }
    return null;
  }

  function findMatchingQuestion(prep) {
    const normP = normalizeString(prep.title);
    for (const q of QUESTIONS) {
      const normQ = normalizeString(q.title);
      if (normQ === normP || normQ.includes(normP) || normP.includes(normQ)) {
        return q;
      }
    }
    for (const q of QUESTIONS) {
      for (const kw of q.keywords) {
        const normKw = normalizeString(kw);
        if (normKw.length > 3 && (normP === normKw || normP.includes(normKw) || normKw.includes(normP))) {
          return q;
        }
      }
    }
    return null;
  }

  function renderPreparatyList() {
    if (!window.PREPARATY_DATA) return;
    preparatyList.innerHTML = "";
    
    const filtered = window.PREPARATY_DATA.filter(prep => {
      if (preparatyFilter === "zkouskove" && !prep.is_zkouskove) return false;
      if (preparatyFilter === "nezkouskove" && prep.is_zkouskove) return false;
      if (preparatyFilter === "starred" && !isPreparatStarred(prep.id)) return false;
      
      if (preparatySearchQuery) {
        const normQuery = normalizeString(preparatySearchQuery);
        const normTitle = normalizeString(prep.title);
        const normDesc = normalizeString(prep.description);
        return normTitle.includes(normQuery) || normDesc.includes(normQuery);
      }
      return true;
    });

    if (filtered.length === 0) {
      preparatyList.innerHTML = "<p class='text-center text-secondary' style='font-size: 0.85rem; margin-top: 1rem;'>Žádné preparáty nenalezeny</p>";
      return;
    }

    filtered.forEach(prep => {
      const card = document.createElement("div");
      card.className = `preparaty-list-card${activePrep && activePrep.id === prep.id ? ' active' : ''}`;
      const isStarred = isPreparatStarred(prep.id);
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 0.5rem; margin-bottom: 0.5rem;">
          <h4 style="margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-primary); line-height: 1.3;">${escapeHTML(prep.title)}</h4>
          ${isStarred ? '<span class="prep-card-star" style="color: #eab308; font-size: 1.1rem; line-height: 1;" title="Označen k revizi">★</span>' : ''}
        </div>
        <div class="preparaty-card-meta">
          <span class="prep-badge ${prep.is_zkouskove ? 'zkouskovy' : 'nezkouskovy'}">
            ${prep.is_zkouskove ? 'Zkouškový' : 'Doplňující'}
          </span>
          <span class="img-count">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline; vertical-align:middle; margin-right:2px;"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
            ${prep.images.length}
          </span>
        </div>
      `;
      card.onclick = () => selectPreparat(prep);
      preparatyList.appendChild(card);
    });
  }

  function selectPreparat(prep) {
    activePrep = prep;
    activePrepImageIndex = 0;
    
    renderPreparatyList();

    preparatyNoSelection.style.display = "none";
    preparatyViewerContent.style.display = "flex";

    preparatyDetailTitle.textContent = prep.title;
    if (prep.is_zkouskove) {
      preparatyDetailBadge.textContent = "Zkouškový preparát";
      preparatyDetailBadge.className = "prep-badge zkouskovy";
    } else {
      preparatyDetailBadge.textContent = "Doplňující";
      preparatyDetailBadge.className = "prep-badge nezkouskovy";
    }

    const starBtn = document.getElementById("preparaty-star-btn");
    if (starBtn) {
      const isStarred = isPreparatStarred(prep.id);
      starBtn.textContent = isStarred ? "★" : "☆";
      starBtn.className = `btn-prep-star${isStarred ? ' active' : ''}`;
      starBtn.title = isStarred ? "Odebrat z revize" : "Označit k revizi (těžký preparát)";
    }
    
    preparatyDetailDesc.textContent = prep.description || "K tomuto preparátu není k dispozici žádný popis.";

    updateCarousel();

    const matchingQ = findMatchingQuestion(prep);
    if (matchingQ) {
      preparatyLinkQuestionBtn.style.display = "block";
      preparatyLinkQuestionBtn.textContent = `Zobrazit otázku: ${matchingQ.id} 📖`;
      preparatyLinkQuestionBtn.onclick = () => {
        preparatyDialog.close();
        document.body.style.overflow = "";
        openQuestionDetail(matchingQ.id);
      };
    } else {
      preparatyLinkQuestionBtn.style.display = "none";
    }
  }

  function updateCarousel() {
    if (!activePrep || activePrep.images.length === 0) {
      preparatyCarouselImg.src = "";
      preparatyCarouselCounter.textContent = "0 / 0";
      return;
    }

    const imgName = activePrep.images[activePrepImageIndex];
    preparatyCarouselImg.src = `preparaty/images/${imgName}`;
    preparatyCarouselCounter.textContent = `${activePrepImageIndex + 1} / ${activePrep.images.length}`;
  }

  preparatyCarouselPrev.onclick = (e) => {
    e.stopPropagation();
    if (!activePrep) return;
    activePrepImageIndex = (activePrepImageIndex - 1 + activePrep.images.length) % activePrep.images.length;
    updateCarousel();
  };

  preparatyCarouselNext.onclick = (e) => {
    e.stopPropagation();
    if (!activePrep) return;
    activePrepImageIndex = (activePrepImageIndex + 1) % activePrep.images.length;
    updateCarousel();
  };

  preparatyCarouselImg.onclick = () => {
    if (!preparatyCarouselImg.src || !preparatyCarouselImg.src.includes('paste-')) return;
    lightbox.style.display = "block";
    lightboxImg.src = preparatyCarouselImg.src;
    lightboxCaption.textContent = activePrep ? `${activePrep.title} (Snímek ${activePrepImageIndex + 1}/${activePrep.images.length})` : "";
  };

  lightboxClose.onclick = () => {
    lightbox.style.display = "none";
  };

  lightbox.onclick = (e) => {
    if (e.target !== lightboxImg && e.target !== lightboxCaption) {
      lightbox.style.display = "none";
    }
  };

  const starBtn = document.getElementById("preparaty-star-btn");
  if (starBtn) {
    starBtn.addEventListener("click", () => {
      if (activePrep) {
        toggleStarPreparat(activePrep.id);
        const isStarred = isPreparatStarred(activePrep.id);
        starBtn.textContent = isStarred ? "★" : "☆";
        starBtn.className = `btn-prep-star${isStarred ? ' active' : ''}`;
        starBtn.title = isStarred ? "Odebrat z revize" : "Označit k revizi (těžký preparát)";
      }
    });
  }

  updateStarredCount();

  if (preparatyOpenBtn) {
    preparatyOpenBtn.addEventListener("click", () => {
      preparatyDialog.showModal();
      document.body.style.overflow = "hidden";
      renderPreparatyList();
    });
  }

  if (preparatyCloseBtn) {
    preparatyCloseBtn.addEventListener("click", () => {
      preparatyDialog.close();
      document.body.style.overflow = "";
    });
  }

  if (preparatySearchInput) {
    preparatySearchInput.addEventListener("input", (e) => {
      preparatySearchQuery = e.target.value;
      renderPreparatyList();
    });
  }

  preparatyFilterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      preparatyFilterTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      preparatyFilter = tab.getAttribute("data-filter");
      renderPreparatyList();
    });
  });

  function openPreparatyDialogAndSelect(prepId) {
    preparatyDialog.showModal();
    document.body.style.overflow = "hidden";
    
    if (window.PREPARATY_DATA) {
      const prep = window.PREPARATY_DATA.find(p => p.id === prepId || p.id == prepId);
      if (prep) {
        selectPreparat(prep);
      } else {
        renderPreparatyList();
      }
    }
  }

  // ==========================================
  // --- LOGIKA GEMINI CHATBOTA (Patologie) ---
  // ==========================================
  const chatbotContainer = document.getElementById("gemini-chatbot-container");
  const chatbotFab = document.getElementById("chatbot-fab");
  const chatbotPanel = document.getElementById("chatbot-panel");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotInputForm = document.getElementById("chatbot-input-form");
  const chatbotTypingIndicator = document.getElementById("chatbot-typing-indicator");
  const chatbotSettingsBtn = document.getElementById("chatbot-settings-btn");
  const chatbotSettingsOverlay = document.getElementById("chatbot-settings-overlay");
  const chatbotApiKeyInput = document.getElementById("chatbot-api-key-input");
  const chatbotSaveKeyBtn = document.getElementById("chatbot-save-key-btn");
  const chatbotClearKeyBtn = document.getElementById("chatbot-clear-key-btn");
  const chatbotSettingsCloseBtn = document.getElementById("chatbot-settings-close-btn");
  const chatbotSuggestions = document.getElementById("chatbot-suggestions");
  const chatbotBadge = document.getElementById("chatbot-badge");
  const statusDot = chatbotContainer.querySelector(".avatar-status-dot");

  let chatHistory = [
    { role: "assistant", text: "Ahoj! Jsem tvůj asistent pro **patologii**. Pomůžu ti s makroskopickými i mikroskopickými nálezy, popisy preparátů, klasifikacemi a zkouškovými tématy. Na co se chceš zeptat?" }
  ];

  // Load key from localStorage
  const getSavedKey = () => localStorage.getItem("gemini_chat_local_key") || "";
  chatbotApiKeyInput.value = getSavedKey();

  // Rate limiting (client-side)
  let lastMessageTime = 0;
  const CLIENT_MIN_INTERVAL = 3000; // 3 seconds between messages

  // Open/Close Chat
  chatbotFab.addEventListener("click", () => {
    const isOpen = chatbotPanel.classList.toggle("open");
    chatbotFab.classList.toggle("open");
    if (isOpen) {
      chatbotBadge.style.display = "none";
      chatbotInput.focus();
      scrollToBottom();
    }
  });

  document.getElementById("chatbot-close-btn").addEventListener("click", () => {
    chatbotPanel.classList.remove("open");
    chatbotFab.classList.remove("open");
  });

  // Settings Panel Toggle
  chatbotSettingsBtn.addEventListener("click", () => {
    chatbotSettingsOverlay.classList.add("open");
  });

  chatbotSettingsCloseBtn.addEventListener("click", () => {
    chatbotSettingsOverlay.classList.remove("open");
  });

  // Save/Clear key locally
  chatbotSaveKeyBtn.addEventListener("click", () => {
    const key = chatbotApiKeyInput.value.trim();
    if (key) {
      localStorage.setItem("gemini_chat_local_key", key);
      alert("API klíč byl uložen do vašeho prohlížeče.");
      chatbotSettingsOverlay.classList.remove("open");
    } else {
      alert("Prosím zadejte platný klíč.");
    }
  });

  chatbotClearKeyBtn.addEventListener("click", () => {
    localStorage.removeItem("gemini_chat_local_key");
    chatbotApiKeyInput.value = "";
    alert("API klíč byl vymazán. Nyní se dotazy posílají přes proxy server.");
  });

  // Simple Markdown Parser for UI Bubble rendering
  const parseMarkdown = (text) => {
    let html = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    // Bold (**text**)
    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Code blocks (```code```)
    html = html.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    
    // Inline code (`code`)
    html = html.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Bullet lists
    const lines = html.split('\n');
    let inList = false;
    const processedLines = lines.map(line => {
      const trimmed = line.trim();
      if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        const content = trimmed.substring(2);
        if (!inList) {
          inList = true;
          return '<ul><li>' + content + '</li>';
        }
        return '<li>' + content + '</li>';
      } else {
        if (inList) {
          inList = false;
          return '</ul><p>' + line + '</p>';
        }
        return trimmed ? '<p>' + line + '</p>' : '';
      }
    });
    
    html = processedLines.join('');
    if (inList) {
      html += '</ul>';
    }
    
    return html;
  };

  const scrollToBottom = () => {
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  };

  // Add Message to DOM and History
  const addMessage = (role, text) => {
    chatHistory.push({ role, text });
    
    if (chatHistory.length > 15) {
      chatHistory.shift();
    }

    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${role}`;
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = role === "assistant" ? parseMarkdown(text) : text;
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();

    if (!chatbotPanel.classList.contains("open") && role === "assistant") {
      chatbotBadge.style.display = "block";
    }
  };

  // Load client token from main domain config for verification handshake
  let clientToken = "";
  const loadClientToken = async () => {
    try {
      const res = await fetch("https://verysadanyway.vercel.app/api/config");
      if (res.ok) {
        const data = await res.json();
        clientToken = data.clientToken;
      }
    } catch (e) {
      console.error("Failed to load client token", e);
    }
  };
  loadClientToken();

  // Send request via backend proxy (connected to main domain proxy) with streaming
  const callProxyServerStream = async (messages, onChunk, onStart) => {
    const response = await fetch("https://verysadanyway.vercel.app/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${clientToken}`
      },
      body: JSON.stringify({ messages, subject: "patola" })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `Server vrátil chybu ${response.status}.`);
    }

    onStart();

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop(); // Keep partial line

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          if (parsed.text) {
            onChunk(parsed.text);
          }
        } catch (e) {
          // Ignore partial chunk parsing errors
        }
      }
    }

    // Process remaining buffer
    if (buffer.length > 0) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ")) {
        try {
          const parsed = JSON.parse(trimmed.substring(6));
          if (parsed.text) {
            onChunk(parsed.text);
          }
        } catch (e) {}
      }
    }
  };

  // Send request directly to Gemini API with streaming
  const callGeminiDirectlyStream = async (key, messages, onChunk, onStart) => {
    const systemInstructionText = "Jste odborník na patologii (morfologickou patologii). Pomáháte studentům lékařství s makroskopickým a mikroskopickým popisem tkání, nekropsii, biopsii, klasifikací nádorů a patologickou anatomií. Odpovídejte věcně, stručně a odborně česky. Používejte markdown pro přehlednost.";
    
    // Format messages for the Gemini API, stitching consecutive same-role messages
    const contents = [];
    for (const msg of messages) {
      const role = msg.role === "assistant" || msg.role === "model" ? "model" : "user";
      if (contents.length > 0 && contents[contents.length - 1].role === role) {
        contents[contents.length - 1].parts.push({ text: msg.text });
      } else {
        contents.push({
          role,
          parts: [{ text: msg.text }]
        });
      }
    }
    if (contents.length > 0 && contents[0].role !== "user") {
      contents.shift();
    }
    if (contents.length === 0) {
      throw new Error("Žádné platné zprávy k odeslání.");
    }

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:streamGenerateContent?alt=sse&key=${key}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstructionText }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 1500
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
          }
        ]
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error?.message || `Gemini API vrátilo chybu ${response.status}.`);
    }

    onStart();

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop(); // Keep partial line

      for (const line of lines) {
        const trimmed = line.trim();
        if (!trimmed.startsWith("data: ")) continue;
        const jsonStr = trimmed.substring(6);
        try {
          const parsed = JSON.parse(jsonStr);
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            onChunk(text);
          }
        } catch (e) {
          // Ignore partial chunk parsing errors
        }
      }
    }

    // Process remaining buffer
    if (buffer.length > 0) {
      const trimmed = buffer.trim();
      if (trimmed.startsWith("data: ")) {
        try {
          const parsed = JSON.parse(trimmed.substring(6));
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) {
            onChunk(text);
          }
        } catch (e) {}
      }
    }
  };

  // Helper to create an assistant message bubble for streaming
  const createAssistantMessageBubble = () => {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message assistant";
    
    const contentDiv = document.createElement("div");
    contentDiv.className = "message-content";
    contentDiv.innerHTML = "";
    
    messageDiv.appendChild(contentDiv);
    chatbotMessages.appendChild(messageDiv);
    scrollToBottom();
    
    return contentDiv;
  };

  // Submit Handler
  chatbotInputForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const now = Date.now();
    if (now - lastMessageTime < CLIENT_MIN_INTERVAL) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "message system";
      errorDiv.innerHTML = '<div class="message-content">Příliš rychlé dotazy. Zkuste to za chvíli.</div>';
      chatbotMessages.appendChild(errorDiv);
      scrollToBottom();
      return;
    }

    const query = chatbotInput.value.trim();
    if (!query) return;

    addMessage("user", query);
    chatbotInput.value = "";
    chatbotInput.disabled = true;
    chatbotInputForm.querySelector("button").disabled = true;
    
    chatbotTypingIndicator.classList.add("active");
    statusDot.className = "avatar-status-dot typing";
    scrollToBottom();

    lastMessageTime = Date.now();

    let contentDiv = null;
    try {
      const savedKey = getSavedKey();
      let responseText = "";
      
      const onStart = () => {
        chatbotTypingIndicator.classList.remove("active");
        statusDot.className = "avatar-status-dot online";
        contentDiv = createAssistantMessageBubble();
      };
      
      const onChunk = (text) => {
        responseText += text;
        if (contentDiv) {
          contentDiv.innerHTML = parseMarkdown(responseText);
          scrollToBottom();
        }
      };

      if (savedKey) {
        await callGeminiDirectlyStream(savedKey, chatHistory, onChunk, onStart);
      } else {
        await callProxyServerStream(chatHistory, onChunk, onStart);
      }

      // Add the final response to chat history
      chatHistory.push({ role: "assistant", text: responseText });
      if (chatHistory.length > 15) {
        chatHistory.shift();
      }

      // Show pulse badge on FAB if closed
      if (!chatbotPanel.classList.contains("open")) {
        chatbotBadge.style.display = "block";
      }
    } catch (err) {
      console.error(err);
      chatbotTypingIndicator.classList.remove("active");
      statusDot.className = "avatar-status-dot online";
      
      // Clean up chatHistory by popping the failed user query
      if (chatHistory.length > 0 && chatHistory[chatHistory.length - 1].role === "user") {
        chatHistory.pop();
      }

      const errorDiv = document.createElement("div");
      errorDiv.className = "message system";
      errorDiv.innerHTML = `<div class="message-content">Chyba: ${err.message}</div>`;
      chatbotMessages.appendChild(errorDiv);
      scrollToBottom();
    } finally {
      chatbotInput.disabled = false;
      chatbotInputForm.querySelector("button").disabled = false;
      chatbotInput.focus();
    }
  });

  // Setup suggestion chip event listeners
  chatbotSuggestions.querySelectorAll(".suggestion-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chatbotInput.value = chip.getAttribute("data-query");
      chatbotInputForm.dispatchEvent(new Event("submit"));
    });
  });


  // 17. PRVNÍ SPUŠTĚNÍ - INICIALIZACE STRÁNKY
  updateDashboard();
  renderQuestionsGrid();
});
