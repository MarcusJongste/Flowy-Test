"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runTests;
const verifyOutput_1 = __importDefault(require("./verifyOutput"));
const runUnitTest_1 = __importDefault(require("./runUnitTest"));
const runAfterScript_1 = __importDefault(require("./runAfterScript"));
/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
function runTests(testFiles) {
    return Promise.all(Object.entries(testFiles).map(([functionName, functionTestFile]) => {
        return runUnitTestCollection(functionTestFile, functionName);
    }))
        .then((testResults) => {
        return testResults.reduce((ret, b) => {
            return [...ret, ...b];
        }, []);
    });
}
/**
 * runUnitTestCollection does each unitTest in order and only completes the next one after previous ended
 * @param unitTestFile ( testFiles
 * @param label function name
 * @param count current unitTest array index
 */
function runUnitTestCollection(unitTestFile, functionName, count = 0) {
    const { f, unitTests } = unitTestFile;
    return Promise.resolve((0, runUnitTest_1.default)(unitTests[count], f))
        .then((unitTestResult) => {
        const verifiedResult = (0, verifyOutput_1.default)(unitTestResult, unitTests[count]);
        return Promise.resolve((0, runAfterScript_1.default)(unitTests[count].afterScript))
            .then(() => {
            // increase count
            count++;
            // trigger next if more exist
            if (unitTests.length > count) {
                return Promise.resolve(runUnitTestCollection(unitTestFile, functionName, count))
                    .then((endResult) => {
                    return [verifiedResult, ...endResult];
                });
            }
            // return if completed
            return [verifiedResult];
        });
    });
}
//# sourceMappingURL=runTests.js.map