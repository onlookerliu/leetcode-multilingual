class ZigZagConversion {
    fun convert(s: String, numRows: Int): String {
        if (numRows == 1) {
            return s
        }

        val x = 2 * numRows - 2
        val sbs = arrayOfNulls<StringBuilder>(numRows)
        for (i in 0 until numRows) {
            sbs[i] = StringBuilder()
        }

        var isFront = true
        run {
            var i = 0
            var j = 0
            while (i < s.length) {
                if (i % x == 0) {
                    isFront = true
                } else if (i % x == numRows - 1) {
                    isFront = false
                }
                sbs[if (isFront) j++ else j--]?.append(s[i])
                i++
            }
        }

        val sb = StringBuilder()
        for (i in 0 until numRows) {
            sb.append(sbs[i])
        }
        return sb.toString()
    }
}