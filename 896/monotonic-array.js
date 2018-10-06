/** 
 * @param {number[]} A 
 * @return {boolean} 
 */
var isMonotonic = function(A) {
    let n = A.length;
    let i;
    for (i = 1; i < n; i++) {
        if (A[i] < A[i-1]) {
            break;
        }
    }
    if (i == n) {
        return true;
    }
    for (i = 1; i < n; i++) {
        if (A[i] > A[i-1]) {
            break;
        }
    }
    if (i == n) {
        return true;
    }
    return false;
};

let A = [1, 2, 2, 3];
console.log(isMonotonic(A));
