import { type test } from "../../types";

const unitTests: test = {
    functionValidation: [
        {
            name: 'functionValidation: basic check',
            params: [{}, () => { return true; },true ],
            expectedOutcome: 'success'
        }
    ]
};
export {
    unitTests as default
}