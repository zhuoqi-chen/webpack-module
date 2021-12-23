// ESM => ESM
import defaultA, { functionA, nameA } from "./a.mjs";
// CJS => ESM
const defaultB = require("./b.mjs");
const { functionB, nameB } = require("./b.mjs");
// ESM =>  CJS
import defaultC, { functionC, nameC } from "./c.cjs";
// CJS => CJS
const defaultD = require("./d.cjs");
const { functionD, nameD } = require("./d.cjs");

console.log(nameA, defaultA);
console.log(nameB, defaultB);
console.log(nameC, defaultC);
console.log(nameD, defaultD);
functionA("A");
functionB("B");
functionC("C");
functionD("C");
