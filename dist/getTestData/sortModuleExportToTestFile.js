"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestFiles;
//interface of namespaces needed
function createTestFiles(searchResults, testFilePattern) {
    // each directory passed from config dirs
    return Promise.all(Object.entries(searchResults).map(([searchDir, folders]) => {
        // each folder found in this folders
        return Promise.resolve(Object.entries(folders).reduce((retDir, [folderName, modules]) => {
            Object.entries(modules).forEach(([fileName, module]) => {
                Object.entries(module).forEach(([key, exp]) => {
                    var _a, _b;
                    const funcPath = `${folderName}\\${fileName}\\`;
                    // if testFile
                    if (isTest(testFilePattern, exp, fileName)) {
                        Object.entries(exp).forEach(([functionName, unitTest]) => {
                            retDir.testFiles[`${funcPath}${functionName}`] = retDir.testFiles[`${funcPath}${functionName}`] ? [...retDir.testFiles[`${funcPath}${functionName}`], ...unitTest] : unitTest;
                        });
                    }
                    else if (typeof exp === 'function') {
                        const realKey = key === 'default' ? (_b = (_a = /[^.]+/.exec(fileName)) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : fileName : key;
                        // if function
                        retDir.fFiles[`${funcPath}${realKey}`] = exp;
                    }
                });
            }, {});
            return retDir;
        }, { testFiles: {}, fFiles: {} }))
            .then((filteredExport) => {
            return Object.entries(filteredExport.testFiles).reduce((testFile, [pathName, unitTest]) => {
                if (filteredExport.fFiles[pathName]) {
                    testFile[pathName] = {
                        unitTests: unitTest,
                        f: filteredExport.fFiles[pathName]
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