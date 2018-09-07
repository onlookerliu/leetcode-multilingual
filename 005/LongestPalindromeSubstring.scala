object LongestPalindromeSubstring {
    def longestPalindrome(s: String): String = {
        if (s == null || s.length == 0) {
            return ""
        }
        var maxLen = 0
        var res = ""
        for (i <- 0 to 2*s.length-1) {
            var left: Int = i / 2
            var right: Int = i / 2
            if (i % 2 == 1) right += 1
            val str = searchPalindrome(s, left, right)
            if (str.length > maxLen) {
                maxLen = str.length
                res = str
            }
        }
        return res
    }

    private def searchPalindrome(s: String, _left: Int, _right: Int): String = {
        var left = _left
        var right = _right
        while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
            left -= 1
            right += 1
        }
        return s.substring(left+1, right)
    }

    def main(args: Array[String]): Unit = {
        val s = "babad"
        println(longestPalindrome(s))
    }
}