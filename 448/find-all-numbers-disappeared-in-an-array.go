package main

import "fmt"

func findDisappearedNumbers(nums []int) []int {
	var res []int
	var hash map[int]bool
	hash = make(map[int]bool)

	for _, num := range nums {
		hash[num] = true
	}

	for i := range nums {
		if !hash[i+1] {
			res = append(res, i+1)
		}
	}

	return res
}

// func findDisappearedNumbers(nums []int) []int {
// 	var res []int
// 	size := len(nums)

// 	for i := 0; i < size; i++ {
// 		if nums[i] != nums[nums[i]-1] {
// 			nums[i], nums[nums[i]-1] = nums[nums[i]-1], nums[i]
// 			i--
// 		}
// 	}

// 	for i := 0; i < size; i++ {
// 		if (i + 1) != nums[i] {
// 			res = append(res, (i + 1))
// 		}
// 	}

// 	return res
// }

func main() {
	nums := []int{4, 3, 2, 7, 8, 2, 3, 1}
	fmt.Println(findDisappearedNumbers(nums))
}
