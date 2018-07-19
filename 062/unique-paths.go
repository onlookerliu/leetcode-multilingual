func uniquePaths(m int, n int) int {
	if m == 1 || n == 1 {
		return 1
	}
	matrix := make([][]int, m)
	for i := range matrix {
		row := make([]int, n)
		for j := range row {
			row[j] = 0
		}
		matrix[i] = row
	}

	for i := 0; i < m; i++ {
		matrix[i][0] = 1
	}
	for i := 0; i < n; i++ {
		matrix[0][i] = 1
	}
	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
		}
	}
	return matrix[m-1][n-1]
}