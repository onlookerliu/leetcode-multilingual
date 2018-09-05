package main

import "fmt"

func flipgame(fronts []int, backs []int) int {
	size := len(fronts)

	isBoth := make(map[int]bool, size)
	for i := 0; i < size; i++ {
		if fronts[i] == backs[i] {
			isBoth[fronts[i]] = true
		}
	}

	upLimit := 2001

	res := upLimit

	for i := 0; i < size; i++ {
		if !isBoth[fronts[i]] {
			res = min(res, fronts[i])
		}
		if !isBoth[backs[i]] {
			res = min(res, backs[i])
		}
	}

	if res == upLimit {
		return 0
	}
	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	// fronts = [1,2,4,4,7], backs = [1,3,4,1,3]
	fronts := []int{1, 2, 4, 4, 7}
	backs := []int{1, 3, 4, 1, 3}
	fmt.Println(flipgame(fronts, backs))
}
