"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestFiles;
//interface of namespaces needed
function createTestFiles(searchResults, testFilePattern) {
    var _a;
    const ret = {};
    for (const [searchDir, files] of Object.entries(searchResults)) {
        const testMap = new Map();
        for (const [fileName, file] of Object.entries(files)) {
            for (const [module, obj] of Object.entries(file)) {
                const mapValue = (_a = testMap.get(fileName)) !== null && _a !== void 0 ? _a : {
                    f: () => { }, unitTests: []
                };
                // is testFile
                if (testFilePattern.test(fileName)) {
                    mapValue.unitTests = [...mapValue.unitTests, ...obj];
                }
                else {
                    if (typeof obj === 'function') {
                        mapValue.f = obj;
                    }
                }
                testMap.set(fileName, mapValue);
            }
        }
        ret[searchDir] = testMap;
    }
    return ret;
}
//# sourceMappingURL=sortModuleExportToTestFile.js.map