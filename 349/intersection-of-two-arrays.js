/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
    let res = [];
    if (!nums1.length || !nums2.length) {
        return res;
    }

    let set1 = [...new Set(nums1)];
    let set2 = [...new Set(nums2)];
    set1.forEach(num => set2.indexOf(num) != -1 && res.push(num))
    return res;
}