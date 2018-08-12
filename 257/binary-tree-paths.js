/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let res = [];
    if (!root)
        return res;

    let dfs = function (pre, root) {
        if (pre == "") {
            pre = `${root.val}`;
        } else {
            pre += `->${root.val}`;
        }

        if (root.left)
            dfs(pre, root.left);
        if (root.right)
            dfs(pre, root.right);
        if (!root.left && !root.right)
            res.push(pre);
    };

    dfs("", root);
    return res;
};