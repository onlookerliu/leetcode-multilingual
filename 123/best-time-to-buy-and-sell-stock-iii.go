package main

import "fmt"

func maxProfit(prices []int) int {
	buy1, buy2 := -(1 << 32), -(1 << 32)
	sell1, sell2 := 0, 0
	for _, price := range prices {
		if buy1 < -price {
			buy1 = -price
		}
		if sell1 < buy1+price {
			sell1 = buy1 + price
		}
		if buy2 < sell1-price {
			buy2 = sell1 - price
		}
		if sell2 < buy2+price {
			sell2 = buy2 + price
		}
	}
	return sell2
}

func main() {
	prices := []int{3, 3, 5, 0, 0, 3, 1, 4}
	fmt.Println(maxProfit(prices))
}
