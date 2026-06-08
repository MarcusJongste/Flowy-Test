import { type testResult, type testFile } from './types';
/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
declare function runTests(testFiles: {
    [k: string]: testFile;
}): Promise<testResult[][]>;
export { runTests as default };
//# sourceMappingURL=runTests.d.ts.map