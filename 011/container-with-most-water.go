func maxArea(height []int) int {
	l, r := 0, len(height)-1
	h, area := 0, 0
	for l < r {
		if height[l] < height[r] {
			h = height[l]
		} else {
			h = height[r]
		}
		if h*(r-l) > area {
			area = h * (r - l)
		}
		for height[l] <= h && l < r {
			l++
		}
		for height[r] <= h && l < r {
			r--
		}
	}
	return area
}