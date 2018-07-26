# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def averageOfLevels(self, root):
        """
        :type root: TreeNode
        :rtype: List[float]
        """
        nodes = [root]
        res = []
        while len(nodes) > 0:
            nodes, avg = self.level_nodes_and_avg(nodes)
            res.append(avg)
        return res

    def level_nodes_and_avg(self, nodes):
        """
        :type nodes: List[TreeNode]
        :rtype next_nodes, avg: List[TreeNode], float
        """
        next_nodes = []
        avg = 0
        for node in nodes:
            avg += node.val
            if node.left:
                next_nodes.append(node.left)
            if node.right:
                next_nodes.append(node.right)
        avg /= len(nodes)
        return next_nodes, avg
