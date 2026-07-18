"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const functionValidation_1 = __importDefault(require("./functionValidation"));
const invalidValidation_1 = __importDefault(require("../invalidValidation"));
/**
 * runs unitTests per type
 * @param {testFile} testFile for this variable
 * @returns {Promise<testResult[]>} the results of unitTests or one result saying invalid type
 */
const typeValidation = (config, { v, vName }) => {
    if (typeof v === 'function') {
        return functionValidation_1.default;
    }
    return () => { [(0, invalidValidation_1.default)(vName, typeof v)]; };
};
exports.default = typeValidation;
//# sourceMappingURL=typeValidation.js.map