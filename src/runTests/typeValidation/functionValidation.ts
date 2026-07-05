import { Config, testResult, unitTest } from "../../types";
import createPredifinedParams from "../createPredifinedParams";
import createTestResult from "../createTestResult";
import createScenario from "../scenario/createScenario";
import resetScenario from "../scenario/resetScenario";


/**
 * functionValidation is the test for functions, we run the function and either compare the
 * outcome (return), or run a validation function which returns true or false
 * @param {Config} config
 * @param {Function} v the actual function to be tested
 * @param {string} vName the name of the variable for label/outcomeMSg
 * @param {unitTest[]} unitTests an array of unitTests
 * @returns {Promise<testResult[]} an array of results from the tests passed
 */
function functionValidation(preDefinedVariables: { [k: string]: any },v:Function, unitTest: unitTest): Promise<testResult> {
    const { scenarios } = unitTest;
    const useThis = scenarios?.this ? preDefinedVariables[scenarios.this] : undefined;
        return Promise.resolve(v.call(useThis, ...(unitTest.params || [])))
            .then((result) => createTestResult(unitTest, result))
            .catch((error) => createTestResult(unitTest, error, 'error'))
}


export {
    functionValidation as default
}