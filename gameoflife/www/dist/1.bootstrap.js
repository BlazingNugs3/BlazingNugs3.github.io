(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gameoflife__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gameoflife */ \"./node_modules/.pnpm/file+..+pkg/node_modules/gameoflife/gameoflife.js\");\n\n\n\n\nconst fpsDisplay = document.getElementById(\"fps-display\");\nconst pre = document.getElementById(\"game-of-life-canvas\");\nconst universe = gameoflife__WEBPACK_IMPORTED_MODULE_0__[\"Universe\"].new();\nlet fps = 0;\n\nconst renderLoop = () => {\n    pre.textContent = universe.render();\n    universe.tick();\n\n\n    const now = performance.now();\n    fps = 1000 / (now - renderLoop.lastRender);\n    renderLoop.lastRender = now;\n\n\n    fpsDisplay.textContent = `Frame Rate: ${Math.round(fps)} fps`;\n\n    requestAnimationFrame(renderLoop);\n};\n\nrenderLoop.lastRender = performance.now();\nrequestAnimationFrame(renderLoop);\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);