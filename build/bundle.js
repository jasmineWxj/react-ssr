/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/createStore.js":
/*!***********************************!*\
  !*** ./src/server/createStore.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _share_store_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../share/store/reducers */ \"./src/share/store/reducers/index.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  return Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"legacy_createStore\"])(_share_store_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a));\n});\n\n//# sourceURL=webpack:///./src/server/createStore.js?");

/***/ }),

/***/ "./src/server/http.js":
/*!****************************!*\
  !*** ./src/server/http.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"]('public'));\nvar port = 3101;\napp.listen(port, function () {\n  console.log('app is running port' + port);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (app);\n\n//# sourceURL=webpack:///./src/server/http.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http */ \"./src/server/http.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./render */ \"./src/server/render.js\");\n/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./createStore */ \"./src/server/createStore.js\");\n/* harmony import */ var _share_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../share/routes */ \"./src/share/routes.js\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n// 服务端入口文件\n\n\n\n\n\n\n\n// 接收来自客户端发送的请求\n// 当客户端请求地址为：'/',时，服务器端做出的响应。\n\n_http__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get('*', function (req, res) {\n  var store = Object(_createStore__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n  var promises = Object(react_router_config__WEBPACK_IMPORTED_MODULE_10__[\"matchRoutes\"])(_share_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"], req.path).map(function (_ref) {\n    var route = _ref.route;\n    // 如何才能知道数据什么时候获取完成\n    if (route.loadData) return route.loadData(store);\n  });\n  Promise.all(promises).then(function () {\n    res.send(Object(_render__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(req, store));\n  });\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/render.js":
/*!******************************!*\
  !*** ./src/server/render.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _share_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../share/Home */ \"./src/share/Home.js\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n/* harmony import */ var react_router_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _share_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/routes */ \"./src/share/routes.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n// 接收来自客户端发送的请求\n// 当客户端请求地址为：'/',时，服务器端做出的响应。\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (req, store) {\n  // renderToString: 返回一个html字符串\n  // const content = renderToString(<Home />)\n\n  var content = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_2__[\"renderToString\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"Provider\"], {\n    store: store\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"StaticRouter\"], {\n    location: req.path\n  }, \" \", Object(react_router_config__WEBPACK_IMPORTED_MODULE_4__[\"renderRoutes\"])(_share_routes__WEBPACK_IMPORTED_MODULE_5__[\"default\"]))));\n  var initalState = serialize_javascript__WEBPACK_IMPORTED_MODULE_7___default()(JSON.stringify(store.getState()));\n  return \"\\n      <html>\\n        <head><title>react ssr</title></head>\\n        <body>\\n          <div id=\\\"root\\\">\".concat(content, \"</div>\\n          <script>window.INITIAL_STATE = \").concat(initalState, \" </script>\\n           <script src=\\\"bundle.js\\\"></script>\\n        </body>\\n      </html>\\n    \");\n});\n\n//# sourceURL=webpack:///./src/server/render.js?");

/***/ }),

/***/ "./src/share/Home.js":
/*!***************************!*\
  !*** ./src/share/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Home() {\n  var click = function click() {\n    console.log(1222);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"home works\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    onClick: click\n  }, \"\\u70B9\\u6211\\u4E00\\u4E0B\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/list\"\n  }, \"jump to list\"));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/share/Home.js?");

/***/ }),

/***/ "./src/share/List.js":
/*!***************************!*\
  !*** ./src/share/List.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ \"core-js/modules/es6.array.map.js\");\n/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_actions_useraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/actions/useraction */ \"./src/share/store/actions/useraction.js\");\n\n\n\n\n\nfunction List(_ref) {\n  var user = _ref.user,\n    dispatch = _ref.dispatch;\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    dispatch(Object(_store_actions_useraction__WEBPACK_IMPORTED_MODULE_4__[\"fetchUser\"])());\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, \"list page works\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"ul\", null, user.map(function (item) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"li\", {\n      key: item.id\n    }, item.name);\n  })));\n}\nfunction loadData(store) {\n  return store.dispatch(Object(_store_actions_useraction__WEBPACK_IMPORTED_MODULE_4__[\"fetchUser\"])());\n}\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.user\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  component: Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"connect\"])(mapStateToProps)(List),\n  loadData: loadData\n});\n\n//# sourceURL=webpack:///./src/share/List.js?");

