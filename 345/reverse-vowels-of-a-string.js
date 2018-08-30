/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let bytes = s.split('');
    let [i, j] = [0, s.length - 1];
    while (true) {
        while (i < s.length && !isVowel(s[i])) {
            i++;
        }
        while (j >= 0 && !isVowel(s[j])) {
            j--
        }
        if (i >= j) break;
        let temp = bytes[j];
        bytes[j] = bytes[i];
        bytes[i] = temp;
        i++;
        j--;
    }

    return bytes.join('');
};

let isVowel = function (b) {
    return b == 'a' || b == 'e' || b == 'i' || b == 'o' || b == 'u' || b == 'A' || b == 'E' || b == 'I' || b == 'O' || b == 'U';
}