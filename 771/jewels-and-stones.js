/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
    J = J.split('');
    S = S.split('');
    return S.map(char => J.indexOf(char) == -1 ? 0 : 1).reduce((a, b) => a + b);
};