## 2024-05-18 - Terminological inaccuracies
**Learning:** Found some amusing terminological inaccuracies like using 'stolička' (little chair/molar tooth) instead of 'stolice' (feces), and 'solárně' (solar) instead of 'solitárně' (solitary) in a medical context within `data_onco_2.js`.
**Action:** Be mindful of Czech medical terminology and homonyms when auditing content.
## 2024-05-18 - Playwright frontend verification artifact cleanup
**Learning:** Installing playwright during frontend verification dynamically creates `package.json` and `package-lock.json` in a project that strictly doesn't use a package manager. These artifacts were blocked during code review.
**Action:** When performing Playwright UI verification in this codebase, always clean up the testing artifacts (`package.json`, `package-lock.json`, test scripts, logs) before requesting code review and submitting the patch.
## 2024-05-18 - Typo in pheochromocytoma symptoms (data_onco_2.js)
**Learning:** Found a typo "pocetím" (conception) which should be "pocením" (sweating) in the description of pheochromocytoma symptoms in `data_onco_2.js` and `facts.md`. This is a domain-specific typo that changes the meaning of the medical text significantly.
**Action:** Be mindful of Czech medical terminology and homonyms, specifically those that might arise from single-letter typos that change the context completely.
