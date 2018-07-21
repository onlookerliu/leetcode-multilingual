# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def __init__(self):
        self.tmp = []
        self.ans = []

    def pathSum(self, root, sum):
        """
        :type root: TreeNode
        :type sum: int
        :rtype: List[List[int]]
        """
        self.dfs(root, sum)
        return self.ans

    def dfs(self, root, sum):
        if root is None:
            return

        self.tmp.append(root.val)
        if root.left is None and root.right is None:
            if root.val == sum:
                res = list(map(lambda x: x, self.tmp))
                self.ans.append(res)
            return

        if root.left is not None:
            self.dfs(root.left, sum - root.val)
            self.tmp = self.tmp[:len(self.tmp)-1]

        if root.right is not None:
            self.dfs(root.right, sum - root.val)
            self.tmp = self.tmp[:len(self.tmp)-1]
