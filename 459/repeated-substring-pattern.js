/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (str) {
    let len = str.length;

    loop:
    for (let i = 2; i <= len; i++) {  // divided into i parts
        if (len % i) continue;

        let partLen = len / i;
        let base = str.substr(0, partLen);

        for (let j = partLen; j < len; j += partLen) {
            let sub = str.substr(j, partLen);
            if (base !== sub) continue loop;
        }

        return true;
    }

    return false
};

console.log(repeatedSubstringPattern("abab"));
