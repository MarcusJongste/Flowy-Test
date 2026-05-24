import root from './root';
import verificationCode from './verificationCode';
import error from './error';
import returnFunc from './return';

const sourceTests: { [k: string]: Function } = {
    root,
    verificationCode,
    error,
    return:returnFunc
};
export {
    sourceTests as default
}