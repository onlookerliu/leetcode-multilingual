package main

import "fmt"

func permute(nums []int) [][]int {
	n := len(nums)
	var res [][]int
	var dfs func([]int, int, *[][]int)
	dfs = func(nums []int, start int, res *[][]int) {
		if start == n {
			temp := make([]int, n)
			copy(temp, nums)
			*res = append(*res, temp)
			return
		} else {
			for i := start; i < n; i++ {
				nums[start], nums[i] = nums[i], nums[start]
				dfs(nums, start+1, res)
				nums[start], nums[i] = nums[i], nums[start]
			}
		}
	}

	dfs(nums, 0, &res)
	return res
}

func main() {
	nums := []int{1, 2, 3}
	fmt.Println(permute(nums))
}
