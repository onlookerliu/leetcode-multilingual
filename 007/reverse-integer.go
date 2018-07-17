package main

import "fmt"

func reverse(x int) int {
	var (
		y    int
		re   = 0
		maxn = 2147483647
	)
	if x < 0 {
		y = -x
	} else {
		y = x
	}
	for y > 0 {
		if re != 0 && maxn/re < 10 {
			return 0
		}
		re *= 10
		re += y % 10
		y /= 10
	}
	if x < 0 {
		return -re
	}
	return re
}

func main() {
	x := 123
	fmt.Println(reverse(x))
}
