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
        extensions: extensions ?? ['.ts'],
        ignore: ignore ?? [],
        testFilePattern: testFilePattern ?? /\.test\.ts$/,
        predefinedVariables: predefinedVariables ?? {},
        throwErrors: throwErrors ?? true,
        logInConsole: logInConsole ?? true
    };
}
//# sourceMappingURL=validateConfig.js.map