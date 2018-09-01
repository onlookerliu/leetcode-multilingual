package main

import (
	"fmt"
	"math"
)

func checkPerfectNumber(num int) bool {
	if num == 1 {
		return false
	}

	sum := 1
	bound := int(math.Sqrt(float64(num)))

	for i := 2; i <= bound; i++ {
		if num%i == 0 {
			sum += i + (num / i)
		}
	}

	return sum == num
}

func main() {
	num := 28
	fmt.Println(checkPerfectNumber(num))
}
