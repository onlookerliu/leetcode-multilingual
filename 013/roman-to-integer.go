package main

import "fmt"

func romanToInt(s string) int {
	hash := map[rune]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}

	length := len(s)
	sum := 0
	var curr, next rune
	for i := 0; i < length-1; i++ {
		curr, next = []rune(s)[i], []rune(s)[i+1]
		if hash[curr] < hash[next] {
			sum -= hash[curr]
		} else {
			sum += hash[curr]
		}
	}
	return sum + hash[rune(s[length-1])]
}

func main() {
	s := "LVIII"
	fmt.Println(romanToInt(s))
}
