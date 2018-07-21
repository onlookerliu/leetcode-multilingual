class Solution:
    def singleNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        from functools import reduce
        return reduce(lambda x, y: x ^ y, nums)
