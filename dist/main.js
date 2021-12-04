/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#employeeRole {\\n  width: 100%;\\n}\\n\\n.mySelect {\\n  color: rgba(109, 109, 109, 0.911);\\n}\\n\\n.myStationsRow {\\n  color: rgba(109, 109, 109, 0.911);\\n}\\n\\n.myRoleInvalid {\\n  display: block;\\n  color: red;\\n}\\n\\n.myRoleValid {\\n  display: none;\\n}\\n\\n.showMessageSuccess {\\n  margin-top: 1em;\\n  width: 100%;\\n  height: 50%;\\n  border-color: green;\\n  color: green;\\n  border-width: 2px;\\n  border-style: solid;\\n}\\n\\n.hideEl {\\n  display: none;\\n}\\n\\n.myIcon {\\n  text-align: center;\\n  color: red;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://form-project-js/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://form-project-js/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://form-project-js/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://form-project-js/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://form-project-js/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://form-project-js/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://form-project-js/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://form-project-js/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://form-project-js/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://form-project-js/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/employee.js":
/*!*************************!*\
  !*** ./src/employee.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Employee)\n/* harmony export */ });\nclass Employee {\r\n  constructor(no, name, title, role, stations, email, phone) {\r\n    this.no = no;\r\n    this.name = name;\r\n    this.title = title;\r\n    this.role = role;\r\n    this.stations = stations;\r\n    this.email = email;\r\n    this.phone = phone;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://form-project-js/./src/employee.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _user_interface_methods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface-methods */ \"./src/user-interface-methods.js\");\n/* harmony import */ var _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-interface-elements */ \"./src/user-interface-elements.js\");\n//IMPORTS\r\n\r\n//User Interface Class\r\n//Imports\r\n\r\n\r\n//instances\r\nconst ui = new _user_interface_methods__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n//Event Listeners\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.resetBtnEL.addEventListener(\"click\", ui.resetBtnClick);\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeRoleEL.addEventListener(\"click\", ui.roleHandle);\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeAddForm.addEventListener(\"submit\", ui.submitHandler);\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.addRow.addEventListener(\"click\", ui.refreshTable);\r\n\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.noFilterEL.addEventListener(\"keyup\", ui.filteredArray);\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.noFilterEL.addEventListener(\"keyup\", ui.updateTable);\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.nameFilterEL.addEventListener(\"keyup\", ui.filteredArray);\r\n_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.nameFilterEL.addEventListener(\"keyup\", ui.updateTable);\r\n\n\n//# sourceURL=webpack://form-project-js/./src/index.js?");

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LS)\n/* harmony export */ });\nclass LS {\r\n  get = (key) => {\r\n    //if no ls,\r\n    if (!localStorage.getItem(key)) {\r\n      //return an empty array\r\n      return [];\r\n    } //else,\r\n    else {\r\n      //parse to json local storage item\r\n      return JSON.parse(localStorage.getItem(key));\r\n    }\r\n  };\r\n  set = (key, value) => {\r\n    return localStorage.setItem(key, JSON.stringify(value));\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://form-project-js/./src/local-storage.js?");

/***/ }),

