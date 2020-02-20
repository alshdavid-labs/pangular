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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/preact/dist/preact.module.js":
/*!****************************************************!*\
  !*** ../node_modules/preact/dist/preact.module.js ***!
  \****************************************************/
/*! exports provided: render, hydrate, createElement, h, Fragment, createRef, isValidElement, Component, cloneElement, createContext, toChildArray, _unmount, options */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return E; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hydrate\", function() { return H; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return v; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"h\", function() { return v; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Fragment\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createRef\", function() { return p; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidElement\", function() { return l; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return y; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cloneElement\", function() { return I; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createContext\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toChildArray\", function() { return b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"_unmount\", function() { return A; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"options\", function() { return n; });\nvar n,l,u,i,t,o,r,f={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n)}function v(n,l,u){var i,t=arguments,o={};for(i in l)\"key\"!==i&&\"ref\"!==i&&(o[i]=l[i]);if(arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(t[i]);if(null!=u&&(o.children=u),\"function\"==typeof n&&null!=n.defaultProps)for(i in n.defaultProps)void 0===o[i]&&(o[i]=n.defaultProps[i]);return h(n,o,l&&l.key,l&&l.ref)}function h(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function p(){return{}}function d(n){return n.children}function y(n,l){this.props=n,this.context=l}function m(n,l){if(null==l)return n.__?m(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return\"function\"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(k)}function k(){var n,l,i,t,o,r,f;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,r=(o=(l=n).__v).__e,(f=l.__P)&&(i=[],t=z(f,o,s({},o),l.__n,void 0!==f.ownerSVGElement,null,i,null==r?m(o):r),T(i,o),t!=r&&w(o)))}function _(n,l,u,i,t,o,r,c,s){var v,h,p,d,y,w,g,k=u&&u.__k||e,_=k.length;if(c==f&&(c=null!=o?o[0]:_?m(u,0):null),v=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__=l,u.__b=l.__b+1,null===(p=k[v])||p&&u.key==p.key&&u.type===p.type)k[v]=void 0;else for(h=0;h<_;h++){if((p=k[h])&&u.key==p.key&&u.type===p.type){k[h]=void 0;break}p=null}if(d=z(n,u,p=p||f,i,t,o,r,c,s),(h=u.ref)&&p.ref!=h&&(g||(g=[]),p.ref&&g.push(p.ref,null,u),g.push(h,u.__c||d,u)),null!=d){var e;if(null==w&&(w=d),void 0!==u.__d)e=u.__d,u.__d=void 0;else if(o==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d),e=null;else{for(y=c,h=0;(y=y.nextSibling)&&h<_;h+=2)if(y==d)break n;n.insertBefore(d,c),e=c}\"option\"==l.type&&(n.value=\"\")}c=void 0!==e?e:d.nextSibling,\"function\"==typeof l.type&&(l.__d=c)}}return v++,u}),l.__e=w,null!=o&&\"function\"!=typeof l.type)for(v=o.length;v--;)null!=o[v]&&a(o[v]);for(v=_;v--;)null!=k[v]&&A(k[v],k[v]);if(g)for(v=0;v<g.length;v++)j(g[v],g[++v],g[++v])}function b(n,l,u){if(null==u&&(u=[]),null==n||\"boolean\"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l(\"string\"==typeof n||\"number\"==typeof n?h(null,n,null,null):null!=n.__e||null!=n.__c?h(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||C(n,o,null,u[o],i);for(o in l)t&&\"function\"!=typeof l[o]||\"value\"===o||\"checked\"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){\"-\"===l[0]?n.setProperty(l,u):n[l]=\"number\"==typeof u&&!1===c.test(l)?u+\"px\":null==u?\"\":u}function C(n,l,u,i,t){var o,r,f,e,c;if(t?\"className\"===l&&(l=\"class\"):\"class\"===l&&(l=\"className\"),\"key\"===l||\"children\"===l);else if(\"style\"===l)if(o=n.style,\"string\"==typeof u)o.cssText=u;else{if(\"string\"==typeof i&&(o.cssText=\"\",i=null),i)for(r in i)u&&r in u||P(o,r,\"\");if(u)for(f in u)i&&u[f]===i[f]||P(o,f,u[f])}else\"o\"===l[0]&&\"n\"===l[1]?(e=l!==(l=l.replace(/Capture$/,\"\")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):\"list\"!==l&&\"tagName\"!==l&&\"form\"!==l&&\"type\"!==l&&\"size\"!==l&&!t&&l in n?n[l]=null==u?\"\":u:\"function\"!=typeof u&&\"dangerouslySetInnerHTML\"!==l&&(l!==(l=l.replace(/^xlink:?/,\"\"))?null==u||!1===u?n.removeAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase()):n.setAttributeNS(\"http://www.w3.org/1999/xlink\",l.toLowerCase(),u):null==u||!1===u&&!/^ar/.test(l)?n.removeAttribute(l):n.setAttribute(l,u))}function N(l){this.l[l.type](n.event?n.event(l):l)}function z(l,u,i,t,o,r,f,e,c){var a,v,h,p,m,w,g,k,b,x,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if(\"function\"==typeof P){if(k=u.props,b=(a=P.contextType)&&t[a.__c],x=a?b?b.props.value:a.__:t,i.__c?g=(v=u.__c=i.__c).__=v.__E:(\"prototype\"in P&&P.prototype.render?u.__c=v=new P(k,x):(u.__c=v=new y(k,x),v.constructor=P,v.render=D),b&&b.sub(v),v.props=k,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=s({},v.__s)),s(v.__s,P.getDerivedStateFromProps(k,v.__s))),p=v.props,m=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&k!==p&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(k,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(k,v.__s,x)){for(v.props=k,v.state=v.__s,v.__d=!1,v.__v=u,u.__e=i.__e,u.__k=i.__k,v.__h.length&&f.push(v),a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__=u);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(k,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(p,m,w)})}v.context=x,v.props=k,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),u.__k=null!=a&&a.type==d&&null==a.key?a.props.children:a,null!=v.getChildContext&&(t=s(s({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(w=v.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,r,f,e,c),v.base=u.__e,v.__h.length&&f.push(v),g&&(v.__E=v.__=null),v.__e=!1}else u.__e=$(i.__e,u,i,t,o,r,f,c);(a=n.diffed)&&a(u)}catch(l){n.__e(l,u,i)}return u.__e}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function $(n,l,u,i,t,o,r,c){var s,a,v,h,p,d=u.props,y=l.props;if(t=\"svg\"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=t?document.createElementNS(\"http://www.w3.org/2000/svg\",l.type):document.createElement(l.type,y.is&&{is:y.is}),o=null}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&n.data!=y&&(n.data=y);else if(l!==u){if(null!=o&&(o[o.indexOf(n)]=null,o=e.slice.call(n.childNodes)),v=(d=u.props||f).dangerouslySetInnerHTML,h=y.dangerouslySetInnerHTML,!c){if(d===f)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(h||v)&&(h&&v&&h.__html==v.__html||(n.innerHTML=h&&h.__html||\"\"))}x(n,y,d,t,c),l.__k=l.props.children,h||_(n,l,u,i,\"foreignObject\"!==l.type&&t,o,r,f,c),c||(\"value\"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?\"\":y.value),\"checked\"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked))}return n}function j(l,u,i){try{\"function\"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function A(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||j(t,null,u)),i||\"function\"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&A(t[r],u,i);null!=o&&a(o)}function D(n,l,u){return this.constructor(n,u)}function E(l,u,i){var t,r,c;n.__&&n.__(l,u),r=(t=i===o)?null:i&&i.__k||u.__k,l=v(d,null,[l]),c=[],z(u,(t?u:i||u).__k=l,r||f,f,void 0!==u.ownerSVGElement,i&&!t?[i]:r?null:e.slice.call(u.childNodes),c,i||f,t),T(c,l)}function H(n,l){E(n,l,o)}function I(n,l){return l=s(s({},n.props),l),arguments.length>2&&(l.children=e.slice.call(arguments,2)),h(n.type,l,l.key||n.key,l.ref||n.ref)}function L(n){var l={},u={__c:\"__cC\"+r++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var i,t=this;return this.getChildContext||(i=[],this.getChildContext=function(){return l[u.__c]=t,l},this.shouldComponentUpdate=function(l){n.value!==l.value&&i.some(function(n){n.context=l.value,g(n)})},this.sub=function(n){i.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){i.splice(i.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Consumer.contextType=u,u}n={__e:function(n,l){for(var u,i;l=l.__;)if((u=l.__c)&&!u.__)try{if(u.constructor&&null!=u.constructor.getDerivedStateFromError&&(i=!0,u.setState(u.constructor.getDerivedStateFromError(n))),null!=u.componentDidCatch&&(i=!0,u.componentDidCatch(n)),i)return g(u.__E=u)}catch(l){n=l}throw n}},l=function(n){return null!=n&&void 0===n.constructor},y.prototype.setState=function(n,l){var u;u=this.__s!==this.state?this.__s:this.__s=s({},this.state),\"function\"==typeof n&&(n=n(u,this.props)),n&&s(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),g(this))},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this))},y.prototype.render=d,u=[],i=\"function\"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,o=f,r=0;\n//# sourceMappingURL=preact.module.js.map\n\n\n//# sourceURL=webpack:///../node_modules/preact/dist/preact.module.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/check-type/check-types.js":
/*!****************************************************************!*\
  !*** ../node_modules/reaction-wheel/check-type/check-types.js ***!
  \****************************************************************/
