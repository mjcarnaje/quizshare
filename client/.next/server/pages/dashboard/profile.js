module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/dashboard/profile": 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/dashboard/profile.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["res.cloudinary.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout) {
  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set([width, width * 2, width * 3].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function callLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes
}) {
  if (unoptimized) {
    return {
      src
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout);
  const last = widths.length - 1;
  const srcSet = widths.map((w, i) => `${callLoader({
    src,
    quality,
    width: w
  })} ${kind === 'w' ? w : i + 1}${kind}`).join(', ');

  if (!sizes && kind === 'w') {
    sizes = '100vw';
  }

  src = callLoader({
    src,
    quality,
    width: widths[last]
  });
  return {
    src,
    sizes,
    srcSet
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    visibility: isVisible ? 'visible' : 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block'
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })));
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://err.sh/next.js/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

var _default = requestIdleCallback;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js")); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.default)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.default)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = _interopRequireDefault(__webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"));

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) (0, _requestIdleCallback.default)(() => setVisible(true));
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)(addBasePath(addLocale(delBasePath((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname), this.locale)), pages, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname, this.locales);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: (0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(resolvedAs) ? delBasePath(resolvedAs) : resolvedAs, this.locales).pathname
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages, false);

          if (pages.includes(parsedHref.pathname)) {
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, asPath, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.compileNonPath = compileNonPath;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function compileNonPath(value, params) {
  if (!value.includes(':')) {
    return value;
  }

  for (const key of Object.keys(params)) {
    if (value.includes(`:${key}`)) {
      value = value.replace(new RegExp(`:${key}\\*`, 'g'), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, 'g'), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, 'g'), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, 'g'), `--ESCAPED_PARAM_COLON${key}`);
    }
  }

  value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, '\\$1').replace(/--ESCAPED_PARAM_PLUS/g, '+').replace(/--ESCAPED_PARAM_COLON/g, ':').replace(/--ESCAPED_PARAM_QUESTION/g, '?').replace(/--ESCAPED_PARAM_ASTERISKS/g, '*'); // the value needs to start with a forward-slash to be compiled
  // correctly

  return pathToRegexp.compile(`/${value}`, {
    validate: false
  })(params).substr(1);
}

function prepareDestination(destination, params, query, appendParamsToQuery) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  const hadLocale = query.__nextLocale;
  delete query.__nextLocale;
  delete query.__nextDefaultLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = compileNonPath(value, params);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  let paramKeys = Object.keys(params); // remove internal param for i18n

  if (hadLocale) {
    paramKeys = paramKeys.filter(name => name !== 'nextInternalLocale');
  }

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  try {
    newUrl = destinationCompiler(params);
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _normalizeLocalePath = __webpack_require__(/*! ../../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
  if (!pages.includes((0, _normalizeLocalePath.normalizeLocalePath)(asPath, locales).pathname)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        const fsPathname = (0, _normalizeLocalePath.normalizeLocalePath)((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath), locales).pathname;

        if (pages.includes(fsPathname)) {
          asPath = fsPathname; // check if we now match a page as this means we are done
          // resolving the rewrites

          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(fsPathname);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          asPath = fsPathname;
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/components/Country.tsx":
/*!************************************!*\
  !*** ./src/components/Country.tsx ***!
  \************************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\Country.tsx";

const Country = ({}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Afghanistan",
      children: "Afghanistan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "\xC5land Islands",
      children: "\xC5land Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Albania",
      children: "Albania"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Algeria",
      children: "Algeria"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "American Samoa",
      children: "American Samoa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Andorra",
      children: "Andorra"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Angola",
      children: "Angola"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Anguilla",
      children: "Anguilla"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Antarctica",
      children: "Antarctica"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Antigua and Barbuda",
      children: "Antigua and Barbuda"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Argentina",
      children: "Argentina"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Armenia",
      children: "Armenia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Aruba",
      children: "Aruba"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Australia",
      children: "Australia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Austria",
      children: "Austria"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Azerbaijan",
      children: "Azerbaijan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bahamas",
      children: "Bahamas"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bahrain",
      children: "Bahrain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bangladesh",
      children: "Bangladesh"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Barbados",
      children: "Barbados"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Belarus",
      children: "Belarus"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Belgium",
      children: "Belgium"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Belize",
      children: "Belize"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Benin",
      children: "Benin"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bermuda",
      children: "Bermuda"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bhutan",
      children: "Bhutan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bolivia",
      children: "Bolivia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bosnia and Herzegovina",
      children: "Bosnia and Herzegovina"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Botswana",
      children: "Botswana"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bouvet Island",
      children: "Bouvet Island"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Brazil",
      children: "Brazil"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "British Indian Ocean Territory",
      children: "British Indian Ocean Territory"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Brunei Darussalam",
      children: "Brunei Darussalam"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Bulgaria",
      children: "Bulgaria"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Burkina Faso",
      children: "Burkina Faso"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Burundi",
      children: "Burundi"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cambodia",
      children: "Cambodia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cameroon",
      children: "Cameroon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Canada",
      children: "Canada"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cape Verde",
      children: "Cape Verde"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cayman Islands",
      children: "Cayman Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Central African Republic",
      children: "Central African Republic"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Chad",
      children: "Chad"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Chile",
      children: "Chile"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "China",
      children: "China"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Christmas Island",
      children: "Christmas Island"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cocos (Keeling) Islands",
      children: "Cocos (Keeling) Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Colombia",
      children: "Colombia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Comoros",
      children: "Comoros"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Congo",
      children: "Congo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Congo, The Democratic Republic of The",
      children: "Congo, The Democratic Republic of The"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cook Islands",
      children: "Cook Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Costa Rica",
      children: "Costa Rica"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cote D'ivoire",
      children: "Cote D'ivoire"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Croatia",
      children: "Croatia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cuba",
      children: "Cuba"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Cyprus",
      children: "Cyprus"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Czech Republic",
      children: "Czech Republic"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Denmark",
      children: "Denmark"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Djibouti",
      children: "Djibouti"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Dominica",
      children: "Dominica"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Dominican Republic",
      children: "Dominican Republic"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Ecuador",
      children: "Ecuador"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Egypt",
      children: "Egypt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "El Salvador",
      children: "El Salvador"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Equatorial Guinea",
      children: "Equatorial Guinea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Eritrea",
      children: "Eritrea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Estonia",
      children: "Estonia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Ethiopia",
      children: "Ethiopia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Falkland Islands (Malvinas)",
      children: "Falkland Islands (Malvinas)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Faroe Islands",
      children: "Faroe Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Fiji",
      children: "Fiji"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Finland",
      children: "Finland"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "France",
      children: "France"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "French Guiana",
      children: "French Guiana"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "French Polynesia",
      children: "French Polynesia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "French Southern Territories",
      children: "French Southern Territories"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Gabon",
      children: "Gabon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Gambia",
      children: "Gambia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Georgia",
      children: "Georgia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Germany",
      children: "Germany"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Ghana",
      children: "Ghana"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Gibraltar",
      children: "Gibraltar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Greece",
      children: "Greece"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Greenland",
      children: "Greenland"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Grenada",
      children: "Grenada"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Guadeloupe",
      children: "Guadeloupe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Guam",
      children: "Guam"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Guatemala",
      children: "Guatemala"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Guernsey",
      children: "Guernsey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Guinea",
      children: "Guinea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Guinea-bissau",
      children: "Guinea-bissau"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Guyana",
      children: "Guyana"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Haiti",
      children: "Haiti"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Heard Island and Mcdonald Islands",
      children: "Heard Island and Mcdonald Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Holy See (Vatican City State)",
      children: "Holy See (Vatican City State)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Honduras",
      children: "Honduras"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Hong Kong",
      children: "Hong Kong"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Hungary",
      children: "Hungary"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Iceland",
      children: "Iceland"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "India",
      children: "India"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Indonesia",
      children: "Indonesia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Iran, Islamic Republic of",
      children: "Iran, Islamic Republic of"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Iraq",
      children: "Iraq"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Ireland",
      children: "Ireland"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Isle of Man",
      children: "Isle of Man"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Israel",
      children: "Israel"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Italy",
      children: "Italy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Jamaica",
      children: "Jamaica"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Japan",
      children: "Japan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Jersey",
      children: "Jersey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Jordan",
      children: "Jordan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Kazakhstan",
      children: "Kazakhstan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Kenya",
      children: "Kenya"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Kiribati",
      children: "Kiribati"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Korea, Democratic People's Republic of",
      children: "Korea, Democratic People's Republic of"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Korea, Republic of",
      children: "Korea, Republic of"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Kuwait",
      children: "Kuwait"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Kyrgyzstan",
      children: "Kyrgyzstan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Lao People's Democratic Republic",
      children: "Lao People's Democratic Republic"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Latvia",
      children: "Latvia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Lebanon",
      children: "Lebanon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Lesotho",
      children: "Lesotho"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Liberia",
      children: "Liberia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Libyan Arab Jamahiriya",
      children: "Libyan Arab Jamahiriya"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Liechtenstein",
      children: "Liechtenstein"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Lithuania",
      children: "Lithuania"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Luxembourg",
      children: "Luxembourg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Macao",
      children: "Macao"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Macedonia, The Former Yugoslav Republic of",
      children: "Macedonia, The Former Yugoslav Republic of"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Madagascar",
      children: "Madagascar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Malawi",
      children: "Malawi"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Malaysia",
      children: "Malaysia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Maldives",
      children: "Maldives"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mali",
      children: "Mali"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Malta",
      children: "Malta"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Marshall Islands",
      children: "Marshall Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Martinique",
      children: "Martinique"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mauritania",
      children: "Mauritania"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mauritius",
      children: "Mauritius"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mayotte",
      children: "Mayotte"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mexico",
      children: "Mexico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Micronesia, Federated States of",
      children: "Micronesia, Federated States of"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Moldova, Republic of",
      children: "Moldova, Republic of"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Monaco",
      children: "Monaco"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mongolia",
      children: "Mongolia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Montenegro",
      children: "Montenegro"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Montserrat",
      children: "Montserrat"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Morocco",
      children: "Morocco"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mozambique",
      children: "Mozambique"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Myanmar",
      children: "Myanmar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Namibia",
      children: "Namibia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Nauru",
      children: "Nauru"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Nepal",
      children: "Nepal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Netherlands",
      children: "Netherlands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Netherlands Antilles",
      children: "Netherlands Antilles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "New Caledonia",
      children: "New Caledonia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "New Zealand",
      children: "New Zealand"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Nicaragua",
      children: "Nicaragua"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Niger",
      children: "Niger"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Nigeria",
      children: "Nigeria"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Niue",
      children: "Niue"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Norfolk Island",
      children: "Norfolk Island"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Northern Mariana Islands",
      children: "Northern Mariana Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Norway",
      children: "Norway"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Oman",
      children: "Oman"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Pakistan",
      children: "Pakistan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Palau",
      children: "Palau"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Palestinian Territory, Occupied",
      children: "Palestinian Territory, Occupied"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Panama",
      children: "Panama"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Papua New Guinea",
      children: "Papua New Guinea"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Paraguay",
      children: "Paraguay"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Peru",
      children: "Peru"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Philippines",
      children: "Philippines"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Pitcairn",
      children: "Pitcairn"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Poland",
      children: "Poland"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Portugal",
      children: "Portugal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Puerto Rico",
      children: "Puerto Rico"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Qatar",
      children: "Qatar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Reunion",
      children: "Reunion"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Romania",
      children: "Romania"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Russian Federation",
      children: "Russian Federation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Rwanda",
      children: "Rwanda"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Saint Helena",
      children: "Saint Helena"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Saint Kitts and Nevis",
      children: "Saint Kitts and Nevis"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Saint Lucia",
      children: "Saint Lucia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Saint Pierre and Miquelon",
      children: "Saint Pierre and Miquelon"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Saint Vincent and The Grenadines",
      children: "Saint Vincent and The Grenadines"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Samoa",
      children: "Samoa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "San Marino",
      children: "San Marino"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Sao Tome and Principe",
      children: "Sao Tome and Principe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Saudi Arabia",
      children: "Saudi Arabia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Senegal",
      children: "Senegal"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Serbia",
      children: "Serbia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Seychelles",
      children: "Seychelles"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Sierra Leone",
      children: "Sierra Leone"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Singapore",
      children: "Singapore"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Slovakia",
      children: "Slovakia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Slovenia",
      children: "Slovenia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Solomon Islands",
      children: "Solomon Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Somalia",
      children: "Somalia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "South Africa",
      children: "South Africa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "South Georgia and The South Sandwich Islands",
      children: "South Georgia and The South Sandwich Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Spain",
      children: "Spain"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Sri Lanka",
      children: "Sri Lanka"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Sudan",
      children: "Sudan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Suriname",
      children: "Suriname"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Svalbard and Jan Mayen",
      children: "Svalbard and Jan Mayen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Swaziland",
      children: "Swaziland"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Sweden",
      children: "Sweden"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Switzerland",
      children: "Switzerland"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Syrian Arab Republic",
      children: "Syrian Arab Republic"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Taiwan, Province of China",
      children: "Taiwan, Province of China"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Tajikistan",
      children: "Tajikistan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Tanzania, United Republic of",
      children: "Tanzania, United Republic of"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Thailand",
      children: "Thailand"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Timor-leste",
      children: "Timor-leste"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Togo",
      children: "Togo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Tokelau",
      children: "Tokelau"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Tonga",
      children: "Tonga"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Trinidad and Tobago",
      children: "Trinidad and Tobago"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 262,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Tunisia",
      children: "Tunisia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 263,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Turkey",
      children: "Turkey"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Turkmenistan",
      children: "Turkmenistan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Turks and Caicos Islands",
      children: "Turks and Caicos Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Tuvalu",
      children: "Tuvalu"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Uganda",
      children: "Uganda"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Ukraine",
      children: "Ukraine"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "United Arab Emirates",
      children: "United Arab Emirates"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 270,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "United Kingdom",
      children: "United Kingdom"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "United States",
      children: "United States"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "United States Minor Outlying Islands",
      children: "United States Minor Outlying Islands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Uruguay",
      children: "Uruguay"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Uzbekistan",
      children: "Uzbekistan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Vanuatu",
      children: "Vanuatu"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Venezuela",
      children: "Venezuela"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Viet Nam",
      children: "Viet Nam"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Virgin Islands, British",
      children: "Virgin Islands, British"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 281,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Virgin Islands, U.S.",
      children: "Virgin Islands, U.S."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 282,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Wallis and Futuna",
      children: "Wallis and Futuna"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Western Sahara",
      children: "Western Sahara"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 284,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Yemen",
      children: "Yemen"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Zambia",
      children: "Zambia"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Zimbabwe",
      children: "Zimbabwe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/components/DarkModeSwitch.tsx":
/*!*******************************************!*\
  !*** ./src/components/DarkModeSwitch.tsx ***!
  \*******************************************/
/*! exports provided: DarkModeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeSwitch", function() { return DarkModeSwitch; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\DarkModeSwitch.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const DarkModeSwitch = props => {
  const {
    colorMode,
    toggleColorMode
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorMode"])();
  const isDark = colorMode === 'dark';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["IconButton"], _objectSpread({
    bg: "transparent",
    _focus: {
      outline: 'none'
    },
    isRound: true,
    icon: isDark ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__["MoonIcon"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 19
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__["SunIcon"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 34
    }, undefined),
    onClick: toggleColorMode
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/isServer */ "./src/utils/isServer.ts");
/* harmony import */ var _DarkModeSwitch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DarkModeSwitch */ "./src/components/DarkModeSwitch.tsx");
/* harmony import */ var _UserMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserMenu */ "./src/components/UserMenu.tsx");


var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\NavBar.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const NavBar = () => {
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const bgColor = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('rgb(255, 255, 255, .90)', 'rgb(32, 32, 32, .90)');
  const navBarShadow = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('xs', 'sm');
  const buttonColorScheme = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('purple', 'gray');
  const logoColor = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('purple.500', 'purple.400');
  const linkColorHover = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('#000', '#fff');
  const {
    data
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])({
    skip: Object(_utils_isServer__WEBPACK_IMPORTED_MODULE_6__["isServer"])()
  });
  let body;

  if (!(data === null || data === void 0 ? void 0 : data.me)) {
    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "login",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          size: "sm",
          colorScheme: buttonColorScheme,
          variant: "ghost",
          fontSize: 16,
          children: "Login"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "register",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          size: "sm",
          colorScheme: buttonColorScheme,
          variant: "outline",
          fontSize: 16,
          children: "Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, undefined)]
    }, void 0, true);
  } else {
    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [[{
        path: '/quiz/create',
        name: 'Create Quiz'
      }, {
        path: '/users',
        name: 'Users',
        icon: 'FaUsers'
      }].map(({
        path,
        name
      }, i) => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          href: path,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            _hover: {
              color: router.pathname == path ? '' : linkColorHover
            },
            px: "10px",
            transition: "ease-in-out",
            transitionDuration: ".1s",
            cursor: "pointer",
            fontWeight: router.pathname == path ? 'semibold' : '',
            color: router.pathname == path ? logoColor : '',
            display: ['none', 'none', 'inline-block'],
            children: name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 8
          }, undefined)
        }, i, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 7
        }, undefined);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserMenu__WEBPACK_IMPORTED_MODULE_8__["UserMenu"], _objectSpread({}, data.me), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 5
      }, undefined)]
    }, void 0, true);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justify: "space-between",
    w: "full",
    py: 4,
    px: [3, 6, 12, 24],
    bg: bgColor,
    boxShadow: navBarShadow,
    position: "sticky",
    left: "0",
    right: "0",
    top: "0",
    zIndex: "2",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: "/",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
        as: "h1",
        fontSize: 28,
        fontWeight: "sm",
        fontFamily: "berkshire",
        color: logoColor,
        cursor: "pointer",
        lineHeight: "22px",
        pb: "6px",
        my: "auto",
        children: "QuizShare"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
      spacing: 6,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_7__["DarkModeSwitch"], {
        "aria-label": "Toggle color mode",
        display: ['none', 'none', 'inline-block']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 5
      }, undefined), body]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/components/UserMenu.tsx":
/*!*************************************!*\
  !*** ./src/components/UserMenu.tsx ***!
  \*************************************/
/*! exports provided: UserMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenu", function() { return UserMenu; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/ti */ "react-icons/ti");
/* harmony import */ var react_icons_ti__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_ti__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../generated/graphql */ "./src/generated/graphql.tsx");

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\UserMenu.tsx";










const UserMenu = ({
  email,
  avatar,
  profile: {
    name
  }
}) => {
  const {
    colorMode,
    toggleColorMode
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useColorMode"])();
  const isDark = colorMode === 'dark';
  const bgColor = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useColorModeValue"])('rgb(255, 255, 255, .90)', 'rgb(32, 32, 32, .90)');
  const colorBody = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useColorModeValue"])('gray.600', '#BDBDBD');
  const colorTitle = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["useColorModeValue"])('gray.800', 'white');
  const router = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const [logout] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_10__["useLogoutMutation"])();
  const apolloClient = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useApolloClient"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuButton"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
        size: "sm",
        name: name,
        src: avatar || '',
        display: ['none', 'none', 'inline-block']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["HamburgerIcon"], {
        display: ['inline-block', 'inline-block', 'none'],
        w: "25px",
        h: "25px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuList"], {
      bg: bgColor,
      color: colorBody,
      w: "232px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["VStack"],
        cursor: "pointer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
          size: "xl",
          name: name,
          src: avatar || undefined,
          m: "5px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], {
          fontWeight: "700",
          color: colorTitle,
          lineHeight: "1",
          fontSize: "18px",
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["Text"], {
          lineHeight: "14px",
          fontSize: "15px",
          wordBreak: "break-all",
          textAlign: "center",
          px: "8px",
          children: `@${email.split('@')[0]}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuDivider"], {
        display: ['block', 'block', 'none']
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        display: ['inline-flex', 'inline-flex', 'none'],
        icon: isDark ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["MoonIcon"], {
          fontSize: "18px",
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 8
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__["SunIcon"], {
          fontSize: "18px",
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 8
        }, undefined),
        onClick: toggleColorMode,
        children: isDark ? 'Light mode' : 'Dark mode'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 5
      }, undefined), [{
        path: '/quiz/create',
        name: 'Create Quiz',
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ti__WEBPACK_IMPORTED_MODULE_9__["TiDocumentAdd"], {
          fontSize: "18px",
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 13
        }, undefined)
      }, {
        path: '/users',
        name: 'Users',
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiUsers"], {
          fontSize: "18px",
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, undefined)
      }].map(({
        path,
        name,
        icon
      }, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        onClick: () => router.push(path),
        display: ['inline-flex', 'inline-flex', 'none'],
        icon: icon,
        children: name
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 6
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuDivider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 5
      }, undefined), [{
        path: '/dashboard/published',
        name: 'Published',
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_8__["IoDocumentsOutline"], {
          fontSize: "18px",
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 13
        }, undefined)
      }, {
        path: '/dashboard/profile',
        name: 'Profile',
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_6__["AiOutlineUser"], {
          fontSize: "18px",
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }, undefined)
      }].map(({
        path,
        name,
        icon
      }, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        onClick: () => router.push(path),
        icon: icon,
        children: name
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 6
      }, undefined)), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuDivider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__["MenuItem"], {
        icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_7__["FiLogOut"], {
          fontSize: "18px",
          color: "inherit"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 12
        }, undefined),
        onClick: async () => {
          await logout();
          router.push('/login');
          apolloClient.clearStore();
        },
        children: "Logout"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/components/custom-inputs/MainInputUI.tsx":
/*!******************************************************!*\
  !*** ./src/components/custom-inputs/MainInputUI.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\custom-inputs\\MainInputUI.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const MainInputUI = (_ref) => {
  let {
    error,
    input,
    name,
    register,
    type,
    forDashboard,
    helperText,
    errorMessage,
    placeholder,
    defaultValue
  } = _ref,
      props = _objectWithoutProperties(_ref, ["error", "input", "name", "register", "type", "forDashboard", "helperText", "errorMessage", "placeholder", "defaultValue"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    id: input,
    isInvalid: !!error,
    children: [forDashboard ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      as: "p",
      fontWeight: "semibold",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormLabel"], {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["InputGroup"], {
      size: "lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Input"], _objectSpread({
        name: input,
        placeholder: placeholder || name,
        ref: register,
        isInvalid: !!error,
        type: type,
        focusBorderColor: "purple.500",
        defaultValue: defaultValue || ''
      }, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 5
      }, undefined), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["InputRightElement"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
          hasArrow: true,
          label: error === null || error === void 0 ? void 0 : error.message,
          bg: "red.500",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__["WarningIcon"], {
            color: "red.500",
            fontSize: "20px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 7
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 6
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, undefined), helperText === null || helperText === void 0 ? void 0 : helperText.map((text, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormHelperText"], {
      children: text
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }, undefined)), error && errorMessage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["FormErrorMessage"], {
      mt: "0",
      children: `${errorMessage[0].toUpperCase()}${errorMessage.slice(1)}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MainInputUI);

/***/ }),

/***/ "./src/components/dasboard/AccountInformation.tsx":
/*!********************************************************!*\
  !*** ./src/components/dasboard/AccountInformation.tsx ***!
  \********************************************************/
/*! exports provided: AccountInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInformation", function() { return AccountInformation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _AccountInformationEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./AccountInformationEdit */ "./src/components/dasboard/AccountInformationEdit.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\dasboard\\AccountInformation.tsx";







const AccountInformation = ({}) => {
  const {
    0: editMode,
    1: setEditMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const coverPhotoBg = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('gray.50', 'rgba(255, 255, 255, 0.04)');
  const {
    data,
    loading,
    error
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])();

  if (!data && loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }, undefined);
  }

  if (!data && !loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["error: ", error === null || error === void 0 ? void 0 : error.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }, undefined);
  }

  if (editMode) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AccountInformationEdit__WEBPACK_IMPORTED_MODULE_6__["AccountInformationEdit"], {
      accInfoProps: data.me,
      setEditMode: setEditMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined);
  }

  const {
    email,
    avatar,
    username,
    cover_photo,
    profile: {
      name
    }
  } = data.me;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: "8px",
      px: "6px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        px: "16px",
        children: "Account Information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setEditMode(true),
        rightIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiEdit"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, undefined),
        colorScheme: "purple",
        variant: "ghost",
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      p: "5px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        bg: "gray.100",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AspectRatio"], {
          maxW: "full",
          ratio: 16 / 5,
          children: cover_photo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_7___default.a, {
            src: cover_photo,
            alt: "Cover Photo",
            layout: "fill"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 8
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
            bg: coverPhotoBg,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: () => setEditMode(true),
              leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_4__["MdPhotoSizeSelectActual"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 20
              }, undefined),
              colorScheme: "gray",
              variant: "ghost",
              children: "Add Cover Photo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 8
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
        mb: "16px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Profile Image"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        name: name,
        size: "xl",
        src: avatar || ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Username"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Email"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Password"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: "******"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/components/dasboard/AccountInformationEdit.tsx":
/*!************************************************************!*\
  !*** ./src/components/dasboard/AccountInformationEdit.tsx ***!
  \************************************************************/
/*! exports provided: AccountInformationEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInformationEdit", function() { return AccountInformationEdit; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _utils_errorMapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/errorMapper */ "./src/utils/errorMapper.ts");
/* harmony import */ var _utils_uploadImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/uploadImage */ "./src/utils/uploadImage.ts");
/* harmony import */ var _custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../custom-inputs/MainInputUI */ "./src/components/custom-inputs/MainInputUI.tsx");


var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\dasboard\\AccountInformationEdit.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const AccountInformationEdit = ({
  accInfoProps: {
    email,
    avatar,
    username,
    cover_photo,
    profile: {
      name
    }
  },
  setEditMode
}) => {
  const coverPhotoBg = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('gray.50', 'rgba(255, 255, 255, 0.04)');
  const {
    0: coverPhoto,
    1: setCoverPhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  const {
    0: profilePhoto,
    1: setProfilePhoto
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])();
  const [updateAccount, {
    loading
  }] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_7__["useUpdateAccountMutation"])();
  const {
    register,
    handleSubmit,
    errors,
    setError
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])();

  const onSumbit = async values => {
    try {
      const {
        data
      } = await updateAccount({
        variables: {
          data: _objectSpread(_objectSpread({}, values), {}, {
            username: values.username === username ? null : values.username,
            email: values.email === email ? null : values.email,
            cover_photo: coverPhoto !== null && coverPhoto !== void 0 ? coverPhoto : null,
            avatar: profilePhoto !== null && profilePhoto !== void 0 ? profilePhoto : null
          })
        },
        update: (cache, {
          data
        }) => {
          cache.writeQuery({
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_7__["MeDocument"],
            data: {
              __typename: 'Query',
              me: data === null || data === void 0 ? void 0 : data.updateAccount
            }
          });
        }
      });

      if (data === null || data === void 0 ? void 0 : data.updateAccount) {
        setEditMode(false);
      }
    } catch (err) {
      Object(_utils_errorMapper__WEBPACK_IMPORTED_MODULE_8__["default"])(err, setError);
    }
  };

  const uploadCoverPhoto = () => {
    Object(_utils_uploadImage__WEBPACK_IMPORTED_MODULE_9__["uploadCloudinaryImage"])((error, photos) => {
      if (!error && photos.event === 'queues-start') {
        setCoverPhoto('loading');
      } else if (!error && photos.event === 'success') {
        setCoverPhoto(photos.info.url);
      } else if (error) {
        console.error(error);
      }
    }, 16 / 5);
  };

  const uploadProfilePhoto = () => {
    Object(_utils_uploadImage__WEBPACK_IMPORTED_MODULE_9__["uploadCloudinaryImage"])((error, photos) => {
      if (!error && photos.event === 'queues-start') {
        setProfilePhoto('loading');
      } else if (!error && photos.event === 'success') {
        setProfilePhoto(photos.info.url);
      } else if (error) {
        console.error(error);
      }
    }, 1);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    cover_photo && setCoverPhoto(cover_photo);
    avatar && setProfilePhoto(avatar);
  }, [cover_photo, avatar]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: "8px",
      px: "6px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        px: "16px",
        children: "Account Information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setEditMode(false),
        rightIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiEdit"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }, undefined),
        colorScheme: "purple",
        variant: "ghost",
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSumbit),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          p: "5px",
          textAlign: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
            isLoaded: coverPhoto !== 'loading',
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
              bg: "gray.100",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["AspectRatio"], {
                maxW: "full",
                ratio: 16 / 5,
                children: coverPhoto && coverPhoto !== 'loading' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
                  src: coverPhoto,
                  alt: "Cover Photo",
                  layout: "fill"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 11
                }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
                  bg: coverPhotoBg,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                    onClick: uploadCoverPhoto,
                    leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdPhotoSizeSelectActual"], {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 163,
                      columnNumber: 23
                    }, undefined),
                    colorScheme: "gray",
                    variant: "ghost",
                    children: "Upload cover photo"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 161,
                    columnNumber: 12
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 160,
                  columnNumber: 11
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 154,
            columnNumber: 7
          }, undefined), coverPhoto && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            mt: "10px",
            onClick: uploadCoverPhoto,
            leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdPhotoSizeSelectActual"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 19
            }, undefined),
            colorScheme: "gray",
            variant: "ghost",
            children: "Upload cover photo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 8
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["VStack"], {
          pl: "32px",
          spacing: "10px",
          py: "20px",
          align: "flex-start",
          w: "60%",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["VStack"], {
            spacing: "12px",
            align: "flex-start",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              fontWeight: "semibold",
              children: "Profile Image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 189,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              align: "center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
                isLoaded: profilePhoto !== 'loading',
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
                  name: name,
                  size: "xl",
                  src: profilePhoto !== null && profilePhoto !== void 0 ? profilePhoto : ''
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 192,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 191,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
                ml: "16px",
                size: "sm",
                leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdPhotoSizeSelectActual"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 20
                }, undefined),
                colorScheme: "gray",
                variant: "ghost",
                onClick: uploadProfilePhoto,
                children: "Upload profile photo"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 194,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 190,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 188,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_10__["default"], {
            error: errors.username,
            input: "username",
            name: "Username",
            placeholder: "Enter new username",
            register: register,
            type: "text",
            forDashboard: true,
            defaultValue: username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_10__["default"], {
            error: errors.email,
            input: "email",
            name: "Email",
            placeholder: "Enter new email",
            register: register,
            type: "text",
            forDashboard: true,
            defaultValue: email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_10__["default"], {
            error: errors.password,
            input: "password",
            name: "Password",
            placeholder: "Enter new password (optional)",
            register: register,
            type: "password",
            forDashboard: true,
            helperText: ['Password must be at least 6 characters, and a combination of letters and numbers.', 'Avoid using a password that you use with other websites or that might be easy for someone else to guess.']
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 226,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_10__["default"], {
            error: errors.confirm_password,
            input: "confirm_password",
            name: "Confirm password",
            placeholder: "Confirm new password (optional)",
            register: register,
            type: "password",
            forDashboard: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 239,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            type: "submit",
            isLoading: loading,
            children: "Update account"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/components/dasboard/ProfileInformation.tsx":
/*!********************************************************!*\
  !*** ./src/components/dasboard/ProfileInformation.tsx ***!
  \********************************************************/
/*! exports provided: ProfileInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformation", function() { return ProfileInformation; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _ProfileInformationEdit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProfileInformationEdit */ "./src/components/dasboard/ProfileInformationEdit.tsx");


var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\dasboard\\ProfileInformation.tsx";






const ProfileInformation = ({}) => {
  const {
    0: editMode,
    1: setEditMode
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    data,
    loading,
    error
  } = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useMeQuery"])();

  if (!data && loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10
    }, undefined);
  }

  if (!data && !loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["error: ", error === null || error === void 0 ? void 0 : error.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 10
    }, undefined);
  }

  if (editMode) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProfileInformationEdit__WEBPACK_IMPORTED_MODULE_6__["ProfileInformationEdit"], {
      profInfoProps: data.me,
      setEditMode: setEditMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 4
    }, undefined);
  }

  const {
    profile: {
      name,
      birthday,
      bio,
      country,
      social
    }
  } = data.me;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: "8px",
      px: "6px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        px: "16px",
        children: "Profile Information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setEditMode(true),
        rightIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, undefined),
        colorScheme: "purple",
        variant: "ghost",
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
        mb: "16px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Name"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Bio"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: bio ? bio : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setEditMode(true),
        variant: "ghost",
        colorScheme: "purple",
        size: "sm",
        children: "Add bio"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Birthday"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: birthday !== null && birthday !== void 0 ? birthday : ''
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Country"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: country ? country : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setEditMode(true),
        variant: "ghost",
        colorScheme: "purple",
        size: "sm",
        children: "Add country"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 6
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 1,
      colEnd: 4,
      fontWeight: "semibold",
      pl: "32px",
      py: "16px",
      children: "Social"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      py: "16px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["VStack"], {
        spacing: "16px",
        align: "flex-start",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          align: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFacebookSquare"],
            boxSize: "36px",
            color: "#3b5999"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 157,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            ml: "24px",
            children: (social === null || social === void 0 ? void 0 : social.facebook) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              children: social.facebook
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 160,
              columnNumber: 9
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: () => setEditMode(true),
              variant: "ghost",
              colorScheme: "purple",
              size: "sm",
              children: "Add facebook information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          align: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaTwitterSquare"],
            boxSize: "36px",
            color: "#55acee"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            ml: "24px",
            children: (social === null || social === void 0 ? void 0 : social.twitter) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              children: social.twitter
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 9
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: () => setEditMode(true),
              variant: "ghost",
              colorScheme: "purple",
              size: "sm",
              children: "Add twitter information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          align: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Center"], {
            boxSize: "36px",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["chakra"].img, {
              boxSize: "31.5px",
              src: "/instagram.svg",
              alt: "Instagram Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 192,
              columnNumber: 8
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            ml: "24px",
            children: (social === null || social === void 0 ? void 0 : social.instagram) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              children: social.instagram
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 200,
              columnNumber: 9
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: () => setEditMode(true),
              variant: "ghost",
              colorScheme: "purple",
              size: "sm",
              children: "Add instagram information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 202,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 6
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
          align: "center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
            as: react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaYoutubeSquare"],
            boxSize: "36px",
            color: "#cd201f"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
            ml: "24px",
            children: (social === null || social === void 0 ? void 0 : social.youtube) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              children: social.youtube
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 9
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
              onClick: () => setEditMode(true),
              variant: "ghost",
              colorScheme: "purple",
              size: "sm",
              children: "Add youtube information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 9
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 6
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/components/dasboard/ProfileInformationEdit.tsx":
/*!************************************************************!*\
  !*** ./src/components/dasboard/ProfileInformationEdit.tsx ***!
  \************************************************************/
/*! exports provided: ProfileInformationEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileInformationEdit", function() { return ProfileInformationEdit; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../custom-inputs/MainInputUI */ "./src/components/custom-inputs/MainInputUI.tsx");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_BirthdayDateOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/BirthdayDateOptions */ "./src/utils/BirthdayDateOptions.tsx");
/* harmony import */ var _Country__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Country */ "./src/components/Country.tsx");
/* harmony import */ var _utils_errorMapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../utils/errorMapper */ "./src/utils/errorMapper.ts");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__);


var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\dasboard\\ProfileInformationEdit.tsx";













const defaultMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ProfileInformationEdit = ({
  profInfoProps: {
    profile: {
      first_name,
      last_name,
      birthday,
      bio,
      country,
      social
    }
  },
  setEditMode
}) => {
  var _social$facebook, _social$twitter, _social$instagram, _social$youtube;

  const bgColor = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorModeValue"])('white', '#202020');
  const [updateProfile, {
    loading
  }] = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_5__["useUpdateProfileMutation"])();
  const {
    register,
    handleSubmit,
    errors,
    setError
  } = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])();

  const onSumbit = async values => {
    try {
      const {
        data
      } = await updateProfile({
        variables: {
          data: values
        },
        update: (cache, {
          data
        }) => {
          cache.writeQuery({
            query: _generated_graphql__WEBPACK_IMPORTED_MODULE_5__["MeDocument"],
            data: {
              __typename: 'Query',
              me: data === null || data === void 0 ? void 0 : data.updateProfile
            }
          });
        }
      });

      if (data === null || data === void 0 ? void 0 : data.updateProfile) {
        setEditMode(false);
      }
    } catch (err) {
      Object(_utils_errorMapper__WEBPACK_IMPORTED_MODULE_11__["default"])(err, setError);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: "8px",
      px: "6px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
        px: "16px",
        children: "Profile Information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: () => setEditMode(false),
        rightIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 17
        }, undefined),
        colorScheme: "purple",
        variant: "ghost",
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
        mb: "16px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        onSubmit: handleSubmit(onSumbit),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["VStack"], {
          pl: "32px",
          spacing: "10px",
          py: "20px",
          align: "flex-start",
          w: "60%",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
            spacing: 2,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
              error: errors.first_name,
              input: "first_name",
              name: "First name",
              placeholder: "Enter first name",
              register: register,
              type: "text",
              forDashboard: true,
              defaultValue: first_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
              error: errors.last_name,
              input: "last_name",
              name: "Last name",
              placeholder: "Enter last name",
              register: register,
              type: "text",
              forDashboard: true,
              defaultValue: last_name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
            error: errors.bio,
            input: "bio",
            name: "Bio",
            as: react_textarea_autosize__WEBPACK_IMPORTED_MODULE_7___default.a,
            resize: "none",
            overflow: "hidden",
            py: "8px",
            minH: "72px",
            placeholder: "Type your bio",
            register: register,
            type: "text",
            forDashboard: true,
            defaultValue: bio !== null && bio !== void 0 ? bio : ''
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              justify: "space-between",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
                as: "p",
                fontWeight: "semibold",
                htmlFor: "month",
                children: "Date of Birth"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 165,
                columnNumber: 9
              }, undefined), (errors.year || errors.month || errors.day) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
                hasArrow: true,
                bg: "red.500",
                label: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["List"], {
                  spacing: 3,
                  children: [errors.year && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListIcon"], {
                      as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["WarningIcon"],
                      color: "red.700"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 176,
                      columnNumber: 15
                    }, undefined), errors.year.message]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 175,
                    columnNumber: 14
                  }, undefined), errors.month && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListIcon"], {
                      as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["WarningIcon"],
                      color: "red.700"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 182,
                      columnNumber: 15
                    }, undefined), errors.month.message]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 181,
                    columnNumber: 14
                  }, undefined), errors.day && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListItem"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["ListIcon"], {
                      as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["WarningIcon"],
                      color: "red.700"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 188,
                      columnNumber: 15
                    }, undefined), errors.day.message]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 187,
                    columnNumber: 14
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 173,
                  columnNumber: 12
                }, undefined),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["WarningIcon"], {
                  mx: "14px",
                  color: "red.500",
                  fontSize: "20px",
                  bg: bgColor,
                  rounded: "100px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 195,
                  columnNumber: 11
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 169,
                columnNumber: 10
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
              w: "full",
              spacing: "6px",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Select"], {
                w: "50%",
                size: "lg",
                placeholder: "Month",
                name: "month",
                id: "month",
                ref: register,
                isInvalid: !!errors.month,
                focusBorderColor: "purple.500",
                defaultValue: defaultMonths[parseInt(birthday.split('-')[1]) - 1],
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_utils_BirthdayDateOptions__WEBPACK_IMPORTED_MODULE_9__["Months"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 219,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 206,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["HStack"], {
                w: "50%",
                spacing: "6px",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Select"], {
                  size: "lg",
                  placeholder: "Day",
                  name: "day",
                  id: "day",
                  ref: register,
                  isInvalid: !!errors.day,
                  focusBorderColor: "purple.500",
                  defaultValue: parseInt(birthday.split('-')[2]),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_utils_BirthdayDateOptions__WEBPACK_IMPORTED_MODULE_9__["Days"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 232,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 222,
                  columnNumber: 10
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Select"], {
                  size: "lg",
                  placeholder: "Year",
                  name: "year",
                  id: "year",
                  ref: register,
                  isInvalid: !!errors.year,
                  focusBorderColor: "purple.500",
                  defaultValue: parseInt(birthday.split('-')[0]),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_utils_BirthdayDateOptions__WEBPACK_IMPORTED_MODULE_9__["Years"], {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 244,
                    columnNumber: 11
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 234,
                  columnNumber: 10
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 221,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 163,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
              as: "p",
              fontWeight: "semibold",
              htmlFor: "country",
              children: "Country"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 250,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Select"], {
              size: "lg",
              placeholder: "Country",
              name: "country",
              id: "country",
              ref: register,
              isInvalid: !!errors.country,
              focusBorderColor: "purple.500",
              defaultValue: country !== null && country !== void 0 ? country : '',
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Country__WEBPACK_IMPORTED_MODULE_10__["Country"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 9
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 253,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["VStack"], {
            spacing: "10px",
            w: "full",
            align: "flex-start",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
              as: "p",
              fontWeight: "semibold",
              children: "Social"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 267,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              align: "center",
              w: "full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaFacebookSquare"],
                boxSize: "40px",
                color: "#3b5999",
                mr: "10px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 271,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
                input: "social.facebook",
                name: "",
                placeholder: "Enter your facebook information",
                register: register,
                type: "text",
                forDashboard: true,
                defaultValue: (_social$facebook = social === null || social === void 0 ? void 0 : social.facebook) !== null && _social$facebook !== void 0 ? _social$facebook : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 277,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 270,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              align: "center",
              w: "full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaTwitterSquare"],
                boxSize: "40px",
                color: "#55acee",
                mr: "10px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 288,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
                input: "social.twitter",
                name: "",
                placeholder: "Enter your twitter information",
                register: register,
                type: "text",
                forDashboard: true,
                defaultValue: (_social$twitter = social === null || social === void 0 ? void 0 : social.twitter) !== null && _social$twitter !== void 0 ? _social$twitter : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 294,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 287,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              align: "center",
              w: "full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Square"], {
                boxSize: "40px",
                mr: "10px",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["chakra"].img, {
                  boxSize: "35.5px",
                  src: "/instagram.svg",
                  alt: "Instagram Logo"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 10
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 305,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
                input: "social.instagram",
                name: "",
                placeholder: "Enter your instagram information",
                register: register,
                type: "text",
                forDashboard: true,
                defaultValue: (_social$instagram = social === null || social === void 0 ? void 0 : social.instagram) !== null && _social$instagram !== void 0 ? _social$instagram : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 312,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 304,
              columnNumber: 8
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
              align: "center",
              w: "full",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Icon"], {
                as: react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaYoutubeSquare"],
                boxSize: "40px",
                color: "#cd201f",
                mr: "10px"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 323,
                columnNumber: 9
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_custom_inputs_MainInputUI__WEBPACK_IMPORTED_MODULE_6__["default"], {
                input: "social.youtube",
                name: "",
                placeholder: "Enter your youtube information",
                register: register,
                type: "text",
                forDashboard: true,
                defaultValue: (_social$youtube = social === null || social === void 0 ? void 0 : social.youtube) !== null && _social$youtube !== void 0 ? _social$youtube : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 329,
                columnNumber: 9
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 322,
              columnNumber: 8
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 266,
            columnNumber: 7
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
            type: "submit",
            isLoading: loading,
            children: "Update Profile"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 7
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/generated/graphql.tsx":
/*!***********************************!*\
  !*** ./src/generated/graphql.tsx ***!
  \***********************************/
/*! exports provided: CommentResponseFragmentDoc, QuizzesResponseFragmentDoc, ResultResponseFragmentDoc, UserResponseFragmentDoc, CheckAnswerDocument, useCheckAnswerMutation, CreateCommentDocument, useCreateCommentMutation, CreateQuizDocument, useCreateQuizMutation, DeleteQuizDocument, useDeleteQuizMutation, LoginDocument, useLoginMutation, LogoutDocument, useLogoutMutation, RegisterDocument, useRegisterMutation, ToggleLikeDocument, useToggleLikeMutation, UpdateAccountDocument, useUpdateAccountMutation, UpdateProfileDocument, useUpdateProfileMutation, UpdateQuizDocument, useUpdateQuizMutation, CommentsDocument, useCommentsQuery, useCommentsLazyQuery, MeDocument, useMeQuery, useMeLazyQuery, MeQuizzesDocument, useMeQuizzesQuery, useMeQuizzesLazyQuery, QuestionsDocument, useQuestionsQuery, useQuestionsLazyQuery, QuizToUpdateDocument, useQuizToUpdateQuery, useQuizToUpdateLazyQuery, QuizzesDocument, useQuizzesQuery, useQuizzesLazyQuery, SingleQuizDocument, useSingleQuizQuery, useSingleQuizLazyQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentResponseFragmentDoc", function() { return CommentResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzesResponseFragmentDoc", function() { return QuizzesResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultResponseFragmentDoc", function() { return ResultResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResponseFragmentDoc", function() { return UserResponseFragmentDoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckAnswerDocument", function() { return CheckAnswerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCheckAnswerMutation", function() { return useCheckAnswerMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCommentDocument", function() { return CreateCommentDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateCommentMutation", function() { return useCreateCommentMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateQuizDocument", function() { return CreateQuizDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateQuizMutation", function() { return useCreateQuizMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteQuizDocument", function() { return DeleteQuizDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDeleteQuizMutation", function() { return useDeleteQuizMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginDocument", function() { return LoginDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLoginMutation", function() { return useLoginMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutDocument", function() { return LogoutDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLogoutMutation", function() { return useLogoutMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDocument", function() { return RegisterDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRegisterMutation", function() { return useRegisterMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleLikeDocument", function() { return ToggleLikeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useToggleLikeMutation", function() { return useToggleLikeMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAccountDocument", function() { return UpdateAccountDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateAccountMutation", function() { return useUpdateAccountMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileDocument", function() { return UpdateProfileDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateProfileMutation", function() { return useUpdateProfileMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuizDocument", function() { return UpdateQuizDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUpdateQuizMutation", function() { return useUpdateQuizMutation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsDocument", function() { return CommentsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCommentsQuery", function() { return useCommentsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCommentsLazyQuery", function() { return useCommentsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeDocument", function() { return MeDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuery", function() { return useMeQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeLazyQuery", function() { return useMeLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeQuizzesDocument", function() { return MeQuizzesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuizzesQuery", function() { return useMeQuizzesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMeQuizzesLazyQuery", function() { return useMeQuizzesLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsDocument", function() { return QuestionsDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuestionsQuery", function() { return useQuestionsQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuestionsLazyQuery", function() { return useQuestionsLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizToUpdateDocument", function() { return QuizToUpdateDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuizToUpdateQuery", function() { return useQuizToUpdateQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuizToUpdateLazyQuery", function() { return useQuizToUpdateLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizzesDocument", function() { return QuizzesDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuizzesQuery", function() { return useQuizzesQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useQuizzesLazyQuery", function() { return useQuizzesLazyQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleQuizDocument", function() { return SingleQuizDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSingleQuizQuery", function() { return useSingleQuizQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSingleQuizLazyQuery", function() { return useSingleQuizLazyQuery; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);


const CommentResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment CommentResponse on Comment {
  id
  author {
    id
    username
    email
    avatar
    profile {
      name
    }
  }
  text
  created_at
}
    `;
const QuizzesResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment QuizzesResponse on Quiz {
  id
  title
  description
  quiz_photo
  created_at
  likes {
    quiz_id
    author_id
  }
  author {
    id
    username
    email
    avatar
    profile {
      name
    }
  }
  isLiked
  likesCount
  commentsCount
  takersCount
  questionsCount
}
    `;
const ResultResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment ResultResponse on Result {
  id
  taker {
    username
    avatar
    email
    profile {
      name
    }
  }
  score
  current_total_questions
  answered_at
}
    `;
const UserResponseFragmentDoc = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    fragment UserResponse on User {
  id
  username
  email
  avatar
  cover_photo
  created_at
  updated_at
  profile {
    id
    first_name
    last_name
    birthday
    gender
    name
    country
    bio
    social
  }
}
    `;
const CheckAnswerDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CheckAnswer($data: ChecksAnswerInput!) {
  checkAnswer(data: $data) {
    ...ResultResponse
  }
}
    ${ResultResponseFragmentDoc}`;

/**
 * __useCheckAnswerMutation__
 *
 * To run a mutation, you first call `useCheckAnswerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCheckAnswerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [checkAnswerMutation, { data, loading, error }] = useCheckAnswerMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
function useCheckAnswerMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CheckAnswerDocument, baseOptions);
}
const CreateCommentDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateComment($text: String!, $quiz_id: Float!) {
  createComment(text: $text, quiz_id: $quiz_id) {
    id
    author {
      id
      username
      email
      avatar
    }
    text
    created_at
  }
}
    `;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      text: // value for 'text'
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
function useCreateCommentMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateCommentDocument, baseOptions);
}
const CreateQuizDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation CreateQuiz($title: String!, $description: String!, $quiz_photo: String, $questions: [QuestionInput!]!) {
  createQuiz(
    data: {title: $title, description: $description, quiz_photo: $quiz_photo, questions: $questions}
  ) {
    title
    description
    quiz_photo
    questions {
      question_id
      question
      question_photo
      choices
      answer
      explanation
      with_explanation
      hint
      with_hint
    }
  }
}
    `;

/**
 * __useCreateQuizMutation__
 *
 * To run a mutation, you first call `useCreateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createQuizMutation, { data, loading, error }] = useCreateQuizMutation({
 *   variables: {
 *      title: // value for 'title'
 *      description: // value for 'description'
 *      quiz_photo: // value for 'quiz_photo'
 *      questions: // value for 'questions'
 *   },
 * });
 */
function useCreateQuizMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](CreateQuizDocument, baseOptions);
}
const DeleteQuizDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation DeleteQuiz($quiz_id: Int!) {
  deleteQuiz(quiz_id: $quiz_id)
}
    `;

/**
 * __useDeleteQuizMutation__
 *
 * To run a mutation, you first call `useDeleteQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteQuizMutation, { data, loading, error }] = useDeleteQuizMutation({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
function useDeleteQuizMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](DeleteQuizDocument, baseOptions);
}
const LoginDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Login($emailOrUsername: String!, $password: String!) {
  login(data: {emailOrUsername: $emailOrUsername, password: $password}) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      emailOrUsername: // value for 'emailOrUsername'
 *      password: // value for 'password'
 *   },
 * });
 */
function useLoginMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](LoginDocument, baseOptions);
}
const LogoutDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Logout {
  logout
}
    `;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
function useLogoutMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](LogoutDocument, baseOptions);
}
const RegisterDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation Register($username: String!, $email: String!, $password: String!, $confirm_password: String!, $first_name: String!, $last_name: String!, $year: String!, $month: String!, $day: String!, $gender: String!) {
  register(
    data: {username: $username, email: $email, password: $password, confirm_password: $confirm_password, first_name: $first_name, last_name: $last_name, year: $year, month: $month, day: $day, gender: $gender}
  ) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirm_password: // value for 'confirm_password'
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      year: // value for 'year'
 *      month: // value for 'month'
 *      day: // value for 'day'
 *      gender: // value for 'gender'
 *   },
 * });
 */
function useRegisterMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](RegisterDocument, baseOptions);
}
const ToggleLikeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation ToggleLike($quiz_id: Float!) {
  toggleLike(quiz_id: $quiz_id)
}
    `;

/**
 * __useToggleLikeMutation__
 *
 * To run a mutation, you first call `useToggleLikeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleLikeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleLikeMutation, { data, loading, error }] = useToggleLikeMutation({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
function useToggleLikeMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](ToggleLikeDocument, baseOptions);
}
const UpdateAccountDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateAccount($data: UpdateAccountInput!) {
  updateAccount(data: $data) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

/**
 * __useUpdateAccountMutation__
 *
 * To run a mutation, you first call `useUpdateAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAccountMutation, { data, loading, error }] = useUpdateAccountMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
function useUpdateAccountMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateAccountDocument, baseOptions);
}
const UpdateProfileDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateProfile($data: UpdateProfileInput!) {
  updateProfile(data: $data) {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
function useUpdateProfileMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateProfileDocument, baseOptions);
}
const UpdateQuizDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    mutation UpdateQuiz($inputs: QuizInput!, $quiz_id: Float!) {
  updateQuiz(inputs: $inputs, quiz_id: $quiz_id) {
    title
    description
    quiz_photo
    questions {
      question_id
      question
      question_photo
      choices
      answer
      explanation
      with_explanation
      hint
      with_hint
    }
  }
}
    `;

/**
 * __useUpdateQuizMutation__
 *
 * To run a mutation, you first call `useUpdateQuizMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateQuizMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateQuizMutation, { data, loading, error }] = useUpdateQuizMutation({
 *   variables: {
 *      inputs: // value for 'inputs'
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */
function useUpdateQuizMutation(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useMutation"](UpdateQuizDocument, baseOptions);
}
const CommentsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Comments($limit: Int!, $cursor: String, $quiz_id: Int!) {
  comments(limit: $limit, cursor: $cursor, quiz_id: $quiz_id) {
    hasMore
    comments {
      ...CommentResponse
    }
  }
}
    ${CommentResponseFragmentDoc}`;
/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */

function useCommentsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](CommentsDocument, baseOptions);
}
function useCommentsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](CommentsDocument, baseOptions);
}
const MeDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Me {
  me {
    ...UserResponse
  }
}
    ${UserResponseFragmentDoc}`;
/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */

function useMeQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MeDocument, baseOptions);
}
function useMeLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MeDocument, baseOptions);
}
const MeQuizzesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query MeQuizzes($limit: Int!, $cursor: String) {
  meQuizzes(limit: $limit, cursor: $cursor) {
    meHasMore
    meQuizzes {
      ...QuizzesResponse
    }
  }
}
    ${QuizzesResponseFragmentDoc}`;
/**
 * __useMeQuizzesQuery__
 *
 * To run a query within a React component, call `useMeQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuizzesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useMeQuizzesQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](MeQuizzesDocument, baseOptions);
}
function useMeQuizzesLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](MeQuizzesDocument, baseOptions);
}
const QuestionsDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Questions($quiz_id: Int!, $withAnswer: Boolean!) {
  questions(quiz_id: $quiz_id) {
    question_id
    question
    question_photo
    choices
    hint
    with_hint
    answer @include(if: $withAnswer)
  }
}
    `;
/**
 * __useQuestionsQuery__
 *
 * To run a query within a React component, call `useQuestionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuestionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuestionsQuery({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *      withAnswer: // value for 'withAnswer'
 *   },
 * });
 */

function useQuestionsQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](QuestionsDocument, baseOptions);
}
function useQuestionsLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](QuestionsDocument, baseOptions);
}
const QuizToUpdateDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query QuizToUpdate($quiz_id: Int!) {
  quizToUpdate(quiz_id: $quiz_id) {
    title
    description
    quiz_photo
    questions {
      question_id
      question
      question_photo
      choices
      answer
      explanation
      with_explanation
      hint
      with_hint
    }
  }
}
    `;
/**
 * __useQuizToUpdateQuery__
 *
 * To run a query within a React component, call `useQuizToUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizToUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizToUpdateQuery({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */

function useQuizToUpdateQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](QuizToUpdateDocument, baseOptions);
}
function useQuizToUpdateLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](QuizToUpdateDocument, baseOptions);
}
const QuizzesDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query Quizzes($limit: Int!, $cursor: String) {
  quizzes(limit: $limit, cursor: $cursor) {
    hasMore
    quizzes {
      ...QuizzesResponse
    }
  }
}
    ${QuizzesResponseFragmentDoc}`;
/**
 * __useQuizzesQuery__
 *
 * To run a query within a React component, call `useQuizzesQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuizzesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuizzesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */

function useQuizzesQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](QuizzesDocument, baseOptions);
}
function useQuizzesLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](QuizzesDocument, baseOptions);
}
const SingleQuizDocument = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
    query SingleQuiz($quiz_id: Int!) {
  singleQuiz(quiz_id: $quiz_id) {
    id
    quiz_photo
    title
    description
    author {
      id
      username
      avatar
      email
      profile {
        name
      }
    }
    isLiked
    likesCount
    commentsCount
    created_at
    questionsCount
    takersCount
    isTaken
  }
}
    `;
/**
 * __useSingleQuizQuery__
 *
 * To run a query within a React component, call `useSingleQuizQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleQuizQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleQuizQuery({
 *   variables: {
 *      quiz_id: // value for 'quiz_id'
 *   },
 * });
 */

function useSingleQuizQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useQuery"](SingleQuizDocument, baseOptions);
}
function useSingleQuizLazyQuery(baseOptions) {
  return _apollo_client__WEBPACK_IMPORTED_MODULE_0__["useLazyQuery"](SingleQuizDocument, baseOptions);
}

/***/ }),

/***/ "./src/layouts/DashboardContainer.tsx":
/*!********************************************!*\
  !*** ./src/layouts/DashboardContainer.tsx ***!
  \********************************************/
/*! exports provided: DashboardContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardContainer", function() { return DashboardContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ "react-icons/io5");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dist/client/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\layouts\\DashboardContainer.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const MainNavLink = ({
  href,
  icon,
  children
}) => {
  const {
    pathname
  } = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  const [,, path] = href.split('/');
  const active = pathname.includes(path);
  const linkColor = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])('purple.500', 'gray.100');
  const bgColor = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])('purple.50', 'rgba(255, 255, 255, 0.04)');
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: href,
    passHref: true,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Flex"], {
      as: "a",
      align: "center",
      fontSize: "md",
      fontWeight: active ? 'semibold' : '',
      transitionProperty: "colors",
      transitionDuration: "200ms",
      color: active ? linkColor : 'gray.500',
      _hover: {
        color: linkColor,
        bg: bgColor
      },
      fontFamily: "inter",
      bg: active ? bgColor : '',
      px: "6px",
      py: "8px",
      rounded: "8px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Center"], {
        mr: "3",
        fontSize: "24px",
        children: icon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5
      }, undefined), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 3
  }, undefined);
};

const mainNavLinks = [{
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_3__["AiOutlineUser"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 9
  }, undefined),
  href: '/dashboard/profile',
  label: 'Profile'
}, {
  icon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoDocumentsOutline"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, undefined),
  href: '/dashboard/published',
  label: 'Published'
}];
const DashboardContainer = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    templateColumns: "repeat(12, 1fr)",
    gap: 2,
    px: "64px",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colSpan: 3,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["List"], {
        spacing: "2",
        styleType: "none",
        py: "32px",
        pl: "12px",
        pr: "32px",
        children: mainNavLinks.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(MainNavLink, {
            icon: item.icon,
            href: item.href,
            children: item.label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 8
          }, undefined)
        }, item.label, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 7
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], _objectSpread(_objectSpread({
      colSpan: 9,
      px: "5px"
    }, props), {}, {
      children: children
    }), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/layouts/MainContainer.tsx":
/*!***************************************!*\
  !*** ./src/layouts/MainContainer.tsx ***!
  \***************************************/
/*! exports provided: MainContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainContainer", function() { return MainContainer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cloudinary-react */ "cloudinary-react");
/* harmony import */ var cloudinary_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.tsx");

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\layouts\\MainContainer.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const MainContainer = (_ref) => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  const {
    colorMode
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  const bgColor = {
    light: 'white',
    dark: '#181818'
  };
  const color = {
    light: 'black',
    dark: 'white'
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(cloudinary_react__WEBPACK_IMPORTED_MODULE_2__["CloudinaryContext"], {
    cloudName: "mjcarnaje",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      direction: "column",
      bg: bgColor[colorMode],
      color: color[colorMode],
      minHeight: "100vh",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_3__["NavBar"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], _objectSpread(_objectSpread({
        px: ['10px', '16px', '24px']
      }, props), {}, {
        children: children
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 3
  }, undefined);
};

/***/ }),

/***/ "./src/pages/dashboard/profile.tsx":
/*!*****************************************!*\
  !*** ./src/pages/dashboard/profile.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_dasboard_AccountInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/dasboard/AccountInformation */ "./src/components/dasboard/AccountInformation.tsx");
/* harmony import */ var _components_dasboard_ProfileInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/dasboard/ProfileInformation */ "./src/components/dasboard/ProfileInformation.tsx");
/* harmony import */ var _layouts_DashboardContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/DashboardContainer */ "./src/layouts/DashboardContainer.tsx");
/* harmony import */ var _layouts_MainContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/MainContainer */ "./src/layouts/MainContainer.tsx");
/* harmony import */ var _utils_withApollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/withApollo */ "./src/utils/withApollo.ts");

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\pages\\dashboard\\profile.tsx";








const Profile = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_MainContainer__WEBPACK_IMPORTED_MODULE_6__["MainContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_DashboardContainer__WEBPACK_IMPORTED_MODULE_5__["DashboardContainer"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        templateColumns: "repeat(10, 1fr)",
        my: "32px",
        boxShadow: "md",
        borderRadius: "8px",
        borderWidth: "1px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dasboard_AccountInformation__WEBPACK_IMPORTED_MODULE_3__["AccountInformation"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 5
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
        templateColumns: "repeat(10, 1fr)",
        my: "32px",
        boxShadow: "md",
        borderRadius: "8px",
        borderWidth: "1px",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dasboard_ProfileInformation__WEBPACK_IMPORTED_MODULE_4__["ProfileInformation"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withApollo__WEBPACK_IMPORTED_MODULE_7__["withApollo"])({
  ssr: true
})(Profile));

/***/ }),

/***/ "./src/utils/BirthdayDateOptions.tsx":
/*!*******************************************!*\
  !*** ./src/utils/BirthdayDateOptions.tsx ***!
  \*******************************************/
/*! exports provided: Days, Months, Years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Days", function() { return Days; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Months", function() { return Months; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Years", function() { return Years; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\utils\\BirthdayDateOptions.tsx";
const Days = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1",
      children: "1"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2",
      children: "2"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "3",
      children: "3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "4",
      children: "4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "5",
      children: "5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "6",
      children: "6"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "7",
      children: "7"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "8",
      children: "8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "9",
      children: "9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "10",
      children: "10"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "11",
      children: "11"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "12",
      children: "12"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "13",
      children: "13"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "14",
      children: "14"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "15",
      children: "15"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "16",
      children: "16"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "17",
      children: "17"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "18",
      children: "18"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "19",
      children: "19"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "20",
      children: "20"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "21",
      children: "21"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "22",
      children: "22"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "23",
      children: "23"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "24",
      children: "24"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "25",
      children: "25"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "26",
      children: "26"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "27",
      children: "27"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "28",
      children: "28"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "29",
      children: "29"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "30",
      children: "30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "31",
      children: "31"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};
const Months = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Jan",
      children: "Jan"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Feb",
      children: "Feb"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Mar",
      children: "Mar"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Apr",
      children: "Apr"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "May",
      children: "May"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Jun",
      children: "Jun"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Jul",
      children: "Jul"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Aug",
      children: "Aug"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Sep",
      children: "Sep"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Oct",
      children: "Oct"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Nov",
      children: "Nov"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "Dec",
      children: "Dec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};
const Years = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2020",
      children: "2020"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2019",
      children: "2019"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2018",
      children: "2018"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2017",
      children: "2017"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2016",
      children: "2016"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2015",
      children: "2015"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2014",
      children: "2014"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2013",
      children: "2013"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2012",
      children: "2012"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2011",
      children: "2011"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2010",
      children: "2010"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2009",
      children: "2009"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2008",
      children: "2008"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2007",
      children: "2007"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2006",
      children: "2006"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2005",
      children: "2005"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2004",
      children: "2004"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2003",
      children: "2003"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2002",
      children: "2002"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2001",
      children: "2001"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "2000",
      children: "2000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1999",
      children: "1999"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1998",
      children: "1998"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1997",
      children: "1997"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1996",
      children: "1996"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1995",
      children: "1995"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1994",
      children: "1994"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1993",
      children: "1993"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1992",
      children: "1992"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1991",
      children: "1991"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1990",
      children: "1990"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1989",
      children: "1989"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1988",
      children: "1988"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1987",
      children: "1987"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1986",
      children: "1986"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1985",
      children: "1985"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1984",
      children: "1984"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1983",
      children: "1983"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1982",
      children: "1982"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1981",
      children: "1981"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1980",
      children: "1980"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1979",
      children: "1979"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1978",
      children: "1978"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1977",
      children: "1977"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1976",
      children: "1976"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1975",
      children: "1975"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1974",
      children: "1974"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1973",
      children: "1973"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1972",
      children: "1972"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1971",
      children: "1971"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1970",
      children: "1970"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1969",
      children: "1969"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1968",
      children: "1968"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1967",
      children: "1967"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1966",
      children: "1966"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1965",
      children: "1965"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1964",
      children: "1964"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1963",
      children: "1963"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1962",
      children: "1962"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1961",
      children: "1961"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1960",
      children: "1960"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1959",
      children: "1959"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1958",
      children: "1958"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1957",
      children: "1957"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1956",
      children: "1956"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1955",
      children: "1955"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1954",
      children: "1954"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1953",
      children: "1953"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1952",
      children: "1952"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1951",
      children: "1951"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1950",
      children: "1950"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1949",
      children: "1949"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1948",
      children: "1948"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1947",
      children: "1947"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1946",
      children: "1946"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1945",
      children: "1945"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1944",
      children: "1944"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1943",
      children: "1943"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1942",
      children: "1942"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1941",
      children: "1941"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1940",
      children: "1940"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1939",
      children: "1939"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1938",
      children: "1938"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1937",
      children: "1937"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1936",
      children: "1936"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1935",
      children: "1935"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1934",
      children: "1934"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1933",
      children: "1933"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1932",
      children: "1932"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1931",
      children: "1931"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1930",
      children: "1930"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1929",
      children: "1929"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1928",
      children: "1928"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1927",
      children: "1927"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1926",
      children: "1926"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1925",
      children: "1925"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1924",
      children: "1924"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1923",
      children: "1923"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1922",
      children: "1922"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1921",
      children: "1921"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1920",
      children: "1920"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1919",
      children: "1919"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1918",
      children: "1918"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1917",
      children: "1917"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1916",
      children: "1916"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1915",
      children: "1915"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1914",
      children: "1914"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1913",
      children: "1913"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1912",
      children: "1912"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1911",
      children: "1911"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1910",
      children: "1910"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1909",
      children: "1909"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1908",
      children: "1908"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1907",
      children: "1907"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1906",
      children: "1906"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1905",
      children: "1905"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1904",
      children: "1904"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1903",
      children: "1903"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1902",
      children: "1902"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1901",
      children: "1901"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 4
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
      value: "1900",
      children: "1900"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 4
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./src/utils/createWithApollo.js":
/*!***************************************!*\
  !*** ./src/utils/createWithApollo.js ***!
  \***************************************/
/*! exports provided: initOnContext, createWithApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initOnContext", function() { return initOnContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWithApollo", function() { return createWithApollo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\utils\\createWithApollo.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // On the client, we store the Apollo Client in the following variable.
// This prevents the client from reinitializing between page transitions.

let globalApolloClient = null;
/**
 * Installs the Apollo Client on NextPageContext
 * or NextAppContext. Useful if you want to use apolloClient
 * inside getStaticProps, getStaticPaths or getServerSideProps
 * @param {NextPageContext | NextAppContext} ctx
 */

const initOnContext = (ac, ctx) => {
  const inAppContext = Boolean(ctx.ctx); // We consider installing `withApollo({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.

  if (true) {
    if (inAppContext) {
      console.warn('Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n' + 'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n');
    }
  } // Initialize ApolloClient if not already done


  const apolloClient = ctx.apolloClient || initApolloClient(ac, ctx.apolloState || {}, inAppContext ? ctx.ctx : ctx); // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.

  apolloClient.toJSON = () => null; // Add apolloClient to NextPageContext & NextAppContext.
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.


  ctx.apolloClient = apolloClient;

  if (inAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};
/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 * @param  {NormalizedCacheObject} initialState
 * @param  {NextPageContext} ctx
 */

const initApolloClient = (apolloClient, initialState, ctx) => {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (true) {
    return createApolloClient(apolloClient(ctx), initialState, ctx);
  } // Reuse client on the client-side


  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(apolloClient(ctx), initialState, ctx);
  }

  return globalApolloClient;
};
/**
 * Creates a withApollo HOC
 * that provides the apolloContext
 * to a next.js Page or AppTree.
 * @param  {Object} withApolloOptions
 * @param  {Boolean} [withApolloOptions.ssr=false]
 * @returns {(PageComponent: ReactNode) => ReactNode}
 */


const createWithApollo = ac => {
  return ({
    ssr = false
  } = {}) => PageComponent => {
    const WithApollo = (_ref) => {
      let {
        apolloClient,
        apolloState
      } = _ref,
          pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

      let client;

      if (apolloClient) {
        // Happens on: getDataFromTree & next.js ssr
        client = apolloClient;
      } else {
        // Happens on: next.js csr
        client = initApolloClient(ac, apolloState, undefined);
      }

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_apollo_client__WEBPACK_IMPORTED_MODULE_4__["ApolloProvider"], {
        client: client,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PageComponent, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 6
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 5
      }, undefined);
    }; // Set the correct displayName in development


    if (true) {
      const displayName = PageComponent.displayName || PageComponent.name || 'Component';
      WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
      WithApollo.getInitialProps = async ctx => {
        const inAppContext = Boolean(ctx.ctx);
        const {
          apolloClient
        } = initOnContext(ac, ctx); // Run wrapped getInitialProps methods

        let pageProps = {};

        if (PageComponent.getInitialProps) {
          pageProps = await PageComponent.getInitialProps(ctx);
        } else if (inAppContext) {
          pageProps = await next_app__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);
        } // Only on the server:


        if (true) {
          const {
            AppTree
          } = ctx; // When redirecting, the response is finished.
          // No point in continuing to render

          if (ctx.res && ctx.res.finished) {
            return pageProps;
          } // Only if dataFromTree is enabled


          if (ssr && AppTree) {
            try {
              // Import `@apollo/react-ssr` dynamically.
              // We don't want to have this in our client bundle.
              const {
                getDataFromTree
              } = await Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! @apollo/client/react/ssr */ "@apollo/client/react/ssr", 7)); // Since AppComponents and PageComponents have different context types
              // we need to modify their props a little.

              let props;

              if (inAppContext) {
                props = _objectSpread(_objectSpread({}, pageProps), {}, {
                  apolloClient
                });
              } else {
                props = {
                  pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                    apolloClient
                  })
                };
              } // Take the Next.js AppTree, determine which queries are needed to render,
              // and fetch them. This method can be pretty slow since it renders
              // your entire AppTree once for every query. Check out apollo fragments
              // if you want to reduce the number of rerenders.
              // https://www.apollographql.com/docs/react/data/fragments/


              await getDataFromTree( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AppTree, _objectSpread({}, props), void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 156,
                columnNumber: 30
              }, undefined));
            } catch (error) {
              // Prevent Apollo Client GraphQL errors from crashing SSR.
              // Handle them in components via the data.error prop:
              // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
              console.error('Error while running `getDataFromTree`', error);
            } // getDataFromTree does not call componentWillUnmount
            // head side effect therefore need to be cleared manually


            next_head__WEBPACK_IMPORTED_MODULE_3___default.a.rewind();
          }
        }

        return _objectSpread(_objectSpread({}, pageProps), {}, {
          // Extract query data from the Apollo store
          apolloState: apolloClient.cache.extract(),
          // Provide the client for ssr. As soon as this payload
          // gets JSON.stringified it will remove itself.
          apolloClient: ctx.apolloClient
        });
      };
    }

    return WithApollo;
  };
};

function createApolloClient(apolloClient, initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  apolloClient.ssrMode = Boolean(ctx);
  apolloClient.cache.restore(initialState);
  return apolloClient;
}

/***/ }),

/***/ "./src/utils/errorMapper.ts":
/*!**********************************!*\
  !*** ./src/utils/errorMapper.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const toast = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__["createStandaloneToast"])();

const errorMapper = (err, setError) => {
  if (err.graphQLErrors[0].message.includes('Argument Validation Error')) {
    var _err$graphQLErrors$;

    (_err$graphQLErrors$ = err.graphQLErrors[0]) === null || _err$graphQLErrors$ === void 0 ? void 0 : _err$graphQLErrors$.extensions.exception.validationErrors.forEach(validationErr => {
      Object.values(validationErr.constraints).forEach(message => {
        return setError(validationErr.property, {
          type: 'server',
          message: message
        });
      });
    });
  } else {
    var _err$graphQLErrors$0$, _err$graphQLErrors, _err$graphQLErrors$2;

    return toast({
      title: 'An error occurred.',
      description: (_err$graphQLErrors$0$ = (_err$graphQLErrors = err.graphQLErrors) === null || _err$graphQLErrors === void 0 ? void 0 : (_err$graphQLErrors$2 = _err$graphQLErrors[0]) === null || _err$graphQLErrors$2 === void 0 ? void 0 : _err$graphQLErrors$2.message) !== null && _err$graphQLErrors$0$ !== void 0 ? _err$graphQLErrors$0$ : 'There is an error',
      status: 'error',
      isClosable: true,
      position: 'bottom-right'
    });
  }
};

/* harmony default export */ __webpack_exports__["default"] = (errorMapper);

/***/ }),

/***/ "./src/utils/isServer.ts":
/*!*******************************!*\
  !*** ./src/utils/isServer.ts ***!
  \*******************************/
/*! exports provided: isServer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
const isServer = () => true;

/***/ }),

/***/ "./src/utils/uploadImage.ts":
/*!**********************************!*\
  !*** ./src/utils/uploadImage.ts ***!
  \**********************************/
/*! exports provided: uploadCloudinaryImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadCloudinaryImage", function() { return uploadCloudinaryImage; });
const uploadCloudinaryImage = (callback, cropRatio = 16 / 9) => {
  var _window$cloudinary;

  (_window$cloudinary = window.cloudinary) === null || _window$cloudinary === void 0 ? void 0 : _window$cloudinary.openUploadWidget({
    cloudName: "mjcarnaje",
    uploadPreset: "rv5t7pdr",
    googleApiKey: "AIzaSyDVQeOIFYHCC7N-6zDelDsHGjCdxbITIh0",
    sources: ['local', 'url', 'image_search', 'camera'],
    defaultSource: 'local',
    cropping: true,
    maxImageFileSize: 1000000,
    multiple: false,
    showSkipCropButton: false,
    croppingAspectRatio: cropRatio,
    croppingShowDimensions: true
  }, callback);
};

/***/ }),

/***/ "./src/utils/withApollo.ts":
/*!*********************************!*\
  !*** ./src/utils/withApollo.ts ***!
  \*********************************/
/*! exports provided: withApollo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withApollo", function() { return withApollo; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _createWithApollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createWithApollo */ "./src/utils/createWithApollo.js");
/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isServer */ "./src/utils/isServer.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const createClient = ctx => {
  var _ctx$req;

  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
    uri: "http://localhost:4000/graphql",
    credentials: 'include',
    headers: {
      cookie: (Object(_isServer__WEBPACK_IMPORTED_MODULE_2__["isServer"])() ? ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : _ctx$req.headers.cookie : undefined) || ''
    },
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            quizzes: {
              keyArgs: [],

              merge(existing, incoming) {
                return _objectSpread(_objectSpread({}, incoming), {}, {
                  quizzes: [...((existing === null || existing === void 0 ? void 0 : existing.quizzes) || []), ...incoming.quizzes]
                });
              }

            },
            meQuizzes: {
              keyArgs: [],

              merge(existing, incoming) {
                return _objectSpread(_objectSpread({}, incoming), {}, {
                  meQuizzes: [...((existing === null || existing === void 0 ? void 0 : existing.meQuizzes) || []), ...incoming.meQuizzes]
                });
              }

            },
            comments: {
              keyArgs: ['quiz_id'],

              merge(existing, incoming) {
                return _objectSpread(_objectSpread({}, incoming), {}, {
                  comments: [...((existing === null || existing === void 0 ? void 0 : existing.comments) || []), ...incoming.comments]
                });
              }

            }
          }
        }
      }
    }),
    connectToDevTools: true
  });
};

const withApollo = Object(_createWithApollo__WEBPACK_IMPORTED_MODULE_1__["createWithApollo"])(createClient);

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client/react/ssr");

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "cloudinary-react":
/*!***********************************!*\
  !*** external "cloudinary-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cloudinary-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io5");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-icons/ti":
/*!*********************************!*\
  !*** external "react-icons/ti" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ti");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-textarea-autosize":
/*!******************************************!*\
  !*** external "react-textarea-autosize" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-textarea-autosize");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ291bnRyeS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2gudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVXNlck1lbnUudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2N1c3RvbS1pbnB1dHMvTWFpbklucHV0VUkudHN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Rhc2JvYXJkL0FjY291bnRJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGFzYm9hcmQvQWNjb3VudEluZm9ybWF0aW9uRWRpdC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGFzYm9hcmQvUHJvZmlsZUluZm9ybWF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXNib2FyZC9Qcm9maWxlSW5mb3JtYXRpb25FZGl0LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VuZXJhdGVkL2dyYXBocWwudHN4Iiwid2VicGFjazovLy8uL3NyYy9sYXlvdXRzL0Rhc2hib2FyZENvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dHMvTWFpbkNvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQmlydGhkYXlEYXRlT3B0aW9ucy50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2NyZWF0ZVdpdGhBcG9sbG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL2Vycm9yTWFwcGVyLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9pc1NlcnZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXBsb2FkSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3dpdGhBcG9sbG8udHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGNoYWtyYS11aS9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsb3VkaW5hcnktcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvb2stZm9ybVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvNVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvdGlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXRleHRhcmVhLWF1dG9zaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiZ2xvYmFsIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJsb2FkZXJzIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImRldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImxvYWRlciIsInBhdGgiLCJkb21haW5zIiwicHJvY2VzcyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJhIiwibGF5b3V0Iiwid2lkdGhzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJsb2FkIiwicm9vdCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJnZXRXaWR0aHMiLCJsYXN0Iiwic3JjU2V0IiwiY2FsbExvYWRlciIsImkiLCJzaXplcyIsInNyYyIsInBhcnNlSW50IiwidW5vcHRpbWl6ZWQiLCJwcmlvcml0eSIsImFsbCIsInJlc3QiLCJ1bnNpemVkIiwiQm9vbGVhbiIsIkpTT04iLCJsb2FkaW5nIiwiaXNMYXp5Iiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid2lkdGhJbnQiLCJnZXRJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaW1nU3R5bGUiLCJ2aXNpYmlsaXR5IiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbnNvbGUiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJwcmVmZXRjaGVkIiwicm91dGVyIiwiZXJyIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJldmVudCIsInRhcmdldCIsImUiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJ3aW5kb3ciLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJPYmplY3QiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwiTGluayIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJNU19NQVhfSURMRV9ERUxBWSIsImVudHJ5IiwibWFwIiwiUHJvbWlzZSIsInByb20iLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJmdXR1cmUiLCJnZW5lcmF0b3IiLCJ2YWx1ZSIsImxpbmsiLCJjYW5QcmVmZXRjaCIsImhhc1ByZWZldGNoIiwicmVzIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsInNjcmlwdCIsInJlamVjdCIsIm1hcmtBc3NldEVycm9yIiwib25CdWlsZE1hbmlmZXN0IiwiaWRsZVRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwid2l0aEZ1dHVyZSIsIm9uRW50cnlwb2ludCIsImZuIiwiZXhwb3J0cyIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJpZCIsImVudHJpZXMiLCJjYWxsYmFjayIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IiLCJjcmVkZW50aWFscyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImRlbEJhc2VQYXRoIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwibWV0aG9kIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJ2YWxpZGF0ZSIsInBhcnNlZERlc3RpbmF0aW9uIiwiaGFkTG9jYWxlIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInN0ck9yQXJyYXkiLCJjb21waWxlTm9uUGF0aCIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsImZzUGF0aG5hbWUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5Iiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiY29tcG9uZW50RGlkQ2F0Y2giLCJyZW5kZXIiLCJjcmVhdGVVcmwiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsIndhcm5VcmwiLCJwdXNoVG8iLCJwdXNoUm91dGUiLCJwdXNoVXJsIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsIkNvdW50cnkiLCJEYXJrTW9kZVN3aXRjaCIsImNvbG9yTW9kZSIsInRvZ2dsZUNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZSIsImlzRGFyayIsIm91dGxpbmUiLCJOYXZCYXIiLCJ1c2VSb3V0ZXIiLCJiZ0NvbG9yIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJuYXZCYXJTaGFkb3ciLCJidXR0b25Db2xvclNjaGVtZSIsImxvZ29Db2xvciIsImxpbmtDb2xvckhvdmVyIiwidXNlTWVRdWVyeSIsInNraXAiLCJpc1NlcnZlciIsImJvZHkiLCJtZSIsImljb24iLCJjb2xvciIsIlVzZXJNZW51IiwiZW1haWwiLCJhdmF0YXIiLCJwcm9maWxlIiwiY29sb3JCb2R5IiwiY29sb3JUaXRsZSIsImxvZ291dCIsInVzZUxvZ291dE11dGF0aW9uIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvQ2xpZW50IiwiVlN0YWNrIiwidW5kZWZpbmVkIiwic3BsaXQiLCJjbGVhclN0b3JlIiwiTWFpbklucHV0VUkiLCJyZWdpc3RlciIsInR5cGUiLCJmb3JEYXNoYm9hcmQiLCJoZWxwZXJUZXh0IiwiZXJyb3JNZXNzYWdlIiwicGxhY2Vob2xkZXIiLCJkZWZhdWx0VmFsdWUiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiQWNjb3VudEluZm9ybWF0aW9uIiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsInVzZVN0YXRlIiwiY292ZXJQaG90b0JnIiwidXNlcm5hbWUiLCJjb3Zlcl9waG90byIsIkFjY291bnRJbmZvcm1hdGlvbkVkaXQiLCJhY2NJbmZvUHJvcHMiLCJjb3ZlclBob3RvIiwic2V0Q292ZXJQaG90byIsInByb2ZpbGVQaG90byIsInNldFByb2ZpbGVQaG90byIsInVwZGF0ZUFjY291bnQiLCJ1c2VVcGRhdGVBY2NvdW50TXV0YXRpb24iLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJzZXRFcnJvciIsInVzZUZvcm0iLCJvblN1bWJpdCIsInZhbHVlcyIsInZhcmlhYmxlcyIsInVwZGF0ZSIsImNhY2hlIiwid3JpdGVRdWVyeSIsIk1lRG9jdW1lbnQiLCJfX3R5cGVuYW1lIiwiZXJyb3JNYXBwZXIiLCJ1cGxvYWRDb3ZlclBob3RvIiwidXBsb2FkQ2xvdWRpbmFyeUltYWdlIiwicGhvdG9zIiwiaW5mbyIsInVwbG9hZFByb2ZpbGVQaG90byIsInVzZUVmZmVjdCIsInBhc3N3b3JkIiwiY29uZmlybV9wYXNzd29yZCIsIlByb2ZpbGVJbmZvcm1hdGlvbiIsImJpcnRoZGF5IiwiYmlvIiwiY291bnRyeSIsInNvY2lhbCIsIkZhRmFjZWJvb2tTcXVhcmUiLCJmYWNlYm9vayIsIkZhVHdpdHRlclNxdWFyZSIsInR3aXR0ZXIiLCJpbnN0YWdyYW0iLCJGYVlvdXR1YmVTcXVhcmUiLCJ5b3V0dWJlIiwiZGVmYXVsdE1vbnRocyIsIlByb2ZpbGVJbmZvcm1hdGlvbkVkaXQiLCJwcm9mSW5mb1Byb3BzIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInVwZGF0ZVByb2ZpbGUiLCJ1c2VVcGRhdGVQcm9maWxlTXV0YXRpb24iLCJUZXh0YXJlYUF1dG9zaXplIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiV2FybmluZ0ljb24iLCJDb21tZW50UmVzcG9uc2VGcmFnbWVudERvYyIsImdxbCIsIlF1aXp6ZXNSZXNwb25zZUZyYWdtZW50RG9jIiwiUmVzdWx0UmVzcG9uc2VGcmFnbWVudERvYyIsIlVzZXJSZXNwb25zZUZyYWdtZW50RG9jIiwiQ2hlY2tBbnN3ZXJEb2N1bWVudCIsInVzZUNoZWNrQW5zd2VyTXV0YXRpb24iLCJiYXNlT3B0aW9ucyIsIkFwb2xsbyIsIkNyZWF0ZUNvbW1lbnREb2N1bWVudCIsInVzZUNyZWF0ZUNvbW1lbnRNdXRhdGlvbiIsIkNyZWF0ZVF1aXpEb2N1bWVudCIsInVzZUNyZWF0ZVF1aXpNdXRhdGlvbiIsIkRlbGV0ZVF1aXpEb2N1bWVudCIsInVzZURlbGV0ZVF1aXpNdXRhdGlvbiIsIkxvZ2luRG9jdW1lbnQiLCJ1c2VMb2dpbk11dGF0aW9uIiwiTG9nb3V0RG9jdW1lbnQiLCJSZWdpc3RlckRvY3VtZW50IiwidXNlUmVnaXN0ZXJNdXRhdGlvbiIsIlRvZ2dsZUxpa2VEb2N1bWVudCIsInVzZVRvZ2dsZUxpa2VNdXRhdGlvbiIsIlVwZGF0ZUFjY291bnREb2N1bWVudCIsIlVwZGF0ZVByb2ZpbGVEb2N1bWVudCIsIlVwZGF0ZVF1aXpEb2N1bWVudCIsInVzZVVwZGF0ZVF1aXpNdXRhdGlvbiIsIkNvbW1lbnRzRG9jdW1lbnQiLCJ1c2VDb21tZW50c1F1ZXJ5IiwidXNlQ29tbWVudHNMYXp5UXVlcnkiLCJ1c2VNZUxhenlRdWVyeSIsIk1lUXVpenplc0RvY3VtZW50IiwidXNlTWVRdWl6emVzUXVlcnkiLCJ1c2VNZVF1aXp6ZXNMYXp5UXVlcnkiLCJRdWVzdGlvbnNEb2N1bWVudCIsInVzZVF1ZXN0aW9uc1F1ZXJ5IiwidXNlUXVlc3Rpb25zTGF6eVF1ZXJ5IiwiUXVpelRvVXBkYXRlRG9jdW1lbnQiLCJ1c2VRdWl6VG9VcGRhdGVRdWVyeSIsInVzZVF1aXpUb1VwZGF0ZUxhenlRdWVyeSIsIlF1aXp6ZXNEb2N1bWVudCIsInVzZVF1aXp6ZXNRdWVyeSIsInVzZVF1aXp6ZXNMYXp5UXVlcnkiLCJTaW5nbGVRdWl6RG9jdW1lbnQiLCJ1c2VTaW5nbGVRdWl6UXVlcnkiLCJ1c2VTaW5nbGVRdWl6TGF6eVF1ZXJ5IiwiTWFpbk5hdkxpbmsiLCJhY3RpdmUiLCJpbmNsdWRlcyIsImxpbmtDb2xvciIsImJnIiwibWFpbk5hdkxpbmtzIiwibGFiZWwiLCJEYXNoYm9hcmRDb250YWluZXIiLCJNYWluQ29udGFpbmVyIiwibGlnaHQiLCJkYXJrIiwiUHJvZmlsZSIsIndpdGhBcG9sbG8iLCJzc3IiLCJEYXlzIiwiTW9udGhzIiwiWWVhcnMiLCJnbG9iYWxBcG9sbG9DbGllbnQiLCJpbml0T25Db250ZXh0IiwiYWMiLCJpbkFwcENvbnRleHQiLCJ3YXJuIiwiaW5pdEFwb2xsb0NsaWVudCIsImFwb2xsb1N0YXRlIiwidG9KU09OIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiY3JlYXRlV2l0aEFwb2xsbyIsIlBhZ2VDb21wb25lbnQiLCJXaXRoQXBvbGxvIiwiY2xpZW50IiwiZGlzcGxheU5hbWUiLCJmaW5pc2hlZCIsImdldERhdGFGcm9tVHJlZSIsIkhlYWQiLCJyZXdpbmQiLCJleHRyYWN0Iiwic3NyTW9kZSIsInJlc3RvcmUiLCJ0b2FzdCIsImNyZWF0ZVN0YW5kYWxvbmVUb2FzdCIsImdyYXBoUUxFcnJvcnMiLCJleHRlbnNpb25zIiwiZXhjZXB0aW9uIiwidmFsaWRhdGlvbkVycm9ycyIsImZvckVhY2giLCJ2YWxpZGF0aW9uRXJyIiwiY29uc3RyYWludHMiLCJwcm9wZXJ0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJpc0Nsb3NhYmxlIiwiY3JvcFJhdGlvIiwiY2xvdWRpbmFyeSIsIm9wZW5VcGxvYWRXaWRnZXQiLCJjbG91ZE5hbWUiLCJ1cGxvYWRQcmVzZXQiLCJnb29nbGVBcGlLZXkiLCJzb3VyY2VzIiwiZGVmYXVsdFNvdXJjZSIsImNyb3BwaW5nIiwibWF4SW1hZ2VGaWxlU2l6ZSIsIm11bHRpcGxlIiwic2hvd1NraXBDcm9wQnV0dG9uIiwiY3JvcHBpbmdBc3BlY3RSYXRpbyIsImNyb3BwaW5nU2hvd0RpbWVuc2lvbnMiLCJjcmVhdGVDbGllbnQiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJoZWFkZXJzIiwiY29va2llIiwicmVxIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwicXVpenplcyIsImtleUFyZ3MiLCJtZXJnZSIsImV4aXN0aW5nIiwiaW5jb21pbmciLCJtZVF1aXp6ZXMiLCJjb21tZW50cyIsImNvbm5lY3RUb0RldlRvb2xzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJB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QUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkQsZUFtQkM7QUFBUSxXQUFLLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQkQsZUFvQkM7QUFBUSxXQUFLLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkQsZUFxQkM7QUFBUSxXQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkQsZUFzQkM7QUFBUSxXQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkQsZUF1QkM7QUFBUSxXQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkQsZUF3QkM7QUFBUSxXQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4QkQsZUF5QkM7QUFBUSxXQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkQsZUEwQkM7QUFBUSxXQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkQsZUEyQkM7QUFBUSxXQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkQsZUE0QkM7QUFBUSxXQUFLLEVBQUMsd0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUJELGVBNkJDO0FBQVEsV0FBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0JELGVBOEJDO0FBQVEsV0FBSyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUJELGVBK0JDO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0JELGVBZ0NDO0FBQVEsV0FBSyxFQUFDLGdDQUFkO0FB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O0FBQUE7QUFBQTtBQUFBLGlCQW5IRCxlQXNIQztBQUFRLFdBQUssRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRIRCxlQXVIQztBQUFRLFdBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZIRCxlQXdIQztBQUFRLFdBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhIRCxlQXlIQztBQUFRLFdBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpIRCxlQTBIQztBQUFRLFdBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFIRCxlQTJIQztBQUFRLFdBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNIRCxlQTRIQztBQUFRLFdBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVIRCxlQTZIQztBQUFRLFdBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdIRCxlQThIQztBQUFRLFdBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlIRCxlQStIQztBQUFRLFdBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9IRCxlQWdJQztBQUFRLFdBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhJRCxlQWlJQztBQUFRLFdBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpJRCxlQWtJQztBQUFRLFdBQUssRUFBQyx3Q0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsSUQsZUFxSUM7QUFBUSxXQUFLLEVBQUMsb0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcklELGVBc0lDO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdElELGVBdUlDO0FBQVEsV0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdklELGVBd0lDO0FBQVEsV0FBSyxFQUFDLGtDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhJRCxlQTJJQztBQUFRLFdBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNJRCxlQTRJQztBQUFRLFdBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVJRCxlQTZJQztBQUFRLFdBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdJRCxlQThJQztBQUFRLFdBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlJRCxlQStJQztBQUFRLFdBQUssRUFBQyx3QkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvSUQsZUFnSkM7QUFBUSxXQUFLLEVBQUMsZUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoSkQsZUFpSkM7QUFBUSxXQUFLLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqSkQsZUFrSkM7QUFBUSxXQUFLLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsSkQsZUFtSkM7QUFBUSxXQUFLLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuSkQsZUFvSkM7QUFBUSxXQUFLLEVBQUMsNENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBcEpELGVBdUpDO0FBQVEsV0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkpELGVBd0pDO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEpELGVBeUpDO0FBQVEsV0FBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBekpELGVBMEpDO0FBQVEsV0FBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUpELGVBMkpDO0FBQVEsV0FBSyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0pELGVBNEpDO0FBQVEsV0FBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUpELGVBNkpDO0FBQVEsV0FBSyxFQUFDLGtCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdKRCxlQThKQztBQUFRLFdBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlKRCxlQStKQztBQUFRLFdBQUssRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9KRCxlQWdLQztBQUFRLFdBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhLRCxlQWlLQztBQUFRLFdBQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpLRCxlQWtLQztBQUFRLFdBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxLRCxlQW1LQztBQUFRLFdBQUssRUFBQyxpQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuS0QsZUFzS0M7QUFBUSxXQUFLLEVBQUMsc0JBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdEtELGVBdUtDO0FBQVEsV0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdktELGVBd0tDO0FBQVEsV0FBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBeEtELGVBeUtDO0FBQVEsV0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBektELGVBMEtDO0FBQVEsV0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMUtELGVBMktDO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0tELGVBNEtDO0FBQVEsV0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNUtELGVBNktDO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN0tELGVBOEtDO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBOUtELGVBK0tDO0FBQVEsV0FBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBL0tELGVBZ0xDO0FBQVEsV0FBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBaExELGVBaUxDO0FBQVEsV0FBSyxFQUFDLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakxELGVBa0xDO0FBQVEsV0FBSyxFQUFDLHNCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxMRCxlQW1MQztBQUFRLFdBQUssRUFBQyxlQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5MRCxlQW9MQztBQUFRLFdBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBMRCxlQXFMQztBQUFRLFdBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJMRCxlQXNMQztBQUFRLFdBQUssRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFB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OENBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdk9ELGVBME9DO0FBQVEsV0FBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBMU9ELGVBMk9DO0FBQVEsV0FBSyxFQUFDLFdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM09ELGVBNE9DO0FBQVEsV0FBSyxFQUFDLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBNU9ELGVBNk9DO0FBQVEsV0FBSyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBN09ELGVBOE9DO0FBQVEsV0FBSyxFQUFDLHdCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlPRCxlQStPQztBQUFRLFdBQUssRUFBQyxXQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9PRCxlQWdQQztBQUFRLFdBQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhQRCxlQWlQQztBQUFRLFdBQUssRUFBQyxhQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpQRCxlQWtQQztBQUFRLFdBQUssRUFBQyxzQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsUEQsZUFtUEM7QUFBUSxXQUFLLEVBQUMsMkJBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBblBELGVBc1BDO0FBQVEsV0FBSyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdFBELGVBdVBDO0FBQVEsV0FBSyxFQUFDLDhCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZQRCxlQTBQQztBQUFRLFdBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFQRCxlQTJQQztBQUFRLFdBQUssRUFBQyxhQUFkO0FBQUE7QUFB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QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORCxlQU9DO0FBQVEsV0FBSyxFQUFDLEdBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEQsZUFRQztBQUFRLFdBQUssRUFBQyxHQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJELGVBU0M7QUFBUSxXQUFLLEVBQUMsR0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFURCxlQVVDO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVkQsZUFXQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhELGVBWUM7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRCxlQWFDO0FBQVEsV0FBSyxFQUFDLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkQsZUFjQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRELGVBZUM7QUFBUSxXQUFLLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFmRCxlQWdCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWhCRCxlQWlCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWpCRCxlQWtCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRCxlQW1CQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CRCxlQW9CQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXBCRCxlQXFCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRCxlQXNCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCRCxlQXVCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZCRCxlQXdCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXhCRCxlQXlCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXpCRCxlQTBCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRCxlQTJCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCRCxlQTRCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRCxlQTZCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTdCRCxlQThCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTlCRCxlQStCQztBQUFRLFdBQUssRUFBQyxJQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQS9CRDtBQUFBLGtCQUREO0FBbUNBLENBcENNO0FBc0NBLE1BQU1DLE1BQU0sR0FBRyxNQUFNO0FBQzNCLHNCQUNDO0FBQUEsNEJBQ0M7QUFBUSxXQUFLLEVBQUMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQVEsV0FBSyxFQUFDLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsZUFHQztBQUFRLFdBQUssRUFBQyxLQUFkO0FB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O0FBQUE7QUFBQSxpQkFuQkQsZUFvQkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQkQsZUFxQkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQkQsZUFzQkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0QkQsZUF1QkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2QkQsZUF3QkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4QkQsZUF5QkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkQsZUEwQkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQkQsZUEyQkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkQsZUE0QkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1QkQsZUE2QkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3QkQsZUE4QkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5QkQsZUErQkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQkQsZUFnQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQ0QsZUFpQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQ0QsZUFrQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQ0QsZUFtQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuQ0QsZUFvQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwQ0QsZUFxQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyQ0QsZUFzQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Q0QsZUF1Q0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2Q0QsZUF3Q0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4Q0QsZUF5Q0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6Q0QsZUEwQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExQ0QsZUEyQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQ0QsZUE0Q0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1Q0QsZUE2Q0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3Q0QsZUE4Q0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5Q0QsZUErQ0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvQ0QsZUFnREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoREQsZUFpREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqREQsZUFrREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsREQsZUFtREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuREQsZUFvREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwREQsZUFxREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyREQsZUFzREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0REQsZUF1REM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2REQsZUF3REM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4REQsZUF5REM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6REQsZUEwREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExREQsZUEyREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzREQsZUE0REM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1REQsZUE2REM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3REQsZUE4REM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5REQsZUErREM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvREQsZUFnRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoRUQsZUFpRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqRUQsZUFrRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsRUQsZUFtRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuRUQsZUFvRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwRUQsZUFxRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyRUQsZUFzRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0RUQsZUF1RUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2RUQsZUF3RUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4RUQsZUF5RUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6RUQsZUEwRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExRUQsZUEyRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzRUQsZUE0RUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1RUQsZUE2RUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3RUQsZUE4RUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5RUQsZUErRUM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvRUQsZUFnRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoRkQsZUFpRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqRkQsZUFrRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsRkQsZUFtRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuRkQsZUFvRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwRkQsZUFxRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyRkQsZUFzRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0RkQsZUF1RkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2RkQsZUF3RkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4RkQsZUF5RkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6RkQsZUEwRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExRkQsZUEyRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzRkQsZUE0RkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1RkQsZUE2RkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3RkQsZUE4RkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5RkQsZUErRkM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvRkQsZUFnR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoR0QsZUFpR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqR0QsZUFrR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsR0QsZUFtR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuR0QsZUFvR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwR0QsZUFxR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFyR0QsZUFzR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0R0QsZUF1R0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF2R0QsZUF3R0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF4R0QsZUF5R0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6R0QsZUEwR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkExR0QsZUEyR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzR0QsZUE0R0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE1R0QsZUE2R0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE3R0QsZUE4R0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkE5R0QsZUErR0M7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEvR0QsZUFnSEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoSEQsZUFpSEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqSEQsZUFrSEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsSEQsZUFtSEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFuSEQsZUFvSEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFwSEQsZUFxSEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFySEQsZUFzSEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0SEQsZUF1SEM7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFB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Ozs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Rhc2hib2FyZC9wcm9maWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvZGFzaGJvYXJkL3Byb2ZpbGVcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2Rhc2hib2FyZC9wcm9maWxlLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPExvYWRlclZhbHVlLCAocHJvcHM6IExvYWRlclByb3BzKSA9PiBzdHJpbmc+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyLCB3aWR0aCAqIDNdLm1hcChcbiAgICAgICAgKHcpID0+IGFsbFNpemVzLmZpbmQoKHApID0+IHAgPj0gdykgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgIClcbiAgICApLFxuICBdXG4gIHJldHVybiB7IHdpZHRocywga2luZDogJ3gnIH1cbn1cblxudHlwZSBDYWxsTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG5mdW5jdGlvbiBjYWxsTG9hZGVyKGxvYWRlclByb3BzOiBDYWxsTG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcilcbiAgaWYgKGxvYWQpIHtcbiAgICByZXR1cm4gbG9hZCh7IHJvb3Q6IGNvbmZpZ1BhdGgsIC4uLmxvYWRlclByb3BzIH0pXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtWQUxJRF9MT0FERVJTLmpvaW4oXG4gICAgICAnLCAnXG4gICAgKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gXG4gIClcbn1cblxudHlwZSBHZW5JbWdBdHRyc0RhdGEgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHVub3B0aW1pemVkOiBib29sZWFuXG4gIGxheW91dDogTGF5b3V0VmFsdWVcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0gUGljazxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc2l6ZXMnIHwgJ3NyY1NldCdcbj5cblxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7XG4gIHNyYyxcbiAgdW5vcHRpbWl6ZWQsXG4gIGxheW91dCxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG4gIHNpemVzLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMgfVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aHMsIGtpbmQgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0KVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICBjb25zdCBzcmNTZXQgPSB3aWR0aHNcbiAgICAubWFwKFxuICAgICAgKHcsIGkpID0+XG4gICAgICAgIGAke2NhbGxMb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgIGtpbmQgPT09ICd3JyA/IHcgOiBpICsgMVxuICAgICAgICB9JHtraW5kfWBcbiAgICApXG4gICAgLmpvaW4oJywgJylcblxuICBpZiAoIXNpemVzICYmIGtpbmQgPT09ICd3Jykge1xuICAgIHNpemVzID0gJzEwMHZ3J1xuICB9XG5cbiAgc3JjID0gY2FsbExvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHdpZHRoc1tsYXN0XSB9KVxuXG4gIHJldHVybiB7IHNyYywgc2l6ZXMsIHNyY1NldCB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgdmlzaWJpbGl0eTogaXNWaXNpYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbicsXG5cbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnYmxvY2snIH19XG4gICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgIGFyaWEtaGlkZGVuPXt0cnVlfVxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcbiAgICAgICAgICAgICAgc3JjPXtgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwke3RvQmFzZTY0KHNpemVyU3ZnKX1gfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG50eXBlIExvYWRlclByb3BzID0gQ2FsbExvYWRlclByb3BzICYgeyByb290OiBzdHJpbmcgfVxuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjXG59XG5cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCwgc3JjLCB3aWR0aCwgcXVhbGl0eSB9OiBMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QsIHNyYywgd2lkdGgsIHF1YWxpdHkgfTogTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXVxuXG4gICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJylcbiAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJylcblxuICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKFxuICAgICAgICAgICcsICdcbiAgICAgICAgKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgeyBzcmMsIHdpZHRoLCBxdWFsaXR5IH1cbiAgICAgICAgKX1gXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgIGxldCBwYXJzZWRTcmM6IFVSTFxuICAgICAgdHJ5IHtcbiAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpXG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBpZiAoIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgK1xuICAgICAgICAgICAgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgfVxufVxuXG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RJZGxlQ2FsbGJhY2tcbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKSB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG5mdW5jdGlvbiBpZGxlVGltZW91dDxUPihtczogbnVtYmVyLCBlcnI6IEVycm9yKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgoX3Jlc29sdmUsIHJlamVjdCkgPT5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KGVyciksIG1zKSlcbiAgKVxufVxuXG4vLyBUT0RPOiBzdG9wIGV4cG9ydGluZyBvciBjYWNoZSB0aGUgZmFpbHVyZVxuLy8gSXQnZCBiZSBiZXN0IHRvIHN0b3AgZXhwb3J0aW5nIHRoaXMuIEl0J3MgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsLiBXZSdyZVxuLy8gb25seSBleHBvcnRpbmcgaXQgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsdHkgd2l0aCB0aGUgYHBhZ2UtbG9hZGVyYC5cbi8vIE9ubHkgY2FjaGUgdGhpcyByZXNwb25zZSBhcyBhIGxhc3QgcmVzb3J0IGlmIHdlIGNhbm5vdCBlbGltaW5hdGUgYWxsIG90aGVyXG4vLyBjb2RlIGJyYW5jaGVzIHRoYXQgdXNlIHRoZSBCdWlsZCBNYW5pZmVzdCBDYWxsYmFjayBhbmQgcHVzaCB0aGVtIHRocm91Z2hcbi8vIHRoZSBSb3V0ZSBMb2FkZXIgaW50ZXJmYWNlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKTogUHJvbWlzZTxDbGllbnRCdWlsZE1hbmlmZXN0PiB7XG4gIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgfVxuXG4gIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuICByZXR1cm4gUHJvbWlzZS5yYWNlKFtcbiAgICBvbkJ1aWxkTWFuaWZlc3QsXG4gICAgaWRsZVRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gICAgKSxcbiAgXSlcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb20gPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZSkge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50ID0gYXdhaXQgUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgaWRsZVRpbWVvdXQ8Um91dGVMb2FkZXJFbnRyeT4oXG4gICAgICAgICAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgICAgY29uc3QgcmVzOiBSb3V0ZUxvYWRlckVudHJ5ID0gT2JqZWN0LmFzc2lnbjxcbiAgICAgICAgICAgIHsgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXSB9LFxuICAgICAgICAgICAgUm91dGVFbnRyeXBvaW50XG4gICAgICAgICAgPih7IHN0eWxlcyB9LCBlbnRyeXBvaW50KVxuICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiB7IGVycm9yOiBlcnIgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcHJlZmV0Y2gocm91dGUpIHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCByZXF1ZXN0SWRsZUNhbGxiYWNrIGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxuXG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCdcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbjxUIGV4dGVuZHMgRWxlbWVudD4oe1xuICByb290TWFyZ2luLFxuICBkaXNhYmxlZCxcbn06IFVzZUludGVyc2VjdGlvbik6IFsoZWxlbWVudDogVCB8IG51bGwpID0+IHZvaWQsIGJvb2xlYW5dIHtcbiAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlclxuXG4gIGNvbnN0IHVub2JzZXJ2ZSA9IHVzZVJlZjxGdW5jdGlvbj4oKVxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBzZXRSZWYgPSB1c2VDYWxsYmFjayhcbiAgICAoZWw6IFQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKVxuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZFxuICAgICAgfVxuXG4gICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm5cblxuICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKFxuICAgICAgICAgIGVsLFxuICAgICAgICAgIChpc1Zpc2libGUpID0+IGlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSksXG4gICAgICAgICAgeyByb290TWFyZ2luIH1cbiAgICAgICAgKVxuICAgICAgfVxuICAgIH0sXG4gICAgW2lzRGlzYWJsZWQsIHJvb3RNYXJnaW4sIHZpc2libGVdXG4gIClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgIGlmICghdmlzaWJsZSkgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgIH1cbiAgfSwgW3Zpc2libGVdKVxuXG4gIHJldHVybiBbc2V0UmVmLCB2aXNpYmxlXVxufVxuXG5mdW5jdGlvbiBvYnNlcnZlKFxuICBlbGVtZW50OiBFbGVtZW50LFxuICBjYWxsYmFjazogT2JzZXJ2ZUNhbGxiYWNrLFxuICBvcHRpb25zOiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbikge1xuICBjb25zdCB7IGlkLCBvYnNlcnZlciwgZWxlbWVudHMgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpXG4gIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjaylcblxuICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpXG4gIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpXG5cbiAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZClcbiAgICB9XG4gIH1cbn1cblxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcDxcbiAgc3RyaW5nLFxuICB7XG4gICAgaWQ6IHN0cmluZ1xuICAgIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICAgIGVsZW1lbnRzOiBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPlxuICB9XG4+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCkge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IgPSAnU1NHIERhdGEgTk9UX0ZPVU5EJ1xuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSByZWxvYWRpbmcgaW4gZGV2ZWxvcG1lbnQgZnJvbSBmYWxsYmFjayByZXR1cm5pbmcgMjAwXG4gICAgICAgIC8vIHRvIG9uLWRlbWFuZC1lbnRyeS1oYW5kbGVyIGNhdXNpbmcgaXQgdG8gcmVsb2FkIHBlcmlvZGljYWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aChsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lKVxuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aGUgbG9jYWxlIGlzbid0IGNvbmZpZ3VyZWQgaGFyZCBuYXZpZ2F0ZSB0byBzaG93IDQwNCBwYWdlXG4gICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChcbiAgICAgICAgICBhZGRMb2NhbGUoZGVsQmFzZVBhdGgocGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUpLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwge1xuICAgICAgICAgICAgICBwYXRobmFtZTogbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgICAgICBoYXNCYXNlUGF0aChyZXNvbHZlZEFzKSA/IGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgICAgICAgKS5wYXRobmFtZSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzLCBmYWxzZSlcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMsIHJvdXRlUHJvcHMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgaWYgKG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSkge1xuICAgICAgICBwYXRobmFtZSA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKHBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lXG4gICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcblxuICAgICAgICBsZXQgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGFzUGF0aClcbiAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGghKFxuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICApXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyh1cmwpLnRoZW4oKGlzU3NnOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHJldHVybiBpc1NzZ1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhc1BhdGgsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcGlsZU5vblBhdGgodmFsdWU6IHN0cmluZywgcGFyYW1zOiBQYXJhbXMpOiBzdHJpbmcge1xuICBpZiAoIXZhbHVlLmluY2x1ZGVzKCc6JykpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHBhcmFtcykpIHtcbiAgICBpZiAodmFsdWUuaW5jbHVkZXMoYDoke2tleX1gKSkge1xuICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXCpgLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX0FTVEVSSVNLU2BcbiAgICAgICAgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9XFxcXD9gLCAnZycpLFxuICAgICAgICAgIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1FVRVNUSU9OYFxuICAgICAgICApXG4gICAgICAgIC5yZXBsYWNlKG5ldyBSZWdFeHAoYDoke2tleX1cXFxcK2AsICdnJyksIGA6JHtrZXl9LS1FU0NBUEVEX1BBUkFNX1BMVVNgKVxuICAgICAgICAucmVwbGFjZShcbiAgICAgICAgICBuZXcgUmVnRXhwKGA6JHtrZXl9KD8hXFxcXHcpYCwgJ2cnKSxcbiAgICAgICAgICBgLS1FU0NBUEVEX1BBUkFNX0NPTE9OJHtrZXl9YFxuICAgICAgICApXG4gICAgfVxuICB9XG4gIHZhbHVlID0gdmFsdWVcbiAgICAucmVwbGFjZSgvKDp8XFwqfFxcP3xcXCt8XFwofFxcKXxcXHt8XFx9KS9nLCAnXFxcXCQxJylcbiAgICAucmVwbGFjZSgvLS1FU0NBUEVEX1BBUkFNX1BMVVMvZywgJysnKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQ09MT04vZywgJzonKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fUVVFU1RJT04vZywgJz8nKVxuICAgIC5yZXBsYWNlKC8tLUVTQ0FQRURfUEFSQU1fQVNURVJJU0tTL2csICcqJylcblxuICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgLy8gY29ycmVjdGx5XG4gIHJldHVybiBwYXRoVG9SZWdleHBcbiAgICAuY29tcGlsZShgLyR7dmFsdWV9YCwgeyB2YWxpZGF0ZTogZmFsc2UgfSkocGFyYW1zKVxuICAgIC5zdWJzdHIoMSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgY29uc3QgaGFkTG9jYWxlID0gcXVlcnkuX19uZXh0TG9jYWxlXG4gIGRlbGV0ZSBxdWVyeS5fX25leHRMb2NhbGVcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dERlZmF1bHRMb2NhbGVcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGNvbXBpbGVOb25QYXRoKHZhbHVlLCBwYXJhbXMpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgbGV0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICAvLyByZW1vdmUgaW50ZXJuYWwgcGFyYW0gZm9yIGkxOG5cbiAgaWYgKGhhZExvY2FsZSkge1xuICAgIHBhcmFtS2V5cyA9IHBhcmFtS2V5cy5maWx0ZXIoKG5hbWUpID0+IG5hbWUgIT09ICduZXh0SW50ZXJuYWxMb2NhbGUnKVxuICB9XG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBkZXN0aW5hdGlvbkNvbXBpbGVyKHBhcmFtcylcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIChwYXJzZWREZXN0aW5hdGlvbiBhcyBhbnkpLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgbm9ybWFsaXplTG9jYWxlUGF0aCB9IGZyb20gJy4uLy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmcsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMobm9ybWFsaXplTG9jYWxlUGF0aChhc1BhdGgsIGxvY2FsZXMpLnBhdGhuYW1lKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGNvbnN0IGZzUGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoKFxuICAgICAgICAgIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCksXG4gICAgICAgICAgbG9jYWxlc1xuICAgICAgICApLnBhdGhuYW1lXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKGZzUGF0aG5hbWUpKSB7XG4gICAgICAgICAgYXNQYXRoID0gZnNQYXRobmFtZVxuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoZnNQYXRobmFtZSlcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGFzUGF0aCA9IGZzUGF0aG5hbWVcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG4gIE5leHRXZWJWaXRhbHNNZXRyaWMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB7IE5leHRXZWJWaXRhbHNNZXRyaWMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgQ291bnRyeVByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgQ291bnRyeTogUmVhY3QuRkM8Q291bnRyeVByb3BzPiA9ICh7fSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdBZmdoYW5pc3Rhbic+QWZnaGFuaXN0YW48L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nw4VsYW5kIElzbGFuZHMnPsOFbGFuZCBJc2xhbmRzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0FsYmFuaWEnPkFsYmFuaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQWxnZXJpYSc+QWxnZXJpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdBbWVyaWNhbiBTYW1vYSc+QW1lcmljYW4gU2Ftb2E8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQW5kb3JyYSc+QW5kb3JyYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdBbmdvbGEnPkFuZ29sYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdBbmd1aWxsYSc+QW5ndWlsbGE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQW50YXJjdGljYSc+QW50YXJjdGljYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdBbnRpZ3VhIGFuZCBCYXJidWRhJz5BbnRpZ3VhIGFuZCBCYXJidWRhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0FyZ2VudGluYSc+QXJnZW50aW5hPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0FybWVuaWEnPkFybWVuaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXJ1YmEnPkFydWJhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0F1c3RyYWxpYSc+QXVzdHJhbGlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0F1c3RyaWEnPkF1c3RyaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQXplcmJhaWphbic+QXplcmJhaWphbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCYWhhbWFzJz5CYWhhbWFzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0JhaHJhaW4nPkJhaHJhaW48L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQmFuZ2xhZGVzaCc+QmFuZ2xhZGVzaDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCYXJiYWRvcyc+QmFyYmFkb3M8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQmVsYXJ1cyc+QmVsYXJ1czwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCZWxnaXVtJz5CZWxnaXVtPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0JlbGl6ZSc+QmVsaXplPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0JlbmluJz5CZW5pbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCZXJtdWRhJz5CZXJtdWRhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0JodXRhbic+Qmh1dGFuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0JvbGl2aWEnPkJvbGl2aWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYSc+Qm9zbmlhIGFuZCBIZXJ6ZWdvdmluYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCb3Rzd2FuYSc+Qm90c3dhbmE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQm91dmV0IElzbGFuZCc+Qm91dmV0IElzbGFuZDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCcmF6aWwnPkJyYXppbDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnknPlxyXG5cdFx0XHRcdEJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVxyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQnJ1bmVpIERhcnVzc2FsYW0nPkJydW5laSBEYXJ1c3NhbGFtPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0J1bGdhcmlhJz5CdWxnYXJpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCdXJraW5hIEZhc28nPkJ1cmtpbmEgRmFzbzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdCdXJ1bmRpJz5CdXJ1bmRpPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0NhbWJvZGlhJz5DYW1ib2RpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDYW1lcm9vbic+Q2FtZXJvb248L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ2FuYWRhJz5DYW5hZGE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ2FwZSBWZXJkZSc+Q2FwZSBWZXJkZTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDYXltYW4gSXNsYW5kcyc+Q2F5bWFuIElzbGFuZHM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljJz5DZW50cmFsIEFmcmljYW4gUmVwdWJsaWM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ2hhZCc+Q2hhZDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDaGlsZSc+Q2hpbGU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ2hpbmEnPkNoaW5hPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0NocmlzdG1hcyBJc2xhbmQnPkNocmlzdG1hcyBJc2xhbmQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ29jb3MgKEtlZWxpbmcpIElzbGFuZHMnPkNvY29zIChLZWVsaW5nKSBJc2xhbmRzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0NvbG9tYmlhJz5Db2xvbWJpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDb21vcm9zJz5Db21vcm9zPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0NvbmdvJz5Db25nbzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgVGhlJz5cclxuXHRcdFx0XHRDb25nbywgVGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgVGhlXHJcblx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDb29rIElzbGFuZHMnPkNvb2sgSXNsYW5kczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDb3N0YSBSaWNhJz5Db3N0YSBSaWNhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9XCJDb3RlIEQnaXZvaXJlXCI+Q290ZSBEJ2l2b2lyZTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdDcm9hdGlhJz5Dcm9hdGlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0N1YmEnPkN1YmE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ3lwcnVzJz5DeXBydXM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nQ3plY2ggUmVwdWJsaWMnPkN6ZWNoIFJlcHVibGljPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0Rlbm1hcmsnPkRlbm1hcms8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nRGppYm91dGknPkRqaWJvdXRpPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0RvbWluaWNhJz5Eb21pbmljYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdEb21pbmljYW4gUmVwdWJsaWMnPkRvbWluaWNhbiBSZXB1YmxpYzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdFY3VhZG9yJz5FY3VhZG9yPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0VneXB0Jz5FZ3lwdDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdFbCBTYWx2YWRvcic+RWwgU2FsdmFkb3I8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nRXF1YXRvcmlhbCBHdWluZWEnPkVxdWF0b3JpYWwgR3VpbmVhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0VyaXRyZWEnPkVyaXRyZWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nRXN0b25pYSc+RXN0b25pYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdFdGhpb3BpYSc+RXRoaW9waWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nRmFsa2xhbmQgSXNsYW5kcyAoTWFsdmluYXMpJz5cclxuXHRcdFx0XHRGYWxrbGFuZCBJc2xhbmRzIChNYWx2aW5hcylcclxuXHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0Zhcm9lIElzbGFuZHMnPkZhcm9lIElzbGFuZHM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nRmlqaSc+RmlqaTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdGaW5sYW5kJz5GaW5sYW5kPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0ZyYW5jZSc+RnJhbmNlPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0ZyZW5jaCBHdWlhbmEnPkZyZW5jaCBHdWlhbmE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nRnJlbmNoIFBvbHluZXNpYSc+RnJlbmNoIFBvbHluZXNpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdGcmVuY2ggU291dGhlcm4gVGVycml0b3JpZXMnPlxyXG5cdFx0XHRcdEZyZW5jaCBTb3V0aGVybiBUZXJyaXRvcmllc1xyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR2Fib24nPkdhYm9uPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0dhbWJpYSc+R2FtYmlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0dlb3JnaWEnPkdlb3JnaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR2VybWFueSc+R2VybWFueTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdHaGFuYSc+R2hhbmE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR2licmFsdGFyJz5HaWJyYWx0YXI8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR3JlZWNlJz5HcmVlY2U8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR3JlZW5sYW5kJz5HcmVlbmxhbmQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR3JlbmFkYSc+R3JlbmFkYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdHdWFkZWxvdXBlJz5HdWFkZWxvdXBlPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0d1YW0nPkd1YW08L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR3VhdGVtYWxhJz5HdWF0ZW1hbGE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR3Vlcm5zZXknPkd1ZXJuc2V5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0d1aW5lYSc+R3VpbmVhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0d1aW5lYS1iaXNzYXUnPkd1aW5lYS1iaXNzYXU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nR3V5YW5hJz5HdXlhbmE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nSGFpdGknPkhhaXRpPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0hlYXJkIElzbGFuZCBhbmQgTWNkb25hbGQgSXNsYW5kcyc+XHJcblx0XHRcdFx0SGVhcmQgSXNsYW5kIGFuZCBNY2RvbmFsZCBJc2xhbmRzXHJcblx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdIb2x5IFNlZSAoVmF0aWNhbiBDaXR5IFN0YXRlKSc+XHJcblx0XHRcdFx0SG9seSBTZWUgKFZhdGljYW4gQ2l0eSBTdGF0ZSlcclxuXHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0hvbmR1cmFzJz5Ib25kdXJhczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdIb25nIEtvbmcnPkhvbmcgS29uZzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdIdW5nYXJ5Jz5IdW5nYXJ5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0ljZWxhbmQnPkljZWxhbmQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nSW5kaWEnPkluZGlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0luZG9uZXNpYSc+SW5kb25lc2lhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0lyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2YnPlxyXG5cdFx0XHRcdElyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcclxuXHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0lyYXEnPklyYXE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nSXJlbGFuZCc+SXJlbGFuZDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdJc2xlIG9mIE1hbic+SXNsZSBvZiBNYW48L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nSXNyYWVsJz5Jc3JhZWw8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nSXRhbHknPkl0YWx5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0phbWFpY2EnPkphbWFpY2E8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nSmFwYW4nPkphcGFuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0plcnNleSc+SmVyc2V5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0pvcmRhbic+Sm9yZGFuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0themFraHN0YW4nPkthemFraHN0YW48L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nS2VueWEnPktlbnlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0tpcmliYXRpJz5LaXJpYmF0aTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPVwiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIj5cclxuXHRcdFx0XHRLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlxyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nS29yZWEsIFJlcHVibGljIG9mJz5Lb3JlYSwgUmVwdWJsaWMgb2Y8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nS3V3YWl0Jz5LdXdhaXQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nS3lyZ3l6c3Rhbic+S3lyZ3l6c3Rhbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPVwiTGFvIFBlb3BsZSdzIERlbW9jcmF0aWMgUmVwdWJsaWNcIj5cclxuXHRcdFx0XHRMYW8gUGVvcGxlJ3MgRGVtb2NyYXRpYyBSZXB1YmxpY1xyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTGF0dmlhJz5MYXR2aWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTGViYW5vbic+TGViYW5vbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdMZXNvdGhvJz5MZXNvdGhvPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0xpYmVyaWEnPkxpYmVyaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTGlieWFuIEFyYWIgSmFtYWhpcml5YSc+TGlieWFuIEFyYWIgSmFtYWhpcml5YTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdMaWVjaHRlbnN0ZWluJz5MaWVjaHRlbnN0ZWluPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0xpdGh1YW5pYSc+TGl0aHVhbmlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0x1eGVtYm91cmcnPkx1eGVtYm91cmc8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTWFjYW8nPk1hY2FvPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01hY2Vkb25pYSwgVGhlIEZvcm1lciBZdWdvc2xhdiBSZXB1YmxpYyBvZic+XHJcblx0XHRcdFx0TWFjZWRvbmlhLCBUaGUgRm9ybWVyIFl1Z29zbGF2IFJlcHVibGljIG9mXHJcblx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNYWRhZ2FzY2FyJz5NYWRhZ2FzY2FyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01hbGF3aSc+TWFsYXdpPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01hbGF5c2lhJz5NYWxheXNpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNYWxkaXZlcyc+TWFsZGl2ZXM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTWFsaSc+TWFsaTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNYWx0YSc+TWFsdGE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTWFyc2hhbGwgSXNsYW5kcyc+TWFyc2hhbGwgSXNsYW5kczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNYXJ0aW5pcXVlJz5NYXJ0aW5pcXVlPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01hdXJpdGFuaWEnPk1hdXJpdGFuaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTWF1cml0aXVzJz5NYXVyaXRpdXM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTWF5b3R0ZSc+TWF5b3R0ZTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNZXhpY28nPk1leGljbzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mJz5cclxuXHRcdFx0XHRNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXHJcblx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNb2xkb3ZhLCBSZXB1YmxpYyBvZic+TW9sZG92YSwgUmVwdWJsaWMgb2Y8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTW9uYWNvJz5Nb25hY288L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTW9uZ29saWEnPk1vbmdvbGlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01vbnRlbmVncm8nPk1vbnRlbmVncm88L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTW9udHNlcnJhdCc+TW9udHNlcnJhdDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdNb3JvY2NvJz5Nb3JvY2NvPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01vemFtYmlxdWUnPk1vemFtYmlxdWU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTXlhbm1hcic+TXlhbm1hcjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOYW1pYmlhJz5OYW1pYmlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J05hdXJ1Jz5OYXVydTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOZXBhbCc+TmVwYWw8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTmV0aGVybGFuZHMnPk5ldGhlcmxhbmRzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J05ldGhlcmxhbmRzIEFudGlsbGVzJz5OZXRoZXJsYW5kcyBBbnRpbGxlczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOZXcgQ2FsZWRvbmlhJz5OZXcgQ2FsZWRvbmlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J05ldyBaZWFsYW5kJz5OZXcgWmVhbGFuZDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOaWNhcmFndWEnPk5pY2FyYWd1YTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOaWdlcic+TmlnZXI8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nTmlnZXJpYSc+TmlnZXJpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOaXVlJz5OaXVlPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J05vcmZvbGsgSXNsYW5kJz5Ob3Jmb2xrIElzbGFuZDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOb3J0aGVybiBNYXJpYW5hIElzbGFuZHMnPk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdOb3J3YXknPk5vcndheTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdPbWFuJz5PbWFuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1Bha2lzdGFuJz5QYWtpc3Rhbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdQYWxhdSc+UGFsYXU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nUGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZCc+XHJcblx0XHRcdFx0UGFsZXN0aW5pYW4gVGVycml0b3J5LCBPY2N1cGllZFxyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nUGFuYW1hJz5QYW5hbWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nUGFwdWEgTmV3IEd1aW5lYSc+UGFwdWEgTmV3IEd1aW5lYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdQYXJhZ3VheSc+UGFyYWd1YXk8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nUGVydSc+UGVydTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdQaGlsaXBwaW5lcyc+UGhpbGlwcGluZXM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nUGl0Y2Fpcm4nPlBpdGNhaXJuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1BvbGFuZCc+UG9sYW5kPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1BvcnR1Z2FsJz5Qb3J0dWdhbDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdQdWVydG8gUmljbyc+UHVlcnRvIFJpY288L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nUWF0YXInPlFhdGFyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1JldW5pb24nPlJldW5pb248L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nUm9tYW5pYSc+Um9tYW5pYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdSdXNzaWFuIEZlZGVyYXRpb24nPlJ1c3NpYW4gRmVkZXJhdGlvbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdSd2FuZGEnPlJ3YW5kYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTYWludCBIZWxlbmEnPlNhaW50IEhlbGVuYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTYWludCBLaXR0cyBhbmQgTmV2aXMnPlNhaW50IEtpdHRzIGFuZCBOZXZpczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTYWludCBMdWNpYSc+U2FpbnQgTHVjaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvbic+XHJcblx0XHRcdFx0U2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblxyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU2FpbnQgVmluY2VudCBhbmQgVGhlIEdyZW5hZGluZXMnPlxyXG5cdFx0XHRcdFNhaW50IFZpbmNlbnQgYW5kIFRoZSBHcmVuYWRpbmVzXHJcblx0XHRcdDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTYW1vYSc+U2Ftb2E8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU2FuIE1hcmlubyc+U2FuIE1hcmlubzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTYW8gVG9tZSBhbmQgUHJpbmNpcGUnPlNhbyBUb21lIGFuZCBQcmluY2lwZTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTYXVkaSBBcmFiaWEnPlNhdWRpIEFyYWJpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTZW5lZ2FsJz5TZW5lZ2FsPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1NlcmJpYSc+U2VyYmlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1NleWNoZWxsZXMnPlNleWNoZWxsZXM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU2llcnJhIExlb25lJz5TaWVycmEgTGVvbmU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU2luZ2Fwb3JlJz5TaW5nYXBvcmU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU2xvdmFraWEnPlNsb3Zha2lhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1Nsb3ZlbmlhJz5TbG92ZW5pYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTb2xvbW9uIElzbGFuZHMnPlNvbG9tb24gSXNsYW5kczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTb21hbGlhJz5Tb21hbGlhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1NvdXRoIEFmcmljYSc+U291dGggQWZyaWNhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1NvdXRoIEdlb3JnaWEgYW5kIFRoZSBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzJz5cclxuXHRcdFx0XHRTb3V0aCBHZW9yZ2lhIGFuZCBUaGUgU291dGggU2FuZHdpY2ggSXNsYW5kc1xyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU3BhaW4nPlNwYWluPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1NyaSBMYW5rYSc+U3JpIExhbmthPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1N1ZGFuJz5TdWRhbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTdXJpbmFtZSc+U3VyaW5hbWU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU3ZhbGJhcmQgYW5kIEphbiBNYXllbic+U3ZhbGJhcmQgYW5kIEphbiBNYXllbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTd2F6aWxhbmQnPlN3YXppbGFuZDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTd2VkZW4nPlN3ZWRlbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdTd2l0emVybGFuZCc+U3dpdHplcmxhbmQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nU3lyaWFuIEFyYWIgUmVwdWJsaWMnPlN5cmlhbiBBcmFiIFJlcHVibGljPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1RhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmEnPlxyXG5cdFx0XHRcdFRhaXdhbiwgUHJvdmluY2Ugb2YgQ2hpbmFcclxuXHRcdFx0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1RhamlraXN0YW4nPlRhamlraXN0YW48L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZic+XHJcblx0XHRcdFx0VGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlxyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVGhhaWxhbmQnPlRoYWlsYW5kPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1RpbW9yLWxlc3RlJz5UaW1vci1sZXN0ZTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdUb2dvJz5Ub2dvPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1Rva2VsYXUnPlRva2VsYXU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVG9uZ2EnPlRvbmdhPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1RyaW5pZGFkIGFuZCBUb2JhZ28nPlRyaW5pZGFkIGFuZCBUb2JhZ288L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVHVuaXNpYSc+VHVuaXNpYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdUdXJrZXknPlR1cmtleTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdUdXJrbWVuaXN0YW4nPlR1cmttZW5pc3Rhbjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHMnPlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdUdXZhbHUnPlR1dmFsdTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdVZ2FuZGEnPlVnYW5kYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdVa3JhaW5lJz5Va3JhaW5lPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1VuaXRlZCBBcmFiIEVtaXJhdGVzJz5Vbml0ZWQgQXJhYiBFbWlyYXRlczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdVbml0ZWQgS2luZ2RvbSc+VW5pdGVkIEtpbmdkb208L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVW5pdGVkIFN0YXRlcyc+VW5pdGVkIFN0YXRlczwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHMnPlxyXG5cdFx0XHRcdFVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1xyXG5cdFx0XHQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVXJ1Z3VheSc+VXJ1Z3VheTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdVemJla2lzdGFuJz5VemJla2lzdGFuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1ZhbnVhdHUnPlZhbnVhdHU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVmVuZXp1ZWxhJz5WZW5lenVlbGE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nVmlldCBOYW0nPlZpZXQgTmFtPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1ZpcmdpbiBJc2xhbmRzLCBCcml0aXNoJz5WaXJnaW4gSXNsYW5kcywgQnJpdGlzaDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdWaXJnaW4gSXNsYW5kcywgVS5TLic+VmlyZ2luIElzbGFuZHMsIFUuUy48L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nV2FsbGlzIGFuZCBGdXR1bmEnPldhbGxpcyBhbmQgRnV0dW5hPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1dlc3Rlcm4gU2FoYXJhJz5XZXN0ZXJuIFNhaGFyYTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSdZZW1lbic+WWVtZW48L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nWmFtYmlhJz5aYW1iaWE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nWmltYmFid2UnPlppbWJhYndlPC9vcHRpb24+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBNb29uSWNvbiwgU3VuSWNvbiB9IGZyb20gJ0BjaGFrcmEtdWkvaWNvbnMnO1xyXG5pbXBvcnQgeyB1c2VDb2xvck1vZGUsIEljb25CdXR0b24sIEljb25CdXR0b25Qcm9wcyB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERhcmtNb2RlU3dpdGNoOiBSZWFjdC5GQzxJY29uQnV0dG9uUHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcblx0Y29uc3QgeyBjb2xvck1vZGUsIHRvZ2dsZUNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKCk7XHJcblx0Y29uc3QgaXNEYXJrID0gY29sb3JNb2RlID09PSAnZGFyayc7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8SWNvbkJ1dHRvblxyXG5cdFx0XHRiZz0ndHJhbnNwYXJlbnQnXHJcblx0XHRcdF9mb2N1cz17eyBvdXRsaW5lOiAnbm9uZScgfX1cclxuXHRcdFx0aXNSb3VuZFxyXG5cdFx0XHRpY29uPXtpc0RhcmsgPyA8TW9vbkljb24gLz4gOiA8U3VuSWNvbiAvPn1cclxuXHRcdFx0b25DbGljaz17dG9nZ2xlQ29sb3JNb2RlfVxyXG5cdFx0XHR7Li4ucHJvcHN9XHJcblx0XHQvPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7XHJcblx0QnV0dG9uLFxyXG5cdEZsZXgsXHJcblx0SGVhZGluZyxcclxuXHRIU3RhY2ssXHJcblx0VGV4dCxcclxuXHR1c2VDb2xvck1vZGVWYWx1ZSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTWVRdWVyeSB9IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcclxuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuLi91dGlscy9pc1NlcnZlcic7XHJcbmltcG9ydCB7IERhcmtNb2RlU3dpdGNoIH0gZnJvbSAnLi9EYXJrTW9kZVN3aXRjaCc7XHJcbmltcG9ydCB7IFVzZXJNZW51IH0gZnJvbSAnLi9Vc2VyTWVudSc7XHJcblxyXG5leHBvcnQgY29uc3QgTmF2QmFyOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcblx0Y29uc3QgYmdDb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFxyXG5cdFx0J3JnYigyNTUsIDI1NSwgMjU1LCAuOTApJyxcclxuXHRcdCdyZ2IoMzIsIDMyLCAzMiwgLjkwKSdcclxuXHQpO1xyXG5cdGNvbnN0IG5hdkJhclNoYWRvdyA9IHVzZUNvbG9yTW9kZVZhbHVlKCd4cycsICdzbScpO1xyXG5cdGNvbnN0IGJ1dHRvbkNvbG9yU2NoZW1lID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZScsICdncmF5Jyk7XHJcblx0Y29uc3QgbG9nb0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZS41MDAnLCAncHVycGxlLjQwMCcpO1xyXG5cclxuXHRjb25zdCBsaW5rQ29sb3JIb3ZlciA9IHVzZUNvbG9yTW9kZVZhbHVlKCcjMDAwJywgJyNmZmYnKTtcclxuXHJcblx0Y29uc3QgeyBkYXRhIH0gPSB1c2VNZVF1ZXJ5KHsgc2tpcDogaXNTZXJ2ZXIoKSB9KTtcclxuXHJcblx0bGV0IGJvZHk7XHJcblxyXG5cdGlmICghZGF0YT8ubWUpIHtcclxuXHRcdGJvZHkgPSAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0PE5leHRMaW5rIGhyZWY9J2xvZ2luJz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdGNvbG9yU2NoZW1lPXtidXR0b25Db2xvclNjaGVtZX1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplPXsxNn1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0TG9naW5cclxuXHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdDwvTmV4dExpbms+XHJcblx0XHRcdFx0PE5leHRMaW5rIGhyZWY9J3JlZ2lzdGVyJz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdGNvbG9yU2NoZW1lPXtidXR0b25Db2xvclNjaGVtZX1cclxuXHRcdFx0XHRcdFx0dmFyaWFudD0nb3V0bGluZSdcclxuXHRcdFx0XHRcdFx0Zm9udFNpemU9ezE2fVxyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRTaWduIFVwXHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQ8L05leHRMaW5rPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGJvZHkgPSAoXHJcblx0XHRcdDw+XHJcblx0XHRcdFx0e1tcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogJy9xdWl6L2NyZWF0ZScsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdDcmVhdGUgUXVpeicsXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0eyBwYXRoOiAnL3VzZXJzJywgbmFtZTogJ1VzZXJzJywgaWNvbjogJ0ZhVXNlcnMnIH0sXHJcblx0XHRcdFx0XS5tYXAoKHsgcGF0aCwgbmFtZSB9LCBpKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gKFxyXG5cdFx0XHRcdFx0XHQ8TmV4dExpbmsgaHJlZj17cGF0aH0ga2V5PXtpfT5cclxuXHRcdFx0XHRcdFx0XHQ8VGV4dFxyXG5cdFx0XHRcdFx0XHRcdFx0X2hvdmVyPXt7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yOiByb3V0ZXIucGF0aG5hbWUgPT0gcGF0aCA/ICcnIDogbGlua0NvbG9ySG92ZXIsXHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdFx0cHg9JzEwcHgnXHJcblx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uPSdlYXNlLWluLW91dCdcclxuXHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb25EdXJhdGlvbj0nLjFzJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Y3Vyc29yPSdwb2ludGVyJ1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udFdlaWdodD17cm91dGVyLnBhdGhuYW1lID09IHBhdGggPyAnc2VtaWJvbGQnIDogJyd9XHJcblx0XHRcdFx0XHRcdFx0XHRjb2xvcj17cm91dGVyLnBhdGhuYW1lID09IHBhdGggPyBsb2dvQ29sb3IgOiAnJ31cclxuXHRcdFx0XHRcdFx0XHRcdGRpc3BsYXk9e1snbm9uZScsICdub25lJywgJ2lubGluZS1ibG9jayddfVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdHtuYW1lfVxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0PC9OZXh0TGluaz5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdFx0PFVzZXJNZW51IHsuLi5kYXRhLm1lfSAvPlxyXG5cdFx0XHQ8Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PEZsZXhcclxuXHRcdFx0anVzdGlmeT0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0dz0nZnVsbCdcclxuXHRcdFx0cHk9ezR9XHJcblx0XHRcdHB4PXtbMywgNiwgMTIsIDI0XX1cclxuXHRcdFx0Ymc9e2JnQ29sb3J9XHJcblx0XHRcdGJveFNoYWRvdz17bmF2QmFyU2hhZG93fVxyXG5cdFx0XHRwb3NpdGlvbj0nc3RpY2t5J1xyXG5cdFx0XHRsZWZ0PScwJ1xyXG5cdFx0XHRyaWdodD0nMCdcclxuXHRcdFx0dG9wPScwJ1xyXG5cdFx0XHR6SW5kZXg9JzInXHJcblx0XHQ+XHJcblx0XHRcdDxOZXh0TGluayBocmVmPScvJz5cclxuXHRcdFx0XHQ8SGVhZGluZ1xyXG5cdFx0XHRcdFx0YXM9J2gxJ1xyXG5cdFx0XHRcdFx0Zm9udFNpemU9ezI4fVxyXG5cdFx0XHRcdFx0Zm9udFdlaWdodD0nc20nXHJcblx0XHRcdFx0XHRmb250RmFtaWx5PSdiZXJrc2hpcmUnXHJcblx0XHRcdFx0XHRjb2xvcj17bG9nb0NvbG9yfVxyXG5cdFx0XHRcdFx0Y3Vyc29yPSdwb2ludGVyJ1xyXG5cdFx0XHRcdFx0bGluZUhlaWdodD0nMjJweCdcclxuXHRcdFx0XHRcdHBiPSc2cHgnXHJcblx0XHRcdFx0XHRteT0nYXV0bydcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRRdWl6U2hhcmVcclxuXHRcdFx0XHQ8L0hlYWRpbmc+XHJcblx0XHRcdDwvTmV4dExpbms+XHJcblx0XHRcdDxIU3RhY2sgc3BhY2luZz17Nn0+XHJcblx0XHRcdFx0PERhcmtNb2RlU3dpdGNoXHJcblx0XHRcdFx0XHRhcmlhLWxhYmVsPSdUb2dnbGUgY29sb3IgbW9kZSdcclxuXHRcdFx0XHRcdGRpc3BsYXk9e1snbm9uZScsICdub25lJywgJ2lubGluZS1ibG9jayddfVxyXG5cdFx0XHRcdC8+XHJcblx0XHRcdFx0e2JvZHl9XHJcblx0XHRcdDwvSFN0YWNrPlxyXG5cdFx0PC9GbGV4PlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZUFwb2xsb0NsaWVudCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgSGFtYnVyZ2VySWNvbiwgTW9vbkljb24sIFN1bkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcclxuaW1wb3J0IHtcclxuXHRBdmF0YXIsXHJcblx0TWVudSxcclxuXHRNZW51QnV0dG9uLFxyXG5cdE1lbnVEaXZpZGVyLFxyXG5cdE1lbnVJdGVtLFxyXG5cdE1lbnVMaXN0LFxyXG5cdFRleHQsXHJcblx0dXNlQ29sb3JNb2RlLFxyXG5cdHVzZUNvbG9yTW9kZVZhbHVlLFxyXG5cdFZTdGFjayxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVVc2VyIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5pbXBvcnQgeyBGaUxvZ091dCwgRmlVc2VycyB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHsgSW9Eb2N1bWVudHNPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81JztcclxuaW1wb3J0IHsgVGlEb2N1bWVudEFkZCB9IGZyb20gJ3JlYWN0LWljb25zL3RpJztcclxuaW1wb3J0IHsgdXNlTG9nb3V0TXV0YXRpb24sIFVzZXIgfSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlck1lbnU6IFJlYWN0LkZDPFVzZXI+ID0gKHtcclxuXHRlbWFpbCxcclxuXHRhdmF0YXIsXHJcblx0cHJvZmlsZTogeyBuYW1lIH0sXHJcbn0pID0+IHtcclxuXHRjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHRjb25zdCBpc0RhcmsgPSBjb2xvck1vZGUgPT09ICdkYXJrJztcclxuXHRjb25zdCBiZ0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoXHJcblx0XHQncmdiKDI1NSwgMjU1LCAyNTUsIC45MCknLFxyXG5cdFx0J3JnYigzMiwgMzIsIDMyLCAuOTApJ1xyXG5cdCk7XHJcblx0Y29uc3QgY29sb3JCb2R5ID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuNjAwJywgJyNCREJEQkQnKTtcclxuXHRjb25zdCBjb2xvclRpdGxlID0gdXNlQ29sb3JNb2RlVmFsdWUoJ2dyYXkuODAwJywgJ3doaXRlJyk7XHJcblxyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHRjb25zdCBbbG9nb3V0XSA9IHVzZUxvZ291dE11dGF0aW9uKCk7XHJcblxyXG5cdGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudCgpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1lbnU+XHJcblx0XHRcdDxNZW51QnV0dG9uPlxyXG5cdFx0XHRcdDxBdmF0YXJcclxuXHRcdFx0XHRcdHNpemU9J3NtJ1xyXG5cdFx0XHRcdFx0bmFtZT17bmFtZX1cclxuXHRcdFx0XHRcdHNyYz17YXZhdGFyIHx8ICcnfVxyXG5cdFx0XHRcdFx0ZGlzcGxheT17Wydub25lJywgJ25vbmUnLCAnaW5saW5lLWJsb2NrJ119XHJcblx0XHRcdFx0Lz5cclxuXHRcdFx0XHQ8SGFtYnVyZ2VySWNvblxyXG5cdFx0XHRcdFx0ZGlzcGxheT17WydpbmxpbmUtYmxvY2snLCAnaW5saW5lLWJsb2NrJywgJ25vbmUnXX1cclxuXHRcdFx0XHRcdHc9JzI1cHgnXHJcblx0XHRcdFx0XHRoPScyNXB4J1xyXG5cdFx0XHRcdC8+XHJcblx0XHRcdDwvTWVudUJ1dHRvbj5cclxuXHRcdFx0PE1lbnVMaXN0IGJnPXtiZ0NvbG9yfSBjb2xvcj17Y29sb3JCb2R5fSB3PScyMzJweCc+XHJcblx0XHRcdFx0PE1lbnVJdGVtIGFzPXtWU3RhY2t9IGN1cnNvcj0ncG9pbnRlcic+XHJcblx0XHRcdFx0XHQ8QXZhdGFyIHNpemU9J3hsJyBuYW1lPXtuYW1lfSBzcmM9e2F2YXRhciB8fCB1bmRlZmluZWR9IG09JzVweCcgLz5cclxuXHRcdFx0XHRcdDxUZXh0XHJcblx0XHRcdFx0XHRcdGZvbnRXZWlnaHQ9JzcwMCdcclxuXHRcdFx0XHRcdFx0Y29sb3I9e2NvbG9yVGl0bGV9XHJcblx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ9JzEnXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplPScxOHB4J1xyXG5cdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHR7bmFtZX1cclxuXHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdDxUZXh0XHJcblx0XHRcdFx0XHRcdGxpbmVIZWlnaHQ9JzE0cHgnXHJcblx0XHRcdFx0XHRcdGZvbnRTaXplPScxNXB4J1xyXG5cdFx0XHRcdFx0XHR3b3JkQnJlYWs9J2JyZWFrLWFsbCdcclxuXHRcdFx0XHRcdFx0dGV4dEFsaWduPSdjZW50ZXInXHJcblx0XHRcdFx0XHRcdHB4PSc4cHgnXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtgQCR7ZW1haWwuc3BsaXQoJ0AnKVswXX1gfVxyXG5cdFx0XHRcdFx0PC9UZXh0PlxyXG5cdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0PE1lbnVEaXZpZGVyIGRpc3BsYXk9e1snYmxvY2snLCAnYmxvY2snLCAnbm9uZSddfSAvPlxyXG5cdFx0XHRcdDxNZW51SXRlbVxyXG5cdFx0XHRcdFx0ZGlzcGxheT17WydpbmxpbmUtZmxleCcsICdpbmxpbmUtZmxleCcsICdub25lJ119XHJcblx0XHRcdFx0XHRpY29uPXtcclxuXHRcdFx0XHRcdFx0aXNEYXJrID8gKFxyXG5cdFx0XHRcdFx0XHRcdDxNb29uSWNvbiBmb250U2l6ZT0nMThweCcgY29sb3I9J2luaGVyaXQnIC8+XHJcblx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0PFN1bkljb24gZm9udFNpemU9JzE4cHgnIGNvbG9yPSdpbmhlcml0JyAvPlxyXG5cdFx0XHRcdFx0XHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb2xvck1vZGV9XHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0e2lzRGFyayA/ICdMaWdodCBtb2RlJyA6ICdEYXJrIG1vZGUnfVxyXG5cdFx0XHRcdDwvTWVudUl0ZW0+XHJcblx0XHRcdFx0e1tcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogJy9xdWl6L2NyZWF0ZScsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdDcmVhdGUgUXVpeicsXHJcblx0XHRcdFx0XHRcdGljb246IDxUaURvY3VtZW50QWRkIGZvbnRTaXplPScxOHB4JyBjb2xvcj0naW5oZXJpdCcgLz4sXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXRoOiAnL3VzZXJzJyxcclxuXHRcdFx0XHRcdFx0bmFtZTogJ1VzZXJzJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogPEZpVXNlcnMgZm9udFNpemU9JzE4cHgnIGNvbG9yPSdpbmhlcml0JyAvPixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XS5tYXAoKHsgcGF0aCwgbmFtZSwgaWNvbiB9LCBpKSA9PiAoXHJcblx0XHRcdFx0XHQ8TWVudUl0ZW1cclxuXHRcdFx0XHRcdFx0a2V5PXtpfVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChwYXRoKX1cclxuXHRcdFx0XHRcdFx0ZGlzcGxheT17WydpbmxpbmUtZmxleCcsICdpbmxpbmUtZmxleCcsICdub25lJ119XHJcblx0XHRcdFx0XHRcdGljb249e2ljb259XHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdHtuYW1lfVxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8TWVudURpdmlkZXIgLz5cclxuXHRcdFx0XHR7W1xyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRwYXRoOiAnL2Rhc2hib2FyZC9wdWJsaXNoZWQnLFxyXG5cdFx0XHRcdFx0XHRuYW1lOiAnUHVibGlzaGVkJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogPElvRG9jdW1lbnRzT3V0bGluZSBmb250U2l6ZT0nMThweCcgY29sb3I9J2luaGVyaXQnIC8+LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0cGF0aDogJy9kYXNoYm9hcmQvcHJvZmlsZScsXHJcblx0XHRcdFx0XHRcdG5hbWU6ICdQcm9maWxlJyxcclxuXHRcdFx0XHRcdFx0aWNvbjogPEFpT3V0bGluZVVzZXIgZm9udFNpemU9JzE4cHgnIGNvbG9yPSdpbmhlcml0JyAvPixcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XS5tYXAoKHsgcGF0aCwgbmFtZSwgaWNvbiB9LCBpKSA9PiAoXHJcblx0XHRcdFx0XHQ8TWVudUl0ZW0ga2V5PXtpfSBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChwYXRoKX0gaWNvbj17aWNvbn0+XHJcblx0XHRcdFx0XHRcdHtuYW1lfVxyXG5cdFx0XHRcdFx0PC9NZW51SXRlbT5cclxuXHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8TWVudURpdmlkZXIgLz5cclxuXHRcdFx0XHQ8TWVudUl0ZW1cclxuXHRcdFx0XHRcdGljb249ezxGaUxvZ091dCBmb250U2l6ZT0nMThweCcgY29sb3I9J2luaGVyaXQnIC8+fVxyXG5cdFx0XHRcdFx0b25DbGljaz17YXN5bmMgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRhd2FpdCBsb2dvdXQoKTtcclxuXHRcdFx0XHRcdFx0cm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG5cdFx0XHRcdFx0XHRhcG9sbG9DbGllbnQuY2xlYXJTdG9yZSgpO1xyXG5cdFx0XHRcdFx0fX1cclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRMb2dvdXRcclxuXHRcdFx0XHQ8L01lbnVJdGVtPlxyXG5cdFx0XHQ8L01lbnVMaXN0PlxyXG5cdFx0PC9NZW51PlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7IFdhcm5pbmdJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcbmltcG9ydCB7XHJcblx0Rm9ybUNvbnRyb2wsXHJcblx0Rm9ybUxhYmVsLFxyXG5cdElucHV0LFxyXG5cdElucHV0R3JvdXAsXHJcblx0SW5wdXRSaWdodEVsZW1lbnQsXHJcblx0VG9vbHRpcCxcclxuXHRGb3JtSGVscGVyVGV4dCxcclxuXHRGb3JtRXJyb3JNZXNzYWdlLFxyXG5cdElucHV0UHJvcHMsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZpZWxkRXJyb3IgfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5cclxudHlwZSBNYWluSW5wdXRVSVByb3BzID0ge1xyXG5cdGVycm9yPzogRmllbGRFcnJvciB8IHVuZGVmaW5lZDtcclxuXHRpbnB1dDogc3RyaW5nO1xyXG5cdG5hbWU6IHN0cmluZztcclxuXHRyZWdpc3RlcjogYW55O1xyXG5cdHR5cGU6IHN0cmluZztcclxuXHRmb3JEYXNoYm9hcmQ/OiBib29sZWFuO1xyXG5cdGhlbHBlclRleHQ/OiBzdHJpbmdbXTtcclxuXHRlcnJvck1lc3NhZ2U/OiBzdHJpbmc7XHJcblx0cGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcblx0ZGVmYXVsdFZhbHVlPzogc3RyaW5nO1xyXG59ICYgSW5wdXRQcm9wcztcclxuXHJcbmNvbnN0IE1haW5JbnB1dFVJOiBSZWFjdC5GQzxNYWluSW5wdXRVSVByb3BzPiA9ICh7XHJcblx0ZXJyb3IsXHJcblx0aW5wdXQsXHJcblx0bmFtZSxcclxuXHRyZWdpc3RlcixcclxuXHR0eXBlLFxyXG5cdGZvckRhc2hib2FyZCxcclxuXHRoZWxwZXJUZXh0LFxyXG5cdGVycm9yTWVzc2FnZSxcclxuXHRwbGFjZWhvbGRlcixcclxuXHRkZWZhdWx0VmFsdWUsXHJcblx0Li4ucHJvcHNcclxufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8Rm9ybUNvbnRyb2wgaWQ9e2lucHV0fSBpc0ludmFsaWQ9eyEhZXJyb3J9PlxyXG5cdFx0XHR7Zm9yRGFzaGJvYXJkID8gKFxyXG5cdFx0XHRcdDxGb3JtTGFiZWwgYXM9J3AnIGZvbnRXZWlnaHQ9J3NlbWlib2xkJz5cclxuXHRcdFx0XHRcdHtuYW1lfVxyXG5cdFx0XHRcdDwvRm9ybUxhYmVsPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDxGb3JtTGFiZWw+e25hbWV9PC9Gb3JtTGFiZWw+XHJcblx0XHRcdCl9XHJcblx0XHRcdDxJbnB1dEdyb3VwIHNpemU9J2xnJz5cclxuXHRcdFx0XHQ8SW5wdXRcclxuXHRcdFx0XHRcdG5hbWU9e2lucHV0fVxyXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyIHx8IG5hbWV9XHJcblx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0aXNJbnZhbGlkPXshIWVycm9yfVxyXG5cdFx0XHRcdFx0dHlwZT17dHlwZX1cclxuXHRcdFx0XHRcdGZvY3VzQm9yZGVyQ29sb3I9J3B1cnBsZS41MDAnXHJcblx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZSB8fCAnJ31cclxuXHRcdFx0XHRcdHsuLi5wcm9wc31cclxuXHRcdFx0XHQvPlxyXG5cdFx0XHRcdHtlcnJvciAmJiAoXHJcblx0XHRcdFx0XHQ8SW5wdXRSaWdodEVsZW1lbnQ+XHJcblx0XHRcdFx0XHRcdDxUb29sdGlwIGhhc0Fycm93IGxhYmVsPXtlcnJvcj8ubWVzc2FnZX0gYmc9J3JlZC41MDAnPlxyXG5cdFx0XHRcdFx0XHRcdDxXYXJuaW5nSWNvbiBjb2xvcj0ncmVkLjUwMCcgZm9udFNpemU9JzIwcHgnIC8+XHJcblx0XHRcdFx0XHRcdDwvVG9vbHRpcD5cclxuXHRcdFx0XHRcdDwvSW5wdXRSaWdodEVsZW1lbnQ+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9JbnB1dEdyb3VwPlxyXG5cdFx0XHR7aGVscGVyVGV4dD8ubWFwKCh0ZXh0LCBpKSA9PiAoXHJcblx0XHRcdFx0PEZvcm1IZWxwZXJUZXh0IGtleT17aX0+e3RleHR9PC9Gb3JtSGVscGVyVGV4dD5cclxuXHRcdFx0KSl9XHJcblx0XHRcdHtlcnJvciAmJiBlcnJvck1lc3NhZ2UgJiYgKFxyXG5cdFx0XHRcdDxGb3JtRXJyb3JNZXNzYWdlIG10PScwJz5cclxuXHRcdFx0XHRcdHtgJHtlcnJvck1lc3NhZ2VbMF0udG9VcHBlckNhc2UoKX0ke2Vycm9yTWVzc2FnZS5zbGljZSgxKX1gfVxyXG5cdFx0XHRcdDwvRm9ybUVycm9yTWVzc2FnZT5cclxuXHRcdFx0KX1cclxuXHRcdDwvRm9ybUNvbnRyb2w+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW5JbnB1dFVJO1xyXG4iLCJpbXBvcnQge1xyXG5cdEFzcGVjdFJhdGlvLFxyXG5cdEF2YXRhcixcclxuXHRCb3gsXHJcblx0QnV0dG9uLFxyXG5cdENlbnRlcixcclxuXHREaXZpZGVyLFxyXG5cdEdyaWRJdGVtLFxyXG5cdFNwaW5uZXIsXHJcblx0VGV4dCxcclxuXHR1c2VDb2xvck1vZGVWYWx1ZSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGaUVkaXQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCB7IE1kUGhvdG9TaXplU2VsZWN0QWN0dWFsIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5pbXBvcnQgeyB1c2VNZVF1ZXJ5IH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgeyBBY2NvdW50SW5mb3JtYXRpb25FZGl0IH0gZnJvbSAnLi9BY2NvdW50SW5mb3JtYXRpb25FZGl0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5cclxuaW50ZXJmYWNlIEFjY291bnRJbmZvcm1hdGlvblByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3VudEluZm9ybWF0aW9uOiBSZWFjdC5GQzxBY2NvdW50SW5mb3JtYXRpb25Qcm9wcz4gPSAoe30pID0+IHtcclxuXHRjb25zdCBbZWRpdE1vZGUsIHNldEVkaXRNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgY292ZXJQaG90b0JnID0gdXNlQ29sb3JNb2RlVmFsdWUoXHJcblx0XHQnZ3JheS41MCcsXHJcblx0XHQncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KSdcclxuXHQpO1xyXG5cclxuXHRjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1ZXJ5KCk7XHJcblxyXG5cdGlmICghZGF0YSAmJiBsb2FkaW5nKSB7XHJcblx0XHRyZXR1cm4gPFNwaW5uZXIgLz47XHJcblx0fVxyXG5cclxuXHRpZiAoIWRhdGEgJiYgIWxvYWRpbmcpIHtcclxuXHRcdHJldHVybiA8ZGl2PmVycm9yOiB7ZXJyb3I/Lm1lc3NhZ2V9PC9kaXY+O1xyXG5cdH1cclxuXHJcblx0aWYgKGVkaXRNb2RlKSB7XHJcblx0XHRyZXR1cm4gKFxyXG5cdFx0XHQ8QWNjb3VudEluZm9ybWF0aW9uRWRpdFxyXG5cdFx0XHRcdGFjY0luZm9Qcm9wcz17ZGF0YSEubWUhfVxyXG5cdFx0XHRcdHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX1cclxuXHRcdFx0Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB7XHJcblx0XHRlbWFpbCxcclxuXHRcdGF2YXRhcixcclxuXHRcdHVzZXJuYW1lLFxyXG5cdFx0Y292ZXJfcGhvdG8sXHJcblx0XHRwcm9maWxlOiB7IG5hbWUgfSxcclxuXHR9ID0gZGF0YSEubWUhO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0PEdyaWRJdGVtXHJcblx0XHRcdFx0Y29sU3Bhbj17MTB9XHJcblx0XHRcdFx0ZGlzcGxheT0nZmxleCdcclxuXHRcdFx0XHRqdXN0aWZ5Q29udGVudD0nc3BhY2UtYmV0d2VlbidcclxuXHRcdFx0XHRhbGlnbkl0ZW1zPSdjZW50ZXInXHJcblx0XHRcdFx0cHk9JzhweCdcclxuXHRcdFx0XHRweD0nNnB4J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PFRleHQgcHg9JzE2cHgnPkFjY291bnQgSW5mb3JtYXRpb248L1RleHQ+XHJcblx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUodHJ1ZSl9XHJcblx0XHRcdFx0XHRyaWdodEljb249ezxGaUVkaXQgLz59XHJcblx0XHRcdFx0XHRjb2xvclNjaGVtZT0ncHVycGxlJ1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0RWRpdFxyXG5cdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW0gY29sU3Bhbj17MTB9PlxyXG5cdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTcGFuPXsxMH0gcD0nNXB4Jz5cclxuXHRcdFx0XHQ8Qm94IGJnPSdncmF5LjEwMCc+XHJcblx0XHRcdFx0XHQ8QXNwZWN0UmF0aW8gbWF4Vz0nZnVsbCcgcmF0aW89ezE2IC8gNX0+XHJcblx0XHRcdFx0XHRcdHtjb3Zlcl9waG90byA/IChcclxuXHRcdFx0XHRcdFx0XHQ8SW1hZ2Ugc3JjPXtjb3Zlcl9waG90b30gYWx0PSdDb3ZlciBQaG90bycgbGF5b3V0PSdmaWxsJyAvPlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDxDZW50ZXIgYmc9e2NvdmVyUGhvdG9CZ30+XHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKHRydWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZWZ0SWNvbj17PE1kUGhvdG9TaXplU2VsZWN0QWN0dWFsIC8+fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvclNjaGVtZT0nZ3JheSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFkZCBDb3ZlciBQaG90b1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L0FzcGVjdFJhdGlvPlxyXG5cdFx0XHRcdDwvQm94PlxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW0gY29sU3Bhbj17MTB9PlxyXG5cdFx0XHRcdDxEaXZpZGVyIG1iPScxNnB4JyAvPlxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTdGFydD17MX1cclxuXHRcdFx0XHRjb2xFbmQ9ezR9XHJcblx0XHRcdFx0Zm9udFdlaWdodD0nc2VtaWJvbGQnXHJcblx0XHRcdFx0cGw9JzMycHgnXHJcblx0XHRcdFx0cHk9JzE2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHRQcm9maWxlIEltYWdlXHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTdGFydD17NH0gY29sRW5kPXsxMX0gY29sb3I9J3B1cnBsZScgcHk9JzE2cHgnPlxyXG5cdFx0XHRcdDxBdmF0YXIgbmFtZT17bmFtZX0gc2l6ZT0neGwnIHNyYz17YXZhdGFyIHx8ICcnfSAvPlxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTdGFydD17MX1cclxuXHRcdFx0XHRjb2xFbmQ9ezR9XHJcblx0XHRcdFx0Zm9udFdlaWdodD0nc2VtaWJvbGQnXHJcblx0XHRcdFx0cGw9JzMycHgnXHJcblx0XHRcdFx0cHk9JzE2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHRVc2VybmFtZVxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW0gY29sU3RhcnQ9ezR9IGNvbEVuZD17MTF9IGNvbG9yPSdwdXJwbGUnIHB5PScxNnB4Jz5cclxuXHRcdFx0XHR7dXNlcm5hbWV9XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbVxyXG5cdFx0XHRcdGNvbFN0YXJ0PXsxfVxyXG5cdFx0XHRcdGNvbEVuZD17NH1cclxuXHRcdFx0XHRmb250V2VpZ2h0PSdzZW1pYm9sZCdcclxuXHRcdFx0XHRwbD0nMzJweCdcclxuXHRcdFx0XHRweT0nMTZweCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdEVtYWlsXHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTdGFydD17NH0gY29sRW5kPXsxMX0gY29sb3I9J3B1cnBsZScgcHk9JzE2cHgnPlxyXG5cdFx0XHRcdHtlbWFpbH1cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtXHJcblx0XHRcdFx0Y29sU3RhcnQ9ezF9XHJcblx0XHRcdFx0Y29sRW5kPXs0fVxyXG5cdFx0XHRcdGZvbnRXZWlnaHQ9J3NlbWlib2xkJ1xyXG5cdFx0XHRcdHBsPSczMnB4J1xyXG5cdFx0XHRcdHB5PScxNnB4J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0UGFzc3dvcmRcclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFN0YXJ0PXs0fSBjb2xFbmQ9ezExfSBjb2xvcj0ncHVycGxlJyBweT0nMTZweCc+XHJcblx0XHRcdFx0KioqKioqXHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG5cdEFzcGVjdFJhdGlvLFxyXG5cdEF2YXRhcixcclxuXHRCb3gsXHJcblx0QnV0dG9uLFxyXG5cdENlbnRlcixcclxuXHREaXZpZGVyLFxyXG5cdEZsZXgsXHJcblx0R3JpZEl0ZW0sXHJcblx0U2tlbGV0b24sXHJcblx0VGV4dCxcclxuXHR1c2VDb2xvck1vZGVWYWx1ZSxcclxuXHRWU3RhY2ssXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xyXG5pbXBvcnQgeyBGaUVkaXQgfSBmcm9tICdyZWFjdC1pY29ucy9maSc7XHJcbmltcG9ydCB7IE1kUGhvdG9TaXplU2VsZWN0QWN0dWFsIH0gZnJvbSAncmVhY3QtaWNvbnMvbWQnO1xyXG5pbXBvcnQge1xyXG5cdE1lRG9jdW1lbnQsXHJcblx0TWVRdWVyeSxcclxuXHRVcGRhdGVBY2NvdW50SW5wdXQsXHJcblx0VXNlclJlc3BvbnNlRnJhZ21lbnQsXHJcblx0dXNlVXBkYXRlQWNjb3VudE11dGF0aW9uLFxyXG59IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcclxuaW1wb3J0IGVycm9yTWFwcGVyIGZyb20gJy4uLy4uL3V0aWxzL2Vycm9yTWFwcGVyJztcclxuaW1wb3J0IHsgdXBsb2FkQ2xvdWRpbmFyeUltYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXBsb2FkSW1hZ2UnO1xyXG5pbXBvcnQgTWFpbklucHV0VUkgZnJvbSAnLi4vY3VzdG9tLWlucHV0cy9NYWluSW5wdXRVSSc7XHJcblxyXG5pbnRlcmZhY2UgQWNjb3VudEluZm9ybWF0aW9uRWRpdFByb3BzIHtcclxuXHRhY2NJbmZvUHJvcHM6IFVzZXJSZXNwb25zZUZyYWdtZW50O1xyXG5cdHNldEVkaXRNb2RlOiAoZWRpdE1vZGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvdW50SW5mb3JtYXRpb25FZGl0OiBSZWFjdC5GQzxBY2NvdW50SW5mb3JtYXRpb25FZGl0UHJvcHM+ID0gKHtcclxuXHRhY2NJbmZvUHJvcHM6IHtcclxuXHRcdGVtYWlsLFxyXG5cdFx0YXZhdGFyLFxyXG5cdFx0dXNlcm5hbWUsXHJcblx0XHRjb3Zlcl9waG90byxcclxuXHRcdHByb2ZpbGU6IHsgbmFtZSB9LFxyXG5cdH0sXHJcblx0c2V0RWRpdE1vZGUsXHJcbn0pID0+IHtcclxuXHRjb25zdCBjb3ZlclBob3RvQmcgPSB1c2VDb2xvck1vZGVWYWx1ZShcclxuXHRcdCdncmF5LjUwJyxcclxuXHRcdCdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpJ1xyXG5cdCk7XHJcblxyXG5cdGNvbnN0IFtjb3ZlclBob3RvLCBzZXRDb3ZlclBob3RvXSA9IHVzZVN0YXRlPHN0cmluZyB8ICdsb2FkaW5nJz4oKTtcclxuXHRjb25zdCBbcHJvZmlsZVBob3RvLCBzZXRQcm9maWxlUGhvdG9dID0gdXNlU3RhdGU8c3RyaW5nIHwgJ2xvYWRpbmcnPigpO1xyXG5cclxuXHRjb25zdCBbdXBkYXRlQWNjb3VudCwgeyBsb2FkaW5nIH1dID0gdXNlVXBkYXRlQWNjb3VudE11dGF0aW9uKCk7XHJcblxyXG5cdGNvbnN0IHtcclxuXHRcdHJlZ2lzdGVyLFxyXG5cdFx0aGFuZGxlU3VibWl0LFxyXG5cdFx0ZXJyb3JzLFxyXG5cdFx0c2V0RXJyb3IsXHJcblx0fSA9IHVzZUZvcm08VXBkYXRlQWNjb3VudElucHV0PigpO1xyXG5cclxuXHRjb25zdCBvblN1bWJpdCA9IGFzeW5jICh2YWx1ZXM6IFVwZGF0ZUFjY291bnRJbnB1dCkgPT4ge1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y29uc3QgeyBkYXRhIH0gPSBhd2FpdCB1cGRhdGVBY2NvdW50KHtcclxuXHRcdFx0XHR2YXJpYWJsZXM6IHtcclxuXHRcdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdFx0Li4udmFsdWVzLFxyXG5cdFx0XHRcdFx0XHR1c2VybmFtZTogdmFsdWVzLnVzZXJuYW1lID09PSB1c2VybmFtZSA/IG51bGwgOiB2YWx1ZXMudXNlcm5hbWUsXHJcblx0XHRcdFx0XHRcdGVtYWlsOiB2YWx1ZXMuZW1haWwgPT09IGVtYWlsID8gbnVsbCA6IHZhbHVlcy5lbWFpbCxcclxuXHRcdFx0XHRcdFx0Y292ZXJfcGhvdG86IGNvdmVyUGhvdG8gPz8gbnVsbCxcclxuXHRcdFx0XHRcdFx0YXZhdGFyOiBwcm9maWxlUGhvdG8gPz8gbnVsbCxcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR1cGRhdGU6IChjYWNoZSwgeyBkYXRhIH0pID0+IHtcclxuXHRcdFx0XHRcdGNhY2hlLndyaXRlUXVlcnk8TWVRdWVyeT4oe1xyXG5cdFx0XHRcdFx0XHRxdWVyeTogTWVEb2N1bWVudCxcclxuXHRcdFx0XHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdFx0XHRcdF9fdHlwZW5hbWU6ICdRdWVyeScsXHJcblx0XHRcdFx0XHRcdFx0bWU6IGRhdGE/LnVwZGF0ZUFjY291bnQsXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKGRhdGE/LnVwZGF0ZUFjY291bnQpIHtcclxuXHRcdFx0XHRzZXRFZGl0TW9kZShmYWxzZSk7XHJcblx0XHRcdH1cclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRlcnJvck1hcHBlcihlcnIsIHNldEVycm9yKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGxvYWRDb3ZlclBob3RvID0gKCkgPT4ge1xyXG5cdFx0dXBsb2FkQ2xvdWRpbmFyeUltYWdlKFxyXG5cdFx0XHQoZXJyb3I6IGFueSwgcGhvdG9zOiB7IGV2ZW50OiBzdHJpbmc7IGluZm86IHsgdXJsOiBzdHJpbmcgfSB9KSA9PiB7XHJcblx0XHRcdFx0aWYgKCFlcnJvciAmJiBwaG90b3MuZXZlbnQgPT09ICdxdWV1ZXMtc3RhcnQnKSB7XHJcblx0XHRcdFx0XHRzZXRDb3ZlclBob3RvKCdsb2FkaW5nJyk7XHJcblx0XHRcdFx0fSBlbHNlIGlmICghZXJyb3IgJiYgcGhvdG9zLmV2ZW50ID09PSAnc3VjY2VzcycpIHtcclxuXHRcdFx0XHRcdHNldENvdmVyUGhvdG8ocGhvdG9zLmluZm8udXJsKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdDE2IC8gNVxyXG5cdFx0KTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCB1cGxvYWRQcm9maWxlUGhvdG8gPSAoKSA9PiB7XHJcblx0XHR1cGxvYWRDbG91ZGluYXJ5SW1hZ2UoXHJcblx0XHRcdChlcnJvcjogYW55LCBwaG90b3M6IHsgZXZlbnQ6IHN0cmluZzsgaW5mbzogeyB1cmw6IHN0cmluZyB9IH0pID0+IHtcclxuXHRcdFx0XHRpZiAoIWVycm9yICYmIHBob3Rvcy5ldmVudCA9PT0gJ3F1ZXVlcy1zdGFydCcpIHtcclxuXHRcdFx0XHRcdHNldFByb2ZpbGVQaG90bygnbG9hZGluZycpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoIWVycm9yICYmIHBob3Rvcy5ldmVudCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcblx0XHRcdFx0XHRzZXRQcm9maWxlUGhvdG8ocGhvdG9zLmluZm8udXJsKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGVycm9yKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdDFcclxuXHRcdCk7XHJcblx0fTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHtcclxuXHRcdGNvdmVyX3Bob3RvICYmIHNldENvdmVyUGhvdG8oY292ZXJfcGhvdG8pO1xyXG5cdFx0YXZhdGFyICYmIHNldFByb2ZpbGVQaG90byhhdmF0YXIpO1xyXG5cdH0sIFtjb3Zlcl9waG90bywgYXZhdGFyXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTcGFuPXsxMH1cclxuXHRcdFx0XHRkaXNwbGF5PSdmbGV4J1xyXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRweT0nOHB4J1xyXG5cdFx0XHRcdHB4PSc2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dCBweD0nMTZweCc+QWNjb3VudCBJbmZvcm1hdGlvbjwvVGV4dD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZShmYWxzZSl9XHJcblx0XHRcdFx0XHRyaWdodEljb249ezxGaUVkaXQgLz59XHJcblx0XHRcdFx0XHRjb2xvclNjaGVtZT0ncHVycGxlJ1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTcGFuPXsxMH0+XHJcblx0XHRcdFx0PERpdmlkZXIgLz5cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFNwYW49ezEwfT5cclxuXHRcdFx0XHQ8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VtYml0KX0+XHJcblx0XHRcdFx0XHQ8Qm94IHA9JzVweCcgdGV4dEFsaWduPSdjZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8U2tlbGV0b24gaXNMb2FkZWQ9e2NvdmVyUGhvdG8gIT09ICdsb2FkaW5nJ30+XHJcblx0XHRcdFx0XHRcdFx0PEJveCBiZz0nZ3JheS4xMDAnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEFzcGVjdFJhdGlvIG1heFc9J2Z1bGwnIHJhdGlvPXsxNiAvIDV9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7Y292ZXJQaG90byAmJiBjb3ZlclBob3RvICE9PSAnbG9hZGluZycgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEltYWdlIHNyYz17Y292ZXJQaG90b30gYWx0PSdDb3ZlciBQaG90bycgbGF5b3V0PSdmaWxsJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxDZW50ZXIgYmc9e2NvdmVyUGhvdG9CZ30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3VwbG9hZENvdmVyUGhvdG99XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlZnRJY29uPXs8TWRQaG90b1NpemVTZWxlY3RBY3R1YWwgLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yU2NoZW1lPSdncmF5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0VXBsb2FkIGNvdmVyIHBob3RvXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvQXNwZWN0UmF0aW8+XHJcblx0XHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHRcdDwvU2tlbGV0b24+XHJcblxyXG5cdFx0XHRcdFx0XHR7Y292ZXJQaG90byAmJiAoXHJcblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0bXQ9JzEwcHgnXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt1cGxvYWRDb3ZlclBob3RvfVxyXG5cdFx0XHRcdFx0XHRcdFx0bGVmdEljb249ezxNZFBob3RvU2l6ZVNlbGVjdEFjdHVhbCAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yU2NoZW1lPSdncmF5J1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0VXBsb2FkIGNvdmVyIHBob3RvXHJcblx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDxWU3RhY2sgcGw9JzMycHgnIHNwYWNpbmc9JzEwcHgnIHB5PScyMHB4JyBhbGlnbj0nZmxleC1zdGFydCcgdz0nNjAlJz5cclxuXHRcdFx0XHRcdFx0PFZTdGFjayBzcGFjaW5nPScxMnB4JyBhbGlnbj0nZmxleC1zdGFydCc+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFdlaWdodD0nc2VtaWJvbGQnPlByb2ZpbGUgSW1hZ2U8L1RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PEZsZXggYWxpZ249J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2tlbGV0b24gaXNMb2FkZWQ9e3Byb2ZpbGVQaG90byAhPT0gJ2xvYWRpbmcnfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PEF2YXRhciBuYW1lPXtuYW1lfSBzaXplPSd4bCcgc3JjPXtwcm9maWxlUGhvdG8gPz8gJyd9IC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1NrZWxldG9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtbD0nMTZweCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZnRJY29uPXs8TWRQaG90b1NpemVTZWxlY3RBY3R1YWwgLz59XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yU2NoZW1lPSdncmF5J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dXBsb2FkUHJvZmlsZVBob3RvfVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRVcGxvYWQgcHJvZmlsZSBwaG90b1xyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdFx0XHQ8L1ZTdGFjaz5cclxuXHRcdFx0XHRcdFx0PE1haW5JbnB1dFVJXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy51c2VybmFtZX1cclxuXHRcdFx0XHRcdFx0XHRpbnB1dD0ndXNlcm5hbWUnXHJcblx0XHRcdFx0XHRcdFx0bmFtZT0nVXNlcm5hbWUnXHJcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudGVyIG5ldyB1c2VybmFtZSdcclxuXHRcdFx0XHRcdFx0XHRyZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRmb3JEYXNoYm9hcmRcclxuXHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e3VzZXJuYW1lfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8TWFpbklucHV0VUlcclxuXHRcdFx0XHRcdFx0XHRlcnJvcj17ZXJyb3JzLmVtYWlsfVxyXG5cdFx0XHRcdFx0XHRcdGlucHV0PSdlbWFpbCdcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdFbWFpbCdcclxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgbmV3IGVtYWlsJ1xyXG5cdFx0XHRcdFx0XHRcdHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdGZvckRhc2hib2FyZFxyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxNYWluSW5wdXRVSVxyXG5cdFx0XHRcdFx0XHRcdGVycm9yPXtlcnJvcnMucGFzc3dvcmR9XHJcblx0XHRcdFx0XHRcdFx0aW5wdXQ9J3Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU9J1Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciBuZXcgcGFzc3dvcmQgKG9wdGlvbmFsKSdcclxuXHRcdFx0XHRcdFx0XHRyZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0dHlwZT0ncGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdFx0Zm9yRGFzaGJvYXJkXHJcblx0XHRcdFx0XHRcdFx0aGVscGVyVGV4dD17W1xyXG5cdFx0XHRcdFx0XHRcdFx0J1Bhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzLCBhbmQgYSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzIGFuZCBudW1iZXJzLicsXHJcblx0XHRcdFx0XHRcdFx0XHQnQXZvaWQgdXNpbmcgYSBwYXNzd29yZCB0aGF0IHlvdSB1c2Ugd2l0aCBvdGhlciB3ZWJzaXRlcyBvciB0aGF0IG1pZ2h0IGJlIGVhc3kgZm9yIHNvbWVvbmUgZWxzZSB0byBndWVzcy4nLFxyXG5cdFx0XHRcdFx0XHRcdF19XHJcblx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdDxNYWluSW5wdXRVSVxyXG5cdFx0XHRcdFx0XHRcdGVycm9yPXtlcnJvcnMuY29uZmlybV9wYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0XHRpbnB1dD0nY29uZmlybV9wYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdDb25maXJtIHBhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb25maXJtIG5ldyBwYXNzd29yZCAob3B0aW9uYWwpJ1xyXG5cdFx0XHRcdFx0XHRcdHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0XHRmb3JEYXNoYm9hcmRcclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0PEJ1dHRvbiB0eXBlPSdzdWJtaXQnIGlzTG9hZGluZz17bG9hZGluZ30+XHJcblx0XHRcdFx0XHRcdFx0VXBkYXRlIGFjY291bnRcclxuXHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHQ8L1ZTdGFjaz5cclxuXHRcdFx0XHQ8L2Zvcm0+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG5cdEdyaWRJdGVtLFxyXG5cdEJ1dHRvbixcclxuXHREaXZpZGVyLFxyXG5cdFZTdGFjayxcclxuXHRGbGV4LFxyXG5cdEljb24sXHJcblx0Qm94LFxyXG5cdENlbnRlcixcclxuXHRjaGFrcmEsXHJcblx0VGV4dCxcclxuXHRTcGlubmVyLFxyXG59IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcblx0RmFGYWNlYm9va1NxdWFyZSxcclxuXHRGYVR3aXR0ZXJTcXVhcmUsXHJcblx0RmFZb3V0dWJlU3F1YXJlLFxyXG59IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgRmlFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgeyB1c2VNZVF1ZXJ5IH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgeyBQcm9maWxlSW5mb3JtYXRpb25FZGl0IH0gZnJvbSAnLi9Qcm9maWxlSW5mb3JtYXRpb25FZGl0JztcclxuXHJcbmludGVyZmFjZSBQcm9maWxlSW5mb3JtYXRpb25Qcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbGVJbmZvcm1hdGlvbjogUmVhY3QuRkM8UHJvZmlsZUluZm9ybWF0aW9uUHJvcHM+ID0gKHt9KSA9PiB7XHJcblx0Y29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZU1lUXVlcnkoKTtcclxuXHJcblx0aWYgKCFkYXRhICYmIGxvYWRpbmcpIHtcclxuXHRcdHJldHVybiA8U3Bpbm5lciAvPjtcclxuXHR9XHJcblxyXG5cdGlmICghZGF0YSAmJiAhbG9hZGluZykge1xyXG5cdFx0cmV0dXJuIDxkaXY+ZXJyb3I6IHtlcnJvcj8ubWVzc2FnZX08L2Rpdj47XHJcblx0fVxyXG5cclxuXHRpZiAoZWRpdE1vZGUpIHtcclxuXHRcdHJldHVybiAoXHJcblx0XHRcdDxQcm9maWxlSW5mb3JtYXRpb25FZGl0XHJcblx0XHRcdFx0cHJvZkluZm9Qcm9wcz17ZGF0YSEubWUhfVxyXG5cdFx0XHRcdHNldEVkaXRNb2RlPXtzZXRFZGl0TW9kZX1cclxuXHRcdFx0Lz5cclxuXHRcdCk7XHJcblx0fVxyXG5cclxuXHRjb25zdCB7XHJcblx0XHRwcm9maWxlOiB7IG5hbWUsIGJpcnRoZGF5LCBiaW8sIGNvdW50cnksIHNvY2lhbCB9LFxyXG5cdH0gPSBkYXRhIS5tZSE7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTcGFuPXsxMH1cclxuXHRcdFx0XHRkaXNwbGF5PSdmbGV4J1xyXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRweT0nOHB4J1xyXG5cdFx0XHRcdHB4PSc2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dCBweD0nMTZweCc+UHJvZmlsZSBJbmZvcm1hdGlvbjwvVGV4dD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZSh0cnVlKX1cclxuXHRcdFx0XHRcdHJpZ2h0SWNvbj17PEZpRWRpdCAvPn1cclxuXHRcdFx0XHRcdGNvbG9yU2NoZW1lPSdwdXJwbGUnXHJcblx0XHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRFZGl0XHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTcGFuPXsxMH0+XHJcblx0XHRcdFx0PERpdmlkZXIgbWI9JzE2cHgnIC8+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbVxyXG5cdFx0XHRcdGNvbFN0YXJ0PXsxfVxyXG5cdFx0XHRcdGNvbEVuZD17NH1cclxuXHRcdFx0XHRmb250V2VpZ2h0PSdzZW1pYm9sZCdcclxuXHRcdFx0XHRwbD0nMzJweCdcclxuXHRcdFx0XHRweT0nMTZweCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdE5hbWVcclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFN0YXJ0PXs0fSBjb2xFbmQ9ezExfSBjb2xvcj0ncHVycGxlJyBweT0nMTZweCc+XHJcblx0XHRcdFx0e25hbWV9XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbVxyXG5cdFx0XHRcdGNvbFN0YXJ0PXsxfVxyXG5cdFx0XHRcdGNvbEVuZD17NH1cclxuXHRcdFx0XHRmb250V2VpZ2h0PSdzZW1pYm9sZCdcclxuXHRcdFx0XHRwbD0nMzJweCdcclxuXHRcdFx0XHRweT0nMTZweCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdEJpb1xyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW0gY29sU3RhcnQ9ezR9IGNvbEVuZD17MTF9IGNvbG9yPSdwdXJwbGUnIHB5PScxNnB4Jz5cclxuXHRcdFx0XHR7YmlvID8gKFxyXG5cdFx0XHRcdFx0YmlvXHJcblx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0RWRpdE1vZGUodHJ1ZSl9XHJcblx0XHRcdFx0XHRcdHZhcmlhbnQ9J2dob3N0J1xyXG5cdFx0XHRcdFx0XHRjb2xvclNjaGVtZT0ncHVycGxlJ1xyXG5cdFx0XHRcdFx0XHRzaXplPSdzbSdcclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0QWRkIGJpb1xyXG5cdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0KX1cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtXHJcblx0XHRcdFx0Y29sU3RhcnQ9ezF9XHJcblx0XHRcdFx0Y29sRW5kPXs0fVxyXG5cdFx0XHRcdGZvbnRXZWlnaHQ9J3NlbWlib2xkJ1xyXG5cdFx0XHRcdHBsPSczMnB4J1xyXG5cdFx0XHRcdHB5PScxNnB4J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0QmlydGhkYXlcclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFN0YXJ0PXs0fSBjb2xFbmQ9ezExfSBjb2xvcj0ncHVycGxlJyBweT0nMTZweCc+XHJcblx0XHRcdFx0e2JpcnRoZGF5ID8/ICcnfVxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTdGFydD17MX1cclxuXHRcdFx0XHRjb2xFbmQ9ezR9XHJcblx0XHRcdFx0Zm9udFdlaWdodD0nc2VtaWJvbGQnXHJcblx0XHRcdFx0cGw9JzMycHgnXHJcblx0XHRcdFx0cHk9JzE2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHRDb3VudHJ5XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTdGFydD17NH0gY29sRW5kPXsxMX0gY29sb3I9J3B1cnBsZScgcHk9JzE2cHgnPlxyXG5cdFx0XHRcdHtjb3VudHJ5ID8gKFxyXG5cdFx0XHRcdFx0Y291bnRyeVxyXG5cdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKHRydWUpfVxyXG5cdFx0XHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcclxuXHRcdFx0XHRcdFx0Y29sb3JTY2hlbWU9J3B1cnBsZSdcclxuXHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdEFkZCBjb3VudHJ5XHJcblx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHQpfVxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTdGFydD17MX1cclxuXHRcdFx0XHRjb2xFbmQ9ezR9XHJcblx0XHRcdFx0Zm9udFdlaWdodD0nc2VtaWJvbGQnXHJcblx0XHRcdFx0cGw9JzMycHgnXHJcblx0XHRcdFx0cHk9JzE2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHRTb2NpYWxcclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFN0YXJ0PXs0fSBjb2xFbmQ9ezExfSBweT0nMTZweCc+XHJcblx0XHRcdFx0PFZTdGFjayBzcGFjaW5nPScxNnB4JyBhbGlnbj0nZmxleC1zdGFydCc+XHJcblx0XHRcdFx0XHQ8RmxleCBhbGlnbj0nY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PEljb24gYXM9e0ZhRmFjZWJvb2tTcXVhcmV9IGJveFNpemU9JzM2cHgnIGNvbG9yPScjM2I1OTk5JyAvPlxyXG5cdFx0XHRcdFx0XHQ8Qm94IG1sPScyNHB4Jz5cclxuXHRcdFx0XHRcdFx0XHR7c29jaWFsPy5mYWNlYm9vayA/IChcclxuXHRcdFx0XHRcdFx0XHRcdDxUZXh0Pntzb2NpYWwuZmFjZWJvb2t9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKHRydWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JTY2hlbWU9J3B1cnBsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFkZCBmYWNlYm9vayBpbmZvcm1hdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0XHQ8RmxleCBhbGlnbj0nY2VudGVyJz5cclxuXHRcdFx0XHRcdFx0PEljb24gYXM9e0ZhVHdpdHRlclNxdWFyZX0gYm94U2l6ZT0nMzZweCcgY29sb3I9JyM1NWFjZWUnIC8+XHJcblx0XHRcdFx0XHRcdDxCb3ggbWw9JzI0cHgnPlxyXG5cdFx0XHRcdFx0XHRcdHtzb2NpYWw/LnR3aXR0ZXIgPyAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8VGV4dD57c29jaWFsLnR3aXR0ZXJ9PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKHRydWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JTY2hlbWU9J3B1cnBsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFkZCB0d2l0dGVyIGluZm9ybWF0aW9uXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHRcdDxGbGV4IGFsaWduPSdjZW50ZXInPlxyXG5cdFx0XHRcdFx0XHQ8Q2VudGVyIGJveFNpemU9JzM2cHgnPlxyXG5cdFx0XHRcdFx0XHRcdDxjaGFrcmEuaW1nXHJcblx0XHRcdFx0XHRcdFx0XHRib3hTaXplPSczMS41cHgnXHJcblx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9pbnN0YWdyYW0uc3ZnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0YWx0PSdJbnN0YWdyYW0gTG9nbydcclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0NlbnRlcj5cclxuXHRcdFx0XHRcdFx0PEJveCBtbD0nMjRweCc+XHJcblx0XHRcdFx0XHRcdFx0e3NvY2lhbD8uaW5zdGFncmFtID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHQ+e3NvY2lhbC5pbnN0YWdyYW19PC9UZXh0PlxyXG5cdFx0XHRcdFx0XHRcdCkgOiAoXHJcblx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKHRydWUpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50PSdnaG9zdCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JTY2hlbWU9J3B1cnBsZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nc20nXHJcblx0XHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdEFkZCBpbnN0YWdyYW0gaW5mb3JtYXRpb25cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdCl9XHJcblx0XHRcdFx0XHRcdDwvQm94PlxyXG5cdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdFx0PEZsZXggYWxpZ249J2NlbnRlcic+XHJcblx0XHRcdFx0XHRcdDxJY29uIGFzPXtGYVlvdXR1YmVTcXVhcmV9IGJveFNpemU9JzM2cHgnIGNvbG9yPScjY2QyMDFmJyAvPlxyXG5cdFx0XHRcdFx0XHQ8Qm94IG1sPScyNHB4Jz5cclxuXHRcdFx0XHRcdFx0XHR7c29jaWFsPy55b3V0dWJlID8gKFxyXG5cdFx0XHRcdFx0XHRcdFx0PFRleHQ+e3NvY2lhbC55b3V0dWJlfTwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZSh0cnVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yU2NoZW1lPSdwdXJwbGUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHNpemU9J3NtJ1xyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBZGQgeW91dHViZSBpbmZvcm1hdGlvblxyXG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0PC9WU3RhY2s+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQge1xyXG5cdEJ1dHRvbixcclxuXHREaXZpZGVyLFxyXG5cdEhTdGFjayxcclxuXHRHcmlkSXRlbSxcclxuXHRUZXh0LFxyXG5cdFZTdGFjayxcclxuXHRGbGV4LFxyXG5cdEZvcm1Db250cm9sLFxyXG5cdEZvcm1MYWJlbCxcclxuXHRMaXN0LFxyXG5cdExpc3RJY29uLFxyXG5cdExpc3RJdGVtLFxyXG5cdFNlbGVjdCxcclxuXHRUb29sdGlwLFxyXG5cdHVzZUNvbG9yTW9kZVZhbHVlLFxyXG5cdEljb24sXHJcblx0Y2hha3JhLFxyXG5cdFNxdWFyZSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XHJcbmltcG9ydCB7IEZpRWRpdCB9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHtcclxuXHRVcGRhdGVQcm9maWxlSW5wdXQsXHJcblx0VXNlclJlc3BvbnNlRnJhZ21lbnQsXHJcblx0dXNlVXBkYXRlUHJvZmlsZU11dGF0aW9uLFxyXG59IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcclxuaW1wb3J0IE1haW5JbnB1dFVJIGZyb20gJy4uL2N1c3RvbS1pbnB1dHMvTWFpbklucHV0VUknO1xyXG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdyZWFjdC10ZXh0YXJlYS1hdXRvc2l6ZSc7XHJcbmltcG9ydCB7IFdhcm5pbmdJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XHJcbmltcG9ydCB7IE1vbnRocywgRGF5cywgWWVhcnMgfSBmcm9tICcuLi8uLi91dGlscy9CaXJ0aGRheURhdGVPcHRpb25zJztcclxuaW1wb3J0IHsgQ291bnRyeSB9IGZyb20gJy4uL0NvdW50cnknO1xyXG5pbXBvcnQgeyBNZVF1ZXJ5LCBNZURvY3VtZW50IH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xyXG5pbXBvcnQgZXJyb3JNYXBwZXIgZnJvbSAnLi4vLi4vdXRpbHMvZXJyb3JNYXBwZXInO1xyXG5pbXBvcnQge1xyXG5cdEZhRmFjZWJvb2tTcXVhcmUsXHJcblx0RmFUd2l0dGVyU3F1YXJlLFxyXG5cdEZhWW91dHViZVNxdWFyZSxcclxufSBmcm9tICdyZWFjdC1pY29ucy9mYSc7XHJcbmludGVyZmFjZSBQcm9maWxlSW5mb3JtYXRpb25FZGl0UHJvcHMge1xyXG5cdHByb2ZJbmZvUHJvcHM6IFVzZXJSZXNwb25zZUZyYWdtZW50O1xyXG5cdHNldEVkaXRNb2RlOiAoZWRpdE1vZGU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRNb250aHMgPSBbXHJcblx0J0phbicsXHJcblx0J0ZlYicsXHJcblx0J01hcicsXHJcblx0J0FwcicsXHJcblx0J01heScsXHJcblx0J0p1bicsXHJcblx0J0p1bCcsXHJcblx0J0F1ZycsXHJcblx0J1NlcCcsXHJcblx0J09jdCcsXHJcblx0J05vdicsXHJcblx0J0RlYycsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsZUluZm9ybWF0aW9uRWRpdDogUmVhY3QuRkM8UHJvZmlsZUluZm9ybWF0aW9uRWRpdFByb3BzPiA9ICh7XHJcblx0cHJvZkluZm9Qcm9wczoge1xyXG5cdFx0cHJvZmlsZTogeyBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIGJpcnRoZGF5LCBiaW8sIGNvdW50cnksIHNvY2lhbCB9LFxyXG5cdH0sXHJcblx0c2V0RWRpdE1vZGUsXHJcbn0pID0+IHtcclxuXHRjb25zdCBiZ0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3doaXRlJywgJyMyMDIwMjAnKTtcclxuXHJcblx0Y29uc3QgW3VwZGF0ZVByb2ZpbGUsIHsgbG9hZGluZyB9XSA9IHVzZVVwZGF0ZVByb2ZpbGVNdXRhdGlvbigpO1xyXG5cclxuXHRjb25zdCB7XHJcblx0XHRyZWdpc3RlcixcclxuXHRcdGhhbmRsZVN1Ym1pdCxcclxuXHRcdGVycm9ycyxcclxuXHRcdHNldEVycm9yLFxyXG5cdH0gPSB1c2VGb3JtPFVwZGF0ZVByb2ZpbGVJbnB1dD4oKTtcclxuXHJcblx0Y29uc3Qgb25TdW1iaXQgPSBhc3luYyAodmFsdWVzOiBVcGRhdGVQcm9maWxlSW5wdXQpID0+IHtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgdXBkYXRlUHJvZmlsZSh7XHJcblx0XHRcdFx0dmFyaWFibGVzOiB7IGRhdGE6IHZhbHVlcyB9LFxyXG5cdFx0XHRcdHVwZGF0ZTogKGNhY2hlLCB7IGRhdGEgfSkgPT4ge1xyXG5cdFx0XHRcdFx0Y2FjaGUud3JpdGVRdWVyeTxNZVF1ZXJ5Pih7XHJcblx0XHRcdFx0XHRcdHF1ZXJ5OiBNZURvY3VtZW50LFxyXG5cdFx0XHRcdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0XHRcdFx0X190eXBlbmFtZTogJ1F1ZXJ5JyxcclxuXHRcdFx0XHRcdFx0XHRtZTogZGF0YT8udXBkYXRlUHJvZmlsZSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1xyXG5cdFx0XHRpZiAoZGF0YT8udXBkYXRlUHJvZmlsZSkge1xyXG5cdFx0XHRcdHNldEVkaXRNb2RlKGZhbHNlKTtcclxuXHRcdFx0fVxyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGVycm9yTWFwcGVyKGVyciwgc2V0RXJyb3IpO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTcGFuPXsxMH1cclxuXHRcdFx0XHRkaXNwbGF5PSdmbGV4J1xyXG5cdFx0XHRcdGp1c3RpZnlDb250ZW50PSdzcGFjZS1iZXR3ZWVuJ1xyXG5cdFx0XHRcdGFsaWduSXRlbXM9J2NlbnRlcidcclxuXHRcdFx0XHRweT0nOHB4J1xyXG5cdFx0XHRcdHB4PSc2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8VGV4dCBweD0nMTZweCc+UHJvZmlsZSBJbmZvcm1hdGlvbjwvVGV4dD5cclxuXHRcdFx0XHQ8QnV0dG9uXHJcblx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZShmYWxzZSl9XHJcblx0XHRcdFx0XHRyaWdodEljb249ezxGaUVkaXQgLz59XHJcblx0XHRcdFx0XHRjb2xvclNjaGVtZT0ncHVycGxlJ1xyXG5cdFx0XHRcdFx0dmFyaWFudD0nZ2hvc3QnXHJcblx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0Q2FuY2VsXHJcblx0XHRcdFx0PC9CdXR0b24+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTcGFuPXsxMH0+XHJcblx0XHRcdFx0PERpdmlkZXIgbWI9JzE2cHgnIC8+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTcGFuPXsxMH0+XHJcblx0XHRcdFx0PGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1bWJpdCl9PlxyXG5cdFx0XHRcdFx0PFZTdGFjayBwbD0nMzJweCcgc3BhY2luZz0nMTBweCcgcHk9JzIwcHgnIGFsaWduPSdmbGV4LXN0YXJ0JyB3PSc2MCUnPlxyXG5cdFx0XHRcdFx0XHQ8SFN0YWNrIHNwYWNpbmc9ezJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxNYWluSW5wdXRVSVxyXG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy5maXJzdF9uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXQ9J2ZpcnN0X25hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPSdGaXJzdCBuYW1lJ1xyXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudGVyIGZpcnN0IG5hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yRGFzaGJvYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2ZpcnN0X25hbWV9XHJcblx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8TWFpbklucHV0VUlcclxuXHRcdFx0XHRcdFx0XHRcdGVycm9yPXtlcnJvcnMubGFzdF9uYW1lfVxyXG5cdFx0XHRcdFx0XHRcdFx0aW5wdXQ9J2xhc3RfbmFtZSdcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9J0xhc3QgbmFtZSdcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciBsYXN0IG5hbWUnXHJcblx0XHRcdFx0XHRcdFx0XHRyZWdpc3Rlcj17cmVnaXN0ZXJ9XHJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yRGFzaGJvYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2xhc3RfbmFtZX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8L0hTdGFjaz5cclxuXHRcdFx0XHRcdFx0PE1haW5JbnB1dFVJXHJcblx0XHRcdFx0XHRcdFx0ZXJyb3I9e2Vycm9ycy5iaW99XHJcblx0XHRcdFx0XHRcdFx0aW5wdXQ9J2JpbydcclxuXHRcdFx0XHRcdFx0XHRuYW1lPSdCaW8nXHJcblx0XHRcdFx0XHRcdFx0YXM9e1RleHRhcmVhQXV0b3NpemV9XHJcblx0XHRcdFx0XHRcdFx0cmVzaXplPSdub25lJ1xyXG5cdFx0XHRcdFx0XHRcdG92ZXJmbG93PSdoaWRkZW4nXHJcblx0XHRcdFx0XHRcdFx0cHk9JzhweCdcclxuXHRcdFx0XHRcdFx0XHRtaW5IPSc3MnB4J1xyXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgYmlvJ1xyXG5cdFx0XHRcdFx0XHRcdHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdGZvckRhc2hib2FyZFxyXG5cdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17YmlvID8/ICcnfVxyXG5cdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQ8Rm9ybUNvbnRyb2w+XHJcblx0XHRcdFx0XHRcdFx0PEZsZXgganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XHJcblx0XHRcdFx0XHRcdFx0XHQ8Rm9ybUxhYmVsIGFzPSdwJyBmb250V2VpZ2h0PSdzZW1pYm9sZCcgaHRtbEZvcj0nbW9udGgnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHREYXRlIG9mIEJpcnRoXHJcblx0XHRcdFx0XHRcdFx0XHQ8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdHsoZXJyb3JzLnllYXIgfHwgZXJyb3JzLm1vbnRoIHx8IGVycm9ycy5kYXkpICYmIChcclxuXHRcdFx0XHRcdFx0XHRcdFx0PFRvb2x0aXBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNBcnJvd1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJnPSdyZWQuNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0IHNwYWNpbmc9ezN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnllYXIgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SWNvbiBhcz17V2FybmluZ0ljb259IGNvbG9yPSdyZWQuNzAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy55ZWFyLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5tb250aCAmJiAoXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExpc3RJY29uIGFzPXtXYXJuaW5nSWNvbn0gY29sb3I9J3JlZC43MDAnIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLm1vbnRoLm1lc3NhZ2V9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5kYXkgJiYgKFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMaXN0SWNvbiBhcz17V2FybmluZ0ljb259IGNvbG9yPSdyZWQuNzAwJyAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5kYXkubWVzc2FnZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpc3RJdGVtPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaXN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxXYXJuaW5nSWNvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXg9JzE0cHgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0ncmVkLjUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZvbnRTaXplPScyMHB4J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ymc9e2JnQ29sb3J9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyb3VuZGVkPScxMDBweCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1Rvb2x0aXA+XHJcblx0XHRcdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHRcdFx0XHQ8SFN0YWNrIHc9J2Z1bGwnIHNwYWNpbmc9JzZweCc+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHc9JzUwJSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nbGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdNb250aCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nbW9udGgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlkPSdtb250aCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0aXNJbnZhbGlkPXshIWVycm9ycy5tb250aH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9jdXNCb3JkZXJDb2xvcj0ncHVycGxlLjUwMCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0TW9udGhzW3BhcnNlSW50KGJpcnRoZGF5LnNwbGl0KCctJylbMV0pIC0gMV1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8TW9udGhzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdDxIU3RhY2sgdz0nNTAlJyBzcGFjaW5nPSc2cHgnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nbGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0RheSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPSdkYXknXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9J2RheSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzSW52YWxpZD17ISFlcnJvcnMuZGF5fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZvY3VzQm9yZGVyQ29sb3I9J3B1cnBsZS41MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtwYXJzZUludChiaXJ0aGRheS5zcGxpdCgnLScpWzJdKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxEYXlzIC8+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8U2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZT0nbGcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1llYXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0neWVhcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZD0neWVhcidcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZWY9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzSW52YWxpZD17ISFlcnJvcnMueWVhcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmb2N1c0JvcmRlckNvbG9yPSdwdXJwbGUuNTAwJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17cGFyc2VJbnQoYmlydGhkYXkuc3BsaXQoJy0nKVswXSl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8WWVhcnMgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9TZWxlY3Q+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L0hTdGFjaz5cclxuXHRcdFx0XHRcdFx0XHQ8L0hTdGFjaz5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0PEZvcm1Db250cm9sPlxyXG5cdFx0XHRcdFx0XHRcdDxGb3JtTGFiZWwgYXM9J3AnIGZvbnRXZWlnaHQ9J3NlbWlib2xkJyBodG1sRm9yPSdjb3VudHJ5Jz5cclxuXHRcdFx0XHRcdFx0XHRcdENvdW50cnlcclxuXHRcdFx0XHRcdFx0XHQ8L0Zvcm1MYWJlbD5cclxuXHRcdFx0XHRcdFx0XHQ8U2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRzaXplPSdsZydcclxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdDb3VudHJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT0nY291bnRyeSdcclxuXHRcdFx0XHRcdFx0XHRcdGlkPSdjb3VudHJ5J1xyXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdGlzSW52YWxpZD17ISFlcnJvcnMuY291bnRyeX1cclxuXHRcdFx0XHRcdFx0XHRcdGZvY3VzQm9yZGVyQ29sb3I9J3B1cnBsZS41MDAnXHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0VmFsdWU9e2NvdW50cnkgPz8gJyd9XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0PENvdW50cnkgLz5cclxuXHRcdFx0XHRcdFx0XHQ8L1NlbGVjdD5cclxuXHRcdFx0XHRcdFx0PC9Gb3JtQ29udHJvbD5cclxuXHRcdFx0XHRcdFx0PFZTdGFjayBzcGFjaW5nPScxMHB4JyB3PSdmdWxsJyBhbGlnbj0nZmxleC1zdGFydCc+XHJcblx0XHRcdFx0XHRcdFx0PFRleHQgYXM9J3AnIGZvbnRXZWlnaHQ9J3NlbWlib2xkJz5cclxuXHRcdFx0XHRcdFx0XHRcdFNvY2lhbFxyXG5cdFx0XHRcdFx0XHRcdDwvVGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8RmxleCBhbGlnbj0nY2VudGVyJyB3PSdmdWxsJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFzPXtGYUZhY2Vib29rU3F1YXJlfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRib3hTaXplPSc0MHB4J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcj0nIzNiNTk5OSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bXI9JzEwcHgnXHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PE1haW5JbnB1dFVJXHJcblx0XHRcdFx0XHRcdFx0XHRcdGlucHV0PSdzb2NpYWwuZmFjZWJvb2snXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgZmFjZWJvb2sgaW5mb3JtYXRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yRGFzaGJvYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17c29jaWFsPy5mYWNlYm9vayA/PyAnJ31cclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0PC9GbGV4PlxyXG5cdFx0XHRcdFx0XHRcdDxGbGV4IGFsaWduPSdjZW50ZXInIHc9J2Z1bGwnPlxyXG5cdFx0XHRcdFx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0YXM9e0ZhVHdpdHRlclNxdWFyZX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Ym94U2l6ZT0nNDBweCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I9JyM1NWFjZWUnXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1yPScxMHB4J1xyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDxNYWluSW5wdXRVSVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnB1dD0nc29jaWFsLnR3aXR0ZXInXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9JydcclxuXHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgdHdpdHRlciBpbmZvcm1hdGlvbidcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmVnaXN0ZXI9e3JlZ2lzdGVyfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPSd0ZXh0J1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3JEYXNoYm9hcmRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdFZhbHVlPXtzb2NpYWw/LnR3aXR0ZXIgPz8gJyd9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHRcdFx0XHQ8RmxleCBhbGlnbj0nY2VudGVyJyB3PSdmdWxsJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxTcXVhcmUgYm94U2l6ZT0nNDBweCcgbXI9JzEwcHgnPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8Y2hha3JhLmltZ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJveFNpemU9JzM1LjVweCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9Jy9pbnN0YWdyYW0uc3ZnJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGFsdD0nSW5zdGFncmFtIExvZ28nXHJcblx0XHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L1NxdWFyZT5cclxuXHRcdFx0XHRcdFx0XHRcdDxNYWluSW5wdXRVSVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpbnB1dD0nc29jaWFsLmluc3RhZ3JhbSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0bmFtZT0nJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBpbnN0YWdyYW0gaW5mb3JtYXRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yRGFzaGJvYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17c29jaWFsPy5pbnN0YWdyYW0gPz8gJyd9XHJcblx0XHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHRcdDwvRmxleD5cclxuXHRcdFx0XHRcdFx0XHQ8RmxleCBhbGlnbj0nY2VudGVyJyB3PSdmdWxsJz5cclxuXHRcdFx0XHRcdFx0XHRcdDxJY29uXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFzPXtGYVlvdXR1YmVTcXVhcmV9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJveFNpemU9JzQwcHgnXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbG9yPScjY2QyMDFmJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRtcj0nMTBweCdcclxuXHRcdFx0XHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHRcdFx0XHQ8TWFpbklucHV0VUlcclxuXHRcdFx0XHRcdFx0XHRcdFx0aW5wdXQ9J3NvY2lhbC55b3V0dWJlJ1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPScnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIHlvdXR1YmUgaW5mb3JtYXRpb24nXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlZ2lzdGVyPXtyZWdpc3Rlcn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT0ndGV4dCdcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yRGFzaGJvYXJkXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlZmF1bHRWYWx1ZT17c29jaWFsPy55b3V0dWJlID8/ICcnfVxyXG5cdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHQ8L0ZsZXg+XHJcblx0XHRcdFx0XHRcdDwvVlN0YWNrPlxyXG5cdFx0XHRcdFx0XHQ8QnV0dG9uIHR5cGU9J3N1Ym1pdCcgaXNMb2FkaW5nPXtsb2FkaW5nfT5cclxuXHRcdFx0XHRcdFx0XHRVcGRhdGUgUHJvZmlsZVxyXG5cdFx0XHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0XHRcdDwvVlN0YWNrPlxyXG5cdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcbmltcG9ydCAqIGFzIEFwb2xsbyBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5leHBvcnQgdHlwZSBNYXliZTxUPiA9IFQgfCBudWxsO1xuZXhwb3J0IHR5cGUgRXhhY3Q8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9PiA9IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfTtcbmV4cG9ydCB0eXBlIE1ha2VPcHRpb25hbDxULCBLIGV4dGVuZHMga2V5b2YgVD4gPSBPbWl0PFQsIEs+ICYgeyBbU3ViS2V5IGluIEtdPzogTWF5YmU8VFtTdWJLZXldPiB9O1xuZXhwb3J0IHR5cGUgTWFrZU1heWJlPFQsIEsgZXh0ZW5kcyBrZXlvZiBUPiA9IE9taXQ8VCwgSz4gJiB7IFtTdWJLZXkgaW4gS106IE1heWJlPFRbU3ViS2V5XT4gfTtcbi8qKiBBbGwgYnVpbHQtaW4gYW5kIGN1c3RvbSBzY2FsYXJzLCBtYXBwZWQgdG8gdGhlaXIgYWN0dWFsIHZhbHVlcyAqL1xuZXhwb3J0IHR5cGUgU2NhbGFycyA9IHtcbiAgSUQ6IHN0cmluZztcbiAgU3RyaW5nOiBzdHJpbmc7XG4gIEJvb2xlYW46IGJvb2xlYW47XG4gIEludDogbnVtYmVyO1xuICBGbG9hdDogbnVtYmVyO1xuICAvKiogVGhlIGBKU09OT2JqZWN0YCBzY2FsYXIgdHlwZSByZXByZXNlbnRzIEpTT04gb2JqZWN0cyBhcyBzcGVjaWZpZWQgYnkgW0VDTUEtNDA0XShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvcHVibGljYXRpb25zL2ZpbGVzL0VDTUEtU1QvRUNNQS00MDQucGRmKS4gKi9cbiAgSlNPTk9iamVjdDogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgUXVlc3Rpb24gPSB7XG4gIF9fdHlwZW5hbWU/OiAnUXVlc3Rpb24nO1xuICBpZDogU2NhbGFyc1snSUQnXTtcbiAgcXVlc3Rpb25faWQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBxdWVzdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHF1ZXN0aW9uX3Bob3RvPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBjaG9pY2VzOiBBcnJheTxTY2FsYXJzWydKU09OT2JqZWN0J10+O1xuICBhbnN3ZXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBleHBsYW5hdGlvbj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgd2l0aF9leHBsYW5hdGlvbjogU2NhbGFyc1snQm9vbGVhbiddO1xuICBoaW50PzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB3aXRoX2hpbnQ6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTGlrZSA9IHtcbiAgX190eXBlbmFtZT86ICdMaWtlJztcbiAgcXVpel9pZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgYXV0aG9yX2lkOiBTY2FsYXJzWydGbG9hdCddO1xuICBhdXRob3I6IFVzZXI7XG4gIGNyZWF0ZWRfYXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvZmlsZSA9IHtcbiAgX190eXBlbmFtZT86ICdQcm9maWxlJztcbiAgaWQ6IFNjYWxhcnNbJ0lEJ107XG4gIGZpcnN0X25hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsYXN0X25hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBiaXJ0aGRheTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGdlbmRlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNvdW50cnk/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGJpbz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgc29jaWFsPzogTWF5YmU8U2NhbGFyc1snSlNPTk9iamVjdCddPjtcbiAgbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBSZXN1bHQgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUmVzdWx0JztcbiAgaWQ6IFNjYWxhcnNbJ0lEJ107XG4gIHRha2VyOiBVc2VyO1xuICBzY29yZTogU2NhbGFyc1snRmxvYXQnXTtcbiAgY3VycmVudF90b3RhbF9xdWVzdGlvbnM6IFNjYWxhcnNbJ0Zsb2F0J107XG4gIGFuc3dlcmVkX2F0OiBTY2FsYXJzWydTdHJpbmcnXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXIgPSB7XG4gIF9fdHlwZW5hbWU/OiAnVXNlcic7XG4gIGlkOiBTY2FsYXJzWydJRCddO1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgYXZhdGFyPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBjb3Zlcl9waG90bz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgY3JlYXRlZF9hdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRfYXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwcm9maWxlOiBQcm9maWxlO1xufTtcblxuZXhwb3J0IHR5cGUgUXVpeiA9IHtcbiAgX190eXBlbmFtZT86ICdRdWl6JztcbiAgaWQ6IFNjYWxhcnNbJ0lEJ107XG4gIGF1dGhvcl9pZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgYXV0aG9yOiBVc2VyO1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRlc2NyaXB0aW9uOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcXVpel9waG90bz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcXVlc3Rpb25zOiBBcnJheTxRdWVzdGlvbj47XG4gIHRha2VyczogQXJyYXk8UmVzdWx0PjtcbiAgdGFrZXJzQ291bnQ6IFNjYWxhcnNbJ0ludCddO1xuICBpc1Rha2VuOiBTY2FsYXJzWydCb29sZWFuJ107XG4gIGxpa2VzOiBBcnJheTxMaWtlPjtcbiAgaXNMaWtlZDogU2NhbGFyc1snQm9vbGVhbiddO1xuICBsaWtlc0NvdW50OiBTY2FsYXJzWydJbnQnXTtcbiAgY29tbWVudHM6IEFycmF5PENvbW1lbnQ+O1xuICBjb21tZW50c0NvdW50OiBTY2FsYXJzWydJbnQnXTtcbiAgY3JlYXRlZF9hdDogU2NhbGFyc1snU3RyaW5nJ107XG4gIHVwZGF0ZWRfYXQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBxdWVzdGlvbnNDb3VudDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBDb21tZW50ID0ge1xuICBfX3R5cGVuYW1lPzogJ0NvbW1lbnQnO1xuICBpZDogU2NhbGFyc1snSUQnXTtcbiAgYXV0aG9yOiBVc2VyO1xuICB0ZXh0OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgY3JlYXRlZF9hdDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBQYWdpbmF0ZWRRdWl6emVzID0ge1xuICBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZFF1aXp6ZXMnO1xuICBxdWl6emVzOiBBcnJheTxRdWl6PjtcbiAgaGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkTWVRdWl6emVzID0ge1xuICBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZE1lUXVpenplcyc7XG4gIG1lUXVpenplczogQXJyYXk8UXVpej47XG4gIG1lSGFzTW9yZTogU2NhbGFyc1snQm9vbGVhbiddO1xufTtcblxuZXhwb3J0IHR5cGUgUGFnaW5hdGVkQ29tbWVudHMgPSB7XG4gIF9fdHlwZW5hbWU/OiAnUGFnaW5hdGVkQ29tbWVudHMnO1xuICBjb21tZW50czogQXJyYXk8Q29tbWVudD47XG4gIGhhc01vcmU6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn07XG5cbmV4cG9ydCB0eXBlIFVzZXJzQW5zd2VyID0ge1xuICBxdWVzdGlvbl9pZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNob2ljZV9pZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBDaGVja3NBbnN3ZXJJbnB1dCA9IHtcbiAgcXVpel9pZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgdXNlcnNfYW5zd2VyOiBBcnJheTxVc2Vyc0Fuc3dlcj47XG59O1xuXG5leHBvcnQgdHlwZSBDaG9pY2VJbnB1dCA9IHtcbiAgY2hvaWNlX2lkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdmFsdWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjaG9pY2VQaG90bz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXN0aW9uSW5wdXQgPSB7XG4gIHF1ZXN0aW9uX2lkOiBTY2FsYXJzWydJRCddO1xuICBxdWVzdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHF1ZXN0aW9uX3Bob3RvPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBjaG9pY2VzOiBBcnJheTxDaG9pY2VJbnB1dD47XG4gIGFuc3dlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGV4cGxhbmF0aW9uPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICB3aXRoX2V4cGxhbmF0aW9uPzogTWF5YmU8U2NhbGFyc1snQm9vbGVhbiddPjtcbiAgaGludD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgd2l0aF9oaW50PzogTWF5YmU8U2NhbGFyc1snQm9vbGVhbiddPjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1aXpJbnB1dCA9IHtcbiAgdGl0bGU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBkZXNjcmlwdGlvbjogU2NhbGFyc1snU3RyaW5nJ107XG4gIHF1aXpfcGhvdG8/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHF1ZXN0aW9uczogQXJyYXk8UXVlc3Rpb25JbnB1dD47XG59O1xuXG5leHBvcnQgdHlwZSBMb2dpbklucHV0ID0ge1xuICBlbWFpbE9yVXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBSZWdpc3RlcklucHV0ID0ge1xuICB1c2VybmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGVtYWlsOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBjb25maXJtX3Bhc3N3b3JkOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZmlyc3RfbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGxhc3RfbmFtZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIHllYXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtb250aDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRheTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGdlbmRlcjogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVBY2NvdW50SW5wdXQgPSB7XG4gIHVzZXJuYW1lPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBlbWFpbD86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcGFzc3dvcmQ/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGNvbmZpcm1fcGFzc3dvcmQ/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGF2YXRhcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgY292ZXJfcGhvdG8/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG59O1xuXG5leHBvcnQgdHlwZSBTb2NpYWxJbnB1dCA9IHtcbiAgZmFjZWJvb2s6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0d2l0dGVyOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgaW5zdGFncmFtOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgeW91dHViZTogU2NhbGFyc1snU3RyaW5nJ107XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVQcm9maWxlSW5wdXQgPSB7XG4gIGZpcnN0X25hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBsYXN0X25hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBiaW8/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHllYXI6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBtb250aDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRheTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNvdW50cnk/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIHNvY2lhbD86IE1heWJlPFNvY2lhbElucHV0Pjtcbn07XG5cbmV4cG9ydCB0eXBlIFF1ZXJ5ID0ge1xuICBfX3R5cGVuYW1lPzogJ1F1ZXJ5JztcbiAgcXVpenplczogUGFnaW5hdGVkUXVpenplcztcbiAgbWVRdWl6emVzOiBQYWdpbmF0ZWRNZVF1aXp6ZXM7XG4gIHF1aXpUb1VwZGF0ZTogUXVpejtcbiAgc2luZ2xlUXVpej86IE1heWJlPFF1aXo+O1xuICBxdWVzdGlvbnM/OiBNYXliZTxBcnJheTxRdWVzdGlvbj4+O1xuICBjb21tZW50cz86IE1heWJlPFBhZ2luYXRlZENvbW1lbnRzPjtcbiAgbWU/OiBNYXliZTxVc2VyPjtcbiAgZ2V0VXNlcnM6IEFycmF5PFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBRdWVyeVF1aXp6ZXNBcmdzID0ge1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlNZVF1aXp6ZXNBcmdzID0ge1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlRdWl6VG9VcGRhdGVBcmdzID0ge1xuICBxdWl6X2lkOiBTY2FsYXJzWydJbnQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgUXVlcnlTaW5nbGVRdWl6QXJncyA9IHtcbiAgcXVpel9pZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5UXVlc3Rpb25zQXJncyA9IHtcbiAgcXVpel9pZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXJ5Q29tbWVudHNBcmdzID0ge1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgcXVpel9pZDogU2NhbGFyc1snSW50J107XG59O1xuXG5leHBvcnQgdHlwZSBNdXRhdGlvbiA9IHtcbiAgX190eXBlbmFtZT86ICdNdXRhdGlvbic7XG4gIGNoZWNrQW5zd2VyPzogTWF5YmU8UmVzdWx0PjtcbiAgY3JlYXRlQ29tbWVudDogQ29tbWVudDtcbiAgY3JlYXRlUXVpejogUXVpejtcbiAgZGVsZXRlQ29tbWVudDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRlbGV0ZVF1aXo6IFNjYWxhcnNbJ1N0cmluZyddO1xuICB0b2dnbGVMaWtlOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgdXBkYXRlUXVpejogUXVpejtcbiAgZGVsZXRlVXNlcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIGxvZ2luPzogTWF5YmU8VXNlcj47XG4gIGxvZ291dDogU2NhbGFyc1snQm9vbGVhbiddO1xuICByZWdpc3RlcjogVXNlcjtcbiAgdXBkYXRlQWNjb3VudDogVXNlcjtcbiAgdXBkYXRlUHJvZmlsZT86IE1heWJlPFVzZXI+O1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNoZWNrQW5zd2VyQXJncyA9IHtcbiAgZGF0YTogQ2hlY2tzQW5zd2VySW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uQ3JlYXRlQ29tbWVudEFyZ3MgPSB7XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBxdWl6X2lkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkNyZWF0ZVF1aXpBcmdzID0ge1xuICBkYXRhOiBRdWl6SW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uRGVsZXRlQ29tbWVudEFyZ3MgPSB7XG4gIGNvbW1lbnRJZDogU2NhbGFyc1snRmxvYXQnXTtcbiAgcXVpel9pZDogU2NhbGFyc1snRmxvYXQnXTtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25EZWxldGVRdWl6QXJncyA9IHtcbiAgcXVpel9pZDogU2NhbGFyc1snSW50J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVG9nZ2xlTGlrZUFyZ3MgPSB7XG4gIHF1aXpfaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlUXVpekFyZ3MgPSB7XG4gIGlucHV0czogUXVpeklucHV0O1xuICBxdWl6X2lkOiBTY2FsYXJzWydGbG9hdCddO1xufTtcblxuXG5leHBvcnQgdHlwZSBNdXRhdGlvbkxvZ2luQXJncyA9IHtcbiAgZGF0YTogTG9naW5JbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25SZWdpc3RlckFyZ3MgPSB7XG4gIGRhdGE6IFJlZ2lzdGVySW5wdXQ7XG59O1xuXG5cbmV4cG9ydCB0eXBlIE11dGF0aW9uVXBkYXRlQWNjb3VudEFyZ3MgPSB7XG4gIGRhdGE6IFVwZGF0ZUFjY291bnRJbnB1dDtcbn07XG5cblxuZXhwb3J0IHR5cGUgTXV0YXRpb25VcGRhdGVQcm9maWxlQXJncyA9IHtcbiAgZGF0YTogVXBkYXRlUHJvZmlsZUlucHV0O1xufTtcblxuZXhwb3J0IHR5cGUgQ29tbWVudFJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdDb21tZW50JyB9XG4gICYgUGljazxDb21tZW50LCAnaWQnIHwgJ3RleHQnIHwgJ2NyZWF0ZWRfYXQnPlxuICAmIHsgYXV0aG9yOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZScgfCAnZW1haWwnIHwgJ2F2YXRhcic+XG4gICAgJiB7IHByb2ZpbGU6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdQcm9maWxlJyB9XG4gICAgICAmIFBpY2s8UHJvZmlsZSwgJ25hbWUnPlxuICAgICkgfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFF1aXp6ZXNSZXNwb25zZUZyYWdtZW50ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVpeicgfVxuICAmIFBpY2s8UXVpeiwgJ2lkJyB8ICd0aXRsZScgfCAnZGVzY3JpcHRpb24nIHwgJ3F1aXpfcGhvdG8nIHwgJ2NyZWF0ZWRfYXQnIHwgJ2lzTGlrZWQnIHwgJ2xpa2VzQ291bnQnIHwgJ2NvbW1lbnRzQ291bnQnIHwgJ3Rha2Vyc0NvdW50JyB8ICdxdWVzdGlvbnNDb3VudCc+XG4gICYgeyBsaWtlczogQXJyYXk8KFxuICAgIHsgX190eXBlbmFtZT86ICdMaWtlJyB9XG4gICAgJiBQaWNrPExpa2UsICdxdWl6X2lkJyB8ICdhdXRob3JfaWQnPlxuICApPiwgYXV0aG9yOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZScgfCAnZW1haWwnIHwgJ2F2YXRhcic+XG4gICAgJiB7IHByb2ZpbGU6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdQcm9maWxlJyB9XG4gICAgICAmIFBpY2s8UHJvZmlsZSwgJ25hbWUnPlxuICAgICkgfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFJlc3VsdFJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdSZXN1bHQnIH1cbiAgJiBQaWNrPFJlc3VsdCwgJ2lkJyB8ICdzY29yZScgfCAnY3VycmVudF90b3RhbF9xdWVzdGlvbnMnIHwgJ2Fuc3dlcmVkX2F0Jz5cbiAgJiB7IHRha2VyOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFBpY2s8VXNlciwgJ3VzZXJuYW1lJyB8ICdhdmF0YXInIHwgJ2VtYWlsJz5cbiAgICAmIHsgcHJvZmlsZTogKFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1Byb2ZpbGUnIH1cbiAgICAgICYgUGljazxQcm9maWxlLCAnbmFtZSc+XG4gICAgKSB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgVXNlclJlc3BvbnNlRnJhZ21lbnQgPSAoXG4gIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICYgUGljazxVc2VyLCAnaWQnIHwgJ3VzZXJuYW1lJyB8ICdlbWFpbCcgfCAnYXZhdGFyJyB8ICdjb3Zlcl9waG90bycgfCAnY3JlYXRlZF9hdCcgfCAndXBkYXRlZF9hdCc+XG4gICYgeyBwcm9maWxlOiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Byb2ZpbGUnIH1cbiAgICAmIFBpY2s8UHJvZmlsZSwgJ2lkJyB8ICdmaXJzdF9uYW1lJyB8ICdsYXN0X25hbWUnIHwgJ2JpcnRoZGF5JyB8ICdnZW5kZXInIHwgJ25hbWUnIHwgJ2NvdW50cnknIHwgJ2JpbycgfCAnc29jaWFsJz5cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBDaGVja0Fuc3dlck11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBkYXRhOiBDaGVja3NBbnN3ZXJJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENoZWNrQW5zd2VyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgY2hlY2tBbnN3ZXI/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1Jlc3VsdCcgfVxuICAgICYgUmVzdWx0UmVzcG9uc2VGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVDb21tZW50TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHRleHQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBxdWl6X2lkOiBTY2FsYXJzWydGbG9hdCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgQ3JlYXRlQ29tbWVudE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGNyZWF0ZUNvbW1lbnQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnQ29tbWVudCcgfVxuICAgICYgUGljazxDb21tZW50LCAnaWQnIHwgJ3RleHQnIHwgJ2NyZWF0ZWRfYXQnPlxuICAgICYgeyBhdXRob3I6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZScgfCAnZW1haWwnIHwgJ2F2YXRhcic+XG4gICAgKSB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlUXVpek11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICB0aXRsZTogU2NhbGFyc1snU3RyaW5nJ107XG4gIGRlc2NyaXB0aW9uOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgcXVpel9waG90bz86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbiAgcXVlc3Rpb25zOiBBcnJheTxRdWVzdGlvbklucHV0Pjtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENyZWF0ZVF1aXpNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyBjcmVhdGVRdWl6OiAoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1F1aXonIH1cbiAgICAmIFBpY2s8UXVpeiwgJ3RpdGxlJyB8ICdkZXNjcmlwdGlvbicgfCAncXVpel9waG90byc+XG4gICAgJiB7IHF1ZXN0aW9uczogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1F1ZXN0aW9uJyB9XG4gICAgICAmIFBpY2s8UXVlc3Rpb24sICdxdWVzdGlvbl9pZCcgfCAncXVlc3Rpb24nIHwgJ3F1ZXN0aW9uX3Bob3RvJyB8ICdjaG9pY2VzJyB8ICdhbnN3ZXInIHwgJ2V4cGxhbmF0aW9uJyB8ICd3aXRoX2V4cGxhbmF0aW9uJyB8ICdoaW50JyB8ICd3aXRoX2hpbnQnPlxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBEZWxldGVRdWl6TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHF1aXpfaWQ6IFNjYWxhcnNbJ0ludCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgRGVsZXRlUXVpek11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnZGVsZXRlUXVpeic+XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uVmFyaWFibGVzID0gRXhhY3Q8e1xuICBlbWFpbE9yVXNlcm5hbWU6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG59PjtcblxuXG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IGxvZ2luPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIExvZ291dE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiBQaWNrPE11dGF0aW9uLCAnbG9nb3V0Jz5cbik7XG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHVzZXJuYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZW1haWw6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBwYXNzd29yZDogU2NhbGFyc1snU3RyaW5nJ107XG4gIGNvbmZpcm1fcGFzc3dvcmQ6IFNjYWxhcnNbJ1N0cmluZyddO1xuICBmaXJzdF9uYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgbGFzdF9uYW1lOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgeWVhcjogU2NhbGFyc1snU3RyaW5nJ107XG4gIG1vbnRoOiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZGF5OiBTY2FsYXJzWydTdHJpbmcnXTtcbiAgZ2VuZGVyOiBTY2FsYXJzWydTdHJpbmcnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIHsgcmVnaXN0ZXI6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBUb2dnbGVMaWtlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIHF1aXpfaWQ6IFNjYWxhcnNbJ0Zsb2F0J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBUb2dnbGVMaWtlTXV0YXRpb24gPSAoXG4gIHsgX190eXBlbmFtZT86ICdNdXRhdGlvbicgfVxuICAmIFBpY2s8TXV0YXRpb24sICd0b2dnbGVMaWtlJz5cbik7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUFjY291bnRNdXRhdGlvblZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgZGF0YTogVXBkYXRlQWNjb3VudElucHV0O1xufT47XG5cblxuZXhwb3J0IHR5cGUgVXBkYXRlQWNjb3VudE11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVwZGF0ZUFjY291bnQ6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnVXNlcicgfVxuICAgICYgVXNlclJlc3BvbnNlRnJhZ21lbnRcbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVQcm9maWxlTXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGRhdGE6IFVwZGF0ZVByb2ZpbGVJbnB1dDtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVByb2ZpbGVNdXRhdGlvbiA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ011dGF0aW9uJyB9XG4gICYgeyB1cGRhdGVQcm9maWxlPzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgJiBVc2VyUmVzcG9uc2VGcmFnbWVudFxuICApPiB9XG4pO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVRdWl6TXV0YXRpb25WYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGlucHV0czogUXVpeklucHV0O1xuICBxdWl6X2lkOiBTY2FsYXJzWydGbG9hdCddO1xufT47XG5cblxuZXhwb3J0IHR5cGUgVXBkYXRlUXVpek11dGF0aW9uID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnTXV0YXRpb24nIH1cbiAgJiB7IHVwZGF0ZVF1aXo6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUXVpeicgfVxuICAgICYgUGljazxRdWl6LCAndGl0bGUnIHwgJ2Rlc2NyaXB0aW9uJyB8ICdxdWl6X3Bob3RvJz5cbiAgICAmIHsgcXVlc3Rpb25zOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUXVlc3Rpb24nIH1cbiAgICAgICYgUGljazxRdWVzdGlvbiwgJ3F1ZXN0aW9uX2lkJyB8ICdxdWVzdGlvbicgfCAncXVlc3Rpb25fcGhvdG8nIHwgJ2Nob2ljZXMnIHwgJ2Fuc3dlcicgfCAnZXhwbGFuYXRpb24nIHwgJ3dpdGhfZXhwbGFuYXRpb24nIHwgJ2hpbnQnIHwgJ3dpdGhfaGludCc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIENvbW1lbnRzUXVlcnlWYXJpYWJsZXMgPSBFeGFjdDx7XG4gIGxpbWl0OiBTY2FsYXJzWydJbnQnXTtcbiAgY3Vyc29yPzogTWF5YmU8U2NhbGFyc1snU3RyaW5nJ10+O1xuICBxdWl6X2lkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIENvbW1lbnRzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgY29tbWVudHM/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1BhZ2luYXRlZENvbW1lbnRzJyB9XG4gICAgJiBQaWNrPFBhZ2luYXRlZENvbW1lbnRzLCAnaGFzTW9yZSc+XG4gICAgJiB7IGNvbW1lbnRzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnQ29tbWVudCcgfVxuICAgICAgJiBDb21tZW50UmVzcG9uc2VGcmFnbWVudFxuICAgICk+IH1cbiAgKT4gfVxuKTtcblxuZXhwb3J0IHR5cGUgTWVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHsgW2tleTogc3RyaW5nXTogbmV2ZXI7IH0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgbWU/OiBNYXliZTwoXG4gICAgeyBfX3R5cGVuYW1lPzogJ1VzZXInIH1cbiAgICAmIFVzZXJSZXNwb25zZUZyYWdtZW50XG4gICk+IH1cbik7XG5cbmV4cG9ydCB0eXBlIE1lUXVpenplc1F1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBsaW1pdDogU2NhbGFyc1snSW50J107XG4gIGN1cnNvcj86IE1heWJlPFNjYWxhcnNbJ1N0cmluZyddPjtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIE1lUXVpenplc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IG1lUXVpenplczogKFxuICAgIHsgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRNZVF1aXp6ZXMnIH1cbiAgICAmIFBpY2s8UGFnaW5hdGVkTWVRdWl6emVzLCAnbWVIYXNNb3JlJz5cbiAgICAmIHsgbWVRdWl6emVzOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUXVpeicgfVxuICAgICAgJiBRdWl6emVzUmVzcG9uc2VGcmFnbWVudFxuICAgICk+IH1cbiAgKSB9XG4pO1xuXG5leHBvcnQgdHlwZSBRdWVzdGlvbnNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgcXVpel9pZDogU2NhbGFyc1snSW50J107XG4gIHdpdGhBbnN3ZXI6IFNjYWxhcnNbJ0Jvb2xlYW4nXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFF1ZXN0aW9uc1F1ZXJ5ID0gKFxuICB7IF9fdHlwZW5hbWU/OiAnUXVlcnknIH1cbiAgJiB7IHF1ZXN0aW9ucz86IE1heWJlPEFycmF5PChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUXVlc3Rpb24nIH1cbiAgICAmIE1ha2VPcHRpb25hbDxQaWNrPFF1ZXN0aW9uLCAncXVlc3Rpb25faWQnIHwgJ3F1ZXN0aW9uJyB8ICdxdWVzdGlvbl9waG90bycgfCAnY2hvaWNlcycgfCAnaGludCcgfCAnd2l0aF9oaW50JyB8ICdhbnN3ZXInPiwgJ2Fuc3dlcic+XG4gICk+PiB9XG4pO1xuXG5leHBvcnQgdHlwZSBRdWl6VG9VcGRhdGVRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgcXVpel9pZDogU2NhbGFyc1snSW50J107XG59PjtcblxuXG5leHBvcnQgdHlwZSBRdWl6VG9VcGRhdGVRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBxdWl6VG9VcGRhdGU6IChcbiAgICB7IF9fdHlwZW5hbWU/OiAnUXVpeicgfVxuICAgICYgUGljazxRdWl6LCAndGl0bGUnIHwgJ2Rlc2NyaXB0aW9uJyB8ICdxdWl6X3Bob3RvJz5cbiAgICAmIHsgcXVlc3Rpb25zOiBBcnJheTwoXG4gICAgICB7IF9fdHlwZW5hbWU/OiAnUXVlc3Rpb24nIH1cbiAgICAgICYgUGljazxRdWVzdGlvbiwgJ3F1ZXN0aW9uX2lkJyB8ICdxdWVzdGlvbicgfCAncXVlc3Rpb25fcGhvdG8nIHwgJ2Nob2ljZXMnIHwgJ2Fuc3dlcicgfCAnZXhwbGFuYXRpb24nIHwgJ3dpdGhfZXhwbGFuYXRpb24nIHwgJ2hpbnQnIHwgJ3dpdGhfaGludCc+XG4gICAgKT4gfVxuICApIH1cbik7XG5cbmV4cG9ydCB0eXBlIFF1aXp6ZXNRdWVyeVZhcmlhYmxlcyA9IEV4YWN0PHtcbiAgbGltaXQ6IFNjYWxhcnNbJ0ludCddO1xuICBjdXJzb3I/OiBNYXliZTxTY2FsYXJzWydTdHJpbmcnXT47XG59PjtcblxuXG5leHBvcnQgdHlwZSBRdWl6emVzUXVlcnkgPSAoXG4gIHsgX190eXBlbmFtZT86ICdRdWVyeScgfVxuICAmIHsgcXVpenplczogKFxuICAgIHsgX190eXBlbmFtZT86ICdQYWdpbmF0ZWRRdWl6emVzJyB9XG4gICAgJiBQaWNrPFBhZ2luYXRlZFF1aXp6ZXMsICdoYXNNb3JlJz5cbiAgICAmIHsgcXVpenplczogQXJyYXk8KFxuICAgICAgeyBfX3R5cGVuYW1lPzogJ1F1aXonIH1cbiAgICAgICYgUXVpenplc1Jlc3BvbnNlRnJhZ21lbnRcbiAgICApPiB9XG4gICkgfVxuKTtcblxuZXhwb3J0IHR5cGUgU2luZ2xlUXVpelF1ZXJ5VmFyaWFibGVzID0gRXhhY3Q8e1xuICBxdWl6X2lkOiBTY2FsYXJzWydJbnQnXTtcbn0+O1xuXG5cbmV4cG9ydCB0eXBlIFNpbmdsZVF1aXpRdWVyeSA9IChcbiAgeyBfX3R5cGVuYW1lPzogJ1F1ZXJ5JyB9XG4gICYgeyBzaW5nbGVRdWl6PzogTWF5YmU8KFxuICAgIHsgX190eXBlbmFtZT86ICdRdWl6JyB9XG4gICAgJiBQaWNrPFF1aXosICdpZCcgfCAncXVpel9waG90bycgfCAndGl0bGUnIHwgJ2Rlc2NyaXB0aW9uJyB8ICdpc0xpa2VkJyB8ICdsaWtlc0NvdW50JyB8ICdjb21tZW50c0NvdW50JyB8ICdjcmVhdGVkX2F0JyB8ICdxdWVzdGlvbnNDb3VudCcgfCAndGFrZXJzQ291bnQnIHwgJ2lzVGFrZW4nPlxuICAgICYgeyBhdXRob3I6IChcbiAgICAgIHsgX190eXBlbmFtZT86ICdVc2VyJyB9XG4gICAgICAmIFBpY2s8VXNlciwgJ2lkJyB8ICd1c2VybmFtZScgfCAnYXZhdGFyJyB8ICdlbWFpbCc+XG4gICAgICAmIHsgcHJvZmlsZTogKFxuICAgICAgICB7IF9fdHlwZW5hbWU/OiAnUHJvZmlsZScgfVxuICAgICAgICAmIFBpY2s8UHJvZmlsZSwgJ25hbWUnPlxuICAgICAgKSB9XG4gICAgKSB9XG4gICk+IH1cbik7XG5cbmV4cG9ydCBjb25zdCBDb21tZW50UmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBDb21tZW50UmVzcG9uc2Ugb24gQ29tbWVudCB7XG4gIGlkXG4gIGF1dGhvciB7XG4gICAgaWRcbiAgICB1c2VybmFtZVxuICAgIGVtYWlsXG4gICAgYXZhdGFyXG4gICAgcHJvZmlsZSB7XG4gICAgICBuYW1lXG4gICAgfVxuICB9XG4gIHRleHRcbiAgY3JlYXRlZF9hdFxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUXVpenplc1Jlc3BvbnNlRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgUXVpenplc1Jlc3BvbnNlIG9uIFF1aXoge1xuICBpZFxuICB0aXRsZVxuICBkZXNjcmlwdGlvblxuICBxdWl6X3Bob3RvXG4gIGNyZWF0ZWRfYXRcbiAgbGlrZXMge1xuICAgIHF1aXpfaWRcbiAgICBhdXRob3JfaWRcbiAgfVxuICBhdXRob3Ige1xuICAgIGlkXG4gICAgdXNlcm5hbWVcbiAgICBlbWFpbFxuICAgIGF2YXRhclxuICAgIHByb2ZpbGUge1xuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuICBpc0xpa2VkXG4gIGxpa2VzQ291bnRcbiAgY29tbWVudHNDb3VudFxuICB0YWtlcnNDb3VudFxuICBxdWVzdGlvbnNDb3VudFxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgUmVzdWx0UmVzcG9uc2VGcmFnbWVudERvYyA9IGdxbGBcbiAgICBmcmFnbWVudCBSZXN1bHRSZXNwb25zZSBvbiBSZXN1bHQge1xuICBpZFxuICB0YWtlciB7XG4gICAgdXNlcm5hbWVcbiAgICBhdmF0YXJcbiAgICBlbWFpbFxuICAgIHByb2ZpbGUge1xuICAgICAgbmFtZVxuICAgIH1cbiAgfVxuICBzY29yZVxuICBjdXJyZW50X3RvdGFsX3F1ZXN0aW9uc1xuICBhbnN3ZXJlZF9hdFxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgVXNlclJlc3BvbnNlRnJhZ21lbnREb2MgPSBncWxgXG4gICAgZnJhZ21lbnQgVXNlclJlc3BvbnNlIG9uIFVzZXIge1xuICBpZFxuICB1c2VybmFtZVxuICBlbWFpbFxuICBhdmF0YXJcbiAgY292ZXJfcGhvdG9cbiAgY3JlYXRlZF9hdFxuICB1cGRhdGVkX2F0XG4gIHByb2ZpbGUge1xuICAgIGlkXG4gICAgZmlyc3RfbmFtZVxuICAgIGxhc3RfbmFtZVxuICAgIGJpcnRoZGF5XG4gICAgZ2VuZGVyXG4gICAgbmFtZVxuICAgIGNvdW50cnlcbiAgICBiaW9cbiAgICBzb2NpYWxcbiAgfVxufVxuICAgIGA7XG5leHBvcnQgY29uc3QgQ2hlY2tBbnN3ZXJEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDaGVja0Fuc3dlcigkZGF0YTogQ2hlY2tzQW5zd2VySW5wdXQhKSB7XG4gIGNoZWNrQW5zd2VyKGRhdGE6ICRkYXRhKSB7XG4gICAgLi4uUmVzdWx0UmVzcG9uc2VcbiAgfVxufVxuICAgICR7UmVzdWx0UmVzcG9uc2VGcmFnbWVudERvY31gO1xuZXhwb3J0IHR5cGUgQ2hlY2tBbnN3ZXJNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248Q2hlY2tBbnN3ZXJNdXRhdGlvbiwgQ2hlY2tBbnN3ZXJNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDaGVja0Fuc3dlck11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUNoZWNrQW5zd2VyTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ2hlY2tBbnN3ZXJNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NoZWNrQW5zd2VyTXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VDaGVja0Fuc3dlck11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGRhdGE6IC8vIHZhbHVlIGZvciAnZGF0YSdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tBbnN3ZXJNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPENoZWNrQW5zd2VyTXV0YXRpb24sIENoZWNrQW5zd2VyTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q2hlY2tBbnN3ZXJNdXRhdGlvbiwgQ2hlY2tBbnN3ZXJNdXRhdGlvblZhcmlhYmxlcz4oQ2hlY2tBbnN3ZXJEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ2hlY2tBbnN3ZXJNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VDaGVja0Fuc3dlck11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENoZWNrQW5zd2VyTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q2hlY2tBbnN3ZXJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDaGVja0Fuc3dlck11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENoZWNrQW5zd2VyTXV0YXRpb24sIENoZWNrQW5zd2VyTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENyZWF0ZUNvbW1lbnREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVDb21tZW50KCR0ZXh0OiBTdHJpbmchLCAkcXVpel9pZDogRmxvYXQhKSB7XG4gIGNyZWF0ZUNvbW1lbnQodGV4dDogJHRleHQsIHF1aXpfaWQ6ICRxdWl6X2lkKSB7XG4gICAgaWRcbiAgICBhdXRob3Ige1xuICAgICAgaWRcbiAgICAgIHVzZXJuYW1lXG4gICAgICBlbWFpbFxuICAgICAgYXZhdGFyXG4gICAgfVxuICAgIHRleHRcbiAgICBjcmVhdGVkX2F0XG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgQ3JlYXRlQ29tbWVudE11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxDcmVhdGVDb21tZW50TXV0YXRpb24sIENyZWF0ZUNvbW1lbnRNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VDcmVhdGVDb21tZW50TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlQ3JlYXRlQ29tbWVudE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUNyZWF0ZUNvbW1lbnRNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW2NyZWF0ZUNvbW1lbnRNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZUNyZWF0ZUNvbW1lbnRNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB0ZXh0OiAvLyB2YWx1ZSBmb3IgJ3RleHQnXG4gKiAgICAgIHF1aXpfaWQ6IC8vIHZhbHVlIGZvciAncXVpel9pZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQ3JlYXRlQ29tbWVudE11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8Q3JlYXRlQ29tbWVudE11dGF0aW9uLCBDcmVhdGVDb21tZW50TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248Q3JlYXRlQ29tbWVudE11dGF0aW9uLCBDcmVhdGVDb21tZW50TXV0YXRpb25WYXJpYWJsZXM+KENyZWF0ZUNvbW1lbnREb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgQ3JlYXRlQ29tbWVudE11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNyZWF0ZUNvbW1lbnRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBDcmVhdGVDb21tZW50TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8Q3JlYXRlQ29tbWVudE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZUNvbW1lbnRNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxDcmVhdGVDb21tZW50TXV0YXRpb24sIENyZWF0ZUNvbW1lbnRNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgQ3JlYXRlUXVpekRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIENyZWF0ZVF1aXooJHRpdGxlOiBTdHJpbmchLCAkZGVzY3JpcHRpb246IFN0cmluZyEsICRxdWl6X3Bob3RvOiBTdHJpbmcsICRxdWVzdGlvbnM6IFtRdWVzdGlvbklucHV0IV0hKSB7XG4gIGNyZWF0ZVF1aXooXG4gICAgZGF0YToge3RpdGxlOiAkdGl0bGUsIGRlc2NyaXB0aW9uOiAkZGVzY3JpcHRpb24sIHF1aXpfcGhvdG86ICRxdWl6X3Bob3RvLCBxdWVzdGlvbnM6ICRxdWVzdGlvbnN9XG4gICkge1xuICAgIHRpdGxlXG4gICAgZGVzY3JpcHRpb25cbiAgICBxdWl6X3Bob3RvXG4gICAgcXVlc3Rpb25zIHtcbiAgICAgIHF1ZXN0aW9uX2lkXG4gICAgICBxdWVzdGlvblxuICAgICAgcXVlc3Rpb25fcGhvdG9cbiAgICAgIGNob2ljZXNcbiAgICAgIGFuc3dlclxuICAgICAgZXhwbGFuYXRpb25cbiAgICAgIHdpdGhfZXhwbGFuYXRpb25cbiAgICAgIGhpbnRcbiAgICAgIHdpdGhfaGludFxuICAgIH1cbiAgfVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBDcmVhdGVRdWl6TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPENyZWF0ZVF1aXpNdXRhdGlvbiwgQ3JlYXRlUXVpek11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUNyZWF0ZVF1aXpNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VDcmVhdGVRdWl6TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ3JlYXRlUXVpek11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbY3JlYXRlUXVpek11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlQ3JlYXRlUXVpek11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHRpdGxlOiAvLyB2YWx1ZSBmb3IgJ3RpdGxlJ1xuICogICAgICBkZXNjcmlwdGlvbjogLy8gdmFsdWUgZm9yICdkZXNjcmlwdGlvbidcbiAqICAgICAgcXVpel9waG90bzogLy8gdmFsdWUgZm9yICdxdWl6X3Bob3RvJ1xuICogICAgICBxdWVzdGlvbnM6IC8vIHZhbHVlIGZvciAncXVlc3Rpb25zJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VDcmVhdGVRdWl6TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxDcmVhdGVRdWl6TXV0YXRpb24sIENyZWF0ZVF1aXpNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxDcmVhdGVRdWl6TXV0YXRpb24sIENyZWF0ZVF1aXpNdXRhdGlvblZhcmlhYmxlcz4oQ3JlYXRlUXVpekRvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBDcmVhdGVRdWl6TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ3JlYXRlUXVpek11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIENyZWF0ZVF1aXpNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxDcmVhdGVRdWl6TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgQ3JlYXRlUXVpek11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPENyZWF0ZVF1aXpNdXRhdGlvbiwgQ3JlYXRlUXVpek11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBEZWxldGVRdWl6RG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gRGVsZXRlUXVpeigkcXVpel9pZDogSW50ISkge1xuICBkZWxldGVRdWl6KHF1aXpfaWQ6ICRxdWl6X2lkKVxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBEZWxldGVRdWl6TXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPERlbGV0ZVF1aXpNdXRhdGlvbiwgRGVsZXRlUXVpek11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZURlbGV0ZVF1aXpNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VEZWxldGVRdWl6TXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlRGVsZXRlUXVpek11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbZGVsZXRlUXVpek11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlRGVsZXRlUXVpek11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIHF1aXpfaWQ6IC8vIHZhbHVlIGZvciAncXVpel9pZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlRGVsZXRlUXVpek11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8RGVsZXRlUXVpek11dGF0aW9uLCBEZWxldGVRdWl6TXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248RGVsZXRlUXVpek11dGF0aW9uLCBEZWxldGVRdWl6TXV0YXRpb25WYXJpYWJsZXM+KERlbGV0ZVF1aXpEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgRGVsZXRlUXVpek11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZURlbGV0ZVF1aXpNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBEZWxldGVRdWl6TXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8RGVsZXRlUXVpek11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIERlbGV0ZVF1aXpNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxEZWxldGVRdWl6TXV0YXRpb24sIERlbGV0ZVF1aXpNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgTG9naW5Eb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBMb2dpbigkZW1haWxPclVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcbiAgbG9naW4oZGF0YToge2VtYWlsT3JVc2VybmFtZTogJGVtYWlsT3JVc2VybmFtZSwgcGFzc3dvcmQ6ICRwYXNzd29yZH0pIHtcbiAgICAuLi5Vc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7VXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlTG9naW5NdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VMb2dpbk11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ2luTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtsb2dpbk11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlTG9naW5NdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBlbWFpbE9yVXNlcm5hbWU6IC8vIHZhbHVlIGZvciAnZW1haWxPclVzZXJuYW1lJ1xuICogICAgICBwYXNzd29yZDogLy8gdmFsdWUgZm9yICdwYXNzd29yZCdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTG9naW5NdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248TG9naW5NdXRhdGlvbiwgTG9naW5NdXRhdGlvblZhcmlhYmxlcz4oTG9naW5Eb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgTG9naW5NdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VMb2dpbk11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIExvZ2luTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8TG9naW5NdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dpbk11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPExvZ2luTXV0YXRpb24sIExvZ2luTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IExvZ291dERvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIExvZ291dCB7XG4gIGxvZ291dFxufVxuICAgIGA7XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248TG9nb3V0TXV0YXRpb24sIExvZ291dE11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZUxvZ291dE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZUxvZ291dE11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZUxvZ291dE11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbbG9nb3V0TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VMb2dvdXRNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VMb2dvdXRNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPExvZ291dE11dGF0aW9uLCBMb2dvdXRNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+KExvZ291dERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VMb2dvdXRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxMb2dvdXRNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBMb2dvdXRNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxMb2dvdXRNdXRhdGlvbiwgTG9nb3V0TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gUmVnaXN0ZXIoJHVzZXJuYW1lOiBTdHJpbmchLCAkZW1haWw6IFN0cmluZyEsICRwYXNzd29yZDogU3RyaW5nISwgJGNvbmZpcm1fcGFzc3dvcmQ6IFN0cmluZyEsICRmaXJzdF9uYW1lOiBTdHJpbmchLCAkbGFzdF9uYW1lOiBTdHJpbmchLCAkeWVhcjogU3RyaW5nISwgJG1vbnRoOiBTdHJpbmchLCAkZGF5OiBTdHJpbmchLCAkZ2VuZGVyOiBTdHJpbmchKSB7XG4gIHJlZ2lzdGVyKFxuICAgIGRhdGE6IHt1c2VybmFtZTogJHVzZXJuYW1lLCBlbWFpbDogJGVtYWlsLCBwYXNzd29yZDogJHBhc3N3b3JkLCBjb25maXJtX3Bhc3N3b3JkOiAkY29uZmlybV9wYXNzd29yZCwgZmlyc3RfbmFtZTogJGZpcnN0X25hbWUsIGxhc3RfbmFtZTogJGxhc3RfbmFtZSwgeWVhcjogJHllYXIsIG1vbnRoOiAkbW9udGgsIGRheTogJGRheSwgZ2VuZGVyOiAkZ2VuZGVyfVxuICApIHtcbiAgICAuLi5Vc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7VXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlUmVnaXN0ZXJNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VSZWdpc3Rlck11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVJlZ2lzdGVyTXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFtyZWdpc3Rlck11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlUmVnaXN0ZXJNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICB1c2VybmFtZTogLy8gdmFsdWUgZm9yICd1c2VybmFtZSdcbiAqICAgICAgZW1haWw6IC8vIHZhbHVlIGZvciAnZW1haWwnXG4gKiAgICAgIHBhc3N3b3JkOiAvLyB2YWx1ZSBmb3IgJ3Bhc3N3b3JkJ1xuICogICAgICBjb25maXJtX3Bhc3N3b3JkOiAvLyB2YWx1ZSBmb3IgJ2NvbmZpcm1fcGFzc3dvcmQnXG4gKiAgICAgIGZpcnN0X25hbWU6IC8vIHZhbHVlIGZvciAnZmlyc3RfbmFtZSdcbiAqICAgICAgbGFzdF9uYW1lOiAvLyB2YWx1ZSBmb3IgJ2xhc3RfbmFtZSdcbiAqICAgICAgeWVhcjogLy8gdmFsdWUgZm9yICd5ZWFyJ1xuICogICAgICBtb250aDogLy8gdmFsdWUgZm9yICdtb250aCdcbiAqICAgICAgZGF5OiAvLyB2YWx1ZSBmb3IgJ2RheSdcbiAqICAgICAgZ2VuZGVyOiAvLyB2YWx1ZSBmb3IgJ2dlbmRlcidcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVnaXN0ZXJNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248UmVnaXN0ZXJNdXRhdGlvbiwgUmVnaXN0ZXJNdXRhdGlvblZhcmlhYmxlcz4oUmVnaXN0ZXJEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgUmVnaXN0ZXJNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VSZWdpc3Rlck11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFJlZ2lzdGVyTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8UmVnaXN0ZXJNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBSZWdpc3Rlck11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFJlZ2lzdGVyTXV0YXRpb24sIFJlZ2lzdGVyTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFRvZ2dsZUxpa2VEb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBUb2dnbGVMaWtlKCRxdWl6X2lkOiBGbG9hdCEpIHtcbiAgdG9nZ2xlTGlrZShxdWl6X2lkOiAkcXVpel9pZClcbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgVG9nZ2xlTGlrZU11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxUb2dnbGVMaWtlTXV0YXRpb24sIFRvZ2dsZUxpa2VNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VUb2dnbGVMaWtlTXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVG9nZ2xlTGlrZU11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVRvZ2dsZUxpa2VNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW3RvZ2dsZUxpa2VNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVRvZ2dsZUxpa2VNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBxdWl6X2lkOiAvLyB2YWx1ZSBmb3IgJ3F1aXpfaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVRvZ2dsZUxpa2VNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFRvZ2dsZUxpa2VNdXRhdGlvbiwgVG9nZ2xlTGlrZU11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFRvZ2dsZUxpa2VNdXRhdGlvbiwgVG9nZ2xlTGlrZU11dGF0aW9uVmFyaWFibGVzPihUb2dnbGVMaWtlRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFRvZ2dsZUxpa2VNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VUb2dnbGVMaWtlTXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVG9nZ2xlTGlrZU11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFRvZ2dsZUxpa2VNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBUb2dnbGVMaWtlTXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8VG9nZ2xlTGlrZU11dGF0aW9uLCBUb2dnbGVMaWtlTXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFVwZGF0ZUFjY291bnREb2N1bWVudCA9IGdxbGBcbiAgICBtdXRhdGlvbiBVcGRhdGVBY2NvdW50KCRkYXRhOiBVcGRhdGVBY2NvdW50SW5wdXQhKSB7XG4gIHVwZGF0ZUFjY291bnQoZGF0YTogJGRhdGEpIHtcbiAgICAuLi5Vc2VyUmVzcG9uc2VcbiAgfVxufVxuICAgICR7VXNlclJlc3BvbnNlRnJhZ21lbnREb2N9YDtcbmV4cG9ydCB0eXBlIFVwZGF0ZUFjY291bnRNdXRhdGlvbkZuID0gQXBvbGxvLk11dGF0aW9uRnVuY3Rpb248VXBkYXRlQWNjb3VudE11dGF0aW9uLCBVcGRhdGVBY2NvdW50TXV0YXRpb25WYXJpYWJsZXM+O1xuXG4vKipcbiAqIF9fdXNlVXBkYXRlQWNjb3VudE11dGF0aW9uX19cbiAqXG4gKiBUbyBydW4gYSBtdXRhdGlvbiwgeW91IGZpcnN0IGNhbGwgYHVzZVVwZGF0ZUFjY291bnRNdXRhdGlvbmAgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50IGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VVcGRhdGVBY2NvdW50TXV0YXRpb25gIHJldHVybnMgYSB0dXBsZSB0aGF0IGluY2x1ZGVzOlxuICogLSBBIG11dGF0ZSBmdW5jdGlvbiB0aGF0IHlvdSBjYW4gY2FsbCBhdCBhbnkgdGltZSB0byBleGVjdXRlIHRoZSBtdXRhdGlvblxuICogLSBBbiBvYmplY3Qgd2l0aCBmaWVsZHMgdGhhdCByZXByZXNlbnQgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIHRoZSBtdXRhdGlvbidzIGV4ZWN1dGlvblxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgbXV0YXRpb24sIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zLTI7XG4gKlxuICogQGV4YW1wbGVcbiAqIGNvbnN0IFt1cGRhdGVBY2NvdW50TXV0YXRpb24sIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VVcGRhdGVBY2NvdW50TXV0YXRpb24oe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgZGF0YTogLy8gdmFsdWUgZm9yICdkYXRhJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VVcGRhdGVBY2NvdW50TXV0YXRpb24oYmFzZU9wdGlvbnM/OiBBcG9sbG8uTXV0YXRpb25Ib29rT3B0aW9uczxVcGRhdGVBY2NvdW50TXV0YXRpb24sIFVwZGF0ZUFjY291bnRNdXRhdGlvblZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VNdXRhdGlvbjxVcGRhdGVBY2NvdW50TXV0YXRpb24sIFVwZGF0ZUFjY291bnRNdXRhdGlvblZhcmlhYmxlcz4oVXBkYXRlQWNjb3VudERvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgdHlwZSBVcGRhdGVBY2NvdW50TXV0YXRpb25Ib29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlVXBkYXRlQWNjb3VudE11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZUFjY291bnRNdXRhdGlvblJlc3VsdCA9IEFwb2xsby5NdXRhdGlvblJlc3VsdDxVcGRhdGVBY2NvdW50TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlQWNjb3VudE11dGF0aW9uT3B0aW9ucyA9IEFwb2xsby5CYXNlTXV0YXRpb25PcHRpb25zPFVwZGF0ZUFjY291bnRNdXRhdGlvbiwgVXBkYXRlQWNjb3VudE11dGF0aW9uVmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBVcGRhdGVQcm9maWxlRG9jdW1lbnQgPSBncWxgXG4gICAgbXV0YXRpb24gVXBkYXRlUHJvZmlsZSgkZGF0YTogVXBkYXRlUHJvZmlsZUlucHV0ISkge1xuICB1cGRhdGVQcm9maWxlKGRhdGE6ICRkYXRhKSB7XG4gICAgLi4uVXNlclJlc3BvbnNlXG4gIH1cbn1cbiAgICAke1VzZXJSZXNwb25zZUZyYWdtZW50RG9jfWA7XG5leHBvcnQgdHlwZSBVcGRhdGVQcm9maWxlTXV0YXRpb25GbiA9IEFwb2xsby5NdXRhdGlvbkZ1bmN0aW9uPFVwZGF0ZVByb2ZpbGVNdXRhdGlvbiwgVXBkYXRlUHJvZmlsZU11dGF0aW9uVmFyaWFibGVzPjtcblxuLyoqXG4gKiBfX3VzZVVwZGF0ZVByb2ZpbGVNdXRhdGlvbl9fXG4gKlxuICogVG8gcnVuIGEgbXV0YXRpb24sIHlvdSBmaXJzdCBjYWxsIGB1c2VVcGRhdGVQcm9maWxlTXV0YXRpb25gIHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlVXBkYXRlUHJvZmlsZU11dGF0aW9uYCByZXR1cm5zIGEgdHVwbGUgdGhhdCBpbmNsdWRlczpcbiAqIC0gQSBtdXRhdGUgZnVuY3Rpb24gdGhhdCB5b3UgY2FuIGNhbGwgYXQgYW55IHRpbWUgdG8gZXhlY3V0ZSB0aGUgbXV0YXRpb25cbiAqIC0gQW4gb2JqZWN0IHdpdGggZmllbGRzIHRoYXQgcmVwcmVzZW50IHRoZSBjdXJyZW50IHN0YXR1cyBvZiB0aGUgbXV0YXRpb24ncyBleGVjdXRpb25cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIG11dGF0aW9uLCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucy0yO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCBbdXBkYXRlUHJvZmlsZU11dGF0aW9uLCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH1dID0gdXNlVXBkYXRlUHJvZmlsZU11dGF0aW9uKHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGRhdGE6IC8vIHZhbHVlIGZvciAnZGF0YSdcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlVXBkYXRlUHJvZmlsZU11dGF0aW9uKGJhc2VPcHRpb25zPzogQXBvbGxvLk11dGF0aW9uSG9va09wdGlvbnM8VXBkYXRlUHJvZmlsZU11dGF0aW9uLCBVcGRhdGVQcm9maWxlTXV0YXRpb25WYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlTXV0YXRpb248VXBkYXRlUHJvZmlsZU11dGF0aW9uLCBVcGRhdGVQcm9maWxlTXV0YXRpb25WYXJpYWJsZXM+KFVwZGF0ZVByb2ZpbGVEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IHR5cGUgVXBkYXRlUHJvZmlsZU11dGF0aW9uSG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVVwZGF0ZVByb2ZpbGVNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVQcm9maWxlTXV0YXRpb25SZXN1bHQgPSBBcG9sbG8uTXV0YXRpb25SZXN1bHQ8VXBkYXRlUHJvZmlsZU11dGF0aW9uPjtcbmV4cG9ydCB0eXBlIFVwZGF0ZVByb2ZpbGVNdXRhdGlvbk9wdGlvbnMgPSBBcG9sbG8uQmFzZU11dGF0aW9uT3B0aW9uczxVcGRhdGVQcm9maWxlTXV0YXRpb24sIFVwZGF0ZVByb2ZpbGVNdXRhdGlvblZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgVXBkYXRlUXVpekRvY3VtZW50ID0gZ3FsYFxuICAgIG11dGF0aW9uIFVwZGF0ZVF1aXooJGlucHV0czogUXVpeklucHV0ISwgJHF1aXpfaWQ6IEZsb2F0ISkge1xuICB1cGRhdGVRdWl6KGlucHV0czogJGlucHV0cywgcXVpel9pZDogJHF1aXpfaWQpIHtcbiAgICB0aXRsZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgcXVpel9waG90b1xuICAgIHF1ZXN0aW9ucyB7XG4gICAgICBxdWVzdGlvbl9pZFxuICAgICAgcXVlc3Rpb25cbiAgICAgIHF1ZXN0aW9uX3Bob3RvXG4gICAgICBjaG9pY2VzXG4gICAgICBhbnN3ZXJcbiAgICAgIGV4cGxhbmF0aW9uXG4gICAgICB3aXRoX2V4cGxhbmF0aW9uXG4gICAgICBoaW50XG4gICAgICB3aXRoX2hpbnRcbiAgICB9XG4gIH1cbn1cbiAgICBgO1xuZXhwb3J0IHR5cGUgVXBkYXRlUXVpek11dGF0aW9uRm4gPSBBcG9sbG8uTXV0YXRpb25GdW5jdGlvbjxVcGRhdGVRdWl6TXV0YXRpb24sIFVwZGF0ZVF1aXpNdXRhdGlvblZhcmlhYmxlcz47XG5cbi8qKlxuICogX191c2VVcGRhdGVRdWl6TXV0YXRpb25fX1xuICpcbiAqIFRvIHJ1biBhIG11dGF0aW9uLCB5b3UgZmlyc3QgY2FsbCBgdXNlVXBkYXRlUXVpek11dGF0aW9uYCB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVVwZGF0ZVF1aXpNdXRhdGlvbmAgcmV0dXJucyBhIHR1cGxlIHRoYXQgaW5jbHVkZXM6XG4gKiAtIEEgbXV0YXRlIGZ1bmN0aW9uIHRoYXQgeW91IGNhbiBjYWxsIGF0IGFueSB0aW1lIHRvIGV4ZWN1dGUgdGhlIG11dGF0aW9uXG4gKiAtIEFuIG9iamVjdCB3aXRoIGZpZWxkcyB0aGF0IHJlcHJlc2VudCB0aGUgY3VycmVudCBzdGF0dXMgb2YgdGhlIG11dGF0aW9uJ3MgZXhlY3V0aW9uXG4gKlxuICogQHBhcmFtIGJhc2VPcHRpb25zIG9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCBpbnRvIHRoZSBtdXRhdGlvbiwgc3VwcG9ydGVkIG9wdGlvbnMgYXJlIGxpc3RlZCBvbjogaHR0cHM6Ly93d3cuYXBvbGxvZ3JhcGhxbC5jb20vZG9jcy9yZWFjdC9hcGkvcmVhY3QtaG9va3MvI29wdGlvbnMtMjtcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgW3VwZGF0ZVF1aXpNdXRhdGlvbiwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZVVwZGF0ZVF1aXpNdXRhdGlvbih7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBpbnB1dHM6IC8vIHZhbHVlIGZvciAnaW5wdXRzJ1xuICogICAgICBxdWl6X2lkOiAvLyB2YWx1ZSBmb3IgJ3F1aXpfaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVVwZGF0ZVF1aXpNdXRhdGlvbihiYXNlT3B0aW9ucz86IEFwb2xsby5NdXRhdGlvbkhvb2tPcHRpb25zPFVwZGF0ZVF1aXpNdXRhdGlvbiwgVXBkYXRlUXVpek11dGF0aW9uVmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZU11dGF0aW9uPFVwZGF0ZVF1aXpNdXRhdGlvbiwgVXBkYXRlUXVpek11dGF0aW9uVmFyaWFibGVzPihVcGRhdGVRdWl6RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCB0eXBlIFVwZGF0ZVF1aXpNdXRhdGlvbkhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VVcGRhdGVRdWl6TXV0YXRpb24+O1xuZXhwb3J0IHR5cGUgVXBkYXRlUXVpek11dGF0aW9uUmVzdWx0ID0gQXBvbGxvLk11dGF0aW9uUmVzdWx0PFVwZGF0ZVF1aXpNdXRhdGlvbj47XG5leHBvcnQgdHlwZSBVcGRhdGVRdWl6TXV0YXRpb25PcHRpb25zID0gQXBvbGxvLkJhc2VNdXRhdGlvbk9wdGlvbnM8VXBkYXRlUXVpek11dGF0aW9uLCBVcGRhdGVRdWl6TXV0YXRpb25WYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IENvbW1lbnRzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgQ29tbWVudHMoJGxpbWl0OiBJbnQhLCAkY3Vyc29yOiBTdHJpbmcsICRxdWl6X2lkOiBJbnQhKSB7XG4gIGNvbW1lbnRzKGxpbWl0OiAkbGltaXQsIGN1cnNvcjogJGN1cnNvciwgcXVpel9pZDogJHF1aXpfaWQpIHtcbiAgICBoYXNNb3JlXG4gICAgY29tbWVudHMge1xuICAgICAgLi4uQ29tbWVudFJlc3BvbnNlXG4gICAgfVxuICB9XG59XG4gICAgJHtDb21tZW50UmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlQ29tbWVudHNRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VDb21tZW50c1F1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlQ29tbWVudHNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VDb21tZW50c1F1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgICAgIGxpbWl0OiAvLyB2YWx1ZSBmb3IgJ2xpbWl0J1xuICogICAgICBjdXJzb3I6IC8vIHZhbHVlIGZvciAnY3Vyc29yJ1xuICogICAgICBxdWl6X2lkOiAvLyB2YWx1ZSBmb3IgJ3F1aXpfaWQnXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbW1lbnRzUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPENvbW1lbnRzUXVlcnksIENvbW1lbnRzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8Q29tbWVudHNRdWVyeSwgQ29tbWVudHNRdWVyeVZhcmlhYmxlcz4oQ29tbWVudHNEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbW1lbnRzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPENvbW1lbnRzUXVlcnksIENvbW1lbnRzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8Q29tbWVudHNRdWVyeSwgQ29tbWVudHNRdWVyeVZhcmlhYmxlcz4oQ29tbWVudHNEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBDb21tZW50c1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZUNvbW1lbnRzUXVlcnk+O1xuZXhwb3J0IHR5cGUgQ29tbWVudHNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlQ29tbWVudHNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgQ29tbWVudHNRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxDb21tZW50c1F1ZXJ5LCBDb21tZW50c1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBNZURvY3VtZW50ID0gZ3FsYFxuICAgIHF1ZXJ5IE1lIHtcbiAgbWUge1xuICAgIC4uLlVzZXJSZXNwb25zZVxuICB9XG59XG4gICAgJHtVc2VyUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWVRdWVyeV9fXG4gKlxuICogVG8gcnVuIGEgcXVlcnkgd2l0aGluIGEgUmVhY3QgY29tcG9uZW50LCBjYWxsIGB1c2VNZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlTWVRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1ZXJ5KHtcbiAqICAgdmFyaWFibGVzOiB7XG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU1lUXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uUXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VNZUxhenlRdWVyeShiYXNlT3B0aW9ucz86IEFwb2xsby5MYXp5UXVlcnlIb29rT3B0aW9uczxNZVF1ZXJ5LCBNZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PE1lUXVlcnksIE1lUXVlcnlWYXJpYWJsZXM+KE1lRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgTWVRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNZVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lTGF6eVF1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWVRdWVyeSwgTWVRdWVyeVZhcmlhYmxlcz47XG5leHBvcnQgY29uc3QgTWVRdWl6emVzRG9jdW1lbnQgPSBncWxgXG4gICAgcXVlcnkgTWVRdWl6emVzKCRsaW1pdDogSW50ISwgJGN1cnNvcjogU3RyaW5nKSB7XG4gIG1lUXVpenplcyhsaW1pdDogJGxpbWl0LCBjdXJzb3I6ICRjdXJzb3IpIHtcbiAgICBtZUhhc01vcmVcbiAgICBtZVF1aXp6ZXMge1xuICAgICAgLi4uUXVpenplc1Jlc3BvbnNlXG4gICAgfVxuICB9XG59XG4gICAgJHtRdWl6emVzUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlTWVRdWl6emVzUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlTWVRdWl6emVzUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VNZVF1aXp6ZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VNZVF1aXp6ZXNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBsaW1pdDogLy8gdmFsdWUgZm9yICdsaW1pdCdcbiAqICAgICAgY3Vyc29yOiAvLyB2YWx1ZSBmb3IgJ2N1cnNvcidcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTWVRdWl6emVzUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPE1lUXVpenplc1F1ZXJ5LCBNZVF1aXp6ZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxNZVF1aXp6ZXNRdWVyeSwgTWVRdWl6emVzUXVlcnlWYXJpYWJsZXM+KE1lUXVpenplc0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlTWVRdWl6emVzTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPE1lUXVpenplc1F1ZXJ5LCBNZVF1aXp6ZXNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxNZVF1aXp6ZXNRdWVyeSwgTWVRdWl6emVzUXVlcnlWYXJpYWJsZXM+KE1lUXVpenplc0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIE1lUXVpenplc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZU1lUXVpenplc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIE1lUXVpenplc0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VNZVF1aXp6ZXNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgTWVRdWl6emVzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8TWVRdWl6emVzUXVlcnksIE1lUXVpenplc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBRdWVzdGlvbnNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBRdWVzdGlvbnMoJHF1aXpfaWQ6IEludCEsICR3aXRoQW5zd2VyOiBCb29sZWFuISkge1xuICBxdWVzdGlvbnMocXVpel9pZDogJHF1aXpfaWQpIHtcbiAgICBxdWVzdGlvbl9pZFxuICAgIHF1ZXN0aW9uXG4gICAgcXVlc3Rpb25fcGhvdG9cbiAgICBjaG9pY2VzXG4gICAgaGludFxuICAgIHdpdGhfaGludFxuICAgIGFuc3dlciBAaW5jbHVkZShpZjogJHdpdGhBbnN3ZXIpXG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlUXVlc3Rpb25zUXVlcnlfX1xuICpcbiAqIFRvIHJ1biBhIHF1ZXJ5IHdpdGhpbiBhIFJlYWN0IGNvbXBvbmVudCwgY2FsbCBgdXNlUXVlc3Rpb25zUXVlcnlgIGFuZCBwYXNzIGl0IGFueSBvcHRpb25zIHRoYXQgZml0IHlvdXIgbmVlZHMuXG4gKiBXaGVuIHlvdXIgY29tcG9uZW50IHJlbmRlcnMsIGB1c2VRdWVzdGlvbnNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVzdGlvbnNRdWVyeSh7XG4gKiAgIHZhcmlhYmxlczoge1xuICogICAgICBxdWl6X2lkOiAvLyB2YWx1ZSBmb3IgJ3F1aXpfaWQnXG4gKiAgICAgIHdpdGhBbnN3ZXI6IC8vIHZhbHVlIGZvciAnd2l0aEFuc3dlcidcbiAqICAgfSxcbiAqIH0pO1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlc3Rpb25zUXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFF1ZXN0aW9uc1F1ZXJ5LCBRdWVzdGlvbnNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgcmV0dXJuIEFwb2xsby51c2VRdWVyeTxRdWVzdGlvbnNRdWVyeSwgUXVlc3Rpb25zUXVlcnlWYXJpYWJsZXM+KFF1ZXN0aW9uc0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICB9XG5leHBvcnQgZnVuY3Rpb24gdXNlUXVlc3Rpb25zTGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFF1ZXN0aW9uc1F1ZXJ5LCBRdWVzdGlvbnNRdWVyeVZhcmlhYmxlcz4pIHtcbiAgICAgICAgICByZXR1cm4gQXBvbGxvLnVzZUxhenlRdWVyeTxRdWVzdGlvbnNRdWVyeSwgUXVlc3Rpb25zUXVlcnlWYXJpYWJsZXM+KFF1ZXN0aW9uc0RvY3VtZW50LCBiYXNlT3B0aW9ucyk7XG4gICAgICAgIH1cbmV4cG9ydCB0eXBlIFF1ZXN0aW9uc1F1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVF1ZXN0aW9uc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIFF1ZXN0aW9uc0xhenlRdWVyeUhvb2tSZXN1bHQgPSBSZXR1cm5UeXBlPHR5cGVvZiB1c2VRdWVzdGlvbnNMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgUXVlc3Rpb25zUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8UXVlc3Rpb25zUXVlcnksIFF1ZXN0aW9uc1F1ZXJ5VmFyaWFibGVzPjtcbmV4cG9ydCBjb25zdCBRdWl6VG9VcGRhdGVEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBRdWl6VG9VcGRhdGUoJHF1aXpfaWQ6IEludCEpIHtcbiAgcXVpelRvVXBkYXRlKHF1aXpfaWQ6ICRxdWl6X2lkKSB7XG4gICAgdGl0bGVcbiAgICBkZXNjcmlwdGlvblxuICAgIHF1aXpfcGhvdG9cbiAgICBxdWVzdGlvbnMge1xuICAgICAgcXVlc3Rpb25faWRcbiAgICAgIHF1ZXN0aW9uXG4gICAgICBxdWVzdGlvbl9waG90b1xuICAgICAgY2hvaWNlc1xuICAgICAgYW5zd2VyXG4gICAgICBleHBsYW5hdGlvblxuICAgICAgd2l0aF9leHBsYW5hdGlvblxuICAgICAgaGludFxuICAgICAgd2l0aF9oaW50XG4gICAgfVxuICB9XG59XG4gICAgYDtcblxuLyoqXG4gKiBfX3VzZVF1aXpUb1VwZGF0ZVF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVF1aXpUb1VwZGF0ZVF1ZXJ5YCBhbmQgcGFzcyBpdCBhbnkgb3B0aW9ucyB0aGF0IGZpdCB5b3VyIG5lZWRzLlxuICogV2hlbiB5b3VyIGNvbXBvbmVudCByZW5kZXJzLCBgdXNlUXVpelRvVXBkYXRlUXVlcnlgIHJldHVybnMgYW4gb2JqZWN0IGZyb20gQXBvbGxvIENsaWVudCB0aGF0IGNvbnRhaW5zIGxvYWRpbmcsIGVycm9yLCBhbmQgZGF0YSBwcm9wZXJ0aWVzXG4gKiB5b3UgY2FuIHVzZSB0byByZW5kZXIgeW91ciBVSS5cbiAqXG4gKiBAcGFyYW0gYmFzZU9wdGlvbnMgb3B0aW9ucyB0aGF0IHdpbGwgYmUgcGFzc2VkIGludG8gdGhlIHF1ZXJ5LCBzdXBwb3J0ZWQgb3B0aW9ucyBhcmUgbGlzdGVkIG9uOiBodHRwczovL3d3dy5hcG9sbG9ncmFwaHFsLmNvbS9kb2NzL3JlYWN0L2FwaS9yZWFjdC1ob29rcy8jb3B0aW9ucztcbiAqXG4gKiBAZXhhbXBsZVxuICogY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlUXVpelRvVXBkYXRlUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgcXVpel9pZDogLy8gdmFsdWUgZm9yICdxdWl6X2lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWl6VG9VcGRhdGVRdWVyeShiYXNlT3B0aW9uczogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8UXVpelRvVXBkYXRlUXVlcnksIFF1aXpUb1VwZGF0ZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFF1aXpUb1VwZGF0ZVF1ZXJ5LCBRdWl6VG9VcGRhdGVRdWVyeVZhcmlhYmxlcz4oUXVpelRvVXBkYXRlRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VRdWl6VG9VcGRhdGVMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8UXVpelRvVXBkYXRlUXVlcnksIFF1aXpUb1VwZGF0ZVF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFF1aXpUb1VwZGF0ZVF1ZXJ5LCBRdWl6VG9VcGRhdGVRdWVyeVZhcmlhYmxlcz4oUXVpelRvVXBkYXRlRG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgUXVpelRvVXBkYXRlUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUXVpelRvVXBkYXRlUXVlcnk+O1xuZXhwb3J0IHR5cGUgUXVpelRvVXBkYXRlTGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVF1aXpUb1VwZGF0ZUxhenlRdWVyeT47XG5leHBvcnQgdHlwZSBRdWl6VG9VcGRhdGVRdWVyeVJlc3VsdCA9IEFwb2xsby5RdWVyeVJlc3VsdDxRdWl6VG9VcGRhdGVRdWVyeSwgUXVpelRvVXBkYXRlUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFF1aXp6ZXNEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBRdWl6emVzKCRsaW1pdDogSW50ISwgJGN1cnNvcjogU3RyaW5nKSB7XG4gIHF1aXp6ZXMobGltaXQ6ICRsaW1pdCwgY3Vyc29yOiAkY3Vyc29yKSB7XG4gICAgaGFzTW9yZVxuICAgIHF1aXp6ZXMge1xuICAgICAgLi4uUXVpenplc1Jlc3BvbnNlXG4gICAgfVxuICB9XG59XG4gICAgJHtRdWl6emVzUmVzcG9uc2VGcmFnbWVudERvY31gO1xuXG4vKipcbiAqIF9fdXNlUXVpenplc1F1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVF1aXp6ZXNRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVF1aXp6ZXNRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWl6emVzUXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgbGltaXQ6IC8vIHZhbHVlIGZvciAnbGltaXQnXG4gKiAgICAgIGN1cnNvcjogLy8gdmFsdWUgZm9yICdjdXJzb3InXG4gKiAgIH0sXG4gKiB9KTtcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1aXp6ZXNRdWVyeShiYXNlT3B0aW9uczogQXBvbGxvLlF1ZXJ5SG9va09wdGlvbnM8UXVpenplc1F1ZXJ5LCBRdWl6emVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgIHJldHVybiBBcG9sbG8udXNlUXVlcnk8UXVpenplc1F1ZXJ5LCBRdWl6emVzUXVlcnlWYXJpYWJsZXM+KFF1aXp6ZXNEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgfVxuZXhwb3J0IGZ1bmN0aW9uIHVzZVF1aXp6ZXNMYXp5UXVlcnkoYmFzZU9wdGlvbnM/OiBBcG9sbG8uTGF6eVF1ZXJ5SG9va09wdGlvbnM8UXVpenplc1F1ZXJ5LCBRdWl6emVzUXVlcnlWYXJpYWJsZXM+KSB7XG4gICAgICAgICAgcmV0dXJuIEFwb2xsby51c2VMYXp5UXVlcnk8UXVpenplc1F1ZXJ5LCBRdWl6emVzUXVlcnlWYXJpYWJsZXM+KFF1aXp6ZXNEb2N1bWVudCwgYmFzZU9wdGlvbnMpO1xuICAgICAgICB9XG5leHBvcnQgdHlwZSBRdWl6emVzUXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUXVpenplc1F1ZXJ5PjtcbmV4cG9ydCB0eXBlIFF1aXp6ZXNMYXp5UXVlcnlIb29rUmVzdWx0ID0gUmV0dXJuVHlwZTx0eXBlb2YgdXNlUXVpenplc0xhenlRdWVyeT47XG5leHBvcnQgdHlwZSBRdWl6emVzUXVlcnlSZXN1bHQgPSBBcG9sbG8uUXVlcnlSZXN1bHQ8UXVpenplc1F1ZXJ5LCBRdWl6emVzUXVlcnlWYXJpYWJsZXM+O1xuZXhwb3J0IGNvbnN0IFNpbmdsZVF1aXpEb2N1bWVudCA9IGdxbGBcbiAgICBxdWVyeSBTaW5nbGVRdWl6KCRxdWl6X2lkOiBJbnQhKSB7XG4gIHNpbmdsZVF1aXoocXVpel9pZDogJHF1aXpfaWQpIHtcbiAgICBpZFxuICAgIHF1aXpfcGhvdG9cbiAgICB0aXRsZVxuICAgIGRlc2NyaXB0aW9uXG4gICAgYXV0aG9yIHtcbiAgICAgIGlkXG4gICAgICB1c2VybmFtZVxuICAgICAgYXZhdGFyXG4gICAgICBlbWFpbFxuICAgICAgcHJvZmlsZSB7XG4gICAgICAgIG5hbWVcbiAgICAgIH1cbiAgICB9XG4gICAgaXNMaWtlZFxuICAgIGxpa2VzQ291bnRcbiAgICBjb21tZW50c0NvdW50XG4gICAgY3JlYXRlZF9hdFxuICAgIHF1ZXN0aW9uc0NvdW50XG4gICAgdGFrZXJzQ291bnRcbiAgICBpc1Rha2VuXG4gIH1cbn1cbiAgICBgO1xuXG4vKipcbiAqIF9fdXNlU2luZ2xlUXVpelF1ZXJ5X19cbiAqXG4gKiBUbyBydW4gYSBxdWVyeSB3aXRoaW4gYSBSZWFjdCBjb21wb25lbnQsIGNhbGwgYHVzZVNpbmdsZVF1aXpRdWVyeWAgYW5kIHBhc3MgaXQgYW55IG9wdGlvbnMgdGhhdCBmaXQgeW91ciBuZWVkcy5cbiAqIFdoZW4geW91ciBjb21wb25lbnQgcmVuZGVycywgYHVzZVNpbmdsZVF1aXpRdWVyeWAgcmV0dXJucyBhbiBvYmplY3QgZnJvbSBBcG9sbG8gQ2xpZW50IHRoYXQgY29udGFpbnMgbG9hZGluZywgZXJyb3IsIGFuZCBkYXRhIHByb3BlcnRpZXNcbiAqIHlvdSBjYW4gdXNlIHRvIHJlbmRlciB5b3VyIFVJLlxuICpcbiAqIEBwYXJhbSBiYXNlT3B0aW9ucyBvcHRpb25zIHRoYXQgd2lsbCBiZSBwYXNzZWQgaW50byB0aGUgcXVlcnksIHN1cHBvcnRlZCBvcHRpb25zIGFyZSBsaXN0ZWQgb246IGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWhvb2tzLyNvcHRpb25zO1xuICpcbiAqIEBleGFtcGxlXG4gKiBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VTaW5nbGVRdWl6UXVlcnkoe1xuICogICB2YXJpYWJsZXM6IHtcbiAqICAgICAgcXVpel9pZDogLy8gdmFsdWUgZm9yICdxdWl6X2lkJ1xuICogICB9LFxuICogfSk7XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VTaW5nbGVRdWl6UXVlcnkoYmFzZU9wdGlvbnM6IEFwb2xsby5RdWVyeUhvb2tPcHRpb25zPFNpbmdsZVF1aXpRdWVyeSwgU2luZ2xlUXVpelF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICByZXR1cm4gQXBvbGxvLnVzZVF1ZXJ5PFNpbmdsZVF1aXpRdWVyeSwgU2luZ2xlUXVpelF1ZXJ5VmFyaWFibGVzPihTaW5nbGVRdWl6RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgIH1cbmV4cG9ydCBmdW5jdGlvbiB1c2VTaW5nbGVRdWl6TGF6eVF1ZXJ5KGJhc2VPcHRpb25zPzogQXBvbGxvLkxhenlRdWVyeUhvb2tPcHRpb25zPFNpbmdsZVF1aXpRdWVyeSwgU2luZ2xlUXVpelF1ZXJ5VmFyaWFibGVzPikge1xuICAgICAgICAgIHJldHVybiBBcG9sbG8udXNlTGF6eVF1ZXJ5PFNpbmdsZVF1aXpRdWVyeSwgU2luZ2xlUXVpelF1ZXJ5VmFyaWFibGVzPihTaW5nbGVRdWl6RG9jdW1lbnQsIGJhc2VPcHRpb25zKTtcbiAgICAgICAgfVxuZXhwb3J0IHR5cGUgU2luZ2xlUXVpelF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVNpbmdsZVF1aXpRdWVyeT47XG5leHBvcnQgdHlwZSBTaW5nbGVRdWl6TGF6eVF1ZXJ5SG9va1Jlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZVNpbmdsZVF1aXpMYXp5UXVlcnk+O1xuZXhwb3J0IHR5cGUgU2luZ2xlUXVpelF1ZXJ5UmVzdWx0ID0gQXBvbGxvLlF1ZXJ5UmVzdWx0PFNpbmdsZVF1aXpRdWVyeSwgU2luZ2xlUXVpelF1ZXJ5VmFyaWFibGVzPjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG5cdEJveFByb3BzLFxyXG5cdENlbnRlcixcclxuXHRHcmlkLFxyXG5cdEdyaWRJdGVtLFxyXG5cdExpc3QsXHJcblx0RmxleCxcclxuXHRMaXN0SXRlbSxcclxuXHR1c2VDb2xvck1vZGVWYWx1ZSxcclxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgQWlPdXRsaW5lVXNlciB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgSW9Eb2N1bWVudHNPdXRsaW5lIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81JztcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvZGlzdC9jbGllbnQvcm91dGVyJztcclxuXHJcbmludGVyZmFjZSBNYWluTmF2TGlua1Byb3BzIHtcclxuXHRocmVmOiBzdHJpbmc7XHJcblx0aWNvbjogYW55O1xyXG59XHJcblxyXG5jb25zdCBNYWluTmF2TGluazogUmVhY3QuRkM8TWFpbk5hdkxpbmtQcm9wcz4gPSAoeyBocmVmLCBpY29uLCBjaGlsZHJlbiB9KSA9PiB7XHJcblx0Y29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3QgWywgLCBwYXRoXSA9IGhyZWYuc3BsaXQoJy8nKTtcclxuXHJcblx0Y29uc3QgYWN0aXZlID0gcGF0aG5hbWUuaW5jbHVkZXMocGF0aCk7XHJcblx0Y29uc3QgbGlua0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZS41MDAnLCAnZ3JheS4xMDAnKTtcclxuXHRjb25zdCBiZ0NvbG9yID0gdXNlQ29sb3JNb2RlVmFsdWUoJ3B1cnBsZS41MCcsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpJyk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TmV4dExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY+XHJcblx0XHRcdDxGbGV4XHJcblx0XHRcdFx0YXM9J2EnXHJcblx0XHRcdFx0YWxpZ249J2NlbnRlcidcclxuXHRcdFx0XHRmb250U2l6ZT0nbWQnXHJcblx0XHRcdFx0Zm9udFdlaWdodD17YWN0aXZlID8gJ3NlbWlib2xkJyA6ICcnfVxyXG5cdFx0XHRcdHRyYW5zaXRpb25Qcm9wZXJ0eT0nY29sb3JzJ1xyXG5cdFx0XHRcdHRyYW5zaXRpb25EdXJhdGlvbj0nMjAwbXMnXHJcblx0XHRcdFx0Y29sb3I9e2FjdGl2ZSA/IGxpbmtDb2xvciA6ICdncmF5LjUwMCd9XHJcblx0XHRcdFx0X2hvdmVyPXt7IGNvbG9yOiBsaW5rQ29sb3IsIGJnOiBiZ0NvbG9yIH19XHJcblx0XHRcdFx0Zm9udEZhbWlseT0naW50ZXInXHJcblx0XHRcdFx0Ymc9e2FjdGl2ZSA/IGJnQ29sb3IgOiAnJ31cclxuXHRcdFx0XHRweD0nNnB4J1xyXG5cdFx0XHRcdHB5PSc4cHgnXHJcblx0XHRcdFx0cm91bmRlZD0nOHB4J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PENlbnRlciBtcj0nMycgZm9udFNpemU9JzI0cHgnPlxyXG5cdFx0XHRcdFx0e2ljb259XHJcblx0XHRcdFx0PC9DZW50ZXI+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L0ZsZXg+XHJcblx0XHQ8L05leHRMaW5rPlxyXG5cdCk7XHJcbn07XHJcblxyXG5jb25zdCBtYWluTmF2TGlua3MgPSBbXHJcblx0e1xyXG5cdFx0aWNvbjogPEFpT3V0bGluZVVzZXIgLz4sXHJcblx0XHRocmVmOiAnL2Rhc2hib2FyZC9wcm9maWxlJyxcclxuXHRcdGxhYmVsOiAnUHJvZmlsZScsXHJcblx0fSxcclxuXHR7XHJcblx0XHRpY29uOiA8SW9Eb2N1bWVudHNPdXRsaW5lIC8+LFxyXG5cdFx0aHJlZjogJy9kYXNoYm9hcmQvcHVibGlzaGVkJyxcclxuXHRcdGxhYmVsOiAnUHVibGlzaGVkJyxcclxuXHR9LFxyXG5dO1xyXG5cclxuaW50ZXJmYWNlIERhc2hib2FyZENvbnRhaW5lclByb3BzIGV4dGVuZHMgQm94UHJvcHMge31cclxuXHJcbmV4cG9ydCBjb25zdCBEYXNoYm9hcmRDb250YWluZXI6IFJlYWN0LkZDPERhc2hib2FyZENvbnRhaW5lclByb3BzPiA9ICh7XHJcblx0Y2hpbGRyZW4sXHJcblx0Li4ucHJvcHNcclxufSkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9J3JlcGVhdCgxMiwgMWZyKScgZ2FwPXsyfSBweD0nNjRweCc+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTcGFuPXszfT5cclxuXHRcdFx0XHQ8TGlzdCBzcGFjaW5nPScyJyBzdHlsZVR5cGU9J25vbmUnIHB5PSczMnB4JyBwbD0nMTJweCcgcHI9JzMycHgnPlxyXG5cdFx0XHRcdFx0e21haW5OYXZMaW5rcy5tYXAoKGl0ZW0pID0+IChcclxuXHRcdFx0XHRcdFx0PExpc3RJdGVtIGtleT17aXRlbS5sYWJlbH0+XHJcblx0XHRcdFx0XHRcdFx0PE1haW5OYXZMaW5rIGljb249e2l0ZW0uaWNvbn0gaHJlZj17aXRlbS5ocmVmfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtpdGVtLmxhYmVsfVxyXG5cdFx0XHRcdFx0XHRcdDwvTWFpbk5hdkxpbms+XHJcblx0XHRcdFx0XHRcdDwvTGlzdEl0ZW0+XHJcblx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHQ8L0xpc3Q+XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTcGFuPXs5fSBweD0nNXB4JyB7Li4ucHJvcHN9PlxyXG5cdFx0XHRcdHtjaGlsZHJlbn1cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdDwvR3JpZD5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBCb3gsIHVzZUNvbG9yTW9kZSwgQm94UHJvcHMsIEZsZXggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcclxuaW1wb3J0IHsgQ2xvdWRpbmFyeUNvbnRleHQgfSBmcm9tICdjbG91ZGluYXJ5LXJlYWN0JztcclxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9OYXZCYXInO1xyXG5cclxuaW50ZXJmYWNlIE1haW5Db250YWluZXJQcm9wcyBleHRlbmRzIEJveFByb3BzIHt9XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkNvbnRhaW5lcjogUmVhY3QuRkM8TWFpbkNvbnRhaW5lclByb3BzPiA9ICh7XHJcblx0Y2hpbGRyZW4sXHJcblx0Li4ucHJvcHNcclxufSkgPT4ge1xyXG5cdGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKTtcclxuXHJcblx0Y29uc3QgYmdDb2xvciA9IHsgbGlnaHQ6ICd3aGl0ZScsIGRhcms6ICcjMTgxODE4JyB9O1xyXG5cdGNvbnN0IGNvbG9yID0geyBsaWdodDogJ2JsYWNrJywgZGFyazogJ3doaXRlJyB9O1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PENsb3VkaW5hcnlDb250ZXh0XHJcblx0XHRcdGNsb3VkTmFtZT17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xPVURJTkFSWV9DTE9VRF9OQU1FfVxyXG5cdFx0PlxyXG5cdFx0XHQ8RmxleFxyXG5cdFx0XHRcdGRpcmVjdGlvbj0nY29sdW1uJ1xyXG5cdFx0XHRcdGJnPXtiZ0NvbG9yW2NvbG9yTW9kZV19XHJcblx0XHRcdFx0Y29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XHJcblx0XHRcdFx0bWluSGVpZ2h0PScxMDB2aCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxOYXZCYXIgLz5cclxuXHRcdFx0XHQ8Qm94IHB4PXtbJzEwcHgnLCAnMTZweCcsICcyNHB4J119IHsuLi5wcm9wc30+XHJcblx0XHRcdFx0XHR7Y2hpbGRyZW59XHJcblx0XHRcdFx0PC9Cb3g+XHJcblx0XHRcdDwvRmxleD5cclxuXHRcdDwvQ2xvdWRpbmFyeUNvbnRleHQ+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgR3JpZCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBY2NvdW50SW5mb3JtYXRpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2Rhc2JvYXJkL0FjY291bnRJbmZvcm1hdGlvbic7XHJcbmltcG9ydCB7IFByb2ZpbGVJbmZvcm1hdGlvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGFzYm9hcmQvUHJvZmlsZUluZm9ybWF0aW9uJztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9EYXNoYm9hcmRDb250YWluZXInO1xyXG5pbXBvcnQgeyBNYWluQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9NYWluQ29udGFpbmVyJztcclxuaW1wb3J0IHsgd2l0aEFwb2xsbyB9IGZyb20gJy4uLy4uL3V0aWxzL3dpdGhBcG9sbG8nO1xyXG5cclxuY29uc3QgUHJvZmlsZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDxNYWluQ29udGFpbmVyPlxyXG5cdFx0XHQ8RGFzaGJvYXJkQ29udGFpbmVyPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZUNvbHVtbnM9J3JlcGVhdCgxMCwgMWZyKSdcclxuXHRcdFx0XHRcdG15PSczMnB4J1xyXG5cdFx0XHRcdFx0Ym94U2hhZG93PSdtZCdcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1cz0nOHB4J1xyXG5cdFx0XHRcdFx0Ym9yZGVyV2lkdGg9JzFweCdcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8QWNjb3VudEluZm9ybWF0aW9uIC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHRcdDxHcmlkXHJcblx0XHRcdFx0XHR0ZW1wbGF0ZUNvbHVtbnM9J3JlcGVhdCgxMCwgMWZyKSdcclxuXHRcdFx0XHRcdG15PSczMnB4J1xyXG5cdFx0XHRcdFx0Ym94U2hhZG93PSdtZCdcclxuXHRcdFx0XHRcdGJvcmRlclJhZGl1cz0nOHB4J1xyXG5cdFx0XHRcdFx0Ym9yZGVyV2lkdGg9JzFweCdcclxuXHRcdFx0XHQ+XHJcblx0XHRcdFx0XHQ8UHJvZmlsZUluZm9ybWF0aW9uIC8+XHJcblx0XHRcdFx0PC9HcmlkPlxyXG5cdFx0XHQ8L0Rhc2hib2FyZENvbnRhaW5lcj5cclxuXHRcdDwvTWFpbkNvbnRhaW5lcj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KShQcm9maWxlKTtcclxuIiwiZXhwb3J0IGNvbnN0IERheXMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzEnPjE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMic+Mjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSczJz4zPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzQnPjQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nNSc+NTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSc2Jz42PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzcnPjc8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nOCc+ODwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPSc5Jz45PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzEwJz4xMDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxMSc+MTE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTInPjEyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzEzJz4xMzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxNCc+MTQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTUnPjE1PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE2Jz4xNjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxNyc+MTc8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTgnPjE4PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5Jz4xOTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMCc+MjA8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjEnPjIxPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIyJz4yMjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMyc+MjM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjQnPjI0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzI1Jz4yNTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyNic+MjY8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjcnPjI3PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzI4Jz4yODwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyOSc+Mjk8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMzAnPjMwPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzMxJz4zMTwvb3B0aW9uPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNb250aHMgPSAoKSA9PiB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0phbic+SmFuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0ZlYic+RmViPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01hcic+TWFyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0Fwcic+QXByPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J01heSc+TWF5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0p1bic+SnVuPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0p1bCc+SnVsPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0F1Zyc+QXVnPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J1NlcCc+U2VwPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J09jdCc+T2N0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J05vdic+Tm92PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9J0RlYyc+RGVjPC9vcHRpb24+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFllYXJzID0gKCkgPT4ge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMDIwJz4yMDIwPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIwMTknPjIwMTk8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjAxOCc+MjAxODwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMDE3Jz4yMDE3PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIwMTYnPjIwMTY8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjAxNSc+MjAxNTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMDE0Jz4yMDE0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIwMTMnPjIwMTM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjAxMic+MjAxMjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMDExJz4yMDExPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIwMTAnPjIwMTA8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjAwOSc+MjAwOTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMDA4Jz4yMDA4PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIwMDcnPjIwMDc8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjAwNic+MjAwNjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMDA1Jz4yMDA1PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIwMDQnPjIwMDQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjAwMyc+MjAwMzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScyMDAyJz4yMDAyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzIwMDEnPjIwMDE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMjAwMCc+MjAwMDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTk5Jz4xOTk5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5OTgnPjE5OTg8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk5Nyc+MTk5Nzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTk2Jz4xOTk2PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5OTUnPjE5OTU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk5NCc+MTk5NDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTkzJz4xOTkzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5OTInPjE5OTI8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk5MSc+MTk5MTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTkwJz4xOTkwPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5ODknPjE5ODk8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk4OCc+MTk4ODwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTg3Jz4xOTg3PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5ODYnPjE5ODY8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk4NSc+MTk4NTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTg0Jz4xOTg0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5ODMnPjE5ODM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk4Mic+MTk4Mjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTgxJz4xOTgxPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5ODAnPjE5ODA8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk3OSc+MTk3OTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTc4Jz4xOTc4PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NzcnPjE5Nzc8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk3Nic+MTk3Njwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTc1Jz4xOTc1PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NzQnPjE5NzQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk3Myc+MTk3Mzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTcyJz4xOTcyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NzEnPjE5NzE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk3MCc+MTk3MDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTY5Jz4xOTY5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NjgnPjE5Njg8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk2Nyc+MTk2Nzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTY2Jz4xOTY2PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NjUnPjE5NjU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk2NCc+MTk2NDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTYzJz4xOTYzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NjInPjE5NjI8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk2MSc+MTk2MTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTYwJz4xOTYwPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NTknPjE5NTk8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk1OCc+MTk1ODwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTU3Jz4xOTU3PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NTYnPjE5NTY8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk1NSc+MTk1NTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTU0Jz4xOTU0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NTMnPjE5NTM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk1Mic+MTk1Mjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTUxJz4xOTUxPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NTAnPjE5NTA8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk0OSc+MTk0OTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTQ4Jz4xOTQ4PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NDcnPjE5NDc8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk0Nic+MTk0Njwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTQ1Jz4xOTQ1PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NDQnPjE5NDQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk0Myc+MTk0Mzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTQyJz4xOTQyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5NDEnPjE5NDE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTk0MCc+MTk0MDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTM5Jz4xOTM5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MzgnPjE5Mzg8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkzNyc+MTkzNzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTM2Jz4xOTM2PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MzUnPjE5MzU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkzNCc+MTkzNDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTMzJz4xOTMzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MzInPjE5MzI8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkzMSc+MTkzMTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTMwJz4xOTMwPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MjknPjE5Mjk8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkyOCc+MTkyODwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTI3Jz4xOTI3PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MjYnPjE5MjY8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkyNSc+MTkyNTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTI0Jz4xOTI0PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MjMnPjE5MjM8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkyMic+MTkyMjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTIxJz4xOTIxPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MjAnPjE5MjA8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkxOSc+MTkxOTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTE4Jz4xOTE4PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MTcnPjE5MTc8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkxNic+MTkxNjwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTE1Jz4xOTE1PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MTQnPjE5MTQ8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkxMyc+MTkxMzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTEyJz4xOTEyPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MTEnPjE5MTE8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkxMCc+MTkxMDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTA5Jz4xOTA5PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MDgnPjE5MDg8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkwNyc+MTkwNzwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTA2Jz4xOTA2PC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MDUnPjE5MDU8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkwNCc+MTkwNDwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTAzJz4xOTAzPC9vcHRpb24+XHJcblx0XHRcdDxvcHRpb24gdmFsdWU9JzE5MDInPjE5MDI8L29wdGlvbj5cclxuXHRcdFx0PG9wdGlvbiB2YWx1ZT0nMTkwMSc+MTkwMTwvb3B0aW9uPlxyXG5cdFx0XHQ8b3B0aW9uIHZhbHVlPScxOTAwJz4xOTAwPC9vcHRpb24+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcblxyXG4vLyBPbiB0aGUgY2xpZW50LCB3ZSBzdG9yZSB0aGUgQXBvbGxvIENsaWVudCBpbiB0aGUgZm9sbG93aW5nIHZhcmlhYmxlLlxyXG4vLyBUaGlzIHByZXZlbnRzIHRoZSBjbGllbnQgZnJvbSByZWluaXRpYWxpemluZyBiZXR3ZWVuIHBhZ2UgdHJhbnNpdGlvbnMuXHJcbmxldCBnbG9iYWxBcG9sbG9DbGllbnQgPSBudWxsO1xyXG5cclxuLyoqXHJcbiAqIEluc3RhbGxzIHRoZSBBcG9sbG8gQ2xpZW50IG9uIE5leHRQYWdlQ29udGV4dFxyXG4gKiBvciBOZXh0QXBwQ29udGV4dC4gVXNlZnVsIGlmIHlvdSB3YW50IHRvIHVzZSBhcG9sbG9DbGllbnRcclxuICogaW5zaWRlIGdldFN0YXRpY1Byb3BzLCBnZXRTdGF0aWNQYXRocyBvciBnZXRTZXJ2ZXJTaWRlUHJvcHNcclxuICogQHBhcmFtIHtOZXh0UGFnZUNvbnRleHQgfCBOZXh0QXBwQ29udGV4dH0gY3R4XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaW5pdE9uQ29udGV4dCA9IChhYywgY3R4KSA9PiB7XHJcblx0Y29uc3QgaW5BcHBDb250ZXh0ID0gQm9vbGVhbihjdHguY3R4KTtcclxuXHJcblx0Ly8gV2UgY29uc2lkZXIgaW5zdGFsbGluZyBgd2l0aEFwb2xsbyh7IHNzcjogdHJ1ZSB9KWAgb24gZ2xvYmFsIEFwcCBsZXZlbFxyXG5cdC8vIGFzIGFudGlwYXR0ZXJuIHNpbmNlIGl0IGRpc2FibGVzIHByb2plY3Qgd2lkZSBBdXRvbWF0aWMgU3RhdGljIE9wdGltaXphdGlvbi5cclxuXHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuXHRcdGlmIChpbkFwcENvbnRleHQpIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKFxyXG5cdFx0XHRcdCdXYXJuaW5nOiBZb3UgaGF2ZSBvcHRlZC1vdXQgb2YgQXV0b21hdGljIFN0YXRpYyBPcHRpbWl6YXRpb24gZHVlIHRvIGB3aXRoQXBvbGxvYCBpbiBgcGFnZXMvX2FwcGAuXFxuJyArXHJcblx0XHRcdFx0XHQnUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC9uZXh0LmpzL29wdC1vdXQtYXV0by1zdGF0aWMtb3B0aW1pemF0aW9uXFxuJ1xyXG5cdFx0XHQpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gSW5pdGlhbGl6ZSBBcG9sbG9DbGllbnQgaWYgbm90IGFscmVhZHkgZG9uZVxyXG5cdGNvbnN0IGFwb2xsb0NsaWVudCA9XHJcblx0XHRjdHguYXBvbGxvQ2xpZW50IHx8XHJcblx0XHRpbml0QXBvbGxvQ2xpZW50KGFjLCBjdHguYXBvbGxvU3RhdGUgfHwge30sIGluQXBwQ29udGV4dCA/IGN0eC5jdHggOiBjdHgpO1xyXG5cclxuXHQvLyBXZSBzZW5kIHRoZSBBcG9sbG8gQ2xpZW50IGFzIGEgcHJvcCB0byB0aGUgY29tcG9uZW50IHRvIGF2b2lkIGNhbGxpbmcgaW5pdEFwb2xsbygpIHR3aWNlIGluIHRoZSBzZXJ2ZXIuXHJcblx0Ly8gT3RoZXJ3aXNlLCB0aGUgY29tcG9uZW50IHdvdWxkIGhhdmUgdG8gY2FsbCBpbml0QXBvbGxvKCkgYWdhaW4gYnV0IHRoaXNcclxuXHQvLyB0aW1lIHdpdGhvdXQgdGhlIGNvbnRleHQuIE9uY2UgdGhhdCBoYXBwZW5zLCB0aGUgZm9sbG93aW5nIGNvZGUgd2lsbCBtYWtlIHN1cmUgd2Ugc2VuZFxyXG5cdC8vIHRoZSBwcm9wIGFzIGBudWxsYCB0byB0aGUgYnJvd3Nlci5cclxuXHRhcG9sbG9DbGllbnQudG9KU09OID0gKCkgPT4gbnVsbDtcclxuXHJcblx0Ly8gQWRkIGFwb2xsb0NsaWVudCB0byBOZXh0UGFnZUNvbnRleHQgJiBOZXh0QXBwQ29udGV4dC5cclxuXHQvLyBUaGlzIGFsbG93cyB1cyB0byBjb25zdW1lIHRoZSBhcG9sbG9DbGllbnQgaW5zaWRlIG91clxyXG5cdC8vIGN1c3RvbSBgZ2V0SW5pdGlhbFByb3BzKHsgYXBvbGxvQ2xpZW50IH0pYC5cclxuXHRjdHguYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50O1xyXG5cdGlmIChpbkFwcENvbnRleHQpIHtcclxuXHRcdGN0eC5jdHguYXBvbGxvQ2xpZW50ID0gYXBvbGxvQ2xpZW50O1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGN0eDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBBbHdheXMgY3JlYXRlcyBhIG5ldyBhcG9sbG8gY2xpZW50IG9uIHRoZSBzZXJ2ZXJcclxuICogQ3JlYXRlcyBvciByZXVzZXMgYXBvbGxvIGNsaWVudCBpbiB0aGUgYnJvd3Nlci5cclxuICogQHBhcmFtICB7Tm9ybWFsaXplZENhY2hlT2JqZWN0fSBpbml0aWFsU3RhdGVcclxuICogQHBhcmFtICB7TmV4dFBhZ2VDb250ZXh0fSBjdHhcclxuICovXHJcbmNvbnN0IGluaXRBcG9sbG9DbGllbnQgPSAoYXBvbGxvQ2xpZW50LCBpbml0aWFsU3RhdGUsIGN0eCkgPT4ge1xyXG5cdC8vIE1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgY2xpZW50IGZvciBldmVyeSBzZXJ2ZXItc2lkZSByZXF1ZXN0IHNvIHRoYXQgZGF0YVxyXG5cdC8vIGlzbid0IHNoYXJlZCBiZXR3ZWVuIGNvbm5lY3Rpb25zICh3aGljaCB3b3VsZCBiZSBiYWQpXHJcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRyZXR1cm4gY3JlYXRlQXBvbGxvQ2xpZW50KGFwb2xsb0NsaWVudChjdHgpLCBpbml0aWFsU3RhdGUsIGN0eCk7XHJcblx0fVxyXG5cclxuXHQvLyBSZXVzZSBjbGllbnQgb24gdGhlIGNsaWVudC1zaWRlXHJcblx0aWYgKCFnbG9iYWxBcG9sbG9DbGllbnQpIHtcclxuXHRcdGdsb2JhbEFwb2xsb0NsaWVudCA9IGNyZWF0ZUFwb2xsb0NsaWVudChcclxuXHRcdFx0YXBvbGxvQ2xpZW50KGN0eCksXHJcblx0XHRcdGluaXRpYWxTdGF0ZSxcclxuXHRcdFx0Y3R4XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0cmV0dXJuIGdsb2JhbEFwb2xsb0NsaWVudDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgd2l0aEFwb2xsbyBIT0NcclxuICogdGhhdCBwcm92aWRlcyB0aGUgYXBvbGxvQ29udGV4dFxyXG4gKiB0byBhIG5leHQuanMgUGFnZSBvciBBcHBUcmVlLlxyXG4gKiBAcGFyYW0gIHtPYmplY3R9IHdpdGhBcG9sbG9PcHRpb25zXHJcbiAqIEBwYXJhbSAge0Jvb2xlYW59IFt3aXRoQXBvbGxvT3B0aW9ucy5zc3I9ZmFsc2VdXHJcbiAqIEByZXR1cm5zIHsoUGFnZUNvbXBvbmVudDogUmVhY3ROb2RlKSA9PiBSZWFjdE5vZGV9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY3JlYXRlV2l0aEFwb2xsbyA9IChhYykgPT4ge1xyXG5cdHJldHVybiAoeyBzc3IgPSBmYWxzZSB9ID0ge30pID0+IChQYWdlQ29tcG9uZW50KSA9PiB7XHJcblx0XHRjb25zdCBXaXRoQXBvbGxvID0gKHsgYXBvbGxvQ2xpZW50LCBhcG9sbG9TdGF0ZSwgLi4ucGFnZVByb3BzIH0pID0+IHtcclxuXHRcdFx0bGV0IGNsaWVudDtcclxuXHRcdFx0aWYgKGFwb2xsb0NsaWVudCkge1xyXG5cdFx0XHRcdC8vIEhhcHBlbnMgb246IGdldERhdGFGcm9tVHJlZSAmIG5leHQuanMgc3NyXHJcblx0XHRcdFx0Y2xpZW50ID0gYXBvbGxvQ2xpZW50O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIEhhcHBlbnMgb246IG5leHQuanMgY3NyXHJcblx0XHRcdFx0Y2xpZW50ID0gaW5pdEFwb2xsb0NsaWVudChhYywgYXBvbGxvU3RhdGUsIHVuZGVmaW5lZCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0PEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuXHRcdFx0XHRcdDxQYWdlQ29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcblx0XHRcdFx0PC9BcG9sbG9Qcm92aWRlcj5cclxuXHRcdFx0KTtcclxuXHRcdH07XHJcblxyXG5cdFx0Ly8gU2V0IHRoZSBjb3JyZWN0IGRpc3BsYXlOYW1lIGluIGRldmVsb3BtZW50XHJcblx0XHRpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG5cdFx0XHRjb25zdCBkaXNwbGF5TmFtZSA9XHJcblx0XHRcdFx0UGFnZUNvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBQYWdlQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XHJcblx0XHRcdFdpdGhBcG9sbG8uZGlzcGxheU5hbWUgPSBgd2l0aEFwb2xsbygke2Rpc3BsYXlOYW1lfSlgO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzc3IgfHwgUGFnZUNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcclxuXHRcdFx0V2l0aEFwb2xsby5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcblx0XHRcdFx0Y29uc3QgaW5BcHBDb250ZXh0ID0gQm9vbGVhbihjdHguY3R4KTtcclxuXHRcdFx0XHRjb25zdCB7IGFwb2xsb0NsaWVudCB9ID0gaW5pdE9uQ29udGV4dChhYywgY3R4KTtcclxuXHJcblx0XHRcdFx0Ly8gUnVuIHdyYXBwZWQgZ2V0SW5pdGlhbFByb3BzIG1ldGhvZHNcclxuXHRcdFx0XHRsZXQgcGFnZVByb3BzID0ge307XHJcblx0XHRcdFx0aWYgKFBhZ2VDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XHJcblx0XHRcdFx0XHRwYWdlUHJvcHMgPSBhd2FpdCBQYWdlQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoaW5BcHBDb250ZXh0KSB7XHJcblx0XHRcdFx0XHRwYWdlUHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBPbmx5IG9uIHRoZSBzZXJ2ZXI6XHJcblx0XHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHRjb25zdCB7IEFwcFRyZWUgfSA9IGN0eDtcclxuXHRcdFx0XHRcdC8vIFdoZW4gcmVkaXJlY3RpbmcsIHRoZSByZXNwb25zZSBpcyBmaW5pc2hlZC5cclxuXHRcdFx0XHRcdC8vIE5vIHBvaW50IGluIGNvbnRpbnVpbmcgdG8gcmVuZGVyXHJcblx0XHRcdFx0XHRpZiAoY3R4LnJlcyAmJiBjdHgucmVzLmZpbmlzaGVkKSB7XHJcblx0XHRcdFx0XHRcdHJldHVybiBwYWdlUHJvcHM7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0Ly8gT25seSBpZiBkYXRhRnJvbVRyZWUgaXMgZW5hYmxlZFxyXG5cdFx0XHRcdFx0aWYgKHNzciAmJiBBcHBUcmVlKSB7XHJcblx0XHRcdFx0XHRcdHRyeSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gSW1wb3J0IGBAYXBvbGxvL3JlYWN0LXNzcmAgZHluYW1pY2FsbHkuXHJcblx0XHRcdFx0XHRcdFx0Ly8gV2UgZG9uJ3Qgd2FudCB0byBoYXZlIHRoaXMgaW4gb3VyIGNsaWVudCBidW5kbGUuXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgeyBnZXREYXRhRnJvbVRyZWUgfSA9IGF3YWl0IGltcG9ydChcclxuXHRcdFx0XHRcdFx0XHRcdCdAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3InXHJcblx0XHRcdFx0XHRcdFx0KTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Ly8gU2luY2UgQXBwQ29tcG9uZW50cyBhbmQgUGFnZUNvbXBvbmVudHMgaGF2ZSBkaWZmZXJlbnQgY29udGV4dCB0eXBlc1xyXG5cdFx0XHRcdFx0XHRcdC8vIHdlIG5lZWQgdG8gbW9kaWZ5IHRoZWlyIHByb3BzIGEgbGl0dGxlLlxyXG5cdFx0XHRcdFx0XHRcdGxldCBwcm9wcztcclxuXHRcdFx0XHRcdFx0XHRpZiAoaW5BcHBDb250ZXh0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwcm9wcyA9IHsgLi4ucGFnZVByb3BzLCBhcG9sbG9DbGllbnQgfTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMgPSB7IHBhZ2VQcm9wczogeyAuLi5wYWdlUHJvcHMsIGFwb2xsb0NsaWVudCB9IH07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0XHQvLyBUYWtlIHRoZSBOZXh0LmpzIEFwcFRyZWUsIGRldGVybWluZSB3aGljaCBxdWVyaWVzIGFyZSBuZWVkZWQgdG8gcmVuZGVyLFxyXG5cdFx0XHRcdFx0XHRcdC8vIGFuZCBmZXRjaCB0aGVtLiBUaGlzIG1ldGhvZCBjYW4gYmUgcHJldHR5IHNsb3cgc2luY2UgaXQgcmVuZGVyc1xyXG5cdFx0XHRcdFx0XHRcdC8vIHlvdXIgZW50aXJlIEFwcFRyZWUgb25jZSBmb3IgZXZlcnkgcXVlcnkuIENoZWNrIG91dCBhcG9sbG8gZnJhZ21lbnRzXHJcblx0XHRcdFx0XHRcdFx0Ly8gaWYgeW91IHdhbnQgdG8gcmVkdWNlIHRoZSBudW1iZXIgb2YgcmVyZW5kZXJzLlxyXG5cdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvZGF0YS9mcmFnbWVudHMvXHJcblx0XHRcdFx0XHRcdFx0YXdhaXQgZ2V0RGF0YUZyb21UcmVlKDxBcHBUcmVlIHsuLi5wcm9wc30gLz4pO1xyXG5cdFx0XHRcdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRcdC8vIFByZXZlbnQgQXBvbGxvIENsaWVudCBHcmFwaFFMIGVycm9ycyBmcm9tIGNyYXNoaW5nIFNTUi5cclxuXHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgdGhlbSBpbiBjb21wb25lbnRzIHZpYSB0aGUgZGF0YS5lcnJvciBwcm9wOlxyXG5cdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vd3d3LmFwb2xsb2dyYXBocWwuY29tL2RvY3MvcmVhY3QvYXBpL3JlYWN0LWFwb2xsby5odG1sI2dyYXBocWwtcXVlcnktZGF0YS1lcnJvclxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIHJ1bm5pbmcgYGdldERhdGFGcm9tVHJlZWAnLCBlcnJvcik7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC8vIGdldERhdGFGcm9tVHJlZSBkb2VzIG5vdCBjYWxsIGNvbXBvbmVudFdpbGxVbm1vdW50XHJcblx0XHRcdFx0XHRcdC8vIGhlYWQgc2lkZSBlZmZlY3QgdGhlcmVmb3JlIG5lZWQgdG8gYmUgY2xlYXJlZCBtYW51YWxseVxyXG5cdFx0XHRcdFx0XHRIZWFkLnJld2luZCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdC4uLnBhZ2VQcm9wcyxcclxuXHRcdFx0XHRcdC8vIEV4dHJhY3QgcXVlcnkgZGF0YSBmcm9tIHRoZSBBcG9sbG8gc3RvcmVcclxuXHRcdFx0XHRcdGFwb2xsb1N0YXRlOiBhcG9sbG9DbGllbnQuY2FjaGUuZXh0cmFjdCgpLFxyXG5cdFx0XHRcdFx0Ly8gUHJvdmlkZSB0aGUgY2xpZW50IGZvciBzc3IuIEFzIHNvb24gYXMgdGhpcyBwYXlsb2FkXHJcblx0XHRcdFx0XHQvLyBnZXRzIEpTT04uc3RyaW5naWZpZWQgaXQgd2lsbCByZW1vdmUgaXRzZWxmLlxyXG5cdFx0XHRcdFx0YXBvbGxvQ2xpZW50OiBjdHguYXBvbGxvQ2xpZW50LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH07XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIFdpdGhBcG9sbG87XHJcblx0fTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwb2xsb0NsaWVudChhcG9sbG9DbGllbnQsIGluaXRpYWxTdGF0ZSwgY3R4KSB7XHJcblx0Ly8gVGhlIGBjdHhgIChOZXh0UGFnZUNvbnRleHQpIHdpbGwgb25seSBiZSBwcmVzZW50IG9uIHRoZSBzZXJ2ZXIuXHJcblx0Ly8gdXNlIGl0IHRvIGV4dHJhY3QgYXV0aCBoZWFkZXJzIChjdHgucmVxKSBvciBzaW1pbGFyLlxyXG5cdGFwb2xsb0NsaWVudC5zc3JNb2RlID0gQm9vbGVhbihjdHgpO1xyXG5cdGFwb2xsb0NsaWVudC5jYWNoZS5yZXN0b3JlKGluaXRpYWxTdGF0ZSk7XHJcblxyXG5cdHJldHVybiBhcG9sbG9DbGllbnQ7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlU3RhbmRhbG9uZVRvYXN0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcblxyXG5jb25zdCB0b2FzdCA9IGNyZWF0ZVN0YW5kYWxvbmVUb2FzdCgpO1xyXG5cclxuY29uc3QgZXJyb3JNYXBwZXIgPSAoZXJyOiBhbnksIHNldEVycm9yOiBGdW5jdGlvbikgPT4ge1xyXG5cdGlmIChlcnIuZ3JhcGhRTEVycm9yc1swXS5tZXNzYWdlLmluY2x1ZGVzKCdBcmd1bWVudCBWYWxpZGF0aW9uIEVycm9yJykpIHtcclxuXHRcdGVyci5ncmFwaFFMRXJyb3JzWzBdPy5leHRlbnNpb25zLmV4Y2VwdGlvbi52YWxpZGF0aW9uRXJyb3JzLmZvckVhY2goXHJcblx0XHRcdCh2YWxpZGF0aW9uRXJyOiBhbnkpID0+IHtcclxuXHRcdFx0XHRPYmplY3QudmFsdWVzKHZhbGlkYXRpb25FcnIuY29uc3RyYWludHMpLmZvckVhY2goKG1lc3NhZ2U6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHNldEVycm9yKHZhbGlkYXRpb25FcnIucHJvcGVydHksIHtcclxuXHRcdFx0XHRcdFx0dHlwZTogJ3NlcnZlcicsXHJcblx0XHRcdFx0XHRcdG1lc3NhZ2U6IG1lc3NhZ2UsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0KTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0cmV0dXJuIHRvYXN0KHtcclxuXHRcdFx0dGl0bGU6ICdBbiBlcnJvciBvY2N1cnJlZC4nLFxyXG5cdFx0XHRkZXNjcmlwdGlvbjogZXJyLmdyYXBoUUxFcnJvcnM/LlswXT8ubWVzc2FnZSA/PyAnVGhlcmUgaXMgYW4gZXJyb3InLFxyXG5cdFx0XHRzdGF0dXM6ICdlcnJvcicsXHJcblx0XHRcdGlzQ2xvc2FibGU6IHRydWUsXHJcblx0XHRcdHBvc2l0aW9uOiAnYm90dG9tLXJpZ2h0JyxcclxuXHRcdH0pO1xyXG5cdH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVycm9yTWFwcGVyO1xyXG4iLCJleHBvcnQgY29uc3QgaXNTZXJ2ZXIgPSAoKSA9PiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJztcclxuIiwiZXhwb3J0IGNvbnN0IHVwbG9hZENsb3VkaW5hcnlJbWFnZSA9IChcclxuXHRjYWxsYmFjazogRnVuY3Rpb24sXHJcblx0Y3JvcFJhdGlvOiBudW1iZXIgPSAxNiAvIDlcclxuKSA9PiB7XHJcblx0d2luZG93LmNsb3VkaW5hcnk/Lm9wZW5VcGxvYWRXaWRnZXQoXHJcblx0XHR7XHJcblx0XHRcdGNsb3VkTmFtZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0xPVURJTkFSWV9DTE9VRF9OQU1FLFxyXG5cdFx0XHR1cGxvYWRQcmVzZXQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1VQTE9BRF9QUkVTRVQsXHJcblx0XHRcdGdvb2dsZUFwaUtleTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX1NFQVJDSF9BUEksXHJcblx0XHRcdHNvdXJjZXM6IFsnbG9jYWwnLCAndXJsJywgJ2ltYWdlX3NlYXJjaCcsICdjYW1lcmEnXSxcclxuXHRcdFx0ZGVmYXVsdFNvdXJjZTogJ2xvY2FsJyxcclxuXHRcdFx0Y3JvcHBpbmc6IHRydWUsXHJcblx0XHRcdG1heEltYWdlRmlsZVNpemU6IDEwMDAwMDAsXHJcblx0XHRcdG11bHRpcGxlOiBmYWxzZSxcclxuXHRcdFx0c2hvd1NraXBDcm9wQnV0dG9uOiBmYWxzZSxcclxuXHRcdFx0Y3JvcHBpbmdBc3BlY3RSYXRpbzogY3JvcFJhdGlvLFxyXG5cdFx0XHRjcm9wcGluZ1Nob3dEaW1lbnNpb25zOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdGNhbGxiYWNrXHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IHtcclxuXHRQYWdpbmF0ZWRDb21tZW50cyxcclxuXHRQYWdpbmF0ZWRNZVF1aXp6ZXMsXHJcblx0UGFnaW5hdGVkUXVpenplcyxcclxufSBmcm9tICcuLi9nZW5lcmF0ZWQvZ3JhcGhxbCc7XHJcbmltcG9ydCB7IGNyZWF0ZVdpdGhBcG9sbG8gfSBmcm9tICcuL2NyZWF0ZVdpdGhBcG9sbG8nO1xyXG5pbXBvcnQgeyBpc1NlcnZlciB9IGZyb20gJy4vaXNTZXJ2ZXInO1xyXG5cclxuY29uc3QgY3JlYXRlQ2xpZW50ID0gKGN0eDogTmV4dFBhZ2VDb250ZXh0KSA9PlxyXG5cdG5ldyBBcG9sbG9DbGllbnQoe1xyXG5cdFx0dXJpOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMIGFzIHN0cmluZyxcclxuXHRcdGNyZWRlbnRpYWxzOiAnaW5jbHVkZScsXHJcblx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdGNvb2tpZTogKGlzU2VydmVyKCkgPyBjdHg/LnJlcT8uaGVhZGVycy5jb29raWUgOiB1bmRlZmluZWQpIHx8ICcnLFxyXG5cdFx0fSxcclxuXHRcdGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XHJcblx0XHRcdHR5cGVQb2xpY2llczoge1xyXG5cdFx0XHRcdFF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRmaWVsZHM6IHtcclxuXHRcdFx0XHRcdFx0cXVpenplczoge1xyXG5cdFx0XHRcdFx0XHRcdGtleUFyZ3M6IFtdLFxyXG5cdFx0XHRcdFx0XHRcdG1lcmdlKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZXhpc3Rpbmc6IFBhZ2luYXRlZFF1aXp6ZXMgfCB1bmRlZmluZWQsXHJcblx0XHRcdFx0XHRcdFx0XHRpbmNvbWluZzogUGFnaW5hdGVkUXVpenplc1xyXG5cdFx0XHRcdFx0XHRcdCk6IFBhZ2luYXRlZFF1aXp6ZXMge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Li4uaW5jb21pbmcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHF1aXp6ZXM6IFsuLi4oZXhpc3Rpbmc/LnF1aXp6ZXMgfHwgW10pLCAuLi5pbmNvbWluZy5xdWl6emVzXSxcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0bWVRdWl6emVzOiB7XHJcblx0XHRcdFx0XHRcdFx0a2V5QXJnczogW10sXHJcblx0XHRcdFx0XHRcdFx0bWVyZ2UoXHJcblx0XHRcdFx0XHRcdFx0XHRleGlzdGluZzogUGFnaW5hdGVkTWVRdWl6emVzIHwgdW5kZWZpbmVkLFxyXG5cdFx0XHRcdFx0XHRcdFx0aW5jb21pbmc6IFBhZ2luYXRlZE1lUXVpenplc1xyXG5cdFx0XHRcdFx0XHRcdCk6IFBhZ2luYXRlZE1lUXVpenplcyB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQuLi5pbmNvbWluZyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bWVRdWl6emVzOiBbXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Li4uKGV4aXN0aW5nPy5tZVF1aXp6ZXMgfHwgW10pLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmluY29taW5nLm1lUXVpenplcyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XSxcclxuXHRcdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0Y29tbWVudHM6IHtcclxuXHRcdFx0XHRcdFx0XHRrZXlBcmdzOiBbJ3F1aXpfaWQnXSxcclxuXHRcdFx0XHRcdFx0XHRtZXJnZShcclxuXHRcdFx0XHRcdFx0XHRcdGV4aXN0aW5nOiBQYWdpbmF0ZWRDb21tZW50cyB8IHVuZGVmaW5lZCxcclxuXHRcdFx0XHRcdFx0XHRcdGluY29taW5nOiBQYWdpbmF0ZWRDb21tZW50c1xyXG5cdFx0XHRcdFx0XHRcdCk6IFBhZ2luYXRlZENvbW1lbnRzIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC4uLmluY29taW5nLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50czogW1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLihleGlzdGluZz8uY29tbWVudHMgfHwgW10pLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC4uLmluY29taW5nLmNvbW1lbnRzLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRdLFxyXG5cdFx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0fSksXHJcblx0XHRjb25uZWN0VG9EZXZUb29sczogdHJ1ZSxcclxuXHR9KTtcclxuXHJcbmV4cG9ydCBjb25zdCB3aXRoQXBvbGxvID0gY3JlYXRlV2l0aEFwb2xsbyhjcmVhdGVDbGllbnQpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsb3VkaW5hcnktcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvb2stZm9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pbzVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvbWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvdGlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdGV4dGFyZWEtYXV0b3NpemVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=