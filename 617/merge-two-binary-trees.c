/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */

struct TreeNode *mergeTrees(struct TreeNode *t1, struct TreeNode *t2)
{
    if (t1 && t2)
    {
        struct TreeNode *node = (struct TreeNode *)malloc(sizeof(struct TreeNode));
        node->val = t1->val + t2->val;
        node->left = mergeTrees(t1 ? t1->left : NULL, t2 ? t2->left : NULL);
        node->right = mergeTrees(t1 ? t1->right : NULL, t2 ? t2->right : NULL);
        return node;
    }
    return t1 ? t1 : t2;
}