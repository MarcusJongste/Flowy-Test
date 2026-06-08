"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = error;
function error(outcome, expectedOutcome) {
    return outcome.error !== undefined ? outcome.errorMsg : 'no Error was triggered';
}
//# sourceMappingURL=error.js.map