/*! exports provided: isObject, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return isArray; });\nfunction isObject(value) {\n    return value && typeof value === 'object' && value.constructor === Object;\n}\nfunction isArray(value) {\n    return Array.isArray(value);\n}\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/check-type/check-types.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/check-type/index.barrel.js":
/*!*****************************************************************!*\
  !*** ../node_modules/reaction-wheel/check-type/index.barrel.js ***!
  \*****************************************************************/
/*! exports provided: isObject, isArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _check_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-types */ \"../node_modules/reaction-wheel/check-type/check-types.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return _check_types__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isArray\", function() { return _check_types__WEBPACK_IMPORTED_MODULE_0__[\"isArray\"]; });\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/check-type/index.barrel.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/check-type/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/reaction-wheel/check-type/index.js ***!
  \**********************************************************/
/*! exports provided: checktype */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.barrel */ \"../node_modules/reaction-wheel/check-type/index.barrel.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"checktype\", function() { return _index_barrel__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/check-type/index.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/create.js":
/*!************************************************!*\
  !*** ../node_modules/reaction-wheel/create.js ***!
  \************************************************/
/*! exports provided: MutationStrategy, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MutationStrategy\", function() { return MutationStrategy; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony import */ var _getters_setters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getters-setters */ \"../node_modules/reaction-wheel/getters-setters/index.js\");\n/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ \"../node_modules/reaction-wheel/proxy/index.js\");\n\n\nvar MutationStrategy;\n(function (MutationStrategy) {\n    MutationStrategy[\"AUTO\"] = \"AUTO\";\n    MutationStrategy[\"PROXY\"] = \"PROXY\";\n    MutationStrategy[\"GETTER_SETTER\"] = \"GETTER_SETTER\";\n})(MutationStrategy || (MutationStrategy = {}));\nvar create = function (source, _a) {\n    var _b = (_a === void 0 ? {} : _a).mutationStrategy, mutationStrategy = _b === void 0 ? MutationStrategy.AUTO : _b;\n    if (mutationStrategy === MutationStrategy.GETTER_SETTER) {\n        return _getters_setters__WEBPACK_IMPORTED_MODULE_0__[\"getterssetters\"].create(source);\n    }\n    else if (mutationStrategy === MutationStrategy.PROXY) {\n        return _proxy__WEBPACK_IMPORTED_MODULE_1__[\"proxy\"].create(source);\n    }\n    else if (typeof Proxy === \"undefined\") {\n        return _getters_setters__WEBPACK_IMPORTED_MODULE_0__[\"getterssetters\"].create(source);\n    }\n    else {\n        return _proxy__WEBPACK_IMPORTED_MODULE_1__[\"proxy\"].create(source);\n    }\n};\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/create.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/emitter/emitter.js":
/*!*********************************************************!*\
  !*** ../node_modules/reaction-wheel/emitter/emitter.js ***!
  \*********************************************************/
/*! exports provided: Emitter, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Emitter\", function() { return Emitter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\nvar Emitter = /** @class */ (function () {\n    function Emitter() {\n        this.subscribers = {};\n    }\n    Emitter.prototype.subscribe = function (cb) {\n        var _this = this;\n        var key = (Math.random() * 1000000000000000).toFixed().toString();\n        this.subscribers[key] = cb;\n        return {\n            unsubscribe: function () { return delete _this.subscribers[key]; }\n        };\n    };\n    Emitter.prototype.emit = function (value) {\n        for (var _i = 0, _a = Object.keys(this.subscribers); _i < _a.length; _i++) {\n            var key = _a[_i];\n            this.subscribers[key](value);\n        }\n    };\n    return Emitter;\n}());\n\nvar create = function () { return new Emitter(); };\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/emitter/emitter.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/emitter/index.barrel.js":
/*!**************************************************************!*\
  !*** ../node_modules/reaction-wheel/emitter/index.barrel.js ***!
  \**************************************************************/
/*! exports provided: Emitter, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emitter */ \"../node_modules/reaction-wheel/emitter/emitter.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Emitter\", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__[\"Emitter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return _emitter__WEBPACK_IMPORTED_MODULE_0__[\"create\"]; });\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/emitter/index.barrel.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/emitter/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/reaction-wheel/emitter/index.js ***!
  \*******************************************************/
/*! exports provided: emitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.barrel */ \"../node_modules/reaction-wheel/emitter/index.barrel.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"emitter\", function() { return _index_barrel__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/emitter/index.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/getters-setters/create.js":
/*!****************************************************************!*\
  !*** ../node_modules/reaction-wheel/getters-setters/create.js ***!
  \****************************************************************/
/*! exports provided: create, observe, observeObject, observeArray, patchMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observe\", function() { return observe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observeObject\", function() { return observeObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"observeArray\", function() { return observeArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patchMethod\", function() { return patchMethod; });\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emitter */ \"../node_modules/reaction-wheel/emitter/index.js\");\n/* harmony import */ var _check_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../check-type */ \"../node_modules/reaction-wheel/check-type/index.js\");\n\n\nvar methodsToPatch = [\n    'push',\n    'pop',\n    'shift',\n    'unshift',\n    'splice',\n    'sort',\n    'reverse'\n];\nfunction create(source) {\n    var update$ = _emitter__WEBPACK_IMPORTED_MODULE_0__[\"emitter\"].create();\n    var proxy = observe(source, update$);\n    proxy.subscribe = update$.subscribe.bind(update$);\n    return proxy;\n}\nfunction observe(source, update$) {\n    if (_check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isArray(source)) {\n        return observeArray(source, update$);\n    }\n    if (_check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isObject(source)) {\n        return observeObject(source, update$);\n    }\n}\nvar observeObject = function (source, update$) {\n    var proxy = {};\n    var _loop_1 = function (key) {\n        if (_check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isArray(source[key])) {\n            source[key] = observeArray(source[key], update$);\n        }\n        if (_check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isObject(source[key])) {\n            source[key] = observeObject(source[key], update$);\n        }\n        Object.defineProperty(proxy, key, {\n            enumerable: true,\n            get: function () {\n                return source[key];\n            },\n            set: function (value) {\n                if (source[key] === value) {\n                    return true;\n                }\n                source[key] = value;\n                update$.emit();\n            }\n        });\n    };\n    for (var key in source) {\n        _loop_1(key);\n    }\n    return proxy;\n};\nvar observeArray = function (source, update$) {\n    for (var i = 0; i < source.length; i++) {\n        if (_check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isArray(source[i])) {\n            source[i] = observeArray(source[i], update$);\n        }\n        if (_check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isObject(source[i])) {\n            source[i] = observeObject(source[i], update$);\n        }\n    }\n    for (var _i = 0, methodsToPatch_1 = methodsToPatch; _i < methodsToPatch_1.length; _i++) {\n        var method = methodsToPatch_1[_i];\n        patchMethod(source, method, function () {\n            observeArray(source, update$);\n            update$.emit();\n        });\n    }\n    return source;\n};\nvar patchMethod = function (target, methodKey, patch) {\n    var original = target[methodKey];\n    target[methodKey] = function () {\n        original.apply(target, arguments);\n        patch();\n    };\n};\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/getters-setters/create.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/getters-setters/index.barrel.js":
/*!**********************************************************************!*\
  !*** ../node_modules/reaction-wheel/getters-setters/index.barrel.js ***!
  \**********************************************************************/
/*! exports provided: create, observe, observeObject, observeArray, patchMethod */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"../node_modules/reaction-wheel/getters-setters/create.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"create\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"observe\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"observe\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"observeObject\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"observeObject\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"observeArray\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"observeArray\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"patchMethod\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"patchMethod\"]; });\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/getters-setters/index.barrel.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/getters-setters/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/reaction-wheel/getters-setters/index.js ***!
  \***************************************************************/
/*! exports provided: getterssetters, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.barrel */ \"../node_modules/reaction-wheel/getters-setters/index.barrel.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"getterssetters\", function() { return _index_barrel__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_index_barrel__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/getters-setters/index.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/index.barrel.js":
/*!******************************************************!*\
  !*** ../node_modules/reaction-wheel/index.barrel.js ***!
  \******************************************************/
