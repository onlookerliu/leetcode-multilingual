package main

import "fmt"

func canPlaceFlowers(bed []int, n int) bool {
	l := len(bed)
	for i := 0; i < l; i++ {
		if bed[i] == 0 &&
			((i+1 < l && bed[i+1] == 0) || i+1 >= l) &&
			((i-1 >= 0 && bed[i-1] == 0) || i-1 < 0) {
			bed[i] = 1
			n--
			if n <= 0 {
				return true
			}
		}
	}

	return n <= 0
}

func main() {
	// flowerbed = [1,0,0,0,1], n = 2
	bed := []int{1, 0, 0, 0, 1}
	n := 2
	fmt.Println(canPlaceFlowers(bed, n))
}
