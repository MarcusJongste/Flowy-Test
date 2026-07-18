import sortModuleExportToTestFile from './sortModuleExportToTestFile';
import { type Config, type testFiles, type fileSearchResults } from '../types';
/**
 * getTestFiles goes through all dirs and retrieves all functions with their respective fullPath and unitTests
 * @param config the config file as defined
 * @returns {Promise<{testFile}>} Promise which will return an object with testFiles
 */
function getTestFiles({ dirs, extensions, testFilePattern, ignore }: Config, searchDir: Function): Promise<testFiles> {

    return searchDir(dirs, extensions, testFilePattern, ignore)
        .then((allFiles: fileSearchResults) => {
            return sortModuleExportToTestFile(allFiles, testFilePattern)
        });

}

export {
    getTestFiles as default
}