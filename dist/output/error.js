"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = error;
function error(testResults) {
    let errors = [];
    Object.entries(testResults.unitTestResults).forEach(([fullPath, testResult]) => {
        errors = errors.concat(testResult.reduce((errArr, testResult) => {
            if (testResult.result === 'failure') {
                const err = new Error(`Testcase(${testResult.message}) failed for ${fullPath}`);
                errArr.push(err);
            }
            return errArr;
        }, []));
    });
    if (errors.length > 0) {
        throw new AggregateError(errors, `${errors.length} test(s) failed`);
    }
}
//# sourceMappingURL=error.js.map