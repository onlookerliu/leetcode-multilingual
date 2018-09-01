package main

import "fmt"

func poorPigs(buckets int, minutesToDie int, minutesToTest int) int {
	base := minutesToTest/minutesToDie + 1
	power := 1
	res := 0

	for power < buckets {
		power *= base
		res++
	}

	return res
}

func main() {
	buckets := 1000
	minutesToDie := 15
	minutesToTest := 60
	fmt.Println(poorPigs(buckets, minutesToDie, minutesToTest))
}
