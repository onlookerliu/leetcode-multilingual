package main

import "fmt"

func updateMatrix(matrix [][]int) [][]int {
	m, n := len(matrix), len(matrix[0])
	MIN := m * n

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if matrix[i][j] == 0 {
				continue
			}

			matrix[i][j] = MIN

			if 0 <= i-1 {
				matrix[i][j] = min(matrix[i][j], matrix[i-1][j]+1)
			}

			if 0 <= j-1 {
				matrix[i][j] = min(matrix[i][j], matrix[i][j-1]+1)
			}
		}
	}

	for i := m - 1; 0 <= i; i-- {
		for j := n - 1; 0 <= j; j-- {
			if matrix[i][j] == 0 {
				continue
			}

			if i+1 < m {
				matrix[i][j] = min(matrix[i][j], matrix[i+1][j]+1)
			}
			if j+1 < n {
				matrix[i][j] = min(matrix[i][j], matrix[i][j+1]+1)
			}
		}
	}

	return matrix
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	// 0 0 0
	// 0 1 0
	// 1 1 1
	matrix := [][]int{
		{0, 0, 0},
		{0, 1, 0},
		{1, 1, 1},
	}
	fmt.Println(updateMatrix(matrix))
}
