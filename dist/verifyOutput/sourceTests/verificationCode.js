"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verificationCode;
function verificationCode(outcome, { verificationCode }) {
    if (verificationCode === undefined) {
        return outcome;
    }
    return verificationCode(outcome);
}
//# sourceMappingURL=verificationCode.js.map