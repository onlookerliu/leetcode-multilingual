/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
    return dfs(postorder.length - 1, 0, inorder.length - 1);

    function dfs(index, startPos, endPos) {
        if (startPos > endPos)
            return null;
        let node = new TreeNode(postorder[index]);
        let pos = inorder.indexOf(postorder[index], startPos);

        node.left = dfs(index - 1 - (endPos - pos), startPos, pos - 1);
        node.right = dfs(index - 1, pos + 1, endPos);

        return node;
    }
};