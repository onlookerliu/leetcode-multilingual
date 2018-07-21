class Solution(object):
    def hammingWeight(self, n):
        """
        :type n: int
        :rtype: int
        """
        count = 0
        while n > 0:
            tmp = n % 2
            if 1 == tmp:
                count += 1
            n = (n - tmp) / 2
        return count
