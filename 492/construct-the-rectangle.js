/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let bound = ~~Math.sqrt(area);
    for (let i = bound; i > 1; i--) {
        if (area % i == 0)
            return Array(area / i, i);
    }

    return Array(area, 1);
};