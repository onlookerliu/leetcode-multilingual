/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = "";
    let roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
    let value = [1000, 500, 100, 50, 10, 5, 1];
    
    for (let n = 0; n < 7; n += 2) {
        let x = ~~(num / value[n]);

        if (x < 4) {
            for (let i = 1; i <= x; i++)
                res += roman[n];
        } else if (x == 4) {
            res += roman[n];
            res += roman[n-1];
        } else if (x < 9) {
            res += roman[n-1];
            for (let i = 6; i <= x; i++)
                res += roman[n];
        } else if (x == 9) {
            res += roman[n];
            res += roman[n-2];
        }

        num %= value[n];
    }
    return res;
};