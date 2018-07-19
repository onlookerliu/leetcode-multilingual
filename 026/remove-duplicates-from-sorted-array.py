class Solution:
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        length = len(nums)
        if length == 0:
            return 0

        i = 0
        for num in nums:
            if num != nums[i]:
                i += 1
                nums[i] = num

        return i + 1
