class Solution:
    def getSum(self, a, b):
        """
        :type a: int
        :type b: int
        :rtype: int
        """
        if b == 0:
            return a
        else:
            return self.getSum(a ^ b, (a & b) << 1)

print(Solution().getSum(-1, 1))