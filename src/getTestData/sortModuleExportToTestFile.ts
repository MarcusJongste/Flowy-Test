import {  fileSearchResults, unitTest, type testFiles, test } from '../types';

interface tempTestFile {
    testFiles: test,
    fFiles: {
        [k: string]: Function
    }
}

/**
 * createTestFiles gets the found files, and matches tests with the correct variables which should be tested 
 * @param {fileSearchResults} searchResults the results of the search containing all eligible files
 * @param {RegExp} testFilePattern regular expression which determines testfiles from other.
 * @returns {Promise<testFiles>} a promise to return testFiles an object with all functions and tests matched and combined.
 */
function createTestFiles(searchResults: fileSearchResults, testFilePattern: RegExp): Promise<testFiles> {

    // each directory passed from config dirs
    return Promise.all(Object.entries(searchResults).map(([searchDir, folders]) => {
        return Promise.resolve(Object.entries(folders).reduce((retDir: tempTestFile, [fullPath, module]): tempTestFile => {
            const fileName = fullPath.substring(fullPath.lastIndexOf('\\')+1),
                folderName = fullPath.substring(0, fullPath.lastIndexOf('\\'));
            Object.entries(module).forEach(([key, exp]: [string, any]) => {
                if (Object.keys(exp).length === 0) {
                    console.log(`Warning! module (${key}) is missing any export`);
                }
                if (isTest(testFilePattern, exp, fileName)) {
                    Object.entries(exp).forEach(([functionName, unitTest]: [string, unitTest[]]) => {
                        retDir.testFiles[`${folderName}\\${functionName}`] = retDir.testFiles[`${folderName}\\${functionName}`] ? [...retDir.testFiles[`${folderName}\\${functionName}`], ...unitTest] : unitTest;
                    });
                } else if (typeof exp === 'function') {// currently like this
                    const realKey = exp.name ?? fileName.substring(0, fileName.indexOf('.'));
                    // if function
                    retDir.fFiles[`${fullPath}\\${realKey}`] = exp;
                } else {
                    console.log('currently only handling functions not variables');
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
                            vName: functionName
                        }
                    } else {
                        console.log(`no matching testcases for ${pathName}`)
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