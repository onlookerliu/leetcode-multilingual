/**
 * SearchA2DMatrixII
 */
public class SearchA2DMatrixII {

    public boolean searchMatrix(int[][] matrix, int target) {
        return searchMatrixUtil(matrix, target, matrix.length - 1, 0);
    }

    public boolean searchMatrixUtil(int[][] matrix, int target, int x, int y) {
        if (matrix.length == 0 || matrix[0].length == 0)
            return false;

        int m = matrix.length;
        int n = matrix[0].length;

        if (x >= 0 && x < m && y >= 0 && y < n) {
            if (matrix[x][y] == target)
                return true;
            else if (matrix[x][y] > target)
                return searchMatrixUtil(matrix, target, x - 1, y);
            else
                return searchMatrixUtil(matrix, target, x, y + 1);
        } else
            return false;
    }

    public static void main(String[] args) {
        int[][] matrix = new int[][]{{-5}};
        int target = -5;
        System.out.println(new SearchA2DMatrixII().searchMatrix(matrix, target));
    }
}