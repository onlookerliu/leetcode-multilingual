package main

import (
	"container/heap"
	"fmt"
)

type MedianFinder struct {
	left  *maxHeap
	right *minHeap
}

func Constructor() MedianFinder {
	left := new(maxHeap)
	heap.Init(left)
	right := new(minHeap)
	heap.Init(right)

	return MedianFinder{
		left:  left,
		right: right,
	}
}

func (mf *MedianFinder) AddNum(n int) {
	if mf.left.Len() == mf.right.Len() {
		heap.Push(mf.left, n)
	} else {
		heap.Push(mf.right, n)
	}

	if mf.right.Len() > 0 && mf.left.intHeap[0] > mf.right.intHeap[0] {
		mf.left.intHeap[0], mf.right.intHeap[0] = mf.right.intHeap[0], mf.left.intHeap[0]
		heap.Fix(mf.left, 0)
		heap.Fix(mf.right, 0)
	}
}

func (mf *MedianFinder) FindMedian() float64 {
	if mf.left.Len() == mf.right.Len() {
		return float64(mf.left.intHeap[0]+mf.right.intHeap[0]) / 2
	}
	return float64(mf.left.intHeap[0])
}

type maxHeap struct {
	intHeap
}

func (h maxHeap) Less(i, j int) bool {
	return h.intHeap[i] > h.intHeap[j]
}

type minHeap struct {
	intHeap
}

type intHeap []int

func (h intHeap) Len() int {
	return len(h)
}

func (h intHeap) Less(i, j int) bool {
	return h[i] < h[j]
}

func (h intHeap) Swap(i, j int) {
	h[i], h[j] = h[j], h[i]
}

func (h *intHeap) Push(x interface{}) {
	*h = append(*h, x.(int))
}

func (h *intHeap) Pop() interface{} {
	res := (*h)[len(*h)-1]
	*h = (*h)[0 : len(*h)-1]
	return res
}

func main() {
	obj := Constructor()
	obj.AddNum(1)
	obj.AddNum(2)
	param_2 := obj.FindMedian()
	fmt.Println(param_2)
}
