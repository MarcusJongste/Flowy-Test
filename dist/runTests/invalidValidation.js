"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = invalidValidation;
function invalidValidation(varName, typeName) {
    return {
        message: `Unable to run tests for ${varName} invalid type (${typeName})`,
        result: 'failure',
        expected: 'variable to validate to be a valid type',
        outcome: undefined,
        source: 'error'
    };
}
//# sourceMappingURL=invalidValidation.js.map