"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = resetScenario;
function resetScenario({ scenarios }) {
    if (scenarios === undefined) {
        return undefined;
    }
    const { globalVars } = scenarios;
    if (globalVars !== undefined) {
        globalVars.forEach((variable) => {
            // delete globalVar
        });
    }
}
//# sourceMappingURL=resetScenario.js.map