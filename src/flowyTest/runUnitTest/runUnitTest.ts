/*
S - Single Responsibility Principle (SRP): A class should have only one reason to change, meaning it should focus on a single task or responsibility.
O - Open-Closed Principle (OCP): Software entities should be open for extension but closed for modification, allowing new functionality to be added without changing existing code.
L - Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types, ensuring derived classes extend the base class without changing its expected behavior.
I - Interface Segregation Principle (ISP): Clients should not be forced to depend on methods they do not use, encouraging smaller, specific interfaces rather than large, general ones.
D - Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces).
*/

import {  type unitTest } from '../types';
function runUnitTest(unitTest: unitTest, f: Function): Promise<any> {
    const { params } = unitTest;
    return Promise.resolve(f(...params))
    
} 

export {
    runUnitTest as default
}