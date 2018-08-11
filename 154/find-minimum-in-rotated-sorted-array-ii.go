package main

import (
	"fmt"
)

func findMin(a []int) int {
	length := len(a)

	if a[0] < a[length-1] {
		return a[0]
	}

	i, j := 0, length-1
	for i < j {
		if a[i] > a[i+1] {
			return a[i+1]
		}

		if a[j-1] > a[j] {
			return a[j]
		}

		i++
		j--
	}

	return a[i]
}

func main() {
	a := []int{2, 2, 2, 0, 1}
	fmt.Println(findMin(a))
}
