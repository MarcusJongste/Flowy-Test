import { type test } from "../../types";

declare const originalLog: Function;
declare const consoleCount: number;

const unitTests: test = {
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
                           // originalLog(...args);
                        }
                        return { originalLog, getCount: () => consoleCount }
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
            expectedOutcome: (predefined: {[k:string]:any}, outcome:any) => {
                if (predefined.console !== undefined) {
                    const { originalLog, getCount } = predefined.console;
                    console.log = originalLog as typeof console.log;
                    const consoleCount = getCount();
                    return consoleCount === 3 ? true : false;
                }
                return false;
            },
            expectedSource: 'expectedOutcome'
        }
    ]
};

export {
    unitTests as default
}