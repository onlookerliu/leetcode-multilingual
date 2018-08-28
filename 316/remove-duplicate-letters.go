package main

import (
	"fmt"
	"strings"
)

func removeDuplicateLetters(s string) string {
	lens := len(s)
	if lens == 0 {
		return ""
	}

	count := [26]int{}
	var ch rune
	for _, ch = range s {
		count[ch-'a']++
	}

	// index of min char
	imc := 0
	for i := range s {
		if s[imc] > s[i] {
			imc = i
		}
		count[s[i]-'a']--
		if count[s[i]-'a'] == 0 {
			break
		}
	}

	return string(s[imc]) + removeDuplicateLetters(strings.Replace(s[imc+1:], string(s[imc]), "", -1))
}

func main() {
	s := "bcabc"
	fmt.Println(removeDuplicateLetters(s))
}
