# 🔒 Security Vulnerability Fix: DOM-based XSS via unsanitized question properties

## 🎯 What
Fixed a DOM-based Cross-Site Scripting (XSS) vulnerability in `app.js` where unsanitized question properties were directly rendered into the DOM using `innerHTML`.

## ⚠️ Risk
If left unfixed, an attacker could potentially inject malicious JavaScript payloads through the question properties (`id`, `title`, `section`, `box`). When these properties are rendered via `innerHTML`, the payloads would execute in the context of the user's browser. This could lead to account takeover, data exfiltration, or other severe security breaches depending on the application's context.

## 🛡️ Solution
Introduced an `escapeHTML` helper function at the top of `app.js` to securely encode HTML entities (`&`, `<`, `>`, `"`, `'`). All dynamically inserted variables in the card template (`q.id`, `qProgress.box`, `q.title`, `q.section`) are now wrapped with this function to ensure safe rendering within `innerHTML`.
