class RotateImage {

    fun rotate(matrix: Array<IntArray>) {
        // Reverse
        for (i in 0 until matrix.size / 2) {
            val j = matrix.size - 1 - i
            val cache = matrix[i]
            matrix[i] = matrix[j]
            matrix[j] = cache
        }
        // Transpose
        for (i in matrix.indices) {
            for (j in i + 1 until matrix.size) {
                val cache = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = cache
            }
        }
    }

}