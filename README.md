```python
import os

files = os.listdir('.')
print("Files in directory:", files)


```

```text
Files in directory: ['kintrovaviolka-dev']


```

```python
import os

target_dir = 'kintrovaviolka-dev'
if os.path.exists(target_dir):
    print("Contents of kintrovaviolka-dev:", os.listdir(target_dir))
    
# Let's inspect facts.md and pr_description files if present
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        if f.endswith('.md') or f == 'package.json' or f.endswith('.js'):
            print(os.path.join(root, f))


```

```text
Contents of kintrovaviolka-dev: ['patolka']


```

```python
import os

for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        if f.endswith('.md') or f.endswith('.json') or f == 'app.js':
            path = os.path.join(root, f)
            print(f"=== {path} ===")
            try:
                with open(path, 'r', encoding='utf-8', errors='ignore') as file:
                    print(file.read()[:2000]) # First 2000 chars
            except Exception as e:
                print("Error reading:", e)


```

```python
import os

# Find all files in the current workspace recursively
for root, dirs, filenames in os.walk('.'):
    for f in filenames:
        print(os.path.join(root, f))


```

```text
./kintrovaviolka-dev/patolka


```

```python
# Let's inspect the contents of the patolka file or directory
import os

path = './kintrovaviolka-dev/patolka'
print("Is dir?", os.path.isdir(path))
print("Is file?", os.path.isfile(path))
if os.path.isfile(path):
    print("Size:", os.path.getsize(path))


```

```text
Is dir? False
Is file? True
Size: 33993701


```

```python
# Let's inspect facts.md and index.html if we can extract text or search inside patolka if it's a zip or tar archive
import zipfile, tarfile

path = './kintrovaviolka-dev/patolka'

if zipfile.is_zipfile(path):
    print("It's a zip file!")
    with zipfile.ZipFile(path, 'r') as z:
        print("Zip contents sample:", z.namelist()[:20])
        for name in z.namelist():
            if name.endswith('.md') or name.endswith('app.js') or name.endswith('.html'):
                print(f"\n--- {name} ---")
                print(z.read(name).decode('utf-8', errors='ignore')[:1500])
else:
    print("Not a zip file directly")


```

```text
It's a zip file!
Zip contents sample: ['patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/.gitignore', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/.jules/', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/.jules/forge.md', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/app.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_onco_1.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_onco_1.js.orig', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_onco_2.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_onco_2.js.orig', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_patologie_1.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_patologie_2.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_patologie_3.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_special_1.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/data_special_2.js', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/facts.md', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/index.html', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/pr_description.md', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/pr_description_forge.md', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/pr_description_security.md', 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/preparaty/']

--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/.jules/forge.md ---
## 2024-05-18 - Terminological inaccuracies
**Learning:** Found some amusing terminological inaccuracies like using 'stolička' (little chair/molar tooth) instead of 'stolice' (feces), and 'solárně' (solar) instead of 'solitárně' (solitary) in a medical context within `data_onco_2.js`.
**Action:** Be mindful of Czech medical terminology and homonyms when auditing content.
## 2024-05-18 - Playwright frontend verification artifact cleanup
**Learning:** Installing playwright during frontend verification dynamically creates `package.json` and `package-lock.json` in a project that strictly doesn't use a package manager. These artifacts were blocked during code review.
**Action:** When performing Playwright UI verification in this codebase, always clean up the testing artifacts (`package.json`, `package-lock.json`, test scripts, logs) before requesting code review and submitting the patch.

## 2024-07-11 - Domain-specific terminology rules
**Learning:** Medical eponyms and terms (like Virchow, Zollinger-Ellison, Sézary, fungoides, Pancoast) are stored not just in JS objects (`data_onco_*.js`), but mirrored directly in reference documents like `facts.md`. Updating just the data file leaves the documentation inconsistent.
**Action:** Always search globally across both JS data files and markdown files when correcting medical terminology to ensure complete accuracy.


--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/app.js ---
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
      def: "Malign

--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/facts.md ---
PŘÍČINY VZNIKU NÁDORŮ

-  Příčiny můžeme rozdělit na fyzikální, chemické, biologické nebo genetické

Fyzikální příčiny

-

Ionizující záření = alfa, beta, gama, neutronové → působí přímo na DNA nebo
nepřímo ionizací buněk a tvorbou kyslíkových radikálů → každá dávka sebou nese
riziko vzniku maligní transformace, na základě čehož rozlišujeme deterministické
účinky (daná dávka způsobuje problémy), stochastické účinky (není uvedena
konkrétní dávka, ale každé vystavení představuje riziko)

-  UV záření = působí pouze na krátké vzdálenosti a jeho účinek je omezen pouze na

epidermis, proti němu nás chrání melaninová vrstva (proto lidí se světlejší pokožkou
jsou náchylnější na vznik kožních nádorů), nadměrná expozice slunečnímu záření
vede k přehlcení oprav DNA a následnému vzniku pyrimidinových dimerů, které se
podílí na maligní transformaci → dlaždicobuněčný karcinom, bazocelulární karcinom,
melanom

-  Expozice azbestu = pleurální mezoteliom, adenokarcinom plic

Chemické příčiny

-  Chemické látky na základě jejich schopnosti působit změny v DNA dělíme ne

genotoxické a negenotoxické účinky → genotoxické účinky (tzv. iniciátory), které jsou
schopné započít původní změnu v DNA → negenotoxické účinky (tzv. promotory)
nejsou schopné započít změnu v DNA, ale podporují proliferaci již abnormálně
změněných buněk

-  Genotoxické kancerogeny = jsou přímé (přímo ovlivňují DNA) a nepřímé (pro to aby
byly aktivní, potřebují projít biotranformací – využívají metabolismy léků nebo
detoxikačn

--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/index.html ---
<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patologie - Portál Efektivního Učení</title>
  <meta name="description" content="Interaktivní studijní portál patologie pro studenty všeobecného lékařství. Obsahuje procvičování s kartičkami, Leitnerovým opakováním, přiřazovačky a testy.">
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="style.css">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body class="dark-theme">
  <div class="app-container">
    
    <!-- Hlavička aplikace -->
    <header>
      <div class="brand">
        <div class="brand-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M12 6v6l4 2"></path></svg>
        </div>
        <div class="brand-text">
          <h1>Patologie</h1>
          <span>Chytrý portál pro studium (<span id="total-questions-count">109</span> zkouškových otázek)</span>
        </div>
      </div>
      
      <div c

--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/pr_description.md ---
# 🔒 Fix DOM-based XSS vulnerability in study card details

## 🎯 What
This PR replaces unsafe `innerHTML` assignments with secure `textContent` assignments when rendering study card details (definition, etiology, pathogenesis, macroscopy, microscopy, and clinical info) in `app.js` (lines 265-272).

## ⚠️ Risk
Previously, properties from the study question's `content` object were directly injected into the DOM using `innerHTML` without sanitization. This created a DOM-based Cross-Site Scripting (XSS) vulnerability. If any user-controlled input, external contribution, or compromised data file managed to inject arbitrary HTML or JavaScript (e.g., `<script>` tags or `onload` handlers) into the database, it would execute automatically when the user viewed the question detail. This could lead to session hijacking, unauthorized actions on behalf of the user, or defacement.

## 🛡️ Solution
Replaced `innerHTML` with `textContent` for the 6 vulnerable element assignments (`studyDefinition`, `studyEtiology`, `studyPathogenesis`, `studyMacroscopy`, `studyMicroscopy`, `studyClinical`). `textContent` ensures that any HTML tags in the source data are safely encoded and rendered as plain text rather than evaluated as executable code by the browser, completely mitigating the XSS vector while preserving the intended display of the plain text data.


--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/pr_description_forge.md ---
💡 What: Corrected medical eponym typos ("Baretův" -> "Barrettův") and abbreviations ("Zoll-El. Sy." -> "Zollinger-Ellisonův sy."), and fixed a truncated word ("tent" -> "tento") in the text of `data_onco_1.js` and `facts.md`.
🎯 Why: To improve the accuracy, professionalism, and readability of the educational content.
📊 Impact: Students and users reading the content will have access to the correct spelling of medical eponyms, avoiding confusion and presenting the material professionally.
🔬 Measurement: Run `node -c data_onco_1.js` to ensure the syntax remains valid after the modifications. Check the application UI to confirm the corrected text displays properly.


--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/pr_description_security.md ---
# 🔒 Security Vulnerability Fix: DOM-based XSS via unsanitized question properties

## 🎯 What
Fixed a DOM-based Cross-Site Scripting (XSS) vulnerability in `app.js` where unsanitized question properties were directly rendered into the DOM using `innerHTML`.

## ⚠️ Risk
If left unfixed, an attacker could potentially inject malicious JavaScript payloads through the question properties (`id`, `title`, `section`, `box`). When these properties are rendered via `innerHTML`, the payloads would execute in the context of the user's browser. This could lead to account takeover, data exfiltration, or other severe security breaches depending on the application's context.

## 🛡️ Solution
Introduced an `escapeHTML` helper function at the top of `app.js` to securely encode HTML entities (`&`, `<`, `>`, `"`, `'`). All dynamically inserted variables in the card template (`q.id`, `qProgress.box`, `q.title`, `q.section`) are now wrapped with this function to ensure safe rendering within `innerHTML`.


--- patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/survival_kit_patologie_n_dor_pro_vyho_el_mediky.html ---
<!DOCTYPE html>
<html lang="cs" class="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Survival Kit: Patologie Nádorů</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    colors: {
                        darkbg: '#0b0f19',
                        cardbg: '#131b2e',
                        accentNeon: '#a855f7', // Keep neon purple for the survival vibe
                        accentWarm: '#f59e0b',
                        accentRed: '#ef4444',
                        accentGreen: '#10b981',
                        slate: {
                            50: '#f8fafc',
                            100: '#f1f5f9',
                            200: '#e2e8f0',
                            300: '#cbd5e1',
                            400: '#94a3b8',
                            500: '#64748b',
                            600: '#475569',
                            700: '#334155',
                            800: '#1e294b', // matches --bg-tertiary / borders
                            900: '#131b2e', // matches --bg-secondary
                            950: '#0b0f19'  // matches --bg-primary
                        }
                    }
                }
            }
        }
    </script>
    <style>
        @import url('https://f


```

```python
import zipfile

z = zipfile.ZipFile('./kintrovaviolka-dev/patolka')
all_names = z.namelist()
prefix = all_names[0] # 'patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/'

print("Prefix:", prefix)
print("Files in repo:")
for name in sorted(all_names):
    if not name.endswith('/'):
        print(" -", name[len(prefix):])


```

```text
Prefix: patolka-94e15563730b664d0067fc0fe8a5c0c22031d4ff/
Files in repo:
 - .gitignore
 - .jules/forge.md
 - app.js
 - data_onco_1.js
 - data_onco_1.js.orig
 - data_onco_2.js
 - data_onco_2.js.orig
 - data_patologie_1.js
 - data_patologie_2.js
 - data_patologie_3.js
 - data_special_1.js
 - data_special_2.js
 - facts.md
 - index.html
 - pr_description.md
 - pr_description_forge.md
 - pr_description_security.md
 - preparaty/images/part1/paste-001cbb32ffbd8cff08b20c73580a56cffaaba7b2.jpg
 - preparaty/images/part1/paste-002d24e0134146acae64292f6b8ff6991569e75b.jpg
 - preparaty/images/part1/paste-00b5bf024091e1a46ef863473ed7ae0691f43562.jpg
 - preparaty/images/part1/paste-013489155606f8c24ab9feae30f6e990213e99c8.jpg
 - preparaty/images/part1/paste-016a0af3e445ac1357116d7a1843e2405803a4d8.jpg
 - preparaty/images/part1/paste-017543313c9c030218e9c6e5553df8e03e89d3ab.jpg
 - preparaty/images/part1/paste-019dd4c767d3f773bc1976963c36fd5034666f6b.jpg
 - preparaty/images/part1/paste-01b758980448f6dfcbda50ad7271ffda871557d1.jpg
 - preparaty/images/part1/paste-02d2d7115b18ac48dae6a497981bb44fab70294a.jpg
 - preparaty/images/part1/paste-03d9dfc4d7030aa2e72cc308b1acc49f420adca9.jpg
 - preparaty/images/part1/paste-042615f616b0983c620ce2b96f1deec093f9aa2f.jpg
 - preparaty/images/part1/paste-045300b42cb6f70db3d15a85f338c608c20b785c.jpg
 - preparaty/images/part1/paste-057223d6702e69e09a809f7f9d3abb3fe6d38d65.jpg
 - preparaty/images/part1/paste-05ad60eb3b9777d62669c990ca2ac7d3e3233db5.jpg
 - preparaty/images/part1/paste-0600434f7d01cd572fe59d629e68522f85dcfedc.jpg
 - preparaty/images/part1/paste-068147525939181a0d1690feaa8f153b99d40c0a.jpg
 - preparaty/images/part1/paste-06869d9bcf6e6b15d62d0e393fd7f8623b961dcb.jpg
 - preparaty/images/part1/paste-06870ac66ab682abdc8fa02a982c412c71ac3813.jpg
 - preparaty/images/part1/paste-06fce4f15853d5c60545967f69f4e1a78c15d241.jpg
 - preparaty/images/part1/paste-0710fda0638a1011d4c50e74610806f371ba35fb.jpg
 - preparaty/images/part1/paste-075b549a80d264d16926a8a9f667271bbef04d0b.jpg
 - preparaty/images/part1/paste-0791a8c00491b02133369eab053f953a1d5392ec.jpg
 - preparaty/images/part1/paste-07a89971003d61e188055e41aad79622c9d1135c.jpg
 - preparaty/images/part1/paste-08175de7944beaf97f724a8f61a6007d7805453c.jpg
 - preparaty/images/part1/paste-08285daf87b458ddb30ba93d9735bc1f08b3be3e.jpg
 - preparaty/images/part1/paste-089518f2a3b972e232a3d793011d0da20f8822ed.jpg
 - preparaty/images/part1/paste-08b4a76c233273e86d57d19e5066c95a0673ddbe.jpg
 - preparaty/images/part1/paste-0919d050c8be26697bd10dab6afe5873d1ab8812.jpg
 - preparaty/images/part1/paste-09b256445a7952ca727d427f0a4bd21951ef7a4c.jpg
 - preparaty/images/part1/paste-09b308ed55698f149eec1834c6731e05a254f809.jpg
 - preparaty/images/part1/paste-0a60134b135d15aa4dc63146c710c2df8e36349d.jpg
 - preparaty/images/part1/paste-0c02952be98df309c09eef194331eb488417ee31.jpg
 - preparaty/images/part1/paste-0d38009f09beeb75916c88211218c0426f67f6d9.jpg
 - preparaty/images/part1/paste-0e40554697e3286fc39f346c27121f53d3a4d469.jpg
 - preparaty/images/part1/paste-0e696133cde941874d5bf953463f3af480e34b3b.jpg
 - preparaty/images/part1/paste-0e69c9b73774eedb1e5731b77cf787440aa10d82.jpg
 - preparaty/images/part1/paste-0eb1cd210c1f71093263c83726947bf692006f6b.jpg
 - preparaty/images/part1/paste-0edb5d1cc9a889d178ffa121ee64b23ef9a73a83.jpg
 - preparaty/images/part1/paste-0ef9325b78ac2bd23998ac38986161977ca9f11d.jpg
 - preparaty/images/part1/paste-0f0afd5f4a896fbee45e5dc8d853902052abb7fa.jpg
 - preparaty/images/part1/paste-0f114f79ff422933322a08690369f9d5ac4c82f4.jpg
 - preparaty/images/part1/paste-0f4672647b89dd18c225af123c51ea5f8672f870.jpg
 - preparaty/images/part1/paste-0fd36e44fd4b2fa15327fd6d9570073ea5f485f4.jpg
 - preparaty/images/part1/paste-0fd6530473288bc60326588bda2c988999fc990d.jpg
 - preparaty/images/part1/paste-11e94a906908f360e9a8e9f58734c7fd6a499c89.jpg
 - preparaty/images/part1/paste-125bcff014666f37211f841068e841775658e621.jpg
 - preparaty/images/part1/paste-1369d9a1eee749287c1e231a05f3d994c56241df.jpg
 - preparaty/images/part1/paste-13cfed7fe5082536e6ec7cde534b59d775540001.jpg
 - preparaty/images/part1/paste-142fd1396eb09aed723a1c8629350a3ade6ea646.jpg
 - preparaty/images/part1/paste-143917ddb9a1e58e1554d907118d73c24774def1.jpg
 - preparaty/images/part1/paste-152d2bd3b417538d790bfaae35470834ac04ca03.jpg
 - preparaty/images/part1/paste-156e2526ab36bac3ddba0875afb00c45386e7e65.jpg
 - preparaty/images/part1/paste-15b464032b17864d5a44635c7c3b839cbda87741.jpg
 - preparaty/images/part1/paste-15e2e2f7a9b1878ea8fa60a3df124fe54ad6684e.jpg
 - preparaty/images/part1/paste-15f83f58b4f7a67cfbe3b15f3d2dac07bd62e521.jpg
 - preparaty/images/part1/paste-162077a1dcefe8040af3a68611961eb21e611f40.jpg
 - preparaty/images/part1/paste-1676d65d056d1e734800ad9b5e321b867a53add0.jpg
 - preparaty/images/part1/paste-17146db48100911de1109609c6be974978b6fc1c.jpg
 - preparaty/images/part1/paste-1730853e07f97c2a19cd157c917ae9acc9a3aa4c.jpg
 - preparaty/images/part1/paste-1744bec1198f9d01352ea411a949cd21a7e6a9ba.jpg
 - preparaty/images/part1/paste-175b10a8e7bd4b5a35b9505de80eae5a2d459882.jpg
 - preparaty/images/part1/paste-17ebe746140527ae8b5efe9bfae8c2087e9d7184.jpg
 - preparaty/images/part1/paste-18eb1a62e4d7578d17c38bf13359c963de1cdf46.jpg
 - preparaty/images/part1/paste-18fb953ca976fdc2f1486dc3abd2d62f03c4ba79.jpg
 - preparaty/images/part1/paste-19af437267245f9895de11837adc069abcf84d56.jpg
 - preparaty/images/part1/paste-19bfe445e835ce4b46a6becda0a704e69d52f2ac.jpg
 - preparaty/images/part1/paste-19fdd4ccc200da9637cfac9de413ea81d2fa71b9.jpg
 - preparaty/images/part1/paste-1a007d69edb302ec85ef131f88e7d489dbbf331a.jpg
 - preparaty/images/part1/paste-1a1620e88ceb5ffb98543963bfe27cc07708288c.jpg
 - preparaty/images/part1/paste-1ae1cbca7d860b8bf71f8453c3cc386f77904442.jpg
 - preparaty/images/part1/paste-1b1529bc2f03b0b7a5355a8228ba9c493f181af1.jpg
 - preparaty/images/part1/paste-1b6c67f51123c579e31f1cf9bde2140673fe86ac.jpg
 - preparaty/images/part1/paste-1bde52b1b5445dfba4d0d5ec05dfa08ea087b358.jpg
 - preparaty/images/part1/paste-1c42f14c96c6c934af4a96a5f2f25a98a0f7536a.jpg
 - preparaty/images/part1/paste-1ccfb95cb515e595fc8d61bdf00e49e9cc526f25.jpg
 - preparaty/images/part1/paste-1ce3f1a3f90b5260f6ab86d3e67873961156553d.jpg
 - preparaty/images/part1/paste-1ce4b0bb941b93cdf60f2698e064dad5630a3ffe.jpg
 - preparaty/images/part1/paste-1d27b0784f4028bd12e0a70f87fc8336a2bbe763.jpg
 - preparaty/images/part1/paste-1d86b09f345e6e100e834bfec0465731918edef6.jpg
 - preparaty/images/part1/paste-1db19b65ee9fc46f35e6d9cd1a0e9e54036c1566.jpg
 - preparaty/images/part1/paste-1e6b2128c923cdd766b48f6cba25856fcb287bc7.jpg
 - preparaty/images/part1/paste-1eb9b878594b4f2649713dfbeb4fb83efbe49e6e.jpg
 - preparaty/images/part1/paste-1f5ffbf4403b1866935515a0ddf905983a7b7759.jpg
 - preparaty/images/part1/paste-2019f5f3ec2c5958a6e5d42ce0fd9b237cbb46b8.jpg
 - preparaty/images/part1/paste-203a4cdf0c8f39fb43bed04aefa8384b85332a00.jpg
 - preparaty/images/part1/paste-207c9bafde594577b0067c48e75c3a0d415d16e2.jpg
 - preparaty/images/part1/paste-20e44142f43e21ecd7b1726377f9864ee8f017fe.jpg
 - preparaty/images/part1/paste-2106eb9f300fe85f822ff3ebaa0282f5e38ecbd4.jpg
 - preparaty/images/part1/paste-210ec01fe75a8a1fb79dc13525c07948eb7e8056.jpg
 - preparaty/images/part1/paste-210ec250306faa1604c97932737311cffc59a12c.jpg
 - preparaty/images/part2/paste-211c6fcb27528c6f7c79387d2562abc633f45780.jpg
 - preparaty/images/part2/paste-2183789d581708df0efaf311b25c8f2fc9e3f013.jpg
 - preparaty/images/part2/paste-221c2718130881f9dada6e5f35fbe8d98aae196d.jpg
 - preparaty/images/part2/paste-22282920fe262f06a8548f4804354b7bd83c207e.jpg
 - preparaty/images/part2/paste-222f403eb3a23baa925688d4ba8303d77cce6d01.jpg
 - preparaty/images/part2/paste-22911850cb9c5adb70d41d52698b32e832ce34e8.jpg
 - preparaty/images/part2/paste-22c198f4d2a95bddb25424af33033833b1dafdb0.jpg
 - preparaty/images/part2/paste-234ca34ad9d0d08eee231af4f96eedf5a2de26ac.jpg
 - preparaty/images/part2/paste-23af6a9fe6e47e4eeeee90055cd371e58442c25e.jpg
 - preparaty/images/part2/paste-23cdff2cb5679f92d6296381d7d73c61ac932bc2.jpg
 - preparaty/images/part2/paste-23d5b76b68d5c29011154a73579549c9afdf333e.jpg
 - preparaty/images/part2/paste-23dc64d7179f104a5878d7eb256de0c08b76a784.jpg
 - preparaty/images/part2/paste-24d4c001f57b69351e45c53b2aa156e91045d3bb.jpg
 - preparaty/images/part2/paste-250e2e0a2c151c6024309a21426db28deee7d05f.jpg
 - preparaty/images/part2/paste-258c981bc277d0e18af5f136188186a2679a6a98.jpg
 - preparaty/images/part2/paste-25d1470c48fcee78cc982c1823300b387160075f.jpg
 - preparaty/images/part2/paste-25e1a7bcd0cf5054bb9fbe4976a2cb995dbcbe06.jpg
 - preparaty/images/part2/paste-25fb470c79a63a8ced8d516199d65f18cd66a637.jpg
 - preparaty/images/part2/paste-26702314e81286f23e22ebae9f01fb4cd044cad4.jpg
 - preparaty/images/part2/paste-2747b06390532310d9a580a5a17029a0ae0664cd.jpg
 - preparaty/images/part2/paste-278d8bb80dbb8966cf7387dbf2a92a311b99653d.jpg
 - preparaty/images/part2/paste-27f211694cf0485e1487e1bbe83b54d86e08748e.jpg
 - preparaty/images/part2/paste-28062fb39335a84953cce9e40446a36295e7eb8f.jpg
 - preparaty/images/part2/paste-28301930e5faa4a049679e463d32f558095ee2f4.jpg
 - preparaty/images/part2/paste-287c6a116fb5dcbb8b2a7c3434ad6fdb59b52d82.jpg
 - preparaty/images/part2/paste-28d57af8b9424ae10bea937bb148b4e5f7285838.jpg
 - preparaty/images/part2/paste-2901c53aaf76a76a9589f5b289e0232d27dc199f.jpg
 - preparaty/images/part2/paste-29a9e381c0333608081f20d283f111c8fe575b09.jpg
 - preparaty/images/part2/paste-29cd08bdcbead7f6bbdf0f8a83c23f62fe6a7c74.jpg
 - preparaty/images/part2/paste-29f68a33261b9bb5168ec77a3d7ae9a9e7ab5400.jpg
 - preparaty/images/part2/paste-2a24ff392aced8163c6c99677b0d2b6a8748ebdc.jpg
 - preparaty/images/part2/paste-2a882632c29f5b398a6447725a73acbf0d4e9d6a.jpg
 - preparaty/images/part2/paste-2b16dff17fc61bf6a6ac487c06e1270f05bd39e8.jpg
 - preparaty/images/part2/paste-2bb841daa088c1b73b3d50c50f7f62a2c080e9fe.jpg
 - preparaty/images/part2/paste-2bc9b069e9290678d27cbdea366110977b8c7590.jpg
 - preparaty/images/part2/paste-2bf7d615a69e364bb653218fe96b4ecdcf30ab9b.jpg
 - preparaty/images/part2/paste-2c066d6b5e4032b598b995228457765957b21747.jpg
 - preparaty/images/part2/paste-2cc04749e526b02fd209b334d6df54b117687071.jpg
 - preparaty/images/part2/paste-2ce05214ae12f52daca2e4dd36c5d87b14f06191.jpg
 - preparaty/images/part2/paste-2d17f2f6d6989fd0a8495fedfb3fdf6889c8a574.jpg
 - preparaty/images/part2/paste-2d84268add73f5fab2c9e685d8cf88df31e72340.jpg
 - preparaty/images/part2/paste-2d8cba0e477a2d7c20d918b653816b8bf9cbf407.jpg
 - preparaty/images/part2/paste-2da28da79e64eef7104427cb29aa37d98ac7652d.jpg
 - preparaty/images/part2/paste-2dab3fb8accd351aac8bdea4a536711c4564ec62.jpg
 - preparaty/images/part2/paste-2dcb2bd118f69e0bbfa5502efe067a8616d55ad6.jpg
 - preparaty/images/part2/paste-2e785f12147bbbb5791a594e8cce3c8efae8110e.jpg
 - preparaty/images/part2/paste-2ef69a0df348096d4681fa20a4c4c6a7fc0e13a6.jpg
 - preparaty/images/part2/paste-2f40e5097ae13d8a30c1777272f7bc232165be4d.jpg
 - preparaty/images/part2/paste-2fca6b01a9c7aa8fb7028cc9003ff59cedd16f7c.jpg
 - preparaty/images/part2/paste-3038d06b05bbb9f716980b60e447433b42f663b4.jpg
 - preparaty/images/part2/paste-30582d79feed0866540b50c5b843bd1502621bae.jpg
 - preparaty/images/part2/paste-3063c59e9fdaf15d29ea20e4111db6493111d09f.jpg
 - preparaty/images/part2/paste-3108ba211bf55076d6dce529e1c036c9a4bc6bb6.jpg
 - preparaty/images/part2/paste-31ab2492056909ae540f339298095b61efd24322.jpg
 - preparaty/images/part2/paste-332c7b20127fa7546bbd0a7b9ba8958e78d0fe00.jpg
 - preparaty/images/part2/paste-337ec0d30cc472b31a53aee8667183b904f9eb12.jpg
 - preparaty/images/part2/paste-33fa58b97df51604c83a700bd8d373903aa36239.jpg
 - preparaty/images/part2/paste-344f1e3ceb9900ce3b398c081b812f12719f50ac.jpg
 - preparaty/images/part2/paste-35013c599166dbac4c8bde89a7b3f015647a3e9f.jpg
 - preparaty/images/part2/paste-355a249e50106ac8cdbebbbbac262a6ab1c5e3df.jpg
 - preparaty/images/part2/paste-3575ade7d763ebf5f84ed66129d90bc8198dbf87.jpg
 - preparaty/images/part2/paste-35c88daf9155e0993ab0ff25f71f5fc71f45131d.jpg
 - preparaty/images/part2/paste-35fccd12c4abd9963a490487b12d34ccdb6e00db.jpg
 - preparaty/images/part2/paste-366ffafb8b8c6271992388e6793c58826074c2b1.jpg
 - preparaty/images/part2/paste-36882579a2f6e13c15507a4d0d28092a4ef09294.jpg
 - preparaty/images/part2/paste-36acb27acff186cb71aa4261d25cc006649e65b1.jpg
 - preparaty/images/part2/paste-36b833d161a154d72bfb185f39462a7ae8a684fc.jpg
 - preparaty/images/part2/paste-36d186388ea6f8dabd79a89c22b0e118df68ea86.jpg
 - preparaty/images/part2/paste-378406079cad0a6b22f39b0adfb5d457da217b96.jpg
 - preparaty/images/part2/paste-38ee27b1f1ef91d5dcc82ae63238a1899fe1788b.jpg
 - preparaty/images/part2/paste-39ea4b3bec6f983a3a3233cb28c81e21934e7297.jpg
 - preparaty/images/part2/paste-3a4b6455f4da664d902665cf7909a6cddda1ad65.jpg
 - preparaty/images/part2/paste-3a4e8826c864799b3af88cb7a35bbf3c61fdbd7e.jpg
 - preparaty/images/part2/paste-3b6736bdb7fab129a21afab2ba331990ef45ee19.jpg
 - preparaty/images/part2/paste-3b7b3a2a6c43ab8893a46a63db22267870082b4b.jpg
 - preparaty/images/part2/paste-3b94bcbd25a9eaefeb14f058da1e089864dcd8aa.jpg
 - preparaty/images/part2/paste-3bb8a35b7472f37c8c6b6504161a283a44c7f082.jpg
 - preparaty/images/part2/paste-3c5cff20205d4257e9007d1108c4595c938305e1.jpg
 - preparaty/images/part2/paste-3d5dd9cbc2535aaedf1346e760298793f7411edd.jpg
 - preparaty/images/part2/paste-3da9297a75bc41025c0ddffc0b9dbc57cc4c9752.jpg
 - preparaty/images/part2/paste-3e0915d8667d2558e033a3fa00c98cd28a70ff9d.jpg
 - preparaty/images/part2/paste-3e3cd5198018656c1e755530b455589815a280e7.jpg
 - preparaty/images/part2/paste-3ead2107abdd35ec79e160467dfa8b2ee793234c.jpg
 - preparaty/images/part2/paste-3ed16f8aadcd96e52eec1c3b64de1af1c89b3b48.jpg
 - preparaty/images/part2/paste-3f89e0b3c610122b27103981cca82b15d7c21407.jpg
 - preparaty/images/part2/paste-3f93117e590d569e79c85d904bdf7f9f242511a1.jpg
 - preparaty/images/part2/paste-400c7d730e2b79d7e8ce4c87c7970e13b22dfff2.jpg
 - preparaty/images/part2/paste-40240805c2a7df3d5d895b485fb9771d3591f92a.jpg
 - preparaty/images/part2/paste-416c7a2e12923e6954d1c1538282ca6a21db2f94.jpg
 - preparaty/images/part2/paste-421551d855080854560f4c9ea31317ded9d2b434.jpg
 - preparaty/images/part3/paste-4231e9dac9706d6c6fd93989f152df56602abf9c.jpg
 - preparaty/images/part3/paste-43378f52583c63fbe9154b488de3d6a209d32d88.jpg
 - preparaty/images/part3/paste-4374df0e2c017e1084fbbac989f1915d1763f053.jpg
 - preparaty/images/part3/paste-437d9a00a65e02cb9840795b3a6f7d6645efc672.jpg
 - preparaty/images/part3/paste-4399945284d5675ea61a5ee177de008850292ce9.jpg
 - preparaty/images/part3/paste-44365314b208cf13ac3a8beec0c9bbcbaa0b76d4.jpg
 - preparaty/images/part3/paste-454f793069315371109cf4fedca51bfc59cd3456.jpg
 - preparaty/images/part3/paste-455165b233eb31888e72cfc29be367bcab376793.jpg
 - preparaty/images/part3/paste-455298468284df8a76d0defc241fd3db2d1a8485.jpg
 - preparaty/images/part3/paste-4569e8297eee0b7fb299e47e9c728609d2b4f53b.jpg
 - preparaty/images/part3/paste-4580f159a6d546b0b2cb1bda5eadba8944b7ccad.jpg
 - preparaty/images/part3/paste-4581ed2a21b0168842ff54b89ee8dec945d7d280.jpg
 - preparaty/images/part3/paste-45890cc8bbf6149de4377c0d2a6519637a2a2fe4.jpg
 - preparaty/images/part3/paste-4598c8074613cc5a89f9a56bf3efb1ea3d4a7d9a.jpg
 - preparaty/images/part3/paste-4620dba5d7ebe47cb1079151f675cdb79e18ddbe.jpg
 - preparaty/images/part3/paste-462d4e81fbc048397413218cf9e3fbca115d3878.jpg
 - preparaty/images/part3/paste-467bcd72bb44dbc516a28b31a0fe860b4ed16527.jpg
 - preparaty/images/part3/paste-4723dd374f316e9eeb0ebf62a22fef3b8df98caa.jpg
 - preparaty/images/part3/paste-478b786e24ee06ecaf75b1fb893efe058952b2a0.jpg
 - preparaty/images/part3/paste-4872b259d0bf3a830ffe78f9218171eb58930295.jpg
 - preparaty/images/part3/paste-488f132cf9c14532eea1d78c9d90f2035b5f58fe.jpg
 - preparaty/images/part3/paste-489c729248f2d4d433c31776ad300330f953f720.jpg
 - preparaty/images/part3/paste-498426bb552860765210e22ace472ba4fc508ecc.jpg
 - preparaty/images/part3/paste-499117fd023616ce4f13001ce95d0ca428f6350f.jpg
 - preparaty/images/part3/paste-499c53ba351e3d563a44168e0fdbbc798cf36e9f.jpg
 - preparaty/images/part3/paste-49e8ffa0ff87fae0717e71f1195d6f72e5c20d21.jpg
 - preparaty/images/part3/paste-4a0dcb45e4bf8e5e1d07a9ede51e307ca40a3934.jpg
 - preparaty/images/part3/paste-4a60dca6049275319d2e25bcca7f42a2cf66a83d.jpg
 - preparaty/images/part3/paste-4aa9ffa507fbd34abc758c50c2414314657046bd.jpg
 - preparaty/images/part3/paste-4ab0c5a501cb10a7ee135a0dce4d0a60c9bbd91c.jpg
 - preparaty/images/part3/paste-4b920647b6208d517d7cd436b38e3ee2ed82f36c.jpg
 - preparaty/images/part3/paste-4b9d048e2ef34491df610a14c69add8ec9b5092f.jpg
 - preparaty/images/part3/paste-4c594a8cb44b3fe1a52859852c0f7fc183822c8c.jpg
 - preparaty/images/part3/paste-4c90cb255a45c1baa539e1552ae870d993541104.jpg
 - preparaty/images/part3/paste-4ca8a10497d6d35d5680798413c5e7970ef21218.jpg
 - preparaty/images/part3/paste-4db03563506f49a3b6f739c867bffbd7bee7ae36.jpg
 - preparaty/images/part3/paste-4f03d4cbc9f17547a6432c0e1f7452e3653e8030.jpg
 - preparaty/images/part3/paste-4f6026c4afa59c8f407418f3a91267e5faefa66e.jpg
 - preparaty/images/part3/paste-4fbd4908816ffd97c49c40a3d6316250a564001c.jpg
 - preparaty/images/part3/paste-503b5868c53b94a9c58e6f317606341a01899f5a.jpg
 - preparaty/images/part3/paste-5097391f6ae5d7e94a295e8c3fd2992170a8435d.jpg
 - preparaty/images/part3/paste-514cda12cd7a38b90b6d82a7a1671d7dfbaa8bde.jpg
 - preparaty/images/part3/paste-525db9bfececa936bb5ae90c5ba31717a37d4353.jpg
 - preparaty/images/part3/paste-5288d1e700fe79dee7c05e03db1696f8bdb2285a.jpg
 - preparaty/images/part3/paste-52ff73ad93825e97a809a9d29b9ee8385efa4d51.jpg
 - preparaty/images/part3/paste-5391060a154f20287bdb97a5f1ef991924a5b962.jpg
 - preparaty/images/part3/paste-53d1a67da64876e30d5580413fe4226974c19e10.jpg
 - preparaty/images/part3/paste-5436720d616ca9365473cdbbb39d1d50f58d7b31.jpg
 - preparaty/images/part3/paste-54431fc2106408e38f190206c70049d8f37dd2af.jpg
 - preparaty/images/part3/paste-54522e5032293ece0278a4bea4bce9e0be73c0a1.jpg
 - preparaty/images/part3/paste-54551d5e1bee4669c591885972dbad3498ab0b08.jpg
 - preparaty/images/part3/paste-54e98b805531a79299af8c732f2e758539c2890a.jpg
 - preparaty/images/part3/paste-5514d27be2804f2a91b219ae0497021df7d3930a.jpg
 - preparaty/images/part3/paste-567db6b3ac44a0e9f3c9292042cb2d88bc1907c4.jpg
 - preparaty/images/part3/paste-5730431887c78cb78b6b2c59df80cdb5e9f65f26.jpg
 - preparaty/images/part3/paste-574ff085f721e6cda26eccae3220cf5d873a5839.jpg
 - preparaty/images/part3/paste-57b24000368f7f3820a852ef6f4fa30f185197d7.jpg
 - preparaty/images/part3/paste-581431f464b2b371b921ac0e08b68faeb0840145.jpg
 - preparaty/images/part3/paste-583ee968beef38146ea1e71f2f5849cf20b7e2f4.jpg
 - preparaty/images/part3/paste-587336c5b91f11f3cfbaf29e5d8b7e4d6f11ec1b.jpg
 - preparaty/images/part3/paste-58a3c959338e555cd1ae3aad4286a514804ccbac.jpg
 - preparaty/images/part3/paste-58bcb2ec106b8bfff9234c93743124ed3a346ee8.jpg
 - preparaty/images/part3/paste-59c98f0c283810fcb029dc181904d0c7d38fe3e4.jpg
 - preparaty/images/part3/paste-5ac9428b8288bfa2eb10a3e830f08727ef5c0099.jpg
 - preparaty/images/part3/paste-5b2bde814233045a7e67019f94cea032eec1aabe.jpg
 - preparaty/images/part3/paste-5b6b088e36abde0307a4295898ea197ba81cc868.jpg
 - preparaty/images/part3/paste-5bbab7b910dfa026c501d44aeed74635488619d4.jpg
 - preparaty/images/part3/paste-5bda43c06888d3eafb7e3af3c3881f2e5d4cacc3.jpg
 - preparaty/images/part3/paste-5c74fb4cc71336f8ac1c4af554e1dcfc2fa34b60.jpg
 - preparaty/images/part3/paste-5d012634717bc3c1cb4a1a0a83b36ee0519cf0e3.jpg
 - preparaty/images/part3/paste-5d2a6e557bba6fde657caa87688e0c61ef91bd90.jpg
 - preparaty/images/part3/paste-5d488b80262081ad930e13ed8878eea5d459c572.jpg
 - preparaty/images/part3/paste-5d674357251c7d02e1285e396516227216f4182a.jpg
 - preparaty/images/part3/paste-5e97b017158d1c25452429c949308661c544af21.jpg
 - preparaty/images/part3/paste-5ee14621aa684793ab83200a9500790b9238a5bd.jpg
 - preparaty/images/part3/paste-5ee731c09cc109e4a4687fbbdba61a9e56253994.jpg
 - preparaty/images/part3/paste-5f4c450255f156efdb1752f110c930810db36840.jpg
 - preparaty/images/part3/paste-6003c19faa98e94c6752d8f1a1b743a00d373633.jpg
 - preparaty/images/part3/paste-601b7a133bca899cd76cd2ec304cff31443c369c.jpg
 - preparaty/images/part3/paste-603c2b4a30b4f436b609c78b935d86db1f78c0ab.jpg
 - preparaty/images/part3/paste-608d24202b34a6cd8c6a25545ff4a62178669187.jpg
 - preparaty/images/part3/paste-60f3adc8ec77ea1e5133c715c3ab196c3e4ddbb1.jpg
 - preparaty/images/part3/paste-616d599206c3ee6b3c138a92824d77fb071aa715.jpg
 - preparaty/images/part3/paste-620313a4f897d01ad0ee809511507cc06558083e.jpg
 - preparaty/images/part3/paste-62500075c40c2ef7af30fad19d471c8928766f49.jpg
 - preparaty/images/part3/paste-626296ea68ceea08073ee78bd6220defb7bee494.jpg
 - preparaty/images/part3/paste-627373458a84d83609863462dcc0335fd5ad6e57.jpg
 - preparaty/images/part3/paste-627deb9fd49f1e1b372c1068d03f2bcc11ee63e1.jpg
 - preparaty/images/part3/paste-62f207044ba6210b4dc65802f81647e097e8b35b.jpg
 - preparaty/images/part3/paste-63545c19b6e99eb0fe514ce8f22345bbda71a6fb.jpg
 - preparaty/images/part4/paste-6366dee26ead3f07e68067dfab7cebb20282752d.jpg
 - preparaty/images/part4/paste-63890c0fdf4a4ee9875ef30ced78eeede82919c7.jpg
 - preparaty/images/part4/paste-63f10e40196360e1650bbeed1701831f1bf71e1d.jpg
 - preparaty/images/part4/paste-6535512e814366ff40189d796a8c27d167554b16.jpg
 - preparaty/images/part4/paste-6538b27a5963cfa82c5995b611611309a1a3d5a3.jpg
 - preparaty/images/part4/paste-657760f422d43a97e22478ce9193324044a3ecb4.jpg
 - preparaty/images/part4/paste-65e9f22d70dc3f22de1707546b20d7de7cb14a72.jpg
 - preparaty/images/part4/paste-6686504e78ec71b0148a2f59ad55a44e6349cf2a.jpg
 - preparaty/images/part4/paste-66e8518e36ff26f9e6658bd325e2fec03c29f121.jpg
 - preparaty/images/part4/paste-66f9a6d4f83968441b2c4d7fd05fa79134da6da2.jpg
 - preparaty/images/part4/paste-671f3541e0af7e0176a62e583681026c5872f08f.jpg
 - preparaty/images/part4/paste-67360196543d8282afa0a9989ffe17c29487a4f4.jpg
 - preparaty/images/part4/paste-6791818f480ac5de4cc32d73e5fdbc79d109bad4.jpg
 - preparaty/images/part4/paste-67ebf7c6e2aa38eb22e7766d3e29581aeaaa14df.jpg
 - preparaty/images/part4/paste-68fe485ec6fd9f094c7bfa7754f0c6d645504365.jpg
 - preparaty/images/part4/paste-690203ff0c882a2e50f3ebc0d7b44fa49a724421.jpg
 - preparaty/images/part4/paste-69688e3f0f41e6dff6db1276bafd7df305ec2183.jpg
 - preparaty/images/part4/paste-699389394e899f5e5e34e4a8b4f3dcf16bde0240.jpg
 - preparaty/images/part4/paste-69c7481f09ff872ce4de8808b5d42d2bee3eaf35.jpg
 - preparaty/images/part4/paste-6b7589d4dab4c1b24e1ff055157f1cfc8f859717.jpg
 - preparaty/images/part4/paste-6c0ad8a2c410ab68b2242103199fdc1fe740e0f1.jpg
 - preparaty/images/part4/paste-6cc383e563662bd86472f25022b4001963053f93.jpg
 - preparaty/images/part4/paste-6cc789423eab3a2229d78bd5cba212e0b0e80ac5.jpg
 - preparaty/images/part4/paste-6cd12a2861b0ff5315342a583b461338109f7197.jpg
 - preparaty/images/part4/paste-6d04518ec8d4b6d3479462340d8136120ae4ccbe.jpg
 - preparaty/images/part4/paste-6d1789951060fcea23f369d9dc88d62b7da3bcbe.jpg
 - preparaty/images/part4/paste-6d4f7ec0869b060a0a7b55e86705c1f517fd702f.jpg
 - preparaty/images/part4/paste-6e010ddc4c9fd84bd408fa9f8948b98dccf93df9.jpg
 - preparaty/images/part4/paste-6f36a510d329dbacdd432247267083a15c60ac8d.jpg
 - preparaty/images/part4/paste-6f38b3776dc0a0d18ab731773dd696442e50f7c6.jpg
 - preparaty/images/part4/paste-6f3ea00dff2e7897774b99126637683759751023.jpg
 - preparaty/images/part4/paste-6fbb586466d7bf3656adc1243c65537f1bf7492f.jpg
 - preparaty/images/part4/paste-6ffc1d0dee00515c8969faea3dbb26bdeb2cb21a.jpg
 - preparaty/images/part4/paste-701eb5ef8c77620c1a446e5fa8778d0f151e923b.jpg
 - preparaty/images/part4/paste-704dd7f8aed6f14ebce2d8e6fa37bedaf3a3fcf3.jpg
 - preparaty/images/part4/paste-707715087e5ed52dac4d7ed1a9ada750ca9a4b02.jpg
 - preparaty/images/part4/paste-708ed550389327ff563faa5b640db842da245221.jpg
 - preparaty/images/part4/paste-70c94c42191d20ec2df193cd49b2b0020daaa2f6.jpg
 - preparaty/images/part4/paste-70e44e389e6134bbfa1e8be0b5f8e2034c070edf.jpg
 - preparaty/images/part4/paste-7116c3059b8c0329b677a65250a460dadb623dd9.jpg
 - preparaty/images/part4/paste-712846b0f0b74c2f6ea95f0a84f99a61851820cc.jpg
 - preparaty/images/part4/paste-712c487fa3610a16b458bd2999a8aa39aa7f78bf.jpg
 - preparaty/images/part4/paste-715c8669d520d4cc53d1b4405cdcf5e2f9c0d9af.jpg
 - preparaty/images/part4/paste-717994bf74514fadf9318f34855da60fcc6fc9c8.jpg
 - preparaty/images/part4/paste-71a5c8ed7132b0344064fa9c7efc29f2bf1f039c.jpg
 - preparaty/images/part4/paste-721f22ead320f8f9e7b1ec9425b1c99f349bbb32.jpg
 - preparaty/images/part4/paste-72dbdec4f8d7d5a217e5093a613b89d027c76391.jpg
 - preparaty/images/part4/paste-72f08c745ef846a225b9a8f3cfab4cf32ef64884.jpg
 - preparaty/images/part4/paste-7352c6bfda56d56e82dbfb1c457f688566f15f2c.jpg
 - preparaty/images/part4/paste-73996bda554344c129d17e3436c07a7b351f2dba.jpg
 - preparaty/images/part4/paste-740a00d726f224dbd311505a7e797093590debff.jpg
 - preparaty/images/part4/paste-7478de0378379104f8135a14d3d1f4fd33d7d4a2.jpg
 - preparaty/images/part4/paste-748ee8b5823d6641d29dd0aeeac362d52e73879b.jpg
 - preparaty/images/part4/paste-74a93e5458e5aff74d76054ce446aa98626e6bc3.jpg
 - preparaty/images/part4/paste-74c375080f1c5031f094736ab807b8b8cdf4612e.jpg
 - preparaty/images/part4/paste-759861b4c55bb2ab613e03ce244dee0efabdc14a.jpg
 - preparaty/images/part4/paste-75b9e5db5430cf1cfdfd15ce940d5d312a808df4.jpg
 - preparaty/images/part4/paste-75ca14ac08ea3de9077dddcf7a7b75d48be641a0.jpg
 - preparaty/images/part4/paste-75d5eadd096de14d7250ea0621dc5bf4565e358f.jpg
 - preparaty/images/part4/paste-75dc54d4e4c569a7ea4c33b10899458e96b2855d.jpg
 - preparaty/images/part4/paste-761b18db5a7a483d1526756a83d4790c9177b8e3.jpg
 - preparaty/images/part4/paste-765deec55be898287b0b5cd501fbc2acd6ca5707.jpg
 - preparaty/images/part4/paste-766feab6a7ad6a52c89d329659fbff97b4f02015.jpg
 - preparaty/images/part4/paste-76a01081afa9de5c7590d62470adbc20fc48d741.jpg
 - preparaty/images/part4/paste-76d467736b18bf78e7e161cfda7ff7435a6ff865.jpg
 - preparaty/images/part4/paste-7829ca43e121f04293b8d5dd1ec218ce87ccb32e.jpg
 - preparaty/images/part4/paste-782bb60cec305e8e9cc8ecf5969b3cd82c59ce7d.jpg
 - preparaty/images/part4/paste-78535904ff1dd9b2ddc6950d3e3dcf685d26cab7.jpg
 - preparaty/images/part4/paste-785d22c4fffd0354c42200034ec812ba761af403.jpg
 - preparaty/images/part4/paste-786b5f6b2c2f4a0af1e3a0c627c58b9185b71b18.jpg
 - preparaty/images/part4/paste-78dacd1b6292f74e423583e682d4f21fda8a28b1.jpg
 - preparaty/images/part4/paste-791bf9e7874c678ee1fe993731176f29ce51dd66.jpg
 - preparaty/images/part4/paste-7a7910718d0883688219959e728e88ab37d84831.jpg
 - preparaty/images/part4/paste-7b5ad491ac9a779a4dceb72b9f6efb84faccb3e3.jpg
 - preparaty/images/part4/paste-7bdff296708a3ba699bd3557ad101ae6a3938df5.jpg
 - preparaty/images/part4/paste-7bf8b532a17bd85e6415fc1a6801a0a628d8a6d7.jpg
 - preparaty/images/part4/paste-7ca52237f622c9520e1b40755f82eb6ff4061a1e.jpg
 - preparaty/images/part4/paste-7cc8a9d60e95e56f8fdf6013aebbc7ba11ce127c.jpg
 - preparaty/images/part4/paste-7cd4863e29a5a336f3fca5aa0bcad02037b71301.jpg
 - preparaty/images/part4/paste-7d13f8f64c7aba5e355f80d1a1248cc281f100dd.jpg
 - preparaty/images/part4/paste-7d68d1786dca8c04b452973f4e9c95005842e3d8.jpg
 - preparaty/images/part4/paste-7d94afceb7a996bccf9b16790ae10ae2a7490c07.jpg
 - preparaty/images/part4/paste-7f2955bc8f0ef8a947242b976832d360e531e5b8.jpg
 - preparaty/images/part4/paste-7f6f0a05551b887f0748871fd3900094b1562bf7.jpg
 - preparaty/images/part4/paste-7f7e9822f29ca7d204173f493c7352dfe83682b3.jpg
 - preparaty/images/part4/paste-7fc96de58e6f92ea9a5574cf6a0ea528a689097d.jpg
 - preparaty/images/part4/paste-80c6e1c7a9a2c5416b35577ff9fa5e438cd899b1.jpg
 - preparaty/images/part4/paste-8102481750187c77aa42f49d5643cc927b892b48.jpg
 - preparaty/images/part4/paste-8251ac5ea45b5829c427da4fff4af2284d83e7af.jpg
 - preparaty/images/part4/paste-8252918ec23aef513b533bd35fde37609107f5a7.jpg
 - preparaty/images/part5/paste-82a52c198231e1eae622c1924d1d4d4e3cfd8680.jpg
 - preparaty/images/part5/paste-82a6e9e50576eea3411c5b6d3804e90a5ea8fe82.jpg
 - preparaty/images/part5/paste-82da3f0d9f4de5b1217fdf8a1a64c602ec007959.jpg
 - preparaty/images/part5/paste-8304939d216dba65032c8e78f1b063b1a141ec95.jpg
 - preparaty/images/part5/paste-8526348f69ee1181981d1d0eba63cbca7eae353b.jpg
 - preparaty/images/part5/paste-85307025ef4338e1260afc32952d3355f56321ad.jpg
 - preparaty/images/part5/paste-855bca0903b43d32cc31908e72e2132ac2b83b61.jpg
 - preparaty/images/part5/paste-8588d6ce8be5875cfe332f1dadb2f4d26e954c62.jpg
 - preparaty/images/part5/paste-8636ebbdc49b2895f6b043ee59713f18ab4dd125.jpg
 - preparaty/images/part5/paste-863bee837508b8fbe6b0488d9263a6e7a66a1abf.jpg
 - preparaty/images/part5/paste-86664dc1e1edab2b7f7b16fe2f962c703a9ba6cb.jpg
 - preparaty/images/part5/paste-86e202db366587de0aa8d528854451a3f883357a.jpg
 - preparaty/images/part5/paste-879feaa5935ce0d70aea2a6285d73a29fe37e7ba.jpg
 - preparaty/images/part5/paste-88579bfa759a81a8acb805fbf643fc11f76fdfbc.jpg
 - preparaty/images/part5/paste-88c304904616ed25ed0709d7371e7299c315f5f8.jpg
 - preparaty/images/part5/paste-88d3577a373379a2d5c059189142525ebc1fcbdc.jpg
 - preparaty/images/part5/paste-8929c6fd7876ca6334d4c7bec5bed5c12511ed9b.jpg
 - preparaty/images/part5/paste-8947f667c0a97ddc523a3de60e30dcc5e3278c11.jpg
 - preparaty/images/part5/paste-896ac72956c79543e935f049b7f1092b3eb77536.jpg
 - preparaty/images/part5/paste-89a2ac439cae0761ab307188186d6f0667f6a43e.jpg
 - preparaty/images/part5/paste-89a2ec8689a93a88618d2cdecbc91620a74d282b.jpg
 - preparaty/images/part5/paste-8a0693ce20d79ce42af077b0d10b724939092397.jpg
 - preparaty/images/part5/paste-8a66650ebad883d7349e0163d70ffb81498f90ca.jpg
 - preparaty/images/part5/paste-8a689564b804cb957eb011b6b819661bd4b17698.jpg
 - preparaty/images/part5/paste-8ab02ae6e3e5f9156e96e7f37db53246355337f1.jpg
 - preparaty/images/part5/paste-8b0ab6f1b82b5dfa1ccc7bbf4be27ac5822cb0df.jpg
 - preparaty/images/part5/paste-8b6f65c024984485ca972fa1727e40a11bc37df4.jpg
 - preparaty/images/part5/paste-8b7f1b4580f482a7b08bc57d3ed50385e2874c7a.jpg
 - preparaty/images/part5/paste-8be503a09e482df21109767bf8df504140674807.jpg
 - preparaty/images/part5/paste-8c2a7da1140222436ee7967a1c69d04379694741.jpg
 - preparaty/images/part5/paste-8cd87e37dca47c6e3a73fe79f4edefe8bf104214.jpg
 - preparaty/images/part5/paste-8d00fa684e0b933e317c6a38087821077574db77.jpg
 - preparaty/images/part5/paste-8d17f08c815b3670ca26bdcb981dec465a6c1000.jpg
 - preparaty/images/part5/paste-8d5b4d16121345f09a8c57686087fca6dbe6c1ec.jpg
 - preparaty/images/part5/paste-8d7684fd55408baac4553c7f7a4bf7914d661161.jpg
 - preparaty/images/part5/paste-8d87904f22efa4007983c5bae312a67fdce81485.jpg
 - preparaty/images/part5/paste-8deb52ebf9c048be7dc3499b40aac0aab79c90bc.jpg
 - preparaty/images/part5/paste-8f002885f55f2fa5528a56d0dea06f045f8e3b0d.jpg
 - preparaty/images/part5/paste-8f12a91520cbf68f29985225c9486b74d4a38902.jpg
 - preparaty/images/part5/paste-8f1399bf5ebbbb6b933b6191633a723a2b57f32e.jpg
 - preparaty/images/part5/paste-904a060a5c3279a17faae587fd6fa545c64ac336.jpg
 - preparaty/images/part5/paste-904b9dc147aaf3933038cbcb316528ed5fa380cb.jpg
 - preparaty/images/part5/paste-9169ae9fff62d6100930a788798d7ef4a7daf9c3.jpg
 - preparaty/images/part5/paste-92b242b795f77cf3d5cec232afcb21644d0ba819.jpg
 - preparaty/images/part5/paste-92c48a5488ca87d27bed9926251f7ace429f5191.jpg
 - preparaty/images/part5/paste-934bc72a66f13f75bf153a0ef585adeb8edcb28b.jpg
 - preparaty/images/part5/paste-937e48f44f6db464108a14a8198632d5454fa721.jpg
 - preparaty/images/part5/paste-9386506a482a439bfaf5ef14c307a2a980fb767b.jpg
 - preparaty/images/part5/paste-9386e7aebb5aeb46b1c37d0d33c09fa5a6dce749.jpg
 - preparaty/images/part5/paste-93b0a70ba9f347bb53449a73b6b693a4434b2156.jpg
 - preparaty/images/part5/paste-93dc4a612d3d404ed5626b0a958696b6affb2514.jpg
 - preparaty/images/part5/paste-93e97c5640b3d66eda77671ee25826f105d26c5d.jpg
 - preparaty/images/part5/paste-9409626e4fb32cf47b51aa13ef49534d060366d5.jpg
 - preparaty/images/part5/paste-942bf3e5f294b3bdbfd94eec00ddb58091ec8d28.jpg
 - preparaty/images/part5/paste-95004f82332876f71243561cafec151d8eb16d1f.jpg
 - preparaty/images/part5/paste-960fbfd6ed758d89c63695acf95fc17674a35e5f.jpg
 - preparaty/images/part5/paste-967610d132c3ed5119e6d88d03b88d4f5e4d6edf.jpg
 - preparaty/images/part5/paste-96c77e9228bd569911bc4ea8d0e22bf62b790816.jpg
 - preparaty/images/part5/paste-970a5edfeb85d5a3c5eb07595e58292dd8fc657f.jpg
 - preparaty/images/part5/paste-975473b6df81fd74388f71fdc5234c834dab36a0.jpg
 - preparaty/images/part5/paste-98315839661906dbea689a653f9da853c665c4ae.jpg
 - preparaty/images/part5/paste-989f96c1cd0c88bbc74599a7a8260aace9965a34.jpg
 - preparaty/images/part5/paste-992ee10d5abd6371615e4379a35b689a485eb754.jpg
 - preparaty/images/part5/paste-995035ba0ef4fa6a1afdf50c5fda66144c0c3675.jpg
 - preparaty/images/part5/paste-99b19f9f12eff5c9a5a9e23755c42090a81b37e7.jpg
 - preparaty/images/part5/paste-99bf3b25f8d91a1b7541d0324ea8ea3d0c64510a.jpg
 - preparaty/images/part5/paste-9a4970035c764b3320a36567962814b199b23f5f.jpg
 - preparaty/images/part5/paste-9a78d9694680179094c15dcb9b85710d66b60dd8.jpg
 - preparaty/images/part5/paste-9af6ca992224bea066f106cc4b15faa78161a034.jpg
 - preparaty/images/part5/paste-9b1753402cc4dfa96296e2f807e6ff79a05e198f.jpg
 - preparaty/images/part5/paste-9b28555e39f883ce7191874add9bdb59539d3fe0.jpg
 - preparaty/images/part5/paste-9b2f6ec73bf71e43daf20f60136f3315a6958e3f.jpg
 - preparaty/images/part5/paste-9b3dca6af5a2519999e771aad2d7a0780bd08fad.jpg
 - preparaty/images/part5/paste-9b40eb15222c89d745c1944b945ec5eb606a6865.jpg
 - preparaty/images/part5/paste-9b5e1823d7074649ec801f6dc205d0e5761f6288.jpg
 - preparaty/images/part5/paste-9bda153fd66a7ccf06cb0eef5d9725cd746b5b65.jpg
 - preparaty/images/part5/paste-9c94f71fcabf49615f38931c1563c576cfd16127.jpg
 - preparaty/images/part5/paste-9cf71bea59e75bbc11fda75075f7578b4fc20226.jpg
 - preparaty/images/part5/paste-9d10b2587d9c6434771ef3fc3894bcb445416136.jpg
 - preparaty/images/part5/paste-9d2150e5910ab465fdcd853b7427cd22c327f1dc.jpg
 - preparaty/images/part5/paste-9df402e88a976bb113f14ef0279b85cff78c7dd6.jpg
 - preparaty/images/part5/paste-9df73e3bb9b15bae554581ae81b84e275674313a.jpg
 - preparaty/images/part5/paste-9e108e0d647133a27f927fbf82f39dccc53a7a77.jpg
 - preparaty/images/part5/paste-9e5ce7cde500048f636a678092f11bb417472cbf.jpg
 - preparaty/images/part5/paste-9e5ee5e84752a73169975f338f75111c41cc9399.jpg
 - preparaty/images/part5/paste-9eac0ccee6ce60c3489ae1c3537365a0ca5f4a2d.jpg
 - preparaty/images/part5/paste-9f318d1f45fae0db94c4ac8f385c5ef1383674ad.jpg
 - preparaty/images/part5/paste-9f5a7bf1a7dc8a89f972d9f652c09fb426d9e46a.jpg
 - preparaty/images/part5/paste-9f5e2a7c7fa4748a97def190376116fb1e5e21db.jpg
 - preparaty/images/part5/paste-9f675dbeb9b80e894e995947203647cdca06361c.jpg
 - preparaty/images/part6/paste-a096c163f810b0d9bb577769b225d8f017e6020c.jpg
 - preparaty/images/part6/paste-a0f90598daa5178200b50130b79236850597bc00.jpg
 - preparaty/images/part6/paste-a1125b09e3ee2ae462d38b5c6e7f44ac546d6bfd.jpg
 - preparaty/images/part6/paste-a164c5c52f612579017c0bd16ff53b37c7ef4ffe.jpg
 - preparaty/images/part6/paste-a1ab0f61859fb128ca32467a888eeea327bc103e.jpg
 - preparaty/images/part6/paste-a1b5fcdc4051fc6a6399777d2b047e2cfe88c143.jpg
 - preparaty/images/part6/paste-a20e235c85a9094a9bd9a5d6ca714f63b03efc79.jpg
 - preparaty/images/part6/paste-a22887fa27c57ce22a7facdd9f9c9cc6be5ac0f9.jpg
 - preparaty/images/part6/paste-a3592d7dce2c78034296cde89c0d957976bde346.jpg
 - preparaty/images/part6/paste-a3787093b54a686e3991ef1bf5df062786879db6.jpg
 - preparaty/images/part6/paste-a4b7fd4fe4cd9d12e7a6e3cd189b085a4833c010.jpg
 - preparaty/images/part6/paste-a5a34121d52abd9477864a64386825941fe6cacb.jpg
 - preparaty/images/part6/paste-a5a6452dba50ec0888db5841563ae95656efcd91.jpg
 - preparaty/images/part6/paste-a5c448b9fa06f5893c8c3326f66fc5f1aee9ef7e.jpg
 - preparaty/images/part6/paste-a627e34481705f48d2c6b7364f04cce31e4390ae.jpg
 - preparaty/images/part6/paste-a6730efd6fa35b24be9ebe70db034cd02ed3ceea.jpg
 - preparaty/images/part6/paste-a6ad9b66ce74bd7ba1d205e3702ac0cdd68bc9a1.jpg
 - preparaty/images/part6/paste-a6db98784bb8dc74fe869f26c6a92fa417db33dc.jpg
 - preparaty/images/part6/paste-a75a4842987bf4df222c73e52899119405948165.jpg
 - preparaty/images/part6/paste-a7a2e4eed56d2a382f7f61766ce9731044e474ed.jpg
 - preparaty/images/part6/paste-a7cbb1e5cf50bcbf0ce8fbb697486b80391dc21c.jpg
 - preparaty/images/part6/paste-a7ce3a903b871f22c6d866b8505147f38929e712.jpg
 - preparaty/images/part6/paste-a7f7a3eb42a030c1a2a4bc541eed45d51bea543e.jpg
 - preparaty/images/part6/paste-a81ae6ca4c05b6cc4ccb777d6e40afc43b5aa665.jpg
 - preparaty/images/part6/paste-a832088109324e921e080f59cd284af0d90d2ab2.jpg
 - preparaty/images/part6/paste-a8625c46e2b427241f909ed2d4e29f4625e214b1.jpg
 - preparaty/images/part6/paste-a8d17e8f6b4ffcbf31301d79272c847ce0ab1a81.jpg
 - preparaty/images/part6/paste-aa0d660bf0933646c2cc9e00b37abaa9fa4527e2.jpg
 - preparaty/images/part6/paste-aa991255c046cb684998372512e602b45b4406f7.jpg
 - preparaty/images/part6/paste-aad67e13e16e4a43b1314674541db77c350a4fa4.jpg
 - preparaty/images/part6/paste-ab323979550829b55ae273bdc28d2289b63fc281.jpg
 - preparaty/images/part6/paste-ab6e184e5aa495f9e7e1afecaf8b2cecaf45ba06.jpg
 - preparaty/images/part6/paste-ab8f82a99eccf4c277255b2a9ee82df38ae72f60.jpg
 - preparaty/images/part6/paste-abc5256749ac102a50051a40d41904241238e881.jpg
 - preparaty/images/part6/paste-ac68995674413325f2c2b0b67076e14b3599fde6.jpg
 - preparaty/images/part6/paste-ac8d49c1f76980db1f54f0a3d6b89da8895b31e4.jpg
 - preparaty/images/part6/paste-adad58f48d1ebf3e57d4b560a858b13a0ee45a62.jpg
 - preparaty/images/part6/paste-adb2f1b97352a7bd62df2971f3caab843556ce44.jpg
 - preparaty/images/part6/paste-add34a602cbaf27bc361f0f8a1d4c32e63e2dbf3.jpg
 - preparaty/images/part6/paste-ae0d7b9e13afeb841bb3cd67f81773bbd0cc9755.jpg
 - preparaty/images/part6/paste-aed287fc31225a5dd99354b91dc5a5261236b6ca.jpg
 - preparaty/images/part6/paste-af5d5630abd675312bee914a6ebc33957e087895.jpg
 - preparaty/images/part6/paste-af6a1e17ecc39a439ec1ad235b2cdf20ec02a0ff.jpg
 - preparaty/images/part6/paste-afbc0d6716669afdd405d3668e1cdbb598d68eb6.jpg
 - preparaty/images/part6/paste-b02d199b3b32be77ed1c266203aeb67adb3747f1.jpg
 - preparaty/images/part6/paste-b063ea827572d6210bf6e66bb84a5341ef797098.jpg
 - preparaty/images/part6/paste-b21df474ca14c00ab47b804f88ecea698e8528d4.jpg
 - preparaty/images/part6/paste-b2649eb6c3ddf34b6b63b91fbbe0c94125474121.jpg
 - preparaty/images/part6/paste-b28073184e424e0ddc1a7b3948ca8f641a4380d8.jpg
 - preparaty/images/part6/paste-b3d307417fae3ddefe6b76fdf4ec6fa3a208d468.jpg
 - preparaty/images/part6/paste-b483b4c75a5ba5f72ca92c535386f610fe86715a.jpg
 - preparaty/images/part6/paste-b4a29e1cc926bb1180bd7f2f4f21dadb559afab4.jpg
 - preparaty/images/part6/paste-b56b9e62d1a829e09e03fc6bced6bd15e0016267.jpg
 - preparaty/images/part6/paste-b5896b2f12b7c7f4f0c201a14f434d54a6dc173b.jpg
 - preparaty/images/part6/paste-b5e08f5ca911233df8b10ac543214e84a24338f3.jpg
 - preparaty/images/part6/paste-b6d474e72b3339994cf4795227d2aa654be2f6a3.jpg
 - preparaty/images/part6/paste-b6ffe6ff356019f144cce42c1a307a9b3a8ee57e.jpg
 - preparaty/images/part6/paste-b7151beed556de7be9cf4a1296eb37dbb531c68d.jpg
 - preparaty/images/part6/paste-b74c8fb1cee9efc42f1dd5c029e9b38e1366aa85.jpg
 - preparaty/images/part6/paste-b7cda9c9f6ea9f4234253359d6a2914ab905f41c.jpg
 - preparaty/images/part6/paste-b87d0ebd001c455894737a77685ecc1fab457cce.jpg
 - preparaty/images/part6/paste-b92ff020b566083ea5e7521a571b8c78ab3d07fd.jpg
 - preparaty/images/part6/paste-b995a86d38f7c23cacc83a16a6d683e829d9041b.jpg
 - preparaty/images/part6/paste-b9b47204c02b8b9889f58a3224368a81286ec5f2.jpg
 - preparaty/images/part6/paste-ba1466131492457edb4263804dd20dfb5c365dbe.jpg
 - preparaty/images/part6/paste-ba559399ea0f78f2ebabf3cdd4935ee137a39ca0.jpg
 - preparaty/images/part6/paste-ba5a6c827e422056491de4a03664cea7ed9965a4.jpg
 - preparaty/images/part6/paste-baf20eb13e0dc6e16c5d1a96f12e7ea7367492ef.jpg
 - preparaty/images/part6/paste-bb0f8da637ed1762f795c6535647ded3a2ad1e8f.jpg
 - preparaty/images/part6/paste-bb2d79682cb59aa88c26d913c815f08f22b4ccd8.jpg
 - preparaty/images/part6/paste-bbcbd0f39782f973bb79d0e1ad358b71ed163e37.jpg
 - preparaty/images/part6/paste-be14bc0783ec3de737bfeaff02ec0ad4804fa479.jpg
 - preparaty/images/part6/paste-be3ba4cc7a074d931e61f5a38f44011797ba6809.jpg
 - preparaty/images/part6/paste-be503f7506d13bbe4914b1a82860625c91c2f9fa.jpg
 - preparaty/images/part6/paste-be5d4bf9191395b5437ee365bd6dcd57069fd6f2.jpg
 - preparaty/images/part6/paste-be67e00034c3006500a9d11a58141f66f28420ed.jpg
 - preparaty/images/part6/paste-be6c0602ab7da79a865cc9e751b5c48a5f3fc488.jpg
 - preparaty/images/part6/paste-bf267a6789b0faa7cbf809b43683eb410a469040.jpg
 - preparaty/images/part6/paste-bf42bdda888d0ff4c806f75689bcbbbb581690ef.jpg
 - preparaty/images/part6/paste-bf44e42d910adb5c9e7f677204742e4ab63d9abe.jpg
 - preparaty/images/part6/paste-bfbfcee22a715c92b3612e497f1a851d961f7c43.jpg
 - preparaty/images/part6/paste-bfe3654a626269985bf66a1894643f8744b661bd.jpg
 - preparaty/images/part6/paste-bff0d8025d3309afeeb4b5602332e8b1e20fb680.jpg
 - preparaty/images/part6/paste-c0dd025ef5928eee7d3263000de535be3b74dc2f.jpg
 - preparaty/images/part6/paste-c15fce07a48145fc985143655c1e51a369810551.jpg
 - preparaty/images/part6/paste-c1685c81e433a3cbbebad425bba387c62bda3fc7.jpg
 - preparaty/images/part6/paste-c1f35a79456d1fb7d6287480fe9febff4105e1b3.jpg
 - preparaty/images/part6/paste-c20d271499aff833bc48b23ff8e524b24365a324.jpg
 - preparaty/images/part6/paste-c22e73ad1b0ed801ef47923c1a02ce4cdf64d6f0.jpg
 - preparaty/images/part6/paste-c2404ff305713c0f912519f403e52c7a720e3cc9.jpg
 - preparaty/images/part7/paste-c26d57611276a31aa1e5d4f5dbdab0afecfb8131.jpg
 - preparaty/images/part7/paste-c28a413b8f6c4b446ea7661d7ff2db99783a5a29.jpg
 - preparaty/images/part7/paste-c2c27cc9d74b8cf8830761b4749de78cd94e6a6a.jpg
 - preparaty/images/part7/paste-c3cc7639f3ffdab84135803b10fb7e99b0f865fc.jpg
 - preparaty/images/part7/paste-c44a300a51ef7331612898af9d320c20af76b632.jpg
 - preparaty/images/part7/paste-c452f6603502126f8d4c02eecd2fed3b74369fea.jpg
 - preparaty/images/part7/paste-c498e2f11f989668d1885117ff19f28cbe20bf2a.jpg
 - preparaty/images/part7/paste-c4ebf05aace608abcd868fe40dca503ca0f4bbdf.jpg
 - preparaty/images/part7/paste-c5112c1404cb69d279c9178a31bfe1a1d2a22007.jpg
 - preparaty/images/part7/paste-c56fa2c4cdccb797c236698b1e8e3b292cc21237.jpg
 - preparaty/images/part7/paste-c61e3205afe8f516e2a1868a6e6fa99a4269849b.jpg
 - preparaty/images/part7/paste-c63f3cb795eae6d22f49657d2c0d9a0d75f23a2d.jpg
 - preparaty/images/part7/paste-c70c80c5ded4c2ea52939b914e313b3da175f861.jpg
 - preparaty/images/part7/paste-c75687c4ec0176e02a5a31b30559b1dc7d352f0c.jpg
 - preparaty/images/part7/paste-c7fc3013cfcc4ac021aa8e6ae21ece03e5e43bff.jpg
 - preparaty/images/part7/paste-c8123b0fa69979d5e0c9c82be95424f2b3086f41.jpg
 - preparaty/images/part7/paste-c8da1328ef27d8919c4543b298c5981a442f592a.jpg
 - preparaty/images/part7/paste-c911a2c9f5dc8d27389d774cc2ae12361ba01d05.jpg
 - preparaty/images/part7/paste-c972588de84ba15262ab374cb16c40618c81e7c8.jpg
 - preparaty/images/part7/paste-c9b31e32e55bd2b9f9751090f8d95ffb1e413d7d.jpg
 - preparaty/images/part7/paste-c9f7013e04d830f031b7039a8daecb3d0d837b61.jpg
 - preparaty/images/part7/paste-ca4ec2ad36ddfb99c651cb595b3ff03844ecaa15.jpg
 - preparaty/images/part7/paste-cb909661d585bf1723faf60ac6dd1e51cbf612f6.jpg
 - preparaty/images/part7/paste-cbf62727cd2eff361fbb44528db14bae8b909abf.jpg
 - preparaty/images/part7/paste-cc123e34b4bce4dc6cc31893f697a5ad1e5697c3.jpg
 - preparaty/images/part7/paste-cc19eb0e0606cc0fc48877077aeeaeef1d9c94ee.jpg
 - preparaty/images/part7/paste-cc3458281a0e00ee873f66a47af259e87bcd91b3.jpg
 - preparaty/images/part7/paste-cd311bf79c78126d61cb025f298bc86f7bd54e40.jpg
 - preparaty/images/part7/paste-cd5698b6893e1de2ce461e6274409e9ccb829daf.jpg
 - preparaty/images/part7/paste-cd8f02f4c1253780cd4f02e5e4e6383b6d140aa7.jpg
 - preparaty/images/part7/paste-cec47c574e792645a865e509311ca332f931bdaa.jpg
 - preparaty/images/part7/paste-cedbbd754a5990ad54ff2866c0e9cadd23ebc9f3.jpg
 - preparaty/images/part7/paste-cee2191cbd98ca30c1ba0df246b378f10c088f5d.jpg
 - preparaty/images/part7/paste-cf0f9101c7ea54431bf9b878cba5d037e7763a3c.jpg
 - preparaty/images/part7/paste-d0b690af2a1b255287ff341611eea6d94ca126f7.jpg
 - preparaty/images/part7/paste-d0cf3fd01fd998df17b9afbe6a403bd8a26a04e2.jpg
 - preparaty/images/part7/paste-d18a96794948e9b81afd170077d4f01765098f8a.jpg
 - preparaty/images/part7/paste-d24f2bea32b1fde2c3609cebceb76a61c3e56964.jpg
 - preparaty/images/part7/paste-d2678f1b51805801305dfce38ab20785b13da779.jpg
 - preparaty/images/part7/paste-d28e8cd2641214ac6097f4a10bd05b6375d9beea.jpg
 - preparaty/images/part7/paste-d2a28747ade7d2aed1256458a184b16fbf305ee1.jpg
 - preparaty/images/part7/paste-d3131d9db1926fac2a5f72dab34756b13356c784.jpg
 - preparaty/images/part7/paste-d3c14fc725ab1e3672aa2643f355af3d131df5c5.jpg
 - preparaty/images/part7/paste-d44d5197a8055c6f41214bf8cebeacffdc6d6717.jpg
 - preparaty/images/part7/paste-d47c7e9863b27befb8e17ca9e26e92cba1ac1dad.jpg
 - preparaty/images/part7/paste-d4baabf22a74e9cc064f988a3a3d1f0bc9549a9a.jpg
 - preparaty/images/part7/paste-d530e59ce04c150fed4c2d72789aeaa3b8414af6.jpg
 - preparaty/images/part7/paste-d54c08d909d930437588285c26a4e9d3bcd0f501.jpg
 - preparaty/images/part7/paste-d5c9294ba5e5a5858e8c2348ca37609b3757bf0d.jpg
 - preparaty/images/part7/paste-d63c9cf97ff23af5faf50bec1c4e7c8c2be6796c.jpg
 - preparaty/images/part7/paste-d6dd1806b4591edc22415913675e782c8212c7d3.jpg
 - preparaty/images/part7/paste-d72d0774225dd9fc25e2679b7df853d6f143f2e6.jpg
 - preparaty/images/part7/paste-d73d6a601288b9c6103136f5deba4d1bd51db174.jpg
 - preparaty/images/part7/paste-d790e019358cbff6917fb1f5dcf3e4c79b5c5155.jpg
 - preparaty/images/part7/paste-d7b35242fe44c72ba39af9199d85bf2022322ade.jpg
 - preparaty/images/part7/paste-d8233c4a745f615f9d5cc59e68b2c857cec564a4.jpg
 - preparaty/images/part7/paste-d833a0e337a63d49a46dae6c8ef2a7067f7e61e8.jpg
 - preparaty/images/part7/paste-d8e13fd06a070a06cb2edb5c3608255255b441f1.jpg
 - preparaty/images/part7/paste-d8ea48c3f55eabf7771f19156533cf6539ea793b.jpg
 - preparaty/images/part7/paste-d8f7845dddb652f58198a0da16fd9b0f086869bc.jpg
 - preparaty/images/part7/paste-d92e9d1b66cc94fe63c08c6eb4ba33384d1ef2c4.jpg
 - preparaty/images/part7/paste-d95077182e0f309599014f506026eada3a5a8b9b.jpg
 - preparaty/images/part7/paste-d95bef56dad73c372ce156dff617373c711294ed.jpg
 - preparaty/images/part7/paste-d9846ed68db3c96aabd9ac73e169dc9ca2b4c12c.jpg
 - preparaty/images/part7/paste-d99930d4553e629a520945af117ac97d79a417b6.jpg
 - preparaty/images/part7/paste-d9c8c4ff86aec030d2848e5d55d38edd204c67f6.jpg
 - preparaty/images/part7/paste-da84218b6a2cac48549848132ac1fc3cd52cae2d.jpg
 - preparaty/images/part7/paste-da9ff2f0afb571ed124ffd1daa4b68a6f755981c.jpg
 - preparaty/images/part7/paste-daeda5c80fb775c80d25ca99236f83fddd1f759e.jpg
 - preparaty/images/part7/paste-db1153e76dd396e1935a25283119687e676735ae.jpg
 - preparaty/images/part7/paste-dbb2b1cc0c0de25a787f962ffadbbdd592fef00d.jpg
 - preparaty/images/part7/paste-dc9b4219975379055ed2a8112d875aa99130b2de.jpg
 - preparaty/images/part7/paste-dd1dace5936b7962822bff91fc960f026281906b.jpg
 - preparaty/images/part7/paste-dde41f418bf7b5e78fb869b29170a2ef32e9dd05.jpg
 - preparaty/images/part7/paste-de0af8f9ec4c7877459f4cd5467e5b95341337d0.jpg
 - preparaty/images/part7/paste-de3db334ce977f55e591052ca12ae8ea6ac8b19e.jpg
 - preparaty/images/part7/paste-df37aff8a52f2f22e0e05196bf02f7797f41b7f7.jpg
 - preparaty/images/part7/paste-e0c2df617eae15d79555e83eba8948b57f0d12e9.jpg
 - preparaty/images/part7/paste-e0c5a0ea063aa316bf37fac45a234ebf1212c696.jpg
 - preparaty/images/part7/paste-e127367b285b0ea61b9dc3104399545f14b16456.jpg
 - preparaty/images/part7/paste-e16ab5d654687b3263019ece4b6dfa70a536642b.jpg
 - preparaty/images/part7/paste-e204a715aa661eb563d2fde8f17aceb9c262c236.jpg
 - preparaty/images/part7/paste-e24a8ff1e7ddeb234f62bf1c77a04f9360077e39.jpg
 - preparaty/images/part7/paste-e3e23265b1dcd37092610442f6c7e9217771b8f4.jpg
 - preparaty/images/part7/paste-e3e8c828f6fca501b2ecabc839c4339fe4b7eb06.jpg
 - preparaty/images/part7/paste-e44172ff2161404b35c7f622a20ee9ff360817f0.jpg
 - preparaty/images/part7/paste-e4c0a747f24d1e631cafa7b8b9c6a3fb443411ec.jpg
 - preparaty/images/part7/paste-e58477349d6b8f6117caf492ad53a48e99789aa0.jpg
 - preparaty/images/part7/paste-e5c3ae7983d058e57256def00726dcdd900de7aa.jpg
 - preparaty/images/part7/paste-e667bc63730f753e7e9762cb1afa4976b6c28efe.jpg
 - preparaty/images/part8/paste-e67a93db5b06a8215a44f5d5679ea1fbe93b149e.jpg
 - preparaty/images/part8/paste-e7599da26251beacf3214e44ca5122e09cdcb0cb.jpg
 - preparaty/images/part8/paste-e82bd3092841e4bc46716965160942d3dfde3f55.jpg
 - preparaty/images/part8/paste-e91289f6f6fe6b3b039b2262701d71ac1c91b32d.jpg
 - preparaty/images/part8/paste-e93f39da122b5cc06b3bad0f9ebf2c959147eab9.jpg
 - preparaty/images/part8/paste-e992fd255759bf365e294536e3b914737744ccab.jpg
 - preparaty/images/part8/paste-e99a3964abfa1425fa5b4cd0c1f38133261a9610.jpg
 - preparaty/images/part8/paste-ea2ff4e50de9ba8b3bb98a7fb70973eaac98422f.jpg
 - preparaty/images/part8/paste-ea5d7ae01caceee7f7e335961194568d8cc86c42.jpg
 - preparaty/images/part8/paste-ea5eb7f69216ced333d212d87c13b09b77429dd7.jpg
 - preparaty/images/part8/paste-ebb59e98e50b6455f66c1cc20a3234006ac923fa.jpg
 - preparaty/images/part8/paste-ebf4820bb358e8b7cb4d2b2720240ea175517381.jpg
 - preparaty/images/part8/paste-ec03a102bc593c58c28ce59fa41be9b779dc567e.jpg
 - preparaty/images/part8/paste-ec3bbcbfcb3b41b281078752609df75a1334b502.jpg
 - preparaty/images/part8/paste-ecbc192b89f8780f91a0059fbfd6ccdf76a9fc6e.jpg
 - preparaty/images/part8/paste-ecfaafece1c2b120455a8476da770dc49217ef73.jpg
 - preparaty/images/part8/paste-ed34f0fbf7abcb40ac65af320ec585b6305555a3.jpg
 - preparaty/images/part8/paste-ed914de2da6b1575a633c44adaa846c0b27f1e05.jpg
 - preparaty/images/part8/paste-edb98e33febdea0370dff7c232f2d8acf7e606a6.jpg
 - preparaty/images/part8/paste-eeaa05c59388440305e38d42bed6e65cafc8ec58.jpg
 - preparaty/images/part8/paste-efafce150ffc43874dad52a1cfa9c202acb350e9.jpg
 - preparaty/images/part8/paste-efbcfa580809601038602afac222a9cdb2deca5d.jpg
 - preparaty/images/part8/paste-f060bec14800d5bca5fff1d0a4277dbb9b91e14e.jpg
 - preparaty/images/part8/paste-f08a01c92651bacfa6931fee83ec2ab3d63f793c.jpg
 - preparaty/images/part8/paste-f0976ae9bebb15b1fca5b67381b8fe37745e8779.jpg
 - preparaty/images/part8/paste-f0e8b34b2262f7ee3106cfd8b98b9360cbea509b.jpg
 - preparaty/images/part8/paste-f1d308b33f4996b955db09297e5c32bd692bef53.jpg
 - preparaty/images/part8/paste-f23651d232a68ff35ed8f58975d8f0e044d06498.jpg
 - preparaty/images/part8/paste-f32fc2bbd9c6e69ce84d36970a2a4a398039d053.jpg
 - preparaty/images/part8/paste-f3417c6c52fb886f4a34c67d76740bb40c80dcb1.jpg
 - preparaty/images/part8/paste-f36978900c4c0014e3142bba6196bda2ba7dd7e2.jpg
 - preparaty/images/part8/paste-f3a6f71ea4af69d4ee151816e67d0f1ee7c8cfc2.jpg
 - preparaty/images/part8/paste-f3c3c764e1f9a237742f6aed32dcfe9e1156d515.jpg
 - preparaty/images/part8/paste-f44896d43a3985c1f71e1f9b01b231fea1a79e18.jpg
 - preparaty/images/part8/paste-f45e50039821a5e771559d29fba078d85722dc0d.jpg
 - preparaty/images/part8/paste-f464febb81dd04942ece00374c2f9aa8c1d393fb.jpg
 - preparaty/images/part8/paste-f4f1d5175085394a27904969ad3ec44394b5a951.jpg
 - preparaty/images/part8/paste-f51f686bee8137492dd75edf457ce1605f178324.jpg
 - preparaty/images/part8/paste-f5487fba150d9e24447d530e57d35d031a248eea.jpg
 - preparaty/images/part8/paste-f68ea52889933cdefaad0cce54257ca235d33f6a.jpg
 - preparaty/images/part8/paste-f6b5170c43771ddf61022af155dcf217d1231c86.jpg
 - preparaty/images/part8/paste-f6ff9775c97b43c6f789df5229475a695febcebd.jpg
 - preparaty/images/part8/paste-f78aaa1d7b5b948d53863b898f9b58a79be055be.jpg
 - preparaty/images/part8/paste-f7d7bac6184826d958cbd80fe1f2317e37981e6d.jpg
 - preparaty/images/part8/paste-f807598374a84c0e53f39d635812a7609c761ed9.jpg
 - preparaty/images/part8/paste-f88076a882487135867b874902469ebd8e130964.jpg
 - preparaty/images/part8/paste-f8d3e600c210283ce12542f842012b5a9400162c.jpg
 - preparaty/images/part8/paste-f8e842c090f65f03e0d7382b68f93e11be2159e4.jpg
 - preparaty/images/part8/paste-f8e9522615c0fac0ee249372784c105ee8dee65f.jpg
 - preparaty/images/part8/paste-f9445a400b5739988a0944f6674a1f0b5d9bee6e.jpg
 - preparaty/images/part8/paste-f97b31322cebb158985b23096b255eee2a4c2905.jpg
 - preparaty/images/part8/paste-f98a9847f81b4ec7887e64a7454b2449da766bf9.jpg
 - preparaty/images/part8/paste-fa055bedd6966b5be69a9a1fd5aaee766b9b1d3c.jpg
 - preparaty/images/part8/paste-fab54ae393ff9a349b6600afacf1484708e516ca.jpg
 - preparaty/images/part8/paste-fb2d636a3c729567cd52f335e625d915bfa0a508.jpg
 - preparaty/images/part8/paste-fc3044d8c1d3a3a0fbab4eb2c07ab1dc0a2b7912.jpg
 - preparaty/images/part8/paste-fc62461716e36cde9edb9ef791c2354fca57ff26.jpg
 - preparaty/images/part8/paste-fcdb1dfe8640446c3432f396486f46c40e055cf5.jpg
 - preparaty/images/part8/paste-fd5f939c53f82a4e0ead84302ee5a0962cb63892.jpg
 - preparaty/images/part8/paste-fd814748ba8be3f6e75b8a10b8e5440bbe2dc29e.jpg
 - preparaty/images/part8/paste-fd8e2404132e67b8c24817a1b88b40344f3a94ef.jpg
 - preparaty/images/part8/paste-fe9a424b30e9b0be70a2bce361d110486eae822f.jpg
 - preparaty/images/part8/paste-ff0007c5a7c7c2dc3d1c93b2e53ecd8fce5db10d.jpg
 - preparaty/images/part8/paste-ff04f0175f898c7a0a2adc1431a879e89006f826.jpg
 - preparaty/images/part8/paste-ff18fafa94273aa7d024e88f387b0e8c1da00a6c.jpg
 - preparaty/images/part8/paste-ff98e1646a15408061cee01ea7f8ec25e1a566fc.jpg
 - preparaty/images/part8/paste-ffacf3b8fc9000c7d37d974b4ee308bf4efcbacc.jpg
 - preparaty/images/scratch_inspect.py
 - preparaty_data.js
 - style.css
 - survival_kit_patologie_n_dor_pro_vyho_el_mediky.html


```

```python
# Let's inspect data JS files to see what modules/topics are covered.
import zipfile, re

z = zipfile.ZipFile('./kintrovaviolka-dev/patolka')
prefix = z.namelist()[0]

js_files = [
    'app.js', 'data_onco_1.js', 'data_onco_2.js', 'data_patologie_1.js', 
    'data_patologie_2.js', 'data_patologie_3.js', 'data_special_1.js', 
    'data_special_2.js', 'preparaty_data.js'
]

for jsf in js_files:
    fname = prefix + jsf
    if fname in z.namelist():
        content = z.read(fname).decode('utf-8', errors='ignore')
        print(f"=== {jsf} (size: {len(content)} chars) ===")
        # Find variable or dataset declarations
        matches = re.findall(r'(const|var|let)\s+([A-Za-z0-9_]+)\s*=', content[:1000])
        print("  Vars:", matches)


```

```text
=== app.js (size: 88376 chars) ===
  Vars: [('let', 'escaped'), ('const', 'EPONYMS_DB')]
=== data_onco_1.js (size: 148634 chars) ===
  Vars: [('const', 'DATA_ONCO_1')]
=== data_onco_2.js (size: 165207 chars) ===
  Vars: [('const', 'DATA_ONCO_2')]
=== data_patologie_1.js (size: 68009 chars) ===
  Vars: [('const', 'DATA_PATOLOGIE_1')]
=== data_patologie_2.js (size: 67549 chars) ===
  Vars: [('const', 'DATA_PATOLOGIE_2')]
=== data_patologie_3.js (size: 66991 chars) ===
  Vars: [('const', 'DATA_PATOLOGIE_3')]
=== data_special_1.js (size: 86838 chars) ===
  Vars: [('const', 'DATA_SPECIAL_1')]
=== data_special_2.js (size: 91748 chars) ===
  Vars: [('const', 'DATA_SPECIAL_2')]
=== preparaty_data.js (size: 78431 chars) ===
  Vars: [('const', 'PREPARATY_DATA')]


```

```python
# Let's inspect facts.md and index.html to get project title, structure, overview
facts_content = z.read(prefix + 'facts.md').decode('utf-8', errors='ignore')
index_content = z.read(prefix + 'index.html').decode('utf-8', errors='ignore')

print("Facts excerpt:\n", facts_content[:1000])
print("\nIndex excerpt:\n", index_content[:1000])


```

```text
Facts excerpt:
 PŘÍČINY VZNIKU NÁDORŮ

-  Příčiny můžeme rozdělit na fyzikální, chemické, biologické nebo genetické

Fyzikální příčiny

-

Ionizující záření = alfa, beta, gama, neutronové → působí přímo na DNA nebo
nepřímo ionizací buněk a tvorbou kyslíkových radikálů → každá dávka sebou nese
riziko vzniku maligní transformace, na základě čehož rozlišujeme deterministické
účinky (daná dávka způsobuje problémy), stochastické účinky (není uvedena
konkrétní dávka, ale každé vystavení představuje riziko)

-  UV záření = působí pouze na krátké vzdálenosti a jeho účinek je omezen pouze na

epidermis, proti němu nás chrání melaninová vrstva (proto lidí se světlejší pokožkou
jsou náchylnější na vznik kožních nádorů), nadměrná expozice slunečnímu záření
vede k přehlcení oprav DNA a následnému vzniku pyrimidinových dimerů, které se
podílí na maligní transformaci → dlaždicobuněčný karcinom, bazocelulární karcinom,
melanom

-  Expozice azbestu = pleurální mezoteliom, adenokarcinom plic

Chemické příčiny

-  Chemi

Index excerpt:
 <!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patologie - Portál Efektivního Učení</title>
  <meta name="description" content="Interaktivní studijní portál patologie pro studenty všeobecného lékařství. Obsahuje procvičování s kartičkami, Leitnerovým opakováním, přiřazovačky a testy.">
  <link rel="stylesheet" href="../style.css">
  <link rel="stylesheet" href="style.css">
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body class="dark-theme">
  <div class="app-container">
    
    <!-- Hlavička aplikace -->
    <header>
      <div class="brand">
        <div class="brand-icon">
          <svg width="


```

# Patologie – Portál Efektivního Učení

Interaktivní webový studijní portál z patologie a onkologie určený pro studenty všeobecného lékařství a příbuzných zdravotnických oborů. Aplikace poskytuje ucelené prostředí pro efektivní přípravu ke zkoušce z patologie pomocí kartiček, algoritmu spaced repetition (Leitnerův systém), interaktivních testů, přiřazovacích cvičení a databáze histologických preparátů.

---

## 📋 Přehled a hlavní funkce

* **Kartičky & Leitnerův systém (Spaced Repetition):**
* Rozdělení otázek do 5 krabiček (Box 1–5) podle míry zapamatování.
* Automatické plánování opakování a ukládání pokroku v prohlížeči (`localStorage`).
* Podrobné strukturované karty s informacemi o definici, etiopatogenezi, makroskopii, mikroskopii a klinickém obrazu.


* **Interaktivní testování a kvízy:**
* Výběr otázek podle tematických okruhů (Obecná patologie, Speciální patologie, Onkologie).
* Testovací režim s okamžitou zpětnou vazbou a vyhodnocením úspěšnosti.


* **Histologický atlas preparátů:**
* Databáze histopatologických preparátů vč. mikroskopických snímků a popisu klíčových znaků.


* **Eponymní slovník:**
* Rychlé vyhledávání a výklad významných patologických a lékařských eponymů (např. *Auerovy tyčinky*, *Gumprechtovy stíny*, *Burkittův lymfom*, *Barrettův jícen*, *Zollinger-Ellisonův syndrom*).


* **Survival Kit & Přehled faktů (`facts.md`):**
* Syntetické výpisy klíčových konceptů onkogeneze, fyzikálních, chemických a biologických karcinogenů pro rychlé opakování před zkouškou.



---

## 📁 Štruktura projektu

```text
.
├── index.html                  # Hlavní vstupní bod aplikace
├── style.css                   # Styly rozhraní (tmavý motiv, responzivní design)
├── app.js                      # Aplikační logika (příprava karet, Leitnerův systém, testy, XSS sanitizace)
├── facts.md                    # Souhrnný přehled patologických faktů a karcinogenů
├── survival_kit_patologie_...  # Interaktivní "Survival Kit" pro rychlé opakování
│
├── data_patologie_1.js        # Databáze otázek: Obecná patologie I
├── data_patologie_2.js        # Databáze otázek: Obecná patologie II
├── data_patologie_3.js        # Databáze otázek: Obecná patologie III
├── data_special_1.js          # Databáze otázek: Speciální patologie I
├── data_special_2.js          # Databáze otázek: Speciální patologie II
├── data_onco_1.js             # Databáze otázek: Onkologie I
├── data_onco_2.js             # Databáze otázek: Onkologie II
├── preparaty_data.js          # Metadata a popisy histologických preparátů
│
└── preparaty/                  # Obrazové podklady histologických preparátů
    └── images/                 # Snímky rozdělené do složek (part1 až part8)

```

---

## 🚀 Spuštění aplikace

Portál je navržen jako čistá statická webová aplikace (Vanilla JavaScript / HTML5 / CSS3) bez nutnosti instalace jakýchkoliv závislostí či balíčkovacích nástrojů (npm/Node.js).

### Místní spuštění

1. Klonujte nebo stáhněte repozitář:
```bash
git clone <URL_REPOZITÁŘE>
cd patolka

```


2. Otevřete soubor `index.html` v libovolném moderním webovém prohlížeči (Chrome, Firefox, Safari, Edge).
*Alternativně můžete použít jednoduchý lokální HTTP server (např. v Pythonu):*
```bash
python3 -m http.server 8000

```


Následně otevřete v prohlížeči adresu `http://localhost:8000`.

---

## 🛠️ Použité technologie

* **HTML5 & CSS3:** Responzivní design, CSS proměnné, CSS Grid/Flexbox, tmavé téma (Dark Theme).
* **Vanilla JavaScript (ES6+):** Správa stavu, Leitnerův algoritmus, dynamické vykreslování DOMu.
* **LocalStorage API:** Perzistentní ukládání pokroku studenta v rámci prohlížeče.
* **Tailwind CSS:** Použito v integrovaném studijním modulu Survival Kit.

---

## 🔒 Bezpečnost a kvalita kódu

* **Ochrana proti XSS:** Dynamicky vkládané řetězce jsou ošetřeny pomocí bezpečné sanitizační funkce `escapeHTML()` a `textContent` pro prevenci DOM-based XSS útoků.
* **Terminologická přesnost:** Pravidelná revize a korekce lékařské nomenklatury a eponymů napříč všemi datovými soubory a Markdown dokumenty (`facts.md`).
