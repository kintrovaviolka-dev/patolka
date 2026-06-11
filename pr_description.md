# 🔒 Security Vulnerability Fix: DOM-based XSS

🎯 **What:**
Fixed a DOM-based Cross-Site Scripting (XSS) vulnerability in `app.js` caused by directly inserting unsanitized quiz questions, explanations, and options into the DOM via `innerHTML`.

⚠️ **Risk:**
If an attacker manages to inject malicious HTML/JavaScript into the quiz question, option, or explanation strings, those scripts would be evaluated when rendered via `innerHTML`. This could lead to a compromised user session, unintended actions taken on the user's behalf, or exposure of sensitive data in local storage.

🛡️ **Solution:**
Introduced an `escapeHTML` helper function at the top of `app.js` to properly sanitize inputs by escaping special HTML characters (`&`, `<`, `>`, `'`, `"`). Applied `escapeHTML` to dynamic content interpolation expressions (`q.question`, `q.explanation`, and `opt`) inside the `renderQuiz()` function before updating the DOM with `innerHTML`.
