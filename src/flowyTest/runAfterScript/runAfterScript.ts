function runAfterScript( afterscript: Function | undefined): Promise<void> {
    return Promise.resolve(afterscript? afterscript(): undefined);
}

export {
    runAfterScript as default
}