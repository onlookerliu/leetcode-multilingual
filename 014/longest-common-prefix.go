package main

import "fmt"

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	var loop func(int) int
	loop = func(i int) int {
		if i == len(strs[0]) {
			return i
		}

		c := strs[0][i]
		for _, str := range strs {
			if len(str) == i || str[i] != c {
				return i
			}
		}

		return loop(i + 1)
	}

	longestCommonPrefixLength := loop(0)
	return strs[0][0:longestCommonPrefixLength]
}

func main() {
	strs := []string{"flower", "flow", "flight"}
	fmt.Println(longestCommonPrefix(strs))
}
