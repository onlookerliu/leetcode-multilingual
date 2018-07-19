object UniquePaths {
  def uniquePaths(m: Int, n: Int): Int = {
    if (m == 1 || n == 1) 1
    else uniquePaths(m-1,n) + uniquePaths(m, n-1)
  }
}

object UniquePaths {
    def uniquePaths(m: Int, n: Int): Int = {
        if (m == 1 || n == 1) 1
        val matrix = Array.ofDim[Int](m,n)
        for (i <- 0 until m) matrix(i)(0) = 1
        for (j <- 0 until n) matrix(0)(j) = 1

        for (i <- 1 until m) {
            for (j <- 1 until n) {
                matrix(i)(j) = matrix(i-1)(j) + matrix(i)(j-1)
            }    
        }
        matrix(m-1)(n-1) // may cause integer overflow with large number eg: m = 30, n = 20
    }
}

