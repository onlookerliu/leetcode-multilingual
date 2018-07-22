/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    this.sum = [];
    for (let i = 0, a = matrix.length; i < a; i++) {
        this.sum[i] = [];
        for (let j = 0, b = matrix[i].length; j < b; j++) {
            let ans = 0;
            ans += i ? this.sum[i - 1][j] : 0;
            ans += j ? this.sum[i][j - 1] : 0;
            ans -= (i && j) ? this.sum[i - 1][j - 1] : 0;
            ans += matrix[i][j];
            this.sum[i][j] = ans;
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    var ans = 0;
    ans += this.sum[row2][col2];
    ans -= row1 ? this.sum[row1 - 1][col2] : 0;
    ans -= col1 ? this.sum[row2][col1 - 1] : 0;
    ans += (row1 && col1) ? this.sum[row1 - 1][col1 - 1] : 0;
    return ans;
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = Object.create(NumMatrix).createNew(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */