/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    let counts = {};
    for (let card of deck) {
        counts[card] = ~~counts[card] + 1;
    }
    for (let i = 2; i <= deck.length; i++) {
        if (deck.length % i) continue;
        let ok = true;
        for (let item of Object.entries(counts)) {
            if (item[1] % i) {
                ok = false;
                break;
            }
        }
        if (ok) return true;
    }
    return false;
};