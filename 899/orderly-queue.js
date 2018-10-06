/** 
 * @param {string} S 
 * @param {number} K 
 * @return {string} 
 */
var orderlyQueue = function (S, K) {
    if (K > 1) {
        let s = S.split("");
        s.sort();
        return s.join("");
    }
    let sSet = new Set();
    let q = [S];
    while (q.length > 0) {
        let s = q.shift();
        sSet.add(s);
        for (var i = 0; i < K; i++) {
            let sub = s.substring(0, i) + s.substring(i + 1) + s[i];
            if (!sSet.has(sub)) {
                q.push(sub);
            }
        }
    }
    let arr = Array.from(sSet);
    arr.sort();
    return arr[0];
};