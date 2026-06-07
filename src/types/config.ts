interface Config {
    dirs: Array<string>;
    extensions?: string[];
    ignore?: RegExp[];
    testFilePattern?: RegExp;
}

export {
    Config as default
}