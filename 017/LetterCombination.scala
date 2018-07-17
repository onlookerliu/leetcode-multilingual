object LetterCombination {
    val m = Map('2' -> "abc", '3' -> "def", '4' -> "ghi", '5' -> "jkl", '6' -> "mno", '7' -> "pqrs", '8' -> "tuv", '9' -> "wxyz")

    def letterCombination(digits: String): List[String] = 
        if (digits.isEmpty) Nil
        else {
            digits.foldLeft(List("")) { (ls, digit) => 
                m(digit).flatMap(char => ls.map(_ + char)).toList
            }
        }
    
    def main(args: Array[String]) {
        var digits = "23"
        println (letterCombination(digits))
    }
}