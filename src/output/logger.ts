import { testResults } from "../types";

function logger(testResults: testResults): void {
    Object.entries(testResults.unitTestResults).forEach(([fullPath, testResult]) => {
        const failedTestResults = testResult.filter(result => result.outcome === 'failure');
        if (failedTestResults.length > 0) {
            console.log(`Testcases(${failedTestResults.length}) failed for ${fullPath}`);
            failedTestResults.forEach(result => console.log(result.message));
        }
    });
    console.log(`Ran (${testResults.numberOfTestsRan}) | success:${testResults.numberOfSuccess} | failure:${testResults.numberOfFailure}`);
}

export {
    logger as default
}