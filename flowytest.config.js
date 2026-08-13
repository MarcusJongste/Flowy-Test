/*
 flowy-test will gather all functions found in the directory.
 it will also find all test files matching the testFilePattern.
 and match each testFile function unittest to the function.
 any function without unittest is removed
 then flowy-test will run all unittests
 after you can choose how to process the tests
 1. throw error
 2. have custom code to display ui
 3. ...
*/
const config = {
    // predefined variables e.a. globals or other common used variables to share between tests (get reset for every test)
    predefinedVariables: {},
    // write here the directories to test 
    dirs: ['src/runTests','src/output'],
    // files to ignore
    ignore: [/index.(ts|js)$/],
    // file extension to check
    extensions: ['js', 'ts'],
    // which files are tests
    testFilePattern: /\.test\.(ts|js)$/,
    // output config
    throwErrors: true,
    logInConsole: true,

};
export default config;