
(function(modules) { // webpackBootstrap
	// The module cache
	var installedModules = {};
  // The require function
  // 所谓的模块化
	function __webpack_require__(moduleId) {
		// Check if module is in cache
		if(installedModules[moduleId]) {
			return installedModules[moduleId].exports;
		}
		// Create a new module (and put it into the cache)
		var module = installedModules[moduleId] = {
			i: moduleId,
			l: false,
			exports: {}
		};
		// Execute the module function
		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		// Flag the module as loaded
		module.l = true;q
		// Return the exports of the module
		return module.exports;
	}

	// Load entry module and return exports
	return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
 "./src/a.js":(function(module, exports) {

eval("module.exports = (name)=>{\n    console.log('hello '+name)\n}\n\n//# sourceURL=webpack:///./src/a.js?");

}),

"./src/index.js":(function(module, exports, __webpack_require__) {

eval("\nconst sayHi = __webpack_require__(/*! ./a.js */ \"./src/a.js\")\n\n\nsayHi('开课吧')\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

});


// index.js 依赖a.js
// let hi = require('./a')
// hi('开课吧')

// a.js
// module.exports = function(name){}
// console.log(name)