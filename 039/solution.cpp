class Solution {
    public:
    vector<vector<int>> combinationSum(vector<int> &candidates, int target) {
        vector<vector<int>> res;
        vector<int> out;
        sort(candidates.begin(), candidates.end());
        combinationSumHelper(candidates, target, 0, out, res);
        return res;
    }

    void combinationSumHelper(vector<int> &candidates, int target, int start, vector<int> &out, vector<vector<int>> &res) {
        if (target < 0) return;
        else if (target == 0) res.push_back(out);
        else {
            for (int i = start; i < candidates.size(); i++) {
                out.push_back(candidates[i]);
                combinationSumHelper(candidates, target - candidates[i], i, out, res);
                out.pop_back();
            }
        }
    }
};