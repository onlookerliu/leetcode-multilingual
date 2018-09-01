/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    const hash = {};
    for (let num of nums) {
        hash[num] = ~~hash[num] + 1;
    }

    console.log(hash);

    let max = 0;
    for (let num in hash) {
        let c1 = hash[num];
        let c2 = ~~hash[num + 1];
        console.log(c2);
        if (c2 > 0) {
            let t = c1 + c2;
            if (max < t) max = t;
        }
    }

    return max;
};

var findLHS = function(nums) {
    const hash = new Map();
    for (let num of nums) {
        if (hash.has(num)) {
            let pre = hash.get(num);
            hash.set(num, pre+1);
        } else {
            hash.set(num, 1);
        }
    }

    let max = 0;
    for (let [n, c1] of hash.entries()) {
        if (hash.has(n+1)) {
            let t = c1 + hash.get(n+1);
            if (max < t) max = t;
        }
    }

    return max;
};

let nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));