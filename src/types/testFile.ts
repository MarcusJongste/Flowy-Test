import  type unitTest  from './unitTest';
interface testFile {
    [k: string]: Function | Array<unitTest> | string | undefined;
    f: Function;
    unitTests: Array<unitTest>;
}
export {
    testFile as default
}