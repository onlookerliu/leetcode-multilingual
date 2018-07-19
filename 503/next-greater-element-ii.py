class Solution:
    def nextGreaterElements(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        ans = []
        length = len(nums)
        for i, num in enumerate(nums):
            found = False
            j = (i+1) % length
            while j != i:
                if (nums[j] > num):
                    found = True
                    ans.append(nums[j])
                    break
                j = (j + 1) % length
            if not found:
                ans.append(-1)

        return ans
