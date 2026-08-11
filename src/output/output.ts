import { Config, testResults } from "../types";
import error from "./error";
import logger from "./logger";


function output(config: Config, testResults: testResults): void {
    const { throwErrors, logInConsole } = config;
    if (logInConsole) {
        logger(testResults);
    }
    if (throwErrors) {
        error(testResults);
    }
}

export {
    output as default
}