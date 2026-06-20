import { fileSearchResults, type testFile } from '../types';
interface testFiles {
    [k: string]: testFile;
}
declare function createTestFiles(searchResults: fileSearchResults, testFilePattern: RegExp): Promise<testFiles>;
export { createTestFiles as default };
//# sourceMappingURL=sortModuleExportToTestFile.d.ts.map