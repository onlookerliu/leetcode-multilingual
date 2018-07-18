package main

import "fmt"

func rotate(matrix [][]int) {
	matrixLength := len(matrix)
	// Reverse
	for i := 0; i < matrixLength/2; i++ {
		j := matrixLength - 1 - i
		cache := matrix[i]
		matrix[i] = matrix[j]
		matrix[j] = cache
	}
	// Transpose
	for i := 0; i < matrixLength; i++ {
		for j := i + 1; j < matrixLength; j++ {
			cache := matrix[i][j]
			matrix[i][j] = matrix[j][i]
			matrix[j][i] = cache
		}
	}
}

func main() {
	matrix := [][]int{{1, 2, 3}, {4, 5, 6}, {7, 8, 9}}
	rotate(matrix)
	fmt.Println(matrix)
}
