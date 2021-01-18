(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["share-store"] = factory(require("react"));
	else
		root["share-store"] = factory(root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createLiveStore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function createLiveStore(reducerMap) {
  if (arguments.length === 0) {
    throw 'Reducer is required';
  }

  if (arguments[0].constructor !== Object) {
    throw 'Parameter exception,The reducer collection must be an object type, ' + 'For example:: {reducer1,reducer2,...} or {reducer}';
  } //绑定到第一个参数上


  reducerMap = arguments[0]; //克隆reducer

  var clonedReducers = {};

  for (var a in reducerMap) {
    if (reducerMap[a].constructor !== Function) {
      throw 'The type of reducer must be a function';
    }

    clonedReducers[a] = reducerMap[a];
  } //combineStores


  function combineStores() {
    var stores = {};

    for (var b in clonedReducers) {
      var state = clonedReducers[b](undefined, {
        type: null
      });

      if (state === undefined || state === null) {
        throw 'The return value of reducer cannot be null or undefined';
      }

      stores[b] = state;
    }

    return stores;
  } //combineReducers


  function combineReducers() {
    return function (state, action) {
      var nextState = {};

      for (var c in clonedReducers) {
        var prevState = state[c];
        var currentReducer = clonedReducers[c];
        var currentState = currentReducer(prevState, action);

        if (currentState === undefined) {
          throw 'Reducer must return state,current reducer: ' + currentReducer;
        }

        nextState[c] = currentState;
      }

      return nextState;
    };
  } //merge stores


  var stores = combineStores(); //merge reducer

  var reducer = combineReducers(); //create context

  var Context = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(stores); //Wapper

  function Wapper(_ref) {
    var children = _ref.children;

    var _React$useReducer = react__WEBPACK_IMPORTED_MODULE_0___default.a.useReducer(reducer, stores),
        _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
        state = _React$useReducer2[0],
        action = _React$useReducer2[1];

    var dispatch = function dispatch() {
      if (arguments[0].constructor === Object) {
        action.apply(action, [arguments[0]]);
      }

      if (arguments[0].constructor === Function) {
        arguments[0].apply(arguments[0], [action]);
      }

      return action;
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Provider, {
      value: {
        state: state,
        dispatch: dispatch
      }
    }, children);
  }

  function useStore() {
    var store = null;

    try {
      store = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(Context);
    } catch (e) {
      throw e.name + ', ' + e.message;
    }

    return store;
  }

  return {
    useStore: useStore,
    Wapper: Wapper
  };
}

/***/ })
/******/ ])["default"];
});