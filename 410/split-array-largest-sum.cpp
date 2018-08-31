class Solution {
    public:
    int splitArray(vector<int>& nums, int m) {
        const int n = nums.size();
        vector<int> sums(n);
        // dp[i][j] := min of largest sum of splitting nums[0] - nums[j] into i groups.
        vector<vector<int>> dp(m+1, vector<int>(n, INT_MAX));
        sums[0] = nums[0];
        for (int i = 1; i < n; ++i)
            sums[i] = sums[i-1] + nums[i];
        for (int i = 0; i < n; ++i)
            dp[1][i] = sums[i];

        for (int i = 2; i <= m; ++i)
            for (int j = i-1; j < n; ++j)
                for (int k = 0; k < j; ++k)
                    dp[i][j] = min(dp[i][j], max(dp[i-1][k], sums[j] - sums[k]));
        return dp[m][n-1];
    }
};

// binary search
class Solution {
    public:
    int splitArray(vector<int>& nums, int m) {
        long l = *max_element(begin(nums), end(nums));
        long r = accumulate(begin(nums), end(nums), 0L) + 1;
        while (l < r) {
            long limit = (r - l) / 2 + l;
            if (min_groups(nums, limit) > m)
                l = limit + 1;
            else 
                r = limit;
        }
        return l;
    }

    private:
    int min_groups(const vector<int>& nums, long limit) {
        long sum = 0;
        int groups = 1;
        for (int num : nums) {
            if (sum + num > limit) {
                sum = num;
                ++groups;
            } else {
                sum += num;
            }
        }
        return groups;
    }
};