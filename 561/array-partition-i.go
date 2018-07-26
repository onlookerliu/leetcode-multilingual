import "sort"

func arrayPairSum(nums []int) (minPairSum int) {
	sort.Ints(nums)

	for k, v := range nums {
		if 0 == k%2 {
			minPairSum += v
		}
	}
	return minPairSum
}