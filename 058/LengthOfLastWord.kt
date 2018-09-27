class LengthOfLastWord {
    fun lengthOfLastWord(s: String): Int {
        var n = s.length - 1
        if (n == -1)
            return 0
        while (n >= 0 && s[n] == ' ')
            n--
        val size = n + 1
        while (n >= 0) {
            if (s[n] == ' ')
                return size - n - 1
            n--
        }
        return size
    }
}

fun main(args: Array<String>) {
    var s = "Hello World"
    println(LengthOfLastWord().lengthOfLastWord(s))
}