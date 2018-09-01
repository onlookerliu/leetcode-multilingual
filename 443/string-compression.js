/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let [end, count] = [0, 1];
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        if (i + 1 < chars.length && char == chars[i + 1]) {
            count++;
        } else {
            chars[end] = char
            end++

            if (count > 1) {
                let countString = `${count}`;
                for (let num of countString) {
                    chars[end] = num;
                    end++;
                }
            }

            count = 1;
        }
    }

    return end;
};