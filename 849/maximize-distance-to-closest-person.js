/**
 * @param {number[]} seats
 * @return {number}
 */
function maxDistToClosest(seats) {
    let len = seats.length;
    let res = []; let dist;
    for (let i = 0; i < len; i++) {
        if (seats[i] == 1)
            continue;
        if (seats[i] != 0 && seats[i] != 1) {
            console.log("the input should only contain 0 and 1!");
        }

        let [left, right] = [0, 0];
        if (i > 0) {
            while (seats[i - left] == 0) {
                left++;
            }
        }

        if (i < len - 1) {
            while (seats[i + right] == 0) {
                right++;
            }
        }
        if (left == 0) {
            dist = right;
        } else if (right == 0) {
            dist = left;
        } else {
            dist = left > right ? right : left;
        }
        res.push(dist);
    }
    return Math.max(...res);
};