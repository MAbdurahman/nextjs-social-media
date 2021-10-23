(function() {
var exports = {};
exports.id = "pages/signup";
exports.ids = ["pages/signup"];
exports.modules = {

/***/ "./components/Common/CommonInputs.js":
/*!*******************************************!*\
  !*** ./components/Common/CommonInputs.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CommonInputs; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\MAbdurrahman\\Documents\\Next-JS\\nextjs-social-media\\components\\Common\\CommonInputs.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


function CommonInputs({
  user: {
    bio,
    facebook,
    instagram,
    youtube,
    twitter
  },
  handleChange,
  showSocialLinks,
  setShowSocialLinks
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    required: true,
    control: semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.TextArea,
    name: "bio",
    value: bio,
    onChange: handleChange,
    placeholder: "bio",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 4
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    content: "Add Social Links",
    color: "red",
    icon: "at",
    type: "button",
    onClick: () => setShowSocialLinks(!showSocialLinks),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 4
    }
  }), showSocialLinks && __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "facebook f",
    iconPosition: "left",
    name: "facebook",
    value: facebook,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "twitter",
    iconPosition: "left",
    name: "twitter",
    value: twitter,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "instagram",
    iconPosition: "left",
    name: "instagram",
    value: instagram,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    icon: "youtube",
    iconPosition: "left",
    name: "youtube",
    value: youtube,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Message, {
    icon: "attention",
    info: true,
    size: "small",
    header: "Social Media Links Are Optional!",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 6
    }
  })));
}

/***/ }),

/***/ "./components/Common/ImageDropDiv.js":
/*!*******************************************!*\
  !*** ./components/Common/ImageDropDiv.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImageDropDiv; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\MAbdurrahman\\Documents\\Next-JS\\nextjs-social-media\\components\\Common\\ImageDropDiv.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function ImageDropDiv({
  highlighted,
  setHighlighted,
  inputRef,
  handleChange,
  mediaPreview,
  setMediaPreview,
  setMedia
}) {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Field, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 4
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    placeholder: true,
    basic: true,
    secondary: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("input", {
    style: {
      display: 'none'
    },
    type: "file",
    accept: "image/*",
    onChange: handleChange,
    name: "media",
    ref: inputRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 6
    }
  }), __jsx("div", {
    onDragOver: e => {
      e.preventDefault();
      setHighlighted(true);
    },
    onDragLeave: e => {
      e.preventDefault();
      setHighlighted(false);
    },
    onDrop: e => {
      e.preventDefault();
      setHighlighted(true);
      const droppedFile = Array.from(e.dataTransfer.files);
      setMedia(droppedFile[0]);
      setMediaPreview(URL.createObjectURL(droppedFile[0]));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 6
    }
  }, mediaPreview === null ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, _extends({}, highlighted && {
    color: 'green'
  }, {
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Header, {
    icon: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 10
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "file image outline",
    style: {
      cursor: 'pointer'
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), "Drag 'n Drop or Click To Upload Image"))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    color: "green",
    placeholder: true,
    basic: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: mediaPreview,
    size: "medium",
    centered: true,
    style: {
      cursor: 'pointer'
    },
    onClick: () => inputRef.current.click(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 10
    }
  })))))));
}

/***/ }),

