import { type test,type testResult } from "./types";

const unitTests:test = {
    validateOutcome: [
        {
            name: 'validateOutcome: string validation',
            params:['hello','result','hello'],
            expectedOutcome:'success'
        }

    ]
}

export {
    unitTests as default
}