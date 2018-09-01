/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    if (k < 0)
        return 0;

    const record = new Map();

    for (let num of nums) {
        if (!record.has(num)) {
            record.set(num, 1);
        } else {
            let pre = record.get(num);
            record.set(num, pre + 1);
        }
    }

    let ans = 0;
    if (k == 0) {
        for (let count of record.values()) {
            if (count > 1)
                ans++;
        }
        return ans;
    }

    for (let num of record.keys()) {
        if (record.get(num - k) > 0)
            ans++;
    }

    return ans;

};

// common version (much easier)
// var findPairs = function (nums, k) {
//     if (k < 0)
//         return 0;

//     const record = {};

//     for (let num of nums) {
//         record[num] = ~~record[num] + 1;
//     }

//     let ans = 0;
//     if (k == 0) {
//         for (let count of Object.values(record)) {
//             if (count > 1)
//                 ans++;
//         }
//         return ans;
//     }

//     for (let num of Object.keys(record)) {
//         if (record[num - k] > 0)
//             ans++;
//     }

//     return ans;
// };