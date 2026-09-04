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

## 2026-08-13 - English conjunctions in Czech text
**Learning:** English conjunctions ('and') were mistakenly used instead of Czech ('a') in the Czech medical data.
**Action:** Replaced 'and' with the Czech 'a' in `data_onco_1.js`, `data_onco_2.js`, and `data_patologie_2.js`, ensuring valid English acronyms (like Lymphocytic and Histiocytic) were preserved.
## 2024-05-18 - Untranslated English terminology
**Learning:** Found untranslated English medical terms in the Czech content (e.g. "salt-and-pepper chromatin", "point of no return"). Sometimes they are left in brackets as duplicates.
**Action:** When updating content, be mindful of redundant English terminology in brackets and remove or translate them to Czech to maintain content consistency.

## 2024-07-25 - Domain-specific terminology typos (intersticiální vs intestinální)
**Learning:** Discovered a typo where VIP (vazoaktivní intestinální peptid) was incorrectly spelled as "vazoaktivní intersticiální peptid". This is a domain-specific error in medical acronyms where similar-sounding words are confused.
**Action:** Always verify the meaning and spelling of medical acronyms to ensure exact domain correctness, especially where "interstitial" and "intestinal" can be easily interchanged.
## 2024-05-18 - Spelling errors in medical pathogenesis
**Learning:** Found typographical errors "sitmulace" instead of "stimulace" and "simulují" instead of "stimulují" (in the context of stimulating the mammary gland) in `data_onco_2.js` and `facts.md`.
**Action:** When updating data, always verify domain-specific pathogenesis descriptions for correct terminology to ensure factual accuracy and avoid simple spelling mistakes.

## 2026-08-30 - Anglicism Audit: Do not translate mnemonics
**Learning:** During an anglicism audit, I noticed that English conjunctions like "is" and "and" were accidentally mixed into Czech text. However, valid English mnemonics or abbreviations (e.g., L&H for Lymphocytic and Histiocytic) were also present.
**Action:** Do not translate valid English mnemonics or acronyms, as this destroys the educational integrity. Only correct stray English words in regular text.
## 2026-09-04 - Typographical error viskózní vs vizkózní
**Learning:** In Czech medical content, ensure 'viscous' and related terms are spelled with an 's' (e.g., 'viskózní', 'hyperviskózní', derived from Latin viscosus) rather than the common typo 'vizkózní' (with a 'z').
**Action:** When auditing or adding content, always double check the spelling of viskózní/hyperviskózní to ensure they are spelled with 's'.
