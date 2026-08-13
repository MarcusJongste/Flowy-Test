import { fileSearchResults, type testFiles } from '../types';
/**
 * createTestFiles gets the found files, and matches tests with the correct variables which should be tested
 * @param {fileSearchResults} searchResults the results of the search containing all eligible files
 * @param {RegExp} testFilePattern regular expression which determines testfiles from other.
 * @returns {Promise<testFiles>} a promise to return testFiles an object with all functions and tests matched and combined.
 */
declare function createTestFiles(searchResults: fileSearchResults, testFilePattern: RegExp): Promise<testFiles>;
export { createTestFiles as default };
//# sourceMappingURL=sortModuleExportToTestFile.d.ts.map