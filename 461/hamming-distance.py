class Solution:
    def hammingDistance(self, x, y):
        """
        :type x: int
        :type y: int
        :rtype: int
        """
        z = x ^ y
        count = 0
        while z > 0:
            tmp = z % 2
            if 1 == tmp:
                count += 1
            z = (z - tmp) / 2
        return count
