class Solution:
    def flipAndInvertImage(self, A):
        """
        :type A: List[List[int]]
        :rtype: List[List[int]]
        """
        return [list(map(lambda x, y: x ^ y, row[::-1], [1]*len(row))) for row in A]
