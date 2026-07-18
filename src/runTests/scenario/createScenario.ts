import { type unitTest,type Config } from "../../types";0

/**
 * 
 * @param config
 * @param param1
 * @returns
 */
function createScenario(config: Config, { scenarios, name }: unitTest): { [k: string]: any } {
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
function setChange(variable:any, change:any):any {
    if (typeof change !== 'object' || Array.isArray(change)) {
        return change;
    } else {
        Object.entries(change).forEach(([key, c]) => {
            if (variable instanceof Map || variable instanceof Set) {
                throw new Error('cannot set changes to Map or Set');
            }
            variable[key] = setChange(variable[key], c);
        });
        return variable;
    }
}

function createPredifinedParams({ predefinedVariables }: Config): { [k: string]: any } {
    return Object.entries(predefinedVariables).reduce((ret: { [k: string]: any }, [key, value]): { [k: string]: any } => {
        if (typeof value === 'function') {
            ret[key] = value();
        }
        ret[key] = value;
        return ret;
    }, {})
}

export {
    createScenario as default
}