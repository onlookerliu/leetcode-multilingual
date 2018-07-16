/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    let s = nums1.concat(nums2);
    s.sort((a, b) => a - b);
    let len = s.length;
    if (len & 1) return s[~~(len/2)];
    else return (s[len/2 - 1] + s[len/2]) / 2;
};

var findMedianSortedArrays = function (nums1, nums2) {
    let s = merge(nums1, nums2);

    function merge(left, right) {
        let ans = [];
        while(left.length && right.length) {
            if (left[0] < right[0]) {
                ans.push(left.shift());
            } else {
                ans.push(right.shift());
            }
        }

        return ans.concat(left, right);
    }

    let len = s.length;
    if (len & 1) return s[~~(len/2)];
    else return (s[len/2 - 1] + s[len/2]) / 2;
}

var findMedianSortedArrays = function(nums1, nums2) {
    let m = nums1.length;
    let n = nums2.length;
    let total = m + n;
    let half = total >> 1;

    if (total & 1)
        return findKth(nums1, m, nums2, n, half+1);
    else
        return (findKth(nums2, m, nums2, n, half) + findKth(nums1, m, nums2, n, half+1)) / 2;
};


function findKth(a, m, b, n, k) {
    if (m > n)
        return findKth(b, n, a, m, k);
    if (m === 0)
        return b[k-1];
    if (k === 1)
        return Math.min(a[0], b[0]);
    
    let pa = Math.min(k >> 1, m);
    let pb = k - pa;

    if (a[pa-1] < b[pb-1])
        return findKth(a.slice(pa), m - pa, b, n, k - pa);
    else if (a[pa-1] > b[pb-1])
        return findKth(a, m, b.slice(pb), n - pb, k - pb);
    else
        return a[pa - 1];
}