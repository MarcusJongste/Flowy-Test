import { unitTest } from "../../types";

function sortUnitTests(unitTests:unitTest[]):unitTest[]{
    return unitTests.sort((a,b) => {
        // sorting logic here
        return -1;
    })
}
export {
    sortUnitTests as default;
}