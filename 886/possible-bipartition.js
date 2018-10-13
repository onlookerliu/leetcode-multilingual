/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function (N, dislikes) {
    let g = [];
    for (let i = 0; i < N; i++) {
        g.push([]);
    }
    for (let d of dislikes) {
        g[d[0] - 1].push(d[1] - 1);
        g[d[1] - 1].push(d[0] - 1);
    }

    let colors = new Array(N).fill(0);
    for (let i = 0; i < N; i++)
        if (colors[i] == 0 && !dfs(i, 1)) return false;
    return true;

    function dfs(cur, color) {
        colors[cur] = color;
        for (let nxt of g[cur]) {
            if (colors[nxt] == color) return false;
            if (colors[nxt] == 0 && !dfs(nxt, -color)) return false;
        }
        return true;
    }
};

var possibleBipartition = function (N, dislikes) {
    let g = [];
    for (let i = 0; i < N; i++) {
        g.push([]);
    }
    for (let d of dislikes) {
        g[d[0] - 1].push(d[1] - 1);
        g[d[1] - 1].push(d[0] - 1);
    }

    let q = [];
    let colors = new Array(N).fill(0);
    for (let i = 0; i < N; i++) {
        if (colors[i] != 0) continue;
        q.push(i);
        colors[i] = 1;
        while (!q.length) {
            let cur = q.shift();
            for (let nxt of g[cur]) {
                if (colors[nxt] == colors[cur]) return false;
                if (colors[nxt] != 0) continue;
                colors[nxt] = -colors[cur];
                q.push(nxt);
            }
        }
    }
    return true;
};