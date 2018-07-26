func hammingWeight(z int) (w int) {
	for z > 0 {
		tmp := z % 2
		if 1 == tmp {
			w++
		}
		z = z / 2
	}
	return w
}

func hammingDistance(x int, y int) int {
	z := x ^ y
	return hammingWeight(z)
}
