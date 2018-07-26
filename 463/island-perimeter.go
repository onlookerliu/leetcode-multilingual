func getPerimeter(grid [][]int, len1, len2, i, j int) (perimeter int) {
	if 0 == i || 0 == grid[i-1][j] {
		perimeter++
	}
	if 0 == j || 0 == grid[i][j-1] {
		perimeter++
	}
	if (len1-1) == i || 0 == grid[i+1][j] {
		perimeter++
	}
	if (len2-1) == j || 0 == grid[i][j+1] {
		perimeter++
	}
	return perimeter
}

func islandPerimeter(grid [][]int) int {
	len1 := len(grid)
	len2 := len(grid[0])

	var perimeter int
	for i := 0; i < len1; i++ {
		for j := 0; j < len2; j++ {
			if 0 == grid[i][j] {
				continue
			}
			peri := getPerimeter(grid, len1, len2, i, j)
			perimeter += peri
		}
	}
	return perimeter
}