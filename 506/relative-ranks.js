/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function (nums) {
    let res = new Array(nums.length).fill(0);
    let as = new Array(nums.length).fill(0);

    for (let i = 0; i < nums.length; i++) {
        as[i] = new Athlete(nums[i], i);
    }

    as.sort((a1, a2) => a2.score - a1.score);
    for (let i = 0; i < nums.length; i++) {
        let a = as[i];
        switch (i) {
            case 0:
                res[a.index] = "Gold Medal";
                break;
            case 1:
                res[a.index] = "Silver Medal";
                break;
            case 2:
                res[a.index] = "Bronze Medal";
                break;
            default:
                res[a.index] = `${i+1}`;
                break;
        }
    }

    return res;
};

// function Athlete(score, index) {
//     this.score = score;
//     this.index = index;
// }

class Athlete {
    constructor(score, index) {
        this.score = score;
        this.index = index;
    }

    toString() {
        return `Athlete ${i} with score ${score}`;
    }
};

let nums = [5, 4, 3, 2, 1];
console.log(findRelativeRanks(nums));