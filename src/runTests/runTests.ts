import { type testResults, type testResult, type testFiles, type testFile, Config } from '../types';
import runUnitTest from './runUnitTest';
import typeValidation from './typeValidation';

/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
function runTests(config: Config, testFiles: testFiles): Promise<testResults> {
    console.log('testFiles', testFiles);
    return Promise.all(Object.entries(testFiles).map(([fullPath, testFile]) => {
        return runUnitTest(config, typeValidation(config, testFile), testFile)
            .then((unitTestResults:testResult[]) => {
                return {[fullPath]:unitTestResults}
            })
    }))
        .then((unitTestResults: testResults[]) => {
            return unitTestResults.reduce((a, b) => {
                return {...a, ...b};
            });
        })
}

export {
    runTests as default
}