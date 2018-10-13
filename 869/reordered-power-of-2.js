/**
 * @param {number} N
 * @return {boolean}
 */
var reorderedPowerOf2 = function (N) {
    let powerOf2 = new Set();
    for (let i = 0; i < 32; i++) {
        let n = `${1 << i}`;
        powerOf2.add(n.split('').sort((a, b) => a - b).join(''));
    }

    let m = `${N}`.split('').sort((a, b) => a - b).join('');
    return powerOf2.has(m);
};