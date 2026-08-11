"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unitTests = {
    logger: [
        {
            name: '1 error thrown',
            scenarios: {
                scenario: {
                    console: () => {
                        var originalLog = console.log;
                        var consoleCount = 0;
                        console.log = (...args) => {
                            consoleCount++;
                            originalLog(...args);
                        };
                        return originalLog;
                    }
                }
            },
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
            expectedOutcome: () => {
                console.log = originalLog;
                const consoleNum = consoleCount;
                delete global.originalLog;
                delete global.consoleCount;
                return consoleNum === 2;
            },
            expectedSource: 'result'
        }
    ]
};
//# sourceMappingURL=logger.test.js.map