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
    console.log('testFiles', testFiles);
    return Promise.all(Object.entries(testFiles).map(([fullPath, testFile]) => {
        return (0, runUnitTest_1.default)(config, (0, typeValidation_1.default)(config, testFile), testFile)
            .then((unitTestResults) => {
            return { [fullPath]: unitTestResults };
        });
    }))
        .then((unitTestResults) => {
        return unitTestResults.reduce((a, b) => {
            return { ...a, ...b };
        });
    });
}
//# sourceMappingURL=runTests.js.map