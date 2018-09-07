object Solution {
    def longestPalindrome(s: String): String = {
        if (s.length < 2) {
            return s
        }

        var (i, start, maxLen) = (0, 0, 1)
        while (i < s.length && s.length - i > maxLen / 2) {
            var (left, right) = (i, i)
            while (right < s.length - 1 && s(right+1) == s(right)) {
                right += 1
            }

            i = right + 1
            
            while (right < s.length - 1 && left > 0 && s(right+1) == s(left-1)) {
                right += 1
                left -= 1
            }

            val newLen = right + 1 - left
            if (newLen > maxLen) {
                maxLen = newLen
                start = left
            }
        }

        return s.slice(start, start+maxLen)
    }

    def main(args: Array[String]): Unit = {
        val s = "babad"
        println(longestPalindrome(s))
    }
}