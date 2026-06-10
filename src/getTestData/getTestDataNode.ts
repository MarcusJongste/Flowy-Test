import * as fs from 'fs';
import * as path from 'path';
import {type fileSearchResults } from '../types';

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
                // if extension is correct
                if (extensions.some(extension => new RegExp(String.raw`\s${extension}$\s`).test(entry.name))) {
                    // create fullPath
                    const fullPath = path.join(searchPath, entry.name);
                    // if it's a directory then search more
                    if (entry.isDirectory()) {
                        return searchDir([fullPath], extensions, testFilePattern, ignore);
                    } else {
                        // it's a matching file
                        return import(fullPath)
                            .then((mod: { [k: string]: any }) => {
                                return { [searchPath]: { [entry.name]: mod } }
                            })
                    }
                }
            }
        })) // remove undefined, and merge results
            .then((mods: Array<fileSearchResults | undefined>): fileSearchResults => {
                return {
                    [searchPath]: mods
                        .filter((mod): mod is fileSearchResults => !!mod)
                        .reduce((ret: { [k: string]: any }, b) => {
                            return { ...ret, ...b };
                        }, {})
                }
            });
    })).then((namespaceArray) => {
        return namespaceArray.reduce((ret, namespace) => {
            return { ...ret, ...namespace };
        });
    });
}

export {
    searchDir as default
}