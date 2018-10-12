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
var findTilt = function (root) {
    let sum = 0;

    function total(root) {
        // 有左右结点
        if (root.left && root.right)
            return root.val + total(root.left) + total(root.right);
        // 有左结点，无右结点
        else if (root.left)
            return root.val + total(root.left);
        // 有左结点，无右结点
        else if (root.right)
            return root.val + total(root.right);
        // 叶子节点
        else
            return root.val;
    }

    function podu(root) {
        // 有左结点和右结点
        if (root.left && root.right)
            return Math.abs(total(root.left) - total(root.right));
        // 只有左结点
        else if (root.left)
            return Math.abs(total(root.left));
        // 只有右结点
        else if (root.right)
            return Math.abs(total(root.right));
        // 没有左也没有右结点
        else
            return 0;
    }

    function traverse(root) {
        if (!root)
            return;
        sum += podu(root);
        traverse(root.left);
        traverse(root.right);
    }
    traverse(root);
    return sum;
};



var findTilt = function (root) {
    function sumAndTilt(root) {
        if (!root)
            return [0, 0];
        let [sumLeft, tiltLeft] = sumAndTilt(root.left);
        let [sumRight, tiltRight] = sumAndTilt(root.right);
        return [sumLeft + sumRight + root.val, Math.abs(sumLeft - sumRight) + tiltLeft + tiltRight];
    }
    let [sumTree, tiltTree] = sumAndTilt(root);
    return tiltTree;
};