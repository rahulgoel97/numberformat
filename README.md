# Number format
Google sheets script to format numbers into a readable format, with suffixes of 'K', 'M' and 'B'.

---

## Table of Contents 


- [Installation](#installation)
- [Examples](#examples)
- [License](#license)

---
## Installation

1. On your Google sheet, go to Tools -> Script Editor

2. On the page, copy and paste the contents of FORMATNUMBER.js 

3. Name the script 'Format Number' (or whatever you desire...)

4. Click on File -> Save

5. Your script should be ready. Try and type '=NUMBERFORMAT(5000)' to test the installation

---
## Examples

Number: 28349586 in Cell A1

**By default, the function will determine if 'K', 'M' or 'B' is the correct suffix and round to zero decimals**
```
Formula: =FORMATNUMBER(A1, 0)

Result: 28M
```

**The number of decimals can be selected using the second token**
```
Formula: =FORMATNUMBER(A1, 2)

Result: 28.35M
```

**Finally, the default suffix can be overriden**
```
Formula: =FORMATNUMBER(G17,0,"K")

Result: 28,350K
```
---
## License

Use away, as your heart desires
