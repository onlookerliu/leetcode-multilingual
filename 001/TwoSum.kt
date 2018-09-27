class TwoSum {
    fun twoSum(numbers: IntArray, target: Int): IntArray {
        val res = IntArray(2)
        val map = hashMapOf<Int, Int>()
        for (i in numbers.indices) {
            val idx = map[numbers[i]]
            
            if (idx == null) {
                map.put(target - numbers[i], i)
            } else {
                if (idx < i) {
                    res[0] = idx
                    res[1] = i
                    return res
                }
            }
        }
        return res
    }
}