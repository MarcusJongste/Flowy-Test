"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validateConfig;
function validateConfig({ dirs, extensions, ignore, testFilePattern, predefinedVariables, throwErrors, logInConsole }) {
    if (!dirs || dirs.length === 0) {
        throw new Error('missing dirs for testing');
    }
    console.log(`dirs : ${dirs.length}`);
    return {
        dirs,
        extensions: extensions !== null && extensions !== void 0 ? extensions : ['.ts'],
        ignore: ignore !== null && ignore !== void 0 ? ignore : [],
        testFilePattern: testFilePattern !== null && testFilePattern !== void 0 ? testFilePattern : /\.test\.ts$/,
        predefinedVariables: predefinedVariables !== null && predefinedVariables !== void 0 ? predefinedVariables : {},
        throwErrors: throwErrors !== null && throwErrors !== void 0 ? throwErrors : true,
        logInConsole: logInConsole !== null && logInConsole !== void 0 ? logInConsole : true
    };
}
//# sourceMappingURL=validateConfig.js.map