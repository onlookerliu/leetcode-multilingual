/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    let len = citations.length;
    for (let i = len; ; i--) {
        let cnt = 0
            , cnt_equal = 0;
        citations.forEach(function (item) {
            if (item > i) cnt++;
            if (item === i) cnt_equal++;
        });

        if (cnt > i) continue;
        if (cnt + cnt_equal < i) continue;
        return i;
    }
};