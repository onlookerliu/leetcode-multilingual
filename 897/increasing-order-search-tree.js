/** 
 * Definition for a binary tree node. 
 * function TreeNode(val) { 
 *     this.val = val; 
 *     this.left = this.right = null; 
 * } 
 */
/** 
 * @param {TreeNode} root 
 * @return {TreeNode} 
 */
var increasingBST = function(root) {
    let dummyHead = new TreeNode(0);
    let p = dummyHead;

    let dfs = function(node) {
        if (!node) {
            return;
        }
        dfs(node.left);
        p.right = new TreeNode(node.val);
        p = p.right;
        dfs(node.right);
    };
    dfs(root);
    return dummyHead.right;
};