package main

import (
	"fmt"
	"strconv"
)

func compress(chars []byte) int {
	end, count := 0, 1

	for i, char := range chars {
		if i+1 < len(chars) && char == chars[i+1] {
			count++
		} else {
			chars[end] = char
			end++

			if count > 1 {
				for _, num := range strconv.Itoa(count) {
					chars[end] = byte(num)
					end++
				}
			}

			count = 1
		}
	}

	return end
}

func main() {
	// ["a","a","b","b","c","c","c"]
	chars := []byte{'a', 'a', 'b', 'b', 'c', 'c', 'c'}
	fmt.Println(compress(chars))
}
