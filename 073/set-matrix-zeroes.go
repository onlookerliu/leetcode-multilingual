package main

import "fmt"

func setZeroes(m [][]int) {
	rows := make([]bool, len(m))
	cols := make([]bool, len(m[0]))

	for i := range m {
		for j := range m[i] {
			if m[i][j] == 0 {
				rows[i] = true
				cols[j] = true
			}
		}
	}

	for i := range rows {
		if rows[i] {
			for j := range m[i] {
				m[i][j] = 0
			}
		}
	}

	for j := range cols {
		if cols[j] {
			for i := range m {
				m[i][j] = 0
			}
		}
	}
}

func main() {
	m := [][]int{
		{1, 1, 1},
		{1, 0, 1},
		{1, 1, 1},
	}
	fmt.Println(m)
	setZeroes(m)
	fmt.Println(m)
}
