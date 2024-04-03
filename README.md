# YScript Object Notation (deprecated)
YSON implementation for JavaScript (Browser)

## 🔥 DEPRECATED 🔥
⚠ Use [@j0code/yson](https://github.com/j0code/yson) instead

YSON is similar to JSON.
Main benefits:
- smaller filesize
- no "" around keys
- Types

For the node.js version, see [node-yson](https://github.com/j0code/node-yson)

## Usage

### Module (ECMAScript 2015)
> -- TODO --
```js
import YSON from "https://j0code.github.io/browserjs-yson/main.mjs"

// same as JSON
let s = YSON.stringify(someObject) // does not support reviver
let o = YSON.parse(s) // currently does not support replacer and space

// additional
let f = await YSON.load("https://url.com/data.yson") // fetch file from URL and YSON.parse() it
let t = YSON.parse(s, [YourClass1, YourClass2]) // allows parsing your own classes back (see Types)
```

## Specification
See https://github.com/j0code/node-yson/edit/main/README.md#specification
