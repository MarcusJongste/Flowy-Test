/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getTestData/getTestDataBrowser.ts"
/*!***********************************************!*\
  !*** ./src/getTestData/getTestDataBrowser.ts ***!
  \***********************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = searchDir;\n/**\n * searchDir goes through each given directory and fetches all functions\n * @param {string[]} searchPaths each path to search\n * @param {string[]} extensions all extensions to include\n * @param {RegExp[]} ignore regexes which show which file/filetypes to ignore\n * @returns\n */\nfunction searchDir(searchPaths, extensions, testFilePattern, ignore = []) {\n    return Promise.all(searchPaths.map((searchPath) => {\n        //get all directories from each given path\n        const context = __webpack_require__(\"./src/getTestData sync recursive\").context(searchPath, true);\n        // loop through directories\n        return Promise.all(Object.entries(context)\n            .map(([filePath, value]) => {\n            const splitPath = filePath.split('/'), fileName = splitPath[splitPath.length - 1];\n            // if not on ignore list\n            if (!ignore.some(ig => ig.test(fileName))) {\n                // if extension is correct or test file\n                if (extensions.some(extension => new RegExp(String.raw `\\s${extension}$\\s`).test(fileName)) || testFilePattern.test(fileName)) {\n                    // it's a matching file\n                    return context(filePath)\n                        .then((mod) => {\n                        return {\n                            [filePath]: {\n                                [fileName]: mod\n                            }\n                        };\n                    });\n                }\n            }\n            return Promise.resolve(undefined);\n        })) // remove undefined and merge results\n            .then((mods) => {\n            return {\n                [searchPath]: mods\n                    .filter((mod) => !!mod)\n                    .reduce((ret, b) => {\n                    return { ...ret, ...b };\n                }, {})\n            };\n        });\n    })).then((namespaceArray) => {\n        return namespaceArray.reduce((ret, namespace) => {\n            return { ...ret, ...namespace };\n        });\n    });\n}\n\n\n//# sourceURL=webpack://flowy-test/./src/getTestData/getTestDataBrowser.ts?\n}");

/***/ },

/***/ "./src/getTestData/getTestFiles.ts"
/*!*****************************************!*\
  !*** ./src/getTestData/getTestFiles.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = getTestFiles;\nconst sortModuleExportToTestFile_1 = __importDefault(__webpack_require__(/*! ./sortModuleExportToTestFile */ \"./src/getTestData/sortModuleExportToTestFile.ts\"));\n/**\n * getTestFiles goes through all dirs and retrieves all functions with their respective fullPath and unitTests\n * @param config the config file as defined\n * @returns {Promise<{testFile}>} Promise which will return an object with testFiles\n */\nfunction getTestFiles(config, searchDir) {\n    var _a, _b, _c;\n    const dirs = config.dirs;\n    const extensions = (_a = config.extensions) !== null && _a !== void 0 ? _a : ['.ts'];\n    const ignore = (_b = config.ignore) !== null && _b !== void 0 ? _b : [];\n    const testFilePattern = (_c = config.testFilePattern) !== null && _c !== void 0 ? _c : /\\.test\\.ts$/;\n    return searchDir(dirs, extensions, testFilePattern, ignore)\n        .then((allFiles) => {\n        return (0, sortModuleExportToTestFile_1.default)(allFiles, testFilePattern);\n    });\n}\n\n\n//# sourceURL=webpack://flowy-test/./src/getTestData/getTestFiles.ts?\n}");

/***/ },

/***/ "./src/getTestData/sortModuleExportToTestFile.ts"
/*!*******************************************************!*\
  !*** ./src/getTestData/sortModuleExportToTestFile.ts ***!
  \*******************************************************/
(__unused_webpack_module, exports) {

"use strict";
eval("{\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = createTestFiles;\n//interface of namespaces needed\nfunction createTestFiles(searchResults, testFilePattern) {\n    var _a;\n    const ret = {};\n    for (const [searchDir, files] of Object.entries(searchResults)) {\n        const testMap = new Map();\n        for (const [fileName, file] of Object.entries(files)) {\n            for (const [module, obj] of Object.entries(file)) {\n                const mapValue = (_a = testMap.get(fileName)) !== null && _a !== void 0 ? _a : {\n                    f: () => { }, unitTests: []\n                };\n                // is testFile\n                if (testFilePattern.test(fileName)) {\n                    mapValue.unitTests = [...mapValue.unitTests, ...obj];\n                }\n                else {\n                    if (typeof obj === 'function') {\n                        mapValue.f = obj;\n                    }\n                }\n                testMap.set(fileName, mapValue);\n            }\n        }\n        ret[searchDir] = testMap;\n    }\n    return ret;\n}\n\n\n//# sourceURL=webpack://flowy-test/./src/getTestData/sortModuleExportToTestFile.ts?\n}");

/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("{\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = void 0;\nconst node_1 = __importDefault(__webpack_require__(/*! ./node */ \"./src/node.ts\"));\nexports[\"default\"] = node_1.default;\n\n\n//# sourceURL=webpack://flowy-test/./src/index.ts?\n}");

/***/ },

/***/ "./src/node.ts"
/*!*********************!*\
  !*** ./src/node.ts ***!
  \*********************/
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("{\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || (function () {\n    var ownKeys = function(o) {\n        ownKeys = Object.getOwnPropertyNames || function (o) {\n            var ar = [];\n            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;\n            return ar;\n        };\n        return ownKeys(o);\n    };\n    return function (mod) {\n        if (mod && mod.__esModule) return mod;\n        var result = {};\n        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== \"default\") __createBinding(result, mod, k[i]);\n        __setModuleDefault(result, mod);\n        return result;\n    };\n})();\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports[\"default\"] = exports.flowyTest = void 0;\nconst getTestFiles_1 = __importDefault(__webpack_require__(/*! ./getTestData/getTestFiles */ \"./src/getTestData/getTestFiles.ts\"));\nconst getTestDataBrowser_1 = __importDefault(__webpack_require__(/*! ./getTestData/getTestDataBrowser */ \"./src/getTestData/getTestDataBrowser.ts\"));\nconst path = __importStar(__webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'path'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())));\nconst configAuto = path.resolve(process.cwd(), 'flowy.config.ts');\nexports.flowyTest = {\n    unitTest: (config) => {\n        return Promise.resolve(config !== null && config !== void 0 ? config : Promise.resolve(`${configAuto}`).then(s => __importStar(__webpack_require__(\"./src sync recursive\")(s))))\n            .then((finalConf) => {\n            console.log((0, getTestFiles_1.default)(finalConf, getTestDataBrowser_1.default));\n        });\n    }\n};\nexports[\"default\"] = exports.flowyTest;\n\n\n//# sourceURL=webpack://flowy-test/./src/node.ts?\n}");

/***/ },

/***/ "./src/getTestData sync recursive"
/*!*******************************!*\
  !*** ./src/getTestData/ sync ***!
  \*******************************/
(module) {

eval("{function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/getTestData sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://flowy-test/./src/getTestData/_sync?\n}");

/***/ },

/***/ "./src sync recursive"
/*!*******************!*\
  !*** ./src/ sync ***!
  \*******************/
(module) {

eval("{function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = () => ([]);\nwebpackEmptyContext.resolve = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src sync recursive\";\nmodule.exports = webpackEmptyContext;\n\n//# sourceURL=webpack://flowy-test/./src/_sync?\n}");

/***/ }

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;