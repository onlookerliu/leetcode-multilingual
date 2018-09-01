/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let [i, j, res] = [0, 0, 0];
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            res++;
            i++;
        }
        j++;
    }

    return res;
};