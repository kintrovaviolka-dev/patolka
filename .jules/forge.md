## 2024-05-18 - Terminological inaccuracies
**Learning:** Found some amusing terminological inaccuracies like using 'stolička' (little chair/molar tooth) instead of 'stolice' (feces), and 'solárně' (solar) instead of 'solitárně' (solitary) in a medical context within `data_onco_2.js`.
**Action:** Be mindful of Czech medical terminology and homonyms when auditing content.

## 2024-05-30 - Eponym Typo Correction
**Learning:** Medical eponyms across the Czech pathology data files often contain historical typos (e.g., "Duchter" instead of "Dutcher", "Kasabach-Meritové" instead of "Kasabach-Merrittové"). It is critical to use standard `sed -i` replacements for quick text fixes to preserve string cleanliness across all source files and facts/documentation without risking schema damage.
**Action:** Always search (`grep`) for suspected naming errors across both code and text/markdown files and carefully apply replacements with case sensitivity taken into account.
