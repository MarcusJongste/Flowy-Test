import {type unitTest, type Config, testResult, testFile } from "../types";
import createScenario from "./scenario/createScenario";

function runUnitTest(config: Config, typeValidation: Function, { v, unitTests }: testFile): Promise<testResult[]>  {
    // for each unitTest
    return Promise.all(unitTests.map((unitTest: unitTest) => {
        console.log(`running Unittest(${unitTest.name})`);
        // create predefined Variables
        const generatedPreDefinedVariables = createScenario(config, unitTest);
        return Promise.resolve(typeValidation(generatedPreDefinedVariables, v, unitTest))
    }))
}

export {
    runUnitTest as default
}