/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
    let count = 0;
    for (let i = L; i <= R; i++) {
        let weight = hammingWeight(i);
        if (isPrime(weight))
            count++;
    }
    return count;
};

var hammingWeight = function (n) {
    let count = 0;
    while (n > 0) {
        let tmp = n % 2;
        if (1 == tmp) {
            count++;
        }
        n = (n - tmp) / 2;
    }
    return count;
};

var hammingWeight = function (n) {
    let count = 0;
    while (n != 0) {
        count++;
        n = n & (n - 1);
    }
    return count;
};

var isPrime = function (n) {
    if (n < 2) return false;
    if (n == 2 || n == 3) return true;
    for (let i = 2; i < Math.sqrt(n) + 1; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
};

var isPrime = function (n) {
    const primeSet = new Set([2, 3, 5, 7, 11, 13, 17, 19]);
    if (primeSet.has(n)) {
        return true;
    }
    return false;
};