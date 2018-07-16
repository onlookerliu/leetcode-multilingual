class Solution:
    def findComplement(self, num):
        """
        :type num: int
        :rtype: int
        """
        tmp = num
        res = 0
        while tmp > 0:
            res = res * 2 + 1
            tmp = tmp >> 1
        
        res = res ^ num
        return res
