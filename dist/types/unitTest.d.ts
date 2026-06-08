import type expectedOutcome from './expectedOutcome';
interface unitTest {
    label: string;
    expectedOutcome: expectedOutcome;
    params: Array<any>;
    afterScript?: Function;
}
export { unitTest as default };
//# sourceMappingURL=unitTest.d.ts.map