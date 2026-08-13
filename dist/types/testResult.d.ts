interface testResult {
    [k: string]: any;
    message: string;
    source: 'result' | 'error' | 'expectedOutcome';
    result: 'success' | 'failure';
    expected: any;
    outcome: any;
}
export { testResult as default };
//# sourceMappingURL=testResult.d.ts.map