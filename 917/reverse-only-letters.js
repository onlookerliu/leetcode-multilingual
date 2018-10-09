/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function (S) {

    const isAlpha = (ch) => {
        return typeof ch == "string" && ch.length == 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z"); 
    };

    // const isAlpha = (ch) => {
    //     return /^[A-Z]$/i.test(ch);
    // }

    let letters = [];
    for (let ch of S) {
        if (isAlpha(ch)) letters.push(ch);
    }

    let res = "";
    for (let ch of S) {
        if (isAlpha(ch)) {
            res += letters.pop();
        } else {
            res += ch;
        }
    }

    return res;
};

var reverseOnlyLetters = function (S) {
    let res = "";
    let l = S.length - 1;

    const isAlpha = (ch) => {
        return typeof ch == "string" && ch.length == 1 && (ch >= "a" && ch <= "z" || ch >= "A" && ch <= "Z");
    }

    for (let ch of S) {
        if (isAlpha(ch)) {
            while (!isAlpha(S[l]))
                l -= 1;
            res += S[l];
            l -= 1;
        } else {
            res += ch;
        }
    }
    return res;
}

let S = "Test1ng-Leet=code-Q!";
console.log(reverseOnlyLetters(S));
