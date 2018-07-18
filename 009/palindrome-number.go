package main

import "fmt"

func isPalindrome(x int) bool {
	if x < 10 && x >= 0 {
		return true
	}
	if x%10 == 0 {
		return false
	}

	y := 0
	for x > y {
		y = y*10 + x%10
		x /= 10
	}

	return x == y || x == y/10
}

func main() {
	x := 123
	fmt.Println(isPalindrome(x))
}
