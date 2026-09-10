🎯 **What:**
Fixed a DOM-based Cross-Site Scripting (XSS) vulnerability in `app.js` at line 2338 where the quiz option `opt` variable was being rendered directly into the DOM using `innerHTML` without proper sanitization.

⚠️ **Risk:**
If left unfixed, an attacker could potentially inject malicious JavaScript payloads through the question properties (`opt`). When these properties are rendered via `innerHTML`, the payloads would execute in the context of the user's browser, potentially leading to unauthorized actions, session hijacking, or data exfiltration.

🛡️ **Solution:**
Sanitized the `opt` variable by wrapping it in the pre-existing `escapeHTML` helper function prior to string interpolation and injection via `innerHTML`. This ensures that HTML characters (like `<`, `>`, `&`, `"`, `'`) are converted to safe HTML entities, mitigating the XSS vector without affecting legitimate content display.
