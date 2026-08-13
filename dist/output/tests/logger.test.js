"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const unitTests = {
    logger: [
        {
            name: 'Logging one fake Error',
            scenarios: {
                scenario: {
                    console: () => {
                        const originalLog = console.log;
                        let consoleCount = 0;
                        console.log = (...args) => {
                            consoleCount++;
                            originalLog(...args);
                        };
                        return { originalLog, getCount: () => consoleCount };
                    }
                }
            },
            params: [{
                    unitTestResults: {
                        myLoggerTest: [
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
            expectedOutcome: (predefined, outcome) => {
                if (predefined.console !== undefined) {
                    const { originalLog, getCount } = predefined.console;
                    console.log = originalLog;
                    const consoleCount = getCount();
                    return consoleCount === 3 ? true : false;
                }
                return false;
            },
            expectedSource: 'expectedOutcome'
        }
    ]
};
exports.default = unitTests;
//# sourceMappingURL=logger.test.js.map