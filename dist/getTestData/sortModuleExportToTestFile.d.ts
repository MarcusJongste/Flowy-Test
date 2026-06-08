import { fileSearchResults, type testFile } from '../types';
declare function createTestFiles(searchResults: fileSearchResults, testFilePattern: RegExp): {
    [k: string]: Map<string, testFile>;
};
export { createTestFiles as default };
//# sourceMappingURL=sortModuleExportToTestFile.d.ts.map