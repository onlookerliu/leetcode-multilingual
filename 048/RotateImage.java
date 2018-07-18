public class RotateImage {

    public void rotate(int[][] matrix) {
        // Reverse
        for (int i = 0; i < matrix.length / 2; i++) {
            int j = matrix.length - 1 - i;
            int[] cache = matrix[i];
            matrix[i] = matrix[j];
            matrix[j] = cache;
        }
        // Transpose
        for (int i = 0; i < matrix.length; i++) {
            for (int j = i + 1; j < matrix.length; j++) {
                int cache = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = cache;
            }
        }
    }

    public static void main(String[] args) {
        int[][] matrix = {{1,2,3}, {4,5,6}, {7,8,9}};
        new RotateImage().rotate(matrix);
    }

}