/*! exports provided: MutationStrategy, create, emitter, getterssetters, proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"../node_modules/reaction-wheel/create.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"MutationStrategy\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"MutationStrategy\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"create\"]; });\n\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ \"../node_modules/reaction-wheel/emitter/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"emitter\", function() { return _emitter__WEBPACK_IMPORTED_MODULE_1__[\"emitter\"]; });\n\n/* harmony import */ var _getters_setters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getters-setters */ \"../node_modules/reaction-wheel/getters-setters/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getterssetters\", function() { return _getters_setters__WEBPACK_IMPORTED_MODULE_2__[\"getterssetters\"]; });\n\n/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proxy */ \"../node_modules/reaction-wheel/proxy/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"proxy\", function() { return _proxy__WEBPACK_IMPORTED_MODULE_3__[\"proxy\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/index.barrel.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/index.js":
/*!***********************************************!*\
  !*** ../node_modules/reaction-wheel/index.js ***!
  \***********************************************/
/*! exports provided: reactionwheel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.barrel */ \"../node_modules/reaction-wheel/index.barrel.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"reactionwheel\", function() { return _index_barrel__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_index_barrel__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/index.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/proxy/create.js":
/*!******************************************************!*\
  !*** ../node_modules/reaction-wheel/proxy/create.js ***!
  \******************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../emitter */ \"../node_modules/reaction-wheel/emitter/index.js\");\n/* harmony import */ var _check_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../check-type */ \"../node_modules/reaction-wheel/check-type/index.js\");\n\n\nfunction create(source) {\n    var update$ = _emitter__WEBPACK_IMPORTED_MODULE_0__[\"emitter\"].create();\n    source.subscribe = update$.subscribe.bind(update$);\n    return observe(source, update$);\n}\nfunction observe(source, update$) {\n    return new Proxy(source, {\n        get: function (s, p) {\n            if (_check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isArray(s[p]) ||\n                _check_type__WEBPACK_IMPORTED_MODULE_1__[\"checktype\"].isObject(s[p])) {\n                return observe(s[p], update$);\n            }\n            return s[p];\n        },\n        set: function (s, p, u) {\n            if (s[p] === u) {\n                return true;\n            }\n            s[p] = u;\n            update$.emit();\n            return true;\n        }\n    });\n}\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/proxy/create.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/proxy/index.barrel.js":
/*!************************************************************!*\
  !*** ../node_modules/reaction-wheel/proxy/index.barrel.js ***!
  \************************************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"../node_modules/reaction-wheel/proxy/create.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return _create__WEBPACK_IMPORTED_MODULE_0__[\"create\"]; });\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/proxy/index.barrel.js?");

/***/ }),

/***/ "../node_modules/reaction-wheel/proxy/index.js":
/*!*****************************************************!*\
  !*** ../node_modules/reaction-wheel/proxy/index.js ***!
  \*****************************************************/
/*! exports provided: proxy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_barrel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.barrel */ \"../node_modules/reaction-wheel/proxy/index.barrel.js\");\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \"proxy\", function() { return _index_barrel__WEBPACK_IMPORTED_MODULE_0__; });\n\n\n\n\n//# sourceURL=webpack:///../node_modules/reaction-wheel/proxy/index.js?");

/***/ }),

/***/ "../pangular/compiler/src/attributes.ts":
/*!**********************************************!*\
  !*** ../pangular/compiler/src/attributes.ts ***!
  \**********************************************/
/*! exports provided: compileAttributes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compileAttributes\", function() { return compileAttributes; });\n/* harmony import */ var _matchers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./matchers */ \"../pangular/compiler/src/matchers.ts\");\n\n// import { Container } from '@pangular/core'\nfunction compileAttributes(_attrs, c) {\n    const attrs = { ..._attrs };\n    if (Object.keys(attrs).length === 0) {\n        return '{}';\n    }\n    for (const key in attrs) {\n        if (Object(_matchers__WEBPACK_IMPORTED_MODULE_0__[\"hasPropertyAndEventBinding\"])(key)) {\n            const k = key.slice(2, -2);\n            attrs[`[${k}]`] = attrs[key];\n            attrs[`(${k}Change)`] = `${attrs[key]} = $event`;\n            delete attrs[key];\n        }\n    }\n    const buff = [];\n    const declarations = c.declarations || {};\n    let directives = [];\n    for (const [attr, value] of Object.entries(attrs)) {\n        if (Object(_matchers__WEBPACK_IMPORTED_MODULE_0__[\"startsWithHash\"])(attr)) {\n            // TODO\n            // const k = attr.slice(1, attr.length)\n            // buff.push(`ref: obtainRef('${k}')`)\n            continue;\n        }\n        if (Object(_matchers__WEBPACK_IMPORTED_MODULE_0__[\"hasHandlebars\"])(attr)) {\n            const k = attr.slice(1, -1);\n            buff.push(`'${k}' : ctx.${value}`);\n            continue;\n        }\n        if (Object(_matchers__WEBPACK_IMPORTED_MODULE_0__[\"hasEventBinding\"])(attr)) {\n            const k = attr.slice(1, -1);\n            buff.push(`'${k}' : $event => ctx.${value}`);\n            continue;\n        }\n        if (Object(_matchers__WEBPACK_IMPORTED_MODULE_0__[\"hasPropertyBinding\"])(attr)) {\n            const k = attr.slice(1, -1);\n            if (Object.keys(declarations).includes(k)) {\n                directives.push(`d('${k}'),`);\n            }\n            // if (k === '_ctx') {\n            //   buff.push(`'${k}' : ctx`);\n            //   continue\n            // }\n            if (k === '_variables') {\n                buff.push(`'${k}' : ${value}`);\n                continue;\n            }\n            buff.push(`'${k}' : ctx.${value}`);\n            continue;\n        }\n        buff.push(`'${attr}' : '${value}'`);\n    }\n    let directivesStr = '';\n    if (directives.length !== 0) {\n        directivesStr = `_directives: [ ${directives.join(', ')} ],`;\n    }\n    return '{ ' + directivesStr + buff.join(', ') + ' }';\n}\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/attributes.ts?");

/***/ }),

/***/ "../pangular/compiler/src/build.ts":
/*!*****************************************!*\
  !*** ../pangular/compiler/src/build.ts ***!
  \*****************************************/
/*! exports provided: build */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"build\", function() { return build; });\n/* harmony import */ var _writer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./writer */ \"../pangular/compiler/src/writer.ts\");\n/* harmony import */ var _element_names__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./element-names */ \"../pangular/compiler/src/element-names.ts\");\n/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ \"../pangular/compiler/src/attributes.ts\");\n/* harmony import */ var _matchers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./matchers */ \"../pangular/compiler/src/matchers.ts\");\n/* harmony import */ var _pre_process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pre-process */ \"../pangular/compiler/src/pre-process.ts\");\n/* harmony import */ var _structural__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./structural */ \"../pangular/compiler/src/structural.ts\");\n\n\n// import { Container } from '@pangular/core'\n\n\n\n\nconst getUnpackedAttributes = (t) => {\n    const clean = (a) => a.map(i => i.trim());\n    const splitLet = (exp) => clean(exp.split('let'))[1];\n    const splitOf = (exp) => clean(exp.split('of'));\n    const statements = clean(t.split(';'));\n    const output = {};\n    let target = '';\n    for (let statement of statements) {\n        if (statement.includes('of')) {\n            const [s, it] = splitOf(statement);\n            target = it;\n            output['$implicit'] = splitLet(s);\n            continue;\n        }\n        const key = splitLet(statement);\n        output[key] = key;\n    }\n    return {\n        output,\n        target\n    };\n};\nconst unpackStructural = (r) => {\n    for (const attr in r.attrs) {\n        if (attr.includes('*')) {\n            const value = r.attrs[attr];\n            delete r.attrs[attr];\n            const _children = r.children;\n            r.children = [\n                {\n                    type: r.type,\n                    name: r.name,\n                    voidElement: r.voidElement,\n                    attrs: { ...r.attrs },\n                    children: _children\n                }\n            ];\n            r.name = 'pg-structure';\n            r.attrs = {};\n            const propertyBinding = `[${attr.replace('*', '')}]`;\n            if (value.includes('let')) {\n                const upa = getUnpackedAttributes(value);\n                r.attrs[propertyBinding] = upa.target;\n                const vars = JSON.stringify(upa.output).replace(/\"/g, \"'\");\n                r.attrs['[_variables]'] = vars;\n            }\n            else {\n                r.attrs[propertyBinding] = value;\n            }\n            // r.attrs['[_ctx]'] = null\n            return;\n        }\n    }\n};\nconst writeResult = (w, r, c) => {\n    if (r.type === 'text') {\n        w.write(`'${Object(_matchers__WEBPACK_IMPORTED_MODULE_3__[\"replaceTemplates\"])(r.content)}'`);\n        return;\n    }\n    unpackStructural(r);\n    const structuralDirectives = Object(_structural__WEBPACK_IMPORTED_MODULE_5__[\"getStructuralDirectives\"])(c);\n    const attributes = Object(_attributes__WEBPACK_IMPORTED_MODULE_2__[\"compileAttributes\"])(r.attrs, c);\n    const structural = Object(_structural__WEBPACK_IMPORTED_MODULE_5__[\"hasStructuralDirective\"])(structuralDirectives, attributes);\n    if (r.name === 'Fragment' ||\n        r.name === 'pg-template') {\n        w.write(`y(Fragment, ${attributes}, `);\n    }\n    else if (r.name === 'pg-structure') {\n        w.write(`y(Structural, ${attributes}, `);\n    }\n    else if (r.name === 'slot') {\n        const tag = r.attrs.as ? `'${r.attrs.as}'` : 'Fragment';\n        w.write(`y(${tag}, {}, children`);\n    }\n    else if (_element_names__WEBPACK_IMPORTED_MODULE_1__[\"HTMLTags\"].includes(r.name)) {\n        w.write(`y('${r.name}', ${attributes}, `);\n    }\n    else {\n        w.write(`y(d('${r.name}'), ${attributes}, `);\n    }\n    if (structural) {\n        w.write(`(ctx => [`);\n        for (let child of r.children || []) {\n            writeResult(w, child, c);\n            w.write(\", \");\n        }\n        w.write(']))');\n    }\n    else {\n        w.write('[');\n        for (let child of r.children || []) {\n            writeResult(w, child, c);\n            w.write(\", \");\n        }\n        w.write('])');\n    }\n};\nconst build = (ast, container) => {\n    const w = new _writer__WEBPACK_IMPORTED_MODULE_0__[\"Writer\"]();\n    const target = Object(_pre_process__WEBPACK_IMPORTED_MODULE_4__[\"preProcess\"])(ast);\n    writeResult(w, target, container);\n    const compiled = w.get().replace(/\\n/g, '');\n    const output = `({ y, ctx, Fragment, Structural, d, m, children }) => ${compiled}`;\n    return output;\n};\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/build.ts?");

