import { testResult, unitTest } from "../types";
import validateOutcome from "./validateOutcome";

function createTestResult({ name, expectedOutcome, expectedSource }: unitTest, realOutcome: any, result: 'error' | 'result' = 'result'): testResult{
    const outcome = validateOutcome(expectedOutcome, expectedSource, realOutcome, result);

    return {
        outcomeMsg: `UnitTest(${name}) has ${outcome}, \nexpected:${expectedOutcome} \nactual:${realOutcome}`,    
        outcome,
        expectedOutcome,
        realOutcome,
    };
}

export {
    createTestResult as default
}