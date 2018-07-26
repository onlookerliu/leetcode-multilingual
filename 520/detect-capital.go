import (
	"fmt"
	"strings"
)

func detectCapitalUse(word string) bool {
	upper := strings.ToUpper(word)
	if upper == word {
		return true
	} else {
		lower := strings.ToLower(word)
		if lower == word {
			return true
		}

		lowerRune := []rune(lower)
		fmt.Println(lowerRune)
		wordRune := []rune(word)

		lowerRune[0] = lowerRune[0] + ('A' - 'a')
		lower2 := string(lowerRune)
		word2 := string(wordRune)
		if lower2 == word2 {
			return true
		}
	}
	return false
}