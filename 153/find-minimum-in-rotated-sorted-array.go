package main

import "fmt"

func findMin(a []int) int {
	length := len(a)
	i := 1
	for i < length && a[i-1] < a[i] {
		i++
	}

	return a[i%length]
}

func main() {
	a := []int{4, 5, 6, 7, 0, 1, 2}
	fmt.Println(findMin(a))
}
