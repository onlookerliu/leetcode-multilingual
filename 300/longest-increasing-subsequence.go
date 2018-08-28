package main

import (
	"fmt"
	"sort"
)

func lengthOfLIS(nums []int) int {
	tails := make([]int, 0, len(nums))

	for _, n := range nums {
		at := sort.SearchInts(tails, n)
		if at == len(tails) {
			tails = append(tails, n)
		} else if tails[at] > n {
			tails[at] = n
		}
	}

	return len(tails)
}

func main() {
	nums := []int{10, 9, 2, 5, 3, 7, 101, 18}
	fmt.Println(lengthOfLIS(nums))
}
