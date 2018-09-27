class CountAndSay {
    fun countAndSay(n: Int): String {
        if (n == 1) {
            return "1"
        }
        var s = "1"
        val sb = StringBuilder()
        for (k in 0 until n - 1) {
            var pre = s[0] - '0'
            var i = 1
            var j = 1
            val count = s.length
            while (j < count) {
                val c = s[j] - '0'
                if (c == pre) {
                    i++
                } else {
                    sb.append(i).append(pre)
                    i = 1
                }
                pre = c
                j++
            }
            s = sb.append(i).append(pre).toString()
            sb.delete(0, sb.length)
        }
        return s
    }
}

fun main(args: Array<String>) {
    val n = 5
    println(CountAndSay().countAndSay(n))
}