class Solution:
    def minimumTotal(self, triangle):
        """
        :type triangle: List[List[int]]
        :rtype: int
        """
        n = len(triangle)
        tmp = []

        for i in range(n):
            row = triangle[i]
            for j in range(len(row)):
                row[j] = 0
            tmp.append(row)
            
        last_row = []
        for j in range(n+1):
            last_row.append(0)
        tmp.append(last_row)

        for i in range(n-1, -1, -1):
            for j in range(len(triangle[i])):
                tmp[i][j] = min(tmp[i+1][j], tmp[i+1][j+1]) + triangle[i][j]

        return tmp[0][0]
