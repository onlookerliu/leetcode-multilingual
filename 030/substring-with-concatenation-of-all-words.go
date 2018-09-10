package main

import "fmt"

func findSubstring(s string, words []string) []int {
	sLen := len(s)
	wsLen := len(words)
	res := make([]int, 0, sLen)
	if sLen == 0 || wsLen == 0 {
		return res
	}

	wLen := len(words[0])
	if sLen < wsLen*wLen {
		return res
	}

	record := make(map[string]int, wsLen)
	for _, word := range words {
		if len(word) != wLen {
			return res
		}
		record[word]++
	}

	for i := 0; i <= sLen-wLen*wsLen; i++ {
		// make a copy of record
		m := make(map[string]int, wsLen)
		for k, v := range record {
			m[k] = v
		}

		k := wsLen
		j := i
		for k > 0 {
			str := s[j : j+wLen]
			count, ok := m[str]
			if !ok || count < 1 {
				break
			}
			m[str] = m[str] - 1
			k--
			j += wLen
		}
		if k == 0 {
			res = append(res, i)
		}
	}
	return res
}

func main() {
	//s := "barfoothefoobarman"
	//words := []string{"foo", "bar"}
	s := ""
	words := []string{}
	fmt.Println(findSubstring(s, words))
}
