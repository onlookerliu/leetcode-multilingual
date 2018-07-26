import "strconv"

func fizzBuzz(n int) []string {
	var res []string
	for i := 1; i <= n; i++ {
		if 0 == i%15 {
			res = append(res, "FizzBuzz")
		} else if 0 == i%3 {
			res = append(res, "Fizz")
		} else if 0 == i%5 {
			res = append(res, "Buzz")
		} else {
			res = append(res, strconv.Itoa(i))
		}
	}

	return res
}