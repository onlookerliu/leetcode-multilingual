# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None


class Solution:
    def levelOrderBottom(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        res = []
        if None == root:
            return res
        nodes = [root]
        while len(nodes) > 0:
            nodes, vals = self.next_level_nodes_and_vals(nodes)
            res.append(vals)
        return res[::-1]

    def next_level_nodes_and_vals(self, nodes):
        """
        :type nodes: List[TreeNode]
        :rtype next_nodes, vals: List[TreeNode], List[Number]
        """
        next_nodes = []
        vals = []
        for node in nodes:
            if None == node:
                continue
            vals.append(node.val)
            if node.left:
                next_nodes.append(node.left)
            if node.right:
                next_nodes.append(node.right)

        return next_nodes, vals
