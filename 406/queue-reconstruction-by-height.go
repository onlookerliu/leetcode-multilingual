package main

import (
	"fmt"
	"sort"
)

// persons 实现了 sort.Interface 接口
type persons [][]int

func (p persons) Len() int {
	return len(p)
}

// 以 h 的降序为主
// 以 k 的升序为辅
func (p persons) Less(i, j int) bool {
	if p[i][0] == p[j][0] {
		return p[i][1] < p[j][1]
	}
	return p[i][0] > p[j][0]
}

func (p persons) Swap(i, j int) {
	p[i], p[j] = p[j], p[i]
}

func reconstructQueue(people [][]int) [][]int {
	res := make([][]int, 0, len(people))

	sort.Sort(persons(people))

	insert := func(idx int, person []int) {
		res = append(res, person)
		if len(res)-1 == idx {
			return
		}
		copy(res[idx+1:], res[idx:])
		res[idx] = person
	}

	for _, p := range people {
		insert(p[1], p)
	}

	return res
}

func main() {
	// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
	people := [][]int{
		{7, 0},
		{4, 4},
		{7, 1},
		{5, 0},
		{6, 1},
		{5, 2},
	}
	fmt.Println(reconstructQueue(people))
}
