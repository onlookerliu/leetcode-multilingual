class Solution {
public:
    bool possibleBipartition(int N, vector<vector<int>>& dislikes) {
        g_ = vector<vector<int>>(N);
        for (const auto& d : dislikes) {
            g_[d[0] - 1].push_back(d[1] - 1);
            g_[d[1] - 1].push_back(d[0] - 1);
        }
        colors_ = vector<int>(N, 0);
        for (int i = 0; i < N; i++)
            if (colors_[i] == 0 && !dfs(i, 1)) return false;
        return true;
    }
    
private:
    vector<vector<int>> g_;
    vector<int> colors_;
    bool dfs(int cur, int color) {
        colors_[cur] = color;
        for (int nxt : g_[cur]) {
            if (colors_[nxt] == color) return false;
            if (colors_[nxt] == 0 && !dfs(nxt, -color)) return false;
        }
        return true;
    }
};

class Solution {
public:
    bool possibleBipartition(int N, vector<vector<int>>& dislikes) {
        vector<vector<int>> g(N);
        for (const auto& d : dislikes) {
            g[d[0] - 1].push_back(d[1] - 1);
            g[d[1] - 1].push_back(d[0] - 1);
        }
        queue<int> q;
        vector<int> colors(N, 0);
        for (int i = 0; i < N; i++) {
            if (colors[i] != 0) continue;
            q.push(i);
            colors[i] = 1;
            while (!q.empty()) {
                int cur = q.front(); q.pop();
                for (int nxt: g[cur]) {
                    if (colors[nxt] == colors[cur]) return false;
                    if (colors[nxt] != 0) continue;
                    colors[nxt] = -colors[cur];
                    q.push(nxt);
                }
            }
        }
        return true;
    }
};