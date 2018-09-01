/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let l = flowerbed.length;
    for (let i = 0; i < l; i++) {
        if (flowerbed[i] == 0 && ((i + 1 < l && flowerbed[i + 1] == 0) || i + 1 >= l) && ((i - 1 >= 0 && flowerbed[i - 1] == 0) || i - 1 < 0)) {
            flowerbed[i] = 1;
            n--;
            if (n <= 0) {
                return true;
            }
        }
    }

    return n <= 0;
};