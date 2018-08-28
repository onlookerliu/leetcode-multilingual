package main

import "fmt"

func countSmaller(nums []int) []int {
	res := make([]int, len(nums))
	for i := 0; i < len(nums); i++ {
		for j := i + 1; j < len(nums); j++ {
			if nums[j] < nums[i] {
				res[i]++
			}
		}
	}

	return res
}

func main() {
	nums := []int{5, 2, 6, 1}
	fmt.Println(countSmaller(nums))
}
