package main

import (
	"fmt"
	"sort"
)

func maxEnvelopes(e [][]int) int {
	if len(e) <= 1 {
		return len(e)
	}

	sort.Sort(sortedEnvelopes(e))

	var tails []int

	for i := 0; i < len(e); i++ {
		lo, hi := 0, len(tails)
		for lo < hi {
			mid := (lo + hi) / 2
			if e[i][1] <= tails[mid] {
				hi = mid
			} else {
				lo = mid + 1
			}
		}

		if lo == len(tails) {
			tails = append(tails, e[i][1])
		} else {
			tails[lo] = e[i][1]
		}
	}

	return len(tails)
}

type sortedEnvelopes [][]int

func (s sortedEnvelopes) Len() int {
	return len(s)
}

func (s sortedEnvelopes) Less(i, j int) bool {
	if s[i][0] == s[j][0] {
		// 同样宽度时，矮信封排在后面
		return s[i][1] > s[j][1]
	}
	return s[i][0] < s[j][0]
}

func (s sortedEnvelopes) Swap(i, j int) {
	s[i], s[j] = s[j], s[i]
}

func main() {
	// [[5,4],[6,4],[6,7],[2,3]]
	e := [][]int{
		{5, 4},
		{6, 4},
		{6, 7},
		{2, 3},
	}
	fmt.Println(maxEnvelopes(e))
}
