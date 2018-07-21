/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    let res = [];
    if (null == root)
        return res;
    let nodes = [root];
    while (nodes.length > 0) {
        [nodes, vals] = nextLevelNodesAndVals(nodes);
        res.push(vals);
    }
    return res.reverse();
};

function nextLevelNodesAndVals(nodes) {
    let nextNodes = [];
    let vals = [];
    for (let node of nodes) {
        if (null == node)
            continue;
        vals.push(node.val);
        if (node.left) {
            nextNodes.push(node.left);
        }
        if (node.right) {
            nextNodes.push(node.right);
        }
    }
    return [nextNodes, vals];
}