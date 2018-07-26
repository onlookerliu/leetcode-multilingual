/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let n = moves.length;
    if (n % 2 != 0)
        return false;
    let [x, y] = [0, 0];
    for (let i = 0; i < n; i++) {
        if (moves[i] == 'L') {
            x -= 1;
        }
        if (moves[i] == 'R') {
            x += 1;
        }
        if (moves[i] == 'U') {
            y += 1;
        }
        if (moves[i] == 'D') {
            y -= 1;
        }
    }
    return x == 0 && y == 0;
};