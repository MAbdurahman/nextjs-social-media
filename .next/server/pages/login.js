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
/* harmony import */ var _components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/WelcomeMessage */ "./components/Common/WelcomeMessage.js");
var _jsxFileName = "C:\\Users\\MAbdurrahman\\Documents\\Next-JS\\nextjs-social-media\\pages\\login.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* import { loginUser } from '../utils/authUser'; */


function Login() {
  //**************** variables ****************//
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    email: '',
    password: ''
  });
  const {
    email,
    password
  } = user;
  const {
    0: showPassword,
    1: setShowPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: formLoading,
    1: setFormLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: submitDisabled,
    1: setSubmitDisabled
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); //**************** functions ****************//

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault(); // await loginUser(user, setErrorMsg, setFormLoading);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      email,
      password
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 4
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 4
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    error: true,
    header: "Oops!",
    content: errorMsg,
    onDismiss: () => setErrorMsg(null),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Email",
    placeholder: "Email",
    name: "email",
    value: email,
    onChange: handleChange,
    fluid: true,
    icon: "envelope",
    iconPosition: "left",
    type: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    label: "Password",
    placeholder: "Password",
    name: "password",
    value: password,
    onChange: handleChange,
    fluid: true,
    icon: {
      name: 'eye',
      circular: true,
      link: true,
      onClick: () => setShowPassword(!showPassword)
    },
    iconPosition: "left",
    type: showPassword ? 'text' : 'password',
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Login",
    type: "submit",
    color: "orange",
    disabled: submitDisabled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 6
    }
  }))), __jsx(_components_Common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 4
    }
  }));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vV2VsY29tZU1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS8uL3BhZ2VzL2xvZ2luLmpzIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhL2lnbm9yZWR8QzpcXFVzZXJzXFxNQWJkdXJyYWhtYW5cXERvY3VtZW50c1xcTmV4dC1KU1xcbmV4dGpzLXNvY2lhbC1tZWRpYVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiRm9vdGVyTWVzc2FnZSIsIkxvZ2luIiwidXNlciIsInNldFVzZXIiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzaG93UGFzc3dvcmQiLCJzZXRTaG93UGFzc3dvcmQiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwiZm9ybUxvYWRpbmciLCJzZXRGb3JtTG9hZGluZyIsInN1Ym1pdERpc2FibGVkIiwic2V0U3VibWl0RGlzYWJsZWQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwicHJldiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiaXNVc2VyIiwiT2JqZWN0IiwidmFsdWVzIiwiZXZlcnkiLCJpdGVtIiwiQm9vbGVhbiIsImNpcmN1bGFyIiwibGluayIsIm9uQ2xpY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sTUFBTUEsYUFBYSxHQUFHLE1BQU07QUFDbEMsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU1DLFdBQVcsR0FBR0YsTUFBTSxDQUFDRyxRQUFQLEtBQW9CLFNBQXhDO0FBRUEsU0FDQyxNQUFDLHNEQUFEO0FBQ0MsU0FBSyxFQUFDLE1BRFA7QUFFQyxZQUFRLE1BRlQ7QUFHQyxVQUFNLEVBQUVELFdBQVcsR0FBRyxhQUFILEdBQW1CLGNBSHZDO0FBSUMsUUFBSSxFQUFFQSxXQUFXLEdBQUcsVUFBSCxHQUFnQixTQUpsQztBQUtDLFdBQU8sRUFDTkEsV0FBVyxHQUFHLG9CQUFILEdBQTBCLCtCQU52QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQ7QUFXQSxDQWZNO0FBaUJBLE1BQU1FLGFBQWEsR0FBRyxNQUFNO0FBQ2xDLFFBQU1KLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdGLE1BQU0sQ0FBQ0csUUFBUCxLQUFvQixTQUF4QztBQUNBLFNBQ0MscUVBQ0VELFdBQVcsR0FDWCxxRUFDQyxNQUFDLHNEQUFEO0FBQVMsWUFBUSxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQscUJBRWdCLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZoQixDQURELEVBS0MsTUFBQyxzREFBRDtBQUFTLFVBQU0sTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEQsQ0FEVyxHQVNYLHFFQUNDLE1BQUMsc0RBQUQ7QUFBUyxZQUFRLEVBQUMsUUFBbEI7QUFBMkIsUUFBSSxNQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyxtREFBRDtBQUFNLFFBQUksRUFBQyxNQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsUUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUZELENBREQsRUFNQyxNQUFDLHNEQUFEO0FBQVMsWUFBUSxFQUFDLFFBQWxCO0FBQTJCLFdBQU8sTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsbURBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsZ0JBRVcsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRlgsY0FFMkQsR0FGM0QsQ0FORCxDQVZGLENBREQ7QUF5QkEsQ0E1Qk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQlA7QUFDQTtBQUNBOztBQUNBO0FBS2UsU0FBU0csS0FBVCxHQUFpQjtBQUMvQjtBQUNBLFFBQU07QUFBQSxPQUFDQyxJQUFEO0FBQUEsT0FBT0M7QUFBUCxNQUFrQkMsK0NBQVEsQ0FBQztBQUNoQ0MsU0FBSyxFQUFFLEVBRHlCO0FBRWhDQyxZQUFRLEVBQUU7QUFGc0IsR0FBRCxDQUFoQztBQUtBLFFBQU07QUFBRUQsU0FBRjtBQUFTQztBQUFULE1BQXNCSixJQUE1QjtBQUNBLFFBQU07QUFBQSxPQUFDSyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0osK0NBQVEsQ0FBQyxLQUFELENBQWhEO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sV0FBRDtBQUFBLE9BQWNDO0FBQWQsTUFBZ0NSLCtDQUFRLENBQUMsS0FBRCxDQUE5QztBQUNBLFFBQU07QUFBQSxPQUFDUyxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDViwrQ0FBUSxDQUFDLElBQUQsQ0FBcEQsQ0FYK0IsQ0FhL0I7O0FBQ0EsUUFBTVcsWUFBWSxHQUFHQyxDQUFDLElBQUk7QUFDekIsVUFBTTtBQUFFQyxVQUFGO0FBQVFDO0FBQVIsUUFBa0JGLENBQUMsQ0FBQ0csTUFBMUI7QUFDQWhCLFdBQU8sQ0FBQ2lCLElBQUksb0NBQVVBLElBQVY7QUFBZ0IsT0FBQ0gsSUFBRCxHQUFRQztBQUF4QixNQUFMLENBQVA7QUFFQSxHQUpEOztBQU1BLFFBQU1HLFlBQVksR0FBRyxNQUFNTCxDQUFOLElBQVc7QUFDL0JBLEtBQUMsQ0FBQ00sY0FBRixHQUQrQixDQUcvQjtBQUNBLEdBSkQ7O0FBTUFDLGtEQUFTLENBQUMsTUFBTTtBQUNmLFVBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFBRXJCLFdBQUY7QUFBU0M7QUFBVCxLQUFkLEVBQW1DcUIsS0FBbkMsQ0FBeUNDLElBQUksSUFDM0RDLE9BQU8sQ0FBQ0QsSUFBRCxDQURPLENBQWY7QUFHQUosVUFBTSxHQUFHVixpQkFBaUIsQ0FBQyxLQUFELENBQXBCLEdBQThCQSxpQkFBaUIsQ0FBQyxJQUFELENBQXJEO0FBQ0EsR0FMUSxFQUtOLENBQUNaLElBQUQsQ0FMTSxDQUFUO0FBT0EsU0FDQyxxRUFDQyxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQUVDLE1BQUMsbURBQUQ7QUFDQyxXQUFPLEVBQUVTLFdBRFY7QUFFQyxTQUFLLEVBQUVGLFFBQVEsS0FBSyxJQUZyQjtBQUdDLFlBQVEsRUFBRVksWUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0MsTUFBQyxzREFBRDtBQUNDLFNBQUssTUFETjtBQUVDLFVBQU0sRUFBQyxPQUZSO0FBR0MsV0FBTyxFQUFFWixRQUhWO0FBSUMsYUFBUyxFQUFFLE1BQU1DLFdBQVcsQ0FBQyxJQUFELENBSjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRCxFQVlDLE1BQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMseURBQUQ7QUFDQyxZQUFRLE1BRFQ7QUFFQyxTQUFLLEVBQUMsT0FGUDtBQUdDLGVBQVcsRUFBQyxPQUhiO0FBSUMsUUFBSSxFQUFDLE9BSk47QUFLQyxTQUFLLEVBQUVMLEtBTFI7QUFNQyxZQUFRLEVBQUVVLFlBTlg7QUFPQyxTQUFLLE1BUE47QUFRQyxRQUFJLEVBQUMsVUFSTjtBQVNDLGdCQUFZLEVBQUMsTUFUZDtBQVVDLFFBQUksRUFBQyxPQVZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxFQWNDLE1BQUMseURBQUQ7QUFDQyxTQUFLLEVBQUMsVUFEUDtBQUVDLGVBQVcsRUFBQyxVQUZiO0FBR0MsUUFBSSxFQUFDLFVBSE47QUFJQyxTQUFLLEVBQUVULFFBSlI7QUFLQyxZQUFRLEVBQUVTLFlBTFg7QUFNQyxTQUFLLE1BTk47QUFPQyxRQUFJLEVBQUU7QUFDTEUsVUFBSSxFQUFFLEtBREQ7QUFFTGEsY0FBUSxFQUFFLElBRkw7QUFHTEMsVUFBSSxFQUFFLElBSEQ7QUFJTEMsYUFBTyxFQUFFLE1BQU14QixlQUFlLENBQUMsQ0FBQ0QsWUFBRjtBQUp6QixLQVBQO0FBYUMsZ0JBQVksRUFBQyxNQWJkO0FBY0MsUUFBSSxFQUFFQSxZQUFZLEdBQUcsTUFBSCxHQUFZLFVBZC9CO0FBZUMsWUFBUSxNQWZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRCxFQWdDQyxNQUFDLHNEQUFEO0FBQVMsVUFBTSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQ0QsRUFpQ0MsTUFBQyxxREFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLE9BRlQ7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLFNBQUssRUFBQyxRQUpQO0FBS0MsWUFBUSxFQUFFTSxjQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQ0QsQ0FaRCxDQUZELEVBd0RDLE1BQUMsNEVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhERCxDQUREO0FBNERBLEM7Ozs7Ozs7Ozs7O0FDckdELHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEljb24sIE1lc3NhZ2UsIERpdmlkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJNZXNzYWdlID0gKCkgPT4ge1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cdGNvbnN0IHNpZ251cFJvdXRlID0gcm91dGVyLnBhdGhuYW1lID09PSAnL3NpZ251cCc7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8TWVzc2FnZVxyXG5cdFx0XHRjb2xvcj0ndGVhbCdcclxuXHRcdFx0YXR0YWNoZWRcclxuXHRcdFx0aGVhZGVyPXtzaWdudXBSb3V0ZSA/ICdHZXQgU3RhcnRlZCcgOiAnV2VsY29tZSBCYWNrJ31cclxuXHRcdFx0aWNvbj17c2lnbnVwUm91dGUgPyAnc2V0dGluZ3MnIDogJ3ByaXZhY3knfVxyXG5cdFx0XHRjb250ZW50PXtcclxuXHRcdFx0XHRzaWdudXBSb3V0ZSA/ICdDcmVhdGUgTmV3IEFjY291bnQnIDogJ0xvZ2luIHdpdGggRW1haWwgYW5kIFBhc3N3b3JkJ1xyXG5cdFx0XHR9XHJcblx0XHQvPlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyTWVzc2FnZSA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9zaWdudXAnO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHR7c2lnbnVwUm91dGUgPyAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxNZXNzYWdlIGF0dGFjaGVkPSdib3R0b20nIHdhcm5pbmc+XHJcblx0XHRcdFx0XHRcdDxJY29uIG5hbWU9J2hlbHAnIC8+XHJcblx0XHRcdFx0XHRcdEV4aXN0aW5nIFVzZXI/IDxMaW5rIGhyZWY9Jy9sb2dpbic+TG9naW4gSGVyZSBJbnN0ZWFkPC9MaW5rPlxyXG5cdFx0XHRcdFx0PC9NZXNzYWdlPlxyXG5cdFx0XHRcdFx0PERpdmlkZXIgaGlkZGVuIC8+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCkgOiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxNZXNzYWdlIGF0dGFjaGVkPSdib3R0b20nIGluZm8+XHJcblx0XHRcdFx0XHRcdDxJY29uIG5hbWU9J2xvY2snIC8+XHJcblx0XHRcdFx0XHRcdDxMaW5rIGhyZWY9Jy9yZXNldCc+Rm9yZ290IFBhc3N3b3JkPzwvTGluaz5cclxuXHRcdFx0XHRcdDwvTWVzc2FnZT5cclxuXHJcblx0XHRcdFx0XHQ8TWVzc2FnZSBhdHRhY2hlZD0nYm90dG9tJyB3YXJuaW5nPlxyXG5cdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPSdoZWxwJyAvPlxyXG5cdFx0XHRcdFx0XHROZXcgVXNlcj8gPExpbmsgaHJlZj0nL3NpZ251cCc+U2lnbnVwIEhlcmU8L0xpbms+IEluc3RlYWR7JyAnfVxyXG5cdFx0XHRcdFx0PC9NZXNzYWdlPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpfVxyXG5cdFx0PC8+XHJcblx0KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgRGl2aWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuLyogaW1wb3J0IHsgbG9naW5Vc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aFVzZXInOyAqL1xyXG5pbXBvcnQge1xyXG5cdEhlYWRlck1lc3NhZ2UsXHJcblx0Rm9vdGVyTWVzc2FnZSxcclxufSBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9XZWxjb21lTWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuXHQvLyoqKioqKioqKioqKioqKiogdmFyaWFibGVzICoqKioqKioqKioqKioqKiovL1xyXG5cdGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKHtcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBlbWFpbCwgcGFzc3dvcmQgfSA9IHVzZXI7XHJcblx0Y29uc3QgW3Nob3dQYXNzd29yZCwgc2V0U2hvd1Bhc3N3b3JkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cdGNvbnN0IFtmb3JtTG9hZGluZywgc2V0Rm9ybUxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtzdWJtaXREaXNhYmxlZCwgc2V0U3VibWl0RGlzYWJsZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcblxyXG5cdC8vKioqKioqKioqKioqKioqKiBmdW5jdGlvbnMgKioqKioqKioqKioqKioqKi8vXHJcblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gZSA9PiB7XHJcblx0XHRjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcclxuXHRcdHNldFVzZXIocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuXHRcdFxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIGUgPT4ge1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdC8vIGF3YWl0IGxvZ2luVXNlcih1c2VyLCBzZXRFcnJvck1zZywgc2V0Rm9ybUxvYWRpbmcpO1xyXG5cdH07XHJcblxyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHsgZW1haWwsIHBhc3N3b3JkIH0pLmV2ZXJ5KGl0ZW0gPT5cclxuXHRcdFx0Qm9vbGVhbihpdGVtKVxyXG5cdFx0KTtcclxuXHRcdGlzVXNlciA/IHNldFN1Ym1pdERpc2FibGVkKGZhbHNlKSA6IHNldFN1Ym1pdERpc2FibGVkKHRydWUpO1xyXG5cdH0sIFt1c2VyXSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8SGVhZGVyTWVzc2FnZSAvPlxyXG5cdFx0XHQ8Rm9ybVxyXG5cdFx0XHRcdGxvYWRpbmc9e2Zvcm1Mb2FkaW5nfVxyXG5cdFx0XHRcdGVycm9yPXtlcnJvck1zZyAhPT0gbnVsbH1cclxuXHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PE1lc3NhZ2VcclxuXHRcdFx0XHRcdGVycm9yXHJcblx0XHRcdFx0XHRoZWFkZXI9J09vcHMhJ1xyXG5cdFx0XHRcdFx0Y29udGVudD17ZXJyb3JNc2d9XHJcblx0XHRcdFx0XHRvbkRpc21pc3M9eygpID0+IHNldEVycm9yTXNnKG51bGwpfVxyXG5cdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdDxTZWdtZW50PlxyXG5cdFx0XHRcdFx0PEZvcm0uSW5wdXRcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0VtYWlsJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW1haWwnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdGZsdWlkXHJcblx0XHRcdFx0XHRcdGljb249J2VudmVsb3BlJ1xyXG5cdFx0XHRcdFx0XHRpY29uUG9zaXRpb249J2xlZnQnXHJcblx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0XHQ8Rm9ybS5JbnB1dFxyXG5cdFx0XHRcdFx0XHRsYWJlbD0nUGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPSdQYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0bmFtZT0ncGFzc3dvcmQnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtwYXNzd29yZH1cclxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdFx0Zmx1aWRcclxuXHRcdFx0XHRcdFx0aWNvbj17e1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6ICdleWUnLFxyXG5cdFx0XHRcdFx0XHRcdGNpcmN1bGFyOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdGxpbms6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0b25DbGljazogKCkgPT4gc2V0U2hvd1Bhc3N3b3JkKCFzaG93UGFzc3dvcmQpLFxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRpY29uUG9zaXRpb249J2xlZnQnXHJcblx0XHRcdFx0XHRcdHR5cGU9e3Nob3dQYXNzd29yZCA/ICd0ZXh0JyA6ICdwYXNzd29yZCd9XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cdFx0XHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdFx0XHRpY29uPSdzaWdudXAnXHJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9J0xvZ2luJ1xyXG5cdFx0XHRcdFx0XHR0eXBlPSdzdWJtaXQnXHJcblx0XHRcdFx0XHRcdGNvbG9yPSdvcmFuZ2UnXHJcblx0XHRcdFx0XHRcdGRpc2FibGVkPXtzdWJtaXREaXNhYmxlZH1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9TZWdtZW50PlxyXG5cdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdDxGb290ZXJNZXNzYWdlIC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9