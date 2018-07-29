package main

import (
	"fmt"
	"sort"
)

func combinationSum(candidates []int, target int) [][]int {
	sort.Ints(candidates)

	var res [][]int
	var solution []int

	combinationSumHelper(candidates, solution, target, &res)

	return res
}

func combinationSumHelper(candidates []int, solution []int, target int, result *[][]int) {
	if target == 0 {
		*result = append(*result, solution)
	}

	if len(candidates) == 0 || target < candidates[0] {
		return
	}

	solution = solution[:len(solution):len(solution)]

	combinationSumHelper(candidates, append(solution, candidates[0]), target-candidates[0], result)
	combinationSumHelper(candidates[1:], solution, target, result)
}

func main() {
	candidates, target := []int{2, 3, 6, 7}, 7
	fmt.Println(combinationSum(candidates, target))
}
