## 2024-05-18 - Terminological inaccuracies
**Learning:** Found some amusing terminological inaccuracies like using 'stolička' (little chair/molar tooth) instead of 'stolice' (feces), and 'solárně' (solar) instead of 'solitárně' (solitary) in a medical context within `data_onco_2.js`.
**Action:** Be mindful of Czech medical terminology and homonyms when auditing content.
## 2024-05-18 - Playwright frontend verification artifact cleanup
**Learning:** Installing playwright during frontend verification dynamically creates `package.json` and `package-lock.json` in a project that strictly doesn't use a package manager. These artifacts were blocked during code review.
**Action:** When performing Playwright UI verification in this codebase, always clean up the testing artifacts (`package.json`, `package-lock.json`, test scripts, logs) before requesting code review and submitting the patch.

## 2024-07-11 - Domain-specific terminology rules
**Learning:** Medical eponyms and terms (like Virchow, Zollinger-Ellison, Sézary, fungoides, Pancoast) are stored not just in JS objects (`data_onco_*.js`), but mirrored directly in reference documents like `facts.md`. Updating just the data file leaves the documentation inconsistent.
**Action:** Always search globally across both JS data files and markdown files when correcting medical terminology to ensure complete accuracy.

## 2026-08-03 - Medical terminology typos (supresor vs suspensor)
**Learning:** Discovered typos where 'tumor-suspensorový' was incorrectly used instead of 'tumor-supresorový', along with 'opocením' instead of 'pocením'. These represent domain-specific terminology errors.
**Action:** When updating data, always verify domain-specific terminology like tumor suppressor genes to prevent factually incorrect information from being displayed.
