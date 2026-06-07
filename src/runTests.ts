
/*
S - Single Responsibility Principle (SRP): A class should have only one reason to change, meaning it should focus on a single task or responsibility.
O - Open-Closed Principle (OCP): Software entities should be open for extension but closed for modification, allowing new functionality to be added without changing existing code.
L - Liskov Substitution Principle (LSP): Subtypes must be substitutable for their base types, ensuring derived classes extend the base class without changing its expected behavior.
I - Interface Segregation Principle (ISP): Clients should not be forced to depend on methods they do not use, encouraging smaller, specific interfaces rather than large, general ones.
D - Dependency Inversion Principle (DIP): High-level modules should not depend on low-level modules; both should depend on abstractions (interfaces).
*/
import { type test, type testResult, type unitTest, type testDoc, type testFile } from './types';
import verifyOutcome from './verifyOutput';
import runUnitTest from './runUnitTest';
import runAfterScript from './runAfterScript';


type namespaceTestResult = {
    [k: string]: {[k:string]:Array<testResult>}
}

/**
 * runTests runs all tests passed as testDoc
 * @param testFiles passed by getTestData based on config folders
 * @returns Object of namespaceTestResult, this is ordered by test -> namespace -> module -> function -> unitTests
 */
function runTests(testFiles: { [k: string]: testFile }) {
    return Promise.all(Object.entries(testFiles).map(([functionName, functionTestFile]) => {
        return runUnitTestCollection(functionTestFile, functionName);
    }))
}

/**
 * runUnitTestCollection does each unitTest in order and only completes the next one after previous ended
 * @param unitTestFile ( testFiles
 * @param label function name
 * @param count current unitTest array index
 */
function runUnitTestCollection(unitTestFile: testFile,functionName:string, count: number = 0): Promise<Array<testResult>> {
    const { f, unitTests } = unitTestFile;
    return Promise.resolve(runUnitTest(unitTests[count], f))
        .then((unitTestResult) => {
            const verifiedResult = verifyOutcome(unitTestResult, unitTests[count]);

            return Promise.resolve(runAfterScript(unitTests[count].afterScript))
                .then(() => {
                    // increase count
                    count++;
                    // trigger next if more exist
                    if (unitTests.length > count) {
                        return Promise.resolve(runUnitTestCollection(unitTestFile, functionName, count))
                            .then((endResult) => {
                                return [verifiedResult,...endResult];
                            })
                    }
                    // return if completed
                    return [verifiedResult];
                });
        });
}

export {
    runTests as default
}