/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function averageOfLevels(root) {
    let nodes = [root];
    let res = [];
    while (nodes.length > 0) {
        [nodes, avg] = level_nodes_and_avg(nodes);
        res.push(avg);
    }
    return res;
}

function level_nodes_and_avg(nodes) {
    let next_nodes = [];
    let avg = 0;
    for (let node of nodes) {
        avg += node.val;
        if (node.left)
            next_nodes.push(node.left);
        if (node.right)
            next_nodes.push(node.right);
    }
    avg /= nodes.length;
    return [next_nodes, avg];
}