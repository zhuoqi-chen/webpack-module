// ESM => ESM
import defaultA, { functionA, nameA } from "./a";
// CJS => ESM
const defaultB = require("./b.js");
const { functionB, nameB } = require("./b.js");
// ESM =>  CJS
import defaultC, { functionC, nameC } from "./c";
// CJS => CJS
const defaultD = require("./d.js");
const { functionD, nameD } = require("./d.js");

console.log(nameA, defaultA);
console.log(nameB, defaultB);
console.log(nameC, defaultC);
console.log(nameD, defaultD);
functionA("A");
functionB("B");
functionC("C");
functionD("C");
