package main

import (
	"fmt"
	"sort"
)

func smallestRangeI(A []int, K int) int {
	sort.Ints(A)
	if A[len(A)-1]-A[0]-2*K > 0 {
		return A[len(A)-1] - A[0] - 2*K
	}
	return 0
}

func main() {
	A := []int{0, 10}
	K := 2
	fmt.Println(smallestRangeI(A, K))
}
