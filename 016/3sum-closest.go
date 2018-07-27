package main

import (
	"fmt"
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	size := len(nums)
	closest := nums[0] + nums[1] + nums[2]
	diff := abs(closest - target)
	sort.Ints(nums)
	for i := 0; i < size; i++ {
		l, r := i+1, size-1
		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			newDiff := abs(sum - target)
			if diff > newDiff {
				diff = newDiff
				closest = sum
			}
			if sum < target {
				l++
			} else {
				r--
			}
		}
	}
	return closest
}

func abs(num int) int {
	if num < 0 {
		return -num
	}
	return num
}

func main() {
	nums := []int{-1, 2, 1, -4}
	target := 1
	fmt.Println(threeSumClosest(nums, target))
}
