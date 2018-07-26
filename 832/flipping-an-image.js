/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    return A.map(row => row.reverse()).map(row => row.map(element => element ^ 1));
};