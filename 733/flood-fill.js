/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    let oldColor = image[sr][sc];
    if (oldColor == newColor) {
        return image;
    }
    dfs(image, sr, sc, oldColor, newColor);
    return image;
};

function dfs(image, sr, sc, oldColor, newColor) {
    if (image[sr][sc] == oldColor) {
        image[sr][sc] = newColor;
        // traverse and rendering
        if (sr > 0) dfs(image, sr - 1, sc, oldColor, newColor);
        if (sr + 1 < image.length) dfs(image, sr + 1, sc, oldColor, newColor);
        if (sc > 0) dfs(image, sr, sc - 1, oldColor, newColor);
        if (sc + 1 < image[0].length) dfs(image, sr, sc + 1, oldColor, newColor);
    }
}