(function() {
var exports = {};
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./components/Common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/Common/WelcomeMessage.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderMessage": function() { return /* binding */ HeaderMessage; },
/* harmony export */   "FooterMessage": function() { return /* binding */ FooterMessage; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\MAbdurrahman\\Documents\\Next-JS\\nextjs-social-media\\components\\Common\\WelcomeMessage.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const HeaderMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === '/signup';
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    color: "teal",
    attached: true,
    header: signupRoute ? 'Get Started' : 'Welcome Back',
    icon: signupRoute ? 'settings' : 'privacy',
    content: signupRoute ? 'Create New Account' : 'Login with Email and Password',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 3
    }
  });
};
const FooterMessage = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const signupRoute = router.pathname === '/signup';
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, signupRoute ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 6
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }), "Existing User? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 22
    }
  }, "Login Here Instead")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 6
    }
  })) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    info: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 6
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "lock",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/reset",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "Forgot Password?")), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    attached: "bottom",
    warning: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "help",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }), "New User? ", __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, "Signup Here"), " Instead", ' ')));
};

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
var _jsxFileName = "C:\\Users\\MAbdurrahman\\Documents\\Next-JS\\nextjs-social-media\\pages\\login.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




function Login() {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_3__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_3__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "regexUserName": function() { return /* binding */ regexUserName; }
/* harmony export */ });
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/login.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvLi91dGlscy9hdXRoVXNlci5qcyIsIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xcTUFiZHVycmFobWFuXFxEb2N1bWVudHNcXE5leHQtSlNcXG5leHRqcy1zb2NpYWwtbWVkaWFcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJIZWFkZXJNZXNzYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2lnbnVwUm91dGUiLCJwYXRobmFtZSIsIkZvb3Rlck1lc3NhZ2UiLCJMb2dpbiIs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IjoicGFnZXMvbG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uLCBNZXNzYWdlLCBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTWVzc2FnZSA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9zaWdudXAnO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1lc3NhZ2VcclxuXHRcdFx0Y29sb3I9J3RlYWwnXHJcblx0XHRcdGF0dGFjaGVkXHJcblx0XHRcdGhlYWRlcj17c2lnbnVwUm91dGUgPyAnR2V0IFN0YXJ0ZWQnIDogJ1dlbGNvbWUgQmFjayd9XHJcblx0XHRcdGljb249e3NpZ251cFJvdXRlID8gJ3NldHRpbmdzJyA6ICdwcml2YWN5J31cclxuXHRcdFx0Y29udGVudD17XHJcblx0XHRcdFx0c2lnbnVwUm91dGUgPyAnQ3JlYXRlIE5ldyBBY2NvdW50JyA6ICdMb2dpbiB3aXRoIEVtYWlsIGFuZCBQYXNzd29yZCdcclxuXHRcdFx0fVxyXG5cdFx0Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3Rlck1lc3NhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvc2lnbnVwJztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e3NpZ251cFJvdXRlID8gKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8TWVzc2FnZSBhdHRhY2hlZD0nYm90dG9tJyB3YXJuaW5nPlxyXG5cdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPSdoZWxwJyAvPlxyXG5cdFx0XHRcdFx0XHRFeGlzdGluZyBVc2VyPyA8TGluayBocmVmPScvbG9naW4nPkxvZ2luIEhlcmUgSW5zdGVhZDwvTGluaz5cclxuXHRcdFx0XHRcdDwvTWVzc2FnZT5cclxuXHRcdFx0XHRcdDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8TWVzc2FnZSBhdHRhY2hlZD0nYm90dG9tJyBpbmZvPlxyXG5cdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPSdsb2NrJyAvPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVzZXQnPkZvcmdvdCBQYXNzd29yZD88L0xpbms+XHJcblx0XHRcdFx0XHQ8L01lc3NhZ2U+XHJcblxyXG5cdFx0XHRcdFx0PE1lc3NhZ2UgYXR0YWNoZWQ9J2JvdHRvbScgd2FybmluZz5cclxuXHRcdFx0XHRcdFx0PEljb24gbmFtZT0naGVscCcgLz5cclxuXHRcdFx0XHRcdFx0TmV3IFVzZXI/IDxMaW5rIGhyZWY9Jy9zaWdudXAnPlNpZ251cCBIZXJlPC9MaW5rPiBJbnN0ZWFkeycgJ31cclxuXHRcdFx0XHRcdDwvTWVzc2FnZT5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIFNlZ21lbnQsIERpdmlkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IGxvZ2luVXNlciB9IGZyb20gJy4uL3V0aWxzL2F1dGhVc2VyJztcclxuaW1wb3J0IHtcclxuXHRIZWFkZXJNZXNzYWdlLFxyXG5cdEZvb3Rlck1lc3NhZ2UsXHJcbn0gZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcbiAgICAgIDxIZWFkZXJNZXNzYWdlIC8+XHJcblx0XHRcdFxyXG4gICAgICAgICA8Rm9vdGVyTWVzc2FnZSAvPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgcmVnZXhVc2VyTmFtZSA9IC9eKD8hLipcXC5cXC4pKD8hLipcXC4kKVteXFxXXVtcXHcuXXswLDI5fSQvOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9