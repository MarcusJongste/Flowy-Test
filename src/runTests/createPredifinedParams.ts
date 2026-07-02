import { type Config } from "../types"

function createPredifinedParams({predefinedVariables}:Config):{[k:string]:any}{
    return Object.entries(predefinedVariables).reduce((ret, [key, value]):{[k:string]:any} => {
        if(typeof value === 'function'){
            ret[key] = value();
        }
        ret[key] = value;
        return ret; 
    }, {})
}

export {
    createPredifinedParams as default
}