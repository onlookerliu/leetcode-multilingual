package main

import (
	"fmt"
	"math/rand"
)

func rand10() int {
	t := 50
	for t > 39 {
		t = 7*(rand7()-1) + (rand7() - 1)
		// t 取值范围 [0, 48], 每个数字出现概率是 1/49
	}

	// t 取值范围是 [0, 39], t 出现在这个范围内的概率是 40/49
	// 当 t 为 3, 13, 23, 33 时， t%10 + 1 == 4
	// 返回 4 的概率 = (4 * 1/49) / (40/49) == 1/10
	return t%10 + 1
}

func rand7() int {
	return rand.Intn(7) + 1
}

func main() {
	n := 3
	for i := 0; i < n; i++ {
		fmt.Println(rand10())
	}
}
