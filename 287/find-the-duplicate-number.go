package main

import "fmt"

func findDuplicate(a []int) int {
	slow, fast := a[0], a[a[0]]
	for slow != fast {
		slow, fast = a[slow], a[a[fast]]
	}

	slow = 0
	for slow != fast {
		slow, fast = a[slow], a[fast]
	}

	return slow
}

func main() {
	a := []int{1, 3, 4, 2, 2}
	fmt.Println(findDuplicate(a))
}
