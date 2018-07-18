class Solution:
    def __init__(self):
        self.matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    def rotate(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: void Do not return anything, modify matrix in-place instead.
        """
        length = len(matrix)
        tmp = [None]*length

        for i in range(length):
            tmp[i] = [None]*length
            for j in range(length):
                tmp[i][j] = matrix[i][j]

        for i in range(length):
            for j in range(length):
                matrix[i][j] = tmp[length - j - 1][i]

    def show(self):
        self.rotate(self.matrix)
        print(self.matrix)

Solution().show()