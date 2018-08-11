package main

import "fmt"

func convertToTitle(n int) string {
	res := ""
	for n > 0 {
		n--
		res = string(byte(n%26)+'A') + res
		n /= 26
	}

	return res
}

func main() {
	n := 701
	fmt.Println(convertToTitle(n))
}
