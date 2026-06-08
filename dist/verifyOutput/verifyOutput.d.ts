import { type unitTest, type testResult } from '../types';
/**
 * verifyOutcome, it will check how the outcome should be checked and trigger the specified control for each source specified.
 * once the control has completed, it triggers the outcomeGenerator to create outcome
 * @param this rootObj
 * @param outcome the value which should be specified and checked
 * @param expectedOutcome this may be any way to check the expected outcome
 * @param label the label for this unitTest
 * @returns
 */
declare function verifyOutcome(outcome: any, { expectedOutcome, label }: unitTest): testResult;
export { verifyOutcome as default };
//# sourceMappingURL=verifyOutput.d.ts.map