import getTestFiles from "./getTestData/getTestFiles";
import searchDir from "./getTestData/getTestDataBrowser";
import * as path from 'path';
import { Config } from "./types";

const configAuto = path.resolve(process.cwd(), 'flowy.config.ts');

export const flowyTest = {
    unitTest: (config?: Config) => {
        return Promise.resolve(config ?? import(configAuto))
            .then((finalConf) => {
                console.log(getTestFiles(finalConf, searchDir))
            });    
    }
};

export {
    flowyTest as default
}