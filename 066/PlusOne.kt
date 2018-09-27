class PlusOne {
    fun plusOne(digits: IntArray): IntArray {
        var i = digits.size - 1
        while (i >= 0) {
            if (digits[i] < 9) {
                digits[i] += 1
                return digits
            }
            digits[i] = 0
            i--
        }
        val res = IntArray(digits.size + 1)
        res[0] = 1
        return res
    }
}

fun main(args: Array<String>) {
    val digits = intArrayOf(1, 2, 3, 4, 5, 6, 7, 8, 9)
    println(PlusOne().plusOne(digits))
}