package main

import "fmt"

var lo, up int
var tmp []int

func countRangeSum(nums []int, lower int, upper int) int {
	size := len(nums)
	if size == 0 {
		return 0
	}

	// sum[i] = sum(nums[:i])
	// sum[j] - sum[i] = sum(nums[i:j])
	sum := make([]int, size+1)
	for i, n := range nums {
		sum[i+1] = sum[i] + n
	}

	lo = lower
	up = upper
	tmp = make([]int, len(sum))

	return mergeSort(sum)
}

func mergeSort(nums []int) int {
	size := len(nums)
	if size == 1 {
		return 0
	}

	mid := size / 2
	left := nums[:mid]
	right := nums[mid:]

	count := mergeSort(left) + mergeSort(right)

	i := 0
	j := 0

	cl := 0
	cr := 0

	for i < len(left) && j < len(right) {
		if left[i] < right[j] {
			tmp[i+j] = left[i]

			for cl < len(right) && right[cl]-left[i] < lo {
				cl++
			}
			for cr < len(right) && right[cr]-left[i] <= up {
				cr++
			}

			count += cr - cl
			i++
		} else {
			tmp[i+j] = right[j]
			j++
		}
	}

	if i == len(left) {
		copy(tmp[i+j:], right[j:])
	} else {
		copy(tmp[i+j:], left[i:])

		for i < len(left) {
			for cl < len(right) && right[cl]-left[i] < lo {
				cl++
			}
			for cr < len(right) && right[cr]-left[i] <= up {
				cr++
			}
			count += cr - cl
			i++
		}
	}

	copy(nums, tmp)

	return count
}

func main() {
	nums := []int{-2, 5, -1}
	lower := -2
	upper := 2
	fmt.Println(countRangeSum(nums, lower, upper))
}
