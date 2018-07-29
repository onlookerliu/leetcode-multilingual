func solveSudoku(board [][]byte) {
	if !fill(board, '1', 0) {
		panic("此题无解")
	}
}

func fill(board [][]byte, n byte, block int) bool {
	if block == 9 {
		return true
	}

	if n == '9'+1 {
		return fill(board, '1', block+1)
	}

	rowBegin := (block / 3) * 3
	colBegin := (block % 3) * 3

	for r := rowBegin; r < rowBegin+3; r++ {
		for c := colBegin; c < colBegin+3; c++ {
			if board[r][c] == n {
				return fill(board, n+1, block)
			}
		}
	}

	isAvailable := func(r int, c int) bool {
		if board[r][c] != '.' {
			return false
		}

		for i := 0; i < 9; i++ {
			if board[r][i] == n || board[i][c] == n {
				return false
			}
		}

		return true
	}

	for r := rowBegin; r < rowBegin+3; r++ {
		for c := colBegin; c < colBegin+3; c++ {
			if isAvailable(r, c) {
				board[r][c] = n
				if fill(board, n+1, block) {
					return true
				}

				board[r][c] = '.'
			}
		}
	}

	return false
}