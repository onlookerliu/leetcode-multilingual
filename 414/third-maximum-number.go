package main

import (
	"fmt"
	"math"
)

func thirdMax(nums []int) int {
	max1, max2, max3 := math.MinInt64, math.MinInt64, math.MinInt64
	for _, n := range nums {
		if n == max1 || n == max2 {
			continue
		}

		switch {
		case max1 < n:
			max3, max2, max1 = max2, max1, n
		case max2 < n:
			max3, max2 = max2, n
		case max3 < n:
			max3 = n
		}
	}

	if max3 == math.MinInt64 {
		return max1
	}

	return max3
}

func main() {
	nums := []int{2, 2, 3, 1}
	fmt.Println(thirdMax(nums))
}
