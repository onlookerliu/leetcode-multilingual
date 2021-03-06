package main

import "fmt"

func nthSuperUglyNumber(n int, primes []int) int {
	if n == 1 {
		return 1
	}

	pos := make([]int, len(primes))
	candidates := make([]int, len(primes))
	copy(candidates, primes)

	res := make([]int, n)

	res[0] = 1

	for i := 1; i < n; i++ {
		res[i] = min(candidates)
		for j := 0; j < len(primes); j++ {
			if res[i] == candidates[j] {
				pos[j]++
				candidates[j] = res[pos[j]] * primes[j]
			}
		}
	}

	return res[n-1]
}

func min(candidates []int) int {
	min := candidates[0]
	for i := 1; i < len(candidates); i++ {
		if min > candidates[i] {
			min = candidates[i]
		}
	}
	return min
}

func main() {
	n := 12
	primes := []int{2, 7, 13, 19}
	fmt.Println(nthSuperUglyNumber(n, primes))
}
