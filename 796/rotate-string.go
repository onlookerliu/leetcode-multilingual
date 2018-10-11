package main

import (
	"fmt"
	"strings"
)

func rotateString(A string, B string) bool {
	if len(A) == 0 && len(B) == 0 {
		return true
	}
	arr := make([]string, len(A))
	for i, ch := range A {
		arr[i] = string(ch)
	}
	for i := 0; i < len(A); i++ {
		arr = rotate(arr)
		if strings.Join(arr, "") == B {
			return true
		}
	}
	return false
}

func rotate(arr []string) []string {
	arr = append(arr, arr[0])
	return arr[1:]
}

func main() {
	A := "abcde"
	B := "cdeab"
	fmt.Println(rotateString(A, B))
}
