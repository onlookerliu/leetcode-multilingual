class Solution:
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        reach = 0
        size = len(nums)
        for i in range(size):
            if i > reach or reach >= size - 1:
                break
            reach = max(reach, i + nums[i])

        return reach >= size - 1


print(Solution().canJump([2, 3, 1, 1, 4]))
