interface unitTest {
    name: string;
    expectedOutcome: any;
    expectedSource?: 'result' | 'error';
    params?: Array<any>;
    scenarios?: {
        [k: string]: any;
        scenario: {
            [k: string]: {
                [k: string]: any;
            } | any;
        };
        this?: any;
    };
}
export { unitTest as default };
//# sourceMappingURL=unitTest.d.ts.map