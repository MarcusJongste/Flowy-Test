"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const unitTests = {
    validateOutcome: [
        // expectedSource vs result source error or result(return)
        {
            name: 'validateOutcome: expectedSource',
            params: [1, 'error', 1],
            expectedOutcome: 'failure'
        },
        {
            name: 'validateOutcome: expectedSource',
            params: [1, 'result', 1],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: expectedSource',
            params: [1, 'error', 1, 'error'],
            expectedOutcome: 'success'
        },
        // string validations 
        {
            name: 'validateOutcome: string validation',
            params: ['hello', 'result', 'hello'],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: string validation failure',
            params: ['hello', 'result', 'world'],
            expectedOutcome: 'failure'
        },
        // number validations
        {
            name: 'validateOutcome: number validation',
            params: [1, 'result', 1],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: number validation failure',
            params: [1, 'result', 2],
            expectedOutcome: 'failure'
        },
        {
            name: 'validateOutcome: number decimel validation',
            params: [1.4, 'result', 1.4],
            expectedOutcome: 'success'
        },
        // array validations
        {
            name: 'validateOutcome: array validation',
            params: [[0], 'result', [0]],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: array multiple validation',
            params: [['hello', 2, 'world'], 'result', ['hello', 2, 'world']],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: array expected is contained in result',
            params: [['hello', 2], 'result', ['hello', 2, 'world']],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: array failure validation',
            params: [['hello', 2, 'world'], 'result', ['hello', 2]],
            expectedOutcome: 'failure'
        },
        {
            name: 'validateOutcome: array multiple dimensional array',
            params: [[['hello'], [2, ['complex']], 'world'], 'result', [['hello'], [2, ['complex']], 'world']],
            expectedOutcome: 'success'
        },
        // object validations
        {
            name: 'validateOutcome: object validation',
            params: [{
                    value1: 'a'
                },
                'result',
                {
                    value1: 'a'
                }],
            expectedOutcome: 'success'
        },
        {
            name: 'validateOutcome: object failure validation',
            params: [{
                    value1: 'a'
                },
                'result',
                {
                    value1: 'b'
                }],
            expectedOutcome: 'failure'
        },
        {
            name: 'validateOutcome: object contains validation',
            params: [{
                    value1: 'a'
                },
                'result',
                {
                    value1: 'a',
                    value12: 'hello'
                }],
            expectedOutcome: 'success'
        },
        // function
        {
            name: 'validateOutcome: function validation',
            params: [function () { return true; }, 'result', true],
            expectedOutcome: 'success'
        }
    ]
};
exports.default = unitTests;
//# sourceMappingURL=validateOutcome.test.js.map