import { fileSearchResults, type testFile } from '../types';
interface testFiles {
    [k: string]: searchDirTestFiles;
}
interface searchDirTestFiles {
    [k: string]: {
        [k: string]: testFile;
    };
}
declare function createTestFiles(searchResults: fileSearchResults, testFilePattern: RegExp): testFiles;
export { createTestFiles as default };
//# sourceMappingURL=sortModuleExportToTestFile.d.ts.map