package main

import "fmt"

func removeDuplicates(nums []int) int {
	length := len(nums)

	if length == 0 {
		return 0
	}

	i := 0
	for _, num := range nums {
		if num != nums[i] {
			i++
			nums[i] = num
		}
	}
	return i + 1
}

func main() {
	// nums := []int{1, 1, 2}
	nums := []int{0, 0, 1, 1, 1, 2, 2, 3, 3, 4}
	fmt.Println(removeDuplicates(nums))
	fmt.Println(nums)
}
