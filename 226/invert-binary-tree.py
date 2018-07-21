# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def invertTree(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        if None == root:
            return None
        if None != root.left:
            self.invertTree(root.left)
        if None != root.right:
            self.invertTree(root.right)
        root.left, root.right = root.right, root.left
        return root