/***/ "./src/user-interface-elements.js":
/*!****************************************!*\
  !*** ./src/user-interface-elements.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"employeeAddForm\": () => (/* binding */ employeeAddForm),\n/* harmony export */   \"employeeNoEL\": () => (/* binding */ employeeNoEL),\n/* harmony export */   \"firstNameEL\": () => (/* binding */ firstNameEL),\n/* harmony export */   \"employeeTitleEL\": () => (/* binding */ employeeTitleEL),\n/* harmony export */   \"employeeRoleEL\": () => (/* binding */ employeeRoleEL),\n/* harmony export */   \"station1EL\": () => (/* binding */ station1EL),\n/* harmony export */   \"station2EL\": () => (/* binding */ station2EL),\n/* harmony export */   \"station3EL\": () => (/* binding */ station3EL),\n/* harmony export */   \"employeeMailEL\": () => (/* binding */ employeeMailEL),\n/* harmony export */   \"employeePhoneEL\": () => (/* binding */ employeePhoneEL),\n/* harmony export */   \"myRoleValidationEL\": () => (/* binding */ myRoleValidationEL),\n/* harmony export */   \"bodyEL\": () => (/* binding */ bodyEL),\n/* harmony export */   \"resetBtnEL\": () => (/* binding */ resetBtnEL),\n/* harmony export */   \"submitBtnEl\": () => (/* binding */ submitBtnEl),\n/* harmony export */   \"showMessage\": () => (/* binding */ showMessage),\n/* harmony export */   \"showMessageText\": () => (/* binding */ showMessageText),\n/* harmony export */   \"addRow\": () => (/* binding */ addRow),\n/* harmony export */   \"tbody\": () => (/* binding */ tbody),\n/* harmony export */   \"filterByNameInput\": () => (/* binding */ filterByNameInput),\n/* harmony export */   \"allEmployeeRows\": () => (/* binding */ allEmployeeRows),\n/* harmony export */   \"noFilterEL\": () => (/* binding */ noFilterEL),\n/* harmony export */   \"nameFilterEL\": () => (/* binding */ nameFilterEL),\n/* harmony export */   \"titleFilterEL\": () => (/* binding */ titleFilterEL),\n/* harmony export */   \"roleFilterEL\": () => (/* binding */ roleFilterEL),\n/* harmony export */   \"st1FilterEL\": () => (/* binding */ st1FilterEL),\n/* harmony export */   \"st2FilterEL\": () => (/* binding */ st2FilterEL),\n/* harmony export */   \"st3FilterEL\": () => (/* binding */ st3FilterEL),\n/* harmony export */   \"emailFilterEL\": () => (/* binding */ emailFilterEL),\n/* harmony export */   \"phoneFilterEL\": () => (/* binding */ phoneFilterEL),\n/* harmony export */   \"resetFiltersBtn\": () => (/* binding */ resetFiltersBtn)\n/* harmony export */ });\nconst employeeAddForm = document.querySelector(\"#employeeAddForm\");\r\nconst employeeNoEL = document.querySelector(\"#employeeNo\");\r\nconst firstNameEL = document.querySelector(\"#firstName\");\r\nconst employeeTitleEL = document.querySelector(\"#employeeTitle\");\r\nconst employeeRoleEL = document.querySelector(\"#employeeRole\");\r\nconst station1EL = document.querySelector(\"#station1\");\r\nconst station2EL = document.querySelector(\"#station2\");\r\nconst station3EL = document.querySelector(\"#station3\");\r\nconst employeeMailEL = document.querySelector(\"#employeeMail\");\r\nconst employeePhoneEL = document.querySelector(\"#employeePhone\");\r\nconst myRoleValidationEL = document.querySelector(\"#myRoleValidation\");\r\nconst bodyEL = document.querySelector(\"body\");\r\nconst resetBtnEL = document.querySelector(\"#resetFormBtn\");\r\nconst submitBtnEl = document.querySelector(\"#submitEmployeeForm\");\r\nconst showMessage = document.querySelector(\"#myMessage\");\r\nconst showMessageText = document.querySelector(\"#messageText\");\r\nconst addRow = document.querySelector(\"#refreshTableBtn\");\r\nconst tbody = document.querySelector(\"tbody\");\r\nconst filterByNameInput = document.querySelector(\"#filterByNameInput\");\r\nconst allEmployeeRows = document.getElementsByClassName(\"employeeRow\");\r\nconst noFilterEL = document.getElementById(\"filterByNO\");\r\nconst nameFilterEL = document.getElementById(\"filterByName\");\r\nconst titleFilterEL = document.getElementById(\"filterByTitle\");\r\nconst roleFilterEL = document.getElementById(\"filterByRole\");\r\nconst st1FilterEL = document.getElementById(\"filterBySt1\");\r\nconst st2FilterEL = document.getElementById(\"filterBySt2\");\r\nconst st3FilterEL = document.getElementById(\"filterBySt3\");\r\nconst emailFilterEL = document.getElementById(\"filterByEmail\");\r\nconst phoneFilterEL = document.getElementById(\"filterByPhone\");\r\nconst resetFiltersBtn = document.getElementById(\"resetFiltersBtn\");\r\n\n\n//# sourceURL=webpack://form-project-js/./src/user-interface-elements.js?");

