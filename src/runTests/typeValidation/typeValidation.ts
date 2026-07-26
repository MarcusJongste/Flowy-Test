import functionValidation from './functionValidation';
import { Config, testResult, type testFile, unitTest } from '../../types';
import invalidValidation from '../invalidValidation';

/**
 * runs unitTests per type
 * @param {testFile} testFile for this variable 
 * @returns {Promise<testResult[]>} the results of unitTests or one result saying invalid type
 */
const typeValidation = ({ v, vName }: testFile): Function => {
    if (typeof v === 'function') {
        return functionValidation;
    }
    return () => { [invalidValidation(vName, typeof v)] };
}

export {
    typeValidation as default
}