import  type expectedOutcome  from './expectedOutcome';
interface unitTest {
    name:string;
    outcomeMsg?: string;
    expectedOutcome: any;
    expectedSource?: 'result' | 'error';
    params?: Array<any>;
    scenarios?:{
        [k:string]:any;
        setParams:{[k:number]:string} | Function
    };
    afterScript?: Function;
}
export {
    unitTest as default
}