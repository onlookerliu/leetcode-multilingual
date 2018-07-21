# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def __init__(self):
        self.max_depth = -1

    def maxDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        self.dfs(root, 0)
        return self.max_depth

    def dfs(self, root, depth):
        if None == root:
            self.max_depth = max(self.max_depth, depth)
            return
        self.dfs(root.left, depth+1)
        self.dfs(root.right, depth+1)
