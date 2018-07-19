/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    const triangleArea = (x1, y1, x2, y2, x3, y3) => Math.abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));

    let len = points.length;
    let maxArea = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            for (let k = j + 1; k < len; k++) {
                [[x1, y1], [x2, y2], [x3, y3]] = [points[i], points[j], points[k]];
                maxArea = Math.max(maxArea, triangleArea(x1, y1, x2, y2, x3, y3));
            }
        }
    }
    return maxArea;
};

