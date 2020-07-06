webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/pages/Home/HomeCarousel/HomeCarousel.js":
/*!****************************************************************!*\
  !*** ./src/components/pages/Home/HomeCarousel/HomeCarousel.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_pokemon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/pokemon */ \"./src/utils/pokemon/index.js\");\nvar _jsxFileName = \"/home/gilbertosuarez/Documentos/dev/personal/poke-app/src/components/pages/Home/HomeCarousel/HomeCarousel.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nHomeCarousel.propTypes = {};\n\nfunction HomeCarousel(_ref) {\n  _s();\n\n  var _this = this;\n\n  var pokemons = _ref.pokemons;\n  console.log(\"pokemon 0=\", pokemons[0]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      pokemonList = _useState[0],\n      setPokemonList = _useState[1];\n\n  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {\n    setPokemonList(Object(utils_pokemon__WEBPACK_IMPORTED_MODULE_2__[\"getPokemons\"])(pokemons));\n  }, [pokemons]);\n  return __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }\n  }, pokemonList.map(function (pokemon) {\n    return __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 16\n      }\n    }, \"id=\".concat(pokemon.id, \" name= \").concat(pokemon.name));\n  }));\n}\n\n_s(HomeCarousel, \"8WCeILIBbUks4eWUNugK57Uz8MA=\");\n\n_c = HomeCarousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeCarousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"HomeCarousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wYWdlcy9Ib21lL0hvbWVDYXJvdXNlbC9Ib21lQ2Fyb3VzZWwuanM/ZDBlZiJdLCJuYW1lcyI6WyJIb21lQ2Fyb3VzZWwiLCJwcm9wVHlwZXMiLCJwb2tlbW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTdGF0ZSIsInBva2Vtb25MaXN0Iiwic2V0UG9rZW1vbkxpc3QiLCJSZWFjdCIsInVzZUVmZmVjdCIsImdldFBva2Vtb25zIiwibWFwIiwicG9rZW1vbiIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSxZQUFZLENBQUNDLFNBQWIsR0FBeUIsRUFBekI7O0FBRUEsU0FBU0QsWUFBVCxPQUFvQztBQUFBOztBQUFBOztBQUFBLE1BQVpFLFFBQVksUUFBWkEsUUFBWTtBQUNsQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQkYsUUFBUSxDQUFDLENBQUQsQ0FBbEM7O0FBRGtDLGtCQUVJRyxzREFBUSxDQUFDLEVBQUQsQ0FGWjtBQUFBLE1BRTNCQyxXQUYyQjtBQUFBLE1BRWRDLGNBRmM7O0FBSWxDQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJGLGtCQUFjLENBQUNHLGlFQUFXLENBQUNSLFFBQUQsQ0FBWixDQUFkO0FBQ0QsR0FGRCxFQUVHLENBQUNBLFFBQUQsQ0FGSDtBQUlBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxXQUFXLENBQUNLLEdBQVosQ0FBZ0IsVUFBQ0MsT0FBRCxFQUFhO0FBQzVCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBVUEsT0FBTyxDQUFDQyxFQUFsQixvQkFBOEJELE9BQU8sQ0FBQ0UsSUFBdEMsRUFBUDtBQUNELEdBRkEsQ0FESCxDQURGO0FBT0Q7O0dBZlFkLFk7O0tBQUFBLFk7QUFpQk1BLDJFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcGFnZXMvSG9tZS9Ib21lQ2Fyb3VzZWwvSG9tZUNhcm91c2VsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IGdldFBva2Vtb25zIH0gZnJvbSBcInV0aWxzL3Bva2Vtb25cIjtcblxuSG9tZUNhcm91c2VsLnByb3BUeXBlcyA9IHt9O1xuXG5mdW5jdGlvbiBIb21lQ2Fyb3VzZWwoeyBwb2tlbW9ucyB9KSB7XG4gIGNvbnNvbGUubG9nKFwicG9rZW1vbiAwPVwiLCBwb2tlbW9uc1swXSk7XG4gIGNvbnN0IFtwb2tlbW9uTGlzdCwgc2V0UG9rZW1vbkxpc3RdID0gdXNlU3RhdGUoW10pO1xuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UG9rZW1vbkxpc3QoZ2V0UG9rZW1vbnMocG9rZW1vbnMpKTtcbiAgfSwgW3Bva2Vtb25zXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbj5cbiAgICAgIHtwb2tlbW9uTGlzdC5tYXAoKHBva2Vtb24pID0+IHtcbiAgICAgICAgcmV0dXJuIDxwPntgaWQ9JHtwb2tlbW9uLmlkfSBuYW1lPSAke3Bva2Vtb24ubmFtZX1gfTwvcD47XG4gICAgICB9KX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVDYXJvdXNlbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/pages/Home/HomeCarousel/HomeCarousel.js\n");

/***/ })

})