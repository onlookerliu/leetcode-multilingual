class Solution:
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        y = -x if x < 0 else x
        re = 0
        maxn = 2147483647
        while y > 0:
            if re != 0 and maxn / re < 10:
                return 0
            re *= 10
            re += int(y % 10)
            y = int(y / 10)

        return -re if x < 0 else re
