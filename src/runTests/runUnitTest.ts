import {type unitTest, type Config, testResult, testFile } from "../types";
import createPredifinedParams from "./createPredifinedParams";
import createScenario from "./scenario/createScenario";
import resetScenario from "./scenario/resetScenario";

function runUnitTest(config: Config, typeValidation: Function, { v, unitTests }: testFile): Promise<testResult[]>  {
    // generate/ grab predefined variables from config
    const generatedPreDefinedVariables = createPredifinedParams(config);
    // for each unitTest
    return Promise.all(unitTests.map((unitTest: unitTest) => {
        //
        const { scenarios } = unitTest;
        createScenario(generatedPreDefinedVariables, scenarios);
        return Promise.resolve(typeValidation(generatedPreDefinedVariables, v, unitTest))
            .finally(() => resetScenario(generatedPreDefinedVariables, scenarios));
    }))
}

export {
    runUnitTest as default
}