class Solution:
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hash = {}
        for i, item in enumerate(nums):
            if hash.get(item) is None:
                hash[target - item] = i
            else:
                index = hash[item]
                if index < i:
                    return [index, i]

        return [-1, -1]


print(Solution().twoSum([2, 7, 11, 15], 9))
