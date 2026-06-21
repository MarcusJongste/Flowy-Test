import * as fs from 'fs';
import * as path from 'path';


const configContent = `import { Config } from 'flowy-test';
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
const config: Config = {
    // write here the directories to test 
    dirs: [],
    // RegExp patterns for files to ignore
    ignore: [/index\.(ts|js)$/],
    // file extension to check
    extensions: ['js', 'ts'],
    // which files are tests
    testFilePattern: /test\.(ts|js)$/
};
export default config;`;

const projectRoot = path.resolve(__dirname, '..', '..', '..');
const configPath = path.resolve(projectRoot, 'flowytest.config.js');
if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, configContent);
    console.log('created flowytest.config.json');
} else {
    console.log('Config already exists, skipping flowytest.config creation');
}

console.log('[flowy-test] Installed successfully.');