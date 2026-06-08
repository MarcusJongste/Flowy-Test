"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const root_1 = __importDefault(require("./root"));
const verificationCode_1 = __importDefault(require("./verificationCode"));
const error_1 = __importDefault(require("./error"));
const return_1 = __importDefault(require("./return"));
const sourceTests = {
    root: root_1.default,
    verificationCode: verificationCode_1.default,
    error: error_1.default,
    return: return_1.default
};
exports.default = sourceTests;
