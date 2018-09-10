package main

import (
	"fmt"
	"sort"
)

func fourSum(nums []int, target int) [][]int {
	res := [][]int{}
	sort.Ints(nums)

	for i := 0; i < len(nums)-3; i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		for j := i + 1; j < len(nums)-2; j++ {
			if j > i+1 && nums[j] == nums[j-1] {
				continue
			}

			left, right := j+1, len(nums)-1
			for left < right {
				s := nums[i] + nums[j] + nums[left] + nums[right]
				switch {
				case s < target:
					left++
				case s > target:
					right--
				default:
					res = append(res, []int{nums[i], nums[j], nums[left], nums[right]})
					left, right = next(nums, left, right)
				}
			}
		}
	}

	return res
}

func next(nums []int, left int, right int) (int, int) {
	for left < right {
		switch {
		case nums[left] == nums[left+1]:
			left++
		case nums[right] == nums[right-1]:
			right--
		default:
			left++
			right--
			return left, right
		}
	}
	return left, right
}

func main() {
	nums := []int{1, 0, -1, 0, -2, 2}
	target := 0
	fmt.Println(fourSum(nums, target))
}
