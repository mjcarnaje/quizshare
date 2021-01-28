webpackHotUpdate_N_E("pages/dashboard/profile",{

/***/ "./src/components/dasboard/AccountInformation.tsx":
/*!********************************************************!*\
  !*** ./src/components/dasboard/AccountInformation.tsx ***!
  \********************************************************/
/*! exports provided: AccountInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountInformation", function() { return AccountInformation; });
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/react/dist/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ "./node_modules/react-icons/md/index.esm.js");
/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../generated/graphql */ "./src/generated/graphql.tsx");
/* harmony import */ var _AccountInformationEdit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AccountInformationEdit */ "./src/components/dasboard/AccountInformationEdit.tsx");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "C:\\Users\\mj\\Documents\\Codes\\PROJECTS\\quizshare-typescript\\client\\src\\components\\dasboard\\AccountInformation.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var AccountInformation = function AccountInformation(_ref) {
  _s();

  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      editMode = _useState[0],
      setEditMode = _useState[1];

  var coverPhotoBg = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"])('gray.50', 'rgba(255, 255, 255, 0.04)');

  var _useMeQuery = Object(_generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useMeQuery"])(),
      data = _useMeQuery.data,
      loading = _useMeQuery.loading,
      error = _useMeQuery.error;

  if (!data && loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 10
    }, _this);
  }

  if (!data && !loading) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      children: ["error: ", error === null || error === void 0 ? void 0 : error.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }, _this);
  }

  if (editMode) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_AccountInformationEdit__WEBPACK_IMPORTED_MODULE_7__["AccountInformationEdit"], {
      accInfoProps: data.me,
      setEditMode: setEditMode
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }, _this);
  }

  var _ref2 = data.me,
      email = _ref2.email,
      avatar = _ref2.avatar,
      username = _ref2.username,
      cover_photo = _ref2.cover_photo,
      name = _ref2.profile.name;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colSpan: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      py: "8px",
      px: "6px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Text"], {
        px: "16px",
        children: "Account Information"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: function onClick() {
          return setEditMode(true);
        },
        rightIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }, _this),
        colorScheme: "purple",
        variant: "ghost",
        children: "Edit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colSpan: 10,
      p: "5px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Box"], {
        bg: "gray.100",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["AspectRatio"], {
          maxW: "full",
          ratio: 16 / 5,
          children: cover_photo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_8___default.a, {
            src: cover_photo,
            alt: "Cover Photo",
            layout: "fill"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 8
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Center"], {
            bg: coverPhotoBg,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              onClick: function onClick() {
                return setEditMode(true);
              },
              leftIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_5__["MdPhotoSizeSelectActual"], {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 20
              }, _this),
              colorScheme: "gray",
              variant: "ghost",
              children: "Add Cover Photo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 9
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 8
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 6
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colSpan: 10,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        mb: "16px"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
        name: name,
        size: "xl",
        src: avatar || ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: username
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: email
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["GridItem"], {
      colStart: 4,
      colEnd: 11,
      color: "purple",
      py: "16px",
      children: "******"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 4
    }, _this)]
  }, void 0, true);
};

_s(AccountInformation, "bovSkYNm4r3xvqeCta8VBzapYxY=", false, function () {
  return [_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__["useColorModeValue"], _generated_graphql__WEBPACK_IMPORTED_MODULE_6__["useMeQuery"]];
});

_c = AccountInformation;

var _c;

