class SearchA2DMatrix {

    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        if (matrix.isEmpty() || matrix[0].isEmpty()) {
            return false
        }

        for (i in 0 until matrix.size - 1) {
            if (matrix[i][0] == target || matrix[i + 1][0] == target) {
                return true
            } else if (matrix[i][0] < target && matrix[i + 1][0] > target) {
                return matrix[i].binarySearch(target) >= 0
            }
        }

        return matrix[matrix.size - 1].binarySearch(target) >= 0
    }

}