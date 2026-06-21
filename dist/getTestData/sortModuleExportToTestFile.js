"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestFiles;
//interface of namespaces needed
function createTestFiles(searchResults, testFilePattern) {
    // each directory passed from config dirs
    return Promise.all(Object.entries(searchResults).map(([searchDir, folders]) => {
        return Promise.resolve(Object.entries(folders).reduce((retDir, [fullPath, module]) => {
            const fileName = fullPath.substring(fullPath.lastIndexOf('\\') + 2), folderName = fullPath.substring(0, fullPath.lastIndexOf('\\'));
            Object.entries(module).forEach(([key, exp]) => {
                var _a, _b;
                if (isTest(testFilePattern, exp, fileName)) {
                    Object.entries(exp).forEach(([functionName, unitTest]) => {
                        retDir.testFiles[`${folderName}\\${functionName}`] = retDir.testFiles[`${folderName}\\${functionName}`] ? [...retDir.testFiles[`${folderName}\\${functionName}`], ...unitTest] : unitTest;
                    });
                }
                else if (typeof exp === 'function') {
                    const realKey = key === 'default' ? (_b = (_a = /[^.]+/.exec(fileName)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : fileName : key;
                    // if function
                    retDir.fFiles[`${fullPath}\\${realKey}`] = exp;
                }
            });
            return retDir;
        }, { testFiles: {}, fFiles: {} }))
            .then((filteredExport) => {
            return Object.entries(filteredExport.testFiles).reduce((testFile, [pathName, unitTest]) => {
                const functionName = pathName.substring(pathName.lastIndexOf('\\') + 2), folderName = pathName.substring(0, pathName.lastIndexOf('\\')), functionMatcher = new RegExp(`${folderName}.*${functionName}$`), func = Object.keys(filteredExport.fFiles).find(key => functionMatcher.test(key));
                console.log(filteredExport.fFiles);
                console.log(pathName);
                console.log(`paths:${folderName} - ${functionName}`);
                console.log(`func:${func}`);
                if (func) {
                    testFile[func] = {
                        unitTests: unitTest,
                        f: filteredExport.fFiles[func]
                    };
                }
                return testFile;
            }, {});
        });
    }))
        .then((testFileArray) => {
        return testFileArray.reduce((ret, testFile) => {
            console.log('testFile:');
            console.log(testFile);
            return { ...ret, ...testFile };
        }, {});
    });
}
function isTest(testFilePattern, module, fileName) {
    return testFilePattern.test(fileName);
}
//# sourceMappingURL=sortModuleExportToTestFile.js.map