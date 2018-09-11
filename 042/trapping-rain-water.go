package main

import "fmt"

func trap(height []int) int {
	size := len(height)
	if size < 2 {
		return 0
	}

	leftMaxHeight, rightMaxHeight := make([]int, size), make([]int, size)
	leftMaxHeight[0], rightMaxHeight[size-1] = height[0], height[size-1]

	for i := 1; i < size; i++ {
		leftMaxHeight[i] = max(leftMaxHeight[i-1], height[i])
		rightMaxHeight[size-1-i] = max(rightMaxHeight[size-i], height[size-1-i])
	}

	water := 0
	for i := 0; i < size; i++ {
		water += min(leftMaxHeight[i], rightMaxHeight[i]) - height[i]
	}

	return water
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	height := []int{0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1}
	fmt.Println(trap(height))
}
