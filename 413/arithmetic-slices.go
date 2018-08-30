package main

import "fmt"

func numberOfArithmeticSlices(a []int) int {
	if len(a) < 3 {
		return 0
	}
	res := 0

	var i, j = 0, 0
	for i < len(a) {
		j = i + 2
		for j < len(a) && a[j]-a[j-1] == a[j-1]-a[j-2] {
			j++
		}
		j--
		res += (j - i - 1) * (j - i) / 2
		i = j
	}

	return res
}

func main() {
	a := []int{1, 2, 3, 4}
	fmt.Println(numberOfArithmeticSlices(a))
}
