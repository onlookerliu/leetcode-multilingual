package main

import "fmt"

func search(nums []int, target int) int {
	var index, maxIndex int
	n := len(nums)

	if n == 0 {
		return -1
	}

	// get the maximum index
	for maxIndex+1 < n && nums[maxIndex] < nums[maxIndex+1] {
		maxIndex++
	}

	// do the bisection
	left, right, mid := 0, n-1, 0
	for left <= right {
		mid = (left + right) >> 1

		// right shift `maxIndex` units on the original array
		index = mid + maxIndex + 1
		if index >= n {
			index -= n
		}

		switch {
		case nums[index] > target:
			right = mid - 1
		case nums[index] < target:
			left = mid + 1
		default:
			return index
		}
	}

	return -1
}

func main() {
	nums := []int{4, 5, 6, 7, 0, 1, 2}
	fmt.Println(search(nums, 3))
}
