/*
S - Single Responsibility Principle (SRP): A class should have only one reason to change, meaning it should focus on a single task or responsibility.
O - Open-Closed Principle (OCP): Software entities should be open for extension but closed for modification, allowing new functionality to be added without changing existing code.
L - Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types, ensuring derived classes extend the base class without changing its expected behavior.
I - Interface Segregation Principle (ISP): Clients should not be forced to depend on methods they do not use, encouraging smaller, specific interfaces rather than large, general ones.
D - Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces).
*/

import { type unitTest, type testResult } from '../types';
import sourceTests from './sourceTests';
import createVerifiedOutput from './createVerifiedOutput';
/**
 * verifyOutcome, it will check how the outcome should be checked and trigger the specified control for each source specified.
 * once the control has completed, it triggers the outcomeGenerator to create outcome
 * @param this rootObj 
 * @param outcome the value which should be specified and checked
 * @param expectedOutcome this may be any way to check the expected outcome
 * @param label the label for this unitTest
 * @returns
 */
function verifyOutcome(outcome: any, { expectedOutcome, label }:unitTest): testResult {
    const {  source } = expectedOutcome;
    if (source === undefined || typeof source !== 'string') { throw new Error(`Missing source from expected outcome (${label})`); }
    if (sourceTests[source] === undefined) { throw new Error(`Missing verification Function in core (${source})`); }

    const result = sourceTests[source]( outcome, expectedOutcome);
    return createVerifiedOutput(result, expectedOutcome, label);
}


export {
    verifyOutcome as default
}