import {type testResult } from '../types';

function invalidValidation(varName:string,typeName:string):testResult{
    return {
        outcomeMsg: `Unable to run tests for ${varName} invalid type (${typeName})`,    
        outcome: 'failure',
        expectedOutcome: 'variable to validate to be a valid type',
        realOutcome: undefined,
    };
}

export {
    invalidValidation as default
}