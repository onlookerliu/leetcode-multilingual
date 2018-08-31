package main

import "fmt"

func canCross(stones []int) bool {
	n := len(stones)
	if n == 0 || stones[1] != 1 {
		return false
	}

	if n == 1 || n == 2 {
		return true
	}

	last := stones[n-1]

	hs := make(map[int]bool, n)

	for i := 0; i < n; i++ {
		if i > 3 && stones[i] > stones[i-1]*2 {
			return false
		}
		hs[stones[i]] = true
	}

	var dfs func(map[int]bool, int, int) bool
	dfs = func(hs map[int]bool, pos int, jump int) bool {
		if pos+jump-1 == last || pos+jump == last || pos+jump+1 == last {
			return true
		}

		for i := 1; -1 <= i; i-- {
			if jump+i > 0 && hs[pos+jump+i] {
				if dfs(hs, pos+jump+i, jump+i) {
					return true
				}
			}
		}

		return false
	}

	return dfs(hs, 1, 1)
}

func main() {
	stones := []int{0, 1, 3, 5, 6, 8, 12, 17}
	fmt.Println(canCross(stones))
}
