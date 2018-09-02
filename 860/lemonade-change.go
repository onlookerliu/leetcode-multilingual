package main

import (
	"fmt"
)

func lemonadeChange(bills []int) bool {
	var fives, tens int
	for _, bill := range bills {
		if bill == 5 {
			fives++
		} else if bill == 10 {
			if fives == 0 {
				return false
			}
			tens++
			fives--
		} else if bill == 20 {
			if tens > 0 && fives > 0 {
				tens--
				fives--
			} else if fives >= 3 {
				fives -= 3
			} else {
				return false
			}
		}
	}

	return true
}

func main() {
	bills := []int{5, 5, 10, 10, 20}
	fmt.Println(lemonadeChange(bills))
}