/***/ }),

/***/ "../pangular/compiler/src/element-names.ts":
/*!*************************************************!*\
  !*** ../pangular/compiler/src/element-names.ts ***!
  \*************************************************/
/*! exports provided: HTMLTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTMLTags\", function() { return HTMLTags; });\nconst HTMLTags = [\n    'a',\n    'abbr',\n    'address',\n    'area',\n    'article',\n    'aside',\n    'audio',\n    'b',\n    'base',\n    'bdi',\n    'bdo',\n    'blockquote',\n    'body',\n    'br',\n    'button',\n    'canvas',\n    'caption',\n    'cite',\n    'code',\n    'col',\n    'colgroup',\n    'data',\n    'datalist',\n    'dd',\n    'del',\n    'details',\n    'dfn',\n    'dialog',\n    'div',\n    'dl',\n    'dt',\n    'em',\n    'embed',\n    'fieldset',\n    'figcaption',\n    'figure',\n    'footer',\n    'form',\n    'h1',\n    'h2',\n    'h3',\n    'h4',\n    'h5',\n    'h6',\n    'head',\n    'header',\n    'hgroup',\n    'hr',\n    'html',\n    'i',\n    'iframe',\n    'img',\n    'input',\n    'ins',\n    'kbd',\n    'label',\n    'legend',\n    'li',\n    'link',\n    'main',\n    'map',\n    'mark',\n    'MathML math',\n    'menu',\n    'meta',\n    'meter',\n    'nav',\n    'noscript',\n    'object',\n    'ol',\n    'optgroup',\n    'option',\n    'output',\n    'p',\n    'param',\n    'picture',\n    'pre',\n    'progress',\n    'q',\n    'rp',\n    'rt',\n    'ruby',\n    's',\n    'samp',\n    'script',\n    'section',\n    'select',\n    'slot',\n    'small',\n    'source',\n    'span',\n    'strong',\n    'style',\n    'sub',\n    'summary',\n    'sup',\n    'SVG svg',\n    'table',\n    'tbody',\n    'td',\n    'template',\n    'textarea',\n    'tfoot',\n    'th',\n    'thead',\n    'time',\n    'title',\n    'tr',\n    'track',\n    'u',\n    'ul',\n    'var',\n    'video',\n    'wbr',\n];\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/element-names.ts?");

/***/ }),

/***/ "../pangular/compiler/src/index.ts":
/*!*****************************************!*\
  !*** ../pangular/compiler/src/index.ts ***!
  \*****************************************/
/*! exports provided: compile, html */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return compile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"html\", function() { return html; });\n/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ \"../pangular/compiler/src/parser/index.ts\");\n/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build */ \"../pangular/compiler/src/build.ts\");\n\n\nconst compile = (html, instance) => {\n    const ast = Object(_parser__WEBPACK_IMPORTED_MODULE_0__[\"parse\"])(html);\n    return Object(_build__WEBPACK_IMPORTED_MODULE_1__[\"build\"])(ast, instance);\n};\nfunction html(string) {\n    function compiler(instance) {\n        const result = compile(string[0], instance);\n        return eval(result);\n    }\n    compiler.prototype.templateType = 'tagged-template';\n    return compiler;\n}\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/index.ts?");

/***/ }),

/***/ "../pangular/compiler/src/matchers.ts":
/*!********************************************!*\
  !*** ../pangular/compiler/src/matchers.ts ***!
  \********************************************/
/*! exports provided: templateRegex, dataBindingRegex, eventBindingRegex, bananaRegex, structuralRegex, startsWithHash, hasHandlebars, hasEventBinding, hasPropertyBinding, hasPropertyAndEventBinding, isStructuralDirective, replaceTemplates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"templateRegex\", function() { return templateRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"dataBindingRegex\", function() { return dataBindingRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"eventBindingRegex\", function() { return eventBindingRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"bananaRegex\", function() { return bananaRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"structuralRegex\", function() { return structuralRegex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startsWithHash\", function() { return startsWithHash; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasHandlebars\", function() { return hasHandlebars; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasEventBinding\", function() { return hasEventBinding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasPropertyBinding\", function() { return hasPropertyBinding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasPropertyAndEventBinding\", function() { return hasPropertyAndEventBinding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isStructuralDirective\", function() { return isStructuralDirective; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"replaceTemplates\", function() { return replaceTemplates; });\nconst templateRegex = new RegExp(/\\{\\{(.*?)\\}\\}/g);\nconst dataBindingRegex = new RegExp(/\\[(.*?)\\]/g);\nconst eventBindingRegex = new RegExp(/\\((.*?)\\)/g);\nconst bananaRegex = new RegExp(/\\[\\((.*?)\\)\\]/g);\nconst structuralRegex = new RegExp(/\\*(.*?)*\\b/g);\nconst startsWithHash = (str) => str[0] === '#';\nconst hasHandlebars = (str) => str.match(templateRegex);\nconst hasEventBinding = (str) => str.match(eventBindingRegex);\nconst hasPropertyBinding = (str) => str.match(dataBindingRegex);\nconst hasPropertyAndEventBinding = (str) => str.match(bananaRegex);\nconst isStructuralDirective = (str) => str.match(structuralRegex);\nconst replaceTemplates = (str) => {\n    return str.replace(templateRegex, binding => {\n        return `' + ctx.${binding.slice(2, -2)} + '`.trim();\n    });\n};\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/matchers.ts?");

/***/ }),

/***/ "../pangular/compiler/src/parser/index.ts":
/*!************************************************!*\
  !*** ../pangular/compiler/src/parser/index.ts ***!
  \************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse */ \"../pangular/compiler/src/parser/parse.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"parse\", function() { return _parse__WEBPACK_IMPORTED_MODULE_0__[\"parse\"]; });\n\n/* harmony import */ var _parse_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse-tag */ \"../pangular/compiler/src/parser/parse-tag.ts\");\n/* empty/unused harmony star reexport */\n\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/parser/index.ts?");

/***/ }),

