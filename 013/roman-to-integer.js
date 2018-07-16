/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    let hash = { 'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 };

    let len = s.length;
    let sum = 0;
    for (let i = 0; i < len - 1; i++) {
        let curr = s[i];
        let next = s[i + 1];
        if (hash[curr] < hash[next]) {
            sum -= hash[curr];
        } else {
            sum += hash[curr];
        }
    }
    return sum + hash[s[len - 1]];
}