/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    if (!root)
        return;
    
    let q = [{node: root, step: 0}];

    while (q.length) {
        let item = q.shift();
        let node = item.node;
        let step = item.step;

        node.left && q.push({node: node.left, step: step+1});
        node.right && q.push({node: node.right, step: step+1});

        q.length && (step == q[0].step) && (node.next = q[0].node);
    }
};

var connect = function (root) {
    if (!root)
        return;

    if (root.left) {
        root.left.next = root.right;

        if (root.next)
            root.right.next = root.next.left;
    }

    connect(root.left);
    connect(root.right);
};