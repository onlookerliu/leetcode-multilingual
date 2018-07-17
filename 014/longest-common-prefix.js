/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length)
        return "";

    function loop(i) {
        if (i == strs[0].length)
            return i;

        let c = strs[0].charAt(i);
        for (let str of strs) {
            if (str.length == i || str[i] != c)
                return i;
        }
        return loop(i+1);
    }

    let longestCommonPrefixLength = loop(0);
    return strs[0].substring(0, longestCommonPrefixLength);
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
