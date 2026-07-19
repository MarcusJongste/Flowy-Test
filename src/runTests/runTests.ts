import { type testResults, type testResult, type testFiles, type flowytestResult, Config } from '../types';
import runUnitTest from './runUnitTest';
import typeValidation from './typeValidation';

/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
function runTests(config: Config, testFiles: testFiles): Promise<testResults> {
    return Promise.all(Object.entries(testFiles).map(([fullPath, testFile]) => {
        return runUnitTest(config, typeValidation(config, testFile), testFile)
            .then((unitTestResults: testResult[]): testResults => {
                return {
                    unitTestResults: { [fullPath]: unitTestResults },
                    numberOfTestsRan: unitTestResults.length,
                    numberOfSuccess: unitTestResults.reduce((a, b) => { return b.outcome === 'success' ? a + 1 : a; }, 0),
                    numberOfFailure: unitTestResults.reduce((a, b) => { return b.outcome === 'failure' ? a + 1 : a; }, 0),
            }
            })
    }))
        .then((unitTestResults: testResults[]) => {
            return unitTestResults.reduce((a, b) => {
                return {
                    unitTestResults: { ...a.unitTestResults, ...b.unitTestResults },
                    numberOfTestsRan: (a.numberOfTestsRan || 0) + b.numberOfTestsRan,
                    numberOfSuccess: (a.numberOfSuccess || 0) + b.numberOfSuccess,
                    numberOfFailure: (a.numberOfFailure || 0) + b.numberOfFailure,
                };
            });
        })
}

export {
    runTests as default
}