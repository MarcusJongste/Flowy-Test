import unitTest from './unitTest';

interface test  {
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
    type test as default,
    type unitTest,
    type expectedOutcomeType,
    type testResult,
    type testDoc,
    type testFiles
}