import { testResult, unitTest } from "../../types";
import createTestResult from "../createTestResult";


/**
 * functionValidation is the test for functions, we run the function and either compare the
 * outcome (return), or run a validation function which returns true or false
 * @param {{[k:string]:any}} preDefinedVariables 
 * @param {Function} v the actual function to be tested
 * @param {unitTest} unitTest the name of the variable for label/outcomeMSg
 * @returns {Promise<testResult[]} an array of results from the tests passed
 */
function functionValidation(preDefinedVariables: { [k: string]: any },v:Function, unitTest: unitTest): Promise<testResult> {
    const { scenarios } = unitTest;
    const useThis = scenarios?.this ? preDefinedVariables[scenarios.this] : undefined;
    return new Promise((resolve) => { resolve(v.call(useThis, ...(unitTest.params || []))) })
        .then((result) => createTestResult(unitTest, preDefinedVariables, result))
        .catch((error) => createTestResult(unitTest, preDefinedVariables, error.message, 'error'))
}


export {
    functionValidation as default
}