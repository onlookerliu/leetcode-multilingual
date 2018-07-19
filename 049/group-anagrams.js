/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let ans = [];
    let hash = {};

    strs.forEach(function (item) {
        let str = item.split('').sort().join('');
        if (hash[str] === undefined) {
            hash[str] = ans.length;
            ans.push([item]);
        } else {
            ans[hash[str]].push(item);
        }
    });

    return ans;
}