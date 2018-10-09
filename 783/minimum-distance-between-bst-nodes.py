# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def minDiffInBST(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        vals = []

        def dfs(node):
            if not node:
                return
            if node.left:
                dfs(node.left)
            vals.append(node.val)
            if node.right:
                dfs(node.right)
        
        dfs(root)
        return min([vals[i+1] - vals[i] for i in range(len(vals) - 1)])
        