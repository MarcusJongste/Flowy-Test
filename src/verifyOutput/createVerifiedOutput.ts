import { type expectedOutcomeType, type testResult } from "../types";

function createVerifiedOutput(realOutcome: any, expectedOutcome: expectedOutcomeType, label: string): testResult {
    return {
        label,
        outcome: realOutcome === expectedOutcome.value ? 'success' : 'failure',
        expectedOutcome,
        realOutcome
    }
}
export {
    createVerifiedOutput as default
}