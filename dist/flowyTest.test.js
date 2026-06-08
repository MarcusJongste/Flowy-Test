"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const unitTests = {
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
                verificationCode: function (outcome) {
                    return outcome.outcome === 'success' &&
                        outcome.expectedOutcome === true &&
                        outcome.realOutcome === true;
                },
                value: true
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
                verificationCode: function (outcome) {
                    return outcome.outcome === 'failure' &&
                        outcome.expectedOutcome === true &&
                        outcome.realOutcome === false;
                },
                value: true
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
                        value: {}
                    },
                    label: 'namespace missing'
                }],
            expectedOutcome: {
                source: 'error',
                value: 'wrong unitTest (missing namespace)'
            }
        },
    ]
};
exports.default = unitTests;
//# sourceMappingURL=flowyTest.test.js.map