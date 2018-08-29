package main

import "fmt"

func longestIncreasingPath(mat [][]int) int {
	if len(mat) == 0 || len(mat[0]) == 0 {
		return 0
	}

	m, n := len(mat), len(mat[0])

	path := make([][]int, m)
	for i := range path {
		path[i] = make([]int, n)
	}

	res := 0
	dx := []int{-1, 1, 0, 0}
	dy := []int{0, 0, -1, 1}

	var dfs func(int, int) int
	dfs = func(x int, y int) int {
		if path[x][y] > 0 {
			return path[x][y]
		}

		path[x][y] = 1

		for i := 0; i < 4; i++ {
			nx := x + dx[i]
			ny := y + dy[i]
			if 0 <= nx && nx < m && 0 <= ny && ny < n && mat[x][y] < mat[nx][ny] {
				path[x][y] = max(path[x][y], dfs(nx, ny)+1)
			}
		}

		return path[x][y]
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			res = max(res, dfs(i, j))
		}
	}

	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	mat := [][]int{
		{9, 9, 4},
		{6, 6, 8},
		{2, 1, 1},
	}
	fmt.Println(longestIncreasingPath(mat))
}
