package main

import (
	"fmt"
)

func longestPalindrome(s string) string {
	if len(s) < 2 {
		return s
	}

	begin, maxLen := 0, 1

	for i := 0; i < len(s); {
		if len(s)-i <= maxLen/2 {
			break
		}

		left, right := i, i
		for right < len(s)-1 && s[right+1] == s[right] {
			right++
		}
		i = right + 1

		for right < len(s)-1 && left > 0 && s[right+1] == s[left-1] {
			right++
			left--
		}

		newLen := right + 1 - left
		if newLen > maxLen {
			maxLen = newLen
			begin = left
		}

	}

	return s[begin : begin+maxLen]
}

func main() {
	s := "babad"
	fmt.Println(longestPalindrome(s))
}
