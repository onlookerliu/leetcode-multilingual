/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let [head, ...tail] = [...word];
    if (head == head.toUpperCase())
        return tail.every(char => char == char.toUpperCase()) || tail.every(char => char == char.toLowerCase());

    return tail.every(char => char == char.toLowerCase());
};