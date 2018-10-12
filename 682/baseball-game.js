/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    let valid = [];
    let score = 0;
    for (let op of ops) {
        if (op == "C") {
            score -= valid.pop();
        } else if (op == "D") {
            valid.push(valid[valid.length - 1] * 2);
            score += valid[valid.length - 1];
        } else if (op == "+") {
            valid.push(valid[valid.length - 1] + valid[valid.length - 2]);
            score += valid[valid.length - 1];
        } else {
            valid.push(parseInt(op));
            score += valid[valid.length - 1];
        }
    }
    return score;
};

function isNumber(str) {
    return /^\d+$/.test(str);
}