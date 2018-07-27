/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
    public:
        TreeNode* pre = NULL;
        vector<int> findMode(TreeNode* root) {
            vector<int> res;
            int currCount = 0, maxCount = 1;
            dfs(root, res, maxCount, currCount);
            return res;
        }

    void dfs(TreeNode* root, vector<int> &res, int &maxCount, int &currCount) {
        if (!root) return;
        dfs(root->left, res, maxCount, currCount);
        if (pre && root->val == pre->val)
            currCount++;
        else
            currCount = 1;
        if (currCount == maxCount)
            res.push_back(root->val);
        if (currCount > maxCount) {
            maxCount = currCount;
            res.clear();
            res.push_back(root->val);
        }
        pre = root;
        dfs(root->right, res, maxCount, currCount);
    }
};