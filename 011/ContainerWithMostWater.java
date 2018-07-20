/**
 * ContainerWithMostWater
 */
public class ContainerWithMostWater {
    public int maxArea(int[] height) {
        int l = 0, r = height.length - 1;
        int max = 0, h = 0;
        while (l < r) {
            h = Math.min(height[l], height[r]);
            max = Math.max(max, (r - l) * h);
            while (height[l] <= h && l < r) l++;
            while (height[r] <= h && l < r) r--;
        }
        return max;
    }

    public static void main(String[] args) {
        ContainerWithMostWater sol = new ContainerWithMostWater();
        System.out.println(sol.maxArea(new int[]{1, 2, 4, 3}));
        System.out.println(sol.maxArea(new int[]{1, 8, 6, 2, 5, 4, 8, 3, 7}));
    }
}