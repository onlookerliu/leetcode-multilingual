package main

import "fmt"

func findComplement(num int) int {
	tmp := num
	res := 0
	for tmp > 0 {
		res = res*2 + 1
		tmp = tmp >> 1
	}

	return res ^ num
}

func main() {
	num := 5
	fmt.Println(findComplement(num))
}
