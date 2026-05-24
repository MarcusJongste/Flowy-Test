type expectedOutcomeType = {
    [k: string]: any;
    source: 'root' | 'return' | 'error' | 'verificationCode';
    namespace?: string;
    verificationCode?: Function;
    value: any | expectedOutcomeType;
}

type unitTest = {
    [k: string]: any;
    label: string;
    expectedOutcome: expectedOutcomeType;
    params: Array<any>;
    afterScript?: Function;
}
type test = {
    [k: string]: Array<unitTest>;

}
type testResult = {
    [k: string]: any;
    label: string;
    outcome: 'success' | 'failure';
    expectedOutcome: any;
    realOutcome: any;
}

type testFiles = {
    f: Function,
    unitTests: Array<unitTest>
}
type testFunction = {
    [k: string]: testFiles;
}
type testModule = {
    [k: string]: testFunction;
}
type testDoc = {
    [k: string]: testModule;
};

export {
    type test,
    type unitTest,
    type expectedOutcomeType,
    type testResult,
    type testDoc,
    type testFiles
}