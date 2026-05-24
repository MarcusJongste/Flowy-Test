import generateOutputs from "./generateOutputs";
import getTestData from "./getTestData/getTestData";
import runTests from "./runTests";

const outputs = generateOutputs();
const flowyTest: { [k: string]: any } = {
    ...outputs
}
getTestData()
    .then((testFiles) => {
        flowyTest['results'] = runTests(testFiles);
    });



export {
    flowyTest as default
}