/***/ }),

/***/ "./src/share/routes.js":
/*!*****************************!*\
  !*** ./src/share/routes.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ \"core-js/modules/es6.number.constructor.js\");\n/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ \"core-js/modules/es6.object.keys.js\");\n/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.array.filter.js */ \"core-js/modules/es6.array.filter.js\");\n/* harmony import */ var core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.get-own-property-descriptor.js */ \"core-js/modules/es6.object.get-own-property-descriptor.js\");\n/* harmony import */ var core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ \"core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.object.get-own-property-descriptors.js */ \"core-js/modules/es7.object.get-own-property-descriptors.js\");\n/* harmony import */ var core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.object.define-properties.js */ \"core-js/modules/es6.object.define-properties.js\");\n/* harmony import */ var core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_properties_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _share_Home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../share/Home */ \"./src/share/Home.js\");\n/* harmony import */ var _share_List__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../share/List */ \"./src/share/List.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: _share_Home__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n  exact: true\n}, _objectSpread({\n  path: '/list'\n}, _share_List__WEBPACK_IMPORTED_MODULE_14__[\"default\"])]);\n\n//# sourceURL=webpack:///./src/share/routes.js?");

/***/ }),

/***/ "./src/share/store/actions/useraction.js":
/*!***********************************************!*\
  !*** ./src/share/store/actions/useraction.js ***!
  \***********************************************/
/*! exports provided: SAVE_USER, fetchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SAVE_USER\", function() { return SAVE_USER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchUser\", function() { return fetchUser; });\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ \"core-js/modules/es6.object.to-string.js\");\n/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise.js */ \"core-js/modules/es6.promise.js\");\n/* harmony import */ var core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.define-property.js */ \"core-js/modules/es6.object.define-property.js\");\n/* harmony import */ var core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.symbol.js */ \"core-js/modules/es6.symbol.js\");\n/* harmony import */ var core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ \"core-js/modules/es6.string.iterator.js\");\n/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ \"core-js/modules/es6.array.iterator.js\");\n/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ \"core-js/modules/web.dom.iterable.js\");\n/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es7.symbol.async-iterator.js */ \"core-js/modules/es7.symbol.async-iterator.js\");\n/* harmony import */ var core_js_modules_es7_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_es6_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.object.create.js */ \"core-js/modules/es6.object.create.js\");\n/* harmony import */ var core_js_modules_es6_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var core_js_modules_es6_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.object.get-prototype-of.js */ \"core-js/modules/es6.object.get-prototype-of.js\");\n/* harmony import */ var core_js_modules_es6_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.array.for-each.js */ \"core-js/modules/es6.array.for-each.js\");\n/* harmony import */ var core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each_js__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ \"core-js/modules/es6.function.name.js\");\n/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ \"core-js/modules/es6.object.set-prototype-of.js\");\n/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ \"core-js/modules/es6.array.slice.js\");\n/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_14__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar SAVE_USER = 'save_user';\n\n// 发送请求 获取用户列表数据\nvar fetchUser = function fetchUser() {\n  return /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(dispatch) {\n      var response;\n      return _regeneratorRuntime().wrap(function _callee$(_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            response = {\n              data: [{\n                id: '1',\n                name: \"</script><script>alert(1)</script>\"\n              }]\n            };\n            dispatch({\n              type: SAVE_USER,\n              payload: response\n            });\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee);\n    }));\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n//# sourceURL=webpack:///./src/share/store/actions/useraction.js?");

/***/ }),

/***/ "./src/share/store/reducers/index.js":
/*!*******************************************!*\
  !*** ./src/share/store/reducers/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userreducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userreducer */ \"./src/share/store/reducers/userreducer.js\");\n\n\n\n// {user: []}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  user: _userreducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}));\n\n//# sourceURL=webpack:///./src/share/store/reducers/index.js?");

