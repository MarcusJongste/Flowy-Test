"use strict";
/*
S - Single Responsibility Principle (SRP): A class should have only one reason to change, meaning it should focus on a single task or responsibility.
O - Open-Closed Principle (OCP): Software entities should be open for extension but closed for modification, allowing new functionality to be added without changing existing code.
L - Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types, ensuring derived classes extend the base class without changing its expected behavior.
I - Interface Segregation Principle (ISP): Clients should not be forced to depend on methods they do not use, encouraging smaller, specific interfaces rather than large, general ones.
D - Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces).
*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = verifyOutcome;
const sourceTests_1 = __importDefault(require("./sourceTests"));
const createVerifiedOutput_1 = __importDefault(require("./createVerifiedOutput"));
/**
 * verifyOutcome, it will check how the outcome should be checked and trigger the specified control for each source specified.
 * once the control has completed, it triggers the outcomeGenerator to create outcome
 * @param this rootObj
 * @param outcome the value which should be specified and checked
 * @param expectedOutcome this may be any way to check the expected outcome
 * @param label the label for this unitTest
 * @returns
 */
function verifyOutcome(outcome, { expectedOutcome, label }) {
    const { source } = expectedOutcome;
    if (source === undefined || typeof source !== 'string') {
        throw new Error(`Missing source from expected outcome (${label})`);
    }
    if (sourceTests_1.default[source] === undefined) {
        throw new Error(`Missing verification Function in core (${source})`);
    }
    const result = sourceTests_1.default[source](outcome, expectedOutcome);
    return (0, createVerifiedOutput_1.default)(result, expectedOutcome, label);
}
//# sourceMappingURL=verifyOutput.js.map