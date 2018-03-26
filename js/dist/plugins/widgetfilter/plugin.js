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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/plugins/widgetfilter/plugin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/src/plugins/widgetfilter/plugin.js":
/*!***********************************************!*\
  !*** ./js/src/plugins/widgetfilter/plugin.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**\n                                                                                                                                                                                                                                                                   * @file\n                                                                                                                                                                                                                                                                   * Drupal CKEditor Widget Filter Plugin.\n                                                                                                                                                                                                                                                                   *\n                                                                                                                                                                                                                                                                   * This replaces the default widget drop target finder with a proxy class that\n                                                                                                                                                                                                                                                                   * will track data associated with a DnD operation and allow filtering of drop\n                                                                                                                                                                                                                                                                   * locations based on that data.\n                                                                                                                                                                                                                                                                   *\n                                                                                                                                                                                                                                                                   * @ignore\n                                                                                                                                                                                                                                                                   */\n\nvar _drupal = __webpack_require__(/*! drupal */ \"drupal\");\n\nvar _drupal2 = _interopRequireDefault(_drupal);\n\nvar _ckeditor = __webpack_require__(/*! ckeditor */ \"ckeditor\");\n\nvar _ckeditor2 = _interopRequireDefault(_ckeditor);\n\nvar _underscore = __webpack_require__(/*! underscore */ \"underscore\");\n\nvar _underscore2 = _interopRequireDefault(_underscore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar pluginDefinition = {\n  icons: '',\n  requires: [\"widget\"]\n};\n\nif (_drupal2.default.ckeditor_widgetfilter) {\n\n  pluginDefinition = _extends({}, pluginDefinition, {\n\n    beforeInit: function beforeInit(editor) {\n      // Attach a widgetfilter instance to the editor.\n      editor.widgetfilter = new _drupal2.default.ckeditor_widgetfilter.FinderFilterProxy(editor);\n    },\n\n    init: function init(editor) {\n      // Register default decorator / filter.\n      editor.widgetfilter.on('init', function (evt) {\n        editor.widgetfilter.registerDecorator(new _drupal2.default.ckeditor_widgetfilter.Decorators.Widget(editor)).registerFilter(new _drupal2.default.ckeditor_widgetfilter.Filters.Default(editor));\n      });\n\n      // Initialize the widget filter. This has to be done after the DOM is\n      // ready since it needs the widget repository to set up its finder,\n      // locator, liner properties.\n      editor.on('contentDom', function (evt) {\n        editor.widgetfilter.init();\n      });\n\n      editor.on('dragstart', function (evt) {\n        editor.widgetfilter.dragStart(evt);\n      });\n\n      editor.on('dragend', function (evt) {\n        editor.widgetfilter.dragEnd(evt);\n      });\n    }\n  });\n}\n\n_ckeditor2.default.plugins.add('widgetfilter', pluginDefinition);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9zcmMvcGx1Z2lucy93aWRnZXRmaWx0ZXIvcGx1Z2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2pzL3NyYy9wbHVnaW5zL3dpZGdldGZpbHRlci9wbHVnaW4uanM/OTkyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlXG4gKiBEcnVwYWwgQ0tFZGl0b3IgV2lkZ2V0IEZpbHRlciBQbHVnaW4uXG4gKlxuICogVGhpcyByZXBsYWNlcyB0aGUgZGVmYXVsdCB3aWRnZXQgZHJvcCB0YXJnZXQgZmluZGVyIHdpdGggYSBwcm94eSBjbGFzcyB0aGF0XG4gKiB3aWxsIHRyYWNrIGRhdGEgYXNzb2NpYXRlZCB3aXRoIGEgRG5EIG9wZXJhdGlvbiBhbmQgYWxsb3cgZmlsdGVyaW5nIG9mIGRyb3BcbiAqIGxvY2F0aW9ucyBiYXNlZCBvbiB0aGF0IGRhdGEuXG4gKlxuICogQGlnbm9yZVxuICovXG5cbmltcG9ydCBEcnVwYWwgZnJvbSAnZHJ1cGFsJztcbmltcG9ydCBDS0VESVRPUiBmcm9tICdja2VkaXRvcic7XG5pbXBvcnQgXyBmcm9tICd1bmRlcnNjb3JlJztcblxudmFyIHBsdWdpbkRlZmluaXRpb24gPSB7XG4gIGljb25zOiAnJyxcbiAgcmVxdWlyZXM6IFtcIndpZGdldFwiXSxcbn07XG5cbmlmIChEcnVwYWwuY2tlZGl0b3Jfd2lkZ2V0ZmlsdGVyKSB7XG5cbiAgcGx1Z2luRGVmaW5pdGlvbiA9IHsgLi4ucGx1Z2luRGVmaW5pdGlvbixcblxuICAgIGJlZm9yZUluaXQ6IGZ1bmN0aW9uKGVkaXRvcikge1xuICAgICAgLy8gQXR0YWNoIGEgd2lkZ2V0ZmlsdGVyIGluc3RhbmNlIHRvIHRoZSBlZGl0b3IuXG4gICAgICBlZGl0b3Iud2lkZ2V0ZmlsdGVyID0gbmV3IERydXBhbC5ja2VkaXRvcl93aWRnZXRmaWx0ZXIuRmluZGVyRmlsdGVyUHJveHkoZWRpdG9yKTtcbiAgICB9LFxuXG4gICAgaW5pdDogZnVuY3Rpb24oZWRpdG9yKSB7XG4gICAgICAvLyBSZWdpc3RlciBkZWZhdWx0IGRlY29yYXRvciAvIGZpbHRlci5cbiAgICAgIGVkaXRvci53aWRnZXRmaWx0ZXIub24oJ2luaXQnLCBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgZWRpdG9yLndpZGdldGZpbHRlclxuICAgICAgICAgIC5yZWdpc3RlckRlY29yYXRvcihuZXcgRHJ1cGFsLmNrZWRpdG9yX3dpZGdldGZpbHRlci5EZWNvcmF0b3JzLldpZGdldChlZGl0b3IpKVxuICAgICAgICAgIC5yZWdpc3RlckZpbHRlcihuZXcgRHJ1cGFsLmNrZWRpdG9yX3dpZGdldGZpbHRlci5GaWx0ZXJzLkRlZmF1bHQoZWRpdG9yKSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSW5pdGlhbGl6ZSB0aGUgd2lkZ2V0IGZpbHRlci4gVGhpcyBoYXMgdG8gYmUgZG9uZSBhZnRlciB0aGUgRE9NIGlzXG4gICAgICAvLyByZWFkeSBzaW5jZSBpdCBuZWVkcyB0aGUgd2lkZ2V0IHJlcG9zaXRvcnkgdG8gc2V0IHVwIGl0cyBmaW5kZXIsXG4gICAgICAvLyBsb2NhdG9yLCBsaW5lciBwcm9wZXJ0aWVzLlxuICAgICAgZWRpdG9yLm9uKCdjb250ZW50RG9tJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGVkaXRvci53aWRnZXRmaWx0ZXIuaW5pdCgpO1xuICAgICAgfSk7XG5cbiAgICAgIGVkaXRvci5vbignZHJhZ3N0YXJ0JywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGVkaXRvci53aWRnZXRmaWx0ZXIuZHJhZ1N0YXJ0KGV2dCk7XG4gICAgICB9KTtcblxuICAgICAgZWRpdG9yLm9uKCdkcmFnZW5kJywgZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIGVkaXRvci53aWRnZXRmaWx0ZXIuZHJhZ0VuZChldnQpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgfTtcbn1cblxuQ0tFRElUT1IucGx1Z2lucy5hZGQoJ3dpZGdldGZpbHRlcicsIHBsdWdpbkRlZmluaXRpb24pO1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTdCQTtBQStCQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/src/plugins/widgetfilter/plugin.js\n");

/***/ }),

/***/ "ckeditor":
/*!***************************!*\
  !*** external "CKEDITOR" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = CKEDITOR;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2tlZGl0b3IuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJDS0VESVRPUlwiPzc5NmQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBDS0VESVRPUjsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///ckeditor\n");

/***/ }),

/***/ "drupal":
/*!*************************!*\
  !*** external "Drupal" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Drupal;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJ1cGFsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiRHJ1cGFsXCI/MTRjZiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IERydXBhbDsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///drupal\n");

/***/ }),

/***/ "underscore":
/*!********************!*\
  !*** external "_" ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = _;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5kZXJzY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIl9cIj8yNzY1Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///underscore\n");

/***/ })

/******/ });