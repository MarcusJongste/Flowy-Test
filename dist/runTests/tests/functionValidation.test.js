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
                message: 'UnitTest(testy) has success, \nexpected:true \nactual:true',
                result: 'success',
                expected: true,
                outcome: true,
                source: 'result'
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
                message: 'UnitTest(testy) has success, \nexpected:error check \nactual:error check',
                result: 'success',
                expected: 'error check',
                outcome: 'error check',
                source: 'error'
            }
        },
        {
            name: 'functionValidation: checking scenario this',
            params: [{ thisCheck: { test: 'thisCheck' } }, function () { return this; }, {
                    name: 'testy',
                    expectedOutcome: { test: 'thisCheck' },
                    expectedSource: 'result',
                    params: [],
                    scenarios: {
                        this: 'thisCheck'
                    }
                }],
            expectedOutcome: {
                message: 'UnitTest(testy) has success, \nexpected:[object Object] \nactual:[object Object]',
                result: 'success',
                expected: { test: 'thisCheck' },
                outcome: { test: 'thisCheck' },
                source: 'result'
            }
        }
    ]
};
exports.default = unitTests;
//# sourceMappingURL=functionValidation.test.js.map