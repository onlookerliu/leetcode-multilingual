package main

import (
	"fmt"
	"sort"
)

func findItinerary(tickets [][]string) []string {
	// nexts[k]v: from k to v
	nexts := make(map[string][]string, len(tickets)+1)
	for _, t := range tickets {
		nexts[t[0]] = append(nexts[t[0]], t[1])
	}

	// sort the nexts
	for k := range nexts {
		sort.Strings(nexts[k])
	}

	route := make([]string, 0, len(tickets)+1)

	var visit func(string)
	var next string
	visit = func(airport string) {
		for len(nexts[airport]) > 0 {
			next = nexts[airport][0]
			nexts[airport] = nexts[airport][1:]
			visit(next)
		}
		route = append(route, airport)
	}

	visit("JFK")

	// reverse the route
	i, j := 0, len(route)-1
	for i < j {
		route[i], route[j] = route[j], route[i]
		i++
		j--
	}

	return route

}

func main() {
	tickets := [][]string{
		{"MUC", "LHR"},
		{"JFK", "MUC"},
		{"SFO", "SJC"},
		{"LHR", "SFO"},
	}
	fmt.Println(findItinerary(tickets))
}
