/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    var minn = - (1 << 30) * 2;
    var maxn = (1 << 30) * 2 - 1;
    var ans;
    var arr = x.toString().split('');
    if (x < 0)
        arr.shift();  // remove '-'
    ans = Number(arr.reverse().join(''));
    if (x < 0)
        ans *= -1;
    // console.log(minn, maxn);
    if (ans < minn || ans > maxn)
        return 0;
    else
        return ans;
};

var reverse = function (x) {
    let y = x < 0 ? -x : x, re = 0, maxint = 2147483647;
    while (y > 0) {
        if (re !== 0 && maxint / re < 10) {
            return 0;
        }
        re *= 10;
        re += parseInt(y % 10);
        y = parseInt(y / 10);
    }
    return x < 0 ? -re : re;
};