import { testResult, unitTest } from "../types";
import validateOutcome from "./validateOutcome";

function createTestResult({ name, expectedOutcome, expectedSource }: unitTest, preDefinedVariables: { [k: string]: any }, realOutcome: any, result: 'error' | 'result' | 'expectedOutcome' = 'result'): testResult{
    if (typeof expectedOutcome === 'function') {
        return createTestResult({
            expectedOutcome: expectedOutcome(preDefinedVariables, realOutcome),
            name,
            expectedSource
        }, preDefinedVariables,  realOutcome, 'expectedOutcome');
    }

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