/***/ "../pangular/compiler/src/parser/parse-tag.ts":
/*!****************************************************!*\
  !*** ../pangular/compiler/src/parser/parse-tag.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar attrRE = /\\s([^'\"/\\s><]+?)[\\s/>]|([^\\s=]+)=\\s?(\".*?\"|'.*?')/g;\n// create optimized lookup object for\n// void elements as listed here:\n// http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements\nvar lookup = (Object.create) ? Object.create(null) : {};\nlookup.area = true;\nlookup.base = true;\nlookup.br = true;\nlookup.col = true;\nlookup.embed = true;\nlookup.hr = true;\nlookup.img = true;\nlookup.input = true;\nlookup.keygen = true;\nlookup.link = true;\nlookup.menuitem = true;\nlookup.meta = true;\nlookup.param = true;\nlookup.source = true;\nlookup.track = true;\nlookup.wbr = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (tag) {\n    var res = {\n        type: 'tag',\n        name: '',\n        voidElement: false,\n        attrs: {},\n        children: []\n    };\n    let tagMatch = tag.match(/<\\/?([^\\s]+?)[/\\s>]/);\n    if (tagMatch) {\n        res.name = tagMatch[1];\n        if (lookup[tagMatch[1].toLowerCase()] || tag.charAt(tag.length - 2) === '/')\n            res.voidElement = true;\n    }\n    let reg = new RegExp(attrRE);\n    let result = null;\n    for (;;) {\n        result = reg.exec(tag);\n        if (result === null)\n            break;\n        if (!result[0].trim())\n            continue;\n        if (result[1]) {\n            let attr = result[1].trim();\n            let arr = [attr, \"\"];\n            if (attr.indexOf(\"=\") > -1)\n                arr = attr.split(\"=\");\n            res.attrs[arr[0]] = arr[1];\n            reg.lastIndex--;\n        }\n        else if (result[2])\n            res.attrs[result[2]] = result[3].trim().substring(1, result[3].length - 1);\n    }\n    return res;\n});\n;\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/parser/parse-tag.ts?");

/***/ }),

/***/ "../pangular/compiler/src/parser/parse.ts":
/*!************************************************!*\
  !*** ../pangular/compiler/src/parser/parse.ts ***!
  \************************************************/
/*! exports provided: parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parse\", function() { return parse; });\n/* harmony import */ var _parse_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-tag */ \"../pangular/compiler/src/parser/parse-tag.ts\");\nvar tagRE = /<(?:\"[^\"]*\"['\"]*|'[^']*'['\"]*|[^'\">])+>/g;\n\n// re-used obj for quick lookups of components\nvar empty = Object.create ? Object.create(null) : {};\nfunction parse(html, options) {\n    options || (options = {});\n    options.components || (options.components = empty);\n    var result = [];\n    var current;\n    var level = -1;\n    var arr = [];\n    var byTag = {};\n    var inComponent = false;\n    html.replace(tagRE, function (tag, index) {\n        if (inComponent) {\n            if (tag !== \"</\" + current.name + \">\") {\n                return;\n            }\n            else {\n                inComponent = false;\n            }\n        }\n        var isOpen = tag.charAt(1) !== \"/\";\n        var start = index + tag.length;\n        var nextChar = html.charAt(start);\n        var parent;\n        if (isOpen) {\n            level++;\n            current = Object(_parse_tag__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(tag);\n            if (current.type === \"tag\" && options.components[current.name]) {\n                current.type = \"component\";\n                inComponent = true;\n            }\n            if (!current.voidElement &&\n                !inComponent &&\n                nextChar &&\n                nextChar !== \"<\") {\n                current.children.push({\n                    type: \"text\",\n                    content: html.slice(start, html.indexOf(\"<\", start))\n                });\n            }\n            byTag[current.tagName] = current;\n            // if we're at root, push new base node\n            if (level === 0) {\n                result.push(current);\n            }\n            parent = arr[level - 1];\n            if (parent) {\n                parent.children.push(current);\n            }\n            arr[level] = current;\n        }\n        if (!isOpen || current.voidElement) {\n            level--;\n            if (!inComponent && nextChar !== \"<\" && nextChar) {\n                // trailing text node\n                // if we're at the root, push a base text node. otherwise add as\n                // a child to the current node.\n                parent = level === -1 ? result : arr[level].children;\n                // calculate correct end of the content slice in case there's\n                // no tag after the text node.\n                var end = html.indexOf(\"<\", start);\n                var content = html.slice(start, end === -1 ? undefined : end);\n                // if a node is nothing but whitespace, no need to add it.\n                if (!/^\\s*$/.test(content)) {\n                    parent.push({\n                        type: \"text\",\n                        content: content\n                    });\n                }\n            }\n        }\n    });\n    return result;\n}\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/parser/parse.ts?");

/***/ }),

/***/ "../pangular/compiler/src/pre-process.ts":
/*!***********************************************!*\
  !*** ../pangular/compiler/src/pre-process.ts ***!
  \***********************************************/
/*! exports provided: preProcess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"preProcess\", function() { return preProcess; });\nconst preProcess = (ast) => {\n    const past = [];\n    const clone = cloneResults(ast);\n    // crawl(ast, past)\n    clone[0].children[0].type = 'broken';\n    const target = produceTarget(ast);\n    return target;\n};\nfunction produceTarget(ast) {\n    let target;\n    if (ast.length === 1) {\n        target = ast[0];\n        target.attrs['#host'] = undefined;\n    }\n    else {\n        target = {\n            type: 'tag',\n            name: 'Fragment',\n            voidElement: false,\n            attrs: {},\n            children: ast\n        };\n    }\n    return target;\n}\nfunction cloneResults(ast) {\n    const results = [];\n    for (const i in ast) {\n        const c = ast[i];\n        const result = {\n            type: c.type,\n            name: c.name,\n            content: c.content,\n            voidElement: c.voidElement,\n            attrs: { ...(c.attrs || {}) },\n            children: [...(c.children || [])]\n        };\n        if (c.children && c.children.length !== 0) {\n            result.children = cloneResults(ast[i].children);\n        }\n        results.push(result);\n    }\n    return results;\n}\nfunction crawl(ast, writer) {\n    for (const i in ast) {\n        const c = ast[i];\n        const result = {\n            type: c.type,\n            name: c.name,\n            content: c.content,\n            voidElement: c.voidElement,\n            attrs: { ...(c.attrs || {}) },\n            children: [...(c.children || [])]\n        };\n        writer.push(result);\n        if (ast[i].children && ast[i].children.length !== 0) {\n            crawl(ast[i].children, writer[i].children);\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/pre-process.ts?");

/***/ }),

/***/ "../pangular/compiler/src/structural.ts":
/*!**********************************************!*\
  !*** ../pangular/compiler/src/structural.ts ***!
  \**********************************************/
/*! exports provided: getStructuralDirectives, hasStructuralDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStructuralDirectives\", function() { return getStructuralDirectives; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasStructuralDirective\", function() { return hasStructuralDirective; });\n// import { Container } from '@pangular/core'\nconst getStructuralDirectives = (c) => {\n    const directives = [];\n    for (const key in c.declarations) {\n        if (c.declarations[key]._isStructural === true) {\n            directives.push(key);\n        }\n    }\n    return directives;\n};\nconst hasStructuralDirective = (d, a) => {\n    for (const key of d) {\n        if (a.includes(`d('${key}')`)) {\n            return true;\n        }\n    }\n    return false;\n};\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/structural.ts?");

/***/ }),

/***/ "../pangular/compiler/src/writer.ts":
/*!******************************************!*\
  !*** ../pangular/compiler/src/writer.ts ***!
  \******************************************/
/*! exports provided: Writer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Writer\", function() { return Writer; });\nclass Writer {\n    constructor() {\n        this.value = \"\";\n    }\n    write(value) {\n        this.value += value;\n    }\n    get() {\n        return this.value;\n    }\n}\n\n\n//# sourceURL=webpack:///../pangular/compiler/src/writer.ts?");

/***/ }),

/***/ "../pangular/core/components/context.ts":
/*!**********************************************!*\
  !*** ../pangular/core/components/context.ts ***!
  \**********************************************/
/*! exports provided: DC, DCP, DCC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DC\", function() { return DC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DCP\", function() { return DCP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DCC\", function() { return DCC; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"../node_modules/preact/dist/preact.module.js\");\n\nconst DC = Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"createContext\"])({});\nconst DCP = DC.Provider;\nconst DCC = DC.Consumer;\n\n\n//# sourceURL=webpack:///../pangular/core/components/context.ts?");

/***/ }),

/***/ "../pangular/core/components/render.ts":
/*!*********************************************!*\
  !*** ../pangular/core/components/render.ts ***!
  \*********************************************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Render\", function() { return Render; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"../node_modules/preact/dist/preact.module.js\");\n\nconst Render = ({ component, ...props }) => Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(component, { ...props });\n\n\n//# sourceURL=webpack:///../pangular/core/components/render.ts?");

/***/ }),

