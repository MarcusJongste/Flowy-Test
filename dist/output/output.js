"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = output;
const error_1 = __importDefault(require("./error"));
const logger_1 = __importDefault(require("./logger"));
function output(config, testResults) {
    const { throwErrors, logInConsole } = config;
    if (logInConsole) {
        (0, logger_1.default)(testResults);
    }
    if (throwErrors) {
        (0, error_1.default)(testResults);
    }
}
//# sourceMappingURL=output.js.map