import { testResults } from "../types";

function error(testResults: testResults) {
    let errors: Error[] = [];
    Object.entries(testResults.unitTestResults).forEach(([fullPath, testResult]) => {
        errors = errors.concat(
            testResult.reduce((errArr: Error[], testResult) => {
                if (testResult.result === 'failure') {
                    const err = new Error(`Testcase(${testResult.message}) failed for ${fullPath}`);
                    errArr.push(err);
                }
                return errArr;
            }, [])
        );
    });

    if (errors.length > 0) {
        throw new AggregateError(errors, `${errors.length} test(s) failed`);
    }
}

export {
    error as default
}