package main

import (
	"fmt"
	"strconv"
)

func getHint(secret string, guess string) string {
	var bull, cow int
	var countS, countG [10]int

	size := len(secret)
	for i := 0; i < size; i++ {
		ns := int(secret[i] - '0')
		ng := int(guess[i] - '0')

		if ns == ng {
			bull++
		} else {
			if countG[ns] > 0 {
				cow++
				countG[ns]--
			} else {
				countS[ns]++
			}

			if countS[ng] > 0 {
				cow++
				countS[ng]--
			} else {
				countG[ng]++
			}
		}
	}

	return strconv.Itoa(bull) + "A" + strconv.Itoa(cow) + "B"
}

func main() {
	secret := "1807"
	guess := "7810"
	fmt.Println(getHint(secret, guess))
}
