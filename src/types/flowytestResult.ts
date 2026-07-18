import testResults from "./testResults";

interface flowtestResult {
    unitTestResults: testResults;
    numberOfTestsRan: number;
    numberOfSuccess: number;
    numberOfFailure: number;
}
export {
    flowtestResult as default
}