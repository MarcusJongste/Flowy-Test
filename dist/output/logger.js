"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logger;
function logger(testResults) {
    Object.entries(testResults.unitTestResults).forEach(([fullPath, testResult]) => {
        const failedTestResults = testResult.filter(result => result.result === 'failure');
        if (failedTestResults.length > 0) {
            console.log(`Testcases(${failedTestResults.length}) failed for ${fullPath}`);
            failedTestResults.forEach(result => console.log(result.message));
        }
    });
    console.log(`Ran (${testResults.numberOfTestsRan}) | success:${testResults.numberOfSuccess} | failure:${testResults.numberOfFailure}`);
}
//# sourceMappingURL=logger.js.map