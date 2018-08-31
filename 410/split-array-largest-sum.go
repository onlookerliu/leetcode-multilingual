package main

import "fmt"

func splitArray(nums []int, m int) int {
	var l, r, limit int
	for _, n := range nums {
		r += n
		if l < n {
			l = n
		}
	}
	r++

	var minGroups func([]int, int) int
	minGroups = func(nums []int, limit int) int {
		sum := 0
		groups := 1
		for _, num := range nums {
			if sum+num > limit {
				sum = num
				groups++
			} else {
				sum += num
			}
		}
		return groups
	}

	for l < r {
		limit = (r-l)/2 + l
		if minGroups(nums, limit) > m {
			l = limit + 1
		} else {
			r = limit
		}
	}
	return l
}

func main() {
	nums := []int{7, 2, 5, 10, 8}
	m := 2
	fmt.Println(splitArray(nums, m))
}
