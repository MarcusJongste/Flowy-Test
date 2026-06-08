"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = searchDir;
/**
 * searchDir goes through each given directory and fetches all functions
 * @param {string[]} searchPaths each path to search
 * @param {string[]} extensions all extensions to include
 * @param {RegExp[]} ignore regexes which show which file/filetypes to ignore
 * @returns
 */
function searchDir(searchPaths, extensions, testFilePattern, ignore = []) {
    return Promise.all(searchPaths.map((searchPath) => {
        //get all directories from each given path
        const context = require.context(searchPath, true);
        // loop through directories
        return Promise.all(Object.entries(context)
            .map(([filePath, value]) => {
            const splitPath = filePath.split('/'), fileName = splitPath[splitPath.length - 1];
            // if not on ignore list
            if (!ignore.some(ig => ig.test(fileName))) {
                // if extension is correct or test file
                if (extensions.some(extension => new RegExp(String.raw `\s${extension}$\s`).test(fileName)) || testFilePattern.test(fileName)) {
                    // it's a matching file
                    return context(filePath)
                        .then((mod) => {
                        return {
                            [filePath]: {
                                [fileName]: mod
                            }
                        };
                    });
                }
            }
            return Promise.resolve(undefined);
        })) // remove undefined and merge results
            .then((mods) => {
            return {
                [searchPath]: mods
                    .filter((mod) => !!mod)
                    .reduce((ret, b) => {
                    return { ...ret, ...b };
                }, {})
            };
        });
    })).then((namespaceArray) => {
        return namespaceArray.reduce((ret, namespace) => {
            return { ...ret, ...namespace };
        });
    });
}
//# sourceMappingURL=getTestDataBrowser.js.map