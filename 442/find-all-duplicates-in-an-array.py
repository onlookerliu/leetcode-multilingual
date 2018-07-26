class Solution:
    def findDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        ans = []
        for i in range(len(nums)):
            item = nums[i]
            val = abs(item) - 1
            if nums[val] < 0:
                ans.append(val+1)
            else:
                nums[val] *= -1

        return ans
