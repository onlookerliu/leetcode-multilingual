class Solution
{
  public:
    int lenLongestFibSubseq(vector<int> &A)
    {
        const int n = A.size();
        unordered_map<int, int> m;
        for (int i = 0; i < n; ++i)
            m[A[i]] = i;
        vector<vector<int>> dp(n, vector<int>(n, 2));
        int ans = 0;
        for (int j = 0; j < n; ++j)
            for (int k = j + 1; k < n; ++k) {
                int a_i = A[k] - A[j];
                if (a_i >= A[j]) break;
                auto it = m.find(a_i);
                if (it == end(m)) continue;
                int i = it->second;
                dp[j][k] = dp[i][j] + 1;
                ans = max(ans, dp[j][k]);
            }
        return ans;
    }
};