# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def sumOfLeftLeaves(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        def loop(root, is_left):
            if root is None:
                return 0
            elif root.left is None and root.right is None and is_left:
                return root.val
            else:
                loop(root.left, True) + loop(root.right, False)

        return loop(root, False)
