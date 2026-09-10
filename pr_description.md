🎯 **What:**
Fixed a DOM-based Cross-Site Scripting (XSS) vulnerability in `survival_kit_patologie_n_dor_pro_vyho_el_mediky.html` where dynamic search content and database bullets were directly assigned to `innerHTML` unescaped.

⚠️ **Risk:**
If a user were to load maliciously crafted search parameters or database entries containing unescaped HTML/JavaScript tags (e.g. `<img src=x onerror=alert(1)>`), it would execute arbitrary code within the context of the user's browser, potentially leading to unauthorized actions or data exfiltration.

🛡️ **Solution:**
Introduced `escapeHTML` and `formatBullet` helper functions. `formatBullet` first securely escapes all HTML characters (`&, <, >, ", '`) within the input string to neutralize malicious scripts, and subsequently restores only strictly allowed benign formatting tags (e.g. `<strong>`, `<b>`, `<em>`) using tight regex constraints. This mitigates the XSS vulnerability while preserving the intended rich-text formatting of the educational content.
