/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
    let obs = {};
    for (let i = 0; i < obstacles.length; i++) {
        if (!obs[obstacles[i][0]]) {
            obs[obstacles[i][0]] = new Set();
        }
        obs[obstacles[i][0]].add(obstacles[i][1]);
    }
    const addon = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let [x, y] = [0, 0];
    let direction = 0;
    let maxDist = 0;

    for (let command of commands) {
        if (command == -2) {
            direction = (direction + 3) % 4;
        } else if (command == -1) {
            direction = (direction + 1) % 4;
        } else {
            let [delta_x, delta_y] = addon[direction];
            while (command) {
                if (!obs[x+delta_x] || !obs[x + delta_x].has(y + delta_y)) {
                    x += delta_x;
                    y += delta_y;
                }
                command--;
            }
            maxDist = Math.max(maxDist, x * x + y * y);
        }
    }
    return maxDist;
};

let commands = [4, -1, 4, -2, 4];
let obstacles = [[2, 4]];
console.log(robotSim(commands, obstacles));
