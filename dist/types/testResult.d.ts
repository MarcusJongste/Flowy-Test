interface testResult {
    [k: string]: any;
    message: string;
    source: 'result' | 'error';
    result: 'success' | 'failure';
    expected: any;
    outcome: any;
}
export { testResult as default };
//# sourceMappingURL=testResult.d.ts.map