package main

import "fmt"

func isRectangleOverlap(rec1 []int, rec2 []int) bool {
	h1, v1 := projecting(rec1)
	h2, v2 := projecting(rec2)

	return isLineOverlap(h1, h2) && isLineOverlap(v1, v2)
}

func projecting(rec []int) (h, v []int) {
	h = []int{rec[0], rec[2]}
	v = []int{rec[1], rec[3]}
	return
}

func isLineOverlap(a, b []int) bool {
	return !(a[1] <= b[0] || b[1] <= a[0])
}

func main() {
	// rec1 = [0,0,2,2], rec2 = [1,1,3,3]
	rec1 := []int{0, 0, 2, 2}
	rec2 := []int{1, 1, 3, 3}
	fmt.Println(isRectangleOverlap(rec1, rec2))
}
