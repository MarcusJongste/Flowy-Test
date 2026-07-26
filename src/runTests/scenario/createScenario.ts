import { type unitTest,type Config } from "../../types";

/**
 * 
 * @param config
 * @param param1
 * @returns
 */
function createScenario(config: Config, { scenarios }: unitTest): { [k: string]: any } {
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
    return predefinedVariables
}

/**
 * 
 * @param variable
 * @param change
 * @returns
 */
function setChange(variable: any, change: any): any {
    if (typeof change !== 'object' || Array.isArray(change) || change === null) {
        if (typeof change === 'function') {
            return change();
        }
        return change;
    } else {
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

function createPredifinedParams({ predefinedVariables }: Config): { [k: string]: any } {
    return Object.entries(predefinedVariables).reduce((ret: { [k: string]: any }, [key, value]): { [k: string]: any } => {
        if (typeof value === 'function') {
            ret[key] = value();
            return ret;
        }
        ret[key] = value;
        return ret;
    }, {})
}

export {
    createScenario as default
}