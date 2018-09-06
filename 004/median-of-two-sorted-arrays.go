package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	m, n := len(nums1), len(nums2)
	total := m + n
	half := total >> 1

	if (total & 1) == 1 {
		return float64(findKth(nums1, m, nums2, n, half+1))
	} else {
		return float64(findKth(nums1, m, nums2, n, half)+findKth(nums1, m, nums2, n, half+1)) / 2
	}
}

func findKth(nums1 []int, m int, nums2 []int, n int, k int) int {
	if m > n {
		return findKth(nums2, n, nums1, m, k)
	}
	if m == 0 {
		return nums2[k-1]
	}
	if k == 1 {
		return min(nums1[0], nums2[0])
	}

	pa := min(k>>1, m)
	pb := k - pa

	if nums1[pa-1] < nums2[pb-1] {
		return findKth(nums1[pa:m], m-pa, nums2, n, k-pa)
	} else if nums1[pa-1] > nums2[pb-1] {
		return findKth(nums1, m, nums2[pb:n], n-pb, k-pb)
	} else {
		return nums1[pa-1]
	}
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	nums1 := []int{1, 2}
	nums2 := []int{3, 4}
	fmt.Println(findMedianSortedArrays(nums1, nums2))
}
