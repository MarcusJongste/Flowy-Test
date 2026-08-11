import { type testResults, type testResult, type testFiles, Config } from '../types';
import runUnitTest from './runUnitTest';
import typeValidation from './typeValidation';

/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
function runTests(config: Config, testFiles: testFiles): Promise<testResults> {
    return Promise.all(Object.entries(testFiles).map(([fullPath, testFile]) => {
        return runUnitTest(config, typeValidation(testFile), testFile)
            .then((unitTestResults: testResult[]): testResults => {
           
                return {
                    unitTestResults: { [fullPath]: unitTestResults },
                    numberOfTestsRan: unitTestResults.length,
                    numberOfSuccess: unitTestResults.reduce((a, b) => { return b.result === 'success' ? a + 1 : a; }, 0),
                    numberOfFailure: unitTestResults.reduce((a, b) => { return b.result === 'failure' ? a + 1 : a; }, 0),
            }
            })
    }))
        .then((unitTestResults: testResults[]) => {
            return unitTestResults.reduce((a: testResults, b) => {
                return {
                    unitTestResults: { ...a.unitTestResults, ...b.unitTestResults },
                    numberOfTestsRan: a.numberOfTestsRan + b.numberOfTestsRan,
                    numberOfSuccess: a.numberOfSuccess + b.numberOfSuccess,
                    numberOfFailure: a.numberOfFailure  + b.numberOfFailure,
                };
            }, {
                unitTestResults: {},
                numberOfFailure: 0,
                numberOfSuccess: 0,
                numberOfTestsRan:0
            });
        })
}

export {
    runTests as default
}