package main

import "fmt"

func intersect(a1, a2 []int) []int {
	res := []int{}
	m1 := getInts(a1)
	m2 := getInts(a2)

	if len(m1) > len(m2) {
		m1, m2 = m2, m1
	}

	for n := range m1 {
		m1[n] = min(m1[n], m2[n])
	}

	for n, size := range m1 {
		for i := 0; i < size; i++ {
			res = append(res, n)
		}
	}

	return res
}

func getInts(a []int) map[int]int {
	res := make(map[int]int, len(a))

	for i := range a {
		res[a[i]]++
	}

	return res
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	a1 := []int{1, 1, 1, 2, 2, 3}
	a2 := []int{2, 2}
	fmt.Println(intersect(a1, a2))
}
