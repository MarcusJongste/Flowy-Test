"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createVerifiedOutput;
function createVerifiedOutput(realOutcome, expectedOutcome, label) {
    return {
        label,
        outcome: realOutcome === expectedOutcome.value ? 'success' : 'failure',
        expectedOutcome,
        realOutcome
    };
}
//# sourceMappingURL=createVerifiedOutput.js.map