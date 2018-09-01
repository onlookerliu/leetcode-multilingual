package main

import (
	"fmt"
	"sort"
)

func findContentChildren(g []int, s []int) int {
	sort.Ints(g)
	sort.Ints(s)

	var i, j, res int
	for i < len(g) && j < len(s) {
		if g[i] <= s[j] {
			res++
			i++
		}
		j++
	}

	return res
}

func main() {
	g := []int{1, 2}
	s := []int{1, 2, 3}
	fmt.Println(findContentChildren(g, s))
}
