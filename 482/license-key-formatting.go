package main

import (
	"fmt"
	"strings"
)

func licenseKeyFormatting(s string, k int) string {
	countDashs := strings.Count(s, "-")
	countAN := len(s) - countDashs

	if countAN == 0 {
		return ""
	}

	s = strings.Replace(s, "-", "", -1)
	s = strings.ToUpper(s)

	res := make([]byte, (countAN+k-1)/k-1+countAN)

	i, j := len(res), len(s)
	for 0 <= j-k {
		copy(res[i-k:i], s[j-k:j])

		if 0 <= i-k-1 {
			res[i-k-1] = '-'
		}

		i -= k + 1
		j -= k
	}

	if j > 0 {
		copy(res[:j], s[:j])
	}

	return string(res)
}

func main() {
	s := "5F3Z-2e-9-w"
	k := 4
	fmt.Println(licenseKeyFormatting(s, k))
}
