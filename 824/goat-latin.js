/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
    let ss = S.split(" ");
    for (let i = 0; i < ss.length; i++) {
        ss[i] = handleWord(ss[i], i);
    }
    return ss.join(" ");
};

let handleWord = function (s, i) {
    let postfix = `ma${new Array(i+1).fill("a").join("")}`;
    // let repeatChars = new Array(i + 1).fill("a");
    // let postfix = "ma" + repeatChars.join("");
    console.log(postfix);
    

    if (isBeginWithVowel(s)) {
        return s + postfix;
    }
    return s.slice(1) + s.slice(0, 1) + postfix;
};

let isBeginWithVowel = function (s) {
    if (s[0] == 'a' || s[0] == 'e' || s[0] == 'i' || s[0] == 'o' || s[0] == 'u' || s[0] == 'A' || s[0] == 'E' || s[0] == 'I' || s[0] == 'O' || s[0] == 'U') {
        return true;
    }
    return false;
};

let S = "I speak Goat Latin";
console.log(toGoatLatin(S));