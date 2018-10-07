object SmallestRangeI {
    def smallestRangeI(A: Array[Int], K: Int): Int = (A.max - A.min - 2*K) max 0

    def main(args: Array[String]) = {
        val A = Array(0, 10)
        val K = 2
        println(smallestRangeI(A, K))
    }
}