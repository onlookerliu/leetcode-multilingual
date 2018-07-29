package main

import "fmt"

func searchRange(nums []int, target int) []int {
	pickOne := search(nums, target)
	if pickOne == -1 {
		return []int{-1, -1}
	}

	first := pickOne
	for {
		firstCandidate := search(nums[:first], target)
		if firstCandidate == -1 {
			break
		}
		first = firstCandidate
	}

	last := pickOne
	for {
		lastCandidate := search(nums[last+1:], target)
		if lastCandidate == -1 {
			break
		}
		last = lastCandidate
	}

	return []int{first, last}
}

// binart search in sorted array
func search(nums []int, target int) int {
	low, high := 0, len(nums)-1
	var mid int
	for low <= high {
		mid = (low + high) >> 1
		switch {
		case nums[mid] < target:
			low = mid + 1
		case nums[mid] > target:
			high = mid - 1
		default:
			return mid
		}
	}
	return -1
}

func main() {
	nums := []int{5, 7, 7, 8, 8, 10}
	target := 8
	fmt.Println(searchRange(nums, target))
}
