class Solution {
    public:
    vector<vector<int>> permuteUnique(vector<int> &nums) {
        vector<vector<int>> res;
        vector<int> out;
        vector<int> visited(nums.size(), 0);
        sort(nums.begin(), nums.end());
        dfs(nums, 0, visited, out, res);
        return res;
    }

    void dfs(vector<int> &nums, int level, vector<int> &visited, vector<int> &out, vector<vector<int>> &res) {
        if (level >= nums.size()) res.push_back(out);
        else {
            for (int i = 0; i < nums.size(); i++) {
                if (visited[i] == 0) {
                    if (i > 0 && nums[i] == nums[i - 1] && visited[i - 1] == 0) continue;
                    visited[i] = 1;
                    out.push_back(nums[i]);
                    dfs(nums, level + 1, visited, out, res);
                    out.pop_back();
                    visited[i] = 0;
                }
            }
        }
    }
};