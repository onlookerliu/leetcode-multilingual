package main

import "fmt"

func isOneBitCharacter(bits []int) bool {
	n := len(bits)
	i := 0
	for i < n-1 {
		if bits[i] == 1 {
			i += 2
		} else {
			i++
		}
	}
	return i == n-1
}

func main() {
	bits := []int{1, 0, 0}
	fmt.Println(isOneBitCharacter(bits))
}
