package main

import (
	"fmt"
	"strconv"
	"strings"
)

func complexNumberMultiply(c1 string, c2 string) string {
	a, b := destructuring(c1)
	c, d := destructuring(c2)

	return fmt.Sprintf("%d+%di", a*c-b*d, a*d+b*c)
}

func destructuring(c string) (int, int) {
	ss := strings.Split(c, "+")
	re, _ := strconv.Atoi(ss[0])
	im, _ := strconv.Atoi(ss[1][:len(ss[1])-1])
	return re, im
}

func main() {
	c1, c2 := "1+1i", "1+1i"
	fmt.Println(complexNumberMultiply(c1, c2))
}
