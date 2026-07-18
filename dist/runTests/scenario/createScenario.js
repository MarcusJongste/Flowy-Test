"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createScenario;
0;
/**
 *
 * @param config
 * @param param1
 * @returns
 */
function createScenario(config, { scenarios, name }) {
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
    if (typeof change !== 'object' || Array.isArray(change)) {
        return change;
    }
    else {
        Object.entries(change).forEach(([key, c]) => {
            if (variable instanceof Map || variable instanceof Set) {
                throw new Error('cannot set changes to Map or Set');
            }
            variable[key] = setChange(variable[key], c);
        });
        return variable;
    }
}
function createPredifinedParams({ predefinedVariables }) {
    return Object.entries(predefinedVariables).reduce((ret, [key, value]) => {
        if (typeof value === 'function') {
            ret[key] = value();
        }
        ret[key] = value;
        return ret;
    }, {});
}
//# sourceMappingURL=createScenario.js.map