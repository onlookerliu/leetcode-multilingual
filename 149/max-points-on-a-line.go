package main

import "fmt"

type Point struct {
	X int
	Y int
}

func maxPoints(points []Point) int {
	n := len(points)
	diffMap := make(map[Point]int, n)

	for i := 0; i < n; i++ {
		diffMap[points[i]]++
	}

	size := len(diffMap)

	if size <= 2 {
		return n
	}

	max := 0
	if size < n {
		points = make([]Point, 0, size)
		for p := range diffMap {
			points = append(points, p)
		}
	}

	for i := 0; i < size-1; i++ {
		for j := i + 1; j < size; j++ {
			count := 0
			for k := 0; k < size; k++ {
				if isSameLine(points[i], points[j], points[k]) {
					count += diffMap[points[k]]
				}
			}
			if max < count {
				max = count
			}
		}
	}

	return max
}

func isSameLine(p1, p2, p3 Point) bool {
	return (p3.X-p1.X)*(p2.Y-p1.Y) == (p2.X-p1.X)*(p3.Y-p1.Y)
}

func main() {
	points := []Point{
		Point{1, 1},
		Point{2, 2},
		Point{3, 3},
	}
	fmt.Println(maxPoints(points))
}
