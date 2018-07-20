package main

import "fmt"

func canMeasureWater(x int, y int, z int) bool {
	return z == 0 || (x+y >= z && z%gcd(x, y) == 0)
}

func gcd(x int, y int) int {
	if y == 0 {
		return x
	}
	return gcd(y, x%y)
}

func main() {
	fmt.Println(canMeasureWater(3, 5, 4))
}
