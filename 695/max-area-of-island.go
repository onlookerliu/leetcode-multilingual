package main

import "fmt"

func maxAreaOfIsland(grid [][]int) int {
	curArea, maxArea := 0, 0
	m, n := len(grid), len(grid[0])

	var area func([][]int, int, int) int
	area = func(grid [][]int, i int, j int) int {
		if grid[i][j] != 1 {
			return 0
		}
		sum := 1
		grid[i][j] = 2
		if i+1 < m {
			sum += area(grid, i+1, j)
		}
		if i-1 >= 0 {
			sum += area(grid, i-1, j)
		}
		if j+1 < n {
			sum += area(grid, i, j+1)
		}
		if j-1 >= 0 {
			sum += area(grid, i, j-1)
		}
		return sum
	}

	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			if grid[i][j] == 1 {
				curArea = area(grid, i, j)
				if curArea > maxArea {
					maxArea = curArea
				}
			}
		}
	}
	return maxArea
}

func main() {
	grid := [][]int{
		{0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
		{0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0},
		{0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0},
		{0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0},
		{0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0},
	}
	fmt.Println(maxAreaOfIsland(grid))
}
