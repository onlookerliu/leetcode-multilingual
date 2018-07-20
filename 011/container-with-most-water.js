/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let [l, r] = [0, height.length - 1];
    let [h, area] = [0, 0];
    while (l < r) {
        h = Math.min(height[l], height[r]);
        area = Math.max(area, h * (r - l));
        while (height[l] <= h && l < r) l++;
        while (height[r] <= h && l < r) r--;
    }
    return area;
};