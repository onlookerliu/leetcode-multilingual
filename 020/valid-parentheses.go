package main

import "fmt"

func isValid(s string) bool {
	var stack []int32 = make([]int32, 0, len(s))
	t1, t2, t3 := int32(")"[0]), int32("]"[0]), int32("}"[0])
	for _, c := range s {
		if c == t1 || c == t2 || c == t3 {
			length := len(stack)
			if length == 0 {
				return false
			}
			v := c - stack[length-1]
			if v > 2 || v < 0 {
				return false
			} else {
				stack = append(stack[:(length-1)], stack[length:]...)
			}
		} else {
			stack = append(stack, c)
		}
	}
	return len(stack) == 0
}

func main() {
	s := "([)]"
	fmt.Println(isValid(s))
}
