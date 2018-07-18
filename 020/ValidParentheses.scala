object ValidParentheses {
    val m = Map('(' -> ')', '{' -> '}', '[' -> ']')

    def isValid(s: String): Boolean = {
        @annotation.tailrec
        def isValid(i: Int, len: Int, ls: List[Char]): Boolean = 
            if (i == len)
                ls.isEmpty
            else if (s(i) == '(' || s(i) == '{' || s(i) == '[')
                isValid(i + 1, len, s(i) :: ls)
            else if (ls.isEmpty)
                false
            else if (s(i) == m(ls.head))
                isValid(i+1, len, ls.tail)
            else 
                false
        
        isValid(0, s.length, Nil)
    }

    def main(args: Array[String]) {
        var s = "()[]{}"
        println (isValid(s))
    }
}