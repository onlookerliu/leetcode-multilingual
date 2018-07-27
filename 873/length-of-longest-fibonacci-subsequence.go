package main

import "fmt"

func lenLongestFibSubseq(A []int) int {
	size := len(A)
	var hash map[int]int
	hash = make(map[int]int)
	for i, item := range A {
		hash[item] = i
	}

	// dp := make([][]int, size)
	// for i := range dp {
	// 	dp[i] = make([]int, size)
	// }
	// dp := [size][size]int{}
	dp := make([][]int, size)
	for i := 0; i < size; i++ {
		row := make([]int, size)
		for j := 0; j < size; j++ {
			row[j] = 2
		}
		dp[i] = row
		// dp = append(dp, row)
	}

	ans := 0
	for j := 0; j < size; j++ {
		for k := j + 1; k < size; k++ {
			a_i := A[k] - A[j]
			if a_i >= A[j] {
				break
			}
			i, ok := hash[a_i]
			if !ok {
				continue
			}
			dp[j][k] = dp[i][j] + 1
			if dp[j][k] > ans {
				ans = dp[j][k]
			}
		}
	}
	return ans
}

func main() {
	A := []int{1, 2, 3, 4, 5}
	fmt.Println(lenLongestFibSubseq(A))
}
