import sortModuleExportToTestFile from './sortModuleExportToTestFile';
import { type Config, type testFiles, type fileSearchResults } from '../types';
/**
 * getTestFiles goes through all dirs and retrieves all functions with their respective fullPath and unitTests
 * @param config the config file as defined
 * @returns {Promise<{testFile}>} Promise which will return an object with testFiles
 */
function getTestFiles(config: Config,searchDir:Function): Promise<testFiles> {
    const dirs = config.dirs;
    console.log(`dirs : ${dirs.length}`);
    const extensions = config.extensions ?? ['.ts'];
    const ignore = config.ignore ?? [];
    const testFilePattern = config.testFilePattern ?? /\.test\.ts$/;

    return searchDir(dirs, extensions, testFilePattern, ignore)
        .then((allFiles: fileSearchResults) => {
            return sortModuleExportToTestFile(allFiles, testFilePattern)
        });

}

export {
    getTestFiles as default
}