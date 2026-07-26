import { testResult, unitTest } from "../types";
import validateOutcome from "./validateOutcome";

function createTestResult({ name, expectedOutcome, expectedSource }: unitTest, realOutcome: any, result: 'error' | 'result' = 'result'): testResult{
    const outcome = validateOutcome(expectedOutcome, expectedSource, realOutcome, result);
    return {
        message: `UnitTest(${name}) has ${outcome}, \nexpected:${expectedOutcome} \nactual:${realOutcome}`,
        result:outcome,
        source: result,
        expected: expectedOutcome,
        outcome: realOutcome,   
    };
}

export {
    createTestResult as default
}