package main

import "fmt"

func summaryRanges(nums []int) []string {
	var res []string

	n := len(nums)
	if n == 0 {
		return res
	}

	begin := nums[0]
	str := ""

	for i := 0; i < n; i++ {
		if i == n-1 || nums[i]+1 != nums[i+1] {
			if nums[i] == begin {
				str = fmt.Sprintf("%d", begin)
			} else {
				str = fmt.Sprintf("%d->%d", begin, nums[i])
			}

			if i+1 < n {
				begin = nums[i+1]
			}

			res = append(res, str)
		}
	}

	return res
}

func main() {
	nums := []int{0, 1, 2, 4, 5, 7}
	fmt.Println(summaryRanges(nums))
}
