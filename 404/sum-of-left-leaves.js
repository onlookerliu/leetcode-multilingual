/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
    let ans = 0;

    root && root.left && dfs(root.left, 1);
    root && root.right && dfs(root.right, 0);

    function dfs(node, pos) {
        pos && node && !node.left && !node.right && (ans += node.val);

        node && node.left && dfs(node.left, 1);
        node && node.right && dfs(node.right, 0);
    }

    return ans;
};

var sumOfLeftLeaves = function(root) {
    function loop(root, isLeft) {
        if (!root) return 0;
        else if (!root.left && !root.right && isLeft) return root.val;
        else return loop(root.left, true) + loop(root.right, false);
    }
    return loop(root, false);
}