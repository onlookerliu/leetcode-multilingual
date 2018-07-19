/**
 * LargestTriangleArea
 */
public class LargestTriangleArea {

    public double largestTriangleArea(int[][] points) {
        int n = points.length;
        double maxArea = 0.0;
        for (int i = 0; i < n; i++) {
            for (int j = i+1; j < n; j++) {
                for (int k = j+1; k < n; k++) {
                    double a = dist(points[i], points[j]);
                    double b = dist(points[i], points[k]);
                    double c = dist(points[k], points[j]);
                    double s = (a + b + c) / 2;
                    double area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
                    maxArea = Math.max(maxArea, area);
                }
            }
        }
        return maxArea;
    }

    public static double dist(int[] p1, int[] p2) {
        return Math.sqrt((p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]));
    }
}