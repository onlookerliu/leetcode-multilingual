/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (!root)
        return root;

    if (root.val == key) {
        if (!root.left && !root.right) {
            return null;
        } else if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        } else {
            let max = findMax(root.left);
            root.val = max;
            root.left = deleteNode(root.left, max);
        }
    } else if (root.val > key) {
        root.left = deleteNode(root.left, key);
    } else {
        root.right = deleteNode(root.right, key);
    }

    return root;
};

let findMax = function (node) {
    if (!node.right) {
        return node.val;
    }
    return findMax(node.right);
};