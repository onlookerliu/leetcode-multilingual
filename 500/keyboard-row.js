/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
    return words.filter(inOneRow);
};

function inOneRow(word) {
    let keyboard = [];
    
    keyboard[0] = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    keyboard[1] = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    keyboard[2] = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    

    function inRow(rows, index, word) {
        let row = rows[index];
        let chars = word.toLowerCase().split('');
        for (let char of chars) {
            if (row.indexOf(char) == -1) {
                return false;
            }
        }

        return true;
    }

    return inRow(keyboard, 0, word) || inRow(keyboard, 1, word) || inRow(keyboard, 2, word);
    
}