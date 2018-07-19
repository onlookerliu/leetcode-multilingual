/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(list) {
    let arr = list.filter(x => x > 0);
    let len = arr.length;
    return search(arr, 1, len);
}

function search(arr, l, u) {
    if (arr.length == 0)
        return l;
    let m = (l + u) >> 1;
    let arr1 = arr.filter(x => x <= m);
    let arr2 = arr.filter(x => x > m);
    if (arr1.length == m) {
        return search(arr2, m + l, u);
    } else {
        return search(arr1, l, m);
    }
}