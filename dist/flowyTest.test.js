"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const unitTests = {
    validateOutcome: [
        {
            name: 'validateOutcome: string validation',
            params: ['hello', 'result', 'hello'],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: string validation failure',
            params: ['hello', 'result', 'world'],
            expectedOutcome: 'failure'
        }
    ]
};
exports.default = unitTests;
//# sourceMappingURL=flowyTest.test.js.map