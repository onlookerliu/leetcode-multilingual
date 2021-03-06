package main

import "fmt"

func searchInsert(nums []int, target int) int {
	i := 0

	for i < len(nums) && nums[i] <= target {
		if nums[i] == target {
			return i
		}
		i++
	}

	return i
}

func main() {
	nums := []int{1, 3, 5, 6}
	target := 5
	fmt.Println(searchInsert(nums, target))
}
