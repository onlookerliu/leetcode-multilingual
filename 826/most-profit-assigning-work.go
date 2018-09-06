package main

import (
	"fmt"
	"sort"
)

func maxProfitAssignment(difficulty []int, profit []int, worker []int) int {
	jobs := make([]job, len(difficulty))
	for i := range difficulty {
		jobs[i] = job{
			d: difficulty[i],
			p: profit[i],
		}
	}

	sort.Slice(jobs, func(i, j int) bool {
		return jobs[i].d < jobs[j].d
	})

	sort.Ints(worker)

	res := 0
	i := 0
	maxp := 0
	for _, ability := range worker {
		for i < len(jobs) && ability >= jobs[i].d {
			maxp = max(maxp, jobs[i].p)
			i++
		}
		res += maxp
	}

	return res
}

type job struct {
	d, p int
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func main() {
	// difficulty = [2,4,6,8,10], profit = [10,20,30,40,50], worker = [4,5,6,7]
	difficulty := []int{2, 4, 6, 8, 10}
	profit := []int{10, 20, 30, 40, 50}
	worker := []int{4, 5, 6, 7}
	fmt.Println(maxProfitAssignment(difficulty, profit, worker))
}
