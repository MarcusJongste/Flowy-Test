import functionValidation from './functionValidation';
import { Config, testResult, type testFile } from '../../types';
import invalidValidation from '../invalidValidation';

/**
 * runs unitTests per type
 * @param {testFile} testFile for this variable 
 * @returns {Promise<testResult[]>} the results of unitTests or one result saying invalid type
 */
const typeValidation = (config:Config, {v, vName, unitTests}:testFile): Promise<testResult[]> => {
    if(typeof v === 'function'){
        return functionValidation(config, v, vName, unitTests)
    }
    return Promise.resolve([invalidValidation(vName, typeof v)]);
}

export {
    typeValidation as default
}