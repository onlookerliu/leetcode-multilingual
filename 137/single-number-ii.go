package main

import "fmt"

func singleNumber(nums []int) int {
	n := len(nums)
	res := 0

	var i uint
	for ; i < 64; i++ {
		temp := 0
		for j := 0; j < n; j++ {
			temp += nums[j] >> i & 1
		}
		temp %= 3
		res |= temp << i
	}

	return res
}

func main() {
	nums := []int{2, 2, 3, 2}
	fmt.Println(singleNumber(nums))
}
