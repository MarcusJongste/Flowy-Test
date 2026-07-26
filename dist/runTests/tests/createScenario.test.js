"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = void 0;
const unitTests = {
    createScenario: [
        {
            name: 'createScenario: predefined variables only',
            params: [{
                    predefinedVariables: {
                        a: 'hello'
                    }
                }, {}],
            expectedOutcome: {
                a: 'hello'
            }
        },
        {
            name: 'createScenario: function variable',
            params: [{
                    predefinedVariables: {
                        a: 'hello',
                        b: () => { return 'world'; }
                    }
                }, {}],
            expectedOutcome: {
                a: 'hello',
                b: 'world'
            }
        },
        {
            name: 'createScenario: scenario updates',
            params: [{
                    predefinedVariables: {
                        a: 'hello',
                        b: () => { return 'world'; }
                    }
                }, {
                    scenarios: {
                        scenario: {
                            a: 'brand new world'
                        }
                    }
                }],
            expectedOutcome: {
                a: 'brand new world',
                b: 'world'
            }
        },
        {
            name: 'createScenario: scenario update var not exist',
            params: [{
                    predefinedVariables: {
                        a: 'hello',
                        b: () => { return 'world'; }
                    }
                }, {
                    scenarios: {
                        scenario: {
                            a: 'brand new world',
                            c: 'does not exist'
                        }
                    }
                }],
            expectedOutcome: {
                a: 'brand new world',
                b: 'world'
            }
        },
        {
            name: 'createScenario: scenario change var type',
            params: [{
                    predefinedVariables: {
                        a: 'hello',
                    }
                }, {
                    scenarios: {
                        scenario: {
                            a: { mytype: 'new' },
                        }
                    }
                }],
            expectedOutcome: {
                a: { mytype: 'new' },
            }
        },
        {
            name: 'createScenario: scenario try to change map',
            params: [{
                    predefinedVariables: {
                        a: new Map([['a', 'world']]),
                    }
                }, {
                    scenarios: {
                        scenario: {
                            a: new Map([['a', 'hello']]),
                        }
                    }
                }],
            expectedSource: 'error',
            expectedOutcome: 'cannot set changes to Map or Set'
        },
        {
            name: 'createScenario: scenario try to change to a map',
            params: [{
                    predefinedVariables: {
                        a: 'hello',
                    }
                }, {
                    scenarios: {
                        scenario: {
                            a: new Map([['a', 'hello']]),
                        }
                    }
                }],
            expectedOutcome: {
                a: new Map([['a', 'hello']])
            }
        }
    ]
};
exports.default = unitTests;
//# sourceMappingURL=createScenario.test.js.map