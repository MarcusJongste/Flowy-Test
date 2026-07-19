"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = functionValidation;
const createTestResult_1 = __importDefault(require("../createTestResult"));
/**
 * functionValidation is the test for functions, we run the function and either compare the
 * outcome (return), or run a validation function which returns true or false
 * @param {{[k:string]:any}} preDefinedVariables
 * @param {Function} v the actual function to be tested
 * @param {unitTest} unitTest the name of the variable for label/outcomeMSg
 * @returns {Promise<testResult[]} an array of results from the tests passed
 */
function functionValidation(preDefinedVariables, v, unitTest) {
    const { scenarios } = unitTest;
    const useThis = (scenarios === null || scenarios === void 0 ? void 0 : scenarios.this) ? preDefinedVariables[scenarios.this] : undefined;
    return new Promise((resolve) => { v.call(useThis, ...(unitTest.params || [])); })
        .then((result) => (0, createTestResult_1.default)(unitTest, result))
        .catch((error) => (0, createTestResult_1.default)(unitTest, error, 'error'));
}
//# sourceMappingURL=functionValidation.js.map