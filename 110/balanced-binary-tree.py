# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def __init__(self):
        self.balanced = True

    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        self.dfs(root)
        return self.balanced

    def dfs(self, root):
        """
        :type root: TreeNode
        :rtype depth: Number
        """
        if None == root:
            return
        left_height = self.dfs(root.left) if root.left else 0
        right_height = self.dfs(root.right) if root.right else 0

        if abs(left_height - right_height) > 1:
            self.balanced = False

        return max(left_height, right_height) + 1
