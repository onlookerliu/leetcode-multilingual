class Solution:
    def maxAreaOfIsland(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        cur_area, max_area = 0, 0
        m, n = len(grid), len(grid[0])

        def area(grid, i, j):
            if grid[i][j] != 1:
                return 0
            total = 1
            grid[i][j] = 2
            if i+1 < m:
                total += area(grid, i+1, j)
            if i-1 >= 0:
                total += area(grid, i-1, j)
            if j+1 < n:
                total += area(grid, i, j+1)
            if j-1 >= 0:
                total += area(grid, i, j-1)
            return total

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    cur_area = area(grid, i, j)
                    max_area = cur_area if cur_area > max_area else max_area
        return max_area
