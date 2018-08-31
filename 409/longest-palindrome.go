package main

import "fmt"

func longestPalindrome(s string) int {
	res := 0
	a := [123]int{}
	for i := range s {
		a[s[i]]++
	}

	// hasOdd indicates that the total count of elements is odd
	hasOdd := 0
	for i := range a {
		if a[i] == 0 {
			continue
		}
		if a[i]&1 == 0 {
			res += a[i]
		} else {
			res += a[i] - 1
			hasOdd = 1
		}
	}

	return res + hasOdd
}

func main() {
	s := "abccccdd"
	fmt.Println(longestPalindrome(s))
}
