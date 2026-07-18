import getTestFiles from "./getTestData/getTestFiles";
import searchDir from "./getTestData/getTestDataNode";
import * as path from 'path';
import { pathToFileURL } from 'url';
import { Config } from "./types";
import runTests from "./runTests/runTests";
import validateConfig from "./getTestData/validateConfig";

const rootPath = path.resolve(__dirname, '..');
const configAuto = path.resolve(rootPath, 'flowytest.config.js');
console.log('starting node test');
const flowytest = Promise.resolve(import(pathToFileURL(configAuto).href))
    .then((finalConf) => {
        const config = validateConfig(finalConf.default);
        return getTestFiles(config, searchDir)
            .then((testResult) => {
                return runTests(config,testResult);
            })
    });

export {
    flowytest as default,
    type Config
}