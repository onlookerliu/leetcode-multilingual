class Solution {
    public:
    int widthOfBinaryTree(TreeNode* root) {
        int res = 0;
        vector<int> start;
        helper(root, 0, 1, start, res);
        return res;
    }

    void helper(TreeNode* node, int h, int idx, vector<int>& start, int& res) {
        if (!node) return;
        if (h >= start.size()) start.push_back(idx);
        res = max(res, idx-start[h]+1);
        helper(node->left, h+1, idx*2, start, res);
        helper(node->right, h+1, idx*2+1, start, res);
    }
};

class Solution {
    public:
    int widthOfBinaryTree(TreeNode* root) {
        vector<int> start;
        return helper(root, 0, 1, start);
    }
    int helper(TreeNode* node, int h, int idx, vector<int>& start) {
        if (!node) return 0;
        if (h >= start.size()) start.push_back(idx);
        return max({idx - start[h] + 1, helper(node->left, h+1, idx*2, start), helper(node->right, h+1, idx*2+1, start)});
    }
};