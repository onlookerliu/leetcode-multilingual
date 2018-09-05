/**
 * // This is the Master's API interface.
 * // You should not implement it, or speculate about its implementation
 * type Master struct {
 * }
 *
 * func (this *Master) Guess(word string) int {}
 */
func findSecretWord(wordList []string, master *Master) {
	matches := 0
	for i := 0; i < 10; i++ {
		count := make(map[string]int, len(wordList))
		for _, w := range wordList {
			for _, b := range wordList {
				count[w] += match(w, b)
			}
		}

		key := ""
		max := 0
		for _, w := range wordList {
			if max < count[w] {
				max = count[w]
				key = w
			}
		}

		matches = master.Guess(key)
		if matches == 6 {
			return
		}

		newList := make([]string, 0, len(wordList))
		for _, w := range wordList {
			if match(key, w) == matches {
				newList = append(newList, w)
			}
		}

		wordList = newList
	}
}

func match(a, b string) int {
	res := 0
	size := len(a)
	for i := 0; i < size; i++ {
		if a[i] == b[i] {
			res++
		}
	}
	return res
}