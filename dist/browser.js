"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const getTestFiles_1 = __importDefault(require("./getTestData/getTestFiles"));
const getTestDataBrowser_1 = __importDefault(require("./getTestData/getTestDataBrowser"));
const flowyTest = {
    unitTest: (config) => {
        console.log((0, getTestFiles_1.default)(config, getTestDataBrowser_1.default));
    }
};
exports.default = flowyTest;
//# sourceMappingURL=browser.js.map