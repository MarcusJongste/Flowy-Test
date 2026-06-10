import getTestFiles from "./getTestData/getTestFiles";
import searchDir from "./getTestData/getTestDataBrowser";
import * as path from 'path';
import { Config } from "./types";

const rootPath = path.resolve(__dirname, '..', '..', '..');
const configAuto = path.resolve(rootPath, 'flowy.config.ts');
const flowytest = Promise.resolve(import(configAuto))
    .then((finalConf) => {
        console.log(getTestFiles(finalConf, searchDir))
    });  

export {
    flowytest as default,
    type Config
}