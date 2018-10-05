class Solution {
    public:
    int subarraySum(vector<int>& nums, int k) {
        const int n = nums.size();
        vector<int> sums(n+1, 0);
        for (int i = 1; i <= n; i++) {
            sums[i] = sum[i-1] + nums[i-1];
        }
        int ans = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = i; j < n; ++j) {
                if (sums[j+1] - sums[i] == k)
                    ans++;
            }
        }
        return ans;
    }
};


class Solution {
    public:
    int subarraySum(vector<int>& nums, int k) {
        if (nums.empty()) return 0;
        unordered_map<int, int> counts{{0, 1}};
        int sum = 0;
        int ans = 0;
        for (const int num : nums) {
            sum += num;
            ans += counts[sum - k];
            ++counts[sum];
        }
        return ans;
    }
};