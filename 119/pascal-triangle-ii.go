package main

import "fmt"

func getRow(rowIndex int) []int {
	res := make([]int, rowIndex+1)

	for i := 0; i <= rowIndex; i++ {
		if i == 0 {
			res[0] = 1
			continue
		}
		for j := rowIndex; j > 0; j-- {
			res[j] += res[j-1]
		}
	}

	return res
}

func main() {
	rowIndex := 3
	fmt.Println(getRow(rowIndex))
}
