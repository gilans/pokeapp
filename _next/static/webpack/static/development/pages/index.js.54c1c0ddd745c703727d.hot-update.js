webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/presentational/Carousel/Carousel.js":
/*!************************************************************!*\
  !*** ./src/components/presentational/Carousel/Carousel.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var utils_pokemon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/pokemon */ \"./src/utils/pokemon/index.js\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./src/components/presentational/Carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Slide__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Slide */ \"./src/components/presentational/Slide/index.js\");\n\n\nvar _jsxFileName = \"/home/gilbertosuarez/Documentos/dev/github/poke-app/src/components/presentational/Carousel/Carousel.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\nCarousel.propTypes = {};\n\nfunction Carousel(_ref) {\n  _s();\n\n  var _this = this;\n\n  var pokemons = _ref.pokemons;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      pokemonList = _useState[0],\n      setPokemonList = _useState[1];\n\n  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(function () {\n    setPokemonList(Object(utils_pokemon__WEBPACK_IMPORTED_MODULE_4__[\"getPokemons\"])(pokemons));\n  }, [pokemons]);\n  var settings = {\n    className: \"center\",\n    centerMode: true,\n    infinite: true,\n    centerPadding: \"60px\",\n    slidesToShow: 3,\n    speed: 500\n  };\n  return __jsx(\"section\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, settings, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }), pokemonList.map(function (pokemon) {\n    return __jsx(_Slide__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      pokemon: pokemon,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 11\n      }\n    });\n  })));\n}\n\n_s(Carousel, \"8WCeILIBbUks4eWUNugK57Uz8MA=\");\n\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\n\nvar _c;\n\n$RefreshReg$(_c, \"Carousel\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcmVzZW50YXRpb25hbC9DYXJvdXNlbC9DYXJvdXNlbC5qcz83MjU0Il0sIm5hbWVzIjpbIkNhcm91c2VsIiwicHJvcFR5cGVzIiwicG9rZW1vbnMiLCJ1c2VTdGF0ZSIsInBva2Vtb25MaXN0Iiwic2V0UG9rZW1vbkxpc3QiLCJSZWFjdCIsInVzZUVmZmVjdCIsImdldFBva2Vtb25zIiwic2V0dGluZ3MiLCJjbGFzc05hbWUiLCJjZW50ZXJNb2RlIiwiaW5maW5pdGUiLCJjZW50ZXJQYWRkaW5nIiwic2xpZGVzVG9TaG93Iiwic3BlZWQiLCJtYXAiLCJwb2tlbW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxTQUFULEdBQXFCLEVBQXJCOztBQUVBLFNBQVNELFFBQVQsT0FBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFaRSxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ3ZCQyxXQUR1QjtBQUFBLE1BQ1ZDLGNBRFU7O0FBRzlCQyw4Q0FBSyxDQUFDQyxTQUFOLENBQWdCLFlBQU07QUFDcEJGLGtCQUFjLENBQUNHLGlFQUFXLENBQUNOLFFBQUQsQ0FBWixDQUFkO0FBQ0QsR0FGRCxFQUVHLENBQUNBLFFBQUQsQ0FGSDtBQUlBLE1BQU1PLFFBQVEsR0FBRztBQUNmQyxhQUFTLEVBQUUsUUFESTtBQUVmQyxjQUFVLEVBQUUsSUFGRztBQUdmQyxZQUFRLEVBQUUsSUFISztBQUlmQyxpQkFBYSxFQUFFLE1BSkE7QUFLZkMsZ0JBQVksRUFBRSxDQUxDO0FBTWZDLFNBQUssRUFBRTtBQU5RLEdBQWpCO0FBU0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRCx5RkFBWU4sUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dMLFdBQVcsQ0FBQ1ksR0FBWixDQUFnQixVQUFDQyxPQUFEO0FBQUEsV0FDZixNQUFDLDhDQUFEO0FBQU8sYUFBTyxFQUFFQSxPQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRGU7QUFBQSxHQUFoQixDQURILENBREYsQ0FERjtBQVNEOztHQXpCUWpCLFE7O0tBQUFBLFE7QUEyQk1BLHVFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvcHJlc2VudGF0aW9uYWwvQ2Fyb3VzZWwvQ2Fyb3VzZWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xuXG5pbXBvcnQgeyBnZXRQb2tlbW9ucyB9IGZyb20gXCJ1dGlscy9wb2tlbW9uXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vQ2Fyb3VzZWwubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBTbGlkZSBmcm9tIFwiLi4vU2xpZGVcIjtcblxuQ2Fyb3VzZWwucHJvcFR5cGVzID0ge307XG5cbmZ1bmN0aW9uIENhcm91c2VsKHsgcG9rZW1vbnMgfSkge1xuICBjb25zdCBbcG9rZW1vbkxpc3QsIHNldFBva2Vtb25MaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBva2Vtb25MaXN0KGdldFBva2Vtb25zKHBva2Vtb25zKSk7XG4gIH0sIFtwb2tlbW9uc10pO1xuXG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcbiAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgIGluZmluaXRlOiB0cnVlLFxuICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxuICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICBzcGVlZDogNTAwLFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30+XG4gICAgICAgIHtwb2tlbW9uTGlzdC5tYXAoKHBva2Vtb24pID0+IChcbiAgICAgICAgICA8U2xpZGUgcG9rZW1vbj17cG9rZW1vbn0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L1NsaWRlcj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/presentational/Carousel/Carousel.js\n");

/***/ })

})