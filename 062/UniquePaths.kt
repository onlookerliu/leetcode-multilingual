class UniquePaths {

    fun uniquePaths(m: Int, n: Int): Int {
        if (m == 1 || n == 1) {
            return 1
        }

        // Init the elements of the 2d matrix with 1s
        val matrix = Array(m) { IntArray(n, { 1 }) }
        for (i in 1 until m) {
            for (j in 1 until n) {
                matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1]
            }
        }

        return matrix[m - 1][n - 1]
    }

}