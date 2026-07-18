import { Config, type testFile } from '../../types';
/**
 * runs unitTests per type
 * @param {testFile} testFile for this variable
 * @returns {Promise<testResult[]>} the results of unitTests or one result saying invalid type
 */
declare const typeValidation: (config: Config, { v, vName }: testFile) => Function;
export { typeValidation as default };
//# sourceMappingURL=typeValidation.d.ts.map