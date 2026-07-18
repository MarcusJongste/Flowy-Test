"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = cloneObj;
function cloneObj(obj) {
    if (obj !== undefined) {
        if (typeof obj !== 'object') {
            return obj;
        }
        else {
            if (Array.isArray(obj)) {
                return cloneArray(obj);
            }
            if (obj instanceof Map || obj instanceof Set) {
                throw new Error('cloneObj is unable to process Map or Set');
            }
            return Object.entries(obj).reduce((ret, [key, value]) => {
                ret[key] = cloneObj(value);
                return ret;
            }, {});
        }
        return obj;
    }
    return undefined;
}
function cloneArray(arr) {
    return arr.length !== 0 ? arr.map(a => cloneObj(a)) : [];
}
//# sourceMappingURL=cloneObj.js.map