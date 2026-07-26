"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createScenario;
/**
 *
 * @param config
 * @param param1
 * @returns
 */
function createScenario(config, { scenarios }) {
    const predefinedVariables = createPredifinedParams(config);
    if (scenarios === undefined) {
        return predefinedVariables;
    }
    const { scenario } = scenarios;
    Object.entries(scenario).forEach(([varName, change]) => {
        if (predefinedVariables[varName] !== undefined) {
            predefinedVariables[varName] = setChange(predefinedVariables[varName], change);
        }
    });
    return predefinedVariables;
}
/**
 *
 * @param variable
 * @param change
 * @returns
 */
function setChange(variable, change) {
    if (typeof change !== 'object' || Array.isArray(change) || change === null) {
        if (typeof change === 'function') {
            return change();
        }
        return change;
    }
    else {
        if (variable instanceof Map || variable instanceof Set) {
            throw new Error('cannot set changes to Map or Set');
        }
        if (change instanceof Map || change instanceof Set) {
            return change;
        }
        Object.entries(change).forEach(([key, c]) => {
            variable = variable !== null && typeof variable === 'object' ? variable : {};
            variable[key] = setChange(variable[key], c);
        });
        return variable;
    }
}
function createPredifinedParams({ predefinedVariables }) {
    return Object.entries(predefinedVariables).reduce((ret, [key, value]) => {
        if (typeof value === 'function') {
            ret[key] = value();
            return ret;
        }
        ret[key] = value;
        return ret;
    }, {});
}
//# sourceMappingURL=createScenario.js.map