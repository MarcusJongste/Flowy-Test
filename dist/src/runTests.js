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
    if (process.env.REACT_APP_NODE_ENV === 'development') {
        // for each namespace
        return Promise.all(Object.entries(testFiles).map(([namespace, modules]) => {
            // for each module
            return Promise.all(Object.entries(modules).map(([module, functions]) => {
                // for each function
                return Promise.all(Object.entries(functions).map(([func, unitTests]) => {
                    // no tests found
                    if (unitTests.unitTests === undefined) {
                        return Promise.resolve({});
                    }
                    // running tests
                    return runUnitTestCollection(unitTests, func)
                        .then((unitTestResult) => {
                        // return unitTests testResult array per Func
                        return { [func]: unitTestResult };
                    });
                }))
                    .then((functionsResult) => {
                    // merge array of Functions test results into a module testResult
                    return { [module]: functionsResult.reduce((a, b) => { return { ...a, ...b }; }, {}) };
                });
            }))
                .then((modulesResult) => {
                // merge array of module testResults into a Namespace testResult
                return { [namespace]: modulesResult.reduce((a, b) => { return { ...a, ...b }; }) };
            });
        }))
            .then((namespaceResult) => {
            // merge array of namespace results into final testResult
            return namespaceResult.reduce((a, b) => { return { ...a, ...b }; });
        });
    }
    return Promise.resolve({});
}
/**
 * runUnitTestCollection does each unitTest in order and only completes the next one after previous ended
 * @param unitTestFile ( testFiles
 * @param label function name
 * @param count current unitTest array index
 */
function runUnitTestCollection(unitTestFile, label, count = 0) {
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
                return Promise.resolve(runUnitTestCollection(unitTestFile, label, count))
                    .then((endResult) => {
                    return [verifiedResult, ...endResult];
                });
            }
            // return if completed
            return [verifiedResult];
        });
    });
}
