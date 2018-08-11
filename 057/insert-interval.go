package main

import "fmt"

type Interval struct {
	Start int
	End   int
}

func insert(a []Interval, newItv Interval) []Interval {
	lenA := len(a)

	if lenA == 0 {
		return []Interval{newItv}
	}

	if newItv.End < a[0].Start {
		return append([]Interval{newItv}, a...)
	}

	if a[lenA-1].End < newItv.Start {
		return append(a, newItv)
	}

	res := make([]Interval, 0, len(a))

	for i := range a {
		if isOverlap(a[i], newItv) {
			newItv = merge(a[i], newItv)

			if i == lenA-1 {
				res = append(res, newItv)
			}

			continue
		}

		if a[i].End < newItv.Start {
			res = append(res, a[i])
			continue
		}

		if newItv.End < a[i].Start {
			res = append(res, newItv)
			res = append(res, a[i:]...)
			break
		}
	}

	return res
}

func isOverlap(a Interval, b Interval) bool {
	return (a.Start <= b.Start && b.Start <= a.End) || (a.Start <= b.End && b.End <= a.End) || (b.Start <= a.Start && a.Start <= b.End)
}

func merge(a Interval, b Interval) Interval {
	return Interval{
		Start: min(a.Start, b.Start),
		End:   max(a.End, b.End),
	}
}

func min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	a := []Interval{
		Interval{1, 3},
		Interval{6, 9},
	}
	newItv := Interval{2, 5}
	fmt.Println(insert(a, newItv))
}
