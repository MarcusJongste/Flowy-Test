import { type test,type testResult } from "./types";

const unitTests:test = {
    validateOutcome: [
        {
            name: 'validateOutcome: string validation',
            params:['hello','result','hello'],
            expectedOutcome:'success'
        },
        {
            name: 'validateOutcome: string validation failure',
            params: ['hello', 'result', 'world'],
            expectedOutcome: 'failure'
        }

    ]
}

export {
    unitTests as default
}