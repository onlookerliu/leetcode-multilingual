package main

import "fmt"

func hasGroupsSizeX(deck []int) bool {
	X := len(deck)
	counts := make(map[int]int, X)
	for _, card := range deck {
		if _, exist := counts[card]; !exist {
			counts[card] = 1
		} else {
			counts[card]++
		}
	}

	var gcd func(int, int) int
	gcd = func(a, b int) int {
		if b == 0 {
			return a
		}
		return gcd(b, a%b)
	}

	for _, v := range counts {
		X = gcd(X, v)
	}
	return X >= 2
}

func main() {
	deck := []int{1, 2, 3, 4, 4, 3, 2, 1}
	fmt.Println(hasGroupsSizeX(deck))
}
