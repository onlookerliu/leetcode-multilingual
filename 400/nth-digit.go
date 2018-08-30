package main

import "fmt"

func findNthDigit(n int) int {
	// 有 count 这么多个数是 digits 位数
	count, digits := 9, 1
	// num 是最小的 digits 位数
	num := 1
	for n-count*digits > 0 {
		n -= count * digits
		count *= 10
		digits++
		num *= 10
	}

	// index 是 NthDigit 目标数中的索引号
	index := n % digits
	if index == 0 {
		index = digits
	}

	// 让 num 成为拥有 NthDigit 的数
	num += n / digits
	if index == digits {
		num--
	}

	// 找到 NthDigit
	for i := index; i < digits; i++ {
		num /= 10
	}
	return num % 10
}

func main() {
	n := 11
	fmt.Println(findNthDigit(n))
}
