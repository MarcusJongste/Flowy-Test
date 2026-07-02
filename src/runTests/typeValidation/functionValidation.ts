import { Config, testResult, unitTest } from "../../types";
import createPredifinedParams from "../createPredifinedParams";
import createTestResult from "../createTestResult";
import createScenario from "../scenario/createScenario";
import resetScenario from "../scenario/resetScenario";
import sortUnitTests from "./sortUnitTests";

function functionValidation(config:Config, v:Function, vName:string, unitTests:unitTest[]):Promise<testResult[]> {
    const sortedUnitTests = sortUnitTests(unitTests);
    const generatedPreDefinedVariables = createPredifinedParams(config);
    return Promise.all(sortedUnitTests.map((unitTest:unitTest) => {
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