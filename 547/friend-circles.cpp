class Solution
{
  public:
    int findCircleNum(vector<vector<int>> &M)
    {
        int n = M.size(), res = 0;
        vector<bool> visited(n, false);
        for (int i = 0; i < n; i++)
        {
            if (visited[i])
                continue;
            helper(M, i, visited);
            res++;
        }
        return res;
    }
    void helper(vector<vector<int>> &M, int k, vector<bool> &visited)
    {
        visited[k] = true;
        for (int i = 0; i < M.size(); i++)
        {
            if (!M[k][i] || visited[i])
                continue;
            helper(M, i, visited);
        }
    }
};