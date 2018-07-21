# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def hasPathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: bool
        """
        if root is None:
            return False

        if root.left is None and root.right is None:
            if root.val == sum:
                return True
            return False

        has_left_path, has_right_path = False, False
        if root.left is not None:
            has_left_path = self.hasPathSum(root.left, sum - root.val)

        if root.right is not None:
            has_right_path = self.hasPathSum(root.right, sum - root.val)

        return has_left_path or has_right_path
