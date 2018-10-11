/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
    if (!A.length && !B.length)
        return true;
    let arr = A.split("");
    for (let i = 0; i < A.length; i++) {
        arr.push(arr.shift());
        if (arr.join("") == B)
            return true;
    }
    return false;
};