$RefreshReg$(_c, "AccountInformation");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZGFzYm9hcmQvQWNjb3VudEluZm9ybWF0aW9uLnRzeCJdLCJuYW1lcyI6WyJBY2NvdW50SW5mb3JtYXRpb24iLCJ1c2VTdGF0ZSIsImVkaXRNb2RlIiwic2V0RWRpdE1vZGUiLCJjb3ZlclBob3RvQmciLCJ1c2VDb2xvck1vZGVWYWx1ZSIsInVzZU1lUXVlcnkiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwibWVzc2FnZSIsIm1lIiwiZW1haWwiLCJhdmF0YXIiLCJ1c2VybmFtZSIsImNvdmVyX3Bob3RvIiwibmFtZSIsInByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJTyxJQUFNQSxrQkFBcUQsR0FBRyxTQUF4REEsa0JBQXdELE9BQVE7QUFBQTs7QUFBQTs7QUFBQSxrQkFDNUNDLHNEQUFRLENBQUMsS0FBRCxDQURvQztBQUFBLE1BQ3JFQyxRQURxRTtBQUFBLE1BQzNEQyxXQUQyRDs7QUFHNUUsTUFBTUMsWUFBWSxHQUFHQywwRUFBaUIsQ0FDckMsU0FEcUMsRUFFckMsMkJBRnFDLENBQXRDOztBQUg0RSxvQkFRM0NDLHFFQUFVLEVBUmlDO0FBQUEsTUFRcEVDLElBUm9FLGVBUXBFQSxJQVJvRTtBQUFBLE1BUTlEQyxPQVI4RCxlQVE5REEsT0FSOEQ7QUFBQSxNQVFyREMsS0FScUQsZUFRckRBLEtBUnFEOztBQVU1RSxNQUFJLENBQUNGLElBQUQsSUFBU0MsT0FBYixFQUFzQjtBQUNyQix3QkFBTyxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDQTs7QUFFRCxNQUFJLENBQUNELElBQUQsSUFBUyxDQUFDQyxPQUFkLEVBQXVCO0FBQ3RCLHdCQUFPO0FBQUEsNEJBQWFDLEtBQWIsYUFBYUEsS0FBYix1QkFBYUEsS0FBSyxDQUFFQyxPQUFwQjtBQUFBO0FB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LFFBQXpDO0FBQWtELFFBQUUsRUFBQyxNQUFyRDtBQUFBLGdCQUNFRjtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5RUQsZUFpRkMscUVBQUMseURBQUQ7QUFDQyxjQUFRLEVBQUUsQ0FEWDtBQUVDLFlBQU0sRUFBRSxDQUZUO0FBR0MsZ0JBQVUsRUFBQyxVQUhaO0FBSUMsUUFBRSxFQUFDLE1BSko7QUFLQyxRQUFFLEVBQUMsTUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpGRCxlQTBGQyxxRUFBQyx5REFBRDtBQUFVLGNBQVEsRUFBRSxDQUFwQjtBQUF1QixZQUFNLEVBQUUsRUFBL0I7QUFBbUMsV0FBSyxFQUFDLFFBQXpDO0FBQWtELFFBQUUsRUFBQyxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTFGRDtBQUFBLGtCQUREO0FBZ0dBLENBbklNOztHQUFNWixrQjtVQUdTSyxrRSxFQUtZQyw2RDs7O0tBUnJCTixrQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQvcHJvZmlsZS5jMzI0MTcyYzZjMGQ4ZDgzMDlmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuXHRBc3BlY3RSYXRpbyxcclxuXHRBdmF0YXIsXHJcblx0Qm94LFxyXG5cdEJ1dHRvbixcclxuXHRDZW50ZXIsXHJcblx0RGl2aWRlcixcclxuXHRHcmlkSXRlbSxcclxuXHRTcGlubmVyLFxyXG5cdFRleHQsXHJcblx0dXNlQ29sb3JNb2RlVmFsdWUsXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmlFZGl0IH0gZnJvbSAncmVhY3QtaWNvbnMvZmknO1xyXG5pbXBvcnQgeyBNZFBob3RvU2l6ZVNlbGVjdEFjdHVhbCB9IGZyb20gJ3JlYWN0LWljb25zL21kJztcclxuaW1wb3J0IHsgdXNlTWVRdWVyeSB9IGZyb20gJy4uLy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcclxuaW1wb3J0IHsgQWNjb3VudEluZm9ybWF0aW9uRWRpdCB9IGZyb20gJy4vQWNjb3VudEluZm9ybWF0aW9uRWRpdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuXHJcbmludGVyZmFjZSBBY2NvdW50SW5mb3JtYXRpb25Qcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY291bnRJbmZvcm1hdGlvbjogUmVhY3QuRkM8QWNjb3VudEluZm9ybWF0aW9uUHJvcHM+ID0gKHt9KSA9PiB7XHJcblx0Y29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdGNvbnN0IGNvdmVyUGhvdG9CZyA9IHVzZUNvbG9yTW9kZVZhbHVlKFxyXG5cdFx0J2dyYXkuNTAnLFxyXG5cdFx0J3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCknXHJcblx0KTtcclxuXHJcblx0Y29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9ID0gdXNlTWVRdWVyeSgpO1xyXG5cclxuXHRpZiAoIWRhdGEgJiYgbG9hZGluZykge1xyXG5cdFx0cmV0dXJuIDxTcGlubmVyIC8+O1xyXG5cdH1cclxuXHJcblx0aWYgKCFkYXRhICYmICFsb2FkaW5nKSB7XHJcblx0XHRyZXR1cm4gPGRpdj5lcnJvcjoge2Vycm9yPy5tZXNzYWdlfTwvZGl2PjtcclxuXHR9XHJcblxyXG5cdGlmIChlZGl0TW9kZSkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PEFjY291bnRJbmZvcm1hdGlvbkVkaXRcclxuXHRcdFx0XHRhY2NJbmZvUHJvcHM9e2RhdGEhLm1lIX1cclxuXHRcdFx0XHRzZXRFZGl0TW9kZT17c2V0RWRpdE1vZGV9XHJcblx0XHRcdC8+XHJcblx0XHQpO1xyXG5cdH1cclxuXHJcblx0Y29uc3Qge1xyXG5cdFx0ZW1haWwsXHJcblx0XHRhdmF0YXIsXHJcblx0XHR1c2VybmFtZSxcclxuXHRcdGNvdmVyX3Bob3RvLFxyXG5cdFx0cHJvZmlsZTogeyBuYW1lIH0sXHJcblx0fSA9IGRhdGEhLm1lITtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxHcmlkSXRlbVxyXG5cdFx0XHRcdGNvbFNwYW49ezEwfVxyXG5cdFx0XHRcdGRpc3BsYXk9J2ZsZXgnXHJcblx0XHRcdFx0anVzdGlmeUNvbnRlbnQ9J3NwYWNlLWJldHdlZW4nXHJcblx0XHRcdFx0YWxpZ25JdGVtcz0nY2VudGVyJ1xyXG5cdFx0XHRcdHB5PSc4cHgnXHJcblx0XHRcdFx0cHg9JzZweCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxUZXh0IHB4PScxNnB4Jz5BY2NvdW50IEluZm9ybWF0aW9uPC9UZXh0PlxyXG5cdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldEVkaXRNb2RlKHRydWUpfVxyXG5cdFx0XHRcdFx0cmlnaHRJY29uPXs8RmlFZGl0IC8+fVxyXG5cdFx0XHRcdFx0Y29sb3JTY2hlbWU9J3B1cnBsZSdcclxuXHRcdFx0XHRcdHZhcmlhbnQ9J2dob3N0J1xyXG5cdFx0XHRcdD5cclxuXHRcdFx0XHRcdEVkaXRcclxuXHRcdFx0XHQ8L0J1dHRvbj5cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFNwYW49ezEwfT5cclxuXHRcdFx0XHQ8RGl2aWRlciAvPlxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW0gY29sU3Bhbj17MTB9IHA9JzVweCc+XHJcblx0XHRcdFx0PEJveCBiZz0nZ3JheS4xMDAnPlxyXG5cdFx0XHRcdFx0PEFzcGVjdFJhdGlvIG1heFc9J2Z1bGwnIHJhdGlvPXsxNiAvIDV9PlxyXG5cdFx0XHRcdFx0XHR7Y292ZXJfcGhvdG8gPyAoXHJcblx0XHRcdFx0XHRcdFx0PEltYWdlIHNyYz17Y292ZXJfcGhvdG99IGFsdD0nQ292ZXIgUGhvdG8nIGxheW91dD0nZmlsbCcgLz5cclxuXHRcdFx0XHRcdFx0KSA6IChcclxuXHRcdFx0XHRcdFx0XHQ8Q2VudGVyIGJnPXtjb3ZlclBob3RvQmd9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kZSh0cnVlKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0bGVmdEljb249ezxNZFBob3RvU2l6ZVNlbGVjdEFjdHVhbCAvPn1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29sb3JTY2hlbWU9J2dyYXknXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhcmlhbnQ9J2dob3N0J1xyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRBZGQgQ292ZXIgUGhvdG9cclxuXHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDwvQ2VudGVyPlxyXG5cdFx0XHRcdFx0XHQpfVxyXG5cdFx0XHRcdFx0PC9Bc3BlY3RSYXRpbz5cclxuXHRcdFx0XHQ8L0JveD5cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFNwYW49ezEwfT5cclxuXHRcdFx0XHQ8RGl2aWRlciBtYj0nMTZweCcgLz5cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtXHJcblx0XHRcdFx0Y29sU3RhcnQ9ezF9XHJcblx0XHRcdFx0Y29sRW5kPXs0fVxyXG5cdFx0XHRcdGZvbnRXZWlnaHQ9J3NlbWlib2xkJ1xyXG5cdFx0XHRcdHBsPSczMnB4J1xyXG5cdFx0XHRcdHB5PScxNnB4J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0UHJvZmlsZSBJbWFnZVxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW0gY29sU3RhcnQ9ezR9IGNvbEVuZD17MTF9IGNvbG9yPSdwdXJwbGUnIHB5PScxNnB4Jz5cclxuXHRcdFx0XHQ8QXZhdGFyIG5hbWU9e25hbWV9IHNpemU9J3hsJyBzcmM9e2F2YXRhciB8fCAnJ30gLz5cclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtXHJcblx0XHRcdFx0Y29sU3RhcnQ9ezF9XHJcblx0XHRcdFx0Y29sRW5kPXs0fVxyXG5cdFx0XHRcdGZvbnRXZWlnaHQ9J3NlbWlib2xkJ1xyXG5cdFx0XHRcdHBsPSczMnB4J1xyXG5cdFx0XHRcdHB5PScxNnB4J1xyXG5cdFx0XHQ+XHJcblx0XHRcdFx0VXNlcm5hbWVcclxuXHRcdFx0PC9HcmlkSXRlbT5cclxuXHRcdFx0PEdyaWRJdGVtIGNvbFN0YXJ0PXs0fSBjb2xFbmQ9ezExfSBjb2xvcj0ncHVycGxlJyBweT0nMTZweCc+XHJcblx0XHRcdFx0e3VzZXJuYW1lfVxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW1cclxuXHRcdFx0XHRjb2xTdGFydD17MX1cclxuXHRcdFx0XHRjb2xFbmQ9ezR9XHJcblx0XHRcdFx0Zm9udFdlaWdodD0nc2VtaWJvbGQnXHJcblx0XHRcdFx0cGw9JzMycHgnXHJcblx0XHRcdFx0cHk9JzE2cHgnXHJcblx0XHRcdD5cclxuXHRcdFx0XHRFbWFpbFxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0XHQ8R3JpZEl0ZW0gY29sU3RhcnQ9ezR9IGNvbEVuZD17MTF9IGNvbG9yPSdwdXJwbGUnIHB5PScxNnB4Jz5cclxuXHRcdFx0XHR7ZW1haWx9XHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbVxyXG5cdFx0XHRcdGNvbFN0YXJ0PXsxfVxyXG5cdFx0XHRcdGNvbEVuZD17NH1cclxuXHRcdFx0XHRmb250V2VpZ2h0PSdzZW1pYm9sZCdcclxuXHRcdFx0XHRwbD0nMzJweCdcclxuXHRcdFx0XHRweT0nMTZweCdcclxuXHRcdFx0PlxyXG5cdFx0XHRcdFBhc3N3b3JkXHJcblx0XHRcdDwvR3JpZEl0ZW0+XHJcblx0XHRcdDxHcmlkSXRlbSBjb2xTdGFydD17NH0gY29sRW5kPXsxMX0gY29sb3I9J3B1cnBsZScgcHk9JzE2cHgnPlxyXG5cdFx0XHRcdCoqKioqKlxyXG5cdFx0XHQ8L0dyaWRJdGVtPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==