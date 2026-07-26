import {type testResult } from '../types';

function invalidValidation(varName:string,typeName:string):testResult{
    return {
        message: `Unable to run tests for ${varName} invalid type (${typeName})`,    
        result: 'failure',
        expected: 'variable to validate to be a valid type',
        outcome: undefined,
        source:'error'
    };
}

export {
    invalidValidation as default
}