import { type test } from "../../types";

declare const originalLog: Function;
declare const consoleCount: number;

const unitTests: test = {
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
                        }
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
                console.log = originalLog as typeof console.log;
                const consoleNum = consoleCount;
                delete (global as any).originalLog;
                delete (global as any).consoleCount;
                return consoleNum === 2;

            },
            expectedSource: 'result'
        }
    ]
};