class FourSum:
    def fourSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        res = []
        nums = sorted(nums)
        size = len(nums)

        for i in range(size-3):
            for j in range(i+1, size-2):
                left, right = j+1, size-1
                while left < right:
                    s = nums[i] + nums[j] + nums[left] + nums[right]
                    if s == target:
                        tmp = [nums[i], nums[j], nums[left], nums[right]]

                        if not res.__contains__(tmp):
                            res.append(tmp)

                        left += 1
                        right -= 1
                    elif s < target:
                        left += 1
                    else:
                        right -= 1

        return res


print(FourSum().fourSum([1, 0, -1, 0, -2, 2], 0))
