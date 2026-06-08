"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generateOutputs_1 = __importDefault(require("./generateOutputs"));
const getTestData_1 = __importDefault(require("./getTestData/getTestData"));
const runTests_1 = __importDefault(require("./runTests"));
const configPath = path_1.default.resolve(process.cwd(), 'flowytest.config.json');
let config = {};
const outputs = (0, generateOutputs_1.default)();
const flowyTest = {
    ...outputs
};
exports.default = flowyTest;
if (fs_1.default.existsSync(configPath)) {
    config = JSON.parse(fs_1.default.readFileSync(configPath, 'utf-8'));
    (0, getTestData_1.default)(config)
        .then((testFiles) => {
        flowyTest['results'] = (0, runTests_1.default)(testFiles);
    });
}