/***/ "../pangular/core/components/wrapper.ts":
/*!**********************************************!*\
  !*** ../pangular/core/components/wrapper.ts ***!
  \**********************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Wrapper\", function() { return Wrapper; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"../node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ \"../pangular/core/components/context.ts\");\n/* harmony import */ var _y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./y */ \"../pangular/core/components/y.ts\");\n/* harmony import */ var _patch_private_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patch/private-value */ \"../pangular/core/patch/private-value.ts\");\n\n\n\n\n\nclass Wrapper extends preact__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.hasViewInit = false;\n        this.hasInit = false;\n        this.sub = this.props.instance$.subscribe(() => this.forceUpdate());\n        this.services = {};\n        this.getDeclaration = (name) => {\n            const declaration = this.props.declarations[name];\n            if (!declaration) {\n                throw new Error(`Component with tag \"${name}\" does not exist, did you forget to declare it?`);\n            }\n            const Component = declaration.value;\n            return Component;\n        };\n        this.getRef = (el) => {\n            if (el !== undefined) {\n                this.ref = el;\n                this.afterViewInit();\n            }\n        };\n    }\n    componentWillUnmount() {\n        this.sub.unsubscribe();\n        this.runLifecycleHook('onDestroy');\n    }\n    componentWillUpdate() {\n        this.runLifecycleHook('onUpdate');\n    }\n    shouldComponentUpdate(nextProps) {\n        for (const prop in nextProps.props) {\n            if (nextProps.instance[prop] === nextProps.props[prop]) {\n                return false;\n            }\n        }\n        return true;\n    }\n    runLifecycleHook(method) {\n        this.runDirectiveLifecycle(method);\n        this.props.instance$[method] && this.props.instance$[method]();\n    }\n    runDirectiveLifecycle(method) {\n        if (this.props.props.__directives) {\n            for (const directive of this.props.props.__directives) {\n                Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_3__[\"setPrivateValue\"])(directive, 'ref', this.ref);\n                directive[method] && directive[method]();\n            }\n        }\n    }\n    onInit() {\n        if (this.hasInit === false) {\n            this.hasInit = true;\n            this.runLifecycleHook('onInit');\n        }\n    }\n    afterViewInit() {\n        if (this.hasViewInit === false) {\n            this.hasViewInit = true;\n            this.runLifecycleHook('afterViewInit');\n        }\n    }\n    render() {\n        return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_context__WEBPACK_IMPORTED_MODULE_1__[\"DC\"].Consumer, { children: null }, (context) => {\n            this.services = context;\n            this.onInit();\n            if (typeof this.props.template === 'string') {\n                return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(this.props.template, {\n                    ...this.props.props,\n                    ref: this.getRef\n                });\n            }\n            return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(this.props.template, {\n                state: this.props.instance$,\n                ctx: this.props.instance$,\n                Fragment: preact__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"],\n                h: preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"],\n                y: _y__WEBPACK_IMPORTED_MODULE_2__[\"y\"],\n                d: this.getDeclaration,\n                props: this.props.props,\n                ref: this.getRef,\n            });\n        });\n    }\n}\n\n\n//# sourceURL=webpack:///../pangular/core/components/wrapper.ts?");

/***/ }),

/***/ "../pangular/core/components/y.ts":
/*!****************************************!*\
  !*** ../pangular/core/components/y.ts ***!
  \****************************************/
/*! exports provided: y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"y\", function() { return y; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"../node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var reaction_wheel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reaction-wheel */ \"../node_modules/reaction-wheel/index.js\");\n/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/wrapper */ \"../pangular/core/components/wrapper.ts\");\n\n\n\nconst y = (type, props, children) => {\n    if (!props.__directives) {\n        return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(type, props, children);\n    }\n    const instance = {};\n    const instance$ = reaction_wheel__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create(instance);\n    const Target = Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_components_wrapper__WEBPACK_IMPORTED_MODULE_2__[\"Wrapper\"], {\n        instance,\n        instance$,\n        template: type,\n        props,\n    });\n    return Target;\n};\n\n\n//# sourceURL=webpack:///../pangular/core/components/y.ts?");

/***/ }),

/***/ "../pangular/core/decorators/component.ts":
/*!************************************************!*\
  !*** ../pangular/core/decorators/component.ts ***!
  \************************************************/
/*! exports provided: InstanceType, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InstanceType\", function() { return InstanceType; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return Component; });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"../node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var _patch_constructor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patch/constructor */ \"../pangular/core/patch/constructor.ts\");\n/* harmony import */ var _patch_proto_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../patch/proto-value */ \"../pangular/core/patch/proto-value.ts\");\n/* harmony import */ var _patch_private_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../patch/private-value */ \"../pangular/core/patch/private-value.ts\");\n/* harmony import */ var reaction_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reaction-wheel */ \"../node_modules/reaction-wheel/index.js\");\n/* harmony import */ var _components_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/wrapper */ \"../pangular/core/components/wrapper.ts\");\n\n\n\n\n\n\nvar InstanceType;\n(function (InstanceType) {\n    InstanceType[\"component\"] = \"component\";\n})(InstanceType || (InstanceType = {}));\nconst Component = (options) => {\n    const proto = {\n        type: InstanceType.component,\n        selector: options.selector\n    };\n    return Object(_patch_constructor__WEBPACK_IMPORTED_MODULE_1__[\"patchConstructor\"])(proto, instance => {\n        const instance$ = reaction_wheel__WEBPACK_IMPORTED_MODULE_4__[\"default\"].create(instance);\n        const Target = (props) => {\n            Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_3__[\"setPrivateValue\"])(instance, 'props', props);\n            return Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(_components_wrapper__WEBPACK_IMPORTED_MODULE_5__[\"Wrapper\"], {\n                instance,\n                instance$,\n                template: prepareTemplate(options.template),\n                declarations: prepareDeclarations(options.declarations),\n                props,\n                selector: options.selector,\n            });\n        };\n        Object(_patch_proto_value__WEBPACK_IMPORTED_MODULE_2__[\"setProtoValue\"])(Target, 'type', InstanceType.component);\n        Object(_patch_proto_value__WEBPACK_IMPORTED_MODULE_2__[\"setProtoValue\"])(Target, 'selector', options.selector);\n        return Target;\n    });\n};\nconst prepareDeclarations = (optionsDeclarations = []) => {\n    const declarations = {};\n    for (const Value of optionsDeclarations) {\n        const selector = Object(_patch_proto_value__WEBPACK_IMPORTED_MODULE_2__[\"getProtoValue\"])(Value, 'selector');\n        const type = Object(_patch_proto_value__WEBPACK_IMPORTED_MODULE_2__[\"getProtoValue\"])(Value, 'type');\n        if (type === InstanceType.component) {\n            declarations[selector] = {\n                type,\n                value: new Value()\n            };\n        }\n    }\n    return declarations;\n};\nconst prepareTemplate = (template) => {\n    if (template.prototype && template.prototype.templateType == 'tagged-template') {\n        return template({});\n    }\n    return template;\n};\n\n\n//# sourceURL=webpack:///../pangular/core/decorators/component.ts?");

/***/ }),

/***/ "../pangular/core/decorators/directive.ts":
/*!************************************************!*\
  !*** ../pangular/core/decorators/directive.ts ***!
  \************************************************/
/*! exports provided: Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Directive\", function() { return Directive; });\n/* harmony import */ var _patch_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../patch/constructor */ \"../pangular/core/patch/constructor.ts\");\n\nconst Directive = (options) => {\n    const proto = {\n        type: 'directive',\n        selector: options.selector\n    };\n    return Object(_patch_constructor__WEBPACK_IMPORTED_MODULE_0__[\"patchConstructor\"])(proto, instance => {\n        return instance;\n    });\n};\n\n\n//# sourceURL=webpack:///../pangular/core/decorators/directive.ts?");

/***/ }),

/***/ "../pangular/core/decorators/host-element.ts":
/*!***************************************************!*\
  !*** ../pangular/core/decorators/host-element.ts ***!
  \***************************************************/
/*! exports provided: HostElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HostElement\", function() { return HostElement; });\n/* harmony import */ var _patch_private_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../patch/private-value */ \"../pangular/core/patch/private-value.ts\");\n\nfunction HostElement() {\n    return function (target, key) {\n        const originalAfterViewInit = target.afterViewInit || function () { };\n        function afterViewInit() {\n            this[key] = Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_0__[\"getPrivateValue\"])(this, 'ref');\n            originalAfterViewInit.apply(this);\n        }\n        target.afterViewInit = afterViewInit;\n    };\n}\n\n\n//# sourceURL=webpack:///../pangular/core/decorators/host-element.ts?");

/***/ }),

/***/ "../pangular/core/decorators/host-listener.ts":
/*!****************************************************!*\
  !*** ../pangular/core/decorators/host-listener.ts ***!
  \****************************************************/
/*! exports provided: HostListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HostListener\", function() { return HostListener; });\n/* harmony import */ var _patch_private_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../patch/private-value */ \"../pangular/core/patch/private-value.ts\");\n\nfunction HostListener(event) {\n    return function (target, key) {\n        const originalAfterViewInit = target.afterViewInit || function () { };\n        const originalOnDestroy = target.onDestroy || function () { };\n        let callback;\n        let el;\n        function afterViewInit() {\n            el = Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_0__[\"getPrivateValue\"])(this, 'ref');\n            callback = this[key] || function () { };\n            el.addEventListener(event, callback);\n            originalAfterViewInit.apply(this);\n        }\n        function onDestroy() {\n            el.removeEventListener(event, callback);\n            originalOnDestroy.apply(this);\n        }\n        target.afterViewInit = afterViewInit;\n        target.onDestroy = onDestroy;\n    };\n}\n\n\n//# sourceURL=webpack:///../pangular/core/decorators/host-listener.ts?");

