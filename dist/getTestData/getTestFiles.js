"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTestFiles;
const sortModuleExportToTestFile_1 = __importDefault(require("./sortModuleExportToTestFile"));
/**
 * getTestFiles goes through all dirs and retrieves all functions with their respective fullPath and unitTests
 * @param config the config file as defined
 * @returns {Promise<{testFile}>} Promise which will return an object with testFiles
 */
function getTestFiles({ dirs, extensions, testFilePattern, ignore }, searchDir) {
    return searchDir(dirs, extensions, testFilePattern, ignore)
        .then((allFiles) => {
        return (0, sortModuleExportToTestFile_1.default)(allFiles, testFilePattern);
    });
}
//# sourceMappingURL=getTestFiles.js.map