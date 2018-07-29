package main

import (
	"fmt"
	"sort"
)

func combinationSum2(candidates []int, target int) [][]int {
	sort.Ints(candidates)

	var res [][]int
	var solution []int
	combinationSum2Helper(candidates, target, solution, &res)

	return res
}

func combinationSum2Helper(candidates []int, target int, solution []int, result *[][]int) {
	if target == 0 {
		*result = append(*result, solution)
	}

	if len(candidates) == 0 || target < candidates[0] {
		return
	}

	solution = solution[:len(solution):len(solution)]

	combinationSum2Helper(candidates[1:], target-candidates[0], append(solution, candidates[0]), result)
	combinationSum2Helper(next(candidates), target, solution, result)
}

func next(candidates []int) []int {
	i := 0
	for i+1 < len(candidates) && candidates[i] == candidates[i+1] {
		i++
	}
	return candidates[i+1:]
}

func main() {
	candidates, target := []int{10, 1, 2, 7, 6, 1, 5}, 8
	fmt.Println(combinationSum2(candidates, target))
}
