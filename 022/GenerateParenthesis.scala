object GenerateParenthesis {
    def generateParenthesis(n: Int): List[String] = {
        val buffer = new collection.mutable.ListBuffer[String]

        def dfs(left: Int, right: Int, parenthesis: String): Unit = 
            if (left == n)
                buffer += parenthesis + Array.fill(left - right)(')').mkString("")
            else {
                (1 to left - right).foldLeft(parenthesis) { (p, i) =>
                    dfs(left + 1, right + i, p + ')' + '(')
                    p + ')'
                }
                dfs(left + 1, right, parenthesis + '(')
            }

        dfs(0, 0, "")
        buffer.toList
    }

    def main(args: Array[String]) {
        var n = 3
        println(generateParenthesis(3))
    }
}