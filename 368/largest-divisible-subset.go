package main

import (
	"fmt"
	"sort"
)

func largestDivisibleSubset(a []int) []int {
	size := len(a)
	if size == 0 {
		return []int{}
	}

	sort.Ints(a)

	// max 是符合题意的 largest subset 的长度
	// largest subset 中最小值是 a[idx]
	max := 1
	idx := 0

	// dp 是 a[i:] 中包含 a[i] 的 largest subset 的长度
	dp := make([]int, size)
	for i := range dp {
		dp[i] = 1
	}

	// next 用来记录符合题意的 largest subset 的元素的索引值
	// largest subset 中 a[i] 的下一个元素是 a[next[i]]
	next := make([]int, size)

	for i := size - 2; 0 <= i; i-- {
		for j := size - 1; i < j; j-- {
			if a[j]%a[i] != 0 {
				continue
			}
			if dp[i] < dp[j]+1 {
				next[i] = j
				dp[i] = dp[j] + 1
			}
			if max < dp[i] {
				max = dp[i]
				idx = i
			}
		}
	}

	res := make([]int, max)
	for i := range res {
		res[i] = a[idx]
		idx = next[idx]
	}

	return res
}

func main() {
	a := []int{1, 2, 3, 4, 8, 9, 12}
	fmt.Println(largestDivisibleSubset(a))
}
