/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
    let n = stones.length;
    if (n == 0 || stones[1] != 1) {
        return false;
    }

    if (n == 1 || n == 2) {
        return true;
    }

    let last = stones[n - 1];

    let hs = {};
    for (let i = 0; i < n; i++) {
        if (i > 3 && stones[i] > stones[i - 1] * 2) {
            return false;
        }
        hs[stones[i]] = true;
    }

    let dfs = function (hs, pos, jump) {
        if (pos + jump - 1 == last || pos + jump == last || pos + jump + 1 == last) {
            return true;
        }

        for (let i = 1; -1 <= i; i--) {
            if (jump + i > 0 && hs[pos + jump + i]) {
                if (dfs(hs, pos + jump + i, jump + i)) {
                    return true;
                }
            }
        }

        return false;
    };

    return dfs(hs, 1, 1);
};