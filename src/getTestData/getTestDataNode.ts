import * as fs from 'fs';
import * as path from 'path';
import {type fileSearchResults } from '../types';
import { pathToFileURL } from 'url';
/**
 * searchDir goes through each given directory and fetches all functions
 * @param {string[]} searchPaths each path to search
 * @param {string[]} extensions all extensions to include
 * @param {RegExp[]} ignore regexes which show which file/filetypes to ignore
 * @returns
 */
function searchDir(searchPaths: Array<string>, extensions: Array<string>, testFilePattern: RegExp, ignore: Array<RegExp> = []): Promise<fileSearchResults> {

    return Promise.all(searchPaths.map((searchPath) => {
        //get all directories\files from each given path
        const dirs = fs.readdirSync(searchPath, { withFileTypes: true });
        // loop through directories
        return Promise.all(dirs.map((entry) => {
            // if not on ignore list
            if (!ignore.some(ig => ig.test(entry.name))) {
                // create fullPath
                const fullPath = path.join(searchPath, entry.name);
                // if it's a directory then search more
                if (entry.isDirectory()) {
                    return searchDir([fullPath], extensions, testFilePattern, ignore)
                        .then((searchResults) => {
                            return Object.entries(searchResults)?.[0]?.[1] ?? {};
                        })
                } else {
                    // if extension is correct
                    if (extensions.some(extension => new RegExp(String.raw`${extension}$`).test(entry.name)) || testFilePattern.test(entry.name)) {
                        // it's a matching file
                        return import(pathToFileURL(fullPath).href)
                            .then((mod: { [k: string]: any }) => {
                                return { [fullPath]: mod  }
                            })
                    }
                }
            }
            return Promise.resolve(undefined);
        })) // remove undefined, and merge results
            .then((mods: Array<fileSearchResults | undefined>): fileSearchResults => {
                return {
                    [searchPath]: mods
                        .filter((mod): mod is fileSearchResults => !!mod)
                        .reduce((ret: fileSearchResults, b) => {
                            return { ...ret, ...b };
                        }, {})
                }
            });
    })).then((namespaceArray) => {
        if (namespaceArray.length === 0) {
            return {};
        }
        return namespaceArray.reduce((ret, namespace) => {
            return { ...ret, ...namespace };
        }, {});
    });
}

export {
    searchDir as default
}