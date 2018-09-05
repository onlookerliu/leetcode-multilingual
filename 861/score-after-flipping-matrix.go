package main

import "fmt"

func matrixScore(A [][]int) int {
	m, n := len(A), len(A[0])

	toggleRow := func(i int) {
		for j := 0; j < n; j++ {
			A[i][j] ^= 1
		}
	}

	countCol := func(j int) int {
		c := 0
		for i := 0; i < m; i++ {
			c += A[i][j]
		}
		return c
	}

	for i := 0; i < m; i++ {
		if A[i][0] == 0 {
			toggleRow(i)
		}
	}

	res := m

	for j := 1; j < n; j++ {
		c := countCol(j)
		if 2*c < m {
			c = m - c
		}
		res = res*2 + c
	}

	return res
}

func main() {
	// [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
	A := [][]int{
		{0, 0, 1, 1},
		{1, 0, 1, 0},
		{1, 1, 0, 0},
	}
	fmt.Println(matrixScore(A))
}
