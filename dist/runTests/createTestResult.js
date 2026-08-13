"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestResult;
const validateOutcome_1 = __importDefault(require("./validateOutcome"));
function createTestResult({ name, expectedOutcome, expectedSource }, realOutcome, result = 'result') {
    if (typeof expectedOutcome === 'function') {
        return createTestResult({
            expectedOutcome: expectedOutcome(),
            name,
            expectedSource
        }, realOutcome, result);
    }
    const outcome = (0, validateOutcome_1.default)(expectedOutcome, expectedSource, realOutcome, result);
    return {
        message: `UnitTest(${name}) has ${outcome}, \nexpected:${expectedOutcome} \nactual:${realOutcome}`,
        result: outcome,
        source: result,
        expected: expectedOutcome,
        outcome: realOutcome,
    };
}
//# sourceMappingURL=createTestResult.js.map