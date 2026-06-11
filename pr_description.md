# 🔒 Fix DOM-based XSS vulnerability in study card details

## 🎯 What
This PR replaces unsafe `innerHTML` assignments with secure `textContent` assignments when rendering study card details (definition, etiology, pathogenesis, macroscopy, microscopy, and clinical info) in `app.js` (lines 265-272).

## ⚠️ Risk
Previously, properties from the study question's `content` object were directly injected into the DOM using `innerHTML` without sanitization. This created a DOM-based Cross-Site Scripting (XSS) vulnerability. If any user-controlled input, external contribution, or compromised data file managed to inject arbitrary HTML or JavaScript (e.g., `<script>` tags or `onload` handlers) into the database, it would execute automatically when the user viewed the question detail. This could lead to session hijacking, unauthorized actions on behalf of the user, or defacement.

## 🛡️ Solution
Replaced `innerHTML` with `textContent` for the 6 vulnerable element assignments (`studyDefinition`, `studyEtiology`, `studyPathogenesis`, `studyMacroscopy`, `studyMicroscopy`, `studyClinical`). `textContent` ensures that any HTML tags in the source data are safely encoded and rendered as plain text rather than evaluated as executable code by the browser, completely mitigating the XSS vector while preserving the intended display of the plain text data.
