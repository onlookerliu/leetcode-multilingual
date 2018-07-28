class Solution
{
  public:
    vector<vector<int>> permute(vector<int> &nums)
    {
        vector<vector<int>> res;
        vector<int> out;
        vector<int> visited(nums.size(), 0);
        permuteDFS(nums, 0, visited, out, res);
        return res;
    }

    void permuteDFS(vector<int> &nums, int level, vector<int> &visited, vector<int> &out, vector<vector<int>> &res) {
        if (level == nums.size()) res.push_back(out);
        else {
            for (int i = 0; i < nums.size(); i++) {
                if (visited[i] == 0) {
                    visited[i] = 1;
                    out.push_back(nums[i]);
                    permuteDFS(nums, level + 1, visited, out, res);
                    out.pop_back();
                    visited[i] = 0;
                }
            }
        }
    }
};

class Solution
{
  public:
    vector<vector<int>> permute(vector<int> &num)
    {
        vector<vector<int>> res;
        permuteDFS(num, 0, res);
        return res;
    }
    void permuteDFS(vector<int> &num, int start, vector<vector<int>> &res)
    {
        if (start >= num.size())
            res.push_back(num);
        for (int i = start; i < num.size(); ++i)
        {
            swap(num[start], num[i]);
            permuteDFS(num, start + 1, res);
            swap(num[start], num[i]);
        }
    }
};