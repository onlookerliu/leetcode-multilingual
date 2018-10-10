package main

import "fmt"

func maxProduct(nums []int) int {
	neg, pos := 1, 1
	res := -(1 << 32)
	var negMul, posMul int
	for _, num := range nums {
		negMul, posMul = neg*num, pos*num
		neg = min(negMul, posMul, 1)
		pos = max(posMul, negMul, 1)
		res = max(negMul, posMul, res)
	}
	return res
}

func max(a, b, c int) int {
	res := a
	if res < b {
		res = b
	}
	if res < c {
		res = c
	}
	return res
}

func min(a, b, c int) int {
	res := a
	if res > b {
		res = b
	}
	if res > c {
		res = c
	}
	return res
}

func main() {
	nums := []int{-2, 0, -1}
	fmt.Println(maxProduct(nums))
}
