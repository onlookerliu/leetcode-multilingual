package main

import "fmt"

func maxSlidingWindow(nums []int, k int) []int {
	if k == 0 {
		return nil
	}

	res := make([]int, len(nums)-k+1)
	for i := 0; i+k <= len(nums); i++ {
		res[i] = maxOf(nums[i : i+k])
	}

	return res
}

func maxOf(nums []int) int {
	max := nums[0]
	for i := 1; i < len(nums); i++ {
		if max < nums[i] {
			max = nums[i]
		}
	}

	return max
}

func main() {
	nums := []int{1, 3, -1, -3, 5, 3, 6, 7}
	k := 3
	fmt.Println(maxSlidingWindow(nums, k))
}
