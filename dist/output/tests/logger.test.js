"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
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
                if (originalLog) {
                    console.log = originalLog;
                    delete global.originalLog;
                }
                if (consoleCount) {
                    const consoleNum = consoleCount;
                    delete global.consoleCount;
                    return consoleNum === 2 ? undefined : false;
                }
                return null;
            },
            expectedSource: 'result'
        }
    ]
};
exports.default = unitTests;
//# sourceMappingURL=logger.test.js.map