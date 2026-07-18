
function cloneObj(obj:any):any {
    if (obj !== undefined) {
        if (typeof obj !== 'object') {
            return obj;
        } else {
            if (Array.isArray(obj)) { return cloneArray(obj); }
            if (obj instanceof Map || obj instanceof Set) {
                throw new Error('cloneObj is unable to process Map or Set');
            }
            return Object.entries(obj).reduce((ret: {[k:string | number]:any}, [key, value]: [string | number, any]) => {
                ret[key] = cloneObj(value);
                return ret;
            }, {})
        }
        return obj;
    } 
    return undefined;
}

function cloneArray(arr:Array<any>):Array<any> {
    return arr.length !== 0 ? arr.map(a => cloneObj(a)) : [];
}
export {
    cloneObj as default
}