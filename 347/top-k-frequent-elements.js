/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let freq = {};
    nums.forEach(item => {
        if (!freq[item]) {
            freq[item] = 1;
        } else {
            freq[item] += 1;
        }
    });

    let arr = [];
    for (let key in freq) {
        arr.push({ num: key, freq: freq[key] });
    }

    arr.sort((entry1, entry2) => entry2.freq - entry1.freq);

    let res = [];
    for (let i = 0; i < k; i++) {
        res.push(+arr[i].num);
    }
    return res;
};