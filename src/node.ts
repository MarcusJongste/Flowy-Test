import getTestFiles from "./getTestData/getTestFiles";
import searchDir from "./getTestData/getTestDataNode";
import * as path from 'path';
import { pathToFileURL } from 'url';
import { Config } from "./types";
import runTests from "./runTests";

const rootPath = path.resolve(__dirname, '..');
const configAuto = path.resolve(rootPath, 'flowytest.config.js');
console.log('starting node test');
const flowytest = Promise.resolve(import(pathToFileURL(configAuto).href))
    .then((finalConf) => {
        return getTestFiles(finalConf.default, searchDir)
            .then((testResult) => {
                return runTests(testResult);
            })
    });
flowytest.then((testResults) => console.log(testResults));

export {
    flowytest as default,
    type Config
}