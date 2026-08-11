import {  fileSearchResults, unitTest, type testFiles, test } from '../types';

interface tempTestFile {
    testFiles: test,
    fFiles: {
        [k: string]: Function
    }
}

//interface of namespaces needed
function createTestFiles(searchResults: fileSearchResults, testFilePattern: RegExp): Promise<testFiles> {

    // each directory passed from config dirs
    return Promise.all(Object.entries(searchResults).map(([searchDir, folders]) => {
        console.log(`checking testFiles for dir${searchDir}`);
        return Promise.resolve(Object.entries(folders).reduce((retDir: tempTestFile, [fullPath, module]): tempTestFile => {
            const fileName = fullPath.substring(fullPath.lastIndexOf('\\')+1),
                folderName = fullPath.substring(0, fullPath.lastIndexOf('\\'));
            Object.entries(module).forEach(([key, exp]: [string, any]) => {
                if (isTest(testFilePattern, exp, fileName)) {
                    Object.entries(exp).forEach(([functionName, unitTest]: [string, unitTest[]]) => {
                        retDir.testFiles[`${folderName}\\${functionName}`] = retDir.testFiles[`${folderName}\\${functionName}`] ? [...retDir.testFiles[`${folderName}\\${functionName}`], ...unitTest] : unitTest;
                    });
                } else if (typeof exp === 'function') {// currently like this
                    const realKey = exp.name ?? fileName.substring(0,fileName.indexOf('.'));
                    // if function
                    retDir.fFiles[`${fullPath}\\${realKey}`] = exp;
                }
            });
            return retDir;
        }, { testFiles: {}, fFiles: {}}))
            .then((filteredExport) => {
                return Object.entries(filteredExport.testFiles).reduce((testFile: testFiles, [pathName, unitTest]): testFiles => {
                    const functionName = pathName.substring(pathName.lastIndexOf('\\') + 1),
                        functionMatcher = new RegExp(`${functionName}$`),
                        func = Object.keys(filteredExport.fFiles).filter(key => functionMatcher.test(key));
                    if (func.length > 1) {
                        throw new Error(`Found duplicate function ${functionName}`);
                    }
                    if (func && func.length > 0) {
                        console.log(`found testcases(${unitTest.length}) for ${functionName}`);
                        testFile[func[0]] = {
                            unitTests: unitTest,
                            v: filteredExport.fFiles[func[0]],
                            vName:functionName
                        }
                    }
                    return testFile;
                }, {});
            });
    }))
        .then((testFileArray: testFiles[]) => {
            return testFileArray.reduce((ret, testFile) => {
                return { ...ret, ...testFile };
            }, {})
        })
}


function isTest(testFilePattern: RegExp, module: test | { [k: string]: any }, fileName: string): module is test {
    return testFilePattern.test(fileName);
}
export {
    createTestFiles as default
}