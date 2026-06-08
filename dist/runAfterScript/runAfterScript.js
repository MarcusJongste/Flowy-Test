"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runAfterScript;
function runAfterScript(afterscript) {
    return Promise.resolve(afterscript ? afterscript() : undefined);
}
//# sourceMappingURL=runAfterScript.js.map