"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validateOutcome;
function validateOutcome(expectedOutcome, expectedSource = 'result', outcome, result = 'result') {
    // how the result was gottten was not expected
    if (expectedSource && expectedSource !== result) {
        return 'failure';
    }
    // expectedOutcome was a function so now just validate expectedOutcome
    if (result === 'expectedOutcome') {
        return !!expectedOutcome ? 'success' : 'failure';
    }
    // not same type of variable
    if (expectedOutcome.constructor.name !== outcome.constructor.name) {
        return 'failure';
    }
    // expectedOutcome is not an object then validate directly
    if (typeof expectedOutcome !== 'object') { // anything besides object
        return outcome === expectedOutcome ? 'success' : 'failure';
    }
    // for objects we first check what kind of object and revert expected outcome to an array of [key,value]
    return checkForObjectType(expectedOutcome).some(([key, value]) => {
        // if outcome is Map or Set then check .has
        if (outcome instanceof Map || outcome instanceof Set) {
            if (outcome.has(key)) {
                if (outcome instanceof Set) { // set no need to validate value
                    return false; // only return true if it's wrong
                }
                return validateOutcome(value, expectedSource, outcome.get(key), result) !== 'success';
            }
            return true; // return true when outcome ! has key
        }
        if (typeof value === 'object') {
            return validateOutcome(value, expectedSource, outcome[key], result) !== 'success';
        }
        return outcome[key] !== value;
    }) ? 'failure' : 'success';
}
function checkForObjectType(obj) {
    if (obj instanceof Map || obj instanceof Set) {
        // @ts-ignore toArray does exist just TS is not updated yet
        return obj.entries().toArray();
    }
    if (Array.isArray(obj)) {
        return obj.map((v, k) => [k, v]);
    }
    return Object.entries(obj);
}
//# sourceMappingURL=validateOutcome.js.map