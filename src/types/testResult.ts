interface testResult {
    [k: string]: any;
    outcomeMsg: string;
    outcome: 'success' | 'failure';
    expectedOutcome: any;
    realOutcome: any;
}
export {
    testResult as default
}