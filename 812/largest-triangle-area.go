package main

import (
	"fmt"
	"math"
)

// func largestTriangleArea(points [][]int) float64 {
//     func triangleArea(x1, y1, x2, y2, x3, y3 int) float64 {
//         return math.Abs(0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)))
//     }

//     size := len(points);
//     maxArea := 0
//     for i := 0; i < size; i++ {
//         for j := i+1; j < size; j++ {
//             for k := j+1; k < size; k++ {
//                 x1, y1 := points[i]
//                 x2, y2 := points[j]
//                 x3, y3 := points[k]
//                 maxArea = math.Max(maxArea, triangleArea(x1, y1, x2, y2, x3, y3))
//             }
//         }
//     }
//     return maxArea
// }

func triangleArea(x1, y1, x2, y2, x3, y3 int) float64 {
	return math.Abs(float64(0.5 * (x1*(y2-y3) + x2*(y3-y1) + x3*(y1-y2))))
}

func main() {
	points := [][]int{
		{0, 0},
		{0, 1},
		{1, 0},
		{0, 2},
		{2, 0},
	}
	// fmt.Println(largestTriangleArea(points))
	fmt.Println(triangleArea(0, 0, 0, 1, 1, 0))
}
