import { testResult, unitTest } from "../types";
import validateOutcome from "./validateOutcome";

function createTestResult(unitTest:unitTest,realOutcome:any,result:'error'|'result' = 'result'):testResult{
    const outcome = validateOutcome(unitTest,realOutcome,result);
    const {outcomeMsg, name, expectedOutcome} = unitTest;
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