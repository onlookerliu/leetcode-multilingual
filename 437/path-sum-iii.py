# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def __init__(self, count):
        self.count = count

    def pathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: int
        """
        if root is None:
            return 0

        self.count = 0

        def dfs(node, tmp):
            if tmp == sum:
                self.count += 1
            if node.left is not None:
                return dfs(node.left, tmp + node.left.val)
            if node.right is not None:
                return dfs(node.left, tmp + node.right.val)

        dfs(root, root.val)
        if root.left is not None:
            self.count += self.pathSum(root.left, sum)
        if root.right is not None:
            self.count += self.pathSum(root.right, sum)

        return self.count
