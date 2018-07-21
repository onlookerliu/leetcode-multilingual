/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let visited = {};
    while (n) {
        if (n == 1) return true;
        if (visited[n]) return false;

        visited[n] = true;
        n = n.toString().split('').map(char => (char - '0') ** 2).reduce((a, b) => a + b, 0);
    }
};