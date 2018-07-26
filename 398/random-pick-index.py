import random


class Solution():

    def __init__(self, nums):
        """
        :type nums: List[int]
        :type numsSize: int
        """
        self.nums = nums

    def pick(self, target):
        """
        :type target: int
        :rtype: int
        """
        res = []
        for index, item in enumerate(self.nums):
            if item == target:
                res.append(index)

        index = int(random.random() * len(res))
        return res[index]
