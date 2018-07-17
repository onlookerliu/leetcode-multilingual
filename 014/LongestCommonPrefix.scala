object LongestCommonPrefix {
    def longestCommonPrefix(strs: Array[String]): String = {
        @annotation.tailrec
        def loop(i: Int): Int = if (i == strs.head.length) i 
        else {
            val c = strs.head(i)
            if (strs.exists { str => 
                str.length == i || str(i) != c
            }) i 
            else loop(i + 1)
        }

        if (strs.isEmpty) ""
        else {
            val longestCommonPrefixLength = loop(0)
            strs.head.substring(0, longestCommonPrefixLength)
        }
    }

    def main(args: Array[String]) {
        var strs = Array("flower", "flow", "flight")
        println (longestCommonPrefix(strs))
    }
}