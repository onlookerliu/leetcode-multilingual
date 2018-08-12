package main

import "fmt"

func productExceptSelf(nums []int) []int {
	l := len(nums)
	left, right := make([]int, l), make([]int, l)

	left[0], right[l-1] = 1, 1
	left[1], right[l-2] = nums[0], nums[l-1]

	for i := 2; i < l; i++ {
		left[i] = nums[i-1] * left[i-1]
		right[l-i-1] = nums[l-i] * right[l-i]
	}

	res := make([]int, l)
	for i := 0; i < l; i++ {
		res[i] = left[i] * right[i]
	}

	return res
}

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(productExceptSelf(nums))
}
