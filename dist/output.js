/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nameA": () => (/* binding */ nameA),
/* harmony export */   "functionA": () => (/* binding */ functionA),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nameA = "nameA";
function functionA(params) {
  console.log("functionA");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ADefaultKey: "ADefaultValue",
});


/***/ }),

/***/ "./src/b.js":
/*!******************!*\
  !*** ./src/b.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nameB": () => (/* binding */ nameB),
/* harmony export */   "functionB": () => (/* binding */ functionB),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const nameB = "nameB";
function functionB(params) {
  console.log("functionB");
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  BDefaultKey: "defaultValue",
});


/***/ }),

/***/ "./src/c.js":
/*!******************!*\
  !*** ./src/c.js ***!
  \******************/
/***/ ((module) => {

module.exports.nameC = "nameC";
module.exports.functionC = function functionC(params) {
  console.log("functionC");
};
module.exports = {
  CDefaultKey: "defaultValue",
};


/***/ }),

/***/ "./src/d.js":
/*!******************!*\
  !*** ./src/d.js ***!
  \******************/
/***/ ((module) => {

module.exports.nameD = "nameD";
module.exports.functionD = function functionD(params) {
  console.log("functionD");
};
module.exports = {
  DDefaultKey: "defaultValue",
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ "./src/a.js");
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./c */ "./src/c.js");
/* harmony import */ var _c__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_c__WEBPACK_IMPORTED_MODULE_1__);
// ESM => ESM

// CJS => ESM
const defaultB = __webpack_require__(/*! ./b.js */ "./src/b.js");
const { functionB, nameB } = __webpack_require__(/*! ./b.js */ "./src/b.js");
// ESM =>  CJS

// CJS => CJS
const defaultD = __webpack_require__(/*! ./d.js */ "./src/d.js");
const { functionD, nameD } = __webpack_require__(/*! ./d.js */ "./src/d.js");

console.log(_a__WEBPACK_IMPORTED_MODULE_0__.nameA, _a__WEBPACK_IMPORTED_MODULE_0__["default"]);
console.log(nameB, defaultB);
console.log(_c__WEBPACK_IMPORTED_MODULE_1__.nameC, (_c__WEBPACK_IMPORTED_MODULE_1___default()));
console.log(nameD, defaultD);
(0,_a__WEBPACK_IMPORTED_MODULE_0__.functionA)("A");
functionB("B");
(0,_c__WEBPACK_IMPORTED_MODULE_1__.functionC)("C");
functionD("C");

})();

/******/ })()
;
//# sourceMappingURL=output.js.map