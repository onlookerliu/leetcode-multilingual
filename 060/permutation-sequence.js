/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
function getPermutation(n, k) {
    // the factorials table for use
    let fact = [];
    fact[0] = 1;
    let arr = [];
    for (let i = 1; i <= n; i++) {
        fact[i] = i * fact[i - 1];
        arr.push(`${i}`);
    }

    var str = "";
    for (let i = n; i >= 1; i--) {
        for (let j = 0; j < i; j++) {
            if (j * fact[i - 1] < k && k <= (j + 1) * fact[i - 1]) {
                let ind = j;
                str = str + arr[ind];
                arr.splice(ind, 1);
                k = k - j * fact[i - 1];
            }
        }
    }
    return str;
}