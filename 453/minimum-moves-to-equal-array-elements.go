package main

import "fmt"

func minMoves(nums []int) int {
	sum, min := 0, nums[0]
	for _, n := range nums {
		sum += n
		if min > n {
			min = n
		}
	}

	return sum - min*len(nums)
}

func main() {
	nums := []int{1, 2, 3}
	fmt.Println(minMoves(nums))
}
