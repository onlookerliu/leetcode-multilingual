# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def lowestCommonAncestor(self, root, p, q):
        """
        :type root: TreeNode
        :type p: TreeNode
        :type q: TreeNode
        :rtype: TreeNode
        """
        value = root.val
        left_value = p.val
        right_value = q.val

        if left_value > value and right_value > value:
            return self.lowestCommonAncestor(root.right, p, q)
        elif left_value < value and right_value < value:
            return self.lowestCommonAncestor(root.left, p, q)
        else:
            return root
