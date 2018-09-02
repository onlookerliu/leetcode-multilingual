package main

import (
	"fmt"
	"strconv"
	"strings"
)

func solveEquation(equation string) string {
	a, b := analyze(equation)

	if a == 0 {
		if b == 0 {
			return "Infinite solutions"
		}
		return "No solution"
	}

	return "x=" + strconv.Itoa(b/a)
}

// reduce the equation to a*x = b
func analyze(equation string) (a int, b int) {
	es := strings.Split(equation, "=")
	l, r := es[0], es[1]
	la, lb := sideAnalyze(l)
	ra, rb := sideAnalyze(r)
	return la - ra, rb - lb
}

// reduce a1*x + b1 + a2*x + b2 to a*x + b
func sideAnalyze(s string) (a, b int) {
	s = s[:1] + strings.Replace(s[1:], "-", "+-", -1)
	ss := strings.Split(s, "+")
	for _, n := range ss {
		if n[len(n)-1] == 'x' {
			if n == "x" {
				a++
			} else if n == "-x" {
				a--
			} else {
				t, _ := strconv.Atoi(n[:len(n)-1])
				a += t
			}
		} else {
			t, _ := strconv.Atoi(n)
			b += t
		}
	}
	return
}

func main() {
	equation := "2x+3x-6x=x+2"
	fmt.Println(solveEquation(equation))
}
