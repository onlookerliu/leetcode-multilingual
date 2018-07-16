package main

import (
	"fmt"
	"strings"
)

func inRow(rows [][]string, index int, word string) bool {
	row := rows[index]
	word = strings.ToLower(word)
	chars := strings.Split(word, "")
	for _, char := range chars {
		if !contains(row, char) {
			return false
		}
	}
	return true
}

func contains(list []string, str string) bool {
	for _, elem := range list {
		if str == elem {
			return true
		}
	}
	return false
}

func inOneRow(rows [][]string, word string) bool {
	return inRow(rows, 0, word) || inRow(rows, 1, word) || inRow(rows, 2, word)
}

func findWords(words []string) []string {

	var keyboard [][]string
	keyboard = append(keyboard, []string{"q", "w", "e", "r", "t", "y", "u", "i", "o", "p"})
	keyboard = append(keyboard, []string{"a", "s", "d", "f", "g", "h", "j", "k", "l"})
	keyboard = append(keyboard, []string{"z", "x", "c", "v", "b", "n", "m"})

	var res []string
	for _, word := range words {
		if inOneRow(keyboard, word) {
			res = append(res, word)
		}
	}

	return res
}

func main() {
	words := []string{"Hello", "Alaska", "Dad", "Peace"}
	fmt.Println(findWords(words))
}
