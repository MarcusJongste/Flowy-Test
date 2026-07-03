import { type testResult, type unitTest } from "../types";

function validateOutcome({ expectedOutcome, expectedSource }: unitTest, outcome: any, result: 'error' | 'result' = 'result'): 'success' | 'failure'{
    if (expectedSource && expectedSource !== result) {
        return 'failure';
    }
    if (typeof expectedOutcome === 'function') {
        return expectedOutcome() ? 'success' : 'failure';
    }
    if (typeof expectedOutcome !== 'object') { // anything besides object
        return outcome === expectedOutcome ? 'success' : 'failure';
    }
    if (typeof outcome !== 'object') {
        return 'failure';
    }
    return checkForObjectType(expectedOutcome)
}

function checkForObjectType(obj:object | Array<any> | Map<any,any> | Set<any>): Array<Array<any>> {
    if (obj instanceof Map || obj instanceof Set) {
        // @ts-ignore toArray does exist just TS is not updated yet
        return obj.entries().toArray();
    }
    if (Array.isArray(obj)) {
        return obj.map((v,k) => [k,v])
    }
    return Object.entries(obj);
}
export {
     validateOutcome as default
}