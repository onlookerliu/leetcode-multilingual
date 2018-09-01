/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
    let t = 50;
    while (t > 39) {
        t = 7 * (rand7() - 1) + (rand7() - 1);
    }
    return t % 10 + 1;
};