interface unitTest {
    name:string;
    expectedOutcome: any;
    expectedSource?: 'result' | 'error';
    params?: Array<any>;
    scenarios?:{
        [k:string]:any;
        global?: string[];
        scenario: {
            [k: string]: { [k: string]: any };
        };
        this?:any
    };
}
export {
    unitTest as default
}