/***/ }),

/***/ "../pangular/core/decorators/input.ts":
/*!********************************************!*\
  !*** ../pangular/core/decorators/input.ts ***!
  \********************************************/
/*! exports provided: Input */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return Input; });\n/* harmony import */ var _patch_private_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../patch/private-value */ \"../pangular/core/patch/private-value.ts\");\n\nfunction Input() {\n    return function (target, key) {\n        const originalOnInit = target.onInit || function () { };\n        const originalOnUpdate = target.onUpdate || function () { };\n        function onInit() {\n            this[key] = Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_0__[\"getPrivateValue\"])(this, 'props')[key];\n            originalOnInit.apply(this);\n        }\n        function onUpdate() {\n            this[key] = Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_0__[\"getPrivateValue\"])(this, 'props')[key];\n            originalOnUpdate.apply(this);\n        }\n        target.onInit = onInit;\n        target.onUpdate = onUpdate;\n    };\n}\n\n\n//# sourceURL=webpack:///../pangular/core/decorators/input.ts?");

/***/ }),

/***/ "../pangular/core/decorators/output.ts":
/*!*********************************************!*\
  !*** ../pangular/core/decorators/output.ts ***!
  \*********************************************/
/*! exports provided: Output */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Output\", function() { return Output; });\n/* harmony import */ var _patch_private_value__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../patch/private-value */ \"../pangular/core/patch/private-value.ts\");\n\nfunction Output() {\n    return function (target, key) {\n        const originalOnInit = target.onInit || function () { };\n        const originalOnDestroy = target.onDestroy || function () { };\n        let sub;\n        function onInit() {\n            const target = Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_0__[\"getPrivateValue\"])(this, 'props')[key];\n            console.log({\n                target,\n                key,\n                props: Object(_patch_private_value__WEBPACK_IMPORTED_MODULE_0__[\"getPrivateValue\"])(this, 'props')\n            });\n            if (target) {\n                this[key].subscribe(value => target(value));\n            }\n            originalOnInit.apply(this);\n        }\n        function onDestroy() {\n            sub.unsubscribe();\n            originalOnDestroy.apply(this);\n        }\n        target.onInit = onInit;\n        target.onDestroy = onDestroy;\n    };\n}\n\n\n//# sourceURL=webpack:///../pangular/core/decorators/output.ts?");

/***/ }),

/***/ "../pangular/core/event-emitter/bundle.ts":
/*!************************************************!*\
  !*** ../pangular/core/event-emitter/bundle.ts ***!
  \************************************************/
/*! exports provided: Bundle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Bundle\", function() { return Bundle; });\nclass Bundle {\n    constructor() {\n        this.subscriptions = [];\n    }\n    add(subscription) {\n        this.subscriptions.push(subscription);\n    }\n    unsubscribe() {\n        this.subscriptions.forEach(subscription => subscription.unsubscribe());\n        this.subscriptions = [];\n    }\n}\n\n\n//# sourceURL=webpack:///../pangular/core/event-emitter/bundle.ts?");

/***/ }),

/***/ "../pangular/core/event-emitter/event-emitter.ts":
/*!*******************************************************!*\
  !*** ../pangular/core/event-emitter/event-emitter.ts ***!
  \*******************************************************/
/*! exports provided: EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return EventEmitter; });\n// rxjs.Subject\nclass EventEmitter {\n    constructor() {\n        this.subscribers = {};\n        this.completePromise = new Promise(res => this.resolveComplete = res);\n        this.hasComplete = false;\n    }\n    toPromise() {\n        return this.completePromise;\n    }\n    subscribe(cb) {\n        const key = (Math.random() * 1000000000000000).toFixed().toString();\n        this.subscribers[key] = cb;\n        return {\n            unsubscribe: () => delete this.subscribers[key]\n        };\n    }\n    emit(value) {\n        if (this.hasComplete) {\n            throw new Error('Cannot next on complete subject');\n        }\n        for (const key of Object.keys(this.subscribers)) {\n            this.subscribers[key](value);\n        }\n    }\n    complete() {\n        this.hasComplete = true;\n        this.resolveComplete();\n    }\n}\n\n\n//# sourceURL=webpack:///../pangular/core/event-emitter/event-emitter.ts?");

/***/ }),

/***/ "../pangular/core/event-emitter/index.ts":
/*!***********************************************!*\
  !*** ../pangular/core/event-emitter/index.ts ***!
  \***********************************************/
/*! exports provided: StatefulEventEmitter, Bundle, nthEvent, first, filter, EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _stateful_event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stateful-event-emitter */ \"../pangular/core/event-emitter/stateful-event-emitter.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StatefulEventEmitter\", function() { return _stateful_event_emitter__WEBPACK_IMPORTED_MODULE_0__[\"StatefulEventEmitter\"]; });\n\n/* harmony import */ var _bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bundle */ \"../pangular/core/event-emitter/bundle.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Bundle\", function() { return _bundle__WEBPACK_IMPORTED_MODULE_1__[\"Bundle\"]; });\n\n/* harmony import */ var _operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operators */ \"../pangular/core/event-emitter/operators.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nthEvent\", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__[\"nthEvent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__[\"first\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _operators__WEBPACK_IMPORTED_MODULE_2__[\"filter\"]; });\n\n/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event-emitter */ \"../pangular/core/event-emitter/event-emitter.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return _event_emitter__WEBPACK_IMPORTED_MODULE_3__[\"EventEmitter\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///../pangular/core/event-emitter/index.ts?");

/***/ }),

/***/ "../pangular/core/event-emitter/operators.ts":
/*!***************************************************!*\
  !*** ../pangular/core/event-emitter/operators.ts ***!
  \***************************************************/
/*! exports provided: nthEvent, first, filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nthEvent\", function() { return nthEvent; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return first; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return filter; });\nconst nthEvent = (e, n) => {\n    return new Promise(res => {\n        let count = 0;\n        const subscription = e.subscribe(value => {\n            count++;\n            if (count === n) {\n                res(value);\n                subscription.unsubscribe();\n            }\n        });\n    });\n};\nconst first = (e, predicate = () => true) => {\n    return new Promise(res => {\n        const subscription = e.subscribe(value => {\n            const result = predicate(value);\n            if (result === true) {\n                res(value);\n                subscription.unsubscribe();\n            }\n        });\n    });\n};\nconst filter = (e, predicate = () => true) => {\n    return {\n        subscribe: (cb) => {\n            return e.subscribe(value => {\n                const result = predicate(value);\n                if (result === true) {\n                    cb();\n                }\n            });\n        }\n    };\n};\n\n\n//# sourceURL=webpack:///../pangular/core/event-emitter/operators.ts?");

/***/ }),

/***/ "../pangular/core/event-emitter/stateful-event-emitter.ts":
/*!****************************************************************!*\
  !*** ../pangular/core/event-emitter/stateful-event-emitter.ts ***!
  \****************************************************************/
/*! exports provided: StatefulEventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"StatefulEventEmitter\", function() { return StatefulEventEmitter; });\n/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-emitter */ \"../pangular/core/event-emitter/event-emitter.ts\");\n\n// rxjs.BehaviorSubject\nclass StatefulEventEmitter {\n    constructor(value) {\n        this.value = value;\n        this.internal = new _event_emitter__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]();\n    }\n    getValue() {\n        return this.value;\n    }\n    toPromise() {\n        return this.internal.toPromise();\n    }\n    subscribe(cb) {\n        cb(this.value);\n        return this.internal.subscribe(cb);\n    }\n    emit(value) {\n        this.value = value;\n        return this.internal.emit(value);\n    }\n    complete() {\n        return this.internal.complete();\n    }\n}\n\n\n//# sourceURL=webpack:///../pangular/core/event-emitter/stateful-event-emitter.ts?");

/***/ }),

/***/ "../pangular/core/index.ts":
/*!*********************************!*\
  !*** ../pangular/core/index.ts ***!
  \*********************************/
