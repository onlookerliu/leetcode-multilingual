package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	res := [][]int{}

	for i := range nums {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		left, right := i+1, len(nums)-1
		target := -nums[i]
		for left < right {
			sum := nums[left] + nums[right]
			if sum > target {
				right--
			} else if sum < target {
				left++
			} else {
				res = append(res, []int{nums[i], nums[left], nums[right]})
				// for nums[left] == nums[left+1] {
				// 	left++
				// }
				// left++
				// for nums[right] == nums[right-1] {
				// 	right--
				// }
				// right--
				left, right = next(nums, left, right)
			}
			// switch {
			// case s < 0:
			// 	left++
			// case s > 0:
			// 	right--
			// default:
			// 	res = append(res, []int{nums[i], nums[left], nums[right]})
			// 	for nums[left] == nums[left+1] {
			// 		left++
			// 	}
			// 	left++
			// 	for nums[right] == nums[right-1] {
			// 		right--
			// 	}
			// 	right--
			// }
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
	nums := []int{0, 0, 0}
	// nums := []int{-1, 0, 1, 2, -1, -4}
	fmt.Println(threeSum(nums))
}
