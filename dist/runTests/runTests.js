"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTests;
const runUnitTest_1 = __importDefault(require("./runUnitTest"));
const typeValidation_1 = __importDefault(require("./typeValidation"));
/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
function runTests(config, testFiles) {
    return Promise.all(Object.entries(testFiles).map(([fullPath, testFile]) => {
        return (0, runUnitTest_1.default)(config, (0, typeValidation_1.default)(config, testFile), testFile)
            .then((unitTestResults) => {
            return {
                unitTestResults: { [fullPath]: unitTestResults },
                numberOfTestsRan: unitTestResults.length,
                numberOfSuccess: unitTestResults.reduce((a, b) => { return b.outcome === 'success' ? a + 1 : a; }, 0),
                numberOfFailure: unitTestResults.reduce((a, b) => { return b.outcome === 'failure' ? a + 1 : a; }, 0),
            };
        });
    }))
        .then((unitTestResults) => {
        return unitTestResults.reduce((a, b) => {
            return {
                unitTestResults: { ...a.unitTestResults, ...b.unitTestResults },
                numberOfTestsRan: (a.numberOfTestsRan || 0) + b.numberOfTestsRan,
                numberOfSuccess: (a.numberOfSuccess || 0) + b.numberOfSuccess,
                numberOfFailure: (a.numberOfFailure || 0) + b.numberOfFailure,
            };
        });
    });
}
//# sourceMappingURL=runTests.js.map