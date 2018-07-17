class Solution:
    def findDisappearedNumbers(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        hash = {}
        ans = []

        for num in nums:
            hash[num] = True

        for i in range(len(nums)):
            if not hash.get(i+1):
                ans.append(i+1)

        return ans

nums = [4, 3, 2, 7, 8, 2, 3, 1]
print(Solution().findDisappearedNumbers(nums))