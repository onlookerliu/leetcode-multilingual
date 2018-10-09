/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    const sentenceA = A.split(" ");
    const sentenceB = B.split(" ");
    let hash1 = {};
    for (let word of sentenceA) {
        hash1[word] = ~~hash1[word] + 1;
    }
    let hash2 = {};
    for (let word of sentenceB) {
        hash2[word] = ~~hash2[word] + 1;
    }
    let res = [];
    const words = new Set([...Object.keys(hash1), ...Object.keys(hash2)]);
    for (let word of words) {
        if ((!hash1[word] && hash2[word] == 1) || (!hash2[word] && hash1[word] == 1)) {
            res.push(word);
        }
    }
    return res;
};