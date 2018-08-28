package main

import "fmt"

func removeInvalidParentheses(s string) []string {
	res := []string{}
	return dfs(s, "()", 0, 0, res)
}

func dfs(s, pair string, first, last int, res []string) []string {
	var i, j, count int
	var temp string

	for j = last; j < len(s); j++ {
		if s[j] == pair[0] {
			count++
		} else if s[j] == pair[1] {
			count--
		}
		if count >= 0 {
			continue
		}

		for i = first; i <= j; i++ {
			if s[i] == pair[1] && (i == first || s[i-1] != pair[1]) {
				temp = s[:i] + s[i+1:]
				res = dfs(temp, pair, i, j, res)
			}
		}

		return res
	}

	reversed := reverse(s)

	if pair == "()" {
		return dfs(reversed, ")(", 0, 0, res)
	}

	return append(res, reversed)
}

func reverse(s string) string {
	buf := []byte(s)
	i, j := 0, len(buf)-1
	for i < j {
		buf[i], buf[j] = buf[j], buf[i]
		i++
		j--
	}

	return string(buf)
}

func main() {
	s := "()())()"
	fmt.Println(removeInvalidParentheses(s))
}