/*! exports provided: InstanceType, Component, Directive, Input, Output, HostElement, HostListener, Render, StatefulEventEmitter, Bundle, nthEvent, first, filter, EventEmitter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _decorators_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/component */ \"../pangular/core/decorators/component.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InstanceType\", function() { return _decorators_component__WEBPACK_IMPORTED_MODULE_0__[\"InstanceType\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _decorators_component__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]; });\n\n/* harmony import */ var _decorators_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/directive */ \"../pangular/core/decorators/directive.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Directive\", function() { return _decorators_directive__WEBPACK_IMPORTED_MODULE_1__[\"Directive\"]; });\n\n/* harmony import */ var _decorators_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/input */ \"../pangular/core/decorators/input.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Input\", function() { return _decorators_input__WEBPACK_IMPORTED_MODULE_2__[\"Input\"]; });\n\n/* harmony import */ var _decorators_output__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/output */ \"../pangular/core/decorators/output.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Output\", function() { return _decorators_output__WEBPACK_IMPORTED_MODULE_3__[\"Output\"]; });\n\n/* harmony import */ var _decorators_host_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/host-element */ \"../pangular/core/decorators/host-element.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HostElement\", function() { return _decorators_host_element__WEBPACK_IMPORTED_MODULE_4__[\"HostElement\"]; });\n\n/* harmony import */ var _decorators_host_listener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/host-listener */ \"../pangular/core/decorators/host-listener.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"HostListener\", function() { return _decorators_host_listener__WEBPACK_IMPORTED_MODULE_5__[\"HostListener\"]; });\n\n/* harmony import */ var _components_render__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/render */ \"../pangular/core/components/render.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Render\", function() { return _components_render__WEBPACK_IMPORTED_MODULE_6__[\"Render\"]; });\n\n/* harmony import */ var _event_emitter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-emitter */ \"../pangular/core/event-emitter/index.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"StatefulEventEmitter\", function() { return _event_emitter__WEBPACK_IMPORTED_MODULE_7__[\"StatefulEventEmitter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Bundle\", function() { return _event_emitter__WEBPACK_IMPORTED_MODULE_7__[\"Bundle\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"nthEvent\", function() { return _event_emitter__WEBPACK_IMPORTED_MODULE_7__[\"nthEvent\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"first\", function() { return _event_emitter__WEBPACK_IMPORTED_MODULE_7__[\"first\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filter\", function() { return _event_emitter__WEBPACK_IMPORTED_MODULE_7__[\"filter\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"EventEmitter\", function() { return _event_emitter__WEBPACK_IMPORTED_MODULE_7__[\"EventEmitter\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///../pangular/core/index.ts?");

/***/ }),

/***/ "../pangular/core/patch/constructor.ts":
/*!*********************************************!*\
  !*** ../pangular/core/patch/constructor.ts ***!
  \*********************************************/
/*! exports provided: patchConstructor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"patchConstructor\", function() { return patchConstructor; });\nfunction patchConstructor(protos, fn) {\n    return function (constructor) {\n        function construct(...args) {\n            const instance = new constructor(...args);\n            return fn(instance, constructor, ...args);\n        }\n        construct.prototype._private = {};\n        for (const proto in protos) {\n            construct.prototype._private[proto] = protos[proto];\n        }\n        return construct;\n    };\n}\n\n\n//# sourceURL=webpack:///../pangular/core/patch/constructor.ts?");

/***/ }),

/***/ "../pangular/core/patch/private-value.ts":
/*!***********************************************!*\
  !*** ../pangular/core/patch/private-value.ts ***!
  \***********************************************/
/*! exports provided: getPrivateValue, setPrivateValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPrivateValue\", function() { return getPrivateValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPrivateValue\", function() { return setPrivateValue; });\nconst getPrivateValue = (target, key) => {\n    if (!target.__private) {\n        return;\n    }\n    if (!key) {\n        return target.__private;\n    }\n    return target.__private[key];\n};\nconst setPrivateValue = (target, key, value) => {\n    if (!target.__private) {\n        target.__private = {};\n    }\n    target.__private[key] = value;\n};\n\n\n//# sourceURL=webpack:///../pangular/core/patch/private-value.ts?");

/***/ }),

/***/ "../pangular/core/patch/proto-value.ts":
/*!*********************************************!*\
  !*** ../pangular/core/patch/proto-value.ts ***!
  \*********************************************/
/*! exports provided: getProtoValue, setProtoValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProtoValue\", function() { return getProtoValue; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setProtoValue\", function() { return setProtoValue; });\nconst getProtoValue = (target, key) => target.prototype._private[key];\nconst setProtoValue = (target, key, value) => {\n    if (!target.prototype) {\n        target.prototype = {};\n    }\n    if (!target.prototype._private) {\n        target.prototype._private = {};\n    }\n    target.prototype._private[key] = value;\n};\n\n\n//# sourceURL=webpack:///../pangular/core/patch/proto-value.ts?");

/***/ }),

/***/ "./src/a.tsx":
/*!*******************!*\
  !*** ./src/a.tsx ***!
  \*******************/
/*! exports provided: A */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"A\", function() { return A; });\n/* harmony import */ var _pangular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pangular/core */ \"../pangular/core/index.ts\");\n/* harmony import */ var _pangular_compiler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pangular/compiler */ \"../pangular/compiler/src/index.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\nlet A = class A {\n    constructor() {\n        this.test = 'suuv';\n        this.onThing = new _pangular_core__WEBPACK_IMPORTED_MODULE_0__[\"EventEmitter\"]();\n    }\n    doThing() {\n        this.onThing.emit('test value');\n    }\n};\n__decorate([\n    Object(_pangular_core__WEBPACK_IMPORTED_MODULE_0__[\"Input\"])()\n], A.prototype, \"test\", void 0);\n__decorate([\n    Object(_pangular_core__WEBPACK_IMPORTED_MODULE_0__[\"Output\"])()\n], A.prototype, \"onThing\", void 0);\nA = __decorate([\n    Object(_pangular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])({\n        selector: 'app-a',\n        template: _pangular_compiler__WEBPACK_IMPORTED_MODULE_1__[\"html\"] `\n    <div>{{test}}\n    <button (onClick)=\"doThing()\">Hey</button>\n    </div>\n  `\n    })\n], A);\n\n\n\n//# sourceURL=webpack:///./src/a.tsx?");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"../node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var _thing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thing */ \"./src/thing.tsx\");\n\n\nconst App = new _thing__WEBPACK_IMPORTED_MODULE_1__[\"Thing\"]();\n// render(<App />, document.querySelector('#target'))\nObject(preact__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(Object(preact__WEBPACK_IMPORTED_MODULE_0__[\"h\"])(App, { test: 'from render' }), document.querySelector('#target'));\n// render(h(() => h(A as any, {}, 'test'), {}), document.querySelector('#target'))\n\n\n//# sourceURL=webpack:///./src/main.tsx?");

/***/ }),

/***/ "./src/thing.tsx":
/*!***********************!*\
  !*** ./src/thing.tsx ***!
  \***********************/
/*! exports provided: Thing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Thing\", function() { return Thing; });\n/* harmony import */ var _pangular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pangular/core */ \"../pangular/core/index.ts\");\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./a */ \"./src/a.tsx\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n// html`<div>\n// <app-a (onThing)=\"lol($event)\" [test]=\"value\" />\n// </div>\n// `\nclass Test {\n    onInput(event) {\n        console.log(event);\n    }\n    afterViewInit() {\n        console.log(this.hostElement);\n    }\n}\n__decorate([\n    Object(_pangular_core__WEBPACK_IMPORTED_MODULE_0__[\"HostListener\"])('input')\n], Test.prototype, \"onInput\", null);\n__decorate([\n    Object(_pangular_core__WEBPACK_IMPORTED_MODULE_0__[\"HostElement\"])()\n], Test.prototype, \"hostElement\", void 0);\nconst test = new Test();\ntest.prototype = {};\ntest.prototype._private = {\n    type: 'directive'\n};\nlet Thing = class Thing {\n    constructor() {\n        this.value = 'hey';\n    }\n    changeValue() {\n        this.value = prompt('ok');\n    }\n};\nThing = __decorate([\n    Object(_pangular_core__WEBPACK_IMPORTED_MODULE_0__[\"Component\"])({\n        selector: 'app-component',\n        declarations: [_a__WEBPACK_IMPORTED_MODULE_1__[\"A\"]],\n        template: ({ y, ctx, Fragment, Structural, d, m, children }) => y(Fragment, {}, [y('div', {}, ['' + ctx.value + '',]), y('input', {\n                '__directives': [test],\n                'onInput': $event => ctx.value = $event.target.value,\n                'value': ctx.value\n            }, []),])\n    })\n], Thing);\n\n// @Component<Thing>({\n//   template: ({ state, h }) => <div>\n//     <Render component={A} />\n//     <div>\n//       {state.items.map(item => <div>{item}</div>)}\n//     </div>\n//     <button onClick={() => state.update()}></button>\n//   </div>\n// })\n// export class Thing {\n//   items = ['one']\n//   update() {\n//     const v = prompt('Add item')\n//     this.items.push(v)\n//   }\n// }\n\n\n//# sourceURL=webpack:///./src/thing.tsx?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/main.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /Users/davidalsh/Desktop/pangular-rw/public/src/main.tsx */\"./src/main.tsx\");\n\n\n//# sourceURL=webpack:///multi_./src/main.tsx?");

/***/ })

/******/ });