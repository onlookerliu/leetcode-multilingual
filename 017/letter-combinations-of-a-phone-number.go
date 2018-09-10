package main

import (
	"fmt"
)

func letterCombinations(digits string) []string {
	m := map[byte][]string{
		'2': []string{"a", "b", "c"},
		'3': []string{"d", "e", "f"},
		'4': []string{"g", "h", "i"},
		'5': []string{"j", "k", "l"},
		'6': []string{"m", "n", "o"},
		'7': []string{"p", "q", "r", "s"},
		'8': []string{"t", "u", "v"},
		'9': []string{"w", "x", "y", "z"},
	}

	if digits == "" {
		return nil
	}

	ret := []string{""}

	for i := 0; i < len(digits); i++ {
		temp := []string{}

		for j := 0; j < len(ret); j++ {
			for k := 0; k < len(m[digits[i]]); k++ {
				temp = append(temp, ret[j]+m[digits[i]][k])
			}
		}

		ret = temp
	}
	return ret
}

func main() {
	digits := "23"
	fmt.Println(letterCombinations(digits))
}
