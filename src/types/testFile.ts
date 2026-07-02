import  type unitTest  from './unitTest';
interface testFile {
    [k: string]: any | Array<unitTest>;
    vName:string,
    v: any;
    unitTests: Array<unitTest>;
}
export {
    testFile as default
}