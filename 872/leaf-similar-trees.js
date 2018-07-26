/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
    let arr1 = [];
    let arr2 = [];
    getLeaves(root1, arr1);
    getLeaves(root2, arr2);
    if (arr1.length != arr2.length)
        return false;
    else {
        while (arr1.length) {
            let item1 = arr1.pop();
            let item2 = arr2.pop();
            if (item1 != item2)
                return false;
        }
        return true;
    }
}

function getLeaves(root, leaves) {
    if (!root) return;
    if (!root.left && !root.right) {
        leaves.push(root.val);
    }
    getLeaves(root.left, leaves);
    getLeaves(root.right, leaves);
}

let root1 = new TreeNode(1);
let root2 = new TreeNode(2);
console.log(leafSimilar(root1, root2));
