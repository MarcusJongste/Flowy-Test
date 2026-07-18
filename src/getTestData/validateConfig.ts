import { Config } from "../types";

function validateConfig({
    dirs,
    extensions,
    ignore,
    testFilePattern,
    predefinedVariables,
    throwErrors,
    logInConsole }: Config): Config {
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

export {
    validateConfig as default
}