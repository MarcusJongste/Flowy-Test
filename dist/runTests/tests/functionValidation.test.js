"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const unitTests = {
    functionValidation: [
        {
            name: 'functionValidation: basic check',
            params: [{}, () => { return true; }, {
                    name: 'testy',
                    expectedOutcome: true,
                    expectedSource: 'result',
                    params: [],
                }],
            expectedOutcome: {
                outcomeMsg: 'UnitTest(testy) has success, \nexpected:true \nactual:true',
                outcome: 'success',
                expectedOutcome: true,
                realOutcome: true
            }
        },
        {
            name: 'functionValidation: checking error outcome',
            params: [{}, () => { throw new Error('error check'); }, {
                    name: 'testy',
                    expectedOutcome: 'error check',
                    expectedSource: 'error',
                    params: [],
                }],
            expectedOutcome: {
                outcomeMsg: 'UnitTest(testy) has success, \nexpected:error check \nactual:error check',
                outcome: 'success',
                expectedOutcome: 'error check',
                realOutcome: 'error check'
            }
        },
    ]
};
exports.default = unitTests;
//# sourceMappingURL=functionValidation.test.js.map