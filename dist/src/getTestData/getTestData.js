"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = getTestData;
function getTestData() {
    const context = require.context('../../flowyCore', true, /\.(ts|test.ts)$/, 'lazy');
    const testDocument = {};
    return Promise.all(context.keys().map((filePath, i) => {
        if (filePath[0] !== '.' && filePath.indexOf('index.ts') === -1) {
            const splitPath = filePath.split('/'), fileName = splitPath[splitPath.length - 1], testFileName = fileName.substring(0, fileName.indexOf('.')), module = splitPath[splitPath.length - 2], namespace = splitPath[splitPath.length - 3] || 'root';
            return context(filePath)
                .then((Module) => {
                // for each export in file
                Object.entries(Module).forEach(([exportKey, file]) => {
                    if (typeof file === 'function' || fileName.indexOf('.test.ts') > -1) {
                        exportKey = exportKey === 'default' ? testFileName : exportKey;
                        testDocument[namespace] = testDocument[namespace] || {};
                        testDocument[namespace][module] = testDocument[namespace][module] || {};
                        testDocument[namespace][module][exportKey] = testDocument[namespace][module][exportKey] || {};
                        if (fileName.indexOf('.test.ts') > -1) {
                            testDocument[namespace][module][exportKey] = { ...testDocument[namespace][module][exportKey], unitTests: file };
                        }
                        else {
                            testDocument[namespace][module][exportKey] = { ...testDocument[namespace][module][exportKey], f: file };
                        }
                    }
                });
            });
        }
        return Promise.resolve();
    }))
        .then(() => {
        console.log(testDocument);
        return testDocument;
    });
}
