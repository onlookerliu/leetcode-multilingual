import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

class Solution {
    public static int robotSim(int[] commands, int[][] obstacles) {
        Map<Integer, List<Integer>> obstacleMap = new HashMap<>();
        for (int i = 0; i < obstacles.length; i++) {
            List<Integer> child = obstacleMap.get(obstacles[i][0]);
            if (child == null) {
                child = new ArrayList<>();
            }
            child.add(obstacles[i][1]);
            obstacleMap.put(obstacles[i][0], child);
        }

        int[][] addon = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        int x = 0, y = 0;
        int direction = 0;
        int maxDist = 0;
        for (int command : commands) {
            if (command == -2) {
                direction = (direction + 3) % 4;
            } else if (command == -1) {
                direction = (direction + 1) % 4;
            } else {
                int deltaX = addon[direction][0];
                int deltaY = addon[direction][1];
                while (command > 0) {
                    x += deltaX;
                    y += deltaY;
                    if (obstacleMap.containsKey(x)) {
                        List<Integer> child = obstacleMap.get(x);
                        if (child != null && child.contains(y)) {
                            x -= deltaX;
                            y -= deltaY;
                            break;
                        }
                    }
                    maxDist = Math.max(maxDist, x*x + y*y);
                    command--;
                }
            }
        }
        maxDist = Math.max(maxDist, x*x + y*y);
        return maxDist;
    }

    public static void main(String[] args) {
        int[] commands = {-2,8,3,7,-1};
        int[][] obstacles = {{-4, -1}, {1, -1}, {1, 4}, {5, 0}, {4, 5}, {-2, -1}, {2, -5}, {5, 1}, {-3, -1}, {5, -3}};
        System.out.println(robotSim(commands, obstacles));
    }
}