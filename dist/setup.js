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
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const configContent = `import { Config } from 'flowy-test';
/*
 flowy-test will gather all functions found in the directory.
 it will also find all test files matching the testFilePattern.
 and match each testFile function unittest to the function.
 any function without unittest is removed
 then flowy-test will run all unittests
 after you can choose how to process the tests
 1. throw error
 2. have custom code to display ui
 3. ...
*/
const config: Config = {
    // write here the directories to test 
    dirs: [],
    // files to ignore
    ignore: [/index\.(ts|js)$/],
    // file extension to check
    extensions: ['js', 'ts'],
    // which files are tests
    testFilePattern: /test\.(ts|js)$/
};
export default config;`;
const projectRoot = path.resolve(__dirname, '..', '..', '..');
const configPath = path.resolve(projectRoot, 'flowytest.config.json');
if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, configContent);
    console.log('created flowytest.config.json');
}
else {
    console.log('Config already exists, skipping flowytest.config creation');
}
console.log('[flowy-test] Installed successfully.');
//# sourceMappingURL=setup.js.map