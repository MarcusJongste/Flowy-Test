"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const flowy_test_1 = __importDefault(require("flowy-test"));
flowy_test_1.default
    .then((testResult) => {
    console.log(`Ran (${testResult.numberOfTestsRan}) | success:${testResult.numberOfSuccess} | failure:${testResult.numberOfFailure}`);
    Object.entries(testResult.unitTestResults).forEach(([fullPath, testResults]) => {
        testResults.forEach((testResult) => {
            if (testResult.result === 'failure') {
                console.log(testResult);
            }
        });
    });
    console.log('testing completed');
});
//# sourceMappingURL=test.node.js.map