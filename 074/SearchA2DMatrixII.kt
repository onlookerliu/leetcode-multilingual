class SearchA2DMatrixII {

    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        return searchMatrixUtil(matrix, target, matrix.size - 1, 0)
    }

    private fun searchMatrixUtil(matrix: Array<IntArray>, target: Int, x: Int, y: Int): Boolean {
        if (matrix.isEmpty())
            return false

        val m = matrix.size
        val n = matrix[0].size

        return if (x in 0 until m && y in 0 until n) {
            if (matrix[x][y] == target)
                true
            else if (matrix[x][y] > target)
                searchMatrixUtil(matrix, target, x - 1, y)
            else
                searchMatrixUtil(matrix, target, x, y + 1)
        } else
            false
    }
}

fun main(args: Array<String>) {
    val matrix = arrayOf(intArrayOf(-5))
    val target = -5
    println(SearchA2DMatrixII().searchMatrix(matrix, target))
}
