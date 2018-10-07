package main

import "fmt"

func hasGroupsSizeX(deck []int) bool {
	n := len(deck)
	counts := make(map[int]int, n)
	for _, card := range deck {
		if _, exist := counts[card]; !exist {
			counts[card] = 1
		} else {
			counts[card]++
		}
	}

	for i := 2; i <= n; i++ {
		if n%i != 0 {
			continue
		}
		ok := true
		for _, v := range counts {
			if v%i != 0 {
				ok = false
				break
			}
		}
		if ok {
			return true
		}
	}
	return false
}

func main() {
	deck := []int{1, 2, 3, 4, 4, 3, 2, 1}
	fmt.Println(hasGroupsSizeX(deck))
}
