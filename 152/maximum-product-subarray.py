class Solution:
    def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        neg, pos = 1, 1
        res = - (1 << 32)
        for num in nums:
            neg_mul, pos_mul = neg * num, pos * num
            neg = min(neg_mul, pos_mul, 1)
            pos = max(pos_mul, neg_mul, 1)
            res = max(neg_mul, pos_mul, res)
        return res


nums = [-2, 0, -1]
print(Solution().maxProduct(nums))