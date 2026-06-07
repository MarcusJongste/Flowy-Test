import { type test,type testResult } from "./types";

const unitTests:test = {
    verifyOutcome: [
        {
            label: 'return outcome is true',
            params: [true, {
                expectedOutcome: {
                    source: 'return',
                    value: true
                },
                label: 'outcome is true'
            }],
            expectedOutcome: {
                source: 'verificationCode',
                verificationCode: function (outcome: testResult) {
                    return outcome.outcome === 'success' &&
                        outcome.expectedOutcome === true &&
                        outcome.realOutcome === true;
                },
                value:true
            }

        }, {
            label: 'return outcome is false',
            params: [false, {
                expectedOutcome: {
                    source: 'return',
                    value: true
                },
                label: 'outcome is true'
            }],
            expectedOutcome: {
                source: 'verificationCode',
                verificationCode: function ( outcome: testResult) {
                    return outcome.outcome === 'failure' &&
                        outcome.expectedOutcome === true &&
                        outcome.realOutcome === false;
                },
                value:true
            }
        }, {
            label: 'root Test namespace missing error',
            params: [false, {
                expectedOutcome: {
                    source: 'root',
                    value: true
                },
                label: 'namespace missing'
            }],
            expectedOutcome: {
                source: 'error',
                value: 'wrong unitTest (missing namespace)'
            }
        },
        {
            label: 'root check properties',
            params: [false, {
                expectedOutcome: {
                    source: 'root',
                    namespace: 'properties',
                    value: {

                    }
                },
                label: 'namespace missing'
            }],
            expectedOutcome: {
                source: 'error',
                value: 'wrong unitTest (missing namespace)'
            }
        },
    ]
}

export {
    unitTests as default
}