"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = root;
function root(outcome, { namespace, value }) {
    if (namespace === undefined) {
        throw new Error('wrong unitTest (missing namespace)');
    }
    if (typeof value === 'object' && value.namespace !== undefined && value.value !== undefined) {
        return root.call(this[namespace], outcome, value);
    }
    ;
    return this[namespace];
}
