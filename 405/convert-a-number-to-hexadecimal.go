package main

import "fmt"

func toHex(num int) string {
	var h = []string{
		"0",
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
	}

	if num == 0 {
		return "0"
	}

	hex := ""
	for i := 0; i < 8 && num != 0; i++ {
		hex = h[num&15] + hex
		num >>= 4
	}

	return hex
}

func main() {
	num := 26
	fmt.Println(toHex(num))
}
