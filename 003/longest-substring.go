package main

import "fmt"

func lengthOfLongestSubstring(s string) int {
	length := len(s)
	if length < 2 {
		return length
	}

	barrier := 0
	maxLen := 1
	for i := 0; i < length; i++ {
		for j := i - 1; j >= barrier; j-- {
			if s[i] == s[j] {
				barrier = j + 1
				break
			}
		}
		if maxLen < i-barrier+1 {
			maxLen = i - barrier + 1
		}
	}
	return maxLen
}

func main() {
	s := "abcabcbb"
	fmt.Println(lengthOfLongestSubstring(s))
}
