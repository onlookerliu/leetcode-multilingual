func searchMatrix(matrix [][]int, target int) bool {
	if len(matrix) == 0 || len(matrix[0]) == 0 {
		return false
	}

	for i := 0; i < len(matrix)-1; i++ {
		if matrix[i][0] == target || matrix[i+1][0] == target {
			return true
		} else if matrix[i][0] < target && target <= matrix[i+1][0] {
			return binarySearch(matrix[i], target, 0, len(matrix[0])-1) >= 0
		}
	}
	return binarySearch(matrix[len(matrix)-1], target, 0, len(matrix[0])-1) >= 0
}

func binarySearch(array []int, key int, low int, high int) int {
	for low < high {
		mid := (low + high) / 2
		if array[mid] < key {
			low = mid + 1
		} else {
			high = mid
		}
	}

	if array[low] == key {
		return low
	}
	return -1
}