/***/ }),

/***/ "./src/share/store/reducers/userreducer.js":
/*!*************************************************!*\
  !*** ./src/share/store/reducers/userreducer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions_useraction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/useraction */ \"./src/share/store/actions/useraction.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n  switch (action.type) {\n    case _actions_useraction__WEBPACK_IMPORTED_MODULE_0__[\"SAVE_USER\"]:\n      return action.payload.data;\n    default:\n      return state;\n  }\n});\n\n//# sourceURL=webpack:///./src/share/store/reducers/userreducer.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "core-js/modules/es6.array.filter.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.array.filter.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.array.filter.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.array.filter.js%22?");

/***/ }),

/***/ "core-js/modules/es6.array.for-each.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.for-each.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.array.for-each.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.array.for-each.js%22?");

/***/ }),

/***/ "core-js/modules/es6.array.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es6.array.iterator.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.array.iterator.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.array.iterator.js%22?");

/***/ }),

/***/ "core-js/modules/es6.array.map.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.map.js" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.array.map.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.array.map.js%22?");

/***/ }),

/***/ "core-js/modules/es6.array.slice.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.slice.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.array.slice.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.array.slice.js%22?");

/***/ }),

/***/ "core-js/modules/es6.function.name.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.function.name.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.function.name.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.function.name.js%22?");

/***/ }),

/***/ "core-js/modules/es6.number.constructor.js":
/*!************************************************************!*\
  !*** external "core-js/modules/es6.number.constructor.js" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.number.constructor.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.number.constructor.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.create.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.create.js" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.create.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.create.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.define-properties.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/es6.object.define-properties.js" ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.define-properties.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.define-properties.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.define-property.js":
/*!****************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.define-property.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.define-property.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.get-own-property-descriptor.js":
/*!****************************************************************************!*\
  !*** external "core-js/modules/es6.object.get-own-property-descriptor.js" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.get-own-property-descriptor.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.get-own-property-descriptor.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.get-prototype-of.js":
/*!*****************************************************************!*\
  !*** external "core-js/modules/es6.object.get-prototype-of.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.get-prototype-of.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.get-prototype-of.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.keys.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.object.keys.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.keys.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.keys.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.set-prototype-of.js":
/*!*****************************************************************!*\
  !*** external "core-js/modules/es6.object.set-prototype-of.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.set-prototype-of.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.set-prototype-of.js%22?");

/***/ }),

/***/ "core-js/modules/es6.object.to-string.js":
/*!**********************************************************!*\
  !*** external "core-js/modules/es6.object.to-string.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.object.to-string.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.object.to-string.js%22?");

/***/ }),

/***/ "core-js/modules/es6.promise.js":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.promise.js" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.promise.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.promise.js%22?");

/***/ }),

/***/ "core-js/modules/es6.string.iterator.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.iterator.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.string.iterator.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.string.iterator.js%22?");

/***/ }),

/***/ "core-js/modules/es6.symbol.js":
/*!************************************************!*\
  !*** external "core-js/modules/es6.symbol.js" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es6.symbol.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es6.symbol.js%22?");

/***/ }),

/***/ "core-js/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************!*\
  !*** external "core-js/modules/es7.object.get-own-property-descriptors.js" ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es7.object.get-own-property-descriptors.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es7.object.get-own-property-descriptors.js%22?");

/***/ }),

/***/ "core-js/modules/es7.symbol.async-iterator.js":
/*!***************************************************************!*\
  !*** external "core-js/modules/es7.symbol.async-iterator.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/es7.symbol.async-iterator.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/es7.symbol.async-iterator.js%22?");

/***/ }),

/***/ "core-js/modules/web.dom.iterable.js":
/*!******************************************************!*\
  !*** external "core-js/modules/web.dom.iterable.js" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/modules/web.dom.iterable.js\");\n\n//# sourceURL=webpack:///external_%22core-js/modules/web.dom.iterable.js%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });