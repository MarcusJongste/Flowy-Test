"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = createPredifinedParams;
function createPredifinedParams({ predefinedVariables }) {
    return Object.entries(predefinedVariables).reduce((ret, [key, value]) => {
        if (typeof value === 'function') {
            ret[key] = value();
        }
        ret[key] = value;
        return ret;
    }, {});
}
//# sourceMappingURL=createPredifinedParams.js.map