import { testResult, unitTest } from "../types";
import validateOutcome from "./validateOutcome";

function createTestResult({ outcomeMsg, name, expectedOutcome, expectedSource }: unitTest, realOutcome: any, result: 'error' | 'result' = 'result'): testResult{
    const outcome = validateOutcome(expectedOutcome, expectedSource, realOutcome, result);
    return {
        outcomeMsg: outcomeMsg || `UnitTest(${name}) has ${outcome}, \n${realOutcome} did not match ${expectedOutcome}`,    
        outcome,
        expectedOutcome,
        realOutcome,
    };
}

export {
    createTestResult as default
}