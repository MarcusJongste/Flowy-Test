interface Config {
    dirs: Array<string>;
    predefinedVariables: {
        [k: string]: any;
    };
    extensions: string[];
    ignore: RegExp[];
    testFilePattern: RegExp;
    throwErrors: boolean;
    logInConsole: boolean;
}
export { Config as default };
//# sourceMappingURL=config.d.ts.map