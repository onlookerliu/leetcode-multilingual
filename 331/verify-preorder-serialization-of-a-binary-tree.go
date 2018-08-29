package main

import (
	"fmt"
	"strings"
)

func isValidSerialization(preorder string) bool {
	parts := strings.Split(preorder, ",")
	s := make([]string, 0, len(parts))
	for _, p := range parts {
		for p == "#" && len(s) > 0 && s[len(s)-1] == "#" {
			s = s[:len(s)-1]
			if len(s) == 0 {
				return false
			}
			s = s[:len(s)-1]
		}
		s = append(s, p)
	}
	return len(s) == 1 && s[0] == "#"
}

func main() {
	preorder := "9,3,4,#,#,1,#,#,2,#,6,#,#"
	fmt.Println(isValidSerialization(preorder))
}
