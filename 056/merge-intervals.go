package main

import (
	"fmt"
	"math/rand"
)

type Interval struct {
	Start int
	End   int
}

func merge(its []Interval) []Interval {
	if len(its) <= 1 {
		return its
	}

	quickSort(its)

	res := make([]Interval, 0, len(its))
	temp := its[0]

	for i := 1; i < len(its); i++ {
		if its[i].Start <= temp.End {
			temp.End = max(temp.End, its[i].End)
			continue
		}
		res = append(res, temp)
		temp = its[i]
	}

	res = append(res, temp)
	return res
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func quickSort(is []Interval) {
	if len(is) <= 1 {
		return
	}

	j := rand.Intn(len(is))
	is[0], is[j] = is[j], is[0]
	j = partition(is)
	quickSort(is[0:j])
	quickSort(is[j+1:])
}

func partition(is []Interval) int {
	i, j := 1, len(is)-1
	for {
		for is[i].Start <= is[0].Start && i < len(is)-1 {
			i++
		}
		for is[0].Start <= is[j].Start && j > 0 {
			j--
		}
		if i >= j {
			break
		}
		is[i], is[j] = is[j], is[i]
	}
	is[0], is[j] = is[j], is[0]
	return j
}

func main() {
	input := []Interval{
		Interval{1, 3},
		Interval{2, 6},
		Interval{8, 10},
		Interval{15, 18},
	}
	fmt.Printf("output is %v\n", merge(input))
}
