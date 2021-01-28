module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/nprogress.css */ "./src/styles/nprogress.css");
/* harmony import */ var _styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme */ "./src/theme.tsx");
/* harmony import */ var _store_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/context */ "./src/store/context.tsx");

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.configure({
  showSpinner: false
});
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start());
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done());
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done());

function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ChakraProvider"], {
    resetCSS: true,
    theme: _theme__WEBPACK_IMPORTED_MODULE_5__["default"],
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_store_context__WEBPACK_IMPORTED_MODULE_6__["QuizResultProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/store/context.tsx":
/*!*******************************!*\
  !*** ./src/store/context.tsx ***!
  \*******************************/
/*! exports provided: QuizResultContext, QuizResultProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultContext", function() { return QuizResultContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizResultProvider", function() { return QuizResultProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\store\\context.tsx";

const QuizResultContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
const QuizResultProvider = ({
  children
}) => {
  const {
    0: quizResult,
    1: setQuizResult
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])();
  const {
    0: answersByUser,
    1: setAnswerByUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(QuizResultContext.Provider, {
    value: {
      quizResult,
      setQuizResult,
      answersByUser,
      setAnswerByUser
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/styles/nprogress.css":
/*!**********************************!*\
  !*** ./src/styles/nprogress.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const fonts = {
  poppins: 'Poppins, sans-serif',
  berkshire: 'Berkshire Swash, serif',
  montserrat: 'Montserrat, sans-serif',
  inter: 'Inter, sans-serif'
};
const theme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["extendTheme"])({
  styles: {
    global: ({
      colorMode
    }) => ({
      body: {
        fontFamily: 'Inter, sans-serif'
      },
      p: {
        color: colorMode === 'dark' ? '#BDBDBD' : 'gray.600'
      },
      h2: {
        color: colorMode === 'dark' ? 'white' : 'gray.800'
      },
      h3: {
        color: colorMode === 'dark' ? 'white' : 'gray.800'
      }
    })
  },
  colors: {
    black: '#16161D'
  },
  fonts
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9jb250ZXh0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUudHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiTlByb2dyZXNzIiwiY29uZmlndXJlIiwic2hvd1NwaW5uZXIiLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsInN0YXJ0IiwiZG9uZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwidGhlbWUiLCJRdWl6UmVzdWx0Q29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJRdWl6UmVzdWx0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInF1aXpSZXN1bHQiLCJzZXRRdWl6UmVzdWx0IiwidXNlU3RhdGUiLCJhbnN3ZXJzQnlVc2VyIiwic2V0QW5zd2VyQnlVc2VyIiwiZm9udHMiLCJwb3BwaW5zIiwiYmVya3NoaXJlIiwibW9udHNlcnJhdCIsImludGVyIiwiZXh0ZW5kVGhlbWUiLCJzdHlsZXMiLCJnbG9iYWwiLCJjb2xvck1vZGUiLCJib2R5IiwiZm9udEZhbWlseSIsInAiLCJjb2xvciIsImgyIiwiaDMiLCJjb2xvcnMiLCJibGFjayJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFD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LE1BQWQsR0FBdUIsU0FBdkIsR0FBbUM7QUFEeEMsT0FMd0I7QUFRM0JLLFFBQUUsRUFBRTtBQUNIRCxhQUFLLEVBQUVKLFNBQVMsS0FBSyxNQUFkLEdBQXVCLE9BQXZCLEdBQWlDO0FBRHJDLE9BUnVCO0FBVzNCTSxRQUFFLEVBQUU7QUFDSEYsYUFBSyxFQUFFSixTQUFTLEtBQUssTUFBZCxHQUF1QixPQUF2QixHQUFpQztBQURyQztBQVh1QixLQUFwQjtBQURELEdBRGlCO0FBa0J6Qk8sUUFBTSxFQUFFO0FBQ1BDLFNBQUssRUFBRTtBQURBLEdBbEJpQjtBQXFCekJoQjtBQXJCeUIsQ0FBRCxDQUF6QjtBQXdCZVYsb0VBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0EsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcclxuaW1wb3J0IHsgUXVpelJlc3VsdFByb3ZpZGVyIH0gZnJvbSAnLi4vc3RvcmUvY29udGV4dCc7XHJcblxyXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHtcclxuXHRzaG93U3Bpbm5lcjogZmFsc2UsXHJcbn0pO1xyXG5cclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG5Sb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxyXG5cdFx0XHQ8UXVpelJlc3VsdFByb3ZpZGVyPlxyXG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuXHRcdFx0PC9RdWl6UmVzdWx0UHJvdmlkZXI+XHJcblx0XHQ8L0NoYWtyYVByb3ZpZGVyPlxyXG5cdCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1heWJlLCBSZXN1bHRSZXNwb25zZUZyYWdtZW50IH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgeyBVc2Vyc0Fuc3dlclByb3BzIH0gZnJvbSAnLi4vcGFnZXMvcXVpei90YWtlL1tpZF0vaW5kZXgnO1xyXG5cclxuZXhwb3J0IHR5cGUgUXVpelJlc3VsdFR5cGUgPSB7XHJcblx0cXVpelJlc3VsdD86XHJcblx0XHR8IE1heWJlPHsgX190eXBlbmFtZT86ICdSZXN1bHQnIH0gJiBSZXN1bHRSZXNwb25zZUZyYWdtZW50PlxyXG5cdFx0fCBudWxsXHJcblx0XHR8IHVuZGVmaW5lZDtcclxuXHRzZXRRdWl6UmVzdWx0OiAoXHJcblx0XHRkYXRhOlxyXG5cdFx0XHR8IE1heWJlPHsgX190eXBlbmFtZT86ICdSZXN1bHQnIH0gJiBSZXN1bHRSZXNwb25zZUZyYWdtZW50PlxyXG5cdFx0XHR8IG51bGxcclxuXHRcdFx0fCB1bmRlZmluZWRcclxuXHQpID0+IHZvaWQ7XHJcblxyXG5cdGFuc3dlcnNCeVVzZXI6IFVzZXJzQW5zd2VyUHJvcHNbXSB8IG51bGw7XHJcblx0c2V0QW5zd2VyQnlVc2VyOiAoZGF0YTogVXNlcnNBbnN3ZXJQcm9wc1tdKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1aXpSZXN1bHRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxRdWl6UmVzdWx0VHlwZSB8IG51bGw+KG51bGwpO1xyXG5cclxuZXhwb3J0IGNvbnN0IFF1aXpSZXN1bHRQcm92aWRlcjogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgW3F1aXpSZXN1bHQsIHNldFF1aXpSZXN1bHRdID0gdXNlU3RhdGU8XHJcblx0XHRNYXliZTx7IF9fdHlwZW5hbWU/OiAnUmVzdWx0JyB9ICYgUmVzdWx0UmVzcG9uc2VGcmFnbWVudD4gfCBudWxsIHwgdW5kZWZpbmVkXHJcblx0PigpO1xyXG5cdGNvbnN0IFthbnN3ZXJzQnlVc2VyLCBzZXRBbnN3ZXJCeVVzZXJdID0gdXNlU3RhdGU8VXNlcnNBbnN3ZXJQcm9wc1tdIHwgbnVsbD4oXHJcblx0XHRudWxsXHJcblx0KTtcclxuXHRyZXR1cm4gKFxyXG5cdFx0PFF1aXpSZXN1bHRDb250ZXh0LlByb3ZpZGVyXHJcblx0XHRcdHZhbHVlPXt7IHF1aXpSZXN1bHQsIHNldFF1aXpSZXN1bHQsIGFuc3dlcnNCeVVzZXIsIHNldEFuc3dlckJ5VXNlciB9fVxyXG5cdFx0PlxyXG5cdFx0XHR7Y2hpbGRyZW59XHJcblx0XHQ8L1F1aXpSZXN1bHRDb250ZXh0LlByb3ZpZGVyPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGV4dGVuZFRoZW1lIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5cbmNvbnN0IGZvbnRzID0ge1xuXHRwb3BwaW5zOiAnUG9wcGlucywgc2Fucy1zZXJpZicsXG5cdGJlcmtzaGlyZTogJ0JlcmtzaGlyZSBTd2FzaCwgc2VyaWYnLFxuXHRtb250c2VycmF0OiAnTW9udHNlcnJhdCwgc2Fucy1zZXJpZicsXG5cdGludGVyOiAnSW50ZXIsIHNhbnMtc2VyaWYnLFxufTtcblxuY29uc3QgdGhlbWUgPSBleHRlbmRUaGVtZSh7XG5cdHN0eWxlczoge1xuXHRcdGdsb2JhbDogKHsgY29sb3JNb2RlIH0pID0+ICh7XG5cdFx0XHRib2R5OiB7XG5cdFx0XHRcdGZvbnRGYW1pbHk6ICdJbnRlciwgc2Fucy1zZXJpZicsXG5cdFx0XHR9LFxuXG5cdFx0XHRwOiB7XG5cdFx0XHRcdGNvbG9yOiBjb2xvck1vZGUgPT09ICdkYXJrJyA/ICcjQkRCREJEJyA6ICdncmF5LjYwMCcsXG5cdFx0XHR9LFxuXHRcdFx0aDI6IHtcblx0XHRcdFx0Y29sb3I6IGNvbG9yTW9kZSA9PT0gJ2RhcmsnID8gJ3doaXRlJyA6ICdncmF5LjgwMCcsXG5cdFx0XHR9LFxuXHRcdFx0aDM6IHtcblx0XHRcdFx0Y29sb3I6IGNvbG9yTW9kZSA9PT0gJ2RhcmsnID8gJ3doaXRlJyA6ICdncmF5LjgwMCcsXG5cdFx0XHR9LFxuXHRcdH0pLFxuXHR9LFxuXHRjb2xvcnM6IHtcblx0XHRibGFjazogJyMxNjE2MUQnLFxuXHR9LFxuXHRmb250cyxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCB0aGVtZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9