import { type test,type testResult } from "../../types";

const unitTests:test = {
    validateOutcome: [
        // string validations 
        {
            name: 'validateOutcome: string validation',
            params:['hello','result','hello'],
            expectedOutcome:'success'
        },
        {
            name: 'validateOutcome: string validation failure',
            params: ['hello', 'result', 'world'],
            expectedOutcome: 'failure'
        },
        // number validations
        {
            name: 'validateOutcome: number validation',
            params: [1, 'result', 1],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: number validation failure',
            params: [1, 'result', 2],
            expectedOutcome: 'failure'
        },
        {
            name: 'validateOutcome: number decimel validation',
            params: [1.4, 'result', 1.4],
            expectedOutcome: 'success'
        },
        // array validations

        // object validations



    ]
}

export {
    unitTests as default
}