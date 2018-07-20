class Subsets:
    def subsets(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        """
        results = [[]]

        if nums is None or len(nums) == 0:
            return results

        sorted(nums)

        for i in nums:
            size = len(results)
            for j in range(size):
                tmp = []
                tmp.extend(results[j])
                tmp.append(i)

                results.append(tmp)

        return results
