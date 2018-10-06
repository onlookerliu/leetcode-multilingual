/**
 * @param {number[]} A
 * @return {number}
 */
var subarrayBitwiseORs = function (A) {
    // 遍历A[i]时，用一个集合pre记录前面所有子数组的或操作的结果
    let s = new Set();
    let pre = new Set();
    for (let i = 0; i < A.length; i++) {
        s.add(A[i]);
        let newPre = new Set();
        newPre.add(A[i]);
        for (let p of pre) {
            let newNum = (p | A[i]);
            newPre.add(newNum);
            s.add(newNum);
        }
        pre = newPre;
    }
    return s.size;
};