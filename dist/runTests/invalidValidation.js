"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = invalidValidation;
function invalidValidation(varName, typeName) {
    return {
        outcomeMsg: `Unable to run tests for ${varName} invalid type (${typeName})`,
        outcome: 'failure',
        expectedOutcome: 'variable to validate to be a valid type',
        realOutcome: undefined,
    };
}
//# sourceMappingURL=invalidValidation.js.map