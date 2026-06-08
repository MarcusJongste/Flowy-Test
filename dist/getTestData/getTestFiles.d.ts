import { type Config, type testFile } from '../types';
/**
 * getTestFiles goes through all dirs and retrieves all functions with their respective fullPath and unitTests
 * @param config the config file as defined
 * @returns {Promise<{testFile}>} Promise which will return an object with testFiles
 */
declare function getTestFiles(config: Config, searchDir: Function): Promise<{
    [k: string]: Map<string, testFile>;
}>;
export { getTestFiles as default };
//# sourceMappingURL=getTestFiles.d.ts.map