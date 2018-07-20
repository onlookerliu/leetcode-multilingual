/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let len = height.length;
    let leftMaxn = [];
    let rightMaxn = [];

    let maxn = 0;
    for (let i = 0; i < len; i++) {
        leftMaxn[i] = maxn;
        maxn = Math.max(maxn, height[i]);
    }

    maxn = 0;
    for (let i = len-1; i > 0; i--) {
        rightMaxn[i] = maxn;
        maxn = Math.max(maxn, height[i]);
    }

    let sum = 0;
    for (let i = 0; i < len; i++) {
        let left = leftMaxn[i];
        let right = rightMaxn[i];
        let minn = Math.min(left, right);

        if (minn > height[i]) {
            sum += minn - height[i];
        }
    }
    return sum;
};

function trap(height) {
    let leftMaxHeight = [];
    let rightMaxHeight = [];
    height.reduce((maxn, h) => {
        maxn = Math.max(maxn, h);
        leftMaxHeight.push(maxn);
        return maxn;
    }, 0);
    height.reduceRight((maxn, h) => {
        maxn = Math.max(maxn, h);
        rightMaxHeight.unshift(maxn);
        return maxn;
    }, 0);

    let sum = 0;
    for (let i = 0, len = height.length; i < len; i++) {
        let left = leftMaxHeight[i];
        let right = rightMaxHeight[i];
        let minn = Math.min(left, right);

        if (minn > height[i]) {
            sum += minn - height[i];
        }
    }
    return sum;
}


let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
