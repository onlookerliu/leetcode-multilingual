class Solution {
public:
    int subarrayBitwiseORs(vector<int>& A) {
        int n = A.size();
        vector<vector<int>> dp(n, vector<int>(n));
        unordered_set<int> ans(begin(A), end(A));
        for (int l = 1; l <= n; ++l) {
            for (int i = 0; i <= n - l; ++i) {
                int j = i + l - 1;
                if (l == 1) {
                    dp[i][j] = A[i];
                    continue;
                }
                dp[i][j] = dp[i][j - 1] | A[j];
                ans.insert(dp[i][j]);
            }
        }
        return ans.size();
    }
};


class Solution {
public:
    int subarrayBitwiseORs(vector<int>& A) {
        int n = A.size();
        vector<int> dp(A);
        unordered_set<int> ans(begin(A), end(A));
        for (int l = 2; l <= n; ++l) {
            for (int i = 0; i <= n - l; ++i) {
                ans.insert(dp[i] |= A[i + l - 1]);
            }
        }
        return ans.size();
    }
};

class Solution {
public:
    int subarrayBitwiseORs(vector<int>& A) {
        int n = A.size();
        // dp[i] := bitwise ors of all subarrays end with A[i]
        // ans = len(set(dp));
        // dp[i] = [b | A[i] for b in dp[i-1]] + A[i]
        // len(dp[i]) <= 32
        // ans = set(dp)
        unordered_set<int> ans;
        unordered_set<int> cur;
        unordered_set<int> nxt;
        for (int a : A) {
            nxt.clear();
            nxt.insert({a});
            for (int b : cur) {
                nxt.insert(a | b);
            }
            cur.swap(nxt);
            ans.insert(begin(cur), end(cur));
        }
        return ans.size();
    }
};