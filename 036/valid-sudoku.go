package main

import "fmt"

func isValidSudoku(board [][]byte) bool {
	if len(board) == 0 || len(board[0]) == 0 {
		return false
	}
	m, n := len(board), len(board[0])

	rowFlag := make([][]bool, m)
	for i := 0; i < m; i++ {
		rowFlag[i] = make([]bool, n)
	}

	colFlag := make([][]bool, m)
	for i := 0; i < m; i++ {
		colFlag[i] = make([]bool, n)
	}

	cellFlag := make([][]bool, m)
	for i := 0; i < m; i++ {
		cellFlag[i] = make([]bool, n)
	}
	for i := 0; i < m; i++ {
		for j := 0; j < n; j++ {
			c := convertToNumber(board[i][j])
			if c < 0 {
				continue
			}
			if c >= 1 && c <= 9 {
				if rowFlag[i][c-1] || colFlag[c-1][j] || cellFlag[3*(i/3)+(j/3)][c-1] {
					return false
				}
				rowFlag[i][c-1] = true
				colFlag[c-1][j] = true
				cellFlag[3*(i/3)+(j/3)][c-1] = true
			}
		}
	}
	return true
}

func convertToNumber(b byte) int {
	if b == '.' {
		return -1
	}
	return int(b - '0')
}

func main() {
	board := [][]byte{
		{'8', '3', '.', '.', '7', '.', '.', '.', '.'},
		{'6', '.', '.', '1', '9', '5', '.', '.', '.'},
		{'.', '9', '8', '.', '.', '.', '.', '6', '.'},
		{'8', '.', '.', '.', '6', '.', '.', '.', '3'},
		{'4', '.', '.', '8', '.', '3', '.', '.', '1'},
		{'7', '.', '.', '.', '2', '.', '.', '.', '6'},
		{'.', '6', '.', '.', '.', '.', '2', '8', '.'},
		{'.', '.', '.', '4', '1', '9', '.', '.', '5'},
		{'.', '.', '.', '.', '8', '.', '.', '7', '9'},
	}
	fmt.Println(isValidSudoku(board))
}
