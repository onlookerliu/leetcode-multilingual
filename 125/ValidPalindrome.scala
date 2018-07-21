object ValidPalindrome {
  def isPalindrome(s: String): Boolean = {
    @annotation.tailrec
    def isPalindrome(low: Int, high: Int): Boolean = {
      if (low >= high) true
      else if (!s(low).isLetterOrDigit)
        isPalindrome(low+1, high)
      else if (!s(high).isLetterOrDigit)
        isPalindrome(low, high-1)
      else if (s(low).toLower != s(high).toLower) false
      else isPalindrome(low+1, high-1)
    }

    isPalindrome(0, s.length-1)
  }

  def main(args: Array[String]): Unit = {
    val s = "A man, a plan, a canal: Panama"
    println(isPalindrome(s))
  }

}
