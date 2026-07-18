import { type testResults, type testFiles, Config } from '../types';
/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
declare function runTests(config: Config, testFiles: testFiles): Promise<testResults>;
export { runTests as default };
//# sourceMappingURL=runTests.d.ts.map