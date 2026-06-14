"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestFiles;
//interface of namespaces needed
function createTestFiles(searchResults, testFilePattern) {
    var _a, _b;
    const ret = {};
    let testFiles = {};
    console.log(searchResults);
    // each directory passed from config dirs
    for (const [searchDir, files] of Object.entries(searchResults)) {
        const retDir = {};
        // each file found in this dir
        for (const [fullPath, file] of Object.entries(files)) {
            // filter out the folder
            const folder = (_b = (_a = /.+\\/.exec(fullPath)) === null || _a === void 0 ? void 0 : _a.at(-1)) !== null && _b !== void 0 ? _b : 'UNKNOWN', testFile = testFilePattern.test(fullPath);
            // for each export in module
            for (const [exportName, variable] of Object.entries(file)) {
                // check if entry exists for module name else create new entry
                retDir[folder] = retDir[folder] || {};
                // is testFile
                if (testFile) {
                    console.log(`testFile : ${exportName}`);
                    testFiles = { ...testFiles, ...variable };
                }
                else {
                    // if function create a testFile
                    if (typeof variable === 'function') {
                        console.log(`${exportName} registrated under ${folder}`);
                        retDir[folder][exportName] = { f: variable, unitTests: [] };
                    }
                }
            }
            for (const [testFuncName, unitTests] of Object.entries(testFiles)) {
                for (const [funcName, testFile] of Object.entries(retDir[folder])) {
                    if (testFuncName === funcName) {
                        // if we found the function for matching unitTests then assign them and delete from unitTest object
                        testFile.unitTests = [...testFile.unitTests, ...unitTests];
                        delete testFiles[testFuncName];
                        break;
                    }
                }
            }
        }
        ret[searchDir] = retDir;
    }
    console.log(ret);
    return ret;
}
//# sourceMappingURL=sortModuleExportToTestFile.js.map