import (
	"math/rand"
	"time"
)

type Solution struct {
	M        int
	blackMap map[int]int
}

func Constructor(N int, blacklist []int) Solution {
	rand.Seed(time.Now().UnixNano())
	M := N - len(blacklist)

	blackMap := make(map[int]int, len(blacklist))

	for _, b := range blacklist {
		blackMap[b] = b
	}

	for _, b := range blacklist {
		if b >= M {
			continue
		}

		N--
		for blackMap[N] == N {
			N--
		}

		blackMap[b] = N
	}

	return Solution{
		M:        M,
		blackMap: blackMap,
	}
}

func (s *Solution) Pick() int {
	r := rand.Intn(s.M)
	if t, ok := s.blackMap[r]; ok {
		return t
	}

	return r
}

/**
 * Your Solution object will be instantiated and called as such:
 * obj := Constructor(N, blacklist);
 * param_1 := obj.Pick();
 */