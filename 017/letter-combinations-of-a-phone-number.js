/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const phone = {'2': "abc", '3': "def", '4': "ghi", '5': "jkl", '6': "mno", '7': "pqrs", '8': "tuv", '9': "wxyz"};

    if (!digits.length)
        return null;
    // return digits.split('').reduce((ls, digit) => {
    //     phone[digit].split('').map(char => ls.map(e => e + char));
    // }, [""]);

    let ls = [""];
    for (let digit of digits) {
        phone[digit].split('').forEach(char => {
            console.log(ls);
            
            ls = ls.map(e => e + char);
        });
    }
    return ls;
};

let digits = "23";
console.log(letterCombinations(digits));

