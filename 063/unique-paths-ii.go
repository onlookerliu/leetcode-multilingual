func uniquePathsWithObstacles(obstacleGrid [][]int) int {
	m, n := len(obstacleGrid), len(obstacleGrid[0])

	if obstacleGrid[0][0] == 1 {
		return 0
	}
	if m == 1 {
		for _, i := range obstacleGrid[0] {
			if i == 1 {
				return 0
			}
		}
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
		if obstacleGrid[i][0] == 1 {
			for j := i; j < m; j++ {
				matrix[i][0] = 0
			}
			break
		} else {
			matrix[i][0] = 1
		}
	}

	for i := 0; i < n; i++ {
		if obstacleGrid[0][i] == 1 {
			for j := i; j < n; j++ {
				matrix[0][i] = 0
			}
			break
		} else {
			matrix[0][i] = 1
		}
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if obstacleGrid[i][j] == 1 {
				matrix[i][j] = 0
			} else {
				matrix[i][j] = matrix[i-1][j] + matrix[i][j-1]
			}
		}
	}

	return matrix[m-1][n-1]
}