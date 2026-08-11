"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unitTests = {
    error: [
        {
            name: '1 error thrown',
            params: [{
                    unitTestResults: {
                        myErrorTest: [
                            {
                                message: 'successfully failed the test',
                                source: 'error',
                                result: 'failure',
                                expected: 'any',
                                outcome: 'successfully failed the test'
                            }
                        ]
                    },
                    numberOfTestsRan: 1,
                    numberOfSuccess: 0,
                    numberOfFailure: 1
                }],
            expectedOutcome: `1 test(s) failed`,
            expectedSource: 'error'
        }
    ]
};
//# sourceMappingURL=error.test.js.map