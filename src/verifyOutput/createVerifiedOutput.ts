import { type expectedOutcome, type testResult } from "../types";

function createVerifiedOutput(realOutcome: any, expectedOutcome: expectedOutcome, label: string): testResult {
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