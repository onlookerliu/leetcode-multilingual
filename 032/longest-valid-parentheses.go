package main

import "fmt"

func longestValidParentheses(s string) int {
	var left, max, temp int
	record := make([]int, len(s))

	// 记录每个符号的状态，左括号记为0，如果能和前面的左括号配对，就记录为2，其余均为0
	for i, b := range s {
		if b == '(' {
			left++
		} else if left > 0 {
			left--
			record[i] = 2
		}
	}

	// 检查record，将正确配对的状态记为1
	for i := 0; i < len(record); i++ {
		if record[i] == 2 {
			j := i - 1
			for record[j] != 0 {
				j--
			}
			record[i], record[j] = 1, 1
		}
	}

	// 统计连续的最长1的个数
	for _, r := range record {
		if r == 0 {
			temp = 0
			continue
		}

		temp++
		if temp > max {
			max = temp
		}
	}

	return max
}

func main() {
	s := ")()())"
	fmt.Println(longestValidParentheses(s))
}
