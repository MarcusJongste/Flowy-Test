import fs from 'fs';
import path from 'path';
import generateOutputs from "./generateOutputs";
import getTestData from "./getTestData/getTestData";
import runTests from "./runTests";

const configPath = path.resolve(process.cwd(), 'flowytest.config.json');
let config = {};
const outputs = generateOutputs();
const flowyTest: { [k: string]: any } = {
    ...outputs
}
if (fs.existsSync(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

    getTestData(config)
        .then((testFiles) => {
            flowyTest['results'] = runTests(testFiles);
        });
    }



export {
    flowyTest as default
}
