import {  fileSearchResults, type testFile } from '../types';

//interface of namespaces needed
function createTestFiles(searchResults: fileSearchResults, testFilePattern: RegExp): { [k: string]: Map<string, testFile> } {
    const ret: { [k: string]: Map<string, testFile> } = {};
    for (const [searchDir, files] of Object.entries(searchResults)) {
        const testMap = new Map<string, testFile>();
        for (const [fileName, file] of Object.entries(files)) {
            for (const [module, obj] of Object.entries(file)) {

                const mapValue = testMap.get(fileName) ?? {
                    f: () => { }, unitTests: []
                };
                // is testFile
                if (testFilePattern.test(fileName)) {
                    mapValue.unitTests = [...mapValue.unitTests, ...obj];
                } else {
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

export {
    createTestFiles as default
}