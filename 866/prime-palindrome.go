package main

import (
	"fmt"
	"strconv"
)

func primePalindrome(N int) int {

	isPalindrome := func(N int) bool {
		numStr := strconv.Itoa(N)
		i, j := 0, len(numStr)-1
		for i < j {
			if numStr[i] != numStr[j] {
				return false
			}
			i++
			j--
		}
		return true
	}

	intSqrt := func(x int) int {
		root := x

		for root*root > x {
			root = (root + x/root) / 2
		}

		return root
	}

	isPrime := func(N int) bool {
		if N < 2 {
			return false
		}

		bound := intSqrt(N)

		for i := 2; i <= bound; i++ {
			if N%i == 0 {
				return false
			}
		}
		return true
	}

	for !isPalindrome(N) || !isPrime(N) {
		N++

		if N > 1e1 && N < 1e2 && N != 11 {
			N = 1e2
		}

		if N > 1e3 && N < 1e4 {
			N = 1e4
		}

		if N > 1e5 && N < 1e6 {
			N = 1e6
		}

		if N > 1e7 && N < 1e8 {
			N = 1e8
		}
	}

	return N
}

func main() {
	N := 6
	fmt.Println(primePalindrome(N))
}