/***/ }),

/***/ "./src/user-interface-methods.js":
/*!***************************************!*\
  !*** ./src/user-interface-methods.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employee */ \"./src/employee.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage */ \"./src/local-storage.js\");\n/* harmony import */ var _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-interface-elements */ \"./src/user-interface-elements.js\");\n//Imports\r\n\r\n\r\n\r\n//Instances\r\nconst ls = new _local_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n//CLASS\r\nclass UI {\r\n  //METHODS\r\n  resetForm = () => {\r\n    //make all input values null or shit\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeNoEL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.firstNameEL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeTitleEL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeRoleEL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.station1EL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.station2EL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.station3EL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeMailEL.value = \"\";\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeePhoneEL.value = \"\";\r\n  };\r\n  resetBtnClick = () => {\r\n    this.resetForm();\r\n  };\r\n  submitHandler = (event) => {\r\n    //add validation class *MDB*\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeAddForm.classList.add(\"was-validated\");\r\n    //check if employee role selected manually\r\n    if (!_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeRoleEL.value) {\r\n      _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.myRoleValidationEL.className = \"myRoleInvalid\";\r\n      event.preventDefault();\r\n      event.stopPropagation();\r\n    }\r\n    //check form validity *MDB*\r\n    else if (!_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeAddForm.checkValidity()) {\r\n      event.preventDefault();\r\n      event.stopPropagation();\r\n    }\r\n    //if validated,\r\n    else {\r\n      //INSTEAD OF SUBMIT, SAVE LOCALLY\r\n      event.preventDefault();\r\n      event.stopPropagation();\r\n      // 1) Create an employee instance with form values\r\n      const employee = new _employee__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\r\n        _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeNoEL.value,\r\n        _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.firstNameEL.value,\r\n        _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeTitleEL.value,\r\n        _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeRoleEL.value,\r\n        [_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.station1EL.checked, _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.station2EL.checked, _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.station3EL.checked],\r\n        _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeMailEL.value,\r\n        _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeePhoneEL.value\r\n      );\r\n      // 2) Get local employeeArr\r\n      const employeeArrUI = ls.get(\"employeeArr\");\r\n      // 3) Push employee to employeeArr\r\n      employeeArrUI.push(employee);\r\n      // 4) save updated employeeArr at local storage\r\n      ls.set(\"employeeArr\", employeeArrUI);\r\n      // 5) Clear input values\r\n      this.resetForm();\r\n      // 6) Show success Message!\r\n      this.showSuccessMessage(\"new employee created!\");\r\n      // 7) Remove validation class(bcs we don't want to see any error after success until next submit)\r\n      _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.employeeAddForm.classList.remove(\"was-validated\");\r\n    }\r\n  };\r\n  roleHandle = () => {\r\n    //whenever roleClicked, hide invalid message for role\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.myRoleValidationEL.className = \"myRoleValid\";\r\n  };\r\n  showSuccessMessage = (messageText) => {\r\n    //-----4.1) Add pre-defined class to myMessage div\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.showMessage.className = \"showMessageSuccess text-center\";\r\n    //-----4.2) Add inner text to messageText element\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.showMessageText.innerText = messageText;\r\n    //-----4.3) Hide message with hiding element after 1.5sec\r\n    setTimeout(() => {\r\n      document.querySelector(\"#myMessage\").className = \"hideEl\";\r\n    }, 1500);\r\n  };\r\n  updateTable = (event) => {\r\n    //first clear table\r\n    _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.tbody.innerHTML = \"\";\r\n    //get filtered employees\r\n    const filteredEmployeeArr = this.filteredEmployee;\r\n    console.log(\"filteredEmployeeArr: \", filteredEmployeeArr);\r\n    //print them each to table\r\n    if (filteredEmployeeArr) {\r\n      filteredEmployeeArr.forEach((employee) => {\r\n        const tr = document.createElement(\"tr\");\r\n        tr.className = \"employeeRow\";\r\n        tr.innerHTML = `<th scope=\"row\">${employee.no}</th>\r\n        <td>${employee.name}</td>\r\n        <td>${employee.title}</td>\r\n        <td>${employee.role}</td>\r\n        <td>${employee.stations[0]}</td>\r\n        <td>${employee.stations[1]}</td>\r\n        <td>${employee.stations[2]}</td>\r\n        <td>${employee.email}</td>\r\n        <td>${employee.phone}</td>\r\n        <td>\r\n        <button type=\"button\" class=\"btn btn-danger btn-sm px-4\">\r\n          <i class=\"fas fa-times\"></i>\r\n        </button>\r\n      </td>`;\r\n        //add eventListener immediately!\r\n        tr.addEventListener(\"click\", this.removeTargetRow);\r\n        _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.tbody.appendChild(tr);\r\n      });\r\n    }\r\n  };\r\n  filteredArray = () => {\r\n    //bring employee arr\r\n    this.filteredEmployee = ls.get(\"employeeArr\");\r\n    //run all filters!!\r\n    if (_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.noFilterEL.value !== \"\") {\r\n      console.log(\"noFilterEl value: \", _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.noFilterEL.value);\r\n      this.filteredEmployee = this.filteredEmployee.filter((employee) => {\r\n        console.log(\"calisti\");\r\n        return employee.no == _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.noFilterEL.value;\r\n      });\r\n      if (_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.nameFilterEL.value !== \"\") {\r\n        this.filteredEmployee = this.filteredEmployee.filter((employee) => {\r\n          console.log(\"calisti\");\r\n          return employee.name == _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.nameFilterEL.value;\r\n        });\r\n      }\r\n    }\r\n    if (_user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.noFilterEL.value == \"\" && _user_interface_elements__WEBPACK_IMPORTED_MODULE_2__.nameFilterEL.value == \"\") {\r\n      this.filteredEmployee = [];\r\n    }\r\n  };\r\n  refreshTable = (event) => {\r\n    //clear input field\r\n    //updateTable\r\n    this.updateTable(event);\r\n  };\r\n  removeTargetRow = (event) => {\r\n    //fire only if clicked to remove button\r\n    if (event.target.tagName === \"BUTTON\") {\r\n      //get confirmation result\r\n      const confirmationResult = confirm(\"Remove employee?\");\r\n      //if confirmationResult is true,\r\n      if (confirmationResult) {\r\n        //Remove selected user from local storage\r\n        //--->1)Get local storage array\r\n        const employeeArr = ls.get(\"employeeArr\");\r\n        //--->2)Get selected employee No\r\n        const employeeNoUI =\r\n          event.target.parentNode.parentNode.firstChild.innerHTML;\r\n        //--->3)get index of matched employee\r\n        let employeeToRemove = employeeArr.findIndex((employee) => {\r\n          return employee.no === employeeNoUI;\r\n        });\r\n        //--->4)remove matched employee from arr\r\n        employeeArr.splice(employeeToRemove, 1);\r\n        //override new array to local storage\r\n        ls.set(\"employeeArr\", employeeArr);\r\n        //show success message\r\n        this.showSuccessMessage(\"employee removed successfully1\");\r\n        //Update Table\r\n        this.refreshTable();\r\n      }\r\n    }\r\n  };\r\n}\r\n\n\n//# sourceURL=webpack://form-project-js/./src/user-interface-methods.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;