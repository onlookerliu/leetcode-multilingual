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
var findMode = function (root) {
    let arr = [];
    function dfs(root) {
        if (!root) return;
        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }
    dfs(root);
    let res = [];
    let maxCount = 1, currCount = 1;
    if (!arr.length) return res;
    res.push(arr[0]);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i])
            currCount++;
        else
            currCount = 1;
        if (currCount == maxCount)
            res.push(arr[i]);
        if (currCount > maxCount) {
            maxCount = currCount;
            res = [];
            res.push(arr[i]);
        }
    }
    return res;
};

var findMode = function (root) {
    let res = [];
    let maxCount = 1;
    let currCount = 0;
    let pre = null;

    const dfs = function (root, res, maxCount, currCount) {
        if (!root) return;
        dfs(root.left, res, maxCount, currCount);
        if (pre && root.val == pre.val) {
            currCount++;
        } else {
            currCount = 1;
        }
        if (currCount == maxCount) {
            res.push(root.val);
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            res = [];
            res.push(root.val);
        }
        pre = root;
        dfs(root.right, res, maxCount, currCount);
    };
    
    dfs(root, res, maxCount, currCount);
    return res;
};


var findMode = function (root) {
    let res = [];
    let maxCount = 1;
    let currCount = 0;
    let pre = null;

    const dfs = function (root) {
        if (!root) return;
        dfs(root.left);
        if (pre && root.val == pre.val) {
            currCount++;
        } else {
            currCount = 1;
        }
        if (currCount == maxCount) {
            res.push(root.val);
        }
        if (currCount > maxCount) {
            maxCount = currCount;
            res = [];
            res.push(root.val);
        }
        pre = root;
        dfs(root.right);
    };
    
    dfs(root);
    return res;
};