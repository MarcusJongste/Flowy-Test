import testResult from './testResult';
interface testResults {
    unitTestResults: {
        [k: string]: testResult[];
    };
    numberOfTestsRan: number;
    numberOfSuccess: number;
    numberOfFailure: number;
}
export { testResults as default };
//# sourceMappingURL=testResults.d.ts.map