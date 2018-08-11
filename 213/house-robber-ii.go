package main

import "fmt"

func rob(nums []int) int {
	length := len(nums)
	switch length {
	case 0:
		return 0
	case 1:
		return nums[0]
	}

	return max(robbing(nums[1:]), robbing(nums[:length-1]))
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func robbing(nums []int) int {
	var a, b int
	for i, v := range nums {
		if i%2 == 0 {
			a = max(a+v, b)
		} else {
			b = max(a, b+v)
		}
	}

	return max(a, b)
}

func main() {
	nums := []int{1, 2, 3, 1}
	fmt.Println(rob(nums))
}
