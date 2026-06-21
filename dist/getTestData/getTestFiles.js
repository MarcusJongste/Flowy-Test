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
function getTestFiles(config, searchDir) {
    var _a, _b, _c;
    const dirs = config.dirs;
    console.log(`dirs : ${dirs.length}`);
    const extensions = (_a = config.extensions) !== null && _a !== void 0 ? _a : ['.ts'];
    const ignore = (_b = config.ignore) !== null && _b !== void 0 ? _b : [];
    const testFilePattern = (_c = config.testFilePattern) !== null && _c !== void 0 ? _c : /\.test\.ts$/;
    return searchDir(dirs, extensions, testFilePattern, ignore)
        .then((allFiles) => {
        return (0, sortModuleExportToTestFile_1.default)(allFiles, testFilePattern)
            .then((sortedTestFile) => {
            console.log(sortedTestFile);
        });
    });
}
//# sourceMappingURL=getTestFiles.js.map