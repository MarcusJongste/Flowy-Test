import { testResult, unitTest } from "../../types";
/**
 * functionValidation is the test for functions, we run the function and either compare the
 * outcome (return), or run a validation function which returns true or false
 * @param {{[k:string]:any}} preDefinedVariables
 * @param {Function} v the actual function to be tested
 * @param {unitTest} unitTest the name of the variable for label/outcomeMSg
 * @returns {Promise<testResult[]} an array of results from the tests passed
 */
declare function functionValidation(preDefinedVariables: {
    [k: string]: any;
}, v: Function, unitTest: unitTest): Promise<testResult>;
export { functionValidation as default };
//# sourceMappingURL=functionValidation.d.ts.map