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
                    const funcPath = `${folderName}\\${fileName}\\`;
                    // if testFile
                    if (isTest(testFilePattern, exp, fileName)) {
                        Object.entries(exp).forEach(([functionName, unitTest]) => {
                            retDir.testFiles[`${funcPath}${functionName}`] = retDir.testFiles[`${funcPath}${functionName}`] ? [...retDir.testFiles[`${funcPath}${functionName}`], ...unitTest] : unitTest;
                        });
                    }
                    else if (typeof exp === 'function') {
                        // if function
                        retDir.fFiles[`${funcPath}${key}`] = exp;
                    }
                });
            }, {});
            return retDir;
        }, { testFiles: {}, fFiles: {} }))
            .then((filteredExport) => {
            return Object.entries(filteredExport.testFiles).reduce((testFile, [pathName, unitTest]) => {
                if (filteredExport.testFiles[pathName]) {
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