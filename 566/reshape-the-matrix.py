class Solution:
    def matrixReshape(self, nums, r, c):
        """
        :type nums: List[List[int]]
        :type r: int
        :type c: int
        :rtype: List[List[int]]
        """
        rows, cols = len(nums), len(nums[0])
        if r * c != rows * cols:
            return nums

        res = [[0 for x in range(c)] for y in range(r)]
        for i in range(r):
            for j in range(c):
                k = i * c + j
                col_idx = k % cols
                row_idx = int((k - col_idx) / cols)
                res[i][j] = nums[row_idx][col_idx]

        return res
