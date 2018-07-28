package main

import (
	"fmt"
	"sort"
)

func permuteUnique(nums []int) [][]int {
	sort.Ints(nums)

	n := len(nums)

	out := make([]int, n)
	visited := make([]bool, n)
	var res [][]int
	var dfs func([]int, int, []bool, []int, *[][]int)
	dfs = func(nums []int, level int, visited []bool, out []int, res *[][]int) {
		if level == n {
			temp := make([]int, n)
			copy(temp, out)
			*res = append(*res, temp)
			return
		} else {
			for i := 0; i < n; i++ {
				if !visited[i] {
					if i > 0 && nums[i] == nums[i-1] && !visited[i-1] {
						continue
					}
					visited[i] = true
					out[level] = nums[i]
					dfs(nums, level+1, visited, out, res)
					visited[i] = false
				}
			}
		}
	}

	dfs(nums, 0, visited, out, &res)
	return res
}

func main() {
	nums := []int{1, 1, 2}
	fmt.Println(permuteUnique(nums))
}
