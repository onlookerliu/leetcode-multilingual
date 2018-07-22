const superPowUtil = function (a, b) {
    if (b == 0)
        return 1;
    a = a % 1337;
    let ans = 1;
    for (let i = 1; i <= b; i++) {
        ans = (ans * a) % 1337;
    }
    return ans;
};

const superPow = function (a, arr) {
    if (arr.length == 0)
        return 1;
    let b = arr.pop();
    return (superPowUtil(superPow(a, arr), 10) * superPowUtil(a, b)) % 1337;
};

console.log(superPow(2, [1, 0]));
