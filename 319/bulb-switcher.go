package main

import "fmt"

func bulbSwitch(n int) int {
	return intSqrt(n)
}

func intSqrt(x int) int {
	root := x

	for root*root > x {
		root = (root + x/root) / 2
	}

	return root
}

func main() {
	n := 3
	fmt.Println(bulbSwitch(n))
}
