class Solution():
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
        for row in range(len(matrix) - 1):
            for col in range(len(matrix[0]) - 1):
                if matrix[row][col] != matrix[row+1][col+1]:
                    return False
        return True


class Solution():
    def isToeplitzMatrix(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: bool
        """
        return all(matrix[row+1][1:] == matrix[row][:-1] for row in range(len(matrix)-1))

