class Solution {
    public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        if (nums.empty()) return nullptr;
        auto it = std::max_element(nums.begin(), nums.end());
        TreeNode* root = new TreeNode(*it);
        vector<int> left(nums.begin(), it);
        vector<int> right(it+1, nums.end());
        root->left = constructMaximumBinaryTree(left);
        root->right = constructMaximumBinaryTree(right);
        return root;
    }
};

class Solution {
    public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        return makeMBT(nums, 0, nums.size());
    }
    private:
    TreeNode* makeMBT(const vector<int>& nums, int begin, int end) {
        if (begin >= end) return nullptr;
        auto it = std::max_element(nums.begin() + begin, nums.begin() + end);
        TreeNode* root = new TreeNode(*it);
        int index = it - nums.begin();
        root->left = makeMBT(nums, begin, index);
        root->right = makeMBT(nums, index, end);
        return root;
    }
};

class Solution {
    public:
    TreeNode* constructMaximumBinaryTree(vector<int>& nums) {
        vector<TreeNode*> v;
        for (int num : nums) {
            TreeNode* cur = new TreeNode(num);
            while (!v.empty() && v.back()->val < num) {
                cur->left = v.back();
                v.pop_back();
            }
            if (!v.empty()) {
                v.back()->right = cur;
            }
            v.push_back(cur);
        }
        return v.front();
    }
};