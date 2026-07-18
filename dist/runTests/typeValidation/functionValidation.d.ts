import { testResult, unitTest } from "../../types";
/**
 * functionValidation is the test for functions, we run the function and either compare the
 * outcome (return), or run a validation function which returns true or false
 * @param {Config} config
 * @param {Function} v the actual function to be tested
 * @param {string} vName the name of the variable for label/outcomeMSg
 * @param {unitTest[]} unitTests an array of unitTests
 * @returns {Promise<testResult[]} an array of results from the tests passed
 */
declare function functionValidation(preDefinedVariables: {
    [k: string]: any;
}, v: Function, unitTest: unitTest): Promise<testResult>;
export { functionValidation as default };
//# sourceMappingURL=functionValidation.d.ts.map