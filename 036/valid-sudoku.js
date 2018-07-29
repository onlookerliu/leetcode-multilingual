/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    if (!board.length || !board[0].length) return false;
    let [m, n] = [board.length, board[0].length];
    let rowFlag = [...Array(m)].map(r => Array(n).fill(false));
    let colFlag = [...Array(m)].map(r => Array(n).fill(false));
    let cellFlag = [...Array(m)].map(r => Array(n).fill(false));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] >= '1' && board[i][j] <= '9') {
                let c = board[i][j] - '1';
                if (rowFlag[i][c] || colFlag[c][j] || cellFlag[3 * Math.floor(i / 3) + Math.floor(j / 3)][c]) return false;
                rowFlag[i][c] = true;
                colFlag[c][j] = true;
                cellFlag[3 * Math.floor(i / 3) + Math.floor(j / 3)][c] = true;
            }
        }
    }
    return true;
};