package main

import "fmt"

func getSum(a int, b int) int {
	if b == 0 {
		return a
	} else {
		return getSum(a^b, (a&b)<<1)
	}
}

func main() {
	a := -1
	b := 1

	var getSum func(int, int) int

	getSum = func(a int, b int) int {
		if b == 0 {
			return a
		} else {
			return getSum(a^b, (a&b)<<1)
		}
	}
	fmt.Println(getSum(a, b))
}
