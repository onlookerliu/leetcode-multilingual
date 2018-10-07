class Solution:
    def robotSim(self, commands, obstacles):
        """
        :type commands: List[int]
        :type obstacles: List[List[int]]
        :rtype: int
        """
        addon = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        obstacles = set(map(tuple, obstacles))
        # direction: 0-N, 1-E, 2-S, 3-W
        x, y, direction, max_dist = 0, 0, 0, 0
        for command in commands:
            if command == -2:
                direction = (direction - 1) % 4
            elif command == -1:
                direction = (direction + 1) % 4
            else:
                delta_x, delta_y = addon[direction]
                while command:
                    if (x + delta_x, y + delta_y) not in obstacles:
                        x += delta_x
                        y += delta_y
                    command -= 1
                max_dist = max(max_dist, x*x + y*y)
        return max_dist
