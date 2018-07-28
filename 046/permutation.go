package main

import "fmt"

func permute(nums []int) [][]int {
	var res [][]int
	var dfs func([]int, int)
	dfs = func(nums []int, start int) {
		if start >= len(nums) {
			res = append(res, nums[0:])
			return
		}
		for i := start; i < len(nums); i++ {
			nums[i], nums[start] = nums[start], nums[i]
			dfs(nums, start+1)
			nums[i], nums[start] = nums[start], nums[i]
		}
	}
	dfs(nums, 0)
	return res
}

func main() {
	nums := []int{1, 2, 3}
	fmt.Println(permute(nums))
}
