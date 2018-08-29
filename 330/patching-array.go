package main

import "fmt"

func minPatches(nums []int, n int) int {
	var max, i, count int

	max = 1

	for max <= n {
		if i < len(nums) && nums[i] <= max {
			max += nums[i]
			i++
		} else {
			max <<= 1
			count++
		}
	}

	return count
}

func main() {
	nums := []int{1, 3}
	n := 6
	fmt.Println(minPatches(nums, n))
}
