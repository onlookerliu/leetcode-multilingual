package main

import "fmt"

func setZeroes(matrix [][]int) {
	m, n := len(matrix), len(matrix[0])
	rowZero, colZero := false, false

	for i := range matrix {
		if matrix[i][0] == 0 {
			colZero = true
		}
	}

	for i := range matrix[0] {
		if matrix[0][i] == 0 {
			rowZero = true
		}
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if matrix[i][j] == 0 {
				matrix[0][j] = 0
				matrix[i][0] = 0
			}
		}
	}

	for i := 1; i < m; i++ {
		for j := 1; j < n; j++ {
			if matrix[i][0] == 0 || matrix[0][j] == 0 {
				matrix[i][j] = 0
			}
		}
	}

	if rowZero {
		for j := range matrix[0] {
			matrix[0][j] = 0
		}
	}

	if colZero {
		for i := range matrix {
			matrix[i][0] = 0
		}
	}
}

func main() {
	m := [][]int{
		{1, 1, 1},
		{1, 0, 1},
		{1, 1, 1},
	}
	fmt.Println(m)
	setZeroes(m)
	fmt.Println(m)
}
