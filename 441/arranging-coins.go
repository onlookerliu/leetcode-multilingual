func arrangeCoins(n int) int {
	if n == 0 {
		return 0
	} else {
		for k := 1; ; k++ {
			if n >= k*(k+1)/2 && n < (k+1)*(k+2)/2 {
				return k
			}
		}
	}
}