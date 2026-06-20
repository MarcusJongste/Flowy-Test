"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = searchDir;
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const url_1 = require("url");
/**
 * searchDir goes through each given directory and fetches all functions
 * @param {string[]} searchPaths each path to search
 * @param {string[]} extensions all extensions to include
 * @param {RegExp[]} ignore regexes which show which file/filetypes to ignore
 * @returns
 */
function searchDir(searchPaths, extensions, testFilePattern, ignore = []) {
    return Promise.all(searchPaths.map((searchPath) => {
        //get all directories\files from each given path
        const dirs = fs.readdirSync(searchPath, { withFileTypes: true });
        // loop through directories
        return Promise.all(dirs.map((entry) => {
            var _a, _b;
            // if not on ignore list
            if (!ignore.some(ig => ig.test(entry.name))) {
                // create fullPath
                const fullPath = path.join(searchPath, entry.name);
                const folder = (_b = (_a = fullPath.split('\\')) === null || _a === void 0 ? void 0 : _a.at(-2)) !== null && _b !== void 0 ? _b : 'UNKNOWN';
                // if it's a directory then search more
                if (entry.isDirectory()) {
                    return searchDir([fullPath], extensions, testFilePattern, ignore);
                }
                else {
                    // if extension is correct
                    if (extensions.some(extension => new RegExp(String.raw `${extension}$`).test(entry.name)) || testFilePattern.test(entry.name)) {
                        // it's a matching file
                        return Promise.resolve(`${(0, url_1.pathToFileURL)(fullPath).href}`).then(s => __importStar(require(s))).then((mod) => {
                            console.log(`${folder} : ${entry.name}`);
                            return { [folder]: { [entry.name]: mod } };
                        });
                    }
                    return undefined;
                }
            }
        })) // remove undefined, and merge results
            .then((mods) => {
            console.log(mods);
            return {
                [searchPath]: mods
                    .filter((mod) => !!mod)
                    .reduce((ret, b) => {
                    return { ...ret, ...b };
                }, {})
            };
        });
    })).then((namespaceArray) => {
        if (namespaceArray.length === 0) {
            return {};
        }
        return namespaceArray.reduce((ret, namespace) => {
            console.log(namespace);
            return { ...ret, ...namespace };
        });
    });
}
//# sourceMappingURL=getTestDataNode.js.map