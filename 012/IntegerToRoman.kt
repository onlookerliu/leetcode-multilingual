class IntegerToRoman {

    fun intToRoman(num: Int): String {
        var newNum = num
        val sb = StringBuilder()
        val roman = charArrayOf('M', 'D', 'C', 'L', 'X', 'V', 'I')
        val value = intArrayOf(1000, 500, 100, 50, 10, 5, 1)

        var n = 0
        while (n < 7) {
            val x = newNum / value[n]
            when {
                x < 4 -> for (i in 1..x) {
                    sb.append(roman[n])
                }
                x == 4 -> sb.append(roman[n]).append(roman[n - 1])
                x < 9 -> {
                    sb.append(roman[n - 1])
                    for (i in 6..x) {
                        sb.append(roman[n])
                    }
                }
                x == 9 -> sb.append(roman[n]).append(roman[n - 2])
            }
            newNum %= value[n]
            n += 2
        }
        return sb.toString()
    }

}