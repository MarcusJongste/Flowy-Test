import { type fileSearchResults } from '../types';
/**
 * searchDir goes through each given directory and fetches all functions
 * @param {string[]} searchPaths each path to search
 * @param {string[]} extensions all extensions to include
 * @param {RegExp[]} ignore regexes which show which file/filetypes to ignore
 * @returns
 */
declare function searchDir(searchPaths: Array<string>, extensions: Array<string>, testFilePattern: RegExp, ignore?: Array<RegExp>): Promise<fileSearchResults>;
export { searchDir as default };
//# sourceMappingURL=getTestDataNode.d.ts.map