import getTestFiles from "./getTestData/getTestFiles";
import searchDir from "./getTestData/getTestDataBrowser";
import { Config } from "./types";

const flowyTest = {
    unitTest: (config: Config) => {
        console.log(getTestFiles(config, searchDir))
    }
};

export {
    flowyTest as default
}