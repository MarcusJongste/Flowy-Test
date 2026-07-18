import { type Config, testResult, testFile } from "../types";
declare function runUnitTest(config: Config, typeValidation: Function, { v, unitTests }: testFile): Promise<testResult[]>;
export { runUnitTest as default };
//# sourceMappingURL=runUnitTest.d.ts.map