/***/ "./components/common/WelcomeMessage.js":
/*!*********************************************!*\
  !*** ./components/common/WelcomeMessage.js ***!
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
var _jsxFileName = "C:\\Users\\MAbdurrahman\\Documents\\Next-JS\\nextjs-social-media\\components\\common\\WelcomeMessage.js";

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

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Signup; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../components/common/WelcomeMessage */ "./components/common/WelcomeMessage.js");
/* harmony import */ var _components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/CommonInputs */ "./components/Common/CommonInputs.js");
/* harmony import */ var _components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ImageDropDiv */ "./components/Common/ImageDropDiv.js");
var _jsxFileName = "C:\\Users\\MAbdurrahman\\Documents\\Next-JS\\nextjs-social-media\\pages\\signup.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
function Signup() {
  //**************** variables ****************//
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    name: '',
    email: '',
    password: '',
    bio: '',
    facebook: '',
    youtube: '',
    twitter: '',
    instagram: ''
  });
  const {
    name,
    email,
    password,
    bio
  } = user;
  const {
    0: showSocialLinks,
    1: setShowSocialLinks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: usernameLoading,
    1: setUsernameLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: usernameAvailable,
    1: setUsernameAvailable
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: media,
    1: setMedia
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: mediaPreview,
    1: setMediaPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: highlighted,
    1: setHighlighted
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); //**************** functions ****************//

  const handleChange = e => {
    const {
      name,
      value,
      files
    } = e.target;

    if (name === 'media') {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }

    setUser(prev => _objectSpread(_objectSpread({}, prev), {}, {
      [name]: value
    }));
  };

  const checkUserName = async () => {
    console.log('checkUserName');
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('handleSubmit');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const isUser = Object.values({
      name,
      email,
      password,
      bio
    }).every(item => Boolean(item));
    isUser ? setSubmitDisabled(false) : setSubmitDisabled(true);
  }, [user]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {}, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_components_common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.HeaderMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 4
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form, {
    loading: formLoading,
    error: errorMsg !== null,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
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
      lineNumber: 76,
      columnNumber: 5
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Segment, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx(_components_Common_ImageDropDiv__WEBPACK_IMPORTED_MODULE_4__.default, {
    mediaPreview: mediaPreview,
    setMediaPreview: setMediaPreview,
    setMedia: setMedia,
    inputRef: inputRef,
    highlighted: highlighted,
    setHighlighted: setHighlighted,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    required: true,
    label: "Name",
    placeholder: "Name",
    name: "name",
    value: name,
    onChange: handleChange,
    fluid: true,
    icon: "user",
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
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
      lineNumber: 104,
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
      lineNumber: 116,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Form.Input, {
    loading: usernameLoading,
    error: !usernameAvailable,
    required: true,
    label: "Username",
    placeholder: "Username",
    value: username,
    onChange: e => {
      setUsername(e.target.value);

      if (regexUserName.test(e.target.value)) {
        setUsernameAvailable(true);
      } else {
        setUsernameAvailable(false);
      }
    },
    fluid: true,
    icon: usernameAvailable ? 'check' : 'close',
    iconPosition: "left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 6
    }
  }), __jsx(_components_Common_CommonInputs__WEBPACK_IMPORTED_MODULE_3__.default, {
    user: user,
    showSocialLinks: showSocialLinks,
    setShowSocialLinks: setShowSocialLinks,
    handleChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {
    hidden: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 6
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    icon: "signup",
    content: "Signup",
    type: "submit",
    color: "orange",
    disabled: submitDisabled || !usernameAvailable,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 6
    }
  }))), __jsx(_components_common_WelcomeMessage__WEBPACK_IMPORTED_MODULE_2__.FooterMessage, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/signup.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzLmpzIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXYuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvY29tbW9uL1dlbGNvbWVNZXNzYWdlLmpzIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvLi9wYWdlcy9zaWdudXAuanMiLCJ3ZWJwYWNrOi8vbmV4dGpzLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9uZXh0anMtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJzZW1hbnRpYy11aS1yZWFjdFwiIiwid2VicGFjazovL25leHRqcy1zb2NpYWwtbWVkaWEvaWdub3JlZHxDOlxcVXNlcnNcXE1BYmR1cnJhaG1hblxcRG9jdW1lbnRzXFxOZXh0LUpTXFxuZXh0anMtc29jaWFsLW1lZGlhXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29tbW9uSW5wdXRzIiwidXNlciIsImJpbyIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwieW91dHViZSIsInR3aXR0ZXIiLCJoYW5kbGVDaGFuZ2UiLCJzaG93U29jaWFsTGlua3MiLCJzZXRTaG93U29jaWFsTGlua3MiLCJUZXh0QXJlYSIsIkltYWdlRHJvcERpdiIsImhpZ2hsaWdodGVkIiwic2V0SGlnaGxpZ2h0ZWQiLCJpbnB1dFJlZiIsIm1lZGlhUHJldmlldyIsInNldE1lZGlhUHJldmlldyIsInNldE1lZGlhIiwiZGlzcGxheSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRyb3BwZWRGaWxlIiwiQXJyYXkiLCJmcm9tIiwiZGF0YVRyYW5zZmVyIiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJjb2xvciIsImN1cnNvciIsImN1cnJlbnQiLCJjbGljayIsIkhlYWRlck1lc3NhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzaWdudXBSb3V0ZSIsInBhdGhuYW1lIiwiRm9vdGVyTWVzc2FnZSIsInJlZ2V4VXNlck5hbWUiLCJTaWdudXAiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsInNob3dQYXNzd29yZCIsInNldFNob3dQYXNzd29yZCIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJmb3JtTG9hZGluZyIsInNldEZvcm1Mb2FkaW5nIiwic3VibWl0RGlzYWJsZWQiLCJzZXRTdWJtaXREaXNhYmxlZCIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJ1c2VybmFtZUxvYWRpbmciLCJzZXRVc2VybmFtZUxvYWRpbmciLCJ1c2VybmFtZUF2YWlsYWJsZSIsInNldFVzZXJuYW1lQXZhaWxhYmxlIiwibWVkaWEiLCJ1c2VSZWYiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJjaGVja1VzZXJOYW1lIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsInVzZUVmZmVjdCIsImlzVXNlciIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwiaXRl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QUFBQTtBQUFBO0FBQUEsSUE1RUQsRUE2RUMsTUFBQyxxREFBRDtBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsV0FBTyxFQUFDLFFBRlQ7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLFNBQUssRUFBQyxRQUpQO0FBS0MsWUFBUSxFQUFFNEMsY0FBYyxJQUFJLENBQUNNLGlCQUw5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBN0VELENBWkQsQ0FGRCxFQW9HQyxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwR0QsQ0FERDtBQXdHQSxDOzs7Ozs7Ozs7OztBQzNLRCx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvc2lnbnVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBUZXh0QXJlYSwgRGl2aWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1vbklucHV0cyh7XHJcblx0dXNlcjogeyBiaW8sIGZhY2Vib29rLCBpbnN0YWdyYW0sIHlvdXR1YmUsIHR3aXR0ZXIgfSxcclxuXHRoYW5kbGVDaGFuZ2UsXHJcblx0c2hvd1NvY2lhbExpbmtzLFxyXG5cdHNldFNob3dTb2NpYWxMaW5rcyxcclxufSkge1xyXG5cdHJldHVybiAoXHJcblx0XHQ8PlxyXG5cdFx0XHQ8Rm9ybS5GaWVsZFxyXG5cdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0Y29udHJvbD17VGV4dEFyZWF9XHJcblx0XHRcdFx0bmFtZT0nYmlvJ1xyXG5cdFx0XHRcdHZhbHVlPXtiaW99XHJcblx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRwbGFjZWhvbGRlcj0nYmlvJ1xyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0PEJ1dHRvblxyXG5cdFx0XHRcdGNvbnRlbnQ9J0FkZCBTb2NpYWwgTGlua3MnXHJcblx0XHRcdFx0Y29sb3I9J3JlZCdcclxuXHRcdFx0XHRpY29uPSdhdCdcclxuXHRcdFx0XHR0eXBlPSdidXR0b24nXHJcblx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd1NvY2lhbExpbmtzKCFzaG93U29jaWFsTGlua3MpfVxyXG5cdFx0XHQvPlxyXG5cclxuXHRcdFx0e3Nob3dTb2NpYWxMaW5rcyAmJiAoXHJcblx0XHRcdFx0PD5cclxuXHRcdFx0XHRcdDxEaXZpZGVyIC8+XHJcblx0XHRcdFx0XHQ8Rm9ybS5JbnB1dFxyXG5cdFx0XHRcdFx0XHRpY29uPSdmYWNlYm9vayBmJ1xyXG5cdFx0XHRcdFx0XHRpY29uUG9zaXRpb249J2xlZnQnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2ZhY2Vib29rJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZmFjZWJvb2t9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtLklucHV0XHJcblx0XHRcdFx0XHRcdGljb249J3R3aXR0ZXInXHJcblx0XHRcdFx0XHRcdGljb25Qb3NpdGlvbj0nbGVmdCdcclxuXHRcdFx0XHRcdFx0bmFtZT0ndHdpdHRlcidcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3R3aXR0ZXJ9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtLklucHV0XHJcblx0XHRcdFx0XHRcdGljb249J2luc3RhZ3JhbSdcclxuXHRcdFx0XHRcdFx0aWNvblBvc2l0aW9uPSdsZWZ0J1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdpbnN0YWdyYW0nXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtpbnN0YWdyYW19XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxGb3JtLklucHV0XHJcblx0XHRcdFx0XHRcdGljb249J3lvdXR1YmUnXHJcblx0XHRcdFx0XHRcdGljb25Qb3NpdGlvbj0nbGVmdCdcclxuXHRcdFx0XHRcdFx0bmFtZT0neW91dHViZSdcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3lvdXR1YmV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxNZXNzYWdlXHJcblx0XHRcdFx0XHRcdGljb249J2F0dGVudGlvbidcclxuXHRcdFx0XHRcdFx0aW5mb1xyXG5cdFx0XHRcdFx0XHRzaXplPSdzbWFsbCdcclxuXHRcdFx0XHRcdFx0aGVhZGVyPSdTb2NpYWwgTWVkaWEgTGlua3MgQXJlIE9wdGlvbmFsISdcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC8+XHJcblx0XHRcdCl9XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIFNlZ21lbnQsIEltYWdlLCBJY29uLCBIZWFkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZURyb3BEaXYoe1xyXG5cdGhpZ2hsaWdodGVkLFxyXG5cdHNldEhpZ2hsaWdodGVkLFxyXG5cdGlucHV0UmVmLFxyXG5cdGhhbmRsZUNoYW5nZSxcclxuXHRtZWRpYVByZXZpZXcsXHJcblx0c2V0TWVkaWFQcmV2aWV3LFxyXG5cdHNldE1lZGlhLFxyXG59KSB7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxGb3JtLkZpZWxkPlxyXG5cdFx0XHRcdDxTZWdtZW50IHBsYWNlaG9sZGVyIGJhc2ljIHNlY29uZGFyeT5cclxuXHRcdFx0XHRcdDxpbnB1dFxyXG5cdFx0XHRcdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX1cclxuXHRcdFx0XHRcdFx0dHlwZT0nZmlsZSdcclxuXHRcdFx0XHRcdFx0YWNjZXB0PSdpbWFnZS8qJ1xyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRuYW1lPSdtZWRpYSdcclxuXHRcdFx0XHRcdFx0cmVmPXtpbnB1dFJlZn1cclxuXHRcdFx0XHRcdC8+XHJcblxyXG5cdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRvbkRyYWdPdmVyPXtlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0SGlnaGxpZ2h0ZWQodHJ1ZSk7XHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdG9uRHJhZ0xlYXZlPXtlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRcdFx0c2V0SGlnaGxpZ2h0ZWQoZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRvbkRyb3A9e2UgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRIaWdobGlnaHRlZCh0cnVlKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0Y29uc3QgZHJvcHBlZEZpbGUgPSBBcnJheS5mcm9tKGUuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuXHRcdFx0XHRcdFx0XHRzZXRNZWRpYShkcm9wcGVkRmlsZVswXSk7XHJcblx0XHRcdFx0XHRcdFx0c2V0TWVkaWFQcmV2aWV3KFVSTC5jcmVhdGVPYmplY3RVUkwoZHJvcHBlZEZpbGVbMF0pKTtcclxuXHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0e21lZGlhUHJldmlldyA9PT0gbnVsbCA/IChcclxuXHRcdFx0XHRcdFx0XHQ8PlxyXG5cdFx0XHRcdFx0XHRcdFx0PFNlZ21lbnRcclxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLihoaWdobGlnaHRlZCAmJiB7IGNvbG9yOiAnZ3JlZW4nIH0pfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRiYXNpY1xyXG5cdFx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SGVhZGVyIGljb24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PEljb25cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9J2ZpbGUgaW1hZ2Ugb3V0bGluZSdcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LmNsaWNrKCl9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHREcmFnICduIERyb3Agb3IgQ2xpY2sgVG8gVXBsb2FkIEltYWdlXHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvSGVhZGVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9TZWdtZW50PlxyXG5cdFx0XHRcdFx0XHRcdDwvPlxyXG5cdFx0XHRcdFx0XHQpIDogKFxyXG5cdFx0XHRcdFx0XHRcdDw+XHJcblx0XHRcdFx0XHRcdFx0XHQ8U2VnbWVudCBjb2xvcj0nZ3JlZW4nIHBsYWNlaG9sZGVyIGJhc2ljPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8SW1hZ2VcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e21lZGlhUHJldmlld31cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplPSdtZWRpdW0nXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2VudGVyZWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuY2xpY2soKX1cclxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdFx0XHRcdDwvU2VnbWVudD5cclxuXHRcdFx0XHRcdFx0XHQ8Lz5cclxuXHRcdFx0XHRcdFx0KX1cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvU2VnbWVudD5cclxuXHRcdFx0PC9Gb3JtLkZpZWxkPlxyXG5cdFx0PC8+XHJcblx0KTtcclxufVxyXG4iLCJpbXBvcnQgeyBJY29uLCBNZXNzYWdlLCBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyTWVzc2FnZSA9ICgpID0+IHtcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHRjb25zdCBzaWdudXBSb3V0ZSA9IHJvdXRlci5wYXRobmFtZSA9PT0gJy9zaWdudXAnO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PE1lc3NhZ2VcclxuXHRcdFx0Y29sb3I9J3RlYWwnXHJcblx0XHRcdGF0dGFjaGVkXHJcblx0XHRcdGhlYWRlcj17c2lnbnVwUm91dGUgPyAnR2V0IFN0YXJ0ZWQnIDogJ1dlbGNvbWUgQmFjayd9XHJcblx0XHRcdGljb249e3NpZ251cFJvdXRlID8gJ3NldHRpbmdzJyA6ICdwcml2YWN5J31cclxuXHRcdFx0Y29udGVudD17XHJcblx0XHRcdFx0c2lnbnVwUm91dGUgPyAnQ3JlYXRlIE5ldyBBY2NvdW50JyA6ICdMb2dpbiB3aXRoIEVtYWlsIGFuZCBQYXNzd29yZCdcclxuXHRcdFx0fVxyXG5cdFx0Lz5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3Rlck1lc3NhZ2UgPSAoKSA9PiB7XHJcblx0Y29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblx0Y29uc3Qgc2lnbnVwUm91dGUgPSByb3V0ZXIucGF0aG5hbWUgPT09ICcvc2lnbnVwJztcclxuXHRyZXR1cm4gKFxyXG5cdFx0PD5cclxuXHRcdFx0e3NpZ251cFJvdXRlID8gKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8TWVzc2FnZSBhdHRhY2hlZD0nYm90dG9tJyB3YXJuaW5nPlxyXG5cdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPSdoZWxwJyAvPlxyXG5cdFx0XHRcdFx0XHRFeGlzdGluZyBVc2VyPyA8TGluayBocmVmPScvbG9naW4nPkxvZ2luIEhlcmUgSW5zdGVhZDwvTGluaz5cclxuXHRcdFx0XHRcdDwvTWVzc2FnZT5cclxuXHRcdFx0XHRcdDxEaXZpZGVyIGhpZGRlbiAvPlxyXG5cdFx0XHRcdDwvPlxyXG5cdFx0XHQpIDogKFxyXG5cdFx0XHRcdDw+XHJcblx0XHRcdFx0XHQ8TWVzc2FnZSBhdHRhY2hlZD0nYm90dG9tJyBpbmZvPlxyXG5cdFx0XHRcdFx0XHQ8SWNvbiBuYW1lPSdsb2NrJyAvPlxyXG5cdFx0XHRcdFx0XHQ8TGluayBocmVmPScvcmVzZXQnPkZvcmdvdCBQYXNzd29yZD88L0xpbms+XHJcblx0XHRcdFx0XHQ8L01lc3NhZ2U+XHJcblxyXG5cdFx0XHRcdFx0PE1lc3NhZ2UgYXR0YWNoZWQ9J2JvdHRvbScgd2FybmluZz5cclxuXHRcdFx0XHRcdFx0PEljb24gbmFtZT0naGVscCcgLz5cclxuXHRcdFx0XHRcdFx0TmV3IFVzZXI/IDxMaW5rIGhyZWY9Jy9zaWdudXAnPlNpZ251cCBIZXJlPC9MaW5rPiBJbnN0ZWFkeycgJ31cclxuXHRcdFx0XHRcdDwvTWVzc2FnZT5cclxuXHRcdFx0XHQ8Lz5cclxuXHRcdFx0KX1cclxuXHRcdDwvPlxyXG5cdCk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgU2VnbWVudCwgRGl2aWRlciB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IHtcclxuXHRIZWFkZXJNZXNzYWdlLFxyXG5cdEZvb3Rlck1lc3NhZ2UsXHJcbn0gZnJvbSAnLi8uLi9jb21wb25lbnRzL2NvbW1vbi9XZWxjb21lTWVzc2FnZSc7XHJcbmltcG9ydCBDb21tb25JbnB1dHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tb24vQ29tbW9uSW5wdXRzJztcclxuaW1wb3J0IEltYWdlRHJvcERpdiBmcm9tICcuLi9jb21wb25lbnRzL0NvbW1vbi9JbWFnZURyb3BEaXYnO1xyXG5jb25zdCByZWdleFVzZXJOYW1lID0gL14oPyEuKlxcLlxcLikoPyEuKlxcLiQpW15cXFddW1xcdy5dezAsMjl9JC87XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXAoKSB7XHJcblx0Ly8qKioqKioqKioqKioqKioqIHZhcmlhYmxlcyAqKioqKioqKioqKioqKioqLy9cclxuXHRjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7XHJcblx0XHRuYW1lOiAnJyxcclxuXHRcdGVtYWlsOiAnJyxcclxuXHRcdHBhc3N3b3JkOiAnJyxcclxuXHRcdGJpbzogJycsXHJcblx0XHRmYWNlYm9vazogJycsXHJcblx0XHR5b3V0dWJlOiAnJyxcclxuXHRcdHR3aXR0ZXI6ICcnLFxyXG5cdFx0aW5zdGFncmFtOiAnJyxcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgeyBuYW1lLCBlbWFpbCwgcGFzc3dvcmQsIGJpbyB9ID0gdXNlcjtcclxuXHJcblx0Y29uc3QgW3Nob3dTb2NpYWxMaW5rcywgc2V0U2hvd1NvY2lhbExpbmtzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbc2hvd1Bhc3N3b3JkLCBzZXRTaG93UGFzc3dvcmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cdGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2Zvcm1Mb2FkaW5nLCBzZXRGb3JtTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgW3N1Ym1pdERpc2FibGVkLCBzZXRTdWJtaXREaXNhYmxlZF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcblx0Y29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcblx0Y29uc3QgW3VzZXJuYW1lTG9hZGluZywgc2V0VXNlcm5hbWVMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHRjb25zdCBbdXNlcm5hbWVBdmFpbGFibGUsIHNldFVzZXJuYW1lQXZhaWxhYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0Y29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHRjb25zdCBbbWVkaWFQcmV2aWV3LCBzZXRNZWRpYVByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XHJcblx0Y29uc3QgW2hpZ2hsaWdodGVkLCBzZXRIaWdobGlnaHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcclxuXHJcblx0Ly8qKioqKioqKioqKioqKioqIGZ1bmN0aW9ucyAqKioqKioqKioqKioqKioqLy9cclxuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSBlID0+IHtcclxuXHRcdGNvbnN0IHsgbmFtZSwgdmFsdWUsIGZpbGVzIH0gPSBlLnRhcmdldDtcclxuICAgICAgaWYgKG5hbWUgPT09ICdtZWRpYScpIHtcclxuXHRcdFx0c2V0TWVkaWEoZmlsZXNbMF0pO1xyXG5cdFx0XHRzZXRNZWRpYVByZXZpZXcoVVJMLmNyZWF0ZU9iamVjdFVSTChmaWxlc1swXSkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHNldFVzZXIocHJldiA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBjaGVja1VzZXJOYW1lID0gYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ2NoZWNrVXNlck5hbWUnKTtcclxuXHR9O1xyXG5cclxuXHRjb25zdCBoYW5kbGVTdWJtaXQgPSBlID0+IHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGNvbnNvbGUubG9nKCdoYW5kbGVTdWJtaXQnKTtcclxuXHR9O1xyXG5cdHVzZUVmZmVjdCgoKSA9PiB7XHJcblx0XHRjb25zdCBpc1VzZXIgPSBPYmplY3QudmFsdWVzKHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkLCBiaW8gfSkuZXZlcnkoaXRlbSA9PlxyXG5cdFx0XHRCb29sZWFuKGl0ZW0pXHJcblx0XHQpO1xyXG5cdFx0aXNVc2VyID8gc2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpIDogc2V0U3VibWl0RGlzYWJsZWQodHJ1ZSk7XHJcblx0fSwgW3VzZXJdKTtcclxuXHJcblx0dXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcblx0cmV0dXJuIChcclxuXHRcdDw+XHJcblx0XHRcdDxIZWFkZXJNZXNzYWdlIC8+XHJcblx0XHRcdDxGb3JtXHJcblx0XHRcdFx0bG9hZGluZz17Zm9ybUxvYWRpbmd9XHJcblx0XHRcdFx0ZXJyb3I9e2Vycm9yTXNnICE9PSBudWxsfVxyXG5cdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8TWVzc2FnZVxyXG5cdFx0XHRcdFx0ZXJyb3JcclxuXHRcdFx0XHRcdGhlYWRlcj0nT29wcyEnXHJcblx0XHRcdFx0XHRjb250ZW50PXtlcnJvck1zZ31cclxuXHRcdFx0XHRcdG9uRGlzbWlzcz17KCkgPT4gc2V0RXJyb3JNc2cobnVsbCl9XHJcblx0XHRcdFx0Lz5cclxuXHJcblx0XHRcdFx0PFNlZ21lbnQ+XHJcblx0XHRcdFx0XHQ8SW1hZ2VEcm9wRGl2XHJcblx0XHRcdFx0XHRcdG1lZGlhUHJldmlldz17bWVkaWFQcmV2aWV3fVxyXG5cdFx0XHRcdFx0XHRzZXRNZWRpYVByZXZpZXc9e3NldE1lZGlhUHJldmlld31cclxuXHRcdFx0XHRcdFx0c2V0TWVkaWE9e3NldE1lZGlhfVxyXG5cdFx0XHRcdFx0XHRpbnB1dFJlZj17aW5wdXRSZWZ9XHJcblx0XHRcdFx0XHRcdGhpZ2hsaWdodGVkPXtoaWdobGlnaHRlZH1cclxuXHRcdFx0XHRcdFx0c2V0SGlnaGxpZ2h0ZWQ9e3NldEhpZ2hsaWdodGVkfVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Rm9ybS5JbnB1dFxyXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxyXG5cdFx0XHRcdFx0XHRsYWJlbD0nTmFtZSdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J05hbWUnXHJcblx0XHRcdFx0XHRcdG5hbWU9J25hbWUnXHJcblx0XHRcdFx0XHRcdHZhbHVlPXtuYW1lfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRmbHVpZFxyXG5cdFx0XHRcdFx0XHRpY29uPSd1c2VyJ1xyXG5cdFx0XHRcdFx0XHRpY29uUG9zaXRpb249J2xlZnQnXHJcblx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0PEZvcm0uSW5wdXRcclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdFx0bGFiZWw9J0VtYWlsJ1xyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj0nRW1haWwnXHJcblx0XHRcdFx0XHRcdG5hbWU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17ZW1haWx9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcblx0XHRcdFx0XHRcdGZsdWlkXHJcblx0XHRcdFx0XHRcdGljb249J2VudmVsb3BlJ1xyXG5cdFx0XHRcdFx0XHRpY29uUG9zaXRpb249J2xlZnQnXHJcblx0XHRcdFx0XHRcdHR5cGU9J2VtYWlsJ1xyXG5cdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdDxGb3JtLklucHV0XHJcblx0XHRcdFx0XHRcdGxhYmVsPSdQYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1Bhc3N3b3JkJ1xyXG5cdFx0XHRcdFx0XHRuYW1lPSdwYXNzd29yZCdcclxuXHRcdFx0XHRcdFx0dmFsdWU9e3Bhc3N3b3JkfVxyXG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG5cdFx0XHRcdFx0XHRmbHVpZFxyXG5cdFx0XHRcdFx0XHRpY29uPXt7XHJcblx0XHRcdFx0XHRcdFx0bmFtZTogJ2V5ZScsXHJcblx0XHRcdFx0XHRcdFx0Y2lyY3VsYXI6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0bGluazogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrOiAoKSA9PiBzZXRTaG93UGFzc3dvcmQoIXNob3dQYXNzd29yZCksXHJcblx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdGljb25Qb3NpdGlvbj0nbGVmdCdcclxuXHRcdFx0XHRcdFx0dHlwZT17c2hvd1Bhc3N3b3JkID8gJ3RleHQnIDogJ3Bhc3N3b3JkJ31cclxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8Rm9ybS5JbnB1dFxyXG5cdFx0XHRcdFx0XHRsb2FkaW5nPXt1c2VybmFtZUxvYWRpbmd9XHJcblx0XHRcdFx0XHRcdGVycm9yPXshdXNlcm5hbWVBdmFpbGFibGV9XHJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXHJcblx0XHRcdFx0XHRcdGxhYmVsPSdVc2VybmFtZSdcclxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9J1VzZXJuYW1lJ1xyXG5cdFx0XHRcdFx0XHR2YWx1ZT17dXNlcm5hbWV9XHJcblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtlID0+IHtcclxuXHRcdFx0XHRcdFx0XHRzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHJlZ2V4VXNlck5hbWUudGVzdChlLnRhcmdldC52YWx1ZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNldFVzZXJuYW1lQXZhaWxhYmxlKHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZXRVc2VybmFtZUF2YWlsYWJsZShmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRmbHVpZFxyXG5cdFx0XHRcdFx0XHRpY29uPXt1c2VybmFtZUF2YWlsYWJsZSA/ICdjaGVjaycgOiAnY2xvc2UnfVxyXG5cdFx0XHRcdFx0XHRpY29uUG9zaXRpb249J2xlZnQnXHJcblx0XHRcdFx0XHQvPlxyXG5cclxuXHRcdFx0XHRcdDxDb21tb25JbnB1dHNcclxuXHRcdFx0XHRcdFx0dXNlcj17dXNlcn1cclxuXHRcdFx0XHRcdFx0c2hvd1NvY2lhbExpbmtzPXtzaG93U29jaWFsTGlua3N9XHJcblx0XHRcdFx0XHRcdHNldFNob3dTb2NpYWxMaW5rcz17c2V0U2hvd1NvY2lhbExpbmtzfVxyXG5cdFx0XHRcdFx0XHRoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0XHQ8RGl2aWRlciBoaWRkZW4gLz5cclxuXHRcdFx0XHRcdDxCdXR0b25cclxuXHRcdFx0XHRcdFx0aWNvbj0nc2lnbnVwJ1xyXG5cdFx0XHRcdFx0XHRjb250ZW50PSdTaWdudXAnXHJcblx0XHRcdFx0XHRcdHR5cGU9J3N1Ym1pdCdcclxuXHRcdFx0XHRcdFx0Y29sb3I9J29yYW5nZSdcclxuXHRcdFx0XHRcdFx0ZGlzYWJsZWQ9e3N1Ym1pdERpc2FibGVkIHx8ICF1c2VybmFtZUF2YWlsYWJsZX1cclxuXHRcdFx0XHRcdC8+XHJcblx0XHRcdFx0PC9TZWdtZW50PlxyXG5cdFx0XHQ8L0Zvcm0+XHJcblx0XHRcdDxGb290ZXJNZXNzYWdlIC8+XHJcblx0XHQ8Lz5cclxuXHQpO1xyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9