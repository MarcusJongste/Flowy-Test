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
 * @param {Config} config
 * @param {Function} v the actual function to be tested
 * @param {string} vName the name of the variable for label/outcomeMSg
 * @param {unitTest[]} unitTests an array of unitTests
 * @returns {Promise<testResult[]} an array of results from the tests passed
 */
function functionValidation(preDefinedVariables, v, unitTest) {
    const { scenarios } = unitTest;
    const useThis = (scenarios === null || scenarios === void 0 ? void 0 : scenarios.this) ? preDefinedVariables[scenarios.this] : undefined;
    console.log('validating function', useThis ? 'using this' : 'not using this');
    return Promise.resolve(v.call(useThis, ...(unitTest.params || [])))
        .then((result) => (0, createTestResult_1.default)(unitTest, result))
        .catch((error) => (0, createTestResult_1.default)(unitTest, error, 'error'));
}
//# sourceMappingURL=functionValidation.js.map