
interface fileSearchResults {
    //searchDirectory
    [k: string]: {
    //fileNames
        [k: string]: {
            // modules
            [k: string]: any
        };
    };
};

export {
    fileSearchResults as default
}