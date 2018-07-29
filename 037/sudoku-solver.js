/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    let [m, n] = [board.length, board[0].length];
    if (!m || m != 9 || n != 9) return;
    solveSudokuDFS(board, 0, 0);
    
    function solveSudokuDFS(board, i, j) {
        if (i == 9) return true;
        if (j >= 9) return solveSudokuDFS(board, i+1, 0);
        if (board[i][j] == '.') {
            for (let k = 1; k <= 9; k++) {
                board[i][j] = String.fromCharCode(48 + k);
                if (isValid(board, i, j)) {
                    if (solveSudokuDFS(board, i, j+1)) return true;
                }
                board[i][j] = '.';
            }
        } else {
            return solveSudokuDFS(board, i, j+1);
        }
        return false;
    }

    function isValid(board, i, j) {
        for (let col=0; col < 9; col++) {
            if (col != j && board[i][j] == board[i][col]) return false;
        }
        for (let row=0; row < 9; row++) {
            if (row != i && board[i][j] == board[row][j]) return false;
        }
        for (let row=Math.floor(i/3)*3; row < Math.floor(i/3)*3+3; row++) {
            for (let col=Math.floor(j/3)*3; col < Math.floor(j/3)*3+3; col++) {
                if ((row != i || col != j) && board[i][j] == board[row][col]) return false;
            }
        }
        return true;
    }
};