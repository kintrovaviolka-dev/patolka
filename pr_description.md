💡 **What:**
Optimized `findMatchingQuestion` inside `app.js` by pre-computing normalized title and keyword strings.

🎯 **Why:**
The `findMatchingQuestion` function previously performed repeated and expensive `normalizeString()` calls on every item in the `QUESTIONS` array for each lookup iteration. Because this array can grow very large and lookup happens multiple times during parsing/filtering, calculating `.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")` continuously in real time degrades performance.
By generating `_normTitle` and `_normKeywords` immediately after `QUESTIONS` are defined and loaded, we reduce the cost of lookup significantly.

📊 **Measured Improvement:**
Measured via a dummy script executing 100 iterations of 100 preparaty titles matched against 1000 dummy questions.
- Baseline (Original code): 14.691 seconds
- Optimized (Pre-computed strings): 1.818 seconds
- Speedup: ~8x faster runtime for this specific hotspot.
