package main

import "fmt"

func twoSum(nums []int, target int) []int {
	var hash = make(map[int]int)

	for i, size := 0, len(nums); i < size; i++ {
		item := nums[i]
		data, isNil := hash[item]
		if isNil {
			if data < i {
				return []int{data, i}
			}
		} else {
			hash[target-item] = i
		}
	}

	return []int{-1, -1}
}

func main() {
	nums := []int{2, 7, 11, 15}
	target := 9
	fmt.Println(twoSum(nums, target))
}
