/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/anime-element.js":
/*!*********************************!*\
  !*** ./src/js/anime-element.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst animItems = document.querySelectorAll('._anim-items');\n\nif (!!animItems.length) {\n    window.addEventListener('scroll', animOnScroll);\n\n    function animOnScroll() {\n        animItems.forEach(animItem => {\n\n            const animItemHeight = animItem.offsetHeight;\n            const animItemOffset = offset(animItem).top;\n            const windowHeight = window.innerHeight;\n\n            const animPointTop = animItemOffset - windowHeight;\n            const animPointBottom = animItemOffset + animItemHeight;\n\n            if (scrollY > animPointTop && scrollY < animPointBottom) {\n                animItem.classList.add('_active');\n            } else if (!animItem.classList.contains('_anim-no-hide')) {\n                animItem.classList.remove('_active');\n            }\n        })\n    }\n\n    function offset(el) {\n        const rect = el.getBoundingClientRect();\n        const scrollLeft = window.scrollX || document.documentElement.scrollLeft;\n        const scrollTop = window.scrollY || document.documentElement.scrollTop;\n\n        return {\n            top: rect.top + scrollTop,\n            left: rect.left + scrollLeft\n        }\n    }\n\n    setTimeout(() => animOnScroll(), 300);\n}\n\n\n//# sourceURL=webpack://new-gulp/./src/js/anime-element.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _anime_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anime-element.js */ \"./src/js/anime-element.js\");\n\n\nconst btnBurger = document.querySelector('.menu__burger');\nconst btnBurgerArr = document.querySelectorAll('.header-icon');\nconst menuList = document.querySelector('.menu__nav-bar');\n\ndocument.addEventListener('click', menu);\n\nfunction menu(event) {\n    if (event.target.closest('.menu__burger')) {\n        menuList.classList.toggle('active');\n        btnBurger.classList.toggle('active');\n    }\n    if (!event.target.closest('.menu__burger') & !event.target.closest('.menu__list')) {\n        menuList.classList.remove('active');\n        btnBurger.classList.remove('active');\n    }\n}\n\n\n//# sourceURL=webpack://new-gulp/./src/js/index.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;