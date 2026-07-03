import { Config, testResult, unitTest } from "../../types";
import createPredifinedParams from "../createPredifinedParams";
import createTestResult from "../createTestResult";
import createScenario from "../scenario/createScenario";
import resetScenario from "../scenario/resetScenario";
import sortUnitTests from "./sortUnitTests";

/**
 * functionValidation is the test for functions, we run the function and either compare the
 * outcome (return), or run a validation function which returns true or false
 * @param {Config} config
 * @param {Function} v the actual function to be tested
 * @param {string} vName the name of the variable for label/outcomeMSg
 * @param {unitTest[]} unitTests an array of unitTests
 * @returns {Promise<testResult[]} an array of results from the tests passed
 */
function functionValidation(config: Config, v: Function, vName: string, unitTests: unitTest[]): Promise<testResult[]> {
    // generate/ grab predefined variables from config
    const generatedPreDefinedVariables = createPredifinedParams(config);
    // for each unitTest
    return Promise.all(unitTests.map((unitTest: unitTest) => {
        //
        const { scenarios } = unitTest;
        createScenario(generatedPreDefinedVariables,scenarios);
        const useThis = scenarios?.this? generatedPreDefinedVariables[scenarios.this]:undefined;
        const params = createParams(unitTest, generatedPreDefinedVariables)
        return Promise.resolve(v.call(useThis,...params))
        .then((result) => createTestResult(unitTest,result))
        .catch((error) => createTestResult(unitTest,error,'error'))
        .finally(() => resetScenario(generatedPreDefinedVariables,scenarios))
        
    }))
}

function createParams({params, scenarios}:unitTest, preDefinedVariables:{[k:string]:any}):Array<any>{
    const { setParams } = scenarios ?? {};
    if(setParams !== undefined){
        if(typeof setParams === 'function'){
            const newParams =  setParams();
            return Array.isArray(newParams)? newParams:[];
        }
        return Object.entries(setParams).reduce((ret, [key,value]) => {
            if(typeof key === 'number'){
                if(preDefinedVariables[value] !== undefined){
                    return preDefinedVariables[value];
                }
            }
        },[])
    }
    return params ?? [];
}

export {
    functionValidation as default
}