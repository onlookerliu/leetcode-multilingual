class Solution {
    public:
    bool PredictTheWinner(vector<int>& nums) {
        return getScore(nums, 0, nums.size()-1) >= 0;
    }

    private:
    // Max diff (my_score - op_score) of subarray nums[l] ~ nums[r].
    int getScore(vector<int>& nums, int l, int r) {
        if (l == r) return nums[l];
        return max(nums[l] - getScore(nums, l + 1, r), nums[r] - getScore(nums, l, r - 1));
    }
};

class Solution {
public:
    bool PredictTheWinner(vector<int>& nums) {
        m_ = vector<int>(nums.size() * nums.size(), 0)
        return getScore(nums, 0, nums.size() - 1) >= 0;
    }

private:
    vector<int> m_;
    int getScore(vector<int>& nums, int l, int r) {
        if (l == r) return nums[l];
        int k = l * nums.size() + r;
        if (m_[k] > 0) return m_[k];
        m_[k] = max(nums[l] - getScore(nums, l+1, r), nums[r] - getScore(nums, l, r-1));
        return m_[k];
    }
};