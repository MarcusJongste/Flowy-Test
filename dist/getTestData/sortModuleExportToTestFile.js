"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createTestFiles;
//interface of namespaces needed
function createTestFiles(searchResults, testFilePattern) {
    // each directory passed from config dirs
    return Promise.all(Object.entries(searchResults).map(([searchDir, folders]) => {
        console.log(`checking testFiles for dir ${searchDir} (${Object.keys(folders).length})`);
        return Promise.resolve(Object.entries(folders).reduce((retDir, [fullPath, module]) => {
            const fileName = fullPath.substring(fullPath.lastIndexOf('\\') + 1), folderName = fullPath.substring(0, fullPath.lastIndexOf('\\'));
            Object.entries(module).forEach(([key, exp]) => {
                if (isTest(testFilePattern, exp, fileName)) {
                    Object.entries(exp).forEach(([functionName, unitTest]) => {
                        retDir.testFiles[`${folderName}\\${functionName}`] = retDir.testFiles[`${folderName}\\${functionName}`] ? [...retDir.testFiles[`${folderName}\\${functionName}`], ...unitTest] : unitTest;
                    });
                }
                else if (typeof exp === 'function') { // currently like this
                    const realKey = exp.name ?? fileName.substring(0, fileName.indexOf('.'));
                    // if function
                    retDir.fFiles[`${fullPath}\\${realKey}`] = exp;
                }
            });
            return retDir;
        }, { testFiles: {}, fFiles: {} }))
            .then((filteredExport) => {
            console.log('filteredExport size:', searchDir, Object.keys(filteredExport.testFiles).length);
            return Object.entries(filteredExport.testFiles).reduce((testFile, [pathName, unitTest]) => {
                const functionName = pathName.substring(pathName.lastIndexOf('\\') + 1), functionMatcher = new RegExp(`${functionName}$`), func = Object.keys(filteredExport.fFiles).filter(key => functionMatcher.test(key));
                if (func.length > 1) {
                    throw new Error(`Found duplicate function ${functionName}`);
                }
                if (func && func.length > 0) {
                    console.log(`found testcases(${unitTest.length}) for ${functionName}`);
                    testFile[func[0]] = {
                        unitTests: unitTest,
                        v: filteredExport.fFiles[func[0]],
                        vName: functionName
                    };
                }
                else {
                    console.log(`no matching testcases for ${pathName}`);
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