class Solution:
    def islandPerimeter(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        """
        m, n = len(grid), len(grid[0])
        if m == 0:
            return 0

        peri = 0
        dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    continue
                for dir in dirs:
                    neighbour_x = i + dir[0]
                    neighbour_y = j + dir[1]
                    if (neighbour_x < 0 or neighbour_x >= m) or (neighbour_y < 0 or neighbour_y >= n):
                        peri += 1
                        continue
                    peri += 0 if grid[neighbour_x][neighbour_y] else 1

        return peri
