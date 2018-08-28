package main

import "fmt"

func findMinHeightTrees(n int, edges [][]int) []int {
	if n == 1 {
		return []int{0}
	}

	linkNodes := make([][]int, n)
	for i := 0; i < n; i++ {
		linkNodes[i] = make([]int, 0, 5)
	}

	count := make([]int, n)
	for _, e := range edges {
		linkNodes[e[0]] = append(linkNodes[e[0]], e[1])
		linkNodes[e[1]] = append(linkNodes[e[1]], e[0])
		count[e[0]]++
		count[e[1]]++
	}

	var leafs = make([]int, 0, n)
	for i := 0; i < n; i++ {
		if count[i] == 1 {
			leafs = append(leafs, i)
		}
	}

	var nd, leaf int

	for n > 2 {
		newLeafs := make([]int, 0, len(leafs))
		for _, leaf = range leafs {
			n--
			for _, nd = range linkNodes[leaf] {
				count[nd]--
				if count[nd] == 1 {
					newLeafs = append(newLeafs, nd)
				}
			}
		}
		leafs = newLeafs
	}

	var res = make([]int, 0, len(leafs))
	for _, v := range leafs {
		res = append(res, v)
	}

	return res
}

func main() {
	n := 4
	edges := [][]int{
		{1, 0},
		{1, 2},
		{1, 3},
	}
	fmt.Println(findMinHeightTrees(n, edges))
}
