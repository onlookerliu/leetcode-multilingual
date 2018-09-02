package main

import "fmt"

func projectionArea(grid [][]int) int {
	var top, front, side int
	for i := range grid {
		x, y := 0, 0
		for j := range grid {
			if grid[i][j] != 0 {
				top += 1
			}
			x = max(x, grid[i][j])
			y = max(y, grid[j][i])
		}
		front += x
		side += y
	}
	return top + front + side
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	grid := [][]int{
		{2},
	}
	fmt.Println(projectionArea(grid))
}
