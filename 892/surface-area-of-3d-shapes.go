package main

import "fmt"

func surfaceArea(grid [][]int) int {
	m, n := len(grid), len(grid[0])
	var ans int
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			h := grid[i][j]
			if h == 0 {
				continue
			}
			ans += 2 + 4*h
			if i > 0 {
				ans -= 2 * min(h, grid[i-1][j])
			}
			if j > 0 {
				ans -= 2 * min(h, grid[i][j-1])
			}
		}
	}
	return ans
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	grid := [][]int{
		{1, 2},
		{3, 4},
	}
	fmt.Println(surfaceArea(grid))
}
