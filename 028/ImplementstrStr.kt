class ImplementstrStr {
    fun strStr(haystack: String, needle: String): Int {
        val n = haystack.length
        val m = needle.length
        if (m > n) return -1
        if (m == 0) return 0
        for (i in 0..n-m) {
            var tag = true
            var a = 0
            var b = i
            while (a < m) {
                if (haystack[b++] != needle[a++]) {
                    tag = false
                    break
                }
            }
            if (tag) return i
        }
        return -1
    }
}

fun main(args: Array<String>) {
    val haystack = "hello"
    val needle = "ll"
    println(ImplementstrStr().strStr(haystack, needle))
}