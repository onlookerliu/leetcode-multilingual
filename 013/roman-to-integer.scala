object Solution {
    val m = Map('I' -> 1, 'V' -> 5, 'X' -> 10, 'L' -> 50, 'C' -> 100, 'D' -> 500, 'M' -> 1000)

    def romanToInt(s: String): Int = {
        (s zip s.tail).foldLeft(0) {
            case ((sum, (ch1, ch2))) =>
                if (m(ch1) < m(ch2))
                    sum - m(ch1)
                else
                    sum + m(ch1)
        } + m(s.last)
    }
}