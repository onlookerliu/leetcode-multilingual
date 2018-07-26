func matrixReshape(nums [][]int, r int, c int) [][]int {
	var chanInt chan int
	chanInt = make(chan int)

	var length int
	go func(len *int) {
		for _, v1 := range nums {
			for _, v := range v1 {
				(*len)++
				chanInt <- v
			}
		}
		for {
			chanInt <- 0
		}
	}(&length)

	var res [][]int
	for i := 0; i < r; i++ {
		var row []int
		for j := 0; j < c; j++ {
			v := <-chanInt
			row = append(row, v)
		}
		res = append(res, row)
	}

	if r*c != length {
		return nums
	}

	return res
}