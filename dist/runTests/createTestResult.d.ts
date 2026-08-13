import { testResult, unitTest } from "../types";
declare function createTestResult({ name, expectedOutcome, expectedSource }: unitTest, preDefinedVariables: {
    [k: string]: any;
}, realOutcome: any, result?: 'error' | 'result' | 'expectedOutcome'): testResult;
export { createTestResult as default };
//# sourceMappingURL=createTestResult.d.ts.map