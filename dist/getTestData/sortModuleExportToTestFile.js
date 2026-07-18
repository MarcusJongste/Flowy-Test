"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestFiles;
//interface of namespaces needed
function createTestFiles(searchResults, testFilePattern) {
    // each directory passed from config dirs
    return Promise.all(Object.entries(searchResults).map(([searchDir, folders]) => {
        return Promise.resolve(Object.entries(folders).reduce((retDir, [fullPath, module]) => {
            const fileName = fullPath.substring(fullPath.lastIndexOf('\\') + 1), folderName = fullPath.substring(0, fullPath.lastIndexOf('\\'));
            Object.entries(module).forEach(([key, exp]) => {
                var _a;
                if (isTest(testFilePattern, exp, fileName)) {
                    Object.entries(exp).forEach(([functionName, unitTest]) => {
                        retDir.testFiles[`${folderName}\\${functionName}`] = retDir.testFiles[`${folderName}\\${functionName}`] ? [...retDir.testFiles[`${folderName}\\${functionName}`], ...unitTest] : unitTest;
                    });
                }
                else if (typeof exp === 'function') { // currently like this
                    const realKey = (_a = exp.name) !== null && _a !== void 0 ? _a : fileName.substring(0, fileName.indexOf('.'));
                    // if function
                    retDir.fFiles[`${fullPath}\\${realKey}`] = exp;
                }
            });
            return retDir;
        }, { testFiles: {}, fFiles: {} }))
            .then((filteredExport) => {
            console.log('filteredExport:', filteredExport);
            return Object.entries(filteredExport.testFiles).reduce((testFile, [pathName, unitTest]) => {
                const functionName = pathName.substring(pathName.lastIndexOf('\\') + 1), folderName = pathName.substring(0, pathName.lastIndexOf('\\')), functionMatcher = new RegExp(`${folderName}.*${functionName}$`), func = Object.keys(filteredExport.fFiles).find(key => functionMatcher.test(key));
                if (func) {
                    console.log(`matching testCase ${functionName}`);
                    testFile[func] = {
                        unitTests: unitTest,
                        v: filteredExport.fFiles[func],
                        vName: functionName
                    };
                }
                return testFile;
            }, {});
        });
    }))
        .then((testFileArray) => {
        return testFileArray.reduce((ret, testFile) => {
            return { ...ret, ...testFile };
        }, {});
    });
}
function isTest(testFilePattern, module, fileName) {
    return testFilePattern.test(fileName);
}
//# sourceMappingURL=sortModuleExportToTestFile.js.map