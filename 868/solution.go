package main

import (
	"fmt"
)

func binaryGap(N int) int {
	l := -1
	ans := 0
	for i := 0; i < 31; i++ {
		if N&(1<<uint(i)) != 0 {
			if l >= 0 {
				ans = max(ans, i-l)
			}
			l = i
		}
	}

	return ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	N := 22
	fmt.Println(binaryGap(N))
}
