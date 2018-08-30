package main

import "fmt"

func increasingTriplet(a []int) bool {
	max := 1<<63 - 1
	ai, aj := max, max

	for _, ak := range a {
		if ak <= ai {
			ai = ak
		} else if ak <= aj {
			aj = ak
		} else {
			return true
		}
	}

	return false
}

func main() {
	a := []int{1, 2, -10, -8, -6}
	fmt.Println(increasingTriplet(a))
}
