/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return dfs(0, nums.length - 1);

    function dfs(start, end) {
        if (start > end)
            return null;

        let mid = (start + end) >> 1;
        let root = new TreeNode(nums[mid]);
        root.left = dfs(start, mid - 1);
        root.right = dfs(mid + 1, end);

        return root;
    }
};