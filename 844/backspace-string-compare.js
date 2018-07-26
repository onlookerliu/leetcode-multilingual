/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    return strProcess(S) == strProcess(T);
};

function strProcess(str) {
    let arr = str.split('');
    let stack = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if (arr[i] != '#') {
            stack.push(arr[i]);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
}