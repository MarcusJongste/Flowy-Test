"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const getTestFiles_1 = __importDefault(require("./getTestData/getTestFiles"));
const getTestDataNode_1 = __importDefault(require("./getTestData/getTestDataNode"));
const path = __importStar(require("path"));
const url_1 = require("url");
const rootPath = path.resolve(__dirname, '..');
const configAuto = path.resolve(rootPath, 'flowytest.config.js');
console.log('starting node test');
const flowytest = Promise.resolve(Promise.resolve(`${(0, url_1.pathToFileURL)(configAuto).href}`).then(s => __importStar(require(s))))
    .then((finalConf) => {
    return (0, getTestFiles_1.default)(finalConf.default, getTestDataNode_1.default)
        .then((testResult) => {
        console.log(testResult);
    });
});
exports.default = flowytest;
//# sourceMappingURL=node.js.map