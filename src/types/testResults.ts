
import testResult from './testResult';
interface testResults {
    // each searchdir
    unitTestResults: { [k: string]: testResult[] };
    numberOfTestsRan: number;
    numberOfSuccess: number;
    numberOfFailure: number;


}
export {
    testResults as default
}