object NQueens {
    def solveNQueens(n: Int): List[List[String]] = {
        def placeNQueens(k: Int): List[List[String]] = {
            if (k == 0)
                List(List())
            else {
                for {
                    queens <- placeNQueens(k - 1)
                    column <- 0 until n 
                    if isSafe((k - 1, column), queens)
                } yield
                    queens ::: List(("." * n).updated(column, 'Q'))
            }
        }

        def isSafe(queen: (Int, Int), queens: List[String]): Boolean = {
            queens.zipWithIndex.forall(p => !inCheck(queen, p._2, p._1))
        }

        def inCheck(queen: (Int, Int), row: Int, raw: String): Boolean = {
            raw.zipWithIndex.forall(pair => pair._1 == '.' || (queen._2 == pair._2 || (queen._1 - row).abs == (queen._2 - pair._2).abs))
        }
        
        placeNQueens(n)
    }
}