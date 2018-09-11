package main

import (
	"fmt"
	"strconv"
	"strings"
)

func countAndSay(n int) string {
	var helper func(int) string
	helper = func(n int) string {
		if n == 1 {
			return "1"
		}

		str := helper(n-1) + "$"
		arr := strings.Split(str, "")
		size := len(arr)
		count := 1
		res := ""

		for i := 0; i < size-1; i++ {
			if arr[i] == arr[i+1] {
				count++
			} else {
				res += strconv.Itoa(count) + arr[i]
				count = 1
			}
		}

		return res
	}

	return helper(n)
}

func main() {
	n := 4
	fmt.Println(countAndSay(n))
}
