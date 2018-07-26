func distributeCandies(candies []int) int {
	length := len(candies)
	if length&1 != 0 {
		return 0
	}
	half := length >> 1

	hash := make(map[int]int)

	for _, v := range candies {
		_, ok := hash[v]
		if !ok {
			hash[v] = 1
		} else {
			hash[v]++
		}
	}

	kinds := len(hash)
	if kinds >= half {
		return half
	} else {
		return kinds
	}
}