/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function (S) {
    let res = [];
    if (S.length == 0) {
        res.push(S);
        return res;
    }
    if (S.length == 1) {
        if (S[0] >= '0' && S[0] <= '9')
            res.push(S);
        res.push(S.toLowerCase(), S.toUpperCase());
        return res;
    }

    let tails = letterCasePermutation(S.slice(1));
    let heads = [];
    if (S[0] >= '0' && S[0] <= '9') {
        heads.push(S[0]);
    } else {
        heads.push(S[0].toLowerCase(), S[0].toUpperCase());
    }

    for (let head of heads) {
        for (let tail of tails) {
            res.push(head + tail);
        }
    }

    // for (let i = 0; i < heads.length; i++) {
    //     for (let j = 0; j < tails.length; j++) {
    //         res.push(heads[i] + tails[j]);
    //     }
    // }
    return res;
};


S = "a1b2";
console.log(letterCasePermutation(S));
