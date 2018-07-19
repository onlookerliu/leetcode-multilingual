class Solution:
    def isSubtree(self, s, t):
        """
        :type s: TreeNode
        :type t: TreeNode
        :rtype: bool
        """
        if s is None and t is None:
            return True
        else:
            if self.isSameTree(s, t):
                return True
            elif s.left is not None and s.right is not None:
                return self.isSubtree(s.left, t) or self.isSubtree(s.right, t)
            elif s.left is not None:
                return self.isSubtree(s.left, t)
            elif s.right is not None:
                return self.isSubtree(s.right, t)
            else:
                return False

    def isSameTree(self, p, q):
        """
        :type p: TreeNode
        :type q: TreeNode
        :rtype: bool
        """
        if p is not None and q is not None:
            if p.val == q.val:
                return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
            else:
                return False
        elif p is None and q is None:
            return True
        else:
            return False
