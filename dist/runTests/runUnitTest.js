"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = runUnitTest;
const createScenario_1 = __importDefault(require("./scenario/createScenario"));
function runUnitTest(config, typeValidation, { v, unitTests }) {
    // for each unitTest
    return Promise.all(unitTests.map((unitTest) => {
        // create predefined Variables
        const generatedPreDefinedVariables = (0, createScenario_1.default)(config, unitTest);
        return Promise.resolve(typeValidation(generatedPreDefinedVariables, v, unitTest));
    }));
}
//# sourceMappingURL=runUnitTest.js.map