"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestResult;
const validateOutcome_1 = __importDefault(require("./validateOutcome"));
function createTestResult({ name, expectedOutcome, expectedSource }, realOutcome, result = 'result') {
    const outcome = (0, validateOutcome_1.default)(expectedOutcome, expectedSource, realOutcome, result);
    console.log(`creating test result ${outcome}`);
    return {
        outcomeMsg: `UnitTest(${name}) has ${outcome}, \nexpected:${expectedOutcome} \nactual:${realOutcome}`,
        outcome,
        expectedOutcome,
        realOutcome,
    };
}
//# sourceMappingURL=createTestResult.js.map