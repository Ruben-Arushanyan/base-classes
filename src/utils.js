export const isFunction = (x) => typeof x === 'function'
export const eq = (x, y) => (x === y) || (x !== x && y !== y)
export const memoizeByArgs = (fn) => {
    let lastArgs;
    let lastResult;

    const memoFn = (...args) => {
        if (!lastArgs || !isSameArgs(lastArgs, args)) {
            lastResult = fn(...args);
        }
        lastArgs = args;
        return lastResult;
    };
    memoFn.clearCache = () => {
        lastArgs = undefined;
        lastResult = undefined;
    };
    return memoFn;
};






const isSameArgs = (args1, args2) => {
    if (args1.length !== args2.length) {
        return false;
    }
    for (let i = 0; i < args1.length; ++i) {
        if (!eq(args1[i], args2[i])) {
            return false;
        }
    }
    return true;
};
