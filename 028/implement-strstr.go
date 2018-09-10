package main

import "fmt"

func strStr(haystack string, needle string) int {
	hLen, nLen := len(haystack), len(needle)
	for i := 0; i <= hLen-nLen; i++ {
		if haystack[i:i+nLen] == needle {
			return i
		}
	}

	return -1
}

func main() {
	haystack := "hello"
	needle := "ll"
	fmt.Println(strStr(haystack, needle))
}
