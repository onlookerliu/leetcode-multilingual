/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    if (!root)
        return;

    let arr = [];
    dfs(root);

    function dfs(node) {
        let left = node.left;
        let right = node.right;
        node.left = node.right = null;

        arr.push(node);

        left && dfs(left);
        right && dfs(right);
    }

    for (let i = 0, len = arr.length; i < len; i++) {
        arr[i].right = arr[i + 1];
    }
};