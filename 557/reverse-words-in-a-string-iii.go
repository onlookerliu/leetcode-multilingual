import "strings"

func reverseWord(s string) string {
	runes := []rune(s)
	for from, to := 0, len(runes)-1; from < to; from, to = from+1, to-1 {
		runes[from], runes[to] = runes[to], runes[from]
	}
	return string(runes)
}

func reverseWords(s string) string {
	wordArr := strings.Split(s, " ")
	var res string
	for i, word := range wordArr {
		reversed := reverseWord(word)
		if 0 == i {
			res = res + reversed
		} else {
			res = res + " " + reversed
		}
	}
	return res
}